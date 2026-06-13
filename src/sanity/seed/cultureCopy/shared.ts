/**
 * Shared types + builders for the per-culture seed copy files.
 *
 * Each culture file in this folder exports a `Record<Locale, CultureCopy>`
 * with the FULL detail-page content, fully translated. `buildCultureBody()`
 * turns one locale's copy into the Sanity `culture` document body (slug,
 * media reference, `_key`ed arrays, portable-text blocks).
 *
 * Culture slugs are TRANSLATED per locale (see `SLUGS`) — the document ids
 * stay keyed by the canonical English slug so re-seeding replaces in place.
 */

import { randomUUID } from "node:crypto";

import { routing, type Locale } from "../../../i18n/routing";

// ── Deterministic ids (canonical EN slug, dot-free) ─────────────────────────
export const docId = (canonicalSlug: string, locale: Locale) =>
  `culture-${canonicalSlug}-${locale}`;
export const metadataId = (canonicalSlug: string) =>
  `culture-${canonicalSlug}-metadata`;
export const mediaId = (canonicalSlug: string) =>
  `cultureMedia-${canonicalSlug}`;

// ── Locale-invariant layout (mirrors the atlas mosaic) ─────────────────────
export type CultureMeta = {
  slug: string;
  number: string;
  tile: string;
  alt: string;
};

export const CULTURE_META: CultureMeta[] = [
  {
    slug: "indian-weddings",
    number: "01",
    tile: "hero",
    alt: "An Indian wedding mandap",
  },
  {
    slug: "jewish-weddings",
    number: "02",
    tile: "tall",
    alt: "A Jewish wedding chuppah",
  },
  {
    slug: "arab-weddings",
    number: "03",
    tile: "square",
    alt: "Arab wedding floral design",
  },
  {
    slug: "south-asian-weddings",
    number: "04",
    tile: "square",
    alt: "A South Asian bride",
  },
  {
    slug: "christian-weddings",
    number: "05",
    tile: "square",
    alt: "A Catholic wedding chapel",
  },
  {
    slug: "interfaith-weddings",
    number: "06",
    tile: "wide",
    alt: "An interfaith ceremony",
  },
  {
    slug: "latin-weddings",
    number: "07",
    tile: "wide",
    alt: "A Latin wedding celebration",
  },
  {
    slug: "european-weddings",
    number: "08",
    tile: "full",
    alt: "A European castle wedding",
  },
];

// ── Translated slugs (ASCII-safe, per i18n-strategy.md "concept slugs") ─────
export const SLUGS: Record<string, Record<Locale, string>> = {
  "indian-weddings": {
    en: "indian-weddings",
    es: "bodas-indias",
    fr: "mariages-indiens",
    pt: "casamentos-indianos",
    de: "indische-hochzeiten",
    it: "matrimoni-indiani",
  },
  "jewish-weddings": {
    en: "jewish-weddings",
    es: "bodas-judias",
    fr: "mariages-juifs",
    pt: "casamentos-judaicos",
    de: "juedische-hochzeiten",
    it: "matrimoni-ebraici",
  },
  "arab-weddings": {
    en: "arab-weddings",
    es: "bodas-arabes",
    fr: "mariages-arabes",
    pt: "casamentos-arabes",
    de: "arabische-hochzeiten",
    it: "matrimoni-arabi",
  },
  "south-asian-weddings": {
    en: "south-asian-weddings",
    es: "bodas-del-sur-de-asia",
    fr: "mariages-asie-du-sud",
    pt: "casamentos-do-sul-da-asia",
    de: "suedasiatische-hochzeiten",
    it: "matrimoni-asia-meridionale",
  },
  "christian-weddings": {
    en: "christian-weddings",
    es: "bodas-cristianas",
    fr: "mariages-chretiens",
    pt: "casamentos-cristaos",
    de: "christliche-hochzeiten",
    it: "matrimoni-cristiani",
  },
  "interfaith-weddings": {
    en: "interfaith-weddings",
    es: "bodas-interreligiosas",
    fr: "mariages-interconfessionnels",
    pt: "casamentos-inter-religiosos",
    de: "interreligioese-hochzeiten",
    it: "matrimoni-interreligiosi",
  },
  "latin-weddings": {
    en: "latin-weddings",
    es: "bodas-latinas",
    fr: "mariages-latins",
    pt: "casamentos-latinos",
    de: "lateinamerikanische-hochzeiten",
    it: "matrimoni-latini",
  },
  "european-weddings": {
    en: "european-weddings",
    es: "bodas-europeas",
    fr: "mariages-europeens",
    pt: "casamentos-europeus",
    de: "europaeische-hochzeiten",
    it: "matrimoni-europei",
  },
};

// ── Localized hrefs ─────────────────────────────────────────────────────────
// Stored hrefs are concrete strings rendered through the locale-aware `Link`,
// which only prefixes the locale — so each locale's copy must carry its own
// already-localized path. Build them from the routing config (single source
// of truth for translated path segments).

type PathnameKey = keyof typeof routing.pathnames;

const localizedTemplate = (key: PathnameKey, locale: Locale): string => {
  const entry = routing.pathnames[key];
  return typeof entry === "string" ? entry : entry[locale];
};

/** Localized path to another culture's detail page (translated slug). */
export const culturePath = (locale: Locale, canonicalSlug: string): string =>
  localizedTemplate("/multicultural-weddings/[culture]", locale).replace(
    "[culture]",
    SLUGS[canonicalSlug][locale],
  );

/** Localized path to a destination detail page (slugs are locale-invariant). */
export const destinationPath = (locale: Locale, slug: string): string =>
  localizedTemplate("/destinations/[destination]", locale).replace(
    "[destination]",
    slug,
  );

/** Localized path to a static route (e.g. "/destinations", "/contact"). */
export const staticPath = (locale: Locale, key: string): string =>
  localizedTemplate(key as PathnameKey, locale);

// ── Copy shape (mirrors the `culture` schema, prose as plain strings) ───────
export type CultureCopy = {
  name: string;
  cardEyebrow: string;
  cardBlurb: string;
  cardMeta: string;
  intro: string;
  hero: {
    eyebrow: string;
    scriptOverline: string;
    headline: string;
    deck: string;
    captionLeft: string;
    captionCenter: string;
    captionRight: string;
  };
  factStrip: Array<{ label: string; value: string; sub: string }>;
  overview: {
    sideEyebrow: string;
    sideNote: string;
    headline: string;
    lede: string;
    bodyParagraphs: string[];
    pull: string;
    signatureName: string;
    signatureRole: string;
  };
  ceremonyArc: {
    eyebrow: string;
    headline: string;
    deck: string;
    steps: Array<{
      numeral: string;
      name: string;
      sub: string;
      when: string;
      body: string;
    }>;
  };
  designConcepts: {
    eyebrow: string;
    headline: string;
    deck: string;
    cards: Array<{
      title: string;
      body: string;
      palette: string[];
      imageKey: string;
      rows: Array<{ label: string; value: string }>;
    }>;
  };
  protocols: {
    eyebrow: string;
    headline: string;
    deck: string;
    items: Array<{ title: string; body: string }>;
  };
  planning: {
    eyebrow: string;
    headline: string;
    deck: string;
    days: Array<{
      numeral: string;
      dayLabel: string;
      title: string;
      body: string;
      events: Array<{ time: string; body: string }>;
    }>;
  };
  compatibility: {
    eyebrow: string;
    headline: string;
    viewAllLabel: string;
    viewAllHref: string;
    cards: Array<{
      rating: number;
      name: string;
      sub: string;
      /** Destination slug (locale-invariant) — becomes a `destination` reference. */
      destinationSlug: string;
    }>;
  };
  guest: {
    eyebrow: string;
    headline: string;
    deck: string;
    cells: Array<{ title: string; body: string }>;
  };
  related: {
    eyebrow: string;
    headline: string;
    articles: Array<{
      category: string;
      title: string;
      body: string;
      imageKey: string;
      href?: string;
    }>;
    sidebarDestinations: Array<{ label: string; href?: string }>;
    sidebarVenues: Array<{ label: string; href?: string }>;
    sidebarCultures: Array<{ label: string; href?: string }>;
  };
  faq: {
    eyebrow: string;
    headline: string;
    items: Array<{ question: string; answer: string[] }>;
  };
  cta: {
    eyebrow: string;
    headline: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
};

// ── Builders ────────────────────────────────────────────────────────────────
const k = <T extends object>(obj: T) => ({ _key: randomUUID(), ...obj });

const ptBlock = (text: string) => ({
  _type: "block",
  _key: randomUUID(),
  style: "normal",
  markDefs: [],
  children: [{ _type: "span", _key: randomUUID(), text, marks: [] }],
});

const ptBlocks = (paragraphs: string[]) => paragraphs.map(ptBlock);

/** One locale's copy → the Sanity `culture` document body (sans _id/_type/language). */
export function buildCultureBody(
  canonicalSlug: string,
  locale: Locale,
  copy: CultureCopy,
) {
  const meta = CULTURE_META.find((m) => m.slug === canonicalSlug);
  if (!meta) throw new Error(`Unknown culture: ${canonicalSlug}`);

  const { bodyParagraphs, ...overviewRest } = copy.overview;

  return {
    name: copy.name,
    slug: { _type: "slug", current: SLUGS[canonicalSlug][locale] },
    media: { _type: "reference", _ref: mediaId(canonicalSlug) },
    number: meta.number,
    tile: meta.tile,
    cardEyebrow: copy.cardEyebrow,
    cardBlurb: copy.cardBlurb,
    cardMeta: copy.cardMeta,
    intro: copy.intro,
    hero: copy.hero,
    factStrip: copy.factStrip.map((f) => k(f)),
    overview: { ...overviewRest, body: ptBlocks(bodyParagraphs) },
    ceremonyArc: {
      eyebrow: copy.ceremonyArc.eyebrow,
      headline: copy.ceremonyArc.headline,
      deck: copy.ceremonyArc.deck,
      steps: copy.ceremonyArc.steps.map((s) => k(s)),
    },
    designConcepts: {
      eyebrow: copy.designConcepts.eyebrow,
      headline: copy.designConcepts.headline,
      deck: copy.designConcepts.deck,
      cards: copy.designConcepts.cards.map((c) =>
        k({ ...c, rows: c.rows.map((r) => k(r)) }),
      ),
    },
    protocols: {
      eyebrow: copy.protocols.eyebrow,
      headline: copy.protocols.headline,
      deck: copy.protocols.deck,
      items: copy.protocols.items.map((i) => k(i)),
    },
    planning: {
      eyebrow: copy.planning.eyebrow,
      headline: copy.planning.headline,
      deck: copy.planning.deck,
      days: copy.planning.days.map((d) =>
        k({ ...d, events: d.events.map((e) => k(e)) }),
      ),
    },
    compatibility: {
      eyebrow: copy.compatibility.eyebrow,
      headline: copy.compatibility.headline,
      viewAllLabel: copy.compatibility.viewAllLabel,
      viewAllHref: copy.compatibility.viewAllHref,
      // Image + href live on the referenced destination (same locale, so the
      // deterministic `destination-{slug}-{locale}` id is known at build time).
      cards: copy.compatibility.cards.map(({ destinationSlug, ...rest }) =>
        k({
          ...rest,
          destination: {
            _type: "reference",
            _ref: `destination-${destinationSlug}-${locale}`,
          },
        }),
      ),
    },
    guest: {
      eyebrow: copy.guest.eyebrow,
      headline: copy.guest.headline,
      deck: copy.guest.deck,
      cells: copy.guest.cells.map((c) => k(c)),
    },
    related: {
      eyebrow: copy.related.eyebrow,
      headline: copy.related.headline,
      articles: copy.related.articles.map((a) => k(a)),
      sidebarDestinations: copy.related.sidebarDestinations.map((l) => k(l)),
      sidebarVenues: copy.related.sidebarVenues.map((l) => k(l)),
      sidebarCultures: copy.related.sidebarCultures.map((l) => k(l)),
    },
    faq: {
      eyebrow: copy.faq.eyebrow,
      headline: copy.faq.headline,
      items: copy.faq.items.map((i) =>
        k({ question: i.question, answer: ptBlocks(i.answer) }),
      ),
    },
    cta: copy.cta,
  };
}
