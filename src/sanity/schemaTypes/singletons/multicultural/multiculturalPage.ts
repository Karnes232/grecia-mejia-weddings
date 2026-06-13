import { defineArrayMember, defineField, defineType } from "sanity";

import { MULTICULTURAL_RELATED_KEY_OPTIONS } from "../../imageKeyOptions";

/**
 * Multicultural Weddings — hub page (the `/multicultural-weddings` landing page).
 *
 * Localized singleton (one doc per locale, linked via `translation.metadata`).
 * Mirrors the design handoff (`pages/multicultural-hub.jsx`). The Traditions
 * Atlas references standalone `culture` documents; all other sections are
 * editorial copy held here. Shared imagery lives in `multiculturalPageMedia`.
 */
export const multiculturalPage = defineType({
  name: "multiculturalPage",
  title: "Multicultural Weddings Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "philosophy", title: "Intro / philosophy" },
    { name: "methodology", title: "Methodology" },
    { name: "atlas", title: "Traditions atlas" },
    { name: "pairings", title: "Interfaith pairings" },
    { name: "specialists", title: "Specialists" },
    { name: "related", title: "Related / journal" },
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
          description: 'e.g. "The traditions we hold".',
        },
        {
          name: "scriptOverline",
          title: "Script overline",
          type: "string",
          description:
            "Pinyon-Script accent above the title (e.g. 'Curated with').",
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents on the roman base (e.g. cultural *fluency.*).",
          validation: (r) => r.required(),
        }),
        { name: "deck", title: "Deck (sub-headline)", type: "text", rows: 3 },
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

    // ── Intro / philosophy ──────────────────────────────────────────────
    defineField({
      name: "philosophy",
      title: "Intro / philosophy",
      type: "object",
      group: "philosophy",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "sideLabel",
          title: "Side label (small-caps)",
          type: "string",
          description: 'e.g. "A philosophy".',
        },
        {
          name: "sideNote",
          title: "Side note",
          type: "text",
          rows: 3,
          description:
            'e.g. "We accept fourteen weddings a year. Roughly nine of those are multicultural…".',
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. Tradition, held by *people* who have lived inside it.).",
        }),
        { name: "lede", title: "Lede paragraph", type: "text", rows: 3 },
        defineField({
          name: "body",
          title: "Body",
          type: "array",
          of: [defineArrayMember({ type: "block", lists: [] })],
        }),
        {
          name: "pull",
          title: "Pull quote",
          type: "text",
          rows: 2,
          description:
            'e.g. "We refuse to plan a tradition we cannot hold honestly."',
        },
      ],
    }),

    // ── Methodology ───────────────────────────────────────────────────────
    defineField({
      name: "methodology",
      title: "Methodology",
      type: "object",
      group: "methodology",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. A *methodology* in five steps.).",
        }),
        { name: "intro", title: "Intro paragraph", type: "text", rows: 3 },
        defineField({
          name: "steps",
          title: "Steps",
          type: "array",
          description: "Numbered automatically (01, 02…) by order.",
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

    // ── Traditions atlas ─────────────────────────────────────────────────
    defineField({
      name: "atlas",
      title: "Traditions atlas",
      type: "object",
      group: "atlas",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. Eight cultural *arcs.*).",
        }),
        { name: "deck", title: "Deck", type: "text", rows: 2 },
        defineField({
          name: "cultures",
          title: "Cultures",
          type: "array",
          description:
            "Ordered list of cultural traditions shown in the atlas. Card content, number and tile layout come from each culture doc.",
          of: [
            defineArrayMember({
              type: "reference",
              to: [{ type: "culture" }],
            }),
          ],
        }),
      ],
    }),

    // ── Interfaith pairings ─────────────────────────────────────────────
    defineField({
      name: "pairings",
      title: "Interfaith pairings",
      type: "object",
      group: "pairings",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. When two *arcs* meet in one wedding.).",
        }),
        { name: "intro", title: "Intro paragraph", type: "text", rows: 3 },
        defineField({
          name: "items",
          title: "Pairings",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                {
                  name: "first",
                  title: "First tradition",
                  type: "string",
                  validation: (r) => r.required(),
                },
                {
                  name: "second",
                  title: "Second tradition",
                  type: "string",
                  validation: (r) => r.required(),
                },
                { name: "body", title: "Body", type: "text", rows: 3 },
              ],
              preview: {
                select: { first: "first", second: "second", body: "body" },
                prepare: ({ first, second, body }) => ({
                  title: `${first ?? "—"} + ${second ?? "—"}`,
                  subtitle: body ?? "",
                }),
              },
            }),
          ],
        }),
      ],
    }),

    // ── Specialists ────────────────────────────────────────────────────────
    defineField({
      name: "specialists",
      title: "Specialists",
      type: "object",
      group: "specialists",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. The *specialists* who hold each tradition.).",
        }),
        { name: "intro", title: "Intro paragraph", type: "text", rows: 3 },
        defineField({
          name: "items",
          title: "Specialists",
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
                { name: "body", title: "Body", type: "text", rows: 3 },
              ],
              preview: { select: { title: "name", subtitle: "role" } },
            }),
          ],
        }),
      ],
    }),

    // ── Related / journal ─────────────────────────────────────────────────
    defineField({
      name: "related",
      title: "Related / journal",
      type: "object",
      group: "related",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic accents (e.g. From the *journal.*).",
        }),
        defineField({
          name: "articles",
          title: "Related articles",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "category", title: "Category", type: "string" },
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 2 },
                defineField({
                  name: "imageKey",
                  title: "Image",
                  type: "string",
                  options: { list: [...MULTICULTURAL_RELATED_KEY_OPTIONS] },
                  description:
                    "Pick the matching image slot from Multicultural Page Media.",
                }),
                { name: "href", title: "Link href", type: "string" },
              ],
              preview: { select: { title: "title", subtitle: "category" } },
            }),
          ],
        }),
        defineField({
          name: "sidebarDestinations",
          title: "Sidebar · destinations",
          type: "array",
          of: [linkMember()],
        }),
        defineField({
          name: "sidebarServices",
          title: "Sidebar · services",
          type: "array",
          of: [linkMember()],
        }),
        defineField({
          name: "sidebarWeddings",
          title: "Sidebar · recent weddings",
          type: "array",
          of: [linkMember()],
        }),
      ],
    }),

    // ── CTA ────────────────────────────────────────────────────────────────
    defineField({
      name: "cta",
      title: "CTA",
      type: "object",
      group: "cta",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "scriptLine",
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
            "Use *word* for italic accents (e.g. *Begin* your multicultural wedding.).",
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
      title: "Multicultural Weddings Page",
      subtitle: language ? language.toUpperCase() : undefined,
      media: "🪔",
    }),
  },
});

// Shared label/href link row used by the related sidebars.
function linkMember() {
  return defineArrayMember({
    type: "object",
    fields: [
      { name: "label", title: "Label", type: "string" },
      { name: "href", title: "Href", type: "string" },
    ],
    preview: { select: { title: "label", subtitle: "href" } },
  });
}
