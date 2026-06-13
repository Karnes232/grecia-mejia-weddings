import { defineArrayMember, defineField, defineType } from "sanity";

import { apiVersion } from "../../env";

// A `{label, href}` sidebar-link array (region-guide sidebar lists).
const sidebarLinkArray = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "array",
    of: [
      defineArrayMember({
        type: "object",
        fields: [
          { name: "label", title: "Label", type: "string" },
          { name: "href", title: "Href", type: "string" },
        ],
        preview: { select: { title: "label" } },
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
    { name: "filter", title: "Filter" },
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
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
          preview: { select: { title: "value", subtitle: "label" } },
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
        sidebarLinkArray("subRegions", "Sidebar · sub-regions"),
        sidebarLinkArray("related", "Sidebar · related links"),
      ],
    }),

    // ── Filter ───────────────────────────────────────────────────────────
    defineField({
      name: "filter",
      title: "Filter",
      type: "object",
      group: "filter",
      options: { collapsible: true, collapsed: true },
      description:
        "Filter chips for the venue list. The 'type' chips match venue cards' `tag`; guest bands are display-only.",
      fields: [
        defineField({
          name: "typologies",
          title: "Type chips",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                {
                  name: "label",
                  title: "Label (matches venue tag)",
                  type: "string",
                },
                { name: "count", title: "Count", type: "number" },
              ],
              preview: { select: { title: "label", subtitle: "count" } },
            }),
          ],
        }),
        defineField({
          name: "guestBands",
          title: "Guest-count chips",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [{ name: "label", title: "Label", type: "string" }],
              preview: { select: { title: "label" } },
            }),
          ],
        }),
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
    defineField({
      name: "venues",
      title: "Venues",
      type: "array",
      group: "venues",
      description:
        "The venues held in this region, in order. Card content (name, tag, blurb, capacity, image) comes from each referenced venue doc.",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "venue" }],
          options: {
            disableNew: true,
            filter: ({ document }) =>
              document?.language
                ? {
                    filter: "language == $language",
                    params: { language: document.language },
                  }
                : { filter: "true" },
          },
        }),
      ],
    }),

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
