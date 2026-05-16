---
description: Scaffold a new multicultural culture page
---

# /new-culture

Create a new culture document for the `/multicultural-weddings/[culture]` section — a sub-pillar page demonstrating cultural fluency.

## Instructions

Ask the user for:

1. **Culture name** (e.g., "Indian weddings", "Jewish weddings", "Arab weddings")
2. **Slug** (e.g., `indian-weddings`, `jewish-weddings`)
3. **Cultural arc structure** — how the ceremony is organized (e.g., Indian: 7-part arc; Jewish: ketubah → chuppah → seven blessings → breaking of glass; etc.)
4. **Typical duration** (single day, weekend, multi-day)
5. **Typical guest count** (range)
6. **What is sacred** — what must absolutely be respected
7. **Compatible destinations** — where this tradition works best
8. **Common interfaith pairings** — when this tradition meets another (e.g., Indian + Christian, Jewish + Catholic)
9. **Specialist requirements** — what officiants/clergy/practitioners are needed

## Output

Generate:

1. **Sanity document scaffold** for `culture` type per `sanity-schema-guide.md`

2. **Section structure** matching `indivdual-Multicultural-Weddings.png`:
   - Hero — *"A wedding in [Culture] tradition"*
   - Quick facts (days / typical guest count / months / regions / scale)
   - Long-form intro (the editorial voice — e.g., "Five days, two hundred guests, one prayer")
   - "The [N]-part arc" — ceremony stages grid (one card per stage)
   - Pull quote
   - "[Culture-specific design block]" — e.g., "Mandap, moodboards" for Indian, "Chuppah, color study" for Jewish — moodboard cards
   - "What we hold sacred" — non-negotiables in dark olive section
   - "A [N]-day wedding, hour by hour" — full itinerary
   - "Where [culture] weddings work best" — destination compatibility grid
   - "The practical care of [N] guests" — logistics
   - "From the journal" — related articles (computed)
   - "Frequently asked" — FAQ accordion (require 5+)
   - Consultation CTA

3. **SEO fields**:
   - Meta title formula: `[Culture] Wedding Planning | Multicultural Wedding Specialist | Grecia Mejia` (≤60 chars)
   - Meta description: 140-160 chars highlighting cultural expertise + destinations + Grecia
   - OG image: 1200×630 — preferably an authentic editorial wedding image
   - H1: italic Cormorant *"A wedding in [Culture] tradition"*

4. **Internal linking plan**:
   - This culture MUST link to at least 2 destinations (compatibleDestinations)
   - At least 1 venue that suits this culture
   - 1 service (multicultural-wedding-planning)
   - 3+ articles
   - Flag content gaps

5. **Translation plan** — six locales. Culture name translation considerations (e.g., "Indian weddings" → "Bodas indias" → "Mariages indiens" → "Matrimoni indiani"). Slug translation typically required.

6. **Cultural sensitivity check** — flag any sections where the language must be reviewed by a cultural specialist before publish:
   - Religious terminology
   - Sacred objects/rituals
   - Names of ceremonies
   - Photographs of religious practices

   This is a critical step — the brand promise is cultural fluency, not cultural appropriation.

7. **Content gap analysis** — suggest 6-10 article titles that should be written to populate this culture's "From the journal" block. Mix logistics articles ("Indian wedding decor in tropical destinations"), legal/practical ("Marriage legalities for Indian weddings abroad"), and aspirational ("Designing a destination Indian wedding").

## Reference docs

- `.claude/website-structure.md` — culture URL pattern and section list
- `.claude/sanity-schema-guide.md` — culture schema reference
- `.claude/seo-strategy.md` — pillar page SEO requirements
- `.claude/screenshots/indivdual-Multicultural-Weddings.png` — canonical visual structure
- `.claude/screenshots/Multicultural-Weddings.png` — context: parent hub page

## Important

- **Cultural authenticity is the brand promise.** Use authentic terminology. If unsure of a term or a ritual's correct name, FLAG IT FOR REVIEW rather than guessing.
- Word count target: 2,500-4,000 (these are deep authority pages).
- The "What we hold sacred" section is the most important — it demonstrates that Grecia understands the non-negotiable elements of each tradition.
- For interfaith pairings, never imply that any tradition can be "lightly observed" — frame combinations as full-presence-of-both.
