/**
 * Seed the Portfolio: 4 case studies × 6 locales + the `portfolioPage` hub
 * singleton (6 locales) + shared `portfolioMedia` / `portfolioPageMedia` stubs.
 *
 * Slugs are TRANSLATED per locale (`portfolioCopy/shared.ts` → SLUGS); doc ids
 * stay keyed by the canonical English slug so re-seeding replaces in place.
 * Cross-references (destination, venue, culture, related articles, next case
 * study) resolve to the SAME-locale target. Content lives in `portfolioCopy/`.
 *
 * Idempotent — `createOrReplace` for the localized text docs, `createIfNotExists`
 * for media stubs (so re-runs never clobber uploaded images).
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:portfolio
 */

import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";
import { locales } from "../../i18n/routing";

import { PORTFOLIO_COPY, PORTFOLIO_PAGE_COPY } from "./portfolioCopy";
import {
  buildPortfolioBody,
  buildPortfolioPageBody,
  CASE_META,
  docId,
  hubDocId,
  mediaId,
  metadataId,
} from "./portfolioCopy/shared";

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

const img = (alt: string) => ({ _type: "image" as const, alt });
const weakRef = (ref: string) => ({
  _type: "reference" as const,
  _weak: true,
  _ref: ref,
});

async function run() {
  console.log(`Seeding portfolio in ${dataset}/${projectId}…`);
  const tx = client.transaction();

  for (const meta of CASE_META) {
    const copyByLocale = PORTFOLIO_COPY[meta.slug];
    if (!copyByLocale) {
      throw new Error(`No copy found for case study "${meta.slug}".`);
    }

    for (const locale of locales) {
      tx.createOrReplace({
        _id: docId(meta.slug, locale),
        _type: "portfolio",
        language: locale,
        ...buildPortfolioBody(meta.slug, locale, copyByLocale[locale]),
      });
    }

    tx.createOrReplace({
      _id: metadataId(meta.slug),
      _type: "translation.metadata",
      schemaTypes: ["portfolio"],
      translations: locales.map((locale) => ({
        _key: locale,
        language: locale,
        value: weakRef(docId(meta.slug, locale)),
      })),
    });

    // Shared media stub — never clobbers uploaded images. Gallery arrays are
    // left empty: the detail page lays them out from their real dimensions.
    const name = copyByLocale.en.name;
    tx.createIfNotExists({
      _id: mediaId(meta.slug),
      _type: "portfolioMedia",
      slug: meta.slug,
      cardImage: img(`${name} — card`),
      heroImage: img(`${name} — hero`),
      designImage: img(`${name} — design concept`),
      quoteImage: img(`${name} — reception`),
      galleryTop: [],
      galleryBottom: [],
    });
  }

  // ── Hub singleton (six locales) ───────────────────────────────────────────
  for (const locale of locales) {
    tx.createOrReplace({
      _id: hubDocId(locale),
      _type: "portfolioPage",
      language: locale,
      ...buildPortfolioPageBody(locale, PORTFOLIO_PAGE_COPY[locale]),
    });
  }

  tx.createOrReplace({
    _id: "portfolioPage-metadata",
    _type: "translation.metadata",
    schemaTypes: ["portfolioPage"],
    translations: locales.map((locale) => ({
      _key: locale,
      language: locale,
      value: weakRef(hubDocId(locale)),
    })),
  });

  // Shared hub hero image — created only if absent.
  tx.createIfNotExists({
    _id: "portfolioPageMedia",
    _type: "portfolioPageMedia",
    hero: { image: img("Selected weddings · Grecia Mejía") },
  });

  await tx.commit();
  console.log(
    `✓ Seeded ${CASE_META.length * locales.length} case studies + ${locales.length} hub docs + media stubs + translation metadata.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
