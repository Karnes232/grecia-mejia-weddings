import { defineArrayMember, defineField, defineType } from "sanity";

import { apiVersion } from "../../env";

// Reference filter — same-language docs only (mirrors article/culture/portfolio).
const sameLanguageFilter = (context: { document?: unknown }) => {
  const language = (context.document as { language?: string } | undefined)
    ?.language;
  return language
    ? { filter: "language == $language", params: { language } }
    : { filter: "true" };
};

const refArray = (name: string, title: string, to: string, description: string) =>
  defineField({
    name,
    title,
    type: "array",
    group: "related",
    description,
    of: [
      defineArrayMember({
        type: "reference",
        to: [{ type: to }],
        weak: true,
        options: { disableNew: true, filter: sameLanguageFilter },
      }),
    ],
  });

/**
 * A Service — the `/services/[service]` page. An SEO-focused description of one
 * of the studio's services (planning, design, production…).
 *
 * Localized — one doc per locale, linked via `translation.metadata`, with a
 * translated slug per locale. Shared imagery lives in `serviceMedia`
 * (media-by-reference). Mirrors the `portfolio` collection.
 */
export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  groups: [
    { name: "identity", title: "Identity", default: true },
    { name: "hero", title: "Hero" },
    { name: "overview", title: "Overview" },
    { name: "inclusions", title: "Inclusions" },
    { name: "process", title: "Process" },
    { name: "audience", title: "Audience" },
    { name: "related", title: "Related" },
    { name: "faq", title: "FAQ" },
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

    // ── Identity ─────────────────────────────────────────────────────────
    defineField({
      name: "name",
      title: "Service name",
      type: "string",
      group: "identity",
      description: 'e.g. "Destination Wedding Planning".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "identity",
      description:
        "Translated per locale — e.g. en `destination-wedding-planning`.",
      options: {
        source: "name",
        maxLength: 96,
        isUnique: async (slug, context) => {
          const { document, getClient } = context;
          const client = getClient({ apiVersion });
          const id = document?._id?.replace(/^drafts\./, "");
          const language = (document as { language?: string } | null)?.language;
          const params = {
            draft: `drafts.${id}`,
            published: id,
            slug,
            language,
          };
          const query = `!defined(*[
            _type == "service" &&
            !(_id in [$draft, $published]) &&
            slug.current == $slug &&
            language == $language
          ][0]._id)`;
          return client.fetch<boolean>(query, params);
        },
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "media",
      title: "Media document",
      type: "reference",
      to: [{ type: "serviceMedia" }],
      weak: true,
      group: "identity",
      description:
        "This service's shared, locale-agnostic imagery. Every language version points to the same media doc.",
    }),
    defineField({
      name: "number",
      title: "Number",
      type: "string",
      group: "identity",
      description: 'Display order + eyebrow numeral — e.g. "01".',
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 2,
      group: "identity",
      description:
        "One-line description shown in the hub index and 'related services' cards.",
    }),

    // ── Hero ─────────────────────────────────────────────────────────────
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          description: 'e.g. "Services · No. 01".',
        },
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

    // ── Overview ─────────────────────────────────────────────────────────
    defineField({
      name: "overview",
      title: "Overview",
      type: "object",
      group: "overview",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
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
          of: [defineArrayMember({ type: "block" })],
        }),
        { name: "captionLine1", title: "Image caption · line 1", type: "string" },
        { name: "captionLine2", title: "Image caption · line 2", type: "string" },
      ],
    }),

    // ── Inclusions ───────────────────────────────────────────────────────
    defineField({
      name: "inclusions",
      title: "What it includes",
      type: "object",
      group: "inclusions",
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
          name: "items",
          title: "Inclusions",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 2 },
              ],
              preview: { select: { title: "title" } },
            }),
          ],
        }),
      ],
    }),

    // ── Process ──────────────────────────────────────────────────────────
    defineField({
      name: "process",
      title: "Process",
      type: "object",
      group: "process",
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
          name: "steps",
          title: "Steps",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "numeral", title: "Roman numeral", type: "string" },
                { name: "title", title: "Title", type: "string" },
                { name: "when", title: "When", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 3 },
              ],
              preview: { select: { title: "title", subtitle: "when" } },
            }),
          ],
        }),
      ],
    }),

    // ── Audience ─────────────────────────────────────────────────────────
    defineField({
      name: "audience",
      title: "Who it is for",
      type: "object",
      group: "audience",
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
          name: "items",
          title: "Audience points",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 2 },
              ],
              preview: { select: { title: "title", subtitle: "body" } },
            }),
          ],
        }),
      ],
    }),

    // ── Related ──────────────────────────────────────────────────────────
    defineField({
      name: "relatedServices",
      title: "Related services",
      type: "array",
      group: "related",
      description: "Other services to feature in 'Often paired with' (same language).",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "service" }],
          weak: true,
          options: { disableNew: true, filter: sameLanguageFilter },
        }),
      ],
    }),
    refArray(
      "relatedArticles",
      "Related articles",
      "article",
      "Journal articles for the SEO weave (same language).",
    ),
    refArray(
      "relatedDestinations",
      "Related destinations",
      "destination",
      "Destinations for the SEO aside (same language).",
    ),
    refArray(
      "relatedCultures",
      "Related cultures",
      "culture",
      "Cultures for the SEO aside (same language).",
    ),

    // ── FAQ ──────────────────────────────────────────────────────────────
    defineField({
      name: "faq",
      title: "FAQ",
      type: "object",
      group: "faq",
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
          name: "items",
          title: "Questions",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "question", title: "Question", type: "string" },
                defineField({
                  name: "answer",
                  title: "Answer",
                  type: "array",
                  of: [defineArrayMember({ type: "block" })],
                }),
              ],
              preview: { select: { title: "question" } },
            }),
          ],
        }),
      ],
    }),

    // ── CTA ──────────────────────────────────────────────────────────────
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
  orderings: [
    {
      title: "Number",
      name: "number",
      by: [{ field: "number", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", number: "number", language: "language" },
    prepare: ({ title, number, language }) => ({
      title: (title as string) ?? "Service",
      subtitle: [
        number ? `№ ${number}` : null,
        language ? `· ${(language as string).toUpperCase()}` : null,
      ]
        .filter(Boolean)
        .join(" "),
      media: "✦",
    }),
  },
});
