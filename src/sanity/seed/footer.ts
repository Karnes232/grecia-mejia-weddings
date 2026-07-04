/**
 * Seed the `footer` singleton across all six locales.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:footer
 *
 * Idempotent — deterministic IDs + `createOrReplace`. Translation metadata
 * links the six variants together for Studio's language switcher.
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

type FooterLink = { _key: string; label: string; href: string };
type FooterColumn = {
  _key: string;
  heading: string;
  links: FooterLink[];
};

const COLUMN_KEYS = ["atelier", "plan", "studio"] as const;
type ColumnKey = (typeof COLUMN_KEYS)[number];

// "contact" seeds the `contactHeading` field — the column's links derive from
// siteSettings.contact at render, so only the heading lives on the footer doc.
type HeadingKey = ColumnKey | "contact";

const HEADINGS: Record<Locale, Record<HeadingKey, string>> = {
  en: {
    atelier: "Atelier",
    plan: "Plan",
    studio: "Studio",
    contact: "Contact",
  },
  es: {
    atelier: "Atelier",
    plan: "Planificar",
    studio: "Estudio",
    contact: "Contacto",
  },
  fr: {
    atelier: "Atelier",
    plan: "Planifier",
    studio: "Studio",
    contact: "Contact",
  },
  pt: {
    atelier: "Atelier",
    plan: "Planejar",
    studio: "Estúdio",
    contact: "Contato",
  },
  de: {
    atelier: "Atelier",
    plan: "Planen",
    studio: "Studio",
    contact: "Kontakt",
  },
  it: {
    atelier: "Atelier",
    plan: "Pianificare",
    studio: "Studio",
    contact: "Contatto",
  },
};

type LinkSpec = { key: string; href: string; labels: Record<Locale, string> };

const COLUMNS: Record<ColumnKey, LinkSpec[]> = {
  atelier: [
    {
      key: "about",
      href: "/about",
      labels: {
        en: "About",
        es: "Sobre",
        fr: "À propos",
        pt: "Sobre",
        de: "Über",
        it: "Chi siamo",
      },
    },
    {
      key: "method",
      href: "/method",
      labels: {
        en: "Method",
        es: "Método",
        fr: "Méthode",
        pt: "Método",
        de: "Methode",
        it: "Metodo",
      },
    },
    {
      key: "press",
      href: "/press",
      labels: {
        en: "Press",
        es: "Prensa",
        fr: "Presse",
        pt: "Imprensa",
        de: "Presse",
        it: "Stampa",
      },
    },
    {
      key: "journal",
      href: "/journal",
      labels: {
        en: "Journal",
        es: "Diario",
        fr: "Journal",
        pt: "Diário",
        de: "Journal",
        it: "Giornale",
      },
    },
  ],
  plan: [
    {
      key: "destinations",
      href: "/destinations",
      labels: {
        en: "Destinations",
        es: "Destinos",
        fr: "Destinations",
        pt: "Destinos",
        de: "Reiseziele",
        it: "Destinazioni",
      },
    },
    {
      key: "multicultural",
      href: "/multicultural",
      labels: {
        en: "Multicultural",
        es: "Multicultural",
        fr: "Multiculturel",
        pt: "Multicultural",
        de: "Multikulturell",
        it: "Multiculturale",
      },
    },
    {
      key: "venues",
      href: "/venues",
      labels: {
        en: "Venues",
        es: "Locaciones",
        fr: "Lieux",
        pt: "Locais",
        de: "Orte",
        it: "Sedi",
      },
    },
    {
      key: "services",
      href: "/services",
      labels: {
        en: "Services",
        es: "Servicios",
        fr: "Services",
        pt: "Serviços",
        de: "Leistungen",
        it: "Servizi",
      },
    },
  ],
  studio: [
    {
      key: "punta-cana",
      href: "#",
      labels: {
        en: "Punta Cana",
        es: "Punta Cana",
        fr: "Punta Cana",
        pt: "Punta Cana",
        de: "Punta Cana",
        it: "Punta Cana",
      },
    },
    {
      key: "milan",
      href: "#",
      labels: {
        en: "Milan · 2026",
        es: "Milán · 2026",
        fr: "Milan · 2026",
        pt: "Milão · 2026",
        de: "Mailand · 2026",
        it: "Milano · 2026",
      },
    },
    {
      key: "paris",
      href: "#",
      labels: {
        en: "Paris · 2027",
        es: "París · 2027",
        fr: "Paris · 2027",
        pt: "Paris · 2027",
        de: "Paris · 2027",
        it: "Parigi · 2027",
      },
    },
  ],
};

const LEGAL_LINKS: LinkSpec[] = [
  {
    key: "privacy",
    href: "/privacy",
    labels: {
      en: "Privacy Policy",
      es: "Privacidad",
      fr: "Confidentialité",
      pt: "Privacidade",
      de: "Datenschutz",
      it: "Privacy",
    },
  },
  {
    key: "terms",
    href: "/terms",
    labels: {
      en: "Terms & Conditions",
      es: "Términos y Condiciones",
      fr: "Conditions générales",
      pt: "Termos e Condições",
      de: "AGB",
      it: "Termini e Condizioni",
    },
  },
];

function buildLegalLinks(locale: Locale): FooterLink[] {
  return LEGAL_LINKS.map((link) => ({
    _key: link.key,
    label: link.labels[locale],
    href: link.href,
  }));
}

function buildColumns(locale: Locale): FooterColumn[] {
  return COLUMN_KEYS.map((colKey) => ({
    _key: colKey,
    heading: HEADINGS[locale][colKey],
    links: COLUMNS[colKey].map((link) => ({
      _key: link.key,
      label: link.labels[locale],
      href: link.href,
    })),
  }));
}

const docId = (locale: Locale) => `footer-${locale}`;

async function run() {
  console.log(`Seeding footer in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  for (const locale of locales) {
    tx.createOrReplace({
      _id: docId(locale),
      _type: "footer",
      language: locale,
      contactHeading: HEADINGS[locale].contact,
      columns: buildColumns(locale),
      legalLinks: buildLegalLinks(locale),
    });
  }

  tx.createOrReplace({
    _id: "footer-metadata",
    _type: "translation.metadata",
    schemaTypes: ["footer"],
    translations: locales.map((locale) => ({
      _key: locale,
      language: locale,
      value: { _type: "reference", _ref: docId(locale), _weak: true },
    })),
  });

  await tx.commit();
  console.log(`✓ Seeded ${locales.length} footer docs + translation metadata.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
