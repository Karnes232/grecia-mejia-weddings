import { defineField, defineType } from "sanity";

const altField = {
  name: "alt",
  type: "string",
  title: "Alt text",
  description: "Used for accessibility and SEO. Reused across all languages.",
};

/**
 * Per-service imagery, locale-agnostic. Each localized `service` doc points here
 * via its `media` reference. Deterministic `_id` of `serviceMedia-<canonical
 * slug>`. Mirrors the `portfolioMedia` / `cultureMedia` pattern.
 */
export const serviceMedia = defineType({
  name: "serviceMedia",
  title: "Service media",
  type: "document",
  description:
    "Per-service imagery, shared across every language. Service docs link here via their media reference.",
  fields: [
    defineField({
      name: "slug",
      title: "Label",
      type: "string",
      description:
        "Name to identify this service's media (e.g. the canonical English slug). Set automatically for seeded services; type one when creating media for a new service.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      description: "Full-bleed hero for the service detail page.",
      options: { hotspot: true },
      fields: [altField],
    }),
    defineField({
      name: "overviewImage",
      title: "Overview image",
      type: "image",
      description: "Portrait image beside the overview section.",
      options: { hotspot: true },
      fields: [altField],
    }),
    defineField({
      name: "audienceImage",
      title: "Audience image",
      type: "image",
      description: "Portrait image beside the 'who it is for' section.",
      options: { hotspot: true },
      fields: [altField],
    }),
  ],
  preview: {
    select: { title: "slug", media: "heroImage" },
    prepare: ({ title, media }) => ({
      title: `${title ?? "—"}`,
      media: media ?? "🖼️",
    }),
  },
});
