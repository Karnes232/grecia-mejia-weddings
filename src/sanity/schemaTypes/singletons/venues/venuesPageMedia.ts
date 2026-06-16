import { defineField, defineType } from "sanity";

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
  ],
  preview: {
    prepare: () => ({ title: "Venues Page Media", media: "🖼️" }),
  },
});
