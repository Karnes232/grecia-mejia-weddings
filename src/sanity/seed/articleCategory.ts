/**
 * Seed the 13 Journal categories as single documents with field-level
 * localization. Titles + slugs are embedded as locale-keyed objects; no
 * per-locale doc or translation.metadata records.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:article-categories
 *
 * Idempotent — deterministic ids + `createOrReplace`.
 */

import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";
import { locales } from "../../i18n/routing";

import { CATEGORIES } from "./journalCopy/categories";
import { categoryDocId } from "./journalCopy/shared";

const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN env var.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

async function run() {
  console.log(`Seeding article categories in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  for (const category of CATEGORIES) {
    tx.createOrReplace({
      _id: categoryDocId(category.canonicalSlug),
      _type: "articleCategory",
      order: category.order,
      title: Object.fromEntries(
        locales.map((l) => [l, category.byLocale[l].title]),
      ),
      slug: Object.fromEntries(
        locales.map((l) => [l, { _type: "slug", current: category.byLocale[l].slug }]),
      ),
    });
  }

  await tx.commit();
  console.log(`✓ Seeded ${CATEGORIES.length} category documents.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
