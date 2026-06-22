import { defineArrayMember, defineField, defineType } from "sanity";

const sameLanguageFilter = (context: { document?: unknown }) => {
  const language = (context.document as { language?: string } | undefined)
    ?.language;
  return language
    ? { filter: "language == $language", params: { language } }
    : { filter: "true" };
};

/**
 * Services — hub page (the `/services` landing page).
 *
 * Localized singleton (one doc per locale, linked via `translation.metadata`).
 * The service index references standalone `service` documents; all other
 * sections are editorial copy held here. Shared hero imagery lives in
 * `servicePageMedia`. Mirrors `portfolioPage`.
 */
export const servicePage = defineType({
  name: "servicePage",
  title: "Services Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "intro", title: "Intro" },
    { name: "index", title: "Service index" },
    { name: "approach", title: "Approach" },
    { name: "related", title: "Related" },
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

    // ── Service index ─────────────────────────────────────────────────────
    defineField({
      name: "index",
      title: "Service index",
      type: "object",
      group: "index",
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic-olive accents.",
        }),
        defineField({
          name: "services",
          title: "Services",
          type: "array",
          description:
            "Reference the services to list, in order. Number, name and summary come from each service doc.",
          of: [
            defineArrayMember({
              type: "reference",
              to: [{ type: "service" }],
              weak: true,
              options: { disableNew: true, filter: sameLanguageFilter },
            }),
          ],
        }),
      ],
    }),

    // ── Approach ──────────────────────────────────────────────────────────
    defineField({
      name: "approach",
      title: "Approach",
      type: "object",
      group: "approach",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic-olive accents.",
        }),
        { name: "deck", title: "Deck", type: "text", rows: 2 },
        defineField({
          name: "movements",
          title: "Movements",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 3 },
              ],
              preview: { select: { title: "title", subtitle: "body" } },
            }),
          ],
        }),
      ],
    }),

    // ── Related ───────────────────────────────────────────────────────────
    defineField({
      name: "related",
      title: "Related",
      type: "object",
      group: "related",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic-olive accents.",
        }),
        defineField({
          name: "articles",
          title: "Related articles",
          type: "array",
          description: "Journal articles for the SEO weave (same language).",
          of: [
            defineArrayMember({
              type: "reference",
              to: [{ type: "article" }],
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
      title: "Services Page",
      subtitle: language ? (language as string).toUpperCase() : undefined,
      media: "✦",
    }),
  },
});
