import { defineField, defineType } from "sanity";

const altField = {
  name: "alt",
  type: "string",
  title: "Alt text",
  description: "Used for accessibility and SEO. Reused across all languages.",
};

/**
 * Shared imagery for the Multicultural Weddings hub page — same visuals across
 * every language. Atlas card images come from each `cultureMedia` doc; the
 * "From the journal" images come from each article's own hero image — this
 * holds only the hub hero.
 */
export const multiculturalPageMedia = defineType({
  name: "multiculturalPageMedia",
  title: "Multicultural Page Media",
  type: "document",
  description:
    "Shared imagery for the Multicultural Weddings page — same visuals across every language.",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [altField],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Multicultural Page Media", media: "🖼️" }),
  },
});
