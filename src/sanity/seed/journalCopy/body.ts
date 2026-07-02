/**
 * Rich Portable Text body builder for Journal articles. Produces the exact node
 * shapes the renderers in `components/JournalDetailPage/ArticleProse` and the
 * GROQ body projection in `queries/journal.ts` expect. Every article's
 * `buildBody(locale)` composes its body from these helpers.
 *
 * Prose block styles: normal / lede / h2 / h3 / blockquote (+ bullet/number
 * lists). Marks: strong / em / link{href}. Custom blocks mirror the members in
 * `schemaTypes/objects/articleBlocks.ts`. Venue / destination cards reference
 * their docs via the established deterministic ids so they stay live links.
 *
 * Images are stubs (`{_type:"image", alt}`) like `heroImage` — editors upload
 * the real asset later, at which point the image-bearing blocks render.
 */

import { randomUUID } from "node:crypto";

import { type Locale } from "../../../i18n/routing";

const uid = () => randomUUID();
const weakRef = (ref: string) => ({ _type: "reference", _weak: true, _ref: ref });

// ── Inline runs ─────────────────────────────────────────────────────────────
/** A run of inline text: a plain string, or a styled/linked fragment. */
export type Run = string | { text: string; strong?: boolean; em?: boolean; href?: string };

type Span = { _type: "span"; _key: string; text: string; marks: string[] };
type MarkDef = { _key: string; _type: "link"; href: string };

function inline(runs: Run[]): { children: Span[]; markDefs: MarkDef[] } {
  const children: Span[] = [];
  const markDefs: MarkDef[] = [];
  for (const r of runs) {
    if (typeof r === "string") {
      children.push({ _type: "span", _key: uid(), text: r, marks: [] });
      continue;
    }
    const marks: string[] = [];
    if (r.strong) marks.push("strong");
    if (r.em) marks.push("em");
    if (r.href) {
      const key = uid();
      markDefs.push({ _key: key, _type: "link", href: r.href });
      marks.push(key);
    }
    children.push({ _type: "span", _key: uid(), text: r.text, marks });
  }
  return { children, markDefs };
}

type Block = Record<string, unknown>;

const asRuns = (runs: Run[] | string): Run[] =>
  typeof runs === "string" ? [runs] : runs;

function textBlock(style: string, runs: Run[] | string): Block {
  const { children, markDefs } = inline(asRuns(runs));
  return { _type: "block", _key: uid(), style, markDefs, children };
}

// ── Prose helpers ───────────────────────────────────────────────────────────
/** Opening lede paragraph (the renderer anchors it as `#intro`). */
export const lede = (runs: Run[] | string): Block => textBlock("lede", runs);
export const p = (runs: Run[] | string): Block => textBlock("normal", runs);
export const h2 = (text: string): Block => textBlock("h2", text);
export const h3 = (text: string): Block => textBlock("h3", text);
export const quote = (runs: Run[] | string): Block => textBlock("blockquote", runs);

function listItem(listType: "bullet" | "number", runs: Run[] | string): Block {
  const { children, markDefs } = inline(asRuns(runs));
  return {
    _type: "block",
    _key: uid(),
    style: "normal",
    listItem: listType,
    level: 1,
    markDefs,
    children,
  };
}
/** Bullet list — spread into the body array: `...ul([...])`. */
export const ul = (items: (Run[] | string)[]): Block[] =>
  items.map((it) => listItem("bullet", it));
export const ol = (items: (Run[] | string)[]): Block[] =>
  items.map((it) => listItem("number", it));

// ── Custom editorial blocks ─────────────────────────────────────────────────
const imageStub = (alt: string, caption?: string) => ({
  _type: "image",
  _key: uid(),
  alt,
  ...(caption ? { caption } : {}),
});

/** Wide 16:9 cinematic feature image. */
export const featureImage = (alt: string, caption?: string, credit?: string): Block => ({
  _type: "featureImage",
  _key: uid(),
  image: { _type: "image", alt },
  ...(caption ? { caption } : {}),
  ...(credit ? { credit } : {}),
});

/** Three-figure stat row. */
export const stats = (items: { value: string; label: string }[]): Block => ({
  _type: "articleStats",
  _key: uid(),
  items: items.map((i) => ({ _key: uid(), ...i })),
});

/** "The short version" key-takeaways callout. */
export const takeaways = (heading: string, items: string[]): Block => ({
  _type: "articleTakeaways",
  _key: uid(),
  heading,
  items,
});

export type VenueCard = {
  venueSlug: string;
  tag?: string;
  eyebrow?: string;
  blurb?: string;
  metaRows?: { label: string; value: string }[];
  linkLabel?: string;
};

/** Inline linked venue cards (1–3), referencing venue docs (same locale). */
export const venueCards = (
  locale: Locale,
  label: string,
  cards: VenueCard[],
): Block => ({
  _type: "articleVenueCards",
  _key: uid(),
  label,
  cards: cards.map((c) => ({
    _key: uid(),
    venue: weakRef(`venue-${c.venueSlug}-${locale}`),
    ...(c.tag ? { tag: c.tag } : {}),
    ...(c.eyebrow ? { eyebrow: c.eyebrow } : {}),
    ...(c.blurb ? { blurb: c.blurb } : {}),
    ...(c.metaRows
      ? { metaRows: c.metaRows.map((m) => ({ _key: uid(), ...m })) }
      : {}),
    ...(c.linkLabel ? { linkLabel: c.linkLabel } : {}),
  })),
});

/** Two-up editorial gallery. */
export const gallery = (images: { alt: string; caption?: string }[]): Block => ({
  _type: "articleGallery",
  _key: uid(),
  images: images.map((im) => imageStub(im.alt, im.caption)),
});

/** Full-column pull quote (rules above + below). */
export const pullQuote = (q: string, cite?: string): Block => ({
  _type: "articlePullQuote",
  _key: uid(),
  quote: q,
  ...(cite ? { cite } : {}),
});

/** Image + text split. */
export const split = (opts: {
  alt: string;
  eyebrow?: string;
  heading?: string;
  paragraphs: string[];
  flip?: boolean;
}): Block => ({
  _type: "articleSplit",
  _key: uid(),
  image: { _type: "image", alt: opts.alt },
  ...(opts.eyebrow ? { eyebrow: opts.eyebrow } : {}),
  ...(opts.heading ? { heading: opts.heading } : {}),
  paragraphs: opts.paragraphs,
  ...(opts.flip ? { flip: true } : {}),
});

/** Wide cinematic destination feature card (references a destination). */
export const destinationCard = (
  locale: Locale,
  destinationSlug: string,
  eyebrow?: string,
  linkLabel?: string,
): Block => ({
  _type: "destinationCard",
  _key: uid(),
  destination: weakRef(`destination-${destinationSlug}-${locale}`),
  ...(eyebrow ? { eyebrow } : {}),
  ...(linkLabel ? { linkLabel } : {}),
});

/** Mid-article inline CTA (olive band). */
export const inlineCta = (opts: {
  script?: string;
  heading?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}): Block => ({ _type: "inlineCta", _key: uid(), ...opts });

// ── Doc-level helpers (faqs + bleedQuote) ───────────────────────────────────
export type FaqCopy = { question: string; answer: Run[] | string };
export type BleedQuoteCopy = { script?: string; quote: string; cite?: string };

/** Build the `faqs[]` field — each answer is Portable Text (one block). */
export const buildFaqs = (faqs: FaqCopy[]) =>
  faqs.map((f) => ({ _key: uid(), question: f.question, answer: [p(f.answer)] }));

/** Build the `bleedQuote` object field (image is a stub). */
export const buildBleedQuote = (bq: BleedQuoteCopy, alt: string) => ({
  ...(bq.script ? { script: bq.script } : {}),
  quote: bq.quote,
  ...(bq.cite ? { cite: bq.cite } : {}),
  image: { _type: "image", alt },
});
