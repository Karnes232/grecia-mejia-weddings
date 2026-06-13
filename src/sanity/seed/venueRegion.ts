/**
 * Seed the `venueRegion` collection (7 regions × 6 locales) + per-region
 * `venueRegionMedia` stubs + `translation.metadata`.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:venue-regions   (before `npm run seed:venues`).
 *
 * Idempotent — deterministic IDs + `createOrReplace` for the localized docs.
 * Media docs are created with `createIfNotExists` so re-running never clobbers
 * uploaded images. Mirrors `seed/culture.ts`.
 */

import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";
import { locales, type Locale } from "../../i18n/routing";
import { PUNTA_CANA } from "./venueRegionCopy/puntaCana";
import { STUB_REGIONS } from "./venueRegionCopy/regions";
import {
  buildRegionBody,
  docId,
  mediaId,
  metadataId,
  REGION_ORDER,
  type RegionCopy,
  type RegionSlug,
} from "./venueRegionCopy/shared";

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

// All regions, keyed by canonical slug.
const ALL: Record<RegionSlug, Record<Locale, RegionCopy>> = {
  "punta-cana": PUNTA_CANA,
  ...STUB_REGIONS,
};

async function run() {
  console.log(`Seeding venueRegion in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  for (const slug of REGION_ORDER) {
    const byLocale = ALL[slug];

    for (const locale of locales) {
      tx.createOrReplace({
        _id: docId(slug, locale),
        _type: "venueRegion",
        language: locale,
        ...buildRegionBody(slug, locale, byLocale[locale]),
      });
    }

    tx.createOrReplace({
      _id: metadataId(slug),
      _type: "translation.metadata",
      schemaTypes: ["venueRegion"],
      translations: locales.map((locale) => ({
        _key: locale,
        language: locale,
        value: { _type: "reference", _ref: docId(slug, locale), _weak: true },
      })),
    });

    // Shared media stub — region card + hero only. Venue card images now come
    // from each venue's own `venueMedia.cardImage`. Created only if absent.
    const enCopy = byLocale.en;
    tx.createIfNotExists({
      _id: mediaId(slug),
      _type: "venueRegionMedia",
      slug,
      cardImage: { _type: "image", alt: `${enCopy.name} wedding venue` },
      heroImage: { _type: "image", alt: `${enCopy.name} coastline` },
    });
  }

  await tx.commit();
  console.log(
    `✓ Seeded ${REGION_ORDER.length} regions × ${locales.length} locales + media + translation metadata.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
