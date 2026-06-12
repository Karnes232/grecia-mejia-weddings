import { defineField, defineType } from "sanity";

const altField = {
  name: "alt",
  type: "string",
  title: "Alt text",
  description: "Used for accessibility and SEO. Reused across all languages.",
};

export const contactPageMedia = defineType({
  name: "contactPageMedia",
  title: "Contact Page Media",
  type: "document",
  description:
    "Shared imagery for the Contact page — same visuals across every language.",
  fields: [
    defineField({
      name: "hero",
      title: "Hero image",
      type: "object",
      options: { collapsible: true, collapsed: false },
      description: "The cinematic candlelit hero photograph.",
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
    prepare: () => ({ title: "Contact Page Media", media: "🖼️" }),
  },
});
