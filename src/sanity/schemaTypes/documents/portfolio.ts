import { defineArrayMember, defineField, defineType } from "sanity";

import { apiVersion } from "../../env";

// Reference filter resolver that scopes the picker to the doc's own locale, so
// editors only link same-language docs (mirrors `article`/`culture`).
const sameLanguageFilter = (context: { document?: unknown }) => {
  const language = (context.document as { language?: string } | undefined)
    ?.language;
  return language
    ? { filter: "language == $language", params: { language } }
    : { filter: "true" };
};

const TILE_OPTIONS = [
  { title: "Featured (full-width)", value: "featured" },
  { title: "Two-thirds", value: "twothird" },
  { title: "Half", value: "half" },
  { title: "Third", value: "third" },
] as const;

const localizedRef = (
  name: string,
  title: string,
  to: string,
  description: string,
) =>
  defineField({
    name,
    title,
    type: "reference",
    to: [{ type: to }],
    weak: true,
    group: "credits",
    description,
    options: { disableNew: true, filter: sameLanguageFilter },
  });

/**
 * A Portfolio case study — the `/portfolio/[slug]` page. An editorial story of a
 * single wedding (couple, destination, venue, tradition, design, logistics,
 * gallery, services, related writing).
 *
 * Localized — one doc per locale, linked via `translation.metadata`, with a
 * translated slug per locale. Shared imagery lives in `portfolioMedia`
 * (media-by-reference). Mirrors the `culture` collection.
 */
export const portfolio = defineType({
  name: "portfolio",
  title: "Case study",
  type: "document",
  groups: [
    { name: "identity", title: "Identity", default: true },
    { name: "card", title: "Hub card" },
    { name: "hero", title: "Hero" },
    { name: "credits", title: "Credits" },
    { name: "story", title: "Couple story" },
    { name: "design", title: "Design concept" },
    { name: "logistics", title: "Logistics" },
    { name: "services", title: "Services" },
    { name: "related", title: "Related" },
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
      title: "Couple",
      type: "string",
      group: "identity",
      description: 'e.g. "Saira & Adam".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "identity",
      description:
        "Translated per locale — e.g. en `luxury-indian-wedding-punta-cana`.",
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
            _type == "portfolio" &&
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
      to: [{ type: "portfolioMedia" }],
      weak: true,
      group: "identity",
      description:
        "This case study's shared, locale-agnostic imagery. Every language version points to the same media doc.",
    }),
    defineField({
      name: "tile",
      title: "Hub tile layout",
      type: "string",
      group: "identity",
      options: { list: [...TILE_OPTIONS] },
      description: "Controls this card's span in the hub mosaic.",
      initialValue: "third",
    }),
    defineField({
      name: "filterTags",
      title: "Filter tags",
      type: "array",
      group: "identity",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
      description:
        'Hub filter facets — e.g. "Indian", "Jewish", "Caribbean", "Mediterranean".',
    }),

    // ── Hub card ─────────────────────────────────────────────────────────
    defineField({
      name: "cardMeta",
      title: "Card meta line",
      type: "string",
      group: "card",
      description: 'e.g. "Hindu · Cap Cana · 312 guests · 2025".',
    }),
    defineField({
      name: "cardBlurb",
      title: "Card blurb",
      type: "text",
      rows: 2,
      group: "card",
      description: "Short paragraph shown on featured/large hub cards.",
    }),

    // ── Hero ─────────────────────────────────────────────────────────────
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          description: 'e.g. "Case Study · Hindu · Cap Cana".',
        },
        { name: "scriptOverline", title: "Script overline (couple)", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic-gold accents.",
          validation: (r) => r.required(),
        }),
        {
          name: "sub",
          title: "Sub-line",
          type: "string",
          description: 'e.g. "Cap Cana, Dominican Republic · February 2025 · 312 guests".',
        },
        { name: "captionLeft", title: "Bottom caption · left", type: "string" },
        { name: "captionCenter", title: "Bottom caption · center", type: "string" },
        { name: "captionRight", title: "Bottom caption · right", type: "string" },
      ],
    }),

    // ── Credits ──────────────────────────────────────────────────────────
    localizedRef(
      "destination",
      "Destination",
      "destination",
      "The destination this wedding was held in.",
    ),
    localizedRef("venue", "Venue", "venue", "The venue this wedding was held at."),
    localizedRef(
      "culture",
      "Tradition",
      "culture",
      "The cultural / religious tradition.",
    ),
    defineField({
      name: "guests",
      title: "Guests",
      type: "string",
      group: "credits",
      description: 'e.g. "Three hundred & twelve".',
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      group: "credits",
      description: 'e.g. "Four days · five events".',
    }),
    defineField({
      name: "season",
      title: "Season",
      type: "string",
      group: "credits",
      description: 'e.g. "February 2025".',
    }),

    // ── Couple story ─────────────────────────────────────────────────────
    defineField({
      name: "story",
      title: "Couple story",
      type: "object",
      group: "story",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sideEyebrow", title: "Side eyebrow", type: "string" },
        { name: "sideNote", title: "Side note", type: "text", rows: 3 },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic-olive accents.",
        }),
        { name: "lede", title: "Lede paragraph", type: "text", rows: 3 },
        defineField({
          name: "body",
          title: "Body",
          type: "array",
          of: [defineArrayMember({ type: "block" })],
        }),
      ],
    }),
    defineField({
      name: "quote",
      title: "Couple quote",
      type: "object",
      group: "story",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "quote", title: "Quote", type: "text", rows: 3 },
        { name: "cite", title: "Attribution", type: "string" },
      ],
    }),

    // ── Design concept ───────────────────────────────────────────────────
    defineField({
      name: "design",
      title: "Design concept",
      type: "object",
      group: "design",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic-olive accents.",
        }),
        defineField({
          name: "body",
          title: "Body",
          type: "array",
          of: [defineArrayMember({ type: "block" })],
        }),
        defineField({
          name: "palette",
          title: "Palette",
          type: "array",
          validation: (r) => r.max(6),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                {
                  name: "hex",
                  title: "Hex colour",
                  type: "string",
                  description: 'e.g. "#e8a843".',
                },
                { name: "name", title: "Name", type: "string" },
              ],
              preview: { select: { title: "name", subtitle: "hex" } },
            }),
          ],
        }),
      ],
    }),

    // ── Logistics ────────────────────────────────────────────────────────
    defineField({
      name: "logistics",
      title: "Logistics",
      type: "object",
      group: "logistics",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic-olive accents.",
        }),
        { name: "deck", title: "Deck", type: "text", rows: 2 },
        defineField({
          name: "blocks",
          title: "Blocks",
          type: "array",
          validation: (r) => r.max(4),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 3 },
                defineField({
                  name: "rows",
                  title: "Rows",
                  type: "array",
                  of: [
                    defineArrayMember({
                      type: "object",
                      fields: [
                        { name: "label", title: "Label", type: "string" },
                        { name: "value", title: "Value", type: "string" },
                      ],
                      preview: { select: { title: "label", subtitle: "value" } },
                    }),
                  ],
                }),
              ],
              preview: { select: { title: "title" } },
            }),
          ],
        }),
      ],
    }),

    // ── Services ─────────────────────────────────────────────────────────
    defineField({
      name: "services",
      title: "Services used",
      type: "object",
      group: "services",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic-olive accents.",
        }),
        { name: "deck", title: "Deck", type: "text", rows: 2 },
        defineField({
          name: "items",
          title: "Services",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "number", title: "Number", type: "string" },
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 2 },
              ],
              preview: { select: { title: "title", subtitle: "number" } },
            }),
          ],
        }),
      ],
    }),

    // ── Related ──────────────────────────────────────────────────────────
    defineField({
      name: "related",
      title: "Related",
      type: "object",
      group: "related",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic-olive accents.",
        }),
        defineField({
          name: "articles",
          title: "Related articles",
          type: "array",
          description:
            "Reference the journal articles to feature here (same language). Card content + image come from each article doc.",
          validation: (r) => r.max(3),
          of: [
            defineArrayMember({
              type: "reference",
              to: [{ type: "article" }],
              weak: true,
              options: { disableNew: true, filter: sameLanguageFilter },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "nextCaseStudy",
      title: "Next case study",
      type: "reference",
      to: [{ type: "portfolio" }],
      weak: true,
      group: "related",
      description: "The case study featured in the full-width 'Next' block.",
      options: { disableNew: true, filter: sameLanguageFilter },
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
    select: { title: "name", tile: "tile", language: "language" },
    prepare: ({ title, tile, language }) => ({
      title: (title as string) ?? "Case study",
      subtitle: [tile, language ? `· ${(language as string).toUpperCase()}` : null]
        .filter(Boolean)
        .join(" "),
      media: "💍",
    }),
  },
});
