/**
 * Seed the 9 sample Journal articles across all six locales + per-article
 * `translation.metadata`. Document ids stay keyed by the canonical English slug.
 *
 * Cross-collection references follow the established deterministic ids:
 *   category    →  articleCategory-<categorySlug>-<locale>
 *   author      →  author-grecia-<locale>
 *   destination →  destination-<slug>-<locale>
 *   culture     →  culture-<slug>-<locale>
 *   venue       →  venue-<slug>-<locale>
 *   related     →  article-<slug>-<locale>
 * All references are weak (the referenced docs may be seeded separately).
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:articles
 *
 * Idempotent — deterministic ids + `createOrReplace`.
 */

import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";
import { locales, type Locale } from "../../i18n/routing";

import { ARTICLES } from "./journalCopy/articles";
import {
  articleDocId,
  articleMetadataId,
  authorDocId,
  categoryDocId,
  k,
  ptBlocks,
} from "./journalCopy/shared";

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

const weakRef = (ref: string) => ({ _type: "reference", _weak: true, _ref: ref });

async function run() {
  console.log(`Seeding articles in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  for (const article of ARTICLES) {
    for (const locale of locales) {
      const copy = article.byLocale[locale];

      const doc: Record<string, unknown> = {
        _id: articleDocId(article.canonicalSlug, locale),
        _type: "article",
        language: locale,
        title: copy.title,
        slug: { _type: "slug", current: article.canonicalSlug },
        excerpt: copy.excerpt,
        category: weakRef(categoryDocId(article.categorySlug, locale)),
        author: weakRef(authorDocId(locale)),
        publishedAt: article.publishedAt,
        readMinutes: article.readMinutes,
        featured: article.featured,
        heroImage: { _type: "image", alt: copy.title },
        body: ptBlocks([copy.lede]),
        relatedDestination: weakRef(
          `destination-${article.relatedDestinationSlug}-${locale}`,
        ),
        relatedArticles: article.relatedArticles.map((slug) =>
          k(weakRef(articleDocId(slug, locale as Locale))),
        ),
      };

      if (copy.kicker) doc.kicker = copy.kicker;
      if (article.relatedCultureSlug) {
        doc.relatedCulture = weakRef(
          `culture-${article.relatedCultureSlug}-${locale}`,
        );
      }
      if (article.relatedVenueSlug) {
        doc.relatedVenue = weakRef(
          `venue-${article.relatedVenueSlug}-${locale}`,
        );
      }

      tx.createOrReplace(doc as { _id: string; _type: string });
    }

    tx.createOrReplace({
      _id: articleMetadataId(article.canonicalSlug),
      _type: "translation.metadata",
      schemaTypes: ["article"],
      translations: locales.map((locale) => ({
        _key: locale,
        language: locale,
        value: {
          _type: "reference",
          _ref: articleDocId(article.canonicalSlug, locale),
          _weak: true,
        },
      })),
    });
  }

  await tx.commit();
  console.log(
    `✓ Seeded ${ARTICLES.length * locales.length} article docs + ${ARTICLES.length} translation-metadata records.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
