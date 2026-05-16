---
description: Scaffold a new destination page (pillar-level SEO page)
---

# /new-destination

Create a new destination document — a sub-pillar page that becomes a comprehensive SEO authority for `[destination] wedding` keywords.

## Instructions

Ask the user for:

1. **Destination name** (e.g., "Punta Cana", "Amalfi Coast")
2. **Region/Country** (Caribbean, Mediterranean, Western Europe, Americas, Asia & Pacific)
3. **Slug suggestion** (kebab-case)
4. **Why this destination now** (1-2 sentence editorial framing — what makes this destination distinctive for luxury weddings)
5. **Compatible cultures** (which culture documents work here — for the "Traditions that wed beautifully here" block)
6. **Featured venues** (3-5 venue documents to surface)
7. **Best season window** (e.g., "November–April")
8. **Marriage legality note** (legal vs. symbolic ceremony rules)

## Output

Generate:

1. **Sanity document scaffold** for `destination` type with all required fields per `sanity-schema-guide.md`

2. **Section structure** matching `IndividualDestination.png`:
   - Hero — *"A wedding in [Destination]"*
   - Quick facts bar (season / climate / flight time / language / currency)
   - Long-form intro (3-4 paragraphs covering weather, geography, why this place)
   - Pull quote
   - "Six ways to wed in [Destination]" — wedding type cards
   - "Luxury venues" — venue references (with at least 3 cards)
   - "Traditions that wed beautifully here" — culture references
   - "The practical picture" — getting there, marriage legality, weather table
   - "What your guests remember" — image grid placeholders
   - "What's changed about [Destination] weddings" — trend commentary
   - "From the journal" — related articles (computed via reverse references)
   - "Frequently asked" — FAQ accordion (require 5+ for FAQPage schema)
   - Consultation CTA

3. **SEO fields**:
   - Meta title formula: `[Destination] Weddings | Luxury Destination Wedding Planning | Grecia Mejia` (≤60 chars — trim as needed)
   - Meta description: 140-160 chars highlighting the destination + Grecia's authority
   - OG image dimensions: 1200×630
   - Suggested H1 (italic Cormorant per design system)

4. **Internal linking plan**:
   - This destination MUST link to at least 1 culture page, 1 venue region, and 3 articles
   - List the existing pages this destination should link to
   - Flag any references that don't yet exist as content gaps

5. **Translation plan** — list of fields that need translation for all 6 locales (everything except proper nouns like the destination name itself, which generally stays constant). Mention slug translation per locale if any locale uses a different word for the place (e.g., Italian *Isole Vergini* for *Virgin Islands*).

6. **Content gap analysis** — based on the editorial reference articles in `website-structure.md`, suggest 5-8 article titles that should be written to populate this destination's "From the journal" block.

## Reference docs

- `.claude/website-structure.md` — destination URL pattern and section list
- `.claude/sanity-schema-guide.md` — destination schema reference
- `.claude/seo-strategy.md` — pillar page SEO requirements
- `.claude/content-model.md` — destination relationships
- `.claude/screenshots/IndividualDestination.png` — canonical visual structure
- `.claude/screenshots/destinatinPage.png` — context: how this destination will appear in the destinations index

## Important

- Destinations are pillar-level SEO pages. The content quality bar is higher than for articles. Word count target for the body sections: 2,500+ total.
- The FAQ section is non-negotiable — minimum 5 questions, answers ≥40 words each, for valid FAQPage schema.
- Every section should have an "eyebrow" label (small uppercase) per the design system.
