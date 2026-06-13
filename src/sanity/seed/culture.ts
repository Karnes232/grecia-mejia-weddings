/**
 * Seed the eight `culture` traditions across all six locales — full detail-page
 * content (hero → FAQ → CTA), a shared `cultureMedia` stub each, and
 * per-culture `translation.metadata`.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:cultures
 *
 * Idempotent — deterministic IDs + `createOrReplace` for the localized text
 * docs, `createIfNotExists` for media stubs (so re-runs never clobber uploaded
 * images). Content lives in `./cultureCopy/<culture>.ts` (design handoff:
 * `pages/multicultural-detail.jsx`).
 *
 * Slugs are TRANSLATED per locale (`cultureCopy/shared.ts` → SLUGS); document
 * ids stay keyed by the canonical English slug, so re-seeding replaces the
 * existing docs in place. Every locale doc points at the shared media doc via
 * its `media` reference — the link that survives per-language slugs.
 */

import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";
import { locales } from "../../i18n/routing";

import { CULTURE_COPY } from "./cultureCopy";
import {
  buildCultureBody,
  CULTURE_META,
  docId,
  mediaId,
  metadataId,
} from "./cultureCopy/shared";

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
  console.log(`Seeding cultures in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  for (const meta of CULTURE_META) {
    const copyByLocale = CULTURE_COPY[meta.slug];
    if (!copyByLocale) {
      throw new Error(`No copy found for culture "${meta.slug}".`);
    }

    for (const locale of locales) {
      tx.createOrReplace({
        _id: docId(meta.slug, locale),
        _type: "culture",
        language: locale,
        ...buildCultureBody(meta.slug, locale, copyByLocale[locale]),
      });
    }

    tx.createOrReplace({
      _id: metadataId(meta.slug),
      _type: "translation.metadata",
      schemaTypes: ["culture"],
      translations: locales.map((locale) => ({
        _key: locale,
        language: locale,
        value: {
          _type: "reference",
          _ref: docId(meta.slug, locale),
          _weak: true,
        },
      })),
    });

    // Shared media stub — created only if absent so re-runs never clobber
    // images an editor has uploaded.
    tx.createIfNotExists({
      _id: mediaId(meta.slug),
      _type: "cultureMedia",
      slug: meta.slug,
      cardImage: { _type: "image", alt: meta.alt },
      heroImage: { _type: "image", alt: meta.alt },
    });
  }

  await tx.commit();
  console.log(
    `✓ Seeded ${CULTURE_META.length * locales.length} culture docs + ${CULTURE_META.length} media stubs + ${CULTURE_META.length} translation-metadata records.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
