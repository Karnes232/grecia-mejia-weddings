import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "columns",
      title: "Columns",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              type: "string",
              title: "Heading",
              validation: (r) => r.required(),
            },
            {
              name: "links",
              title: "Links",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "label", type: "string", title: "Label" },
                    {
                      name: "href",
                      type: "string",
                      title: "Href",
                      description: "Locale-relative path or external URL",
                    },
                  ],
                  preview: { select: { title: "label", subtitle: "href" } },
                },
              ],
            },
          ],
          preview: { select: { title: "heading" } },
        },
      ],
    }),
    defineField({
      name: "legalLinks",
      title: "Legal links",
      description: "Shown in the footer bottom bar (e.g. Privacy, Terms).",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            {
              name: "href",
              type: "string",
              title: "Href",
              description: "Locale-relative path or external URL",
            },
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        },
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare: ({ language }) => ({
      title: "Footer",
      subtitle: language ? language.toUpperCase() : undefined,
    }),
  },
});
