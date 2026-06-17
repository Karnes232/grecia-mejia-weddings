/**
 * Seed the Journal author (Grecia Mejía) across all six locales + a single
 * `translation.metadata` record. One doc per locale (so role/bio translate
 * while name stays consistent), portrait left as an `image` stub.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:author
 *
 * Idempotent — deterministic ids + `createOrReplace`.
 */

import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";
import { locales } from "../../i18n/routing";

import { AUTHOR_COPY } from "./journalCopy/author";
import { authorDocId, authorMetadataId } from "./journalCopy/shared";

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
  console.log(`Seeding author in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  for (const locale of locales) {
    const copy = AUTHOR_COPY[locale];
    tx.createOrReplace({
      _id: authorDocId(locale),
      _type: "author",
      language: locale,
      name: copy.name,
      role: copy.role,
      bio: copy.bio,
      portrait: { _type: "image", alt: copy.name },
    });
  }

  tx.createOrReplace({
    _id: authorMetadataId(),
    _type: "translation.metadata",
    schemaTypes: ["author"],
    translations: locales.map((locale) => ({
      _key: locale,
      language: locale,
      value: { _type: "reference", _ref: authorDocId(locale), _weak: true },
    })),
  });

  await tx.commit();
  console.log(
    `✓ Seeded ${locales.length} author docs + translation metadata.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
