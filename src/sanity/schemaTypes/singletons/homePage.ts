import { defineArrayMember, defineField, defineType } from "sanity";

const altField = {
  name: "alt",
  type: "string",
  title: "Alt text",
  description: "Used for accessibility and SEO.",
};

type LinkObjectOptions = {
  /** Require the whole CTA object to be filled in */
  required?: boolean;
  /** Require label only (defaults to `required` when omitted) */
  labelRequired?: boolean;
  /** Require href only (defaults to `required` when omitted) */
  hrefRequired?: boolean;
};
const linkObject = (name: string, title: string, options?: LinkObjectOptions) =>
  defineField({
    name,
    title,
    type: "object",
    validation: (rule) => (options?.required ? rule.required() : rule),
    fields: [
      defineField({
        name: "label",
        type: "string",
        title: "Label",
        validation: (rule) =>
          (options?.labelRequired ?? options?.required)
            ? rule.required()
            : rule,
      }),
      defineField({
        name: "href",
        type: "string",
        title: "Href",
        validation: (rule) =>
          (options?.hrefRequired ?? options?.required) ? rule.required() : rule,
      }),
    ],
  });
export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "atelier", title: "Atelier intro" },
    { name: "whereWeWork", title: "Where we work" },
    { name: "featuredWedding", title: "Featured wedding" },
    { name: "traditions", title: "Traditions / cultural fluency" },
    { name: "venuesConsidered", title: "Venues, considered" },
    { name: "recentWeddings", title: "Recent weddings" },
    { name: "testimonials", title: "Testimonials" },
    { name: "journeyCta", title: "Journey CTA" },
  ],
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),

    // ── Hero ──────────────────────────────────────────────────────────────
    // Hero background image is shared across locales — see `homePageMedia`.
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: "overline",
          title: "Eyebrow / overline",
          type: "string",
          description:
            "Small-caps line between gold hairlines above the headline.",
        }),
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic-gold accents (e.g. The *art* of the *destination* wedding.).",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "subheadline",
          title: "Subheadline",
          type: "text",
          rows: 2,
          validation: (r) => r.required(),
        }),
        linkObject("primaryCta", "Primary CTA", { required: true }),
        linkObject("secondaryCta", "Secondary CTA", { required: true }),
      ],
    }),

    // ── Atelier intro ─────────────────────────────────────────────────────
    defineField({
      name: "atelier",
      title: "Atelier intro",
      type: "object",
      group: "atelier",
      options: { collapsible: true, collapsed: true },
      fields: [
        {
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          validation: (r) => r.required(),
        },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "body",
          title: "Body",
          type: "array",
          of: [defineArrayMember({ type: "block" })],
          validation: (r) => r.required(),
        }),
        {
          name: "signature",
          title: "Signature (script)",
          type: "string",
          validation: (r) => r.required(),
        },
      ],
    }),

    // ── Where we work ─────────────────────────────────────────────────────
    defineField({
      name: "whereWeWork",
      title: "Where we work",
      type: "object",
      group: "whereWeWork",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          validation: (r) => r.required(),
        }),
        { name: "viewAllLabel", title: "View-all label", type: "string" },
        { name: "viewAllHref", title: "View-all href", type: "string" },
        {
          name: "intro",
          title: "Intro paragraph (right of head)",
          type: "text",
          rows: 2,
        },
        defineField({
          name: "destinations",
          title: "Featured destinations",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                  fields: [altField],
                },
                { name: "name", title: "Name", type: "string" },
                { name: "region", title: "Region", type: "string" },
                {
                  name: "tagline",
                  title: "Tagline (eyebrow on card)",
                  type: "string",
                  description:
                    'e.g. "Caribbean — Year-round" or "Italy — May to October".',
                },
                {
                  name: "subLocations",
                  title: "Sub-locations (small-caps line)",
                  type: "string",
                  description:
                    'Separate with " · " — e.g. "Cap Cana · Casa de Campo · Bávaro".',
                },
                {
                  name: "slug",
                  title: "Slug (future destination doc)",
                  type: "string",
                  description:
                    "Used for the link to /destinations/{slug} and for later migration to a reference.",
                },
              ],
              preview: {
                select: { title: "name", subtitle: "region", media: "image" },
              },
            }),
          ],
        }),
      ],
    }),

    // ── Featured wedding ──────────────────────────────────────────────────
    // Image is shared across locales — see `homePageMedia.featuredWedding.image`.
    defineField({
      name: "featuredWedding",
      title: "Featured wedding",
      type: "object",
      group: "featuredWedding",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic-color accents, ~word~ for Pinyon Script accents (e.g. ~Sara~ & Adam.).",
        }),
        {
          name: "subjectCaption",
          title: "Subject caption (under image · left)",
          type: "string",
          description: 'e.g. "Sara & Adam · Cap Cana".',
        },
        {
          name: "metaCaption",
          title: "Meta caption (under image · right)",
          type: "string",
          description: 'e.g. "Three days · 312 guests".',
        },
        defineField({
          name: "body",
          title: "Body",
          type: "array",
          of: [defineArrayMember({ type: "block" })],
        }),
        defineField({
          name: "facts",
          title: "Facts table",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "label", title: "Label", type: "string" },
                { name: "value", title: "Value", type: "string" },
              ],
              preview: {
                select: { title: "label", subtitle: "value" },
              },
            }),
          ],
        }),
        { name: "quote", title: "Pull quote", type: "text", rows: 3 },
        { name: "linkLabel", title: "Link label", type: "string" },
        { name: "linkHref", title: "Link href", type: "string" },
      ],
    }),

    // ── Traditions (cultural fluency) ────────────────────────────────────
    defineField({
      name: "traditions",
      title: "Traditions / cultural fluency",
      type: "object",
      group: "traditions",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description:
            "Use *word* for italic-gold accents (e.g. Traditions we hold with *cultural fluency.*).",
          validation: (r) => r.required(),
        }),
        { name: "quote", title: "Centered quote", type: "text", rows: 3 },
        defineField({
          name: "cultures",
          title: "Cultures grid",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "name", title: "Name", type: "string" },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                  rows: 3,
                },
                {
                  name: "slug",
                  title: "Slug (future culture doc)",
                  type: "string",
                },
              ],
              preview: {
                select: { title: "name", subtitle: "description" },
              },
            }),
          ],
        }),
      ],
    }),

    // ── Venues, considered ───────────────────────────────────────────────
    defineField({
      name: "venuesConsidered",
      title: "Venues, considered",
      type: "object",
      group: "venuesConsidered",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          validation: (r) => r.required(),
        }),
        { name: "intro", title: "Intro paragraph", type: "text", rows: 3 },
        defineField({
          name: "venues",
          title: "Venues list",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "name", title: "Name", type: "string" },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                  rows: 2,
                },
                { name: "region", title: "Region tag", type: "string" },
                {
                  name: "slug",
                  title: "Slug (future venue doc)",
                  type: "string",
                },
              ],
              preview: {
                select: { title: "name", subtitle: "region" },
              },
            }),
          ],
        }),
      ],
    }),

    // ── Recent weddings (editorial grid) ─────────────────────────────────
    // Images are shared across locales — see `homePageMedia.recentWeddings.images`.
    defineField({
      name: "recentWeddings",
      title: "Recent weddings",
      type: "object",
      group: "recentWeddings",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          validation: (r) => r.required(),
        }),
      ],
    }),

    // ── Testimonials ─────────────────────────────────────────────────────
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "object",
      group: "testimonials",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "items",
          title: "Quotes",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                { name: "quote", title: "Quote", type: "text", rows: 4 },
                { name: "attribution", title: "Attribution", type: "string" },
              ],
              preview: {
                select: { title: "attribution", subtitle: "quote" },
              },
            }),
          ],
        }),
      ],
    }),

    // ── Journey CTA ──────────────────────────────────────────────────────
    defineField({
      name: "journeyCta",
      title: "Journey CTA",
      type: "object",
      group: "journeyCta",
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          validation: (r) => r.required(),
        }),
        { name: "body", title: "Body", type: "text", rows: 3 },
        linkObject("cta", "CTA button"),
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare: ({ language }) => ({
      title: "Home Page",
      subtitle: language ? language.toUpperCase() : undefined,
      media: "🏠",
    }),
  },
});
