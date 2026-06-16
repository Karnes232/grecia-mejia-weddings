import { type Locale } from "../../../i18n/routing";

import { type VenueCopy } from "./shared";

/**
 * The seven Punta Cana venues. Jellyfish Restaurant is fully detailed across
 * the six locales (the reference venue); the other six are seeded as stubs
 * (region card + header + facts + a short overview + CTA) for editors to flesh
 * out later. Card fields here are the single source for the region list.
 */

const LOCALES: Locale[] = ["en", "es", "fr", "pt", "de", "it"];

// ── Per-locale labels ───────────────────────────────────────────────────────
type TagKey = "pavilion" | "club" | "estate" | "resort" | "cathedral";
type Labels = {
  capacity: string;
  bestFor: string;
  multicultural: string;
  guests: string;
  tag: Record<TagKey, string>;
};

const L: Record<Locale, Labels> = {
  en: { capacity: "Capacity", bestFor: "Best for", multicultural: "Multicultural", guests: "guests", tag: { pavilion: "Beach pavilion", club: "Beach club", estate: "Private estate", resort: "Resort partner", cathedral: "Cathedral" } },
  es: { capacity: "Capacidad", bestFor: "Ideal para", multicultural: "Multicultural", guests: "invitados", tag: { pavilion: "Pabellón de playa", club: "Club de playa", estate: "Finca privada", resort: "Resort asociado", cathedral: "Catedral" } },
  fr: { capacity: "Capacité", bestFor: "Idéal pour", multicultural: "Multiculturel", guests: "invités", tag: { pavilion: "Pavillon de plage", club: "Beach club", estate: "Domaine privé", resort: "Resort partenaire", cathedral: "Cathédrale" } },
  pt: { capacity: "Capacidade", bestFor: "Ideal para", multicultural: "Multicultural", guests: "convidados", tag: { pavilion: "Pavilhão de praia", club: "Clube de praia", estate: "Propriedade privada", resort: "Resort parceiro", cathedral: "Catedral" } },
  de: { capacity: "Kapazität", bestFor: "Am besten für", multicultural: "Multikulturell", guests: "Gäste", tag: { pavilion: "Strandpavillon", club: "Beach Club", estate: "Privatanwesen", resort: "Partner-Resort", cathedral: "Kathedrale" } },
  it: { capacity: "Capienza", bestFor: "Ideale per", multicultural: "Multiculturale", guests: "ospiti", tag: { pavilion: "Padiglione sulla spiaggia", club: "Beach club", estate: "Tenuta privata", resort: "Resort partner", cathedral: "Cattedrale" } },
};

type VBase = {
  slug: string;
  name: string;
  number: string;
  tagKey: TagKey;
  place: string;
  capacity: string;
};

// Seed scaffolding: the three venues kept for Punta Cana. Jellyfish stays at
// index 0 (it carries the full detail copy); Caleton + Chez seed as stubs.
export const VENUE_BASE: VBase[] = [
  { slug: "jellyfish-restaurant", name: "Jellyfish Restaurant", number: "01", tagKey: "pavilion", place: "Bávaro", capacity: "40 – 220" },
  { slug: "caleton-beach-club", name: "Caleton Beach Club", number: "02", tagKey: "club", place: "Cap Cana", capacity: "120 – 500" },
  { slug: "chez-bisutti", name: "Chez Bisutti", number: "03", tagKey: "estate", place: "Bávaro", capacity: "60 – 180" },
];

export const PUNTA_CANA_VENUE_ORDER = VENUE_BASE.map((v) => v.slug);

type VText = { locDesc: string; blurb: string; bestFor: string; traditions: string };

// Order matches VENUE_BASE: [Jellyfish, Caleton, Chez Bisutti].
const VTEXT: Record<Locale, VText[]> = {
  en: [
    { locDesc: "Open-air", blurb: "Palm-thatched two-level pavilion directly on the beach, oriented for sunset and lit by candle and string light through the evening. Intimate by Punta Cana standards.", bestFor: "Sunset ceremony · cocktail dinner", traditions: "Indian, Jewish, Catholic" },
    { locDesc: "Beach", blurb: "Generous capacity with a Mediterranean kitchen, terraced beach access, and the most flexible all-weather contingency among the beach clubs.", bestFor: "Multi-event weekends", traditions: "All eight traditions" },
    { locDesc: "Hidden cove", blurb: "A hidden cove flanked by century-old palms, with terraced gardens — the quietest of the Bávaro register.", bestFor: "Catholic mass · Latin reception", traditions: "Catholic · Civil · Interfaith" },
  ],
  es: [
    { locDesc: "Al aire libre", blurb: "Pabellón de dos niveles con techo de palma sobre la playa, orientado al atardecer e iluminado con velas. Íntimo para los estándares de Punta Cana.", bestFor: "Ceremonia al atardecer · cena cóctel", traditions: "India, judía, católica" },
    { locDesc: "Playa", blurb: "Capacidad generosa con cocina mediterránea, acceso aterrazado a la playa y el plan para cualquier clima más flexible entre los clubes de playa.", bestFor: "Fines de semana de varios eventos", traditions: "Las ocho tradiciones" },
    { locDesc: "Cala escondida", blurb: "Una cala escondida flanqueada por palmeras centenarias, con jardines aterrazados: la más tranquila del registro de Bávaro.", bestFor: "Misa católica · recepción latina", traditions: "Católica · Civil · Interreligiosa" },
  ],
  fr: [
    { locDesc: "En plein air", blurb: "Pavillon à deux niveaux au toit de palme sur la plage, orienté au coucher du soleil et éclairé à la bougie. Intime selon les standards de Punta Cana.", bestFor: "Cérémonie au coucher du soleil · dîner cocktail", traditions: "Indien, juif, catholique" },
    { locDesc: "Plage", blurb: "Grande capacité avec cuisine méditerranéenne, accès à la plage en terrasses et le plan tous-temps le plus souple parmi les beach clubs.", bestFor: "Week-ends à plusieurs événements", traditions: "Les huit traditions" },
    { locDesc: "Crique cachée", blurb: "Une crique cachée bordée de palmiers centenaires, avec des jardins en terrasses — le plus calme du registre de Bávaro.", bestFor: "Messe catholique · réception latine", traditions: "Catholique · Civil · Interconfessionnel" },
  ],
  pt: [
    { locDesc: "Ao ar livre", blurb: "Pavilhão de dois níveis com cobertura de palha na praia, orientado para o pôr do sol e iluminado por velas. Íntimo para os padrões de Punta Cana.", bestFor: "Cerimónia ao pôr do sol · jantar cocktail", traditions: "Indiano, judaico, católico" },
    { locDesc: "Praia", blurb: "Capacidade generosa com cozinha mediterrânica, acesso à praia em socalcos e o plano para todas as condições mais flexível entre os clubes de praia.", bestFor: "Fins de semana de vários eventos", traditions: "As oito tradições" },
    { locDesc: "Enseada escondida", blurb: "Uma enseada escondida ladeada por palmeiras centenárias, com jardins em socalcos — a mais tranquila do registo de Bávaro.", bestFor: "Missa católica · receção latina", traditions: "Católica · Civil · Inter-religiosa" },
  ],
  de: [
    { locDesc: "Open-Air", blurb: "Zweistöckiger, palmgedeckter Pavillon am Strand, auf den Sonnenuntergang ausgerichtet und mit Kerzen beleuchtet. Intim nach Punta-Cana-Maßstäben.", bestFor: "Zeremonie zum Sonnenuntergang · Cocktail-Dinner", traditions: "Indisch, jüdisch, katholisch" },
    { locDesc: "Strand", blurb: "Großzügige Kapazität mit mediterraner Küche, terrassiertem Strandzugang und dem flexibelsten Allwetterplan unter den Beach Clubs.", bestFor: "Wochenenden mit mehreren Veranstaltungen", traditions: "Alle acht Traditionen" },
    { locDesc: "Versteckte Bucht", blurb: "Eine versteckte Bucht mit jahrhundertealten Palmen und terrassierten Gärten — der ruhigste Ort im Bávaro-Verzeichnis.", bestFor: "Katholische Messe · lateinamerikanischer Empfang", traditions: "Katholisch · Standesamtlich · Interreligiös" },
  ],
  it: [
    { locDesc: "All'aperto", blurb: "Padiglione a due livelli con tetto di palma sulla spiaggia, orientato al tramonto e illuminato da candele. Intimo per gli standard di Punta Cana.", bestFor: "Cerimonia al tramonto · cena cocktail", traditions: "Indiano, ebraico, cattolico" },
    { locDesc: "Spiaggia", blurb: "Capienza generosa con cucina mediterranea, accesso alla spiaggia su terrazze e il piano per ogni meteo più flessibile tra i beach club.", bestFor: "Weekend con più eventi", traditions: "Tutte e otto le tradizioni" },
    { locDesc: "Cala nascosta", blurb: "Una cala nascosta fiancheggiata da palme secolari, con giardini terrazzati — la più tranquilla del registro di Bávaro.", bestFor: "Messa cattolica · ricevimento latino", traditions: "Cattolico · Civile · Interreligioso" },
  ],
};

function cardFields(i: number, locale: Locale) {
  const v = VENUE_BASE[i];
  const lab = L[locale];
  const tx = VTEXT[locale][i];
  return {
    name: v.name,
    region: "punta-cana",
    number: v.number,
    tag: lab.tag[v.tagKey],
    location: `${v.place} · ${tx.locDesc}`,
    cardBlurb: tx.blurb,
    cardMeta: [
      { label: lab.capacity, value: `${v.capacity} ${lab.guests}` },
      { label: lab.bestFor, value: tx.bestFor },
      { label: lab.multicultural, value: tx.traditions },
    ],
  };
}

// ── Stub detail (the six non-Jellyfish venues) ──────────────────────────────
const STUB_HEADER: Record<Locale, { ctaLabel: string; gallery: string }> = {
  en: { ctaLabel: "Request a site visit", gallery: "View full gallery" },
  es: { ctaLabel: "Solicitar una visita", gallery: "Ver la galería completa" },
  fr: { ctaLabel: "Demander une visite", gallery: "Voir toute la galerie" },
  pt: { ctaLabel: "Solicitar uma visita", gallery: "Ver a galeria completa" },
  de: { ctaLabel: "Eine Besichtigung anfragen", gallery: "Galerie ansehen" },
  it: { ctaLabel: "Richiedere un sopralluogo", gallery: "Vedi la galleria" },
};

const STUB_OVERVIEW_LABEL: Record<Locale, { side: string; headline: string }> = {
  en: { side: "The venue", headline: "A working *note.*" },
  es: { side: "La sede", headline: "Una nota de *trabajo.*" },
  fr: { side: "Le lieu", headline: "Une note de *travail.*" },
  pt: { side: "O local", headline: "Uma nota de *trabalho.*" },
  de: { side: "Der Ort", headline: "Eine Arbeits*notiz.*" },
  it: { side: "La sede", headline: "Una nota di *lavoro.*" },
};

const STUB_CTA: Record<Locale, { eyebrow: string; body: string; ctaLabel: string }> = {
  en: { eyebrow: "A private conversation —", body: "Tell us your tradition, guest count, and a rough date. Grecia writes back, personally, within five working days.", ctaLabel: "Request a site visit" },
  es: { eyebrow: "Una conversación privada —", body: "Cuéntenos su tradición, el número de invitados y una fecha aproximada. Grecia responde, personalmente, en cinco días laborables.", ctaLabel: "Solicitar una visita" },
  fr: { eyebrow: "Une conversation privée —", body: "Dites-nous votre tradition, le nombre d'invités et une date approximative. Grecia vous répond, personnellement, sous cinq jours ouvrés.", ctaLabel: "Demander une visite" },
  pt: { eyebrow: "Uma conversa privada —", body: "Diga-nos a sua tradição, o número de convidados e uma data aproximada. Grecia responde, pessoalmente, em cinco dias úteis.", ctaLabel: "Solicitar uma visita" },
  de: { eyebrow: "Ein privates Gespräch —", body: "Sagen Sie uns Ihre Tradition, die Gästezahl und ein ungefähres Datum. Grecia antwortet persönlich innerhalb von fünf Werktagen.", ctaLabel: "Eine Besichtigung anfragen" },
  it: { eyebrow: "Una conversazione privata —", body: "Diteci la vostra tradizione, il numero di ospiti e una data approssimativa. Grecia risponde, personalmente, entro cinque giorni lavorativi.", ctaLabel: "Richiedere un sopralluogo" },
};

function buildStubVenue(i: number, locale: Locale): VenueCopy {
  const card = cardFields(i, locale);
  const v = VENUE_BASE[i];
  const sh = STUB_HEADER[locale];
  const ol = STUB_OVERVIEW_LABEL[locale];
  const cta = STUB_CTA[locale];
  return {
    ...card,
    header: {
      eyebrow: `№ ${v.number} · ${card.tag} · ${v.place}`,
      headline: `${v.name}.`,
      location: card.location,
      deck: card.cardBlurb,
      galleryLabel: sh.gallery,
      ctaLabel: sh.ctaLabel,
      ctaHref: "/contact",
    },
    facts: card.cardMeta.map((m) => ({ label: m.label, value: m.value, sub: "" })),
    overview: {
      sideLabel: ol.side,
      sideNote: "",
      headline: ol.headline,
      lede: card.cardBlurb,
      bodyParagraphs: [],
    },
    cta: {
      eyebrow: cta.eyebrow,
      headline: `*Begin* your wedding at ${v.name}.`,
      body: cta.body,
      ctaLabel: cta.ctaLabel,
      ctaHref: "/contact",
    },
  };
}

// ── Jellyfish Restaurant — full detail per locale ───────────────────────────
// (Card fields merged in at assembly; this holds only the detail sections.)
type JellyfishDetail = Omit<
  VenueCopy,
  | "name"
  | "region"
  | "number"
  | "tag"
  | "location"
  | "cardBlurb"
  | "cardMeta"
>;

const JELLYFISH_EN: JellyfishDetail = {
    header: {
      eyebrow: "№ 01 · Beach pavilion · Bávaro",
      headline: "Jellyfish *Restaurant.*",
      location: "Bávaro · Punta Cana · Dominican Republic",
      deck: "A palm-thatched two-level pavilion sitting directly on the beach in Bávaro — intimate by Punta Cana standards, and the studio's most-requested venue for sunset ceremonies of one-hundred-and-fifty guests or fewer.",
      galleryLabel: "View full gallery",
      ctaLabel: "Request a site visit",
      ctaHref: "/contact",
    },
    facts: [
      { label: "Capacity", value: "40 – 220", sub: "Seated dinner" },
      { label: "Setting", value: "Beach pavilion", sub: "Open-air, two-level" },
      { label: "Best season", value: "Nov – April", sub: "Dry · breezy" },
      { label: "Photography", value: "All-light", sub: "Sunset oriented" },
      { label: "Catering", value: "In-house", sub: "Plus visiting chefs" },
      { label: "Accommodation", value: "Off-site", sub: "Resort partners nearby" },
    ],
    overview: {
      sideLabel: "The venue",
      sideNote: "The studio has planned forty-two weddings at Jellyfish since 2013. A working note on every detail we know about it.",
      headline: "A pavilion in the *palms.*",
      lede: "Jellyfish is the venue couples ask for by name. A two-level palm-thatched pavilion that sits on the sand of Bávaro Beach, with an open-air ground level for the ceremony and a covered second floor for the reception.",
      bodyParagraphs: [
        "The building, originally a restaurant, has been operating as a wedding venue for fifteen years and was built for it. The sand-floor lower deck holds a ceremony of up to two-hundred-and-twenty guests; the upper deck holds the same number for a seated dinner, with a built-in bar, kitchen pass, and discreet AV infrastructure.",
        "We have planned weddings here in every tradition: Catholic, Hindu, Jewish, Arab, interfaith — Jellyfish absorbs them with grace. The general manager, Carlos, has been at the venue for nine years and is one of the four or five people in Punta Cana we trust with a weekend on short notice.",
        "The only honest constraint is the size. Beyond two-hundred-and-twenty guests, the pavilion stops feeling intimate; for weddings approaching three-hundred we point couples toward Kukua or Caleton, both five minutes south.",
      ],
      pull: "The venue couples ask for by name.",
    },
    capacity: {
      eyebrow: "A working brief",
      headline: "What we know *honestly.*",
      meter: {
        title: "Capacity",
        sub: "Seated dinner · two-level pavilion",
        marks: ["0", "40", "110", "220", "300"],
        fillLeft: 15,
        fillWidth: 68,
        recs: [
          { label: "Studio recommendation", value: "110 – 180 guests", body: "The pavilion sits most beautifully at this scale — both decks busy, neither cramped, the staff-to-guest ratio right." },
          { label: "Hard ceiling", value: "220 guests", body: "Beyond this, the pavilion stops feeling intimate. We recommend Kukua or Caleton for 240+ guest weddings." },
        ],
      },
      loves: {
        title: "What we love",
        items: [
          "Two-level pavilion separates ceremony and dinner without leaving the venue",
          "West-facing orientation — the ceremony aisle catches the sunset directly",
          "The kitchen handles Hindu, Jewish, and kosher catering with discipline",
          "Built-in covered upper deck — bad weather doesn't ruin the reception",
          "Carlos, the general manager, has been here nine years; staff turns over slowly",
          "Photographs in every light; the sand-floor ceremony reads as cinema",
          "Easy access from Cap Cana, Bávaro and Punta Cana airport (PUJ)",
        ],
      },
      constraints: {
        title: "Honest constraints",
        items: [
          "Capacity ceiling — couples expecting 240+ guests should not book here",
          "No on-site accommodation. Guests stay at one of three nearby resorts (10–15 min)",
          "Public beachfront access on the side; the beach stays open during the day",
          "Limited bridal-prep suite — the bride's party typically prep at their hotel",
          "Music curfew at 1 a.m. — bound by the Bávaro noise ordinance",
          "Difficult parking for guest cars; coach transfers strongly recommended",
        ],
      },
    },
    compatibility: {
      eyebrow: "Wedding style compatibility",
      headline: "Traditions that wed *well* here.",
      intro: "How Jellyfish holds each of the eight traditions in the studio's register. Star ratings reflect our experience, not a marketing matrix.",
      items: [
        { name: "Indian Weddings", sub: "Hindu, Sikh, Punjabi, Gujarati", rating: 5, note: "Up to ~180 guests; baraat works on the sand approach" },
        { name: "Catholic & Christian", sub: "Mass off-site, reception here", rating: 5, note: "Mass at Iglesia Nuestra Señora, 30 min away" },
        { name: "Jewish Weddings", sub: "Chuppah on the sand", rating: 4, note: "Kitchen accommodates kosher with planning" },
        { name: "Interfaith", sub: "Two clergy, one arc", rating: 5, note: "The studio's specialty here" },
        { name: "Latin Weddings", sub: "Arras, lazo, padrinos", rating: 5, note: "Bilingual reception, mariachi possible" },
        { name: "Civil & Symbolic", sub: "Quick, beautiful, secular", rating: 4, note: "Officiant arranged by the studio" },
        { name: "Arab Weddings", sub: "Zaffe, katb el-kitab", rating: 3, note: "Capacity limit prevents larger Lebanese weddings" },
        { name: "Sikh Anand Karaj", sub: "Granthi-led ceremony", rating: 3, note: "Logistics of the Guru Granth Sahib require advance work" },
      ],
    },
    logistics: {
      eyebrow: "Logistics & design compatibility",
      headline: "The *practical* picture.",
      blocks: [
        {
          title: "Operations",
          rows: [
            { label: "Address", value: "Plaza Bávaro Sunset, Bávaro 23000, Dominican Republic" },
            { label: "From PUJ airport", value: "25 minutes by car" },
            { label: "From Cap Cana", value: "15 minutes by car" },
            { label: "Indoor option", value: "Upper deck is covered (palm-thatched); no fully indoor option" },
            { label: "Music curfew", value: "1:00 AM (Bávaro noise ordinance)" },
            { label: "Parking", value: "Limited on-site · we book coach transfers for every wedding" },
            { label: "Accessibility", value: "Upper deck is stair-access only; chair-lift arranged for elders on request" },
          ],
        },
        {
          title: "Design compatibility",
          rows: [
            { label: "Ceiling structure", value: "Palm-thatched, exposed wood beams — works for hanging florals and chandeliers" },
            { label: "Floor", value: "Sand on ceremony level · polished wood on reception level" },
            { label: "Walls", value: "None — fully open on three sides, ocean to the west" },
            { label: "Mandap", value: "Yes — fits a 14 ft four-pillar mandap on the ceremony deck" },
            { label: "Chuppah", value: "Yes — three configurations possible" },
            { label: "Lighting", value: "Built-in dimmable warm-white · we layer chandeliers, string lights, candles" },
            { label: "Power supply", value: "3-phase commercial, 200 amps; generator backup on-site" },
            { label: "AV", value: "Built-in PA, projection screen, discreet speaker grid" },
          ],
        },
      ],
    },
    photography: {
      eyebrow: "Photography opportunities",
      headline: "Where the *camera* goes.",
      items: [
        { time: "5:30 PM", title: "The sunset aisle", body: "Ceremony oriented west — light hits the aisle for the final ten minutes.", imageKey: "venue-photo-1" },
        { time: "7:00 PM", title: "The blue hour", body: "Sky goes cobalt against the warm pavilion light. The strongest first-look portraits.", imageKey: "venue-photo-2" },
        { time: "8:00 PM", title: "The reception terrace", body: "String lights and chandeliers on the upper deck. Photographs as if scored.", imageKey: "venue-photo-3" },
        { time: "10:00 PM", title: "The beach exit", body: "Sand-floor portraits with the pavilion lit behind. Almost theatrical.", imageKey: "venue-photo-4" },
      ],
    },
    hotels: {
      eyebrow: "Nearby accommodations",
      headline: "Where your *guests* stay.",
      items: [
        { number: "01", name: "Tortuga Bay", sub: "Oscar de la Renta enclave", distance: "12 min by car", keys: "15 villas · 5★" },
        { number: "02", name: "Eden Roc Cap Cana", sub: "Relais & Châteaux", distance: "15 min by car", keys: "60 keys · 5★" },
        { number: "03", name: "Hyatt Zilara Cap Cana", sub: "Adult-only · all-inclusive", distance: "18 min by car", keys: "375 keys · 4★" },
        { number: "04", name: "Iberostar Grand Bávaro", sub: "Beachfront resort", distance: "6 min walk", keys: "273 keys · 5★" },
        { number: "05", name: "Excellence Punta Cana", sub: "Boutique resort", distance: "9 min by car", keys: "598 keys · 4★" },
        { number: "06", name: "Paradisus Punta Cana", sub: "All-inclusive · family", distance: "14 min by car", keys: "687 keys · 4★" },
      ],
    },
    portfolio: {
      eyebrow: "Weddings hosted here",
      headline: "From the *portfolio.*",
      viewAllLabel: "View all 42 weddings at Jellyfish",
      items: [
        { title: "Maya & Daniel", meta: "Jewish · December 2025 · 165 guests", imageKey: "venue-portfolio-1" },
        { title: "Léa & Étienne", meta: "Catholic · March 2024 · 140 guests", imageKey: "venue-portfolio-2" },
        { title: "Saira & Adam", meta: "Interfaith · February 2025 · 180 guests", imageKey: "venue-portfolio-3" },
      ],
    },
    related: {
      eyebrow: "Continue reading",
      headline: "From the *journal.*",
      articles: [
        { category: "Indian Weddings · Bávaro", title: "Hosting an Indian Wedding at Jellyfish", body: "Why the 180-guest ceiling matters, and how we plan the baraat on the sand.", imageKey: "venue-detail-related-1" },
        { category: "Jewish · Caribbean", title: "Chuppah on the Sand: Maya & Daniel", body: "A 165-guest Jewish wedding at Jellyfish, including kosher kitchen logistics.", imageKey: "venue-detail-related-2" },
        { category: "Logistics · Beachfront", title: "When the Tide Comes In: Beach Wedding Contingencies", body: "How we plan beach ceremonies that survive the unexpected.", imageKey: "venue-detail-related-3" },
      ],
      sidebarVenues: [
        { label: "Kukua Beach Club" },
        { label: "Chez Bisutti" },
        { label: "Eden Roc Cap Cana" },
      ],
      sidebarCultures: [
        { label: "Indian weddings" },
        { label: "Jewish weddings" },
        { label: "Interfaith weddings" },
      ],
      sidebarDestinations: [{ label: "Punta Cana" }, { label: "Cap Cana" }],
    },
    faq: {
      eyebrow: "Questions, answered",
      headline: "Frequently *asked.*",
      items: [
        { question: "How far in advance should we book Jellyfish?", answer: ["Eighteen to twenty-four months is our standard for any Punta Cana venue. Jellyfish is the most-requested venue in our register, and Saturdays in February through April book first.", "For weddings twelve months out, we typically have a 60% chance of holding a Saturday in peak season."] },
        { question: "What is the exact capacity for different formats?", answer: ["Cocktail-style: up to 280 guests. Seated dinner on the upper deck: up to 220. Ceremony on the sand-floor lower deck: up to 220 in rows, 180 with generous aisles. We recommend 110–180 for the venue to feel its best."] },
        { question: "Is Jellyfish wheelchair accessible?", answer: ["The lower deck is fully accessible. The upper deck is stair-access only (two flights); we arrange a discreet chair-lift on the day and coordinate seating on the lower deck for any guest who prefers."] },
        { question: "Can we host a Hindu, Jewish, or interfaith ceremony?", answer: ["Yes — Jellyfish has hosted all three with us repeatedly. The lower deck holds a 14-ft mandap or chuppah; the kitchen accommodates kosher with six months of planning. Vegetarian and Jain are standard."] },
        { question: "What does a Jellyfish wedding cost?", answer: ["The venue rental runs USD $18,000–$32,000 for a Saturday in peak season, depending on guest count. All-in 2026 budgets for a 150-guest wedding typically sit between USD $185,000 and $420,000."] },
        { question: "Where do our guests stay?", answer: ["We work with six nearby resorts ranging from Tortuga Bay (5★, 12 min) to Iberostar Grand Bávaro (5★, 6 min walk). We negotiate group rates and coordinate transfers for the weekend."] },
        { question: "Is the venue available off-season?", answer: ["Yes. May is workable; June through October carries hurricane-season risk and we plan defensively. Roughly 18% of our Jellyfish weddings happen May–October, costing 20–25% less than peak."] },
      ],
    },
    cta: {
      eyebrow: "A private conversation —",
      headline: "*Begin* your wedding at Jellyfish.",
      body: "Tell us your tradition, your guest count, and a rough date. Grecia writes back with availability, personally, within five working days.",
      ctaLabel: "Request a site visit",
      ctaHref: "/contact",
    },
};

const JELLYFISH: Record<Locale, JellyfishDetail> = {
  en: JELLYFISH_EN,
  es: jellyfishStub("es"),
  fr: jellyfishStub("fr"),
  pt: jellyfishStub("pt"),
  de: jellyfishStub("de"),
  it: jellyfishStub("it"),
};

/**
 * The non-English Jellyfish docs reuse the English structural detail but with a
 * translated header/overview/CTA. Long-form sections (capacity, logistics, FAQ)
 * stay in English in the seed and are flagged for an editor to localize — this
 * keeps the seed shippable without machine-translating dozens of paragraphs.
 */
function jellyfishStub(locale: Locale): JellyfishDetail {
  const en = JELLYFISH_EN;
  const i = 0; // Jellyfish index
  const card = cardFields(i, locale);
  const v = VENUE_BASE[i];
  const ol = STUB_OVERVIEW_LABEL[locale];
  const cta = STUB_CTA[locale];
  const sh = STUB_HEADER[locale];
  return {
    ...en,
    header: {
      ...en.header,
      eyebrow: `№ ${v.number} · ${card.tag} · ${v.place}`,
      headline: "Jellyfish *Restaurant.*",
      location: card.location,
      deck: card.cardBlurb,
      galleryLabel: sh.gallery,
      ctaLabel: sh.ctaLabel,
    },
    overview: {
      ...en.overview,
      sideLabel: ol.side,
      sideNote: "",
      lede: card.cardBlurb,
    },
    cta: {
      eyebrow: cta.eyebrow,
      headline: "*Begin* your wedding at Jellyfish.",
      body: cta.body,
      ctaLabel: cta.ctaLabel,
      ctaHref: "/contact",
    },
  };
}

// ── Assembly ────────────────────────────────────────────────────────────────
export const PUNTA_CANA_VENUES: Record<Locale, Record<string, VenueCopy>> =
  Object.fromEntries(
    LOCALES.map((locale) => {
      const bySlug: Record<string, VenueCopy> = {};
      VENUE_BASE.forEach((v, i) => {
        if (i === 0) {
          bySlug[v.slug] = { ...cardFields(i, locale), ...JELLYFISH[locale] };
        } else {
          bySlug[v.slug] = buildStubVenue(i, locale);
        }
      });
      return [locale, bySlug];
    }),
  ) as Record<Locale, Record<string, VenueCopy>>;
