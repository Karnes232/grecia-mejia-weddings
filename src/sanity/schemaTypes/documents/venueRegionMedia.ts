import { defineField, defineType } from "sanity";

const altField = {
  name: "alt",
  type: "string",
  title: "Alt text",
  description: "Used for accessibility and SEO. Reused across all languages.",
};

/**
 * Per-region imagery, locale-agnostic. Each localized `venueRegion` doc points
 * here via its `media` reference, so the link survives per-language slugs.
 * The seed gives it a deterministic `_id` of `venueRegionMedia-<canonical slug>`
 * for idempotency. Mirrors the `cultureMedia` pattern.
 */
export const venueRegionMedia = defineType({
  name: "venueRegionMedia",
  title: "Venue Region media",
  type: "document",
  description:
    "Per-region imagery, shared across every language. Venue Region docs link here via their media reference.",
  fields: [
    defineField({
      name: "slug",
      title: "Region (label)",
      type: "string",
      readOnly: true,
      description:
        "Human-readable handle set by the seed (the region's canonical English slug).",
    }),
    defineField({
      name: "cardImage",
      title: "Hub card image",
      type: "image",
      description: "This region's image on the Venues hub.",
      options: { hotspot: true },
      fields: [altField],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      description: "Hero image for the region detail page.",
      options: { hotspot: true },
      fields: [altField],
    }),
  ],
  preview: {
    select: { title: "slug", media: "cardImage" },
    prepare: ({ title, media }) => ({
      title: `${title ?? "—"}`,
      media: media ?? "🖼️",
    }),
  },
});
