import { defineField, defineType } from 'sanity'

const LOCALES = [
  { name: 'en', title: 'English' },
  { name: 'es', title: 'Español' },
  { name: 'fr', title: 'Français' },
  { name: 'pt', title: 'Português' },
  { name: 'de', title: 'Deutsch' },
  { name: 'it', title: 'Italiano' },
] as const

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Brand name',
      type: 'string',
      initialValue: 'Grecia Mejía',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Used for accessibility and SEO.',
        },
      ],
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline (under wordmark)',
      type: 'string',
      initialValue: 'Weddings · Since 2011',
    }),
    defineField({
      name: 'signatureParagraph',
      title: 'Footer signature paragraph',
      description: 'Translated per locale.',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: LOCALES.map(({ name, title }) =>
        defineField({
          name,
          title,
          type: 'text',
          rows: 3,
        }),
      ),
      validation: (r) =>
        r.custom((value: Record<string, string | undefined> | undefined) => {
          if (!value?.en?.trim()) return 'English signature paragraph is required.'
          return true
        }),
    }),
    defineField({
      name: 'copyrightLine',
      title: 'Footer copyright line',
      type: 'string',
      description: 'Use {year} for the current year.',
      initialValue:
        '© {year} · Grecia Mejía Weddings · Curating timeless weddings since 2011',
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        { name: 'phone', type: 'string', title: 'Phone' },
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'whatsappUrl', type: 'url', title: 'WhatsApp URL' },
        { name: 'instagramUrl', type: 'url', title: 'Instagram URL' },
      ],
    }),
    defineField({
      name: 'studios',
      title: 'Studios',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'year', type: 'string', title: 'Year (optional)' },
          ],
          preview: {
            select: { label: 'label', year: 'year' },
            prepare: ({ label, year }) => ({
              title: year ? `${label} · ${year}` : label,
            }),
          },
        },
      ],
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default OG image',
      type: 'image',
    }),
  ],
  preview: {
    select: { title: 'brandName' },
    prepare: ({ title }) => ({
      title: title ?? 'Site Settings',
    }),
  },
})
