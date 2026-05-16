# Sanity Schema Guide

Conventions, patterns, and the philosophy behind every schema in this project. Read this before creating or modifying any document type.

The scale target — **3,000–10,000 articles across 6 locales** — means every schema decision compounds. Get the basics right.

---

## Schema philosophy

1. **One source of truth per content type.** No duplicated fields across documents that should share a single object.
2. **Singletons for one-of-a-kind pages.** Home, About, Destinations Index — these are not collections.
3. **Document-level i18n** via `@sanity/document-internationalization`. Each translation is a separate document linked by translation metadata.
4. **Modular objects for repeated structures.** SEO, FAQ, CTA blocks, etc.
5. **Schemas mirror components** — every page section corresponds to a Sanity field group or object.
6. **Strong validation.** Required fields must be marked required at the schema level. Empty publishes are bugs.

---

## Folder organization

```
src/sanity/schemaTypes/
├── index.ts                     # Exports the combined schema array
│
├── documents/                   # Document types (full Sanity documents)
│   ├── [DocumentName]/
│   │   ├── index.ts             # Main schema export
│   │   ├── schema.ts            # The defineType() call
│   │   └── sections/            # Section objects used inside (optional)
│   │       └── ...
│
├── objects/                     # Reusable objects (embedded in documents)
│   ├── seo.ts
│   ├── ogImage.ts
│   ├── cta.ts
│   ├── faq.ts
│   ├── richImage.ts
│   ├── pullQuote.ts
│   ├── localizedSlug.ts
│   ├── eyebrow.ts
│   └── ...
│
├── singletons/                  # Singleton documents (one instance only)
│   ├── siteSettings.ts
│   ├── navigation.ts
│   └── footer.ts
│
└── portableText/                # Portable Text (rich text) schema
    └── blockContent.ts
```

### `index.ts` pattern

```ts
// src/sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'

// Documents
import { homePage } from './documents/HomePage'
import { aboutPage } from './documents/AboutPage'
import { destination } from './documents/Destination'
import { culture } from './documents/Culture'
import { venue } from './documents/Venue'
// ... etc

// Objects
import { seo } from './objects/seo'
import { faq } from './objects/faq'
// ... etc

// Singletons
import { siteSettings } from './singletons/siteSettings'
// ... etc

export const schemaTypes: SchemaTypeDefinition[] = [
  // Documents
  homePage,
  aboutPage,
  destination,
  culture,
  venue,
  // ... etc

  // Objects
  seo,
  faq,

  // Singletons
  siteSettings,
  // ... etc
]
```

---

## Naming conventions

| Type | Convention | Example |
|---|---|---|
| Schema type name (Sanity `name`) | camelCase | `destination`, `articleCategory` |
| Schema TS export | camelCase | `export const destination = defineType(...)` |
| Folder name | PascalCase for documents, camelCase for objects | `Destination/`, `seo.ts` |
| Field names | camelCase | `heroImage`, `relatedArticles` |
| Object types | camelCase | `richImage`, `pullQuote` |

---

## Core reusable objects

### `seo.ts` — SEO fields object

Embedded in every document that has its own URL.

```ts
import { defineType, defineField } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Meta title',
      description: 'Max 60 characters. Falls back to page title if empty.',
      type: 'string',
      validation: (Rule) => Rule.max(60).warning('Should be 60 characters or less'),
    }),
    defineField({
      name: 'description',
      title: 'Meta description',
      description: 'Max 160 characters. Critical for click-through.',
      type: 'text',
      rows: 3,
      validation: (Rule) =>
        Rule.required().min(50).max(160).warning('50–160 characters recommended'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Social share image',
      description: '1200x630px recommended. Falls back to hero image if empty.',
      type: 'ogImage',
    }),
    defineField({
      name: 'noindex',
      title: 'Hide from search engines',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'nofollow',
      title: 'Tell search engines not to follow links',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  options: { collapsible: true, collapsed: true },
})
```

### `richImage.ts` — Image with mandatory alt + caption

```ts
export const richImage = defineType({
  name: 'richImage',
  type: 'image',
  options: {
    hotspot: true,
    accept: 'image/jpeg, image/png, image/webp',
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt text',
      description: 'Required for accessibility and SEO. Describe what the image shows.',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(200),
    }),
    defineField({
      name: 'caption',
      title: 'Caption (optional)',
      type: 'string',
    }),
    defineField({
      name: 'credit',
      title: 'Photographer credit',
      type: 'string',
    }),
  ],
})
```

### `faq.ts` — Single FAQ item

```ts
export const faq = defineType({
  name: 'faq',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(200),
    }),
    defineField({
      name: 'answer',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'question' },
  },
})
```

### `cta.ts` — Reusable consultation CTA configuration

```ts
export const cta = defineType({
  name: 'cta',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      type: 'string',
      initialValue: 'A private conversation',
    }),
    defineField({
      name: 'heading',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'body',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'buttonLabel',
      type: 'string',
      initialValue: 'Request a Private Consultation',
    }),
    defineField({
      name: 'buttonHref',
      type: 'string',
      initialValue: '/contact',
    }),
  ],
})
```

### `pullQuote.ts`

```ts
export const pullQuote = defineType({
  name: 'pullQuote',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'attribution',
      type: 'string',
    }),
  ],
})
```

---

## Document patterns

### Pattern: localizable document with SEO

Every document with a public URL follows this base pattern:

```ts
import { defineType, defineField } from 'sanity'

export const destination = defineType({
  name: 'destination',
  title: 'Destination',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'media', title: 'Media' },
    { name: 'related', title: 'Related content' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // === LOCALIZATION (added automatically by document-internationalization) ===
    // defineField({ name: 'language', type: 'string', readOnly: true }),

    // === IDENTITY ===
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // === HERO ===
    defineField({
      name: 'eyebrow',
      type: 'string',
      group: 'content',
      description: 'Small uppercase label above the title',
    }),
    defineField({
      name: 'heroImage',
      type: 'richImage',
      group: 'media',
      validation: (Rule) => Rule.required(),
    }),

    // === CONTENT SECTIONS ===
    defineField({
      name: 'intro',
      title: 'Intro paragraph',
      type: 'blockContent',
      group: 'content',
    }),

    defineField({
      name: 'quickFacts',
      type: 'object',
      group: 'content',
      fields: [
        defineField({ name: 'season', type: 'string' }),
        defineField({ name: 'climate', type: 'string' }),
        defineField({ name: 'flightTime', type: 'string' }),
        defineField({ name: 'languages', type: 'string' }),
        defineField({ name: 'currency', type: 'string' }),
      ],
    }),

    // ... more sections ...

    defineField({
      name: 'faqs',
      type: 'array',
      group: 'content',
      of: [{ type: 'faq' }],
      validation: (Rule) => Rule.min(4).warning('At least 4 FAQs recommended for FAQ schema'),
    }),

    // === RELATED CONTENT ===
    defineField({
      name: 'relatedCultures',
      type: 'array',
      group: 'related',
      of: [{ type: 'reference', to: [{ type: 'culture' }] }],
    }),
    defineField({
      name: 'relatedVenues',
      type: 'array',
      group: 'related',
      of: [{ type: 'reference', to: [{ type: 'venue' }] }],
    }),

    // === SEO ===
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
      media: 'heroImage',
    },
    prepare({ title, language, media }) {
      return {
        title,
        subtitle: language?.toUpperCase(),
        media,
      }
    },
  },
})
```

### Document type registry

| Doc type | Singleton? | Localized? | URL prefix |
|---|---|---|---|
| `homePage` | ✓ | ✓ | `/` |
| `aboutPage` | ✓ | ✓ | `/about` |
| `destinationsIndex` | ✓ | ✓ | `/destinations` |
| `destination` | ✗ | ✓ | `/destinations/[slug]` |
| `multiculturalIndex` | ✓ | ✓ | `/multicultural-weddings` |
| `culture` | ✗ | ✓ | `/multicultural-weddings/[slug]` |
| `venuesIndex` | ✓ | ✓ | `/venues` |
| `venueRegion` | ✗ | ✓ | `/venues/[slug]` |
| `venue` | ✗ | ✓ | `/venues/[region]/[slug]` |
| `servicesIndex` | ✓ | ✓ | `/services` |
| `service` | ✗ | ✓ | `/services/[slug]` |
| `portfolioIndex` | ✓ | ✓ | `/portfolio` |
| `wedding` | ✗ | ✓ | `/portfolio/[slug]` |
| `journalIndex` | ✓ | ✓ | `/journal` |
| `article` | ✗ | ✓ | `/journal/[slug]` |
| `articleCategory` | ✗ | ✓ | `/journal/category/[slug]` |
| `press` | ✓ | ✓ | `/press` |
| `contactPage` | ✓ | ✓ | `/contact` |
| `legalDocument` | ✗ | ✓ | `/privacy` or `/terms` |
| `siteSettings` | ✓ | ✗ | (global) |
| `navigation` | ✓ | ✓ | (global) |
| `footer` | ✓ | ✓ | (global) |

---

## Singletons

Singletons (HomePage, AboutPage, SiteSettings) should appear in the Studio as a single editable document, not as a collection.

Handled via the desk structure:

```ts
// src/sanity/structure.ts
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singletons — single document, no list
      S.listItem()
        .title('Home Page')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('About Page')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      // ... etc

      S.divider(),

      // Collections
      S.documentTypeListItem('destination').title('Destinations'),
      S.documentTypeListItem('culture').title('Cultures'),
      S.documentTypeListItem('venue').title('Venues'),
      S.documentTypeListItem('article').title('Journal Articles'),
      // ... etc
    ])
```

Singletons must also be hidden from the default new-document menu:

```ts
// sanity.config.ts
import { type DocumentDefinition } from 'sanity'

const singletonTypes = new Set([
  'homePage',
  'aboutPage',
  'destinationsIndex',
  'multiculturalIndex',
  'venuesIndex',
  'servicesIndex',
  'portfolioIndex',
  'journalIndex',
  'press',
  'contactPage',
  'siteSettings',
  'navigation',
  'footer',
])

export default defineConfig({
  // ...
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter(template => !singletonTypes.has(template.templateId))
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (singletonTypes.has(schemaType)) {
        return prev.filter(({ action }) =>
          !['unpublish', 'delete', 'duplicate'].includes(action!)
        )
      }
      return prev
    },
  },
})
```

---

## Article schema (the most important one)

The `article` schema is the workhorse of the SEO system. Get it right.

```ts
export const article = defineType({
  name: 'article',
  title: 'Journal Article',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'media', title: 'Media' },
    { name: 'related', title: 'Related (required for SEO)' },
    { name: 'seo', title: 'SEO' },
    { name: 'meta', title: 'Meta' },
  ],
  fields: [
    // === IDENTITY ===
    defineField({
      name: 'title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().min(10).max(110),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description: 'Used in cards and feeds. 1–2 sentences.',
      type: 'text',
      rows: 2,
      group: 'content',
      validation: (Rule) => Rule.required().max(220),
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'articleCategory' }],
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),

    // === HERO ===
    defineField({
      name: 'heroImage',
      type: 'richImage',
      group: 'media',
      validation: (Rule) => Rule.required(),
    }),

    // === BODY ===
    defineField({
      name: 'body',
      type: 'blockContent',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),

    // === FAQ ===
    defineField({
      name: 'faqs',
      type: 'array',
      group: 'content',
      of: [{ type: 'faq' }],
      validation: (Rule) =>
        Rule.min(4).error('Minimum 4 FAQs required for FAQ schema markup'),
    }),

    // === RELATED CONTENT (mandatory per SEO strategy) ===
    defineField({
      name: 'relatedDestination',
      type: 'reference',
      to: [{ type: 'destination' }],
      group: 'related',
      validation: (Rule) => Rule.required().error(
        'Articles must link to a destination — see seo-strategy.md'
      ),
    }),
    defineField({
      name: 'relatedCulture',
      type: 'reference',
      to: [{ type: 'culture' }],
      group: 'related',
      description: 'Optional but recommended',
    }),
    defineField({
      name: 'relatedVenue',
      type: 'reference',
      to: [{ type: 'venue' }],
      group: 'related',
      description: 'Optional but recommended',
    }),
    defineField({
      name: 'relatedService',
      type: 'reference',
      to: [{ type: 'service' }],
      group: 'related',
      validation: (Rule) => Rule.required().error(
        'Articles must link to a service — see seo-strategy.md'
      ),
    }),
    defineField({
      name: 'relatedArticles',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'article' }] }],
      group: 'related',
      validation: (Rule) =>
        Rule.min(3).max(5).error('Must reference 3–5 related articles'),
    }),

    // === META ===
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      group: 'meta',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
      group: 'meta',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      group: 'meta',
      description: 'Featured on /journal index',
      initialValue: false,
    }),

    // === SEO ===
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
      category: 'category.title',
      media: 'heroImage',
    },
    prepare({ title, language, category, media }) {
      return {
        title,
        subtitle: `${language?.toUpperCase() ?? ''} — ${category ?? 'Uncategorized'}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Most recent',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Title (A–Z)',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
```

---

## Portable Text (Block Content)

The rich-text editor is configured to match the editorial design language.

```ts
// src/sanity/schemaTypes/portableText/blockContent.ts
import { defineType, defineArrayMember } from 'sanity'

export const blockContent = defineType({
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'Eyebrow', value: 'eyebrow' },
        { title: 'Lead paragraph', value: 'lead' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Italic', value: 'em' },
          { title: 'Bold', value: 'strong' },
        ],
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                to: [
                  { type: 'destination' },
                  { type: 'culture' },
                  { type: 'venue' },
                  { type: 'service' },
                  { type: 'article' },
                ],
                validation: (Rule) => Rule.required(),
              },
            ],
          },
          {
            name: 'externalLink',
            type: 'object',
            title: 'External link',
            fields: [
              { name: 'href', type: 'url', validation: (Rule) => Rule.required() },
              { name: 'newWindow', type: 'boolean', initialValue: true },
            ],
          },
        ],
      },
    }),
    defineArrayMember({ type: 'richImage' }),
    defineArrayMember({ type: 'pullQuote' }),
    // Note: no H1 — that's the page title, not a body element
  ],
})
```

---

## GROQ patterns

### Use fragments

Never duplicate field selections. Use fragments in `src/sanity/queries/fragments/`.

```ts
// src/sanity/queries/fragments/image.ts
export const imageFragment = `
  asset->,
  alt,
  caption,
  hotspot,
  crop
`

// src/sanity/queries/fragments/seo.ts
export const seoFragment = `
  seo {
    title,
    description,
    "ogImage": ogImage.asset->,
    noindex,
    nofollow
  }
`

// src/sanity/queries/fragments/articleCard.ts
export const articleCardFragment = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "category": category->{title, "slug": slug.current},
  heroImage { ${imageFragment} }
`
```

### Project only what you need

For list pages, don't `*[_type == "article"]{...}` — explicitly project fields. Massive savings at scale.

```ts
// ❌ Wasteful
client.fetch(`*[_type == "article"]`)

// ✅ Tight
client.fetch(`*[_type == "article" && language == $locale] | order(publishedAt desc) [0...12] {
  ${articleCardFragment}
}`, { locale })
```

### Pre-resolve references in queries

Never fetch a list and then resolve references client-side.

```ts
// ❌ Two roundtrips
const articles = await client.fetch(`*[_type == "article"]`)
const categories = await client.fetch(`*[_type == "articleCategory"]`)

// ✅ One query, references resolved
client.fetch(`*[_type == "article"] {
  ...,
  category->{title, "slug": slug.current}
}`)
```

---

## Migration considerations

When schemas change:

1. **Never delete a field that has data.** Mark it `deprecated: true` and `hidden: true`, then migrate, then remove in a later release.
2. **Test schema changes against a dataset clone first.** `sanity dataset export production` → import to dev dataset.
3. **Document changes in `CHANGELOG.md`** (project root).
4. **Update `file-structure.md` and `content-model.md`** if the change is structural.

---

## Studio organization

The Studio desk structure (`src/sanity/structure.ts`) should reflect the editor's mental model, not the schema's structure.

Grouping pattern:

```
📄 Pages (singletons)
   ├── Home
   ├── About
   ├── Destinations Index
   ├── Multicultural Index
   ├── Venues Index
   ├── Services Index
   ├── Portfolio Index
   ├── Journal Index
   ├── Press
   └── Contact

🌍 Destinations
   └── (collection by language)

🌿 Cultures
   └── (collection)

🏛️ Venues
   ├── Regions
   └── Individual Venues

🛎️ Services

💌 Portfolio (Weddings)

✒️ Journal
   ├── Articles
   └── Categories

⚙️ Site Settings
   ├── Site Settings
   ├── Navigation
   ├── Footer
   └── Legal Documents
```
