/**
 * Seed the 13 Journal categories across all six locales + per-category
 * `translation.metadata`. Titles + slugs translate per locale; document ids stay
 * keyed by the canonical English slug.
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
import { categoryDocId, categoryMetadataId } from "./journalCopy/shared";

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
    for (const locale of locales) {
      const copy = category.byLocale[locale];
      tx.createOrReplace({
        _id: categoryDocId(category.canonicalSlug, locale),
        _type: "articleCategory",
        language: locale,
        title: copy.title,
        slug: { _type: "slug", current: copy.slug },
        order: category.order,
      });
    }

    tx.createOrReplace({
      _id: categoryMetadataId(category.canonicalSlug),
      _type: "translation.metadata",
      schemaTypes: ["articleCategory"],
      translations: locales.map((locale) => ({
        _key: locale,
        language: locale,
        value: {
          _type: "reference",
          _ref: categoryDocId(category.canonicalSlug, locale),
          _weak: true,
        },
      })),
    });
  }

  await tx.commit();
  console.log(
    `✓ Seeded ${CATEGORIES.length * locales.length} category docs + ${CATEGORIES.length} translation-metadata records.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
