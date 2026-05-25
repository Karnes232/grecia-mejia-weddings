import { defineArrayMember, defineField, defineType } from "sanity";

import { apiVersion } from "../../env";
import {
  GUEST_KEY_OPTIONS,
  type ImageKeyOption,
  RELATED_KEY_OPTIONS,
  STYLE_KEY_OPTIONS,
  VENUE_KEY_OPTIONS,
} from "../imageKeyOptions";

// `imageKey` is a dropdown of fixed image slots shared with the destination's
// `destinationMedia` doc, so both sides always pick from the same list.
const imageKeyField = (list: ImageKeyOption[]) =>
  defineField({
    name: "imageKey",
    title: "Image",
    type: "string",
    options: { list },
    description: "Pick the matching image slot from this destination's media doc.",
  });

const TILE_OPTIONS = [
  { title: "Featured (x7, panoramic)", value: "featured" },
  { title: "Tall · large (x5)", value: "tall-lg" },
  { title: "Tall (x4)", value: "tall" },
  { title: "Wide (x6)", value: "wide" },
  { title: "Square (x4)", value: "square" },
  { title: "Square · small (x3)", value: "square-sm" },
] as const;

const REGION_OPTIONS = [
  { title: "Caribbean", value: "caribbean" },
  { title: "Mediterranean", value: "mediterranean" },
  { title: "Western Europe", value: "western-europe" },
  { title: "The Americas", value: "americas" },
] as const;

const SEASON_OPTIONS = [
  { title: "Peak", value: "peak" },
  { title: "Good (shoulder)", value: "good" },
  { title: "Off (transitional)", value: "off" },
] as const;

export const destination = defineType({
  name: "destination",
  title: "Destination",
  type: "document",
  groups: [
    { name: "identity", title: "Identity" },
    { name: "hero", title: "Hero" },
    { name: "facts", title: "Fact strip" },
    { name: "story", title: "Overview story" },
    { name: "styles", title: "Wedding styles" },
    { name: "venues", title: "Luxury venues" },
    { name: "weddingTypes", title: "Wedding types" },
    { name: "logistics", title: "Logistics & weather" },
    { name: "guest", title: "Guest experience" },
    { name: "trends", title: "Trends" },
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
      title: "Destination name",
      type: "string",
      group: "identity",
      description: 'Canonical name used on the atlas — e.g. "Punta Cana".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "identity",
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
            _type == "destination" &&
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
      type: "string",
      group: "identity",
      options: { list: [...REGION_OPTIONS] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "country",
      title: "Country / area",
      type: "string",
      group: "identity",
      description: 'e.g. "Dominican Republic" or "French Antilles".',
    }),
    defineField({
      name: "subLocations",
      title: "Sub-locations (small-caps line)",
      type: "string",
      group: "identity",
      description: 'Separate with " · " — e.g. "Cap Cana · Casa de Campo".',
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
    }),

    // ── Hero ─────────────────────────────────────────────────────────────
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
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
      name: "facts",
      title: "Fact strip",
      type: "array",
      group: "facts",
      validation: (r) => r.max(8),
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

    // ── Story ────────────────────────────────────────────────────────────
    defineField({
      name: "story",
      title: "Overview story",
      type: "object",
      group: "story",
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

    // ── Wedding styles ───────────────────────────────────────────────────
    defineField({
      name: "styles",
      title: "Wedding styles",
      type: "object",
      group: "styles",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic-olive accents.",
        }),
        { name: "deck", title: "Deck", type: "string" },
        defineField({
          name: "items",
          title: "Style cards",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "numeral", title: "Roman numeral", type: "string" },
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 3 },
                imageKeyField(STYLE_KEY_OPTIONS),
              ],
              preview: { select: { title: "title", subtitle: "numeral" } },
            }),
          ],
        }),
      ],
    }),

    // ── Luxury venues ────────────────────────────────────────────────────
    defineField({
      name: "venues",
      title: "Luxury venues",
      type: "object",
      group: "venues",
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
          title: "Venue cards",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "name", title: "Name", type: "string" },
                { name: "tag", title: "Tag", type: "string" },
                { name: "meta", title: "Meta line", type: "string" },
                { name: "capacity", title: "Capacity", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 3 },
                { name: "bestFor", title: "Best for", type: "string" },
                imageKeyField(VENUE_KEY_OPTIONS),
              ],
              preview: { select: { title: "name", subtitle: "tag" } },
            }),
          ],
        }),
      ],
    }),

    // ── Wedding types ────────────────────────────────────────────────────
    defineField({
      name: "weddingTypes",
      title: "Wedding types",
      type: "object",
      group: "weddingTypes",
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
          name: "items",
          title: "Type cards",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "name", title: "Culture name", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 2 },
                { name: "href", title: "Link href", type: "string" },
              ],
              preview: { select: { title: "name", subtitle: "body" } },
            }),
          ],
        }),
      ],
    }),

    // ── Logistics & weather ──────────────────────────────────────────────
    defineField({
      name: "logistics",
      title: "Logistics & weather",
      type: "object",
      group: "logistics",
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
          name: "gettingThere",
          title: "Getting there",
          type: "object",
          fields: [
            { name: "headline", title: "Sub-headline", type: "string" },
            defineField({
              name: "items",
              title: "Items",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    { name: "label", title: "Label", type: "string" },
                    { name: "value", title: "Value", type: "text", rows: 2 },
                  ],
                  preview: { select: { title: "label", subtitle: "value" } },
                }),
              ],
            }),
            { name: "footnote", title: "Footnote", type: "text", rows: 3 },
          ],
        }),
        defineField({
          name: "weather",
          title: "Weather",
          type: "object",
          fields: [
            { name: "headline", title: "Sub-headline", type: "string" },
            { name: "intro", title: "Intro", type: "text", rows: 2 },
            defineField({
              name: "months",
              title: "Months (12)",
              type: "array",
              validation: (r) => r.length(12),
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    { name: "month", title: "Month label", type: "string" },
                    { name: "temp", title: "Temperature", type: "string" },
                    { name: "conditions", title: "Conditions", type: "string" },
                    defineField({
                      name: "season",
                      title: "Season class",
                      type: "string",
                      options: { list: [...SEASON_OPTIONS] },
                    }),
                  ],
                  preview: {
                    select: { title: "month", subtitle: "conditions" },
                  },
                }),
              ],
            }),
            { name: "footnote", title: "Footnote", type: "text", rows: 2 },
          ],
        }),
      ],
    }),

    // ── Guest experience ─────────────────────────────────────────────────
    defineField({
      name: "guest",
      title: "Guest experience",
      type: "object",
      group: "guest",
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
          title: "Cards",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "label", title: "Small-caps label", type: "string" },
                { name: "headline", title: "Headline", type: "string" },
                imageKeyField(GUEST_KEY_OPTIONS),
              ],
              preview: { select: { title: "headline", subtitle: "label" } },
            }),
          ],
        }),
      ],
    }),

    // ── Trends ───────────────────────────────────────────────────────────
    defineField({
      name: "trends",
      title: "Trends",
      type: "object",
      group: "trends",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Use *word* for italic-olive accents.",
        }),
        { name: "readMoreLabel", title: "Read-more label", type: "string" },
        { name: "readMoreHref", title: "Read-more href", type: "string" },
        defineField({
          name: "items",
          title: "Trend items",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 3 },
              ],
              preview: { select: { title: "title", subtitle: "body" } },
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
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "category", title: "Category", type: "string" },
                { name: "title", title: "Title", type: "string" },
                { name: "body", title: "Body", type: "text", rows: 2 },
                imageKeyField(RELATED_KEY_OPTIONS),
                { name: "href", title: "Link href", type: "string" },
              ],
              preview: { select: { title: "title", subtitle: "category" } },
            }),
          ],
        }),
        defineField({
          name: "sidebarVenues",
          title: "Sidebar · related venues",
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
        }),
        defineField({
          name: "sidebarCultures",
          title: "Sidebar · related cultures",
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
        }),
        defineField({
          name: "sidebarServices",
          title: "Sidebar · related services",
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
        }),
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
    select: {
      title: "name",
      subtitle: "country",
      language: "language",
    },
    prepare: ({ title, subtitle, language }) => ({
      title: (title as string) ?? "Destination",
      subtitle: [subtitle, language ? `· ${language.toUpperCase()}` : null]
        .filter(Boolean)
        .join(" "),
      media: "📍",
    }),
  },
});
