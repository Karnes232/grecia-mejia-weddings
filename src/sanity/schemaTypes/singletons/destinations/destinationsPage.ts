import { defineArrayMember, defineField, defineType } from "sanity";

const CALENDAR_VALUES = [
  { title: "Peak", value: "peak" },
  { title: "Shoulder · good", value: "good" },
  { title: "Off · we don't recommend", value: "off" },
] as const;

export const destinationsPage = defineType({
  name: "destinationsPage",
  title: "Destinations Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "intro", title: "Intro" },
    { name: "regions", title: "Regions / atlas" },
    { name: "calendar", title: "Seasonal calendar" },
    { name: "spotlight", title: "Spotlight" },
    { name: "journeyCta", title: "Journey CTA" },
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

    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: "eyebrow",
          title: "Eyebrow (small-caps line)",
          type: "string",
          description: 'e.g. "Destinations · the atlas".',
        },
        {
          name: "scriptOverline",
          title: "Script overline",
          type: "string",
          description:
            "Pinyon-Script accent above the title (e.g. 'An atlas of').",
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for roman ivory accents on the italic base (e.g. *considered* destinations.).",
          validation: (r) => r.required(),
        }),
        { name: "deck", title: "Deck (sub-headline)", type: "text", rows: 3 },
        {
          name: "captionLeft",
          title: "Bottom caption · left",
          type: "string",
          description: 'e.g. "Photographed on the Amalfi Coast".',
        },
        {
          name: "captionCenter",
          title: "Bottom caption · center",
          type: "string",
          description: 'e.g. "The atlas, Volume II".',
        },
        {
          name: "captionRight",
          title: "Bottom caption · right",
          type: "string",
          description: 'e.g. "2026".',
        },
      ],
    }),

    // ── Intro ─────────────────────────────────────────────────────────────
    defineField({
      name: "intro",
      title: "Intro",
      type: "object",
      group: "intro",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic-olive accents (e.g. with a *long-reach* calendar.).",
          validation: (r) => r.required(),
        }),
        { name: "lede", title: "Lede paragraph", type: "text", rows: 3 },
        defineField({
          name: "body",
          title: "Body",
          type: "array",
          of: [defineArrayMember({ type: "block" })],
        }),
        defineField({
          name: "stats",
          title: "Stats row",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "value", title: "Value (e.g. '23')", type: "string" },
                { name: "label", title: "Label", type: "string" },
              ],
              preview: { select: { title: "value", subtitle: "label" } },
            }),
          ],
        }),
      ],
    }),

    // ── Regions / atlas ──────────────────────────────────────────────────
    defineField({
      name: "regions",
      title: "Regions / atlas",
      type: "array",
      group: "regions",
      validation: (r) => r.required().min(1),
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            {
              name: "eyebrow",
              title: "Eyebrow (e.g. 'Region One')",
              type: "string",
            },
            defineField({
              name: "name",
              title: "Region name",
              type: "string",
              description:
                "Use *word* for italic-olive accents (e.g. The *Caribbean*.).",
              validation: (r) => r.required(),
            }),
            { name: "intro", title: "Intro paragraph", type: "text", rows: 3 },
            {
              name: "slug",
              title: "Slug (e.g. 'caribbean')",
              type: "string",
              description: "Used for the chip filter id.",
            },
            defineField({
              name: "destinations",
              title: "Destinations",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    defineField({
                      name: "destination",
                      title: "Destination",
                      type: "reference",
                      to: [{ type: "destination" }],
                      weak: true,
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
                      validation: (r) => r.required(),
                    }),
                  ],
                  preview: {
                    select: {
                      title: "destination.country",
                      subtitle: "destination.subLocations",
                    },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: { title: "name", subtitle: "eyebrow" },
          },
        }),
      ],
    }),

    // ── Seasonal calendar ────────────────────────────────────────────────
    defineField({
      name: "calendar",
      title: "Seasonal calendar",
      type: "object",
      group: "calendar",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic-olive accents (e.g. When to wed *where.*).",
        }),
        { name: "intro", title: "Intro paragraph", type: "text", rows: 2 },
        defineField({
          name: "rows",
          title: "Rows (one per region)",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "region", title: "Region", type: "string" },
                { name: "note", title: "Sub-note", type: "string" },
                defineField({
                  name: "months",
                  title: "Months (12)",
                  type: "array",
                  description: "Exactly twelve entries, January → December.",
                  validation: (r) => r.required().length(12),
                  of: [
                    defineArrayMember({
                      type: "string",
                      options: { list: [...CALENDAR_VALUES] },
                    }),
                  ],
                }),
              ],
              preview: { select: { title: "region", subtitle: "note" } },
            }),
          ],
        }),
        defineField({
          name: "legend",
          title: "Legend labels",
          type: "object",
          fields: [
            { name: "peak", title: "Peak label", type: "string" },
            { name: "good", title: "Shoulder label", type: "string" },
            { name: "off", title: "Off-season label", type: "string" },
          ],
        }),
      ],
    }),

    // ── Spotlight ────────────────────────────────────────────────────────
    defineField({
      name: "spotlight",
      title: "Spotlight",
      type: "object",
      group: "spotlight",
      options: { collapsible: true, collapsed: true },
      description:
        "Feature one destination — its headline, deck, facts, image and CTA are pulled from that destination doc.",
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "destination",
          title: "Featured destination",
          type: "reference",
          to: [{ type: "destination" }],
          weak: true,
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
          validation: (r) => r.required(),
        }),
      ],
    }),

    // ── Journey CTA (shared pattern with home page) ──────────────────────
    defineField({
      name: "journeyCta",
      title: "Journey CTA",
      type: "object",
      group: "journeyCta",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "eyebrow",
          title: "Eyebrow (script line)",
          type: "string",
          description:
            "Rendered in Pinyon Script above the headline (e.g. 'A private conversation —').",
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for gold accents (e.g. *Begin* your wedding journey.).",
        }),
        { name: "body", title: "Body (deck)", type: "text", rows: 3 },
        defineField({
          name: "cta",
          title: "CTA button",
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "href", type: "string", title: "Href" },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare: ({ language }) => ({
      title: "Destinations Page",
      subtitle: language ? language.toUpperCase() : undefined,
      media: "🗺️",
    }),
  },
});
