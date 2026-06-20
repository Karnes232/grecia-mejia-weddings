/**
 * One-shot cleanup: delete the OLD document-level-localized `articleCategory`
 * documents (one per locale, e.g. `articleCategory-wedding-venues-en`) and their
 * `translation.metadata` records.
 *
 * Why: `articleCategory` moved from document-level i18n (78 docs + 13 metadata)
 * to a single field-level-localized document per category. After running this,
 * re-seed with `npm run seed:article-categories` (creates the 13 new single docs)
 * and `npm run seed:articles` (re-points article references to the new ids).
 *
 * Article → category references are weak, so deletion is not blocked; any
 * lingering reference simply resolves to null until articles are re-seeded.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Preview:  npm run migrate:cleanup-article-categories -- --dry-run
 * Run:      npm run migrate:cleanup-article-categories
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

// Old per-locale ids carry a trailing `-<locale>`; new single docs do not.
const LOCALE_SUFFIX = /-(en|es|fr|pt|de|it)$/;

async function run() {
  console.log(
    `${dryRun ? "[dry-run] " : ""}Cleaning up old articleCategory docs in ${dataset}/${projectId}…`,
  );

  // Raw perspective returns published + `drafts.` versions.
  const ids: string[] = await client.fetch(`
    *[
      _type == "articleCategory" ||
      (_type == "translation.metadata" && "articleCategory" in schemaTypes)
    ]._id
  `);

  // Keep only the old per-locale category docs + their metadata; never touch a
  // new single doc (no locale suffix, ignoring the optional `drafts.` prefix).
  const targets = ids.filter((id) => {
    const bare = id.replace(/^drafts\./, "");
    if (bare.startsWith("articleCategory-") && bare.endsWith("-metadata")) return true;
    return LOCALE_SUFFIX.test(bare);
  });

  if (targets.length === 0) {
    console.log("Nothing to delete — no old category docs found.");
    return;
  }

  console.log(`Deleting ${targets.length} doc(s):`);
  for (const id of targets) console.log(`  ${id}`);

  if (dryRun) {
    console.log("[dry-run] No changes written.");
    return;
  }

  const tx = client.transaction();
  for (const id of targets) tx.delete(id);
  await tx.commit();

  console.log(`✓ Deleted ${targets.length} old category doc(s).`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
