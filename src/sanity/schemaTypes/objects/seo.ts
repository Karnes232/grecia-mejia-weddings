import { defineField, defineType } from "sanity";
import { SearchIcon } from "@sanity/icons";

const jsonLdValidator = (text: unknown) => {
  if (!text || typeof text !== "string" || text.trim() === "") return true;
  try {
    JSON.parse(text);
    return true;
  } catch {
    return "Must be valid JSON";
  }
};

/**
 * Editable per-page SEO. Attached to localized page documents (homePage,
 * destinationsPage, aboutPage, destination) — so it is per-language already.
 *
 * Only `metaTitle` + `metaDescription` are required; everything else is optional
 * and the frontend (`buildMetadata`) falls back to page content (headline, deck,
 * hero image) when empty, so unfilled pages still ship valid meta.
 */
export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  icon: SearchIcon,
  options: { collapsible: true, collapsed: true },
  groups: [
    { name: "basic", title: "Basic", default: true },
    { name: "social", title: "Social" },
    { name: "structured", title: "Structured Data" },
    { name: "robots", title: "Robots" },
  ],
  fields: [
    // ── Basic ──────────────────────────────────────────────────────────────
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      group: "basic",
      description: "Browser tab + search results. Aim for 50–60 characters.",
      validation: (Rule) => [
        Rule.required(),
        Rule.max(60).warning(
          "Titles over 60 characters may be truncated in search results.",
        ),
      ],
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      group: "basic",
      description: "Search result snippet. Aim for 150–160 characters.",
      validation: (Rule) => [
        Rule.required(),
        Rule.max(160).warning(
          "Descriptions over 160 characters may be truncated in search results.",
        ),
      ],
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      group: "basic",
      description:
        "Internal reference only — not output as a meta tag (meta keywords are ignored by search engines).",
    }),

    // ── Social ─────────────────────────────────────────────────────────────
    defineField({
      name: "ogTitle",
      title: "OG Title",
      type: "string",
      group: "social",
      description: "Title when shared on social media. Falls back to Meta Title.",
      validation: (Rule) =>
        Rule.max(60).warning("OG titles over 60 characters may be truncated."),
    }),
    defineField({
      name: "ogDescription",
      title: "OG Description",
      type: "text",
      rows: 3,
      group: "social",
      description:
        "Description when shared on social media. Falls back to Meta Description.",
      validation: (Rule) =>
        Rule.max(200).warning(
          "OG descriptions over 200 characters may be truncated.",
        ),
    }),
    defineField({
      name: "ogImage",
      title: "OG Image",
      type: "image",
      group: "social",
      description:
        "Social share image (recommended 1200 × 630 px). Falls back to the page hero image.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "twitterCard",
      title: "Twitter Card Type",
      type: "string",
      group: "social",
      initialValue: "summary_large_image",
      options: {
        list: [
          { title: "Summary", value: "summary" },
          { title: "Summary Large Image", value: "summary_large_image" },
        ],
        layout: "radio",
      },
    }),

    // ── Structured Data ──────────────────────────────────────────────────────
    defineField({
      name: "structuredData",
      title: "Structured Data",
      type: "text",
      rows: 10,
      group: "structured",
      description:
        "Paste a schema.org JSON-LD object or @graph for this page (rendered as-is).",
      validation: (Rule) => Rule.custom(jsonLdValidator),
    }),

    // ── Robots ─────────────────────────────────────────────────────────────
    defineField({
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      group: "robots",
      description: "Hide this page from search engines.",
      initialValue: false,
    }),
    defineField({
      name: "noFollow",
      title: "No Follow",
      type: "boolean",
      group: "robots",
      description: "Tell search engines not to follow links on this page.",
      initialValue: false,
    }),
  ],
});
