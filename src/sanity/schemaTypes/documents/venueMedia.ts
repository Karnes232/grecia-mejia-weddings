import { defineArrayMember, defineField, defineType } from "sanity";

import {
  VENUE_DETAIL_RELATED_KEY_OPTIONS,
  VENUE_MOSAIC_EXTRA_KEY_OPTIONS,
  VENUE_MOSAIC_KEY_OPTIONS,
  VENUE_PHOTO_KEY_OPTIONS,
  VENUE_PORTFOLIO_KEY_OPTIONS,
  type ImageKeyOption,
} from "../imageKeyOptions";

const altField = {
  name: "alt",
  type: "string",
  title: "Alt text",
  description: "Used for accessibility and SEO. Reused across all languages.",
};

const keyedImageArray = (
  name: string,
  title: string,
  keyOptions: ImageKeyOption[],
  description?: string,
) =>
  defineField({
    name,
    title,
    type: "array",
    description,
    options: { layout: "grid" },
    of: [
      defineArrayMember({
        type: "object",
        fields: [
          defineField({
            name: "key",
            title: "Image slot (matches imageKey on the venue doc)",
            type: "string",
            options: { list: keyOptions },
            validation: (r) => r.required(),
          }),
          defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [altField],
          }),
        ],
        preview: { select: { title: "key", media: "image" } },
      }),
    ],
  });

/**
 * Per-venue imagery, locale-agnostic. Each localized `venue` doc points here
 * via its `media` reference. Deterministic `_id` of `venueMedia-<canonical slug>`.
 * Mirrors the `cultureMedia` pattern.
 */
export const venueMedia = defineType({
  name: "venueMedia",
  title: "Venue media",
  type: "document",
  description:
    "Per-venue imagery, shared across every language. Venue docs link here via their media reference.",
  fields: [
    defineField({
      // Internal name kept as `slug` for seed/data compatibility; shown as "Label".
      name: "slug",
      title: "Label",
      type: "string",
      description:
        'Name to identify this venue’s media in lists and the venue’s Media reference (e.g. the venue’s English slug, "jellyfish-restaurant"). Set automatically for seeded venues; type one when creating media for a new venue.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "cardImage",
      title: "Region-card image",
      type: "image",
      description: "This venue's image on the region list.",
      options: { hotspot: true },
      fields: [altField],
      validation: (r) => r.required(),
    }),
    keyedImageArray(
      "mosaic",
      "Gallery mosaic images",
      [...VENUE_MOSAIC_KEY_OPTIONS, ...VENUE_MOSAIC_EXTRA_KEY_OPTIONS],
      "Gallery 1–5 show on the hero mosaic; Extra images are stored on the venue only (not displayed).",
    ),
    keyedImageArray(
      "photography",
      "Photography-moment images",
      VENUE_PHOTO_KEY_OPTIONS,
      "One per photography moment.",
    ),
    // keyedImageArray(
    //   "portfolio",
    //   "Portfolio images",
    //   VENUE_PORTFOLIO_KEY_OPTIONS,
    //   "One per portfolio case-study card.",
    // ),
    // keyedImageArray(
    //   "relatedArticles",
    //   "Related-article images",
    //   VENUE_DETAIL_RELATED_KEY_OPTIONS,
    //   "One per related article.",
    // ),
  ],
  preview: {
    select: { title: "slug", media: "cardImage" },
    prepare: ({ title, media }) => ({
      title: `${title ?? "—"}`,
      media: media ?? "🖼️",
    }),
  },
});
