/**
 * One-shot migration: convert each venue region's first `cardMeta` stat into a
 * live venue-count stat.
 *
 * Why: the hub region card's first stat (the "houses" count) used to be a
 * hand-typed value (e.g. "14"). It now derives from the actual number of venues
 * referenced in the region (`useVenueCount: true` → the card renders
 * `count(venues)` live). Existing seeded docs still carry the old typed value,
 * so this flips the first stat to the live count and drops its stale value.
 *
 * Targets the first `cardMeta` entry by its `_key` (the count is always first),
 * leaving every other field — including any Studio edits — untouched.
 *
 * Idempotent — re-running is a no-op once flags are set.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Preview:  npm run migrate:venue-count-stat -- --dry-run
 * Run:      npm run migrate:venue-count-stat
 */

import { createClient } from "@sanity/client";

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

type CardMetaEntry = { _key: string; value?: string; useVenueCount?: boolean };
type RegionDoc = { _id: string; name?: string; cardMeta?: CardMetaEntry[] };

async function run() {
  console.log(
    `${dryRun ? "[dry-run] " : ""}Converting first cardMeta stat to live venue count in ${dataset}/${projectId}…`,
  );

  const docs: RegionDoc[] = await client.fetch(
    `*[_type == "venueRegion"]{ _id, name, cardMeta[]{ _key, value, useVenueCount } }`,
  );

  const tx = client.transaction();
  let changed = 0;

  for (const doc of docs) {
    const first = doc.cardMeta?.[0];
    if (!first) {
      console.log(`  skip ${doc._id} — no cardMeta`);
      continue;
    }
    if (first.useVenueCount && first.value === undefined) continue; // already migrated

    console.log(`  ${doc._id} (${doc.name ?? "?"}) → stat[0] _key=${first._key}`);
    changed += 1;
    tx.patch(doc._id, (p) =>
      p
        .set({ [`cardMeta[_key=="${first._key}"].useVenueCount`]: true })
        .unset([`cardMeta[_key=="${first._key}"].value`]),
    );
  }

  if (changed === 0) {
    console.log("Nothing to migrate — all first stats already live.");
    return;
  }

  if (dryRun) {
    console.log(`[dry-run] Would update ${changed} doc(s). No changes written.`);
    return;
  }

  await tx.commit();
  console.log(`✓ Converted first cardMeta stat on ${changed} doc(s).`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
