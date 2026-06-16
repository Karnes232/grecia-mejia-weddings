/**
 * Shared types + builders for the per-region venue-region seed copy.
 *
 * Mirrors `seed/cultureCopy/shared.ts`. Region slugs are TRANSLATED per locale
 * (see `SLUGS`) — document ids stay keyed by the canonical English slug so
 * re-seeding replaces in place. Imagery is shared via the `media` reference.
 */

import { randomUUID } from "node:crypto";

import { type Locale } from "../../../i18n/routing";

// ── Deterministic ids (canonical EN slug) ───────────────────────────────────
export const docId = (canonicalSlug: string, locale: Locale) =>
  `venueRegion-${canonicalSlug}-${locale}`;
export const metadataId = (canonicalSlug: string) =>
  `venueRegion-${canonicalSlug}-metadata`;
export const mediaId = (canonicalSlug: string) =>
  `venueRegionMedia-${canonicalSlug}`;

// ── Region order (mirrors the hub) + canonical slugs ────────────────────────
export const REGION_ORDER = [
  "punta-cana",
  "italy",
  "france",
  "spain",
  "caribbean-islands",
  "united-states",
  "greece",
] as const;

export type RegionSlug = (typeof REGION_ORDER)[number];

// ── Translated slugs (ASCII-safe) ───────────────────────────────────────────
export const SLUGS: Record<RegionSlug, Record<Locale, string>> = {
  "punta-cana": {
    en: "punta-cana",
    es: "punta-cana",
    fr: "punta-cana",
    pt: "punta-cana",
    de: "punta-cana",
    it: "punta-cana",
  },
  italy: {
    en: "italy",
    es: "italia",
    fr: "italie",
    pt: "italia",
    de: "italien",
    it: "italia",
  },
  france: {
    en: "france",
    es: "francia",
    fr: "france",
    pt: "franca",
    de: "frankreich",
    it: "francia",
  },
  spain: {
    en: "spain",
    es: "espana",
    fr: "espagne",
    pt: "espanha",
    de: "spanien",
    it: "spagna",
  },
  "caribbean-islands": {
    en: "caribbean-islands",
    es: "islas-del-caribe",
    fr: "iles-des-caraibes",
    pt: "ilhas-das-caraibas",
    de: "karibische-inseln",
    it: "isole-caraibiche",
  },
  "united-states": {
    en: "united-states",
    es: "estados-unidos",
    fr: "etats-unis",
    pt: "estados-unidos",
    de: "vereinigte-staaten",
    it: "stati-uniti",
  },
  greece: {
    en: "greece",
    es: "grecia",
    fr: "grece",
    pt: "grecia",
    de: "griechenland",
    it: "grecia",
  },
};

// ── Copy shape ──────────────────────────────────────────────────────────────
type Meta = { value?: string; label: string; useVenueCount?: boolean };
type LabelHref = { label: string; href?: string };

export type RegionCopy = {
  name: string;
  cardBlurb: string;
  cardMeta: Meta[];
  hero: {
    eyebrow: string;
    scriptOverline: string;
    headline: string;
    deck: string;
    captionLeft: string;
    captionCenter: string;
    captionRight: string;
  };
  guide: {
    sideLabel: string;
    headline: string;
    bodyParagraphs: string[];
    subRegions: LabelHref[];
    related: LabelHref[];
  };
  venuesHeadline: { eyebrow: string; headline: string };
  /** Canonical venue slugs held in this region (referenced from `venue` docs). */
  venues: string[];
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

/** One locale's copy → the Sanity `venueRegion` document body (sans _id/_type/language). */
export function buildRegionBody(
  canonicalSlug: RegionSlug,
  locale: Locale,
  copy: RegionCopy,
) {
  return {
    name: copy.name,
    slug: { _type: "slug", current: SLUGS[canonicalSlug][locale] },
    media: { _type: "reference", _weak: true, _ref: mediaId(canonicalSlug) },
    cardBlurb: copy.cardBlurb,
    cardMeta: copy.cardMeta.map((m) => k(m)),
    hero: copy.hero,
    guide: {
      sideLabel: copy.guide.sideLabel,
      headline: copy.guide.headline,
      body: ptBlocks(copy.guide.bodyParagraphs),
      subRegions: copy.guide.subRegions.map((l) => k(l)),
      related: copy.guide.related.map((l) => k(l)),
    },
    venuesHeadline: copy.venuesHeadline,
    venues: copy.venues.map((slug) =>
      k({ _type: "reference", _weak: true, _ref: `venue-${slug}-${locale}` }),
    ),
    cta: copy.cta,
  };
}
