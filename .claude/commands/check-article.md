---
description: Pre-publish checklist automation for a journal article
---

# /check-article

Run the pre-publish checklist defined in `.claude/seo-strategy.md` against a specific article. Report pass/fail for each requirement.

## Instructions

Ask the user for the article slug or `_id` to check (or default to most recently modified draft).

Run all checks below, then output a markdown report with a clear pass/fail per item.

## Checks

### Identity

- [ ] **Slug present and ≤60 chars**, kebab-case, no stop words unless essential
- [ ] **Title (H1) set and unique** — verify no other published article has the same H1
- [ ] **Single H1** — `body` Portable Text should not contain H1 style blocks (only H2/H3)

### SEO fields

- [ ] **Meta title ≤60 chars** (warn at 58+)
- [ ] **Meta description 50-160 chars** (target 140-160)
- [ ] **OG image present** (≥1200×630)
- [ ] **OG image has alt text**
- [ ] **`noindex` is false** (unless intentional)
- [ ] **Canonical URL self-resolves** (no canonical mismatches)

### Content quality

- [ ] **Word count ≥1500** (count from Portable Text body, excluding heading text)
- [ ] **Excerpt present, ≤220 chars**
- [ ] **At least 1 inline image** beyond the hero image
- [ ] **All inline images have alt text**
- [ ] **Headline hierarchy valid** — no H3 before an H2, no skipped levels
- [ ] **Category assigned**

### Internal linking (the SEO matrix)

- [ ] **`relatedDestination` set** — and resolves to a published document
- [ ] **`relatedService` set** — and resolves to a published document
- [ ] **`relatedArticles` count between 3 and 5** — all resolve to published documents
- [ ] **`relatedCulture` set if topic involves a specific culture**
- [ ] **`relatedVenue` set if topic involves a specific venue**
- [ ] **At least 3 inline internal links in body** (count Portable Text `internalLink` annotations)
- [ ] **Anchor text varied** — no internal link uses the exact same anchor more than 2× in this article

### FAQ section

- [ ] **`faqs` array has ≥4 items**
- [ ] **Each question 10-200 chars**
- [ ] **Each answer ≥40 words**

### Localization

- [ ] **Translations exist for all 6 locales** (en, es, fr, pt, de, it)
- [ ] **Each translation has a unique localized slug**
- [ ] **Each translation has its own meta title and description** (not copied from English)
- [ ] **References in each translation point to same-language documents**

### Meta

- [ ] **`publishedAt` set**
- [ ] **`author` set** (defaults to Grecia)
- [ ] **`_updatedAt` reflects recent activity** (sanity check)

### Schema markup readiness

- [ ] **Article fields complete enough for BlogPosting schema** (headline, image, datePublished, author, publisher)
- [ ] **FAQs ready for FAQPage schema** (≥4 valid Q&A pairs)
- [ ] **Breadcrumbs can be computed** (category exists)

## Output format

```markdown
# Article Pre-Publish Check — "[Article Title]"

**ID:** abc123
**Slug:** /journal/best-indian-wedding-venues-punta-cana
**Language:** en
**Status:** [READY TO PUBLISH | NEEDS WORK | CRITICAL ISSUES]

## ✅ Passing checks (X)
- ...

## ⚠️ Warnings (X)
- ...

## ❌ Blocking issues (X)
- ...

## Recommended actions
1. ...
2. ...

## Other locales
- 🇪🇸 ES: [READY | NEEDS WORK | NOT TRANSLATED]
- 🇫🇷 FR: [...]
- 🇵🇹 PT: [...]
- 🇩🇪 DE: [...]
- 🇮🇹 IT: [...]
```

## Reference docs

- `.claude/seo-strategy.md` — source of truth for the checklist
- `.claude/sanity-schema-guide.md` — for the article schema fields
- `.claude/i18n-strategy.md` — for translation requirements
- `.claude/content-model.md` — for relationship requirements

## Important

- A "warning" should not block publish, but should be flagged for editor attention
- A "blocking issue" must be resolved before the article goes live
- Translations have their own checklist run — but the English version is the source of truth and should pass cleanly first
