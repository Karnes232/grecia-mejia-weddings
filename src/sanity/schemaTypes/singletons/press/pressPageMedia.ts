import { defineArrayMember, defineField, defineType } from "sanity";

import { PRESS_FEATURED_KEY_OPTIONS } from "../../imageKeyOptions";

const altField = {
  name: "alt",
  type: "string",
  title: "Alt text",
  description: "Used for accessibility and SEO. Reused across all languages.",
};

export const pressPageMedia = defineType({
  name: "pressPageMedia",
  title: "Press Page Media",
  type: "document",
  description:
    "Shared imagery for the Press page — same visuals across every language.",
  fields: [
    defineField({
      name: "hero",
      title: "Hero cover",
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
      name: "featured",
      title: "Featured press images",
      type: "object",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: "images",
          title: "Images",
          type: "array",
          options: { layout: "grid" },
          of: [
            defineArrayMember({
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "key",
                  title: "Feature slot",
                  type: "string",
                  description:
                    "Maps to the matching feature's image slot in the Press Page.",
                  options: { list: [...PRESS_FEATURED_KEY_OPTIONS] },
                  validation: (r) => r.required(),
                }),
                altField,
              ],
              preview: {
                select: { title: "key", media: "asset" },
              },
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Press Page Media", media: "🖼️" }),
  },
});
