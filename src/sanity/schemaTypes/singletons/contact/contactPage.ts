import { defineArrayMember, defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "form", title: "Enquiry form" },
    { name: "rail", title: "Studio rail" },
    { name: "process", title: "Process" },
    { name: "faq", title: "FAQ" },
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
          description: 'e.g. "Contact · A private conversation".',
        },
        {
          name: "scriptOverline",
          title: "Script overline",
          type: "string",
          description: "Pinyon-Script accent above the title (e.g. 'Begin —').",
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents on the roman base (e.g. Speak with *Grecia.*).",
          validation: (r) => r.required(),
        }),
        { name: "deck", title: "Deck (sub-headline)", type: "text", rows: 3 },
      ],
    }),

    // ── Enquiry form (editorial voice only — fields live in messages/) ────
    defineField({
      name: "form",
      title: "Enquiry form",
      type: "object",
      group: "form",
      description:
        "The prose around the form. Field labels, placeholders and dropdown options live in messages/{locale}.json.",
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: "eyebrow",
          title: "Eyebrow (small-caps line)",
          type: "string",
          description: 'e.g. "The enquiry".',
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. Request a *private consultation.*).",
        }),
        { name: "intro", title: "Intro paragraph", type: "text", rows: 3 },
        {
          name: "legendAboutYou",
          title: "Fieldset legend · About you",
          type: "string",
          description: 'e.g. "About you".',
        },
        {
          name: "legendAboutWedding",
          title: "Fieldset legend · About the wedding",
          type: "string",
          description: 'e.g. "About the wedding".',
        },
        {
          name: "legendInYourWords",
          title: "Fieldset legend · In your words",
          type: "string",
          description: 'e.g. "In your words".',
        },
        {
          name: "submitLabel",
          title: "Submit button label",
          type: "string",
          description:
            'The canonical CTA, e.g. "Request a private consultation →".',
        },
        {
          name: "submitNote",
          title: "Submit note",
          type: "text",
          rows: 2,
          description:
            'e.g. "We reply to every enquiry personally, within five working days.".',
        },
        {
          name: "successMessage",
          title: "Success message (shown after submit)",
          type: "text",
          rows: 3,
          description:
            "The inline italic confirmation shown once the form is sent.",
        },
      ],
    }),

    // ── Studio rail ───────────────────────────────────────────────────────
    defineField({
      name: "rail",
      title: "Studio rail",
      type: "object",
      group: "rail",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "cards",
          title: "Cards",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "variant",
                  title: "Style",
                  type: "string",
                  description:
                    "Feature = olive card with a script name. Rows = label/value list. Note = heading + paragraph.",
                  options: {
                    list: [
                      { title: "Feature (olive)", value: "feature" },
                      { title: "Rows", value: "rows" },
                      { title: "Note", value: "note" },
                    ],
                    layout: "radio",
                  },
                  initialValue: "rows",
                  validation: (r) => r.required(),
                }),
                {
                  name: "script",
                  title: "Script line (feature only)",
                  type: "string",
                  description:
                    "Rendered in Pinyon Script (e.g. 'Grecia Mejía').",
                },
                { name: "heading", title: "Heading", type: "string" },
                {
                  name: "body",
                  title: "Body (feature / note)",
                  type: "text",
                  rows: 3,
                },
                defineField({
                  name: "rows",
                  title: "Rows (rows variant)",
                  type: "array",
                  of: [
                    defineArrayMember({
                      type: "object",
                      fields: [
                        {
                          name: "label",
                          title: "Label",
                          type: "string",
                          validation: (r) => r.required(),
                        },
                        {
                          name: "value",
                          title: "Value",
                          type: "string",
                          description:
                            "Use a line break with Shift+Enter for two lines.",
                          validation: (r) => r.required(),
                        },
                        {
                          name: "href",
                          title: "Href (optional)",
                          type: "string",
                          description:
                            "e.g. mailto:… or tel:… — leave empty for plain text.",
                        },
                      ],
                      preview: {
                        select: { title: "label", subtitle: "value" },
                      },
                    }),
                  ],
                }),
              ],
              preview: {
                select: {
                  title: "heading",
                  variant: "variant",
                  script: "script",
                },
                prepare: ({ title, variant, script }) => ({
                  title: title ?? script ?? "Card",
                  subtitle: variant,
                }),
              },
            }),
          ],
        }),
      ],
    }),

    // ── Process ───────────────────────────────────────────────────────────
    defineField({
      name: "process",
      title: "Process",
      type: "object",
      group: "process",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "label",
          title: "Label (small-caps)",
          type: "string",
          description: 'e.g. "What happens next".',
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. From enquiry to *first dance.*).",
        }),
        { name: "intro", title: "Intro paragraph", type: "text", rows: 3 },
        defineField({
          name: "steps",
          title: "Steps",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                {
                  name: "number",
                  title: "Number",
                  type: "string",
                  description: 'e.g. "01".',
                  validation: (r) => r.required(),
                },
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (r) => r.required(),
                },
                { name: "body", title: "Body", type: "text", rows: 3 },
              ],
              preview: {
                select: { number: "number", title: "title" },
                prepare: ({ number, title }) => ({
                  title: `${number ?? ""} · ${title ?? "—"}`,
                }),
              },
            }),
          ],
        }),
      ],
    }),

    // ── FAQ ───────────────────────────────────────────────────────────────
    defineField({
      name: "faq",
      title: "FAQ",
      type: "object",
      group: "faq",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "label",
          title: "Label (small-caps)",
          type: "string",
          description: 'e.g. "Before you write".',
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. A few *questions.*).",
        }),
        defineField({
          name: "items",
          title: "Questions",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                {
                  name: "question",
                  title: "Question",
                  type: "string",
                  validation: (r) => r.required(),
                },
                {
                  name: "answer",
                  title: "Answer",
                  type: "text",
                  rows: 4,
                  validation: (r) => r.required(),
                },
              ],
              preview: { select: { title: "question", subtitle: "answer" } },
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare: ({ language }) => ({
      title: "Contact Page",
      subtitle: language ? language.toUpperCase() : undefined,
      media: "✉️",
    }),
  },
});
