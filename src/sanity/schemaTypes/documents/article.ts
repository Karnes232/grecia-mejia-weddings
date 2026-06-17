import { defineArrayMember, defineField, defineType } from "sanity";

import { apiVersion } from "../../env";
import { articleBlockMembers } from "../objects/articleBlocks";

// Reference filter resolver that scopes the picker to the article's own locale,
// so editors only link same-language docs (mirrors `venueRegion.venues`).
const sameLanguageFilter = (context: { document?: unknown }) => {
  const language = (context.document as { language?: string } | undefined)
    ?.language;
  return language
    ? { filter: "language == $language", params: { language } }
    : { filter: "true" };
};

/**
 * A Journal article (blog post) — the `/journal/[slug]` page.
 *
 * Localized — one doc per locale, linked via `translation.metadata`, with a
 * translated slug per locale. Mirrors the `culture` collection. The internal
 * linking matrix (`.claude/seo-strategy.md`) is enforced via required
 * references: every article must link a destination + 3–5 sibling articles.
 * `relatedService` / `featuredWedding` are deferred until those collections
 * exist. The body's custom block types (feature image, stats, venue cards…)
 * are added in Phase 2 alongside their renderers.
 */
export const article = defineType({
  name: "article",
  title: "Journal Article",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "media", title: "Media" },
    { name: "related", title: "Related (SEO)" },
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

    // ── Content ───────────────────────────────────────────────────────────
    defineField({
      name: "title",
      title: "Title (H1)",
      type: "string",
      group: "content",
      description:
        "Base is roman; use *word* for an italic accent (e.g. Best Indian Wedding *Venues* in Punta Cana).",
      validation: (r) => r.required().min(10).max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      description:
        "Translated per locale, kebab-case, ≤60 chars, no dates/locale codes.",
      options: {
        source: "title",
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
            _type == "article" &&
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
      name: "kicker",
      title: "Kicker",
      type: "string",
      group: "content",
      description:
        'Optional second half of the card/hero eyebrow after the category — e.g. "Punta Cana" in "Indian Weddings · Punta Cana".',
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      group: "content",
      description:
        "1–2 sentences. Used on cards, the featured lead, and as the meta-description fallback.",
      validation: (r) => r.required().max(280),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "articleCategory" }],
      weak: true,
      group: "content",
      options: { disableNew: false, filter: sameLanguageFilter },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      weak: true,
      group: "content",
      options: { filter: sameLanguageFilter },
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: "content",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "readMinutes",
      title: "Read time (minutes)",
      type: "number",
      group: "content",
      description: 'Rendered as "X min read".',
      validation: (r) => r.min(1).integer(),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      group: "content",
      description: "Eligible to lead the Journal hub as the Editor's Pick.",
      initialValue: false,
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      group: "content",
      description:
        "Long-form article. Custom block types (feature image, stats, venue cards…) are added in Phase 2.",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Lede (opening)", value: "lede" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "string",
                    title: "URL",
                    description:
                      "Internal path (e.g. /destinations/punta-cana) or full URL.",
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Alt text" },
            { name: "caption", type: "string", title: "Caption" },
          ],
        }),
        ...articleBlockMembers,
      ],
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      group: "content",
      description: "Powers the FAQ accordion + FAQPage schema (rendered Phase 2).",
      of: [
        defineArrayMember({
          type: "object",
          name: "faq",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
              validation: (r) => r.required(),
            },
            {
              name: "answer",
              title: "Answer",
              type: "array",
              of: [{ type: "block", styles: [{ title: "Normal", value: "normal" }], lists: [] }],
            },
          ],
          preview: { select: { title: "question" } },
        }),
      ],
    }),
    defineField({
      name: "bleedQuote",
      title: "Full-bleed quote",
      type: "object",
      group: "content",
      description:
        "Optional cinematic quote-over-image beat after the article body.",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "script", title: "Script line", type: "string" },
        { name: "quote", title: "Quote", type: "text", rows: 3 },
        { name: "cite", title: "Attribution", type: "string" },
        defineField({
          name: "image",
          title: "Background image",
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt text", type: "string" }],
        }),
      ],
    }),

    // ── Media ─────────────────────────────────────────────────────────────
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Used for accessibility and SEO.",
        },
      ],
      validation: (r) => r.required(),
    }),

    // ── Related (internal-linking matrix) ─────────────────────────────────
    defineField({
      name: "relatedDestination",
      title: "Related destination",
      type: "reference",
      to: [{ type: "destination" }],
      weak: true,
      group: "related",
      options: { filter: sameLanguageFilter },
      description: "Required — every article links to a destination.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "relatedCulture",
      title: "Related culture",
      type: "reference",
      to: [{ type: "culture" }],
      weak: true,
      group: "related",
      options: { filter: sameLanguageFilter },
      description: "Optional but recommended.",
    }),
    defineField({
      name: "relatedVenue",
      title: "Related venue",
      type: "reference",
      to: [{ type: "venue" }],
      weak: true,
      group: "related",
      options: { filter: sameLanguageFilter },
      description: "Optional but recommended.",
    }),
    defineField({
      name: "relatedArticles",
      title: "Related articles",
      type: "array",
      group: "related",
      description: "3–5 sibling articles for the 'Keep reading' weave.",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "article" }],
          weak: true,
          options: { filter: sameLanguageFilter },
        }),
      ],
      validation: (r) => r.min(3).max(5),
    }),
  ],
  orderings: [
    {
      title: "Published (newest first)",
      name: "publishedDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      language: "language",
      media: "heroImage",
      featured: "featured",
    },
    prepare: ({ title, language, media, featured }) => ({
      title: (title as string) ?? "Article",
      subtitle: [
        featured ? "★ Featured" : null,
        language ? (language as string).toUpperCase() : null,
      ]
        .filter(Boolean)
        .join(" · "),
      media,
    }),
  },
});
