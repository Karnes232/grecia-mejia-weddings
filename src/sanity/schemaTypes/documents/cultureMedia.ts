import { defineField, defineType } from "sanity";

import { apiVersion } from "../../env";

const altField = {
  name: "alt",
  type: "string",
  title: "Alt text",
  description: "Used for accessibility and SEO. Reused across all languages.",
};

/**
 * Per-culture imagery, locale-agnostic. Associated to a `culture` by the `slug`
 * field. The seed gives it a deterministic `_id` of `cultureMedia-<slug>` for
 * idempotency. Mirrors the `destinationMedia` pattern.
 */
export const cultureMedia = defineType({
  name: "cultureMedia",
  title: "Culture media",
  type: "document",
  description:
    "Per-culture imagery, shared across every language. Linked to a culture by its exact slug.",
  fields: [
    defineField({
      name: "slug",
      title: "Culture slug",
      type: "string",
      description:
        "Type the culture's exact slug — this links the media doc to it. Must be unique.",
      validation: (rule) =>
        rule.required().custom(async (slug, context) => {
          if (!slug) return true;
          const { document, getClient } = context;
          const client = getClient({ apiVersion });
          const id = document?._id?.replace(/^drafts\./, "");
          const params = { draft: `drafts.${id}`, published: id, slug };
          const isUnique = await client.fetch<boolean>(
            `count(*[_type == "cultureMedia" && !(_id in [$draft, $published]) && slug == $slug]) == 0`,
            params,
          );
          return (
            isUnique || "A media doc already exists for this culture slug."
          );
        }),
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
  ],
  preview: {
    select: { title: "slug", media: "cardImage" },
    prepare: ({ title, media }) => ({
      title: `${title ?? "—"}`,
      media: media ?? "🖼️",
    }),
  },
});
