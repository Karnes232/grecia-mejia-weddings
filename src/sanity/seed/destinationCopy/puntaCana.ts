/**
 * Hand-written Punta Cana copy — the design-verbatim destination.
 *
 * English copy traces directly to `pages/destination-detail.jsx` in the design
 * bundle. Other locales translate in the same register as the existing
 * destinationsPage seed (Spotlight, Hero, etc.).
 *
 * NOTE on scope: this file is intentionally a single TypeScript object per
 * locale rather than six lengthy files — the structure mirrors the template
 * output so the seed runner treats it as a drop-in replacement.
 */

import { randomUUID } from "node:crypto";

import type { Locale } from "../../../i18n/routing";

const k = <T extends object>(obj: T) => ({ _key: randomUUID(), ...obj });

// Venue cards are references to `venue` docs (same locale). These three are the
// featured Punta Cana venues; the inline `venues.cards` copy below is retained
// only for reference and is no longer seeded.
const PC_FEATURED_VENUES = [
  "jellyfish-restaurant",
  "caleton-beach-club",
  "chez-bisutti",
] as const;

const ptBlock = (text: string) => [
  {
    _type: "block",
    _key: randomUUID(),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: randomUUID(), text, marks: [] }],
  },
];

const ptBlocks = (paragraphs: string[]) =>
  paragraphs.flatMap((para) => ptBlock(para));

// ── English (design-verbatim) ───────────────────────────────────────────
const en = {
  hero: {
    eyebrow: "The Caribbean · No. 01",
    scriptOverline: "A wedding in",
    headline: "Punta *Cana.*",
    deck: "The home atelier. Year-round flying weather, powder-sand coastlines, and the cultural fluency to host any tradition.",
    captionLeft: "Cap Cana, Dominican Republic",
    captionCenter: "Photographed January 2026",
    captionRight: "Plate I",
  },
  facts: [
    { label: "Best months", value: "November – April", sub: "Dry · breeze" },
    { label: "Off-season", value: "August – October", sub: "Hurricane risk" },
    { label: "Guest range", value: "40 – 600", sub: "No upper limit" },
    { label: "Flight time", value: "3 – 9 hours", sub: "From major hubs" },
    { label: "Languages", value: "EN · ES", sub: "French on request" },
    { label: "Currency", value: "DOP / USD", sub: "USD widely accepted" },
  ],
  story: {
    sideEyebrow: "The destination",
    sideNote:
      "A working register of what we know about weddings on the Dominican coast — written by Grecia, refined over 240 weddings.",
    headline: "Powder coastlines,\nyear-round *light.*",
    lede: "Punta Cana is the home atelier. It is where the studio began, where half of our weddings still take place, and where we have rehearsed almost every tradition we host.",
    bodyParagraphs: [
      "The wedding-side of the coast — Cap Cana, Bávaro, and the quieter stretch toward Macao — is built for celebration. Resorts know how to absorb a 300-guest baraat. Beach clubs close for a full weekend without complaint. Marriage officiants speak three languages and have presided over Hindu, Jewish, Catholic and interfaith ceremonies on the same sand within the same month.",
      "The climate is the quiet reason every couple ends up here. November through April is mid-eighties, low humidity, and breeze from the east. May is a transitional month. June to October is technically possible — and roughly thirty percent of our budget-conscious couples choose it — but we caution lightly: hurricane season is real, and we plan for it.",
      "The Dominican Republic is also, structurally, an easier place to wed than many destinations of equivalent scale. Marriage license requirements for foreign couples are clear and well-supported by every major resort. Customs allows florals, fabrics and ceremonial objects (mandap structures, chuppah poles, ketubah scrolls) through with proper paperwork.",
      "And it is generous. We have hosted four-day weddings here that span five hundred guests across three religions, with the venue staff absorbing each change of plan as if we had asked for an extra pillow.",
    ],
    pull: "Half of our weddings are here. The other half are influenced by how we plan here.",
    signatureName: "Grecia",
    signatureRole: "Founder · Cap Cana, 2026",
  },
  styles: {
    eyebrow: "Wedding inspiration",
    headline: "Six ways to wed in *Punta Cana.*",
    deck: "Each is a working blueprint we have built more than once, with venues, photographers, florists and officiants we trust.",
    items: [
      {
        numeral: "I",
        title: "The Beachfront Sunset",
        body: "A late-afternoon ceremony on white sand, finishing with cocktails on the dunes and dinner under string lights.",
        imageKey: "style-1",
      },
      {
        numeral: "II",
        title: "The Resort Pavilion",
        body: "A covered open-air pavilion ceremony — weather-proof, photographs beautifully, holds three hundred guests in comfort.",
        imageKey: "style-2",
      },
      {
        numeral: "III",
        title: "The Indian Wedding Weekend",
        body: "Three-to-five day arc: mehndi, sangeet, baraat, pheras, reception. Punta Cana absorbs this better than any destination we know.",
        imageKey: "style-3",
      },
      {
        numeral: "IV",
        title: "The Jewish Ceremony",
        body: "Chuppah at golden hour, kosher catering coordinated with the resort kitchen, multilingual officiant.",
        imageKey: "style-4",
      },
      {
        numeral: "V",
        title: "The Catholic Garden",
        body: "Cathedral or estate-chapel mass followed by a Latin reception — arras, lazo, mariachi optional.",
        imageKey: "style-5",
      },
      {
        numeral: "VI",
        title: "The Black-Tie Estate",
        body: "A formal evening wedding inside a private villa or country club. Long-table dinner, jazz quintet, dancing into the small hours.",
        imageKey: "style-6",
      },
    ],
  },
  venues: {
    eyebrow: "Selected houses",
    headline: "Luxury *venues.*",
    viewAllLabel: "View all Punta Cana venues →",
    viewAllHref: "/venues/punta-cana",
    cards: [
      {
        name: "Jellyfish Restaurant",
        tag: "Beach pavilion",
        meta: "Bávaro · Open-air",
        capacity: "40 – 220 guests",
        body: "Palm-thatched two-level pavilion on the beach, intimate evening light, photographs at every hour.",
        bestFor: "Sunset ceremony · cocktail dinner",
        imageKey: "venue-1",
      },
      {
        name: "Kukua Beach Club",
        tag: "Beach club",
        meta: "Cap Cana · Open-air",
        capacity: "80 – 400 guests",
        body: "White-sand banquet with three-event capacity — perfect for Hindu and Jewish weekends with multiple ceremonies.",
        bestFor: "Multi-day weddings · three-religion arcs",
        imageKey: "venue-2",
      },
      {
        name: "Chez Bisutti",
        tag: "Hidden estate",
        meta: "Bávaro · Private",
        capacity: "60 – 180 guests",
        body: "Hidden cove with terraced gardens, oriented for a sunset ceremony and dinner among century-old palms.",
        bestFor: "Catholic mass · Latin reception",
        imageKey: "venue-3",
      },
    ],
  },
  weddingTypes: {
    eyebrow: "Wedding types · Multicultural",
    headline: "Traditions that wed *beautifully* here.",
    deck: "Eight cultural arcs we have planned in Punta Cana, with the logistics and venues that hold each one.",
    items: [
      {
        name: "Indian *weddings*",
        body: "Mehndi · Sangeet · Baraat · Pheras. Resorts here absorb 300-guest baraats with grace.",
        href: "/multicultural/indian",
      },
      {
        name: "Jewish *weddings*",
        body: "Chuppah ceremonies on the sand, kosher catering with the resort kitchen.",
        href: "/multicultural/jewish",
      },
      {
        name: "Christian *weddings*",
        body: "Catholic and Protestant ceremonies in estate chapels or cathedral-mass formats.",
        href: "/multicultural/christian",
      },
      {
        name: "Arab *weddings*",
        body: "Zaffe processions, henna nights, multilingual officiant — fully supported.",
        href: "/multicultural/arab",
      },
      {
        name: "Interfaith *weddings*",
        body: "Two clergy. Two languages. One cohesive arc — our specialty here.",
        href: "/multicultural/interfaith",
      },
      {
        name: "Latin *weddings*",
        body: "Arras, lazo, padrinos. Bilingual receptions with mariachi or bachata.",
        href: "/multicultural/latin",
      },
      {
        name: "Hindu *weddings*",
        body: "Pheras at sunset, three-day weddings, our most-repeated arc in this destination.",
        href: "/multicultural/hindu",
      },
      {
        name: "Civil *weddings*",
        body: "Symbolic ceremonies for couples who marry legally at home — flexible, simple.",
        href: "/multicultural/civil",
      },
    ],
  },
  logistics: {
    eyebrow: "Logistics & weather",
    headline: "The *practical* picture.",
    gettingThere: {
      headline: "Getting there & getting married",
      items: [
        {
          label: "Airport",
          value:
            "Punta Cana International (PUJ) — 3 hrs from NYC, 4 hrs from Miami, 9 hrs from London & Madrid.",
        },
        {
          label: "Marriage license",
          value:
            "Available to foreign couples. Requires apostilled documents 30 days in advance; we manage the paperwork end-to-end.",
        },
        { label: "Time zone", value: "AST (GMT-4) · no daylight savings" },
        {
          label: "Visas",
          value: "Tourist card on arrival for most nationalities · USD 10",
        },
        {
          label: "Currency",
          value: "Dominican peso · USD & EUR widely accepted at resorts",
        },
        {
          label: "Tipping",
          value:
            "10% service included; additional 10% expected for excellent service",
        },
      ],
      footnote:
        "We accept full responsibility for the legal and customs side of every wedding — including the import of mandap structures, chuppah poles, and ceremonial fabrics.",
    },
    weather: {
      headline: "Weather, by month",
      intro:
        "The Caribbean dry season runs December through April. Hurricane season runs June through November — actual storms are infrequent but unpredictable.",
      months: [
        { month: "Jan", temp: "28°", conditions: "dry", season: "peak" },
        { month: "Feb", temp: "28°", conditions: "dry", season: "peak" },
        { month: "Mar", temp: "29°", conditions: "dry", season: "peak" },
        { month: "Apr", temp: "30°", conditions: "dry", season: "peak" },
        {
          month: "May",
          temp: "31°",
          conditions: "transitional",
          season: "good",
        },
        { month: "Jun", temp: "31°", conditions: "hot · wet", season: "off" },
        { month: "Jul", temp: "32°", conditions: "hot · wet", season: "off" },
        {
          month: "Aug",
          temp: "32°",
          conditions: "hurricane risk",
          season: "off",
        },
        {
          month: "Sep",
          temp: "31°",
          conditions: "hurricane risk",
          season: "off",
        },
        {
          month: "Oct",
          temp: "30°",
          conditions: "transitional",
          season: "off",
        },
        {
          month: "Nov",
          temp: "29°",
          conditions: "dry returns",
          season: "good",
        },
        { month: "Dec", temp: "28°", conditions: "dry", season: "peak" },
      ],
      footnote:
        "Our recommendation for January–April weddings: book eighteen months ahead. The peak season fills early.",
    },
  },
  guest: {
    eyebrow: "Guest experience",
    headline: "What your guests *remember.*",
    viewAllLabel: "View our guest itineraries →",
    viewAllHref: "/guest-itineraries",
    cards: [
      {
        label: "Stay",
        headline: "Five-star resorts on Cap Cana & Bávaro",
        imageKey: "guest-stay",
      },
      {
        label: "Taste",
        headline: "Dominican-Mediterranean tasting menus",
        imageKey: "guest-taste",
      },
      {
        label: "Explore",
        headline: "Catamaran sails & coastline tours",
        imageKey: "guest-explore",
      },
      {
        label: "Welcome",
        headline: "The welcome party — bachata & rum",
        imageKey: "guest-welcome",
      },
      {
        label: "Send-off",
        headline: "The morning-after brunch",
        imageKey: "guest-sendoff",
      },
    ],
  },
  trends: {
    eyebrow: "Trends · 2026",
    headline: "What's changed about *Punta Cana* weddings.",
    readMoreLabel: "Read the full essay →",
    readMoreHref: "/journal/punta-cana-trends-2026",
    items: [
      {
        title: "Multi-day weekends",
        body: "Three-to-five day arcs have replaced the single-day wedding for guests travelling more than four hours. Almost every wedding we plan in 2026 is now a weekend.",
      },
      {
        title: "Multicultural fluency",
        body: "Two-and-a-half of every four weddings in our 2026 calendar combine two cultures or two religions. The destination has adapted; resorts now staff cultural concierges.",
      },
      {
        title: "Quieter receptions",
        body: "Long-table dinners with conversation in mind. Dance floors smaller, music quieter, more time for guests to sit together.",
      },
      {
        title: "Sustainable florals",
        body: "Tropical greenery and local florals replacing imported peonies. The visual language is cleaner and the cost more honest.",
      },
      {
        title: "Private estates",
        body: "A migration from large resorts toward private villa rentals for 80-180 guest weddings — more control, more bespoke, less corporate.",
      },
      {
        title: "Welcome experiences",
        body: "Guests now arrive a full day early. The welcome party has become the unofficial second wedding — and often the most photographed.",
      },
    ],
  },
  related: {
    eyebrow: "Continue reading",
    headline: "From the *journal.*",
    articles: [
      {
        category: "Indian Weddings · Punta Cana",
        title: "Best Indian Wedding Venues in Punta Cana",
        body: "A working register of the resorts that hold a 300-guest baraat with grace.",
        imageKey: "related-1",
        href: "/journal/best-indian-wedding-venues-punta-cana",
      },
      {
        category: "Logistics · Caribbean",
        title: "When to Wed in Punta Cana: A Month-by-Month Guide",
        body: "Climate, light, hurricane risk, and the cadence of our calendar.",
        imageKey: "related-2",
        href: "/journal/when-to-wed-punta-cana",
      },
      {
        category: "Cost · Punta Cana",
        title: "What a Luxury Punta Cana Wedding Actually Costs",
        body: "A frank breakdown of 2026 budgets by guest count, with line-item ranges.",
        imageKey: "related-3",
        href: "/journal/punta-cana-wedding-cost-2026",
      },
      {
        category: "Interfaith",
        title: "Two Clergy, One Ceremony: Interfaith on the Coast",
        body: "How we structure interfaith ritual arcs in Punta Cana — without compromise.",
        imageKey: "related-4",
        href: "/journal/interfaith-coast",
      },
      {
        category: "Guest experience",
        title: "The Welcome Party: Your Wedding's Second Star",
        body: "Why the night-before reception has become the most-photographed event.",
        imageKey: "related-5",
        href: "/journal/welcome-party",
      },
    ],
    sidebarVenues: [
      { label: "Jellyfish Restaurant", href: "/venues/jellyfish" },
      { label: "Kukua Beach Club", href: "/venues/kukua" },
      { label: "Chez Bisutti", href: "/venues/chez-bisutti" },
      { label: "Eden Roc Cap Cana", href: "/venues/eden-roc-cap-cana" },
      { label: "Tortuga Bay", href: "/venues/tortuga-bay" },
    ],
    sidebarCultures: [
      { label: "Indian weddings", href: "/multicultural/indian" },
      { label: "Jewish weddings", href: "/multicultural/jewish" },
      { label: "Interfaith weddings", href: "/multicultural/interfaith" },
      { label: "Latin weddings", href: "/multicultural/latin" },
    ],
    sidebarServices: [
      { label: "Destination Planning", href: "/services/destination-planning" },
      {
        label: "Wedding Weekend Design",
        href: "/services/wedding-weekend-design",
      },
      { label: "Guest Experience", href: "/services/guest-experience" },
      { label: "Legal & Logistics", href: "/services/legal-logistics" },
    ],
  },
  faq: {
    eyebrow: "Questions, answered",
    headline: "Frequently *asked.*",
    items: [
      {
        question: "When is the best month to wed in Punta Cana?",
        answer: [
          "Statistically, our most-requested month is February. The full peak window is November through April, when the climate is dry, breezy, and mid-eighties.",
          "If you would like to wed outside this window, May is workable; June through October carries hurricane-season risk and we plan defensively, with covered venues and weather contingencies.",
        ],
      },
      {
        question: "How far in advance should we plan?",
        answer: [
          "Eighteen to twenty-four months is our standard. The studio accepts only fourteen weddings per year, and the venues we recommend book in the same lead time. We have planned weddings in six months when necessary, but the calendar shrinks.",
        ],
      },
      {
        question: "What does a Punta Cana wedding actually cost?",
        answer: [
          "A useful working range for a 2026 wedding of 100–200 guests is USD $120,000 – $450,000, all-in. We share full transparent budgets in the first consultation. Multi-day Indian and Jewish weddings sit at the upper end of this range.",
        ],
      },
      {
        question: "Are foreign-couple marriages legally recognised?",
        answer: [
          "Yes. The Dominican Republic recognises foreign-couple civil marriages, with apostilled documents submitted thirty days before the wedding. We manage the entire legal process for every couple — including translations, witnesses, and the civil officiant.",
        ],
      },
      {
        question: "Can you host Hindu, Jewish, Arab or interfaith weddings?",
        answer: [
          "Yes — and frequently. Roughly half of our Punta Cana calendar is multicultural. We have specialists for Hindu, Sikh, Muslim, Jewish, Arab, Catholic, Orthodox, Protestant and interfaith ceremonies, with kosher and halal catering coordination as standard.",
        ],
      },
      {
        question: "What languages do you work in?",
        answer: [
          "English, Spanish, French and Italian — fluently. We bring multilingual officiants for ceremonies in any of these; for Hindi, Gujarati, Punjabi, Hebrew and Arabic we partner with cultural officiants we have worked with for years.",
        ],
      },
      {
        question: "Do you accept smaller, intimate weddings?",
        answer: [
          "Our minimum guest count is 40. Below that, we are honoured to refer you to a smaller studio that specialises in elopements and micro-weddings — we will make the introduction personally.",
        ],
      },
    ],
  },
  cta: {
    eyebrow: "A private conversation —",
    headline: "*Begin* your\nPunta Cana wedding.",
    body: "Tell us your tradition, your guest count, and a rough date. Grecia writes back, personally, within five working days.",
    ctaLabel: "Request a private consultation →",
    ctaHref: "/contact",
  },
};

// ── Other locales — short-form translation of the English copy ──────────
// We keep visible labels translated and prose mostly English-derived; editors
// refine in Studio per locale. This is the scope tradeoff documented in the plan.
const es: typeof en = {
  ...en,
  hero: {
    ...en.hero,
    eyebrow: "El Caribe · N.º 01",
    scriptOverline: "Una boda en",
    deck: "El atelier de casa. Clima de vuelo todo el año, costas de arena polvo y la fluidez cultural para acoger cualquier tradición.",
    captionCenter: "Fotografiado en enero 2026",
  },
  facts: [
    { label: "Mejores meses", value: "Noviembre – Abril", sub: "Seco · brisa" },
    {
      label: "Temporada baja",
      value: "Agosto – Octubre",
      sub: "Riesgo de huracán",
    },
    { label: "Invitados", value: "40 – 600", sub: "Sin límite superior" },
    { label: "Tiempo de vuelo", value: "3 – 9 h", sub: "Desde grandes hubs" },
    { label: "Idiomas", value: "ES · EN", sub: "Francés a petición" },
    { label: "Moneda", value: "DOP / USD", sub: "USD ampliamente aceptado" },
  ],
};

const fr: typeof en = {
  ...en,
  hero: {
    ...en.hero,
    eyebrow: "Les Caraïbes · No 01",
    scriptOverline: "Un mariage à",
    deck: "L'atelier d'origine. Météo de vol toute l'année, côtes de sable poudré, et la maîtrise culturelle pour accueillir toute tradition.",
    captionCenter: "Photographié en janvier 2026",
  },
  facts: [
    { label: "Meilleurs mois", value: "Novembre – Avril", sub: "Sec · brise" },
    {
      label: "Hors saison",
      value: "Août – Octobre",
      sub: "Risque d'ouragan",
    },
    { label: "Invités", value: "40 – 600", sub: "Pas de limite supérieure" },
    { label: "Vol", value: "3 – 9 h", sub: "Depuis les grands hubs" },
    { label: "Langues", value: "FR · ES · EN", sub: "Italien sur demande" },
    { label: "Monnaie", value: "DOP / USD", sub: "USD largement accepté" },
  ],
};

const pt: typeof en = {
  ...en,
  hero: {
    ...en.hero,
    eyebrow: "O Caribe · N.º 01",
    scriptOverline: "Um casamento em",
    deck: "O ateliê de casa. Clima de voo o ano inteiro, costas de areia de pó e a fluência cultural para acolher qualquer tradição.",
    captionCenter: "Fotografado em janeiro de 2026",
  },
  facts: [
    { label: "Melhores meses", value: "Novembro – Abril", sub: "Seco · brisa" },
    {
      label: "Baixa temporada",
      value: "Agosto – Outubro",
      sub: "Risco de furacão",
    },
    { label: "Convidados", value: "40 – 600", sub: "Sem limite superior" },
    {
      label: "Tempo de voo",
      value: "3 – 9 h",
      sub: "Dos principais hubs",
    },
    { label: "Idiomas", value: "EN · ES", sub: "Francês a pedido" },
    { label: "Moeda", value: "DOP / USD", sub: "USD amplamente aceito" },
  ],
};

const de: typeof en = {
  ...en,
  hero: {
    ...en.hero,
    eyebrow: "Die Karibik · Nr. 01",
    scriptOverline: "Eine Hochzeit in",
    deck: "Das Heim-Atelier. Ganzjähriges Flugwetter, puderweiße Küsten und die kulturelle Versiertheit, jede Tradition zu beherbergen.",
    captionCenter: "Fotografiert im Januar 2026",
  },
  facts: [
    {
      label: "Beste Monate",
      value: "November – April",
      sub: "Trocken · Brise",
    },
    {
      label: "Nebensaison",
      value: "August – Oktober",
      sub: "Hurrikan-Risiko",
    },
    { label: "Gäste", value: "40 – 600", sub: "Keine Obergrenze" },
    { label: "Flugzeit", value: "3 – 9 Std.", sub: "Von großen Drehkreuzen" },
    { label: "Sprachen", value: "EN · ES", sub: "Französisch auf Anfrage" },
    { label: "Währung", value: "DOP / USD", sub: "USD weit verbreitet" },
  ],
};

const it: typeof en = {
  ...en,
  hero: {
    ...en.hero,
    eyebrow: "I Caraibi · N. 01",
    scriptOverline: "Un matrimonio a",
    deck: "L'atelier di casa. Meteo di volo tutto l'anno, coste di sabbia polverosa, e la fluidità culturale per accogliere ogni tradizione.",
    captionCenter: "Fotografato a gennaio 2026",
  },
  facts: [
    {
      label: "Mesi migliori",
      value: "Novembre – Aprile",
      sub: "Secco · brezza",
    },
    {
      label: "Bassa stagione",
      value: "Agosto – Ottobre",
      sub: "Rischio di uragano",
    },
    { label: "Ospiti", value: "40 – 600", sub: "Nessun limite superiore" },
    { label: "Tempo di volo", value: "3 – 9 h", sub: "Dai grandi hub" },
    { label: "Lingue", value: "EN · ES", sub: "Francese su richiesta" },
    { label: "Valuta", value: "DOP / USD", sub: "USD ampiamente accettato" },
  ],
};

const COPY: Record<Locale, typeof en> = { en, es, fr, pt, de, it };

// ── Builder ─────────────────────────────────────────────────────────────
export function buildPuntaCanaDoc(locale: Locale) {
  const c = COPY[locale];
  return {
    name: "Punta Cana",
    slug: { _type: "slug", current: "punta-cana" },
    region: "caribbean",
    country: "Dominican Republic",
    subLocations: "Cap Cana · Casa de Campo · Bávaro",
    number: "01",
    tile: "featured",
    hero: c.hero,
    facts: c.facts.map((f) => k(f)),
    story: (() => {
      const { bodyParagraphs, ...rest } = c.story;
      return { ...rest, body: ptBlocks(bodyParagraphs) };
    })(),
    styles: {
      eyebrow: c.styles.eyebrow,
      headline: c.styles.headline,
      deck: c.styles.deck,
      items: c.styles.items.map((s) => k(s)),
    },
    venues: {
      eyebrow: c.venues.eyebrow,
      headline: c.venues.headline,
      viewAllLabel: c.venues.viewAllLabel,
      viewAllHref: c.venues.viewAllHref,
      cards: PC_FEATURED_VENUES.map((slug) =>
        k({ _type: "reference", _ref: `venue-${slug}-${locale}` }),
      ),
    },
    weddingTypes: {
      eyebrow: c.weddingTypes.eyebrow,
      headline: c.weddingTypes.headline,
      deck: c.weddingTypes.deck,
      items: c.weddingTypes.items.map((w) => k(w)),
    },
    logistics: {
      eyebrow: c.logistics.eyebrow,
      headline: c.logistics.headline,
      gettingThere: {
        headline: c.logistics.gettingThere.headline,
        items: c.logistics.gettingThere.items.map((i) => k(i)),
        footnote: c.logistics.gettingThere.footnote,
      },
      weather: {
        headline: c.logistics.weather.headline,
        intro: c.logistics.weather.intro,
        months: c.logistics.weather.months.map((m) => k(m)),
        footnote: c.logistics.weather.footnote,
      },
    },
    guest: {
      eyebrow: c.guest.eyebrow,
      headline: c.guest.headline,
      viewAllLabel: c.guest.viewAllLabel,
      viewAllHref: c.guest.viewAllHref,
      cards: c.guest.cards.map((card) => k(card)),
    },
    trends: {
      eyebrow: c.trends.eyebrow,
      headline: c.trends.headline,
      readMoreLabel: c.trends.readMoreLabel,
      readMoreHref: c.trends.readMoreHref,
      items: c.trends.items.map((t) => k(t)),
    },
    related: {
      eyebrow: c.related.eyebrow,
      headline: c.related.headline,
      articles: c.related.articles.map((a) => k(a)),
      sidebarVenues: c.related.sidebarVenues.map((v) => k(v)),
      sidebarCultures: c.related.sidebarCultures.map((v) => k(v)),
      sidebarServices: c.related.sidebarServices.map((v) => k(v)),
    },
    faq: {
      eyebrow: c.faq.eyebrow,
      headline: c.faq.headline,
      items: c.faq.items.map((item) =>
        k({
          question: item.question,
          answer: ptBlocks(item.answer),
        }),
      ),
    },
    cta: c.cta,
  };
}
