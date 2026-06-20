import { defineField, defineType } from "sanity";

const LOCALES = [
  { name: "en", title: "English" },
  { name: "es", title: "Español" },
  { name: "fr", title: "Français" },
  { name: "pt", title: "Português" },
  { name: "de", title: "Deutsch" },
  { name: "it", title: "Italiano" },
] as const;

/**
 * A Journal author (currently just Grecia).
 *
 * Single document — `name` and `portrait` are shared across all locales.
 * `role` and `bio` use field-level localization (one subfield per locale).
 * Referenced by `article.author` for the byline + end-of-article bio block.
 */
export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: 'e.g. "Grecia Mejía".',
      validation: (r) => r.required(),
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
      name: "role",
      title: "Role",
      description: "Shown after the name — translated per locale.",
      type: "object",
      options: { collapsible: true, collapsed: false },
      fields: LOCALES.map(({ name, title }) =>
        defineField({ name, title, type: "string" }),
      ),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      description: "End-of-article author paragraph — translated per locale.",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: LOCALES.map(({ name, title }) =>
        defineField({ name, title, type: "text", rows: 4 }),
      ),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role.en", media: "portrait" },
    prepare: ({ title, subtitle, media }) => ({
      title: (title as string) ?? "Author",
      subtitle: subtitle as string | undefined,
      media,
    }),
  },
});
