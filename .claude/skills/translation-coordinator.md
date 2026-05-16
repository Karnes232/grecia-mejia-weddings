---
name: translation-coordinator
description: Use when content is being translated across the six locales (en, es, fr, pt, de, it), when a new piece of content is being created and needs translation planning, when slugs are being designed for multilingual URLs, or when reviewing the translation panel in Sanity Studio. Ensures document-level i18n is implemented correctly and consistently.
---

# Translation Coordinator

This skill enforces the i18n strategy defined in `.claude/i18n-strategy.md`. It guides translation workflows, validates locale-specific slugs, and ensures hreflang correctness.

## When to use this skill

- A new article, destination, culture, venue, or service is being created (and will need translation)
- A locale is being added/audited
- The user asks about translation, localization, slugs in other languages, hreflang, or language switcher
- Content is being imported from another system and needs multi-locale fanout
- Sanity translation metadata appears to be corrupted or inconsistent

## Locale set (project-wide)

| Code | Language   | Status                        |
| ---- | ---------- | ----------------------------- |
| `en` | English    | **Default & source of truth** |
| `es` | Spanish    | Full                          |
| `fr` | French     | Full                          |
| `pt` | Portuguese | Full                          |
| `de` | German     | Full                          |
| `it` | Italian    | Full                          |

English is canonical. All other locales translate FROM English.

## Two translation layers

This project has two distinct content layers, each handled differently:

### Layer 1 — UI strings (`messages/{locale}.json`)

- Static button labels, form fields, nav items, error messages
- Edited by developers, committed to git
- Translation key parity must be maintained across all 6 locales

### Layer 2 — Editorial content (Sanity)

- Document-level localization via `@sanity/document-internationalization`
- Each translation is a SEPARATE document with its own `_id`, linked via `translationId`
- Edited by content team in Studio

When the skill is invoked, identify which layer is relevant and follow the appropriate procedure.

## Procedure for editorial content (Sanity)

### Adding a translation to an existing document

1. **Identify the source document** and its `language` field (typically `en`)
2. **Use the Sanity Studio "Translations" panel** — the `@sanity/document-internationalization` plugin creates a sibling document
3. **The sibling shares a `translationId`** linking back to the source — this is automatic
4. **Translate every field** — do NOT auto-copy fields and leave them in English. The schema considers the document complete only when actually translated.

### Field translation checklist

For each translated document, verify:

| Field                            | Translate?    | Notes                                                      |
| -------------------------------- | ------------- | ---------------------------------------------------------- |
| `title`                          | ✅ Yes        | The H1                                                     |
| `slug`                           | ✅ Often      | See slug rules below                                       |
| `excerpt`                        | ✅ Yes        |                                                            |
| `intro` / `body`                 | ✅ Yes        | Full Portable Text translation                             |
| `seo.title`                      | ✅ Yes        | Localized, not copied                                      |
| `seo.description`                | ✅ Yes        | Localized, not copied                                      |
| `seo.ogImage`                    | Maybe         | Often reusable; sometimes localized for cultural relevance |
| `heroImage`                      | Usually no    | Image is universal; only `alt` text needs translation      |
| `heroImage.alt`                  | ✅ Yes        | Alt text must be in document's locale                      |
| `faqs`                           | ✅ Yes        | Each Q&A pair translated                                   |
| `relatedDestination` (reference) | ✅ Swap       | Point to the SAME-LANGUAGE version of the destination      |
| `relatedCulture` (reference)     | ✅ Swap       | Point to same-language version                             |
| `relatedVenue` (reference)       | ✅ Swap       | Point to same-language version                             |
| `relatedService` (reference)     | ✅ Swap       | Point to same-language version                             |
| `relatedArticles[]`              | ✅ Swap       | Point to same-language versions                            |
| `category` (reference)           | ✅ Swap       | Same-language category                                     |
| `publishedAt`                    | Reuse         | The original publish date applies                          |
| `author`                         | Reuse or swap | Grecia Mejia is the same person regardless of locale       |

**Critical rule:** Every `reference` field must point to a document in the SAME language. Cross-language references are a critical bug — they confuse hreflang, language switching, and the user experience.

## Slug translation rules

Slug translation is one of the highest-stakes decisions per piece of content.

### When to translate slugs

| Slug type                                  | Translate?   | Examples                                                                              |
| ------------------------------------------ | ------------ | ------------------------------------------------------------------------------------- |
| Place names (proper nouns)                 | Usually keep | `punta-cana` stays `punta-cana` in most locales (Italian/Spanish may have variations) |
| Concept slugs (cultures, services)         | ✅ Translate | `indian-weddings` → `bodas-indias` → `matrimoni-indiani`                              |
| Article slugs                              | ✅ Translate | Always — slug should match the localized headline                                     |
| Path segment (in `routing.ts` `pathnames`) | ✅ Translate | `/destinations` → `/destinos` → `/destinazioni`                                       |

### Slug translation examples

| EN                                      | ES                                           | FR                                          | PT                               | DE                             | IT                                       |
| --------------------------------------- | -------------------------------------------- | ------------------------------------------- | -------------------------------- | ------------------------------ | ---------------------------------------- |
| `indian-weddings`                       | `bodas-indias`                               | `mariages-indiens`                          | `casamentos-indianos`            | `indische-hochzeiten`          | `matrimoni-indiani`                      |
| `jewish-weddings`                       | `bodas-judias`                               | `mariages-juifs`                            | `casamentos-judaicos`            | `juedische-hochzeiten`         | `matrimoni-ebraici`                      |
| `destination-wedding-planning`          | `planificacion-bodas-destino`                | `organisation-mariage-destination`          | `planejamento-casamento-destino` | `destination-hochzeitsplanung` | `pianificazione-matrimonio-destinazione` |
| `best-indian-wedding-venues-punta-cana` | `mejores-locaciones-bodas-indias-punta-cana` | `meilleurs-lieux-mariage-indien-punta-cana` | etc.                             | etc.                           | etc.                                     |

### Slug rules

- Lowercase, kebab-case in all locales (no accents in slugs — `bodas-indias` not `bodas-índias`)
- ≤60 chars after the path prefix
- Use the locale's natural way to express the concept — don't transliterate English
- ASCII only — no special characters
- Consistent terminology across the locale (don't use `bodas` in one slug and `casamientos` in another for the same word)

## Procedure for UI strings

### When a new UI string is needed

1. **Add the key to `messages/en.json` first** — English is the source
2. **Use a namespace consistent with the page or domain** — e.g., `home.hero.title`, `contact.form.email`
3. **Add the same key to all 5 other locale files** with translated values
4. **Never leave a key in only some locales** — CI should fail if there's parity drift

### When auditing UI strings

```bash
# Find keys missing in any non-English locale
jq -r 'paths(scalars) | join(".")' messages/en.json | sort > /tmp/keys_en.txt
for loc in es fr pt de it; do
  jq -r 'paths(scalars) | join(".")' messages/$loc.json | sort > /tmp/keys_$loc.txt
  diff /tmp/keys_en.txt /tmp/keys_$loc.txt && echo "$loc: OK" || echo "$loc: MISSING KEYS ABOVE"
done
```

## Hreflang validation

For every public URL, hreflang tags must be emitted listing all locale alternatives.

### What should be present in the `<head>`

For an article at `/journal/best-indian-wedding-venues-punta-cana`:

```html
<link
  rel="alternate"
  hreflang="en"
  href="https://greciamejiaweddings.com/journal/best-indian-wedding-venues-punta-cana"
/>
<link
  rel="alternate"
  hreflang="es"
  href="https://greciamejiaweddings.com/es/diario/mejores-locaciones-bodas-indias-punta-cana"
/>
<link
  rel="alternate"
  hreflang="fr"
  href="https://greciamejiaweddings.com/fr/journal/meilleurs-lieux-mariage-indien-punta-cana"
/>
<link rel="alternate" hreflang="pt" href="..." />
<link rel="alternate" hreflang="de" href="..." />
<link rel="alternate" hreflang="it" href="..." />
<link
  rel="alternate"
  hreflang="x-default"
  href="https://greciamejiaweddings.com/journal/best-indian-wedding-venues-punta-cana"
/>
```

`x-default` always points to the English version.

### Common hreflang mistakes

- **Self-reference missing** — every locale should list itself in the alternate tags
- **Asymmetric tags** — Page A links to Page B as its Spanish version, but Page B doesn't link back. Must be bidirectional.
- **Hreflang to a 404** — the target URL must actually resolve
- **Hreflang to a noindexed page** — defeats the purpose
- **Wrong language codes** — must be ISO 639-1 (`en`, `es`, not `eng`, `spa`)

## Language switcher considerations

The header language switcher must handle:

- **Static routes** (where slugs are defined in `routing.ts` `pathnames`) — switch is auto-handled by `next-intl`
- **Dynamic routes** (where slugs come from Sanity) — the page must pass `translations` data to the switcher

For a dynamic page like `/destinations/punta-cana`:

```tsx
// page.tsx
const data = await getDestination(slug, locale);
return (
  <DestinationDetailPage
    data={data}
    translations={Object.fromEntries(
      data.translations.map((t) => [t.language, t.slug]),
    )}
  />
);
```

The switcher then knows: "for IT, the slug is `punta-cana`; for ES, the slug is `punta-cana`."

If a translation doesn't exist for a locale, the switcher should either:

- Disable that locale option, OR
- Link to the parent index page in that locale (`/it/destinazioni`)

Never link to a non-existent translated URL.

## Cultural localization (beyond translation)

Some content is not purely translatable and needs localized variants:

- **Currency mentions** — EN says "USD", IT mentions "EUR" first
- **Cultural references** — A French page might emphasize Provence destinations; an English page emphasizes Punta Cana
- **Date formats** — EN: "March 15, 2026"; IT: "15 marzo 2026"
- **Honorifics & forms of address** — formal "Vous" in French, informal "tú" in Spanish for the brand voice

This skill should flag content where pure translation isn't enough and a culturally adapted variant is needed.

## Reference docs to load

- `.claude/i18n-strategy.md` — full i18n strategy
- `.claude/seo-strategy.md` — multilingual SEO requirements
- `.claude/sanity-schema-guide.md` — for translatable field definitions
- `.claude/content-model.md` — for cross-language reference rules
