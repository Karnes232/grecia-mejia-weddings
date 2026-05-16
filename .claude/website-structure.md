# Website Structure

The complete URL map, page hierarchy, and content relationships for Grecia Mejia Weddings.

This document is the **source of truth for routes**. Before creating a new route, confirm it fits this structure. Before changing this structure, update this document.

---

## URL Pattern

All routes are locale-prefixed except the default locale (`en`), which is unprefixed.

```
https://greciamejiaweddings.com/[path]              # English (default)
https://greciamejiaweddings.com/es/[path]           # Spanish
https://greciamejiaweddings.com/fr/[path]           # French
https://greciamejiaweddings.com/pt/[path]           # Portuguese
https://greciamejiaweddings.com/de/[path]           # German
https://greciamejiaweddings.com/it/[path]           # Italian
```

URL slugs are translated per locale via Sanity document-level i18n. Example:
- EN: `/destinations/punta-cana`
- ES: `/es/destinos/punta-cana`
- FR: `/fr/destinations/punta-cana`
- IT: `/it/destinazioni/punta-cana`

See `i18n-strategy.md` for the slug translation pattern.

---

## Top-Level Architecture

```
/                                          Home
├── /about                                 About Grecia
├── /destinations                          Destinations hub
│   └── /destinations/[destination]        Individual destination
├── /multicultural-weddings                Multicultural hub
│   └── /multicultural-weddings/[culture]  Individual culture
├── /venues                                Venues hub
│   └── /venues/[region]                   Region venues list
│       └── /venues/[region]/[venue]       Individual venue
├── /services                              Services hub
│   └── /services/[service]                Individual service
├── /portfolio                             Portfolio index
│   └── /portfolio/[slug]                  Individual wedding case study
├── /journal                               Blog index (called "Journal" in UI)
│   ├── /journal/category/[category]       Category archive
│   └── /journal/[slug]                    Individual article
├── /press                                 Press & recognition
├── /contact                               Consultation form
├── /privacy                               Privacy policy
└── /terms                                 Terms of service
```

---

## Page Specifications

### `/` — Home

**Purpose:** Global authority hub. First impression as an internationally recognized luxury planner.

**Sections** (top to bottom, per screenshot reference):
1. Hero — full-bleed image, headline: *"The art of the destination wedding"*
2. Atelier intro — *"An atelier devoted to the singular wedding"* with Grecia's signature
3. Where we work — destination grid (Punta Cana, Amalfi, Provence, Santorini, Mallorca + "view all")
4. Featured wedding — story card with quote
5. Traditions we hold with cultural fluency — 8-culture grid
6. Venues considered — table of select venues with region tags
7. Recent weddings — image-heavy editorial grid
8. Testimonials — paired blockquotes (2 columns)
9. Begin your wedding journey — consultation CTA
10. Footer

**Sanity doc type:** `HomePage` (singleton)

**Internal links:** to all major hubs.

---

### `/about` — About Grecia

**Purpose:** Establish authority and credibility. Trust-building, not transactional.

**Sections:**
1. Hero (portrait + statement)
2. Story — long-form editorial
3. Philosophy
4. International expertise
5. Press mentions strip
6. Consultation CTA

**Sanity doc type:** `AboutPage` (singleton)

---

### `/destinations` — Destinations Hub

**Purpose:** SEO authority hub for "destination wedding [place]" search intent. Pillar page that links to all individual destination pages.

**Sections** (per `destinatinPage.png`):
1. Hero — *"An atelier of considered destinations"*
2. Intro — *"A small atelier with a long-reach calendar"*
3. Stats bar (destinations / regions / weddings / years)
4. Region filter tabs (All / Caribbean / Mediterranean / Western Europe / Americas / Asia & Pacific)
5. Region groups, each with destination cards (large hero card + supporting tiles)
6. *"When to wed where"* — seasonal grid showing best months per region
7. *"Curating the Punta Cana wedding"* — featured destination block
8. Begin your wedding journey CTA

**Sanity doc type:** `DestinationsIndex` (singleton) — references `Destination` documents

---

### `/destinations/[destination]` — Individual Destination

**Purpose:** SEO pillar for `[destination] wedding` keyword. Comprehensive guide that becomes the authoritative resource.

**Sections** (per `IndividualDestination.png`):
1. Hero — *"A wedding in [Destination]"*
2. Quick facts bar (season / climate / flight time / language / currency)
3. Intro — long editorial: weather, geography, why this place
4. Pull quote
5. *"Six ways to wed in [Destination]"* — wedding type cards (beachfront, resort, Indian weekend, Jewish ceremony, Catholic garden, black-tie estate)
6. *"Luxury venues"* — featured venues from `/venues/[region]`
7. *"Traditions that wed beautifully here"* — relevant cultures
8. *"The practical picture"* — getting there, marriage legality, weather table
9. *"What your guests remember"* — image grid
10. *"What's changed about [Destination] weddings"* — trend commentary
11. *"From the journal"* — related articles (4 cards) + category sidebar
12. *"Frequently asked"* — FAQ accordion with FAQ schema
13. Consultation CTA

**Sanity doc type:** `Destination`

**Required destinations** (from brief):
- `punta-cana` (primary)
- `italy`
- `france`
- `spain`
- `united-states`
- `canada`
- `caribbean`
- `latin-america`
- Plus: `germany`, `england` (mentioned in brief)
- Plus regional/city pages as content scales: `amalfi`, `provence`, `santorini`, `mallorca`, `tuscany`, etc.

**Internal links required:** 1+ to `/venues/[region]`, 1+ to `/multicultural-weddings/[culture]`, 1+ to `/services/[service]`, 3-5 related articles.

---

### `/multicultural-weddings` — Multicultural Hub

**Purpose:** SEO pillar for `multicultural wedding planner`, `[culture] destination wedding`. Establishes cultural expertise.

**Sections** (per `Multicultural-Weddings.png`):
1. Hero — *"Treated with cultural fluency"*
2. Intro — *"Tradition, held by people who have lived inside it"*
3. *"A methodology in five steps"* — Listen / Map / Source / Stage / Host
4. *"Eight cultural arcs"* — culture cards (Indian, Jewish, Arab, South Asian, Christian, Interfaith, Latin, European)
5. *"When two arcs meet in one wedding"* — interfaith combinations grid
6. *"The specialists who hold each tradition"* — clergy/officiant register
7. *"From the journal"* — related articles
8. Consultation CTA

**Sanity doc type:** `MulticulturalIndex` (singleton)

---

### `/multicultural-weddings/[culture]` — Individual Culture

**Sections** (per `indivdual-Multicultural-Weddings.png`, using Indian example):
1. Hero — *"A wedding in Indian tradition"*
2. Quick facts (days / guests / months / region / scale)
3. Long-form intro — *"Five days, two hundred guests, one prayer"*
4. *"The seven-part arc"* (or appropriate cultural structure) — ceremony stages grid
5. Pull quote
6. *"Mandap, moodboards"* (or culture-appropriate design block) — moodboard cards
7. *"What we hold sacred"* — non-negotiables in dark olive section
8. *"A four-day wedding, hour by hour"* — full itinerary
9. *"Where [culture] weddings work best"* — destination compatibility grid
10. *"The practical care of [N] guests"* — logistics
11. *"From the journal"* — related articles
12. *"Frequently asked"* — FAQ with schema
13. Consultation CTA

**Sanity doc type:** `Culture`

**Required cultures** (from brief):
- `indian-weddings`
- `jewish-weddings`
- `arab-weddings`
- `christian-weddings`
- `interfaith-weddings`
- `south-asian-weddings`
- `latin-weddings`
- `european-weddings`

---

### `/venues` — Venues Hub

**Sections** (per `Wedding-Venues.png`):
1. Hero — *"A wedding register of selected"*
2. Intro — *"Houses we have worked, more than once"*
3. Stats bar
4. *"The kinds of house"* — typology grid (beach pavilions, private estates, palazzi & villas, beach clubs, châteaux, vineyards, cathedrals & chapels, garden hotels)
5. *"The register, by place"* — region cards each linking to `/venues/[region]`
6. *"From the journal"* — related articles
7. CTA

**Sanity doc type:** `VenuesIndex` (singleton)

---

### `/venues/[region]` — Region Venues

**Sections** (per `Wedding-Venues-location.png`, using Punta Cana):
1. Hero — *"The houses of [Region]"*
2. Intro — *"Three coastlines, fourteen houses"*
3. Sub-region/typology filter
4. *"Houses, selected"* — venue cards in editorial layout (alternating side, large imagery)
5. *"From the journal"* — related
6. CTA

**Sanity doc type:** `VenueRegion`

**Regions:**
- `punta-cana`
- `italy`
- `france`
- `spain`
- `caribbean`
- `united-states`
- `greece`
- (More as the calendar expands.)

---

### `/venues/[region]/[venue]` — Individual Venue

**Sections** (per `Individual-Wedding-Venues.png`, Jellyfish):
1. Hero — image strip header
2. Title + venue type / location subtitle
3. Intro paragraph + key facts row (pavilion type, season, capacity, off-site)
4. CTA inline (request brief / download venue brief)
5. *"A pavilion in the palms"* — long editorial
6. *"What we know honestly"* — capacity, what we love, honest constraints
7. *"Traditions that wed well here"* — culture compatibility table with ratings
8. *"The practical picture"* — operations + design compatibility
9. *"Where the camera goes"* — photography opportunity grid
10. *"Where your guests stay"* — nearby hotels table
11. *"From the portfolio"* — weddings held here
12. *"From the journal"* — related articles
13. *"Frequently asked"* — FAQ
14. CTA — *"Begin your wedding at [Venue]"*

**Sanity doc type:** `Venue`

**Initial venues** (Punta Cana, from screenshots):
- `jellyfish-restaurant`
- `kukua-beach-club`
- `chez-bisutti`
- `eden-roc-cap-cana`
- `tortuga-bay`
- `caleton-beach-club`
- `iglesia-nuestra-senora`

---

### `/services` — Services Hub

**Purpose:** SEO target for `wedding planner [service type]`.

**Sanity doc type:** `ServicesIndex` (singleton)

---

### `/services/[service]` — Individual Service

**Required services** (from brief):
- `destination-wedding-planning`
- `luxury-wedding-planning`
- `multicultural-wedding-planning`
- `wedding-weekend-planning`
- `venue-sourcing`
- `wedding-design`
- `event-production`
- `guest-experience`

**Sanity doc type:** `Service`

---

### `/portfolio` — Portfolio Index

**Sanity doc type:** `PortfolioIndex` (singleton) — references `Wedding` documents

---

### `/portfolio/[slug]` — Wedding Case Study

**Sections:**
1. Cinematic hero
2. Couple story
3. Destination + venue summary
4. Culture/tradition framing
5. Design concept
6. Logistics summary
7. Gallery
8. Services used
9. Related journal articles
10. CTA

**Sanity doc type:** `Wedding`

**Slug pattern:** `[descriptor]-[culture]-[destination]`
- `luxury-indian-wedding-punta-cana`
- `jewish-beach-wedding-caribbean`
- `elegant-destination-wedding-italy`

---

### `/journal` — Blog Index

**Why "Journal" not "Blog":** matches the editorial tone established in the design references. Internally we still call the Sanity doc type `Article` for clarity.

**Sections:**
1. Hero
2. Featured article
3. Category filter
4. Article grid (paginated, 12 per page)
5. Categories sidebar
6. CTA

**Sanity doc type:** `JournalIndex` (singleton) + `Article` documents

---

### `/journal/category/[category]` — Category Archive

**Categories** (from brief):
- `destination-weddings`
- `luxury-weddings`
- `punta-cana-weddings`
- `caribbean-weddings`
- `indian-weddings`
- `jewish-weddings`
- `multicultural-weddings`
- `wedding-venues`
- `wedding-costs`
- `wedding-planning-guides`
- `wedding-design`
- `wedding-trends`
- `guest-experience`
- `wedding-weekend-planning`
- `legal-requirements`

**Sanity doc type:** `ArticleCategory`

---

### `/journal/[slug]` — Article

**Required structure** (every article):
1. Hero with featured image
2. Article metadata (date, category, reading time)
3. Table of contents (sticky on desktop)
4. Article body (Portable Text with custom serializers)
5. Pull quotes inline
6. Inline image blocks with captions
7. *"Related to"* block — destination + culture + venue + service cards
8. Related articles (3-5)
9. FAQ section
10. Author block (Grecia signature)
11. CTA

**Required fields:**
- SEO URL (slug)
- Meta title (max 60 chars)
- Meta description (max 160 chars)
- H1 (single)
- H2/H3 hierarchy (enforced via Portable Text schema)
- Featured image with alt text
- Related destination (1+ reference)
- Related culture (1+ reference)
- Related venue (1+ reference)
- Related service (1+ reference)
- Related articles (3-5 references)
- FAQ items (for FAQ schema)
- Breadcrumbs (generated)

**Sanity doc type:** `Article`

See `seo-strategy.md` for the full internal linking matrix.

---

### `/press` — Press & Recognition

**Sanity doc type:** `PressPage` (singleton with press item references)

---

### `/contact` — Contact

**Form fields** (from brief):
- Name
- Email
- WhatsApp
- Country
- Desired destination
- Estimated date
- Guest count
- Wedding type
- Estimated budget
- Message

**Implementation:** Netlify Forms. See `lib/netlify/forms.ts`.

**CTA variants** (per brief):
- Request a Private Consultation
- Begin Your Wedding Journey
- Curate My Wedding Experience
- Plan Your Destination Wedding
- Speak With Grecia Mejia

---

### `/privacy` & `/terms`

**Sanity doc type:** `LegalDocument` (one doc type, two slugs).

---

## Navigation Structure

**Primary nav** (desktop, per screenshots):
- The House (→ /about)
- Destinations (→ /destinations)
- Multicultural (→ /multicultural-weddings)
- Venues (→ /venues)
- Portfolio (→ /portfolio)
- Journal (→ /journal)
- Contact (→ /contact)
- [Locale switcher: EN / ES / FR / PT / DE / IT]
- [Private Consultation button → /contact]

**Footer columns:**
- Atelier (About, Press, Journal)
- Plan (Destinations, Multicultural, Venues, Services)
- Studio (Punta Cana office, Milan office)
- Contact (email, WhatsApp, Instagram)
- Legal (Privacy, Terms)

---

## Content Relationships Diagram

```
                    Article (blog)
                    ╱  │  │  │  ╲
                   ╱   │  │  │   ╲
                  ↓    ↓  ↓  ↓    ↓
        Destination Culture Venue Service Wedding
              │      │      │      │       │
              └──────┴──────┴──────┴───────┘
                     all reference back
                     to relevant Articles
```

Every leaf content type (destination, culture, venue, service, wedding) holds references to its primary Article content. Every Article references one of each. The result: an infinite SEO web where every page reinforces its neighbors.

See `content-model.md` for the full relational schema and `seo-strategy.md` for the linking rules.
