# SEO Strategy

The Grecia Mejia Weddings website is engineered to become a top-of-search-results destination for luxury wedding planning queries. This document defines the strategy and the rules every page must follow.

The brief asks for an **"infinite SEO web"** capable of scaling to 3,000–10,000 articles. That requires discipline at every layer.

---

## Core principle: the topical authority network

We are not trying to rank for one keyword. We are building **topical authority** across an interconnected matrix of:

- **Places** (destinations + venues by region)
- **Cultures** (multicultural wedding traditions)
- **Services** (planning offerings)
- **Concepts** (cost, planning, design, logistics, legal)
- **Stories** (portfolio case studies)

Every page, every article, every link reinforces the planner's authority across this matrix. Google should see the site as **the** comprehensive resource for luxury multicultural destination weddings.

---

## The pillar–cluster model

### Pillars (broad authority pages)

The hub pages that signal "we own this topic":

| Pillar                 | URL                       | Target intent                          |
| ---------------------- | ------------------------- | -------------------------------------- |
| Destinations           | `/destinations`           | "destination wedding planner"          |
| Multicultural Weddings | `/multicultural-weddings` | "multicultural wedding planner"        |
| Venues                 | `/venues`                 | "luxury wedding venues"                |
| Services               | `/services`               | "luxury wedding planning services"     |
| Journal                | `/journal`                | "wedding planning guide [destination]" |

### Sub-pillars (regional/topical authority)

Mid-level pages that group related content:

- `/destinations/punta-cana` (and each destination)
- `/multicultural-weddings/indian-weddings` (and each culture)
- `/venues/punta-cana` (and each region)
- `/services/destination-wedding-planning` (and each service)
- `/journal/category/[category]` (each blog category)

### Clusters (articles)

Long-tail blog content that targets specific search queries. Each cluster article supports a pillar by:

- Linking back to its primary pillar
- Linking to 1+ sub-pillar
- Linking to 3-5 sibling cluster articles
- Being linked **back** from those pillars

This is the mechanic that creates the "infinite SEO web."

---

## The internal linking matrix

This is the most important rule in the project. **Every published article must satisfy this matrix.**

### Required outbound links from any Article

Every article links **out** to:

| #   | Link type                     | Required count |
| --- | ----------------------------- | -------------- |
| 1   | Primary destination           | 1              |
| 2   | Primary culture (if relevant) | 1              |
| 3   | Primary venue (if relevant)   | 1              |
| 4   | Primary service               | 1              |
| 5   | Related articles (siblings)   | 3-5            |

These are not "Related" sidebar items — they are **structurally enforced via Sanity references**. The schema requires these fields. Editors cannot publish an article without them.

### Required inbound links to any Article

Conversely, each pillar/sub-pillar must surface relevant articles:

- A **destination page** displays 4-6 related articles from `/journal`
- A **culture page** displays 4-6 related articles
- A **venue page** displays 3-4 related articles
- A **service page** displays 4-6 related articles

These are computed via reverse references in GROQ — the destination page asks "which articles reference me?" and surfaces them.

### Example: how one article connects

Take the article: **"Best Indian Wedding Venues in Punta Cana"**

```
Outbound (mandatory):
  → /destinations/punta-cana                              [destination]
  → /multicultural-weddings/indian-weddings               [culture]
  → /venues/punta-cana                                    [venue region]
  → /services/destination-wedding-planning                [service]
  → /journal/punta-cana-wedding-cost                      [related article 1]
  → /journal/best-months-for-punta-cana-weddings          [related article 2]
  → /journal/indian-wedding-weekend-itinerary             [related article 3]
  → /journal/jewish-wedding-venues-punta-cana             [related article 4]

Inbound (computed):
  ← /destinations/punta-cana  surfaces this article in its "From the journal" block
  ← /multicultural-weddings/indian-weddings  surfaces this in its journal block
  ← /venues/punta-cana  surfaces this in its journal block
  ← Each related sibling article above links back to this one
```

That single article participates in ~12 internal link relationships. Multiply by thousands of articles and the link graph density approaches the editorial coverage of the New York Times.

---

## Article structure requirements

Every article must include **all** of the following. The Sanity schema enforces it.

| Element                       | Sanity field                                     | Frontend rendering                        |
| ----------------------------- | ------------------------------------------------ | ----------------------------------------- |
| SEO URL (slug)                | `slug` (localized)                               | Page route                                |
| Meta title (≤60 chars)        | `seo.title`                                      | `<title>`                                 |
| Meta description (≤160 chars) | `seo.description`                                | `<meta name="description">`               |
| OG image                      | `seo.ogImage`                                    | `<meta property="og:image">`              |
| Single H1                     | `title`                                          | `<h1>` (rendered once in hero)            |
| Structured H2/H3 hierarchy    | `body` (Portable Text)                           | Validated in CI                           |
| Table of contents             | Computed from H2s                                | Sticky on desktop                         |
| Featured image with alt       | `heroImage`                                      | `<SanityImage priority>`                  |
| Internal links: destination   | `relatedDestination` (reference)                 | Rendered + counted                        |
| Internal links: culture       | `relatedCulture` (reference, optional)           | Rendered + counted                        |
| Internal links: venue         | `relatedVenue` (reference, optional)             | Rendered + counted                        |
| Internal links: service       | `relatedService` (reference)                     | Rendered + counted                        |
| Internal links: 3-5 articles  | `relatedArticles` (array, validated min:3 max:5) | "Related articles" block                  |
| FAQ section                   | `faqs` (array of objects)                        | Accordion + FAQ schema                    |
| Breadcrumbs                   | Computed                                         | Rendered + breadcrumb schema              |
| Author                        | `author` (reference, default: Grecia)            | End-of-article signature                  |
| Publish date                  | `publishedAt`                                    | Rendered + article schema                 |
| Modified date                 | Auto from Sanity                                 | `<meta property="article:modified_time">` |

---

## URL conventions

### Rules

- **Lowercase, kebab-case** always
- **Trailing slashes:** off (Next.js default)
- **Stop words:** keep "the", "of", "in" only if naturally part of a proper noun
- **Length:** target ≤60 chars after domain
- **Slugs reflect the H1**, but trimmed and keyword-optimized
- **Never include dates** in slugs (e.g., not `/2025-best-venues`)
- **Never include locale codes inside slugs** (the locale is in the path prefix)

### Patterns by content type

| Content      | Pattern                                       | Example                                     |
| ------------ | --------------------------------------------- | ------------------------------------------- |
| Destination  | `[place]`                                     | `punta-cana`, `amalfi-coast`                |
| Culture      | `[culture]-weddings`                          | `indian-weddings`, `jewish-weddings`        |
| Venue region | `[region]`                                    | `punta-cana`, `mallorca`                    |
| Venue        | `[name]`                                      | `jellyfish-restaurant`, `eden-roc-cap-cana` |
| Service      | `[service-name]`                              | `destination-wedding-planning`              |
| Article      | `[topic]-[modifier]`                          | `best-indian-wedding-venues-punta-cana`     |
| Portfolio    | `[adjective]-[culture]-wedding-[destination]` | `luxury-indian-wedding-punta-cana`          |

---

## Metadata generation

All routes use `generateMetadata` with the helpers in `src/lib/seo/`.

### Standard pattern

```ts
// src/lib/seo/metadata.ts
import type { Metadata } from "next";
import { buildHreflang } from "./hreflang";
import type { SeoFields } from "@/sanity/types";

export function buildMetadata({
  seo,
  path,
  translations,
  type = "article",
}: {
  seo: SeoFields;
  path: string;
  translations?: Record<string, string>;
  type?: "website" | "article";
}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: buildHreflang(path, translations),
    },
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      url: `${baseUrl}${path}`,
      siteName: "Grecia Mejia Weddings",
      images: seo.ogImage
        ? [
            {
              url: seo.ogImage.url,
              width: 1200,
              height: 630,
              alt: seo.ogImage.alt,
            },
          ]
        : undefined,
      locale: seo.locale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      images: seo.ogImage ? [seo.ogImage.url] : undefined,
    },
    robots: {
      index: !seo.noindex,
      follow: !seo.nofollow,
    },
  };
}
```

Used in every page:

```tsx
// src/app/(root)/[locale]/destinations/[destination]/page.tsx
export async function generateMetadata({ params }) {
  const { locale, destination } = await params;
  const data = await getDestination(destination, locale);

  return buildMetadata({
    seo: data.seo,
    path: `/destinations/${destination}`,
    translations: Object.fromEntries(
      data.translations.map((t) => [t.language, t.slug]),
    ),
    type: "website",
  });
}
```

---

## Schema markup (JSON-LD)

All schema markup lives in `src/lib/schema/`. Never inline JSON-LD in JSX components — always import a generator.

### Required schemas per page type

| Page type                      | Schemas                                                  |
| ------------------------------ | -------------------------------------------------------- |
| Home                           | Organization, WebSite (with SearchAction), LocalBusiness |
| About                          | AboutPage, Person (Grecia)                               |
| Destination                    | Place, FAQPage, BreadcrumbList                           |
| Culture (multicultural detail) | Article, FAQPage, BreadcrumbList                         |
| Venue (region)                 | CollectionPage, BreadcrumbList                           |
| Venue (detail)                 | EventVenue / Place, FAQPage, BreadcrumbList              |
| Service (detail)               | Service, BreadcrumbList                                  |
| Portfolio (detail)             | Event (type: SocialEvent), BreadcrumbList                |
| Journal index                  | Blog, BreadcrumbList                                     |
| Journal article                | Article (or BlogPosting), FAQPage, BreadcrumbList        |
| Contact                        | ContactPage, LocalBusiness                               |
| Press                          | CollectionPage                                           |

### Implementation pattern

```ts
// src/lib/schema/article.ts
export function articleSchema(article: Article, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.seo.description,
    image: article.heroImage.url,
    datePublished: article.publishedAt,
    dateModified: article._updatedAt,
    author: {
      "@type": "Person",
      name: article.author?.name ?? "Grecia Mejia",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Grecia Mejia Weddings",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: url,
  };
}
```

Rendered via a `<JsonLd>` helper:

```tsx
// src/components/ui/JsonLd.tsx
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

### Multiple schemas on one page

Always emit as separate `<script>` tags, not combined `@graph` arrays (cleaner, easier to debug, Google handles both):

```tsx
<JsonLd data={articleSchema(article, url)} />
<JsonLd data={faqPageSchema(article.faqs)} />
<JsonLd data={breadcrumbListSchema(breadcrumbs)} />
```

---

## Sitemap strategy

A single `sitemap.xml` cannot handle 50,000+ URLs (the limit). We use a **sitemap index**.

### Structure

```
/sitemap.xml                              Sitemap index
├── /sitemap/pages/sitemap.xml            Core pages (home, about, hubs, contact, legal)
├── /sitemap/destinations/sitemap.xml     Destinations + region pages
├── /sitemap/multicultural/sitemap.xml    Multicultural pages
├── /sitemap/venues/sitemap.xml           All venue pages (potentially large)
├── /sitemap/services/sitemap.xml         Service pages
├── /sitemap/portfolio/sitemap.xml        Wedding case studies
└── /sitemap/journal/sitemap.xml          Articles (largest section)
```

When `/journal` sitemap exceeds 40,000 URLs, split further by category or year.

### Implementation

```ts
// src/app/sitemap.ts (the index)
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;
  return [
    { url: `${baseUrl}/sitemap/pages/sitemap.xml` },
    { url: `${baseUrl}/sitemap/destinations/sitemap.xml` },
    { url: `${baseUrl}/sitemap/multicultural/sitemap.xml` },
    { url: `${baseUrl}/sitemap/venues/sitemap.xml` },
    { url: `${baseUrl}/sitemap/services/sitemap.xml` },
    { url: `${baseUrl}/sitemap/portfolio/sitemap.xml` },
    { url: `${baseUrl}/sitemap/journal/sitemap.xml` },
  ];
}
```

```ts
// src/app/sitemap/journal/sitemap.ts (one of many)
import type { MetadataRoute } from "next";
import { getJournalSitemapEntries } from "@/sanity/queries/Journal/getSitemapEntries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;
  const articles = await getJournalSitemapEntries();

  return articles.flatMap((article) => {
    // One entry per locale
    return article.translations.map((t) => ({
      url: `${baseUrl}${getLocalizedJournalPath(t.language, t.slug)}`,
      lastModified: new Date(article._updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          article.translations.map((other) => [
            other.language,
            `${baseUrl}${getLocalizedJournalPath(other.language, other.slug)}`,
          ]),
        ),
      },
    }));
  });
}
```

### Robots.txt

```ts
// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio/", "/api/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
```

---

## Rendering strategy (ISR + on-demand)

### Build-time vs runtime

- **Build-time SSG** (`generateStaticParams`) for **top ~100 pages per content type** (popular destinations, primary venues, featured articles). These are the pages that drive most traffic.
- **On-demand ISR** for the rest. First user hit triggers rendering, then cached.
- **Revalidation:** Sanity webhook → `revalidatePath` / `revalidateTag`. Set up in `src/app/api/revalidate/route.ts`.

### Pattern

```ts
// Top of any dynamic route
export const revalidate = 3600; // Hourly fallback

export async function generateStaticParams({ params }) {
  const { locale } = await params;

  // Pre-render only the popular ones at build time
  const slugs = await client.fetch(
    `*[_type == "destination" && language == $locale && popular == true].slug.current`,
    { locale },
  );

  return slugs.map((slug) => ({ destination: slug }));
}

// For slugs NOT in the above list, Next.js renders on-demand on first request
export const dynamicParams = true;
```

### Sanity webhook for revalidation

When content changes in Sanity, hit `/api/revalidate?path=/destinations/punta-cana&secret=...` — the route validates the secret and calls `revalidatePath`.

---

## Performance budget

Core Web Vitals are part of the SEO strategy.

| Metric | Target | Strategy                                                             |
| ------ | ------ | -------------------------------------------------------------------- |
| LCP    | <2.5s  | `priority` on hero image, font preload, Sanity image CDN             |
| INP    | <200ms | Server Components default, defer animation libs                      |
| CLS    | <0.1   | Reserved aspect ratios on all images, no late-loading content shifts |
| TTFB   | <600ms | Netlify edge + ISR caching                                           |
| FCP    | <1.8s  | Critical CSS inlined by Next.js                                      |

### Image strategy

- All images via `<SanityImage>` wrapper → `next/image` + Sanity's image pipeline
- Quality 85 default, 90 for hero, 75 for thumbnails
- Always specify width/height for known dimensions
- `priority` only above the fold
- `loading="lazy"` everywhere else (default)
- Use Sanity's `auto=format` to serve AVIF/WebP

### Font loading

```ts
// All fonts via next/font/google with display: 'swap' and CSS variables
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
});
```

Self-host nothing unless absolutely necessary.

### JS budget

- Server Components everywhere by default
- Framer Motion and Lenis are the only large client libs; both code-split via dynamic import where not on initial route
- Per-page client JS budget: <70KB gzipped

---

## Content quality rules (the editorial bar)

SEO without quality is spam. The blog must hit the editorial bar:

- **Minimum word count for blog articles: 1,500 words.** Pillar guides: 3,000+.
- **At least 3 internal links to non-article pages** (destinations, cultures, venues, services). The matrix enforces this.
- **At least 3 expert assertions** per article — specific numbers, named venues, real ceremony details. Not generic advice.
- **Original imagery only** — Sanity image library is fed from actual Grecia weddings or licensed editorial. No stock.
- **FAQ section is not optional.** Minimum 4 questions, answers ≥40 words each.
- **No AI-generated content published without human editing.** This is not a content farm.

---

## E-E-A-T (Experience, Expertise, Authoritativeness, Trust)

Wedding planning is a YMYL-adjacent category. Google evaluates author credibility heavily.

Implementation:

- **Author byline on every article** — defaults to Grecia Mejia with link to `/about` and full author schema
- **Last updated dates surfaced** — both visible in UI and in `dateModified`
- **Press mentions on /press** — gives the brand citation authority
- **Real testimonials with names** (with consent) — `Person` schema applied
- **About page is detailed** — Grecia's history, years in business, certifications, languages
- **Trust signals subtle but present** — no badges, but "15 years curating destination weddings" stated factually in copy

---

## Multilingual SEO

See `i18n-strategy.md` for the routing detail. Key SEO points:

- **English is the canonical authority language.** `x-default` always points to English.
- **Each locale has its own URL** — never URL parameters (`?lang=es`).
- **Slugs are translated** for non-English locales (e.g., `/destinos/punta-cana` not `/destinations/punta-cana` in Spanish).
- **Hreflang tags emitted on every page**, including self-reference.
- **One sitemap per content section**, each containing all locale versions with `xhtml:link` hreflang annotations.
- **No automatic translation in production** — all translations are human-edited (or AI + human edit).
- **Each locale is treated as its own ranking surface** — building links/citations in target-language press is part of the long-term strategy.

---

## Pre-publish checklist (for editors and the `/check-article` command)

Before any article goes live:

- [ ] H1 set and unique
- [ ] Meta title ≤60 chars
- [ ] Meta description ≤160 chars
- [ ] Featured image with alt text
- [ ] All H2/H3 hierarchy valid (no jumping levels)
- [ ] At least 1 destination reference
- [ ] At least 1 service reference
- [ ] 3-5 related articles selected
- [ ] FAQ section with ≥4 items
- [ ] Slug ≤60 chars, kebab-case
- [ ] Word count ≥1500
- [ ] Internal links to at least 3 non-article pages
- [ ] At least 1 image inline beyond the hero
- [ ] No spelling errors (Sanity Studio spell-check)
- [ ] OG image generated/uploaded
- [ ] Translated to all 6 locales OR locale is intentionally restricted

The `/check-article` slash command (see `.claude/commands/`) automates this check.

---

## Forbidden practices

Never, under any circumstance:

- ❌ Buy links
- ❌ Spin or duplicate content across locales
- ❌ Hidden text or cloaking
- ❌ Keyword stuff (especially in alt text)
- ❌ Auto-generate articles without editorial review
- ❌ Use exact-match anchor text for >10% of internal links (vary anchors naturally)
- ❌ Doorway pages (e.g., "/destinations/[every-city-in-italy]" as thin pages)
- ❌ Manipulative schema (FAQs that aren't actually on the page, fake reviews)
- ❌ AMP (deprecated, no longer relevant)
