/**
 * Seed individual Destination documents across all six locales.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:destination
 *
 * Idempotent — uses deterministic IDs and `createOrReplace` for content docs
 * and `createIfNotExists` for media stubs. Images are left empty; editors
 * upload through Studio.
 */

import { createClient } from "@sanity/client";
import { randomUUID } from "node:crypto";

import { apiVersion, dataset, projectId } from "../env";
import { locales, type Locale } from "../../i18n/routing";

import { ALL_FACTS } from "./destinationCopy/facts";
import { buildPuntaCanaDoc } from "./destinationCopy/puntaCana";
import { buildDestinationDoc } from "./destinationCopy/template";

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

// IDs must be dot-free: on a public dataset, anonymous reads only serve
// documents whose _id contains no "." (Sanity reserves "." for the
// `drafts.`/`versions.` system). Dotted ids are visible only with a token.
const docId = (slug: string, locale: Locale) => `destination-${slug}-${locale}`;
const metadataId = (slug: string) => `destination-${slug}-metadata`;
const mediaId = (slug: string) => `destinationMedia-${slug}`;

const k = <T extends object>(obj: T) => ({ _key: randomUUID(), ...obj });

async function run() {
  console.log(
    `Seeding ${ALL_FACTS.length} destinations × ${locales.length} locales in ${dataset}/${projectId}…`,
  );

  const tx = client.transaction();

  for (const fact of ALL_FACTS) {
    // Build a doc per locale.
    for (const locale of locales) {
      const body =
        fact.slug === "punta-cana"
          ? buildPuntaCanaDoc(locale)
          : buildDestinationDoc(fact, locale);

      tx.createOrReplace({
        _id: docId(fact.slug, locale),
        _type: "destination",
        language: locale,
        ...body,
      });
    }

    // Translation metadata — one per destination.
    tx.createOrReplace({
      _id: metadataId(fact.slug),
      _type: "translation.metadata",
      schemaTypes: ["destination"],
      translations: locales.map((locale) => ({
        _key: locale,
        language: locale,
        value: {
          _type: "reference",
          _ref: docId(fact.slug, locale),
          _weak: true,
        },
      })),
    });

    // Media stub — locale-agnostic, pre-keyed image arrays.
    tx.createIfNotExists({
      _id: mediaId(fact.slug),
      _type: "destinationMedia",
      slug: fact.slug,
      styles: Array.from({ length: 6 }, (_, i) => k({ key: `style-${i + 1}` })),
      venueCards: Array.from({ length: 3 }, (_, i) =>
        k({ key: `venue-${i + 1}` }),
      ),
      guestCards: [
        "guest-stay",
        "guest-taste",
        "guest-explore",
        "guest-welcome",
        "guest-sendoff",
      ].map((key) => k({ key })),
      relatedArticles: Array.from({ length: 5 }, (_, i) =>
        k({ key: `related-${i + 1}` }),
      ),
    });
  }

  await tx.commit();
  console.log(
    `✓ Seeded ${ALL_FACTS.length * locales.length} destination docs + ${ALL_FACTS.length} media stubs + ${ALL_FACTS.length} translation-metadata records.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
