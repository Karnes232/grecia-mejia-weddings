# Design Vision

The visual and experiential language for Grecia Mejia Weddings.

The screenshots in `.claude/screenshots/` are the canonical reference. When this document and the screenshots disagree, the screenshots win.

---

## Brand essence

Calm luxury. Editorial restraint. Cultural fluency.

The website must feel like a Vogue editorial layered with the typographic discipline of _Architectural Digest_ and the spatial calm of an Aman resort. Nothing on the page should feel commercial. Nothing should hurry the viewer. The aesthetic borrows from print: generous margins, breathing room, hairline rules, small uppercase labels (eyebrows), and serif typography doing the heavy lifting.

What the site is **not**:

- Not floral or decorative
- Not heavily illustrated
- Not gradient-rich
- Not playful
- Not maximalist
- Not a "wedding website" in the conventional sense

What the site **is**:

- An editorial brand platform
- A house of quiet authority
- A slow, considered scroll

---

## Color system

All colors live as CSS custom properties in `src/app/globals.css` via Tailwind 4's `@theme` directive.

```css
@import "tailwindcss";

@theme {
  /* === Brand palette === */

  /* Olive — the brand signature, used on dark editorial blocks */
  --color-olive-50: oklch(0.96 0.02 110);
  --color-olive-100: oklch(0.91 0.03 110);
  --color-olive-200: oklch(0.83 0.04 110);
  --color-olive-300: oklch(0.72 0.05 112);
  --color-olive-400: oklch(0.58 0.06 114);
  --color-olive-500: oklch(0.46 0.06 115); /* Mid olive */
  --color-olive-600: oklch(0.38 0.05 115);
  --color-olive-700: oklch(
    0.3 0.04 115
  ); /* Deep olive — primary dark sections */
  --color-olive-800: oklch(0.23 0.03 115);
  --color-olive-900: oklch(0.17 0.02 115);

  /* Sage — softer green, used in supporting roles */
  --color-sage-100: oklch(0.93 0.02 130);
  --color-sage-300: oklch(0.78 0.03 130);
  --color-sage-500: oklch(0.62 0.04 130);
  --color-sage-700: oklch(0.42 0.03 130);

  /* Ivory — the page canvas, never pure white */
  --color-ivory-50: oklch(0.985 0.005 80);
  --color-ivory-100: oklch(0.97 0.008 80); /* Default page background */
  --color-ivory-200: oklch(0.95 0.01 80);
  --color-ivory-300: oklch(0.92 0.012 80);

  /* Sand — neutral surface for cards and alternate sections */
  --color-sand-100: oklch(0.93 0.015 75);
  --color-sand-200: oklch(0.89 0.02 70); /* Common section background */
  --color-sand-300: oklch(0.83 0.025 65);
  --color-sand-400: oklch(0.74 0.028 60);

  /* Champagne — gold accent. Used sparingly and only thin. */
  --color-champagne-300: oklch(0.86 0.04 85);
  --color-champagne-500: oklch(0.74 0.06 80); /* Hairline gold accents */
  --color-champagne-700: oklch(0.56 0.05 75);

  /* Ink — text colors, never pure black */
  --color-ink-900: oklch(0.2 0.01 60); /* Body text on light */
  --color-ink-700: oklch(0.38 0.012 60); /* Secondary text */
  --color-ink-500: oklch(0.55 0.01 60); /* Tertiary, eyebrow labels */
  --color-ink-300: oklch(0.78 0.005 60); /* Hairline rules on light */

  /* === Semantic aliases === */
  --color-canvas: var(--color-ivory-100);
  --color-canvas-alt: var(--color-sand-200);
  --color-canvas-dark: var(--color-olive-700);
  --color-text: var(--color-ink-900);
  --color-text-muted: var(--color-ink-700);
  --color-text-subtle: var(--color-ink-500);
  --color-text-inverse: var(--color-ivory-50);
  --color-rule: var(--color-ink-300);
  --color-rule-dark: oklch(0.4 0.03 115);
  --color-accent: var(--color-champagne-500);
}
```

### Color usage rules

- **Olive 700** is the brand signature. Use for dark editorial sections (the "Traditions we hold" block, the bottom CTA, the footer).
- **Ivory 100** is the default canvas. **Sand 200** for alternate sections to create vertical rhythm.
- **Champagne** is gold — but it is _never_ a button, _never_ a fill. It's a 1px hairline, a small icon stroke, or an inline accent character. If a junior designer's instinct is "make this gold," step back.
- **Pure white (`#fff`) is forbidden.** Always ivory-50 or warmer.
- **Pure black (`#000`) is forbidden.** Always ink-900 or warmer.
- Backgrounds should feel paper, not screen.

---

## Typography

### Font families

```css
@theme {
  --font-serif: "Cormorant Garamond", "Cormorant", Georgia, serif;
  --font-sans: "Inter", system-ui, -apple-system, sans-serif;
  --font-script: "Pinyon Script", cursive;
}
```

Loaded via `next/font/google` for performance:

```ts
// src/app/layout.tsx
import { Cormorant_Garamond, Inter, Pinyon_Script } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon",
  display: "swap",
});
```

### Type scale

| Token            | Use                    | Spec                                                                             |
| ---------------- | ---------------------- | -------------------------------------------------------------------------------- |
| `text-display`   | Hero headlines         | Cormorant Italic, clamp(3rem, 6vw, 5.5rem), line-height 1.05, tracking -0.01em   |
| `text-h1`        | Page H1                | Cormorant Italic, clamp(2.5rem, 4.5vw, 4rem), line-height 1.1, tracking -0.005em |
| `text-h2`        | Section headings       | Cormorant Italic, clamp(2rem, 3.5vw, 3rem), line-height 1.15                     |
| `text-h3`        | Subsection             | Cormorant Regular, clamp(1.5rem, 2.5vw, 2rem), line-height 1.25                  |
| `text-h4`        | Card titles            | Cormorant Regular, 1.5rem, line-height 1.3                                       |
| `text-eyebrow`   | Small uppercase labels | Inter 400, 0.75rem, tracking 0.18em, uppercase                                   |
| `text-body`      | Body copy              | Inter 400, 1rem, line-height 1.65, max 65ch                                      |
| `text-body-sm`   | Small body             | Inter 400, 0.875rem, line-height 1.6                                             |
| `text-caption`   | Captions / fine print  | Inter 400, 0.75rem, line-height 1.5                                              |
| `text-signature` | Grecia's signature     | Pinyon Script, 1.875rem                                                          |

Defined in `@theme` and exposed as Tailwind utilities (`text-display`, `text-h1`, etc.).

### Typographic rules

- **Headlines are italic by default.** Look at any screenshot — _"The art of the destination wedding"_, _"considered destinations"_, _"considered honestly"_. The italic Cormorant is the brand voice. Use italic on the _key word_, regular weight on the rest.
- **Words can be split across lines for rhythm.** _"The art / of the destination / wedding."_ Use `<br />` or CSS `display: block` on key spans. This is editorial typesetting — embrace it.
- **Eyebrows always uppercase, always tracked wide.** They label sections like print magazine sections.
- **Body text never wider than 65ch.** Editorial readability.
- **No drop caps. No oversized first letters. No fancy quote glyphs as decoration.** The discipline is the design.
- **Signature** (Pinyon Script _"Grecia"_) appears once per page maximum — at end of intro paragraphs, signed like a letter.

---

## Spacing & layout

### Container widths

| Token            | Width          | Use                                  |
| ---------------- | -------------- | ------------------------------------ |
| `container-xs`   | 36rem (576px)  | Body text, FAQs, single-column reads |
| `container-sm`   | 48rem (768px)  | Editorial intros, pull quotes        |
| `container-md`   | 64rem (1024px) | Standard section content             |
| `container-lg`   | 80rem (1280px) | Image grids, venue lists             |
| `container-xl`   | 96rem (1536px) | Full editorial spreads               |
| `container-full` | 100%           | Hero, full-bleed imagery             |

### Vertical rhythm

Sections separated by `--space-section` (default `6rem`, or `9rem` on `lg:`). Inside sections, blocks separated by `--space-block` (`2rem` / `3rem`).

Generous. Always more space than feels comfortable. If it looks too airy, it's correct.

### Grid

Most layouts use a 12-column grid with 1.5rem (mobile) / 2rem (desktop) gutters. Editorial asymmetry is encouraged — image takes 7 cols, text 4 cols offset to col 9.

---

## Motion language

### Library choices

- **Framer Motion** for component-level animation (reveal-on-scroll, hover states, layout transitions)
- **Lenis** for smooth scrolling (wraps the entire app via `SmoothScrollProvider`)
- **CSS transitions** for simple hover/focus on small elements (faster, no JS cost)

### Easing

Every transition uses one of three curves. Defined in CSS:

```css
@theme {
  --ease-silk: cubic-bezier(0.22, 1, 0.36, 1); /* Default — soft slow-out */
  --ease-editorial: cubic-bezier(0.45, 0, 0.15, 1); /* Long content reveals */
  --ease-precise: cubic-bezier(0.4, 0, 0.2, 1); /* Small UI (buttons) */
}
```

Default duration tokens:

```css
@theme {
  --duration-fast: 250ms; /* Hover states */
  --duration-medium: 600ms; /* Reveals */
  --duration-slow: 1000ms; /* Hero entrances */
  --duration-cinematic: 1400ms; /* Parallax, ambient motion */
}
```

### Motion principles

- **Slow and intentional.** A reveal that takes 200ms looks twitchy. 600ms minimum.
- **One axis at a time.** Either fade _or_ translate, rarely both with the same intensity. Fade in 100%, translate-y from 24px.
- **Soft easings only.** No bounces, no overshoots, no `ease-out` (too sudden). Always `var(--ease-silk)` by default.
- **Stagger by 80–120ms** for sibling reveals — never more, never less.
- **Parallax is subtle.** Hero images scroll at 0.7× page speed. Anything stronger feels like a portfolio site.
- **Hover transitions are 250ms.** Underline grows in, image scales 1.02, color shifts.
- **No scroll-jacking.** Lenis provides smoothness without commandeering the scroll position.
- **Respect `prefers-reduced-motion`.** Wrap motion in checks; fall back to instant fades.

### Common patterns

```tsx
// Reveal on scroll — used everywhere
<RevealOnScroll>
  <h2>Section Title</h2>
</RevealOnScroll>

// Underneath: opacity 0 → 1, translateY 24px → 0, 600ms ease-silk,
// triggered when 20% in viewport, runs once.
```

```tsx
// Image hover — used on cards
<motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
  <SanityImage ... />
</motion.div>
```

```tsx
// Hero parallax
<ParallaxImage speed={0.7} src={...} />
// Lenis-aware, transforms on scroll
```

---

## Imagery rules

- **Always editorial.** Wide crops, generous negative space in the image itself. The image is the design.
- **Sanity image pipeline + `next/image`.** Always. Never raw `<img>`. The `<SanityImage>` wrapper in `components/ui/` handles both.
- **Quality 85 default.** Hero images quality 90. Thumbnails quality 75.
- **WebP/AVIF auto.** `next/image` handles this.
- **Alt text mandatory.** Sanity schema enforces it on the `richImage` object type.
- **Aspect ratios standardized:**
  - Hero: `16/9` desktop, `4/5` mobile
  - Card: `3/4` (editorial portrait) or `4/3` (landscape)
  - Inline editorial: `3/2`
  - Square only for moodboards/thumbnails
- **Loading:** `priority` on above-the-fold only (hero + first viewport). Everything else lazy.

---

## Iconography

Avoid icons where possible. The aesthetic is type-driven; icons feel app-like.

When icons are required (navigation, social, form indicators):

- **Lucide Icons** library
- **Stroke 1.25px** — thinner than default
- **Color: inherit text color**
- **Size: 18px or 20px** for inline, 24px for standalone
- Never decorative — always functional

---

## Components — visual language

### Buttons

Three variants only:

1. **Primary** — solid olive-700 background, ivory-50 text, no border, no shadow. Hover: olive-800. Padding: `0.875rem 2rem`. No rounded corners (or maximum `2px`). Uppercase Inter 500 tracked 0.1em, 0.875rem.

2. **Outline** — 1px ink-700 border, transparent, ink-900 text. Hover: olive-700 border + olive-700 text.

3. **Link** — text with bottom border that grows in on hover from 0 to full width over 300ms.

No tertiary, no ghost, no destructive. If you find yourself wanting another variant, the design needs rethinking, not the button.

### Cards

- **No shadows.** Editorial layouts use position, type, and hairlines — never elevation.
- **Hairline borders only when separation is required.** 1px `var(--color-rule)`.
- **Hover state:** image scales 1.02, text underline grows. No card lift.

### Forms

- Inputs are bottom-bordered only (no full box). Border ink-300 → olive-700 on focus.
- Labels above input, eyebrow style.
- Error states ink color shift, no red explosions.
- Buttons are full-width on mobile, auto on desktop.

### Tables

The screenshots show tables used heavily (venue stats, when-to-wed, cultures × destinations). Treat them as editorial:

- Hairline rules between rows
- Small caps headers
- No striping, no borders around the table
- Right-aligned numerics

---

## Iconic page elements (from screenshots)

These recurring elements need consistent components:

| Element                            | Where it appears            | Implementation                                  |
| ---------------------------------- | --------------------------- | ----------------------------------------------- |
| **Plate number** (Nº 03, Plate 7)  | Hero corners, image markers | `<Eyebrow>` component, variant `plate`          |
| **Eyebrow label** (uppercase tiny) | Top of every section        | `<Eyebrow>` component                           |
| **Stats bar** (52 / 12 / 240+)     | Index pages                 | `<StatsRow>` in `ui/`                           |
| **Signature** (script "Grecia")    | End of intros               | `<Signature>` in `ui/`                          |
| **Section hairline rules**         | Between editorial blocks    | `<Divider variant="hairline">`                  |
| **Region group header**            | Destinations, venues        | `<RegionHeader>`                                |
| **Quote block**                    | Pull quotes                 | `<PullQuote>` with serif italic, no quote marks |
| **CTA block (dark)**               | Page footer of every page   | Reused `<ConsultationCTA>`                      |
| **Related journal block**          | All detail pages            | `<RelatedJournal>` with sidebar                 |
| **FAQ accordion**                  | All detail pages            | `<FAQ>` with FAQ schema generator               |

---

## Don'ts (anti-patterns)

- ❌ Drop shadows on cards
- ❌ Gradients (unless extremely subtle ivory→sand for backgrounds)
- ❌ Rounded corners larger than 4px
- ❌ Emojis anywhere
- ❌ Star ratings, badges, trust seals
- ❌ Carousels with autoplay (static editorial > sliding)
- ❌ Animated underlines that travel on hover (the underline grows from left, not slides)
- ❌ Modal popups for newsletter signup
- ❌ Cookie banners that take more than the legal minimum
- ❌ Pure white or pure black anywhere
- ❌ Decorative SVG flourishes
- ❌ Sans-serif headlines (Cormorant always)
- ❌ "Book Now" copy (use "Begin", "Request", "Speak")
- ❌ Stock photography
- ❌ Multiple typefaces for body copy (Inter only)
- ❌ Animations that loop forever (one-time reveals only)

---

## Accessibility

Luxury and accessibility are not in tension.

- **Contrast: AA minimum, AAA for body text.** Olive-700 on ivory-100 is AAA. Olive-500 on ivory is AA only — avoid for body.
- **Focus states are visible.** A 2px champagne ring on focus, never `outline: none` without replacement.
- **Reduced motion respected.** All Framer Motion components check `useReducedMotion()`.
- **Semantic HTML.** `<article>`, `<section>`, `<nav>`, `<aside>` — not `<div>` soup.
- **Alt text mandatory** at the schema level.
- **Form labels always present**, even when visually styled as eyebrows.
- **Skip-to-content** link in the layout.
- **Color is never the only signal** for state (form errors, active nav, etc.).
