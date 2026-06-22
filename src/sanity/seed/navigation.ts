/**
 * Seed the `navigation` singleton across all six locales.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Generate one at https://www.sanity.io/manage → API → Tokens (Editor or Deploy Studio).
 *
 * Run with:  npx tsx src/sanity/seed/navigation.ts
 *           or: npm run seed:nav
 *
 * Idempotent — uses deterministic IDs and `createOrReplace`, so re-running
 * overwrites the documents in place. Translation metadata is linked via
 * @sanity/document-internationalization's `translation.metadata` doc.
 */

import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";
import { locales, type Locale } from "../../i18n/routing";

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

type NavLink = { _key: string; key: string; label: string; href: string };
type NavCta = { label: string; href: string };
type NavDoc = {
  mainLinks: NavLink[];
  cta: NavCta;
};

const NAV_KEYS = [
  "house",
  "destinations",
  "multicultural",
  "venues",
  "portfolio",
  "services",
  "journal",
  "contact",
] as const;

const HREFS: Record<(typeof NAV_KEYS)[number], string> = {
  house: "/about",
  destinations: "/destinations",
  multicultural: "/multicultural",
  venues: "/venues",
  portfolio: "/portfolio",
  services: "/services",
  journal: "/journal",
  contact: "/contact",
};

const LABELS: Record<Locale, Record<(typeof NAV_KEYS)[number], string>> = {
  en: {
    house: "The House",
    destinations: "Destinations",
    multicultural: "Multicultural",
    venues: "Venues",
    portfolio: "Portfolio",
    services: "Services",
    journal: "Journal",
    contact: "Contact",
  },
  es: {
    house: "La Casa",
    destinations: "Destinos",
    multicultural: "Multicultural",
    venues: "Locaciones",
    portfolio: "Portafolio",
    services: "Servicios",
    journal: "Diario",
    contact: "Contacto",
  },
  fr: {
    house: "La Maison",
    destinations: "Destinations",
    multicultural: "Multiculturel",
    venues: "Lieux",
    portfolio: "Portfolio",
    services: "Services",
    journal: "Journal",
    contact: "Contact",
  },
  pt: {
    house: "A Casa",
    destinations: "Destinos",
    multicultural: "Multicultural",
    venues: "Locais",
    portfolio: "Portfólio",
    services: "Serviços",
    journal: "Diário",
    contact: "Contato",
  },
  de: {
    house: "Das Haus",
    destinations: "Reiseziele",
    multicultural: "Multikulturell",
    venues: "Orte",
    portfolio: "Portfolio",
    services: "Leistungen",
    journal: "Journal",
    contact: "Kontakt",
  },
  it: {
    house: "La Casa",
    destinations: "Destinazioni",
    multicultural: "Multiculturale",
    venues: "Sedi",
    portfolio: "Portfolio",
    services: "Servizi",
    journal: "Giornale",
    contact: "Contatto",
  },
};

const CTA: Record<Locale, NavCta> = {
  en: { label: "Private Consultation", href: "/contact" },
  es: { label: "Consulta Privada", href: "/contact" },
  fr: { label: "Consultation Privée", href: "/contact" },
  pt: { label: "Consulta Privada", href: "/contact" },
  de: { label: "Privates Gespräch", href: "/contact" },
  it: { label: "Consulenza Privata", href: "/contact" },
};

function buildDoc(locale: Locale): NavDoc {
  return {
    mainLinks: NAV_KEYS.map((key) => ({
      _key: key,
      key,
      label: LABELS[locale][key],
      href: HREFS[key],
    })),
    cta: CTA[locale],
  };
}

const docId = (locale: Locale) => `navigation-${locale}`;

async function run() {
  console.log(`Seeding navigation in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  for (const locale of locales) {
    const doc = buildDoc(locale);
    tx.createOrReplace({
      _id: docId(locale),
      _type: "navigation",
      language: locale,
      ...doc,
    });
  }

  // Translation metadata — links the six docs together so Studio's
  // language switcher tab sees them as variants of one another.
  tx.createOrReplace({
    _id: "navigation-metadata",
    _type: "translation.metadata",
    schemaTypes: ["navigation"],
    translations: locales.map((locale) => ({
      _key: locale,
      language: locale,
      value: { _type: "reference", _ref: docId(locale), _weak: true },
    })),
  });

  await tx.commit();
  console.log(
    `✓ Seeded ${locales.length} navigation docs + translation metadata.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
