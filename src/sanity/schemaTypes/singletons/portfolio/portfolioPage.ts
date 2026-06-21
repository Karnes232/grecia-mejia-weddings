import { defineArrayMember, defineField, defineType } from "sanity";

// Reference filter — same-language case studies only.
const sameLanguageFilter = (context: { document?: unknown }) => {
  const language = (context.document as { language?: string } | undefined)
    ?.language;
  return language
    ? { filter: "language == $language", params: { language } }
    : { filter: "true" };
};

/**
 * Portfolio Weddings — hub page (the `/portfolio` landing page).
 *
 * Localized singleton (one doc per locale, linked via `translation.metadata`).
 * The case-study mosaic references standalone `portfolio` documents; all other
 * sections are editorial copy held here. Shared hero imagery lives in
 * `portfolioPageMedia`. Mirrors `multiculturalPage`.
 */
export const portfolioPage = defineType({
  name: "portfolioPage",
  title: "Portfolio Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "intro", title: "Intro" },
    { name: "grid", title: "Case studies" },
    { name: "cta", title: "CTA" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),

    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "scriptOverline", title: "Script overline", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic-gold accents.",
          validation: (r) => r.required(),
        }),
        { name: "deck", title: "Deck", type: "text", rows: 3 },
        { name: "captionLeft", title: "Bottom caption · left", type: "string" },
        { name: "captionCenter", title: "Bottom caption · center", type: "string" },
        { name: "captionRight", title: "Bottom caption · right", type: "string" },
      ],
    }),

    // ── Intro ─────────────────────────────────────────────────────────────
    defineField({
      name: "intro",
      title: "Intro",
      type: "object",
      group: "intro",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sideEyebrow", title: "Side eyebrow", type: "string" },
        { name: "sideNote", title: "Side note", type: "text", rows: 3 },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic-olive accents.",
        }),
        { name: "lede", title: "Lede paragraph", type: "text", rows: 3 },
        defineField({
          name: "body",
          title: "Body",
          type: "array",
          of: [defineArrayMember({ type: "block", lists: [] })],
        }),
      ],
    }),

    // ── Case studies ──────────────────────────────────────────────────────
    defineField({
      name: "grid",
      title: "Case-study grid",
      type: "object",
      group: "grid",
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic-olive accents.",
        }),
        { name: "filterLabel", title: "Filter label", type: "string" },
        defineField({
          name: "caseStudies",
          title: "Case studies",
          type: "array",
          description:
            "Reference the case studies to show, in order. Card content, meta and tile layout come from each case-study doc.",
          of: [
            defineArrayMember({
              type: "reference",
              to: [{ type: "portfolio" }],
              weak: true,
              options: { disableNew: true, filter: sameLanguageFilter },
            }),
          ],
        }),
      ],
    }),

    // ── CTA ───────────────────────────────────────────────────────────────
    defineField({
      name: "cta",
      title: "CTA",
      type: "object",
      group: "cta",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Script eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic-gold accents.",
        }),
        { name: "body", title: "Body", type: "text", rows: 2 },
        { name: "ctaLabel", title: "CTA label", type: "string" },
        { name: "ctaHref", title: "CTA href", type: "string" },
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare: ({ language }) => ({
      title: "Portfolio Page",
      subtitle: language ? (language as string).toUpperCase() : undefined,
      media: "💍",
    }),
  },
});
