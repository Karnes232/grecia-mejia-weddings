import { defineArrayMember, defineField, defineType } from "sanity";

import { VENUES_TYPOLOGY_KEY_OPTIONS } from "../../imageKeyOptions";

const altField = {
  name: "alt",
  type: "string",
  title: "Alt text",
  description: "Used for accessibility and SEO. Reused across all languages.",
};

export const venuesPageMedia = defineType({
  name: "venuesPageMedia",
  title: "Venues Page Media",
  type: "document",
  description:
    "Shared imagery for the Venues hub — same visuals across every language.",
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
      name: "typology",
      title: "Typology images",
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
                  title: "Typology slot",
                  type: "string",
                  description:
                    "Maps to the matching typology card's image slot in the Venues Page.",
                  options: { list: [...VENUES_TYPOLOGY_KEY_OPTIONS] },
                  validation: (r) => r.required(),
                }),
                altField,
              ],
              preview: { select: { title: "key", media: "asset" } },
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Venues Page Media", media: "🖼️" }),
  },
});
