import { defineArrayMember, defineField, defineType } from "sanity";

export const venuesPage = defineType({
  name: "venuesPage",
  title: "Venues Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "intro", title: "Intro" },
    { name: "regions", title: "Regions" },
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
          description: 'e.g. "The register".',
        },
        {
          name: "scriptOverline",
          title: "Script overline",
          type: "string",
          description:
            "Pinyon-Script accent above the title (e.g. 'A working register of').",
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Base is italic; use *word* for a roman (non-italic) accent (e.g. selected *houses.*).",
          validation: (r) => r.required(),
        }),
        { name: "deck", title: "Deck (sub-headline)", type: "text", rows: 3 },
        { name: "captionLeft", title: "Bottom caption · left", type: "string" },
        {
          name: "captionCenter",
          title: "Bottom caption · center (italic)",
          type: "string",
        },
        {
          name: "captionRight",
          title: "Bottom caption · right",
          type: "string",
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
          description: 'e.g. "How we choose".',
        },
        { name: "sideNote", title: "Side note", type: "text", rows: 3 },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. Houses we have worked, *more than once.*).",
        }),
        { name: "lede", title: "Lede (italic opening)", type: "text", rows: 3 },
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
        defineField({
          name: "stats",
          title: "Stats",
          type: "array",
          validation: (r) => r.max(4),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "source",
                  title: "Value source",
                  type: "string",
                  options: {
                    list: [
                      { title: "Typed value", value: "manual" },
                      { title: "Live venue count", value: "venues" },
                      { title: "Live region count", value: "regions" },
                    ],
                    layout: "radio",
                  },
                  initialValue: "manual",
                  description:
                    "Pull the number live from the venue / region documents, or type it below.",
                }),
                defineField({
                  name: "value",
                  title: "Value (e.g. '52')",
                  type: "string",
                  hidden: ({ parent }) =>
                    ["venues", "regions"].includes(
                      (parent as { source?: string })?.source ?? "",
                    ),
                }),
                { name: "label", title: "Label", type: "string" },
              ],
              preview: {
                select: { value: "value", label: "label", source: "source" },
                prepare: ({ value, label, source }) => ({
                  title:
                    source === "venues"
                      ? "Live venue count"
                      : source === "regions"
                        ? "Live region count"
                        : ((value as string) ?? "—"),
                  subtitle: label as string,
                }),
              },
            }),
          ],
        }),
      ],
    }),

    // ── Regions ───────────────────────────────────────────────────────────
    defineField({
      name: "regions",
      title: "Regions",
      type: "object",
      group: "regions",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow (small-caps)", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. The *register,* by place.).",
        }),
        { name: "intro", title: "Intro paragraph", type: "text", rows: 3 },
        defineField({
          name: "items",
          title: "Regions",
          type: "array",
          description:
            "Reference the Venue Region documents to show on the hub, in order. Card copy + imagery come from each region doc.",
          of: [
            defineArrayMember({
              type: "reference",
              to: [{ type: "venueRegion" }],
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
            "Use *word* for italic accents (e.g. *Find* your wedding house.).",
        }),
        { name: "body", title: "Body (deck)", type: "text", rows: 3 },
        { name: "ctaLabel", title: "CTA label", type: "string" },
        { name: "ctaHref", title: "CTA href", type: "string" },
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare: ({ language }) => ({
      title: "Venues Page",
      subtitle: language ? language.toUpperCase() : undefined,
      media: "🏛️",
    }),
  },
});
