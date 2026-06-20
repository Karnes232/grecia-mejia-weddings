import { defineField, defineType } from "sanity";

const LOCALES = [
  { name: "en", title: "English" },
  { name: "es", title: "Español" },
  { name: "fr", title: "Français" },
  { name: "pt", title: "Português" },
  { name: "de", title: "Deutsch" },
  { name: "it", title: "Italiano" },
] as const;

/**
 * A Journal category (Indian Weddings, Wedding Costs, Planning Guides…).
 *
 * Single document — `title`, `slug`, and `blurb` use field-level localization
 * (one subfield per locale). `order` and `seo` are shared across locales.
 * Referenced by `article.category`; drives the hub filter chips and the
 * `/journal/category/[category]` archive pages.
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
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),

    defineField({
      name: "title",
      title: "Title",
      description: 'Translated per locale — e.g. "Indian Weddings" / "Bodas Indias".',
      type: "object",
      group: "content",
      options: { collapsible: true, collapsed: false },
      fields: LOCALES.map(({ name, title }) =>
        defineField({ name, title, type: "string" }),
      ),
      validation: (r) =>
        r.custom((v: Record<string, string | undefined> | undefined) => {
          if (!v?.en?.trim()) return "English title is required.";
          return true;
        }),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description:
        "Translated per locale — e.g. en `indian-weddings`, es `bodas-indias`.",
      type: "object",
      group: "content",
      options: { collapsible: true, collapsed: false },
      fields: LOCALES.map(({ name, title }) =>
        defineField({
          name,
          title,
          type: "slug",
          options: { source: `title.${name}`, maxLength: 96 },
        }),
      ),
      validation: (r) =>
        r.custom((v: Record<string, { current?: string } | undefined> | undefined) => {
          if (!v?.en?.current?.trim()) return "English slug is required.";
          return true;
        }),
    }),
    defineField({
      name: "blurb",
      title: "Blurb",
      description: "Short description shown on the category archive page — translated per locale.",
      type: "object",
      group: "content",
      options: { collapsible: true, collapsed: true },
      fields: LOCALES.map(({ name, title }) =>
        defineField({ name, title, type: "text", rows: 2 }),
      ),
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
    select: { title: "title.en", order: "order" },
    prepare: ({ title, order }) => ({
      title: (title as string | undefined) ?? "Category",
      subtitle: order != null ? `#${order as number}` : undefined,
      media: "🏷️",
    }),
  },
});
