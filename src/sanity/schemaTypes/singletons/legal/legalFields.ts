import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Shared building blocks for the two legal singletons (`termsPage`,
 * `privacyPage`). They render through one `LegalPage` component, so they share
 * an identical field set + two custom Portable Text blocks.
 */

// ── Custom Portable Text blocks ──────────────────────────────────────────

/** Cream callout with a gold left border — a single emphasised paragraph. */
export const legalCallout = defineType({
  name: "legalCallout",
  title: "Callout",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { subtitle: "text" },
    prepare: ({ subtitle }) => ({ title: "Callout", subtitle }),
  },
});

/** Definitions list (Terms §1) — a grid of term / definition pairs. */
export const legalDefinitions = defineType({
  name: "legalDefinitions",
  title: "Definitions",
  type: "object",
  fields: [
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            {
              name: "term",
              title: "Term",
              type: "string",
              validation: (r) => r.required(),
            },
            {
              name: "definition",
              title: "Definition",
              type: "text",
              rows: 2,
              validation: (r) => r.required(),
            },
          ],
          preview: { select: { title: "term", subtitle: "definition" } },
        }),
      ],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Definitions list" }),
  },
});

// ── Section body (Portable Text) ─────────────────────────────────────────
const legalBody = defineField({
  name: "body",
  title: "Body",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Sub-heading", value: "h3" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            title: "Link",
            type: "object",
            fields: [
              {
                name: "href",
                title: "URL / path",
                type: "string",
                description:
                  "External URL, mailto:…, or an internal path like /contact.",
                validation: (r) => r.required(),
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({ type: "legalCallout" }),
    defineArrayMember({ type: "legalDefinitions" }),
  ],
  validation: (r) => r.required(),
});

// ── The shared field set ─────────────────────────────────────────────────
export function legalPageFields() {
  return [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),

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
          description: 'e.g. "Legal · Terms".',
        },
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          description: 'The roman part of the headline, e.g. "Terms &".',
          validation: (r) => r.required(),
        }),
        {
          name: "titleItalic",
          title: "Title accent (gold italic)",
          type: "string",
          description: 'The italic accent word, e.g. "Conditions.".',
        },
        { name: "deck", title: "Deck (sub-headline)", type: "text", rows: 3 },
      ],
    }),

    defineField({
      name: "meta",
      title: "Meta strip",
      type: "object",
      group: "hero",
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: "updated",
          title: "Last updated",
          type: "string",
          description: 'e.g. "January 2026".',
        },
        {
          name: "effective",
          title: "Effective",
          type: "string",
          description: 'e.g. "1 January 2026".',
        },
        {
          name: "appliesTo",
          title: "Applies to",
          type: "string",
          initialValue: "greciamejia.com",
        },
      ],
    }),

    defineField({
      name: "intro",
      title: "Intro (italic lede)",
      type: "text",
      rows: 3,
      group: "content",
    }),

    defineField({
      name: "helpNote",
      title: "TOC help note",
      type: "text",
      rows: 3,
      group: "content",
      description:
        "The small aside in the table of contents, above the Contact CTA.",
    }),

    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      group: "content",
      description:
        "Numbered automatically (№ 01, № 02…); the table of contents is built from the headings.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
              validation: (r) => r.required(),
            },
            legalBody,
          ],
          preview: { select: { title: "heading" } },
        }),
      ],
      validation: (r) => r.required().min(1),
    }),

    defineField({
      name: "signatureName",
      title: "Signature name (script)",
      type: "string",
      group: "content",
      initialValue: "Grecia Mejía",
      description: "Rendered in Pinyon Script in the sign-off.",
    }),
    defineField({
      name: "closing",
      title: "Closing line (small-caps)",
      type: "string",
      group: "content",
      description: 'e.g. "On behalf of the studio · Punta Cana, January 2026".',
    }),
  ];
}

export const LEGAL_GROUPS = [
  { name: "hero", title: "Hero" },
  { name: "content", title: "Content" },
  { name: "seo", title: "SEO" },
];
