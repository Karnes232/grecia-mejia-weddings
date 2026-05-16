---
name: internal-linking-checker
description: Use when reviewing or writing journal articles, destination pages, culture pages, or venue pages. Validates that internal linking requirements from seo-strategy.md are satisfied. Run before recommending publish, during code review of Sanity schemas, or when an article is being drafted.
---

# Internal Linking Checker

This skill enforces the internal linking matrix defined in `.claude/seo-strategy.md`. It is the most important quality control in the project — at the 10,000-article scale, link discipline is what separates a content farm from a topical authority.

## When to use this skill

- An article is being drafted or reviewed
- A destination, culture, venue, or service page is being created
- A Sanity schema change might affect reference fields
- A bulk import of content is being prepared
- The user asks for content review, SEO check, or pre-publish audit

## The matrix (from seo-strategy.md)

### Every article MUST link to:

| Reference | Sanity field | Required | Notes |
|---|---|---|---|
| 1 destination | `relatedDestination` | ✅ Required | Schema validates |
| 1 culture | `relatedCulture` | Conditional | Required if culturally specific |
| 1 venue | `relatedVenue` | Conditional | Required if venue-specific |
| 1 service | `relatedService` | ✅ Required | Schema validates |
| 3-5 related articles | `relatedArticles[]` | ✅ Required | Min 3, max 5 |
| ≥3 inline body links | Portable Text `internalLink` annotations | ✅ Required (manual count) | To non-article pages |

### Every pillar/sub-pillar page MUST receive:

| Page type | Inbound articles surfaced | Method |
|---|---|---|
| Destination page | 4-6 | Reverse-reference GROQ |
| Culture page | 4-6 | Reverse-reference GROQ |
| Venue page | 3-4 | Reverse-reference GROQ |
| Service page | 4-6 | Reverse-reference GROQ |

## Validation procedure

When invoked, the skill performs these steps:

### Step 1 — Identify the document under review

Get the document `_type` and `_id` (or slug). Document types this skill validates:
- `article` (most rigorous validation)
- `destination`
- `culture`
- `venue`
- `service`

### Step 2 — Article validation

For an `article` document, check:

1. **`relatedDestination` is set** AND resolves to a document of type `destination` AND matches the article's `language`
2. **`relatedService` is set** AND resolves to type `service` AND matches `language`
3. **`relatedArticles` length is 3-5** AND each resolves to type `article` AND all match `language` AND none is a self-reference
4. **If article body mentions a specific culture**, `relatedCulture` should be set — flag for editor review if missing
5. **If article body mentions a specific named venue**, `relatedVenue` should be set — flag for editor review if missing
6. **Inline links**: parse the Portable Text body for `internalLink` annotations, count distinct targets, require ≥3 to non-article pages (destination/culture/venue/service)
7. **Anchor text diversity**: check that the same anchor text isn't repeated within the article

### Step 3 — Pillar/sub-pillar validation

For a `destination`, `culture`, `venue`, or `service` document, run a reverse-reference query and report inbound link count:

```groq
*[_type == "article" 
  && references($docId)
  && language == $locale
] | order(publishedAt desc)
```

Flag if count is below the minimum (4-6 for most, 3-4 for venues).

### Step 4 — Cross-language contamination check

For each reference field, verify the target's `language` matches the source's `language`. Cross-language references are a critical bug.

### Step 5 — Output the report

Use this format:

```markdown
## Internal Link Audit — [Document Title]

**Type:** article
**ID:** abc123
**Locale:** en

### Required references
✅ Destination → "Punta Cana" (en, published)
✅ Service → "Destination Wedding Planning" (en, published)
⚠️ Culture → NOT SET (article mentions "Indian" — should this be set?)
✅ Related articles → 4 articles (all valid, all en)

### Inline body links
✅ Found 5 internal links in body
   - "Punta Cana destination guide" → /destinations/punta-cana
   - "Indian wedding services" → /multicultural-weddings/indian-weddings
   - "Eden Roc Cap Cana" → /venues/punta-cana/eden-roc-cap-cana
   - "destination wedding planning" → /services/destination-wedding-planning
   - "see Sara & Vikram's wedding" → /portfolio/luxury-indian-wedding-punta-cana

### Anchor text diversity
✅ All anchor texts unique

### Cross-language check
✅ All references in same language (en)

### Status: READY (with 1 warning)
- Consider adding relatedCulture if this article is about Indian weddings specifically
```

## Common issues and resolutions

### Issue: "Article has only 2 related articles"
**Resolution:** Identify thematically adjacent articles (same destination, same culture, or same category) and surface 2-3 candidates for the editor to choose from. Never invent article slugs that don't exist.

### Issue: "relatedDestination points to a draft"
**Resolution:** The article cannot publish until its referenced destination is published. Either publish the destination first or change the reference.

### Issue: "Article references a different language destination"
**Resolution:** Use the destination's translation in the article's language. Query: `*[_type == "destination" && language == $articleLang && _id in *[_type == "translation.metadata" && $brokenDestId in translations[].value._ref][0].translations[].value._ref][0]`

### Issue: "Pillar page has only 1 inbound article"
**Resolution:** Surface this as a content gap. Recommend 3-5 article titles that would naturally link to this pillar.

### Issue: "Body has only 1 internal link"
**Resolution:** Identify mentions of relevant entities in the body text that could be linked. Suggest specific phrases and targets to the editor.

## Working with the editor

When this skill surfaces an issue, present it constructively:

- Frame as **"to make this article maximize its SEO value, add X"** — not as **"this article is broken"**
- Always offer 2-3 specific candidate links the editor can choose from
- Distinguish between **blocking issues** (schema-required) and **recommendations** (quality)
- For multilingual content, run validation for the locale being reviewed; flag if other locales might have similar gaps

## Reference docs to load

- `.claude/seo-strategy.md` — the matrix specification
- `.claude/content-model.md` — the relationship semantics
- `.claude/sanity-schema-guide.md` — the reference field definitions
