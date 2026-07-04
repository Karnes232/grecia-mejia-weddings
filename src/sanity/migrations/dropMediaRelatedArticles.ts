/**
 * One-shot migration: drop the vestigial `relatedArticles` keyed-image arrays
 * from media docs.
 *
 * Why: `destinationMedia` (and, by copied pattern, `cultureMedia`) carried a
 * `relatedArticles` array of {key, image} slots that no GROQ query projects
 * and no component renders — related-article cards take their image from each
 * article's own `heroImage`. The field is removed from the schemas; this
 * unsets the seeded key-only stubs so editors don't see "Unknown field"
 * panels. Verified before writing: no doc had an uploaded image in the field.
 *
 * Idempotent — re-running is a no-op once the field is gone.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Preview:  npm run migrate:drop-media-related-articles -- --dry-run
 * Run:      npm run migrate:drop-media-related-articles
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

type MediaDoc = { _id: string; _type: string; slug?: string };

async function run() {
  console.log(
    `${dryRun ? "[dry-run] " : ""}Dropping relatedArticles from media docs in ${dataset}/${projectId}…`,
  );

  const docs: MediaDoc[] = await client.fetch(
    `*[_type in ["destinationMedia", "cultureMedia"] && defined(relatedArticles)]{ _id, _type, slug }`,
  );

  if (docs.length === 0) {
    console.log("Nothing to migrate — no media doc carries relatedArticles.");
    return;
  }

  const tx = client.transaction();
  for (const doc of docs) {
    console.log(`  ${doc._id} (${doc.slug ?? "?"}) → unset relatedArticles`);
    tx.patch(doc._id, (p) => p.unset(["relatedArticles"]));
  }

  if (dryRun) {
    console.log(`[dry-run] Would update ${docs.length} doc(s). No changes written.`);
    return;
  }

  await tx.commit();
  console.log(`✓ Unset relatedArticles on ${docs.length} doc(s).`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
