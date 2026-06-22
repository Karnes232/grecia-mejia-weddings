import { defineField, defineType } from "sanity";

/**
 * Shared imagery for the Services hub — same hero visual across every language
 * (non-localized, fixed `_id`). Mirrors `portfolioPageMedia`.
 */
export const servicePageMedia = defineType({
  name: "servicePageMedia",
  title: "Services Page Media",
  type: "document",
  description:
    "Shared imagery for the Services hub — same across every language.",
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
          fields: [
            {
              name: "alt",
              title: "Alt text",
              type: "string",
              description:
                "Used for accessibility and SEO. Reused across all languages.",
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Services Page Media", media: "🖼️" }),
  },
});
