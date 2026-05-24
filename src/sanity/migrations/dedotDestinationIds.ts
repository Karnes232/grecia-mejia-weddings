/**
 * One-shot migration: give `destination` and their `translation.metadata`
 * documents DOT-FREE ids.
 *
 * Why: on a public dataset, anonymous (token-less) reads only serve documents
 * whose `_id` contains no "." — Sanity reserves "." for the `drafts.`/`versions.`
 * system. The old seed used ids like `destination.<slug>.<locale>`, so the
 * token-less site client (`src/sanity/lib/client.ts`) couldn't read them and
 * destination pages 404'd. Hyphenated ids (e.g. `destination-<slug>-<locale>`)
 * are publicly readable. The seed has been updated to match.
 *
 * What it does, atomically (one transaction):
 *   1. copies each dotted doc's CURRENT content to a dot-free id (dots → hyphens),
 *   2. re-points every reference (e.g. from `destinationsPage-*`) to the new ids,
 *   3. deletes the dotted originals.
 * Steps 1–3 run in a single transaction so strong references stay valid at
 * commit. The app is unaffected: it queries by `slug` + `language`, never `_id`.
 *
 * Idempotent — re-running finds nothing left to migrate.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Preview:  npm run migrate:dedot-destination-ids -- --dry-run
 * Run:      npm run migrate:dedot-destination-ids
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

/** Replace every "." in an id with "-". Slugs/locales contain no dots, so this
 *  is a lossless, collision-free remap (e.g. destination.punta-cana.en →
 *  destination-punta-cana-en). */
const dedot = (id: string) => id.split(".").join("-");

/** Deep-clone a value, rewriting any `{ _ref }` whose target is in `map`. */
function remapRefs(value: unknown, map: Map<string, string>): unknown {
  if (Array.isArray(value)) return value.map((v) => remapRefs(v, map));
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] =
        k === "_ref" && typeof v === "string" && map.has(v)
          ? map.get(v)
          : remapRefs(v, map);
    }
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

const isMigratable = (d: SanityDocument) =>
  d._id.includes(".") &&
  !d._id.startsWith("drafts.") &&
  !d._id.startsWith("versions.") &&
  (d._type !== "translation.metadata" ||
    (Array.isArray((d as { schemaTypes?: string[] }).schemaTypes) &&
      (d as { schemaTypes?: string[] }).schemaTypes!.includes("destination")));

async function run() {
  console.log(
    `${dryRun ? "[dry-run] " : ""}De-dotting destination ids in ${dataset}/${projectId}…`,
  );

  const candidates: SanityDocument[] = await client.fetch(
    `*[_type in ["destination", "translation.metadata"]]`,
  );
  const dotted = candidates.filter(isMigratable);

  if (dotted.length === 0) {
    console.log("Nothing to migrate — all ids are already dot-free.");
    return;
  }

  const map = new Map(dotted.map((d) => [d._id, dedot(d._id)]));
  const oldIds = [...map.keys()];

  // Docs OUTSIDE the migration set that reference any dotted id (e.g.
  // destinationsPage-*). Their references must be re-pointed before delete.
  const referrers: SanityDocument[] = await client.fetch(
    `*[references($ids) && !(_id in $ids)]`,
    { ids: oldIds },
  );

  console.log(
    `Migrating ${dotted.length} doc(s) ` +
      `(${dotted.filter((d) => d._type === "destination").length} destination, ` +
      `${dotted.filter((d) => d._type === "translation.metadata").length} translation.metadata); ` +
      `re-pointing ${referrers.length} referrer(s): ` +
      `${[...new Set(referrers.map((r) => r._type))].join(", ") || "none"}.`,
  );
  for (const d of dotted) console.log(`  copy   ${d._id}  →  ${map.get(d._id)}`);
  for (const r of referrers) console.log(`  repoint ${r._id}`);

  if (dryRun) {
    console.log("[dry-run] No changes written.");
    return;
  }

  const tx = client.transaction();
  // 1. dot-free copies (with any internal refs remapped)
  for (const doc of dotted) {
    const copy = stripSystem(
      remapRefs({ ...doc, _id: map.get(doc._id) }, map) as Record<string, unknown>,
    );
    tx.createOrReplace(copy as SanityDocument);
  }
  // 2. re-point external referrers to the new ids
  for (const ref of referrers) {
    const patched = stripSystem(remapRefs(ref, map) as Record<string, unknown>);
    tx.createOrReplace(patched as SanityDocument);
  }
  // 3. delete the dotted originals
  for (const id of oldIds) tx.delete(id);

  await tx.commit();
  console.log(
    `✓ Migrated ${dotted.length} doc(s) and re-pointed ${referrers.length} referrer(s) to dot-free ids.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
