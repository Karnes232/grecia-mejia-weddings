import { defineArrayMember, defineField, defineType } from "sanity";

import { apiVersion } from "../../env";
import {
  CULTURE_RELATED_KEY_OPTIONS,
  DESIGN_CONCEPT_KEY_OPTIONS,
  type ImageKeyOption,
} from "../imageKeyOptions";

// `imageKey` is a dropdown of fixed image slots shared with the culture's
// `cultureMedia` doc, so both sides always pick from the same list.
const imageKeyField = (list: ImageKeyOption[]) =>
  defineField({
    name: "imageKey",
    title: "Image",
    type: "string",
    options: { list },
    description: "Pick the matching image slot from this culture's media doc.",
  });

// A `{label, href}` sidebar-link array (related sidebar lists).
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
 * Localized — one doc per locale, linked via `translation.metadata`. Slugs are
 * translated per locale (en `indian-weddings`, es `bodas-indias`, …); the
 * locale-agnostic imagery lives in `cultureMedia`, linked by the `media`
 * reference so the pairing survives per-language slugs.
 *
 * Holds the atlas-card content shown on the Multicultural hub plus every
 * section of the `/multicultural-weddings/[culture]` detail page (modelled on
 * the design's `pages/multicultural-detail.jsx`, mirroring `destination.ts`).
 */
export const culture = defineType({
  name: "culture",
  title: "Culture",
  type: "document",
  groups: [
    { name: "identity", title: "Identity" },
    { name: "card", title: "Atlas card" },
    { name: "intro", title: "Intro" },
    { name: "hero", title: "Hero" },
    { name: "facts", title: "Fact strip" },
    { name: "overview", title: "Overview" },
    { name: "ceremony", title: "Ceremony arc" },
    { name: "concepts", title: "Design concepts" },
    { name: "protocols", title: "Cultural protocols" },
    { name: "planning", title: "Multi-day planning" },
    { name: "compatibility", title: "Destination compatibility" },
    { name: "guest", title: "Guest management" },
    { name: "related", title: "Related" },
    { name: "faq", title: "FAQ" },
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
      description:
        "Translated per locale — e.g. en `indian-weddings`, es `bodas-indias`.",
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
      name: "media",
      title: "Media document",
      type: "reference",
      to: [{ type: "cultureMedia" }],
      group: "identity",
      description:
        "This culture's shared, locale-agnostic imagery. Every language version points to the same media doc.",
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

    // ── Hero ─────────────────────────────────────────────────────────────
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          description: 'e.g. "The Traditions · No. 01".',
        }),
        { name: "scriptOverline", title: "Script overline", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic-gold accents on the italic ivory base.",
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

    // ── Fact strip ───────────────────────────────────────────────────────
    defineField({
      name: "factStrip",
      title: "Fact strip",
      type: "array",
      group: "facts",
      validation: (r) => r.max(6),
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" },
            { name: "sub", title: "Sub-note", type: "string" },
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        }),
      ],
    }),

    // ── Overview ─────────────────────────────────────────────────────────
    defineField({
      name: "overview",
      title: "Overview",
      type: "object",
      group: "overview",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "sideEyebrow", title: "Side eyebrow", type: "string" },
        { name: "sideNote", title: "Side note", type: "text", rows: 2 },
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
        { name: "pull", title: "Pull quote", type: "text", rows: 2 },
        { name: "signatureName", title: "Signature name", type: "string" },
        { name: "signatureRole", title: "Signature role", type: "string" },
      ],
    }),

    // ── Ceremony arc ─────────────────────────────────────────────────────
    defineField({
      name: "ceremonyArc",
      title: "Ceremony arc",
      type: "object",
      group: "ceremony",
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
          name: "steps",
          title: "Ceremony steps",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                {
                  name: "numeral",
                  title: "Roman numeral",
                  type: "string",
                },
                { name: "name", title: "Name", type: "string" },
                { name: "sub", title: "Sub-title", type: "string" },
                {
                  name: "when",
                  title: "When",
                  type: "string",
                },
                { name: "body", title: "Body", type: "text", rows: 3 },
              ],
              preview: { select: { title: "name", subtitle: "when" } },
            }),
          ],
        }),
      ],
    }),

    // ── Design concepts ──────────────────────────────────────────────────
    defineField({
      name: "designConcepts",
      title: "Design concepts",
      type: "object",
      group: "concepts",
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
          name: "cards",
          title: "Concept cards",
          type: "array",
          validation: (r) => r.max(3),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 3 },
                defineField({
                  name: "palette",
                  title: "Palette (5 hex colours)",
                  type: "array",
                  of: [defineArrayMember({ type: "string" })],
                  validation: (r) => r.max(5),
                  description: 'Hex values, e.g. "#e8a843".',
                }),
                imageKeyField(DESIGN_CONCEPT_KEY_OPTIONS),
                defineField({
                  name: "rows",
                  title: "Spec rows",
                  type: "array",
                  description:
                    'Culture-specific spec lines — e.g. "Mandap → Four-pillar floral, 14 ft".',
                  of: [
                    defineArrayMember({
                      type: "object",
                      fields: [
                        { name: "label", title: "Label", type: "string" },
                        { name: "value", title: "Value", type: "string" },
                      ],
                      preview: {
                        select: { title: "label", subtitle: "value" },
                      },
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

    // ── Cultural protocols ───────────────────────────────────────────────
    defineField({
      name: "protocols",
      title: "Cultural protocols",
      type: "object",
      group: "protocols",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic accents.",
        }),
        { name: "deck", title: "Deck", type: "text", rows: 2 },
        defineField({
          name: "items",
          title: "Protocols",
          type: "array",
          validation: (r) => r.max(6),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 3 },
              ],
              preview: { select: { title: "title" } },
            }),
          ],
        }),
      ],
    }),

    // ── Multi-day planning ───────────────────────────────────────────────
    defineField({
      name: "planning",
      title: "Multi-day planning",
      type: "object",
      group: "planning",
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
          name: "days",
          title: "Days",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "numeral", title: "Roman numeral", type: "string" },
                {
                  name: "dayLabel",
                  title: "Day label",
                  type: "string",
                },
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 4 },
                defineField({
                  name: "events",
                  title: "Events",
                  type: "array",
                  of: [
                    defineArrayMember({
                      type: "object",
                      fields: [
                        {
                          name: "time",
                          title: "Time",
                          type: "string",
                        },
                        { name: "body", title: "Event", type: "string" },
                      ],
                      preview: {
                        select: { title: "time", subtitle: "body" },
                      },
                    }),
                  ],
                }),
              ],
              preview: { select: { title: "dayLabel", subtitle: "title" } },
            }),
          ],
        }),
      ],
    }),

    // ── Destination compatibility ────────────────────────────────────────
    defineField({
      name: "compatibility",
      title: "Destination compatibility",
      type: "object",
      group: "compatibility",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic-olive accents.",
        }),
        { name: "viewAllLabel", title: "View-all label", type: "string" },
        { name: "viewAllHref", title: "View-all href", type: "string" },
        defineField({
          name: "cards",
          title: "Destination cards",
          type: "array",
          validation: (r) => r.max(8),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "rating",
                  title: "Compatibility rating (1–5)",
                  type: "number",
                  validation: (r) => r.min(1).max(5),
                }),
                { name: "name", title: "Name", type: "string" },
                { name: "sub", title: "Sub-line", type: "string" },
                defineField({
                  name: "destination",
                  title: "Destination",
                  type: "reference",
                  to: [{ type: "destination" }],
                  description:
                    "Card image and link come from this destination.",
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
              preview: { select: { title: "name", subtitle: "sub" } },
            }),
          ],
        }),
      ],
    }),

    // ── Guest management ─────────────────────────────────────────────────
    defineField({
      name: "guest",
      title: "Guest management",
      type: "object",
      group: "guest",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic accents.",
        }),
        { name: "deck", title: "Deck", type: "text", rows: 2 },
        defineField({
          name: "cells",
          title: "Cells",
          type: "array",
          validation: (r) => r.max(6),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 4 },
              ],
              preview: { select: { title: "title" } },
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
          validation: (r) => r.max(5),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "category", title: "Category", type: "string" },
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 2 },
                imageKeyField(CULTURE_RELATED_KEY_OPTIONS),
                { name: "href", title: "Link href", type: "string" },
              ],
              preview: { select: { title: "title", subtitle: "category" } },
            }),
          ],
        }),
        sidebarLinkArray(
          "sidebarDestinations",
          "Sidebar · related destinations",
        ),
        sidebarLinkArray("sidebarVenues", "Sidebar · related venues"),
        sidebarLinkArray("sidebarCultures", "Sidebar · other cultures"),
      ],
    }),

    // ── FAQ ──────────────────────────────────────────────────────────────
    defineField({
      name: "faq",
      title: "FAQ",
      type: "object",
      group: "faq",
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
          name: "items",
          title: "Questions",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "question", title: "Question", type: "string" },
                defineField({
                  name: "answer",
                  title: "Answer",
                  type: "array",
                  of: [defineArrayMember({ type: "block" })],
                }),
              ],
              preview: { select: { title: "question" } },
            }),
          ],
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
    select: { title: "name", number: "number", language: "language" },
    prepare: ({ title, number, language }) => ({
      title: (title as string) ?? "Culture",
      subtitle: [
        number ? `№ ${number}` : null,
        language ? `· ${language.toUpperCase()}` : null,
      ]
        .filter(Boolean)
        .join(" "),
      media: "🪔",
    }),
  },
});
