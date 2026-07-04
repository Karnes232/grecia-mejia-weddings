import { defineField, defineType } from "sanity";

const LOCALES = [
  { name: "en", title: "English" },
  { name: "es", title: "Español" },
  { name: "fr", title: "Français" },
  { name: "pt", title: "Português" },
  { name: "de", title: "Deutsch" },
  { name: "it", title: "Italiano" },
] as const;

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "brand", title: "Brand", default: true },
    { name: "footer", title: "Footer" },
    { name: "contact", title: "Contact & studios" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "brandName",
      title: "Brand name",
      type: "string",
      group: "brand",
      initialValue: "Grecia Mejía",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      group: "brand",
      options: { hotspot: true },
      validation: (r) => r.required(),
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt text",
          description: "Used for accessibility and SEO.",
          validation: (r) => r.required(),
        },
      ],
    }),
    defineField({
      name: "footerLogo",
      title: "Footer logo",
      description:
        "Displayed in the footer in place of the brand wordmark. Use a transparent PNG or SVG.",
      type: "image",
      group: "footer",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt text",
          description: "Used for accessibility and SEO.",
          validation: (r) => r.required(),
        },
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "signatureParagraph",
      title: "Footer signature paragraph",
      description: "Translated per locale.",
      type: "object",
      group: "footer",
      options: { collapsible: true, collapsed: false },
      fields: LOCALES.map(({ name, title }) =>
        defineField({
          name,
          title,
          type: "text",
          rows: 3,
          validation: (r) => r.required(),
        }),
      ),
      validation: (r) =>
        r.custom((value: Record<string, string | undefined> | undefined) => {
          if (!value?.en?.trim())
            return "English signature paragraph is required.";
          return true;
        }),
    }),
    defineField({
      name: "copyrightLine",
      title: "Footer copyright line",
      type: "string",
      group: "footer",
      description: "Use {year} for the current year.",
      initialValue:
        "© {year} · Grecia Mejía Weddings · Curating timeless weddings since 2011",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "contact",
      title: "Contact",
      type: "object",
      group: "contact",
      description:
        "Single source of truth for contact details — feeds the footer's Contact column, the Contact page rail, and the About page.",
      fields: [
        {
          name: "phone",
          type: "string",
          title: "Phone",
          validation: (r) => r.required(),
        },
        {
          name: "email",
          type: "string",
          title: "Email",
          validation: (r) => r.required(),
        },
        {
          name: "whatsappUrl",
          type: "url",
          title: "WhatsApp URL",
          validation: (r) => r.required(),
        },
        {
          name: "instagramUrl",
          type: "url",
          title: "Instagram URL",
          validation: (r) => r.required(),
        },
      ],
    }),
    defineField({
      name: "defaultOgImage",
      title: "Default OG image",
      type: "image",
      group: "seo",
    }),
  ],
  preview: {
    select: { title: "brandName" },
    prepare: ({ title }) => ({
      title: title ?? "Site Settings",
    }),
  },
});
