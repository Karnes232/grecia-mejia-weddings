/**
 * Arab Weddings — full detail-page copy, all six locales.
 *
 * Culture № 03. Card copy (name, cardEyebrow, cardBlurb, cardMeta, intro) is
 * reused verbatim from `culture.ts`. Detail sections mirror the Indian
 * Weddings design prototype's structure, density, and restrained
 * first-person-plural studio register — written for ARAB weddings.
 *
 * Arabic ritual terms are kept untranslated across all locales: zaffe,
 * katb el-kitab, kosha, zaghareet, dabke, henna.
 *
 * Regional practice varies enormously — specifics are attributed to "the
 * family's protocol" rather than treated as universal rules, and religious
 * law is never conflated with custom. See the review notes at end of build.
 */

import type { Locale } from "../../../i18n/routing";

import {
  culturePath,
  destinationPath,
  staticPath,
  type CultureCopy,
} from "./shared";

export const arabWeddings: Record<Locale, CultureCopy> = {
  en: {
    name: "Arab Weddings",
    cardEyebrow: "Arab",
    cardBlurb:
      "Zaffe, henna, katb el-kitab. Lebanese, Saudi, Egyptian protocol.",
    cardMeta: "Discover",
    intro:
      "Zaffe processions, henna nights and katb el-kitab, held to Lebanese, Saudi and Egyptian protocol.",
    hero: {
      eyebrow: "The Traditions",
      scriptOverline: "A wedding of",
      headline: "Arab *celebration.*",
      deck: "Drummers, dabke and a kosha built for the entrance. One-to-three day arcs for a hundred-and-fifty to six-hundred guests, held to the family's regional protocol — Lebanese, Saudi, Egyptian or Moroccan.",
      captionLeft: "Layla & Karim · Punta Cana",
      captionCenter: "The zaffe at dusk · 2025",
      captionRight: "Plate III",
    },
    factStrip: [
      {
        label: "Wedding length",
        value: "1 – 3 days",
        sub: "Henna night to farewell",
      },
      { label: "Guest range", value: "150 – 600", sub: "Larger by request" },
      {
        label: "Lead time",
        value: "12 – 18 months",
        sub: "Musicians book early",
      },
      {
        label: "Protocols held",
        value: "Lebanese · Saudi",
        sub: "Egyptian · Moroccan",
      },
      {
        label: "Cuisine",
        value: "Halal · multi-regional",
        sub: "Levantine · Gulf · Egyptian",
      },
      { label: "Languages", value: "EN · Arabic", sub: "French on request" },
    ],
    overview: {
      sideEyebrow: "The tradition",
      sideNote:
        "Arab weddings across four regions, each held to the family's own protocol. A working register of what we know about hosting the celebration with grace.",
      headline: "One entrance,\nsix-hundred guests,\none *welcome.*",
      lede: "An Arab wedding is, above all, an arrival. The couple does not slip into the room — they are carried into it, on the shoulders of the zaffe, drummers ahead and dabke behind, the whole hall on its feet before they have taken a seat.",
      bodyParagraphs: [
        "We have planned Arab weddings to Lebanese, Saudi, Egyptian and Moroccan protocol. The differences are not cosmetic. A Lebanese reception may run loud and late around a live zaffe troupe; a Gulf celebration may be held to a quieter, more formal register, sometimes with the women's celebration kept separate at the family's request; an Egyptian wedding may open the dancing the moment the kosha is lit.",
        "The katb el-kitab — the signing of the marriage contract — is the legal and religious heart, and it is the family's to place. Some hold it weeks ahead, at home, before they ever board a plane. Others fold it into the wedding day itself. We schedule around it; we never assume it.",
        "What is shared, almost everywhere, is the henna night before — an evening of the women, of song, of hands marked in deep red — and the zaffe that announces the couple. We hold both as the families keep them, never as a generic 'Arab' set piece.",
        "We work with zaffe troupes who travel with their own drummers and dabke line, henna artists who bring a full team for the evening, and a halal kitchen protocol briefed with the resort months ahead. Prayer times are read into the schedule from the first draft.",
      ],
      pull: '"The couple does not slip into the room — they are carried into it, on the shoulders of the zaffe."',
      signatureName: "Grecia",
      signatureRole: "Founder · After many Arab weddings",
    },
    ceremonyArc: {
      eyebrow: "Ceremony structure",
      headline: "The wedding *arc.*",
      deck: "The order we hold across a typical Arab wedding. Variations are the rule, not the exception — every wedding adjusts to the family's region and protocol.",
      steps: [
        {
          numeral: "I",
          name: "Katb el-Kitab",
          sub: "Marriage contract · often held earlier or at home",
          when: "Pre-wedding or Day 1",
          body: "The signing of the marriage contract before family and the officiant — the legal and religious union. Many families hold it weeks ahead at home; others place it on the wedding day. We follow the family's protocol.",
        },
        {
          numeral: "II",
          name: "Henna night",
          sub: "Evening of the women · Lebanese & Egyptian variants",
          when: "Night before",
          body: "Hands and feet marked with deep-red henna. Song, dabke, an informal gathering — traditionally of the women. Some families keep it intimate; others host it at near-reception scale.",
        },
        {
          numeral: "III",
          name: "Zaffe",
          sub: "Procession · drummers & dabke",
          when: "Wedding day, on arrival",
          body: "The couple is announced and carried in by a live zaffe troupe — drummers, dabke dancers, sometimes a sword line. Loud, joyful, never recorded. The single most important entrance of the night.",
        },
        {
          numeral: "IV",
          name: "Entrance & kosha",
          sub: "The couple's seat of honour",
          when: "Wedding day",
          body: "The couple is seated at the kosha — the raised, floral-framed sofa at the head of the room. Guests greet them here; the first photographs and family receiving line happen at the kosha.",
        },
        {
          numeral: "V",
          name: "Dinner & speeches",
          sub: "Long-table or banquet service",
          when: "Wedding day, evening",
          body: "A multi-regional halal banquet — Levantine mezze, Gulf or Egyptian mains as the family prefers. Speeches from both families between courses.",
        },
        {
          numeral: "VI",
          name: "Zaghareet & dancing",
          sub: "Ululation opens the floor",
          when: "Wedding day, late",
          body: "Zaghareet — the high, trilling ululation — rises from the family and opens the dancing. Dabke lines form; the floor stays full for hours. Where the family requests a separated celebration, this is staffed and planned accordingly.",
        },
        {
          numeral: "VII",
          name: "Cake & farewell",
          sub: "Sword cutting in some families",
          when: "Wedding day, close",
          body: "The cake is cut — in some families ceremonially with a sword, to renewed zaghareet — and the couple is sent off. A farewell gathering or next-day brunch closes the celebration.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Design concepts",
      headline: "Kosha, *moodboards.*",
      deck: "Three working directions we have built more than once. Every wedding adapts these — palette, florals, the scale of the kosha.",
      cards: [
        {
          title: "White & Gold Kosha",
          body: "A formal kosha in ivory drapery and gold framing, white orchids and candlelight. Reads as quiet authority — Gulf-formal, photographs beautifully under chandeliers.",
          palette: ["#f5f0e6", "#d4ba8c", "#c9a24b", "#7a6326", "#2f2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Kosha", value: "Ivory drapery, gold frame" },
            { label: "Florals", value: "White orchid · rose · candlelight" },
            { label: "Best for", value: "Ballroom · estate · indoor" },
          ],
        },
        {
          title: "Jasmine Courtyard",
          body: "An open-air kosha framed in jasmine and citrus leaf, low brass lanterns and bare candle. Levantine and warm — built for a courtyard or a garden at dusk.",
          palette: ["#ebe3d3", "#cfd8c4", "#8a9a6b", "#b5894e", "#3a3326"],
          imageKey: "concept-2",
          rows: [
            { label: "Kosha", value: "Jasmine + citrus canopy" },
            { label: "Florals", value: "Jasmine · orange blossom · greenery" },
            { label: "Best for", value: "Courtyard · garden · villa" },
          ],
        },
        {
          title: "Modern Damask",
          body: "A pared-back kosha in deep damask and brushed brass, monochrome florals and architectural light. Contemporary, restrained — for couples who want the tradition held quietly.",
          palette: ["#e8ddcf", "#9c1f33", "#3a1a22", "#c2a14e", "#1f1b17"],
          imageKey: "concept-3",
          rows: [
            { label: "Kosha", value: "Damask + brushed brass" },
            { label: "Florals", value: "Monochrome rose · foliage" },
            { label: "Best for", value: "Modern venue · ballroom" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Cultural protocol",
      headline: "What we *hold.*",
      deck: "Six principles we plan around without compromise. Each is read against the family's region and wishes — we ask, we do not assume.",
      items: [
        {
          title: "Prayer times are read into the schedule",
          body: "From the first draft, the day is built around the family's prayer times — a quiet, clean space and a clear pause held where they are observed. The timeline bends to them, never the other way.",
        },
        {
          title: "The halal kitchen is briefed and verified",
          body: "Halal kitchen protocol is agreed with the resort months ahead — sourcing, separation and preparation confirmed in writing, and re-checked on the rehearsal week. We bring a consultant where the family wants a second set of eyes.",
        },
        {
          title: "A separated celebration is held properly",
          body: "Where the family requests a gender-separated celebration, it is planned in full — staffing, photography, entrances and timing all arranged so the separation is held with dignity, not improvised on the night.",
        },
        {
          title: "The zaffe is live, never recorded",
          body: "The procession is performed by a live troupe — drummers and dabke. We fly the troupe in where the destination cannot supply one to standard. A recorded zaffe is not a zaffe.",
        },
        {
          title: "Family precedence is honoured",
          body: "Seating, entrances and the receiving line at the kosha follow the family's order of precedence. We confirm it privately with both families and brief the team so no elder is seated out of place.",
        },
        {
          title: "Alcohol follows the family's wishes",
          body: "Whether the celebration is alcohol-free or includes a discreet service, it follows the family's wishes — planned quietly either way, with the resort briefed so the bar arrangement is never a surprise.",
        },
      ],
    },
    planning: {
      eyebrow: "Multi-day planning",
      headline: "A three-day *wedding,* hour by hour.",
      deck: "The blueprint we use for a typical 300-guest Arab wedding. Each day flexes to the family's region and protocol; the structure holds.",
      days: [
        {
          numeral: "I",
          dayLabel: "Day One",
          title: "Welcome & henna night",
          body: "Guests arrive through the day; transfers and check-ins are run by the studio. An evening welcome, then the henna night — traditionally the women's evening, with henna artists in several stations, song and dabke.",
          events: [
            {
              time: "Morning",
              body: "Guest arrivals · airport transfers · hotel check-in",
            },
            { time: "14:00", body: "Welcome lunch at the resort" },
            {
              time: "18:00",
              body: "Henna night · women · henna stations · 4 hours",
            },
            { time: "21:00", body: "Casual dinner · Levantine mezze buffet" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Day Two",
          title: "The wedding",
          body: "If the katb el-kitab is held the same day, it sits in the afternoon, privately, before the reception. The zaffe announces the couple in the evening; the kosha, banquet, speeches and dancing follow. Prayer times held throughout.",
          events: [
            {
              time: "Afternoon",
              body: "Katb el-Kitab · private · if held same day",
            },
            { time: "18:30", body: "Guests seated · reception opens" },
            {
              time: "19:30",
              body: "Zaffe · live troupe · couple's entrance · 20 minutes",
            },
            {
              time: "19:50",
              body: "Kosha · receiving line · first photographs",
            },
            {
              time: "20:30",
              body: "Banquet dinner · multi-regional halal · speeches",
            },
            {
              time: "22:00",
              body: "Zaghareet · cake · dabke · dancing till late",
            },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Day Three",
          title: "Farewell brunch",
          body: "A morning-after brunch hosted by the couple — outdoors, more relaxed, focused on goodbyes. The unofficial close for most guests; close family often stay a day or two longer.",
          events: [
            { time: "11:00", body: "Farewell brunch · poolside or garden" },
            { time: "Afternoon", body: "Departures · airport transfers" },
            { time: "Evening", body: "Close-family dinner · optional" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Destination compatibility",
      headline: "Where Arab weddings *work best.*",
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
          name: "Côte d'Azur",
          sub: "France · June – September",
          destinationSlug: "cote-dazur",
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
          name: "St. Barths",
          sub: "Caribbean · November – April",
          destinationSlug: "st-barths",
        },
        {
          rating: 4,
          name: "Tuscany",
          sub: "Italy · May – October",
          destinationSlug: "tuscany",
        },
        {
          rating: 4,
          name: "Paris & Île-de-France",
          sub: "France · year-round indoor",
          destinationSlug: "paris-ile-de-france",
        },
        {
          rating: 3,
          name: "Provence",
          sub: "France · May – September",
          destinationSlug: "provence",
        },
      ],
    },
    guest: {
      eyebrow: "Guest management",
      headline: "The *practical* care of 300 guests.",
      deck: "The logistics layer most planners under-resource. We start more than a year ahead.",
      cells: [
        {
          title: "Halal dietary protocol",
          body: "Halal sourcing and preparation confirmed in writing with the resort kitchen, separation verified, allergen and vegetarian options at every meal. A consultant on the rehearsal week where the family wants one.",
        },
        {
          title: "Prayer space & timing",
          body: "A clean, quiet prayer space held for the duration, with mats and direction marked, and prayer times read into the schedule so the celebration pauses cleanly where they are observed.",
        },
        {
          title: "Gender-considerate staffing",
          body: "Where the family requests it, staffing and photography are arranged to respect a separated celebration — female photographers and servers for the women's side, entrances and sightlines planned accordingly.",
        },
        {
          title: "Elders & mobility",
          body: "Dedicated seating near the kosha, separate transport, ground-floor rooms reserved for senior guests, and a studio liaison for the elders across the weekend.",
        },
        {
          title: "Travel & room blocks",
          body: "Group room blocks across tiers, transfers coordinated over several days of arrivals, and welcome packages in every room with the schedule, dress code per event and contacts.",
        },
        {
          title: "Communications",
          body: "A guest group ahead of travel, a wedding site with the daily schedule and dress codes, and printed Arabic-language guides alongside English for guests who prefer them.",
        },
      ],
    },
    related: {
      eyebrow: "Continue reading",
      headline: "From the *journal.*",
      articles: [
        {
          category: "Arab Weddings · Punta Cana",
          title: "Best Caribbean Resorts for a Halal Wedding",
          body: "A working register of the resorts that hold a halal kitchen and a 300-guest zaffe with grace.",
          imageKey: "culture-related-1",
        },
        {
          category: "Tradition · Arab",
          title: "The Zaffe, in Detail",
          body: "On the procession that announces the couple — and why it is never recorded.",
          imageKey: "culture-related-2",
        },
        {
          category: "Design · Arab",
          title: "A Field Guide to Kosha Styles",
          body: "White-and-gold, jasmine courtyard, modern damask — and how they differ.",
          imageKey: "culture-related-3",
        },
        {
          category: "Planning · Regional",
          title: "How Lebanese and Saudi Weddings Differ",
          body: "Two protocols, two registers — and what changes in the planning.",
          imageKey: "culture-related-4",
        },
        {
          category: "Cost · Arab",
          title: "What a Luxury Arab Wedding Actually Costs",
          body: "Frank 2026 budgets by guest count and region.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("en", "punta-cana") },
        { label: "Côte d'Azur", href: destinationPath("en", "cote-dazur") },
        { label: "Amalfi Coast", href: destinationPath("en", "amalfi") },
        { label: "Lake Como", href: destinationPath("en", "lake-como") },
      ],
      sidebarVenues: [
        { label: "Eden Roc Cap Cana" },
        { label: "Hotel du Cap-Eden-Roc" },
        { label: "Villa Tre Ville" },
        { label: "Grand-Hôtel du Cap-Ferrat" },
      ],
      sidebarCultures: [
        {
          label: "Indian weddings",
          href: culturePath("en", "indian-weddings"),
        },
        {
          label: "Jewish weddings",
          href: culturePath("en", "jewish-weddings"),
        },
        {
          label: "Interfaith weddings",
          href: culturePath("en", "interfaith-weddings"),
        },
        {
          label: "European weddings",
          href: culturePath("en", "european-weddings"),
        },
      ],
    },
    faq: {
      eyebrow: "Questions, answered",
      headline: "Frequently *asked.*",
      items: [
        {
          question: "Can you host a fully halal wedding at a Caribbean resort?",
          answer: [
            "Yes. We agree halal kitchen protocol with the resort months ahead — sourcing, separation and preparation confirmed in writing and re-checked on the rehearsal week.",
            "Where the family wants a second set of eyes, we bring a consultant for the rehearsal week. The bar arrangement, alcohol-free or discreet, is planned to the family's wishes.",
          ],
        },
        {
          question: "Do you arrange the katb el-kitab abroad or at home?",
          answer: [
            "Either — it is the family's to place. Many families hold the katb el-kitab weeks ahead at home, before travel; others fold it into the wedding day. We schedule around the family's choice and coordinate the officiant accordingly.",
          ],
        },
        {
          question: "Can you hold a gender-separated celebration?",
          answer: [
            "Where the family requests it, yes — and held properly. Staffing, photography, entrances and timing are all arranged so the separation is dignified rather than improvised, with female photographers and servers for the women's side where asked.",
          ],
        },
        {
          question: "Are the zaffe musicians local or flown in?",
          answer: [
            "We use a live zaffe troupe always — a recorded zaffe is not a zaffe. Where the destination cannot supply drummers and a dabke line to standard, we fly the troupe in. Musicians book early, which is why we hold the date well ahead.",
          ],
        },
        {
          question: "What is the typical cost of a destination Arab wedding?",
          answer: [
            "A useful 2026 range for 150–400 guests across one-to-three days is USD $250,000 – $900,000, all-in, depending on region, guest count and the scale of the zaffe and kosha.",
            "We share transparent line-item budgets in the first consultation.",
          ],
        },
        {
          question: "How do Lebanese and Saudi weddings differ in planning?",
          answer: [
            "Broadly — and always subject to the individual family — a Lebanese reception tends to run loud and late around a live zaffe, while a Gulf celebration may be held to a quieter, more formal register, sometimes with the women's celebration kept separate at the family's request.",
            "We ask each family about their own protocol rather than apply a regional template.",
          ],
        },
        {
          question:
            "What about guests who have never attended an Arab wedding?",
          answer: [
            "We send every guest a pre-wedding guide: schedule, dress code per event, and notes on the zaffe, kosha and zaghareet so the evening reads clearly. The studio team is on hand throughout the weekend.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "A private conversation —",
      headline: "*Begin* your\nArab wedding.",
      body: "Tell us the region, the protocol, the families and a rough date. Grecia writes back, personally, within five working days.",
      ctaLabel: "Request a private consultation →",
      ctaHref: staticPath("en", "/contact"),
    },
  },

  es: {
    name: "Bodas Árabes",
    cardEyebrow: "Árabe",
    cardBlurb:
      "Zaffe, henna, katb el-kitab. Protocolo libanés, saudí, egipcio.",
    cardMeta: "Descubrir",
    intro:
      "Cortejos zaffe, noches de henna y katb el-kitab, celebrados según el protocolo libanés, saudí y egipcio.",
    hero: {
      eyebrow: "Las Tradiciones",
      scriptOverline: "Una boda de",
      headline: "*celebración* árabe.",
      deck: "Tambores, dabke y una kosha pensada para la entrada. Arcos de uno a tres días para ciento cincuenta a seiscientos invitados, según el protocolo regional de la familia: libanés, saudí, egipcio o marroquí.",
      captionLeft: "Layla y Karim · Punta Cana",
      captionCenter: "El zaffe al atardecer · 2025",
      captionRight: "Lámina III",
    },
    factStrip: [
      {
        label: "Duración de la boda",
        value: "1 – 3 días",
        sub: "De la noche de henna a la despedida",
      },
      {
        label: "Número de invitados",
        value: "150 – 600",
        sub: "Más, bajo petición",
      },
      {
        label: "Antelación",
        value: "12 – 18 meses",
        sub: "Los músicos se reservan pronto",
      },
      {
        label: "Protocolos celebrados",
        value: "Libanés · Saudí",
        sub: "Egipcio · Marroquí",
      },
      {
        label: "Cocina",
        value: "Halal · multirregional",
        sub: "Levantina · del Golfo · egipcia",
      },
      { label: "Idiomas", value: "EN · árabe", sub: "Francés bajo petición" },
    ],
    overview: {
      sideEyebrow: "La tradición",
      sideNote:
        "Bodas árabes de cuatro regiones, cada una celebrada según el protocolo de la propia familia. Un registro vivo de lo que sabemos sobre acoger la celebración con gracia.",
      headline: "Una entrada,\nseiscientos invitados,\nuna *bienvenida.*",
      lede: "Una boda árabe es, ante todo, una llegada. La pareja no entra discretamente en la sala: es llevada a hombros por el zaffe, los tambores delante y el dabke detrás, con todo el salón de pie antes de que se hayan sentado.",
      bodyParagraphs: [
        "Hemos planeado bodas árabes según el protocolo libanés, saudí, egipcio y marroquí. Las diferencias no son cosméticas. Una recepción libanesa puede transcurrir alta y hasta tarde en torno a una troupe de zaffe en vivo; una celebración del Golfo puede mantenerse en un registro más sereno y formal, a veces con la celebración de las mujeres separada a petición de la familia; una boda egipcia puede abrir el baile en cuanto se enciende la kosha.",
        "El katb el-kitab —la firma del contrato matrimonial— es el corazón legal y religioso, y corresponde a la familia situarlo. Algunas lo celebran semanas antes, en casa, antes de tomar un avión. Otras lo integran en el propio día de la boda. Nosotros programamos en torno a él; nunca lo damos por supuesto.",
        "Lo compartido, casi en todas partes, es la noche de henna previa —una velada de las mujeres, de cantos, de manos teñidas de rojo intenso— y el zaffe que anuncia a la pareja. Sostenemos ambos como los conservan las familias, nunca como un decorado «árabe» genérico.",
        "Trabajamos con troupes de zaffe que viajan con sus propios tambores y su línea de dabke, artistas de henna que traen un equipo completo para la velada, y un protocolo de cocina halal acordado con el resort con meses de antelación. Los tiempos de oración se incorporan al programa desde el primer borrador.",
      ],
      pull: "«La pareja no entra discretamente en la sala: es llevada a hombros por el zaffe.»",
      signatureName: "Grecia",
      signatureRole: "Fundadora · Tras muchas bodas árabes",
    },
    ceremonyArc: {
      eyebrow: "Estructura de la ceremonia",
      headline: "El *arco* de la boda.",
      deck: "El orden que sostenemos en una boda árabe típica. Las variaciones son la regla, no la excepción: cada boda se ajusta a la región y al protocolo de la familia.",
      steps: [
        {
          numeral: "I",
          name: "Katb el-Kitab",
          sub: "Contrato matrimonial · a menudo antes o en casa",
          when: "Pre-boda o Día 1",
          body: "La firma del contrato matrimonial ante la familia y el oficiante: la unión legal y religiosa. Muchas familias lo celebran semanas antes en casa; otras lo sitúan el día de la boda. Seguimos el protocolo de la familia.",
        },
        {
          numeral: "II",
          name: "Noche de henna",
          sub: "Velada de las mujeres · variantes libanesa y egipcia",
          when: "La noche anterior",
          body: "Manos y pies teñidos de henna roja intensa. Canto, dabke, una reunión informal, tradicionalmente de las mujeres. Algunas familias la mantienen íntima; otras la celebran casi a escala de recepción.",
        },
        {
          numeral: "III",
          name: "Zaffe",
          sub: "Cortejo · tambores y dabke",
          when: "Día de la boda, a la llegada",
          body: "La pareja es anunciada y llevada en hombros por una troupe de zaffe en vivo: tambores, bailarines de dabke, a veces una línea de espadas. Sonoro, jubiloso, nunca grabado. La entrada más importante de la noche.",
        },
        {
          numeral: "IV",
          name: "Entrada y kosha",
          sub: "El asiento de honor de la pareja",
          when: "Día de la boda",
          body: "La pareja se sienta en la kosha: el sofá elevado y enmarcado de flores a la cabecera de la sala. Los invitados los saludan aquí; las primeras fotografías y el besamanos familiar suceden en la kosha.",
        },
        {
          numeral: "V",
          name: "Cena y discursos",
          sub: "Servicio en mesa larga o banquete",
          when: "Día de la boda, noche",
          body: "Un banquete halal multirregional: mezze levantino, platos del Golfo o egipcios según prefiera la familia. Discursos de ambas familias entre platos.",
        },
        {
          numeral: "VI",
          name: "Zaghareet y baile",
          sub: "La ululación abre la pista",
          when: "Día de la boda, tarde",
          body: "El zaghareet —la ululación aguda y trinada— se eleva desde la familia y abre el baile. Se forman las líneas de dabke; la pista se mantiene llena durante horas. Cuando la familia solicita una celebración separada, se dota de personal y se planifica en consecuencia.",
        },
        {
          numeral: "VII",
          name: "Tarta y despedida",
          sub: "Corte con espada en algunas familias",
          when: "Día de la boda, cierre",
          body: "Se corta la tarta —en algunas familias ceremonialmente con espada, entre nuevos zaghareet— y se despide a la pareja. Una reunión de despedida o un brunch al día siguiente cierra la celebración.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Conceptos de diseño",
      headline: "Kosha, *paneles de inspiración.*",
      deck: "Tres direcciones de trabajo que hemos construido más de una vez. Cada boda las adapta: paleta, flores, la escala de la kosha.",
      cards: [
        {
          title: "Kosha blanca y oro",
          body: "Una kosha formal en drapeado marfil y enmarcado dorado, orquídeas blancas y luz de velas. Lee como autoridad serena —formalidad del Golfo—, fotografía maravillosamente bajo arañas.",
          palette: ["#f5f0e6", "#d4ba8c", "#c9a24b", "#7a6326", "#2f2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Kosha", value: "Drapeado marfil, marco dorado" },
            { label: "Flores", value: "Orquídea blanca · rosa · velas" },
            { label: "Ideal para", value: "Salón · finca · interior" },
          ],
        },
        {
          title: "Patio de jazmín",
          body: "Una kosha al aire libre enmarcada en jazmín y hoja de cítrico, faroles de latón bajos y vela desnuda. Levantina y cálida, pensada para un patio o un jardín al atardecer.",
          palette: ["#ebe3d3", "#cfd8c4", "#8a9a6b", "#b5894e", "#3a3326"],
          imageKey: "concept-2",
          rows: [
            { label: "Kosha", value: "Dosel de jazmín y cítrico" },
            { label: "Flores", value: "Jazmín · azahar · verdor" },
            { label: "Ideal para", value: "Patio · jardín · villa" },
          ],
        },
        {
          title: "Damasco moderno",
          body: "Una kosha depurada en damasco intenso y latón cepillado, flores monocromas y luz arquitectónica. Contemporánea y contenida, para parejas que quieren sostener la tradición con sobriedad.",
          palette: ["#e8ddcf", "#9c1f33", "#3a1a22", "#c2a14e", "#1f1b17"],
          imageKey: "concept-3",
          rows: [
            { label: "Kosha", value: "Damasco y latón cepillado" },
            { label: "Flores", value: "Rosa monocroma · follaje" },
            { label: "Ideal para", value: "Espacio moderno · salón" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocolo cultural",
      headline: "Lo que *sostenemos.*",
      deck: "Seis principios en torno a los que planificamos sin concesiones. Cada uno se lee según la región y los deseos de la familia: preguntamos, no suponemos.",
      items: [
        {
          title: "Los tiempos de oración se incorporan al programa",
          body: "Desde el primer borrador, el día se construye en torno a los tiempos de oración de la familia: un espacio limpio y sereno y una pausa clara allí donde se observan. El calendario cede a ellos, nunca al revés.",
        },
        {
          title: "La cocina halal se informa y se verifica",
          body: "El protocolo de cocina halal se acuerda con el resort con meses de antelación —origen, separación y preparación confirmados por escrito— y se vuelve a comprobar en la semana de ensayo. Aportamos un consultor cuando la familia quiere una segunda mirada.",
        },
        {
          title: "Una celebración separada se sostiene como es debido",
          body: "Cuando la familia solicita una celebración separada por sexos, se planifica por completo —personal, fotografía, entradas y tiempos— para que la separación se mantenga con dignidad y no se improvise en la noche.",
        },
        {
          title: "El zaffe es en vivo, nunca grabado",
          body: "El cortejo lo interpreta una troupe en vivo: tambores y dabke. Traemos la troupe en avión cuando el destino no puede ofrecer una a la altura. Un zaffe grabado no es un zaffe.",
        },
        {
          title: "Se honra la precedencia familiar",
          body: "Los asientos, las entradas y el besamanos en la kosha siguen el orden de precedencia de la familia. Lo confirmamos en privado con ambas familias e informamos al equipo para que ningún mayor quede mal ubicado.",
        },
        {
          title: "El alcohol sigue los deseos de la familia",
          body: "Ya sea una celebración sin alcohol o con un servicio discreto, sigue los deseos de la familia, planificado con discreción en cualquier caso, con el resort informado para que la disposición de la barra nunca sea una sorpresa.",
        },
      ],
    },
    planning: {
      eyebrow: "Planificación de varios días",
      headline: "Una *boda* de tres días, hora a hora.",
      deck: "El esquema que usamos para una boda árabe típica de 300 invitados. Cada día se adapta a la región y al protocolo de la familia; la estructura se mantiene.",
      days: [
        {
          numeral: "I",
          dayLabel: "Día Uno",
          title: "Bienvenida y noche de henna",
          body: "Los invitados llegan a lo largo del día; el atelier gestiona traslados y registros. Una bienvenida por la tarde y luego la noche de henna —tradicionalmente la velada de las mujeres—, con artistas de henna en varias estaciones, canto y dabke.",
          events: [
            {
              time: "Mañana",
              body: "Llegadas · traslados al aeropuerto · registro en el hotel",
            },
            { time: "14:00", body: "Almuerzo de bienvenida en el resort" },
            {
              time: "18:00",
              body: "Noche de henna · mujeres · estaciones de henna · 4 horas",
            },
            { time: "21:00", body: "Cena informal · bufé de mezze levantino" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Día Dos",
          title: "La boda",
          body: "Si el katb el-kitab se celebra el mismo día, se sitúa por la tarde, en privado, antes de la recepción. El zaffe anuncia a la pareja por la noche; siguen la kosha, el banquete, los discursos y el baile. Los tiempos de oración se respetan a lo largo del día.",
          events: [
            {
              time: "Tarde",
              body: "Katb el-Kitab · en privado · si se celebra el mismo día",
            },
            {
              time: "18:30",
              body: "Invitados sentados · apertura de la recepción",
            },
            {
              time: "19:30",
              body: "Zaffe · troupe en vivo · entrada de la pareja · 20 minutos",
            },
            { time: "19:50", body: "Kosha · besamanos · primeras fotografías" },
            {
              time: "20:30",
              body: "Cena de banquete · halal multirregional · discursos",
            },
            {
              time: "22:00",
              body: "Zaghareet · tarta · dabke · baile hasta tarde",
            },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Día Tres",
          title: "Brunch de despedida",
          body: "Un brunch a la mañana siguiente ofrecido por la pareja —al aire libre, más distendido, centrado en las despedidas—. El cierre extraoficial para la mayoría de los invitados; la familia cercana suele quedarse un día o dos más.",
          events: [
            {
              time: "11:00",
              body: "Brunch de despedida · junto a la piscina o en el jardín",
            },
            { time: "Tarde", body: "Salidas · traslados al aeropuerto" },
            { time: "Noche", body: "Cena de familia cercana · opcional" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilidad de destinos",
      headline: "Dónde funcionan mejor las *bodas árabes.*",
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
          name: "Costa Azul",
          sub: "Francia · junio – septiembre",
          destinationSlug: "cote-dazur",
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
          name: "St. Barths",
          sub: "Caribe · noviembre – abril",
          destinationSlug: "st-barths",
        },
        {
          rating: 4,
          name: "Toscana",
          sub: "Italia · mayo – octubre",
          destinationSlug: "tuscany",
        },
        {
          rating: 4,
          name: "París e Isla de Francia",
          sub: "Francia · todo el año en interior",
          destinationSlug: "paris-ile-de-france",
        },
        {
          rating: 3,
          name: "Provenza",
          sub: "Francia · mayo – septiembre",
          destinationSlug: "provence",
        },
      ],
    },
    guest: {
      eyebrow: "Gestión de invitados",
      headline: "El cuidado *práctico* de 300 invitados.",
      deck: "La capa logística que la mayoría de los planificadores infradotan. Empezamos más de un año antes.",
      cells: [
        {
          title: "Protocolo dietético halal",
          body: "Origen y preparación halal confirmados por escrito con la cocina del resort, separación verificada, opciones para alérgenos y vegetarianas en cada comida. Un consultor en la semana de ensayo cuando la familia lo desea.",
        },
        {
          title: "Espacio y tiempos de oración",
          body: "Un espacio de oración limpio y sereno reservado durante todo el evento, con alfombras y dirección marcadas, y los tiempos de oración incorporados al programa para que la celebración haga una pausa clara allí donde se observan.",
        },
        {
          title: "Personal con perspectiva de género",
          body: "Cuando la familia lo solicita, el personal y la fotografía se organizan para respetar una celebración separada: fotógrafas y personal de servicio femenino para el lado de las mujeres, con entradas y líneas de visión planificadas en consecuencia.",
        },
        {
          title: "Mayores y movilidad",
          body: "Asientos dedicados cerca de la kosha, transporte aparte, habitaciones en planta baja reservadas para los invitados mayores y un enlace del atelier para los mayores durante todo el fin de semana.",
        },
        {
          title: "Viajes y bloques de habitaciones",
          body: "Bloques de habitaciones por categorías, traslados coordinados a lo largo de varios días de llegadas y paquetes de bienvenida en cada habitación con el programa, el código de vestimenta por evento y los contactos.",
        },
        {
          title: "Comunicaciones",
          body: "Un grupo de invitados antes del viaje, un sitio de la boda con el programa diario y los códigos de vestimenta, y guías impresas en árabe junto al inglés para los invitados que las prefieran.",
        },
      ],
    },
    related: {
      eyebrow: "Seguir leyendo",
      headline: "Del *diario.*",
      articles: [
        {
          category: "Bodas Árabes · Punta Cana",
          title: "Los mejores resorts del Caribe para una boda halal",
          body: "Un registro vivo de los resorts que sostienen una cocina halal y un zaffe de 300 invitados con gracia.",
          imageKey: "culture-related-1",
        },
        {
          category: "Tradición · Árabe",
          title: "El zaffe, en detalle",
          body: "Sobre el cortejo que anuncia a la pareja y por qué nunca se graba.",
          imageKey: "culture-related-2",
        },
        {
          category: "Diseño · Árabe",
          title: "Guía de estilos de kosha",
          body: "Blanca y oro, patio de jazmín, damasco moderno, y en qué se diferencian.",
          imageKey: "culture-related-3",
        },
        {
          category: "Planificación · Regional",
          title: "En qué se diferencian las bodas libanesas y saudíes",
          body: "Dos protocolos, dos registros, y qué cambia en la planificación.",
          imageKey: "culture-related-4",
        },
        {
          category: "Coste · Árabe",
          title: "Cuánto cuesta realmente una boda árabe de lujo",
          body: "Presupuestos francos de 2026 por número de invitados y región.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("es", "punta-cana") },
        { label: "Costa Azul", href: destinationPath("es", "cote-dazur") },
        { label: "Costa de Amalfi", href: destinationPath("es", "amalfi") },
        { label: "Lago de Como", href: destinationPath("es", "lake-como") },
      ],
      sidebarVenues: [
        { label: "Eden Roc Cap Cana" },
        { label: "Hotel du Cap-Eden-Roc" },
        { label: "Villa Tre Ville" },
        { label: "Grand-Hôtel du Cap-Ferrat" },
      ],
      sidebarCultures: [
        { label: "Bodas indias", href: culturePath("es", "indian-weddings") },
        { label: "Bodas judías", href: culturePath("es", "jewish-weddings") },
        {
          label: "Bodas interreligiosas",
          href: culturePath("es", "interfaith-weddings"),
        },
        {
          label: "Bodas europeas",
          href: culturePath("es", "european-weddings"),
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas, respondidas",
      headline: "Preguntas *frecuentes.*",
      items: [
        {
          question:
            "¿Pueden organizar una boda totalmente halal en un resort del Caribe?",
          answer: [
            "Sí. Acordamos el protocolo de cocina halal con el resort con meses de antelación: origen, separación y preparación confirmados por escrito y revisados de nuevo en la semana de ensayo.",
            "Cuando la familia desea una segunda mirada, aportamos un consultor para la semana de ensayo. La disposición de la barra, sin alcohol o discreta, se planifica según los deseos de la familia.",
          ],
        },
        {
          question: "¿Organizan el katb el-kitab en el extranjero o en casa?",
          answer: [
            "Cualquiera de las dos: corresponde a la familia situarlo. Muchas familias celebran el katb el-kitab semanas antes en casa, antes de viajar; otras lo integran en el día de la boda. Planificamos en torno a la elección de la familia y coordinamos al oficiante en consecuencia.",
          ],
        },
        {
          question: "¿Pueden celebrar una celebración separada por sexos?",
          answer: [
            "Cuando la familia lo solicita, sí, y sostenida como es debido. El personal, la fotografía, las entradas y los tiempos se organizan para que la separación sea digna y no improvisada, con fotógrafas y personal de servicio femenino para el lado de las mujeres cuando se pide.",
          ],
        },
        {
          question: "Los músicos del zaffe, ¿son locales o vienen en avión?",
          answer: [
            "Siempre usamos una troupe de zaffe en vivo: un zaffe grabado no es un zaffe. Cuando el destino no puede ofrecer tambores y una línea de dabke a la altura, traemos la troupe en avión. Los músicos se reservan pronto, por eso fijamos la fecha con mucha antelación.",
          ],
        },
        {
          question: "¿Cuál es el coste típico de una boda árabe en destino?",
          answer: [
            "Un rango útil para 2026, para 150–400 invitados a lo largo de uno a tres días, es de 250.000 – 900.000 USD, todo incluido, según la región, el número de invitados y la escala del zaffe y la kosha.",
            "Compartimos presupuestos transparentes y desglosados en la primera consulta.",
          ],
        },
        {
          question:
            "¿En qué se diferencian las bodas libanesas y saudíes en la planificación?",
          answer: [
            "A grandes rasgos —y siempre según la familia concreta—, una recepción libanesa tiende a transcurrir alta y hasta tarde en torno a un zaffe en vivo, mientras que una celebración del Golfo puede mantenerse en un registro más sereno y formal, a veces con la celebración de las mujeres separada a petición de la familia.",
            "Preguntamos a cada familia por su propio protocolo en lugar de aplicar una plantilla regional.",
          ],
        },
        {
          question: "¿Y los invitados que nunca han asistido a una boda árabe?",
          answer: [
            "Enviamos a cada invitado una guía previa: programa, código de vestimenta por evento y notas sobre el zaffe, la kosha y el zaghareet para que la velada se lea con claridad. El equipo del atelier está disponible durante todo el fin de semana.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Una conversación privada —",
      headline: "*Comience* su\nboda árabe.",
      body: "Cuéntenos la región, el protocolo, las familias y una fecha aproximada. Grecia responde, en persona, en un plazo de cinco días hábiles.",
      ctaLabel: "Solicitar una consulta privada →",
      ctaHref: staticPath("es", "/contact"),
    },
  },

  fr: {
    name: "Mariages Arabes",
    cardEyebrow: "Arabe",
    cardBlurb:
      "Zaffe, henné, katb el-kitab. Protocole libanais, saoudien, égyptien.",
    cardMeta: "Découvrir",
    intro:
      "Cortèges zaffe, soirées de henné et katb el-kitab, tenus selon le protocole libanais, saoudien et égyptien.",
    hero: {
      eyebrow: "Les Traditions",
      scriptOverline: "Un mariage de",
      headline: "*célébration* arabe.",
      deck: "Tambours, dabke et une kosha pensée pour l'entrée. Des trames d'un à trois jours pour cent cinquante à six cents invités, tenues selon le protocole régional de la famille : libanais, saoudien, égyptien ou marocain.",
      captionLeft: "Layla & Karim · Punta Cana",
      captionCenter: "Le zaffe au crépuscule · 2025",
      captionRight: "Planche III",
    },
    factStrip: [
      {
        label: "Durée du mariage",
        value: "1 – 3 jours",
        sub: "De la soirée de henné aux adieux",
      },
      {
        label: "Nombre d'invités",
        value: "150 – 600",
        sub: "Davantage sur demande",
      },
      {
        label: "Délai",
        value: "12 – 18 mois",
        sub: "Les musiciens se réservent tôt",
      },
      {
        label: "Protocoles tenus",
        value: "Libanais · Saoudien",
        sub: "Égyptien · Marocain",
      },
      {
        label: "Cuisine",
        value: "Halal · multirégionale",
        sub: "Levantine · du Golfe · égyptienne",
      },
      { label: "Langues", value: "EN · arabe", sub: "Français sur demande" },
    ],
    overview: {
      sideEyebrow: "La tradition",
      sideNote:
        "Des mariages arabes de quatre régions, chacun tenu selon le protocole propre à la famille. Un registre vivant de ce que nous savons sur l'art d'accueillir la célébration avec grâce.",
      headline: "Une entrée,\nsix cents invités,\nun *accueil.*",
      lede: "Un mariage arabe est, avant tout, une arrivée. Le couple ne se glisse pas dans la salle : il y est porté, sur les épaules du zaffe, les tambours devant et le dabke derrière, toute la salle debout avant même qu'il ne se soit assis.",
      bodyParagraphs: [
        "Nous avons organisé des mariages arabes selon le protocole libanais, saoudien, égyptien et marocain. Les différences ne sont pas cosmétiques. Une réception libanaise peut se dérouler forte et tard autour d'une troupe de zaffe en direct ; une célébration du Golfe peut être tenue dans un registre plus calme et plus formel, parfois avec la célébration des femmes maintenue à part à la demande de la famille ; un mariage égyptien peut ouvrir la danse dès que la kosha est illuminée.",
        "Le katb el-kitab — la signature du contrat de mariage — en est le cœur juridique et religieux, et c'est à la famille de le placer. Certaines le tiennent des semaines à l'avance, à la maison, avant même de prendre l'avion. D'autres l'intègrent au jour même du mariage. Nous organisons autour de lui ; nous ne le présumons jamais.",
        "Ce qui est partagé, presque partout, c'est la soirée de henné qui précède — une soirée des femmes, de chants, de mains marquées de rouge profond — et le zaffe qui annonce le couple. Nous tenons l'un et l'autre comme les familles les conservent, jamais comme un décor « arabe » générique.",
        "Nous travaillons avec des troupes de zaffe qui voyagent avec leurs propres tambours et leur ligne de dabke, des artistes de henné qui amènent une équipe complète pour la soirée, et un protocole de cuisine halal arrêté avec le resort des mois à l'avance. Les heures de prière sont inscrites au programme dès le premier brouillon.",
      ],
      pull: "« Le couple ne se glisse pas dans la salle : il y est porté, sur les épaules du zaffe. »",
      signatureName: "Grecia",
      signatureRole: "Fondatrice · Après de nombreux mariages arabes",
    },
    ceremonyArc: {
      eyebrow: "Structure de la cérémonie",
      headline: "La *trame* du mariage.",
      deck: "L'ordre que nous tenons lors d'un mariage arabe type. Les variations sont la règle, non l'exception : chaque mariage s'ajuste à la région et au protocole de la famille.",
      steps: [
        {
          numeral: "I",
          name: "Katb el-Kitab",
          sub: "Contrat de mariage · souvent plus tôt ou à la maison",
          when: "Avant le mariage ou Jour 1",
          body: "La signature du contrat de mariage devant la famille et l'officiant : l'union juridique et religieuse. Beaucoup de familles le tiennent des semaines à l'avance à la maison ; d'autres le placent le jour du mariage. Nous suivons le protocole de la famille.",
        },
        {
          numeral: "II",
          name: "Soirée de henné",
          sub: "Soirée des femmes · variantes libanaise et égyptienne",
          when: "La veille",
          body: "Mains et pieds marqués de henné rouge profond. Chant, dabke, un rassemblement informel, traditionnellement des femmes. Certaines familles la gardent intime ; d'autres la tiennent presque à l'échelle d'une réception.",
        },
        {
          numeral: "III",
          name: "Zaffe",
          sub: "Cortège · tambours et dabke",
          when: "Jour du mariage, à l'arrivée",
          body: "Le couple est annoncé et porté par une troupe de zaffe en direct : tambours, danseurs de dabke, parfois une ligne de sabres. Fort, joyeux, jamais enregistré. L'entrée la plus importante de la soirée.",
        },
        {
          numeral: "IV",
          name: "Entrée et kosha",
          sub: "Le siège d'honneur du couple",
          when: "Jour du mariage",
          body: "Le couple s'installe à la kosha : le canapé surélevé et encadré de fleurs en tête de salle. Les invités les saluent ici ; les premières photographies et la haie d'honneur familiale se font à la kosha.",
        },
        {
          numeral: "V",
          name: "Dîner et discours",
          sub: "Service en table longue ou banquet",
          when: "Jour du mariage, soir",
          body: "Un banquet halal multirégional : mezze levantin, plats du Golfe ou égyptiens selon le souhait de la famille. Discours des deux familles entre les plats.",
        },
        {
          numeral: "VI",
          name: "Zaghareet et danse",
          sub: "Le youyou ouvre la piste",
          when: "Jour du mariage, tard",
          body: "Le zaghareet — le youyou aigu et trillé — s'élève de la famille et ouvre la danse. Les lignes de dabke se forment ; la piste reste pleine des heures durant. Lorsque la famille demande une célébration séparée, elle est dotée en personnel et planifiée en conséquence.",
        },
        {
          numeral: "VII",
          name: "Gâteau et adieux",
          sub: "Découpe au sabre dans certaines familles",
          when: "Jour du mariage, clôture",
          body: "Le gâteau est découpé — dans certaines familles cérémonieusement au sabre, sous de nouveaux zaghareet — et le couple est raccompagné. Un rassemblement d'adieu ou un brunch le lendemain clôt la célébration.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Concepts de design",
      headline: "Kosha, *planches d'inspiration.*",
      deck: "Trois directions de travail que nous avons construites plus d'une fois. Chaque mariage les adapte : palette, fleurs, l'échelle de la kosha.",
      cards: [
        {
          title: "Kosha blanc et or",
          body: "Une kosha formelle en drapé ivoire et encadrement doré, orchidées blanches et lumière des bougies. Se lit comme une autorité tranquille — formalité du Golfe —, photographie magnifiquement sous les lustres.",
          palette: ["#f5f0e6", "#d4ba8c", "#c9a24b", "#7a6326", "#2f2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Kosha", value: "Drapé ivoire, cadre doré" },
            { label: "Fleurs", value: "Orchidée blanche · rose · bougies" },
            {
              label: "Idéal pour",
              value: "Salle de bal · domaine · intérieur",
            },
          ],
        },
        {
          title: "Cour de jasmin",
          body: "Une kosha en plein air encadrée de jasmin et de feuille d'agrume, lanternes de laiton basses et bougie nue. Levantine et chaleureuse, pensée pour une cour ou un jardin au crépuscule.",
          palette: ["#ebe3d3", "#cfd8c4", "#8a9a6b", "#b5894e", "#3a3326"],
          imageKey: "concept-2",
          rows: [
            { label: "Kosha", value: "Voûte de jasmin et d'agrume" },
            { label: "Fleurs", value: "Jasmin · fleur d'oranger · verdure" },
            { label: "Idéal pour", value: "Cour · jardin · villa" },
          ],
        },
        {
          title: "Damas moderne",
          body: "Une kosha épurée en damas profond et laiton brossé, fleurs monochromes et lumière architecturale. Contemporaine et retenue, pour les couples qui veulent tenir la tradition avec sobriété.",
          palette: ["#e8ddcf", "#9c1f33", "#3a1a22", "#c2a14e", "#1f1b17"],
          imageKey: "concept-3",
          rows: [
            { label: "Kosha", value: "Damas et laiton brossé" },
            { label: "Fleurs", value: "Rose monochrome · feuillage" },
            { label: "Idéal pour", value: "Lieu moderne · salle de bal" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocole culturel",
      headline: "Ce que nous *tenons.*",
      deck: "Six principes autour desquels nous planifions sans compromis. Chacun se lit selon la région et les souhaits de la famille : nous demandons, nous ne présumons pas.",
      items: [
        {
          title: "Les heures de prière sont inscrites au programme",
          body: "Dès le premier brouillon, la journée se construit autour des heures de prière de la famille : un espace propre et calme et une pause nette tenus là où elles sont observées. Le déroulé se plie à elles, jamais l'inverse.",
        },
        {
          title: "La cuisine halal est briefée et vérifiée",
          body: "Le protocole de cuisine halal est arrêté avec le resort des mois à l'avance — approvisionnement, séparation et préparation confirmés par écrit — et revérifié la semaine de répétition. Nous amenons un consultant lorsque la famille souhaite un second regard.",
        },
        {
          title: "Une célébration séparée est tenue dans les règles",
          body: "Lorsque la famille demande une célébration séparée par genre, elle est planifiée entièrement — personnel, photographie, entrées et horaires — pour que la séparation soit tenue avec dignité et non improvisée le soir même.",
        },
        {
          title: "Le zaffe est en direct, jamais enregistré",
          body: "Le cortège est exécuté par une troupe en direct : tambours et dabke. Nous faisons venir la troupe en avion là où la destination ne peut en fournir une au niveau attendu. Un zaffe enregistré n'est pas un zaffe.",
        },
        {
          title: "La préséance familiale est honorée",
          body: "Les places, les entrées et la haie d'honneur à la kosha suivent l'ordre de préséance de la famille. Nous le confirmons en privé avec les deux familles et briefons l'équipe pour qu'aucun aîné ne soit mal placé.",
        },
        {
          title: "L'alcool suit les souhaits de la famille",
          body: "Que la célébration soit sans alcool ou comporte un service discret, elle suit les souhaits de la famille — planifiée avec discrétion dans les deux cas, le resort étant briefé pour que l'agencement du bar ne soit jamais une surprise.",
        },
      ],
    },
    planning: {
      eyebrow: "Planification sur plusieurs jours",
      headline: "Un *mariage* de trois jours, heure par heure.",
      deck: "Le canevas que nous utilisons pour un mariage arabe type de 300 invités. Chaque jour s'adapte à la région et au protocole de la famille ; la structure tient.",
      days: [
        {
          numeral: "I",
          dayLabel: "Jour Un",
          title: "Accueil et soirée de henné",
          body: "Les invités arrivent au fil de la journée ; l'atelier gère les transferts et les arrivées. Un accueil en soirée, puis la soirée de henné — traditionnellement la soirée des femmes —, avec des artistes de henné sur plusieurs postes, chant et dabke.",
          events: [
            {
              time: "Matin",
              body: "Arrivées · transferts aéroport · enregistrement à l'hôtel",
            },
            { time: "14:00", body: "Déjeuner d'accueil au resort" },
            {
              time: "18:00",
              body: "Soirée de henné · femmes · postes de henné · 4 heures",
            },
            {
              time: "21:00",
              body: "Dîner décontracté · buffet de mezze levantin",
            },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Jour Deux",
          title: "Le mariage",
          body: "Si le katb el-kitab a lieu le même jour, il se place l'après-midi, en privé, avant la réception. Le zaffe annonce le couple en soirée ; la kosha, le banquet, les discours et la danse suivent. Les heures de prière sont tenues tout au long.",
          events: [
            {
              time: "Après-midi",
              body: "Katb el-Kitab · en privé · s'il a lieu le même jour",
            },
            {
              time: "18:30",
              body: "Invités placés · ouverture de la réception",
            },
            {
              time: "19:30",
              body: "Zaffe · troupe en direct · entrée du couple · 20 minutes",
            },
            {
              time: "19:50",
              body: "Kosha · haie d'honneur · premières photographies",
            },
            {
              time: "20:30",
              body: "Dîner de banquet · halal multirégional · discours",
            },
            {
              time: "22:00",
              body: "Zaghareet · gâteau · dabke · danse jusque tard",
            },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Jour Trois",
          title: "Brunch d'adieu",
          body: "Un brunch le lendemain offert par le couple — en extérieur, plus détendu, centré sur les adieux. La clôture officieuse pour la plupart des invités ; la famille proche reste souvent un jour ou deux de plus.",
          events: [
            {
              time: "11:00",
              body: "Brunch d'adieu · au bord de la piscine ou au jardin",
            },
            { time: "Après-midi", body: "Départs · transferts aéroport" },
            { time: "Soir", body: "Dîner en famille proche · optionnel" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilité des destinations",
      headline: "Où les *mariages arabes* fonctionnent le mieux.",
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
          name: "Côte d'Azur",
          sub: "France · juin – septembre",
          destinationSlug: "cote-dazur",
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
          name: "St-Barth",
          sub: "Caraïbes · novembre – avril",
          destinationSlug: "st-barths",
        },
        {
          rating: 4,
          name: "Toscane",
          sub: "Italie · mai – octobre",
          destinationSlug: "tuscany",
        },
        {
          rating: 4,
          name: "Paris et Île-de-France",
          sub: "France · toute l'année en intérieur",
          destinationSlug: "paris-ile-de-france",
        },
        {
          rating: 3,
          name: "Provence",
          sub: "France · mai – septembre",
          destinationSlug: "provence",
        },
      ],
    },
    guest: {
      eyebrow: "Gestion des invités",
      headline: "Le soin *pratique* de 300 invités.",
      deck: "La couche logistique que la plupart des organisateurs sous-dotent. Nous commençons plus d'un an à l'avance.",
      cells: [
        {
          title: "Protocole alimentaire halal",
          body: "Approvisionnement et préparation halal confirmés par écrit avec la cuisine du resort, séparation vérifiée, options pour allergènes et végétariennes à chaque repas. Un consultant la semaine de répétition lorsque la famille le souhaite.",
        },
        {
          title: "Espace et heures de prière",
          body: "Un espace de prière propre et calme réservé pour toute la durée, tapis et direction marqués, et les heures de prière inscrites au programme afin que la célébration s'interrompe nettement là où elles sont observées.",
        },
        {
          title: "Personnel attentif au genre",
          body: "Lorsque la famille le demande, le personnel et la photographie sont organisés pour respecter une célébration séparée : photographes et personnel de service féminins pour le côté des femmes, entrées et lignes de vue planifiées en conséquence.",
        },
        {
          title: "Aînés et mobilité",
          body: "Places dédiées près de la kosha, transport à part, chambres de plain-pied réservées aux aînés et un référent de l'atelier pour les aînés tout au long du week-end.",
        },
        {
          title: "Voyages et blocs de chambres",
          body: "Blocs de chambres par catégories, transferts coordonnés sur plusieurs jours d'arrivées et pochettes d'accueil dans chaque chambre avec le programme, le code vestimentaire par événement et les contacts.",
        },
        {
          title: "Communications",
          body: "Un groupe d'invités avant le voyage, un site de mariage avec le programme quotidien et les codes vestimentaires, et des guides imprimés en arabe aux côtés de l'anglais pour les invités qui les préfèrent.",
        },
      ],
    },
    related: {
      eyebrow: "Poursuivre la lecture",
      headline: "Du *journal.*",
      articles: [
        {
          category: "Mariages Arabes · Punta Cana",
          title: "Les meilleurs resorts des Caraïbes pour un mariage halal",
          body: "Un registre vivant des resorts qui tiennent une cuisine halal et un zaffe de 300 invités avec grâce.",
          imageKey: "culture-related-1",
        },
        {
          category: "Tradition · Arabe",
          title: "Le zaffe, en détail",
          body: "Sur le cortège qui annonce le couple — et pourquoi il n'est jamais enregistré.",
          imageKey: "culture-related-2",
        },
        {
          category: "Design · Arabe",
          title: "Guide des styles de kosha",
          body: "Blanc et or, cour de jasmin, damas moderne — et ce qui les distingue.",
          imageKey: "culture-related-3",
        },
        {
          category: "Planification · Régionale",
          title: "Ce qui distingue les mariages libanais et saoudiens",
          body: "Deux protocoles, deux registres — et ce qui change dans l'organisation.",
          imageKey: "culture-related-4",
        },
        {
          category: "Coût · Arabe",
          title: "Ce que coûte vraiment un mariage arabe de luxe",
          body: "Des budgets francs pour 2026 selon le nombre d'invités et la région.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("fr", "punta-cana") },
        { label: "Côte d'Azur", href: destinationPath("fr", "cote-dazur") },
        { label: "Côte amalfitaine", href: destinationPath("fr", "amalfi") },
        { label: "Lac de Côme", href: destinationPath("fr", "lake-como") },
      ],
      sidebarVenues: [
        { label: "Eden Roc Cap Cana" },
        { label: "Hôtel du Cap-Eden-Roc" },
        { label: "Villa Tre Ville" },
        { label: "Grand-Hôtel du Cap-Ferrat" },
      ],
      sidebarCultures: [
        {
          label: "Mariages indiens",
          href: culturePath("fr", "indian-weddings"),
        },
        { label: "Mariages juifs", href: culturePath("fr", "jewish-weddings") },
        {
          label: "Mariages interconfessionnels",
          href: culturePath("fr", "interfaith-weddings"),
        },
        {
          label: "Mariages européens",
          href: culturePath("fr", "european-weddings"),
        },
      ],
    },
    faq: {
      eyebrow: "Questions, réponses",
      headline: "Questions *fréquentes.*",
      items: [
        {
          question:
            "Pouvez-vous organiser un mariage entièrement halal dans un resort des Caraïbes ?",
          answer: [
            "Oui. Nous arrêtons le protocole de cuisine halal avec le resort des mois à l'avance : approvisionnement, séparation et préparation confirmés par écrit et revérifiés la semaine de répétition.",
            "Lorsque la famille souhaite un second regard, nous amenons un consultant pour la semaine de répétition. L'agencement du bar, sans alcool ou discret, est planifié selon les souhaits de la famille.",
          ],
        },
        {
          question: "Organisez-vous le katb el-kitab à l'étranger ou au pays ?",
          answer: [
            "L'un ou l'autre — c'est à la famille de le placer. Beaucoup de familles tiennent le katb el-kitab des semaines à l'avance à la maison, avant le voyage ; d'autres l'intègrent au jour du mariage. Nous organisons autour du choix de la famille et coordonnons l'officiant en conséquence.",
          ],
        },
        {
          question: "Pouvez-vous tenir une célébration séparée par genre ?",
          answer: [
            "Lorsque la famille le demande, oui — et tenue dans les règles. Le personnel, la photographie, les entrées et les horaires sont organisés pour que la séparation soit digne plutôt qu'improvisée, avec des photographes et un personnel de service féminins pour le côté des femmes sur demande.",
          ],
        },
        {
          question:
            "Les musiciens du zaffe sont-ils locaux ou font-ils le voyage ?",
          answer: [
            "Nous utilisons toujours une troupe de zaffe en direct : un zaffe enregistré n'est pas un zaffe. Là où la destination ne peut fournir des tambours et une ligne de dabke au niveau attendu, nous faisons venir la troupe en avion. Les musiciens se réservent tôt, c'est pourquoi nous fixons la date bien à l'avance.",
          ],
        },
        {
          question: "Quel est le coût type d'un mariage arabe en destination ?",
          answer: [
            "Une fourchette utile pour 2026, pour 150–400 invités sur un à trois jours, est de 250 000 – 900 000 USD, tout compris, selon la région, le nombre d'invités et l'ampleur du zaffe et de la kosha.",
            "Nous partageons des budgets transparents et détaillés dès la première consultation.",
          ],
        },
        {
          question:
            "En quoi les mariages libanais et saoudiens diffèrent-ils dans l'organisation ?",
          answer: [
            "En gros — et toujours selon la famille concernée —, une réception libanaise tend à se dérouler forte et tard autour d'un zaffe en direct, tandis qu'une célébration du Golfe peut être tenue dans un registre plus calme et plus formel, parfois avec la célébration des femmes maintenue à part à la demande de la famille.",
            "Nous interrogeons chaque famille sur son propre protocole plutôt que d'appliquer un modèle régional.",
          ],
        },
        {
          question:
            "Et les invités qui n'ont jamais assisté à un mariage arabe ?",
          answer: [
            "Nous envoyons à chaque invité un guide préalable : programme, code vestimentaire par événement et notes sur le zaffe, la kosha et le zaghareet pour que la soirée se lise clairement. L'équipe de l'atelier est disponible tout le week-end.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Une conversation privée —",
      headline: "*Commencez* votre\nmariage arabe.",
      body: "Dites-nous la région, le protocole, les familles et une date approximative. Grecia vous répond, personnellement, sous cinq jours ouvrés.",
      ctaLabel: "Demander une consultation privée →",
      ctaHref: staticPath("fr", "/contact"),
    },
  },

  pt: {
    name: "Casamentos Árabes",
    cardEyebrow: "Árabe",
    cardBlurb:
      "Zaffe, hena, katb el-kitab. Protocolo libanês, saudita, egípcio.",
    cardMeta: "Descobrir",
    intro:
      "Cortejos zaffe, noites de hena e katb el-kitab, realizados segundo o protocolo libanês, saudita e egípcio.",
    hero: {
      eyebrow: "As Tradições",
      scriptOverline: "Um casamento de",
      headline: "*celebração* árabe.",
      deck: "Tambores, dabke e uma kosha pensada para a entrada. Arcos de um a três dias para cento e cinquenta a seiscentos convidados, realizados segundo o protocolo regional da família: libanês, saudita, egípcio ou marroquino.",
      captionLeft: "Layla e Karim · Punta Cana",
      captionCenter: "O zaffe ao anoitecer · 2025",
      captionRight: "Estampa III",
    },
    factStrip: [
      {
        label: "Duração do casamento",
        value: "1 – 3 dias",
        sub: "Da noite de hena à despedida",
      },
      {
        label: "Número de convidados",
        value: "150 – 600",
        sub: "Mais, mediante pedido",
      },
      {
        label: "Antecedência",
        value: "12 – 18 meses",
        sub: "Os músicos reservam-se cedo",
      },
      {
        label: "Protocolos realizados",
        value: "Libanês · Saudita",
        sub: "Egípcio · Marroquino",
      },
      {
        label: "Cozinha",
        value: "Halal · multirregional",
        sub: "Levantina · do Golfo · egípcia",
      },
      { label: "Idiomas", value: "EN · árabe", sub: "Francês mediante pedido" },
    ],
    overview: {
      sideEyebrow: "A tradição",
      sideNote:
        "Casamentos árabes de quatro regiões, cada um realizado segundo o protocolo da própria família. Um registo vivo do que sabemos sobre acolher a celebração com graça.",
      headline: "Uma entrada,\nseiscentos convidados,\numa *boas-vindas.*",
      lede: "Um casamento árabe é, acima de tudo, uma chegada. O casal não se esgueira para dentro da sala: é levado aos ombros pelo zaffe, os tambores à frente e o dabke atrás, com todo o salão de pé antes de se terem sentado.",
      bodyParagraphs: [
        "Já planeámos casamentos árabes segundo o protocolo libanês, saudita, egípcio e marroquino. As diferenças não são cosméticas. Uma receção libanesa pode decorrer alta e até tarde em torno de uma troupe de zaffe ao vivo; uma celebração do Golfo pode manter-se num registo mais sereno e formal, por vezes com a celebração das mulheres mantida à parte a pedido da família; um casamento egípcio pode abrir a dança assim que a kosha se acende.",
        "O katb el-kitab — a assinatura do contrato de casamento — é o coração legal e religioso, e cabe à família situá-lo. Algumas realizam-no semanas antes, em casa, antes mesmo de apanharem um avião. Outras integram-no no próprio dia do casamento. Programamos em torno dele; nunca o presumimos.",
        "O que é partilhado, quase em toda a parte, é a noite de hena que precede — uma noite das mulheres, de canto, de mãos marcadas de vermelho intenso — e o zaffe que anuncia o casal. Sustentamos ambos como as famílias os conservam, nunca como um cenário «árabe» genérico.",
        "Trabalhamos com troupes de zaffe que viajam com os seus próprios tambores e a sua linha de dabke, artistas de hena que trazem uma equipa completa para a noite, e um protocolo de cozinha halal acordado com o resort com meses de antecedência. Os horários de oração são incorporados no programa desde o primeiro rascunho.",
      ],
      pull: "«O casal não se esgueira para dentro da sala: é levado aos ombros pelo zaffe.»",
      signatureName: "Grecia",
      signatureRole: "Fundadora · Após muitos casamentos árabes",
    },
    ceremonyArc: {
      eyebrow: "Estrutura da cerimónia",
      headline: "O *arco* do casamento.",
      deck: "A ordem que sustentamos num casamento árabe típico. As variações são a regra, não a exceção: cada casamento ajusta-se à região e ao protocolo da família.",
      steps: [
        {
          numeral: "I",
          name: "Katb el-Kitab",
          sub: "Contrato de casamento · muitas vezes antes ou em casa",
          when: "Pré-casamento ou Dia 1",
          body: "A assinatura do contrato de casamento perante a família e o oficiante: a união legal e religiosa. Muitas famílias realizam-no semanas antes em casa; outras situam-no no dia do casamento. Seguimos o protocolo da família.",
        },
        {
          numeral: "II",
          name: "Noite de hena",
          sub: "Noite das mulheres · variantes libanesa e egípcia",
          when: "Na véspera",
          body: "Mãos e pés marcados com hena vermelha intensa. Canto, dabke, um encontro informal, tradicionalmente das mulheres. Algumas famílias mantêm-na íntima; outras realizam-na quase à escala de uma receção.",
        },
        {
          numeral: "III",
          name: "Zaffe",
          sub: "Cortejo · tambores e dabke",
          when: "Dia do casamento, à chegada",
          body: "O casal é anunciado e levado aos ombros por uma troupe de zaffe ao vivo: tambores, dançarinos de dabke, por vezes uma linha de espadas. Sonoro, jubiloso, nunca gravado. A entrada mais importante da noite.",
        },
        {
          numeral: "IV",
          name: "Entrada e kosha",
          sub: "O assento de honra do casal",
          when: "Dia do casamento",
          body: "O casal senta-se na kosha: o sofá elevado e emoldurado de flores à cabeceira da sala. Os convidados cumprimentam-nos aqui; as primeiras fotografias e a fila de cumprimentos da família acontecem na kosha.",
        },
        {
          numeral: "V",
          name: "Jantar e discursos",
          sub: "Serviço em mesa longa ou banquete",
          when: "Dia do casamento, noite",
          body: "Um banquete halal multirregional: mezze levantino, pratos do Golfo ou egípcios conforme a família prefira. Discursos de ambas as famílias entre pratos.",
        },
        {
          numeral: "VI",
          name: "Zaghareet e dança",
          sub: "A ululação abre a pista",
          when: "Dia do casamento, tarde",
          body: "O zaghareet — a ululação aguda e trilada — eleva-se da família e abre a dança. Formam-se as linhas de dabke; a pista mantém-se cheia durante horas. Quando a família pede uma celebração separada, esta é dotada de pessoal e planeada em conformidade.",
        },
        {
          numeral: "VII",
          name: "Bolo e despedida",
          sub: "Corte com espada em algumas famílias",
          when: "Dia do casamento, encerramento",
          body: "O bolo é cortado — em algumas famílias cerimonialmente com espada, sob novos zaghareet — e o casal é despedido. Um encontro de despedida ou um brunch no dia seguinte encerra a celebração.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Conceitos de design",
      headline: "Kosha, *painéis de inspiração.*",
      deck: "Três direções de trabalho que construímos mais do que uma vez. Cada casamento adapta-as: paleta, flores, a escala da kosha.",
      cards: [
        {
          title: "Kosha branca e ouro",
          body: "Uma kosha formal em drapeado marfim e moldura dourada, orquídeas brancas e luz de velas. Lê-se como autoridade serena — formalidade do Golfo —, fotografa lindamente sob lustres.",
          palette: ["#f5f0e6", "#d4ba8c", "#c9a24b", "#7a6326", "#2f2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Kosha", value: "Drapeado marfim, moldura dourada" },
            { label: "Flores", value: "Orquídea branca · rosa · velas" },
            { label: "Ideal para", value: "Salão · quinta · interior" },
          ],
        },
        {
          title: "Pátio de jasmim",
          body: "Uma kosha ao ar livre emoldurada em jasmim e folha de citrino, lanternas de latão baixas e vela nua. Levantina e quente, pensada para um pátio ou um jardim ao anoitecer.",
          palette: ["#ebe3d3", "#cfd8c4", "#8a9a6b", "#b5894e", "#3a3326"],
          imageKey: "concept-2",
          rows: [
            { label: "Kosha", value: "Dossel de jasmim e citrino" },
            { label: "Flores", value: "Jasmim · flor de laranjeira · verdura" },
            { label: "Ideal para", value: "Pátio · jardim · vila" },
          ],
        },
        {
          title: "Damasco moderno",
          body: "Uma kosha depurada em damasco intenso e latão escovado, flores monocromáticas e luz arquitetónica. Contemporânea e contida, para casais que querem sustentar a tradição com sobriedade.",
          palette: ["#e8ddcf", "#9c1f33", "#3a1a22", "#c2a14e", "#1f1b17"],
          imageKey: "concept-3",
          rows: [
            { label: "Kosha", value: "Damasco e latão escovado" },
            { label: "Flores", value: "Rosa monocromática · folhagem" },
            { label: "Ideal para", value: "Espaço moderno · salão" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocolo cultural",
      headline: "O que *sustentamos.*",
      deck: "Seis princípios em torno dos quais planeamos sem cedências. Cada um é lido segundo a região e os desejos da família: perguntamos, não presumimos.",
      items: [
        {
          title: "Os horários de oração são incorporados no programa",
          body: "Desde o primeiro rascunho, o dia constrói-se em torno dos horários de oração da família: um espaço limpo e sereno e uma pausa clara mantidos onde são observados. O cronograma cede a eles, nunca o contrário.",
        },
        {
          title: "A cozinha halal é informada e verificada",
          body: "O protocolo de cozinha halal é acordado com o resort com meses de antecedência — origem, separação e preparação confirmadas por escrito — e novamente verificado na semana do ensaio. Trazemos um consultor quando a família quer um segundo olhar.",
        },
        {
          title: "Uma celebração separada é sustentada como deve ser",
          body: "Quando a família pede uma celebração separada por género, esta é planeada por inteiro — pessoal, fotografia, entradas e horários — para que a separação se mantenha com dignidade e não seja improvisada na noite.",
        },
        {
          title: "O zaffe é ao vivo, nunca gravado",
          body: "O cortejo é executado por uma troupe ao vivo: tambores e dabke. Trazemos a troupe de avião onde o destino não consegue fornecer uma à altura. Um zaffe gravado não é um zaffe.",
        },
        {
          title: "A precedência familiar é honrada",
          body: "Os lugares, as entradas e a fila de cumprimentos na kosha seguem a ordem de precedência da família. Confirmamo-la em privado com ambas as famílias e informamos a equipa para que nenhum mais velho fique mal colocado.",
        },
        {
          title: "O álcool segue os desejos da família",
          body: "Seja uma celebração sem álcool ou com um serviço discreto, segue os desejos da família — planeado com discrição em qualquer dos casos, com o resort informado para que a disposição do bar nunca seja uma surpresa.",
        },
      ],
    },
    planning: {
      eyebrow: "Planeamento de vários dias",
      headline: "Um *casamento* de três dias, hora a hora.",
      deck: "O modelo que usamos para um casamento árabe típico de 300 convidados. Cada dia adapta-se à região e ao protocolo da família; a estrutura mantém-se.",
      days: [
        {
          numeral: "I",
          dayLabel: "Dia Um",
          title: "Boas-vindas e noite de hena",
          body: "Os convidados chegam ao longo do dia; o ateliê gere as transferências e os check-ins. Uns acolhimentos ao fim da tarde e depois a noite de hena — tradicionalmente a noite das mulheres —, com artistas de hena em várias estações, canto e dabke.",
          events: [
            {
              time: "Manhã",
              body: "Chegadas · transferências do aeroporto · check-in no hotel",
            },
            { time: "14:00", body: "Almoço de boas-vindas no resort" },
            {
              time: "18:00",
              body: "Noite de hena · mulheres · estações de hena · 4 horas",
            },
            {
              time: "21:00",
              body: "Jantar informal · bufê de mezze levantino",
            },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Dia Dois",
          title: "O casamento",
          body: "Se o katb el-kitab for realizado no mesmo dia, fica à tarde, em privado, antes da receção. O zaffe anuncia o casal ao anoitecer; seguem-se a kosha, o banquete, os discursos e a dança. Os horários de oração são mantidos ao longo do dia.",
          events: [
            {
              time: "Tarde",
              body: "Katb el-Kitab · em privado · se realizado no mesmo dia",
            },
            {
              time: "18:30",
              body: "Convidados sentados · abertura da receção",
            },
            {
              time: "19:30",
              body: "Zaffe · troupe ao vivo · entrada do casal · 20 minutos",
            },
            {
              time: "19:50",
              body: "Kosha · fila de cumprimentos · primeiras fotografias",
            },
            {
              time: "20:30",
              body: "Jantar de banquete · halal multirregional · discursos",
            },
            {
              time: "22:00",
              body: "Zaghareet · bolo · dabke · dança até tarde",
            },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Dia Três",
          title: "Brunch de despedida",
          body: "Um brunch na manhã seguinte oferecido pelo casal — ao ar livre, mais descontraído, focado nas despedidas. O encerramento extraoficial para a maioria dos convidados; a família próxima costuma ficar mais um dia ou dois.",
          events: [
            {
              time: "11:00",
              body: "Brunch de despedida · junto à piscina ou no jardim",
            },
            {
              time: "Tarde",
              body: "Partidas · transferências para o aeroporto",
            },
            { time: "Noite", body: "Jantar da família próxima · opcional" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilidade de destinos",
      headline: "Onde os *casamentos árabes* funcionam melhor.",
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
          name: "Costa Azul",
          sub: "França · junho – setembro",
          destinationSlug: "cote-dazur",
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
          name: "St. Barths",
          sub: "Caraíbas · novembro – abril",
          destinationSlug: "st-barths",
        },
        {
          rating: 4,
          name: "Toscana",
          sub: "Itália · maio – outubro",
          destinationSlug: "tuscany",
        },
        {
          rating: 4,
          name: "Paris e Île-de-France",
          sub: "França · todo o ano em interior",
          destinationSlug: "paris-ile-de-france",
        },
        {
          rating: 3,
          name: "Provença",
          sub: "França · maio – setembro",
          destinationSlug: "provence",
        },
      ],
    },
    guest: {
      eyebrow: "Gestão de convidados",
      headline: "O cuidado *prático* de 300 convidados.",
      deck: "A camada logística que a maioria dos planeadores subdota. Começamos mais de um ano antes.",
      cells: [
        {
          title: "Protocolo dietético halal",
          body: "Origem e preparação halal confirmadas por escrito com a cozinha do resort, separação verificada, opções para alergénios e vegetarianas em cada refeição. Um consultor na semana do ensaio quando a família o deseja.",
        },
        {
          title: "Espaço e horários de oração",
          body: "Um espaço de oração limpo e sereno reservado durante toda a duração, com tapetes e direção marcados, e os horários de oração incorporados no programa para que a celebração faça uma pausa clara onde são observados.",
        },
        {
          title: "Pessoal atento ao género",
          body: "Quando a família o pede, o pessoal e a fotografia são organizados para respeitar uma celebração separada: fotógrafas e pessoal de serviço feminino para o lado das mulheres, com entradas e linhas de visão planeadas em conformidade.",
        },
        {
          title: "Idosos e mobilidade",
          body: "Lugares dedicados perto da kosha, transporte à parte, quartos no piso térreo reservados para os convidados mais velhos e um elo do ateliê para os mais velhos ao longo do fim de semana.",
        },
        {
          title: "Viagens e blocos de quartos",
          body: "Blocos de quartos por categorias, transferências coordenadas ao longo de vários dias de chegadas e pacotes de boas-vindas em cada quarto com o programa, o código de vestuário por evento e os contactos.",
        },
        {
          title: "Comunicações",
          body: "Um grupo de convidados antes da viagem, um site do casamento com o programa diário e os códigos de vestuário, e guias impressos em árabe a par do inglês para os convidados que os prefiram.",
        },
      ],
    },
    related: {
      eyebrow: "Continuar a ler",
      headline: "Do *diário.*",
      articles: [
        {
          category: "Casamentos Árabes · Punta Cana",
          title: "Os melhores resorts das Caraíbas para um casamento halal",
          body: "Um registo vivo dos resorts que sustentam uma cozinha halal e um zaffe de 300 convidados com graça.",
          imageKey: "culture-related-1",
        },
        {
          category: "Tradição · Árabe",
          title: "O zaffe, em detalhe",
          body: "Sobre o cortejo que anuncia o casal — e porque nunca é gravado.",
          imageKey: "culture-related-2",
        },
        {
          category: "Design · Árabe",
          title: "Guia de estilos de kosha",
          body: "Branca e ouro, pátio de jasmim, damasco moderno — e em que diferem.",
          imageKey: "culture-related-3",
        },
        {
          category: "Planeamento · Regional",
          title: "Em que diferem os casamentos libaneses e sauditas",
          body: "Dois protocolos, dois registos — e o que muda no planeamento.",
          imageKey: "culture-related-4",
        },
        {
          category: "Custo · Árabe",
          title: "Quanto custa realmente um casamento árabe de luxo",
          body: "Orçamentos francos de 2026 por número de convidados e região.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("pt", "punta-cana") },
        { label: "Costa Azul", href: destinationPath("pt", "cote-dazur") },
        { label: "Costa Amalfitana", href: destinationPath("pt", "amalfi") },
        { label: "Lago de Como", href: destinationPath("pt", "lake-como") },
      ],
      sidebarVenues: [
        { label: "Eden Roc Cap Cana" },
        { label: "Hotel du Cap-Eden-Roc" },
        { label: "Villa Tre Ville" },
        { label: "Grand-Hôtel du Cap-Ferrat" },
      ],
      sidebarCultures: [
        {
          label: "Casamentos indianos",
          href: culturePath("pt", "indian-weddings"),
        },
        {
          label: "Casamentos judaicos",
          href: culturePath("pt", "jewish-weddings"),
        },
        {
          label: "Casamentos inter-religiosos",
          href: culturePath("pt", "interfaith-weddings"),
        },
        {
          label: "Casamentos europeus",
          href: culturePath("pt", "european-weddings"),
        },
      ],
    },
    faq: {
      eyebrow: "Perguntas, respondidas",
      headline: "Perguntas *frequentes.*",
      items: [
        {
          question:
            "Podem realizar um casamento totalmente halal num resort das Caraíbas?",
          answer: [
            "Sim. Acordamos o protocolo de cozinha halal com o resort com meses de antecedência: origem, separação e preparação confirmadas por escrito e novamente verificadas na semana do ensaio.",
            "Quando a família deseja um segundo olhar, trazemos um consultor para a semana do ensaio. A disposição do bar, sem álcool ou discreta, é planeada segundo os desejos da família.",
          ],
        },
        {
          question: "Organizam o katb el-kitab no estrangeiro ou em casa?",
          answer: [
            "Qualquer um — cabe à família situá-lo. Muitas famílias realizam o katb el-kitab semanas antes em casa, antes da viagem; outras integram-no no dia do casamento. Planeamos em torno da escolha da família e coordenamos o oficiante em conformidade.",
          ],
        },
        {
          question: "Podem realizar uma celebração separada por género?",
          answer: [
            "Quando a família o pede, sim — e sustentada como deve ser. O pessoal, a fotografia, as entradas e os horários são organizados para que a separação seja digna e não improvisada, com fotógrafas e pessoal de serviço feminino para o lado das mulheres quando solicitado.",
          ],
        },
        {
          question: "Os músicos do zaffe são locais ou vêm de avião?",
          answer: [
            "Usamos sempre uma troupe de zaffe ao vivo: um zaffe gravado não é um zaffe. Onde o destino não consegue fornecer tambores e uma linha de dabke à altura, trazemos a troupe de avião. Os músicos reservam-se cedo, e por isso fixamos a data com bastante antecedência.",
          ],
        },
        {
          question: "Qual é o custo típico de um casamento árabe em destino?",
          answer: [
            "Um intervalo útil para 2026, para 150–400 convidados ao longo de um a três dias, é de 250 000 – 900 000 USD, tudo incluído, conforme a região, o número de convidados e a escala do zaffe e da kosha.",
            "Partilhamos orçamentos transparentes e discriminados na primeira consulta.",
          ],
        },
        {
          question:
            "Em que diferem os casamentos libaneses e sauditas no planeamento?",
          answer: [
            "Em traços gerais — e sempre conforme a família concreta —, uma receção libanesa tende a decorrer alta e até tarde em torno de um zaffe ao vivo, ao passo que uma celebração do Golfo pode manter-se num registo mais sereno e formal, por vezes com a celebração das mulheres mantida à parte a pedido da família.",
            "Perguntamos a cada família pelo seu próprio protocolo em vez de aplicar um modelo regional.",
          ],
        },
        {
          question:
            "E os convidados que nunca assistiram a um casamento árabe?",
          answer: [
            "Enviamos a cada convidado um guia prévio: programa, código de vestuário por evento e notas sobre o zaffe, a kosha e o zaghareet para que a noite se leia com clareza. A equipa do ateliê está disponível ao longo de todo o fim de semana.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Uma conversa privada —",
      headline: "*Inicie* o seu\ncasamento árabe.",
      body: "Diga-nos a região, o protocolo, as famílias e uma data aproximada. A Grecia responde, pessoalmente, no prazo de cinco dias úteis.",
      ctaLabel: "Solicitar uma consulta privada →",
      ctaHref: staticPath("pt", "/contact"),
    },
  },

  de: {
    name: "Arabische Hochzeiten",
    cardEyebrow: "Arabisch",
    cardBlurb:
      "Zaffe, Henna, Katb el-Kitab. Libanesisches, saudisches, ägyptisches Protokoll.",
    cardMeta: "Entdecken",
    intro:
      "Zaffe-Prozessionen, Henna-Nächte und Katb el-Kitab, gehalten nach libanesischem, saudischem und ägyptischem Protokoll.",
    hero: {
      eyebrow: "Die Traditionen",
      scriptOverline: "Eine Hochzeit der",
      headline: "arabischen *Feier.*",
      deck: "Trommeln, Dabke und eine Kosha, gebaut für den Einzug. Bögen von einem bis drei Tagen für einhundertfünfzig bis sechshundert Gäste, gehalten nach dem regionalen Protokoll der Familie: libanesisch, saudisch, ägyptisch oder marokkanisch.",
      captionLeft: "Layla & Karim · Punta Cana",
      captionCenter: "Die Zaffe in der Dämmerung · 2025",
      captionRight: "Tafel III",
    },
    factStrip: [
      {
        label: "Dauer der Hochzeit",
        value: "1 – 3 Tage",
        sub: "Von der Henna-Nacht zum Abschied",
      },
      { label: "Gästezahl", value: "150 – 600", sub: "Mehr auf Wunsch" },
      {
        label: "Vorlaufzeit",
        value: "12 – 18 Monate",
        sub: "Musiker buchen früh",
      },
      {
        label: "Gehaltene Protokolle",
        value: "Libanesisch · Saudisch",
        sub: "Ägyptisch · Marokkanisch",
      },
      {
        label: "Küche",
        value: "Halal · multiregional",
        sub: "Levantinisch · Golf · Ägyptisch",
      },
      {
        label: "Sprachen",
        value: "EN · Arabisch",
        sub: "Französisch auf Wunsch",
      },
    ],
    overview: {
      sideEyebrow: "Die Tradition",
      sideNote:
        "Arabische Hochzeiten aus vier Regionen, jede nach dem eigenen Protokoll der Familie gehalten. Ein lebendiges Register dessen, was wir über das anmutige Ausrichten der Feier wissen.",
      headline: "Ein Einzug,\nsechshundert Gäste,\nein *Willkommen.*",
      lede: "Eine arabische Hochzeit ist vor allem eine Ankunft. Das Paar schleicht nicht in den Saal — es wird hineingetragen, auf den Schultern der Zaffe, die Trommeln voran und der Dabke hinterher, der ganze Saal auf den Beinen, ehe es sich gesetzt hat.",
      bodyParagraphs: [
        "Wir haben arabische Hochzeiten nach libanesischem, saudischem, ägyptischem und marokkanischem Protokoll geplant. Die Unterschiede sind nicht kosmetisch. Ein libanesischer Empfang kann laut und bis spät um eine Live-Zaffe-Truppe herum verlaufen; eine Golf-Feier kann in einem ruhigeren, förmlicheren Register gehalten werden, mitunter mit der getrennt gehaltenen Frauenfeier auf Wunsch der Familie; eine ägyptische Hochzeit kann den Tanz eröffnen, sobald die Kosha erleuchtet ist.",
        "Das Katb el-Kitab — die Unterzeichnung des Ehevertrags — ist das rechtliche und religiöse Herzstück, und es ist Sache der Familie, es zu platzieren. Manche halten es Wochen im Voraus, zu Hause, ehe sie überhaupt ein Flugzeug besteigen. Andere binden es in den Hochzeitstag selbst ein. Wir planen um es herum; wir setzen es nie voraus.",
        "Geteilt wird, fast überall, die vorangehende Henna-Nacht — ein Abend der Frauen, des Gesangs, der tiefrot gezeichneten Hände — und die Zaffe, die das Paar ankündigt. Wir halten beide so, wie die Familien sie bewahren, nie als generisches „arabisches“ Schaustück.",
        "Wir arbeiten mit Zaffe-Truppen, die mit ihren eigenen Trommlern und ihrer Dabke-Reihe reisen, mit Henna-Künstlerinnen, die ein vollständiges Team für den Abend mitbringen, und mit einem Halal-Küchenprotokoll, das Monate im Voraus mit dem Resort abgestimmt wird. Die Gebetszeiten werden vom ersten Entwurf an in den Ablauf eingelesen.",
      ],
      pull: "„Das Paar schleicht nicht in den Saal — es wird hineingetragen, auf den Schultern der Zaffe.“",
      signatureName: "Grecia",
      signatureRole: "Gründerin · Nach vielen arabischen Hochzeiten",
    },
    ceremonyArc: {
      eyebrow: "Zeremonienstruktur",
      headline: "Der *Bogen* der Hochzeit.",
      deck: "Die Reihenfolge, die wir bei einer typischen arabischen Hochzeit halten. Variationen sind die Regel, nicht die Ausnahme: Jede Hochzeit passt sich der Region und dem Protokoll der Familie an.",
      steps: [
        {
          numeral: "I",
          name: "Katb el-Kitab",
          sub: "Ehevertrag · oft früher oder zu Hause",
          when: "Vor der Hochzeit oder Tag 1",
          body: "Die Unterzeichnung des Ehevertrags vor der Familie und dem Geistlichen: die rechtliche und religiöse Verbindung. Viele Familien halten es Wochen im Voraus zu Hause; andere platzieren es am Hochzeitstag. Wir folgen dem Protokoll der Familie.",
        },
        {
          numeral: "II",
          name: "Henna-Nacht",
          sub: "Abend der Frauen · libanesische & ägyptische Varianten",
          when: "Am Vorabend",
          body: "Hände und Füße mit tiefrotem Henna gezeichnet. Gesang, Dabke, eine zwanglose Zusammenkunft, traditionell der Frauen. Manche Familien halten sie intim; andere richten sie nahezu im Empfangsmaßstab aus.",
        },
        {
          numeral: "III",
          name: "Zaffe",
          sub: "Prozession · Trommeln & Dabke",
          when: "Hochzeitstag, bei der Ankunft",
          body: "Das Paar wird von einer Live-Zaffe-Truppe angekündigt und hineingetragen: Trommeln, Dabke-Tänzer, mitunter eine Schwertreihe. Laut, freudig, nie aufgezeichnet. Der wichtigste Einzug des Abends.",
        },
        {
          numeral: "IV",
          name: "Einzug & Kosha",
          sub: "Der Ehrenplatz des Paares",
          when: "Hochzeitstag",
          body: "Das Paar nimmt an der Kosha Platz: dem erhöhten, blumengerahmten Sofa an der Stirnseite des Saals. Die Gäste begrüßen sie hier; die ersten Aufnahmen und die Empfangsreihe der Familie finden an der Kosha statt.",
        },
        {
          numeral: "V",
          name: "Dinner & Reden",
          sub: "Lange Tafel oder Bankett",
          when: "Hochzeitstag, Abend",
          body: "Ein multiregionales Halal-Bankett: levantinisches Mezze, Golf- oder ägyptische Hauptgänge nach dem Wunsch der Familie. Reden beider Familien zwischen den Gängen.",
        },
        {
          numeral: "VI",
          name: "Zaghareet & Tanz",
          sub: "Das Trillern eröffnet die Fläche",
          when: "Hochzeitstag, spät",
          body: "Das Zaghareet — das hohe, trillernde Jubeln — erhebt sich aus der Familie und eröffnet den Tanz. Dabke-Reihen bilden sich; die Tanzfläche bleibt stundenlang gefüllt. Wo die Familie eine getrennte Feier wünscht, wird diese entsprechend besetzt und geplant.",
        },
        {
          numeral: "VII",
          name: "Torte & Abschied",
          sub: "Schwertschnitt in manchen Familien",
          when: "Hochzeitstag, Abschluss",
          body: "Die Torte wird angeschnitten — in manchen Familien zeremoniell mit dem Schwert, unter neuem Zaghareet — und das Paar verabschiedet. Eine Abschiedszusammenkunft oder ein Brunch am Folgetag schließt die Feier.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Designkonzepte",
      headline: "Kosha, *Moodboards.*",
      deck: "Drei Arbeitsrichtungen, die wir mehr als einmal gebaut haben. Jede Hochzeit passt sie an: Palette, Floristik, die Größe der Kosha.",
      cards: [
        {
          title: "Weiße & goldene Kosha",
          body: "Eine förmliche Kosha in elfenbeinfarbenem Faltenwurf und goldener Rahmung, weiße Orchideen und Kerzenlicht. Liest sich als stille Autorität — Golf-formal —, fotografiert wunderbar unter Kronleuchtern.",
          palette: ["#f5f0e6", "#d4ba8c", "#c9a24b", "#7a6326", "#2f2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Kosha", value: "Elfenbein-Drapierung, goldener Rahmen" },
            {
              label: "Floristik",
              value: "Weiße Orchidee · Rose · Kerzenlicht",
            },
            { label: "Am besten für", value: "Ballsaal · Anwesen · Innenraum" },
          ],
        },
        {
          title: "Jasminhof",
          body: "Eine Open-Air-Kosha, gerahmt in Jasmin und Zitrusblatt, niedrige Messinglaternen und nackte Kerze. Levantinisch und warm, gedacht für einen Hof oder einen Garten in der Dämmerung.",
          palette: ["#ebe3d3", "#cfd8c4", "#8a9a6b", "#b5894e", "#3a3326"],
          imageKey: "concept-2",
          rows: [
            { label: "Kosha", value: "Jasmin- und Zitrusbaldachin" },
            { label: "Floristik", value: "Jasmin · Orangenblüte · Grün" },
            { label: "Am besten für", value: "Hof · Garten · Villa" },
          ],
        },
        {
          title: "Modernes Damast",
          body: "Eine reduzierte Kosha in tiefem Damast und gebürstetem Messing, monochrome Floristik und architektonisches Licht. Zeitgenössisch und zurückhaltend, für Paare, die die Tradition leise halten möchten.",
          palette: ["#e8ddcf", "#9c1f33", "#3a1a22", "#c2a14e", "#1f1b17"],
          imageKey: "concept-3",
          rows: [
            { label: "Kosha", value: "Damast und gebürstetes Messing" },
            { label: "Floristik", value: "Monochrome Rose · Laub" },
            { label: "Am besten für", value: "Moderner Ort · Ballsaal" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Kulturelles Protokoll",
      headline: "Was wir *halten.*",
      deck: "Sechs Grundsätze, um die wir kompromisslos planen. Jeder wird an der Region und den Wünschen der Familie gemessen: Wir fragen, wir setzen nicht voraus.",
      items: [
        {
          title: "Gebetszeiten werden in den Ablauf eingelesen",
          body: "Vom ersten Entwurf an wird der Tag um die Gebetszeiten der Familie herum gebaut: ein sauberer, ruhiger Raum und eine klare Pause, dort gehalten, wo sie eingehalten werden. Der Ablauf beugt sich ihnen, nie umgekehrt.",
        },
        {
          title: "Die Halal-Küche wird gebrieft und geprüft",
          body: "Das Halal-Küchenprotokoll wird Monate im Voraus mit dem Resort vereinbart — Herkunft, Trennung und Zubereitung schriftlich bestätigt — und in der Probenwoche erneut geprüft. Wir bringen einen Berater mit, wenn die Familie ein zweites Augenpaar wünscht.",
        },
        {
          title: "Eine getrennte Feier wird ordentlich gehalten",
          body: "Wo die Familie eine nach Geschlechtern getrennte Feier wünscht, wird sie vollständig geplant — Personal, Fotografie, Einzüge und Zeiten —, sodass die Trennung würdevoll gehalten und nicht am Abend improvisiert wird.",
        },
        {
          title: "Die Zaffe ist live, nie aufgezeichnet",
          body: "Die Prozession wird von einer Live-Truppe aufgeführt: Trommeln und Dabke. Wir lassen die Truppe einfliegen, wo das Reiseziel keine in entsprechender Qualität stellen kann. Eine aufgezeichnete Zaffe ist keine Zaffe.",
        },
        {
          title: "Der Vorrang der Familie wird gewahrt",
          body: "Sitzordnung, Einzüge und die Empfangsreihe an der Kosha folgen der Rangordnung der Familie. Wir bestätigen sie vertraulich mit beiden Familien und briefen das Team, damit kein Älterer fehl am Platz sitzt.",
        },
        {
          title: "Der Alkohol folgt den Wünschen der Familie",
          body: "Ob die Feier alkoholfrei ist oder einen diskreten Ausschank umfasst, sie folgt den Wünschen der Familie — in jedem Fall diskret geplant, mit dem Resort gebrieft, damit die Bar-Regelung nie eine Überraschung ist.",
        },
      ],
    },
    planning: {
      eyebrow: "Mehrtägige Planung",
      headline: "Eine dreitägige *Hochzeit,* Stunde für Stunde.",
      deck: "Die Vorlage, die wir für eine typische arabische Hochzeit mit 300 Gästen verwenden. Jeder Tag passt sich der Region und dem Protokoll der Familie an; die Struktur hält.",
      days: [
        {
          numeral: "I",
          dayLabel: "Tag Eins",
          title: "Willkommen & Henna-Nacht",
          body: "Die Gäste reisen über den Tag verteilt an; Transfers und Check-ins übernimmt das Atelier. Ein abendlicher Empfang, dann die Henna-Nacht — traditionell der Abend der Frauen —, mit Henna-Künstlerinnen an mehreren Stationen, Gesang und Dabke.",
          events: [
            {
              time: "Vormittag",
              body: "Ankünfte · Flughafentransfers · Hotel-Check-in",
            },
            { time: "14:00", body: "Willkommensessen im Resort" },
            {
              time: "18:00",
              body: "Henna-Nacht · Frauen · Henna-Stationen · 4 Stunden",
            },
            {
              time: "21:00",
              body: "Lockeres Abendessen · levantinisches Mezze-Buffet",
            },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Tag Zwei",
          title: "Die Hochzeit",
          body: "Wird das Katb el-Kitab am selben Tag gehalten, liegt es am Nachmittag, im privaten Rahmen, vor dem Empfang. Die Zaffe kündigt das Paar am Abend an; Kosha, Bankett, Reden und Tanz folgen. Die Gebetszeiten werden durchgehend gehalten.",
          events: [
            {
              time: "Nachmittag",
              body: "Katb el-Kitab · privat · falls am selben Tag",
            },
            { time: "18:30", body: "Gäste platziert · Empfang öffnet" },
            {
              time: "19:30",
              body: "Zaffe · Live-Truppe · Einzug des Paares · 20 Minuten",
            },
            { time: "19:50", body: "Kosha · Empfangsreihe · erste Aufnahmen" },
            {
              time: "20:30",
              body: "Bankett-Dinner · multiregional halal · Reden",
            },
            {
              time: "22:00",
              body: "Zaghareet · Torte · Dabke · Tanz bis spät",
            },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Tag Drei",
          title: "Abschiedsbrunch",
          body: "Ein Brunch am Morgen danach, vom Paar ausgerichtet — im Freien, entspannter, auf den Abschied ausgerichtet. Der inoffizielle Abschluss für die meisten Gäste; die nahe Familie bleibt oft noch einen Tag oder zwei.",
          events: [
            { time: "11:00", body: "Abschiedsbrunch · am Pool oder im Garten" },
            { time: "Nachmittag", body: "Abreisen · Flughafentransfers" },
            {
              time: "Abend",
              body: "Dinner im engsten Familienkreis · optional",
            },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Reiseziel-Eignung",
      headline: "Wo arabische Hochzeiten *am besten gelingen.*",
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
          name: "Côte d'Azur",
          sub: "Frankreich · Juni – September",
          destinationSlug: "cote-dazur",
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
          name: "St. Barths",
          sub: "Karibik · November – April",
          destinationSlug: "st-barths",
        },
        {
          rating: 4,
          name: "Toskana",
          sub: "Italien · Mai – Oktober",
          destinationSlug: "tuscany",
        },
        {
          rating: 4,
          name: "Paris & Île-de-France",
          sub: "Frankreich · ganzjährig im Innenraum",
          destinationSlug: "paris-ile-de-france",
        },
        {
          rating: 3,
          name: "Provence",
          sub: "Frankreich · Mai – September",
          destinationSlug: "provence",
        },
      ],
    },
    guest: {
      eyebrow: "Gästemanagement",
      headline: "Die *praktische* Fürsorge für 300 Gäste.",
      deck: "Die logistische Ebene, die die meisten Planer unterbesetzen. Wir beginnen mehr als ein Jahr im Voraus.",
      cells: [
        {
          title: "Halal-Diätprotokoll",
          body: "Halal-Herkunft und -Zubereitung schriftlich mit der Resortküche bestätigt, Trennung geprüft, Allergen- und vegetarische Optionen bei jeder Mahlzeit. Ein Berater in der Probenwoche, wenn die Familie es wünscht.",
        },
        {
          title: "Gebetsraum & -zeiten",
          body: "Ein sauberer, ruhiger Gebetsraum für die gesamte Dauer reserviert, mit Matten und markierter Gebetsrichtung, und die Gebetszeiten in den Ablauf eingelesen, damit die Feier dort sauber pausiert, wo sie eingehalten werden.",
        },
        {
          title: "Geschlechtersensibles Personal",
          body: "Wo die Familie es wünscht, werden Personal und Fotografie so organisiert, dass eine getrennte Feier respektiert wird: Fotografinnen und weibliches Servicepersonal für die Frauenseite, Einzüge und Sichtachsen entsprechend geplant.",
        },
        {
          title: "Ältere & Mobilität",
          body: "Reservierte Plätze nahe der Kosha, gesonderter Transport, Erdgeschosszimmer für ältere Gäste und ein Atelier-Ansprechpartner für die Älteren über das gesamte Wochenende.",
        },
        {
          title: "Reise & Zimmerkontingente",
          body: "Zimmerkontingente über mehrere Kategorien, über mehrere Anreisetage koordinierte Transfers und Willkommenspakete in jedem Zimmer mit Programm, Dresscode pro Anlass und Kontakten.",
        },
        {
          title: "Kommunikation",
          body: "Eine Gästegruppe vor der Anreise, eine Hochzeitsseite mit Tagesprogramm und Dresscodes sowie gedruckte arabischsprachige Leitfäden neben dem Englischen für Gäste, die sie bevorzugen.",
        },
      ],
    },
    related: {
      eyebrow: "Weiterlesen",
      headline: "Aus dem *Journal.*",
      articles: [
        {
          category: "Arabische Hochzeiten · Punta Cana",
          title: "Die besten Karibik-Resorts für eine Halal-Hochzeit",
          body: "Ein lebendiges Register der Resorts, die eine Halal-Küche und eine Zaffe für 300 Gäste mit Anmut halten.",
          imageKey: "culture-related-1",
        },
        {
          category: "Tradition · Arabisch",
          title: "Die Zaffe, im Detail",
          body: "Über die Prozession, die das Paar ankündigt — und warum sie nie aufgezeichnet wird.",
          imageKey: "culture-related-2",
        },
        {
          category: "Design · Arabisch",
          title: "Ein Leitfaden zu Kosha-Stilen",
          body: "Weiß-und-Gold, Jasminhof, modernes Damast — und worin sie sich unterscheiden.",
          imageKey: "culture-related-3",
        },
        {
          category: "Planung · Regional",
          title: "Wie sich libanesische und saudische Hochzeiten unterscheiden",
          body: "Zwei Protokolle, zwei Register — und was sich in der Planung ändert.",
          imageKey: "culture-related-4",
        },
        {
          category: "Kosten · Arabisch",
          title: "Was eine luxuriöse arabische Hochzeit wirklich kostet",
          body: "Offene Budgets für 2026 nach Gästezahl und Region.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("de", "punta-cana") },
        { label: "Côte d'Azur", href: destinationPath("de", "cote-dazur") },
        { label: "Amalfiküste", href: destinationPath("de", "amalfi") },
        { label: "Comer See", href: destinationPath("de", "lake-como") },
      ],
      sidebarVenues: [
        { label: "Eden Roc Cap Cana" },
        { label: "Hotel du Cap-Eden-Roc" },
        { label: "Villa Tre Ville" },
        { label: "Grand-Hôtel du Cap-Ferrat" },
      ],
      sidebarCultures: [
        {
          label: "Indische Hochzeiten",
          href: culturePath("de", "indian-weddings"),
        },
        {
          label: "Jüdische Hochzeiten",
          href: culturePath("de", "jewish-weddings"),
        },
        {
          label: "Interreligiöse Hochzeiten",
          href: culturePath("de", "interfaith-weddings"),
        },
        {
          label: "Europäische Hochzeiten",
          href: culturePath("de", "european-weddings"),
        },
      ],
    },
    faq: {
      eyebrow: "Fragen, beantwortet",
      headline: "Häufig *gefragt.*",
      items: [
        {
          question:
            "Können Sie eine vollständig halal Hochzeit in einem Karibik-Resort ausrichten?",
          answer: [
            "Ja. Wir vereinbaren das Halal-Küchenprotokoll Monate im Voraus mit dem Resort: Herkunft, Trennung und Zubereitung schriftlich bestätigt und in der Probenwoche erneut geprüft.",
            "Wenn die Familie ein zweites Augenpaar wünscht, bringen wir einen Berater für die Probenwoche mit. Die Bar-Regelung, alkoholfrei oder diskret, wird nach den Wünschen der Familie geplant.",
          ],
        },
        {
          question:
            "Richten Sie das Katb el-Kitab im Ausland oder in der Heimat aus?",
          answer: [
            "Beides — es ist Sache der Familie, es zu platzieren. Viele Familien halten das Katb el-Kitab Wochen im Voraus zu Hause, vor der Reise; andere binden es in den Hochzeitstag ein. Wir planen um die Wahl der Familie herum und stimmen den Geistlichen entsprechend ab.",
          ],
        },
        {
          question:
            "Können Sie eine nach Geschlechtern getrennte Feier halten?",
          answer: [
            "Wo die Familie es wünscht, ja — und ordentlich gehalten. Personal, Fotografie, Einzüge und Zeiten werden so organisiert, dass die Trennung würdevoll statt improvisiert ist, mit Fotografinnen und weiblichem Servicepersonal für die Frauenseite, wo darum gebeten wird.",
          ],
        },
        {
          question: "Sind die Zaffe-Musiker lokal oder werden sie eingeflogen?",
          answer: [
            "Wir nutzen stets eine Live-Zaffe-Truppe: Eine aufgezeichnete Zaffe ist keine Zaffe. Wo das Reiseziel keine Trommeln und keine Dabke-Reihe in entsprechender Qualität stellen kann, fliegen wir die Truppe ein. Musiker buchen früh, weshalb wir den Termin weit im Voraus sichern.",
          ],
        },
        {
          question:
            "Was kostet eine arabische Destinationshochzeit typischerweise?",
          answer: [
            "Eine nützliche Spanne für 2026, für 150–400 Gäste über einen bis drei Tage, liegt bei 250.000 – 900.000 USD, all-in, je nach Region, Gästezahl und Umfang von Zaffe und Kosha.",
            "Wir teilen transparente, positionsgenaue Budgets in der ersten Beratung.",
          ],
        },
        {
          question:
            "Wie unterscheiden sich libanesische und saudische Hochzeiten in der Planung?",
          answer: [
            "Grob — und stets abhängig von der einzelnen Familie — verläuft ein libanesischer Empfang eher laut und bis spät um eine Live-Zaffe herum, während eine Golf-Feier in einem ruhigeren, förmlicheren Register gehalten werden kann, mitunter mit der getrennt gehaltenen Frauenfeier auf Wunsch der Familie.",
            "Wir fragen jede Familie nach ihrem eigenen Protokoll, statt eine regionale Vorlage anzuwenden.",
          ],
        },
        {
          question:
            "Was ist mit Gästen, die noch nie auf einer arabischen Hochzeit waren?",
          answer: [
            "Wir senden jedem Gast einen Vorab-Leitfaden: Programm, Dresscode pro Anlass und Hinweise zu Zaffe, Kosha und Zaghareet, damit der Abend klar lesbar ist. Das Atelier-Team steht das gesamte Wochenende zur Verfügung.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Ein privates Gespräch —",
      headline: "*Beginnen* Sie Ihre\narabische Hochzeit.",
      body: "Nennen Sie uns die Region, das Protokoll, die Familien und ein ungefähres Datum. Grecia antwortet persönlich innerhalb von fünf Werktagen.",
      ctaLabel: "Ein privates Beratungsgespräch anfragen →",
      ctaHref: staticPath("de", "/contact"),
    },
  },

  it: {
    name: "Matrimoni Arabi",
    cardEyebrow: "Arabo",
    cardBlurb:
      "Zaffe, henné, katb el-kitab. Protocollo libanese, saudita, egiziano.",
    cardMeta: "Scopri",
    intro:
      "Cortei zaffe, notti di henné e katb el-kitab, tenuti secondo il protocollo libanese, saudita ed egiziano.",
    hero: {
      eyebrow: "Le Tradizioni",
      scriptOverline: "Un matrimonio di",
      headline: "*celebrazione* araba.",
      deck: "Tamburi, dabke e una kosha pensata per l'ingresso. Archi da uno a tre giorni per centocinquanta-seicento invitati, tenuti secondo il protocollo regionale della famiglia: libanese, saudita, egiziano o marocchino.",
      captionLeft: "Layla e Karim · Punta Cana",
      captionCenter: "Lo zaffe al crepuscolo · 2025",
      captionRight: "Tavola III",
    },
    factStrip: [
      {
        label: "Durata del matrimonio",
        value: "1 – 3 giorni",
        sub: "Dalla notte di henné al commiato",
      },
      {
        label: "Numero di invitati",
        value: "150 – 600",
        sub: "Di più su richiesta",
      },
      {
        label: "Anticipo",
        value: "12 – 18 mesi",
        sub: "I musicisti si prenotano presto",
      },
      {
        label: "Protocolli tenuti",
        value: "Libanese · Saudita",
        sub: "Egiziano · Marocchino",
      },
      {
        label: "Cucina",
        value: "Halal · multiregionale",
        sub: "Levantina · del Golfo · egiziana",
      },
      { label: "Lingue", value: "EN · arabo", sub: "Francese su richiesta" },
    ],
    overview: {
      sideEyebrow: "La tradizione",
      sideNote:
        "Matrimoni arabi di quattro regioni, ciascuno tenuto secondo il protocollo della famiglia stessa. Un registro vivo di ciò che sappiamo sull'accogliere la celebrazione con grazia.",
      headline: "Un ingresso,\nseicento invitati,\nun *benvenuto.*",
      lede: "Un matrimonio arabo è, prima di tutto, un arrivo. La coppia non scivola nella sala: vi viene portata, sulle spalle dello zaffe, i tamburi davanti e il dabke dietro, l'intera sala in piedi prima ancora che si sia seduta.",
      bodyParagraphs: [
        "Abbiamo pianificato matrimoni arabi secondo il protocollo libanese, saudita, egiziano e marocchino. Le differenze non sono cosmetiche. Un ricevimento libanese può svolgersi alto e fino a tardi attorno a una troupe di zaffe dal vivo; una celebrazione del Golfo può tenersi in un registro più pacato e formale, talvolta con la celebrazione delle donne tenuta separata su richiesta della famiglia; un matrimonio egiziano può aprire le danze non appena la kosha si illumina.",
        "Il katb el-kitab — la firma del contratto matrimoniale — è il cuore legale e religioso, e spetta alla famiglia collocarlo. Alcune lo tengono settimane prima, a casa, prima ancora di prendere un aereo. Altre lo integrano nel giorno stesso del matrimonio. Noi pianifichiamo attorno a esso; non lo diamo mai per scontato.",
        "Ciò che è condiviso, quasi ovunque, è la notte di henné che precede — una serata delle donne, di canto, di mani segnate di rosso intenso — e lo zaffe che annuncia la coppia. Teniamo entrambi così come le famiglie li conservano, mai come una scenografia «araba» generica.",
        "Lavoriamo con troupe di zaffe che viaggiano con i propri tamburi e la propria linea di dabke, artiste di henné che portano una squadra completa per la serata, e un protocollo di cucina halal concordato con il resort con mesi di anticipo. Gli orari di preghiera vengono inseriti nel programma fin dalla prima bozza.",
      ],
      pull: "«La coppia non scivola nella sala: vi viene portata, sulle spalle dello zaffe.»",
      signatureName: "Grecia",
      signatureRole: "Fondatrice · Dopo molti matrimoni arabi",
    },
    ceremonyArc: {
      eyebrow: "Struttura della cerimonia",
      headline: "L'*arco* del matrimonio.",
      deck: "L'ordine che teniamo in un matrimonio arabo tipico. Le variazioni sono la regola, non l'eccezione: ogni matrimonio si adatta alla regione e al protocollo della famiglia.",
      steps: [
        {
          numeral: "I",
          name: "Katb el-Kitab",
          sub: "Contratto matrimoniale · spesso prima o a casa",
          when: "Pre-matrimonio o Giorno 1",
          body: "La firma del contratto matrimoniale davanti alla famiglia e al celebrante: l'unione legale e religiosa. Molte famiglie lo tengono settimane prima a casa; altre lo collocano il giorno del matrimonio. Seguiamo il protocollo della famiglia.",
        },
        {
          numeral: "II",
          name: "Notte di henné",
          sub: "Serata delle donne · varianti libanese ed egiziana",
          when: "La sera prima",
          body: "Mani e piedi segnati di henné rosso intenso. Canto, dabke, un ritrovo informale, tradizionalmente delle donne. Alcune famiglie la tengono intima; altre la organizzano quasi su scala di ricevimento.",
        },
        {
          numeral: "III",
          name: "Zaffe",
          sub: "Corteo · tamburi e dabke",
          when: "Giorno del matrimonio, all'arrivo",
          body: "La coppia è annunciata e portata sulle spalle da una troupe di zaffe dal vivo: tamburi, ballerini di dabke, talvolta una linea di sciabole. Sonoro, gioioso, mai registrato. L'ingresso più importante della serata.",
        },
        {
          numeral: "IV",
          name: "Ingresso e kosha",
          sub: "Il seggio d'onore della coppia",
          when: "Giorno del matrimonio",
          body: "La coppia si siede alla kosha: il divano rialzato e incorniciato di fiori in testa alla sala. Gli invitati li salutano qui; le prime fotografie e la fila dei saluti della famiglia avvengono alla kosha.",
        },
        {
          numeral: "V",
          name: "Cena e discorsi",
          sub: "Servizio a tavolo lungo o banchetto",
          when: "Giorno del matrimonio, sera",
          body: "Un banchetto halal multiregionale: mezze levantino, piatti del Golfo o egiziani secondo la preferenza della famiglia. Discorsi di entrambe le famiglie tra le portate.",
        },
        {
          numeral: "VI",
          name: "Zaghareet e danza",
          sub: "L'ululato apre la pista",
          when: "Giorno del matrimonio, tardi",
          body: "Lo zaghareet — l'ululato acuto e trillato — si leva dalla famiglia e apre le danze. Si formano le linee di dabke; la pista resta piena per ore. Dove la famiglia richiede una celebrazione separata, questa viene dotata di personale e pianificata di conseguenza.",
        },
        {
          numeral: "VII",
          name: "Torta e commiato",
          sub: "Taglio con la sciabola in alcune famiglie",
          when: "Giorno del matrimonio, chiusura",
          body: "La torta viene tagliata — in alcune famiglie cerimonialmente con la sciabola, tra nuovi zaghareet — e la coppia viene congedata. Un ritrovo di commiato o un brunch il giorno dopo chiude la celebrazione.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Concept di design",
      headline: "Kosha, *moodboard.*",
      deck: "Tre direzioni di lavoro che abbiamo costruito più di una volta. Ogni matrimonio le adatta: palette, fiori, la scala della kosha.",
      cards: [
        {
          title: "Kosha bianca e oro",
          body: "Una kosha formale in drappeggio avorio e cornice dorata, orchidee bianche e luce di candela. Si legge come autorità pacata — formalità del Golfo —, fotografa splendidamente sotto i lampadari.",
          palette: ["#f5f0e6", "#d4ba8c", "#c9a24b", "#7a6326", "#2f2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Kosha", value: "Drappeggio avorio, cornice dorata" },
            { label: "Fiori", value: "Orchidea bianca · rosa · candele" },
            { label: "Ideale per", value: "Sala da ballo · tenuta · interni" },
          ],
        },
        {
          title: "Corte di gelsomino",
          body: "Una kosha all'aperto incorniciata di gelsomino e foglia d'agrume, lanterne basse in ottone e candela nuda. Levantina e calda, pensata per una corte o un giardino al crepuscolo.",
          palette: ["#ebe3d3", "#cfd8c4", "#8a9a6b", "#b5894e", "#3a3326"],
          imageKey: "concept-2",
          rows: [
            { label: "Kosha", value: "Baldacchino di gelsomino e agrumi" },
            { label: "Fiori", value: "Gelsomino · zagara · verde" },
            { label: "Ideale per", value: "Corte · giardino · villa" },
          ],
        },
        {
          title: "Damasco moderno",
          body: "Una kosha essenziale in damasco profondo e ottone spazzolato, fiori monocromi e luce architettonica. Contemporanea e sobria, per coppie che vogliono tenere la tradizione con discrezione.",
          palette: ["#e8ddcf", "#9c1f33", "#3a1a22", "#c2a14e", "#1f1b17"],
          imageKey: "concept-3",
          rows: [
            { label: "Kosha", value: "Damasco e ottone spazzolato" },
            { label: "Fiori", value: "Rosa monocroma · fogliame" },
            { label: "Ideale per", value: "Spazio moderno · sala da ballo" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocollo culturale",
      headline: "Ciò che *teniamo.*",
      deck: "Sei principi attorno ai quali pianifichiamo senza compromessi. Ciascuno è letto secondo la regione e i desideri della famiglia: chiediamo, non presumiamo.",
      items: [
        {
          title: "Gli orari di preghiera sono inseriti nel programma",
          body: "Dalla prima bozza, la giornata si costruisce attorno agli orari di preghiera della famiglia: uno spazio pulito e pacato e una pausa netta, tenuti dove vengono osservati. Il programma si piega a essi, mai il contrario.",
        },
        {
          title: "La cucina halal è informata e verificata",
          body: "Il protocollo di cucina halal è concordato con il resort con mesi di anticipo — provenienza, separazione e preparazione confermate per iscritto — e ricontrollato nella settimana delle prove. Portiamo un consulente quando la famiglia desidera un secondo paio d'occhi.",
        },
        {
          title: "Una celebrazione separata è tenuta come si deve",
          body: "Dove la famiglia richiede una celebrazione separata per genere, viene pianificata per intero — personale, fotografia, ingressi e tempi — affinché la separazione sia tenuta con dignità e non improvvisata la sera stessa.",
        },
        {
          title: "Lo zaffe è dal vivo, mai registrato",
          body: "Il corteo è eseguito da una troupe dal vivo: tamburi e dabke. Facciamo arrivare la troupe in aereo dove la destinazione non può fornirne una all'altezza. Uno zaffe registrato non è uno zaffe.",
        },
        {
          title: "La precedenza familiare è onorata",
          body: "Posti, ingressi e la fila dei saluti alla kosha seguono l'ordine di precedenza della famiglia. Lo confermiamo in privato con entrambe le famiglie e informiamo la squadra perché nessun anziano sieda fuori posto.",
        },
        {
          title: "L'alcol segue i desideri della famiglia",
          body: "Che la celebrazione sia analcolica o preveda un servizio discreto, segue i desideri della famiglia — pianificato con discrezione in entrambi i casi, con il resort informato perché la disposizione del bar non sia mai una sorpresa.",
        },
      ],
    },
    planning: {
      eyebrow: "Pianificazione su più giorni",
      headline: "Un *matrimonio* di tre giorni, ora per ora.",
      deck: "Il modello che usiamo per un matrimonio arabo tipico da 300 invitati. Ogni giorno si adatta alla regione e al protocollo della famiglia; la struttura tiene.",
      days: [
        {
          numeral: "I",
          dayLabel: "Giorno Uno",
          title: "Benvenuto e notte di henné",
          body: "Gli invitati arrivano nel corso della giornata; l'atelier gestisce transfer e check-in. Un benvenuto in serata, poi la notte di henné — tradizionalmente la serata delle donne —, con artiste di henné in più postazioni, canto e dabke.",
          events: [
            {
              time: "Mattina",
              body: "Arrivi · transfer dall'aeroporto · check-in in hotel",
            },
            { time: "14:00", body: "Pranzo di benvenuto al resort" },
            {
              time: "18:00",
              body: "Notte di henné · donne · postazioni di henné · 4 ore",
            },
            {
              time: "21:00",
              body: "Cena informale · buffet di mezze levantino",
            },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Giorno Due",
          title: "Il matrimonio",
          body: "Se il katb el-kitab si tiene lo stesso giorno, si colloca nel pomeriggio, in privato, prima del ricevimento. Lo zaffe annuncia la coppia in serata; seguono la kosha, il banchetto, i discorsi e le danze. Gli orari di preghiera sono tenuti per tutta la durata.",
          events: [
            {
              time: "Pomeriggio",
              body: "Katb el-Kitab · in privato · se tenuto lo stesso giorno",
            },
            {
              time: "18:30",
              body: "Invitati seduti · apertura del ricevimento",
            },
            {
              time: "19:30",
              body: "Zaffe · troupe dal vivo · ingresso della coppia · 20 minuti",
            },
            {
              time: "19:50",
              body: "Kosha · fila dei saluti · prime fotografie",
            },
            {
              time: "20:30",
              body: "Cena di banchetto · halal multiregionale · discorsi",
            },
            {
              time: "22:00",
              body: "Zaghareet · torta · dabke · danze fino a tardi",
            },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Giorno Tre",
          title: "Brunch di commiato",
          body: "Un brunch la mattina dopo offerto dalla coppia — all'aperto, più rilassato, incentrato sui saluti. La chiusura ufficiosa per la maggior parte degli invitati; i parenti stretti spesso restano un giorno o due in più.",
          events: [
            {
              time: "11:00",
              body: "Brunch di commiato · a bordo piscina o in giardino",
            },
            { time: "Pomeriggio", body: "Partenze · transfer per l'aeroporto" },
            { time: "Sera", body: "Cena della famiglia stretta · facoltativa" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilità delle destinazioni",
      headline: "Dove i *matrimoni arabi* riescono meglio.",
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
          name: "Costa Azzurra",
          sub: "Francia · giugno – settembre",
          destinationSlug: "cote-dazur",
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
          name: "St. Barths",
          sub: "Caraibi · novembre – aprile",
          destinationSlug: "st-barths",
        },
        {
          rating: 4,
          name: "Toscana",
          sub: "Italia · maggio – ottobre",
          destinationSlug: "tuscany",
        },
        {
          rating: 4,
          name: "Parigi e Île-de-France",
          sub: "Francia · tutto l'anno al chiuso",
          destinationSlug: "paris-ile-de-france",
        },
        {
          rating: 3,
          name: "Provenza",
          sub: "Francia · maggio – settembre",
          destinationSlug: "provence",
        },
      ],
    },
    guest: {
      eyebrow: "Gestione degli invitati",
      headline: "La cura *pratica* di 300 invitati.",
      deck: "Lo strato logistico che la maggior parte dei planner sottostima. Iniziamo più di un anno prima.",
      cells: [
        {
          title: "Protocollo dietetico halal",
          body: "Provenienza e preparazione halal confermate per iscritto con la cucina del resort, separazione verificata, opzioni per allergeni e vegetariane a ogni pasto. Un consulente nella settimana delle prove quando la famiglia lo desidera.",
        },
        {
          title: "Spazio e orari di preghiera",
          body: "Uno spazio di preghiera pulito e pacato riservato per tutta la durata, con tappeti e direzione segnati, e gli orari di preghiera inseriti nel programma perché la celebrazione si interrompa con chiarezza dove vengono osservati.",
        },
        {
          title: "Personale attento al genere",
          body: "Dove la famiglia lo richiede, personale e fotografia sono organizzati per rispettare una celebrazione separata: fotografe e personale di servizio femminile per il lato delle donne, con ingressi e linee di vista pianificati di conseguenza.",
        },
        {
          title: "Anziani e mobilità",
          body: "Posti dedicati vicino alla kosha, trasporto a parte, camere al piano terra riservate agli invitati più anziani e un referente dell'atelier per gli anziani lungo tutto il fine settimana.",
        },
        {
          title: "Viaggi e blocchi di camere",
          body: "Blocchi di camere su più categorie, transfer coordinati lungo più giorni di arrivi e pacchi di benvenuto in ogni camera con il programma, il codice di abbigliamento per evento e i contatti.",
        },
        {
          title: "Comunicazioni",
          body: "Un gruppo invitati prima del viaggio, un sito del matrimonio con il programma giornaliero e i codici di abbigliamento, e guide stampate in arabo accanto all'inglese per gli invitati che le preferiscono.",
        },
      ],
    },
    related: {
      eyebrow: "Continua a leggere",
      headline: "Dal *diario.*",
      articles: [
        {
          category: "Matrimoni Arabi · Punta Cana",
          title: "I migliori resort caraibici per un matrimonio halal",
          body: "Un registro vivo dei resort che tengono una cucina halal e uno zaffe da 300 invitati con grazia.",
          imageKey: "culture-related-1",
        },
        {
          category: "Tradizione · Arabo",
          title: "Lo zaffe, in dettaglio",
          body: "Sul corteo che annuncia la coppia — e perché non viene mai registrato.",
          imageKey: "culture-related-2",
        },
        {
          category: "Design · Arabo",
          title: "Guida agli stili di kosha",
          body: "Bianca e oro, corte di gelsomino, damasco moderno — e in cosa differiscono.",
          imageKey: "culture-related-3",
        },
        {
          category: "Pianificazione · Regionale",
          title: "In cosa differiscono i matrimoni libanesi e sauditi",
          body: "Due protocolli, due registri — e cosa cambia nella pianificazione.",
          imageKey: "culture-related-4",
        },
        {
          category: "Costo · Arabo",
          title: "Quanto costa davvero un matrimonio arabo di lusso",
          body: "Budget franchi per il 2026 per numero di invitati e regione.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("it", "punta-cana") },
        { label: "Costa Azzurra", href: destinationPath("it", "cote-dazur") },
        { label: "Costiera Amalfitana", href: destinationPath("it", "amalfi") },
        { label: "Lago di Como", href: destinationPath("it", "lake-como") },
      ],
      sidebarVenues: [
        { label: "Eden Roc Cap Cana" },
        { label: "Hotel du Cap-Eden-Roc" },
        { label: "Villa Tre Ville" },
        { label: "Grand-Hôtel du Cap-Ferrat" },
      ],
      sidebarCultures: [
        {
          label: "Matrimoni indiani",
          href: culturePath("it", "indian-weddings"),
        },
        {
          label: "Matrimoni ebraici",
          href: culturePath("it", "jewish-weddings"),
        },
        {
          label: "Matrimoni interreligiosi",
          href: culturePath("it", "interfaith-weddings"),
        },
        {
          label: "Matrimoni europei",
          href: culturePath("it", "european-weddings"),
        },
      ],
    },
    faq: {
      eyebrow: "Domande, con risposta",
      headline: "Domande *frequenti.*",
      items: [
        {
          question:
            "Potete organizzare un matrimonio interamente halal in un resort caraibico?",
          answer: [
            "Sì. Concordiamo il protocollo di cucina halal con il resort con mesi di anticipo: provenienza, separazione e preparazione confermate per iscritto e ricontrollate nella settimana delle prove.",
            "Quando la famiglia desidera un secondo paio d'occhi, portiamo un consulente per la settimana delle prove. La disposizione del bar, analcolica o discreta, è pianificata secondo i desideri della famiglia.",
          ],
        },
        {
          question: "Organizzate il katb el-kitab all'estero o a casa?",
          answer: [
            "L'uno o l'altro — spetta alla famiglia collocarlo. Molte famiglie tengono il katb el-kitab settimane prima a casa, prima del viaggio; altre lo integrano nel giorno del matrimonio. Pianifichiamo attorno alla scelta della famiglia e coordiniamo il celebrante di conseguenza.",
          ],
        },
        {
          question: "Potete tenere una celebrazione separata per genere?",
          answer: [
            "Dove la famiglia lo richiede, sì — e tenuta come si deve. Personale, fotografia, ingressi e tempi sono organizzati perché la separazione sia dignitosa e non improvvisata, con fotografe e personale di servizio femminile per il lato delle donne quando richiesto.",
          ],
        },
        {
          question: "I musicisti dello zaffe sono locali o arrivano in aereo?",
          answer: [
            "Usiamo sempre una troupe di zaffe dal vivo: uno zaffe registrato non è uno zaffe. Dove la destinazione non può fornire tamburi e una linea di dabke all'altezza, facciamo arrivare la troupe in aereo. I musicisti si prenotano presto, ed è per questo che fissiamo la data con largo anticipo.",
          ],
        },
        {
          question:
            "Qual è il costo tipico di un matrimonio arabo in destinazione?",
          answer: [
            "Un intervallo utile per il 2026, per 150–400 invitati nell'arco di uno-tre giorni, è di 250.000 – 900.000 USD, tutto compreso, a seconda della regione, del numero di invitati e della scala dello zaffe e della kosha.",
            "Condividiamo budget trasparenti e voce per voce alla prima consulenza.",
          ],
        },
        {
          question:
            "In cosa differiscono i matrimoni libanesi e sauditi nella pianificazione?",
          answer: [
            "A grandi linee — e sempre a seconda della singola famiglia — un ricevimento libanese tende a svolgersi alto e fino a tardi attorno a uno zaffe dal vivo, mentre una celebrazione del Golfo può tenersi in un registro più pacato e formale, talvolta con la celebrazione delle donne tenuta separata su richiesta della famiglia.",
            "Chiediamo a ogni famiglia il proprio protocollo invece di applicare un modello regionale.",
          ],
        },
        {
          question:
            "E gli invitati che non hanno mai partecipato a un matrimonio arabo?",
          answer: [
            "Inviamo a ogni invitato una guida preliminare: programma, codice di abbigliamento per evento e note sullo zaffe, la kosha e lo zaghareet perché la serata si legga con chiarezza. La squadra dell'atelier è disponibile per tutto il fine settimana.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Una conversazione privata —",
      headline: "*Inizia* il tuo\nmatrimonio arabo.",
      body: "Diteci la regione, il protocollo, le famiglie e una data di massima. Grecia risponde, di persona, entro cinque giorni lavorativi.",
      ctaLabel: "Richiedi una consulenza privata →",
      ctaHref: staticPath("it", "/contact"),
    },
  },
};
