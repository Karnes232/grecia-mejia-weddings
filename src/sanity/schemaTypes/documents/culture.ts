import { defineArrayMember, defineField, defineType } from "sanity";

import { apiVersion } from "../../env";

// Atlas tile layouts — mirror the mosaic spans in the design's Traditions Atlas
// (`pages/multicultural-hub.jsx`: x8 hero, x4 tall, x4 square, x6 wide, x12 full).
const TILE_OPTIONS = [
  { title: "Hero (x8, panoramic)", value: "hero" },
  { title: "Tall (x4)", value: "tall" },
  { title: "Square (x4)", value: "square" },
  { title: "Wide (x6)", value: "wide" },
  { title: "Full-width (x12)", value: "full" },
] as const;

/**
 * A cultural / religious wedding tradition (Indian, Jewish, Arab, Interfaith…).
 *
 * Localized — one doc per locale, linked via `translation.metadata`. Holds the
 * card content shown in the Multicultural hub's Traditions Atlas plus the
 * identity needed for its own `/multicultural-weddings/[culture]` detail page.
 * Imagery lives in the locale-agnostic `cultureMedia` doc, matched by `slug`.
 *
 * Detail-page section content (ceremony arc, design concepts, planning notes)
 * is intentionally not modelled yet — the hub is the current focus, and culture
 * detail pages are scaffolded separately via the `/new-culture` skill.
 */
export const culture = defineType({
  name: "culture",
  title: "Culture",
  type: "document",
  groups: [
    { name: "identity", title: "Identity" },
    { name: "card", title: "Atlas card" },
    { name: "intro", title: "Intro" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),

    // ── Identity ─────────────────────────────────────────────────────────
    defineField({
      name: "name",
      title: "Tradition name",
      type: "string",
      group: "identity",
      description: 'Canonical name used on the atlas — e.g. "Indian Weddings".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "identity",
      options: {
        source: "name",
        maxLength: 96,
        isUnique: async (slug, context) => {
          const { document, getClient } = context;
          const client = getClient({ apiVersion });
          const id = document?._id?.replace(/^drafts\./, "");
          const language = (document as { language?: string } | null)?.language;
          const params = {
            draft: `drafts.${id}`,
            published: id,
            slug,
            language,
          };
          const query = `!defined(*[
            _type == "culture" &&
            !(_id in [$draft, $published]) &&
            slug.current == $slug &&
            language == $language
          ][0]._id)`;
          return client.fetch<boolean>(query, params);
        },
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "number",
      title: "Atlas number",
      type: "string",
      group: "identity",
      description: 'Display order on the atlas (e.g. "01", "02").',
    }),
    defineField({
      name: "tile",
      title: "Atlas tile layout",
      type: "string",
      group: "identity",
      options: { list: [...TILE_OPTIONS] },
      description: "Controls the card's span in the atlas mosaic.",
    }),

    // ── Atlas card ───────────────────────────────────────────────────────
    defineField({
      name: "cardEyebrow",
      title: "Card eyebrow (after the number)",
      type: "string",
      group: "card",
      description:
        'Small-caps note shown next to the number — e.g. "The studio\'s most-held tradition" or just the category ("Jewish").',
    }),
    defineField({
      name: "cardBlurb",
      title: "Card blurb",
      type: "text",
      rows: 3,
      group: "card",
      description: "The card paragraph shown on the atlas.",
    }),
    defineField({
      name: "cardMeta",
      title: "Card meta line",
      type: "string",
      group: "card",
      description:
        'Footer line on the card — e.g. "Punjabi · Gujarati · South Indian · Sikh" or "Discover".',
    }),

    // ── Intro ────────────────────────────────────────────────────────────
    defineField({
      name: "intro",
      title: "Intro / summary",
      type: "text",
      rows: 4,
      group: "intro",
      description:
        "Short lead used at the top of the culture's detail page (and as a fallback meta description).",
    }),
  ],
  preview: {
    select: { title: "name", number: "number", language: "language" },
    prepare: ({ title, number, language }) => ({
      title: (title as string) ?? "Culture",
      subtitle: [number ? `№ ${number}` : null, language ? `· ${language.toUpperCase()}` : null]
        .filter(Boolean)
        .join(" "),
      media: "🪔",
    }),
  },
});
