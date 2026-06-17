import { defineField, defineType } from "sanity";

import { apiVersion } from "../../env";

/**
 * A Journal category (Indian Weddings, Wedding Costs, Planning Guides…).
 *
 * Localized — one doc per locale, linked via `translation.metadata`. Slugs are
 * translated per locale so the category archive URLs localize. Referenced by
 * `article.category`; drives the hub filter chips (with live counts) and the
 * `/journal/category/[category]` archive pages. Mirrors the `culture` pattern.
 */
export const articleCategory = defineType({
  name: "articleCategory",
  title: "Journal Category",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
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

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      description: 'Canonical category name — e.g. "Indian Weddings".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      description:
        "Translated per locale — e.g. en `indian-weddings`, es `bodas-indias`.",
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
            _type == "articleCategory" &&
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
      name: "blurb",
      title: "Blurb",
      type: "text",
      rows: 2,
      group: "content",
      description: "Short description shown on the category archive page.",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      group: "content",
      description: "Sort position in the hub filter chip row (lower = first).",
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", language: "language", order: "order" },
    prepare: ({ title, language, order }) => ({
      title: (title as string) ?? "Category",
      subtitle: [
        order != null ? `#${order}` : null,
        language ? (language as string).toUpperCase() : null,
      ]
        .filter(Boolean)
        .join(" · "),
      media: "🏷️",
    }),
  },
});
