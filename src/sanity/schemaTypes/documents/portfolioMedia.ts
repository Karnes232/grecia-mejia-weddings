import { defineArrayMember, defineField, defineType } from "sanity";

const altField = {
  name: "alt",
  type: "string",
  title: "Alt text",
  description: "Used for accessibility and SEO. Reused across all languages.",
};

// A gallery mosaic — an ordered list of images. The detail page lays them out
// automatically (react-photo-album) from each image's real dimensions, so there
// is no per-image shape to choose; just add images and drag to reorder.
const galleryArray = (name: string, title: string, description: string) =>
  defineField({
    name,
    title,
    type: "array",
    description,
    options: { layout: "grid" },
    of: [
      defineArrayMember({
        type: "image",
        options: { hotspot: true },
        fields: [altField],
        preview: { select: { media: "asset", title: "alt" } },
      }),
    ],
  });

/**
 * Per-case-study imagery, locale-agnostic. Each localized `portfolio` doc points
 * here via its `media` reference, so the link survives per-language slugs. The
 * seed gives it a deterministic `_id` of `portfolioMedia-<canonical slug>` for
 * idempotency. Mirrors the `cultureMedia` / `venueMedia` pattern.
 */
export const portfolioMedia = defineType({
  name: "portfolioMedia",
  title: "Portfolio media",
  type: "document",
  description:
    "Per-case-study imagery, shared across every language. Case-study docs link here via their media reference.",
  fields: [
    defineField({
      name: "slug",
      title: "Label",
      type: "string",
      description:
        "Name to identify this case study's media in lists and the Media reference (e.g. the canonical English slug). Set automatically for seeded case studies; type one when creating media for a new case study.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "cardImage",
      title: "Hub card image",
      type: "image",
      description: "This wedding's tile on the portfolio hub mosaic.",
      options: { hotspot: true },
      fields: [altField],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      description: "Full-bleed hero for the case-study detail page.",
      options: { hotspot: true },
      fields: [altField],
    }),
    defineField({
      name: "designImage",
      title: "Design-concept image",
      type: "image",
      description: "Image beside the design-concept section.",
      options: { hotspot: true },
      fields: [altField],
    }),
    defineField({
      name: "quoteImage",
      title: "Couple-quote background",
      type: "image",
      description: "Full-bleed background behind the couple's quote.",
      options: { hotspot: true },
      fields: [altField],
    }),
    galleryArray(
      "galleryTop",
      "Gallery — first mosaic",
      "The first gallery mosaic (after the couple story).",
    ),
    galleryArray(
      "galleryBottom",
      "Gallery — second mosaic",
      "The second gallery mosaic (after the design concept).",
    ),
  ],
  preview: {
    select: { title: "slug", media: "cardImage" },
    prepare: ({ title, media }) => ({
      title: `${title ?? "—"}`,
      media: media ?? "🖼️",
    }),
  },
});
