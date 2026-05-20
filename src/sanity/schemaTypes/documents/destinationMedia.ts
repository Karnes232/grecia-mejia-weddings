import { defineArrayMember, defineField, defineType } from "sanity";

const altField = {
  name: "alt",
  type: "string",
  title: "Alt text",
  description: "Used for accessibility and SEO. Reused across all languages.",
};

const keyedImageArray = (name: string, title: string, description?: string) =>
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
            title: "Key (matches imageKey on the destination doc)",
            type: "string",
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

export const destinationMedia = defineType({
  name: "destinationMedia",
  title: "Destination media",
  type: "document",
  description:
    "Per-destination imagery, locale-agnostic. _id is `destinationMedia-<slug>`.",
  fields: [
    defineField({
      name: "slug",
      title: "Destination slug",
      type: "string",
      description: "Used to associate this media doc with a destination.",
      validation: (r) => r.required(),
      readOnly: true,
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      fields: [altField],
    }),
    defineField({
      name: "storyPortrait",
      title: "Story portrait (optional)",
      type: "image",
      options: { hotspot: true },
      fields: [altField],
    }),
    keyedImageArray("styles", "Wedding style images", "One per style card."),
    keyedImageArray("venueCards", "Venue card images", "One per venue card."),
    keyedImageArray(
      "guestCards",
      "Guest-experience images",
      "One per guest-experience card.",
    ),
    keyedImageArray(
      "relatedArticles",
      "Related-article images",
      "One per related article.",
    ),
  ],
  preview: {
    select: { title: "slug" },
    prepare: ({ title }) => ({
      title: `Destination media · ${title ?? "—"}`,
      media: "🖼️",
    }),
  },
});
