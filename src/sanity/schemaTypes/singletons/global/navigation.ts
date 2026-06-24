import { defineField, defineType } from "sanity";

// const NAV_KEYS = [
//   { title: 'Home', value: 'home' },
//   { title: 'The House', value: 'house' },
//   { title: 'Destinations', value: 'destinations' },
//   { title: 'Multicultural', value: 'multicultural' },
//   { title: 'Venues', value: 'venues' },
//   { title: 'Portfolio', value: 'portfolio' },
//   { title: 'Journal', value: 'journal' },
//   { title: 'Contact', value: 'contact' },
// ] as const

export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "mainLinks",
      title: "Main navigation links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            // {
            //   name: 'key',
            //   title: 'Key (active-state matcher)',
            //   type: 'string',
            //   options: { list: NAV_KEYS.map(({ title, value }) => ({ title, value })) },
            //   validation: (r) => r.required(),
            // },
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (r) => r.required(),
            },
            {
              name: "href",
              title: "Href",
              type: "string",
              description: "Locale-relative path.",
              options: {
                list: [
                  { title: "/", value: "/" },
                  { title: "/about", value: "/about" },
                  { title: "/destinations", value: "/destinations" },
                  {
                    title: "/multicultural-weddings",
                    value: "/multicultural-weddings",
                  },
                  { title: "/services", value: "/services" },
                  { title: "/venues", value: "/venues" },
                  { title: "/portfolio", value: "/portfolio" },
                  { title: "/journal", value: "/journal" },
                  { title: "/contact", value: "/contact" },
                  { title: "/experience", value: "/experience" },
                  { title: "/press", value: "/press" },
                  { title: "/privacy", value: "/privacy" },
                  { title: "/terms", value: "/terms" },
                ],
              },
              validation: (r) => r.required(),
            },
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
    }),
    defineField({
      name: "cta",
      title: "CTA button",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "href", type: "string", title: "Href" },
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare: ({ language }) => ({
      title: "Navigation",
      subtitle: language ? language.toUpperCase() : undefined,
      media: "🧭",
    }),
  },
});
