# i18n Strategy

How localization works across this project: routing, Sanity content, UI strings, slug translation, hreflang, and the scale-out plan.

---

## Locales

Six locales, English-first:

| Code | Language   | Status                        |
| ---- | ---------- | ----------------------------- |
| `en` | English    | **Default & source of truth** |
| `es` | Spanish    | Full                          |
| `fr` | French     | Full                          |
| `pt` | Portuguese | Full                          |
| `de` | German     | Full                          |
| `it` | Italian    | Full                          |

English is the primary authority language. All translations derive from English. When a translation is missing for a locale, the system falls back to English (with hreflang signaling).

---

## URL routing

### Strategy: `as-needed` prefixing

Default locale (`en`) is **unprefixed**. All others are prefixed.

```
https://greciamejiaweddings.com/about               → English
https://greciamejiaweddings.com/es/sobre            → Spanish
https://greciamejiaweddings.com/fr/a-propos         → French
https://greciamejiaweddings.com/it/chi-siamo        → Italian
```

**Why:**

- Cleaner English URLs (the primary market)
- Localized URLs for SEO in non-English markets
- Locale signal in URL prevents geo-mismatch via Accept-Language alone

### Configuration

```ts
// src/i18n/routing.ts
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "fr", "pt", "de", "it"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      es: "/sobre",
      fr: "/a-propos",
      pt: "/sobre",
      de: "/ueber-uns",
      it: "/chi-siamo",
    },
    "/destinations": {
      en: "/destinations",
      es: "/destinos",
      fr: "/destinations",
      pt: "/destinos",
      de: "/destinationen",
      it: "/destinazioni",
    },
    "/destinations/[destination]": {
      en: "/destinations/[destination]",
      es: "/destinos/[destination]",
      fr: "/destinations/[destination]",
      pt: "/destinos/[destination]",
      de: "/destinationen/[destination]",
      it: "/destinazioni/[destination]",
    },
    "/multicultural-weddings": {
      en: "/multicultural-weddings",
      es: "/bodas-multiculturales",
      fr: "/mariages-multiculturels",
      pt: "/casamentos-multiculturais",
      de: "/multikulturelle-hochzeiten",
      it: "/matrimoni-multiculturali",
    },
    "/multicultural-weddings/[culture]": {
      en: "/multicultural-weddings/[culture]",
      es: "/bodas-multiculturales/[culture]",
      fr: "/mariages-multiculturels/[culture]",
      pt: "/casamentos-multiculturais/[culture]",
      de: "/multikulturelle-hochzeiten/[culture]",
      it: "/matrimoni-multiculturali/[culture]",
    },
    "/venues": {
      en: "/venues",
      es: "/locaciones",
      fr: "/lieux",
      pt: "/locais",
      de: "/hochzeitsorte",
      it: "/location",
    },
    "/venues/[region]": {
      en: "/venues/[region]",
      es: "/locaciones/[region]",
      fr: "/lieux/[region]",
      pt: "/locais/[region]",
      de: "/hochzeitsorte/[region]",
      it: "/location/[region]",
    },
    "/venues/[region]/[venue]": {
      en: "/venues/[region]/[venue]",
      es: "/locaciones/[region]/[venue]",
      fr: "/lieux/[region]/[venue]",
      pt: "/locais/[region]/[venue]",
      de: "/hochzeitsorte/[region]/[venue]",
      it: "/location/[region]/[venue]",
    },
    "/services": {
      en: "/services",
      es: "/servicios",
      fr: "/services",
      pt: "/servicos",
      de: "/leistungen",
      it: "/servizi",
    },
    "/services/[service]": {
      en: "/services/[service]",
      es: "/servicios/[service]",
      fr: "/services/[service]",
      pt: "/servicos/[service]",
      de: "/leistungen/[service]",
      it: "/servizi/[service]",
    },
    "/portfolio": "/portfolio", // Same in all locales
    "/portfolio/[slug]": "/portfolio/[slug]",
    "/journal": {
      en: "/journal",
      es: "/diario",
      fr: "/journal",
      pt: "/diario",
      de: "/journal",
      it: "/diario",
    },
    "/journal/[slug]": {
      en: "/journal/[slug]",
      es: "/diario/[slug]",
      fr: "/journal/[slug]",
      pt: "/diario/[slug]",
      de: "/journal/[slug]",
      it: "/diario/[slug]",
    },
    "/journal/category/[category]": {
      en: "/journal/category/[category]",
      es: "/diario/categoria/[category]",
      fr: "/journal/categorie/[category]",
      pt: "/diario/categoria/[category]",
      de: "/journal/kategorie/[category]",
      it: "/diario/categoria/[category]",
    },
    "/press": "/press",
    "/contact": {
      en: "/contact",
      es: "/contacto",
      fr: "/contact",
      pt: "/contato",
      de: "/kontakt",
      it: "/contatti",
    },
    "/privacy": {
      en: "/privacy",
      es: "/privacidad",
      fr: "/confidentialite",
      pt: "/privacidade",
      de: "/datenschutz",
      it: "/privacy",
    },
    "/terms": {
      en: "/terms",
      es: "/terminos",
      fr: "/conditions",
      pt: "/termos",
      de: "/agb",
      it: "/termini",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
```

### Middleware

```ts
// src/middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|_vercel|admin|studio|.*\\..*).*)"],
};
```

The `admin|studio` exclusion is for Sanity Studio mounted at `/studio`.

### Navigation helpers

Always use locale-aware navigation. Never raw `<a>` or `next/link` directly.

```ts
// src/i18n/navigation.ts
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
```

Then in components:

```tsx
import { Link } from "@/i18n/navigation";

<Link href="/destinations/punta-cana">View Punta Cana</Link>;
// → /destinations/punta-cana in EN
// → /es/destinos/punta-cana in ES
// → /it/destinazioni/punta-cana in IT
```

---

## Two layers of translation

This project has **two distinct content layers**, each handled differently:

### Layer 1: UI strings — `next-intl`

Static interface text: button labels, form fields, navigation, error messages, microcopy.

**Lives in:** `messages/{locale}.json`

**Pattern:**

```json
// messages/en.json
{
  "common": {
    "cta": {
      "consultation": "Request a Private Consultation",
      "beginJourney": "Begin Your Wedding Journey",
      "speak": "Speak With Grecia Mejia"
    },
    "nav": {
      "house": "The House",
      "destinations": "Destinations",
      "multicultural": "Multicultural",
      "venues": "Venues",
      "portfolio": "Portfolio",
      "journal": "Journal",
      "contact": "Contact"
    }
  },
  "home": {
    "hero": {
      "eyebrow": "An atelier of the destination & multicultural wedding",
      "title": "The art of the destination wedding."
    }
  },
  "contact": {
    "form": {
      "name": "Name",
      "email": "Email",
      "whatsapp": "WhatsApp",
      "country": "Country",
      "destination": "Desired destination",
      "date": "Estimated date",
      "guests": "Guest count",
      "weddingType": "Wedding type",
      "budget": "Estimated budget",
      "message": "Message",
      "submit": "Begin My Wedding Journey"
    }
  }
}
```

**Rules:**

- Dot-namespace by domain: `common.*`, `home.*`, `contact.*`, etc.
- Use ICU MessageFormat for plurals: `"{count, plural, one {# wedding} other {# weddings}}"`
- Never put long editorial copy here — that's Sanity
- Keep `en.json` as the source; translate others from it
- A missing key in a non-English locale should log a warning in dev (next-intl does this by default)

### Layer 2: Editorial content — Sanity (document-level i18n)

All editorial copy: hero text, articles, destination guides, venue descriptions, FAQs.

**Strategy:** `@sanity/document-internationalization`

Each document exists as **separate documents per locale**, linked by translation reference. This means:

- An English article is one document
- Its Spanish translation is a different document
- They share a `translationId` linking them

**Why document-level over field-level:**

- Scales to 10,000+ articles without bloated documents
- Each translation can be drafted, reviewed, and published independently
- Better UX in Sanity Studio (editors don't scroll through 6 versions of every field)
- Better query performance (no need to extract one language from massive objects)
- Allows market-specific content (a French article that doesn't exist in English)

### Sanity Studio configuration

```ts
// sanity.config.ts (extract)
import { documentInternationalization } from "@sanity/document-internationalization";

export default defineConfig({
  // ...
  plugins: [
    documentInternationalization({
      supportedLanguages: [
        { id: "en", title: "English" },
        { id: "es", title: "Español" },
        { id: "fr", title: "Français" },
        { id: "pt", title: "Português" },
        { id: "de", title: "Deutsch" },
        { id: "it", title: "Italiano" },
      ],
      schemaTypes: [
        "destination",
        "culture",
        "venue",
        "venueRegion",
        "service",
        "wedding",
        "article",
        "articleCategory",
        "homePage",
        "aboutPage",
        "destinationsIndex",
        "multiculturalIndex",
        "venuesIndex",
        "servicesIndex",
        "portfolioIndex",
        "journalIndex",
        "press",
        "contactPage",
        "legalDocument",
      ],
      languageField: "language",
    }),
  ],
});
```

### Document fields added by the plugin

Every localized document automatically gets:

- `language` — locale code (`en`, `es`, etc.)
- `_translations` — array of references to sibling translations

### Querying localized documents

Fetch by locale via the language field:

```ts
// src/sanity/queries/Destinations/getDestination.ts
import { client } from "@/sanity/lib/client";
import type { Locale } from "@/i18n/routing";

export async function getDestination(slug: string, locale: Locale) {
  return client.fetch(
    `*[_type == "destination" && slug.current == $slug && language == $locale][0]{
      ...,
      "translations": *[_type == "translation.metadata" && references(^._id)][0].translations[].value->{
        language,
        "slug": slug.current
      }
    }`,
    { slug, locale },
  );
}
```

The nested `translations` query fetches sibling-language versions — needed for hreflang.

---

## Slug translation strategy

Slugs are part of each translated document. The English version of "Punta Cana" might be `/destinations/punta-cana`; the Italian version might be `/destinazioni/punta-cana` (same slug, different path prefix).

**Rules:**

- Place slugs (Punta Cana, Mallorca, Provence) generally stay the same across locales — they're proper nouns
- Concept slugs (indian-weddings, destination-wedding-planning) **must be translated**:
  - EN: `/multicultural-weddings/indian-weddings`
  - ES: `/bodas-multiculturales/bodas-indias`
  - IT: `/matrimoni-multiculturali/matrimoni-indiani`
- Article slugs (`best-indian-wedding-venues-punta-cana`) **always translated**
- Path segments (the `destinations` part) are translated via `pathnames` in `routing.ts`
- Dynamic slugs are translated via the Sanity document's localized slug field

### Sanity slug validation

```ts
// src/sanity/schemaTypes/objects/localizedSlug.ts
import { defineType } from "sanity";

export const localizedSlug = defineType({
  name: "slug",
  type: "slug",
  options: {
    source: "title",
    maxLength: 96,
    // Slug should never collide across documents of same type + same language
    isUnique: (value, context) => {
      const { document, getClient } = context;
      const client = getClient({ apiVersion: "2024-01-01" });
      return client.fetch(
        `count(*[_type == $type && slug.current == $slug && language == $language && _id != $id]) == 0`,
        {
          type: document?._type,
          slug: value,
          language: document?.language,
          id: document?._id?.replace(/^drafts\./, ""),
        },
      );
    },
  },
  validation: (Rule) => Rule.required(),
});
```

---

## Hreflang implementation

Hreflang tags are non-negotiable for international SEO.

```ts
// src/lib/seo/hreflang.ts
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";

export function buildHreflang(
  pathname: string,
  translatedSlugs?: Record<string, string>, // For dynamic routes
) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  const alternates: Record<string, string> = {};

  for (const locale of routing.locales) {
    const path = translatedSlugs?.[locale]
      ? buildLocalizedPath(pathname, locale, translatedSlugs[locale])
      : getPathname({ href: pathname, locale });

    alternates[locale] = `${baseUrl}${path}`;
  }

  // x-default points to English
  alternates["x-default"] = alternates.en;

  return alternates;
}
```

Used in `generateMetadata`:

```tsx
export async function generateMetadata({ params }) {
  const { locale, destination: slug } = await params;
  const data = await getDestination(slug, locale);

  return {
    title: data.seo.title,
    description: data.seo.description,
    alternates: {
      canonical: `/destinations/${slug}`,
      languages: buildHreflang(
        "/destinations/[destination]",
        Object.fromEntries(data.translations.map((t) => [t.language, t.slug])),
      ),
    },
  };
}
```

This emits:

```html
<link
  rel="alternate"
  hreflang="en"
  href="https://greciamejiaweddings.com/destinations/punta-cana"
/>
<link
  rel="alternate"
  hreflang="es"
  href="https://greciamejiaweddings.com/es/destinos/punta-cana"
/>
<link
  rel="alternate"
  hreflang="it"
  href="https://greciamejiaweddings.com/it/destinazioni/punta-cana"
/>
<link
  rel="alternate"
  hreflang="x-default"
  href="https://greciamejiaweddings.com/destinations/punta-cana"
/>
```

---

## Fallback strategy

When a translation is missing:

1. **UI strings (`next-intl`):** Fall back to English. Log a warning in dev. CI fails if any non-English locale has fewer keys than English.

2. **Editorial content (Sanity):** Two strategies, depending on content type:
   - **Universal content (destination overview, venue facts, FAQs):** Don't show the locale-prefixed URL if the localized document doesn't exist. Redirect to English.
   - **Market-specific content (some articles only relevant to certain markets):** Allowed to exist in only some locales. No fallback — just don't expose the URL to other locales.

3. **The `getStaticParams` for each locale** queries only documents that exist in that language. No 404s from missing translations.

```ts
// Example: only generate paths for documents that exist in that locale
export async function generateStaticParams({ params }) {
  const { locale } = await params;
  const slugs = await client.fetch(
    `*[_type == "destination" && language == $locale].slug.current`,
    { locale },
  );
  return slugs.map((slug) => ({ destination: slug }));
}
```

---

## Language switcher

The switcher in the header must know the current page's translations.

```tsx
// src/components/Layout/LanguageSwitcher.tsx
"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher({
  translations, // Passed from the page's data
}: {
  translations?: Record<string, string>; // locale → slug
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <ul>
      {routing.locales.map((locale) => (
        <li key={locale}>
          <button
            onClick={() => {
              // For dynamic routes, swap slug; for static, use next-intl's auto-translation
              const targetSlug = translations?.[locale];
              router.push(pathname, { locale });
            }}
          >
            {locale.toUpperCase()}
          </button>
        </li>
      ))}
    </ul>
  );
}
```

For dynamic routes where the slug changes per locale, the page must pass the translations map down to the switcher (typically through context or as a prop on the layout).

---

## Translation workflow

For content editors:

1. **Create content in English first** in Sanity Studio.
2. **Use the "Translations" panel** (provided by `@sanity/document-internationalization`) to spawn translations.
3. **Each translation is editable independently** — copy can diverge if a market needs it.
4. **Publish each locale separately** — a translation that's not ready yet stays in draft.
5. **Slug per locale** — when creating a translation, the slug field is editable. Auto-generate from the localized title, then refine.

For developers:

1. **Adding a new UI string** → update `en.json`, then run `pnpm i18n:check` to flag missing keys in other locales.
2. **Adding a new route** → update `pathnames` in `routing.ts` with all six locale variants.
3. **Adding a new Sanity doc type** → add it to the `schemaTypes` array in `documentInternationalization` plugin config.

---

## Sitemap considerations

Each localized URL gets its own sitemap entry. The sitemap index references per-locale sitemaps per section:

```
/sitemap.xml                           Index
├── /sitemap/pages/sitemap.xml         All locales of core pages
├── /sitemap/blog/sitemap.xml          All locales of articles
├── /sitemap/venues/sitemap.xml        All locales of venues
├── /sitemap/destinations/sitemap.xml
└── /sitemap/multicultural/sitemap.xml
```

Each entry includes `<xhtml:link rel="alternate" hreflang="..." />` for all locale versions of that URL.

See `seo-strategy.md` for the full sitemap implementation.

---

## Testing checklist

Before merging i18n work, verify:

- [ ] All routes resolve in all six locales
- [ ] Language switcher preserves the current page when switching
- [ ] Hreflang tags present and correct on every page
- [ ] No hardcoded English strings in components (run `grep -r ">.*[A-Z][a-z]" src/components/`)
- [ ] Sanity translation panel appears on all localized doc types
- [ ] `generateStaticParams` returns the correct slugs per locale
- [ ] Fallback to English when locale translation missing (and logged)
- [ ] Locale persists across navigation
- [ ] Locale persists across page refreshes
- [ ] `<html lang="...">` matches the current locale
