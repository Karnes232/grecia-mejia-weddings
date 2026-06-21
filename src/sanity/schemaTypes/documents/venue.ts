import { defineArrayMember, defineField, defineType } from "sanity";

import { apiVersion } from "../../env";
import {
  VENUE_PHOTO_KEY_OPTIONS,
  VENUE_PORTFOLIO_KEY_OPTIONS,
  type ImageKeyOption,
} from "../imageKeyOptions";

const imageKeyField = (list: ImageKeyOption[]) =>
  defineField({
    name: "imageKey",
    title: "Image",
    type: "string",
    options: { list },
    description: "Pick the matching image slot from this venue's media doc.",
  });

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

const metaRows = (name: string, title: string, max = 3) =>
  defineField({
    name,
    title,
    type: "array",
    validation: (r) => r.max(max),
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
  });

/**
 * An individual wedding venue — the `/venues/[region]/[venue]` page.
 *
 * Localized — one doc per locale, linked via `translation.metadata`. Slugs are
 * translated per locale; imagery lives in `venueMedia` (media-by-reference).
 * Each venue belongs to a `venueRegion` (the `region` reference), and the region
 * doc references its venues back (so the region list pulls card content from
 * here). Mirrors the `culture` collection pattern.
 */
export const venue = defineType({
  name: "venue",
  title: "Venue",
  type: "document",
  groups: [
    { name: "identity", title: "Identity" },
    { name: "card", title: "Region card" },
    { name: "header", title: "Header" },
    { name: "facts", title: "Fact strip" },
    { name: "overview", title: "Overview" },
    { name: "capacity", title: "Capacity & honesty" },
    { name: "compatibility", title: "Compatibility" },
    { name: "logistics", title: "Logistics" },
    { name: "photography", title: "Photography" },
    { name: "hotels", title: "Nearby hotels" },
    { name: "portfolio", title: "Portfolio" },
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
      title: "Venue name",
      type: "string",
      group: "identity",
      description: 'e.g. "Jellyfish Restaurant".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "identity",
      description: "Translated per locale — e.g. en `jellyfish-restaurant`.",
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
            _type == "venue" &&
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
      name: "region",
      title: "Region",
      type: "reference",
      to: [{ type: "venueRegion" }],
      weak: true,
      group: "identity",
      description: "The region this venue belongs to (same language).",
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
    defineField({
      name: "media",
      title: "Media document",
      type: "reference",
      to: [{ type: "venueMedia" }],
      weak: true,
      group: "identity",
      description:
        "This venue's shared, locale-agnostic imagery. Every language version points to the same media doc.",
    }),

    // ── Region card (shown on the region list) ───────────────────────────
    defineField({
      name: "number",
      title: "Card number",
      type: "string",
      group: "card",
      description: 'Display order on the region list (e.g. "01").',
    }),
    defineField({
      name: "tag",
      title: "Type tag",
      type: "string",
      group: "card",
      description:
        'Typology — drives the region\'s filter chips (e.g. "Beach pavilion").',
    }),
    defineField({
      name: "location",
      title: "Location line",
      type: "string",
      group: "card",
      description: 'e.g. "Bávaro · Open-air".',
    }),
    defineField({
      name: "cardBlurb",
      title: "Card blurb",
      type: "text",
      rows: 3,
      group: "card",
      description: "Paragraph shown on the region list card.",
    }),
    metaRows("cardMeta", "Card meta rows", 3),

    // ── Header ───────────────────────────────────────────────────────────
    defineField({
      name: "header",
      title: "Header",
      type: "object",
      group: "header",
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          description: 'e.g. "№ 01 · Beach pavilion · Bávaro".',
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic-olive accents (e.g. Jellyfish *Restaurant.*).",
          validation: (r) => r.required(),
        }),
        { name: "location", title: "Location line", type: "string" },
        { name: "deck", title: "Deck", type: "text", rows: 3 },
        defineField({
          name: "gallery",
          title: "Gallery link",
          type: "object",
          description: "Optional 'View full gallery' overlay on the mosaic.",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "href", title: "Href", type: "string" },
          ],
        }),
        defineField({
          name: "cta",
          title: "Primary CTA",
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "href", type: "string", title: "Href" },
          ],
        }),
      ],
    }),

    // ── Fact strip ───────────────────────────────────────────────────────
    defineField({
      name: "facts",
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
        { name: "sideLabel", title: "Side label", type: "string" },
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
          of: [
            defineArrayMember({
              type: "block",
              styles: [{ title: "Normal", value: "normal" }],
              lists: [],
            }),
          ],
        }),
        { name: "pull", title: "Pull quote", type: "text", rows: 2 },
      ],
    }),

    // ── Capacity & honesty ───────────────────────────────────────────────
    defineField({
      name: "capacity",
      title: "Capacity & honesty",
      type: "object",
      group: "capacity",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic accents (e.g. What we know *honestly.*).",
        }),
        defineField({
          name: "meter",
          title: "Capacity meter",
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "sub", title: "Sub-line", type: "string" },
            defineField({
              name: "marks",
              title: "Scale marks (e.g. 0, 40, 110, 220, 300)",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
              options: { layout: "tags" },
            }),
            defineField({
              name: "fillLeft",
              title: "Fill start (%)",
              type: "number",
              validation: (r) => r.min(0).max(100),
            }),
            defineField({
              name: "fillWidth",
              title: "Fill width (%)",
              type: "number",
              validation: (r) => r.min(0).max(100),
            }),
            defineField({
              name: "recs",
              title: "Recommendations",
              type: "array",
              validation: (r) => r.max(2),
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    { name: "label", title: "Label", type: "string" },
                    { name: "value", title: "Value", type: "string" },
                    { name: "body", title: "Body", type: "text", rows: 3 },
                  ],
                  preview: { select: { title: "label", subtitle: "value" } },
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: "loves",
          title: "What we love",
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            defineField({
              name: "items",
              title: "Items",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
          ],
        }),
        defineField({
          name: "constraints",
          title: "Honest constraints",
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            defineField({
              name: "items",
              title: "Items",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
          ],
        }),
      ],
    }),

    // ── Compatibility ────────────────────────────────────────────────────
    defineField({
      name: "compatibility",
      title: "Tradition compatibility",
      type: "object",
      group: "compatibility",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic accents.",
        }),
        { name: "intro", title: "Intro", type: "text", rows: 2 },
        defineField({
          name: "items",
          title: "Traditions",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "name", title: "Name", type: "string" },
                { name: "sub", title: "Sub-line", type: "string" },
                defineField({
                  name: "rating",
                  title: "Rating (1–5)",
                  type: "number",
                  validation: (r) => r.min(1).max(5),
                }),
                { name: "note", title: "Note", type: "string" },
              ],
              preview: { select: { title: "name", subtitle: "note" } },
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
          description: "Use *word* for italic accents (e.g. The *practical* picture.).",
        }),
        defineField({
          name: "blocks",
          title: "Spec blocks",
          type: "array",
          validation: (r) => r.max(3),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                metaRows("rows", "Rows", 12),
              ],
              preview: { select: { title: "title" } },
            }),
          ],
        }),
      ],
    }),

    // ── Photography ──────────────────────────────────────────────────────
    defineField({
      name: "photography",
      title: "Photography",
      type: "object",
      group: "photography",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic accents (e.g. Where the *camera* goes.).",
        }),
        defineField({
          name: "items",
          title: "Moments",
          type: "array",
          validation: (r) => r.max(4),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "time", title: "Time (e.g. '5:30 PM')", type: "string" },
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 2 },
                imageKeyField(VENUE_PHOTO_KEY_OPTIONS),
              ],
              preview: { select: { title: "title", subtitle: "time" } },
            }),
          ],
        }),
      ],
    }),

    // ── Nearby hotels ────────────────────────────────────────────────────
    defineField({
      name: "hotels",
      title: "Nearby hotels",
      type: "object",
      group: "hotels",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic accents (e.g. Where your *guests* stay.).",
        }),
        defineField({
          name: "items",
          title: "Hotels",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "number", title: "Number", type: "string" },
                { name: "name", title: "Name", type: "string" },
                { name: "sub", title: "Sub-line", type: "string" },
                { name: "distance", title: "Distance", type: "string" },
                { name: "keys", title: "Keys / rating", type: "string" },
                { name: "href", title: "Href (optional)", type: "string" },
              ],
              preview: { select: { title: "name", subtitle: "sub" } },
            }),
          ],
        }),
      ],
    }),

    // ── Portfolio ────────────────────────────────────────────────────────
    defineField({
      name: "portfolio",
      title: "Portfolio",
      type: "object",
      group: "portfolio",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic accents (e.g. From the *portfolio.*).",
        }),
        { name: "viewAllLabel", title: "View-all label", type: "string" },
        { name: "viewAllHref", title: "View-all href", type: "string" },
        defineField({
          name: "items",
          title: "Case studies",
          type: "array",
          validation: (r) => r.max(3),
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "meta", title: "Meta line", type: "string" },
                imageKeyField(VENUE_PORTFOLIO_KEY_OPTIONS),
              ],
              preview: { select: { title: "title", subtitle: "meta" } },
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
          description: "Use *word* for italic accents (e.g. From the *journal.*).",
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
        sidebarLinkArray("sidebarVenues", "Sidebar · other venues"),
        sidebarLinkArray("sidebarCultures", "Sidebar · compatible traditions"),
        sidebarLinkArray("sidebarDestinations", "Sidebar · related destinations"),
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
          description: "Use *word* for italic accents (e.g. Frequently *asked.*).",
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
    select: { title: "name", tag: "tag", language: "language" },
    prepare: ({ title, tag, language }) => ({
      title: (title as string) ?? "Venue",
      subtitle: [tag, language ? `· ${(language as string).toUpperCase()}` : null]
        .filter(Boolean)
        .join(" "),
      media: "🏝️",
    }),
  },
});
