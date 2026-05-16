import { defineArrayMember, defineField, defineType } from 'sanity'

const altField = {
  name: 'alt',
  type: 'string',
  title: 'Alt text',
  description: 'Used for accessibility and SEO. Reused across all languages.',
}

export const homePageMedia = defineType({
  name: 'homePageMedia',
  title: 'Home Page Media',
  type: 'document',
  description:
    'Shared imagery for the home page — same visuals across every language.',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: 'image',
          title: 'Background image',
          type: 'image',
          options: { hotspot: true },
          fields: [altField],
          validation: (r) => r.required(),
        }),
      ],
    }),
    defineField({
      name: 'marqueeDestinations',
      title: 'Marquee destinations (bottom strip)',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      validation: (r) => r.required(),
      description:
        'Italic names that scroll across the bottom of the hero. Shared across all languages. Leave empty to use the default set.',
    }),
    defineField({
      name: 'featuredWedding',
      title: 'Featured wedding',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          fields: [altField],
        }),
      ],
    }),
    defineField({
      name: 'recentWeddings',
      title: 'Recent weddings',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'images',
          title: 'Images',
          type: 'array',
          options: { layout: 'grid' },
          of: [
            defineArrayMember({
              type: 'image',
              options: { hotspot: true },
              fields: [
                altField,
                { name: 'caption', type: 'string', title: 'Caption' },
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Home Page Media', media: '🖼️' }),
  },
})
