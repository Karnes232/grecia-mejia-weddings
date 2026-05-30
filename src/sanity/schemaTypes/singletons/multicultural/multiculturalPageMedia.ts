import { defineArrayMember, defineField, defineType } from "sanity";

import { MULTICULTURAL_RELATED_KEY_OPTIONS } from "../../imageKeyOptions";

const altField = {
  name: "alt",
  type: "string",
  title: "Alt text",
  description: "Used for accessibility and SEO. Reused across all languages.",
};

/**
 * Shared imagery for the Multicultural Weddings hub page — same visuals across
 * every language. Atlas card images come from each `cultureMedia` doc; this
 * holds the hub hero and the "From the journal" related-article images.
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
    defineField({
      name: "relatedArticles",
      title: "Related-article images",
      type: "array",
      description: "One per related article in the 'From the journal' section.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "key",
              title: "Image slot (matches imageKey on the page doc)",
              type: "string",
              options: { list: [...MULTICULTURAL_RELATED_KEY_OPTIONS] },
              validation: (r) => r.required(),
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [altField],
            }),
          ],
          preview: { select: { title: "key", media: "image" } },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Multicultural Page Media", media: "🖼️" }),
  },
});
