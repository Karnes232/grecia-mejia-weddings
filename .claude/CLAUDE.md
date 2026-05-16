# Grecia Mejia Weddings — Project Instructions

This is the primary instructions file for AI agents working on the Grecia Mejia Weddings website. Read this file first, then consult the specialized docs below as needed.

---

## What this project is

A **luxury wedding planning platform** for Grecia Mejia Weddings, positioned as a globally recognized destination and multicultural wedding planner. This is **not** a typical wedding website — it is a **luxury brand platform + massive SEO authority ecosystem** designed to scale to **3,000–10,000 interconnected articles**.

The website must communicate: elegance, exclusivity, sophistication, calm luxury, international authority, emotional storytelling, multicultural expertise.

Design language reference: Vogue Weddings × Aman Resorts × Architectural Digest. The screenshots in `.claude/screenshots/` are the canonical visual reference — consult them before making design decisions.

---

## Tech stack (non-negotiable)

- **Framework:** Next.js 16 (App Router, Turbopack)
- **React:** 19 — Server Components by default, Client Components only when needed (`'use client'` required only for interactivity/state/effects/browser APIs)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 (CSS-first config via `@theme` in `globals.css` — **no `tailwind.config.ts`**)
- **CMS:** Sanity (document-level localization via `@sanity/document-internationalization`)
- **i18n:** `next-intl` (six locales: en, es, fr, pt, de, it)
- **Hosting:** Netlify
- **Forms:** Netlify Forms (no API routes for form handling)
- **Images:** Sanity image pipeline + `next/image`
- **Animation:** Framer Motion (component-level) + Lenis (smooth scroll). GSAP only if a future case requires timeline complexity Framer can't deliver.
- **Fonts:** Cormorant Garamond (headlines) + Inter (body) + Pinyon Script (signature accent), loaded via `next/font/google`

---

## Documentation map

Every doc in `.claude/` is authoritative for its domain. When in doubt, read the relevant file before answering or coding.

| Doc                      | When to read                                                    |
| ------------------------ | --------------------------------------------------------------- |
| `file-structure.md`      | Before creating any file — confirms where it goes               |
| `website-structure.md`   | Before building routes, navigation, or sitemaps                 |
| `design-vision.md`       | Before any UI/styling work, color/typography/motion decisions   |
| `i18n-strategy.md`       | Before any translation, locale routing, or hreflang work        |
| `seo-strategy.md`        | Before writing blog content, internal linking, or schema markup |
| `sanity-schema-guide.md` | Before creating/modifying any Sanity schema                     |
| `content-model.md`       | Before establishing relationships between content types         |

Specialized skills live in `.claude/skills/` and slash commands in `.claude/commands/`.

---

## Working principles

### 1. Server Components first

Default every component to a Server Component. Only add `'use client'` when the component needs:

- React state or effects
- Browser-only APIs (window, localStorage — but see Tailwind 4 note below)
- Event handlers (onClick, onChange — though `<form action={serverAction}>` doesn't require client)
- Third-party client libraries (Framer Motion, Lenis)

When a page needs partial interactivity, isolate the client component as a leaf — keep its parent server-side.

### 2. Async params and searchParams

In Next.js 16, route params and searchParams are **Promises**. Always:

```tsx
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { locale, slug } = await params;
  const search = await searchParams;
  // ...
}
```

### 3. Page-scoped components

Components are organized **by page/domain**, not by type. See `file-structure.md` for the canonical pattern. Do not create `components/buttons/`, `components/cards/`, etc. — use `components/ui/` only for truly cross-page primitives.

### 4. Sanity is the source of truth for content

Hardcoded copy in components is a bug. Editorial copy → Sanity. UI strings (button labels, form errors, nav items) → `messages/{locale}.json`. The rule: if a content editor would ever want to change it, it goes in Sanity.

### 5. Internal linking is a first-class concern

Every blog article, venue page, destination page, and culture page must link to related content per the rules in `seo-strategy.md`. This is enforced by the `/check-internal-links` command and the `internal-linking` skill.

### 6. Multilingual from day one

Never write a route without `[locale]`. Never write a schema without considering its localization strategy. Never write a `<Link>` without using the locale-aware navigation helpers. See `i18n-strategy.md`.

### 7. Performance is part of the design

Core Web Vitals are non-negotiable. The cinematic feel must not cost LCP. Defer animation libraries, lazy-load below-the-fold imagery, prefer CSS over JS for transitions where possible, and never block the main thread with scroll handlers (Lenis handles this).

---

## What "luxury" means in code

The brief asks for cinematic, editorial, hypnotic. In practice this means:

- **Generous whitespace** — never cram. Editorial layouts breathe.
- **Type hierarchy carries the design** — Cormorant Garamond at large sizes with tight tracking is the visual anchor. Don't decorate; trust the typography.
- **Color restraint** — olive green is the brand color, but it should appear as quiet authority, not dominance. Ivory and sand are the canvas.
- **Motion is slow and intentional** — 600–1200ms easings, never bouncy. Cubic-bezier curves that feel like silk, not rubber.
- **Gold is an accent only** — thin hairline rules, small icons, never large blocks.
- **No commercial tropes** — no "Book Now" badges, no testimonial stars, no countdown timers, no promotional banners.

See `design-vision.md` for the full system.

---

## Scale considerations

This site must handle **3,000–10,000 interconnected articles** without breaking. Architectural decisions must consider:

- **ISR / on-demand revalidation** for blog content (don't try to SSG 10,000 pages at build time — use `generateStaticParams` for popular content and let the rest revalidate on demand)
- **GROQ query budgets** — list pages must paginate and project only needed fields
- **Sanity references** must be pre-resolved in queries (no client-side fetches to expand references)
- **Sitemaps split by section** when one section exceeds ~10,000 URLs (sitemap index pattern)
- **Schema files organized modularly** — never one giant `schema.ts`

---

## Anti-patterns (do not do these)

- ❌ Hardcoded English strings in components
- ❌ `tailwind.config.ts` (Tailwind 4 uses `@theme` in CSS)
- ❌ `<a href>` for internal navigation (use locale-aware `Link`)
- ❌ Fetching Sanity data in Client Components (fetch in the server parent, pass as props)
- ❌ Inline schema markup in JSX (use the schema helpers in `src/lib/schema/`)
- ❌ Creating components in `src/components/` root (always inside a domain folder)
- ❌ Skipping the `index.ts` barrel export in component folders
- ❌ One-off `console.log` debugging left in commits

---

## When you're unsure

1. Check the relevant doc in `.claude/`
2. Check existing patterns in the codebase
3. Check the screenshots for visual intent
4. Ask the user before inventing a new pattern

Patterns compound. A small inconsistency now becomes a structural problem at 1,000 articles.
