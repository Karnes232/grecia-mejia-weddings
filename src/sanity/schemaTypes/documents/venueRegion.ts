import { defineArrayMember, defineField, defineType } from "sanity";

import { apiVersion } from "../../env";

// Reference filter — same-language docs only (mirrors service/venue).
const sameLanguageFilter = (context: { document?: unknown }) => {
  const language = (context.document as { language?: string } | undefined)
    ?.language;
  return language
    ? { filter: "language == $language", params: { language } }
    : { filter: "true" };
};

// A sidebar list of references to another doc type (same language). Label +
// link come from each referenced doc.
const refArray = (
  name: string,
  title: string,
  type: string,
  description: string,
) =>
  defineField({
    name,
    title,
    type: "array",
    description,
    of: [
      defineArrayMember({
        type: "reference",
        to: [{ type }],
        weak: true,
        options: { disableNew: true, filter: sameLanguageFilter },
      }),
    ],
  });

/**
 * A venue region (Punta Cana, Italy, France…) — the `/venues/[region]` page.
 *
 * Localized — one doc per locale, linked via `translation.metadata`. Slugs are
 * translated per locale; the locale-agnostic imagery lives in `venueRegionMedia`
 * linked by the `media` reference so the pairing survives per-language slugs.
 * Mirrors the `culture` collection pattern. Holds the hub card content shown on
 * the Venues hub plus every section of the region detail page.
 */
export const venueRegion = defineType({
  name: "venueRegion",
  title: "Venue Region",
  type: "document",
  groups: [
    { name: "identity", title: "Identity" },
    { name: "card", title: "Hub card" },
    { name: "hero", title: "Hero" },
    { name: "guide", title: "Region guide" },
    { name: "venues", title: "Venues" },
    { name: "cta", title: "CTA" },
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
      title: "Region name",
      type: "string",
      group: "identity",
      description: 'Canonical name used on the hub — e.g. "Punta Cana".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "identity",
      description:
        "Translated per locale — e.g. en `punta-cana`, es `punta-cana`.",
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
            _type == "venueRegion" &&
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
      name: "media",
      title: "Media document",
      type: "reference",
      to: [{ type: "venueRegionMedia" }],
      weak: true,
      group: "identity",
      description:
        "This region's shared, locale-agnostic imagery. Every language version points to the same media doc.",
    }),

    // ── Hub card ─────────────────────────────────────────────────────────
    defineField({
      name: "cardBlurb",
      title: "Card blurb",
      type: "text",
      rows: 3,
      group: "card",
      description: "The paragraph shown on the hub region card.",
    }),
    defineField({
      name: "cardMeta",
      title: "Card meta stats",
      type: "array",
      group: "card",
      validation: (r) => r.max(3),
      description: "Up to three value/label stats on the hub region card.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "useVenueCount",
              title: "Use live venue count",
              type: "boolean",
              initialValue: false,
              description:
                "When on, this stat shows the live number of venues whose Region reference points at this region; the typed value is ignored.",
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              hidden: ({ parent }) =>
                Boolean((parent as { useVenueCount?: boolean })?.useVenueCount),
            }),
            { name: "label", title: "Label", type: "string" },
          ],
          preview: {
            select: {
              value: "value",
              label: "label",
              useVenueCount: "useVenueCount",
            },
            prepare: ({ value, label, useVenueCount }) => ({
              title: useVenueCount ? "Live venue count" : (value as string),
              subtitle: label as string,
            }),
          },
        }),
      ],
    }),

    // ── Hero ─────────────────────────────────────────────────────────────
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "scriptOverline", title: "Script overline", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Base is italic; use *word* for a roman (non-italic) accent (e.g. Punta *Cana.*).",
          validation: (r) => r.required(),
        }),
        { name: "deck", title: "Deck", type: "text", rows: 3 },
        { name: "captionLeft", title: "Bottom caption · left", type: "string" },
        {
          name: "captionCenter",
          title: "Bottom caption · center",
          type: "string",
        },
        {
          name: "captionRight",
          title: "Bottom caption · right",
          type: "string",
        },
      ],
    }),

    // ── Region guide ─────────────────────────────────────────────────────
    defineField({
      name: "guide",
      title: "Region guide",
      type: "object",
      group: "guide",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sideLabel", title: "Side label (small-caps)", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. Three coastlines, *fourteen* houses.).",
        }),
        defineField({
          name: "body",
          title: "Body",
          type: "array",
          of: [
            defineArrayMember({
              type: "block",
              styles: [{ title: "Normal", value: "normal" }],
              lists: [],
            }),
          ],
        }),
        refArray(
          "relatedServices",
          "Sidebar · related services",
          "service",
          "Reference services (same language). Label + link come from each service.",
        ),
        refArray(
          "relatedArticles",
          "Sidebar · related articles",
          "article",
          "Reference journal articles (same language). Label + link come from each article.",
        ),
      ],
    }),

    // ── Venues ───────────────────────────────────────────────────────────
    defineField({
      name: "venuesHeadline",
      title: "Venue list headline",
      type: "object",
      group: "venues",
      fields: [
        { name: "eyebrow", title: "Eyebrow (small-caps)", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. Houses, *selected.*).",
        }),
      ],
    }),
    // NB: no venue array — the region page lists venues automatically via each
    // venue's `region` reference (ordered by `order`, gated by `listed`).

    // ── CTA ──────────────────────────────────────────────────────────────
    defineField({
      name: "cta",
      title: "CTA",
      type: "object",
      group: "cta",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Script eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic-gold accents.",
        }),
        { name: "body", title: "Body", type: "text", rows: 2 },
        { name: "ctaLabel", title: "CTA label", type: "string" },
        { name: "ctaHref", title: "CTA href", type: "string" },
      ],
    }),
  ],
  preview: {
    select: { title: "name", language: "language" },
    prepare: ({ title, language }) => ({
      title: (title as string) ?? "Venue Region",
      subtitle: language ? language.toUpperCase() : undefined,
      media: "📍",
    }),
  },
});
