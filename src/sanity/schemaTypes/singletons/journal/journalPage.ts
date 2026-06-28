import { defineField, defineType } from "sanity";

/**
 * The Journal hub (`/journal`) editorial copy — localized singleton, one doc
 * per locale linked via `translation.metadata`. Mirrors `venuesPage`.
 *
 * The featured article, the article grid, and the category filter chips are all
 * DERIVED from `article` / `articleCategory` docs via GROQ — only the framing
 * copy lives here. `featuredArticle` is an optional editor override; the query
 * falls back to the most recent `featured` article when it's empty.
 */
export const journalPage = defineType({
  name: "journalPage",
  title: "Journal Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "featured", title: "Featured" },
    { name: "grid", title: "Grid" },
    { name: "cta", title: "Closing CTA" },
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
        { name: "eyebrow", title: "Eyebrow (small-caps)", type: "string" },
        {
          name: "scriptOverline",
          title: "Script overline",
          type: "string",
          description:
            "Pinyon-Script accent above the title (e.g. 'Dispatches on').",
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Base is roman; use *word* for an italic accent (e.g. the *considered* wedding.).",
          validation: (r) => r.required(),
        }),
        { name: "deck", title: "Deck (sub-headline)", type: "text", rows: 3 },
        {
          name: "bottomLeft",
          title: "Bottom strip · left",
          type: "string",
          description: "e.g. 'updated weekly' (article count is prepended live).",
        },
        {
          name: "bottomCenter",
          title: "Bottom strip · center (italic)",
          type: "string",
        },
        { name: "bottomRight", title: "Bottom strip · right", type: "string" },
      ],
    }),

    // ── Featured ──────────────────────────────────────────────────────────
    defineField({
      name: "featuredArticle",
      title: "Featured article (Editor's Pick)",
      type: "reference",
      to: [{ type: "article" }],
      weak: true,
      group: "featured",
      description:
        "Optional. Leave empty to feature the most recent article marked Featured.",
      options: {
        filter: ({ document }) =>
          document?.language
            ? {
                filter: "language == $language",
                params: { language: document.language },
              }
            : { filter: "true" },
      },
    }),

    // ── Grid ──────────────────────────────────────────────────────────────
    defineField({
      name: "grid",
      title: "Grid heading",
      type: "object",
      group: "grid",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow (small-caps)", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for an italic accent (e.g. Recent *writing.*).",
        }),
      ],
    }),


    // ── Closing CTA ───────────────────────────────────────────────────────
    defineField({
      name: "cta",
      title: "Closing CTA",
      type: "object",
      group: "cta",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "eyebrow",
          title: "Script line",
          type: "string",
          description: "Rendered in Pinyon Script.",
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for an italic accent.",
        }),
        { name: "body", title: "Body (deck)", type: "text", rows: 3 },
        { name: "ctaLabel", title: "CTA label", type: "string" },
        { name: "ctaHref", title: "CTA href", type: "string" },
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare: ({ language }) => ({
      title: "Journal Page",
      subtitle: language ? (language as string).toUpperCase() : undefined,
      media: "📔",
    }),
  },
});
