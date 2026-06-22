/**
 * Shared types + builders for the per-service seed copy files.
 *
 * Each service file in this folder exports a `Record<Locale, ServiceCopy>` with
 * the detail-page content, fully translated. `buildServiceBody()` turns one
 * locale's copy into the Sanity `service` document body. The hub copy lives in
 * `./hub.ts` and is assembled by `buildServicePageBody()`.
 *
 * Service slugs are TRANSLATED per locale (see `SLUGS`) — document ids stay
 * keyed by the canonical English slug so re-seeding replaces docs in place.
 * Every locale doc points at the shared `serviceMedia` doc via its `media`
 * reference — the link that survives per-language slugs. Cross-references
 * (related services / articles / destinations / cultures) resolve to the
 * SAME-locale target via the deterministic `<type>-<slug>-<locale>` id.
 */

import { randomUUID } from "node:crypto";

import { type Locale } from "../../../i18n/routing";

// ── Deterministic ids (canonical EN slug, dot-free) ─────────────────────────
export const docId = (canonicalSlug: string, locale: Locale) =>
  `service-${canonicalSlug}-${locale}`;
export const metadataId = (canonicalSlug: string) =>
  `service-${canonicalSlug}-metadata`;
export const mediaId = (canonicalSlug: string) =>
  `serviceMedia-${canonicalSlug}`;
export const hubDocId = (locale: Locale) => `servicePage-${locale}`;

// ── Locale-invariant layout (display order + numerals) ─────────────────────
export type ServiceMeta = { slug: string; number: string };

export const SERVICE_META: ServiceMeta[] = [
  { slug: "destination-wedding-planning", number: "01" },
  { slug: "luxury-wedding-planning", number: "02" },
  { slug: "multicultural-wedding-planning", number: "03" },
  { slug: "wedding-weekend-planning", number: "04" },
  { slug: "venue-sourcing", number: "05" },
  { slug: "wedding-design", number: "06" },
  { slug: "event-production", number: "07" },
  { slug: "guest-experience", number: "08" },
];

// ── Translated slugs (ASCII-safe, per i18n-strategy.md "concept slugs") ─────
export const SLUGS: Record<string, Record<Locale, string>> = {
  "destination-wedding-planning": {
    en: "destination-wedding-planning",
    es: "planificacion-de-bodas-de-destino",
    fr: "organisation-de-mariage-de-destination",
    pt: "planeamento-de-casamentos-de-destino",
    de: "zielhochzeitsplanung",
    it: "organizzazione-matrimoni-di-destinazione",
  },
  "luxury-wedding-planning": {
    en: "luxury-wedding-planning",
    es: "planificacion-de-bodas-de-lujo",
    fr: "organisation-de-mariage-de-luxe",
    pt: "planeamento-de-casamentos-de-luxo",
    de: "luxushochzeitsplanung",
    it: "organizzazione-matrimoni-di-lusso",
  },
  "multicultural-wedding-planning": {
    en: "multicultural-wedding-planning",
    es: "planificacion-de-bodas-multiculturales",
    fr: "organisation-de-mariage-multiculturel",
    pt: "planeamento-de-casamentos-multiculturais",
    de: "multikulturelle-hochzeitsplanung",
    it: "organizzazione-matrimoni-multiculturali",
  },
  "wedding-weekend-planning": {
    en: "wedding-weekend-planning",
    es: "planificacion-de-fin-de-semana-nupcial",
    fr: "organisation-de-week-end-de-mariage",
    pt: "planeamento-de-fim-de-semana-nupcial",
    de: "hochzeitswochenend-planung",
    it: "organizzazione-del-weekend-di-nozze",
  },
  "venue-sourcing": {
    en: "venue-sourcing",
    es: "busqueda-de-locaciones",
    fr: "recherche-de-lieux",
    pt: "selecao-de-locais",
    de: "locationsuche",
    it: "ricerca-location",
  },
  "wedding-design": {
    en: "wedding-design",
    es: "diseno-de-bodas",
    fr: "design-de-mariage",
    pt: "design-de-casamentos",
    de: "hochzeitsdesign",
    it: "design-di-matrimoni",
  },
  "event-production": {
    en: "event-production",
    es: "produccion-de-eventos",
    fr: "production-evenementielle",
    pt: "producao-de-eventos",
    de: "eventproduktion",
    it: "produzione-eventi",
  },
  "guest-experience": {
    en: "guest-experience",
    es: "experiencia-de-invitados",
    fr: "experience-des-invites",
    pt: "experiencia-dos-convidados",
    de: "gaesteerlebnis",
    it: "esperienza-degli-ospiti",
  },
};

// ── Cross-references (locale-invariant slug lists; resolved per locale) ──────
type CrossRefs = {
  services?: string[];
  articles?: string[];
  destinations?: string[];
  cultures?: string[];
};

export const CROSS_REFS: Record<string, CrossRefs> = {
  "destination-wedding-planning": {
    services: [
      "multicultural-wedding-planning",
      "venue-sourcing",
      "guest-experience",
    ],
    articles: [
      "best-indian-wedding-venues-punta-cana",
      "luxury-punta-cana-wedding-cost",
      "the-sangeet-night-before",
    ],
    destinations: ["punta-cana"],
    cultures: ["indian-weddings"],
  },
};

// The hub's "ecosystem" article weave (same three as the flagship).
export const HUB_ARTICLES = [
  "best-indian-wedding-venues-punta-cana",
  "luxury-punta-cana-wedding-cost",
  "the-sangeet-night-before",
];

// ── Copy shapes (mirror the `service` / `servicePage` schemas) ──────────────
type HeroCopy = {
  eyebrow: string;
  scriptOverline: string;
  headline: string;
  deck: string;
  captionLeft: string;
  captionCenter: string;
  captionRight: string;
};

type CtaCopy = {
  eyebrow: string;
  headline: string;
  body: string;
  ctaLabel: string;
};

export type ServiceCopy = {
  name: string;
  summary: string;
  hero: HeroCopy;
  overview: {
    eyebrow: string;
    headline: string;
    lede: string;
    bodyParagraphs: string[];
    captionLine1?: string;
    captionLine2?: string;
  };
  // Flagship-only sections (omitted on stubs).
  inclusions?: {
    eyebrow: string;
    headline: string;
    deck: string;
    items: Array<{ title: string; body: string }>;
  };
  process?: {
    eyebrow: string;
    headline: string;
    deck: string;
    steps: Array<{
      numeral: string;
      title: string;
      when: string;
      body: string;
    }>;
  };
  audience?: {
    eyebrow: string;
    headline: string;
    items: Array<{ title: string; body: string }>;
  };
  faq?: {
    eyebrow: string;
    headline: string;
    items: Array<{ question: string; answer: string[] }>;
  };
  cta: CtaCopy;
};

export type ServicePageCopy = {
  hero: HeroCopy;
  intro: {
    sideEyebrow: string;
    sideNote: string;
    headline: string;
    lede: string;
    bodyParagraphs: string[];
  };
  index: { eyebrow: string; headline: string };
  approach: {
    eyebrow: string;
    headline: string;
    deck: string;
    movements: Array<{ title: string; body: string }>;
  };
  related: { eyebrow: string; headline: string };
  cta: CtaCopy;
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

const ptBlocks = (paragraphs: string[]) => paragraphs.map(ptBlock);

const refArray = (ids: string[] | undefined) =>
  (ids ?? []).map((ref) => k(weakRef(ref)));

/** One locale's copy → the Sanity `service` document body (sans _id/_type/language). */
export function buildServiceBody(
  canonicalSlug: string,
  locale: Locale,
  copy: ServiceCopy,
) {
  const meta = SERVICE_META.find((m) => m.slug === canonicalSlug);
  if (!meta) throw new Error(`Unknown service: ${canonicalSlug}`);
  const cross = CROSS_REFS[canonicalSlug] ?? {};

  const overview: Record<string, unknown> = {
    eyebrow: copy.overview.eyebrow,
    headline: copy.overview.headline,
    lede: copy.overview.lede,
    body: ptBlocks(copy.overview.bodyParagraphs),
  };
  if (copy.overview.captionLine1) overview.captionLine1 = copy.overview.captionLine1;
  if (copy.overview.captionLine2) overview.captionLine2 = copy.overview.captionLine2;

  return {
    name: copy.name,
    slug: { _type: "slug", current: SLUGS[canonicalSlug][locale] },
    media: weakRef(mediaId(canonicalSlug)),
    number: meta.number,
    summary: copy.summary,
    hero: copy.hero,
    overview,
    ...(copy.inclusions
      ? {
          inclusions: {
            eyebrow: copy.inclusions.eyebrow,
            headline: copy.inclusions.headline,
            deck: copy.inclusions.deck,
            items: copy.inclusions.items.map((i) => k(i)),
          },
        }
      : {}),
    ...(copy.process
      ? {
          process: {
            eyebrow: copy.process.eyebrow,
            headline: copy.process.headline,
            deck: copy.process.deck,
            steps: copy.process.steps.map((s) => k(s)),
          },
        }
      : {}),
    ...(copy.audience
      ? {
          audience: {
            eyebrow: copy.audience.eyebrow,
            headline: copy.audience.headline,
            items: copy.audience.items.map((i) => k(i)),
          },
        }
      : {}),
    ...(copy.faq
      ? {
          faq: {
            eyebrow: copy.faq.eyebrow,
            headline: copy.faq.headline,
            items: copy.faq.items.map((i) =>
              k({ question: i.question, answer: ptBlocks(i.answer) }),
            ),
          },
        }
      : {}),
    relatedServices: refArray(
      cross.services?.map((s) => docId(s, locale)),
    ),
    relatedArticles: refArray(
      cross.articles?.map((s) => `article-${s}-${locale}`),
    ),
    relatedDestinations: refArray(
      cross.destinations?.map((s) => `destination-${s}-${locale}`),
    ),
    relatedCultures: refArray(
      cross.cultures?.map((s) => `culture-${s}-${locale}`),
    ),
    cta: {
      eyebrow: copy.cta.eyebrow,
      headline: copy.cta.headline,
      body: copy.cta.body,
      ctaLabel: copy.cta.ctaLabel,
      ctaHref: CTA_HREF,
    },
  };
}

/** One locale's hub copy → the Sanity `servicePage` document body. */
export function buildServicePageBody(locale: Locale, copy: ServicePageCopy) {
  return {
    hero: copy.hero,
    intro: {
      sideEyebrow: copy.intro.sideEyebrow,
      sideNote: copy.intro.sideNote,
      headline: copy.intro.headline,
      lede: copy.intro.lede,
      body: ptBlocks(copy.intro.bodyParagraphs),
    },
    index: {
      eyebrow: copy.index.eyebrow,
      headline: copy.index.headline,
      services: SERVICE_META.map((m) => k(weakRef(docId(m.slug, locale)))),
    },
    approach: {
      eyebrow: copy.approach.eyebrow,
      headline: copy.approach.headline,
      deck: copy.approach.deck,
      movements: copy.approach.movements.map((m) => k(m)),
    },
    related: {
      eyebrow: copy.related.eyebrow,
      headline: copy.related.headline,
      articles: refArray(HUB_ARTICLES.map((s) => `article-${s}-${locale}`)),
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
