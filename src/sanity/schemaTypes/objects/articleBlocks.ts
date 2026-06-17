import { defineArrayMember, defineField } from "sanity";

/**
 * Rich editorial block types woven into an `article.body` Portable Text array.
 * Mirrors the design's `pages/journal-article.jsx` blocks. Defined as inline
 * array members (scoped to the article body, not globally registered) and
 * spread into `article.body`'s `of` in `documents/article.ts`. The matching
 * renderers live in `components/JournalDetailPage/ArticleProse`.
 *
 * Venue / destination cards REFERENCE their docs (the GROQ body projection in
 * `queries/journal.ts` dereferences them) so they stay live internal links.
 */

// Scope a reference picker to the parent article's locale.
const sameLanguageFilter = (context: { document?: unknown }) => {
  const language = (context.document as { language?: string } | undefined)
    ?.language;
  return language
    ? { filter: "language == $language", params: { language } }
    : { filter: "true" };
};

const altField = { name: "alt", title: "Alt text", type: "string" } as const;

export const articleBlockMembers = [
  // Wide cinematic feature image (16:9).
  defineArrayMember({
    type: "object",
    name: "featureImage",
    title: "Feature image (wide)",
    fields: [
      defineField({
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
        fields: [altField],
        validation: (r) => r.required(),
      }),
      { name: "caption", title: "Caption (italic)", type: "string" },
      { name: "credit", title: "Credit / sub-caption", type: "string" },
    ],
    preview: {
      select: { title: "caption", media: "image" },
      prepare: ({ title, media }) => ({
        title: (title as string) || "Feature image",
        media,
      }),
    },
  }),

  // Three-figure stat row.
  defineArrayMember({
    type: "object",
    name: "articleStats",
    title: "Stat row",
    fields: [
      defineField({
        name: "items",
        title: "Stats",
        type: "array",
        validation: (r) => r.min(2).max(4),
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
    ],
    preview: {
      select: { items: "items" },
      prepare: ({ items }) => ({
        title: "Stat row",
        subtitle: `${(items as unknown[] | undefined)?.length ?? 0} stats`,
      }),
    },
  }),

  // "The short version" key-takeaways callout.
  defineArrayMember({
    type: "object",
    name: "articleTakeaways",
    title: "Key takeaways",
    fields: [
      { name: "heading", title: "Heading", type: "string" },
      defineField({
        name: "items",
        title: "Points",
        type: "array",
        of: [{ type: "string" }],
      }),
    ],
    preview: {
      select: { title: "heading" },
      prepare: ({ title }) => ({ title: (title as string) || "Key takeaways" }),
    },
  }),

  // Linked venue cards (1–3), referencing venue docs.
  defineArrayMember({
    type: "object",
    name: "articleVenueCards",
    title: "Venue cards",
    fields: [
      { name: "label", title: "Label", type: "string" },
      defineField({
        name: "cards",
        title: "Cards",
        type: "array",
        validation: (r) => r.min(1).max(3),
        of: [
          defineArrayMember({
            type: "object",
            fields: [
              defineField({
                name: "venue",
                title: "Venue",
                type: "reference",
                to: [{ type: "venue" }],
                weak: true,
                options: { filter: sameLanguageFilter },
                validation: (r) => r.required(),
              }),
              { name: "tag", title: "Corner tag", type: "string" },
              { name: "eyebrow", title: "Eyebrow (location · capacity)", type: "string" },
              { name: "blurb", title: "Blurb", type: "text", rows: 2 },
              defineField({
                name: "metaRows",
                title: "Meta rows",
                type: "array",
                validation: (r) => r.max(3),
                of: [
                  defineArrayMember({
                    type: "object",
                    fields: [
                      { name: "label", title: "Label", type: "string" },
                      { name: "value", title: "Value", type: "string" },
                    ],
                    preview: { select: { title: "value", subtitle: "label" } },
                  }),
                ],
              }),
              { name: "linkLabel", title: "Link label", type: "string" },
            ],
            preview: { select: { title: "venue.name", subtitle: "eyebrow" } },
          }),
        ],
      }),
    ],
    preview: {
      select: { title: "label" },
      prepare: ({ title }) => ({ title: (title as string) || "Venue cards" }),
    },
  }),

  // Two-up editorial gallery.
  defineArrayMember({
    type: "object",
    name: "articleGallery",
    title: "Gallery (2-up)",
    fields: [
      defineField({
        name: "images",
        title: "Images",
        type: "array",
        validation: (r) => r.min(2).max(3),
        of: [
          defineArrayMember({
            type: "image",
            options: { hotspot: true },
            fields: [altField, { name: "caption", title: "Caption", type: "string" }],
          }),
        ],
      }),
    ],
    preview: { prepare: () => ({ title: "Gallery" }) },
  }),

  // Full-column pull quote.
  defineArrayMember({
    type: "object",
    name: "articlePullQuote",
    title: "Pull quote",
    fields: [
      {
        name: "quote",
        title: "Quote",
        type: "text",
        rows: 3,
        validation: (r) => r.required(),
      },
      { name: "cite", title: "Attribution", type: "string" },
    ],
    preview: {
      select: { title: "quote", subtitle: "cite" },
      prepare: ({ title, subtitle }) => ({
        title: (title as string) || "Pull quote",
        subtitle: subtitle as string,
      }),
    },
  }),

  // Image + text split.
  defineArrayMember({
    type: "object",
    name: "articleSplit",
    title: "Image / text split",
    fields: [
      defineField({
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
        fields: [altField],
        validation: (r) => r.required(),
      }),
      { name: "eyebrow", title: "Eyebrow", type: "string" },
      { name: "heading", title: "Heading", type: "string" },
      defineField({
        name: "paragraphs",
        title: "Paragraphs",
        type: "array",
        of: [{ type: "text" }],
      }),
      { name: "flip", title: "Text first (flip)", type: "boolean", initialValue: false },
    ],
    preview: {
      select: { title: "heading", media: "image" },
      prepare: ({ title, media }) => ({
        title: (title as string) || "Split",
        media,
      }),
    },
  }),

  // Wide destination feature card (references a destination).
  defineArrayMember({
    type: "object",
    name: "destinationCard",
    title: "Destination card",
    fields: [
      defineField({
        name: "destination",
        title: "Destination",
        type: "reference",
        to: [{ type: "destination" }],
        weak: true,
        options: { filter: sameLanguageFilter },
        validation: (r) => r.required(),
      }),
      { name: "eyebrow", title: "Eyebrow", type: "string" },
      { name: "linkLabel", title: "Link label", type: "string" },
    ],
    preview: {
      select: { title: "destination.name" },
      prepare: ({ title }) => ({
        title: (title as string) || "Destination card",
      }),
    },
  }),

  // Mid-article inline CTA (olive band).
  defineArrayMember({
    type: "object",
    name: "inlineCta",
    title: "Inline CTA",
    fields: [
      { name: "script", title: "Script line", type: "string" },
      { name: "heading", title: "Heading", type: "string" },
      { name: "body", title: "Body", type: "text", rows: 2 },
      { name: "ctaLabel", title: "CTA label", type: "string" },
      { name: "ctaHref", title: "CTA href", type: "string" },
    ],
    preview: {
      select: { title: "heading" },
      prepare: ({ title }) => ({ title: (title as string) || "Inline CTA" }),
    },
  }),
];
