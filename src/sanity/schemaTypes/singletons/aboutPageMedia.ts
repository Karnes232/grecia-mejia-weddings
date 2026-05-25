import { defineArrayMember, defineField, defineType } from "sanity";

import { ABOUT_TEAM_KEY_OPTIONS } from "../imageKeyOptions";

const altField = {
  name: "alt",
  type: "string",
  title: "Alt text",
  description: "Used for accessibility and SEO. Reused across all languages.",
};

export const aboutPageMedia = defineType({
  name: "aboutPageMedia",
  title: "About Page Media",
  type: "document",
  description:
    "Shared imagery for the About page — same visuals across every language.",
  fields: [
    defineField({
      name: "hero",
      title: "Hero portrait",
      type: "object",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [altField],
        }),
      ],
    }),
    defineField({
      name: "storyFigure",
      title: "Story figure",
      type: "object",
      options: { collapsible: true, collapsed: true },
      description: "The photograph embedded in the founder story.",
      fields: [
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [altField],
        }),
      ],
    }),
    defineField({
      name: "team",
      title: "Team photos",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "images",
          title: "Images",
          type: "array",
          options: { layout: "grid" },
          of: [
            defineArrayMember({
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "key",
                  title: "Member slot",
                  type: "string",
                  description:
                    "Maps to the matching team member's photo slot in the About Page.",
                  options: { list: [...ABOUT_TEAM_KEY_OPTIONS] },
                  validation: (r) => r.required(),
                }),
                altField,
              ],
              preview: {
                select: { title: "key", media: "asset" },
              },
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "About Page Media", media: "🖼️" }),
  },
});
