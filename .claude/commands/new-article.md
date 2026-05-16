---
description: Scaffold a new SEO-optimized journal article
---

# /new-article

Create a new journal article that satisfies the SEO matrix defined in `.claude/seo-strategy.md`.

## Instructions

Ask the user for:

1. **Title** (the H1 — also drives the slug suggestion)
2. **Primary topic** (which pillar does this support?)
3. **Target destination** (required reference)
4. **Target culture** (optional — required if culture-specific)
5. **Target venue** (optional)
6. **Target service** (required reference)
7. **Category** (one of the categories in `website-structure.md`)
8. **3–5 related article slugs** (or "suggest" to generate suggestions)

## Output

Generate a complete article scaffold:

1. **Sanity document** — formatted as JSON for Studio import, or as a GROQ mutation if connecting to live Sanity
2. **SEO frontmatter** — meta title (≤60 chars), meta description (≤160 chars), suggested OG image dimensions
3. **Outline** — H2/H3 structure with 6–8 H2 sections
4. **Internal link plan** — exact pages this article should link to, and where in the body those links should appear
5. **FAQ section** — at least 4 question/answer pairs relevant to the title
6. **Pre-publish checklist** — copy of the one in `seo-strategy.md`, with any items that need editor attention flagged

## Reference docs

Before generating, consult:
- `.claude/seo-strategy.md` — for the internal linking matrix
- `.claude/sanity-schema-guide.md` — for the article schema fields
- `.claude/content-model.md` — for relationship rules
- `.claude/i18n-strategy.md` — to confirm slug translation needed for all locales

## Important

- The article slug must be ≤60 chars, kebab-case, no stop words unless essential
- The meta title must include the primary keyword and the destination/culture
- Word count target: 1,500–2,500 (state this in the outline)
- If user can't provide a related-article list, generate 5 suggestions based on the topic, but flag them as needing real article references before publish
