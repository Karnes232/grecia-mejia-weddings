/**
 * Per-culture seed copy — Indian Weddings (detail page).
 *
 * English is design-verbatim from `pages/multicultural-detail.jsx`. The other
 * five locales are native-quality translations in the same restrained editorial
 * register. Ceremony names and proper nouns (Mehndi, Haldi, Sangeet, Baraat,
 * Varmala, Pheras, mandap, muhurat, pandit, etc.) are kept untranslated.
 *
 * Card copy (name/cardEyebrow/cardBlurb/cardMeta/intro) is reused verbatim from
 * `src/sanity/seed/culture.ts`.
 */

import {
  culturePath,
  destinationPath,
  staticPath,
  type CultureCopy,
} from "./shared";
import type { Locale } from "../../../i18n/routing";

export const indianWeddings: Record<Locale, CultureCopy> = {
  en: {
    name: "Indian Weddings",
    cardEyebrow: "The studio's most-held tradition",
    cardBlurb:
      "Mehndi, sangeet, haldi, baraat, varmala, pheras and reception — held across three-to-five days, often for two-hundred-to-eight-hundred guests.",
    cardMeta: "Punjabi · Gujarati · South Indian · Sikh",
    intro:
      "The tradition the studio has held more than any other — a three-to-five day arc kept by a pandit we have worked with for fourteen years.",
    hero: {
      eyebrow: "The Traditions · No. 01",
      scriptOverline: "A wedding of",
      headline: "Indian *tradition.*",
      deck: "The studio's most-held wedding type. Three-to-five day arcs, two-hundred-to-eight-hundred guests, and the cultural fluency to host any region of the subcontinent.",
      captionLeft: "Saira & Adam · Cap Cana",
      captionCenter: "Mandap at sunset · 2025",
      captionRight: "Plate I",
    },
    factStrip: [
      { label: "Wedding length", value: "3 – 5 days", sub: "5 – 8 ceremonies" },
      { label: "Guest range", value: "200 – 800", sub: "Larger by request" },
      {
        label: "Lead time",
        value: "18 – 24 months",
        sub: "Specialists book early",
      },
      {
        label: "Common regions",
        value: "Punjab · Gujarat",
        sub: "Tamil · Bengali · Sikh",
      },
      { label: "Cuisine", value: "Multi-regional", sub: "Vegetarian forward" },
      { label: "Languages", value: "EN · Hindi", sub: "Punjabi · Gujarati" },
    ],
    overview: {
      sideEyebrow: "The tradition",
      sideNote:
        "Forty Indian weddings, fourteen years. A working register of what we know about hosting the tradition with grace.",
      headline: "Five days,\ntwo-hundred guests,\none *prayer.*",
      lede: "An Indian wedding is not a wedding. It is a small festival held over the course of a week — choreographed across two families, eight ceremonies, four meals a day, and an ever-changing wardrobe of colour and fabric.",
      bodyParagraphs: [
        "We have planned forty Indian weddings since 2014. Most have been multi-day. Most have been multi-religion within the tradition itself — a Punjabi bride marrying a Gujarati groom, a Sikh ceremony followed by a Hindu reception, a Tamil family hosting a Bengali wedding in Punta Cana.",
        "The methodology, after forty: hold the structure of every ritual as if the families wrote it. Refuse to shorten or summarise a ceremony for the sake of pacing. Trust that the pacing was always already there.",
        "We work with a Hindu pandit who has officiated forty of our weddings, a Sikh Granthi who travels from London for Anand Karaj, mehndi artists who bring full teams for the entire weekend, and choreographers who treat the sangeet not as entertainment but as a piece of theatre with five generations on stage.",
      ],
      pull: '"Refuse to shorten or summarise a ceremony for the sake of pacing. Trust that the pacing was always already there."',
      signatureName: "Grecia",
      signatureRole: "Founder · After forty Indian weddings",
    },
    ceremonyArc: {
      eyebrow: "Ceremony structure",
      headline: "The seven-part *arc.*",
      deck: "The full ceremony order we hold across a typical four-day Indian wedding. Variations exist — every wedding adjusts the order based on family tradition and region.",
      steps: [
        {
          numeral: "I",
          name: "Mehndi",
          sub: "Henna night",
          when: "Day 1 evening",
          body: "Hands and feet decorated with intricate henna. Music, dancing, an informal gathering of the women.",
        },
        {
          numeral: "II",
          name: "Haldi",
          sub: "Turmeric ceremony",
          when: "Day 2 morning",
          body: "Bride and groom anointed with turmeric paste by family. Often held separately, in white.",
        },
        {
          numeral: "III",
          name: "Sangeet",
          sub: "Music & performances",
          when: "Day 2 evening",
          body: "Choreographed performances by both families. The most theatrical evening of the week.",
        },
        {
          numeral: "IV",
          name: "Baraat",
          sub: "Groom's procession",
          when: "Day 3 morning",
          body: "The groom arrives on horseback or in a vintage car, accompanied by dhol drummers and dancing family.",
        },
        {
          numeral: "V",
          name: "Varmala",
          sub: "Garland exchange",
          when: "Day 3 morning",
          body: "Bride and groom exchange floral garlands at the mandap to accept each other.",
        },
        {
          numeral: "VI",
          name: "Pheras",
          sub: "Seven sacred steps",
          when: "Day 3 morning",
          body: "The couple circles the sacred fire seven times, each circle a vow. The legal Hindu wedding.",
        },
        {
          numeral: "VII",
          name: "Reception",
          sub: "Celebration dinner",
          when: "Day 3 evening",
          body: "Black-tie reception, long-table dinner, the final speeches and the first dance.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Design concepts",
      headline: "Mandap, *moodboards.*",
      deck: "Three working design directions we have built more than once. Every wedding adapts these — palette, fabric, scale of the mandap.",
      cards: [
        {
          title: "Ivory & Marigold",
          body: "A pared-back classical mandap in ivory drapery, marigold ropes, and warm white pillar candles. Reads beautifully on the beach.",
          palette: ["#f5f0e6", "#e8a843", "#c25422", "#7a3814", "#3a2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Mandap", value: "Four-pillar floral, 14 ft" },
            { label: "Florals", value: "Marigold · rose · greenery" },
            { label: "Best for", value: "Beach · pavilion · pavilion-tented" },
          ],
        },
        {
          title: "Deep Red & Gold",
          body: "A formal Punjabi-style mandap in deep crimson velvet, brass accents, and heavy gold embroidery. Reception-side luxury.",
          palette: ["#8a1e2a", "#c89d4e", "#3a1a1a", "#e8d6a0", "#f5f0e6"],
          imageKey: "concept-2",
          rows: [
            { label: "Mandap", value: "Crimson velvet, gold brass" },
            { label: "Florals", value: "Red rose · gold mango" },
            { label: "Best for", value: "Indoor estate · ballroom" },
          ],
        },
        {
          title: "Cream & Greenery",
          body: "A garden mandap built from layered foliage, ivory peonies, and unstained wood. Quietly modern, photographs in any light.",
          palette: ["#ebe3d3", "#a7a78b", "#4a523d", "#d6cdb8", "#2f3527"],
          imageKey: "concept-3",
          rows: [
            { label: "Mandap", value: "Wood + foliage canopy" },
            { label: "Florals", value: "Peony · greenery · olive" },
            { label: "Best for", value: "Garden · villa · vineyard" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Cultural protocol",
      headline: "What we *hold sacred.*",
      deck: "Six principles we do not compromise on. We have walked away from weddings that asked us to.",
      items: [
        {
          title: "Ritual order is not negotiable",
          body: "The pheras come before the reception. The baraat does not begin without the bride's family welcoming the groom. We do not reorder ceremonies for venue convenience or pacing concerns.",
        },
        {
          title: "The pandit chooses the timings",
          body: "Sacred timings (muhurat) are calculated by the pandit using the couple's charts. We schedule the wedding around them — not the other way around.",
        },
        {
          title: "Elders eat first",
          body: "Vegetarian and Jain dietary requirements are accommodated for elders before any wedding party menu is finalised. Food is not styled before it is honest.",
        },
        {
          title: "Caste and region are quiet but real",
          body: 'We ask, in private, about caste, region, and family customs. We do not treat the wedding as a generic "Indian" celebration — Punjabi, Gujarati, Tamil and Bengali traditions differ.',
        },
        {
          title: "Music must be live where possible",
          body: "Dhol drummers for the baraat, classical musicians for the pheras. Recorded music is permitted at the sangeet and reception, but not at sacred moments.",
        },
        {
          title: "The mandap is structural, not decorative",
          body: "The mandap holds the sacred fire and the seven steps. It is built to last the ceremony — we use load-rated structures, fire-safe drapery, and traditional pillar construction.",
        },
      ],
    },
    planning: {
      eyebrow: "Multi-day planning",
      headline: "A four-day *wedding,* hour by hour.",
      deck: "The blueprint we use for a typical 300-guest Indian wedding. Each day flexes; the structure does not.",
      days: [
        {
          numeral: "I",
          dayLabel: "Day One",
          title: "Mehndi & welcome",
          body: "Guests arrive throughout the day. Hotel check-ins coordinated by the studio. Welcome cocktails in the evening, followed by the mehndi ceremony for the women — henna artists set up in three stations to manage volume.",
          events: [
            {
              time: "Morning",
              body: "Guest arrivals · airport transfers · hotel check-in",
            },
            { time: "14:00", body: "Welcome lunch at resort" },
            { time: "18:00", body: "Mehndi ceremony · women · 4 hours" },
            { time: "21:00", body: "Casual dinner · garden buffet" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Day Two",
          title: "Haldi & sangeet",
          body: "Haldi held separately for bride and groom in the morning — both in white, both anointed by their family. Afternoon free for guests. Sangeet in the evening — the most theatrical night of the week, with choreographed performances from both families.",
          events: [
            { time: "09:00", body: "Haldi ceremony · bride · 90 minutes" },
            { time: "10:30", body: "Haldi ceremony · groom · 90 minutes" },
            { time: "13:00", body: "Lunch · poolside" },
            { time: "Free afternoon", body: "Excursion or rest" },
            {
              time: "19:30",
              body: "Sangeet · stage performances · cocktail dinner · dancing till midnight",
            },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Day Three",
          title: "The wedding",
          body: "The pheras at the muhurat — typically late morning. The baraat begins thirty minutes before. Family ceremonies through the early afternoon. Lunch served traditional-style. Reception at the resort in the evening — black-tie, long-table, first dance.",
          events: [
            { time: "09:00", body: "Bride and groom prep · separate suites" },
            {
              time: "10:30",
              body: "Baraat procession · dhol · horse · 30 minutes",
            },
            { time: "11:00", body: "Varmala · garland exchange" },
            { time: "11:30", body: "Pheras at the mandap · 90 minutes" },
            {
              time: "13:30",
              body: "Traditional Indian lunch · banana leaf service",
            },
            { time: "19:00", body: "Reception cocktails" },
            {
              time: "20:30",
              body: "Reception dinner · long-table · first dance · speeches",
            },
          ],
        },
        {
          numeral: "IV",
          dayLabel: "Day Four",
          title: "Brunch & farewells",
          body: "A morning-after brunch hosted by the couple — usually outdoors, more casual, with a focus on goodbyes. The unofficial end of the wedding for most guests; the close families often stay a day or two longer.",
          events: [
            { time: "11:00", body: "Brunch · poolside or garden" },
            { time: "Afternoon", body: "Departures · airport transfers" },
            { time: "Evening", body: "Close-family dinner (optional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Destination compatibility",
      headline: "Where Indian weddings *work best.*",
      viewAllLabel: "View all destinations →",
      viewAllHref: staticPath("en", "/destinations"),
      cards: [
        {
          rating: 5,
          name: "Punta Cana",
          sub: "Caribbean · year-round",
          destinationSlug: "punta-cana",
        },
        {
          rating: 5,
          name: "Amalfi Coast",
          sub: "Italy · May – October",
          destinationSlug: "amalfi",
        },
        {
          rating: 4,
          name: "Lake Como",
          sub: "Italy · June – September",
          destinationSlug: "lake-como",
        },
        {
          rating: 4,
          name: "Côte d'Azur",
          sub: "France · June – September",
          destinationSlug: "cote-dazur",
        },
        {
          rating: 4,
          name: "Tuscany",
          sub: "Italy · May – October",
          destinationSlug: "tuscany",
        },
        {
          rating: 3,
          name: "St. Barths",
          sub: "Caribbean · November – April",
          destinationSlug: "st-barths",
        },
        {
          rating: 3,
          name: "Provence",
          sub: "France · May – September",
          destinationSlug: "provence",
        },
        {
          rating: 3,
          name: "Aspen & Napa",
          sub: "United States · December – March",
          destinationSlug: "aspen-napa",
        },
      ],
    },
    guest: {
      eyebrow: "Guest management",
      headline: "The *practical* care of 300 guests.",
      deck: "The logistics layer most planners under-resource. We start fourteen months ahead.",
      cells: [
        {
          title: "Travel & accommodations",
          body: "Group room blocks at three hotel tiers — premium, standard, and family. Airport transfers coordinated across three days of arrivals. Welcome packages in every room with the schedule, dress code per event, and emergency contacts.",
        },
        {
          title: "Elders & mobility",
          body: "Dedicated seating, separate transport, an elders' liaison from the studio team. Ground-floor rooms reserved for guests over seventy-five. Medical-on-call for the duration of the weekend.",
        },
        {
          title: "Children & childcare",
          body: "Multilingual childcare team for ages 0-12, on-site for the sangeet and reception. Children's menus at every meal. Quiet rooms for naps during day ceremonies.",
        },
        {
          title: "Dietary protocol",
          body: "Vegetarian, vegan, Jain, gluten-free, allergen-free menus for every meal. Religious dietary requirements (kosher, halal) coordinated where overlapping families require it. Three meals daily across the weekend.",
        },
        {
          title: "Attire logistics",
          body: "Pressing service at the hotel for arrival, mid-week, and reception morning. Saree-tying and turban-tying assistance available on call. Lehengas pressed and prepared the morning of the pheras.",
        },
        {
          title: "Communications",
          body: "WhatsApp group for every guest, three weeks before. Dedicated wedding website with daily schedule, dress codes, and venue maps. Printed guides in each welcome package.",
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
          imageKey: "culture-related-1",
        },
        {
          category: "Multi-day · Planning",
          title: "The Sangeet: Why the Night Before Matters More",
          body: "On the rehearsal that is no longer a rehearsal.",
          imageKey: "culture-related-2",
        },
        {
          category: "Design · Indian",
          title: "A Field Guide to Mandap Styles",
          body: "Punjabi, Gujarati, Tamil and Bengali design notes — and how they differ.",
          imageKey: "culture-related-3",
        },
        {
          category: "Cost · Indian",
          title: "What a Luxury Indian Wedding Actually Costs",
          body: "Frank 2026 budgets by guest count.",
          imageKey: "culture-related-4",
        },
        {
          category: "Tradition",
          title: "Mehndi, in Detail",
          body: "On the henna night that has become the most-photographed event of the weekend.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("en", "punta-cana") },
        { label: "Lake Como", href: destinationPath("en", "lake-como") },
        { label: "Côte d'Azur", href: destinationPath("en", "cote-dazur") },
        { label: "Tuscany", href: destinationPath("en", "tuscany") },
      ],
      sidebarVenues: [
        { label: "Kukua Beach Club" },
        { label: "Eden Roc Cap Cana" },
        { label: "Villa Tre Ville" },
        { label: "Château de la Croix" },
      ],
      sidebarCultures: [
        {
          label: "Jewish weddings",
          href: culturePath("en", "jewish-weddings"),
        },
        {
          label: "Interfaith weddings",
          href: culturePath("en", "interfaith-weddings"),
        },
        { label: "Arab weddings", href: culturePath("en", "arab-weddings") },
        {
          label: "South Asian weddings",
          href: culturePath("en", "south-asian-weddings"),
        },
      ],
    },
    faq: {
      eyebrow: "Questions, answered",
      headline: "Frequently *asked.*",
      items: [
        {
          question:
            "How far in advance should we plan a destination Indian wedding?",
          answer: [
            "Eighteen to twenty-four months is our standard. The studio accepts only fourteen weddings per year, and Indian weddings book first because of the multi-day calendar and the specialists involved.",
            "Six-month lead times are technically possible — we have done them — but specialist availability shrinks, and the catering and decor cost can rise by 20–30%.",
          ],
        },
        {
          question:
            "Do you bring your own pandit and specialists, or use local ones?",
          answer: [
            "We bring our trusted specialists with us. Our pandit, choreographer, mehndi artists, and senior decorator travel with the studio. Local catering and florals are sourced in destination where the quality meets our standard; everything else flies in.",
          ],
        },
        {
          question:
            "Can you accommodate vegetarian, Jain or Gujarati dietary requirements?",
          answer: [
            "Yes — and as standard. Every meal across every day of the wedding has full vegetarian, Jain, vegan, gluten-free and allergen-free options. We brief the resort kitchen six months ahead, and bring a culturally-fluent menu consultant for the rehearsal week.",
          ],
        },
        {
          question: "What is the typical cost of a destination Indian wedding?",
          answer: [
            "A useful 2026 range for 200–400 guest weddings across three-to-five days is USD $350,000 – $1.2M, all-in. We share full transparent budgets in the first consultation, with line-item ranges by guest count.",
          ],
        },
        {
          question:
            "Can you host Punjabi, Gujarati and South Indian traditions equally well?",
          answer: [
            "Yes. Our pandit is multilingual and has officiated weddings across Punjabi, Gujarati, Tamil and Bengali traditions. We work with regional specialists where the music, cuisine, or attire requires it — for example, bringing in a Bharatanatyam choreographer for South Indian weddings.",
          ],
        },
        {
          question:
            "How do interfaith Indian weddings work — Hindu-Christian, Hindu-Jewish, Sikh-Hindu?",
          answer: [
            "The studio has hosted twenty-eight interfaith Indian weddings. Our default approach is two clergy, two ceremonies, one weekend — the pheras held alongside the chuppah, or the Anand Karaj followed by a Catholic mass.",
          ],
        },
        {
          question:
            "What about guests who have never attended an Indian wedding?",
          answer: [
            "We send every guest a pre-wedding guide three weeks ahead: schedule, dress codes per event, etiquette notes, key phrases in Hindi or Punjabi. The studio team is available throughout the weekend to answer questions in person. No one feels out of place.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "A private conversation —",
      headline: "*Begin* your\nIndian wedding.",
      body: "Tell us the tradition, the region, the families, and a rough date. Grecia writes back, personally, within five working days.",
      ctaLabel: "Request a private consultation →",
      ctaHref: staticPath("en", "/contact"),
    },
  },

  es: {
    name: "Bodas Indias",
    cardEyebrow: "La tradición que más ha celebrado el atelier",
    cardBlurb:
      "Mehndi, sangeet, haldi, baraat, varmala, pheras y recepción — celebradas a lo largo de tres a cinco días, a menudo para doscientos a ochocientos invitados.",
    cardMeta: "Punjabi · Gujarati · Sur de India · Sij",
    intro:
      "La tradición que el atelier ha celebrado más que ninguna otra: un arco de tres a cinco días sostenido por un pandit con quien trabajamos desde hace catorce años.",
    hero: {
      eyebrow: "Las Tradiciones · N.º 01",
      scriptOverline: "Una boda de",
      headline: "tradición *india.*",
      deck: "El tipo de boda que más celebra el atelier. Arcos de tres a cinco días, de doscientos a ochocientos invitados, y la fluidez cultural para acoger cualquier región del subcontinente.",
      captionLeft: "Saira y Adam · Cap Cana",
      captionCenter: "Mandap al atardecer · 2025",
      captionRight: "Lámina I",
    },
    factStrip: [
      {
        label: "Duración de la boda",
        value: "3 – 5 días",
        sub: "5 – 8 ceremonias",
      },
      {
        label: "Número de invitados",
        value: "200 – 800",
        sub: "Más por encargo",
      },
      {
        label: "Antelación",
        value: "18 – 24 meses",
        sub: "Los especialistas se reservan pronto",
      },
      {
        label: "Regiones habituales",
        value: "Punjab · Gujarat",
        sub: "Tamil · Bengalí · Sij",
      },
      { label: "Cocina", value: "Multirregional", sub: "De base vegetariana" },
      { label: "Idiomas", value: "ES · Hindi", sub: "Punjabi · Gujarati" },
    ],
    overview: {
      sideEyebrow: "La tradición",
      sideNote:
        "Cuarenta bodas indias, catorce años. Un registro vivo de lo que sabemos sobre acoger esta tradición con gracia.",
      headline: "Cinco días,\ndoscientos invitados,\nuna *oración.*",
      lede: "Una boda india no es una boda. Es un pequeño festival que se extiende durante una semana — coreografiado entre dos familias, ocho ceremonias, cuatro comidas al día y un vestuario siempre cambiante de color y tejido.",
      bodyParagraphs: [
        "Hemos planificado cuarenta bodas indias desde 2014. La mayoría han durado varios días. La mayoría han sido multirreligiosas dentro de la propia tradición — una novia punjabi que se casa con un novio gujarati, una ceremonia sij seguida de una recepción hindú, una familia tamil que celebra una boda bengalí en Punta Cana.",
        "La metodología, tras cuarenta: sostener la estructura de cada ritual como si la hubieran escrito las familias. Negarse a acortar o resumir una ceremonia por cuestiones de ritmo. Confiar en que el ritmo ya estaba siempre ahí.",
        "Trabajamos con un pandit hindú que ha oficiado cuarenta de nuestras bodas, un Granthi sij que viaja desde Londres para el Anand Karaj, artistas de mehndi que traen equipos completos para todo el fin de semana, y coreógrafos que tratan el sangeet no como entretenimiento sino como una pieza de teatro con cinco generaciones en escena.",
      ],
      pull: "«Negarse a acortar o resumir una ceremonia por cuestiones de ritmo. Confiar en que el ritmo ya estaba siempre ahí.»",
      signatureName: "Grecia",
      signatureRole: "Fundadora · Tras cuarenta bodas indias",
    },
    ceremonyArc: {
      eyebrow: "Estructura ceremonial",
      headline: "El arco en *siete partes.*",
      deck: "El orden completo de ceremonias que mantenemos en una boda india típica de cuatro días. Existen variaciones — cada boda ajusta el orden según la tradición familiar y la región.",
      steps: [
        {
          numeral: "I",
          name: "Mehndi",
          sub: "Noche de henna",
          when: "Noche del día 1",
          body: "Manos y pies decorados con henna intrincada. Música, baile, una reunión informal de las mujeres.",
        },
        {
          numeral: "II",
          name: "Haldi",
          sub: "Ceremonia de la cúrcuma",
          when: "Mañana del día 2",
          body: "La novia y el novio son ungidos con pasta de cúrcuma por la familia. A menudo se celebra por separado, de blanco.",
        },
        {
          numeral: "III",
          name: "Sangeet",
          sub: "Música y actuaciones",
          when: "Noche del día 2",
          body: "Actuaciones coreografiadas por ambas familias. La velada más teatral de la semana.",
        },
        {
          numeral: "IV",
          name: "Baraat",
          sub: "Procesión del novio",
          when: "Mañana del día 3",
          body: "El novio llega a caballo o en un coche antiguo, acompañado de tamborileros dhol y de la familia bailando.",
        },
        {
          numeral: "V",
          name: "Varmala",
          sub: "Intercambio de guirnaldas",
          when: "Mañana del día 3",
          body: "La novia y el novio intercambian guirnaldas florales en el mandap para aceptarse mutuamente.",
        },
        {
          numeral: "VI",
          name: "Pheras",
          sub: "Siete pasos sagrados",
          when: "Mañana del día 3",
          body: "La pareja rodea el fuego sagrado siete veces, cada vuelta un voto. La boda hindú legal.",
        },
        {
          numeral: "VII",
          name: "Recepción",
          sub: "Cena de celebración",
          when: "Noche del día 3",
          body: "Recepción de etiqueta, cena en mesa larga, los últimos discursos y el primer baile.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Conceptos de diseño",
      headline: "Mandap, *moodboards.*",
      deck: "Tres direcciones de diseño que hemos construido más de una vez. Cada boda las adapta — paleta, tejido, escala del mandap.",
      cards: [
        {
          title: "Marfil y caléndula",
          body: "Un mandap clásico y sobrio en drapeado de marfil, cuerdas de caléndula y velas de pilar de blanco cálido. Luce maravillosamente en la playa.",
          palette: ["#f5f0e6", "#e8a843", "#c25422", "#7a3814", "#3a2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Mandap", value: "Floral de cuatro pilares, 4,3 m" },
            { label: "Flores", value: "Caléndula · rosa · follaje" },
            {
              label: "Ideal para",
              value: "Playa · pabellón · pabellón con carpa",
            },
          ],
        },
        {
          title: "Rojo intenso y oro",
          body: "Un mandap formal de estilo punjabi en terciopelo carmesí intenso, acentos de latón y bordados pesados de oro. Lujo del lado de la recepción.",
          palette: ["#8a1e2a", "#c89d4e", "#3a1a1a", "#e8d6a0", "#f5f0e6"],
          imageKey: "concept-2",
          rows: [
            { label: "Mandap", value: "Terciopelo carmesí, latón dorado" },
            { label: "Flores", value: "Rosa roja · mango dorado" },
            { label: "Ideal para", value: "Finca interior · salón de baile" },
          ],
        },
        {
          title: "Crema y verdor",
          body: "Un mandap de jardín construido con follaje en capas, peonías de marfil y madera sin tratar. Discretamente moderno, fotografía bien con cualquier luz.",
          palette: ["#ebe3d3", "#a7a78b", "#4a523d", "#d6cdb8", "#2f3527"],
          imageKey: "concept-3",
          rows: [
            { label: "Mandap", value: "Dosel de madera y follaje" },
            { label: "Flores", value: "Peonía · follaje · olivo" },
            { label: "Ideal para", value: "Jardín · villa · viñedo" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocolo cultural",
      headline: "Lo que consideramos *sagrado.*",
      deck: "Seis principios sobre los que no transigimos. Hemos renunciado a bodas que nos pidieron lo contrario.",
      items: [
        {
          title: "El orden ritual no es negociable",
          body: "Los pheras van antes de la recepción. El baraat no comienza sin que la familia de la novia reciba al novio. No reordenamos las ceremonias por conveniencia del recinto ni por cuestiones de ritmo.",
        },
        {
          title: "El pandit elige los horarios",
          body: "Los horarios sagrados (muhurat) los calcula el pandit a partir de las cartas de la pareja. Programamos la boda en torno a ellos, y no al revés.",
        },
        {
          title: "Los mayores comen primero",
          body: "Las necesidades dietéticas vegetarianas y jainistas se atienden para los mayores antes de cerrar cualquier menú del cortejo nupcial. La comida no se estiliza antes de ser honesta.",
        },
        {
          title: "Casta y región son discretas pero reales",
          body: "Preguntamos, en privado, por la casta, la región y las costumbres familiares. No tratamos la boda como una celebración «india» genérica — las tradiciones punjabi, gujarati, tamil y bengalí difieren.",
        },
        {
          title: "La música debe ser en vivo siempre que sea posible",
          body: "Tamborileros dhol para el baraat, músicos clásicos para los pheras. La música grabada se permite en el sangeet y la recepción, pero no en los momentos sagrados.",
        },
        {
          title: "El mandap es estructural, no decorativo",
          body: "El mandap alberga el fuego sagrado y los siete pasos. Se construye para resistir la ceremonia — usamos estructuras con carga calculada, drapeados ignífugos y construcción tradicional de pilares.",
        },
      ],
    },
    planning: {
      eyebrow: "Planificación de varios días",
      headline: "Una boda de *cuatro días,* hora a hora.",
      deck: "El plano que usamos para una boda india típica de 300 invitados. Cada día es flexible; la estructura no.",
      days: [
        {
          numeral: "I",
          dayLabel: "Día uno",
          title: "Mehndi y bienvenida",
          body: "Los invitados llegan a lo largo del día. El atelier coordina los registros en el hotel. Cócteles de bienvenida por la noche, seguidos de la ceremonia del mehndi para las mujeres — los artistas de henna se instalan en tres estaciones para gestionar el volumen.",
          events: [
            {
              time: "Mañana",
              body: "Llegada de invitados · traslados al aeropuerto · registro en el hotel",
            },
            { time: "14:00", body: "Almuerzo de bienvenida en el resort" },
            { time: "18:00", body: "Ceremonia del mehndi · mujeres · 4 horas" },
            { time: "21:00", body: "Cena informal · bufé de jardín" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Día dos",
          title: "Haldi y sangeet",
          body: "El haldi se celebra por separado para la novia y el novio por la mañana — ambos de blanco, ambos ungidos por su familia. Tarde libre para los invitados. Sangeet por la noche — la velada más teatral de la semana, con actuaciones coreografiadas de ambas familias.",
          events: [
            { time: "09:00", body: "Ceremonia del haldi · novia · 90 minutos" },
            { time: "10:30", body: "Ceremonia del haldi · novio · 90 minutos" },
            { time: "13:00", body: "Almuerzo · junto a la piscina" },
            { time: "Tarde libre", body: "Excursión o descanso" },
            {
              time: "19:30",
              body: "Sangeet · actuaciones en escenario · cena cóctel · baile hasta medianoche",
            },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Día tres",
          title: "La boda",
          body: "Los pheras en el muhurat — normalmente a media mañana. El baraat comienza treinta minutos antes. Ceremonias familiares durante la primera parte de la tarde. Almuerzo servido al estilo tradicional. Recepción en el resort por la noche — etiqueta, mesa larga, primer baile.",
          events: [
            {
              time: "09:00",
              body: "Preparación de novia y novio · suites separadas",
            },
            {
              time: "10:30",
              body: "Procesión baraat · dhol · caballo · 30 minutos",
            },
            { time: "11:00", body: "Varmala · intercambio de guirnaldas" },
            { time: "11:30", body: "Pheras en el mandap · 90 minutos" },
            {
              time: "13:30",
              body: "Almuerzo indio tradicional · servicio en hoja de plátano",
            },
            { time: "19:00", body: "Cócteles de recepción" },
            {
              time: "20:30",
              body: "Cena de recepción · mesa larga · primer baile · discursos",
            },
          ],
        },
        {
          numeral: "IV",
          dayLabel: "Día cuatro",
          title: "Brunch y despedidas",
          body: "Un brunch del día siguiente ofrecido por la pareja — normalmente al aire libre, más informal, centrado en las despedidas. El fin no oficial de la boda para la mayoría de los invitados; las familias cercanas suelen quedarse un día o dos más.",
          events: [
            {
              time: "11:00",
              body: "Brunch · junto a la piscina o en el jardín",
            },
            { time: "Tarde", body: "Salidas · traslados al aeropuerto" },
            { time: "Noche", body: "Cena de familia cercana (opcional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilidad de destinos",
      headline: "Dónde funcionan *mejor* las bodas indias.",
      viewAllLabel: "Ver todos los destinos →",
      viewAllHref: staticPath("es", "/destinations"),
      cards: [
        {
          rating: 5,
          name: "Punta Cana",
          sub: "Caribe · todo el año",
          destinationSlug: "punta-cana",
        },
        {
          rating: 5,
          name: "Costa de Amalfi",
          sub: "Italia · mayo – octubre",
          destinationSlug: "amalfi",
        },
        {
          rating: 4,
          name: "Lago de Como",
          sub: "Italia · junio – septiembre",
          destinationSlug: "lake-como",
        },
        {
          rating: 4,
          name: "Costa Azul",
          sub: "Francia · junio – septiembre",
          destinationSlug: "cote-dazur",
        },
        {
          rating: 4,
          name: "Toscana",
          sub: "Italia · mayo – octubre",
          destinationSlug: "tuscany",
        },
        {
          rating: 3,
          name: "St. Barths",
          sub: "Caribe · noviembre – abril",
          destinationSlug: "st-barths",
        },
        {
          rating: 3,
          name: "Provenza",
          sub: "Francia · mayo – septiembre",
          destinationSlug: "provence",
        },
        {
          rating: 3,
          name: "Aspen y Napa",
          sub: "Estados Unidos · diciembre – marzo",
          destinationSlug: "aspen-napa",
        },
      ],
    },
    guest: {
      eyebrow: "Gestión de invitados",
      headline: "El cuidado *práctico* de 300 invitados.",
      deck: "La capa logística que la mayoría de los planificadores infradotan. Empezamos catorce meses antes.",
      cells: [
        {
          title: "Viajes y alojamiento",
          body: "Bloques de habitaciones en tres categorías de hotel — premium, estándar y familiar. Traslados al aeropuerto coordinados a lo largo de tres días de llegadas. Paquetes de bienvenida en cada habitación con el programa, el código de vestimenta de cada evento y los contactos de emergencia.",
        },
        {
          title: "Mayores y movilidad",
          body: "Asientos reservados, transporte separado, un enlace para mayores del equipo del atelier. Habitaciones en planta baja reservadas para invitados mayores de setenta y cinco años. Asistencia médica de guardia durante todo el fin de semana.",
        },
        {
          title: "Niños y guardería",
          body: "Equipo de guardería multilingüe para edades de 0 a 12 años, presente en el sangeet y la recepción. Menús infantiles en cada comida. Salas tranquilas para las siestas durante las ceremonias diurnas.",
        },
        {
          title: "Protocolo dietético",
          body: "Menús vegetarianos, veganos, jainistas, sin gluten y sin alérgenos en cada comida. Requisitos dietéticos religiosos (kosher, halal) coordinados cuando las familias mixtas lo requieren. Tres comidas diarias durante todo el fin de semana.",
        },
        {
          title: "Logística del vestuario",
          body: "Servicio de planchado en el hotel para la llegada, mitad de semana y la mañana de la recepción. Asistencia para el atado de saris y turbantes disponible a petición. Lehengas planchados y preparados la mañana de los pheras.",
        },
        {
          title: "Comunicaciones",
          body: "Grupo de WhatsApp para cada invitado, tres semanas antes. Sitio web dedicado a la boda con programa diario, códigos de vestimenta y mapas del recinto. Guías impresas en cada paquete de bienvenida.",
        },
      ],
    },
    related: {
      eyebrow: "Sigue leyendo",
      headline: "Del *diario.*",
      articles: [
        {
          category: "Bodas Indias · Punta Cana",
          title: "Los mejores recintos para bodas indias en Punta Cana",
          body: "Un registro vivo de los resorts que acogen un baraat de 300 invitados con gracia.",
          imageKey: "culture-related-1",
        },
        {
          category: "Varios días · Planificación",
          title: "El sangeet: por qué la noche anterior importa aún más",
          body: "Sobre el ensayo que ya no es un ensayo.",
          imageKey: "culture-related-2",
        },
        {
          category: "Diseño · India",
          title: "Una guía de campo de los estilos de mandap",
          body: "Notas de diseño punjabi, gujarati, tamil y bengalí — y en qué se diferencian.",
          imageKey: "culture-related-3",
        },
        {
          category: "Coste · India",
          title: "Lo que cuesta de verdad una boda india de lujo",
          body: "Presupuestos francos de 2026 por número de invitados.",
          imageKey: "culture-related-4",
        },
        {
          category: "Tradición",
          title: "Mehndi, en detalle",
          body: "Sobre la noche de henna que se ha convertido en el evento más fotografiado del fin de semana.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("es", "punta-cana") },
        { label: "Lago de Como", href: destinationPath("es", "lake-como") },
        { label: "Costa Azul", href: destinationPath("es", "cote-dazur") },
        { label: "Toscana", href: destinationPath("es", "tuscany") },
      ],
      sidebarVenues: [
        { label: "Kukua Beach Club" },
        { label: "Eden Roc Cap Cana" },
        { label: "Villa Tre Ville" },
        { label: "Château de la Croix" },
      ],
      sidebarCultures: [
        { label: "Bodas judías", href: culturePath("es", "jewish-weddings") },
        {
          label: "Bodas interreligiosas",
          href: culturePath("es", "interfaith-weddings"),
        },
        { label: "Bodas árabes", href: culturePath("es", "arab-weddings") },
        {
          label: "Bodas del sur de Asia",
          href: culturePath("es", "south-asian-weddings"),
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas, respondidas",
      headline: "Preguntas *frecuentes.*",
      items: [
        {
          question:
            "¿Con cuánta antelación deberíamos planificar una boda india en destino?",
          answer: [
            "De dieciocho a veinticuatro meses es nuestro estándar. El atelier acepta solo catorce bodas al año, y las bodas indias se reservan primero por el calendario de varios días y los especialistas implicados.",
            "Los plazos de seis meses son técnicamente posibles — los hemos hecho — pero la disponibilidad de especialistas se reduce, y el coste de catering y decoración puede subir entre un 20 y un 30 %.",
          ],
        },
        {
          question:
            "¿Traen su propio pandit y especialistas, o recurren a locales?",
          answer: [
            "Traemos a nuestros especialistas de confianza. Nuestro pandit, coreógrafo, artistas de mehndi y decorador sénior viajan con el atelier. El catering y las flores locales se obtienen en destino cuando la calidad cumple nuestro estándar; todo lo demás viaja en avión.",
          ],
        },
        {
          question:
            "¿Pueden atender requisitos dietéticos vegetarianos, jainistas o gujaratis?",
          answer: [
            "Sí — y de serie. Cada comida de cada día de la boda tiene opciones completas vegetarianas, jainistas, veganas, sin gluten y sin alérgenos. Informamos a la cocina del resort con seis meses de antelación y traemos a un consultor de menús culturalmente fluido para la semana del ensayo.",
          ],
        },
        {
          question: "¿Cuál es el coste típico de una boda india en destino?",
          answer: [
            "Un rango útil para 2026, para bodas de 200 a 400 invitados a lo largo de tres a cinco días, es de 350 000 a 1,2 millones de USD, todo incluido. Compartimos presupuestos totalmente transparentes en la primera consulta, con rangos por partidas según el número de invitados.",
          ],
        },
        {
          question:
            "¿Pueden acoger las tradiciones punjabi, gujarati y del sur de India igual de bien?",
          answer: [
            "Sí. Nuestro pandit es multilingüe y ha oficiado bodas en las tradiciones punjabi, gujarati, tamil y bengalí. Trabajamos con especialistas regionales cuando la música, la cocina o el atuendo lo requieren — por ejemplo, incorporando a un coreógrafo de Bharatanatyam para las bodas del sur de India.",
          ],
        },
        {
          question:
            "¿Cómo funcionan las bodas indias interreligiosas — hindú-cristiana, hindú-judía, sij-hindú?",
          answer: [
            "El atelier ha acogido veintiocho bodas indias interreligiosas. Nuestro enfoque por defecto es dos oficiantes, dos ceremonias, un fin de semana — los pheras junto a la chuppah, o el Anand Karaj seguido de una misa católica.",
          ],
        },
        {
          question: "¿Y los invitados que nunca han asistido a una boda india?",
          answer: [
            "Enviamos a cada invitado una guía previa a la boda con tres semanas de antelación: programa, códigos de vestimenta por evento, notas de etiqueta, frases clave en hindi o punjabi. El equipo del atelier está disponible durante todo el fin de semana para responder preguntas en persona. Nadie se siente fuera de lugar.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Una conversación privada —",
      headline: "*Comience* su\nboda india.",
      body: "Cuéntenos la tradición, la región, las familias y una fecha aproximada. Grecia responde, personalmente, en un plazo de cinco días laborables.",
      ctaLabel: "Solicitar una consulta privada →",
      ctaHref: staticPath("es", "/contact"),
    },
  },

  fr: {
    name: "Mariages Indiens",
    cardEyebrow: "La tradition la plus organisée par l'atelier",
    cardBlurb:
      "Mehndi, sangeet, haldi, baraat, varmala, pheras et réception — tenus sur trois à cinq jours, souvent pour deux cents à huit cents invités.",
    cardMeta: "Pendjabi · Gujarati · Inde du Sud · Sikh",
    intro:
      "La tradition que l'atelier a organisée plus que toute autre — une trame de trois à cinq jours portée par un pandit avec qui nous travaillons depuis quatorze ans.",
    hero: {
      eyebrow: "Les Traditions · No 01",
      scriptOverline: "Un mariage de",
      headline: "tradition *indienne.*",
      deck: "Le type de mariage le plus organisé par l'atelier. Des trames de trois à cinq jours, de deux cents à huit cents invités, et l'aisance culturelle pour accueillir toute région du sous-continent.",
      captionLeft: "Saira & Adam · Cap Cana",
      captionCenter: "Mandap au coucher du soleil · 2025",
      captionRight: "Planche I",
    },
    factStrip: [
      {
        label: "Durée du mariage",
        value: "3 – 5 jours",
        sub: "5 – 8 cérémonies",
      },
      {
        label: "Nombre d'invités",
        value: "200 – 800",
        sub: "Davantage sur demande",
      },
      {
        label: "Délai",
        value: "18 – 24 mois",
        sub: "Les spécialistes se réservent tôt",
      },
      {
        label: "Régions courantes",
        value: "Pendjab · Gujarat",
        sub: "Tamoul · Bengali · Sikh",
      },
      {
        label: "Cuisine",
        value: "Multirégionale",
        sub: "À dominante végétarienne",
      },
      { label: "Langues", value: "FR · Hindi", sub: "Pendjabi · Gujarati" },
    ],
    overview: {
      sideEyebrow: "La tradition",
      sideNote:
        "Quarante mariages indiens, quatorze ans. Un registre vivant de ce que nous savons de l'art d'accueillir cette tradition avec grâce.",
      headline: "Cinq jours,\ndeux cents invités,\nune *prière.*",
      lede: "Un mariage indien n'est pas un mariage. C'est un petit festival qui se déploie sur une semaine — chorégraphié entre deux familles, huit cérémonies, quatre repas par jour, et une garde-robe sans cesse renouvelée de couleurs et d'étoffes.",
      bodyParagraphs: [
        "Nous avons organisé quarante mariages indiens depuis 2014. La plupart se sont étalés sur plusieurs jours. La plupart ont été multiconfessionnels au sein même de la tradition — une mariée pendjabie épousant un marié gujarati, une cérémonie sikhe suivie d'une réception hindoue, une famille tamoule célébrant un mariage bengali à Punta Cana.",
        "La méthode, après quarante : tenir la structure de chaque rituel comme si les familles l'avaient écrite. Refuser d'abréger ou de résumer une cérémonie pour des questions de rythme. Faire confiance au rythme qui était déjà là, depuis toujours.",
        "Nous travaillons avec un pandit hindou qui a officié quarante de nos mariages, un Granthi sikh qui vient de Londres pour l'Anand Karaj, des artistes mehndi qui amènent des équipes entières pour tout le week-end, et des chorégraphes qui traitent le sangeet non comme un divertissement mais comme une pièce de théâtre réunissant cinq générations sur scène.",
      ],
      pull: "« Refuser d'abréger ou de résumer une cérémonie pour des questions de rythme. Faire confiance au rythme qui était déjà là, depuis toujours. »",
      signatureName: "Grecia",
      signatureRole: "Fondatrice · Après quarante mariages indiens",
    },
    ceremonyArc: {
      eyebrow: "Structure de la cérémonie",
      headline: "La trame en *sept parties.*",
      deck: "L'ordre complet des cérémonies que nous tenons sur un mariage indien type de quatre jours. Des variations existent — chaque mariage ajuste l'ordre selon la tradition familiale et la région.",
      steps: [
        {
          numeral: "I",
          name: "Mehndi",
          sub: "Soirée du henné",
          when: "Soir du jour 1",
          body: "Mains et pieds décorés d'un henné minutieux. Musique, danse, un rassemblement informel des femmes.",
        },
        {
          numeral: "II",
          name: "Haldi",
          sub: "Cérémonie du curcuma",
          when: "Matin du jour 2",
          body: "La mariée et le marié sont enduits de pâte de curcuma par la famille. Souvent tenue séparément, en blanc.",
        },
        {
          numeral: "III",
          name: "Sangeet",
          sub: "Musique et spectacles",
          when: "Soir du jour 2",
          body: "Spectacles chorégraphiés par les deux familles. La soirée la plus théâtrale de la semaine.",
        },
        {
          numeral: "IV",
          name: "Baraat",
          sub: "Procession du marié",
          when: "Matin du jour 3",
          body: "Le marié arrive à cheval ou dans une voiture ancienne, accompagné de tambours dhol et de la famille qui danse.",
        },
        {
          numeral: "V",
          name: "Varmala",
          sub: "Échange de guirlandes",
          when: "Matin du jour 3",
          body: "La mariée et le marié échangent des guirlandes de fleurs au mandap pour s'accepter l'un l'autre.",
        },
        {
          numeral: "VI",
          name: "Pheras",
          sub: "Sept pas sacrés",
          when: "Matin du jour 3",
          body: "Le couple fait sept fois le tour du feu sacré, chaque tour étant un vœu. Le mariage hindou légal.",
        },
        {
          numeral: "VII",
          name: "Réception",
          sub: "Dîner de célébration",
          when: "Soir du jour 3",
          body: "Réception en tenue de soirée, dîner en table d'honneur, les derniers discours et la première danse.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Concepts de design",
      headline: "Mandap, *moodboards.*",
      deck: "Trois directions de design que nous avons construites plus d'une fois. Chaque mariage les adapte — palette, étoffe, échelle du mandap.",
      cards: [
        {
          title: "Ivoire et souci",
          body: "Un mandap classique et épuré en drapé ivoire, cordes de souci et bougies piliers blanc chaud. Magnifique sur la plage.",
          palette: ["#f5f0e6", "#e8a843", "#c25422", "#7a3814", "#3a2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Mandap", value: "Floral à quatre piliers, 4,3 m" },
            { label: "Fleurs", value: "Souci · rose · feuillage" },
            {
              label: "Idéal pour",
              value: "Plage · pavillon · pavillon sous tente",
            },
          ],
        },
        {
          title: "Rouge profond et or",
          body: "Un mandap formel de style pendjabi en velours cramoisi profond, accents de laiton et lourdes broderies dorées. Le luxe côté réception.",
          palette: ["#8a1e2a", "#c89d4e", "#3a1a1a", "#e8d6a0", "#f5f0e6"],
          imageKey: "concept-2",
          rows: [
            { label: "Mandap", value: "Velours cramoisi, laiton doré" },
            { label: "Fleurs", value: "Rose rouge · mangue dorée" },
            { label: "Idéal pour", value: "Domaine intérieur · salle de bal" },
          ],
        },
        {
          title: "Crème et verdure",
          body: "Un mandap de jardin bâti de feuillages superposés, de pivoines ivoire et de bois brut. Discrètement moderne, photogénique sous toute lumière.",
          palette: ["#ebe3d3", "#a7a78b", "#4a523d", "#d6cdb8", "#2f3527"],
          imageKey: "concept-3",
          rows: [
            { label: "Mandap", value: "Canopée de bois et feuillage" },
            { label: "Fleurs", value: "Pivoine · feuillage · olivier" },
            { label: "Idéal pour", value: "Jardin · villa · vignoble" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocole culturel",
      headline: "Ce que nous tenons pour *sacré.*",
      deck: "Six principes sur lesquels nous ne transigeons pas. Nous avons renoncé à des mariages qui nous le demandaient.",
      items: [
        {
          title: "L'ordre rituel n'est pas négociable",
          body: "Les pheras précèdent la réception. Le baraat ne commence pas sans que la famille de la mariée accueille le marié. Nous ne réorganisons pas les cérémonies par commodité de lieu ou par souci de rythme.",
        },
        {
          title: "Le pandit choisit les horaires",
          body: "Les horaires sacrés (muhurat) sont calculés par le pandit à partir des thèmes du couple. Nous organisons le mariage autour d'eux — et non l'inverse.",
        },
        {
          title: "Les aînés mangent d'abord",
          body: "Les exigences végétariennes et jaïnes sont prises en compte pour les aînés avant d'arrêter tout menu du cortège nuptial. La cuisine n'est pas stylisée avant d'être honnête.",
        },
        {
          title: "Caste et région sont discrètes mais réelles",
          body: "Nous demandons, en privé, la caste, la région et les coutumes familiales. Nous ne traitons pas le mariage comme une célébration « indienne » générique — les traditions pendjabie, gujaratie, tamoule et bengalie diffèrent.",
        },
        {
          title: "La musique doit être live autant que possible",
          body: "Tambours dhol pour le baraat, musiciens classiques pour les pheras. La musique enregistrée est permise au sangeet et à la réception, mais pas aux moments sacrés.",
        },
        {
          title: "Le mandap est structurel, non décoratif",
          body: "Le mandap abrite le feu sacré et les sept pas. Il est bâti pour tenir toute la cérémonie — nous employons des structures à charge calculée, des drapés ignifuges et une construction de piliers traditionnelle.",
        },
      ],
    },
    planning: {
      eyebrow: "Planification sur plusieurs jours",
      headline: "Un mariage de *quatre jours,* heure par heure.",
      deck: "Le plan que nous utilisons pour un mariage indien type de 300 invités. Chaque jour s'adapte ; la structure, non.",
      days: [
        {
          numeral: "I",
          dayLabel: "Premier jour",
          title: "Mehndi et accueil",
          body: "Les invités arrivent tout au long de la journée. Les enregistrements à l'hôtel sont coordonnés par l'atelier. Cocktails de bienvenue en soirée, suivis de la cérémonie du mehndi pour les femmes — les artistes du henné s'installent sur trois postes pour gérer l'affluence.",
          events: [
            {
              time: "Matin",
              body: "Arrivées des invités · transferts aéroport · enregistrement à l'hôtel",
            },
            { time: "14h00", body: "Déjeuner de bienvenue au resort" },
            { time: "18h00", body: "Cérémonie du mehndi · femmes · 4 heures" },
            { time: "21h00", body: "Dîner décontracté · buffet au jardin" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Deuxième jour",
          title: "Haldi et sangeet",
          body: "Le haldi est tenu séparément pour la mariée et le marié le matin — tous deux en blanc, tous deux enduits par leur famille. Après-midi libre pour les invités. Sangeet le soir — la nuit la plus théâtrale de la semaine, avec des spectacles chorégraphiés des deux familles.",
          events: [
            { time: "09h00", body: "Cérémonie du haldi · mariée · 90 minutes" },
            { time: "10h30", body: "Cérémonie du haldi · marié · 90 minutes" },
            { time: "13h00", body: "Déjeuner · au bord de la piscine" },
            { time: "Après-midi libre", body: "Excursion ou repos" },
            {
              time: "19h30",
              body: "Sangeet · spectacles sur scène · dîner cocktail · danse jusqu'à minuit",
            },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Troisième jour",
          title: "Le mariage",
          body: "Les pheras au muhurat — généralement en fin de matinée. Le baraat débute trente minutes avant. Cérémonies familiales jusqu'en début d'après-midi. Déjeuner servi à la manière traditionnelle. Réception au resort en soirée — tenue de soirée, table d'honneur, première danse.",
          events: [
            { time: "09h00", body: "Préparation des mariés · suites séparées" },
            {
              time: "10h30",
              body: "Procession baraat · dhol · cheval · 30 minutes",
            },
            { time: "11h00", body: "Varmala · échange de guirlandes" },
            { time: "11h30", body: "Pheras au mandap · 90 minutes" },
            {
              time: "13h30",
              body: "Déjeuner indien traditionnel · service sur feuille de bananier",
            },
            { time: "19h00", body: "Cocktails de réception" },
            {
              time: "20h30",
              body: "Dîner de réception · table d'honneur · première danse · discours",
            },
          ],
        },
        {
          numeral: "IV",
          dayLabel: "Quatrième jour",
          title: "Brunch et adieux",
          body: "Un brunch du lendemain offert par le couple — généralement en plein air, plus décontracté, centré sur les adieux. La fin officieuse du mariage pour la plupart des invités ; les familles proches restent souvent un jour ou deux de plus.",
          events: [
            {
              time: "11h00",
              body: "Brunch · au bord de la piscine ou au jardin",
            },
            { time: "Après-midi", body: "Départs · transferts aéroport" },
            { time: "Soir", body: "Dîner en famille proche (optionnel)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilité des destinations",
      headline: "Où les mariages indiens *réussissent le mieux.*",
      viewAllLabel: "Voir toutes les destinations →",
      viewAllHref: staticPath("fr", "/destinations"),
      cards: [
        {
          rating: 5,
          name: "Punta Cana",
          sub: "Caraïbes · toute l'année",
          destinationSlug: "punta-cana",
        },
        {
          rating: 5,
          name: "Côte amalfitaine",
          sub: "Italie · mai – octobre",
          destinationSlug: "amalfi",
        },
        {
          rating: 4,
          name: "Lac de Côme",
          sub: "Italie · juin – septembre",
          destinationSlug: "lake-como",
        },
        {
          rating: 4,
          name: "Côte d'Azur",
          sub: "France · juin – septembre",
          destinationSlug: "cote-dazur",
        },
        {
          rating: 4,
          name: "Toscane",
          sub: "Italie · mai – octobre",
          destinationSlug: "tuscany",
        },
        {
          rating: 3,
          name: "Saint-Barthélemy",
          sub: "Caraïbes · novembre – avril",
          destinationSlug: "st-barths",
        },
        {
          rating: 3,
          name: "Provence",
          sub: "France · mai – septembre",
          destinationSlug: "provence",
        },
        {
          rating: 3,
          name: "Aspen & Napa",
          sub: "États-Unis · décembre – mars",
          destinationSlug: "aspen-napa",
        },
      ],
    },
    guest: {
      eyebrow: "Gestion des invités",
      headline: "Le soin *pratique* de 300 invités.",
      deck: "La couche logistique que la plupart des organisateurs sous-dotent. Nous commençons quatorze mois à l'avance.",
      cells: [
        {
          title: "Voyage et hébergement",
          body: "Blocs de chambres dans trois catégories d'hôtel — premium, standard et familial. Transferts aéroport coordonnés sur trois jours d'arrivées. Pochettes de bienvenue dans chaque chambre avec le programme, le code vestimentaire par événement et les contacts d'urgence.",
        },
        {
          title: "Aînés et mobilité",
          body: "Places réservées, transport séparé, un référent aînés de l'équipe de l'atelier. Chambres au rez-de-chaussée réservées aux invités de plus de soixante-quinze ans. Médecin de garde pour toute la durée du week-end.",
        },
        {
          title: "Enfants et garde",
          body: "Équipe de garde multilingue pour les 0 à 12 ans, présente au sangeet et à la réception. Menus enfants à chaque repas. Salles calmes pour les siestes pendant les cérémonies de jour.",
        },
        {
          title: "Protocole alimentaire",
          body: "Menus végétariens, végétaliens, jaïns, sans gluten et sans allergène à chaque repas. Exigences alimentaires religieuses (casher, halal) coordonnées lorsque des familles mixtes le requièrent. Trois repas par jour sur tout le week-end.",
        },
        {
          title: "Logistique des tenues",
          body: "Service de repassage à l'hôtel pour l'arrivée, le milieu de semaine et le matin de la réception. Aide au nouage des saris et des turbans disponible sur demande. Lehengas repassés et préparés le matin des pheras.",
        },
        {
          title: "Communication",
          body: "Groupe WhatsApp pour chaque invité, trois semaines avant. Site web dédié au mariage avec programme quotidien, codes vestimentaires et plans du lieu. Guides imprimés dans chaque pochette de bienvenue.",
        },
      ],
    },
    related: {
      eyebrow: "Continuer la lecture",
      headline: "Du *journal.*",
      articles: [
        {
          category: "Mariages Indiens · Punta Cana",
          title: "Les meilleurs lieux de mariage indien à Punta Cana",
          body: "Un registre vivant des resorts qui accueillent un baraat de 300 invités avec grâce.",
          imageKey: "culture-related-1",
        },
        {
          category: "Plusieurs jours · Planification",
          title: "Le sangeet : pourquoi la veille compte encore plus",
          body: "Sur la répétition qui n'en est plus une.",
          imageKey: "culture-related-2",
        },
        {
          category: "Design · Inde",
          title: "Un guide pratique des styles de mandap",
          body: "Notes de design pendjabi, gujarati, tamoul et bengali — et leurs différences.",
          imageKey: "culture-related-3",
        },
        {
          category: "Coût · Inde",
          title: "Ce que coûte vraiment un mariage indien de luxe",
          body: "Budgets francs 2026 selon le nombre d'invités.",
          imageKey: "culture-related-4",
        },
        {
          category: "Tradition",
          title: "Le mehndi, en détail",
          body: "Sur la soirée du henné devenue l'événement le plus photographié du week-end.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("fr", "punta-cana") },
        { label: "Lac de Côme", href: destinationPath("fr", "lake-como") },
        { label: "Côte d'Azur", href: destinationPath("fr", "cote-dazur") },
        { label: "Toscane", href: destinationPath("fr", "tuscany") },
      ],
      sidebarVenues: [
        { label: "Kukua Beach Club" },
        { label: "Eden Roc Cap Cana" },
        { label: "Villa Tre Ville" },
        { label: "Château de la Croix" },
      ],
      sidebarCultures: [
        { label: "Mariages juifs", href: culturePath("fr", "jewish-weddings") },
        {
          label: "Mariages interconfessionnels",
          href: culturePath("fr", "interfaith-weddings"),
        },
        { label: "Mariages arabes", href: culturePath("fr", "arab-weddings") },
        {
          label: "Mariages d'Asie du Sud",
          href: culturePath("fr", "south-asian-weddings"),
        },
      ],
    },
    faq: {
      eyebrow: "Vos questions, nos réponses",
      headline: "Questions *fréquentes.*",
      items: [
        {
          question:
            "Combien de temps à l'avance faut-il planifier un mariage indien en destination ?",
          answer: [
            "Dix-huit à vingt-quatre mois, c'est notre standard. L'atelier n'accepte que quatorze mariages par an, et les mariages indiens se réservent en premier en raison du calendrier sur plusieurs jours et des spécialistes impliqués.",
            "Des délais de six mois sont techniquement possibles — nous en avons fait — mais la disponibilité des spécialistes se réduit, et le coût du traiteur et du décor peut augmenter de 20 à 30 %.",
          ],
        },
        {
          question:
            "Apportez-vous votre propre pandit et vos spécialistes, ou faites-vous appel à des prestataires locaux ?",
          answer: [
            "Nous amenons nos spécialistes de confiance. Notre pandit, notre chorégraphe, nos artistes mehndi et notre décorateur principal voyagent avec l'atelier. Le traiteur et les fleurs sont sourcés sur place lorsque la qualité atteint notre standard ; tout le reste arrive par avion.",
          ],
        },
        {
          question:
            "Pouvez-vous répondre aux exigences végétariennes, jaïnes ou gujaraties ?",
          answer: [
            "Oui — et de série. Chaque repas, chaque jour du mariage, propose des options complètes végétariennes, jaïnes, végétaliennes, sans gluten et sans allergène. Nous briefons la cuisine du resort six mois à l'avance et amenons un consultant menu culturellement averti pour la semaine de répétition.",
          ],
        },
        {
          question:
            "Quel est le coût type d'un mariage indien en destination ?",
          answer: [
            "Une fourchette utile pour 2026, pour des mariages de 200 à 400 invités sur trois à cinq jours, va de 350 000 à 1,2 million USD, tout compris. Nous partageons des budgets entièrement transparents dès la première consultation, avec des fourchettes par poste selon le nombre d'invités.",
          ],
        },
        {
          question:
            "Pouvez-vous accueillir aussi bien les traditions pendjabie, gujaratie et de l'Inde du Sud ?",
          answer: [
            "Oui. Notre pandit est multilingue et a officié des mariages dans les traditions pendjabie, gujaratie, tamoule et bengalie. Nous travaillons avec des spécialistes régionaux lorsque la musique, la cuisine ou la tenue l'exigent — par exemple en faisant venir un chorégraphe de Bharatanatyam pour les mariages de l'Inde du Sud.",
          ],
        },
        {
          question:
            "Comment fonctionnent les mariages indiens interconfessionnels — hindou-chrétien, hindou-juif, sikh-hindou ?",
          answer: [
            "L'atelier a accueilli vingt-huit mariages indiens interconfessionnels. Notre approche par défaut est deux officiants, deux cérémonies, un week-end — les pheras tenus aux côtés de la houppa, ou l'Anand Karaj suivi d'une messe catholique.",
          ],
        },
        {
          question:
            "Et les invités qui n'ont jamais assisté à un mariage indien ?",
          answer: [
            "Nous envoyons à chaque invité un guide d'avant-mariage trois semaines à l'avance : programme, codes vestimentaires par événement, notes d'étiquette, phrases clés en hindi ou en pendjabi. L'équipe de l'atelier est disponible tout le week-end pour répondre aux questions en personne. Personne ne se sent à l'écart.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Une conversation privée —",
      headline: "*Commencez* votre\nmariage indien.",
      body: "Dites-nous la tradition, la région, les familles et une date approximative. Grecia vous répond, personnellement, sous cinq jours ouvrés.",
      ctaLabel: "Demander une consultation privée →",
      ctaHref: staticPath("fr", "/contact"),
    },
  },

  pt: {
    name: "Casamentos Indianos",
    cardEyebrow: "A tradição que o ateliê mais realizou",
    cardBlurb:
      "Mehndi, sangeet, haldi, baraat, varmala, pheras e receção — realizados ao longo de três a cinco dias, muitas vezes para duzentos a oitocentos convidados.",
    cardMeta: "Punjabi · Gujarati · Sul da Índia · Sikh",
    intro:
      "A tradição que o ateliê realizou mais do que qualquer outra — um arco de três a cinco dias conduzido por um pandit com quem trabalhamos há catorze anos.",
    hero: {
      eyebrow: "As Tradições · N.º 01",
      scriptOverline: "Um casamento de",
      headline: "tradição *indiana.*",
      deck: "O tipo de casamento que o ateliê mais realiza. Arcos de três a cinco dias, de duzentos a oitocentos convidados, e a fluência cultural para acolher qualquer região do subcontinente.",
      captionLeft: "Saira e Adam · Cap Cana",
      captionCenter: "Mandap ao pôr do sol · 2025",
      captionRight: "Estampa I",
    },
    factStrip: [
      {
        label: "Duração do casamento",
        value: "3 – 5 dias",
        sub: "5 – 8 cerimónias",
      },
      {
        label: "Número de convidados",
        value: "200 – 800",
        sub: "Mais a pedido",
      },
      {
        label: "Antecedência",
        value: "18 – 24 meses",
        sub: "Os especialistas reservam-se cedo",
      },
      {
        label: "Regiões comuns",
        value: "Punjab · Gujarat",
        sub: "Tamil · Bengali · Sikh",
      },
      { label: "Cozinha", value: "Multirregional", sub: "De base vegetariana" },
      { label: "Idiomas", value: "PT · Hindi", sub: "Punjabi · Gujarati" },
    ],
    overview: {
      sideEyebrow: "A tradição",
      sideNote:
        "Quarenta casamentos indianos, catorze anos. Um registo vivo do que sabemos sobre acolher esta tradição com graça.",
      headline: "Cinco dias,\nduzentos convidados,\numa *oração.*",
      lede: "Um casamento indiano não é um casamento. É um pequeno festival que se estende ao longo de uma semana — coreografado entre duas famílias, oito cerimónias, quatro refeições por dia, e um guarda-roupa em constante mudança de cor e tecido.",
      bodyParagraphs: [
        "Planeámos quarenta casamentos indianos desde 2014. A maioria estendeu-se por vários dias. A maioria foi multirreligiosa dentro da própria tradição — uma noiva punjabi a casar com um noivo gujarati, uma cerimónia sikh seguida de uma receção hindu, uma família tamil a celebrar um casamento bengali em Punta Cana.",
        "A metodologia, após quarenta: sustentar a estrutura de cada ritual como se as famílias a tivessem escrito. Recusar encurtar ou resumir uma cerimónia por questões de ritmo. Confiar que o ritmo já lá estava, desde sempre.",
        "Trabalhamos com um pandit hindu que oficiou quarenta dos nossos casamentos, um Granthi sikh que viaja de Londres para o Anand Karaj, artistas de mehndi que trazem equipas completas para todo o fim de semana, e coreógrafos que tratam o sangeet não como entretenimento mas como uma peça de teatro com cinco gerações em palco.",
      ],
      pull: "«Recusar encurtar ou resumir uma cerimónia por questões de ritmo. Confiar que o ritmo já lá estava, desde sempre.»",
      signatureName: "Grecia",
      signatureRole: "Fundadora · Após quarenta casamentos indianos",
    },
    ceremonyArc: {
      eyebrow: "Estrutura da cerimónia",
      headline: "O arco em *sete partes.*",
      deck: "A ordem completa das cerimónias que mantemos num casamento indiano típico de quatro dias. Existem variações — cada casamento ajusta a ordem conforme a tradição familiar e a região.",
      steps: [
        {
          numeral: "I",
          name: "Mehndi",
          sub: "Noite de hena",
          when: "Noite do dia 1",
          body: "Mãos e pés decorados com hena intrincada. Música, dança, um encontro informal das mulheres.",
        },
        {
          numeral: "II",
          name: "Haldi",
          sub: "Cerimónia da curcuma",
          when: "Manhã do dia 2",
          body: "A noiva e o noivo são ungidos com pasta de curcuma pela família. Muitas vezes realizada em separado, de branco.",
        },
        {
          numeral: "III",
          name: "Sangeet",
          sub: "Música e atuações",
          when: "Noite do dia 2",
          body: "Atuações coreografadas por ambas as famílias. A noite mais teatral da semana.",
        },
        {
          numeral: "IV",
          name: "Baraat",
          sub: "Procissão do noivo",
          when: "Manhã do dia 3",
          body: "O noivo chega a cavalo ou num carro clássico, acompanhado de tocadores de dhol e da família a dançar.",
        },
        {
          numeral: "V",
          name: "Varmala",
          sub: "Troca de guirlandas",
          when: "Manhã do dia 3",
          body: "A noiva e o noivo trocam guirlandas de flores no mandap para se aceitarem mutuamente.",
        },
        {
          numeral: "VI",
          name: "Pheras",
          sub: "Sete passos sagrados",
          when: "Manhã do dia 3",
          body: "O casal rodeia o fogo sagrado sete vezes, cada volta um voto. O casamento hindu legal.",
        },
        {
          numeral: "VII",
          name: "Receção",
          sub: "Jantar de celebração",
          when: "Noite do dia 3",
          body: "Receção de gala, jantar em mesa comprida, os últimos discursos e a primeira dança.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Conceitos de design",
      headline: "Mandap, *moodboards.*",
      deck: "Três direções de design que construímos mais do que uma vez. Cada casamento adapta-as — paleta, tecido, escala do mandap.",
      cards: [
        {
          title: "Marfim e malmequer",
          body: "Um mandap clássico e sóbrio em drapeado de marfim, cordas de malmequer e velas de pilar de branco quente. Fica deslumbrante na praia.",
          palette: ["#f5f0e6", "#e8a843", "#c25422", "#7a3814", "#3a2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Mandap", value: "Floral de quatro pilares, 4,3 m" },
            { label: "Flores", value: "Malmequer · rosa · folhagem" },
            {
              label: "Ideal para",
              value: "Praia · pavilhão · pavilhão com tenda",
            },
          ],
        },
        {
          title: "Vermelho intenso e dourado",
          body: "Um mandap formal de estilo punjabi em veludo carmesim intenso, apontamentos de latão e bordados pesados a ouro. Luxo do lado da receção.",
          palette: ["#8a1e2a", "#c89d4e", "#3a1a1a", "#e8d6a0", "#f5f0e6"],
          imageKey: "concept-2",
          rows: [
            { label: "Mandap", value: "Veludo carmesim, latão dourado" },
            { label: "Flores", value: "Rosa vermelha · manga dourada" },
            { label: "Ideal para", value: "Quinta interior · salão de baile" },
          ],
        },
        {
          title: "Creme e verdura",
          body: "Um mandap de jardim construído com folhagem em camadas, peónias de marfim e madeira natural. Discretamente moderno, fotografa bem com qualquer luz.",
          palette: ["#ebe3d3", "#a7a78b", "#4a523d", "#d6cdb8", "#2f3527"],
          imageKey: "concept-3",
          rows: [
            { label: "Mandap", value: "Dossel de madeira e folhagem" },
            { label: "Flores", value: "Peónia · folhagem · oliveira" },
            { label: "Ideal para", value: "Jardim · villa · vinha" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocolo cultural",
      headline: "O que consideramos *sagrado.*",
      deck: "Seis princípios sobre os quais não cedemos. Já desistimos de casamentos que nos pediram o contrário.",
      items: [
        {
          title: "A ordem ritual não é negociável",
          body: "Os pheras vêm antes da receção. O baraat não começa sem que a família da noiva receba o noivo. Não reorganizamos as cerimónias por conveniência do espaço nem por questões de ritmo.",
        },
        {
          title: "O pandit escolhe os horários",
          body: "Os horários sagrados (muhurat) são calculados pelo pandit a partir dos mapas do casal. Organizamos o casamento em torno deles — e não o contrário.",
        },
        {
          title: "Os mais velhos comem primeiro",
          body: "As necessidades alimentares vegetarianas e jainistas são acauteladas para os mais velhos antes de se fechar qualquer ementa do cortejo nupcial. A comida não é estilizada antes de ser honesta.",
        },
        {
          title: "Casta e região são discretas mas reais",
          body: "Perguntamos, em privado, sobre casta, região e costumes familiares. Não tratamos o casamento como uma celebração «indiana» genérica — as tradições punjabi, gujarati, tamil e bengali diferem.",
        },
        {
          title: "A música deve ser ao vivo sempre que possível",
          body: "Tocadores de dhol para o baraat, músicos clássicos para os pheras. A música gravada é permitida no sangeet e na receção, mas não nos momentos sagrados.",
        },
        {
          title: "O mandap é estrutural, não decorativo",
          body: "O mandap acolhe o fogo sagrado e os sete passos. É construído para durar toda a cerimónia — usamos estruturas com carga calculada, drapeados ignífugos e construção tradicional de pilares.",
        },
      ],
    },
    planning: {
      eyebrow: "Planeamento de vários dias",
      headline: "Um casamento de *quatro dias,* hora a hora.",
      deck: "O esquema que usamos para um casamento indiano típico de 300 convidados. Cada dia é flexível; a estrutura não.",
      days: [
        {
          numeral: "I",
          dayLabel: "Dia um",
          title: "Mehndi e boas-vindas",
          body: "Os convidados chegam ao longo do dia. Os check-ins no hotel são coordenados pelo ateliê. Cocktails de boas-vindas à noite, seguidos da cerimónia do mehndi para as mulheres — os artistas de hena instalam-se em três estações para gerir o volume.",
          events: [
            {
              time: "Manhã",
              body: "Chegada de convidados · transferes do aeroporto · check-in no hotel",
            },
            { time: "14:00", body: "Almoço de boas-vindas no resort" },
            { time: "18:00", body: "Cerimónia do mehndi · mulheres · 4 horas" },
            { time: "21:00", body: "Jantar informal · bufê de jardim" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Dia dois",
          title: "Haldi e sangeet",
          body: "O haldi é realizado em separado para a noiva e o noivo de manhã — ambos de branco, ambos ungidos pela sua família. Tarde livre para os convidados. Sangeet à noite — a noite mais teatral da semana, com atuações coreografadas de ambas as famílias.",
          events: [
            { time: "09:00", body: "Cerimónia do haldi · noiva · 90 minutos" },
            { time: "10:30", body: "Cerimónia do haldi · noivo · 90 minutos" },
            { time: "13:00", body: "Almoço · junto à piscina" },
            { time: "Tarde livre", body: "Excursão ou descanso" },
            {
              time: "19:30",
              body: "Sangeet · atuações em palco · jantar cocktail · dança até à meia-noite",
            },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Dia três",
          title: "O casamento",
          body: "Os pheras no muhurat — normalmente ao fim da manhã. O baraat começa trinta minutos antes. Cerimónias familiares até ao início da tarde. Almoço servido ao estilo tradicional. Receção no resort à noite — gala, mesa comprida, primeira dança.",
          events: [
            {
              time: "09:00",
              body: "Preparação da noiva e do noivo · suítes separadas",
            },
            {
              time: "10:30",
              body: "Procissão baraat · dhol · cavalo · 30 minutos",
            },
            { time: "11:00", body: "Varmala · troca de guirlandas" },
            { time: "11:30", body: "Pheras no mandap · 90 minutos" },
            {
              time: "13:30",
              body: "Almoço indiano tradicional · serviço em folha de bananeira",
            },
            { time: "19:00", body: "Cocktails de receção" },
            {
              time: "20:30",
              body: "Jantar de receção · mesa comprida · primeira dança · discursos",
            },
          ],
        },
        {
          numeral: "IV",
          dayLabel: "Dia quatro",
          title: "Brunch e despedidas",
          body: "Um brunch do dia seguinte oferecido pelo casal — normalmente ao ar livre, mais informal, centrado nas despedidas. O fim não oficial do casamento para a maioria dos convidados; as famílias próximas costumam ficar mais um dia ou dois.",
          events: [
            { time: "11:00", body: "Brunch · junto à piscina ou no jardim" },
            { time: "Tarde", body: "Partidas · transferes do aeroporto" },
            { time: "Noite", body: "Jantar de família próxima (opcional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilidade de destinos",
      headline: "Onde os casamentos indianos *resultam melhor.*",
      viewAllLabel: "Ver todos os destinos →",
      viewAllHref: staticPath("pt", "/destinations"),
      cards: [
        {
          rating: 5,
          name: "Punta Cana",
          sub: "Caraíbas · todo o ano",
          destinationSlug: "punta-cana",
        },
        {
          rating: 5,
          name: "Costa Amalfitana",
          sub: "Itália · maio – outubro",
          destinationSlug: "amalfi",
        },
        {
          rating: 4,
          name: "Lago de Como",
          sub: "Itália · junho – setembro",
          destinationSlug: "lake-como",
        },
        {
          rating: 4,
          name: "Costa Azul",
          sub: "França · junho – setembro",
          destinationSlug: "cote-dazur",
        },
        {
          rating: 4,
          name: "Toscana",
          sub: "Itália · maio – outubro",
          destinationSlug: "tuscany",
        },
        {
          rating: 3,
          name: "St. Barths",
          sub: "Caraíbas · novembro – abril",
          destinationSlug: "st-barths",
        },
        {
          rating: 3,
          name: "Provença",
          sub: "França · maio – setembro",
          destinationSlug: "provence",
        },
        {
          rating: 3,
          name: "Aspen e Napa",
          sub: "Estados Unidos · dezembro – março",
          destinationSlug: "aspen-napa",
        },
      ],
    },
    guest: {
      eyebrow: "Gestão de convidados",
      headline: "O cuidado *prático* de 300 convidados.",
      deck: "A camada logística que a maioria dos organizadores subdimensiona. Começamos catorze meses antes.",
      cells: [
        {
          title: "Viagens e alojamento",
          body: "Blocos de quartos em três categorias de hotel — premium, padrão e família. Transferes do aeroporto coordenados ao longo de três dias de chegadas. Pacotes de boas-vindas em cada quarto com o programa, o código de vestuário por evento e os contactos de emergência.",
        },
        {
          title: "Mais velhos e mobilidade",
          body: "Lugares reservados, transporte separado, um elo de ligação para os mais velhos da equipa do ateliê. Quartos no piso térreo reservados para convidados com mais de setenta e cinco anos. Apoio médico de permanência durante todo o fim de semana.",
        },
        {
          title: "Crianças e acompanhamento",
          body: "Equipa de acompanhamento multilingue para idades dos 0 aos 12 anos, presente no sangeet e na receção. Ementas infantis em cada refeição. Salas tranquilas para as sestas durante as cerimónias diurnas.",
        },
        {
          title: "Protocolo alimentar",
          body: "Ementas vegetarianas, veganas, jainistas, sem glúten e sem alergénios em cada refeição. Requisitos alimentares religiosos (kosher, halal) coordenados quando famílias mistas o exigem. Três refeições diárias ao longo do fim de semana.",
        },
        {
          title: "Logística do vestuário",
          body: "Serviço de engomadoria no hotel para a chegada, meio da semana e manhã da receção. Apoio para atar saris e turbantes disponível a pedido. Lehengas engomados e preparados na manhã dos pheras.",
        },
        {
          title: "Comunicações",
          body: "Grupo de WhatsApp para cada convidado, três semanas antes. Website dedicado ao casamento com programa diário, códigos de vestuário e mapas do espaço. Guias impressos em cada pacote de boas-vindas.",
        },
      ],
    },
    related: {
      eyebrow: "Continuar a ler",
      headline: "Do *diário.*",
      articles: [
        {
          category: "Casamentos Indianos · Punta Cana",
          title: "Os melhores espaços para casamentos indianos em Punta Cana",
          body: "Um registo vivo dos resorts que acolhem um baraat de 300 convidados com graça.",
          imageKey: "culture-related-1",
        },
        {
          category: "Vários dias · Planeamento",
          title: "O sangeet: porque a noite anterior importa ainda mais",
          body: "Sobre o ensaio que já não é um ensaio.",
          imageKey: "culture-related-2",
        },
        {
          category: "Design · Índia",
          title: "Um guia de campo dos estilos de mandap",
          body: "Notas de design punjabi, gujarati, tamil e bengali — e como diferem.",
          imageKey: "culture-related-3",
        },
        {
          category: "Custo · Índia",
          title: "O que custa de facto um casamento indiano de luxo",
          body: "Orçamentos francos de 2026 por número de convidados.",
          imageKey: "culture-related-4",
        },
        {
          category: "Tradição",
          title: "Mehndi, em detalhe",
          body: "Sobre a noite de hena que se tornou o evento mais fotografado do fim de semana.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("pt", "punta-cana") },
        { label: "Lago de Como", href: destinationPath("pt", "lake-como") },
        { label: "Costa Azul", href: destinationPath("pt", "cote-dazur") },
        { label: "Toscana", href: destinationPath("pt", "tuscany") },
      ],
      sidebarVenues: [
        { label: "Kukua Beach Club" },
        { label: "Eden Roc Cap Cana" },
        { label: "Villa Tre Ville" },
        { label: "Château de la Croix" },
      ],
      sidebarCultures: [
        {
          label: "Casamentos judaicos",
          href: culturePath("pt", "jewish-weddings"),
        },
        {
          label: "Casamentos inter-religiosos",
          href: culturePath("pt", "interfaith-weddings"),
        },
        {
          label: "Casamentos árabes",
          href: culturePath("pt", "arab-weddings"),
        },
        {
          label: "Casamentos do sul da Ásia",
          href: culturePath("pt", "south-asian-weddings"),
        },
      ],
    },
    faq: {
      eyebrow: "Perguntas, respondidas",
      headline: "Perguntas *frequentes.*",
      items: [
        {
          question:
            "Com que antecedência devemos planear um casamento indiano em destino?",
          answer: [
            "Dezoito a vinte e quatro meses é o nosso padrão. O ateliê aceita apenas catorze casamentos por ano, e os casamentos indianos reservam-se primeiro devido ao calendário de vários dias e aos especialistas envolvidos.",
            "Prazos de seis meses são tecnicamente possíveis — já o fizemos — mas a disponibilidade dos especialistas reduz-se, e o custo de catering e decoração pode subir 20 a 30 %.",
          ],
        },
        {
          question:
            "Trazem o vosso próprio pandit e especialistas, ou recorrem a locais?",
          answer: [
            "Trazemos os nossos especialistas de confiança. O nosso pandit, coreógrafo, artistas de mehndi e decorador sénior viajam com o ateliê. O catering e as flores locais são obtidos no destino quando a qualidade cumpre o nosso padrão; tudo o resto chega de avião.",
          ],
        },
        {
          question:
            "Conseguem responder a requisitos alimentares vegetarianos, jainistas ou gujaratis?",
          answer: [
            "Sim — e por norma. Cada refeição de cada dia do casamento tem opções completas vegetarianas, jainistas, veganas, sem glúten e sem alergénios. Informamos a cozinha do resort com seis meses de antecedência e trazemos um consultor de ementas culturalmente fluente para a semana do ensaio.",
          ],
        },
        {
          question: "Qual é o custo típico de um casamento indiano em destino?",
          answer: [
            "Um intervalo útil para 2026, para casamentos de 200 a 400 convidados ao longo de três a cinco dias, é de 350 000 a 1,2 milhões de USD, tudo incluído. Partilhamos orçamentos totalmente transparentes na primeira consulta, com intervalos por rubrica conforme o número de convidados.",
          ],
        },
        {
          question:
            "Conseguem acolher as tradições punjabi, gujarati e do sul da Índia igualmente bem?",
          answer: [
            "Sim. O nosso pandit é multilingue e oficiou casamentos nas tradições punjabi, gujarati, tamil e bengali. Trabalhamos com especialistas regionais quando a música, a cozinha ou o traje o exigem — por exemplo, trazendo um coreógrafo de Bharatanatyam para os casamentos do sul da Índia.",
          ],
        },
        {
          question:
            "Como funcionam os casamentos indianos inter-religiosos — hindu-cristão, hindu-judaico, sikh-hindu?",
          answer: [
            "O ateliê acolheu vinte e oito casamentos indianos inter-religiosos. A nossa abordagem por defeito é dois celebrantes, duas cerimónias, um fim de semana — os pheras realizados ao lado da chuppah, ou o Anand Karaj seguido de uma missa católica.",
          ],
        },
        {
          question:
            "E os convidados que nunca assistiram a um casamento indiano?",
          answer: [
            "Enviamos a cada convidado um guia pré-casamento três semanas antes: programa, códigos de vestuário por evento, notas de etiqueta, frases-chave em hindi ou punjabi. A equipa do ateliê está disponível durante todo o fim de semana para responder a perguntas pessoalmente. Ninguém se sente deslocado.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Uma conversa privada —",
      headline: "*Comece* o seu\ncasamento indiano.",
      body: "Diga-nos a tradição, a região, as famílias e uma data aproximada. A Grecia responde, pessoalmente, no prazo de cinco dias úteis.",
      ctaLabel: "Solicitar uma consulta privada →",
      ctaHref: staticPath("pt", "/contact"),
    },
  },

  de: {
    name: "Indische Hochzeiten",
    cardEyebrow: "Die vom Atelier am häufigsten gehaltene Tradition",
    cardBlurb:
      "Mehndi, Sangeet, Haldi, Baraat, Varmala, Pheras und Empfang — über drei bis fünf Tage gehalten, oft für zweihundert bis achthundert Gäste.",
    cardMeta: "Punjabi · Gujarati · Südindisch · Sikh",
    intro:
      "Die Tradition, die das Atelier häufiger als jede andere gehalten hat — ein drei- bis fünftägiger Bogen, getragen von einem Pandit, mit dem wir seit vierzehn Jahren arbeiten.",
    hero: {
      eyebrow: "Die Traditionen · Nr. 01",
      scriptOverline: "Eine Hochzeit der",
      headline: "indischen *Tradition.*",
      deck: "Der vom Atelier am häufigsten gehaltene Hochzeitstyp. Drei- bis fünftägige Bögen, zweihundert bis achthundert Gäste, und die kulturelle Sicherheit, jede Region des Subkontinents auszurichten.",
      captionLeft: "Saira & Adam · Cap Cana",
      captionCenter: "Mandap bei Sonnenuntergang · 2025",
      captionRight: "Tafel I",
    },
    factStrip: [
      { label: "Hochzeitsdauer", value: "3 – 5 Tage", sub: "5 – 8 Zeremonien" },
      { label: "Gästezahl", value: "200 – 800", sub: "Mehr auf Anfrage" },
      {
        label: "Vorlaufzeit",
        value: "18 – 24 Monate",
        sub: "Spezialisten buchen früh",
      },
      {
        label: "Häufige Regionen",
        value: "Punjab · Gujarat",
        sub: "Tamil · Bengali · Sikh",
      },
      { label: "Küche", value: "Multiregional", sub: "Vegetarisch geprägt" },
      { label: "Sprachen", value: "DE · Hindi", sub: "Punjabi · Gujarati" },
    ],
    overview: {
      sideEyebrow: "Die Tradition",
      sideNote:
        "Vierzig indische Hochzeiten, vierzehn Jahre. Ein lebendiges Register dessen, was wir darüber wissen, diese Tradition mit Anmut auszurichten.",
      headline: "Fünf Tage,\nzweihundert Gäste,\nein *Gebet.*",
      lede: "Eine indische Hochzeit ist keine Hochzeit. Sie ist ein kleines Festival über eine ganze Woche — choreografiert zwischen zwei Familien, acht Zeremonien, vier Mahlzeiten am Tag und einer sich stetig wandelnden Garderobe aus Farbe und Stoff.",
      bodyParagraphs: [
        "Wir haben seit 2014 vierzig indische Hochzeiten geplant. Die meisten erstreckten sich über mehrere Tage. Die meisten waren innerhalb der Tradition selbst mehrreligiös — eine Punjabi-Braut, die einen Gujarati-Bräutigam heiratet, eine Sikh-Zeremonie gefolgt von einem hinduistischen Empfang, eine tamilische Familie, die eine bengalische Hochzeit in Punta Cana ausrichtet.",
        "Die Methodik, nach vierzig: die Struktur jedes Rituals halten, als hätten die Familien sie geschrieben. Sich weigern, eine Zeremonie aus Gründen des Tempos zu kürzen oder zusammenzufassen. Darauf vertrauen, dass das Tempo schon immer da war.",
        "Wir arbeiten mit einem hinduistischen Pandit, der vierzig unserer Hochzeiten geleitet hat, einem Sikh-Granthi, der für das Anand Karaj aus London anreist, Mehndi-Künstlern, die ganze Teams für das gesamte Wochenende mitbringen, und Choreografen, die das Sangeet nicht als Unterhaltung behandeln, sondern als Theaterstück mit fünf Generationen auf der Bühne.",
      ],
      pull: "„Sich weigern, eine Zeremonie aus Gründen des Tempos zu kürzen oder zusammenzufassen. Darauf vertrauen, dass das Tempo schon immer da war.“",
      signatureName: "Grecia",
      signatureRole: "Gründerin · Nach vierzig indischen Hochzeiten",
    },
    ceremonyArc: {
      eyebrow: "Zeremonienstruktur",
      headline: "Der *siebenteilige* Bogen.",
      deck: "Die vollständige Zeremonienfolge, die wir über eine typische viertägige indische Hochzeit halten. Variationen gibt es — jede Hochzeit passt die Reihenfolge an Familientradition und Region an.",
      steps: [
        {
          numeral: "I",
          name: "Mehndi",
          sub: "Henna-Nacht",
          when: "Tag 1 abends",
          body: "Hände und Füße werden mit kunstvollem Henna verziert. Musik, Tanz, eine zwanglose Versammlung der Frauen.",
        },
        {
          numeral: "II",
          name: "Haldi",
          sub: "Kurkuma-Zeremonie",
          when: "Tag 2 morgens",
          body: "Braut und Bräutigam werden von der Familie mit Kurkumapaste gesalbt. Oft getrennt gehalten, in Weiß.",
        },
        {
          numeral: "III",
          name: "Sangeet",
          sub: "Musik & Darbietungen",
          when: "Tag 2 abends",
          body: "Choreografierte Darbietungen beider Familien. Der theatralischste Abend der Woche.",
        },
        {
          numeral: "IV",
          name: "Baraat",
          sub: "Prozession des Bräutigams",
          when: "Tag 3 morgens",
          body: "Der Bräutigam kommt zu Pferd oder im Oldtimer, begleitet von Dhol-Trommlern und tanzender Familie.",
        },
        {
          numeral: "V",
          name: "Varmala",
          sub: "Girlandentausch",
          when: "Tag 3 morgens",
          body: "Braut und Bräutigam tauschen am Mandap Blumengirlanden, um einander anzunehmen.",
        },
        {
          numeral: "VI",
          name: "Pheras",
          sub: "Sieben heilige Schritte",
          when: "Tag 3 morgens",
          body: "Das Paar umrundet siebenmal das heilige Feuer, jede Runde ein Gelübde. Die rechtsgültige hinduistische Hochzeit.",
        },
        {
          numeral: "VII",
          name: "Empfang",
          sub: "Festdinner",
          when: "Tag 3 abends",
          body: "Empfang in Abendgarderobe, Dinner an der langen Tafel, die letzten Reden und der erste Tanz.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Designkonzepte",
      headline: "Mandap, *Moodboards.*",
      deck: "Drei erprobte Gestaltungsrichtungen, die wir mehr als einmal gebaut haben. Jede Hochzeit passt sie an — Palette, Stoff, Größe des Mandap.",
      cards: [
        {
          title: "Elfenbein & Ringelblume",
          body: "Ein reduziertes klassisches Mandap aus elfenbeinfarbenem Drapee, Ringelblumengirlanden und warmweißen Säulenkerzen. Wirkt am Strand wunderschön.",
          palette: ["#f5f0e6", "#e8a843", "#c25422", "#7a3814", "#3a2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Mandap", value: "Vierpfeilig floral, 4,3 m" },
            { label: "Florales", value: "Ringelblume · Rose · Grün" },
            {
              label: "Am besten für",
              value: "Strand · Pavillon · Zeltpavillon",
            },
          ],
        },
        {
          title: "Tiefrot & Gold",
          body: "Ein formelles Mandap im Punjabi-Stil aus tiefrotem Samt, Messingakzenten und schwerer Goldstickerei. Luxus auf der Empfangsseite.",
          palette: ["#8a1e2a", "#c89d4e", "#3a1a1a", "#e8d6a0", "#f5f0e6"],
          imageKey: "concept-2",
          rows: [
            { label: "Mandap", value: "Karmesinsamt, goldenes Messing" },
            { label: "Florales", value: "Rote Rose · goldene Mango" },
            { label: "Am besten für", value: "Anwesen innen · Ballsaal" },
          ],
        },
        {
          title: "Creme & Grün",
          body: "Ein Garten-Mandap aus geschichtetem Laub, elfenbeinfarbenen Pfingstrosen und unbehandeltem Holz. Leise modern, fotografiert in jedem Licht.",
          palette: ["#ebe3d3", "#a7a78b", "#4a523d", "#d6cdb8", "#2f3527"],
          imageKey: "concept-3",
          rows: [
            { label: "Mandap", value: "Baldachin aus Holz & Laub" },
            { label: "Florales", value: "Pfingstrose · Grün · Olive" },
            { label: "Am besten für", value: "Garten · Villa · Weingut" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Kulturelles Protokoll",
      headline: "Was uns *heilig* ist.",
      deck: "Sechs Grundsätze, bei denen wir keine Kompromisse machen. Wir haben Hochzeiten abgesagt, die uns dazu aufforderten.",
      items: [
        {
          title: "Die Ritualordnung ist nicht verhandelbar",
          body: "Die Pheras kommen vor dem Empfang. Das Baraat beginnt nicht, ohne dass die Familie der Braut den Bräutigam empfängt. Wir ordnen Zeremonien nicht aus Gründen der Veranstaltungslogistik oder des Tempos um.",
        },
        {
          title: "Der Pandit bestimmt die Zeiten",
          body: "Die heiligen Zeiten (Muhurat) berechnet der Pandit anhand der Horoskope des Paares. Wir planen die Hochzeit um sie herum — nicht umgekehrt.",
        },
        {
          title: "Die Ältesten essen zuerst",
          body: "Vegetarische und jainistische Ernährungsanforderungen werden für die Ältesten berücksichtigt, bevor irgendein Menü der Hochzeitsgesellschaft festgelegt wird. Essen wird nicht stilisiert, bevor es ehrlich ist.",
        },
        {
          title: "Kaste und Region sind leise, aber real",
          body: "Wir fragen, vertraulich, nach Kaste, Region und Familienbräuchen. Wir behandeln die Hochzeit nicht als generische „indische“ Feier — die Traditionen der Punjabi, Gujarati, Tamilen und Bengalen unterscheiden sich.",
        },
        {
          title: "Musik soll, wo möglich, live sein",
          body: "Dhol-Trommler für das Baraat, klassische Musiker für die Pheras. Aufgenommene Musik ist beim Sangeet und Empfang erlaubt, aber nicht in heiligen Momenten.",
        },
        {
          title: "Das Mandap ist tragend, nicht dekorativ",
          body: "Das Mandap beherbergt das heilige Feuer und die sieben Schritte. Es ist gebaut, um die Zeremonie zu überdauern — wir verwenden lastgeprüfte Strukturen, feuersichere Drapierung und traditionelle Säulenkonstruktion.",
        },
      ],
    },
    planning: {
      eyebrow: "Mehrtägige Planung",
      headline: "Eine viertägige *Hochzeit,* Stunde für Stunde.",
      deck: "Der Bauplan, den wir für eine typische indische Hochzeit mit 300 Gästen verwenden. Jeder Tag ist flexibel; die Struktur nicht.",
      days: [
        {
          numeral: "I",
          dayLabel: "Tag eins",
          title: "Mehndi & Empfang",
          body: "Die Gäste reisen über den Tag verteilt an. Das Hotel-Check-in koordiniert das Atelier. Willkommenscocktails am Abend, gefolgt von der Mehndi-Zeremonie für die Frauen — die Henna-Künstler richten drei Stationen ein, um den Andrang zu bewältigen.",
          events: [
            {
              time: "Vormittag",
              body: "Gästeankünfte · Flughafentransfers · Hotel-Check-in",
            },
            { time: "14:00", body: "Willkommens-Lunch im Resort" },
            { time: "18:00", body: "Mehndi-Zeremonie · Frauen · 4 Stunden" },
            { time: "21:00", body: "Lockeres Dinner · Gartenbuffet" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Tag zwei",
          title: "Haldi & Sangeet",
          body: "Das Haldi wird am Morgen für Braut und Bräutigam getrennt gehalten — beide in Weiß, beide von ihrer Familie gesalbt. Nachmittag frei für die Gäste. Sangeet am Abend — die theatralischste Nacht der Woche, mit choreografierten Darbietungen beider Familien.",
          events: [
            { time: "09:00", body: "Haldi-Zeremonie · Braut · 90 Minuten" },
            { time: "10:30", body: "Haldi-Zeremonie · Bräutigam · 90 Minuten" },
            { time: "13:00", body: "Lunch · am Pool" },
            { time: "Freier Nachmittag", body: "Ausflug oder Ruhe" },
            {
              time: "19:30",
              body: "Sangeet · Bühnendarbietungen · Cocktaildinner · Tanz bis Mitternacht",
            },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Tag drei",
          title: "Die Hochzeit",
          body: "Die Pheras zum Muhurat — meist am späten Vormittag. Das Baraat beginnt dreißig Minuten zuvor. Familienzeremonien bis in den frühen Nachmittag. Lunch traditionell serviert. Empfang im Resort am Abend — Abendgarderobe, lange Tafel, erster Tanz.",
          events: [
            {
              time: "09:00",
              body: "Vorbereitung von Braut und Bräutigam · getrennte Suiten",
            },
            {
              time: "10:30",
              body: "Baraat-Prozession · Dhol · Pferd · 30 Minuten",
            },
            { time: "11:00", body: "Varmala · Girlandentausch" },
            { time: "11:30", body: "Pheras am Mandap · 90 Minuten" },
            {
              time: "13:30",
              body: "Traditioneller indischer Lunch · Servieren auf Bananenblatt",
            },
            { time: "19:00", body: "Empfangscocktails" },
            {
              time: "20:30",
              body: "Empfangsdinner · lange Tafel · erster Tanz · Reden",
            },
          ],
        },
        {
          numeral: "IV",
          dayLabel: "Tag vier",
          title: "Brunch & Abschied",
          body: "Ein Brunch am Tag danach, ausgerichtet vom Paar — meist im Freien, lockerer, mit Fokus auf den Abschied. Das inoffizielle Ende der Hochzeit für die meisten Gäste; die engsten Familien bleiben oft noch ein bis zwei Tage länger.",
          events: [
            { time: "11:00", body: "Brunch · am Pool oder im Garten" },
            { time: "Nachmittag", body: "Abreisen · Flughafentransfers" },
            {
              time: "Abend",
              body: "Dinner im engsten Familienkreis (optional)",
            },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Reiseziel-Eignung",
      headline: "Wo indische Hochzeiten *am besten gelingen.*",
      viewAllLabel: "Alle Reiseziele ansehen →",
      viewAllHref: staticPath("de", "/destinations"),
      cards: [
        {
          rating: 5,
          name: "Punta Cana",
          sub: "Karibik · ganzjährig",
          destinationSlug: "punta-cana",
        },
        {
          rating: 5,
          name: "Amalfiküste",
          sub: "Italien · Mai – Oktober",
          destinationSlug: "amalfi",
        },
        {
          rating: 4,
          name: "Comer See",
          sub: "Italien · Juni – September",
          destinationSlug: "lake-como",
        },
        {
          rating: 4,
          name: "Côte d'Azur",
          sub: "Frankreich · Juni – September",
          destinationSlug: "cote-dazur",
        },
        {
          rating: 4,
          name: "Toskana",
          sub: "Italien · Mai – Oktober",
          destinationSlug: "tuscany",
        },
        {
          rating: 3,
          name: "St. Barths",
          sub: "Karibik · November – April",
          destinationSlug: "st-barths",
        },
        {
          rating: 3,
          name: "Provence",
          sub: "Frankreich · Mai – September",
          destinationSlug: "provence",
        },
        {
          rating: 3,
          name: "Aspen & Napa",
          sub: "Vereinigte Staaten · Dezember – März",
          destinationSlug: "aspen-napa",
        },
      ],
    },
    guest: {
      eyebrow: "Gästemanagement",
      headline: "Die *praktische* Betreuung von 300 Gästen.",
      deck: "Die logistische Ebene, die die meisten Planer unterbesetzen. Wir beginnen vierzehn Monate im Voraus.",
      cells: [
        {
          title: "Anreise & Unterbringung",
          body: "Gruppenkontingente in drei Hotelkategorien — Premium, Standard und Familie. Flughafentransfers über drei Ankunftstage koordiniert. Willkommenspakete in jedem Zimmer mit Programm, Dresscode pro Veranstaltung und Notfallkontakten.",
        },
        {
          title: "Ältere & Mobilität",
          body: "Reservierte Plätze, gesonderter Transport, eine Betreuungsperson für die Älteren aus dem Atelier-Team. Erdgeschosszimmer für Gäste über fünfundsiebzig reserviert. Ärztlicher Bereitschaftsdienst für die gesamte Dauer des Wochenendes.",
        },
        {
          title: "Kinder & Betreuung",
          body: "Mehrsprachiges Betreuungsteam für 0 bis 12 Jahre, vor Ort beim Sangeet und Empfang. Kindermenüs bei jeder Mahlzeit. Ruheräume für den Mittagsschlaf während der Tageszeremonien.",
        },
        {
          title: "Ernährungsprotokoll",
          body: "Vegetarische, vegane, jainistische, glutenfreie und allergenfreie Menüs bei jeder Mahlzeit. Religiöse Ernährungsvorschriften (koscher, halal) koordiniert, wo gemischte Familien es erfordern. Drei Mahlzeiten täglich über das Wochenende.",
        },
        {
          title: "Garderoben-Logistik",
          body: "Bügelservice im Hotel für Ankunft, Wochenmitte und Empfangsmorgen. Hilfe beim Binden von Sari und Turban auf Abruf verfügbar. Lehengas am Morgen der Pheras gebügelt und vorbereitet.",
        },
        {
          title: "Kommunikation",
          body: "WhatsApp-Gruppe für jeden Gast, drei Wochen zuvor. Eigene Hochzeitswebsite mit Tagesprogramm, Dresscodes und Lageplänen. Gedruckte Leitfäden in jedem Willkommenspaket.",
        },
      ],
    },
    related: {
      eyebrow: "Weiterlesen",
      headline: "Aus dem *Journal.*",
      articles: [
        {
          category: "Indische Hochzeiten · Punta Cana",
          title: "Die besten Locations für indische Hochzeiten in Punta Cana",
          body: "Ein lebendiges Register der Resorts, die ein Baraat mit 300 Gästen mit Anmut tragen.",
          imageKey: "culture-related-1",
        },
        {
          category: "Mehrtägig · Planung",
          title: "Das Sangeet: Warum der Abend zuvor noch mehr zählt",
          body: "Über die Probe, die keine Probe mehr ist.",
          imageKey: "culture-related-2",
        },
        {
          category: "Design · Indisch",
          title: "Ein Feldführer der Mandap-Stile",
          body: "Designnotizen zu Punjabi, Gujarati, Tamil und Bengali — und worin sie sich unterscheiden.",
          imageKey: "culture-related-3",
        },
        {
          category: "Kosten · Indisch",
          title: "Was eine indische Luxushochzeit wirklich kostet",
          body: "Offene Budgets für 2026 nach Gästezahl.",
          imageKey: "culture-related-4",
        },
        {
          category: "Tradition",
          title: "Mehndi, im Detail",
          body: "Über die Henna-Nacht, die zum meistfotografierten Ereignis des Wochenendes geworden ist.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("de", "punta-cana") },
        { label: "Comer See", href: destinationPath("de", "lake-como") },
        { label: "Côte d'Azur", href: destinationPath("de", "cote-dazur") },
        { label: "Toskana", href: destinationPath("de", "tuscany") },
      ],
      sidebarVenues: [
        { label: "Kukua Beach Club" },
        { label: "Eden Roc Cap Cana" },
        { label: "Villa Tre Ville" },
        { label: "Château de la Croix" },
      ],
      sidebarCultures: [
        {
          label: "Jüdische Hochzeiten",
          href: culturePath("de", "jewish-weddings"),
        },
        {
          label: "Interreligiöse Hochzeiten",
          href: culturePath("de", "interfaith-weddings"),
        },
        {
          label: "Arabische Hochzeiten",
          href: culturePath("de", "arab-weddings"),
        },
        {
          label: "Südasiatische Hochzeiten",
          href: culturePath("de", "south-asian-weddings"),
        },
      ],
    },
    faq: {
      eyebrow: "Fragen, beantwortet",
      headline: "Häufig *gefragt.*",
      items: [
        {
          question:
            "Wie lange im Voraus sollten wir eine indische Destination-Hochzeit planen?",
          answer: [
            "Achtzehn bis vierundzwanzig Monate sind unser Standard. Das Atelier nimmt nur vierzehn Hochzeiten pro Jahr an, und indische Hochzeiten werden zuerst gebucht — wegen des mehrtägigen Kalenders und der beteiligten Spezialisten.",
            "Vorlaufzeiten von sechs Monaten sind technisch möglich — wir haben sie umgesetzt — aber die Verfügbarkeit der Spezialisten sinkt, und die Kosten für Catering und Dekor können um 20 bis 30 % steigen.",
          ],
        },
        {
          question:
            "Bringen Sie Ihren eigenen Pandit und Ihre Spezialisten mit, oder arbeiten Sie mit lokalen?",
          answer: [
            "Wir bringen unsere vertrauten Spezialisten mit. Unser Pandit, Choreograf, unsere Mehndi-Künstler und unser leitender Dekorateur reisen mit dem Atelier. Catering und Floristik werden vor Ort bezogen, wo die Qualität unserem Standard entspricht; alles Übrige wird eingeflogen.",
          ],
        },
        {
          question:
            "Können Sie vegetarische, jainistische oder Gujarati-Ernährungsanforderungen erfüllen?",
          answer: [
            "Ja — und das standardmäßig. Jede Mahlzeit an jedem Tag der Hochzeit bietet vollständige vegetarische, jainistische, vegane, glutenfreie und allergenfreie Optionen. Wir briefen die Resortküche sechs Monate im Voraus und bringen für die Probenwoche einen kulturell versierten Menüberater mit.",
          ],
        },
        {
          question:
            "Was kostet eine indische Destination-Hochzeit typischerweise?",
          answer: [
            "Eine nützliche Spanne für 2026, für Hochzeiten mit 200 bis 400 Gästen über drei bis fünf Tage, liegt bei 350.000 bis 1,2 Mio. USD, alles inklusive. Wir teilen vollständig transparente Budgets in der ersten Beratung, mit Positionsspannen nach Gästezahl.",
          ],
        },
        {
          question:
            "Können Sie Punjabi-, Gujarati- und südindische Traditionen gleichermaßen gut ausrichten?",
          answer: [
            "Ja. Unser Pandit ist mehrsprachig und hat Hochzeiten in den Traditionen der Punjabi, Gujarati, Tamilen und Bengalen geleitet. Wir arbeiten mit regionalen Spezialisten, wo Musik, Küche oder Kleidung es erfordern — etwa, indem wir für südindische Hochzeiten einen Bharatanatyam-Choreografen hinzuziehen.",
          ],
        },
        {
          question:
            "Wie funktionieren interreligiöse indische Hochzeiten — hinduistisch-christlich, hinduistisch-jüdisch, sikh-hinduistisch?",
          answer: [
            "Das Atelier hat achtundzwanzig interreligiöse indische Hochzeiten ausgerichtet. Unser Standardansatz ist zwei Geistliche, zwei Zeremonien, ein Wochenende — die Pheras neben der Chuppa, oder das Anand Karaj gefolgt von einer katholischen Messe.",
          ],
        },
        {
          question:
            "Was ist mit Gästen, die noch nie auf einer indischen Hochzeit waren?",
          answer: [
            "Wir senden jedem Gast drei Wochen vorher einen Hochzeitsleitfaden: Programm, Dresscodes pro Veranstaltung, Etikettehinweise, Schlüsselsätze auf Hindi oder Punjabi. Das Atelier-Team steht das ganze Wochenende für Fragen persönlich zur Verfügung. Niemand fühlt sich fehl am Platz.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Ein privates Gespräch —",
      headline: "*Beginnen* Sie Ihre\nindische Hochzeit.",
      body: "Nennen Sie uns die Tradition, die Region, die Familien und ein ungefähres Datum. Grecia antwortet persönlich innerhalb von fünf Werktagen.",
      ctaLabel: "Eine private Beratung anfragen →",
      ctaHref: staticPath("de", "/contact"),
    },
  },

  it: {
    name: "Matrimoni Indiani",
    cardEyebrow: "La tradizione più organizzata dall'atelier",
    cardBlurb:
      "Mehndi, sangeet, haldi, baraat, varmala, pheras e ricevimento — tenuti nell'arco di tre-cinque giorni, spesso per duecento-ottocento invitati.",
    cardMeta: "Punjabi · Gujarati · India del Sud · Sikh",
    intro:
      "La tradizione che l'atelier ha organizzato più di ogni altra — un arco di tre-cinque giorni retto da un pandit con cui lavoriamo da quattordici anni.",
    hero: {
      eyebrow: "Le Tradizioni · N. 01",
      scriptOverline: "Un matrimonio di",
      headline: "tradizione *indiana.*",
      deck: "Il tipo di matrimonio più organizzato dall'atelier. Archi di tre-cinque giorni, da duecento a ottocento invitati, e la disinvoltura culturale per accogliere qualsiasi regione del subcontinente.",
      captionLeft: "Saira e Adam · Cap Cana",
      captionCenter: "Mandap al tramonto · 2025",
      captionRight: "Tavola I",
    },
    factStrip: [
      {
        label: "Durata del matrimonio",
        value: "3 – 5 giorni",
        sub: "5 – 8 cerimonie",
      },
      {
        label: "Numero di invitati",
        value: "200 – 800",
        sub: "Di più su richiesta",
      },
      {
        label: "Anticipo",
        value: "18 – 24 mesi",
        sub: "Gli specialisti si prenotano presto",
      },
      {
        label: "Regioni comuni",
        value: "Punjab · Gujarat",
        sub: "Tamil · Bengalese · Sikh",
      },
      { label: "Cucina", value: "Multiregionale", sub: "A base vegetariana" },
      { label: "Lingue", value: "IT · Hindi", sub: "Punjabi · Gujarati" },
    ],
    overview: {
      sideEyebrow: "La tradizione",
      sideNote:
        "Quaranta matrimoni indiani, quattordici anni. Un registro vivo di ciò che sappiamo sull'accogliere questa tradizione con grazia.",
      headline: "Cinque giorni,\nduecento invitati,\nuna *preghiera.*",
      lede: "Un matrimonio indiano non è un matrimonio. È un piccolo festival che si svolge nell'arco di una settimana — coreografato fra due famiglie, otto cerimonie, quattro pasti al giorno e un guardaroba in continuo mutamento di colore e tessuto.",
      bodyParagraphs: [
        "Abbiamo organizzato quaranta matrimoni indiani dal 2014. La maggior parte si è svolta su più giorni. La maggior parte è stata multireligiosa all'interno della tradizione stessa — una sposa punjabi che sposa uno sposo gujarati, una cerimonia sikh seguita da un ricevimento indù, una famiglia tamil che celebra un matrimonio bengalese a Punta Cana.",
        "La metodologia, dopo quaranta: tenere la struttura di ogni rito come se l'avessero scritta le famiglie. Rifiutare di accorciare o riassumere una cerimonia per ragioni di ritmo. Confidare che il ritmo fosse già lì, da sempre.",
        "Lavoriamo con un pandit indù che ha officiato quaranta dei nostri matrimoni, un Granthi sikh che viaggia da Londra per l'Anand Karaj, artisti di mehndi che portano squadre complete per l'intero fine settimana, e coreografi che trattano il sangeet non come intrattenimento ma come un'opera teatrale con cinque generazioni sul palco.",
      ],
      pull: "«Rifiutare di accorciare o riassumere una cerimonia per ragioni di ritmo. Confidare che il ritmo fosse già lì, da sempre.»",
      signatureName: "Grecia",
      signatureRole: "Fondatrice · Dopo quaranta matrimoni indiani",
    },
    ceremonyArc: {
      eyebrow: "Struttura della cerimonia",
      headline: "L'arco in *sette parti.*",
      deck: "L'ordine completo delle cerimonie che teniamo in un tipico matrimonio indiano di quattro giorni. Esistono variazioni — ogni matrimonio adatta l'ordine in base alla tradizione familiare e alla regione.",
      steps: [
        {
          numeral: "I",
          name: "Mehndi",
          sub: "Notte dell'henné",
          when: "Sera del giorno 1",
          body: "Mani e piedi decorati con henné intricato. Musica, danza, un raduno informale delle donne.",
        },
        {
          numeral: "II",
          name: "Haldi",
          sub: "Cerimonia della curcuma",
          when: "Mattina del giorno 2",
          body: "Sposa e sposo vengono unti con pasta di curcuma dalla famiglia. Spesso tenuta separatamente, in bianco.",
        },
        {
          numeral: "III",
          name: "Sangeet",
          sub: "Musica e spettacoli",
          when: "Sera del giorno 2",
          body: "Spettacoli coreografati da entrambe le famiglie. La serata più teatrale della settimana.",
        },
        {
          numeral: "IV",
          name: "Baraat",
          sub: "Processione dello sposo",
          when: "Mattina del giorno 3",
          body: "Lo sposo arriva a cavallo o su un'auto d'epoca, accompagnato da tamburini dhol e dalla famiglia che danza.",
        },
        {
          numeral: "V",
          name: "Varmala",
          sub: "Scambio di ghirlande",
          when: "Mattina del giorno 3",
          body: "Sposa e sposo si scambiano ghirlande di fiori al mandap per accettarsi a vicenda.",
        },
        {
          numeral: "VI",
          name: "Pheras",
          sub: "Sette passi sacri",
          when: "Mattina del giorno 3",
          body: "La coppia gira sette volte attorno al fuoco sacro, ogni giro un voto. Il matrimonio indù legale.",
        },
        {
          numeral: "VII",
          name: "Ricevimento",
          sub: "Cena di celebrazione",
          when: "Sera del giorno 3",
          body: "Ricevimento in abito da sera, cena a tavolata, gli ultimi discorsi e il primo ballo.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Concetti di design",
      headline: "Mandap, *moodboard.*",
      deck: "Tre direzioni di design che abbiamo costruito più di una volta. Ogni matrimonio le adatta — palette, tessuto, scala del mandap.",
      cards: [
        {
          title: "Avorio e calendula",
          body: "Un mandap classico ed essenziale in drappeggio avorio, corde di calendula e candele a colonna bianco caldo. Si legge magnificamente sulla spiaggia.",
          palette: ["#f5f0e6", "#e8a843", "#c25422", "#7a3814", "#3a2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Mandap", value: "Floreale a quattro pilastri, 4,3 m" },
            { label: "Fiori", value: "Calendula · rosa · verde" },
            {
              label: "Ideale per",
              value: "Spiaggia · padiglione · padiglione con tenda",
            },
          ],
        },
        {
          title: "Rosso intenso e oro",
          body: "Un mandap formale in stile punjabi in velluto cremisi intenso, accenti di ottone e ricami pesanti in oro. Lusso sul lato del ricevimento.",
          palette: ["#8a1e2a", "#c89d4e", "#3a1a1a", "#e8d6a0", "#f5f0e6"],
          imageKey: "concept-2",
          rows: [
            { label: "Mandap", value: "Velluto cremisi, ottone dorato" },
            { label: "Fiori", value: "Rosa rossa · mango dorato" },
            { label: "Ideale per", value: "Tenuta al chiuso · sala da ballo" },
          ],
        },
        {
          title: "Crema e verde",
          body: "Un mandap da giardino costruito con fogliame a strati, peonie avorio e legno grezzo. Sommessamente moderno, fotografa bene con qualsiasi luce.",
          palette: ["#ebe3d3", "#a7a78b", "#4a523d", "#d6cdb8", "#2f3527"],
          imageKey: "concept-3",
          rows: [
            { label: "Mandap", value: "Baldacchino di legno e fogliame" },
            { label: "Fiori", value: "Peonia · verde · olivo" },
            { label: "Ideale per", value: "Giardino · villa · vigneto" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocollo culturale",
      headline: "Ciò che riteniamo *sacro.*",
      deck: "Sei principi su cui non scendiamo a compromessi. Abbiamo rinunciato a matrimoni che ce lo chiedevano.",
      items: [
        {
          title: "L'ordine rituale non è negoziabile",
          body: "I pheras vengono prima del ricevimento. Il baraat non comincia senza che la famiglia della sposa accolga lo sposo. Non riordiniamo le cerimonie per comodità della location o per ragioni di ritmo.",
        },
        {
          title: "Il pandit sceglie gli orari",
          body: "Gli orari sacri (muhurat) sono calcolati dal pandit a partire dai temi natali della coppia. Programmiamo il matrimonio attorno a essi — e non viceversa.",
        },
        {
          title: "Gli anziani mangiano per primi",
          body: "Le esigenze alimentari vegetariane e jainiste sono accolte per gli anziani prima di chiudere qualsiasi menù del corteo nuziale. Il cibo non viene stilizzato prima di essere onesto.",
        },
        {
          title: "Casta e regione sono discrete ma reali",
          body: "Chiediamo, in privato, casta, regione e usanze familiari. Non trattiamo il matrimonio come una generica celebrazione «indiana» — le tradizioni punjabi, gujarati, tamil e bengalesi differiscono.",
        },
        {
          title: "La musica deve essere dal vivo ove possibile",
          body: "Tamburini dhol per il baraat, musicisti classici per i pheras. La musica registrata è ammessa al sangeet e al ricevimento, ma non nei momenti sacri.",
        },
        {
          title: "Il mandap è strutturale, non decorativo",
          body: "Il mandap custodisce il fuoco sacro e i sette passi. È costruito per reggere l'intera cerimonia — usiamo strutture a portata calcolata, drappeggi ignifughi e costruzione tradizionale dei pilastri.",
        },
      ],
    },
    planning: {
      eyebrow: "Pianificazione su più giorni",
      headline: "Un matrimonio di *quattro giorni,* ora per ora.",
      deck: "Lo schema che usiamo per un tipico matrimonio indiano da 300 invitati. Ogni giorno è flessibile; la struttura no.",
      days: [
        {
          numeral: "I",
          dayLabel: "Giorno uno",
          title: "Mehndi e benvenuto",
          body: "Gli invitati arrivano nel corso della giornata. I check-in in hotel sono coordinati dall'atelier. Cocktail di benvenuto in serata, seguiti dalla cerimonia del mehndi per le donne — gli artisti dell'henné si dispongono su tre postazioni per gestire il volume.",
          events: [
            {
              time: "Mattina",
              body: "Arrivi degli invitati · transfer dall'aeroporto · check-in in hotel",
            },
            { time: "14:00", body: "Pranzo di benvenuto al resort" },
            { time: "18:00", body: "Cerimonia del mehndi · donne · 4 ore" },
            { time: "21:00", body: "Cena informale · buffet in giardino" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Giorno due",
          title: "Haldi e sangeet",
          body: "L'haldi si tiene separatamente per sposa e sposo al mattino — entrambi in bianco, entrambi unti dalla propria famiglia. Pomeriggio libero per gli invitati. Sangeet in serata — la notte più teatrale della settimana, con spettacoli coreografati di entrambe le famiglie.",
          events: [
            { time: "09:00", body: "Cerimonia dell'haldi · sposa · 90 minuti" },
            { time: "10:30", body: "Cerimonia dell'haldi · sposo · 90 minuti" },
            { time: "13:00", body: "Pranzo · a bordo piscina" },
            { time: "Pomeriggio libero", body: "Escursione o riposo" },
            {
              time: "19:30",
              body: "Sangeet · spettacoli sul palco · cena cocktail · ballo fino a mezzanotte",
            },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Giorno tre",
          title: "Il matrimonio",
          body: "I pheras al muhurat — di solito a tarda mattina. Il baraat comincia trenta minuti prima. Cerimonie familiari fino al primo pomeriggio. Pranzo servito in stile tradizionale. Ricevimento al resort in serata — abito da sera, tavolata, primo ballo.",
          events: [
            {
              time: "09:00",
              body: "Preparazione di sposa e sposo · suite separate",
            },
            {
              time: "10:30",
              body: "Processione baraat · dhol · cavallo · 30 minuti",
            },
            { time: "11:00", body: "Varmala · scambio di ghirlande" },
            { time: "11:30", body: "Pheras al mandap · 90 minuti" },
            {
              time: "13:30",
              body: "Pranzo indiano tradizionale · servizio su foglia di banano",
            },
            { time: "19:00", body: "Cocktail di ricevimento" },
            {
              time: "20:30",
              body: "Cena di ricevimento · tavolata · primo ballo · discorsi",
            },
          ],
        },
        {
          numeral: "IV",
          dayLabel: "Giorno quattro",
          title: "Brunch e congedi",
          body: "Un brunch del giorno dopo offerto dalla coppia — di solito all'aperto, più informale, incentrato sui saluti. La fine non ufficiale del matrimonio per la maggior parte degli invitati; le famiglie più strette spesso restano un giorno o due in più.",
          events: [
            { time: "11:00", body: "Brunch · a bordo piscina o in giardino" },
            { time: "Pomeriggio", body: "Partenze · transfer per l'aeroporto" },
            { time: "Sera", body: "Cena di famiglia ristretta (facoltativa)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilità delle destinazioni",
      headline: "Dove i matrimoni indiani *riescono meglio.*",
      viewAllLabel: "Vedi tutte le destinazioni →",
      viewAllHref: staticPath("it", "/destinations"),
      cards: [
        {
          rating: 5,
          name: "Punta Cana",
          sub: "Caraibi · tutto l'anno",
          destinationSlug: "punta-cana",
        },
        {
          rating: 5,
          name: "Costiera Amalfitana",
          sub: "Italia · maggio – ottobre",
          destinationSlug: "amalfi",
        },
        {
          rating: 4,
          name: "Lago di Como",
          sub: "Italia · giugno – settembre",
          destinationSlug: "lake-como",
        },
        {
          rating: 4,
          name: "Costa Azzurra",
          sub: "Francia · giugno – settembre",
          destinationSlug: "cote-dazur",
        },
        {
          rating: 4,
          name: "Toscana",
          sub: "Italia · maggio – ottobre",
          destinationSlug: "tuscany",
        },
        {
          rating: 3,
          name: "St. Barths",
          sub: "Caraibi · novembre – aprile",
          destinationSlug: "st-barths",
        },
        {
          rating: 3,
          name: "Provenza",
          sub: "Francia · maggio – settembre",
          destinationSlug: "provence",
        },
        {
          rating: 3,
          name: "Aspen e Napa",
          sub: "Stati Uniti · dicembre – marzo",
          destinationSlug: "aspen-napa",
        },
      ],
    },
    guest: {
      eyebrow: "Gestione degli invitati",
      headline: "La cura *pratica* di 300 invitati.",
      deck: "Lo strato logistico che la maggior parte degli organizzatori sottodimensiona. Iniziamo quattordici mesi prima.",
      cells: [
        {
          title: "Viaggi e alloggio",
          body: "Blocchi di camere in tre fasce d'hotel — premium, standard e famiglia. Transfer dall'aeroporto coordinati su tre giorni di arrivi. Pacchetti di benvenuto in ogni camera con il programma, il dress code per evento e i contatti d'emergenza.",
        },
        {
          title: "Anziani e mobilità",
          body: "Posti riservati, trasporto separato, un referente per gli anziani del team dell'atelier. Camere al piano terra riservate agli invitati oltre i settantacinque anni. Assistenza medica reperibile per tutta la durata del fine settimana.",
        },
        {
          title: "Bambini e assistenza",
          body: "Team di assistenza multilingue per le età da 0 a 12 anni, presente al sangeet e al ricevimento. Menù per bambini a ogni pasto. Stanze tranquille per i riposini durante le cerimonie diurne.",
        },
        {
          title: "Protocollo alimentare",
          body: "Menù vegetariani, vegani, jainisti, senza glutine e senza allergeni a ogni pasto. Requisiti alimentari religiosi (kosher, halal) coordinati dove famiglie miste lo richiedono. Tre pasti al giorno per tutto il fine settimana.",
        },
        {
          title: "Logistica dell'abbigliamento",
          body: "Servizio di stiratura in hotel per l'arrivo, metà settimana e mattina del ricevimento. Assistenza per annodare sari e turbanti disponibile su richiesta. Lehenga stirati e preparati la mattina dei pheras.",
        },
        {
          title: "Comunicazioni",
          body: "Gruppo WhatsApp per ogni invitato, tre settimane prima. Sito web dedicato al matrimonio con programma giornaliero, dress code e mappe della location. Guide stampate in ogni pacchetto di benvenuto.",
        },
      ],
    },
    related: {
      eyebrow: "Continua a leggere",
      headline: "Dal *diario.*",
      articles: [
        {
          category: "Matrimoni Indiani · Punta Cana",
          title: "Le migliori location per matrimoni indiani a Punta Cana",
          body: "Un registro vivo dei resort che accolgono un baraat da 300 invitati con grazia.",
          imageKey: "culture-related-1",
        },
        {
          category: "Più giorni · Pianificazione",
          title: "Il sangeet: perché la sera prima conta ancora di più",
          body: "Sulla prova che non è più una prova.",
          imageKey: "culture-related-2",
        },
        {
          category: "Design · Indiano",
          title: "Una guida pratica agli stili di mandap",
          body: "Note di design punjabi, gujarati, tamil e bengalese — e come differiscono.",
          imageKey: "culture-related-3",
        },
        {
          category: "Costo · Indiano",
          title: "Quanto costa davvero un matrimonio indiano di lusso",
          body: "Budget franchi per il 2026 per numero di invitati.",
          imageKey: "culture-related-4",
        },
        {
          category: "Tradizione",
          title: "Mehndi, nel dettaglio",
          body: "Sulla notte dell'henné diventata l'evento più fotografato del fine settimana.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("it", "punta-cana") },
        { label: "Lago di Como", href: destinationPath("it", "lake-como") },
        { label: "Costa Azzurra", href: destinationPath("it", "cote-dazur") },
        { label: "Toscana", href: destinationPath("it", "tuscany") },
      ],
      sidebarVenues: [
        { label: "Kukua Beach Club" },
        { label: "Eden Roc Cap Cana" },
        { label: "Villa Tre Ville" },
        { label: "Château de la Croix" },
      ],
      sidebarCultures: [
        {
          label: "Matrimoni ebraici",
          href: culturePath("it", "jewish-weddings"),
        },
        {
          label: "Matrimoni interreligiosi",
          href: culturePath("it", "interfaith-weddings"),
        },
        { label: "Matrimoni arabi", href: culturePath("it", "arab-weddings") },
        {
          label: "Matrimoni dell'Asia meridionale",
          href: culturePath("it", "south-asian-weddings"),
        },
      ],
    },
    faq: {
      eyebrow: "Domande, con risposta",
      headline: "Domande *frequenti.*",
      items: [
        {
          question:
            "Con quanto anticipo dovremmo pianificare un matrimonio indiano in destinazione?",
          answer: [
            "Da diciotto a ventiquattro mesi è il nostro standard. L'atelier accetta solo quattordici matrimoni all'anno, e i matrimoni indiani si prenotano per primi per via del calendario su più giorni e degli specialisti coinvolti.",
            "Tempi di sei mesi sono tecnicamente possibili — li abbiamo realizzati — ma la disponibilità degli specialisti si riduce, e il costo di catering e allestimento può salire del 20-30%.",
          ],
        },
        {
          question:
            "Portate il vostro pandit e i vostri specialisti, o ne usate di locali?",
          answer: [
            "Portiamo i nostri specialisti di fiducia. Il nostro pandit, il coreografo, gli artisti di mehndi e il decoratore senior viaggiano con l'atelier. Catering e fiori locali sono reperiti in destinazione dove la qualità soddisfa il nostro standard; tutto il resto arriva in aereo.",
          ],
        },
        {
          question:
            "Potete soddisfare esigenze alimentari vegetariane, jainiste o gujarati?",
          answer: [
            "Sì — e di serie. Ogni pasto, in ogni giorno del matrimonio, prevede opzioni complete vegetariane, jainiste, vegane, senza glutine e senza allergeni. Informiamo la cucina del resort sei mesi prima e portiamo un consulente di menù culturalmente esperto per la settimana delle prove.",
          ],
        },
        {
          question:
            "Qual è il costo tipico di un matrimonio indiano in destinazione?",
          answer: [
            "Un intervallo utile per il 2026, per matrimoni da 200 a 400 invitati nell'arco di tre-cinque giorni, va da 350.000 a 1,2 milioni di USD, tutto compreso. Condividiamo budget pienamente trasparenti già alla prima consulenza, con intervalli per voce in base al numero di invitati.",
          ],
        },
        {
          question:
            "Potete accogliere le tradizioni punjabi, gujarati e dell'India del Sud con la stessa cura?",
          answer: [
            "Sì. Il nostro pandit è multilingue e ha officiato matrimoni nelle tradizioni punjabi, gujarati, tamil e bengalese. Lavoriamo con specialisti regionali dove musica, cucina o abbigliamento lo richiedono — per esempio, coinvolgendo un coreografo di Bharatanatyam per i matrimoni dell'India del Sud.",
          ],
        },
        {
          question:
            "Come funzionano i matrimoni indiani interreligiosi — indù-cristiano, indù-ebraico, sikh-indù?",
          answer: [
            "L'atelier ha accolto ventotto matrimoni indiani interreligiosi. Il nostro approccio predefinito è due celebranti, due cerimonie, un fine settimana — i pheras tenuti accanto alla chuppah, o l'Anand Karaj seguito da una messa cattolica.",
          ],
        },
        {
          question:
            "E gli invitati che non hanno mai partecipato a un matrimonio indiano?",
          answer: [
            "Inviamo a ogni invitato una guida pre-matrimonio tre settimane prima: programma, dress code per evento, note di galateo, frasi chiave in hindi o punjabi. Il team dell'atelier è disponibile per tutto il fine settimana per rispondere alle domande di persona. Nessuno si sente fuori posto.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Una conversazione privata —",
      headline: "*Inizia* il tuo\nmatrimonio indiano.",
      body: "Raccontaci la tradizione, la regione, le famiglie e una data di massima. Grecia risponde, di persona, entro cinque giorni lavorativi.",
      ctaLabel: "Richiedi una consulenza privata →",
      ctaHref: staticPath("it", "/contact"),
    },
  },
};
