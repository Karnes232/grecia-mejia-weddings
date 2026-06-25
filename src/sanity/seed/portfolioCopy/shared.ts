/**
 * Shared types + builders for the per-case-study portfolio seed.
 *
 * Each case study file exports a `Record<Locale, PortfolioCopy>` with the full
 * detail-page content, translated. `buildPortfolioBody()` turns one locale's
 * copy into the Sanity `portfolio` document body; cross-references (destination,
 * venue, culture, related articles, next case study) resolve to the SAME-locale
 * target via deterministic ids. Slugs are TRANSLATED per locale (`SLUGS`); doc
 * ids stay keyed by the canonical English slug. Mirrors `serviceCopy`.
 */

import { randomUUID } from "node:crypto";

import { type Locale } from "../../../i18n/routing";

// ── Deterministic ids ───────────────────────────────────────────────────────
export const docId = (canonicalSlug: string, locale: Locale) =>
  `portfolio-${canonicalSlug}-${locale}`;
export const metadataId = (canonicalSlug: string) =>
  `portfolio-${canonicalSlug}-metadata`;
export const mediaId = (canonicalSlug: string) =>
  `portfolioMedia-${canonicalSlug}`;
export const hubDocId = (locale: Locale) => `portfolioPage-${locale}`;

// ── Locale-invariant per-case metadata (refs + layout) ──────────────────────
export type CaseMeta = {
  slug: string; // canonical EN slug (doc id key)
  tile: string;
  destination: string; // destination canonical slug
  venue: string; // venue slug
  culture: string; // culture canonical slug
  articles: string[]; // article slugs (same in every locale)
  next: string; // canonical slug of the "next" case study
};

export const CASE_META: CaseMeta[] = [
  {
    slug: "luxury-indian-wedding-punta-cana",
    tile: "featured",
    destination: "punta-cana",
    venue: "jellyfish-restaurant",
    culture: "indian-weddings",
    articles: [
      "best-indian-wedding-venues-punta-cana",
      "the-sangeet-night-before",
      "luxury-punta-cana-wedding-cost",
    ],
    next: "jewish-wedding-tuscany",
  },
  {
    slug: "jewish-wedding-tuscany",
    tile: "half",
    destination: "tuscany",
    venue: "castello-di-velasco",
    culture: "jewish-weddings",
    articles: [
      "kosher-jewish-wedding-caribbean",
      "when-to-wed-amalfi-coast",
      "luxury-punta-cana-wedding-cost",
    ],
    next: "chateau-wedding-provence",
  },
  {
    slug: "chateau-wedding-provence",
    tile: "half",
    destination: "provence",
    venue: "chateau-de-la-croix",
    culture: "european-weddings",
    articles: ["when-to-wed-amalfi-coast", "luxury-punta-cana-wedding-cost"],
    next: "arab-wedding-punta-cana",
  },
  {
    slug: "arab-wedding-punta-cana",
    tile: "twothird",
    destination: "punta-cana",
    venue: "kukua-beach-club",
    culture: "arab-weddings",
    articles: [
      "luxury-punta-cana-wedding-cost",
      "best-indian-wedding-venues-punta-cana",
    ],
    next: "luxury-indian-wedding-punta-cana",
  },
];

export const CASE_ORDER = CASE_META.map((c) => c.slug);

// ── Translated slugs (ASCII-safe concept slugs) ─────────────────────────────
export const SLUGS: Record<string, Record<Locale, string>> = {
  "luxury-indian-wedding-punta-cana": {
    en: "luxury-indian-wedding-punta-cana",
    es: "boda-india-de-lujo-punta-cana",
    fr: "mariage-indien-de-luxe-punta-cana",
    pt: "casamento-indiano-de-luxo-punta-cana",
    de: "indische-luxushochzeit-punta-cana",
    it: "matrimonio-indiano-di-lusso-punta-cana",
  },
  "jewish-wedding-tuscany": {
    en: "jewish-wedding-tuscany",
    es: "boda-judia-en-la-toscana",
    fr: "mariage-juif-en-toscane",
    pt: "casamento-judaico-na-toscana",
    de: "juedische-hochzeit-in-der-toskana",
    it: "matrimonio-ebraico-in-toscana",
  },
  "chateau-wedding-provence": {
    en: "chateau-wedding-provence",
    es: "boda-en-chateau-en-provenza",
    fr: "mariage-au-chateau-en-provence",
    pt: "casamento-em-chateau-na-provenca",
    de: "chateau-hochzeit-in-der-provence",
    it: "matrimonio-in-castello-in-provenza",
  },
  "arab-wedding-punta-cana": {
    en: "arab-wedding-punta-cana",
    es: "boda-arabe-en-punta-cana",
    fr: "mariage-arabe-a-punta-cana",
    pt: "casamento-arabe-em-punta-cana",
    de: "arabische-hochzeit-in-punta-cana",
    it: "matrimonio-arabo-a-punta-cana",
  },
};

// ── Copy shapes ─────────────────────────────────────────────────────────────
export type PortfolioCopy = {
  name: string;
  filterTags: string[];
  cardMeta: string;
  cardBlurb: string;
  hero: {
    eyebrow: string;
    scriptOverline: string;
    headline: string;
    sub: string;
    captionLeft: string;
    captionCenter: string;
    captionRight: string;
  };
  guests: string;
  duration: string;
  season: string;
  story: {
    sideEyebrow: string;
    sideNote: string;
    headline: string;
    lede: string;
    body: string[];
  };
  quote: { quote: string; cite: string };
  design: {
    eyebrow: string;
    headline: string;
    body: string[];
    palette: Array<{ hex: string; name: string }>;
  };
  logistics: {
    eyebrow: string;
    headline: string;
    deck: string;
    blocks: Array<{
      title: string;
      body: string;
      rows: Array<{ label: string; value: string }>;
    }>;
  };
  services: {
    eyebrow: string;
    headline: string;
    deck: string;
    items: Array<{ number: string; title: string; body: string }>;
  };
  related: { eyebrow: string; headline: string };
  cta: {
    eyebrow: string;
    headline: string;
    body: string;
    ctaLabel: string;
  };
};

export type PortfolioPageCopy = {
  hero: {
    eyebrow: string;
    scriptOverline: string;
    headline: string;
    deck: string;
    captionLeft: string;
    captionCenter: string;
    captionRight: string;
  };
  intro: {
    sideEyebrow: string;
    sideNote: string;
    headline: string;
    lede: string;
    body: string[];
  };
  grid: { eyebrow: string; headline: string; filterLabel: string };
  cta: { eyebrow: string; headline: string; body: string; ctaLabel: string };
};

// ── Builders ────────────────────────────────────────────────────────────────
const CTA_HREF = "/contact";

const k = <T extends object>(obj: T) => ({ _key: randomUUID(), ...obj });
const weakRef = (ref: string) => ({
  _type: "reference" as const,
  _weak: true,
  _ref: ref,
});
const ptBlock = (text: string) => ({
  _type: "block",
  _key: randomUUID(),
  style: "normal" as const,
  markDefs: [],
  children: [{ _type: "span", _key: randomUUID(), text, marks: [] }],
});
const ptBlocks = (paras: string[]) => paras.map(ptBlock);

/** One locale's copy → the Sanity `portfolio` document body (sans _id/_type/language). */
export function buildPortfolioBody(
  canonicalSlug: string,
  locale: Locale,
  copy: PortfolioCopy,
) {
  const meta = CASE_META.find((c) => c.slug === canonicalSlug);
  if (!meta) throw new Error(`Unknown case study: ${canonicalSlug}`);

  return {
    name: copy.name,
    slug: { _type: "slug", current: SLUGS[canonicalSlug][locale] },
    media: weakRef(mediaId(canonicalSlug)),
    tile: meta.tile,
    filterTags: copy.filterTags,
    cardMeta: copy.cardMeta,
    cardBlurb: copy.cardBlurb,
    hero: copy.hero,
    destination: weakRef(`destination-${meta.destination}-${locale}`),
    venue: weakRef(`venue-${meta.venue}-${locale}`),
    culture: weakRef(`culture-${meta.culture}-${locale}`),
    guests: copy.guests,
    duration: copy.duration,
    season: copy.season,
    story: {
      sideEyebrow: copy.story.sideEyebrow,
      sideNote: copy.story.sideNote,
      headline: copy.story.headline,
      lede: copy.story.lede,
      body: ptBlocks(copy.story.body),
    },
    quote: copy.quote,
    design: {
      eyebrow: copy.design.eyebrow,
      headline: copy.design.headline,
      body: ptBlocks(copy.design.body),
      palette: copy.design.palette.map((p) => k(p)),
    },
    logistics: {
      eyebrow: copy.logistics.eyebrow,
      headline: copy.logistics.headline,
      deck: copy.logistics.deck,
      blocks: copy.logistics.blocks.map((b) =>
        k({ title: b.title, body: b.body, rows: b.rows.map((r) => k(r)) }),
      ),
    },
    services: {
      eyebrow: copy.services.eyebrow,
      headline: copy.services.headline,
      deck: copy.services.deck,
      items: copy.services.items.map((i) => k(i)),
    },
    related: {
      eyebrow: copy.related.eyebrow,
      headline: copy.related.headline,
      articles: meta.articles.map((s) => k(weakRef(`article-${s}-${locale}`))),
    },
    nextCaseStudy: weakRef(docId(meta.next, locale)),
    cta: {
      eyebrow: copy.cta.eyebrow,
      headline: copy.cta.headline,
      body: copy.cta.body,
      ctaLabel: copy.cta.ctaLabel,
      ctaHref: CTA_HREF,
    },
  };
}

/** One locale's hub copy → the Sanity `portfolioPage` document body. */
export function buildPortfolioPageBody(locale: Locale, copy: PortfolioPageCopy) {
  return {
    hero: copy.hero,
    intro: {
      sideEyebrow: copy.intro.sideEyebrow,
      sideNote: copy.intro.sideNote,
      headline: copy.intro.headline,
      lede: copy.intro.lede,
      body: ptBlocks(copy.intro.body),
    },
    grid: {
      eyebrow: copy.grid.eyebrow,
      headline: copy.grid.headline,
      filterLabel: copy.grid.filterLabel,
      caseStudies: CASE_ORDER.map((slug) => k(weakRef(docId(slug, locale)))),
    },
    cta: {
      eyebrow: copy.cta.eyebrow,
      headline: copy.cta.headline,
      body: copy.cta.body,
      ctaLabel: copy.cta.ctaLabel,
      ctaHref: CTA_HREF,
    },
  };
}
