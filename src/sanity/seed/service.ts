/**
 * Seed the 8 Services across all six locales + the `servicePage` hub singleton
 * (also six locales) + shared `serviceMedia` / `servicePageMedia` stubs.
 *
 * The flagship "Destination Wedding Planning" is fully authored from the design;
 * the other 7 carry name/slug/number/summary + a minimal hero/overview (flesh
 * out in Studio). Slugs are TRANSLATED per locale (`serviceCopy/shared.ts` →
 * SLUGS); document ids stay keyed by the canonical English slug so re-seeding
 * replaces docs in place. Cross-references resolve to the SAME-locale target.
 *
 * Idempotent — `createOrReplace` for the localized text docs, `createIfNotExists`
 * for media stubs (so re-runs never clobber uploaded images).
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:services
 */

import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";
import { locales } from "../../i18n/routing";

import { SERVICE_COPY, SERVICE_PAGE_COPY } from "./serviceCopy";
import {
  buildServiceBody,
  buildServicePageBody,
  docId,
  hubDocId,
  mediaId,
  metadataId,
  SERVICE_META,
} from "./serviceCopy/shared";

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
  console.log(`Seeding services in ${dataset}/${projectId}…`);
  const tx = client.transaction();

  for (const meta of SERVICE_META) {
    const copyByLocale = SERVICE_COPY[meta.slug];
    if (!copyByLocale) {
      throw new Error(`No copy found for service "${meta.slug}".`);
    }

    for (const locale of locales) {
      tx.createOrReplace({
        _id: docId(meta.slug, locale),
        _type: "service",
        language: locale,
        ...buildServiceBody(meta.slug, locale, copyByLocale[locale]),
      });
    }

    tx.createOrReplace({
      _id: metadataId(meta.slug),
      _type: "translation.metadata",
      schemaTypes: ["service"],
      translations: locales.map((locale) => ({
        _key: locale,
        language: locale,
        value: weakRef(docId(meta.slug, locale)),
      })),
    });

    // Shared media stub — never clobbers uploaded images.
    tx.createIfNotExists({
      _id: mediaId(meta.slug),
      _type: "serviceMedia",
      slug: meta.slug,
      heroImage: img(`${copyByLocale.en.name} hero`),
      overviewImage: img(`${copyByLocale.en.name} overview`),
      audienceImage: img(`${copyByLocale.en.name} guests`),
    });
  }

  // ── Hub singleton (six locales) ───────────────────────────────────────────
  for (const locale of locales) {
    tx.createOrReplace({
      _id: hubDocId(locale),
      _type: "servicePage",
      language: locale,
      ...buildServicePageBody(locale, SERVICE_PAGE_COPY[locale]),
    });
  }

  tx.createOrReplace({
    _id: "servicePage-metadata",
    _type: "translation.metadata",
    schemaTypes: ["servicePage"],
    translations: locales.map((locale) => ({
      _key: locale,
      language: locale,
      value: weakRef(hubDocId(locale)),
    })),
  });

  // Shared hub hero image — created only if absent so re-runs never clobber an
  // uploaded image. Non-localized (one doc, shared across every locale).
  tx.createIfNotExists({
    _id: "servicePageMedia",
    _type: "servicePageMedia",
    hero: { image: img("The studio, Cap Cana") },
  });

  await tx.commit();
  console.log(
    `✓ Seeded ${SERVICE_META.length * locales.length} service docs + ${locales.length} hub docs + media stubs + translation metadata.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
