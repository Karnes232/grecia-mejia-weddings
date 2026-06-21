import { defineField, defineType } from "sanity";

/**
 * Shared imagery for the Portfolio hub — same hero visual across every language
 * (non-localized, fixed `_id`). Mirrors `journalPageMedia`.
 */
export const portfolioPageMedia = defineType({
  name: "portfolioPageMedia",
  title: "Portfolio Page Media",
  type: "document",
  description:
    "Shared imagery for the Portfolio hub — same across every language.",
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
    prepare: () => ({ title: "Portfolio Page Media", media: "🖼️" }),
  },
});
