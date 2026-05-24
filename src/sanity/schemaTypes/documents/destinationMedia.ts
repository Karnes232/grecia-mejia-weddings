import { defineArrayMember, defineField, defineType } from "sanity";

import { apiVersion } from "../../env";
import {
  GUEST_KEY_OPTIONS,
  type ImageKeyOption,
  RELATED_KEY_OPTIONS,
  STYLE_KEY_OPTIONS,
  VENUE_KEY_OPTIONS,
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
            title: "Image slot (matches imageKey on the destination doc)",
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

export const destinationMedia = defineType({
  name: "destinationMedia",
  title: "Destination media",
  type: "document",
  description:
    "Per-destination imagery, locale-agnostic. Associated to a destination by the `slug` field. The seed gives it a deterministic `_id` of `destinationMedia-<slug>` for idempotency.",
  fields: [
    defineField({
      name: "slug",
      title: "Destination slug",
      type: "string",
      description:
        "Type the destination's exact slug — this links the media doc to it. Must be unique.",
      validation: (rule) =>
        rule.required().custom(async (slug, context) => {
          if (!slug) return true;
          const { document, getClient } = context;
          const client = getClient({ apiVersion });
          const id = document?._id?.replace(/^drafts\./, "");
          const params = { draft: `drafts.${id}`, published: id, slug };
          const isUnique = await client.fetch<boolean>(
            `count(*[_type == "destinationMedia" && !(_id in [$draft, $published]) && slug == $slug]) == 0`,
            params,
          );
          return (
            isUnique || "A media doc already exists for this destination slug."
          );
        }),
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      fields: [altField],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "cardImage",
      title: "Atlas card image",
      type: "image",
      description: "This destination's tile image on the destinations atlas.",
      options: { hotspot: true },
      fields: [altField],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "storyPortrait",
      title: "Story portrait (optional)",
      type: "image",
      options: { hotspot: true },
      fields: [altField],
    }),
    keyedImageArray(
      "styles",
      "Wedding style images",
      STYLE_KEY_OPTIONS,
      "One per style card.",
    ),
    keyedImageArray(
      "venueCards",
      "Venue card images",
      VENUE_KEY_OPTIONS,
      "One per venue card.",
    ),
    keyedImageArray(
      "guestCards",
      "Guest-experience images",
      GUEST_KEY_OPTIONS,
      "One per guest-experience card.",
    ),
    keyedImageArray(
      "relatedArticles",
      "Related-article images",
      RELATED_KEY_OPTIONS,
      "One per related article.",
    ),
  ],
  preview: {
    select: { title: "slug" },
    prepare: ({ title }) => ({
      title: `${title ?? "—"}`,
      media: "🖼️",
    }),
  },
});
