# Content Model

The relational diagram of how every content type connects. This is the architectural blueprint that makes the "infinite SEO web" possible.

If `seo-strategy.md` is the **strategy** (why we link things), this document is the **schema** (what links to what).

---

## Entity overview

The content model has nine primary entities:

```
┌────────────────────────────────────────────────────────────────┐
│                      Site-level singletons                     │
│  SiteSettings ── Navigation ── Footer                          │
└────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                        Pillar pages (singletons)                    │
│  HomePage ── AboutPage                                              │
│  DestinationsIndex ── MulticulturalIndex ── VenuesIndex             │
│  ServicesIndex ── PortfolioIndex ── JournalIndex                    │
│  Press ── ContactPage                                               │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                     Sub-pillar entities (collections)               │
│                                                                     │
│  Destination ◄────────┐    ┌─────────► Culture                      │
│       │               │    │              │                         │
│       │           ┌───┴────┴───┐          │                         │
│       │           │            │          │                         │
│       ├───────►   Article   ◄──┼──────────┤                         │
│       │           │            │          │                         │
│       │           └───┬────┬───┘          │                         │
│       │               │    │              │                         │
│  Venue ◄──────────────┘    └────────► Service                       │
│       │                                  │                          │
│       └─────────► Wedding ◄──────────────┘                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

Each arrow represents a **Sanity reference**. Bidirectional flows are computed via reverse-reference queries.

---

## The hub entities

### `Destination`

The "where" of every wedding. Connects to everything else.

**Outbound references:**
- `relatedCultures[]` → Culture (which cultures work here)
- `relatedVenues[]` → Venue (signature venues at this destination)
- `relatedServices[]` → Service (services emphasized for this destination)
- `featuredWedding` → Wedding (showcase)

**Inbound references (queried in reverse):**
- Articles referencing this destination
- Cultures referencing this destination as compatible
- Venues with this destination as their region
- Weddings located at this destination
- Services with this destination in their target list

---

### `Culture`

The "how" of multicultural weddings. Holds tradition expertise.

**Outbound references:**
- `compatibleDestinations[]` → Destination
- `compatibleVenues[]` → Venue (venues that suit this culture well)
- `commonInterfaithPairings[]` → Culture (e.g., Indian-Christian)
- `specialists[]` → Person (officiants, rabbis, pandits)
- `featuredWedding` → Wedding

**Inbound references:**
- Articles referencing this culture
- Destinations marking this culture as compatible
- Venues marking this culture as workable
- Weddings rooted in this culture

---

### `Venue`

A specific physical location where weddings happen.

**Outbound references:**
- `region` → VenueRegion (Punta Cana, Mallorca, etc.)
- `compatibleCultures[]` → Culture (with optional ratings)
- `nearbyVenues[]` → Venue (for alternative recommendations)
- `nearbyHotels[]` → Hotel (separate doc type or embedded)
- `weddings[]` → Wedding (computed: weddings held here)

**Inbound references:**
- Destinations featuring this venue
- Cultures listing this venue as compatible
- Articles referencing this venue
- Weddings held at this venue
- Services mentioning this venue

---

### `Service`

A planning offering — destination wedding planning, design, etc.

**Outbound references:**
- `relatedDestinations[]` → Destination (top markets for this service)
- `relatedCultures[]` → Culture (cultures this service especially supports)
- `featuredCaseStudies[]` → Wedding

**Inbound references:**
- Articles linking to this service
- Destinations highlighting this service
- Cultures recommending this service

---

### `Wedding` (Portfolio item)

A case study of a real wedding. The most prestigious content type.

**Outbound references:**
- `destination` → Destination (required)
- `venue` → Venue (required)
- `culture` → Culture (or `cultures[]` for interfaith)
- `servicesUsed[]` → Service
- `relatedArticles[]` → Article (articles inspired by or covering this wedding)

**Inbound references:**
- Articles referencing this wedding as a case study
- Destinations featuring this wedding
- Cultures featuring this wedding
- Venues showcasing weddings held there
- Services using this as a case study

---

### `Article` (Journal post)

The cluster content that creates the dense link graph. Every article must reference:

**Mandatory outbound:**
- `relatedDestination` → Destination (required, 1)
- `relatedService` → Service (required, 1)
- `relatedArticles[]` → Article (required, 3–5)

**Optional but encouraged outbound:**
- `relatedCulture` → Culture (if topically relevant)
- `relatedVenue` → Venue (if topically relevant)
- `featuredWedding` → Wedding (if case-study-style)

**Inbound references:**
- All entities above pull in articles that reference them (via reverse-reference queries)

---

## The bidirectional patterns

The matrix lives because **every relationship is queryable in both directions**.

### Pattern 1: Direct reference (Article → Destination)

Article schema:
```ts
defineField({
  name: 'relatedDestination',
  type: 'reference',
  to: [{ type: 'destination' }],
  validation: (Rule) => Rule.required(),
})
```

Article query:
```groq
*[_type == "article" && slug.current == $slug][0] {
  ...,
  relatedDestination->{ title, "slug": slug.current }
}
```

### Pattern 2: Reverse reference (Destination → Articles)

When rendering a destination page, find all articles that reference it:

```groq
*[_type == "destination" && slug.current == $slug && language == $locale][0] {
  ...,
  "relatedArticles": *[
    _type == "article" 
    && references(^._id)
    && language == ^.language
  ] | order(publishedAt desc) [0...6] {
    ${articleCardFragment}
  }
}
```

The `references(^._id)` operator finds documents pointing at the current one. Combined with `language == ^.language`, we keep results within the same locale.

### Pattern 3: Bidirectional collection (Destination ↔ Cultures)

Some relationships are mutually declared on both sides:

- Destination has `compatibleCultures[]` referencing Culture
- Culture has `compatibleDestinations[]` referencing Destination

This duplication is intentional — it lets editors curate the surface from either side, and it makes querying simpler. Soft validation can check consistency in a cron job.

---

## Language scoping

Because we use **document-level localization**, every relationship must consider language:

- An English article references an English destination
- The Italian translation of that article references the Italian destination
- The two language versions of "Punta Cana" share a `translationId` but are separate documents

In queries, **always filter by `language`** when traversing references, otherwise we surface mixed-language results:

```groq
// ❌ Risky — could return EN articles on an IT page
"articles": *[_type == "article" && references(^._id)]

// ✅ Correct
"articles": *[
  _type == "article" 
  && references(^._id)
  && language == ^.language
]
```

---

## Editor workflow

When an editor adds new content, the references work like this:

### Creating a new article

1. Editor creates `article` document in Studio
2. Fills in title, body, etc.
3. **Required:** picks a destination (validation blocks publish otherwise)
4. **Required:** picks a service
5. **Required:** picks 3–5 related articles
6. **Optional:** picks a culture and/or venue
7. Publishes

The destination, culture, venue, and service pages **automatically** surface this new article on next render — no extra editorial work.

### Creating a new destination

1. Editor creates `destination` document
2. Fills in content
3. **Optional:** picks signature venues, compatible cultures
4. Publishes

Articles that reference this destination start appearing in its "From the journal" block — again, automatically.

---

## Soft references vs hard references

Some relationships could be either:

- **Hard reference:** Sanity reference field, breaks if target deleted, surfaced in Studio relationship panel
- **Soft reference:** by-slug or by-tag, more flexible, harder to maintain

**Default to hard references.** They're enforced by Sanity, surfaced visually in the Studio, and impossible to leave dangling. The few cases where we use soft refs:

- Tags (for cross-category content discovery)
- Reading-time computation (computed, not stored)
- Breadcrumbs (computed from URL, not stored as refs)

---

## Computed relationships

Some content surfaces are entirely computed:

| Surface | Computed via |
|---|---|
| "Related articles" on Article pages | Combination of explicit `relatedArticles` + algorithmic suggestions (same category, same destination) |
| Trending articles | View count from analytics ingestion (future) |
| Featured wedding on Home | `*[_type == "wedding" && featured == true]` |
| Breadcrumbs | URL parsing + Sanity slug lookup |
| Latest journal articles | `*[_type == "article"] | order(publishedAt desc)` |

Always cache aggressively — these queries get hit on every render.

---

## Tagging system (future-proofing)

For maximum SEO interconnection at the 10,000-article scale, we'll eventually need tags that cut across the primary entities:

- **Topic tags:** `cost`, `legal`, `weather`, `transportation`, `vendors`
- **Style tags:** `minimalist`, `traditional`, `bohemian`, `modern`, `classic`
- **Season tags:** `winter`, `spring`, `summer`, `autumn`
- **Scale tags:** `intimate`, `mid-size`, `large`, `multi-day`

Implementation phase 2. For phase 1, the destination + culture + venue + service references provide sufficient interconnection.

When tags arrive, they'll be a `tag` document type referenced from `Article.tags[]` and surfaced via reverse-reference on tag landing pages (`/journal/tag/[slug]`).

---

## Scale validation

At each milestone, run validation queries to maintain link graph health:

### 100 articles
- Every article has the required references → enforced by schema
- Manual audit of internal link distribution

### 500 articles
- Run `/check-internal-links` command
- Identify orphan pages (no inbound article references)
- Audit related-article distribution (no single article over-referenced)

### 1,000+ articles
- Automated dashboard tracking link graph metrics
- Per-pillar link-equity audit
- Reciprocal reference checks (Destination → Article and Article → Destination)

### 5,000+ articles
- Sharded sitemaps
- Cluster-level performance audit
- Consider introducing the tagging system

---

## Anti-patterns

- ❌ **Reference to a different-language document.** An English article must never reference a Spanish destination. The translation-aware GROQ patterns above prevent this; the schema validation should additionally enforce it.
- ❌ **Polymorphic reference fields without clear semantics.** A field that can reference "any type" is a red flag — be specific about which types are allowed.
- ❌ **Counts maintained manually.** Article counts on destination pages should be computed via GROQ, not stored.
- ❌ **Deletion without orphan check.** Before deleting a venue, find articles that reference it. The `/check-orphans` command surfaces these.
- ❌ **Circular reference chains.** If Article A references Article B references Article C references Article A, the related-articles UI surfaces a loop. The schema should enforce no self-reference; UI should de-duplicate.
- ❌ **Untranslated reference targets.** If an English article references a destination that only exists in English, the Italian translation of that article cannot link to "Italian Punta Cana" because it doesn't exist. Either (a) require all referenced entities to exist in all locales, or (b) fall back gracefully to English in the UI with a hreflang note.
