import { defineArrayMember, defineField, defineType } from "sanity";

import {
  COMPATIBILITY_KEY_OPTIONS,
  CULTURE_RELATED_KEY_OPTIONS,
  DESIGN_CONCEPT_KEY_OPTIONS,
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
    of: [
      defineArrayMember({
        type: "object",
        fields: [
          defineField({
            name: "key",
            title: "Image slot (matches imageKey on the culture doc)",
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
 * Per-culture imagery, locale-agnostic. Each localized `culture` doc points
 * here via its `media` reference, so the link survives per-language slugs.
 * The seed gives it a deterministic `_id` of `cultureMedia-<canonical slug>`
 * for idempotency. Mirrors the `destinationMedia` pattern.
 */
export const cultureMedia = defineType({
  name: "cultureMedia",
  title: "Culture media",
  type: "document",
  description:
    "Per-culture imagery, shared across every language. Culture docs link here via their media reference.",
  fields: [
    defineField({
      name: "slug",
      title: "Culture (label)",
      type: "string",
      readOnly: true,
      description:
        "Human-readable handle set by the seed (the culture's canonical English slug). The link to culture docs is their `media` reference, not this field.",
    }),
    defineField({
      name: "cardImage",
      title: "Atlas card image",
      type: "image",
      description: "This tradition's tile image on the Traditions Atlas.",
      options: { hotspot: true },
      fields: [altField],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      description: "Hero image for the culture's detail page.",
      options: { hotspot: true },
      fields: [altField],
    }),
    keyedImageArray(
      "designConcepts",
      "Design concept images",
      DESIGN_CONCEPT_KEY_OPTIONS,
      "One per design-concept card.",
    ),
    keyedImageArray(
      "compatibilityCards",
      "Destination compatibility images",
      COMPATIBILITY_KEY_OPTIONS,
      "One per destination-compatibility card.",
    ),
    keyedImageArray(
      "relatedArticles",
      "Related-article images",
      CULTURE_RELATED_KEY_OPTIONS,
      "One per related article.",
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
