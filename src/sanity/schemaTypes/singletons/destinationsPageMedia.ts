import { defineArrayMember, defineField, defineType } from "sanity";

const altField = {
  name: "alt",
  type: "string",
  title: "Alt text",
  description: "Used for accessibility and SEO. Reused across all languages.",
};

export const destinationsPageMedia = defineType({
  name: "destinationsPageMedia",
  title: "Destinations Page Media",
  type: "document",
  description:
    "Shared imagery for the Destinations hub — same visuals across every language.",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: "image",
          title: "Background image",
          type: "image",
          options: { hotspot: true },
          fields: [altField],
        }),
      ],
    }),
    defineField({
      name: "destinations",
      title: "Destination images",
      type: "array",
      description:
        "Keyed by destination slug — must match the slug on the localized doc's region cards.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "slug",
              title: "Slug (matches destinations entry)",
              type: "string",
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
          preview: { select: { title: "slug", media: "image" } },
        }),
      ],
    }),
    defineField({
      name: "spotlight",
      title: "Spotlight",
      type: "object",
      options: { collapsible: true, collapsed: true },
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
    prepare: () => ({ title: "Destinations Page Media", media: "🗺️" }),
  },
});
