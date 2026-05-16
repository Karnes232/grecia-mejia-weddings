---
description: Scaffold a new venue page (region + venue document)
---

# /new-venue

Create a new venue document following the editorial template from the design references.

## Instructions

Ask the user for:

1. **Venue name** (e.g., "Jellyfish Restaurant")
2. **Region** (existing region slug, e.g., `punta-cana`, or "new" to create)
3. **Venue type** (one of: beach pavilion, private estate, palazzo, villa, beach club, château, vineyard, cathedral, chapel, garden hotel)
4. **Capacity range** (min–max guests)
5. **Best season** (months or year-round)
6. **Wedding styles that work here** (multicultural compatibility — references to Culture documents)
7. **Hero image asset reference** (or "to be added in Sanity")

## Output

Generate:

1. **Sanity document scaffold** for `venue` type, with:
   - Slug suggestion (kebab-case)
   - All section objects pre-populated with placeholder structure matching `Individual-Wedding-Venues.png`
   - SEO fields with suggested title and description
   - Empty references arrays for relatedArticles, nearbyVenues, etc.

2. **Section structure** matching the screenshot:
   - Hero (image strip + title + venue type subtitle)
   - Intro paragraph
   - Quick facts row (pavilion type, season, capacity, off-site allowance)
   - Editorial body ("A pavilion in the palms" style)
   - "What we know honestly" — capacity & what we love & honest constraints
   - "Traditions that wed well here" — culture compatibility ratings
   - "The practical picture" — operations + design compatibility
   - "Where the camera goes" — photography opportunities
   - "Where your guests stay" — nearby hotels
   - "From the portfolio" — weddings held here (computed)
   - "From the journal" — related articles (computed)
   - FAQ section (require 4+)
   - CTA

3. **Translation reminders** — the venue needs to be translated to all 6 locales. Generate a list of fields that require translation vs. those that stay constant (e.g., the venue name might stay; the description must be translated).

4. **Region check** — if the region doesn't exist yet, output the region scaffold first

## Reference docs

- `.claude/website-structure.md` — for venue URL pattern and section list
- `.claude/sanity-schema-guide.md` — for venue schema reference
- `.claude/screenshots/Individual-Wedding-Venues.png` — for the canonical visual structure
- `.claude/content-model.md` — for venue relationship rules
