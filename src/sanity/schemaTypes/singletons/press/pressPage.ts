import { defineArrayMember, defineField, defineType } from "sanity";

import { PRESS_FEATURED_KEY_OPTIONS } from "../../imageKeyOptions";

export const pressPage = defineType({
  name: "pressPage",
  title: "Press Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "intro", title: "Intro" },
    { name: "featured", title: "Featured press" },
    { name: "quotes", title: "Quote wall" },
    { name: "archive", title: "Coverage archive" },
    { name: "awards", title: "Awards" },
    { name: "cta", title: "Closing CTA" },
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
          description: 'e.g. "Press & Recognition".',
        },
        {
          name: "scriptOverline",
          title: "Script overline",
          type: "string",
          description:
            "Pinyon-Script accent above the title (e.g. 'The studio, in').",
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Base is italic; use *word* for a roman (non-italic) accent (e.g. the *press.*).",
          validation: (r) => r.required(),
        }),
        { name: "deck", title: "Deck (sub-headline)", type: "text", rows: 3 },
        {
          name: "captionLeft",
          title: "Bottom caption · left",
          type: "string",
          description: 'e.g. "Vogue Weddings · 12-page profile".',
        },
        {
          name: "captionCenter",
          title: "Bottom caption · center (italic)",
          type: "string",
          description: 'e.g. "Selected press · 2018 – 2026".',
        },
        {
          name: "captionRight",
          title: "Bottom caption · right",
          type: "string",
          description: 'e.g. "Plate I".',
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
        {
          name: "sideLabel",
          title: "Side label (small-caps)",
          type: "string",
          description: 'e.g. "A note on press".',
        },
        { name: "sideNote", title: "Side note", type: "text", rows: 3 },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. Earned, *never* pitched.).",
        }),
        {
          name: "lede",
          title: "Lede (italic opening line)",
          type: "text",
          rows: 3,
        },
        defineField({
          name: "body",
          title: "Body",
          type: "array",
          of: [
            defineArrayMember({
              type: "block",
              styles: [{ title: "Normal", value: "normal" }],
              lists: [],
              marks: {
                decorators: [
                  { title: "Strong", value: "strong" },
                  { title: "Emphasis", value: "em" },
                ],
                annotations: [
                  {
                    name: "link",
                    type: "object",
                    title: "Link",
                    fields: [{ name: "href", type: "string", title: "URL" }],
                  },
                ],
              },
            }),
          ],
        }),
      ],
    }),

    // ── Featured press ────────────────────────────────────────────────────
    defineField({
      name: "featured",
      title: "Featured press",
      type: "object",
      group: "featured",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "label",
          title: "Label (small-caps)",
          type: "string",
          description: 'e.g. "Selected features".',
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic accents (e.g. In *print.*).",
        }),
        { name: "intro", title: "Intro paragraph", type: "text", rows: 3 },
        defineField({
          name: "items",
          title: "Features",
          type: "array",
          description:
            "First card is the large lead, second is the wide side card, the rest are thirds.",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                {
                  name: "publication",
                  title: "Publication",
                  type: "string",
                  validation: (r) => r.required(),
                },
                {
                  name: "date",
                  title: "Date / sub-line",
                  type: "string",
                  description: 'e.g. "September 2018 · Italy · Spain · India".',
                },
                defineField({
                  name: "title",
                  title: "Headline",
                  type: "string",
                  description:
                    "Use *word* for italic accents (e.g. The Atelier That *Disappears* Into the Day).",
                  validation: (r) => r.required(),
                }),
                { name: "summary", title: "Summary", type: "text", rows: 3 },
                defineField({
                  name: "imageKey",
                  title: "Image slot",
                  type: "string",
                  description:
                    "Maps to the matching image in Press Page Media (shared across languages).",
                  options: { list: [...PRESS_FEATURED_KEY_OPTIONS] },
                  validation: (r) => r.required(),
                }),
                {
                  name: "href",
                  title: "Article URL (optional)",
                  type: "url",
                  description:
                    "External link to the published feature. Leave empty for a non-linked card.",
                },
              ],
              preview: {
                select: { title: "publication", subtitle: "title" },
              },
            }),
          ],
        }),
      ],
    }),

    // ── Quote wall ────────────────────────────────────────────────────────
    defineField({
      name: "quotes",
      title: "Quote wall",
      type: "object",
      group: "quotes",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "label",
          title: "Label (small-caps)",
          type: "string",
          description: 'e.g. "In their words".',
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. What the *editors* said.).",
        }),
        defineField({
          name: "items",
          title: "Quotes",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                {
                  name: "quote",
                  title: "Quote",
                  type: "text",
                  rows: 3,
                  validation: (r) => r.required(),
                },
                { name: "publication", title: "Publication", type: "string" },
                { name: "year", title: "Year", type: "string" },
              ],
              preview: {
                select: { title: "publication", subtitle: "quote" },
              },
            }),
          ],
        }),
      ],
    }),

    // ── Coverage archive ──────────────────────────────────────────────────
    defineField({
      name: "archive",
      title: "Coverage archive",
      type: "object",
      group: "archive",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "label",
          title: "Label (small-caps)",
          type: "string",
          description: 'e.g. "The full record".',
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. Coverage *archive.*).",
        }),
        {
          name: "count",
          title: "Count line (small-caps)",
          type: "string",
          description: 'e.g. "38 features · 2016 – 2026".',
        },
        defineField({
          name: "items",
          title: "Archive rows",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                {
                  name: "year",
                  title: "Year",
                  type: "string",
                  validation: (r) => r.required(),
                },
                { name: "publication", title: "Publication", type: "string" },
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (r) => r.required(),
                },
                {
                  name: "type",
                  title: "Type (small-caps)",
                  type: "string",
                  description: 'e.g. "Feature", "Award", "Real wedding".',
                },
                {
                  name: "href",
                  title: "Article URL (optional)",
                  type: "url",
                  description:
                    "External link to the coverage. Leave empty for a non-linked row.",
                },
              ],
              preview: {
                select: {
                  year: "year",
                  title: "title",
                  subtitle: "publication",
                },
                prepare: ({ year, title, subtitle }) => ({
                  title: `${year ?? ""} · ${title ?? "—"}`,
                  subtitle: subtitle ?? "",
                }),
              },
            }),
          ],
        }),
      ],
    }),

    // ── Awards ────────────────────────────────────────────────────────────
    defineField({
      name: "awards",
      title: "Awards",
      type: "object",
      group: "awards",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "label",
          title: "Label (small-caps)",
          type: "string",
          description: 'e.g. "Recognition".',
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. Awards & *honours.*).",
        }),
        { name: "intro", title: "Intro paragraph", type: "text", rows: 3 },
        defineField({
          name: "items",
          title: "Award entries",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                {
                  name: "year",
                  title: "Year",
                  type: "string",
                  validation: (r) => r.required(),
                },
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (r) => r.required(),
                },
                { name: "publication", title: "Publication", type: "string" },
              ],
              preview: {
                select: {
                  year: "year",
                  title: "title",
                  subtitle: "publication",
                },
                prepare: ({ year, title, subtitle }) => ({
                  title: `${year ?? ""} · ${title ?? "—"}`,
                  subtitle: subtitle ?? "",
                }),
              },
            }),
          ],
        }),
      ],
    }),

    // ── Closing CTA ───────────────────────────────────────────────────────
    defineField({
      name: "cta",
      title: "Closing CTA",
      type: "object",
      group: "cta",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "eyebrow",
          title: "Script line",
          type: "string",
          description:
            "Rendered in Pinyon Script (e.g. 'A private conversation —').",
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. *Begin* your wedding journey.).",
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
      title: "Press Page",
      subtitle: language ? language.toUpperCase() : undefined,
      media: "📰",
    }),
  },
});
