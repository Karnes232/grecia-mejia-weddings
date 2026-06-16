/**
 * One-shot migration: mark cross-document + media references as WEAK.
 *
 * Why: Sanity blocks deleting a document while STRONG references point to it.
 * Strong/weak is stored per-reference (`_weak: true`), so changing the schema to
 * `weak: true` only affects newly-created references — existing seeded references
 * stay strong (and keep blocking deletion) until migrated. This rewrites every
 * reference inside the curatorial content documents to be weak, preserving all
 * content, `_key`s and order. After this, editors can delete any document and
 * the reference simply resolves to null (queries drop unresolved entries).
 *
 * Idempotent — re-running just re-sets `_weak: true`.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Preview:  npm run migrate:weaken-references -- --dry-run
 * Run:      npm run migrate:weaken-references
 */

import { createClient, type SanityDocument } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";

const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN env var.");
  process.exit(1);
}

const dryRun = process.argv.includes("--dry-run");

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
  perspective: "raw",
});

// Document types that hold curatorial / media references.
const TYPES = [
  "destination",
  "venue",
  "venueRegion",
  "culture",
  "destinationsPage",
  "venuesPage",
  "multiculturalPage",
  "homePage",
];

/** Deep-clone, adding `_weak: true` to every `{ _type: "reference", _ref }`. */
function weakenRefs(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(weakenRefs);
  if (value && typeof value === "object") {
    const obj = value as Record<string, unknown>;
    const isRef = obj._type === "reference" && typeof obj._ref === "string";
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(obj)) out[k] = weakenRefs(v);
    if (isRef) out._weak = true;
    return out;
  }
  return value;
}

const stripSystem = (doc: Record<string, unknown>) => {
  const next = { ...doc };
  delete next._rev;
  delete next._createdAt;
  delete next._updatedAt;
  delete next._originalId;
  return next;
};

async function run() {
  console.log(
    `${dryRun ? "[dry-run] " : ""}Weakening references in ${dataset}/${projectId}…`,
  );

  const docs: SanityDocument[] = await client.fetch(`*[_type in $types]`, {
    types: TYPES,
  });

  const changed = docs.filter((doc) => {
    const next = weakenRefs(doc);
    return JSON.stringify(next) !== JSON.stringify(doc);
  });

  if (changed.length === 0) {
    console.log("Nothing to migrate — all references are already weak.");
    return;
  }

  console.log(`Updating ${changed.length} doc(s):`);
  for (const d of changed) console.log(`  ${d._id} (${d._type})`);

  if (dryRun) {
    console.log("[dry-run] No changes written.");
    return;
  }

  const tx = client.transaction();
  for (const doc of changed) {
    const next = stripSystem(weakenRefs(doc) as Record<string, unknown>);
    tx.createOrReplace(next as SanityDocument);
  }
  await tx.commit();

  console.log(`✓ Weakened references on ${changed.length} doc(s).`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
