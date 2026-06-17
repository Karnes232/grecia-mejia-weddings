import { defineField, defineType } from "sanity";

/**
 * A Journal author (currently just Grecia).
 *
 * Localized — one doc per locale, linked via `translation.metadata` — so the
 * `role` and `bio` translate while the portrait/name stay consistent. Referenced
 * by `article.author` for the byline + end-of-article bio block.
 */
export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: 'e.g. "Grecia Mejía".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description: 'Shown after the name — e.g. "Founder".',
    }),
    defineField({
      name: "portrait",
      title: "Portrait",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Used for accessibility and SEO.",
        },
      ],
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
      description: "End-of-article author paragraph.",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", language: "language", media: "portrait" },
    prepare: ({ title, subtitle, language, media }) => ({
      title: (title as string) ?? "Author",
      subtitle: [subtitle, language ? (language as string).toUpperCase() : null]
        .filter(Boolean)
        .join(" · "),
      media,
    }),
  },
});
