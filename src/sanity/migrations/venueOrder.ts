/**
 * One-shot migration: move the venue↔region link to a single source of truth.
 *
 * Why: region pages used to render the hand-curated `venueRegion.venues[]`
 * array, so a venue whose `region` reference already pointed at a region
 * stayed invisible until it was also added to that array (once per locale).
 * The frontend now lists venues via a reverse lookup on `venue.region`,
 * ordered by a new numeric `venue.order` and gated by `venue.listed`.
 *
 * What this does:
 * 1. Sets `order` on each venue from its position in its region's `venues[]`
 *    array (index + 1, first assignment wins). Venues in no array fall back
 *    to parsing the decorative card `number` ("04" → 4). `setIfMissing` —
 *    hand-set orders are never overwritten.
 * 2. Sets `listed: false` on the five seeded "featured" stub venues that were
 *    hidden before this change (matched by seed doc id, all locales), so
 *    public region pages look identical after the switch.
 * 3. Unsets the now-unused `venues[]` array on every region doc.
 *
 * Patches drafts and published twins alike (perspective "raw"), so a later
 * publish can't wipe the new fields. Idempotent — re-running is a no-op.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Preview:  npm run migrate:venue-order -- --dry-run
 * Run:      npm run migrate:venue-order
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

// Seed stubs that were not in any region's venues[] array — i.e. hidden from
// region pages before this migration. Matched by the seed doc-id convention
// `venue-<canonical-slug>-<locale>` (ids, not translated slugs).
const STUB_ID_PATTERN =
  /^venue-(kukua-beach-club|villa-ta-ville|chateau-de-la-croix|finca-san-bartolo|castello-di-velasco)-[a-z]{2}$/;

// GROQ projections return null (not undefined) for missing fields.
type RegionDoc = { _id: string; name?: string; venueIds?: Array<string | null> };
type VenueDoc = {
  _id: string;
  name?: string | null;
  number?: string | null;
  order?: number | null;
  listed?: boolean | null;
};

const publishedId = (id: string) => id.replace(/^drafts\./, "");

async function run() {
  console.log(
    `${dryRun ? "[dry-run] " : ""}Moving venue order to venue.order and dropping venueRegion.venues[] in ${dataset}/${projectId}…`,
  );

  const regions: RegionDoc[] = await client.fetch(
    `*[_type == "venueRegion" && defined(venues)]{ _id, name, "venueIds": venues[]._ref }`,
  );
  const venues: VenueDoc[] = await client.fetch(
    `*[_type == "venue"]{ _id, name, number, order, listed }`,
  );

  // Published venue id → order from its region's array (index + 1). First
  // assignment wins across a region's draft/published twins.
  const orderFor = new Map<string, number>();
  for (const region of regions) {
    (region.venueIds ?? []).forEach((ref, i) => {
      if (!ref) return;
      const id = publishedId(ref);
      if (!orderFor.has(id)) orderFor.set(id, i + 1);
    });
  }

  // Fallback for venues in no array: the decorative card number ("04" → 4).
  for (const venue of venues) {
    const id = publishedId(venue._id);
    if (orderFor.has(id)) continue;
    const n = Number.parseInt(venue.number ?? "", 10);
    if (Number.isFinite(n) && n > 0) orderFor.set(id, n);
  }

  const tx = client.transaction();
  let changed = 0;

  for (const venue of venues) {
    const id = publishedId(venue._id);
    const order = orderFor.get(id);
    const setOrder = order !== undefined && venue.order == null;
    const unlist = STUB_ID_PATTERN.test(id) && venue.listed !== false;
    if (!setOrder && !unlist) continue;

    console.log(
      `  ${venue._id} (${venue.name ?? "?"})` +
        (setOrder ? ` → order ${order}` : "") +
        (unlist ? " → listed false" : ""),
    );
    changed += 1;
    tx.patch(venue._id, (p) => {
      let patch = p;
      if (setOrder) patch = patch.setIfMissing({ order });
      if (unlist) patch = patch.set({ listed: false });
      return patch;
    });
  }

  for (const region of regions) {
    console.log(`  ${region._id} (${region.name ?? "?"}) → unset venues[]`);
    changed += 1;
    tx.patch(region._id, (p) => p.unset(["venues"]));
  }

  if (changed === 0) {
    console.log("Nothing to migrate — orders set, stubs unlisted, arrays gone.");
    return;
  }

  if (dryRun) {
    console.log(`[dry-run] Would update ${changed} doc(s). No changes written.`);
    return;
  }

  await tx.commit();
  console.log(`✓ Updated ${changed} doc(s).`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
