# File Structure

## Grecia Mejia Weddings

Complete reference for where every file goes. Based on the pattern from the previous project, extended for: six locales, document-level Sanity i18n, the SEO authority ecosystem, and the scale target of 3,000–10,000 articles.

---

## Root Level

```
grecia-mejia-weddings/
├── .claude/                     # AI agent instructions (this folder)
├── messages/                    # next-intl translation catalogs
│   ├── en.json
│   ├── es.json
│   ├── fr.json
│   ├── pt.json
│   ├── de.json
│   └── it.json
│
├── public/                      # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/                   # Only for self-hosted fonts (most via next/font)
│
├── src/
│   ├── app/                     # Next.js 16 App Router
│   ├── components/              # React components (page-scoped)
│   ├── i18n/                    # next-intl config
│   ├── sanity/                  # CMS client, schemas, queries
│   ├── lib/                     # Utilities (schema markup, formatters, etc.)
│   └── middleware.ts            # next-intl middleware
│
├── .env.local                   # Environment variables (gitignored)
├── netlify.toml                 # Netlify configuration (forms, redirects, headers)
├── next.config.ts               # Next.js configuration
├── package.json
├── sanity.cli.ts                # Sanity CLI config
├── sanity.config.ts             # Sanity Studio config
├── tsconfig.json
└── README.md
```

> **No `tailwind.config.ts`** — Tailwind 4 is CSS-first. All theme tokens live in `src/app/globals.css` via `@theme`.

---

## Internationalization (`messages/` + `src/i18n/`)

### messages/ — UI String Catalogs

Six files, one per locale. **UI strings only** (button labels, form errors, navigation, microcopy). Editorial content lives in Sanity.

```
messages/
├── en.json                      # English — primary authority language
├── es.json                      # Spanish
├── fr.json                      # French
├── pt.json                      # Portuguese
├── de.json                      # German
└── it.json                      # Italian
```

**Guidelines:**
- Dot-notation namespaces grouped by page: `home.hero.title`, `contact.form.email`
- Shared keys live under `common.*` (e.g., `common.cta.consultation`)
- Never put long-form editorial copy here — that's a Sanity concern
- English is the source of truth; other locales translate from it

### src/i18n/ — Configuration

```
src/i18n/
├── routing.ts                   # defineRouting() — locales, default, prefix strategy
├── request.ts                   # getRequestConfig() — loads message file per locale
├── navigation.ts                # Locale-aware Link, redirect, usePathname, useRouter
└── hreflang.ts                  # SEO alternate-language helpers
```

---

## App Router (`src/app/`)

```
src/app/
├── globals.css                  # Tailwind 4 @theme tokens + base styles
├── favicon.ico
├── icon.png
├── apple-icon.png
├── opengraph-image.tsx          # Default OG image generator
│
├── layout.tsx                   # Root HTML shell (minimal — just <html>/<body>)
│
├── robots.ts                    # robots.txt generator
├── sitemap.ts                   # Sitemap index (links to per-section sitemaps)
├── sitemap/
│   ├── pages/sitemap.ts         # Core pages sitemap
│   ├── blog/sitemap.ts          # Blog articles sitemap
│   ├── venues/sitemap.ts        # Venue pages sitemap
│   ├── destinations/sitemap.ts  # Destinations sitemap
│   ├── multicultural/sitemap.ts # Multicultural pages sitemap
│   └── portfolio/sitemap.ts     # Portfolio sitemap
│
└── (root)/
    ├── layout.tsx               # Shared shell (Navbar/Footer)
    │
    └── [locale]/
        ├── layout.tsx           # Per-locale provider (NextIntlClientProvider)
        ├── not-found.tsx
        │
        ├── page.tsx             # Home — /:locale/
        │
        ├── about/
        │   └── page.tsx
        │
        ├── destinations/
        │   ├── page.tsx                          # /destinations
        │   └── [destination]/
        │       └── page.tsx                      # /destinations/punta-cana
        │
        ├── multicultural-weddings/
        │   ├── page.tsx                          # /multicultural-weddings
        │   └── [culture]/
        │       └── page.tsx                      # /multicultural-weddings/indian-weddings
        │
        ├── venues/
        │   ├── page.tsx                          # /venues
        │   ├── [region]/
        │   │   ├── page.tsx                      # /venues/punta-cana
        │   │   └── [venue]/
        │   │       └── page.tsx                  # /venues/punta-cana/jellyfish-restaurant
        │
        ├── services/
        │   ├── page.tsx
        │   └── [service]/
        │       └── page.tsx                      # /services/destination-wedding-planning
        │
        ├── portfolio/
        │   ├── page.tsx
        │   └── [slug]/
        │       └── page.tsx                      # /portfolio/luxury-indian-wedding-punta-cana
        │
        ├── journal/                              # "Journal" = the blog (per visual reference)
        │   ├── page.tsx
        │   ├── category/[category]/
        │   │   └── page.tsx
        │   └── [slug]/
        │       └── page.tsx
        │
        ├── press/
        │   └── page.tsx
        │
        ├── contact/
        │   └── page.tsx
        │
        ├── privacy/
        │   └── page.tsx
        │
        └── terms/
            └── page.tsx
```

**Notes:**
- Root `layout.tsx` is intentionally minimal; locale-aware shell wraps everything in `(root)/[locale]/`.
- The blog route is `/journal` (matches the editorial tone of the visual reference) — but the Sanity schema and component folder are still called `Blog*` for consistency with conventional naming.
- Each sitemap file is a separate route segment so we can scale past 50k URLs cleanly.

---

## Components (`src/components/`)

**Organization: by page/domain, never by type.**

```
src/components/
│
├── HomePage/
│   ├── Hero.tsx
│   ├── AtelierIntro.tsx
│   ├── DestinationsShowcase.tsx
│   ├── MulticulturalShowcase.tsx
│   ├── FeaturedWedding.tsx
│   ├── TraditionsBlock.tsx
│   ├── VenuesConsidered.tsx
│   ├── RecentWeddings.tsx
│   ├── Testimonials.tsx
│   ├── ConsultationCTA.tsx
│   └── index.ts
│
├── AboutPage/
│   ├── Hero.tsx
│   ├── GreciaStory.tsx
│   ├── Philosophy.tsx
│   ├── Expertise.tsx
│   └── index.ts
│
├── DestinationsPage/                # Index page (/destinations)
│   ├── Hero.tsx
│   ├── RegionGroup.tsx              # Caribbean / Mediterranean / Western Europe / Americas
│   ├── DestinationCard.tsx
│   ├── WhenToWedTable.tsx           # The seasonal calendar from the visual ref
│   └── index.ts
│
├── DestinationDetailPage/           # /destinations/[destination]
│   ├── Hero.tsx
│   ├── Intro.tsx
│   ├── WaysToWed.tsx
│   ├── LuxuryVenues.tsx
│   ├── TraditionsBlock.tsx
│   ├── PracticalPicture.tsx
│   ├── WhatGuestsRemember.tsx
│   ├── WhatsChanged.tsx
│   ├── RelatedJournal.tsx
│   ├── FAQ.tsx
│   └── index.ts
│
├── MulticulturalPage/               # Index (/multicultural-weddings)
│   ├── Hero.tsx
│   ├── Philosophy.tsx
│   ├── MethodologySteps.tsx
│   ├── CulturalArcs.tsx
│   ├── ArcIntersections.tsx
│   ├── Specialists.tsx
│   └── index.ts
│
├── MulticulturalDetailPage/         # /multicultural-weddings/[culture]
│   ├── Hero.tsx
│   ├── Intro.tsx
│   ├── CeremonyArc.tsx
│   ├── Moodboards.tsx
│   ├── WhatWeHoldSacred.tsx
│   ├── HourByHour.tsx
│   ├── WhereItWorks.tsx
│   ├── PracticalCare.tsx
│   ├── RelatedJournal.tsx
│   ├── FAQ.tsx
│   └── index.ts
│
├── VenuesPage/                      # Index (/venues)
│   ├── Hero.tsx
│   ├── KindsOfHouse.tsx
│   ├── RegisterByPlace.tsx
│   └── index.ts
│
├── VenueRegionPage/                 # /venues/[region]
│   ├── Hero.tsx
│   ├── RegionIntro.tsx
│   ├── HousesSelected.tsx
│   └── index.ts
│
├── VenueDetailPage/                 # /venues/[region]/[venue]
│   ├── Hero.tsx
│   ├── PavilionIntro.tsx
│   ├── WhatWeKnow.tsx
│   ├── TraditionsThatWed.tsx
│   ├── PracticalPicture.tsx
│   ├── WhereCameraGoes.tsx
│   ├── WhereGuestsStay.tsx
│   ├── FromPortfolio.tsx
│   ├── RelatedJournal.tsx
│   ├── FAQ.tsx
│   └── index.ts
│
├── ServicesPage/
│   ├── Hero.tsx
│   ├── ServicesGrid.tsx
│   └── index.ts
│
├── ServiceDetailPage/
│   ├── Hero.tsx
│   ├── Description.tsx
│   ├── Process.tsx
│   ├── ForWhom.tsx
│   ├── RelatedDestinations.tsx
│   ├── RelatedCultures.tsx
│   ├── RelatedJournal.tsx
│   └── index.ts
│
├── PortfolioPage/
│   ├── Hero.tsx
│   ├── WeddingGrid.tsx
│   ├── WeddingCard.tsx
│   └── index.ts
│
├── PortfolioDetailPage/
│   ├── Hero.tsx
│   ├── CoupleStory.tsx
│   ├── DesignConcept.tsx
│   ├── Logistics.tsx
│   ├── Gallery.tsx
│   ├── ServicesUsed.tsx
│   ├── RelatedJournal.tsx
│   └── index.ts
│
├── JournalPage/                     # Blog index — "journal" in UI
│   ├── Hero.tsx
│   ├── ArticleGrid.tsx
│   ├── ArticleCard.tsx
│   ├── CategoryFilter.tsx
│   ├── Pagination.tsx
│   └── index.ts
│
├── JournalDetailPage/
│   ├── Hero.tsx
│   ├── ArticleBody.tsx
│   ├── TableOfContents.tsx
│   ├── RelatedDestination.tsx
│   ├── RelatedCulture.tsx
│   ├── RelatedVenue.tsx
│   ├── RelatedService.tsx
│   ├── RelatedArticles.tsx
│   ├── ArticleFAQ.tsx
│   ├── ArticleCTA.tsx
│   └── index.ts
│
├── PressPage/
│   ├── Hero.tsx
│   ├── PressGrid.tsx
│   ├── PressItem.tsx
│   └── index.ts
│
├── ContactPage/
│   ├── Hero.tsx
│   ├── ConsultationForm.tsx         # Netlify Forms
│   ├── ContactInfo.tsx
│   └── index.ts
│
├── Layout/
│   ├── Navbar.tsx
│   ├── NavbarMobile.tsx
│   ├── Footer.tsx
│   ├── LanguageSwitcher.tsx
│   ├── ConsultationCTA.tsx          # Reused footer-of-page CTA
│   └── index.ts
│
├── BlockContent/                    # Portable Text renderer
│   ├── PortableText.tsx
│   ├── serializers/
│   │   ├── BlockSerializer.tsx
│   │   ├── ImageSerializer.tsx
│   │   ├── QuoteSerializer.tsx
│   │   ├── CalloutSerializer.tsx
│   │   └── EmbedSerializer.tsx
│   └── index.ts
│
├── ui/                              # Reusable primitives — cross-page only
│   ├── Button.tsx
│   ├── Link.tsx                     # Wraps next-intl Link
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Textarea.tsx
│   ├── Select.tsx
│   ├── Container.tsx                # Editorial-width container
│   ├── Section.tsx                  # Vertical-rhythm section wrapper
│   ├── Eyebrow.tsx                  # The small uppercase labels in the design
│   ├── Divider.tsx                  # Hairline rules
│   ├── SanityImage.tsx              # next/image + Sanity image-url wrapper
│   ├── RevealOnScroll.tsx           # Framer Motion intersection reveal
│   ├── ParallaxImage.tsx
│   ├── SmoothScrollProvider.tsx     # Lenis wrapper
│   └── index.ts
│
└── Providers/
    ├── IntlProvider.tsx
    └── index.ts
```

**Key Rules:**
- ❌ Don't organize by type (`buttons/`, `cards/`)
- ✅ Do organize by PAGE (`HomePage/`, `JournalDetailPage/`)
- ✅ Exception: `Layout/`, `BlockContent/`, `ui/`, `Providers/` for truly shared pieces
- Each page folder has `index.ts` that re-exports components
- Page components are Server Components by default; isolate `'use client'` to leaves

---

## Sanity (`src/sanity/`)

```
src/sanity/
│
├── env.ts                           # projectId, dataset, apiVersion
│
├── lib/
│   ├── client.ts                    # createClient instance
│   ├── image.ts                     # urlFor() helper
│   └── live.ts                      # live preview (optional)
│
├── structure.ts                     # Studio desk structure
│
├── schemaTypes/
│   ├── index.ts                     # Exports all types
│   │
│   ├── documents/                   # Document types
│   │   ├── HomePage/
│   │   │   ├── index.ts
│   │   │   ├── schema.ts            # Combined HomePage doc
│   │   │   └── sections/
│   │   │       ├── hero.ts
│   │   │       ├── atelierIntro.ts
│   │   │       ├── destinationsShowcase.ts
│   │   │       ├── multiculturalShowcase.ts
│   │   │       ├── featuredWedding.ts
│   │   │       └── consultationCta.ts
│   │   │
│   │   ├── AboutPage/
│   │   ├── DestinationsIndex/       # The /destinations landing page
│   │   ├── Destination/             # Individual destination document
│   │   ├── MulticulturalIndex/
│   │   ├── Culture/                 # Individual culture (Indian, Jewish, etc.)
│   │   ├── VenuesIndex/
│   │   ├── VenueRegion/
│   │   ├── Venue/
│   │   ├── ServicesIndex/
│   │   ├── Service/
│   │   ├── PortfolioIndex/
│   │   ├── Wedding/                 # Portfolio item
│   │   ├── JournalIndex/
│   │   ├── Article/                 # Blog post
│   │   ├── ArticleCategory/
│   │   ├── Press/
│   │   ├── ContactPage/
│   │   └── LegalDocument/           # Privacy, Terms — same template, different slugs
│   │
│   ├── objects/                     # Reusable objects (not standalone documents)
│   │   ├── seo.ts                   # SEO fields object
│   │   ├── ogImage.ts
│   │   ├── cta.ts                   # Reusable CTA block
│   │   ├── faq.ts                   # FAQ item
│   │   ├── richImage.ts             # Image + alt + caption
│   │   ├── eyebrow.ts
│   │   ├── pullQuote.ts
│   │   ├── tableOfContents.ts
│   │   ├── practicalPicture.ts      # Reused on destination + venue pages
│   │   ├── traditionsBlock.ts
│   │   └── portableText.ts          # Custom Portable Text schema with serializers
│   │
│   ├── singletons/                  # One-off documents (Site Settings, Nav, Footer)
│   │   ├── siteSettings.ts
│   │   ├── navigation.ts
│   │   └── footer.ts
│   │
│   └── localized/                   # Localization helpers
│       └── stringLocale.ts          # Used sparingly — main strategy is doc-level i18n
│
├── plugins/
│   └── documentInternationalization.ts  # @sanity/document-internationalization config
│
└── queries/
    ├── index.ts
    │
    ├── fragments/                   # Reusable GROQ fragments
    │   ├── seo.ts
    │   ├── image.ts
    │   ├── richImage.ts
    │   ├── portableText.ts
    │   ├── articleCard.ts
    │   ├── destinationCard.ts
    │   ├── venueCard.ts
    │   └── relatedContent.ts
    │
    ├── HomePage/
    │   ├── getHomePage.ts
    │   └── groq.ts
    │
    ├── About/
    ├── Destinations/
    │   ├── getDestinationsIndex.ts
    │   ├── getDestination.ts
    │   ├── getDestinationSlugs.ts   # For generateStaticParams
    │   └── groq.ts
    │
    ├── Multicultural/
    │   ├── getMulticulturalIndex.ts
    │   ├── getCulture.ts
    │   ├── getCultureSlugs.ts
    │   └── groq.ts
    │
    ├── Venues/
    │   ├── getVenuesIndex.ts
    │   ├── getVenueRegion.ts
    │   ├── getVenue.ts
    │   ├── getVenueSlugs.ts
    │   └── groq.ts
    │
    ├── Services/
    ├── Portfolio/
    │
    ├── Journal/                     # Heaviest section — most articles
    │   ├── getJournalIndex.ts       # Paginated, projects only card fields
    │   ├── getArticle.ts
    │   ├── getArticleSlugs.ts       # For generateStaticParams (top N popular)
    │   ├── getArticlesByCategory.ts
    │   ├── getRelatedArticles.ts    # For internal linking
    │   └── groq.ts
    │
    ├── Press/
    ├── Contact/
    │
    └── shared/
        ├── getNavigation.ts
        ├── getFooter.ts
        ├── getSiteSettings.ts
        └── getSitemapEntries.ts     # For sitemap.ts generation
```

**Key Principles:**
- **Documents vs objects vs singletons** are separated at the folder level
- **Localization is document-level** — `@sanity/document-internationalization` creates separate documents per locale, linked by translation references
- **Queries mirror schema folders** for discoverability
- **GROQ fragments** are reused — never duplicate field selections
- **Slug queries are separate** — `getXxxSlugs.ts` exists specifically for `generateStaticParams`

---

## Lib (`src/lib/`)

```
src/lib/
├── schema/                          # JSON-LD generators
│   ├── organization.ts
│   ├── localBusiness.ts
│   ├── article.ts
│   ├── faqPage.ts
│   ├── breadcrumbList.ts
│   ├── service.ts
│   ├── event.ts                     # For weddings/portfolio
│   └── index.ts
│
├── seo/
│   ├── metadata.ts                  # generateMetadata helpers
│   ├── hreflang.ts
│   └── canonical.ts
│
├── netlify/
│   └── forms.ts                     # Netlify Forms helpers
│
├── format/
│   ├── date.ts
│   ├── slug.ts
│   └── url.ts
│
└── constants.ts                     # Site-wide constants (locales, URLs, etc.)
```

---

## Example: Adding a New Destination Page

```
1. Sanity Schema (already exists if "Destination" doc type is created)
   src/sanity/schemaTypes/documents/Destination/
   → Add slug, content via Sanity Studio

2. Localized copies
   Create document in Studio → Use the "Translations" panel
   (document-internationalization plugin creates linked docs per locale)

3. The route already exists:
   src/app/(root)/[locale]/destinations/[destination]/page.tsx
   No new code needed — slug is dynamic.

4. Components already exist in DestinationDetailPage/
   No new code unless this destination needs a unique section.

5. Internal linking
   Edit related blog articles in Sanity to reference the new destination.
   (Or run /check-internal-links to find orphaned references.)
```

---

## Naming Conventions

- **Components:** PascalCase (`Hero.tsx`, `RegisterByPlace.tsx`)
- **Utilities & functions:** camelCase (`getDestination.ts`, `formatDate.ts`)
- **Hooks:** camelCase with `use` prefix (`useLocaleNavigation.ts`)
- **GROQ files:** `groq.ts` for raw query strings, `getXxx.ts` for query functions
- **Schema files:** camelCase for objects (`seo.ts`), PascalCase folder for documents (`Destination/`)

---

## Import Aliases (`tsconfig.json`)

```typescript
import { Hero } from "@/components/HomePage";
import { client } from "@/sanity/lib/client";
import { getHomePage } from "@/sanity/queries/HomePage";
import { articleSchema } from "@/lib/schema";
import { Link } from "@/i18n/navigation";
```

---

## Quick Reference: Where Does This File Go?

| File | Goes In |
|---|---|
| Page-specific component | `src/components/[PageName]/` |
| Cross-page UI primitive | `src/components/ui/` |
| Navbar/Footer/shell | `src/components/Layout/` |
| Sanity document schema | `src/sanity/schemaTypes/documents/[Name]/` |
| Sanity reusable object | `src/sanity/schemaTypes/objects/` |
| Sanity singleton | `src/sanity/schemaTypes/singletons/` |
| GROQ query function | `src/sanity/queries/[Domain]/` |
| Reusable GROQ fragment | `src/sanity/queries/fragments/` |
| JSON-LD schema helper | `src/lib/schema/` |
| SEO metadata helper | `src/lib/seo/` |
| UI translation string | `messages/[locale].json` |
| Page route | `src/app/(root)/[locale]/[path]/page.tsx` |
| Sitemap segment | `src/app/sitemap/[section]/sitemap.ts` |

---

Update this doc whenever a new section or pattern is introduced. Patterns compound — drift is expensive at scale.
