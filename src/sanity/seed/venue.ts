/**
 * Seed the `venue` collection (Punta Cana's 7 venues × 6 locales) + per-venue
 * `venueMedia` stubs + `translation.metadata`.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:venues-detail   (then re-run `seed:venue-regions`
 * so each region's `venues[]` references resolve).
 *
 * Idempotent — deterministic IDs + `createOrReplace` for the localized docs;
 * media stubs use `createIfNotExists`. Mirrors `seed/culture.ts`.
 */

import { createClient } from "@sanity/client";
import { randomUUID } from "node:crypto";

import { apiVersion, dataset, projectId } from "../env";
import { locales } from "../../i18n/routing";
import {
  FEATURED_VENUE_ORDER,
  FEATURED_VENUES,
} from "./venueCopy/featuredVenues";
import {
  PUNTA_CANA_VENUE_ORDER,
  PUNTA_CANA_VENUES,
} from "./venueCopy/puntaCanaVenues";
import {
  buildVenueBody,
  type VenueCopy,
  venueDocId,
  venueMediaId,
  venueMetadataId,
} from "./venueCopy/shared";

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

const keyed = <T extends object>(obj: T) => ({ _key: randomUUID(), ...obj });

const slot = (prefix: string, n: number) =>
  Array.from({ length: n }, (_, i) => `${prefix}-${i + 1}`);

const MOSAIC_KEYS = slot("venue-mosaic", 5);
const PHOTO_KEYS = slot("venue-photo", 4);
const PORTFOLIO_KEYS = slot("venue-portfolio", 3);
const RELATED_KEYS = slot("venue-detail-related", 3);

async function run() {
  console.log(`Seeding venues in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  const seedSet = (
    order: readonly string[],
    venues: Record<string, Record<string, VenueCopy>>,
  ) => {
    for (const slug of order) {
      for (const locale of locales) {
        tx.createOrReplace({
          _id: venueDocId(slug, locale),
          _type: "venue",
          language: locale,
          ...buildVenueBody(slug, locale, venues[locale][slug]),
        });
      }

      tx.createOrReplace({
        _id: venueMetadataId(slug),
        _type: "translation.metadata",
        schemaTypes: ["venue"],
        translations: locales.map((locale) => ({
          _key: locale,
          language: locale,
          value: { _type: "reference", _ref: venueDocId(slug, locale), _weak: true },
        })),
      });

      const name = venues.en[slug].name;
      tx.createIfNotExists({
        _id: venueMediaId(slug),
        _type: "venueMedia",
        slug,
        cardImage: { _type: "image", alt: `${name} wedding venue` },
        mosaic: MOSAIC_KEYS.map((key) =>
          keyed({ _type: "image", key, alt: `${name} gallery` }),
        ),
        photography: PHOTO_KEYS.map((key) =>
          keyed({ _type: "image", key, alt: `${name} photography moment` }),
        ),
        portfolio: PORTFOLIO_KEYS.map((key) =>
          keyed({ _type: "image", key, alt: `${name} wedding` }),
        ),
        relatedArticles: RELATED_KEYS.map((key) =>
          keyed({ _type: "image", key, alt: `${name} related article` }),
        ),
      });
    }
  };

  seedSet(PUNTA_CANA_VENUE_ORDER, PUNTA_CANA_VENUES);
  seedSet(FEATURED_VENUE_ORDER, FEATURED_VENUES);

  const total = PUNTA_CANA_VENUE_ORDER.length + FEATURED_VENUE_ORDER.length;
  await tx.commit();
  console.log(
    `✓ Seeded ${total} venues × ${locales.length} locales + media + translation metadata.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
