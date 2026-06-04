/**
 * South Asian Weddings — Culture № 04, full detail-page copy, all six locales.
 *
 * This page is the studio's register for the BROADER subcontinent beyond the
 * dedicated Indian (Hindu) page: Pakistani (nikkah, mehndi, baraat, walima),
 * Sikh (Anand Karaj), Sri Lankan (Poruwa) and Bangladeshi (gaye holud)
 * traditions. The framing is honest — distinct religious traditions that share
 * a region, never a generic blur. Hindu Indian weddings have their own page,
 * and the copy points readers there.
 *
 * Card-level copy (cardEyebrow / cardBlurb / cardMeta / intro) is reused
 * verbatim from `culture.ts` so the hub and the detail page stay in sync.
 *
 * Tradition terms (nikkah, walima, mehndi, baraat, rukhsati, Anand Karaj,
 * Poruwa, gaye holud, dholki, mehndi, granthi, Guru Granth Sahib) are kept
 * untranslated in every locale.
 */

import { culturePath, destinationPath, staticPath, type CultureCopy } from "./shared";
import type { Locale } from "../../../i18n/routing";

export const southAsianWeddings: Record<Locale, CultureCopy> = {
  en: {
    name: "South Asian Weddings",
    cardEyebrow: "South Asian",
    cardBlurb: "Hindu, Sikh, Muslim, Sri Lankan, Bangladeshi.",
    cardMeta: "Discover",
    intro:
      "Hindu, Sikh, Muslim, Sri Lankan and Bangladeshi ceremonies, each held by specialists who have lived inside the tradition.",
    hero: {
      eyebrow: "The Traditions · No. 04",
      scriptOverline: "A wedding of",
      headline: "South Asian *tradition.*",
      deck: "The register we keep for the subcontinent beyond the Hindu mandap — Pakistani, Sikh, Sri Lankan and Bangladeshi weddings, each held as its own faith and its own family, never blurred into one. Hindu Indian weddings have their own page.",
      captionLeft: "Ayesha & Bilal · Punta Cana",
      captionCenter: "Nikkah at golden hour · 2025",
      captionRight: "Plate IV",
    },
    factStrip: [
      { label: "Wedding length", value: "2 – 4 days", sub: "3 – 6 events" },
      { label: "Guest range", value: "150 – 500", sub: "Larger by request" },
      { label: "Lead time", value: "16 – 22 months", sub: "Officiants book early" },
      { label: "Traditions held", value: "Pakistani · Sikh", sub: "Sri Lankan · Bangladeshi" },
      { label: "Cuisine", value: "Halal-forward", sub: "Regional, by family" },
      { label: "Languages", value: "EN · Urdu", sub: "Punjabi · Sinhala · Bengali" },
    ],
    overview: {
      sideEyebrow: "The traditions",
      sideNote:
        "Four faiths, one region. A working register of how we host Pakistani, Sikh, Sri Lankan and Bangladeshi weddings — each as itself.",
      headline: "One region,\nfour faiths,\nno generic *blur.*",
      lede: "South Asia is not a single wedding. A Pakistani nikkah, a Sikh Anand Karaj, a Sri Lankan Poruwa and a Bangladeshi gaye holud share a map and almost nothing else — different scripture, different officiant, different vow. We hold them apart on purpose.",
      bodyParagraphs: [
        "This page exists because the subcontinent is too often flattened into one word. Our Hindu Indian weddings have their own page and their own pandit. This register is for the rest — Pakistani Muslim families, Sikh families holding the Anand Karaj, Sri Lankan families at the Poruwa, Bangladeshi families lighting the gaye holud. Each is planned by someone who has lived inside it.",
        "A Pakistani wedding runs as a sequence: dholki and mehndi nights, the nikkah where the marriage contract is read and witnessed, the baraat that brings the groom's party, the rukhsati that sends the bride from her family, and the walima the groom's family hosts the day after. The emotional weight sits in the rukhsati — we never compress it.",
        "A Sikh wedding centres on the Anand Karaj, conducted in the presence of the Guru Granth Sahib with an experienced granthi. The requirements here are real and we defer to them absolutely — venue conduct, the standard of the setting, the order of the lavan. We do not improvise around a faith we are guests within.",
        "Sri Lankan and Bangladeshi families bring their own grammar — the Poruwa platform and its Sinhalese rites, the turmeric warmth of the gaye holud. We staff each tradition with an officiant and a coordinator who know it from the inside, and we ask the family, in private, what is theirs to lead and what is ours to carry.",
      ],
      pull: "\"A Pakistani nikkah, a Sikh Anand Karaj, a Sri Lankan Poruwa and a Bangladeshi gaye holud share a map and almost nothing else. We hold them apart on purpose.\"",
      signatureName: "Grecia",
      signatureRole: "Founder · Across the subcontinent's many traditions",
    },
    ceremonyArc: {
      eyebrow: "Ceremony structure",
      headline: "The contract, the procession, the *send-off.*",
      deck: "A typical Muslim South Asian arc, with the held variants named at each step. Sikh, Sri Lankan and Bangladeshi families reshape this around their own faith — every wedding adjusts by tradition and region.",
      steps: [
        { numeral: "I", name: "Dholki", sub: "Bangladeshi: gaye holud", when: "Evening, days before", body: "An informal night of drumming and song among the women — the dholki for Pakistani families, the turmeric-lit gaye holud for Bangladeshi families. The celebration begins long before the vow." },
        { numeral: "II", name: "Mehndi", sub: "Henna night", when: "Evening before", body: "Hands and feet decorated in intricate henna, with music and dancing. Held across most South Asian traditions, with regional songs and order kept by the family." },
        { numeral: "III", name: "Nikkah", sub: "Sikh variant: Anand Karaj", when: "Wedding day", body: "The contract ceremony. For Muslim families, the nikkah is read, witnessed and documented under the officiating imam's guidance. Sikh families hold the Anand Karaj instead, before the Guru Granth Sahib with a granthi." },
        { numeral: "IV", name: "Baraat", sub: "The procession", when: "Wedding day", body: "The groom's party arrives in celebration — drums, family, and welcome by the bride's side. Sri Lankan families instead gather at the Poruwa, the decorated platform where the rites are held." },
        { numeral: "V", name: "Poruwa", sub: "Sri Lankan rite", when: "Wedding day", body: "Where the family is Sri Lankan, the couple ascends the Poruwa for the traditional Sinhalese ceremony — the binding of hands, the rituals overseen by the officiant the family names." },
        { numeral: "VI", name: "Rukhsati", sub: "The send-off", when: "Wedding day, late", body: "The bride departs her family's care for her new home. The most emotional moment of the day; we give it full space and never schedule over it." },
        { numeral: "VII", name: "Walima", sub: "The second reception", when: "Day after", body: "The reception hosted by the groom's family, the day following the nikkah. A formal celebration that completes the marriage in the community's sight." },
      ],
    },
    designConcepts: {
      eyebrow: "Design concepts",
      headline: "Stages, *moodboards.*",
      deck: "Three working directions we have built more than once across these traditions. Every wedding adapts the palette, the fabric, and the scale of the setting.",
      cards: [
        {
          title: "Emerald & Gold",
          body: "A formal nikkah stage in deep emerald velvet, antique gold, and warm candlelight. Reads as celebration without excess — built for the contract ceremony and the walima alike.",
          palette: ["#0f3d2e", "#c89d4e", "#1c2a22", "#e8d6a0", "#f5f0e6"],
          imageKey: "concept-1",
          rows: [
            { label: "Stage / Décor", value: "Velvet backdrop, gold frame" },
            { label: "Florals", value: "Rose · orchid · gold foliage" },
            { label: "Best for", value: "Indoor estate · ballroom" },
          ],
        },
        {
          title: "Ivory & Marigold",
          body: "A bright, open mehndi setting in ivory drapery, marigold ropes and floor seating. Built for the henna night and the gaye holud — warm, informal, photographs beautifully outdoors.",
          palette: ["#f5f0e6", "#e8a843", "#c25422", "#7a3814", "#3a2a1e"],
          imageKey: "concept-2",
          rows: [
            { label: "Stage / Décor", value: "Drapery + floor seating" },
            { label: "Florals", value: "Marigold · jasmine · greenery" },
            { label: "Best for", value: "Garden · courtyard · beach" },
          ],
        },
        {
          title: "Saffron & Cream",
          body: "A restrained Poruwa or Anand Karaj setting in saffron, ivory peonies and unstained wood. Quietly devotional, designed to honour the sanctity of the rite rather than decorate around it.",
          palette: ["#e0a13a", "#ebe3d3", "#a7a78b", "#d6cdb8", "#4a523d"],
          imageKey: "concept-3",
          rows: [
            { label: "Stage / Décor", value: "Wood platform, low florals" },
            { label: "Florals", value: "Peony · lotus · greenery" },
            { label: "Best for", value: "Garden · villa · sanctum-side" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Cultural protocol",
      headline: "What we *hold sacred.*",
      deck: "Six principles we do not compromise on. Where practice varies between families, we defer to the officiant and the elders — not to our own convenience.",
      items: [
        { title: "The nikkah is witnessed and documented", body: "The marriage contract is read, witnessed and recorded under the officiating imam's guidance. We arrange the witnesses, the documentation and the legal registration around the imam's requirements — not the other way around." },
        { title: "The Anand Karaj is held with reverence", body: "A Sikh Anand Karaj is conducted in the presence of the Guru Granth Sahib with an experienced granthi. Venue conduct and the standard of the setting are respected absolutely; where any detail of the rite is in question, the granthi decides, and we follow." },
        { title: "Halal kitchens are briefed early", body: "Where the family observes halal, the resort kitchen is briefed and sourcing arranged months ahead. We confirm certification and preparation with the family's guidance, and keep menus separate where overlapping traditions require it." },
        { title: "The rukhsati keeps its space", body: "The send-off is the most emotional moment of a Pakistani wedding. We never compress it for pacing or schedule a vendor change over it. The family sets the tone and we hold the room quiet." },
        { title: "Elders are honoured first", body: "Elders are greeted, seated and served before any wedding-party concern. Dietary and mobility needs for senior guests are settled before a menu or a floor plan is finalised." },
        { title: "Regional music is live where possible", body: "Dhol for the baraat, devotional musicians for the sacred rites, regional song for the mehndi and gaye holud. Recorded music is welcome at the celebrations, but live where the family's tradition asks for it." },
      ],
    },
    planning: {
      eyebrow: "Multi-day planning",
      headline: "A three-day *wedding,* hour by hour.",
      deck: "The blueprint we use for a typical 250-guest Pakistani Muslim wedding. Sikh, Sri Lankan and Bangladeshi calendars reshape this around their own rites; the care does not change.",
      days: [
        {
          numeral: "I",
          dayLabel: "Day One",
          title: "Dholki & mehndi",
          body: "Guests arrive through the day, with transfers and check-ins coordinated by the studio. An informal dholki in the afternoon, then the mehndi in the evening — henna across several stations, music, and a relaxed dinner.",
          events: [
            { time: "Morning", body: "Guest arrivals · airport transfers · hotel check-in" },
            { time: "16:00", body: "Dholki · drumming and song · women" },
            { time: "18:30", body: "Mehndi ceremony · henna stations · 3 hours" },
            { time: "21:00", body: "Casual dinner · garden buffet" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Day Two",
          title: "Nikkah, baraat & rukhsati",
          body: "The nikkah at the time the imam sets, read and witnessed. The baraat brings the groom's party in celebration. Family rites through the afternoon, then the rukhsati — given its full space — closes the day before the evening dinner.",
          events: [
            { time: "11:00", body: "Bride and groom prep · separate suites" },
            { time: "14:00", body: "Nikkah · contract read and witnessed · 60 minutes" },
            { time: "15:30", body: "Baraat · groom's procession · welcome" },
            { time: "17:00", body: "Family rites · photographs" },
            { time: "18:30", body: "Rukhsati · the send-off · unhurried" },
            { time: "20:00", body: "Dinner · long-table · regional menu" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Day Three",
          title: "Walima & farewells",
          body: "The walima hosted by the groom's family — the formal second reception that completes the marriage in the community's sight. A late brunch for departing guests, with the close families often staying on a day longer.",
          events: [
            { time: "11:00", body: "Farewell brunch · poolside" },
            { time: "19:00", body: "Walima cocktails · groom's family hosts" },
            { time: "20:30", body: "Walima dinner · formal reception · speeches" },
            { time: "Late", body: "Departures begin · transfers next morning" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Destination compatibility",
      headline: "Where South Asian weddings *work best.*",
      viewAllLabel: "View all destinations →",
      viewAllHref: staticPath("en", "/destinations"),
      cards: [
        { rating: 5, name: "Punta Cana", sub: "Caribbean · year-round", imageKey: "compat-1", destinationHref: destinationPath("en", "punta-cana") },
        { rating: 5, name: "Tulum & Los Cabos", sub: "Mexico · November – April", imageKey: "compat-2", destinationHref: destinationPath("en", "tulum-los-cabos") },
        { rating: 4, name: "Lake Como", sub: "Italy · June – September", imageKey: "compat-3", destinationHref: destinationPath("en", "lake-como") },
        { rating: 4, name: "Tuscany", sub: "Italy · May – October", imageKey: "compat-4", destinationHref: destinationPath("en", "tuscany") },
        { rating: 4, name: "Amalfi", sub: "Italy · May – October", imageKey: "compat-5", destinationHref: destinationPath("en", "amalfi") },
        { rating: 4, name: "The Hamptons", sub: "New York · June – September", imageKey: "compat-6", destinationHref: destinationPath("en", "the-hamptons") },
        { rating: 3, name: "Côte d'Azur", sub: "France · June – September", imageKey: "compat-7", destinationHref: destinationPath("en", "cote-dazur") },
        { rating: 3, name: "St. Barths", sub: "Caribbean · November – April", imageKey: "compat-8", destinationHref: destinationPath("en", "st-barths") },
      ],
    },
    guest: {
      eyebrow: "Guest management",
      headline: "The *practical* care of 250 guests.",
      deck: "The logistics layer most planners under-resource. For these traditions, faith and family come first — we plan around both.",
      cells: [
        { title: "Halal protocol", body: "Where the family observes halal, we brief the kitchen and confirm sourcing and certification months ahead. Menus are kept separate where overlapping traditions need it, and the family's guidance is final." },
        { title: "Prayer timing", body: "Daily prayer times are built into the schedule, with a clean, quiet prayer space and wudu facilities arranged. Ceremony timings are set so they never collide with the obligations of observant guests." },
        { title: "Mixed-tradition guidance", body: "When guests come from more than one faith — Muslim, Sikh, Hindu, Christian — we send tailored notes so each knows what to expect at the nikkah, the Anand Karaj or the Poruwa, and how to participate with grace." },
        { title: "Elders & mobility", body: "Dedicated seating, separate transport, and an elders' liaison from the studio. Ground-floor rooms for senior guests, with medical-on-call across the weekend." },
        { title: "Travel & accommodations", body: "Group room blocks across premium, standard and family tiers. Transfers coordinated over several days of arrivals, with a welcome package and schedule in every room." },
        { title: "Communications", body: "A guest group three weeks ahead, a dedicated wedding site with schedule and dress codes, and printed guides — including etiquette notes for each ceremony in the family's languages." },
      ],
    },
    related: {
      eyebrow: "Continue reading",
      headline: "From the *journal.*",
      articles: [
        { category: "Pakistani · Punta Cana", title: "Hosting a Destination Nikkah, Step by Step", body: "How the contract ceremony is read, witnessed and registered abroad — and what the imam needs from us.", imageKey: "culture-related-1" },
        { category: "Sikh · Tradition", title: "The Anand Karaj at a Resort: What It Asks", body: "On hosting the Sikh ceremony with the reverence the Guru Granth Sahib requires.", imageKey: "culture-related-2" },
        { category: "Tradition · Sri Lankan", title: "Inside the Poruwa Ceremony", body: "A field guide to the Sinhalese platform rite and the rituals held upon it.", imageKey: "culture-related-3" },
        { category: "Cost · South Asian", title: "What a Luxury South Asian Wedding Costs", body: "Frank 2026 budgets by tradition and guest count.", imageKey: "culture-related-4" },
        { category: "Bangladeshi · Design", title: "Gaye Holud, in Detail", body: "On the turmeric night that opens a Bangladeshi wedding — and how we design it.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("en", "punta-cana") },
        { label: "Tulum & Los Cabos", href: destinationPath("en", "tulum-los-cabos") },
        { label: "Lake Como", href: destinationPath("en", "lake-como") },
        { label: "The Hamptons", href: destinationPath("en", "the-hamptons") },
      ],
      sidebarVenues: [
        { label: "Kukua Beach Club" },
        { label: "Eden Roc Cap Cana" },
        { label: "Villa Tre Ville" },
        { label: "Chileno Bay Resort" },
      ],
      sidebarCultures: [
        { label: "Indian weddings", href: culturePath("en", "indian-weddings") },
        { label: "Arab weddings", href: culturePath("en", "arab-weddings") },
        { label: "Interfaith weddings", href: culturePath("en", "interfaith-weddings") },
        { label: "Jewish weddings", href: culturePath("en", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Questions, answered",
      headline: "Frequently *asked.*",
      items: [
        {
          question: "How does a destination nikkah work legally?",
          answer: [
            "The nikkah is the religious contract, read and witnessed under the officiating imam's guidance. The legal marriage is a separate matter, settled according to the laws of the destination and your home country.",
            "Many couples complete the civil registration at home before travelling and hold the nikkah abroad as the ceremony of record for the family. We coordinate the imam, the witnesses and the documentation so both the faith and the law are satisfied.",
          ],
        },
        {
          question: "Can you host an Anand Karaj at a resort?",
          answer: [
            "Yes, where the setting can meet the requirements of the rite. The Anand Karaj is held in the presence of the Guru Granth Sahib with an experienced granthi, and the conduct of the space matters.",
            "We defer entirely to the granthi and the family on what the setting must provide. Where a resort cannot honour those requirements, we will say so plainly and find a venue that can.",
          ],
        },
        {
          question: "Can Pakistani and Indian families celebrate together?",
          answer: [
            "Often, and beautifully. A Pakistani Muslim family and an Indian Hindu family marrying their children is one of the joins we are asked for most.",
            "We treat it as two faiths held with equal care — a nikkah and a Hindu ceremony, two officiants, one weekend — rather than a single blended event. Our Interfaith Weddings page goes deeper on that work.",
          ],
        },
        {
          question: "What does a destination South Asian wedding cost in 2026?",
          answer: [
            "A useful range for 150–400 guest weddings across two-to-four days is USD $250,000 – $900,000, all-in, depending on tradition, destination and guest count.",
            "We share transparent, line-item budgets in the first consultation, with ranges by guest count and by the events each tradition calls for.",
          ],
        },
        {
          question: "Can halal be maintained at a Caribbean resort?",
          answer: [
            "Yes. We brief the kitchen, confirm certified sourcing, and arrange separate preparation months ahead, all under the family's guidance.",
            "Where local certified supply is limited, we source and import to the standard the family sets, and keep menus separate where overlapping traditions require it.",
          ],
        },
        {
          question: "How is this different from your Indian Weddings page?",
          answer: [
            "Our Indian Weddings page is for Hindu Indian weddings — the mandap, the pheras, the pandit we have worked with for years.",
            "This page is for the rest of the subcontinent: Pakistani Muslim, Sikh, Sri Lankan and Bangladeshi traditions, each held as its own faith. If your wedding is Hindu, that page is the right home; if it crosses faiths, our Interfaith page may be too.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "A private conversation —",
      headline: "*Begin* your\nSouth Asian wedding.",
      body: "Tell us the tradition, the faith, the families, and a rough date. Grecia writes back, personally, within five working days.",
      ctaLabel: "Request a private consultation →",
      ctaHref: staticPath("en", "/contact"),
    },
  },

  es: {
    name: "Bodas del Sur de Asia",
    cardEyebrow: "Sur de Asia",
    cardBlurb: "Hindú, sij, musulmana, esrilanquesa, bangladesí.",
    cardMeta: "Descubrir",
    intro:
      "Ceremonias hindúes, sijs, musulmanas, esrilanquesas y bangladesíes, cada una sostenida por especialistas que han vivido dentro de la tradición.",
    hero: {
      eyebrow: "Las Tradiciones · N.º 04",
      scriptOverline: "Una boda de",
      headline: "tradición del *sur de Asia.*",
      deck: "El registro que reservamos para el subcontinente más allá del mandap hindú: bodas pakistaníes, sijs, esrilanquesas y bangladesíes, cada una sostenida como su propia fe y su propia familia, jamás difuminadas en una sola. Las bodas hindúes indias tienen su propia página.",
      captionLeft: "Ayesha y Bilal · Punta Cana",
      captionCenter: "Nikkah a la hora dorada · 2025",
      captionRight: "Plate IV",
    },
    factStrip: [
      { label: "Duración", value: "2 – 4 días", sub: "3 – 6 eventos" },
      { label: "Número de invitados", value: "150 – 500", sub: "Más, bajo petición" },
      { label: "Antelación", value: "16 – 22 meses", sub: "Los oficiantes reservan pronto" },
      { label: "Tradiciones sostenidas", value: "Pakistaní · Sij", sub: "Esrilanquesa · Bangladesí" },
      { label: "Cocina", value: "Halal preferente", sub: "Regional, según la familia" },
      { label: "Idiomas", value: "EN · Urdu", sub: "Punjabi · Cingalés · Bengalí" },
    ],
    overview: {
      sideEyebrow: "Las tradiciones",
      sideNote:
        "Cuatro fes, una región. Un registro práctico de cómo acogemos las bodas pakistaníes, sijs, esrilanquesas y bangladesíes — cada una como sí misma.",
      headline: "Una región,\ncuatro fes,\nningún *difuminado.*",
      lede: "El sur de Asia no es una sola boda. Un nikkah pakistaní, un Anand Karaj sij, un Poruwa esrilanqués y un gaye holud bangladesí comparten un mapa y casi nada más: escrituras distintas, oficiantes distintos, votos distintos. Las mantenemos separadas a propósito.",
      bodyParagraphs: [
        "Esta página existe porque el subcontinente se reduce con demasiada frecuencia a una sola palabra. Nuestras bodas hindúes indias tienen su propia página y su propio pandit. Este registro es para el resto: familias musulmanas pakistaníes, familias sijs que sostienen el Anand Karaj, familias esrilanquesas en el Poruwa, familias bangladesíes que encienden el gaye holud. Cada una es planificada por alguien que la ha vivido por dentro.",
        "Una boda pakistaní transcurre como una secuencia: noches de dholki y mehndi, el nikkah donde se lee y atestigua el contrato matrimonial, el baraat que trae al cortejo del novio, el rukhsati que despide a la novia de su familia, y el walima que la familia del novio ofrece al día siguiente. El peso emocional reside en el rukhsati: nunca lo comprimimos.",
        "Una boda sij gira en torno al Anand Karaj, celebrado en presencia del Guru Granth Sahib con un granthi experimentado. Aquí las exigencias son reales y nos remitimos a ellas en absoluto: la conducta en el lugar, el nivel del entorno, el orden de los lavan. No improvisamos en torno a una fe de la que somos invitados.",
        "Las familias esrilanquesas y bangladesíes traen su propia gramática: la plataforma del Poruwa y sus ritos cingaleses, el calor de cúrcuma del gaye holud. Dotamos cada tradición de un oficiante y un coordinador que la conocen desde dentro, y preguntamos a la familia, en privado, qué les corresponde dirigir y qué nos corresponde sostener.",
      ],
      pull: "«Un nikkah pakistaní, un Anand Karaj sij, un Poruwa esrilanqués y un gaye holud bangladesí comparten un mapa y casi nada más. Las mantenemos separadas a propósito.»",
      signatureName: "Grecia",
      signatureRole: "Fundadora · A través de las muchas tradiciones del subcontinente",
    },
    ceremonyArc: {
      eyebrow: "Estructura ceremonial",
      headline: "El contrato, el cortejo, la *despedida.*",
      deck: "Un arco musulmán típico del sur de Asia, con las variantes sostenidas nombradas en cada paso. Las familias sijs, esrilanquesas y bangladesíes lo reconfiguran en torno a su propia fe — cada boda se ajusta según la tradición y la región.",
      steps: [
        { numeral: "I", name: "Dholki", sub: "Bangladesí: gaye holud", when: "Por la noche, días antes", body: "Una velada informal de tambores y canto entre las mujeres — el dholki para las familias pakistaníes, el gaye holud iluminado de cúrcuma para las bangladesíes. La celebración empieza mucho antes del voto." },
        { numeral: "II", name: "Mehndi", sub: "Noche de henna", when: "La víspera", body: "Manos y pies decorados con henna intrincada, con música y baile. Se celebra en la mayoría de las tradiciones del sur de Asia, con cantos y orden regionales conservados por la familia." },
        { numeral: "III", name: "Nikkah", sub: "Variante sij: Anand Karaj", when: "Día de la boda", body: "La ceremonia del contrato. Para las familias musulmanas, el nikkah se lee, atestigua y documenta bajo la guía del imán que oficia. Las familias sijs sostienen en su lugar el Anand Karaj, ante el Guru Granth Sahib con un granthi." },
        { numeral: "IV", name: "Baraat", sub: "El cortejo", when: "Día de la boda", body: "El cortejo del novio llega entre celebración — tambores, familia y bienvenida por parte de la novia. Las familias esrilanquesas, en cambio, se reúnen en el Poruwa, la plataforma decorada donde se celebran los ritos." },
        { numeral: "V", name: "Poruwa", sub: "Rito esrilanqués", when: "Día de la boda", body: "Cuando la familia es esrilanquesa, la pareja asciende al Poruwa para la ceremonia cingalesa tradicional — la unión de las manos, los ritos supervisados por el oficiante que la familia designa." },
        { numeral: "VI", name: "Rukhsati", sub: "La despedida", when: "Día de la boda, al final", body: "La novia deja el amparo de su familia rumbo a su nuevo hogar. El momento más emotivo del día; le damos todo el espacio y nunca programamos nada por encima de él." },
        { numeral: "VII", name: "Walima", sub: "La segunda recepción", when: "Al día siguiente", body: "La recepción que ofrece la familia del novio, el día posterior al nikkah. Una celebración formal que completa el matrimonio a la vista de la comunidad." },
      ],
    },
    designConcepts: {
      eyebrow: "Conceptos de diseño",
      headline: "Escenarios, *moodboards.*",
      deck: "Tres direcciones de trabajo que hemos construido más de una vez en estas tradiciones. Cada boda adapta la paleta, la tela y la escala del entorno.",
      cards: [
        {
          title: "Esmeralda y Oro",
          body: "Un escenario formal de nikkah en terciopelo esmeralda profundo, oro antiguo y luz cálida de velas. Lee como celebración sin exceso — pensado tanto para la ceremonia del contrato como para el walima.",
          palette: ["#0f3d2e", "#c89d4e", "#1c2a22", "#e8d6a0", "#f5f0e6"],
          imageKey: "concept-1",
          rows: [
            { label: "Escenario / Decoración", value: "Telón de terciopelo, marco dorado" },
            { label: "Flores", value: "Rosa · orquídea · follaje dorado" },
            { label: "Ideal para", value: "Finca interior · salón" },
          ],
        },
        {
          title: "Marfil y Caléndula",
          body: "Un montaje de mehndi luminoso y abierto en drapeado marfil, cuerdas de caléndula y asientos de suelo. Pensado para la noche de henna y el gaye holud — cálido, informal, se fotografía bellamente al aire libre.",
          palette: ["#f5f0e6", "#e8a843", "#c25422", "#7a3814", "#3a2a1e"],
          imageKey: "concept-2",
          rows: [
            { label: "Escenario / Decoración", value: "Drapeado + asientos de suelo" },
            { label: "Flores", value: "Caléndula · jazmín · verde" },
            { label: "Ideal para", value: "Jardín · patio · playa" },
          ],
        },
        {
          title: "Azafrán y Crema",
          body: "Un montaje sobrio de Poruwa o Anand Karaj en azafrán, peonías marfil y madera sin tratar. Discretamente devocional, diseñado para honrar la santidad del rito antes que decorar a su alrededor.",
          palette: ["#e0a13a", "#ebe3d3", "#a7a78b", "#d6cdb8", "#4a523d"],
          imageKey: "concept-3",
          rows: [
            { label: "Escenario / Decoración", value: "Plataforma de madera, flores bajas" },
            { label: "Flores", value: "Peonía · loto · verde" },
            { label: "Ideal para", value: "Jardín · villa · junto al santuario" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocolo cultural",
      headline: "Lo que consideramos *sagrado.*",
      deck: "Seis principios que no negociamos. Cuando la práctica varía entre familias, nos remitimos al oficiante y a los mayores — no a nuestra propia comodidad.",
      items: [
        { title: "El nikkah se atestigua y documenta", body: "El contrato matrimonial se lee, atestigua y registra bajo la guía del imán que oficia. Organizamos los testigos, la documentación y el registro legal en torno a las exigencias del imán — y no al revés." },
        { title: "El Anand Karaj se sostiene con reverencia", body: "Un Anand Karaj sij se celebra en presencia del Guru Granth Sahib con un granthi experimentado. La conducta en el lugar y el nivel del entorno se respetan en absoluto; cuando algún detalle del rito está en duda, decide el granthi y nosotros seguimos." },
        { title: "Las cocinas halal se informan pronto", body: "Cuando la familia observa el halal, se informa a la cocina del resort y se organiza el abastecimiento con meses de antelación. Confirmamos la certificación y la preparación con la guía de la familia, y mantenemos los menús separados cuando las tradiciones que se cruzan lo exigen." },
        { title: "El rukhsati conserva su espacio", body: "La despedida es el momento más emotivo de una boda pakistaní. Nunca la comprimimos por ritmo ni programamos un cambio de proveedor por encima de ella. La familia marca el tono y nosotros mantenemos la sala en silencio." },
        { title: "Los mayores se honran primero", body: "A los mayores se les saluda, se les sienta y se les sirve antes que cualquier asunto del cortejo nupcial. Las necesidades dietéticas y de movilidad de los invitados mayores se resuelven antes de cerrar un menú o un plano de sala." },
        { title: "La música regional es en vivo cuando es posible", body: "Dhol para el baraat, músicos devocionales para los ritos sagrados, canto regional para el mehndi y el gaye holud. La música grabada es bienvenida en las celebraciones, pero en vivo allí donde la tradición de la familia lo pide." },
      ],
    },
    planning: {
      eyebrow: "Planificación de varios días",
      headline: "Una boda de tres días, *hora a hora.*",
      deck: "El esquema que usamos para una boda musulmana pakistaní típica de 250 invitados. Los calendarios sij, esrilanqués y bangladesí lo reconfiguran en torno a sus propios ritos; el cuidado no cambia.",
      days: [
        {
          numeral: "I",
          dayLabel: "Día Uno",
          title: "Dholki y mehndi",
          body: "Los invitados llegan a lo largo del día, con traslados y registros coordinados por el atelier. Un dholki informal por la tarde y luego el mehndi por la noche — henna en varias estaciones, música y una cena distendida.",
          events: [
            { time: "Mañana", body: "Llegadas de invitados · traslados · registro en hotel" },
            { time: "16:00", body: "Dholki · tambores y canto · mujeres" },
            { time: "18:30", body: "Ceremonia de mehndi · estaciones de henna · 3 horas" },
            { time: "21:00", body: "Cena informal · bufé en el jardín" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Día Dos",
          title: "Nikkah, baraat y rukhsati",
          body: "El nikkah a la hora que fija el imán, leído y atestiguado. El baraat trae al cortejo del novio entre celebración. Ritos familiares por la tarde y luego el rukhsati — con todo su espacio — cierra el día antes de la cena.",
          events: [
            { time: "11:00", body: "Preparación de novios · suites separadas" },
            { time: "14:00", body: "Nikkah · contrato leído y atestiguado · 60 minutos" },
            { time: "15:30", body: "Baraat · cortejo del novio · bienvenida" },
            { time: "17:00", body: "Ritos familiares · fotografías" },
            { time: "18:30", body: "Rukhsati · la despedida · sin prisa" },
            { time: "20:00", body: "Cena · mesa larga · menú regional" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Día Tres",
          title: "Walima y despedidas",
          body: "El walima que ofrece la familia del novio — la segunda recepción formal que completa el matrimonio a la vista de la comunidad. Un brunch tardío para los invitados que parten, y las familias cercanas a menudo se quedan un día más.",
          events: [
            { time: "11:00", body: "Brunch de despedida · junto a la piscina" },
            { time: "19:00", body: "Cóctel del walima · ofrece la familia del novio" },
            { time: "20:30", body: "Cena del walima · recepción formal · discursos" },
            { time: "Tarde-noche", body: "Comienzan las salidas · traslados a la mañana siguiente" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilidad de destino",
      headline: "Dónde funcionan mejor las bodas del *sur de Asia.*",
      viewAllLabel: "Ver todos los destinos →",
      viewAllHref: staticPath("es", "/destinations"),
      cards: [
        { rating: 5, name: "Punta Cana", sub: "Caribe · todo el año", imageKey: "compat-1", destinationHref: destinationPath("es", "punta-cana") },
        { rating: 5, name: "Tulum y Los Cabos", sub: "México · noviembre – abril", imageKey: "compat-2", destinationHref: destinationPath("es", "tulum-los-cabos") },
        { rating: 4, name: "Lago de Como", sub: "Italia · junio – septiembre", imageKey: "compat-3", destinationHref: destinationPath("es", "lake-como") },
        { rating: 4, name: "Toscana", sub: "Italia · mayo – octubre", imageKey: "compat-4", destinationHref: destinationPath("es", "tuscany") },
        { rating: 4, name: "Amalfi", sub: "Italia · mayo – octubre", imageKey: "compat-5", destinationHref: destinationPath("es", "amalfi") },
        { rating: 4, name: "Los Hamptons", sub: "Nueva York · junio – septiembre", imageKey: "compat-6", destinationHref: destinationPath("es", "the-hamptons") },
        { rating: 3, name: "Costa Azul", sub: "Francia · junio – septiembre", imageKey: "compat-7", destinationHref: destinationPath("es", "cote-dazur") },
        { rating: 3, name: "St. Barths", sub: "Caribe · noviembre – abril", imageKey: "compat-8", destinationHref: destinationPath("es", "st-barths") },
      ],
    },
    guest: {
      eyebrow: "Gestión de invitados",
      headline: "El cuidado *práctico* de 250 invitados.",
      deck: "La capa logística que la mayoría de planificadores infradota. En estas tradiciones, la fe y la familia van primero — planificamos en torno a ambas.",
      cells: [
        { title: "Protocolo halal", body: "Cuando la familia observa el halal, informamos a la cocina y confirmamos el abastecimiento y la certificación con meses de antelación. Los menús se mantienen separados cuando las tradiciones que se cruzan lo necesitan, y la guía de la familia es definitiva." },
        { title: "Horarios de oración", body: "Los horarios diarios de oración se integran en el programa, con un espacio de oración limpio y silencioso e instalaciones para el wudu. Las horas de las ceremonias se fijan para que nunca choquen con las obligaciones de los invitados observantes." },
        { title: "Guía para tradiciones mixtas", body: "Cuando los invitados vienen de más de una fe — musulmana, sij, hindú, cristiana — enviamos notas a medida para que cada uno sepa qué esperar en el nikkah, el Anand Karaj o el Poruwa, y cómo participar con respeto." },
        { title: "Mayores y movilidad", body: "Asientos dedicados, transporte separado y un enlace para los mayores del equipo del atelier. Habitaciones en planta baja para los invitados mayores, con asistencia médica de guardia durante todo el fin de semana." },
        { title: "Viajes y alojamiento", body: "Bloques de habitaciones en categorías premium, estándar y familiar. Traslados coordinados a lo largo de varios días de llegadas, con un paquete de bienvenida y el programa en cada habitación." },
        { title: "Comunicaciones", body: "Un grupo de invitados tres semanas antes, un sitio web dedicado con programa y códigos de vestimenta, y guías impresas — incluidas notas de etiqueta para cada ceremonia en los idiomas de la familia." },
      ],
    },
    related: {
      eyebrow: "Seguir leyendo",
      headline: "Del *diario.*",
      articles: [
        { category: "Pakistaní · Punta Cana", title: "Cómo celebrar un nikkah de destino, paso a paso", body: "Cómo se lee, atestigua y registra el contrato en el extranjero — y qué necesita el imán de nosotros.", imageKey: "culture-related-1" },
        { category: "Sij · Tradición", title: "El Anand Karaj en un resort: lo que exige", body: "Sobre acoger la ceremonia sij con la reverencia que exige el Guru Granth Sahib.", imageKey: "culture-related-2" },
        { category: "Tradición · Esrilanquesa", title: "Dentro de la ceremonia del Poruwa", body: "Una guía del rito cingalés sobre plataforma y los rituales que se celebran en él.", imageKey: "culture-related-3" },
        { category: "Coste · Sur de Asia", title: "Cuánto cuesta una boda de lujo del sur de Asia", body: "Presupuestos francos de 2026 por tradición y número de invitados.", imageKey: "culture-related-4" },
        { category: "Bangladesí · Diseño", title: "El gaye holud, en detalle", body: "Sobre la noche de cúrcuma que abre una boda bangladesí — y cómo la diseñamos.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("es", "punta-cana") },
        { label: "Tulum y Los Cabos", href: destinationPath("es", "tulum-los-cabos") },
        { label: "Lago de Como", href: destinationPath("es", "lake-como") },
        { label: "Los Hamptons", href: destinationPath("es", "the-hamptons") },
      ],
      sidebarVenues: [
        { label: "Kukua Beach Club" },
        { label: "Eden Roc Cap Cana" },
        { label: "Villa Tre Ville" },
        { label: "Chileno Bay Resort" },
      ],
      sidebarCultures: [
        { label: "Bodas indias", href: culturePath("es", "indian-weddings") },
        { label: "Bodas árabes", href: culturePath("es", "arab-weddings") },
        { label: "Bodas interreligiosas", href: culturePath("es", "interfaith-weddings") },
        { label: "Bodas judías", href: culturePath("es", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Preguntas, respondidas",
      headline: "Preguntas *frecuentes.*",
      items: [
        {
          question: "¿Cómo funciona legalmente un nikkah de destino?",
          answer: [
            "El nikkah es el contrato religioso, leído y atestiguado bajo la guía del imán que oficia. El matrimonio legal es un asunto aparte, resuelto según las leyes del destino y de tu país de origen.",
            "Muchas parejas completan el registro civil en casa antes de viajar y celebran el nikkah en el extranjero como la ceremonia de referencia para la familia. Coordinamos al imán, los testigos y la documentación para que tanto la fe como la ley queden satisfechas.",
          ],
        },
        {
          question: "¿Pueden acoger un Anand Karaj en un resort?",
          answer: [
            "Sí, allí donde el entorno pueda cumplir las exigencias del rito. El Anand Karaj se celebra en presencia del Guru Granth Sahib con un granthi experimentado, y la conducta del espacio importa.",
            "Nos remitimos por completo al granthi y a la familia sobre lo que el entorno debe ofrecer. Cuando un resort no puede honrar esas exigencias, lo decimos con claridad y buscamos un lugar que sí pueda.",
          ],
        },
        {
          question: "¿Pueden celebrar juntas familias pakistaníes e indias?",
          answer: [
            "A menudo, y de forma hermosa. Una familia musulmana pakistaní y una familia hindú india que casan a sus hijos es una de las uniones que más se nos piden.",
            "La tratamos como dos fes sostenidas con igual cuidado — un nikkah y una ceremonia hindú, dos oficiantes, un solo fin de semana — antes que como un único evento mezclado. Nuestra página de Bodas Interreligiosas profundiza en ese trabajo.",
          ],
        },
        {
          question: "¿Cuánto cuesta una boda de destino del sur de Asia en 2026?",
          answer: [
            "Un rango útil para bodas de 150–400 invitados a lo largo de dos a cuatro días es de USD 250.000 – 900.000, todo incluido, según la tradición, el destino y el número de invitados.",
            "Compartimos presupuestos transparentes y detallados en la primera consulta, con rangos por número de invitados y por los eventos que cada tradición requiere.",
          ],
        },
        {
          question: "¿Se puede mantener el halal en un resort del Caribe?",
          answer: [
            "Sí. Informamos a la cocina, confirmamos el abastecimiento certificado y organizamos una preparación separada con meses de antelación, todo bajo la guía de la familia.",
            "Cuando el suministro certificado local es limitado, abastecemos e importamos según el nivel que marca la familia, y mantenemos los menús separados cuando las tradiciones que se cruzan lo exigen.",
          ],
        },
        {
          question: "¿En qué se diferencia esto de vuestra página de Bodas Indias?",
          answer: [
            "Nuestra página de Bodas Indias es para las bodas hindúes indias — el mandap, las pheras, el pandit con quien trabajamos desde hace años.",
            "Esta página es para el resto del subcontinente: tradiciones musulmana pakistaní, sij, esrilanquesa y bangladesí, cada una sostenida como su propia fe. Si tu boda es hindú, esa página es el lugar adecuado; si cruza fes, nuestra página interreligiosa quizá también lo sea.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Una conversación privada —",
      headline: "*Comienza* tu\nboda del sur de Asia.",
      body: "Cuéntanos la tradición, la fe, las familias y una fecha aproximada. Grecia responde, personalmente, en un plazo de cinco días hábiles.",
      ctaLabel: "Solicitar una consulta privada →",
      ctaHref: staticPath("es", "/contact"),
    },
  },

  fr: {
    name: "Mariages d'Asie du Sud",
    cardEyebrow: "Asie du Sud",
    cardBlurb: "Hindou, sikh, musulman, sri-lankais, bangladais.",
    cardMeta: "Découvrir",
    intro:
      "Cérémonies hindoues, sikhes, musulmanes, sri-lankaises et bangladaises, chacune portée par des spécialistes qui ont vécu au sein de la tradition.",
    hero: {
      eyebrow: "Les Traditions · No 04",
      scriptOverline: "Un mariage de",
      headline: "tradition d'*Asie du Sud.*",
      deck: "Le registre que nous réservons au sous-continent au-delà du mandap hindou — mariages pakistanais, sikhs, sri-lankais et bangladais, chacun tenu comme sa propre foi et sa propre famille, jamais fondus en un seul. Les mariages hindous indiens ont leur propre page.",
      captionLeft: "Ayesha & Bilal · Punta Cana",
      captionCenter: "Nikkah à l'heure dorée · 2025",
      captionRight: "Plate IV",
    },
    factStrip: [
      { label: "Durée", value: "2 – 4 jours", sub: "3 – 6 événements" },
      { label: "Nombre d'invités", value: "150 – 500", sub: "Davantage sur demande" },
      { label: "Délai", value: "16 – 22 mois", sub: "Les officiants se réservent tôt" },
      { label: "Traditions tenues", value: "Pakistanais · Sikh", sub: "Sri-lankais · Bangladais" },
      { label: "Cuisine", value: "Halal en priorité", sub: "Régionale, selon la famille" },
      { label: "Langues", value: "EN · Ourdou", sub: "Pendjabi · Cingalais · Bengali" },
    ],
    overview: {
      sideEyebrow: "Les traditions",
      sideNote:
        "Quatre fois, une région. Un registre pratique de la façon dont nous accueillons les mariages pakistanais, sikhs, sri-lankais et bangladais — chacun comme lui-même.",
      headline: "Une région,\nquatre fois,\naucun *amalgame.*",
      lede: "L'Asie du Sud n'est pas un seul mariage. Un nikkah pakistanais, un Anand Karaj sikh, un Poruwa sri-lankais et un gaye holud bangladais partagent une carte et presque rien d'autre : des écritures différentes, des officiants différents, des vœux différents. Nous les tenons distincts à dessein.",
      bodyParagraphs: [
        "Cette page existe parce que le sous-continent est trop souvent réduit à un seul mot. Nos mariages hindous indiens ont leur propre page et leur propre pandit. Ce registre est pour le reste : familles musulmanes pakistanaises, familles sikhes tenant l'Anand Karaj, familles sri-lankaises au Poruwa, familles bangladaises allumant le gaye holud. Chacune est planifiée par quelqu'un qui l'a vécue de l'intérieur.",
        "Un mariage pakistanais se déroule comme une séquence : soirées de dholki et de mehndi, le nikkah où le contrat de mariage est lu et attesté, le baraat qui amène le cortège du marié, le rukhsati qui sépare la mariée de sa famille, et le walima que la famille du marié offre le lendemain. Le poids émotionnel réside dans le rukhsati : nous ne le compressons jamais.",
        "Un mariage sikh est centré sur l'Anand Karaj, célébré en présence du Guru Granth Sahib avec un granthi expérimenté. Les exigences y sont réelles et nous nous y soumettons absolument : la conduite sur les lieux, le niveau du cadre, l'ordre des lavan. Nous n'improvisons pas autour d'une foi dont nous sommes les invités.",
        "Les familles sri-lankaises et bangladaises apportent leur propre grammaire : la plateforme du Poruwa et ses rites cingalais, la chaleur de curcuma du gaye holud. Nous dotons chaque tradition d'un officiant et d'un coordinateur qui la connaissent de l'intérieur, et nous demandons à la famille, en privé, ce qui lui revient de mener et ce qui nous revient de porter.",
      ],
      pull: "« Un nikkah pakistanais, un Anand Karaj sikh, un Poruwa sri-lankais et un gaye holud bangladais partagent une carte et presque rien d'autre. Nous les tenons distincts à dessein. »",
      signatureName: "Grecia",
      signatureRole: "Fondatrice · À travers les nombreuses traditions du sous-continent",
    },
    ceremonyArc: {
      eyebrow: "Structure cérémonielle",
      headline: "Le contrat, le cortège, l'*adieu.*",
      deck: "Une trame musulmane typique d'Asie du Sud, avec les variantes tenues nommées à chaque étape. Les familles sikhes, sri-lankaises et bangladaises la remodèlent autour de leur propre foi — chaque mariage s'ajuste selon la tradition et la région.",
      steps: [
        { numeral: "I", name: "Dholki", sub: "Bangladais : gaye holud", when: "Le soir, jours avant", body: "Une soirée informelle de tambours et de chant parmi les femmes — le dholki pour les familles pakistanaises, le gaye holud illuminé de curcuma pour les bangladaises. La célébration commence bien avant le vœu." },
        { numeral: "II", name: "Mehndi", sub: "Soirée de henné", when: "La veille", body: "Mains et pieds décorés de henné minutieux, avec musique et danse. Tenu dans la plupart des traditions d'Asie du Sud, avec chants et ordre régionaux conservés par la famille." },
        { numeral: "III", name: "Nikkah", sub: "Variante sikhe : Anand Karaj", when: "Jour du mariage", body: "La cérémonie du contrat. Pour les familles musulmanes, le nikkah est lu, attesté et documenté sous la conduite de l'imam qui officie. Les familles sikhes tiennent à la place l'Anand Karaj, devant le Guru Granth Sahib avec un granthi." },
        { numeral: "IV", name: "Baraat", sub: "Le cortège", when: "Jour du mariage", body: "Le cortège du marié arrive en célébration — tambours, famille, et accueil par le côté de la mariée. Les familles sri-lankaises se rassemblent plutôt au Poruwa, la plateforme décorée où se tiennent les rites." },
        { numeral: "V", name: "Poruwa", sub: "Rite sri-lankais", when: "Jour du mariage", body: "Lorsque la famille est sri-lankaise, le couple monte sur le Poruwa pour la cérémonie cingalaise traditionnelle — la liaison des mains, les rites supervisés par l'officiant que la famille désigne." },
        { numeral: "VI", name: "Rukhsati", sub: "L'adieu", when: "Jour du mariage, tard", body: "La mariée quitte le soin de sa famille vers son nouveau foyer. Le moment le plus émouvant de la journée ; nous lui donnons tout l'espace et ne programmons jamais rien par-dessus." },
        { numeral: "VII", name: "Walima", sub: "La seconde réception", when: "Le lendemain", body: "La réception offerte par la famille du marié, le jour suivant le nikkah. Une célébration formelle qui achève le mariage aux yeux de la communauté." },
      ],
    },
    designConcepts: {
      eyebrow: "Concepts de design",
      headline: "Scènes, *moodboards.*",
      deck: "Trois directions de travail que nous avons construites plus d'une fois à travers ces traditions. Chaque mariage adapte la palette, le tissu et l'échelle du cadre.",
      cards: [
        {
          title: "Émeraude & Or",
          body: "Une scène de nikkah formelle en velours émeraude profond, or ancien et lumière chaude de bougies. Lue comme célébration sans excès — pensée tant pour la cérémonie du contrat que pour le walima.",
          palette: ["#0f3d2e", "#c89d4e", "#1c2a22", "#e8d6a0", "#f5f0e6"],
          imageKey: "concept-1",
          rows: [
            { label: "Scène / Décor", value: "Toile de velours, cadre doré" },
            { label: "Fleurs", value: "Rose · orchidée · feuillage doré" },
            { label: "Idéal pour", value: "Domaine intérieur · salle de bal" },
          ],
        },
        {
          title: "Ivoire & Souci",
          body: "Un cadre de mehndi clair et ouvert en drapé ivoire, cordes de souci et sièges au sol. Pensé pour la soirée de henné et le gaye holud — chaleureux, informel, se photographie superbement en extérieur.",
          palette: ["#f5f0e6", "#e8a843", "#c25422", "#7a3814", "#3a2a1e"],
          imageKey: "concept-2",
          rows: [
            { label: "Scène / Décor", value: "Drapé + sièges au sol" },
            { label: "Fleurs", value: "Souci · jasmin · verdure" },
            { label: "Idéal pour", value: "Jardin · cour · plage" },
          ],
        },
        {
          title: "Safran & Crème",
          body: "Un cadre sobre de Poruwa ou d'Anand Karaj en safran, pivoines ivoire et bois brut. Discrètement dévotionnel, conçu pour honorer la sainteté du rite plutôt que de décorer autour.",
          palette: ["#e0a13a", "#ebe3d3", "#a7a78b", "#d6cdb8", "#4a523d"],
          imageKey: "concept-3",
          rows: [
            { label: "Scène / Décor", value: "Plateforme de bois, fleurs basses" },
            { label: "Fleurs", value: "Pivoine · lotus · verdure" },
            { label: "Idéal pour", value: "Jardin · villa · près du sanctuaire" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocole culturel",
      headline: "Ce que nous tenons pour *sacré.*",
      deck: "Six principes sur lesquels nous ne transigeons pas. Lorsque la pratique varie d'une famille à l'autre, nous nous en remettons à l'officiant et aux aînés — non à notre propre confort.",
      items: [
        { title: "Le nikkah est attesté et documenté", body: "Le contrat de mariage est lu, attesté et enregistré sous la conduite de l'imam qui officie. Nous organisons les témoins, la documentation et l'enregistrement légal autour des exigences de l'imam — et non l'inverse." },
        { title: "L'Anand Karaj est tenu avec révérence", body: "Un Anand Karaj sikh est célébré en présence du Guru Granth Sahib avec un granthi expérimenté. La conduite sur les lieux et le niveau du cadre sont respectés absolument ; lorsqu'un détail du rite est en question, le granthi décide, et nous suivons." },
        { title: "Les cuisines halal sont briefées tôt", body: "Lorsque la famille observe le halal, la cuisine du resort est briefée et l'approvisionnement organisé des mois à l'avance. Nous confirmons la certification et la préparation avec la conduite de la famille, et gardons les menus séparés là où les traditions qui se croisent l'exigent." },
        { title: "Le rukhsati garde son espace", body: "L'adieu est le moment le plus émouvant d'un mariage pakistanais. Nous ne le compressons jamais pour le rythme et ne programmons pas un changement de prestataire par-dessus. La famille donne le ton et nous tenons la salle silencieuse." },
        { title: "Les aînés sont honorés en premier", body: "Les aînés sont salués, installés et servis avant tout souci du cortège nuptial. Les besoins alimentaires et de mobilité des invités âgés sont réglés avant qu'un menu ou un plan de salle ne soit arrêté." },
        { title: "La musique régionale est live quand c'est possible", body: "Dhol pour le baraat, musiciens dévotionnels pour les rites sacrés, chant régional pour le mehndi et le gaye holud. La musique enregistrée est bienvenue aux célébrations, mais live là où la tradition de la famille le demande." },
      ],
    },
    planning: {
      eyebrow: "Planification sur plusieurs jours",
      headline: "Un mariage de trois jours, *heure par heure.*",
      deck: "Le canevas que nous utilisons pour un mariage musulman pakistanais typique de 250 invités. Les calendriers sikh, sri-lankais et bangladais le remodèlent autour de leurs propres rites ; le soin ne change pas.",
      days: [
        {
          numeral: "I",
          dayLabel: "Jour Un",
          title: "Dholki & mehndi",
          body: "Les invités arrivent tout au long de la journée, transferts et arrivées coordonnés par l'atelier. Un dholki informel l'après-midi, puis le mehndi le soir — henné sur plusieurs stations, musique et un dîner détendu.",
          events: [
            { time: "Matin", body: "Arrivées des invités · transferts · enregistrement à l'hôtel" },
            { time: "16:00", body: "Dholki · tambours et chant · femmes" },
            { time: "18:30", body: "Cérémonie de mehndi · stations de henné · 3 heures" },
            { time: "21:00", body: "Dîner décontracté · buffet au jardin" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Jour Deux",
          title: "Nikkah, baraat & rukhsati",
          body: "Le nikkah à l'heure fixée par l'imam, lu et attesté. Le baraat amène le cortège du marié en célébration. Rites familiaux durant l'après-midi, puis le rukhsati — avec tout son espace — clôt la journée avant le dîner.",
          events: [
            { time: "11:00", body: "Préparation des mariés · suites séparées" },
            { time: "14:00", body: "Nikkah · contrat lu et attesté · 60 minutes" },
            { time: "15:30", body: "Baraat · cortège du marié · accueil" },
            { time: "17:00", body: "Rites familiaux · photographies" },
            { time: "18:30", body: "Rukhsati · l'adieu · sans hâte" },
            { time: "20:00", body: "Dîner · grande table · menu régional" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Jour Trois",
          title: "Walima & adieux",
          body: "Le walima offert par la famille du marié — la seconde réception formelle qui achève le mariage aux yeux de la communauté. Un brunch tardif pour les invités qui partent, les familles proches restant souvent un jour de plus.",
          events: [
            { time: "11:00", body: "Brunch d'adieu · au bord de la piscine" },
            { time: "19:00", body: "Cocktail du walima · la famille du marié reçoit" },
            { time: "20:30", body: "Dîner du walima · réception formelle · discours" },
            { time: "Tard", body: "Les départs commencent · transferts le lendemain matin" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilité des destinations",
      headline: "Où les mariages d'Asie du Sud *réussissent le mieux.*",
      viewAllLabel: "Voir toutes les destinations →",
      viewAllHref: staticPath("fr", "/destinations"),
      cards: [
        { rating: 5, name: "Punta Cana", sub: "Caraïbes · toute l'année", imageKey: "compat-1", destinationHref: destinationPath("fr", "punta-cana") },
        { rating: 5, name: "Tulum & Los Cabos", sub: "Mexique · novembre – avril", imageKey: "compat-2", destinationHref: destinationPath("fr", "tulum-los-cabos") },
        { rating: 4, name: "Lac de Côme", sub: "Italie · juin – septembre", imageKey: "compat-3", destinationHref: destinationPath("fr", "lake-como") },
        { rating: 4, name: "Toscane", sub: "Italie · mai – octobre", imageKey: "compat-4", destinationHref: destinationPath("fr", "tuscany") },
        { rating: 4, name: "Amalfi", sub: "Italie · mai – octobre", imageKey: "compat-5", destinationHref: destinationPath("fr", "amalfi") },
        { rating: 4, name: "Les Hamptons", sub: "New York · juin – septembre", imageKey: "compat-6", destinationHref: destinationPath("fr", "the-hamptons") },
        { rating: 3, name: "Côte d'Azur", sub: "France · juin – septembre", imageKey: "compat-7", destinationHref: destinationPath("fr", "cote-dazur") },
        { rating: 3, name: "St. Barths", sub: "Caraïbes · novembre – avril", imageKey: "compat-8", destinationHref: destinationPath("fr", "st-barths") },
      ],
    },
    guest: {
      eyebrow: "Gestion des invités",
      headline: "Le soin *pratique* de 250 invités.",
      deck: "La couche logistique que la plupart des planificateurs sous-dotent. Dans ces traditions, la foi et la famille passent d'abord — nous planifions autour des deux.",
      cells: [
        { title: "Protocole halal", body: "Lorsque la famille observe le halal, nous briefons la cuisine et confirmons l'approvisionnement et la certification des mois à l'avance. Les menus restent séparés là où les traditions qui se croisent le requièrent, et la conduite de la famille est définitive." },
        { title: "Heures de prière", body: "Les heures de prière quotidiennes sont intégrées au programme, avec un espace de prière propre et silencieux et des installations pour les ablutions. Les horaires des cérémonies sont fixés pour ne jamais entrer en conflit avec les obligations des invités pratiquants." },
        { title: "Guide pour traditions mêlées", body: "Lorsque les invités viennent de plus d'une foi — musulmane, sikhe, hindoue, chrétienne — nous envoyons des notes sur mesure pour que chacun sache à quoi s'attendre au nikkah, à l'Anand Karaj ou au Poruwa, et comment y participer avec respect." },
        { title: "Aînés & mobilité", body: "Sièges dédiés, transport séparé et un référent pour les aînés de l'équipe de l'atelier. Chambres au rez-de-chaussée pour les invités âgés, avec assistance médicale d'astreinte durant tout le week-end." },
        { title: "Voyages & hébergement", body: "Blocs de chambres en catégories premium, standard et familiale. Transferts coordonnés sur plusieurs jours d'arrivées, avec un coffret de bienvenue et le programme dans chaque chambre." },
        { title: "Communications", body: "Un groupe d'invités trois semaines à l'avance, un site dédié avec programme et codes vestimentaires, et des guides imprimés — y compris des notes d'étiquette pour chaque cérémonie dans les langues de la famille." },
      ],
    },
    related: {
      eyebrow: "Poursuivre la lecture",
      headline: "Du *journal.*",
      articles: [
        { category: "Pakistanais · Punta Cana", title: "Tenir un nikkah de destination, étape par étape", body: "Comment le contrat est lu, attesté et enregistré à l'étranger — et ce dont l'imam a besoin de notre part.", imageKey: "culture-related-1" },
        { category: "Sikh · Tradition", title: "L'Anand Karaj dans un resort : ce qu'il exige", body: "Sur le fait de tenir la cérémonie sikhe avec la révérence qu'exige le Guru Granth Sahib.", imageKey: "culture-related-2" },
        { category: "Tradition · Sri-lankais", title: "Au cœur de la cérémonie du Poruwa", body: "Un guide du rite cingalais sur plateforme et des rituels qui s'y tiennent.", imageKey: "culture-related-3" },
        { category: "Coût · Asie du Sud", title: "Ce que coûte un mariage de luxe d'Asie du Sud", body: "Budgets francs 2026 par tradition et par nombre d'invités.", imageKey: "culture-related-4" },
        { category: "Bangladais · Design", title: "Le gaye holud, en détail", body: "Sur la soirée de curcuma qui ouvre un mariage bangladais — et la manière dont nous la concevons.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("fr", "punta-cana") },
        { label: "Tulum & Los Cabos", href: destinationPath("fr", "tulum-los-cabos") },
        { label: "Lac de Côme", href: destinationPath("fr", "lake-como") },
        { label: "Les Hamptons", href: destinationPath("fr", "the-hamptons") },
      ],
      sidebarVenues: [
        { label: "Kukua Beach Club" },
        { label: "Eden Roc Cap Cana" },
        { label: "Villa Tre Ville" },
        { label: "Chileno Bay Resort" },
      ],
      sidebarCultures: [
        { label: "Mariages indiens", href: culturePath("fr", "indian-weddings") },
        { label: "Mariages arabes", href: culturePath("fr", "arab-weddings") },
        { label: "Mariages interconfessionnels", href: culturePath("fr", "interfaith-weddings") },
        { label: "Mariages juifs", href: culturePath("fr", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Questions, répondues",
      headline: "Questions *fréquentes.*",
      items: [
        {
          question: "Comment un nikkah de destination fonctionne-t-il légalement ?",
          answer: [
            "Le nikkah est le contrat religieux, lu et attesté sous la conduite de l'imam qui officie. Le mariage légal est une affaire distincte, réglée selon les lois de la destination et de votre pays d'origine.",
            "Beaucoup de couples accomplissent l'enregistrement civil chez eux avant de voyager et tiennent le nikkah à l'étranger comme cérémonie de référence pour la famille. Nous coordonnons l'imam, les témoins et la documentation pour que la foi comme la loi soient satisfaites.",
          ],
        },
        {
          question: "Pouvez-vous tenir un Anand Karaj dans un resort ?",
          answer: [
            "Oui, là où le cadre peut répondre aux exigences du rite. L'Anand Karaj se tient en présence du Guru Granth Sahib avec un granthi expérimenté, et la conduite de l'espace importe.",
            "Nous nous en remettons entièrement au granthi et à la famille sur ce que le cadre doit offrir. Lorsqu'un resort ne peut honorer ces exigences, nous le disons clairement et trouvons un lieu qui le peut.",
          ],
        },
        {
          question: "Des familles pakistanaises et indiennes peuvent-elles célébrer ensemble ?",
          answer: [
            "Souvent, et magnifiquement. Une famille musulmane pakistanaise et une famille hindoue indienne mariant leurs enfants est l'une des unions qu'on nous demande le plus.",
            "Nous la traitons comme deux fois tenues avec un soin égal — un nikkah et une cérémonie hindoue, deux officiants, un seul week-end — plutôt que comme un événement unique fondu. Notre page Mariages interconfessionnels approfondit ce travail.",
          ],
        },
        {
          question: "Combien coûte un mariage de destination d'Asie du Sud en 2026 ?",
          answer: [
            "Une fourchette utile pour des mariages de 150 à 400 invités sur deux à quatre jours est de 250 000 à 900 000 USD, tout compris, selon la tradition, la destination et le nombre d'invités.",
            "Nous partageons des budgets transparents et détaillés dès la première consultation, avec des fourchettes par nombre d'invités et par les événements que chaque tradition appelle.",
          ],
        },
        {
          question: "Le halal peut-il être maintenu dans un resort des Caraïbes ?",
          answer: [
            "Oui. Nous briefons la cuisine, confirmons un approvisionnement certifié et organisons une préparation séparée des mois à l'avance, le tout sous la conduite de la famille.",
            "Lorsque l'offre certifiée locale est limitée, nous approvisionnons et importons au niveau fixé par la famille, et gardons les menus séparés là où les traditions qui se croisent l'exigent.",
          ],
        },
        {
          question: "En quoi cela diffère-t-il de votre page Mariages indiens ?",
          answer: [
            "Notre page Mariages indiens est pour les mariages hindous indiens — le mandap, les pheras, le pandit avec qui nous travaillons depuis des années.",
            "Cette page est pour le reste du sous-continent : traditions musulmane pakistanaise, sikhe, sri-lankaise et bangladaise, chacune tenue comme sa propre foi. Si votre mariage est hindou, cette page est le bon foyer ; s'il croise des fois, notre page interconfessionnelle l'est peut-être aussi.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Une conversation privée —",
      headline: "*Commencez* votre\nmariage d'Asie du Sud.",
      body: "Dites-nous la tradition, la foi, les familles et une date approximative. Grecia vous répond, personnellement, sous cinq jours ouvrés.",
      ctaLabel: "Demander une consultation privée →",
      ctaHref: staticPath("fr", "/contact"),
    },
  },

  pt: {
    name: "Casamentos do Sul da Ásia",
    cardEyebrow: "Sul da Ásia",
    cardBlurb: "Hindu, sikh, muçulmano, cingalês, bangladechiano.",
    cardMeta: "Descobrir",
    intro:
      "Cerimónias hindus, sikhs, muçulmanas, cingalesas e bangladechianas, cada uma conduzida por especialistas que viveram dentro da tradição.",
    hero: {
      eyebrow: "As Tradições · N.º 04",
      scriptOverline: "Um casamento de",
      headline: "tradição do *sul da Ásia.*",
      deck: "O registo que reservamos para o subcontinente para além do mandap hindu — casamentos paquistaneses, sikhs, cingaleses e bangladechianos, cada um conduzido como a sua própria fé e a sua própria família, jamais diluídos num só. Os casamentos hindus indianos têm a sua própria página.",
      captionLeft: "Ayesha e Bilal · Punta Cana",
      captionCenter: "Nikkah à hora dourada · 2025",
      captionRight: "Plate IV",
    },
    factStrip: [
      { label: "Duração", value: "2 – 4 dias", sub: "3 – 6 eventos" },
      { label: "Número de convidados", value: "150 – 500", sub: "Mais, a pedido" },
      { label: "Antecedência", value: "16 – 22 meses", sub: "Os oficiantes reservam cedo" },
      { label: "Tradições conduzidas", value: "Paquistanês · Sikh", sub: "Cingalês · Bangladechiano" },
      { label: "Cozinha", value: "Halal preferencial", sub: "Regional, conforme a família" },
      { label: "Línguas", value: "EN · Urdu", sub: "Punjabi · Cingalês · Bengali" },
    ],
    overview: {
      sideEyebrow: "As tradições",
      sideNote:
        "Quatro fés, uma região. Um registo prático de como acolhemos os casamentos paquistaneses, sikhs, cingaleses e bangladechianos — cada um como ele próprio.",
      headline: "Uma região,\nquatro fés,\nnenhuma *diluição.*",
      lede: "O sul da Ásia não é um único casamento. Um nikkah paquistanês, um Anand Karaj sikh, um Poruwa cingalês e um gaye holud bangladechiano partilham um mapa e quase nada mais: escrituras diferentes, oficiantes diferentes, votos diferentes. Mantemo-los separados de propósito.",
      bodyParagraphs: [
        "Esta página existe porque o subcontinente é demasiadas vezes reduzido a uma só palavra. Os nossos casamentos hindus indianos têm a sua própria página e o seu próprio pandit. Este registo é para o resto: famílias muçulmanas paquistanesas, famílias sikhs que conduzem o Anand Karaj, famílias cingalesas no Poruwa, famílias bangladechianas que acendem o gaye holud. Cada uma é planeada por alguém que a viveu por dentro.",
        "Um casamento paquistanês decorre como uma sequência: noites de dholki e mehndi, o nikkah onde o contrato matrimonial é lido e testemunhado, o baraat que traz o cortejo do noivo, o rukhsati que despede a noiva da sua família, e o walima que a família do noivo oferece no dia seguinte. O peso emocional reside no rukhsati: nunca o comprimimos.",
        "Um casamento sikh centra-se no Anand Karaj, celebrado na presença do Guru Granth Sahib com um granthi experiente. Aqui as exigências são reais e remetemo-nos a elas em absoluto: a conduta no local, o nível do cenário, a ordem dos lavan. Não improvisamos em torno de uma fé da qual somos convidados.",
        "As famílias cingalesas e bangladechianas trazem a sua própria gramática: a plataforma do Poruwa e os seus ritos cingaleses, o calor de açafrão-da-terra do gaye holud. Dotamos cada tradição de um oficiante e de um coordenador que a conhecem por dentro, e perguntamos à família, em privado, o que lhes cabe conduzir e o que nos cabe sustentar.",
      ],
      pull: "«Um nikkah paquistanês, um Anand Karaj sikh, um Poruwa cingalês e um gaye holud bangladechiano partilham um mapa e quase nada mais. Mantemo-los separados de propósito.»",
      signatureName: "Grecia",
      signatureRole: "Fundadora · Através das muitas tradições do subcontinente",
    },
    ceremonyArc: {
      eyebrow: "Estrutura cerimonial",
      headline: "O contrato, o cortejo, a *despedida.*",
      deck: "Um arco muçulmano típico do sul da Ásia, com as variantes conduzidas nomeadas em cada passo. As famílias sikhs, cingalesas e bangladechianas remodelam-no em torno da sua própria fé — cada casamento se ajusta conforme a tradição e a região.",
      steps: [
        { numeral: "I", name: "Dholki", sub: "Bangladechiano: gaye holud", when: "À noite, dias antes", body: "Uma noite informal de tambores e canto entre as mulheres — o dholki para as famílias paquistanesas, o gaye holud iluminado de açafrão-da-terra para as bangladechianas. A celebração começa muito antes do voto." },
        { numeral: "II", name: "Mehndi", sub: "Noite de hena", when: "Na véspera", body: "Mãos e pés decorados com hena minuciosa, com música e dança. Conduzido na maioria das tradições do sul da Ásia, com cantos e ordem regionais conservados pela família." },
        { numeral: "III", name: "Nikkah", sub: "Variante sikh: Anand Karaj", when: "Dia do casamento", body: "A cerimónia do contrato. Para as famílias muçulmanas, o nikkah é lido, testemunhado e documentado sob a orientação do imame que oficia. As famílias sikhs conduzem em vez disso o Anand Karaj, perante o Guru Granth Sahib com um granthi." },
        { numeral: "IV", name: "Baraat", sub: "O cortejo", when: "Dia do casamento", body: "O cortejo do noivo chega em celebração — tambores, família, e boas-vindas pelo lado da noiva. As famílias cingalesas reúnem-se antes no Poruwa, a plataforma decorada onde se realizam os ritos." },
        { numeral: "V", name: "Poruwa", sub: "Rito cingalês", when: "Dia do casamento", body: "Quando a família é cingalesa, o casal sobe ao Poruwa para a cerimónia cingalesa tradicional — a união das mãos, os ritos supervisionados pelo oficiante que a família designa." },
        { numeral: "VI", name: "Rukhsati", sub: "A despedida", when: "Dia do casamento, ao fim", body: "A noiva deixa o cuidado da sua família rumo ao seu novo lar. O momento mais emotivo do dia; damos-lhe todo o espaço e nunca agendamos nada por cima dele." },
        { numeral: "VII", name: "Walima", sub: "A segunda receção", when: "No dia seguinte", body: "A receção oferecida pela família do noivo, no dia a seguir ao nikkah. Uma celebração formal que completa o casamento à vista da comunidade." },
      ],
    },
    designConcepts: {
      eyebrow: "Conceitos de design",
      headline: "Palcos, *moodboards.*",
      deck: "Três direções de trabalho que construímos mais de uma vez ao longo destas tradições. Cada casamento adapta a paleta, o tecido e a escala do cenário.",
      cards: [
        {
          title: "Esmeralda e Ouro",
          body: "Um palco de nikkah formal em veludo esmeralda profundo, ouro antigo e luz quente de velas. Lê-se como celebração sem excesso — pensado tanto para a cerimónia do contrato como para o walima.",
          palette: ["#0f3d2e", "#c89d4e", "#1c2a22", "#e8d6a0", "#f5f0e6"],
          imageKey: "concept-1",
          rows: [
            { label: "Palco / Decoração", value: "Pano de veludo, moldura dourada" },
            { label: "Flores", value: "Rosa · orquídea · folhagem dourada" },
            { label: "Ideal para", value: "Quinta interior · salão" },
          ],
        },
        {
          title: "Marfim e Calêndula",
          body: "Um cenário de mehndi luminoso e aberto em drapeado marfim, cordas de calêndula e assentos no chão. Pensado para a noite de hena e o gaye holud — quente, informal, fotografa-se lindamente ao ar livre.",
          palette: ["#f5f0e6", "#e8a843", "#c25422", "#7a3814", "#3a2a1e"],
          imageKey: "concept-2",
          rows: [
            { label: "Palco / Decoração", value: "Drapeado + assentos no chão" },
            { label: "Flores", value: "Calêndula · jasmim · verde" },
            { label: "Ideal para", value: "Jardim · pátio · praia" },
          ],
        },
        {
          title: "Açafrão e Creme",
          body: "Um cenário sóbrio de Poruwa ou Anand Karaj em açafrão, peónias marfim e madeira sem tratamento. Discretamente devocional, concebido para honrar a santidade do rito em vez de decorar à sua volta.",
          palette: ["#e0a13a", "#ebe3d3", "#a7a78b", "#d6cdb8", "#4a523d"],
          imageKey: "concept-3",
          rows: [
            { label: "Palco / Decoração", value: "Plataforma de madeira, flores baixas" },
            { label: "Flores", value: "Peónia · lótus · verde" },
            { label: "Ideal para", value: "Jardim · vila · junto ao santuário" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocolo cultural",
      headline: "Aquilo que temos por *sagrado.*",
      deck: "Seis princípios em que não cedemos. Quando a prática varia entre famílias, remetemo-nos ao oficiante e aos mais velhos — não à nossa própria conveniência.",
      items: [
        { title: "O nikkah é testemunhado e documentado", body: "O contrato matrimonial é lido, testemunhado e registado sob a orientação do imame que oficia. Organizamos as testemunhas, a documentação e o registo legal em torno das exigências do imame — e não o contrário." },
        { title: "O Anand Karaj é conduzido com reverência", body: "Um Anand Karaj sikh é celebrado na presença do Guru Granth Sahib com um granthi experiente. A conduta no local e o nível do cenário são respeitados em absoluto; quando algum detalhe do rito está em dúvida, decide o granthi, e nós seguimos." },
        { title: "As cozinhas halal são informadas cedo", body: "Quando a família observa o halal, a cozinha do resort é informada e o abastecimento organizado com meses de antecedência. Confirmamos a certificação e a preparação com a orientação da família, e mantemos os menus separados onde as tradições que se cruzam o exigem." },
        { title: "O rukhsati conserva o seu espaço", body: "A despedida é o momento mais emotivo de um casamento paquistanês. Nunca o comprimimos por questões de ritmo nem agendamos uma troca de fornecedor por cima dele. A família marca o tom e nós mantemos a sala em silêncio." },
        { title: "Os mais velhos são honrados primeiro", body: "Os mais velhos são saudados, sentados e servidos antes de qualquer assunto do cortejo nupcial. As necessidades alimentares e de mobilidade dos convidados idosos são resolvidas antes de se fechar um menu ou uma planta de sala." },
        { title: "A música regional é ao vivo sempre que possível", body: "Dhol para o baraat, músicos devocionais para os ritos sagrados, canto regional para o mehndi e o gaye holud. A música gravada é bem-vinda nas celebrações, mas ao vivo onde a tradição da família o pede." },
      ],
    },
    planning: {
      eyebrow: "Planeamento de vários dias",
      headline: "Um casamento de três dias, *hora a hora.*",
      deck: "O esquema que usamos para um casamento muçulmano paquistanês típico de 250 convidados. Os calendários sikh, cingalês e bangladechiano remodelam-no em torno dos seus próprios ritos; o cuidado não muda.",
      days: [
        {
          numeral: "I",
          dayLabel: "Dia Um",
          title: "Dholki e mehndi",
          body: "Os convidados chegam ao longo do dia, com transferes e check-ins coordenados pelo ateliê. Um dholki informal à tarde e depois o mehndi à noite — hena em várias estações, música e um jantar descontraído.",
          events: [
            { time: "Manhã", body: "Chegadas de convidados · transferes · check-in no hotel" },
            { time: "16:00", body: "Dholki · tambores e canto · mulheres" },
            { time: "18:30", body: "Cerimónia de mehndi · estações de hena · 3 horas" },
            { time: "21:00", body: "Jantar informal · bufete no jardim" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Dia Dois",
          title: "Nikkah, baraat e rukhsati",
          body: "O nikkah à hora que o imame fixa, lido e testemunhado. O baraat traz o cortejo do noivo em celebração. Ritos familiares pela tarde e depois o rukhsati — com todo o seu espaço — encerra o dia antes do jantar.",
          events: [
            { time: "11:00", body: "Preparação dos noivos · suites separadas" },
            { time: "14:00", body: "Nikkah · contrato lido e testemunhado · 60 minutos" },
            { time: "15:30", body: "Baraat · cortejo do noivo · boas-vindas" },
            { time: "17:00", body: "Ritos familiares · fotografias" },
            { time: "18:30", body: "Rukhsati · a despedida · sem pressa" },
            { time: "20:00", body: "Jantar · mesa comprida · menu regional" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Dia Três",
          title: "Walima e despedidas",
          body: "O walima oferecido pela família do noivo — a segunda receção formal que completa o casamento à vista da comunidade. Um brunch tardio para os convidados que partem, e as famílias próximas ficam muitas vezes mais um dia.",
          events: [
            { time: "11:00", body: "Brunch de despedida · junto à piscina" },
            { time: "19:00", body: "Cocktail do walima · oferece a família do noivo" },
            { time: "20:30", body: "Jantar do walima · receção formal · discursos" },
            { time: "Ao fim do dia", body: "Começam as partidas · transferes na manhã seguinte" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilidade de destino",
      headline: "Onde os casamentos do sul da Ásia *funcionam melhor.*",
      viewAllLabel: "Ver todos os destinos →",
      viewAllHref: staticPath("pt", "/destinations"),
      cards: [
        { rating: 5, name: "Punta Cana", sub: "Caraíbas · todo o ano", imageKey: "compat-1", destinationHref: destinationPath("pt", "punta-cana") },
        { rating: 5, name: "Tulum e Los Cabos", sub: "México · novembro – abril", imageKey: "compat-2", destinationHref: destinationPath("pt", "tulum-los-cabos") },
        { rating: 4, name: "Lago de Como", sub: "Itália · junho – setembro", imageKey: "compat-3", destinationHref: destinationPath("pt", "lake-como") },
        { rating: 4, name: "Toscana", sub: "Itália · maio – outubro", imageKey: "compat-4", destinationHref: destinationPath("pt", "tuscany") },
        { rating: 4, name: "Amalfi", sub: "Itália · maio – outubro", imageKey: "compat-5", destinationHref: destinationPath("pt", "amalfi") },
        { rating: 4, name: "Os Hamptons", sub: "Nova Iorque · junho – setembro", imageKey: "compat-6", destinationHref: destinationPath("pt", "the-hamptons") },
        { rating: 3, name: "Costa Azul", sub: "França · junho – setembro", imageKey: "compat-7", destinationHref: destinationPath("pt", "cote-dazur") },
        { rating: 3, name: "St. Barths", sub: "Caraíbas · novembro – abril", imageKey: "compat-8", destinationHref: destinationPath("pt", "st-barths") },
      ],
    },
    guest: {
      eyebrow: "Gestão de convidados",
      headline: "O cuidado *prático* de 250 convidados.",
      deck: "A camada logística que a maioria dos planeadores subdota. Nestas tradições, a fé e a família vêm primeiro — planeamos em torno de ambas.",
      cells: [
        { title: "Protocolo halal", body: "Quando a família observa o halal, informamos a cozinha e confirmamos o abastecimento e a certificação com meses de antecedência. Os menus mantêm-se separados onde as tradições que se cruzam o necessitam, e a orientação da família é definitiva." },
        { title: "Horários de oração", body: "Os horários diários de oração são integrados no programa, com um espaço de oração limpo e silencioso e instalações para o wudu. As horas das cerimónias são fixadas para nunca colidirem com as obrigações dos convidados praticantes." },
        { title: "Orientação para tradições mistas", body: "Quando os convidados vêm de mais de uma fé — muçulmana, sikh, hindu, cristã — enviamos notas à medida para que cada um saiba o que esperar no nikkah, no Anand Karaj ou no Poruwa, e como participar com respeito." },
        { title: "Mais velhos e mobilidade", body: "Lugares dedicados, transporte separado e um elo de ligação para os mais velhos da equipa do ateliê. Quartos no rés-do-chão para os convidados idosos, com assistência médica de prevenção durante todo o fim de semana." },
        { title: "Viagens e alojamento", body: "Blocos de quartos em categorias premium, padrão e familiar. Transferes coordenados ao longo de vários dias de chegadas, com um pacote de boas-vindas e o programa em cada quarto." },
        { title: "Comunicações", body: "Um grupo de convidados três semanas antes, um site dedicado com programa e códigos de vestuário, e guias impressos — incluindo notas de etiqueta para cada cerimónia nas línguas da família." },
      ],
    },
    related: {
      eyebrow: "Continuar a ler",
      headline: "Do *diário.*",
      articles: [
        { category: "Paquistanês · Punta Cana", title: "Conduzir um nikkah de destino, passo a passo", body: "Como o contrato é lido, testemunhado e registado no estrangeiro — e o que o imame precisa de nós.", imageKey: "culture-related-1" },
        { category: "Sikh · Tradição", title: "O Anand Karaj num resort: o que exige", body: "Sobre conduzir a cerimónia sikh com a reverência que o Guru Granth Sahib exige.", imageKey: "culture-related-2" },
        { category: "Tradição · Cingalês", title: "Dentro da cerimónia do Poruwa", body: "Um guia do rito cingalês sobre plataforma e dos rituais nele realizados.", imageKey: "culture-related-3" },
        { category: "Custo · Sul da Ásia", title: "Quanto custa um casamento de luxo do sul da Ásia", body: "Orçamentos francos de 2026 por tradição e número de convidados.", imageKey: "culture-related-4" },
        { category: "Bangladechiano · Design", title: "O gaye holud, em detalhe", body: "Sobre a noite de açafrão-da-terra que abre um casamento bangladechiano — e como o concebemos.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("pt", "punta-cana") },
        { label: "Tulum e Los Cabos", href: destinationPath("pt", "tulum-los-cabos") },
        { label: "Lago de Como", href: destinationPath("pt", "lake-como") },
        { label: "Os Hamptons", href: destinationPath("pt", "the-hamptons") },
      ],
      sidebarVenues: [
        { label: "Kukua Beach Club" },
        { label: "Eden Roc Cap Cana" },
        { label: "Villa Tre Ville" },
        { label: "Chileno Bay Resort" },
      ],
      sidebarCultures: [
        { label: "Casamentos indianos", href: culturePath("pt", "indian-weddings") },
        { label: "Casamentos árabes", href: culturePath("pt", "arab-weddings") },
        { label: "Casamentos inter-religiosos", href: culturePath("pt", "interfaith-weddings") },
        { label: "Casamentos judaicos", href: culturePath("pt", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Perguntas, respondidas",
      headline: "Perguntas *frequentes.*",
      items: [
        {
          question: "Como funciona legalmente um nikkah de destino?",
          answer: [
            "O nikkah é o contrato religioso, lido e testemunhado sob a orientação do imame que oficia. O casamento legal é um assunto à parte, resolvido segundo as leis do destino e do seu país de origem.",
            "Muitos casais completam o registo civil em casa antes de viajar e conduzem o nikkah no estrangeiro como a cerimónia de referência para a família. Coordenamos o imame, as testemunhas e a documentação para que tanto a fé como a lei fiquem satisfeitas.",
          ],
        },
        {
          question: "Podem conduzir um Anand Karaj num resort?",
          answer: [
            "Sim, onde o cenário possa cumprir as exigências do rito. O Anand Karaj realiza-se na presença do Guru Granth Sahib com um granthi experiente, e a conduta do espaço importa.",
            "Remetemo-nos por completo ao granthi e à família sobre o que o cenário deve oferecer. Quando um resort não pode honrar essas exigências, dizemo-lo com clareza e encontramos um lugar que o possa.",
          ],
        },
        {
          question: "Famílias paquistanesas e indianas podem celebrar juntas?",
          answer: [
            "Muitas vezes, e de forma bela. Uma família muçulmana paquistanesa e uma família hindu indiana a casar os seus filhos é uma das uniões que mais nos pedem.",
            "Tratamo-la como duas fés conduzidas com igual cuidado — um nikkah e uma cerimónia hindu, dois oficiantes, um só fim de semana — em vez de um único evento fundido. A nossa página de Casamentos Inter-religiosos aprofunda esse trabalho.",
          ],
        },
        {
          question: "Quanto custa um casamento de destino do sul da Ásia em 2026?",
          answer: [
            "Um intervalo útil para casamentos de 150 a 400 convidados ao longo de dois a quatro dias é de USD 250.000 – 900.000, tudo incluído, conforme a tradição, o destino e o número de convidados.",
            "Partilhamos orçamentos transparentes e detalhados na primeira consulta, com intervalos por número de convidados e pelos eventos que cada tradição exige.",
          ],
        },
        {
          question: "Pode manter-se o halal num resort das Caraíbas?",
          answer: [
            "Sim. Informamos a cozinha, confirmamos o abastecimento certificado e organizamos uma preparação separada com meses de antecedência, tudo sob a orientação da família.",
            "Quando o fornecimento certificado local é limitado, abastecemos e importamos ao nível que a família define, e mantemos os menus separados onde as tradições que se cruzam o exigem.",
          ],
        },
        {
          question: "Em que difere isto da vossa página de Casamentos Indianos?",
          answer: [
            "A nossa página de Casamentos Indianos é para os casamentos hindus indianos — o mandap, as pheras, o pandit com quem trabalhamos há anos.",
            "Esta página é para o resto do subcontinente: tradições muçulmana paquistanesa, sikh, cingalesa e bangladechiana, cada uma conduzida como a sua própria fé. Se o seu casamento é hindu, essa página é o lar certo; se cruza fés, a nossa página inter-religiosa talvez também o seja.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Uma conversa privada —",
      headline: "*Comece* o seu\ncasamento do sul da Ásia.",
      body: "Diga-nos a tradição, a fé, as famílias e uma data aproximada. Grecia responde, pessoalmente, no prazo de cinco dias úteis.",
      ctaLabel: "Solicitar uma consulta privada →",
      ctaHref: staticPath("pt", "/contact"),
    },
  },

  de: {
    name: "Südasiatische Hochzeiten",
    cardEyebrow: "Südasiatisch",
    cardBlurb: "Hinduistisch, sikhistisch, muslimisch, sri-lankisch, bangladeschisch.",
    cardMeta: "Entdecken",
    intro:
      "Hinduistische, sikhistische, muslimische, sri-lankische und bangladeschische Zeremonien, jede getragen von Spezialisten, die in der Tradition gelebt haben.",
    hero: {
      eyebrow: "Die Traditionen · Nr. 04",
      scriptOverline: "Eine Hochzeit von",
      headline: "südasiatischer *Tradition.*",
      deck: "Das Register, das wir für den Subkontinent jenseits des hinduistischen Mandap führen — pakistanische, sikhistische, sri-lankische und bangladeschische Hochzeiten, jede getragen als ihr eigener Glaube und ihre eigene Familie, niemals zu einem verschwommen. Hinduistische indische Hochzeiten haben ihre eigene Seite.",
      captionLeft: "Ayesha & Bilal · Punta Cana",
      captionCenter: "Nikkah zur goldenen Stunde · 2025",
      captionRight: "Plate IV",
    },
    factStrip: [
      { label: "Dauer", value: "2 – 4 Tage", sub: "3 – 6 Anlässe" },
      { label: "Gästezahl", value: "150 – 500", sub: "Mehr auf Anfrage" },
      { label: "Vorlauf", value: "16 – 22 Monate", sub: "Geistliche buchen früh" },
      { label: "Getragene Traditionen", value: "Pakistanisch · Sikh", sub: "Sri-lankisch · Bangladeschisch" },
      { label: "Küche", value: "Halal bevorzugt", sub: "Regional, je nach Familie" },
      { label: "Sprachen", value: "EN · Urdu", sub: "Punjabi · Singhalesisch · Bengali" },
    ],
    overview: {
      sideEyebrow: "Die Traditionen",
      sideNote:
        "Vier Glaubensrichtungen, eine Region. Ein praktisches Register, wie wir pakistanische, sikhistische, sri-lankische und bangladeschische Hochzeiten ausrichten — jede als sich selbst.",
      headline: "Eine Region,\nvier Glauben,\nkeine *Verschwommenheit.*",
      lede: "Südasien ist nicht eine Hochzeit. Ein pakistanisches Nikkah, ein sikhistisches Anand Karaj, ein sri-lankisches Poruwa und ein bangladeschisches gaye holud teilen eine Landkarte und fast nichts sonst: andere Schriften, andere Geistliche, andere Gelübde. Wir halten sie bewusst auseinander.",
      bodyParagraphs: [
        "Diese Seite existiert, weil der Subkontinent allzu oft auf ein einziges Wort reduziert wird. Unsere hinduistischen indischen Hochzeiten haben ihre eigene Seite und ihren eigenen Pandit. Dieses Register ist für die übrigen: muslimische pakistanische Familien, sikhistische Familien, die das Anand Karaj halten, sri-lankische Familien am Poruwa, bangladeschische Familien, die das gaye holud entzünden. Jede wird von jemandem geplant, der sie von innen gelebt hat.",
        "Eine pakistanische Hochzeit verläuft als Abfolge: dholki- und mehndi-Abende, das Nikkah, bei dem der Ehevertrag verlesen und bezeugt wird, der baraat, der die Begleitung des Bräutigams bringt, der rukhsati, der die Braut von ihrer Familie verabschiedet, und das walima, das die Familie des Bräutigams am Folgetag ausrichtet. Das emotionale Gewicht liegt im rukhsati — wir verkürzen ihn niemals.",
        "Eine sikhistische Hochzeit ist auf das Anand Karaj zentriert, vollzogen in Gegenwart des Guru Granth Sahib mit einem erfahrenen granthi. Die Anforderungen sind hier real, und wir fügen uns ihnen absolut: das Verhalten am Ort, das Niveau des Rahmens, die Ordnung der lavan. Wir improvisieren nicht um einen Glauben herum, in dem wir Gäste sind.",
        "Sri-lankische und bangladeschische Familien bringen ihre eigene Grammatik mit: die Poruwa-Plattform und ihre singhalesischen Riten, die Kurkuma-Wärme des gaye holud. Wir besetzen jede Tradition mit einem Geistlichen und einem Koordinator, die sie von innen kennen, und fragen die Familie im Vertrauen, was ihnen zu führen zusteht und was uns zu tragen obliegt.",
      ],
      pull: "„Ein pakistanisches Nikkah, ein sikhistisches Anand Karaj, ein sri-lankisches Poruwa und ein bangladeschisches gaye holud teilen eine Landkarte und fast nichts sonst. Wir halten sie bewusst auseinander.“",
      signatureName: "Grecia",
      signatureRole: "Gründerin · Über die vielen Traditionen des Subkontinents hinweg",
    },
    ceremonyArc: {
      eyebrow: "Zeremonienstruktur",
      headline: "Der Vertrag, der Zug, der *Abschied.*",
      deck: "Ein typischer muslimischer südasiatischer Bogen, mit den getragenen Varianten bei jedem Schritt benannt. Sikhistische, sri-lankische und bangladeschische Familien formen ihn um ihren eigenen Glauben — jede Hochzeit passt sich nach Tradition und Region an.",
      steps: [
        { numeral: "I", name: "Dholki", sub: "Bangladeschisch: gaye holud", when: "Abends, Tage zuvor", body: "Ein zwangloser Abend mit Trommeln und Gesang unter den Frauen — der dholki für pakistanische Familien, das kurkuma-erleuchtete gaye holud für bangladeschische. Die Feier beginnt lange vor dem Gelübde." },
        { numeral: "II", name: "Mehndi", sub: "Henna-Abend", when: "Am Vorabend", body: "Hände und Füße mit kunstvollem Henna verziert, mit Musik und Tanz. In den meisten südasiatischen Traditionen gehalten, mit regionalen Liedern und einer von der Familie bewahrten Ordnung." },
        { numeral: "III", name: "Nikkah", sub: "Sikh-Variante: Anand Karaj", when: "Hochzeitstag", body: "Die Vertragszeremonie. Bei muslimischen Familien wird das Nikkah unter Anleitung des amtierenden Imam verlesen, bezeugt und dokumentiert. Sikhistische Familien halten stattdessen das Anand Karaj, vor dem Guru Granth Sahib mit einem granthi." },
        { numeral: "IV", name: "Baraat", sub: "Der Zug", when: "Hochzeitstag", body: "Die Begleitung des Bräutigams trifft festlich ein — Trommeln, Familie und Empfang durch die Seite der Braut. Sri-lankische Familien versammeln sich stattdessen am Poruwa, der geschmückten Plattform, auf der die Riten gehalten werden." },
        { numeral: "V", name: "Poruwa", sub: "Sri-lankischer Ritus", when: "Hochzeitstag", body: "Ist die Familie sri-lankisch, besteigt das Paar das Poruwa für die traditionelle singhalesische Zeremonie — das Binden der Hände, die Riten unter Aufsicht des von der Familie benannten Geistlichen." },
        { numeral: "VI", name: "Rukhsati", sub: "Der Abschied", when: "Hochzeitstag, spät", body: "Die Braut verlässt die Obhut ihrer Familie hin zu ihrem neuen Zuhause. Der bewegendste Augenblick des Tages; wir geben ihm allen Raum und legen niemals etwas darüber." },
        { numeral: "VII", name: "Walima", sub: "Der zweite Empfang", when: "Am Folgetag", body: "Der von der Familie des Bräutigams ausgerichtete Empfang, am Tag nach dem Nikkah. Eine förmliche Feier, die die Ehe vor den Augen der Gemeinschaft vollendet." },
      ],
    },
    designConcepts: {
      eyebrow: "Designkonzepte",
      headline: "Bühnen, *Moodboards.*",
      deck: "Drei Arbeitsrichtungen, die wir über diese Traditionen hinweg mehr als einmal gebaut haben. Jede Hochzeit passt Palette, Stoff und den Maßstab des Rahmens an.",
      cards: [
        {
          title: "Smaragd & Gold",
          body: "Eine förmliche Nikkah-Bühne in tiefem Smaragdsamt, antikem Gold und warmem Kerzenlicht. Liest sich als Feier ohne Übermaß — gedacht für die Vertragszeremonie wie für das walima.",
          palette: ["#0f3d2e", "#c89d4e", "#1c2a22", "#e8d6a0", "#f5f0e6"],
          imageKey: "concept-1",
          rows: [
            { label: "Bühne / Dekor", value: "Samtvorhang, goldener Rahmen" },
            { label: "Floristik", value: "Rose · Orchidee · goldenes Laub" },
            { label: "Am besten für", value: "Anwesen innen · Ballsaal" },
          ],
        },
        {
          title: "Elfenbein & Ringelblume",
          body: "Ein helles, offenes Mehndi-Setting in elfenbeinfarbenem Drapée, Ringelblumenketten und Bodensitzen. Gedacht für den Henna-Abend und das gaye holud — warm, zwanglos, fotografiert sich im Freien wunderschön.",
          palette: ["#f5f0e6", "#e8a843", "#c25422", "#7a3814", "#3a2a1e"],
          imageKey: "concept-2",
          rows: [
            { label: "Bühne / Dekor", value: "Drapée + Bodensitze" },
            { label: "Floristik", value: "Ringelblume · Jasmin · Grün" },
            { label: "Am besten für", value: "Garten · Innenhof · Strand" },
          ],
        },
        {
          title: "Safran & Creme",
          body: "Ein zurückhaltendes Poruwa- oder Anand-Karaj-Setting in Safran, elfenbeinfarbenen Pfingstrosen und unbehandeltem Holz. Leise andächtig, gestaltet, um die Heiligkeit des Ritus zu ehren, statt um ihn herum zu dekorieren.",
          palette: ["#e0a13a", "#ebe3d3", "#a7a78b", "#d6cdb8", "#4a523d"],
          imageKey: "concept-3",
          rows: [
            { label: "Bühne / Dekor", value: "Holzplattform, niedrige Floristik" },
            { label: "Floristik", value: "Pfingstrose · Lotus · Grün" },
            { label: "Am besten für", value: "Garten · Villa · nahe dem Heiligtum" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Kulturelles Protokoll",
      headline: "Was uns *heilig* ist.",
      deck: "Sechs Grundsätze, bei denen wir keine Kompromisse machen. Wo die Praxis zwischen Familien variiert, fügen wir uns dem Geistlichen und den Ältesten — nicht unserer eigenen Bequemlichkeit.",
      items: [
        { title: "Das Nikkah wird bezeugt und dokumentiert", body: "Der Ehevertrag wird unter Anleitung des amtierenden Imam verlesen, bezeugt und festgehalten. Wir arrangieren die Zeugen, die Dokumentation und die rechtliche Registrierung um die Anforderungen des Imam herum — und nicht umgekehrt." },
        { title: "Das Anand Karaj wird mit Ehrfurcht gehalten", body: "Ein sikhistisches Anand Karaj wird in Gegenwart des Guru Granth Sahib mit einem erfahrenen granthi vollzogen. Das Verhalten am Ort und das Niveau des Rahmens werden absolut respektiert; ist ein Detail des Ritus fraglich, entscheidet der granthi, und wir folgen." },
        { title: "Halal-Küchen werden früh eingewiesen", body: "Beachtet die Familie das Halal, wird die Resortküche eingewiesen und die Beschaffung Monate im Voraus arrangiert. Wir bestätigen Zertifizierung und Zubereitung unter Anleitung der Familie und halten die Menüs getrennt, wo sich überschneidende Traditionen es verlangen." },
        { title: "Der Rukhsati behält seinen Raum", body: "Der Abschied ist der bewegendste Augenblick einer pakistanischen Hochzeit. Wir verkürzen ihn nie aus Zeitgründen und legen keinen Dienstleisterwechsel darüber. Die Familie gibt den Ton an, und wir halten den Raum still." },
        { title: "Die Ältesten werden zuerst geehrt", body: "Die Ältesten werden begrüßt, platziert und bedient, bevor irgendein Anliegen der Hochzeitsgesellschaft kommt. Ernährungs- und Mobilitätsbedürfnisse betagter Gäste werden geklärt, bevor ein Menü oder ein Saalplan festgelegt wird." },
        { title: "Regionale Musik ist live, wo möglich", body: "Dhol für den baraat, andächtige Musiker für die heiligen Riten, regionaler Gesang für das mehndi und das gaye holud. Aufgenommene Musik ist bei den Feiern willkommen, aber live, wo die Tradition der Familie es verlangt." },
      ],
    },
    planning: {
      eyebrow: "Mehrtägige Planung",
      headline: "Eine dreitägige Hochzeit, *Stunde für Stunde.*",
      deck: "Der Plan, den wir für eine typische muslimische pakistanische Hochzeit mit 250 Gästen verwenden. Sikhistische, sri-lankische und bangladeschische Kalender formen ihn um ihre eigenen Riten; die Sorgfalt bleibt gleich.",
      days: [
        {
          numeral: "I",
          dayLabel: "Tag Eins",
          title: "Dholki & mehndi",
          body: "Die Gäste treffen über den Tag verteilt ein, Transfers und Check-ins vom Atelier koordiniert. Ein zwangloser dholki am Nachmittag, dann das mehndi am Abend — Henna an mehreren Stationen, Musik und ein entspanntes Abendessen.",
          events: [
            { time: "Morgens", body: "Ankünfte der Gäste · Transfers · Hotel-Check-in" },
            { time: "16:00", body: "Dholki · Trommeln und Gesang · Frauen" },
            { time: "18:30", body: "Mehndi-Zeremonie · Henna-Stationen · 3 Stunden" },
            { time: "21:00", body: "Lockeres Abendessen · Gartenbuffet" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Tag Zwei",
          title: "Nikkah, baraat & rukhsati",
          body: "Das Nikkah zur vom Imam gesetzten Zeit, verlesen und bezeugt. Der baraat bringt die Begleitung des Bräutigams festlich. Familienriten über den Nachmittag, dann schließt der rukhsati — mit vollem Raum — den Tag vor dem Abendessen.",
          events: [
            { time: "11:00", body: "Vorbereitung von Braut und Bräutigam · getrennte Suiten" },
            { time: "14:00", body: "Nikkah · Vertrag verlesen und bezeugt · 60 Minuten" },
            { time: "15:30", body: "Baraat · Zug des Bräutigams · Empfang" },
            { time: "17:00", body: "Familienriten · Fotografien" },
            { time: "18:30", body: "Rukhsati · der Abschied · ohne Eile" },
            { time: "20:00", body: "Abendessen · lange Tafel · regionales Menü" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Tag Drei",
          title: "Walima & Abschiede",
          body: "Das von der Familie des Bräutigams ausgerichtete walima — der förmliche zweite Empfang, der die Ehe vor den Augen der Gemeinschaft vollendet. Ein später Brunch für abreisende Gäste, wobei die engsten Familien oft einen Tag länger bleiben.",
          events: [
            { time: "11:00", body: "Abschieds-Brunch · am Pool" },
            { time: "19:00", body: "Walima-Aperitif · die Familie des Bräutigams lädt ein" },
            { time: "20:30", body: "Walima-Dinner · förmlicher Empfang · Reden" },
            { time: "Spät", body: "Abreisen beginnen · Transfers am nächsten Morgen" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Reiseziel-Kompatibilität",
      headline: "Wo südasiatische Hochzeiten *am besten gelingen.*",
      viewAllLabel: "Alle Reiseziele ansehen →",
      viewAllHref: staticPath("de", "/destinations"),
      cards: [
        { rating: 5, name: "Punta Cana", sub: "Karibik · ganzjährig", imageKey: "compat-1", destinationHref: destinationPath("de", "punta-cana") },
        { rating: 5, name: "Tulum & Los Cabos", sub: "Mexiko · November – April", imageKey: "compat-2", destinationHref: destinationPath("de", "tulum-los-cabos") },
        { rating: 4, name: "Comer See", sub: "Italien · Juni – September", imageKey: "compat-3", destinationHref: destinationPath("de", "lake-como") },
        { rating: 4, name: "Toskana", sub: "Italien · Mai – Oktober", imageKey: "compat-4", destinationHref: destinationPath("de", "tuscany") },
        { rating: 4, name: "Amalfi", sub: "Italien · Mai – Oktober", imageKey: "compat-5", destinationHref: destinationPath("de", "amalfi") },
        { rating: 4, name: "Die Hamptons", sub: "New York · Juni – September", imageKey: "compat-6", destinationHref: destinationPath("de", "the-hamptons") },
        { rating: 3, name: "Côte d'Azur", sub: "Frankreich · Juni – September", imageKey: "compat-7", destinationHref: destinationPath("de", "cote-dazur") },
        { rating: 3, name: "St. Barths", sub: "Karibik · November – April", imageKey: "compat-8", destinationHref: destinationPath("de", "st-barths") },
      ],
    },
    guest: {
      eyebrow: "Gästemanagement",
      headline: "Die *praktische* Sorge um 250 Gäste.",
      deck: "Die logistische Ebene, die die meisten Planer unterbesetzen. In diesen Traditionen kommen Glaube und Familie zuerst — wir planen um beide herum.",
      cells: [
        { title: "Halal-Protokoll", body: "Beachtet die Familie das Halal, weisen wir die Küche ein und bestätigen Beschaffung und Zertifizierung Monate im Voraus. Menüs bleiben getrennt, wo sich überschneidende Traditionen es brauchen, und die Anleitung der Familie ist endgültig." },
        { title: "Gebetszeiten", body: "Die täglichen Gebetszeiten werden in den Ablauf eingebaut, mit einem sauberen, stillen Gebetsraum und Einrichtungen für das wudu. Die Zeremonienzeiten werden so gesetzt, dass sie nie mit den Pflichten praktizierender Gäste kollidieren." },
        { title: "Hinweise für gemischte Traditionen", body: "Kommen Gäste aus mehr als einem Glauben — muslimisch, sikhistisch, hinduistisch, christlich — senden wir maßgeschneiderte Hinweise, damit jeder weiß, was ihn beim Nikkah, beim Anand Karaj oder beim Poruwa erwartet und wie er mit Anstand teilnimmt." },
        { title: "Ältere & Mobilität", body: "Eigene Plätze, separater Transport und ein Älteren-Ansprechpartner aus dem Atelier-Team. Zimmer im Erdgeschoss für betagte Gäste, mit ärztlicher Rufbereitschaft über das gesamte Wochenende." },
        { title: "Reise & Unterkunft", body: "Zimmerkontingente in den Stufen Premium, Standard und Familie. Transfers über mehrere Anreisetage koordiniert, mit einem Willkommenspaket und dem Ablauf in jedem Zimmer." },
        { title: "Kommunikation", body: "Eine Gästegruppe drei Wochen im Voraus, eine eigene Hochzeitsseite mit Ablauf und Kleiderordnung sowie gedruckte Leitfäden — samt Etikette-Hinweisen zu jeder Zeremonie in den Sprachen der Familie." },
      ],
    },
    related: {
      eyebrow: "Weiterlesen",
      headline: "Aus dem *Journal.*",
      articles: [
        { category: "Pakistanisch · Punta Cana", title: "Ein Destination-Nikkah halten, Schritt für Schritt", body: "Wie der Vertrag im Ausland verlesen, bezeugt und registriert wird — und was der Imam von uns braucht.", imageKey: "culture-related-1" },
        { category: "Sikh · Tradition", title: "Das Anand Karaj im Resort: Was es verlangt", body: "Über das Halten der sikhistischen Zeremonie mit der Ehrfurcht, die der Guru Granth Sahib verlangt.", imageKey: "culture-related-2" },
        { category: "Tradition · Sri-lankisch", title: "Im Inneren der Poruwa-Zeremonie", body: "Ein Leitfaden zum singhalesischen Plattform-Ritus und den darauf gehaltenen Ritualen.", imageKey: "culture-related-3" },
        { category: "Kosten · Südasien", title: "Was eine luxuriöse südasiatische Hochzeit kostet", body: "Offene 2026er Budgets nach Tradition und Gästezahl.", imageKey: "culture-related-4" },
        { category: "Bangladeschisch · Design", title: "Gaye Holud, im Detail", body: "Über den Kurkuma-Abend, der eine bangladeschische Hochzeit eröffnet — und wie wir ihn gestalten.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("de", "punta-cana") },
        { label: "Tulum & Los Cabos", href: destinationPath("de", "tulum-los-cabos") },
        { label: "Comer See", href: destinationPath("de", "lake-como") },
        { label: "Die Hamptons", href: destinationPath("de", "the-hamptons") },
      ],
      sidebarVenues: [
        { label: "Kukua Beach Club" },
        { label: "Eden Roc Cap Cana" },
        { label: "Villa Tre Ville" },
        { label: "Chileno Bay Resort" },
      ],
      sidebarCultures: [
        { label: "Indische Hochzeiten", href: culturePath("de", "indian-weddings") },
        { label: "Arabische Hochzeiten", href: culturePath("de", "arab-weddings") },
        { label: "Interreligiöse Hochzeiten", href: culturePath("de", "interfaith-weddings") },
        { label: "Jüdische Hochzeiten", href: culturePath("de", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Fragen, beantwortet",
      headline: "Häufig *gefragt.*",
      items: [
        {
          question: "Wie funktioniert ein Destination-Nikkah rechtlich?",
          answer: [
            "Das Nikkah ist der religiöse Vertrag, verlesen und bezeugt unter Anleitung des amtierenden Imam. Die rechtliche Eheschließung ist eine eigene Angelegenheit, geregelt nach den Gesetzen des Reiseziels und Ihres Heimatlandes.",
            "Viele Paare vollziehen die zivile Registrierung zu Hause vor der Reise und halten das Nikkah im Ausland als die für die Familie maßgebliche Zeremonie. Wir koordinieren Imam, Zeugen und Dokumentation, damit Glaube wie Gesetz erfüllt sind.",
          ],
        },
        {
          question: "Können Sie ein Anand Karaj in einem Resort halten?",
          answer: [
            "Ja, wo der Rahmen die Anforderungen des Ritus erfüllen kann. Das Anand Karaj wird in Gegenwart des Guru Granth Sahib mit einem erfahrenen granthi gehalten, und das Verhalten des Raumes ist wichtig.",
            "Wir fügen uns ganz dem granthi und der Familie darin, was der Rahmen bieten muss. Kann ein Resort diese Anforderungen nicht erfüllen, sagen wir es klar und finden einen Ort, der es kann.",
          ],
        },
        {
          question: "Können pakistanische und indische Familien zusammen feiern?",
          answer: [
            "Oft, und wunderschön. Eine muslimische pakistanische Familie und eine hinduistische indische Familie, die ihre Kinder verheiraten, ist eine der Verbindungen, um die wir am häufigsten gebeten werden.",
            "Wir behandeln sie als zwei mit gleicher Sorgfalt gehaltene Glauben — ein Nikkah und eine hinduistische Zeremonie, zwei Geistliche, ein Wochenende — statt als ein einziges verschmolzenes Ereignis. Unsere Seite zu interreligiösen Hochzeiten geht tiefer auf diese Arbeit ein.",
          ],
        },
        {
          question: "Was kostet eine südasiatische Destination-Hochzeit 2026?",
          answer: [
            "Ein nützlicher Bereich für Hochzeiten mit 150–400 Gästen über zwei bis vier Tage liegt bei USD 250.000 – 900.000, alles inklusive, je nach Tradition, Reiseziel und Gästezahl.",
            "Wir teilen im ersten Gespräch transparente, nach Posten aufgeschlüsselte Budgets, mit Bereichen nach Gästezahl und nach den Anlässen, die jede Tradition verlangt.",
          ],
        },
        {
          question: "Lässt sich Halal in einem karibischen Resort wahren?",
          answer: [
            "Ja. Wir weisen die Küche ein, bestätigen zertifizierte Beschaffung und arrangieren eine getrennte Zubereitung Monate im Voraus, alles unter Anleitung der Familie.",
            "Wo das lokale zertifizierte Angebot begrenzt ist, beschaffen und importieren wir auf dem von der Familie gesetzten Niveau und halten die Menüs getrennt, wo sich überschneidende Traditionen es verlangen.",
          ],
        },
        {
          question: "Wie unterscheidet sich das von Ihrer Seite zu indischen Hochzeiten?",
          answer: [
            "Unsere Seite zu indischen Hochzeiten ist für hinduistische indische Hochzeiten — das Mandap, die Pheras, der Pandit, mit dem wir seit Jahren arbeiten.",
            "Diese Seite ist für den übrigen Subkontinent: muslimische pakistanische, sikhistische, sri-lankische und bangladeschische Traditionen, jede als ihr eigener Glaube gehalten. Ist Ihre Hochzeit hinduistisch, ist jene Seite das richtige Zuhause; überschreitet sie Glaubensgrenzen, könnte es auch unsere interreligiöse Seite sein.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Ein privates Gespräch —",
      headline: "*Beginnen* Sie Ihre\nsüdasiatische Hochzeit.",
      body: "Nennen Sie uns die Tradition, den Glauben, die Familien und ein ungefähres Datum. Grecia antwortet persönlich, innerhalb von fünf Werktagen.",
      ctaLabel: "Ein privates Gespräch anfragen →",
      ctaHref: staticPath("de", "/contact"),
    },
  },

  it: {
    name: "Matrimoni dell'Asia Meridionale",
    cardEyebrow: "Asia meridionale",
    cardBlurb: "Indù, sikh, musulmano, srilankese, bengalese.",
    cardMeta: "Scopri",
    intro:
      "Cerimonie indù, sikh, musulmane, srilankesi e bengalesi, ciascuna retta da specialisti che hanno vissuto dentro la tradizione.",
    hero: {
      eyebrow: "Le Tradizioni · N. 04",
      scriptOverline: "Un matrimonio di",
      headline: "tradizione dell'*Asia meridionale.*",
      deck: "Il registro che riserviamo al subcontinente al di là del mandap indù — matrimoni pakistani, sikh, srilankesi e bengalesi, ciascuno tenuto come la propria fede e la propria famiglia, mai confusi in uno solo. I matrimoni indù indiani hanno una pagina propria.",
      captionLeft: "Ayesha e Bilal · Punta Cana",
      captionCenter: "Nikkah all'ora dorata · 2025",
      captionRight: "Plate IV",
    },
    factStrip: [
      { label: "Durata", value: "2 – 4 giorni", sub: "3 – 6 eventi" },
      { label: "Numero di invitati", value: "150 – 500", sub: "Di più su richiesta" },
      { label: "Preavviso", value: "16 – 22 mesi", sub: "I celebranti si prenotano presto" },
      { label: "Tradizioni tenute", value: "Pakistana · Sikh", sub: "Srilankese · Bengalese" },
      { label: "Cucina", value: "Halal in primo piano", sub: "Regionale, secondo la famiglia" },
      { label: "Lingue", value: "EN · Urdu", sub: "Punjabi · Singalese · Bengali" },
    ],
    overview: {
      sideEyebrow: "Le tradizioni",
      sideNote:
        "Quattro fedi, una regione. Un registro pratico di come accogliamo i matrimoni pakistani, sikh, srilankesi e bengalesi — ciascuno come se stesso.",
      headline: "Una regione,\nquattro fedi,\nnessuna *confusione.*",
      lede: "L'Asia meridionale non è un solo matrimonio. Un nikkah pakistano, un Anand Karaj sikh, un Poruwa srilankese e un gaye holud bengalese condividono una mappa e quasi nient'altro: scritture diverse, celebranti diversi, voti diversi. Li teniamo distinti di proposito.",
      bodyParagraphs: [
        "Questa pagina esiste perché il subcontinente viene troppo spesso ridotto a una sola parola. I nostri matrimoni indù indiani hanno una pagina propria e un proprio pandit. Questo registro è per il resto: famiglie musulmane pakistane, famiglie sikh che tengono l'Anand Karaj, famiglie srilankesi al Poruwa, famiglie bengalesi che accendono il gaye holud. Ciascuna è pianificata da qualcuno che l'ha vissuta dall'interno.",
        "Un matrimonio pakistano si svolge come una sequenza: serate di dholki e mehndi, il nikkah in cui il contratto matrimoniale viene letto e testimoniato, il baraat che porta il corteo dello sposo, il rukhsati che congeda la sposa dalla sua famiglia, e il walima che la famiglia dello sposo offre il giorno seguente. Il peso emotivo risiede nel rukhsati: non lo comprimiamo mai.",
        "Un matrimonio sikh è incentrato sull'Anand Karaj, celebrato alla presenza del Guru Granth Sahib con un granthi esperto. Qui le esigenze sono reali e ci atteniamo ad esse in modo assoluto: la condotta nel luogo, il livello della cornice, l'ordine dei lavan. Non improvvisiamo attorno a una fede di cui siamo ospiti.",
        "Le famiglie srilankesi e bengalesi portano la propria grammatica: la pedana del Poruwa e i suoi riti singalesi, il calore di curcuma del gaye holud. Affianchiamo a ciascuna tradizione un celebrante e un coordinatore che la conoscono dall'interno, e chiediamo alla famiglia, in privato, cosa spetta a loro guidare e cosa spetta a noi sostenere.",
      ],
      pull: "«Un nikkah pakistano, un Anand Karaj sikh, un Poruwa srilankese e un gaye holud bengalese condividono una mappa e quasi nient'altro. Li teniamo distinti di proposito.»",
      signatureName: "Grecia",
      signatureRole: "Fondatrice · Attraverso le molte tradizioni del subcontinente",
    },
    ceremonyArc: {
      eyebrow: "Struttura cerimoniale",
      headline: "Il contratto, il corteo, il *congedo.*",
      deck: "Un arco musulmano tipico dell'Asia meridionale, con le varianti tenute nominate a ogni passo. Le famiglie sikh, srilankesi e bengalesi lo rimodellano attorno alla propria fede — ogni matrimonio si adatta secondo la tradizione e la regione.",
      steps: [
        { numeral: "I", name: "Dholki", sub: "Bengalese: gaye holud", when: "La sera, giorni prima", body: "Una serata informale di tamburi e canto tra le donne — il dholki per le famiglie pakistane, il gaye holud illuminato di curcuma per quelle bengalesi. La celebrazione comincia molto prima del voto." },
        { numeral: "II", name: "Mehndi", sub: "Notte dell'hennè", when: "La vigilia", body: "Mani e piedi decorati con hennè intricato, con musica e danza. Tenuto nella maggior parte delle tradizioni dell'Asia meridionale, con canti e ordine regionali conservati dalla famiglia." },
        { numeral: "III", name: "Nikkah", sub: "Variante sikh: Anand Karaj", when: "Giorno del matrimonio", body: "La cerimonia del contratto. Per le famiglie musulmane, il nikkah viene letto, testimoniato e documentato sotto la guida dell'imam che officia. Le famiglie sikh tengono invece l'Anand Karaj, davanti al Guru Granth Sahib con un granthi." },
        { numeral: "IV", name: "Baraat", sub: "Il corteo", when: "Giorno del matrimonio", body: "Il corteo dello sposo arriva in festa — tamburi, famiglia e accoglienza da parte della sposa. Le famiglie srilankesi si riuniscono invece al Poruwa, la pedana decorata dove si tengono i riti." },
        { numeral: "V", name: "Poruwa", sub: "Rito srilankese", when: "Giorno del matrimonio", body: "Quando la famiglia è srilankese, la coppia sale sul Poruwa per la cerimonia singalese tradizionale — l'unione delle mani, i riti sovrintesi dal celebrante che la famiglia designa." },
        { numeral: "VI", name: "Rukhsati", sub: "Il congedo", when: "Giorno del matrimonio, a sera", body: "La sposa lascia la cura della sua famiglia verso la sua nuova casa. Il momento più emozionante della giornata; gli diamo tutto lo spazio e non programmiamo mai nulla al di sopra di esso." },
        { numeral: "VII", name: "Walima", sub: "Il secondo ricevimento", when: "Il giorno seguente", body: "Il ricevimento offerto dalla famiglia dello sposo, il giorno dopo il nikkah. Una celebrazione formale che completa il matrimonio agli occhi della comunità." },
      ],
    },
    designConcepts: {
      eyebrow: "Concetti di design",
      headline: "Palchi, *moodboard.*",
      deck: "Tre direzioni di lavoro che abbiamo costruito più di una volta attraverso queste tradizioni. Ogni matrimonio adatta la palette, il tessuto e la scala dell'ambientazione.",
      cards: [
        {
          title: "Smeraldo e Oro",
          body: "Un palco di nikkah formale in velluto smeraldo profondo, oro antico e calda luce di candele. Si legge come celebrazione senza eccesso — pensato tanto per la cerimonia del contratto quanto per il walima.",
          palette: ["#0f3d2e", "#c89d4e", "#1c2a22", "#e8d6a0", "#f5f0e6"],
          imageKey: "concept-1",
          rows: [
            { label: "Palco / Décor", value: "Fondale di velluto, cornice dorata" },
            { label: "Fiori", value: "Rosa · orchidea · fogliame dorato" },
            { label: "Ideale per", value: "Tenuta interna · sala da ballo" },
          ],
        },
        {
          title: "Avorio e Calendula",
          body: "Un'ambientazione di mehndi luminosa e aperta in drappeggio avorio, corde di calendula e sedute a terra. Pensata per la notte dell'hennè e il gaye holud — calda, informale, si fotografa magnificamente all'aperto.",
          palette: ["#f5f0e6", "#e8a843", "#c25422", "#7a3814", "#3a2a1e"],
          imageKey: "concept-2",
          rows: [
            { label: "Palco / Décor", value: "Drappeggio + sedute a terra" },
            { label: "Fiori", value: "Calendula · gelsomino · verde" },
            { label: "Ideale per", value: "Giardino · cortile · spiaggia" },
          ],
        },
        {
          title: "Zafferano e Crema",
          body: "Un'ambientazione sobria di Poruwa o Anand Karaj in zafferano, peonie avorio e legno non trattato. Sommessamente devozionale, concepita per onorare la sacralità del rito anziché decorare intorno ad esso.",
          palette: ["#e0a13a", "#ebe3d3", "#a7a78b", "#d6cdb8", "#4a523d"],
          imageKey: "concept-3",
          rows: [
            { label: "Palco / Décor", value: "Pedana di legno, fiori bassi" },
            { label: "Fiori", value: "Peonia · loto · verde" },
            { label: "Ideale per", value: "Giardino · villa · presso il santuario" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocollo culturale",
      headline: "Ciò che teniamo *sacro.*",
      deck: "Sei principi su cui non transigiamo. Dove la pratica varia tra le famiglie, ci atteniamo al celebrante e agli anziani — non alla nostra comodità.",
      items: [
        { title: "Il nikkah è testimoniato e documentato", body: "Il contratto matrimoniale viene letto, testimoniato e registrato sotto la guida dell'imam che officia. Organizziamo i testimoni, la documentazione e la registrazione legale attorno alle esigenze dell'imam — e non viceversa." },
        { title: "L'Anand Karaj è tenuto con reverenza", body: "Un Anand Karaj sikh è celebrato alla presenza del Guru Granth Sahib con un granthi esperto. La condotta nel luogo e il livello della cornice sono rispettati in modo assoluto; quando un dettaglio del rito è in dubbio, decide il granthi e noi seguiamo." },
        { title: "Le cucine halal sono istruite per tempo", body: "Quando la famiglia osserva l'halal, la cucina del resort viene istruita e l'approvvigionamento organizzato con mesi di anticipo. Confermiamo la certificazione e la preparazione con la guida della famiglia, e teniamo i menù separati dove le tradizioni che si incrociano lo richiedono." },
        { title: "Il rukhsati conserva il suo spazio", body: "Il congedo è il momento più emozionante di un matrimonio pakistano. Non lo comprimiamo mai per ragioni di ritmo né programmiamo un cambio di fornitore al di sopra di esso. La famiglia detta il tono e noi manteniamo la sala in silenzio." },
        { title: "Gli anziani sono onorati per primi", body: "Gli anziani vengono salutati, fatti sedere e serviti prima di qualsiasi questione del corteo nuziale. Le esigenze alimentari e di mobilità degli ospiti anziani sono risolte prima di chiudere un menù o una pianta della sala." },
        { title: "La musica regionale è dal vivo dove possibile", body: "Dhol per il baraat, musicisti devozionali per i riti sacri, canto regionale per il mehndi e il gaye holud. La musica registrata è benvenuta alle celebrazioni, ma dal vivo dove la tradizione della famiglia lo chiede." },
      ],
    },
    planning: {
      eyebrow: "Pianificazione su più giorni",
      headline: "Un matrimonio di tre giorni, *ora per ora.*",
      deck: "Lo schema che usiamo per un tipico matrimonio musulmano pakistano da 250 invitati. I calendari sikh, srilankese e bengalese lo rimodellano attorno ai propri riti; la cura non cambia.",
      days: [
        {
          numeral: "I",
          dayLabel: "Giorno Uno",
          title: "Dholki e mehndi",
          body: "Gli invitati arrivano nell'arco della giornata, con transfer e check-in coordinati dall'atelier. Un dholki informale nel pomeriggio, poi il mehndi la sera — hennè su più postazioni, musica e una cena rilassata.",
          events: [
            { time: "Mattina", body: "Arrivi degli invitati · transfer · check-in in hotel" },
            { time: "16:00", body: "Dholki · tamburi e canto · donne" },
            { time: "18:30", body: "Cerimonia del mehndi · postazioni di hennè · 3 ore" },
            { time: "21:00", body: "Cena informale · buffet in giardino" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Giorno Due",
          title: "Nikkah, baraat e rukhsati",
          body: "Il nikkah all'ora fissata dall'imam, letto e testimoniato. Il baraat porta il corteo dello sposo in festa. Riti familiari nel pomeriggio, poi il rukhsati — con tutto il suo spazio — chiude la giornata prima della cena.",
          events: [
            { time: "11:00", body: "Preparazione degli sposi · suite separate" },
            { time: "14:00", body: "Nikkah · contratto letto e testimoniato · 60 minuti" },
            { time: "15:30", body: "Baraat · corteo dello sposo · accoglienza" },
            { time: "17:00", body: "Riti familiari · fotografie" },
            { time: "18:30", body: "Rukhsati · il congedo · senza fretta" },
            { time: "20:00", body: "Cena · tavolata · menù regionale" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Giorno Tre",
          title: "Walima e saluti",
          body: "Il walima offerto dalla famiglia dello sposo — il secondo ricevimento formale che completa il matrimonio agli occhi della comunità. Un brunch tardivo per gli invitati in partenza, con le famiglie più strette che spesso si fermano un giorno in più.",
          events: [
            { time: "11:00", body: "Brunch di commiato · a bordo piscina" },
            { time: "19:00", body: "Aperitivo del walima · ospita la famiglia dello sposo" },
            { time: "20:30", body: "Cena del walima · ricevimento formale · discorsi" },
            { time: "A sera", body: "Iniziano le partenze · transfer la mattina seguente" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilità delle destinazioni",
      headline: "Dove i matrimoni dell'Asia meridionale *riescono meglio.*",
      viewAllLabel: "Vedi tutte le destinazioni →",
      viewAllHref: staticPath("it", "/destinations"),
      cards: [
        { rating: 5, name: "Punta Cana", sub: "Caraibi · tutto l'anno", imageKey: "compat-1", destinationHref: destinationPath("it", "punta-cana") },
        { rating: 5, name: "Tulum e Los Cabos", sub: "Messico · novembre – aprile", imageKey: "compat-2", destinationHref: destinationPath("it", "tulum-los-cabos") },
        { rating: 4, name: "Lago di Como", sub: "Italia · giugno – settembre", imageKey: "compat-3", destinationHref: destinationPath("it", "lake-como") },
        { rating: 4, name: "Toscana", sub: "Italia · maggio – ottobre", imageKey: "compat-4", destinationHref: destinationPath("it", "tuscany") },
        { rating: 4, name: "Amalfi", sub: "Italia · maggio – ottobre", imageKey: "compat-5", destinationHref: destinationPath("it", "amalfi") },
        { rating: 4, name: "Gli Hamptons", sub: "New York · giugno – settembre", imageKey: "compat-6", destinationHref: destinationPath("it", "the-hamptons") },
        { rating: 3, name: "Costa Azzurra", sub: "Francia · giugno – settembre", imageKey: "compat-7", destinationHref: destinationPath("it", "cote-dazur") },
        { rating: 3, name: "St. Barths", sub: "Caraibi · novembre – aprile", imageKey: "compat-8", destinationHref: destinationPath("it", "st-barths") },
      ],
    },
    guest: {
      eyebrow: "Gestione degli invitati",
      headline: "La cura *pratica* di 250 invitati.",
      deck: "Lo strato logistico che la maggior parte dei planner sottodota. In queste tradizioni, la fede e la famiglia vengono prima — pianifichiamo attorno a entrambe.",
      cells: [
        { title: "Protocollo halal", body: "Quando la famiglia osserva l'halal, istruiamo la cucina e confermiamo approvvigionamento e certificazione con mesi di anticipo. I menù restano separati dove le tradizioni che si incrociano lo necessitano, e la guida della famiglia è definitiva." },
        { title: "Orari di preghiera", body: "Gli orari quotidiani di preghiera sono integrati nel programma, con uno spazio di preghiera pulito e silenzioso e strutture per il wudu. Gli orari delle cerimonie sono fissati così da non collidere mai con gli obblighi degli ospiti praticanti." },
        { title: "Guida per tradizioni miste", body: "Quando gli invitati provengono da più di una fede — musulmana, sikh, indù, cristiana — inviamo note su misura affinché ciascuno sappia cosa aspettarsi al nikkah, all'Anand Karaj o al Poruwa, e come partecipare con rispetto." },
        { title: "Anziani e mobilità", body: "Posti dedicati, trasporto separato e un referente per gli anziani del team dell'atelier. Camere al piano terra per gli ospiti anziani, con assistenza medica reperibile per tutto il fine settimana." },
        { title: "Viaggi e alloggi", body: "Blocchi di camere nelle fasce premium, standard e famiglia. Transfer coordinati lungo più giorni di arrivi, con un pacchetto di benvenuto e il programma in ogni camera." },
        { title: "Comunicazioni", body: "Un gruppo invitati tre settimane prima, un sito dedicato con programma e dress code, e guide stampate — comprese note di etichetta per ogni cerimonia nelle lingue della famiglia." },
      ],
    },
    related: {
      eyebrow: "Continua a leggere",
      headline: "Dal *diario.*",
      articles: [
        { category: "Pakistano · Punta Cana", title: "Tenere un nikkah di destinazione, passo dopo passo", body: "Come il contratto viene letto, testimoniato e registrato all'estero — e di cosa ha bisogno l'imam da noi.", imageKey: "culture-related-1" },
        { category: "Sikh · Tradizione", title: "L'Anand Karaj in un resort: cosa richiede", body: "Sul tenere la cerimonia sikh con la reverenza che il Guru Granth Sahib richiede.", imageKey: "culture-related-2" },
        { category: "Tradizione · Srilankese", title: "Dentro la cerimonia del Poruwa", body: "Una guida al rito singalese su pedana e ai rituali che vi si tengono.", imageKey: "culture-related-3" },
        { category: "Costo · Asia meridionale", title: "Quanto costa un matrimonio di lusso dell'Asia meridionale", body: "Budget franchi 2026 per tradizione e numero di invitati.", imageKey: "culture-related-4" },
        { category: "Bengalese · Design", title: "Il gaye holud, in dettaglio", body: "Sulla notte di curcuma che apre un matrimonio bengalese — e su come la progettiamo.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("it", "punta-cana") },
        { label: "Tulum e Los Cabos", href: destinationPath("it", "tulum-los-cabos") },
        { label: "Lago di Como", href: destinationPath("it", "lake-como") },
        { label: "Gli Hamptons", href: destinationPath("it", "the-hamptons") },
      ],
      sidebarVenues: [
        { label: "Kukua Beach Club" },
        { label: "Eden Roc Cap Cana" },
        { label: "Villa Tre Ville" },
        { label: "Chileno Bay Resort" },
      ],
      sidebarCultures: [
        { label: "Matrimoni indiani", href: culturePath("it", "indian-weddings") },
        { label: "Matrimoni arabi", href: culturePath("it", "arab-weddings") },
        { label: "Matrimoni interreligiosi", href: culturePath("it", "interfaith-weddings") },
        { label: "Matrimoni ebraici", href: culturePath("it", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Domande, con risposta",
      headline: "Domande *frequenti.*",
      items: [
        {
          question: "Come funziona legalmente un nikkah di destinazione?",
          answer: [
            "Il nikkah è il contratto religioso, letto e testimoniato sotto la guida dell'imam che officia. Il matrimonio legale è una questione a parte, regolata secondo le leggi della destinazione e del vostro Paese d'origine.",
            "Molte coppie completano la registrazione civile a casa prima di partire e tengono il nikkah all'estero come cerimonia di riferimento per la famiglia. Coordiniamo l'imam, i testimoni e la documentazione affinché tanto la fede quanto la legge siano soddisfatte.",
          ],
        },
        {
          question: "Potete tenere un Anand Karaj in un resort?",
          answer: [
            "Sì, dove l'ambientazione possa soddisfare le esigenze del rito. L'Anand Karaj si tiene alla presenza del Guru Granth Sahib con un granthi esperto, e la condotta dello spazio conta.",
            "Ci atteniamo del tutto al granthi e alla famiglia su ciò che l'ambientazione deve offrire. Quando un resort non può onorare quelle esigenze, lo diciamo chiaramente e troviamo un luogo che lo possa.",
          ],
        },
        {
          question: "Famiglie pakistane e indiane possono celebrare insieme?",
          answer: [
            "Spesso, e in modo bellissimo. Una famiglia musulmana pakistana e una famiglia indù indiana che sposano i propri figli è una delle unioni che ci vengono richieste più di frequente.",
            "La trattiamo come due fedi tenute con uguale cura — un nikkah e una cerimonia indù, due celebranti, un solo fine settimana — anziché come un unico evento fuso. La nostra pagina dei Matrimoni Interreligiosi approfondisce questo lavoro.",
          ],
        },
        {
          question: "Quanto costa un matrimonio di destinazione dell'Asia meridionale nel 2026?",
          answer: [
            "Un intervallo utile per matrimoni da 150 a 400 invitati su due-quattro giorni è di USD 250.000 – 900.000, tutto compreso, a seconda della tradizione, della destinazione e del numero di invitati.",
            "Condividiamo budget trasparenti e dettagliati nella prima consulenza, con intervalli per numero di invitati e per gli eventi che ciascuna tradizione richiede.",
          ],
        },
        {
          question: "L'halal si può mantenere in un resort dei Caraibi?",
          answer: [
            "Sì. Istruiamo la cucina, confermiamo un approvvigionamento certificato e organizziamo una preparazione separata con mesi di anticipo, il tutto sotto la guida della famiglia.",
            "Dove la fornitura certificata locale è limitata, ci approvvigioniamo e importiamo al livello fissato dalla famiglia, e teniamo i menù separati dove le tradizioni che si incrociano lo richiedono.",
          ],
        },
        {
          question: "In cosa differisce questa dalla vostra pagina sui Matrimoni Indiani?",
          answer: [
            "La nostra pagina sui Matrimoni Indiani è per i matrimoni indù indiani — il mandap, le pheras, il pandit con cui lavoriamo da anni.",
            "Questa pagina è per il resto del subcontinente: tradizioni musulmana pakistana, sikh, srilankese e bengalese, ciascuna tenuta come la propria fede. Se il vostro matrimonio è indù, quella pagina è la dimora giusta; se attraversa più fedi, potrebbe esserlo anche la nostra pagina interreligiosa.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Una conversazione privata —",
      headline: "*Inizia* il tuo\nmatrimonio dell'Asia meridionale.",
      body: "Diteci la tradizione, la fede, le famiglie e una data approssimativa. Grecia risponde, personalmente, entro cinque giorni lavorativi.",
      ctaLabel: "Richiedi una consulenza privata →",
      ctaHref: staticPath("it", "/contact"),
    },
  },
};
