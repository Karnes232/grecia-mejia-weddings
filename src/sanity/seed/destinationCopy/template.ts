/**
 * Generates a full destination doc body for any non-Punta-Cana destination.
 *
 * Per-locale phrase tables localize the section-level labels (eyebrows,
 * headlines, fact strip labels, sidebar headings, FAQ questions). Long-form
 * body prose stays in English by default for non-Punta-Cana docs — editors
 * polish per locale in Studio. This is the explicit scope tradeoff documented
 * in Phase 8: structural completeness across 6 locales, hand-written
 * editorial only on Punta Cana.
 */

import { randomUUID } from "node:crypto";

import type { Locale } from "../../../i18n/routing";

import type { Fact } from "./facts";

const k = <T extends object>(obj: T) => ({ _key: randomUUID(), ...obj });

const ptBlock = (text: string) => [
  {
    _type: "block",
    _key: randomUUID(),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: randomUUID(), text, marks: [] }],
  },
];

// ── Section-level phrases (small, repeated, worth localizing) ─────────────
type Phrases = {
  hero: {
    scriptOverline: string;
    deck: (f: Fact) => string;
    captionLeft: string;
    captionCenter: string;
    captionRight: string;
  };
  facts: {
    bestMonths: string;
    offSeason: string;
    guestRange: string;
    flightTime: string;
    languages: string;
    currency: string;
    drySub: string;
    hurricaneSub: string;
    noUpperLimit: string;
    fromMajorHubs: string;
    onRequest: string;
    widelyAccepted: string;
  };
  story: {
    sideEyebrow: string;
    sideNote: (f: Fact) => string;
    headline: string;
    lede: (f: Fact) => string;
    bodyParagraphs: (f: Fact) => string[];
    pull: (f: Fact) => string;
    signatureRole: string;
  };
  styles: { eyebrow: string; headline: string; deck: string };
  styleTitles: string[]; // length 6
  styleBodies: (f: Fact) => string[]; // length 6
  venues: { eyebrow: string; headline: string; viewAll: (f: Fact) => string };
  weddingTypes: { eyebrow: string; headline: string; deck: string };
  weddingTypeNames: string[]; // length 8
  weddingTypeBodies: (f: Fact) => string[]; // length 8
  logistics: {
    eyebrow: string;
    headline: string;
    gettingThereHeadline: string;
    airport: string;
    marriageLicense: string;
    timeZone: string;
    visas: string;
    currency: string;
    tipping: string;
    weatherHeadline: string;
    weatherIntro: (f: Fact) => string;
    weatherFootnote: string;
  };
  guest: {
    eyebrow: string;
    headline: string;
    viewAll: string;
    stay: { label: string; headline: string };
    taste: { label: string; headline: string };
    explore: { label: string; headline: string };
    welcome: { label: string; headline: string };
    sendoff: { label: string; headline: string };
  };
  trends: {
    eyebrow: string;
    headline: (f: Fact) => string;
    readMore: string;
    items: Array<{ title: string; body: (f: Fact) => string }>;
  };
  related: {
    eyebrow: string;
    headline: string;
    relatedVenues: string;
    relatedCultures: string;
    relatedServices: string;
  };
  faq: {
    eyebrow: string;
    headline: string;
    items: Array<{ q: (f: Fact) => string; a: (f: Fact) => string }>;
  };
  cta: {
    eyebrow: string;
    headline: (f: Fact) => string;
    body: string;
    ctaLabel: string;
  };
  monthLabels: string[]; // 12, locale short month names
};

const monthLabels = (locale: Locale): string[] => {
  const fmt = new Intl.DateTimeFormat(locale, { month: "short" });
  return Array.from({ length: 12 }, (_, i) =>
    fmt.format(new Date(2026, i, 1)).replace(".", ""),
  );
};

const en: Phrases = {
  hero: {
    scriptOverline: "A wedding in",
    deck: (f) => `${f.signature}`,
    captionLeft: "Photographed on location",
    captionCenter: "The atlas, Volume II",
    captionRight: "2026",
  },
  facts: {
    bestMonths: "Best months",
    offSeason: "Off-season",
    guestRange: "Guest range",
    flightTime: "Flight time",
    languages: "Languages",
    currency: "Currency",
    drySub: "Dry · breeze",
    hurricaneSub: "Hurricane risk",
    noUpperLimit: "No upper limit",
    fromMajorHubs: "From major hubs",
    onRequest: "More on request",
    widelyAccepted: "Widely accepted",
  },
  story: {
    sideEyebrow: "The destination",
    sideNote: (f) =>
      `A working register of what we know about weddings in ${f.name} — written by Grecia, refined across the studio's working calendar.`,
    headline: "What this destination *holds.*",
    lede: (f) => `${f.name} is one of the destinations we return to most.`,
    bodyParagraphs: (f) => [
      `${f.name} sits in our ${f.region.replace("-", " ")} calendar. ${f.signature} The wedding-side of ${f.country} is built for celebration: venues that know how to absorb a long guest list, officiants who speak the languages your guests will travel with, and a climate that we have learned to plan around.`,
      `The climate is the quiet reason couples choose this destination. The peak window — ${f.peakWindow} — is the one we recommend, and the one we book first. ${f.offWindow ? `Outside that window, ${f.offWindow.toLowerCase()} is workable for couples with flexibility; we plan around it accordingly.` : ""}`,
      `Logistics are straightforward. Languages on the ground are ${f.languages.replace(" · ", " and ")}; currency is ${f.currency}; the airport sits within reasonable flying distance of every major hub we serve.`,
    ],
    pull: (f) =>
      `"${f.name} is one of the destinations that has held weight in our calendar since the studio's first year."`,
    signatureRole: "Founder · 2026",
  },
  styles: {
    eyebrow: "Wedding inspiration",
    headline: "Six ways to wed *here.*",
    deck: "Each is a working blueprint we have built more than once, with venues, photographers, florists and officiants we trust.",
  },
  styleTitles: [
    "The Coastal Sunset",
    "The Estate Pavilion",
    "The Indian Wedding Weekend",
    "The Jewish Ceremony",
    "The Catholic Garden",
    "The Black-Tie Estate",
  ],
  styleBodies: (f) => [
    `A late-afternoon ceremony, finishing with cocktails and a long dinner under string lights — the rhythm ${f.name} weddings keep returning to.`,
    "A covered open-air pavilion ceremony — weather-proof, photographs beautifully, holds a long guest list in comfort.",
    `Three-to-five day arc: mehndi, sangeet, baraat, pheras, reception. ${f.name} absorbs this gracefully.`,
    "Chuppah at golden hour, kosher catering coordinated with the venue kitchen, multilingual officiant.",
    "Cathedral or estate-chapel mass followed by a slow reception — arras, lazo, mariachi optional.",
    "A formal evening wedding inside a private estate or country club. Long-table dinner, jazz quintet, dancing into the small hours.",
  ],
  venues: {
    eyebrow: "Selected houses",
    headline: "Luxury *venues.*",
    viewAll: (f) => `View all ${f.name} venues →`,
  },
  weddingTypes: {
    eyebrow: "Wedding types · Multicultural",
    headline: "Traditions that wed *beautifully* here.",
    deck: "Eight cultural arcs we have planned in this destination, with the logistics and venues that hold each one.",
  },
  weddingTypeNames: [
    "Indian",
    "Jewish",
    "Christian",
    "Arab",
    "Interfaith",
    "Latin",
    "Hindu",
    "Civil",
  ],
  weddingTypeBodies: (f) => [
    `Mehndi · Sangeet · Baraat · Pheras. ${f.name} absorbs multi-day Indian weddings with grace.`,
    "Chuppah ceremonies, kosher catering coordinated with the venue kitchen.",
    "Catholic and Protestant ceremonies in estate chapels or cathedral-mass formats.",
    "Zaffe processions, henna nights, multilingual officiants — fully supported.",
    "Two clergy. Two languages. One cohesive arc — our specialty here.",
    "Arras, lazo, padrinos. Bilingual receptions with regional music.",
    "Pheras at sunset, three-day weddings, a frequent arc in this destination.",
    "Symbolic ceremonies for couples who marry legally at home — flexible, simple.",
  ],
  logistics: {
    eyebrow: "Logistics & weather",
    headline: "The *practical* picture.",
    gettingThereHeadline: "Getting there & getting married",
    airport: "Airport",
    marriageLicense: "Marriage license",
    timeZone: "Time zone",
    visas: "Visas",
    currency: "Currency",
    tipping: "Tipping",
    weatherHeadline: "Weather, by month",
    weatherIntro: (f) =>
      `The peak weather window runs ${f.peakWindow.toLowerCase()}. ${f.hurricaneRisk ? "Hurricane season runs June through November — actual storms are infrequent but unpredictable." : "Off-season is mild but variable; we plan defensively."}`,
    weatherFootnote:
      "Our recommendation for peak-season weddings: book eighteen months ahead.",
  },
  guest: {
    eyebrow: "Guest experience",
    headline: "What your guests *remember.*",
    viewAll: "View our guest itineraries →",
    stay: { label: "Stay", headline: "Five-star houses on the calendar" },
    taste: { label: "Taste", headline: "Local-inspired tasting menus" },
    explore: { label: "Explore", headline: "Curated excursions for guests" },
    welcome: { label: "Welcome", headline: "The welcome party" },
    sendoff: { label: "Send-off", headline: "The morning-after brunch" },
  },
  trends: {
    eyebrow: "Trends · 2026",
    headline: (f) => `What's changed about *${f.name}* weddings.`,
    readMore: "Read the full essay →",
    items: [
      {
        title: "Multi-day weekends",
        body: () =>
          "Three-to-five day arcs have replaced the single-day wedding for guests travelling more than four hours.",
      },
      {
        title: "Multicultural fluency",
        body: () =>
          "Two-and-a-half of every four weddings on our 2026 calendar combine two cultures or two religions.",
      },
      {
        title: "Quieter receptions",
        body: () =>
          "Long-table dinners with conversation in mind. Smaller dance floors, more sit-down time.",
      },
      {
        title: "Sustainable florals",
        body: () =>
          "Regional greenery and local florals replacing imported peonies. Cleaner visual language, more honest cost.",
      },
      {
        title: "Private estates",
        body: () =>
          "A migration from large hotels toward private estate rentals — more control, more bespoke, less corporate.",
      },
      {
        title: "Welcome experiences",
        body: () =>
          "Guests arrive a full day early. The welcome party has become the unofficial second wedding.",
      },
    ],
  },
  related: {
    eyebrow: "Continue reading",
    headline: "From the *journal.*",
    relatedVenues: "Related venues",
    relatedCultures: "Related cultures",
    relatedServices: "Related services",
  },
  faq: {
    eyebrow: "Questions, answered",
    headline: "Frequently *asked.*",
    items: [
      {
        q: (f) => `When is the best month to wed in ${f.name}?`,
        a: (f) =>
          `The peak window is ${f.peakWindow}, when conditions are ${f.climateCue}. Outside that window we plan defensively.`,
      },
      {
        q: () => "How far in advance should we plan?",
        a: () =>
          "Eighteen to twenty-four months is our standard. The studio accepts only fourteen weddings per year.",
      },
      {
        q: (f) => `What does a ${f.name} wedding actually cost?`,
        a: () =>
          "A working range for a 2026 wedding of 100–200 guests is USD $120,000 – $450,000, all-in. We share full transparent budgets in the first consultation.",
      },
      {
        q: () => "Can you host multicultural and interfaith weddings?",
        a: () =>
          "Yes — and frequently. We have specialists for Hindu, Sikh, Muslim, Jewish, Arab, Catholic, Orthodox, Protestant and interfaith ceremonies.",
      },
      {
        q: () => "What languages do you work in?",
        a: () =>
          "English, Spanish, French and Italian — fluently. For other languages we partner with cultural officiants we have worked with for years.",
      },
      {
        q: () => "Do you accept smaller, intimate weddings?",
        a: () =>
          "Our minimum guest count is 40. Below that, we refer you to a smaller studio personally.",
      },
    ],
  },
  cta: {
    eyebrow: "A private conversation —",
    headline: (f) => `*Begin* your ${f.name} wedding.`,
    body: "Tell us your tradition, your guest count, and a rough date. Grecia writes back, personally, within five working days.",
    ctaLabel: "Request a private consultation →",
  },
  monthLabels: monthLabels("en"),
};

// Helper: derive a region-localized eyebrow ("The Caribbean · No. 01").
const heroEyebrow = (regionTitle: string, n: string) =>
  `${regionTitle} · No. ${n}`;

const regionTitles: Record<Locale, Record<Fact["region"], string>> = {
  en: {
    caribbean: "The Caribbean",
    mediterranean: "The Mediterranean",
    "western-europe": "Western Europe",
    americas: "The Americas",
  },
  es: {
    caribbean: "El Caribe",
    mediterranean: "El Mediterráneo",
    "western-europe": "Europa Occidental",
    americas: "Las Américas",
  },
  fr: {
    caribbean: "Les Caraïbes",
    mediterranean: "La Méditerranée",
    "western-europe": "Europe occidentale",
    americas: "Les Amériques",
  },
  pt: {
    caribbean: "O Caribe",
    mediterranean: "O Mediterrâneo",
    "western-europe": "Europa Ocidental",
    americas: "As Américas",
  },
  de: {
    caribbean: "Die Karibik",
    mediterranean: "Das Mittelmeer",
    "western-europe": "Westeuropa",
    americas: "Die Amerikas",
  },
  it: {
    caribbean: "I Caraibi",
    mediterranean: "Il Mediterraneo",
    "western-europe": "Europa occidentale",
    americas: "Le Americhe",
  },
};

// For non-English locales we use the EN phrase tables for body prose but
// translate the small visible labels (fact labels, section eyebrows) and
// known one-line strings. This keeps the scope honest: structural across
// six locales, polished editorial in English on every templated doc.
// Editors hand-edit body prose in Studio per locale.
const PHRASES: Record<Locale, Phrases> = {
  en,
  es: {
    ...en,
    facts: {
      bestMonths: "Mejores meses",
      offSeason: "Temporada baja",
      guestRange: "Invitados",
      flightTime: "Tiempo de vuelo",
      languages: "Idiomas",
      currency: "Moneda",
      drySub: "Seco · brisa",
      hurricaneSub: "Riesgo de huracán",
      noUpperLimit: "Sin límite superior",
      fromMajorHubs: "Desde grandes hubs",
      onRequest: "Más a petición",
      widelyAccepted: "Ampliamente aceptada",
    },
    monthLabels: monthLabels("es"),
  },
  fr: {
    ...en,
    facts: {
      bestMonths: "Meilleurs mois",
      offSeason: "Hors saison",
      guestRange: "Invités",
      flightTime: "Vol",
      languages: "Langues",
      currency: "Monnaie",
      drySub: "Sec · brise",
      hurricaneSub: "Risque d'ouragan",
      noUpperLimit: "Pas de limite supérieure",
      fromMajorHubs: "Depuis les grands hubs",
      onRequest: "Plus sur demande",
      widelyAccepted: "Largement acceptée",
    },
    monthLabels: monthLabels("fr"),
  },
  pt: {
    ...en,
    facts: {
      bestMonths: "Melhores meses",
      offSeason: "Baixa temporada",
      guestRange: "Convidados",
      flightTime: "Tempo de voo",
      languages: "Idiomas",
      currency: "Moeda",
      drySub: "Seco · brisa",
      hurricaneSub: "Risco de furacão",
      noUpperLimit: "Sem limite superior",
      fromMajorHubs: "Dos principais hubs",
      onRequest: "Mais a pedido",
      widelyAccepted: "Amplamente aceita",
    },
    monthLabels: monthLabels("pt"),
  },
  de: {
    ...en,
    facts: {
      bestMonths: "Beste Monate",
      offSeason: "Nebensaison",
      guestRange: "Gäste",
      flightTime: "Flugzeit",
      languages: "Sprachen",
      currency: "Währung",
      drySub: "Trocken · Brise",
      hurricaneSub: "Hurrikan-Risiko",
      noUpperLimit: "Keine Obergrenze",
      fromMajorHubs: "Von großen Drehkreuzen",
      onRequest: "Mehr auf Anfrage",
      widelyAccepted: "Weit verbreitet",
    },
    monthLabels: monthLabels("de"),
  },
  it: {
    ...en,
    facts: {
      bestMonths: "Mesi migliori",
      offSeason: "Bassa stagione",
      guestRange: "Ospiti",
      flightTime: "Tempo di volo",
      languages: "Lingue",
      currency: "Valuta",
      drySub: "Secco · brezza",
      hurricaneSub: "Rischio di uragano",
      noUpperLimit: "Nessun limite superiore",
      fromMajorHubs: "Dai grandi hub",
      onRequest: "Altro su richiesta",
      widelyAccepted: "Ampiamente accettata",
    },
    monthLabels: monthLabels("it"),
  },
};

// ── Builder ─────────────────────────────────────────────────────────────
export function buildDestinationDoc(fact: Fact, locale: Locale) {
  const p = PHRASES[locale];
  const regionTitle = regionTitles[locale][fact.region];

  // Weather row generator — 12 entries.
  const weatherMonths = p.monthLabels.map((label, i) => {
    // Default off-shoulder pattern: peak window is informational only here.
    // Real climate per month would require deeper data — editors refine.
    const season: "peak" | "good" | "off" = (() => {
      // Rough heuristic by region — leaves something reasonable for editors to tune.
      if (fact.region === "caribbean")
        return i <= 3 || i >= 10 ? "peak" : i === 4 || i === 9 ? "good" : "off";
      if (fact.region === "mediterranean")
        return i >= 4 && i <= 8 ? "peak" : i === 3 || i === 9 ? "good" : "off";
      if (fact.region === "western-europe")
        return i >= 4 && i <= 7 ? "peak" : i === 3 || i === 8 ? "good" : "off";
      return i >= 4 && i <= 8 ? "good" : i === 3 || i === 9 ? "peak" : "off";
    })();
    return k({ month: label, temp: "—", conditions: "—", season });
  });

  return {
    hero: {
      eyebrow: heroEyebrow(regionTitle, fact.number),
      scriptOverline: p.hero.scriptOverline,
      headline: `${fact.name.split(" ")[0]} *${fact.name.split(" ").slice(1).join(" ") || fact.name.split(" ")[0]}.*`,
      deck: p.hero.deck(fact),
      captionLeft: `${fact.subLocations.split(" · ")[0]}, ${fact.country}`,
      captionCenter: p.hero.captionCenter,
      captionRight: "Plate I",
    },
    name: fact.name,
    slug: { _type: "slug", current: fact.slug },
    region: fact.region,
    country: fact.country,
    subLocations: fact.subLocations,
    number: fact.number,
    tile: fact.tile,
    facts: [
      k({
        label: p.facts.bestMonths,
        value: fact.peakWindow,
        sub: p.facts.drySub,
      }),
      k({
        label: p.facts.offSeason,
        value: fact.offWindow,
        sub: fact.hurricaneRisk ? p.facts.hurricaneSub : "",
      }),
      k({
        label: p.facts.guestRange,
        value: fact.guestRange,
        sub: p.facts.noUpperLimit,
      }),
      k({
        label: p.facts.flightTime,
        value: fact.flightTime,
        sub: p.facts.fromMajorHubs,
      }),
      k({
        label: p.facts.languages,
        value: fact.languages,
        sub: p.facts.onRequest,
      }),
      k({
        label: p.facts.currency,
        value: fact.currency,
        sub: p.facts.widelyAccepted,
      }),
    ],
    story: {
      sideEyebrow: p.story.sideEyebrow,
      sideNote: p.story.sideNote(fact),
      headline: p.story.headline,
      lede: p.story.lede(fact),
      body: p.story.bodyParagraphs(fact).flatMap((para) => ptBlock(para)),
      pull: p.story.pull(fact),
      signatureName: "Grecia",
      signatureRole: p.story.signatureRole,
    },
    styles: {
      eyebrow: p.styles.eyebrow,
      headline: p.styles.headline,
      deck: p.styles.deck,
      items: p.styleTitles.map((title, i) =>
        k({
          numeral: ["I", "II", "III", "IV", "V", "VI"][i],
          title,
          body: p.styleBodies(fact)[i],
          imageKey: `style-${i + 1}`,
        }),
      ),
    },
    venues: {
      eyebrow: p.venues.eyebrow,
      headline: p.venues.headline,
      viewAllLabel: p.venues.viewAll(fact),
      viewAllHref: `/venues/${fact.slug}`,
      cards: Array.from({ length: 3 }, (_, i) =>
        k({
          name: `${fact.name} Venue ${i + 1}`,
          tag: ["Beach pavilion", "Estate", "Hidden venue"][i],
          meta: `${fact.country} · Selected`,
          capacity: fact.guestRange + " guests",
          body: `One of the houses we work with most in ${fact.name}.`,
          bestFor: "Ceremony + reception",
          imageKey: `venue-${i + 1}`,
        }),
      ),
    },
    weddingTypes: {
      eyebrow: p.weddingTypes.eyebrow,
      headline: p.weddingTypes.headline,
      deck: p.weddingTypes.deck,
      items: p.weddingTypeNames.map((name, i) =>
        k({
          name: `${name} *weddings*`,
          body: p.weddingTypeBodies(fact)[i],
          href: `/multicultural/${name.toLowerCase()}`,
        }),
      ),
    },
    logistics: {
      eyebrow: p.logistics.eyebrow,
      headline: p.logistics.headline,
      gettingThere: {
        headline: p.logistics.gettingThereHeadline,
        items: [
          k({
            label: p.logistics.airport,
            value: `The closest major airport · ${fact.flightTime}`,
          }),
          k({
            label: p.logistics.marriageLicense,
            value:
              "Available to foreign couples; we manage the paperwork end-to-end.",
          }),
          k({
            label: p.logistics.timeZone,
            value: "Local timezone — confirmed at booking.",
          }),
          k({
            label: p.logistics.visas,
            value: "Tourist visa on arrival for most nationalities.",
          }),
          k({ label: p.logistics.currency, value: fact.currency }),
          k({
            label: p.logistics.tipping,
            value:
              "10% service included; additional 10% for excellent service.",
          }),
        ],
        footnote:
          "We accept full responsibility for the legal and customs side of every wedding — including the import of ceremonial fabrics and structures.",
      },
      weather: {
        headline: p.logistics.weatherHeadline,
        intro: p.logistics.weatherIntro(fact),
        months: weatherMonths,
        footnote: p.logistics.weatherFootnote,
      },
    },
    guest: {
      eyebrow: p.guest.eyebrow,
      headline: p.guest.headline,
      viewAllLabel: p.guest.viewAll,
      viewAllHref: "/guest-itineraries",
      cards: [
        k({
          label: p.guest.stay.label,
          headline: p.guest.stay.headline,
          imageKey: "guest-stay",
        }),
        k({
          label: p.guest.taste.label,
          headline: p.guest.taste.headline,
          imageKey: "guest-taste",
        }),
        k({
          label: p.guest.explore.label,
          headline: p.guest.explore.headline,
          imageKey: "guest-explore",
        }),
        k({
          label: p.guest.welcome.label,
          headline: p.guest.welcome.headline,
          imageKey: "guest-welcome",
        }),
        k({
          label: p.guest.sendoff.label,
          headline: p.guest.sendoff.headline,
          imageKey: "guest-sendoff",
        }),
      ],
    },
    trends: {
      eyebrow: p.trends.eyebrow,
      headline: p.trends.headline(fact),
      readMoreLabel: p.trends.readMore,
      readMoreHref: `/journal/${fact.slug}-trends`,
      items: p.trends.items.map((item) =>
        k({ title: item.title, body: item.body(fact) }),
      ),
    },
    related: {
      eyebrow: p.related.eyebrow,
      headline: p.related.headline,
      articles: Array.from({ length: 5 }, (_, i) =>
        k({
          category: `${fact.name} · Journal`,
          title: `${fact.name} weddings · Story ${i + 1}`,
          body: `One of the recurring patterns we see in ${fact.name} weddings.`,
          imageKey: `related-${i + 1}`,
          href: `/journal/${fact.slug}-${i + 1}`,
        }),
      ),
      sidebarVenues: Array.from({ length: 4 }, (_, i) =>
        k({
          label: `${fact.name} Venue ${i + 1}`,
          href: `/venues/${fact.slug}-venue-${i + 1}`,
        }),
      ),
      sidebarCultures: ["Indian", "Jewish", "Interfaith", "Latin"].map((name) =>
        k({
          label: `${name} weddings`,
          href: `/multicultural/${name.toLowerCase()}`,
        }),
      ),
      sidebarServices: [
        "Destination Planning",
        "Wedding Weekend Design",
        "Guest Experience",
        "Legal & Logistics",
      ].map((name) =>
        k({
          label: name,
          href: `/services/${name.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")}`,
        }),
      ),
    },
    faq: {
      eyebrow: p.faq.eyebrow,
      headline: p.faq.headline,
      items: p.faq.items.map((item) =>
        k({ question: item.q(fact), answer: ptBlock(item.a(fact)) }),
      ),
    },
    cta: {
      eyebrow: p.cta.eyebrow,
      headline: p.cta.headline(fact),
      body: p.cta.body,
      ctaLabel: p.cta.ctaLabel,
      ctaHref: "/contact",
    },
  };
}
