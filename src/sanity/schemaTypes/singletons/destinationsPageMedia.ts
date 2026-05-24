import { defineField, defineType } from "sanity";

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
