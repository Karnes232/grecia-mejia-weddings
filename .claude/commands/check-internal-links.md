---
description: Audit internal link health across the content graph
---

# /check-internal-links

Audit the internal linking matrix defined in `.claude/seo-strategy.md`. Surface broken references, orphan pages, and underlinked content.

## Instructions

When the user invokes this command, run the following checks against the Sanity dataset. Surface a structured report with severity flags.

### Check 1 — Articles missing required references

Articles must reference: destination (required), service (required), 3-5 related articles (required), and optionally culture and venue.

Find articles missing any required field:

```groq
*[_type == "article" && (
  !defined(relatedDestination) ||
  !defined(relatedService) ||
  count(relatedArticles) < 3 ||
  count(relatedArticles) > 5
)] {
  _id,
  title,
  language,
  "slug": slug.current,
  "missing": [
    !defined(relatedDestination) => "relatedDestination",
    !defined(relatedService) => "relatedService",
    count(relatedArticles) < 3 => "relatedArticles (count < 3)",
    count(relatedArticles) > 5 => "relatedArticles (count > 5)"
  ]
}
```

**Severity: CRITICAL** — these articles should not have been publishable; schema validation may need to be tightened.

### Check 2 — Cross-language reference contamination

Articles reference content in a different language (e.g., English article references Italian destination).

```groq
*[_type == "article" && defined(relatedDestination)] {
  _id,
  title,
  "articleLang": language,
  "destLang": relatedDestination->language,
  "slug": slug.current
}[articleLang != destLang]
```

Repeat for `relatedCulture`, `relatedVenue`, `relatedService`, `relatedArticles[]`.

**Severity: HIGH** — confuses the user experience and breaks the i18n model.

### Check 3 — Orphan content (no inbound article references)

Destinations, cultures, venues, and services that have ZERO articles linking to them.

```groq
*[_type in ["destination", "culture", "venue", "service"] && !(_id in *[_type=="article"].relatedDestination._ref)] {
  _id,
  _type,
  title,
  language,
  "slug": slug.current
}
```

**Severity: MEDIUM** — these pages aren't getting any internal link equity from the blog. The SEO matrix in `seo-strategy.md` expects every hub to receive inbound links from articles.

### Check 4 — Over-referenced articles

Articles referenced by more than 20 other articles. Could indicate over-reliance on a single piece or anchor text manipulation.

```groq
*[_type == "article"] {
  _id,
  title,
  "slug": slug.current,
  "inboundCount": count(*[_type == "article" && references(^._id)])
}[inboundCount > 20] | order(inboundCount desc)
```

**Severity: LOW** — review for variety and anchor text diversity.

### Check 5 — Untranslated documents

Documents that exist in fewer than all 6 locales.

```groq
// Group documents by translationId, count languages
*[_type == "translation.metadata"] {
  _id,
  "languages": translations[].value->language,
  "count": count(translations)
}[count < 6] {
  _id,
  languages,
  "missingLocales": ["en","es","fr","pt","de","it"] - languages
}
```

**Severity: MEDIUM** — depending on content type. For pillar pages (destinations, cultures, services), this is HIGH severity. For articles, can be intentional market-restriction.

### Check 6 — Broken references (deleted targets)

References where the target document has been deleted.

```groq
*[_type == "article" && defined(relatedDestination) && !defined(relatedDestination->)] {
  _id,
  title,
  "brokenField": "relatedDestination"
}
// Repeat for each reference field
```

**Severity: CRITICAL** — surface immediately, these break page rendering.

## Output format

Generate a markdown report:

```markdown
# Internal Link Audit — [DATE]

## Summary

- Total articles: N
- Total destinations: N
- Total cultures: N
- Total venues: N
- Total services: N
- Issues found: N (Critical: X, High: Y, Medium: Z, Low: W)

## 🔴 Critical issues

[List with article/document IDs, titles, and remediation]

## 🟠 High-priority issues

[...]

## 🟡 Medium-priority issues

[...]

## 🟢 Informational

[...]

## Recommended actions

1. [...]
2. [...]
```

## Reference docs

- `.claude/seo-strategy.md` — the matrix being audited
- `.claude/content-model.md` — for relationship semantics
- `.claude/sanity-schema-guide.md` — for the reference field definitions

## Notes

- This command should be run weekly during high-content-velocity phases (creating 10+ articles per week)
- Critical issues should block the next publish
- After Sanity schema changes, run immediately to catch breakage
