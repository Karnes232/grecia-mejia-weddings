import { defineArrayMember, defineField, defineType } from "sanity";

import { ABOUT_TEAM_KEY_OPTIONS } from "../../imageKeyOptions";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "story", title: "Founder story" },
    { name: "manifesto", title: "Manifesto" },
    { name: "timeline", title: "Timeline" },
    { name: "numbers", title: "Numbers" },
    { name: "team", title: "Team" },
    { name: "press", title: "Press & awards" },
    { name: "contact", title: "Contact" },
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
          description: 'e.g. "The House · About".',
        },
        {
          name: "scriptOverline",
          title: "Script overline",
          type: "string",
          description:
            "Pinyon-Script accent above the title (e.g. 'A note from').",
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents on the roman base (e.g. Grecia *Mejía.*).",
          validation: (r) => r.required(),
        }),
        { name: "deck", title: "Deck (sub-headline)", type: "text", rows: 3 },
        {
          name: "signedName",
          title: "Signature name (script)",
          type: "string",
          description: "Rendered in Pinyon Script (e.g. 'Grecia').",
        },
        {
          name: "signedRole",
          title: "Signature role",
          type: "string",
          description: 'e.g. "Founder & Lead Curator · Punta Cana".',
        },
        {
          name: "captionLeft",
          title: "Portrait caption · top",
          type: "string",
          description: 'e.g. "Photographed by L. Rossi".',
        },
        {
          name: "captionRight",
          title: "Portrait caption · bottom",
          type: "string",
          description: 'e.g. "Studio, Cap Cana · 2025".',
        },
      ],
    }),

    // ── Founder story ─────────────────────────────────────────────────────
    defineField({
      name: "story",
      title: "Founder story",
      type: "object",
      group: "story",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "sideLabel",
          title: "Side label (small-caps)",
          type: "string",
          description: 'e.g. "A working biography".',
        },
        {
          name: "sideNote",
          title: "Side note",
          type: "text",
          rows: 3,
          description: 'e.g. "Written by Grecia, edited for length…".',
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. I did not set out to start a *studio.*).",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "body",
          title: "Body",
          type: "array",
          description:
            "The autobiographical narrative. Use the 'Lede' style for the opening paragraph and 'Pull quote' for emphasised lines.",
          of: [
            defineArrayMember({
              type: "block",
              styles: [
                { title: "Normal", value: "normal" },
                { title: "Lede", value: "lede" },
                { title: "Pull quote", value: "blockquote" },
              ],
              lists: [],
            }),
          ],
          validation: (r) => r.required(),
        }),
        defineField({
          name: "figureCaption",
          title: "Story figure caption",
          type: "object",
          description:
            "Caption for the embedded photo (image set in About Page Media).",
          fields: [
            {
              name: "emphasis",
              title: "Emphasis (italic)",
              type: "string",
              description: 'e.g. "Bávaro Beach, March 2014".',
            },
            {
              name: "note",
              title: "Note",
              type: "string",
              description: 'e.g. "The Mendoza-Rivera wedding · 220 guests".',
            },
          ],
        }),
        {
          name: "signoffName",
          title: "Sign-off name (script)",
          type: "string",
          description: "Rendered in Pinyon Script (e.g. 'Grecia').",
        },
        {
          name: "signoffPlace",
          title: "Sign-off place",
          type: "string",
          description: 'e.g. "Punta Cana, January 2026".',
        },
      ],
    }),

    // ── Manifesto ─────────────────────────────────────────────────────────
    defineField({
      name: "manifesto",
      title: "Manifesto",
      type: "object",
      group: "manifesto",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "label",
          title: "Label (small-caps)",
          type: "string",
          description: 'e.g. "A manifesto".',
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. *Five* things we hold true.).",
        }),
        { name: "intro", title: "Intro paragraph", type: "text", rows: 3 },
        defineField({
          name: "tenets",
          title: "Tenets",
          type: "array",
          description: "Numbered automatically (№ 01, № 02…) by order.",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (r) => r.required(),
                },
                { name: "body", title: "Body", type: "text", rows: 3 },
              ],
              preview: { select: { title: "title", subtitle: "body" } },
            }),
          ],
        }),
      ],
    }),

    // ── Timeline ──────────────────────────────────────────────────────────
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "object",
      group: "timeline",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "label",
          title: "Label (small-caps)",
          type: "string",
          description: 'e.g. "A working chronology".',
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic accents (e.g. Fifteen *years.*).",
        }),
        { name: "intro", title: "Intro paragraph", type: "text", rows: 3 },
        defineField({
          name: "items",
          title: "Milestones",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                {
                  name: "year",
                  title: "Year",
                  type: "string",
                  description: 'e.g. "2010".',
                  validation: (r) => r.required(),
                },
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (r) => r.required(),
                },
                {
                  name: "place",
                  title: "Place / sub-line",
                  type: "string",
                  description: 'e.g. "Punta Cana · Catholic".',
                },
                { name: "body", title: "Body", type: "text", rows: 3 },
              ],
              preview: {
                select: { year: "year", title: "title", subtitle: "place" },
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

    // ── Numbers ───────────────────────────────────────────────────────────
    defineField({
      name: "numbers",
      title: "Numbers",
      type: "object",
      group: "numbers",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "stats",
          title: "Stats",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "value", title: "Value (e.g. '240+')", type: "string" },
                { name: "label", title: "Label", type: "string" },
              ],
              preview: { select: { title: "value", subtitle: "label" } },
            }),
          ],
        }),
      ],
    }),

    // ── Team ──────────────────────────────────────────────────────────────
    defineField({
      name: "team",
      title: "Team",
      type: "object",
      group: "team",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "label",
          title: "Label (small-caps)",
          type: "string",
          description: 'e.g. "The team".',
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. The *studio,* in person.).",
        }),
        { name: "intro", title: "Intro paragraph", type: "text", rows: 3 },
        defineField({
          name: "members",
          title: "Members",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "role", title: "Role", type: "string" },
                {
                  name: "name",
                  title: "Name",
                  type: "string",
                  validation: (r) => r.required(),
                },
                { name: "bio", title: "Bio", type: "text", rows: 3 },
                defineField({
                  name: "imageKey",
                  title: "Photo slot",
                  type: "string",
                  description:
                    "Maps to the matching image in About Page Media (shared across languages).",
                  options: { list: [...ABOUT_TEAM_KEY_OPTIONS] },
                  validation: (r) => r.required(),
                }),
              ],
              preview: { select: { title: "name", subtitle: "role" } },
            }),
          ],
        }),
      ],
    }),

    // ── Press & awards ────────────────────────────────────────────────────
    defineField({
      name: "press",
      title: "Press & awards",
      type: "object",
      group: "press",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "label",
          title: "Label (small-caps)",
          type: "string",
          description: 'e.g. "Press & recognition".',
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. The studio, in *print.*).",
        }),
        defineField({
          name: "publications",
          title: "Press wall (publication names)",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
          options: { layout: "tags" },
        }),
        defineField({
          name: "awards",
          title: "Awards",
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
              description: 'e.g. "Awards & recognition".',
            },
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
                    { name: "sub", title: "Sub-line", type: "string" },
                    {
                      name: "publication",
                      title: "Publication",
                      type: "string",
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
      ],
    }),

    // ── Contact ───────────────────────────────────────────────────────────
    defineField({
      name: "contact",
      title: "Contact",
      type: "object",
      group: "contact",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "label",
          title: "Label (small-caps)",
          type: "string",
          description: 'e.g. "A private conversation".',
        },
        {
          name: "scriptLine",
          title: "Script line",
          type: "string",
          description: "Rendered in Pinyon Script (e.g. 'Begin —').",
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. *write* to Grecia.).",
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
        defineField({
          name: "labels",
          title: "Contact-row labels",
          type: "object",
          description:
            "Labels for the Email / Phone / WhatsApp / Instagram rows — their values + links come from Site Settings → Contact.",
          fields: [
            { name: "email", title: "Email label", type: "string" },
            { name: "phone", title: "Phone label", type: "string" },
            { name: "whatsapp", title: "WhatsApp label", type: "string" },
            { name: "instagram", title: "Instagram label", type: "string" },
          ],
        }),
        defineField({
          name: "details",
          title: "Extra contact rows",
          type: "array",
          description:
            "Additional editorial rows shown after the Site-Settings contact rows (e.g. Studios, Calendar).",
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
                  validation: (r) => r.required(),
                },
                {
                  name: "href",
                  title: "Href (optional)",
                  type: "string",
                },
              ],
              preview: { select: { title: "label", subtitle: "value" } },
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare: ({ language }) => ({
      title: "About Page",
      subtitle: language ? language.toUpperCase() : undefined,
      media: "🏛️",
    }),
  },
});
