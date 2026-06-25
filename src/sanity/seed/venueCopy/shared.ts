/**
 * Shared types + builders for the per-venue seed copy.
 *
 * Mirrors `seed/cultureCopy/shared.ts`. Venue slugs are proper nouns, kept
 * identical across locales (each locale still gets its own doc). Imagery is
 * shared via the `media` reference; the parent region via the `region`
 * reference. Document ids are keyed by the canonical slug for idempotency.
 */

import { randomUUID } from "node:crypto";

import { type Locale } from "../../../i18n/routing";

export const venueDocId = (slug: string, locale: Locale) =>
  `venue-${slug}-${locale}`;
export const venueMetadataId = (slug: string) => `venue-${slug}-metadata`;
export const venueMediaId = (slug: string) => `venueMedia-${slug}`;
const regionDocId = (regionSlug: string, locale: Locale) =>
  `venueRegion-${regionSlug}-${locale}`;

// ── Copy shape ──────────────────────────────────────────────────────────────
type Meta = { label: string; value: string };

export type VenueCopy = {
  name: string;
  region: string; // canonical region slug
  // Region-card fields
  number: string;
  tag: string;
  location: string;
  cardBlurb: string;
  cardMeta: Meta[];
  // Header
  header: {
    eyebrow: string;
    headline: string;
    location: string;
    deck: string;
    galleryLabel?: string;
    ctaLabel: string;
    ctaHref: string;
  };
  facts: Array<{ label: string; value: string; sub: string }>;
  overview: {
    sideLabel: string;
    sideNote: string;
    headline: string;
    lede: string;
    bodyParagraphs: string[];
    pull?: string;
  };
  capacity?: {
    eyebrow: string;
    headline: string;
    meter: {
      title: string;
      sub: string;
      marks: string[];
      fillLeft: number;
      fillWidth: number;
      recs: Array<{ label: string; value: string; body: string }>;
    };
    loves: { title: string; items: string[] };
    constraints: { title: string; items: string[] };
  };
  compatibility?: {
    eyebrow: string;
    headline: string;
    intro: string;
    items: Array<{ name: string; sub: string; rating: number; note: string }>;
  };
  logistics?: {
    eyebrow: string;
    headline: string;
    blocks: Array<{ title: string; rows: Meta[] }>;
  };
  photography?: {
    eyebrow: string;
    headline: string;
    items: Array<{ time: string; title: string; body: string; imageKey: string }>;
  };
  hotels?: {
    eyebrow: string;
    headline: string;
    items: Array<{
      number: string;
      name: string;
      sub: string;
      distance: string;
      keys: string;
    }>;
  };
  portfolio?: {
    eyebrow: string;
    headline: string;
    viewAllLabel?: string;
    items: string[]; // portfolio canonical slugs — resolved to same-locale refs
  };
  related?: {
    eyebrow: string;
    headline: string;
    // Canonical slugs — resolved to same-locale references at build.
    articles: string[];
    sidebarVenues: string[];
    sidebarCultures: string[];
    sidebarDestinations: string[];
  };
  faq?: {
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

/** One locale's copy → the Sanity `venue` document body (sans _id/_type/language). */
export function buildVenueBody(slug: string, locale: Locale, copy: VenueCopy) {
  return {
    name: copy.name,
    slug: { _type: "slug", current: slug },
    region: { _type: "reference", _weak: true, _ref: regionDocId(copy.region, locale) },
    media: { _type: "reference", _weak: true, _ref: venueMediaId(slug) },
    number: copy.number,
    tag: copy.tag,
    location: copy.location,
    cardBlurb: copy.cardBlurb,
    cardMeta: copy.cardMeta.map((m) => k(m)),
    header: {
      eyebrow: copy.header.eyebrow,
      headline: copy.header.headline,
      location: copy.header.location,
      deck: copy.header.deck,
      gallery: copy.header.galleryLabel
        ? { label: copy.header.galleryLabel }
        : undefined,
      cta: { label: copy.header.ctaLabel, href: copy.header.ctaHref },
    },
    facts: copy.facts.map((f) => k(f)),
    overview: {
      sideLabel: copy.overview.sideLabel,
      sideNote: copy.overview.sideNote,
      headline: copy.overview.headline,
      lede: copy.overview.lede,
      body: ptBlocks(copy.overview.bodyParagraphs),
      pull: copy.overview.pull,
    },
    capacity: copy.capacity
      ? {
          eyebrow: copy.capacity.eyebrow,
          headline: copy.capacity.headline,
          meter: {
            title: copy.capacity.meter.title,
            sub: copy.capacity.meter.sub,
            marks: copy.capacity.meter.marks,
            fillLeft: copy.capacity.meter.fillLeft,
            fillWidth: copy.capacity.meter.fillWidth,
            recs: copy.capacity.meter.recs.map((r) => k(r)),
          },
          loves: copy.capacity.loves,
          constraints: copy.capacity.constraints,
        }
      : undefined,
    compatibility: copy.compatibility
      ? {
          eyebrow: copy.compatibility.eyebrow,
          headline: copy.compatibility.headline,
          intro: copy.compatibility.intro,
          items: copy.compatibility.items.map((i) => k(i)),
        }
      : undefined,
    logistics: copy.logistics
      ? {
          eyebrow: copy.logistics.eyebrow,
          headline: copy.logistics.headline,
          blocks: copy.logistics.blocks.map((b) =>
            k({ title: b.title, rows: b.rows.map((r) => k(r)) }),
          ),
        }
      : undefined,
    photography: copy.photography
      ? {
          eyebrow: copy.photography.eyebrow,
          headline: copy.photography.headline,
          items: copy.photography.items.map((i) => k(i)),
        }
      : undefined,
    hotels: copy.hotels
      ? {
          eyebrow: copy.hotels.eyebrow,
          headline: copy.hotels.headline,
          items: copy.hotels.items.map((i) => k(i)),
        }
      : undefined,
    portfolio: copy.portfolio
      ? {
          eyebrow: copy.portfolio.eyebrow,
          headline: copy.portfolio.headline,
          viewAllLabel: copy.portfolio.viewAllLabel,
          items: copy.portfolio.items.map((s) =>
            k({ _type: "reference", _weak: true, _ref: `portfolio-${s}-${locale}` }),
          ),
        }
      : undefined,
    related: copy.related
      ? {
          eyebrow: copy.related.eyebrow,
          headline: copy.related.headline,
          articles: copy.related.articles.map((s) =>
            k({ _type: "reference", _weak: true, _ref: `article-${s}-${locale}` }),
          ),
          sidebarVenues: copy.related.sidebarVenues.map((s) =>
            k({ _type: "reference", _weak: true, _ref: venueDocId(s, locale) }),
          ),
          sidebarCultures: copy.related.sidebarCultures.map((s) =>
            k({ _type: "reference", _weak: true, _ref: `culture-${s}-${locale}` }),
          ),
          sidebarDestinations: copy.related.sidebarDestinations.map((s) =>
            k({
              _type: "reference",
              _weak: true,
              _ref: `destination-${s}-${locale}`,
            }),
          ),
        }
      : undefined,
    faq: copy.faq
      ? {
          eyebrow: copy.faq.eyebrow,
          headline: copy.faq.headline,
          items: copy.faq.items.map((i) =>
            k({ question: i.question, answer: ptBlocks(i.answer) }),
          ),
        }
      : undefined,
    cta: copy.cta,
  };
}
