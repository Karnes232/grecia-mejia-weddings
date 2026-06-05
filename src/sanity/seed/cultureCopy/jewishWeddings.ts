/**
 * Per-locale seed copy for the Jewish Weddings culture detail page (No. 02).
 *
 * Structure, density and the first-person-plural studio register mirror the
 * Indian Weddings design prototype (`pages/multicultural-detail.jsx`). Card
 * copy (name, cardEyebrow, cardBlurb, cardMeta, intro) is reused verbatim from
 * `culture.ts`. Hebrew/Yiddish terms (chuppah, ketubah, bedeken, sheva brachot,
 * hora, yichud, kippot, mechitza) are kept untranslated; everything else is
 * translated to a native register. Where practice differs across Orthodox,
 * Conservative and Reform, copy defers to "the officiating rabbi".
 */

import type { Locale } from "../../../i18n/routing";

import {
  culturePath,
  destinationPath,
  staticPath,
  type CultureCopy,
} from "./shared";

export const jewishWeddings: Record<Locale, CultureCopy> = {
  en: {
    name: "Jewish Weddings",
    cardEyebrow: "Jewish",
    cardBlurb: "Chuppah, ketubah, sheva brachot — Orthodox, Conservative, Reform.",
    cardMeta: "Discover",
    intro:
      "From the chuppah to the ketubah, held with a rabbi and a kosher caterer who travel with us to the coast.",
    hero: {
      eyebrow: "The Traditions · No. 02",
      scriptOverline: "A wedding of",
      headline: "Jewish *tradition.*",
      deck: "Chuppah, ketubah and sheva brachot, held abroad with the rabbi and kosher kitchen we bring with us. One to three days, fifty to three hundred guests.",
      captionLeft: "Maya & Daniel · St. Barths",
      captionCenter: "Under the chuppah · 2025",
      captionRight: "Plate II",
    },
    factStrip: [
      { label: "Wedding length", value: "1 – 3 days", sub: "Plus Shabbat option" },
      { label: "Guest range", value: "50 – 300", sub: "Intimate to grand" },
      { label: "Lead time", value: "12 – 18 months", sub: "Rabbi books early" },
      { label: "Denominations", value: "Orthodox · Conservative", sub: "Reform · Secular" },
      { label: "Catering", value: "Kosher coordination", sub: "Kitchen flown in" },
      { label: "Languages", value: "EN · Hebrew", sub: "And your own" },
    ],
    overview: {
      sideEyebrow: "The tradition",
      sideNote:
        "Twenty-six Jewish weddings, fourteen years. A working register of what we know about holding the tradition abroad with grace.",
      headline: "One chuppah,\ntwo families,\none *covenant.*",
      lede: "A Jewish wedding is a covenant made in public. Under the chuppah — open on all sides — two people are joined before witnesses, and the community is part of the ceremony, not an audience to it.",
      bodyParagraphs: [
        "We have planned twenty-six Jewish weddings since 2012, across Orthodox, Conservative, Reform and secular-cultural lines. Most have been a single full day; several have opened with a Shabbat dinner the evening before, and a handful have run the full Friday-to-Sunday arc.",
        "The hardest part of a destination Jewish wedding is rarely the ceremony — it is the kosher kitchen and the Shabbat timing. So we bring our own. A rabbi we have worked with for years travels with us, and a kosher caterer flies in with a sealed kitchen protocol agreed with the resort months ahead.",
        "Within the tradition, the differences matter. An Orthodox ketubah is witnessed differently from a Reform one; a mechitza is essential for some families and absent for others; sheva brachot may be sung in Hebrew or read in two languages. We never assume. We ask, in private, and we hold what the officiating rabbi sets.",
        "What does not change is the shape of the day: bedeken before the chuppah, the glass broken at the close, yichud before the celebration, and a hora that does not end until the chairs come down. We hold that arc as if the families wrote it — because, across centuries, they did.",
      ],
      pull: "\"The hardest part of a destination Jewish wedding is rarely the ceremony — it is the kosher kitchen and the Shabbat timing. So we bring our own.\"",
      signatureName: "Grecia",
      signatureRole: "Founder · After twenty-six Jewish weddings",
    },
    ceremonyArc: {
      eyebrow: "Ceremony structure",
      headline: "The seven-part *arc.*",
      deck: "The ceremony order we hold across a typical Jewish wedding day. Variations exist — the officiating rabbi sets the order and the wording for your family and denomination.",
      steps: [
        { numeral: "I", name: "Kabbalat Panim", sub: "Greeting the guests", when: "Before the ceremony", body: "Two receptions held in parallel — one for the bride, one for the groom. The ketubah is reviewed and the families gather before the couple are brought together." },
        { numeral: "II", name: "Bedeken", sub: "The veiling", when: "Just before", body: "The groom is led to the bride to lower her veil, recalling the matriarchs. A brief, charged moment that often carries the whole day's emotion." },
        { numeral: "III", name: "Ketubah", sub: "Signing the contract", when: "Before the chuppah", body: "The marriage contract is signed by the witnesses required under the officiating rabbi's tradition, then carried to the chuppah to be read aloud." },
        { numeral: "IV", name: "Chuppah", sub: "Under the canopy", when: "The ceremony", body: "Vows beneath the open canopy: the ring given before witnesses, the ketubah read, and the sheva brachot — seven blessings — sung over a cup of wine." },
        { numeral: "V", name: "Breaking of the glass", sub: "Shevirat ha-kos", when: "Close of ceremony", body: "The groom breaks a glass underfoot, a remembrance held even in joy. The guests call out \"Mazel tov\" and the celebration begins." },
        { numeral: "VI", name: "Yichud", sub: "Seclusion", when: "Immediately after", body: "The newly married couple withdraw alone for a private interval — the first quiet minutes of marriage, before the room is given to the guests." },
        { numeral: "VII", name: "Hora & reception", sub: "Celebration", when: "Evening", body: "The couple lifted on chairs to the hora, then dinner, sheva brachot repeated over the meal, speeches, and dancing that does not stop early." },
      ],
    },
    designConcepts: {
      eyebrow: "Design concepts",
      headline: "Chuppah, *moodboards.*",
      deck: "Three working design directions we have built more than once. Every wedding adapts these — the palette, the canopy, the scale of the florals.",
      cards: [
        {
          title: "Ivory & Olive Chuppah",
          body: "A pared-back canopy in ivory linen and trailing olive, with white pillar candles and a hand-embroidered chuppah cloth. Reads beautifully against the sea.",
          palette: ["#f5f0e6", "#b8b48f", "#6b6f4c", "#d6cdb8", "#3a3d2c"],
          imageKey: "concept-1",
          rows: [
            { label: "Chuppah", value: "Four-pole linen, 12 ft" },
            { label: "Florals", value: "Olive · white rose · eucalyptus" },
            { label: "Best for", value: "Beach · terrace · garden" },
          ],
        },
        {
          title: "White Garden",
          body: "A romantic canopy of climbing white roses, jasmine and greenery over an unstained wood frame. Soft, abundant, and quietly classical.",
          palette: ["#fbf7f0", "#e8e2d4", "#a7a78b", "#cdb89a", "#4a523d"],
          imageKey: "concept-2",
          rows: [
            { label: "Chuppah", value: "Floral wood arbour" },
            { label: "Florals", value: "Garden rose · jasmine · ivy" },
            { label: "Best for", value: "Villa · vineyard · estate" },
          ],
        },
        {
          title: "Modern Minimal",
          body: "A clean architectural canopy in pale stone and brushed brass, with a single sculptural floral line. For couples who want restraint, not absence.",
          palette: ["#ece7df", "#c9c2b4", "#8a8473", "#bfa46a", "#2f2c26"],
          imageKey: "concept-3",
          rows: [
            { label: "Chuppah", value: "Brass + stone frame" },
            { label: "Florals", value: "Single-stem · structural" },
            { label: "Best for", value: "Rooftop · gallery · modern villa" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Cultural protocol",
      headline: "What we *hold sacred.*",
      deck: "Six principles we do not compromise on. Where the rule varies by denomination, we hold what the officiating rabbi sets — not what is convenient.",
      items: [
        { title: "Never on Shabbat", body: "Jewish weddings are not held on Shabbat. Ceremonies begin after sundown on Saturday, or on Sunday — we build the entire weekend calendar around the actual local sunset time, not an approximation." },
        { title: "The ketubah is witnessed properly", body: "The ketubah is signed by the witnesses the officiating rabbi requires for your tradition. We confirm the text, the witnesses and the language with the rabbi well before the day — never on it." },
        { title: "The kosher kitchen is sealed and briefed", body: "Kosher catering is not a menu choice; it is a kitchen protocol. We agree a sealed-kitchen arrangement with the resort months ahead, fly in our caterer where needed, and brief every member of the resort team." },
        { title: "The glass is broken safely", body: "The breaking of the glass is staged with a wrapped, pre-scored glass on a protected surface, so the moment is whole and no one is hurt. Ritual and safety are not in tension." },
        { title: "The rabbi sets the order", body: "Where Orthodox, Conservative and Reform practice differ — the mechitza, the circling, the wording of the blessings — we follow the officiating rabbi's guidance, and we brief the venue accordingly." },
        { title: "Customs are honoured, not flattened", body: "Mechitza and separate dancing for observant families; egalitarian customs for others. We ask, in private, what your family keeps, and we do not treat one Jewish wedding as a template for the next." },
      ],
    },
    planning: {
      eyebrow: "Multi-day planning",
      headline: "A *Jewish wedding,* hour by hour.",
      deck: "The blueprint we use for a typical 150-guest Jewish wedding. Each day flexes; the structure does not. Shabbat timing is set by the local sunset.",
      days: [
        {
          numeral: "I",
          dayLabel: "Day One",
          title: "Welcome & Shabbat",
          body: "Guests arrive through the day, transfers coordinated by the studio. For observant families we hold a Shabbat dinner after candle-lighting — a calm, hosted evening before the wedding, with the kosher kitchen already in service.",
          events: [
            { time: "Morning", body: "Guest arrivals · airport transfers · hotel check-in" },
            { time: "Afternoon", body: "Free time · welcome amenities in every room" },
            { time: "Before sunset", body: "Candle-lighting · Shabbat begins (timing by local sunset)" },
            { time: "Evening", body: "Shabbat dinner · kiddush · hosted long-table meal" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Day Two",
          title: "The wedding",
          body: "The full wedding day. Kabbalat Panim in parallel, the ketubah signed, bedeken, then the chuppah at the hour the rabbi sets — typically late afternoon, so the ceremony meets golden light and the celebration carries into the night.",
          events: [
            { time: "15:00", body: "Kabbalat Panim · two parallel receptions" },
            { time: "16:00", body: "Ketubah signing · witnesses · bedeken" },
            { time: "16:45", body: "Chuppah · ring · sheva brachot · breaking of the glass" },
            { time: "17:15", body: "Yichud · the couple's private interval" },
            { time: "18:00", body: "Reception cocktails" },
            { time: "19:30", body: "Hora · dinner · sheva brachot · speeches · dancing" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Day Three",
          title: "Brunch & farewells",
          body: "A morning-after brunch hosted by the couple — often outdoors, more relaxed, with a focus on goodbyes. For some families this is also a sheva brachot meal, with the seven blessings repeated once more.",
          events: [
            { time: "11:00", body: "Brunch · poolside or garden" },
            { time: "12:30", body: "Optional sheva brachot · seven blessings repeated" },
            { time: "Afternoon", body: "Departures · airport transfers" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Destination compatibility",
      headline: "Where Jewish weddings *work best.*",
      viewAllLabel: "View all destinations →",
      viewAllHref: staticPath("en", "/destinations"),
      cards: [
        { rating: 5, name: "St. Barths", sub: "Caribbean · November – April", destinationSlug: "st-barths" },
        { rating: 5, name: "The Hamptons", sub: "United States · May – September", destinationSlug: "the-hamptons" },
        { rating: 5, name: "Lake Como", sub: "Italy · June – September", destinationSlug: "lake-como" },
        { rating: 4, name: "Amalfi", sub: "Italy · May – October", destinationSlug: "amalfi" },
        { rating: 4, name: "Tuscany", sub: "Italy · May – October", destinationSlug: "tuscany" },
        { rating: 4, name: "Côte d'Azur", sub: "France · June – September", destinationSlug: "cote-dazur" },
        { rating: 4, name: "Mustique", sub: "Caribbean · November – April", destinationSlug: "mustique" },
        { rating: 3, name: "Aspen & Napa", sub: "United States · seasonal", destinationSlug: "aspen-napa" },
      ],
    },
    guest: {
      eyebrow: "Guest management",
      headline: "The *practical* care of 150 guests.",
      deck: "The logistics layer most planners under-resource. For a Jewish wedding abroad, it begins with the kitchen and the calendar.",
      cells: [
        { title: "Kosher dietary protocol", body: "A sealed kosher kitchen agreed with the resort, our own caterer where needed, and clearly labelled meals across the weekend. Kosher, vegetarian, vegan and allergen-free options at every service." },
        { title: "Shabbat-observant guests", body: "Rooms close to the venue so no driving is needed, pre-cut key-cards and lighting arranged, meals timed to candle-lighting, and a Shabbat-friendly schedule for guests who keep it." },
        { title: "Elders & mobility", body: "Dedicated seating, separate transport, ground-floor rooms reserved for older guests, and a studio liaison through the weekend. Medical-on-call for the duration." },
        { title: "Travel & room blocks", body: "Group room blocks at three tiers, airport transfers across the arrival days, and welcome packages in every room with the schedule, dress code per event and key contacts." },
        { title: "Attire & kippot", body: "Kippot provided for guests at the chuppah, a tallit on hand where the ceremony calls for one, and pressing service at the hotel for arrival and the wedding morning." },
        { title: "Communications", body: "A guest group three weeks ahead, a wedding website with the schedule, dress codes and venue maps, and printed guides — including a short note for guests new to a Jewish wedding." },
      ],
    },
    related: {
      eyebrow: "Continue reading",
      headline: "From the *journal.*",
      articles: [
        { category: "Jewish Weddings · Kosher", title: "How Kosher Catering Actually Works Abroad", body: "On sealed kitchens, flown-in caterers, and the resort conversations that have to happen months ahead.", imageKey: "culture-related-1" },
        { category: "Tradition", title: "The Chuppah, in Detail", body: "Open on all sides, held over the couple — a short field guide to the canopy and what it means.", imageKey: "culture-related-2" },
        { category: "Planning · Shabbat", title: "Planning a Destination Wedding Around Shabbat", body: "Why the local sunset, not the calendar, sets the weekend — and how we build around it.", imageKey: "culture-related-3" },
        { category: "Interfaith", title: "Interfaith Jewish Weddings, Held Whole", body: "Two clergy, two traditions, one cohesive day — without diluting either side.", imageKey: "culture-related-4" },
        { category: "Cost · Jewish", title: "What a Luxury Jewish Wedding Actually Costs", body: "Frank 2026 budgets by guest count, including the cost of bringing the kitchen with you.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "St. Barths", href: destinationPath("en", "st-barths") },
        { label: "The Hamptons", href: destinationPath("en", "the-hamptons") },
        { label: "Lake Como", href: destinationPath("en", "lake-como") },
        { label: "Côte d'Azur", href: destinationPath("en", "cote-dazur") },
      ],
      sidebarVenues: [
        { label: "Eden Roc · St. Barths" },
        { label: "Villa d'Este · Lake Como" },
        { label: "Topping Rose House · The Hamptons" },
        { label: "Grand-Hôtel du Cap-Ferrat" },
      ],
      sidebarCultures: [
        { label: "Indian weddings", href: culturePath("en", "indian-weddings") },
        { label: "Interfaith weddings", href: culturePath("en", "interfaith-weddings") },
        { label: "Christian weddings", href: culturePath("en", "christian-weddings") },
        { label: "European weddings", href: culturePath("en", "european-weddings") },
      ],
    },
    faq: {
      eyebrow: "Questions, answered",
      headline: "Frequently *asked.*",
      items: [
        {
          question: "Can you hold an Orthodox ceremony abroad?",
          answer: [
            "Yes. We have held Orthodox ceremonies at destination, with the mechitza, the witnesses and the order required by the officiating rabbi.",
            "The work is in the preparation: the right rabbi, a properly sealed kosher kitchen, accommodation close enough that observant guests need not drive, and a weekend timed to the local Shabbat. We confirm all of it with the rabbi before anything is booked.",
          ],
        },
        {
          question: "How does kosher catering work at a resort?",
          answer: [
            "Kosher is a kitchen protocol, not a menu. Depending on your level of observance and the venue, we either kasher a section of the resort kitchen under supervision, or bring our own caterer and a sealed kitchen.",
            "We agree the arrangement with the resort months ahead and brief every member of their team, so the standard your family keeps is met without compromise.",
          ],
        },
        {
          question: "Do you provide the rabbi?",
          answer: [
            "We can. A rabbi we have worked with for years travels with the studio, and we also work with couples' own rabbis where they have one.",
            "The officiating rabbi sets the order of the ceremony, the wording of the blessings and the requirements for the ketubah and witnesses — we build the day around their guidance.",
          ],
        },
        {
          question: "What about Shabbat timing?",
          answer: [
            "Jewish weddings are not held on Shabbat. We schedule the ceremony for Saturday after the local sundown, or on Sunday, and we build the welcome and any Shabbat dinner around the actual sunset time at the venue — which we confirm to the minute.",
          ],
        },
        {
          question: "Can you hold an interfaith Jewish wedding?",
          answer: [
            "Yes — it is some of our most-requested work. Our default is two clergy and one cohesive ceremony: the chuppah and the seven blessings held alongside the other tradition, neither side diluted.",
            "The shape depends on the families and on which officiants will co-celebrate. We help find clergy who will, and we hold the day so both traditions are whole.",
          ],
        },
        {
          question: "What is the typical cost of a destination Jewish wedding?",
          answer: [
            "A useful 2026 range for 80–200 guest weddings is USD $180,000 – $650,000, all-in, with kosher catering and a flown-in kitchen typically adding 15–25% over a comparable non-kosher wedding.",
            "We share full transparent budgets in the first consultation, with line-item ranges by guest count and level of observance.",
          ],
        },
        {
          question: "Do we need a separate legal ceremony?",
          answer: [
            "Often, yes. The religious ceremony under the chuppah is the heart of the day, but in many destinations the legal marriage is registered separately — sometimes at home before you travel.",
            "We map the legal route for your destination and nationality early, so the religious day stands entirely on its own meaning, with the paperwork already settled.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "A private conversation —",
      headline: "*Begin* your\nJewish wedding.",
      body: "Tell us the tradition you keep, the families, the level of observance, and a rough date. Grecia writes back, personally, within five working days.",
      ctaLabel: "Request a private consultation →",
      ctaHref: staticPath("en", "/contact"),
    },
  },

  es: {
    name: "Bodas Judías",
    cardEyebrow: "Judía",
    cardBlurb: "Chupá, ketubá, sheva brajot — ortodoxa, conservadora, reformista.",
    cardMeta: "Descubrir",
    intro:
      "De la chupá a la ketubá, celebradas con un rabino y un catering kosher que viajan con nosotros a la costa.",
    hero: {
      eyebrow: "Las Tradiciones · N.º 02",
      scriptOverline: "Una boda de",
      headline: "tradición *judía.*",
      deck: "Chuppah, ketubah y sheva brachot, celebradas en el extranjero con el rabino y la cocina kosher que llevamos con nosotros. De uno a tres días, de cincuenta a trescientos invitados.",
      captionLeft: "Maya y Daniel · St. Barths",
      captionCenter: "Bajo la chuppah · 2025",
      captionRight: "Lámina II",
    },
    factStrip: [
      { label: "Duración", value: "1 – 3 días", sub: "Con opción de Shabat" },
      { label: "Invitados", value: "50 – 300", sub: "De íntima a grandiosa" },
      { label: "Antelación", value: "12 – 18 meses", sub: "El rabino reserva pronto" },
      { label: "Corrientes", value: "Ortodoxa · Conservadora", sub: "Reformista · Laica" },
      { label: "Catering", value: "Coordinación kosher", sub: "Cocina trasladada" },
      { label: "Idiomas", value: "EN · Hebreo", sub: "Y el suyo propio" },
    ],
    overview: {
      sideEyebrow: "La tradición",
      sideNote:
        "Veintiséis bodas judías, catorce años. Un registro vivo de lo que sabemos sobre sostener la tradición en el extranjero con elegancia.",
      headline: "Una chuppah,\ndos familias,\nuna *alianza.*",
      lede: "Una boda judía es una alianza sellada en público. Bajo la chuppah —abierta por sus cuatro lados— dos personas se unen ante testigos, y la comunidad forma parte de la ceremonia, no es su público.",
      bodyParagraphs: [
        "Hemos planificado veintiséis bodas judías desde 2012, a través de las corrientes ortodoxa, conservadora, reformista y la tradición laica-cultural. La mayoría han sido un solo día completo; varias se han abierto con una cena de Shabat la víspera, y unas pocas han recorrido el arco entero de viernes a domingo.",
        "Lo más difícil de una boda judía de destino rara vez es la ceremonia: son la cocina kosher y los horarios de Shabat. Por eso los llevamos nosotros. Un rabino con quien trabajamos desde hace años viaja con nosotros, y un catering kosher se traslada con un protocolo de cocina sellada acordado con el hotel meses antes.",
        "Dentro de la tradición, las diferencias importan. Una ketubah ortodoxa se atestigua de un modo distinto a una reformista; una mechitza es esencial para algunas familias e inexistente para otras; las sheva brachot pueden cantarse en hebreo o leerse en dos idiomas. Nunca presuponemos. Preguntamos, en privado, y sostenemos lo que disponga el rabino oficiante.",
        "Lo que no cambia es la forma del día: la bedeken antes de la chuppah, el cristal roto al cierre, el yichud antes de la celebración, y una hora que no termina hasta que bajan las sillas. Sostenemos ese arco como si lo hubieran escrito las familias, porque, a lo largo de los siglos, así fue.",
      ],
      pull: "«Lo más difícil de una boda judía de destino rara vez es la ceremonia: son la cocina kosher y los horarios de Shabat. Por eso los llevamos nosotros.»",
      signatureName: "Grecia",
      signatureRole: "Fundadora · Tras veintiséis bodas judías",
    },
    ceremonyArc: {
      eyebrow: "Estructura de la ceremonia",
      headline: "El arco de *siete partes.*",
      deck: "El orden ceremonial que sostenemos en un día de boda judía típico. Existen variaciones: el rabino oficiante fija el orden y el texto para su familia y su corriente.",
      steps: [
        { numeral: "I", name: "Kabbalat Panim", sub: "Recibir a los invitados", when: "Antes de la ceremonia", body: "Dos recepciones en paralelo, una para la novia y otra para el novio. Se revisa la ketubah y las familias se reúnen antes de que la pareja se encuentre." },
        { numeral: "II", name: "Bedeken", sub: "El velado", when: "Justo antes", body: "Se conduce al novio hasta la novia para bajarle el velo, en recuerdo de las matriarcas. Un instante breve e intenso que a menudo concentra toda la emoción del día." },
        { numeral: "III", name: "Ketubah", sub: "Firma del contrato", when: "Antes de la chuppah", body: "El contrato matrimonial es firmado por los testigos que exige la tradición del rabino oficiante y luego se lleva a la chuppah para leerlo en voz alta." },
        { numeral: "IV", name: "Chuppah", sub: "Bajo el palio", when: "La ceremonia", body: "Los votos bajo el palio abierto: el anillo entregado ante testigos, la lectura de la ketubah y las sheva brachot —siete bendiciones— cantadas sobre una copa de vino." },
        { numeral: "V", name: "Rotura del cristal", sub: "Shevirat ha-kos", when: "Cierre de la ceremonia", body: "El novio rompe un cristal con el pie, un recuerdo que se sostiene incluso en la alegría. Los invitados gritan «Mazel tov» y comienza la celebración." },
        { numeral: "VI", name: "Yichud", sub: "Reclusión", when: "Justo después", body: "Los recién casados se retiran a solas un breve intervalo: los primeros minutos de silencio del matrimonio, antes de entregar la sala a los invitados." },
        { numeral: "VII", name: "Hora y recepción", sub: "Celebración", when: "Por la noche", body: "La pareja en alto sobre las sillas en la hora, luego la cena, las sheva brachot repetidas durante la comida, los discursos y un baile que no termina pronto." },
      ],
    },
    designConcepts: {
      eyebrow: "Conceptos de diseño",
      headline: "Chuppah, *paletas.*",
      deck: "Tres direcciones de diseño que hemos construido más de una vez. Cada boda las adapta: la paleta, el palio, la escala de las flores.",
      cards: [
        {
          title: "Chuppah de Marfil y Olivo",
          body: "Un palio depurado en lino marfil y olivo cayente, con cirios blancos y un paño de chuppah bordado a mano. Se lee maravillosamente frente al mar.",
          palette: ["#f5f0e6", "#b8b48f", "#6b6f4c", "#d6cdb8", "#3a3d2c"],
          imageKey: "concept-1",
          rows: [
            { label: "Chuppah", value: "Lino a cuatro postes, 3,6 m" },
            { label: "Flores", value: "Olivo · rosa blanca · eucalipto" },
            { label: "Ideal para", value: "Playa · terraza · jardín" },
          ],
        },
        {
          title: "Jardín Blanco",
          body: "Un palio romántico de rosas blancas trepadoras, jazmín y verdor sobre una estructura de madera sin tratar. Suave, abundante y de una clasicidad serena.",
          palette: ["#fbf7f0", "#e8e2d4", "#a7a78b", "#cdb89a", "#4a523d"],
          imageKey: "concept-2",
          rows: [
            { label: "Chuppah", value: "Pérgola de madera florida" },
            { label: "Flores", value: "Rosa de jardín · jazmín · hiedra" },
            { label: "Ideal para", value: "Villa · viñedo · finca" },
          ],
        },
        {
          title: "Minimal Moderno",
          body: "Un palio arquitectónico y limpio en piedra clara y latón cepillado, con una única línea floral escultórica. Para parejas que buscan contención, no ausencia.",
          palette: ["#ece7df", "#c9c2b4", "#8a8473", "#bfa46a", "#2f2c26"],
          imageKey: "concept-3",
          rows: [
            { label: "Chuppah", value: "Estructura de latón y piedra" },
            { label: "Flores", value: "Tallo único · escultórico" },
            { label: "Ideal para", value: "Azotea · galería · villa moderna" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocolo cultural",
      headline: "Lo que consideramos *sagrado.*",
      deck: "Seis principios que no negociamos. Donde la norma varía según la corriente, sostenemos lo que disponga el rabino oficiante, no lo que resulte cómodo.",
      items: [
        { title: "Nunca en Shabat", body: "Las bodas judías no se celebran en Shabat. Las ceremonias comienzan tras la puesta de sol del sábado, o el domingo. Construimos todo el calendario del fin de semana en torno a la hora real del ocaso local, no a una aproximación." },
        { title: "La ketubah se atestigua como corresponde", body: "La ketubah la firman los testigos que el rabino oficiante exige para su tradición. Confirmamos el texto, los testigos y el idioma con el rabino mucho antes del día, nunca en él." },
        { title: "La cocina kosher, sellada e instruida", body: "El catering kosher no es una elección de menú; es un protocolo de cocina. Acordamos una cocina sellada con el hotel meses antes, trasladamos a nuestro catering cuando hace falta e instruimos a todo el equipo del hotel." },
        { title: "El cristal se rompe con seguridad", body: "La rotura del cristal se prepara con un vaso envuelto y previamente marcado sobre una superficie protegida, para que el instante sea entero y nadie se lastime. Rito y seguridad no están reñidos." },
        { title: "El rabino fija el orden", body: "Donde difieren las prácticas ortodoxa, conservadora y reformista —la mechitza, las vueltas, el texto de las bendiciones— seguimos la guía del rabino oficiante e instruimos al lugar en consecuencia." },
        { title: "Las costumbres se honran, no se allanan", body: "Mechitza y baile separado para las familias observantes; costumbres igualitarias para otras. Preguntamos, en privado, qué guarda su familia, y no tratamos una boda judía como plantilla de la siguiente." },
      ],
    },
    planning: {
      eyebrow: "Planificación de varios días",
      headline: "Una *boda judía,* hora a hora.",
      deck: "El esquema que usamos para una boda judía típica de 150 invitados. Cada día se flexibiliza; la estructura no. El horario de Shabat lo fija el ocaso local.",
      days: [
        {
          numeral: "I",
          dayLabel: "Día uno",
          title: "Bienvenida y Shabat",
          body: "Los invitados llegan a lo largo del día, con traslados coordinados por el atelier. Para las familias observantes celebramos una cena de Shabat tras el encendido de velas: una velada serena y atendida antes de la boda, con la cocina kosher ya en servicio.",
          events: [
            { time: "Mañana", body: "Llegadas · traslados al aeropuerto · check-in en el hotel" },
            { time: "Tarde", body: "Tiempo libre · detalles de bienvenida en cada habitación" },
            { time: "Antes del ocaso", body: "Encendido de velas · comienza el Shabat (según el ocaso local)" },
            { time: "Noche", body: "Cena de Shabat · kidush · comida atendida en mesa larga" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Día dos",
          title: "La boda",
          body: "El día completo de la boda. Kabbalat Panim en paralelo, la firma de la ketubah, la bedeken, y luego la chuppah a la hora que fije el rabino —normalmente al caer la tarde— para que la ceremonia coincida con la luz dorada y la celebración se extienda a la noche.",
          events: [
            { time: "15:00", body: "Kabbalat Panim · dos recepciones en paralelo" },
            { time: "16:00", body: "Firma de la ketubah · testigos · bedeken" },
            { time: "16:45", body: "Chuppah · anillo · sheva brachot · rotura del cristal" },
            { time: "17:15", body: "Yichud · el intervalo privado de la pareja" },
            { time: "18:00", body: "Cóctel de recepción" },
            { time: "19:30", body: "Hora · cena · sheva brachot · discursos · baile" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Día tres",
          title: "Brunch y despedidas",
          body: "Un brunch a la mañana siguiente ofrecido por la pareja, a menudo al aire libre, más relajado y centrado en las despedidas. Para algunas familias es también una comida de sheva brachot, con las siete bendiciones repetidas una vez más.",
          events: [
            { time: "11:00", body: "Brunch · junto a la piscina o en el jardín" },
            { time: "12:30", body: "Sheva brachot opcional · siete bendiciones repetidas" },
            { time: "Tarde", body: "Salidas · traslados al aeropuerto" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilidad de destinos",
      headline: "Dónde funcionan *mejor* las bodas judías.",
      viewAllLabel: "Ver todos los destinos →",
      viewAllHref: staticPath("es", "/destinations"),
      cards: [
        { rating: 5, name: "St. Barths", sub: "Caribe · noviembre – abril", destinationSlug: "st-barths" },
        { rating: 5, name: "Los Hamptons", sub: "Estados Unidos · mayo – septiembre", destinationSlug: "the-hamptons" },
        { rating: 5, name: "Lago de Como", sub: "Italia · junio – septiembre", destinationSlug: "lake-como" },
        { rating: 4, name: "Amalfi", sub: "Italia · mayo – octubre", destinationSlug: "amalfi" },
        { rating: 4, name: "Toscana", sub: "Italia · mayo – octubre", destinationSlug: "tuscany" },
        { rating: 4, name: "Costa Azul", sub: "Francia · junio – septiembre", destinationSlug: "cote-dazur" },
        { rating: 4, name: "Mustique", sub: "Caribe · noviembre – abril", destinationSlug: "mustique" },
        { rating: 3, name: "Aspen y Napa", sub: "Estados Unidos · por temporada", destinationSlug: "aspen-napa" },
      ],
    },
    guest: {
      eyebrow: "Gestión de invitados",
      headline: "El cuidado *práctico* de 150 invitados.",
      deck: "La capa logística que la mayoría de los planificadores infradota. Para una boda judía en el extranjero, empieza por la cocina y por el calendario.",
      cells: [
        { title: "Protocolo dietético kosher", body: "Una cocina kosher sellada acordada con el hotel, nuestro propio catering cuando hace falta y comidas claramente señaladas durante el fin de semana. Opciones kosher, vegetarianas, veganas y sin alérgenos en cada servicio." },
        { title: "Invitados observantes del Shabat", body: "Habitaciones cercanas al lugar para que nadie tenga que conducir, tarjetas-llave y luces preparadas de antemano, comidas ajustadas al encendido de velas y un programa compatible con el Shabat para quienes lo guardan." },
        { title: "Mayores y movilidad", body: "Asientos reservados, transporte aparte, habitaciones en planta baja para los invitados de más edad y un enlace del atelier durante todo el fin de semana. Atención médica de guardia durante el evento." },
        { title: "Viajes y bloques de habitaciones", body: "Bloques de habitaciones en tres categorías, traslados al aeropuerto en los días de llegada y paquetes de bienvenida en cada habitación con el programa, el código de vestimenta por evento y los contactos clave." },
        { title: "Vestimenta y kippot", body: "Kippot a disposición de los invitados en la chuppah, un talit preparado cuando la ceremonia lo requiere y servicio de planchado en el hotel para la llegada y la mañana de la boda." },
        { title: "Comunicaciones", body: "Un grupo de invitados tres semanas antes, una web de boda con el programa, los códigos de vestimenta y los mapas del lugar, y guías impresas, incluida una nota breve para quienes asisten por primera vez a una boda judía." },
      ],
    },
    related: {
      eyebrow: "Seguir leyendo",
      headline: "Del *diario.*",
      articles: [
        { category: "Bodas Judías · Kosher", title: "Cómo funciona en realidad el catering kosher en el extranjero", body: "Sobre cocinas selladas, catering trasladado y las conversaciones con el hotel que han de ocurrir meses antes.", imageKey: "culture-related-1" },
        { category: "Tradición", title: "La chuppah, en detalle", body: "Abierta por sus cuatro lados, sostenida sobre la pareja: una breve guía del palio y de su significado.", imageKey: "culture-related-2" },
        { category: "Planificación · Shabat", title: "Planificar una boda de destino en torno al Shabat", body: "Por qué es el ocaso local, y no el calendario, quien fija el fin de semana, y cómo construimos a partir de ahí.", imageKey: "culture-related-3" },
        { category: "Interreligiosa", title: "Bodas judías interreligiosas, sostenidas enteras", body: "Dos oficiantes, dos tradiciones, un día cohesivo, sin diluir a ninguna de las partes.", imageKey: "culture-related-4" },
        { category: "Coste · Judía", title: "Cuánto cuesta realmente una boda judía de lujo", body: "Presupuestos francos de 2026 por número de invitados, incluido el coste de llevarse la cocina.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "St. Barths", href: destinationPath("es", "st-barths") },
        { label: "Los Hamptons", href: destinationPath("es", "the-hamptons") },
        { label: "Lago de Como", href: destinationPath("es", "lake-como") },
        { label: "Costa Azul", href: destinationPath("es", "cote-dazur") },
      ],
      sidebarVenues: [
        { label: "Eden Roc · St. Barths" },
        { label: "Villa d'Este · Lago de Como" },
        { label: "Topping Rose House · Los Hamptons" },
        { label: "Grand-Hôtel du Cap-Ferrat" },
      ],
      sidebarCultures: [
        { label: "Bodas indias", href: culturePath("es", "indian-weddings") },
        { label: "Bodas interreligiosas", href: culturePath("es", "interfaith-weddings") },
        { label: "Bodas cristianas", href: culturePath("es", "christian-weddings") },
        { label: "Bodas europeas", href: culturePath("es", "european-weddings") },
      ],
    },
    faq: {
      eyebrow: "Preguntas, respondidas",
      headline: "Preguntas *frecuentes.*",
      items: [
        {
          question: "¿Pueden celebrar una ceremonia ortodoxa en el extranjero?",
          answer: [
            "Sí. Hemos celebrado ceremonias ortodoxas de destino, con la mechitza, los testigos y el orden que exige el rabino oficiante.",
            "El trabajo está en la preparación: el rabino adecuado, una cocina kosher debidamente sellada, alojamiento lo bastante cercano para que los invitados observantes no tengan que conducir y un fin de semana ajustado al Shabat local. Lo confirmamos todo con el rabino antes de reservar nada.",
          ],
        },
        {
          question: "¿Cómo funciona el catering kosher en un hotel?",
          answer: [
            "Kosher es un protocolo de cocina, no un menú. Según su nivel de observancia y el lugar, kasherizamos bajo supervisión una zona de la cocina del hotel, o bien llevamos nuestro propio catering y una cocina sellada.",
            "Acordamos el dispositivo con el hotel meses antes e instruimos a todo su equipo, para cumplir sin concesiones el estándar que su familia guarda.",
          ],
        },
        {
          question: "¿Aportan ustedes el rabino?",
          answer: [
            "Podemos hacerlo. Un rabino con quien trabajamos desde hace años viaja con el atelier, y también trabajamos con el rabino propio de la pareja cuando lo tienen.",
            "El rabino oficiante fija el orden de la ceremonia, el texto de las bendiciones y los requisitos de la ketubah y los testigos; nosotros construimos el día en torno a su guía.",
          ],
        },
        {
          question: "¿Qué hay del horario de Shabat?",
          answer: [
            "Las bodas judías no se celebran en Shabat. Programamos la ceremonia para el sábado tras el ocaso local, o el domingo, y construimos la bienvenida y cualquier cena de Shabat en torno a la hora real de la puesta de sol en el lugar, que confirmamos al minuto.",
          ],
        },
        {
          question: "¿Pueden celebrar una boda judía interreligiosa?",
          answer: [
            "Sí, es uno de los trabajos que más nos piden. Nuestra propuesta habitual es de dos oficiantes y una sola ceremonia cohesiva: la chuppah y las siete bendiciones junto a la otra tradición, sin diluir a ninguna de las partes.",
            "La forma depende de las familias y de qué oficiantes co-celebrarán. Ayudamos a encontrar clero dispuesto a hacerlo y sostenemos el día para que ambas tradiciones queden enteras.",
          ],
        },
        {
          question: "¿Cuánto cuesta normalmente una boda judía de destino?",
          answer: [
            "Un rango útil para 2026, en bodas de 80 a 200 invitados, es de 180.000 a 650.000 USD con todo incluido; el catering kosher y la cocina trasladada suelen añadir un 15–25 % sobre una boda no kosher comparable.",
            "Compartimos presupuestos plenamente transparentes en la primera consulta, con rangos por partidas según el número de invitados y el nivel de observancia.",
          ],
        },
        {
          question: "¿Necesitamos una ceremonia legal aparte?",
          answer: [
            "A menudo, sí. La ceremonia religiosa bajo la chuppah es el corazón del día, pero en muchos destinos el matrimonio legal se registra por separado, a veces en casa antes de viajar.",
            "Trazamos pronto la vía legal según su destino y su nacionalidad, para que el día religioso se sostenga enteramente por su propio sentido, con el papeleo ya resuelto.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Una conversación privada —",
      headline: "*Comience* su\nboda judía.",
      body: "Cuéntenos la tradición que guardan, las familias, el nivel de observancia y una fecha aproximada. Grecia responde, en persona, en un plazo de cinco días laborables.",
      ctaLabel: "Solicitar una consulta privada →",
      ctaHref: staticPath("es", "/contact"),
    },
  },

  fr: {
    name: "Mariages Juifs",
    cardEyebrow: "Juif",
    cardBlurb: "Houppa, ketouba, sheva brakhot — orthodoxe, massorti, libéral.",
    cardMeta: "Découvrir",
    intro:
      "De la houppa à la ketouba, tenus avec un rabbin et un traiteur casher qui voyagent avec nous jusqu'à la côte.",
    hero: {
      eyebrow: "Les Traditions · No 02",
      scriptOverline: "Un mariage de",
      headline: "tradition *juive.*",
      deck: "Chuppah, ketubah et sheva brachot, tenus à l'étranger avec le rabbin et la cuisine casher que nous amenons. D'un à trois jours, de cinquante à trois cents invités.",
      captionLeft: "Maya & Daniel · St. Barths",
      captionCenter: "Sous la chuppah · 2025",
      captionRight: "Planche II",
    },
    factStrip: [
      { label: "Durée", value: "1 – 3 jours", sub: "Option Shabbat" },
      { label: "Invités", value: "50 – 300", sub: "De l'intime au grand" },
      { label: "Anticipation", value: "12 – 18 mois", sub: "Le rabbin réserve tôt" },
      { label: "Courants", value: "Orthodoxe · Massorti", sub: "Libéral · Laïque" },
      { label: "Traiteur", value: "Coordination casher", sub: "Cuisine acheminée" },
      { label: "Langues", value: "EN · Hébreu", sub: "Et la vôtre" },
    ],
    overview: {
      sideEyebrow: "La tradition",
      sideNote:
        "Vingt-six mariages juifs, quatorze ans. Un registre vivant de ce que nous savons pour tenir la tradition à l'étranger avec grâce.",
      headline: "Une chuppah,\ndeux familles,\nune *alliance.*",
      lede: "Un mariage juif est une alliance scellée en public. Sous la chuppah — ouverte de tous côtés — deux personnes s'unissent devant témoins, et la communauté fait partie de la cérémonie, elle n'en est pas le public.",
      bodyParagraphs: [
        "Nous avons organisé vingt-six mariages juifs depuis 2012, dans les courants orthodoxe, massorti, libéral et dans la tradition laïque-culturelle. La plupart se sont tenus sur une seule journée pleine ; plusieurs se sont ouverts par un dîner de Shabbat la veille, et quelques-uns ont déroulé l'arc entier du vendredi au dimanche.",
        "Le plus difficile, dans un mariage juif de destination, est rarement la cérémonie : ce sont la cuisine casher et les horaires de Shabbat. Aussi les amenons-nous nous-mêmes. Un rabbin avec qui nous travaillons depuis des années voyage avec nous, et un traiteur casher nous rejoint avec un protocole de cuisine scellée convenu avec l'établissement des mois à l'avance.",
        "Au sein de la tradition, les différences comptent. Une ketubah orthodoxe est attestée autrement qu'une ketubah libérale ; une mechitza est essentielle pour certaines familles, absente pour d'autres ; les sheva brachot peuvent être chantées en hébreu ou lues en deux langues. Nous ne présumons jamais. Nous demandons, en privé, et nous tenons ce que fixe le rabbin officiant.",
        "Ce qui ne change pas, c'est la forme du jour : la bedeken avant la chuppah, le verre brisé à la clôture, le yichud avant la fête, et une hora qui ne s'arrête pas tant que les chaises ne sont pas redescendues. Nous tenons cet arc comme si les familles l'avaient écrit — car, à travers les siècles, elles l'ont fait.",
      ],
      pull: "«Le plus difficile, dans un mariage juif de destination, est rarement la cérémonie : ce sont la cuisine casher et les horaires de Shabbat. Aussi les amenons-nous nous-mêmes.»",
      signatureName: "Grecia",
      signatureRole: "Fondatrice · Après vingt-six mariages juifs",
    },
    ceremonyArc: {
      eyebrow: "Structure de la cérémonie",
      headline: "L'arc en *sept temps.*",
      deck: "L'ordre cérémoniel que nous tenons lors d'une journée de mariage juif typique. Des variantes existent : le rabbin officiant fixe l'ordre et le texte pour votre famille et votre courant.",
      steps: [
        { numeral: "I", name: "Kabbalat Panim", sub: "Accueil des invités", when: "Avant la cérémonie", body: "Deux réceptions en parallèle, l'une pour la mariée, l'autre pour le marié. La ketubah est relue et les familles se rassemblent avant que le couple soit réuni." },
        { numeral: "II", name: "Bedeken", sub: "Le voilage", when: "Juste avant", body: "Le marié est conduit jusqu'à la mariée pour abaisser son voile, en souvenir des matriarches. Un instant bref et intense qui porte souvent toute l'émotion de la journée." },
        { numeral: "III", name: "Ketubah", sub: "Signature du contrat", when: "Avant la chuppah", body: "Le contrat de mariage est signé par les témoins requis selon la tradition du rabbin officiant, puis porté à la chuppah pour y être lu à voix haute." },
        { numeral: "IV", name: "Chuppah", sub: "Sous le dais", when: "La cérémonie", body: "Les vœux sous le dais ouvert : l'anneau donné devant témoins, la lecture de la ketubah et les sheva brachot — sept bénédictions — chantées sur une coupe de vin." },
        { numeral: "V", name: "Bris du verre", sub: "Shevirat ha-kos", when: "Clôture de la cérémonie", body: "Le marié brise un verre sous son pied, mémoire tenue jusque dans la joie. Les invités lancent « Mazel tov » et la fête commence." },
        { numeral: "VI", name: "Yichud", sub: "Retrait à deux", when: "Aussitôt après", body: "Les jeunes mariés se retirent seuls un bref instant : les premières minutes de silence du mariage, avant que la salle soit rendue aux invités." },
        { numeral: "VII", name: "Hora & réception", sub: "Célébration", when: "En soirée", body: "Le couple hissé sur des chaises pour la hora, puis le dîner, les sheva brachot reprises pendant le repas, les discours et une danse qui ne s'arrête pas tôt." },
      ],
    },
    designConcepts: {
      eyebrow: "Concepts de design",
      headline: "Chuppah, *planches d'ambiance.*",
      deck: "Trois directions de design que nous avons construites plus d'une fois. Chaque mariage les adapte : la palette, le dais, l'échelle florale.",
      cards: [
        {
          title: "Chuppah Ivoire & Olivier",
          body: "Un dais épuré en lin ivoire et olivier retombant, avec des cierges blancs et un drap de chuppah brodé à la main. Magnifique face à la mer.",
          palette: ["#f5f0e6", "#b8b48f", "#6b6f4c", "#d6cdb8", "#3a3d2c"],
          imageKey: "concept-1",
          rows: [
            { label: "Chuppah", value: "Lin à quatre piliers, 3,6 m" },
            { label: "Fleurs", value: "Olivier · rose blanche · eucalyptus" },
            { label: "Idéal pour", value: "Plage · terrasse · jardin" },
          ],
        },
        {
          title: "Jardin Blanc",
          body: "Un dais romantique de roses blanches grimpantes, de jasmin et de verdure sur une ossature de bois brut. Doux, abondant et d'un classicisme tranquille.",
          palette: ["#fbf7f0", "#e8e2d4", "#a7a78b", "#cdb89a", "#4a523d"],
          imageKey: "concept-2",
          rows: [
            { label: "Chuppah", value: "Tonnelle de bois fleurie" },
            { label: "Fleurs", value: "Rose de jardin · jasmin · lierre" },
            { label: "Idéal pour", value: "Villa · vignoble · domaine" },
          ],
        },
        {
          title: "Minimal Moderne",
          body: "Un dais architectural et net en pierre claire et laiton brossé, avec une seule ligne florale sculpturale. Pour les couples qui veulent la retenue, non l'absence.",
          palette: ["#ece7df", "#c9c2b4", "#8a8473", "#bfa46a", "#2f2c26"],
          imageKey: "concept-3",
          rows: [
            { label: "Chuppah", value: "Ossature laiton et pierre" },
            { label: "Fleurs", value: "Tige unique · sculptural" },
            { label: "Idéal pour", value: "Rooftop · galerie · villa moderne" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocole culturel",
      headline: "Ce que nous tenons pour *sacré.*",
      deck: "Six principes sur lesquels nous ne transigeons pas. Là où la règle varie selon le courant, nous tenons ce que fixe le rabbin officiant — non ce qui arrange.",
      items: [
        { title: "Jamais pendant Shabbat", body: "Les mariages juifs ne se tiennent pas pendant Shabbat. Les cérémonies commencent après le coucher du soleil le samedi, ou le dimanche. Nous bâtissons tout le calendrier du week-end autour de l'heure réelle du coucher du soleil local, non d'une approximation." },
        { title: "La ketubah attestée comme il se doit", body: "La ketubah est signée par les témoins que le rabbin officiant exige pour votre tradition. Nous confirmons le texte, les témoins et la langue avec le rabbin bien avant le jour, jamais le jour même." },
        { title: "La cuisine casher, scellée et briefée", body: "Le casher n'est pas un choix de menu ; c'est un protocole de cuisine. Nous convenons d'une cuisine scellée avec l'établissement des mois à l'avance, acheminons notre traiteur au besoin et briefons chaque membre de l'équipe sur place." },
        { title: "Le verre brisé en sécurité", body: "Le bris du verre est préparé avec un verre enveloppé et pré-entaillé sur une surface protégée, afin que l'instant soit entier et que personne ne se blesse. Le rite et la sécurité ne s'opposent pas." },
        { title: "Le rabbin fixe l'ordre", body: "Là où les pratiques orthodoxe, massorti et libérale diffèrent — la mechitza, les tours, le texte des bénédictions — nous suivons les indications du rabbin officiant et briefons le lieu en conséquence." },
        { title: "Les coutumes honorées, non aplanies", body: "Mechitza et danse séparée pour les familles pratiquantes ; coutumes égalitaires pour d'autres. Nous demandons, en privé, ce que votre famille garde, et nous ne traitons pas un mariage juif comme le modèle du suivant." },
      ],
    },
    planning: {
      eyebrow: "Planification sur plusieurs jours",
      headline: "Un *mariage juif,* heure par heure.",
      deck: "Le canevas que nous utilisons pour un mariage juif typique de 150 invités. Chaque jour s'assouplit ; la structure, non. L'horaire de Shabbat est fixé par le coucher du soleil local.",
      days: [
        {
          numeral: "I",
          dayLabel: "Premier jour",
          title: "Accueil & Shabbat",
          body: "Les invités arrivent au fil de la journée, les transferts coordonnés par l'atelier. Pour les familles pratiquantes, nous tenons un dîner de Shabbat après l'allumage des bougies : une soirée calme et accompagnée avant le mariage, la cuisine casher déjà en service.",
          events: [
            { time: "Matin", body: "Arrivées · transferts aéroport · enregistrement à l'hôtel" },
            { time: "Après-midi", body: "Temps libre · attentions de bienvenue dans chaque chambre" },
            { time: "Avant le coucher du soleil", body: "Allumage des bougies · début de Shabbat (selon le coucher local)" },
            { time: "Soir", body: "Dîner de Shabbat · kiddoush · repas accompagné à grande table" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Deuxième jour",
          title: "Le mariage",
          body: "La journée pleine du mariage. Kabbalat Panim en parallèle, la signature de la ketubah, la bedeken, puis la chuppah à l'heure que fixe le rabbin — souvent en fin d'après-midi — pour que la cérémonie rencontre la lumière dorée et que la fête se prolonge dans la nuit.",
          events: [
            { time: "15h00", body: "Kabbalat Panim · deux réceptions en parallèle" },
            { time: "16h00", body: "Signature de la ketubah · témoins · bedeken" },
            { time: "16h45", body: "Chuppah · anneau · sheva brachot · bris du verre" },
            { time: "17h15", body: "Yichud · l'intervalle privé du couple" },
            { time: "18h00", body: "Cocktail de réception" },
            { time: "19h30", body: "Hora · dîner · sheva brachot · discours · danse" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Troisième jour",
          title: "Brunch & adieux",
          body: "Un brunch du lendemain offert par le couple — souvent en plein air, plus détendu, centré sur les au revoir. Pour certaines familles, c'est aussi un repas de sheva brachot, les sept bénédictions reprises une dernière fois.",
          events: [
            { time: "11h00", body: "Brunch · au bord de la piscine ou au jardin" },
            { time: "12h30", body: "Sheva brachot facultatives · sept bénédictions reprises" },
            { time: "Après-midi", body: "Départs · transferts aéroport" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilité des destinations",
      headline: "Où les mariages juifs *réussissent le mieux.*",
      viewAllLabel: "Voir toutes les destinations →",
      viewAllHref: staticPath("fr", "/destinations"),
      cards: [
        { rating: 5, name: "St. Barths", sub: "Caraïbes · novembre – avril", destinationSlug: "st-barths" },
        { rating: 5, name: "Les Hamptons", sub: "États-Unis · mai – septembre", destinationSlug: "the-hamptons" },
        { rating: 5, name: "Lac de Côme", sub: "Italie · juin – septembre", destinationSlug: "lake-como" },
        { rating: 4, name: "Amalfi", sub: "Italie · mai – octobre", destinationSlug: "amalfi" },
        { rating: 4, name: "Toscane", sub: "Italie · mai – octobre", destinationSlug: "tuscany" },
        { rating: 4, name: "Côte d'Azur", sub: "France · juin – septembre", destinationSlug: "cote-dazur" },
        { rating: 4, name: "Mustique", sub: "Caraïbes · novembre – avril", destinationSlug: "mustique" },
        { rating: 3, name: "Aspen & Napa", sub: "États-Unis · selon la saison", destinationSlug: "aspen-napa" },
      ],
    },
    guest: {
      eyebrow: "Gestion des invités",
      headline: "Le soin *pratique* de 150 invités.",
      deck: "La couche logistique que la plupart des organisateurs sous-dotent. Pour un mariage juif à l'étranger, elle commence par la cuisine et par le calendrier.",
      cells: [
        { title: "Protocole alimentaire casher", body: "Une cuisine casher scellée convenue avec l'établissement, notre propre traiteur au besoin et des repas clairement signalés tout le week-end. Options casher, végétariennes, véganes et sans allergènes à chaque service." },
        { title: "Invités observant le Shabbat", body: "Des chambres proches du lieu pour qu'aucun trajet ne soit nécessaire, cartes-clés et éclairages préparés à l'avance, repas calés sur l'allumage des bougies et un programme compatible avec le Shabbat pour ceux qui le gardent." },
        { title: "Aînés & mobilité", body: "Places réservées, transport séparé, chambres en rez-de-chaussée pour les invités les plus âgés et un référent de l'atelier tout le week-end. Médecin de garde pendant toute la durée." },
        { title: "Voyages & blocs de chambres", body: "Blocs de chambres sur trois niveaux, transferts aéroport sur les jours d'arrivée et pochettes de bienvenue dans chaque chambre avec le programme, le code vestimentaire par événement et les contacts clés." },
        { title: "Tenue & kippot", body: "Kippot mises à disposition des invités à la chuppah, un tallit prêt quand la cérémonie l'exige et un service de repassage à l'hôtel pour l'arrivée et le matin du mariage." },
        { title: "Communications", body: "Un groupe d'invités trois semaines à l'avance, un site de mariage avec le programme, les codes vestimentaires et les plans du lieu, et des guides imprimés — dont une courte note pour ceux qui assistent à leur premier mariage juif." },
      ],
    },
    related: {
      eyebrow: "Poursuivre la lecture",
      headline: "Du *journal.*",
      articles: [
        { category: "Mariages Juifs · Casher", title: "Comment fonctionne réellement le traiteur casher à l'étranger", body: "Sur les cuisines scellées, les traiteurs acheminés et les échanges avec l'établissement qui doivent avoir lieu des mois à l'avance.", imageKey: "culture-related-1" },
        { category: "Tradition", title: "La chuppah, en détail", body: "Ouverte de tous côtés, tenue au-dessus du couple : un bref guide du dais et de son sens.", imageKey: "culture-related-2" },
        { category: "Planification · Shabbat", title: "Organiser un mariage de destination autour de Shabbat", body: "Pourquoi c'est le coucher du soleil local, et non le calendrier, qui fixe le week-end — et comment nous bâtissons à partir de là.", imageKey: "culture-related-3" },
        { category: "Interconfessionnel", title: "Mariages juifs interconfessionnels, tenus entiers", body: "Deux officiants, deux traditions, une journée cohérente, sans diluer aucun des deux côtés.", imageKey: "culture-related-4" },
        { category: "Coût · Juif", title: "Ce que coûte vraiment un mariage juif de luxe", body: "Budgets francs 2026 par nombre d'invités, coût d'acheminement de la cuisine compris.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "St. Barths", href: destinationPath("fr", "st-barths") },
        { label: "Les Hamptons", href: destinationPath("fr", "the-hamptons") },
        { label: "Lac de Côme", href: destinationPath("fr", "lake-como") },
        { label: "Côte d'Azur", href: destinationPath("fr", "cote-dazur") },
      ],
      sidebarVenues: [
        { label: "Eden Roc · St. Barths" },
        { label: "Villa d'Este · Lac de Côme" },
        { label: "Topping Rose House · Les Hamptons" },
        { label: "Grand-Hôtel du Cap-Ferrat" },
      ],
      sidebarCultures: [
        { label: "Mariages indiens", href: culturePath("fr", "indian-weddings") },
        { label: "Mariages interconfessionnels", href: culturePath("fr", "interfaith-weddings") },
        { label: "Mariages chrétiens", href: culturePath("fr", "christian-weddings") },
        { label: "Mariages européens", href: culturePath("fr", "european-weddings") },
      ],
    },
    faq: {
      eyebrow: "Vos questions, nos réponses",
      headline: "Questions *fréquentes.*",
      items: [
        {
          question: "Pouvez-vous tenir une cérémonie orthodoxe à l'étranger ?",
          answer: [
            "Oui. Nous avons tenu des cérémonies orthodoxes en destination, avec la mechitza, les témoins et l'ordre exigés par le rabbin officiant.",
            "Le travail est dans la préparation : le bon rabbin, une cuisine casher correctement scellée, un hébergement assez proche pour que les invités pratiquants n'aient pas à conduire et un week-end calé sur le Shabbat local. Nous confirmons l'ensemble avec le rabbin avant toute réservation.",
          ],
        },
        {
          question: "Comment le traiteur casher fonctionne-t-il dans un établissement ?",
          answer: [
            "Le casher est un protocole de cuisine, non un menu. Selon votre niveau de pratique et le lieu, soit nous cachérisons sous supervision une partie de la cuisine de l'établissement, soit nous amenons notre propre traiteur et une cuisine scellée.",
            "Nous convenons du dispositif avec l'établissement des mois à l'avance et briefons toute son équipe, afin que le standard de votre famille soit respecté sans compromis.",
          ],
        },
        {
          question: "Fournissez-vous le rabbin ?",
          answer: [
            "Nous le pouvons. Un rabbin avec qui nous travaillons depuis des années voyage avec l'atelier, et nous travaillons aussi avec le rabbin propre du couple lorsqu'il en a un.",
            "Le rabbin officiant fixe l'ordre de la cérémonie, le texte des bénédictions et les exigences relatives à la ketubah et aux témoins — nous bâtissons la journée autour de ses indications.",
          ],
        },
        {
          question: "Et l'horaire de Shabbat ?",
          answer: [
            "Les mariages juifs ne se tiennent pas pendant Shabbat. Nous programmons la cérémonie le samedi après le coucher du soleil local, ou le dimanche, et nous bâtissons l'accueil et tout dîner de Shabbat autour de l'heure réelle du coucher du soleil sur place, que nous confirmons à la minute.",
          ],
        },
        {
          question: "Pouvez-vous tenir un mariage juif interconfessionnel ?",
          answer: [
            "Oui — c'est l'une de nos demandes les plus fréquentes. Notre approche par défaut : deux officiants et une seule cérémonie cohérente, la chuppah et les sept bénédictions tenues aux côtés de l'autre tradition, sans diluer aucun des deux côtés.",
            "La forme dépend des familles et des officiants qui co-célébreront. Nous aidons à trouver des ministres du culte qui acceptent, et nous tenons la journée pour que les deux traditions restent entières.",
          ],
        },
        {
          question: "Quel est le coût habituel d'un mariage juif de destination ?",
          answer: [
            "Une fourchette utile pour 2026, sur des mariages de 80 à 200 invités, va de 180 000 à 650 000 USD tout compris ; le traiteur casher et la cuisine acheminée ajoutent généralement 15 à 25 % par rapport à un mariage non casher comparable.",
            "Nous partageons des budgets pleinement transparents dès la première consultation, avec des fourchettes par poste selon le nombre d'invités et le niveau de pratique.",
          ],
        },
        {
          question: "Avons-nous besoin d'une cérémonie civile distincte ?",
          answer: [
            "Souvent, oui. La cérémonie religieuse sous la chuppah est le cœur de la journée, mais dans beaucoup de destinations le mariage civil s'enregistre séparément, parfois chez vous avant le départ.",
            "Nous cartographions tôt la voie légale selon votre destination et votre nationalité, afin que la journée religieuse tienne entièrement par son propre sens, les démarches déjà réglées.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Une conversation privée —",
      headline: "*Commencez* votre\nmariage juif.",
      body: "Dites-nous la tradition que vous gardez, les familles, le niveau de pratique et une date approximative. Grecia vous répond, personnellement, sous cinq jours ouvrés.",
      ctaLabel: "Demander une consultation privée →",
      ctaHref: staticPath("fr", "/contact"),
    },
  },

  pt: {
    name: "Casamentos Judaicos",
    cardEyebrow: "Judaico",
    cardBlurb: "Chupá, ketubá, sheva brachot — ortodoxo, conservador, reformista.",
    cardMeta: "Descobrir",
    intro:
      "Da chupá à ketubá, realizados com um rabino e um catering kosher que viajam connosco até à costa.",
    hero: {
      eyebrow: "As Tradições · N.º 02",
      scriptOverline: "Um casamento de",
      headline: "tradição *judaica.*",
      deck: "Chuppah, ketubah e sheva brachot, realizados no estrangeiro com o rabino e a cozinha kosher que levamos connosco. De um a três dias, de cinquenta a trezentos convidados.",
      captionLeft: "Maya & Daniel · St. Barths",
      captionCenter: "Sob a chuppah · 2025",
      captionRight: "Estampa II",
    },
    factStrip: [
      { label: "Duração", value: "1 – 3 dias", sub: "Com opção de Shabat" },
      { label: "Convidados", value: "50 – 300", sub: "Da íntima à grandiosa" },
      { label: "Antecedência", value: "12 – 18 meses", sub: "O rabino reserva cedo" },
      { label: "Correntes", value: "Ortodoxa · Conservadora", sub: "Reformista · Laica" },
      { label: "Catering", value: "Coordenação kosher", sub: "Cozinha deslocada" },
      { label: "Idiomas", value: "EN · Hebraico", sub: "E o seu próprio" },
    ],
    overview: {
      sideEyebrow: "A tradição",
      sideNote:
        "Vinte e seis casamentos judaicos, catorze anos. Um registo vivo do que sabemos sobre sustentar a tradição no estrangeiro com graça.",
      headline: "Uma chuppah,\nduas famílias,\numa *aliança.*",
      lede: "Um casamento judaico é uma aliança selada em público. Sob a chuppah — aberta dos quatro lados — duas pessoas unem-se perante testemunhas, e a comunidade faz parte da cerimónia, não é o seu público.",
      bodyParagraphs: [
        "Planeámos vinte e seis casamentos judaicos desde 2012, nas correntes ortodoxa, conservadora, reformista e na tradição laico-cultural. A maioria decorreu num único dia completo; vários abriram com um jantar de Shabat na véspera, e alguns percorreram o arco inteiro de sexta a domingo.",
        "O mais difícil num casamento judaico de destino raramente é a cerimónia: são a cozinha kosher e os horários de Shabat. Por isso levamo-los connosco. Um rabino com quem trabalhamos há anos viaja connosco, e um catering kosher desloca-se com um protocolo de cozinha selada acordado com a unidade meses antes.",
        "Dentro da tradição, as diferenças importam. Uma ketubah ortodoxa é testemunhada de modo distinto de uma reformista; uma mechitza é essencial para algumas famílias e inexistente para outras; as sheva brachot podem ser cantadas em hebraico ou lidas em duas línguas. Nunca presumimos. Perguntamos, em privado, e sustentamos o que o rabino oficiante determinar.",
        "O que não muda é a forma do dia: a bedeken antes da chuppah, o copo partido no encerramento, o yichud antes da festa, e uma hora que não termina enquanto as cadeiras não descem. Sustentamos esse arco como se as famílias o tivessem escrito — porque, ao longo dos séculos, escreveram-no.",
      ],
      pull: "«O mais difícil num casamento judaico de destino raramente é a cerimónia: são a cozinha kosher e os horários de Shabat. Por isso levamo-los connosco.»",
      signatureName: "Grecia",
      signatureRole: "Fundadora · Após vinte e seis casamentos judaicos",
    },
    ceremonyArc: {
      eyebrow: "Estrutura da cerimónia",
      headline: "O arco em *sete partes.*",
      deck: "A ordem cerimonial que sustentamos num dia de casamento judaico típico. Existem variações: o rabino oficiante fixa a ordem e o texto para a sua família e a sua corrente.",
      steps: [
        { numeral: "I", name: "Kabbalat Panim", sub: "Receber os convidados", when: "Antes da cerimónia", body: "Duas receções em paralelo, uma para a noiva e outra para o noivo. A ketubah é revista e as famílias reúnem-se antes de o casal se encontrar." },
        { numeral: "II", name: "Bedeken", sub: "O velar", when: "Mesmo antes", body: "O noivo é conduzido até à noiva para baixar o seu véu, em memória das matriarcas. Um instante breve e intenso que muitas vezes concentra toda a emoção do dia." },
        { numeral: "III", name: "Ketubah", sub: "Assinatura do contrato", when: "Antes da chuppah", body: "O contrato de casamento é assinado pelas testemunhas exigidas pela tradição do rabino oficiante e depois levado à chuppah para ser lido em voz alta." },
        { numeral: "IV", name: "Chuppah", sub: "Sob o pálio", when: "A cerimónia", body: "Os votos sob o pálio aberto: o anel dado perante testemunhas, a leitura da ketubah e as sheva brachot — sete bênçãos — cantadas sobre um cálice de vinho." },
        { numeral: "V", name: "Quebra do copo", sub: "Shevirat ha-kos", when: "Encerramento da cerimónia", body: "O noivo parte um copo com o pé, memória mantida mesmo na alegria. Os convidados gritam «Mazel tov» e começa a festa." },
        { numeral: "VI", name: "Yichud", sub: "Recolhimento", when: "Logo a seguir", body: "Os recém-casados retiram-se a sós por um breve intervalo: os primeiros minutos de silêncio do casamento, antes de a sala ser entregue aos convidados." },
        { numeral: "VII", name: "Hora e receção", sub: "Celebração", when: "À noite", body: "O casal erguido em cadeiras na hora, depois o jantar, as sheva brachot repetidas durante a refeição, os discursos e uma dança que não termina cedo." },
      ],
    },
    designConcepts: {
      eyebrow: "Conceitos de design",
      headline: "Chuppah, *moodboards.*",
      deck: "Três direções de design que construímos mais do que uma vez. Cada casamento adapta-as: a paleta, o pálio, a escala floral.",
      cards: [
        {
          title: "Chuppah de Marfim e Oliveira",
          body: "Um pálio depurado em linho marfim e oliveira pendente, com velas brancas e um pano de chuppah bordado à mão. Lê-se lindamente diante do mar.",
          palette: ["#f5f0e6", "#b8b48f", "#6b6f4c", "#d6cdb8", "#3a3d2c"],
          imageKey: "concept-1",
          rows: [
            { label: "Chuppah", value: "Linho de quatro postes, 3,6 m" },
            { label: "Flores", value: "Oliveira · rosa branca · eucalipto" },
            { label: "Ideal para", value: "Praia · terraço · jardim" },
          ],
        },
        {
          title: "Jardim Branco",
          body: "Um pálio romântico de rosas brancas trepadeiras, jasmim e verde sobre uma estrutura de madeira natural. Suave, abundante e de um classicismo sereno.",
          palette: ["#fbf7f0", "#e8e2d4", "#a7a78b", "#cdb89a", "#4a523d"],
          imageKey: "concept-2",
          rows: [
            { label: "Chuppah", value: "Caramanchão de madeira florido" },
            { label: "Flores", value: "Rosa de jardim · jasmim · hera" },
            { label: "Ideal para", value: "Villa · vinha · quinta" },
          ],
        },
        {
          title: "Minimal Moderno",
          body: "Um pálio arquitetónico e limpo em pedra clara e latão escovado, com uma única linha floral escultórica. Para casais que querem contenção, não ausência.",
          palette: ["#ece7df", "#c9c2b4", "#8a8473", "#bfa46a", "#2f2c26"],
          imageKey: "concept-3",
          rows: [
            { label: "Chuppah", value: "Estrutura de latão e pedra" },
            { label: "Flores", value: "Haste única · escultórico" },
            { label: "Ideal para", value: "Cobertura · galeria · villa moderna" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocolo cultural",
      headline: "O que temos por *sagrado.*",
      deck: "Seis princípios em que não transigimos. Onde a regra varia conforme a corrente, sustentamos o que o rabino oficiante determinar — não o que for cómodo.",
      items: [
        { title: "Nunca no Shabat", body: "Os casamentos judaicos não se realizam no Shabat. As cerimónias começam após o pôr do sol de sábado, ou no domingo. Construímos todo o calendário do fim de semana em torno da hora real do ocaso local, não de uma aproximação." },
        { title: "A ketubah testemunhada como deve ser", body: "A ketubah é assinada pelas testemunhas que o rabino oficiante exige para a sua tradição. Confirmamos o texto, as testemunhas e a língua com o rabino muito antes do dia, nunca no próprio dia." },
        { title: "A cozinha kosher, selada e instruída", body: "O catering kosher não é uma escolha de menu; é um protocolo de cozinha. Acordamos uma cozinha selada com a unidade meses antes, deslocamos o nosso catering quando necessário e instruímos toda a equipa local." },
        { title: "O copo partido em segurança", body: "A quebra do copo é preparada com um copo embrulhado e previamente marcado sobre uma superfície protegida, para que o instante seja inteiro e ninguém se magoe. Rito e segurança não estão em conflito." },
        { title: "O rabino fixa a ordem", body: "Onde as práticas ortodoxa, conservadora e reformista diferem — a mechitza, as voltas, o texto das bênçãos — seguimos a orientação do rabino oficiante e instruímos o local em conformidade." },
        { title: "Os costumes honrados, não nivelados", body: "Mechitza e dança separada para as famílias praticantes; costumes igualitários para outras. Perguntamos, em privado, o que a sua família guarda, e não tratamos um casamento judaico como modelo do seguinte." },
      ],
    },
    planning: {
      eyebrow: "Planeamento de vários dias",
      headline: "Um *casamento judaico,* hora a hora.",
      deck: "O esquema que usamos para um casamento judaico típico de 150 convidados. Cada dia flexibiliza-se; a estrutura não. O horário de Shabat é fixado pelo ocaso local.",
      days: [
        {
          numeral: "I",
          dayLabel: "Dia um",
          title: "Boas-vindas & Shabat",
          body: "Os convidados chegam ao longo do dia, com transferes coordenados pelo ateliê. Para as famílias praticantes realizamos um jantar de Shabat após o acender das velas: um serão sereno e acompanhado antes do casamento, com a cozinha kosher já em serviço.",
          events: [
            { time: "Manhã", body: "Chegadas · transferes do aeroporto · check-in no hotel" },
            { time: "Tarde", body: "Tempo livre · mimos de boas-vindas em cada quarto" },
            { time: "Antes do ocaso", body: "Acender das velas · começa o Shabat (segundo o ocaso local)" },
            { time: "Noite", body: "Jantar de Shabat · kidush · refeição acompanhada em mesa comprida" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Dia dois",
          title: "O casamento",
          body: "O dia completo do casamento. Kabbalat Panim em paralelo, a assinatura da ketubah, a bedeken, e depois a chuppah à hora que o rabino fixar — normalmente ao fim da tarde — para que a cerimónia encontre a luz dourada e a festa se estenda pela noite.",
          events: [
            { time: "15:00", body: "Kabbalat Panim · duas receções em paralelo" },
            { time: "16:00", body: "Assinatura da ketubah · testemunhas · bedeken" },
            { time: "16:45", body: "Chuppah · anel · sheva brachot · quebra do copo" },
            { time: "17:15", body: "Yichud · o intervalo privado do casal" },
            { time: "18:00", body: "Cocktail de receção" },
            { time: "19:30", body: "Hora · jantar · sheva brachot · discursos · dança" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Dia três",
          title: "Brunch & despedidas",
          body: "Um brunch na manhã seguinte oferecido pelo casal — muitas vezes ao ar livre, mais descontraído, centrado nas despedidas. Para algumas famílias é também uma refeição de sheva brachot, com as sete bênçãos repetidas mais uma vez.",
          events: [
            { time: "11:00", body: "Brunch · junto à piscina ou no jardim" },
            { time: "12:30", body: "Sheva brachot opcional · sete bênçãos repetidas" },
            { time: "Tarde", body: "Partidas · transferes para o aeroporto" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilidade de destinos",
      headline: "Onde os casamentos judaicos *resultam melhor.*",
      viewAllLabel: "Ver todos os destinos →",
      viewAllHref: staticPath("pt", "/destinations"),
      cards: [
        { rating: 5, name: "St. Barths", sub: "Caraíbas · novembro – abril", destinationSlug: "st-barths" },
        { rating: 5, name: "Os Hamptons", sub: "Estados Unidos · maio – setembro", destinationSlug: "the-hamptons" },
        { rating: 5, name: "Lago de Como", sub: "Itália · junho – setembro", destinationSlug: "lake-como" },
        { rating: 4, name: "Amalfi", sub: "Itália · maio – outubro", destinationSlug: "amalfi" },
        { rating: 4, name: "Toscana", sub: "Itália · maio – outubro", destinationSlug: "tuscany" },
        { rating: 4, name: "Costa Azul", sub: "França · junho – setembro", destinationSlug: "cote-dazur" },
        { rating: 4, name: "Mustique", sub: "Caraíbas · novembro – abril", destinationSlug: "mustique" },
        { rating: 3, name: "Aspen & Napa", sub: "Estados Unidos · sazonal", destinationSlug: "aspen-napa" },
      ],
    },
    guest: {
      eyebrow: "Gestão de convidados",
      headline: "O cuidado *prático* de 150 convidados.",
      deck: "A camada logística que a maioria dos planeadores subdimensiona. Para um casamento judaico no estrangeiro, começa pela cozinha e pelo calendário.",
      cells: [
        { title: "Protocolo alimentar kosher", body: "Uma cozinha kosher selada acordada com a unidade, o nosso próprio catering quando necessário e refeições claramente assinaladas durante o fim de semana. Opções kosher, vegetarianas, veganas e sem alergénios em cada serviço." },
        { title: "Convidados observantes do Shabat", body: "Quartos próximos do local para que ninguém tenha de conduzir, cartões-chave e iluminação preparados de antemão, refeições ajustadas ao acender das velas e um programa compatível com o Shabat para quem o guarda." },
        { title: "Idosos & mobilidade", body: "Lugares reservados, transporte à parte, quartos no piso térreo para os convidados mais idosos e um elo do ateliê durante todo o fim de semana. Médico de prevenção durante todo o evento." },
        { title: "Viagens & blocos de quartos", body: "Blocos de quartos em três níveis, transferes do aeroporto nos dias de chegada e pacotes de boas-vindas em cada quarto com o programa, o código de vestuário por evento e os contactos essenciais." },
        { title: "Traje & kippot", body: "Kippot à disposição dos convidados na chuppah, um talit a postos quando a cerimónia o exige e serviço de passar a ferro no hotel para a chegada e a manhã do casamento." },
        { title: "Comunicações", body: "Um grupo de convidados três semanas antes, um site de casamento com o programa, os códigos de vestuário e os mapas do local, e guias impressos — incluindo uma breve nota para quem assiste pela primeira vez a um casamento judaico." },
      ],
    },
    related: {
      eyebrow: "Continuar a ler",
      headline: "Do *diário.*",
      articles: [
        { category: "Casamentos Judaicos · Kosher", title: "Como funciona na realidade o catering kosher no estrangeiro", body: "Sobre cozinhas seladas, catering deslocado e as conversas com a unidade que têm de acontecer meses antes.", imageKey: "culture-related-1" },
        { category: "Tradição", title: "A chuppah, em detalhe", body: "Aberta dos quatro lados, sustentada sobre o casal: um breve guia do pálio e do seu sentido.", imageKey: "culture-related-2" },
        { category: "Planeamento · Shabat", title: "Planear um casamento de destino em torno do Shabat", body: "Por que é o ocaso local, e não o calendário, que fixa o fim de semana — e como construímos a partir daí.", imageKey: "culture-related-3" },
        { category: "Inter-religioso", title: "Casamentos judaicos inter-religiosos, sustentados inteiros", body: "Dois celebrantes, duas tradições, um dia coeso, sem diluir nenhum dos lados.", imageKey: "culture-related-4" },
        { category: "Custo · Judaico", title: "Quanto custa realmente um casamento judaico de luxo", body: "Orçamentos francos de 2026 por número de convidados, incluindo o custo de levar a cozinha consigo.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "St. Barths", href: destinationPath("pt", "st-barths") },
        { label: "Os Hamptons", href: destinationPath("pt", "the-hamptons") },
        { label: "Lago de Como", href: destinationPath("pt", "lake-como") },
        { label: "Costa Azul", href: destinationPath("pt", "cote-dazur") },
      ],
      sidebarVenues: [
        { label: "Eden Roc · St. Barths" },
        { label: "Villa d'Este · Lago de Como" },
        { label: "Topping Rose House · Os Hamptons" },
        { label: "Grand-Hôtel du Cap-Ferrat" },
      ],
      sidebarCultures: [
        { label: "Casamentos indianos", href: culturePath("pt", "indian-weddings") },
        { label: "Casamentos inter-religiosos", href: culturePath("pt", "interfaith-weddings") },
        { label: "Casamentos cristãos", href: culturePath("pt", "christian-weddings") },
        { label: "Casamentos europeus", href: culturePath("pt", "european-weddings") },
      ],
    },
    faq: {
      eyebrow: "Perguntas, respondidas",
      headline: "Perguntas *frequentes.*",
      items: [
        {
          question: "Conseguem realizar uma cerimónia ortodoxa no estrangeiro?",
          answer: [
            "Sim. Realizámos cerimónias ortodoxas em destino, com a mechitza, as testemunhas e a ordem que o rabino oficiante exige.",
            "O trabalho está na preparação: o rabino certo, uma cozinha kosher devidamente selada, alojamento suficientemente próximo para que os convidados praticantes não tenham de conduzir e um fim de semana ajustado ao Shabat local. Confirmamos tudo com o rabino antes de reservar seja o que for.",
          ],
        },
        {
          question: "Como funciona o catering kosher numa unidade hoteleira?",
          answer: [
            "Kosher é um protocolo de cozinha, não um menu. Conforme o seu nível de observância e o local, ou kasherizamos sob supervisão uma zona da cozinha da unidade, ou levamos o nosso próprio catering e uma cozinha selada.",
            "Acordamos o dispositivo com a unidade meses antes e instruímos toda a sua equipa, para que o padrão que a sua família guarda seja cumprido sem concessões.",
          ],
        },
        {
          question: "São vocês que disponibilizam o rabino?",
          answer: [
            "Podemos. Um rabino com quem trabalhamos há anos viaja com o ateliê, e também trabalhamos com o rabino do próprio casal quando o têm.",
            "O rabino oficiante fixa a ordem da cerimónia, o texto das bênçãos e os requisitos da ketubah e das testemunhas — construímos o dia em torno da sua orientação.",
          ],
        },
        {
          question: "E o horário de Shabat?",
          answer: [
            "Os casamentos judaicos não se realizam no Shabat. Marcamos a cerimónia para sábado após o ocaso local, ou para domingo, e construímos as boas-vindas e qualquer jantar de Shabat em torno da hora real do pôr do sol no local, que confirmamos ao minuto.",
          ],
        },
        {
          question: "Conseguem realizar um casamento judaico inter-religioso?",
          answer: [
            "Sim — é um dos trabalhos que mais nos pedem. A nossa abordagem habitual é de dois celebrantes e uma só cerimónia coesa: a chuppah e as sete bênçãos a par da outra tradição, sem diluir nenhum dos lados.",
            "A forma depende das famílias e de quais celebrantes irão co-celebrar. Ajudamos a encontrar clero disposto a fazê-lo e sustentamos o dia para que ambas as tradições fiquem inteiras.",
          ],
        },
        {
          question: "Qual é o custo habitual de um casamento judaico de destino?",
          answer: [
            "Um intervalo útil para 2026, em casamentos de 80 a 200 convidados, vai de 180 000 a 650 000 USD, tudo incluído; o catering kosher e a cozinha deslocada acrescentam tipicamente 15 a 25 % face a um casamento não kosher comparável.",
            "Partilhamos orçamentos plenamente transparentes na primeira consulta, com intervalos por rubrica segundo o número de convidados e o nível de observância.",
          ],
        },
        {
          question: "Precisamos de uma cerimónia legal à parte?",
          answer: [
            "Muitas vezes, sim. A cerimónia religiosa sob a chuppah é o coração do dia, mas em muitos destinos o casamento legal regista-se em separado, por vezes em casa antes de viajar.",
            "Mapeamos cedo a via legal conforme o seu destino e a sua nacionalidade, para que o dia religioso se sustente inteiramente pelo seu próprio sentido, com a papelada já resolvida.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Uma conversa privada —",
      headline: "*Comece* o seu\ncasamento judaico.",
      body: "Conte-nos a tradição que guardam, as famílias, o nível de observância e uma data aproximada. Grecia responde, pessoalmente, no prazo de cinco dias úteis.",
      ctaLabel: "Solicitar uma consulta privada →",
      ctaHref: staticPath("pt", "/contact"),
    },
  },

  de: {
    name: "Jüdische Hochzeiten",
    cardEyebrow: "Jüdisch",
    cardBlurb: "Chuppa, Ketubba, Sheva Brachot — orthodox, konservativ, liberal.",
    cardMeta: "Entdecken",
    intro:
      "Von der Chuppa bis zur Ketubba, gehalten mit einem Rabbiner und einem koscheren Caterer, die mit uns an die Küste reisen.",
    hero: {
      eyebrow: "Die Traditionen · Nr. 02",
      scriptOverline: "Eine Hochzeit von",
      headline: "jüdischer *Tradition.*",
      deck: "Chuppah, ketubah und sheva brachot, im Ausland gehalten mit dem Rabbiner und der koscheren Küche, die wir mitbringen. Ein bis drei Tage, fünfzig bis dreihundert Gäste.",
      captionLeft: "Maya & Daniel · St. Barths",
      captionCenter: "Unter der chuppah · 2025",
      captionRight: "Tafel II",
    },
    factStrip: [
      { label: "Dauer", value: "1 – 3 Tage", sub: "Mit Schabbat-Option" },
      { label: "Gäste", value: "50 – 300", sub: "Intim bis groß" },
      { label: "Vorlaufzeit", value: "12 – 18 Monate", sub: "Rabbiner bucht früh" },
      { label: "Strömungen", value: "Orthodox · Konservativ", sub: "Liberal · Säkular" },
      { label: "Catering", value: "Koschere Koordination", sub: "Küche eingeflogen" },
      { label: "Sprachen", value: "EN · Hebräisch", sub: "Und Ihre eigene" },
    ],
    overview: {
      sideEyebrow: "Die Tradition",
      sideNote:
        "Sechsundzwanzig jüdische Hochzeiten, vierzehn Jahre. Ein lebendiges Verzeichnis dessen, was wir wissen, um die Tradition im Ausland mit Anmut zu halten.",
      headline: "Eine chuppah,\nzwei Familien,\nein *Bund.*",
      lede: "Eine jüdische Hochzeit ist ein Bund, der öffentlich geschlossen wird. Unter der chuppah — an allen Seiten offen — werden zwei Menschen vor Zeugen vereint, und die Gemeinschaft ist Teil der Zeremonie, nicht ihr Publikum.",
      bodyParagraphs: [
        "Wir haben seit 2012 sechsundzwanzig jüdische Hochzeiten geplant, über die orthodoxe, konservative, liberale und die säkular-kulturelle Tradition hinweg. Die meisten umfassten einen einzigen vollen Tag; mehrere begannen am Vorabend mit einem Schabbat-Dinner, und einige durchliefen den ganzen Bogen von Freitag bis Sonntag.",
        "Das Schwerste an einer jüdischen Destinationshochzeit ist selten die Zeremonie — es sind die koschere Küche und die Schabbat-Zeiten. Also bringen wir sie mit. Ein Rabbiner, mit dem wir seit Jahren arbeiten, reist mit uns, und ein koscherer Caterer kommt mit einem versiegelten Küchenprotokoll, das Monate im Voraus mit dem Haus vereinbart wird.",
        "Innerhalb der Tradition zählen die Unterschiede. Eine orthodoxe ketubah wird anders bezeugt als eine liberale; eine mechitza ist für manche Familien wesentlich und für andere nicht vorhanden; die sheva brachot können auf Hebräisch gesungen oder in zwei Sprachen gelesen werden. Wir setzen nie etwas voraus. Wir fragen, im Vertrauen, und halten, was der amtierende Rabbiner festlegt.",
        "Was sich nicht ändert, ist die Gestalt des Tages: die bedeken vor der chuppah, das zerbrochene Glas zum Abschluss, der yichud vor dem Fest und eine hora, die nicht endet, bis die Stühle wieder herunterkommen. Wir halten diesen Bogen, als hätten die Familien ihn geschrieben — denn über die Jahrhunderte haben sie es getan.",
      ],
      pull: "„Das Schwerste an einer jüdischen Destinationshochzeit ist selten die Zeremonie — es sind die koschere Küche und die Schabbat-Zeiten. Also bringen wir sie mit.“",
      signatureName: "Grecia",
      signatureRole: "Gründerin · Nach sechsundzwanzig jüdischen Hochzeiten",
    },
    ceremonyArc: {
      eyebrow: "Aufbau der Zeremonie",
      headline: "Der *siebenteilige* Bogen.",
      deck: "Die Zeremonienordnung, die wir an einem typischen jüdischen Hochzeitstag halten. Varianten gibt es — der amtierende Rabbiner legt Ordnung und Wortlaut für Ihre Familie und Strömung fest.",
      steps: [
        { numeral: "I", name: "Kabbalat Panim", sub: "Empfang der Gäste", when: "Vor der Zeremonie", body: "Zwei Empfänge parallel — einer für die Braut, einer für den Bräutigam. Die ketubah wird durchgesehen und die Familien versammeln sich, bevor das Paar zusammengeführt wird." },
        { numeral: "II", name: "Bedeken", sub: "Das Verschleiern", when: "Kurz davor", body: "Der Bräutigam wird zur Braut geführt, um ihren Schleier zu senken, im Gedenken an die Stammmütter. Ein kurzer, dichter Moment, der oft die ganze Emotion des Tages trägt." },
        { numeral: "III", name: "Ketubah", sub: "Unterzeichnung des Vertrags", when: "Vor der chuppah", body: "Der Ehevertrag wird von den Zeugen unterzeichnet, die die Tradition des amtierenden Rabbiners verlangt, und dann zur chuppah getragen, um laut verlesen zu werden." },
        { numeral: "IV", name: "Chuppah", sub: "Unter dem Baldachin", when: "Die Zeremonie", body: "Die Gelübde unter dem offenen Baldachin: der Ring vor Zeugen gegeben, die ketubah verlesen und die sheva brachot — sieben Segenssprüche — über einem Becher Wein gesungen." },
        { numeral: "V", name: "Zerbrechen des Glases", sub: "Shevirat ha-kos", when: "Abschluss der Zeremonie", body: "Der Bräutigam zertritt ein Glas, eine Erinnerung, die selbst in der Freude gehalten wird. Die Gäste rufen „Mazel tov“ und das Fest beginnt." },
        { numeral: "VI", name: "Yichud", sub: "Zurückgezogenheit", when: "Unmittelbar danach", body: "Das frisch vermählte Paar zieht sich für einen kurzen Augenblick allein zurück — die ersten stillen Minuten der Ehe, bevor der Saal den Gästen überlassen wird." },
        { numeral: "VII", name: "Hora & Empfang", sub: "Feier", when: "Am Abend", body: "Das Paar auf Stühlen zur hora emporgehoben, dann das Dinner, die sheva brachot über dem Mahl wiederholt, die Reden und ein Tanz, der nicht früh endet." },
      ],
    },
    designConcepts: {
      eyebrow: "Design-Konzepte",
      headline: "Chuppah, *Moodboards.*",
      deck: "Drei erprobte Gestaltungsrichtungen, die wir mehr als einmal gebaut haben. Jede Hochzeit passt sie an — die Palette, den Baldachin, den Maßstab der Floristik.",
      cards: [
        {
          title: "Chuppah in Elfenbein & Olive",
          body: "Ein reduzierter Baldachin aus elfenbeinfarbenem Leinen und herabfallender Olive, mit weißen Stumpenkerzen und einem handbestickten chuppah-Tuch. Wirkt wunderbar vor dem Meer.",
          palette: ["#f5f0e6", "#b8b48f", "#6b6f4c", "#d6cdb8", "#3a3d2c"],
          imageKey: "concept-1",
          rows: [
            { label: "Chuppah", value: "Vierpfostig, Leinen, 3,6 m" },
            { label: "Floristik", value: "Olive · weiße Rose · Eukalyptus" },
            { label: "Am besten für", value: "Strand · Terrasse · Garten" },
          ],
        },
        {
          title: "Weißer Garten",
          body: "Ein romantischer Baldachin aus kletternden weißen Rosen, Jasmin und Grün über einem Gestell aus unbehandeltem Holz. Weich, üppig und von stiller Klassik.",
          palette: ["#fbf7f0", "#e8e2d4", "#a7a78b", "#cdb89a", "#4a523d"],
          imageKey: "concept-2",
          rows: [
            { label: "Chuppah", value: "Blühende Holzlaube" },
            { label: "Floristik", value: "Gartenrose · Jasmin · Efeu" },
            { label: "Am besten für", value: "Villa · Weingut · Landgut" },
          ],
        },
        {
          title: "Modern Minimal",
          body: "Ein klarer architektonischer Baldachin aus hellem Stein und gebürstetem Messing, mit einer einzigen skulpturalen Blumenlinie. Für Paare, die Zurückhaltung wollen, nicht Leere.",
          palette: ["#ece7df", "#c9c2b4", "#8a8473", "#bfa46a", "#2f2c26"],
          imageKey: "concept-3",
          rows: [
            { label: "Chuppah", value: "Rahmen aus Messing und Stein" },
            { label: "Floristik", value: "Einzelstiel · skulptural" },
            { label: "Am besten für", value: "Dachterrasse · Galerie · moderne Villa" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Kulturelles Protokoll",
      headline: "Was uns *heilig* ist.",
      deck: "Sechs Grundsätze, bei denen wir keine Kompromisse machen. Wo die Regel je nach Strömung variiert, halten wir, was der amtierende Rabbiner festlegt — nicht, was bequem ist.",
      items: [
        { title: "Niemals am Schabbat", body: "Jüdische Hochzeiten finden nicht am Schabbat statt. Zeremonien beginnen nach Sonnenuntergang am Samstag oder am Sonntag. Wir bauen den gesamten Wochenendkalender um die tatsächliche örtliche Sonnenuntergangszeit, nicht um eine Näherung." },
        { title: "Die ketubah wird ordentlich bezeugt", body: "Die ketubah wird von den Zeugen unterzeichnet, die der amtierende Rabbiner für Ihre Tradition verlangt. Wir bestätigen Text, Zeugen und Sprache mit dem Rabbiner lange vor dem Tag, nie am Tag selbst." },
        { title: "Die koschere Küche ist versiegelt und eingewiesen", body: "Koscheres Catering ist keine Menüwahl; es ist ein Küchenprotokoll. Wir vereinbaren Monate im Voraus eine versiegelte Küche mit dem Haus, fliegen bei Bedarf unseren Caterer ein und weisen jedes Mitglied des Hausteams ein." },
        { title: "Das Glas wird sicher zerbrochen", body: "Das Zerbrechen des Glases wird mit einem umwickelten, vorgeritzten Glas auf geschützter Fläche vorbereitet, damit der Moment ganz bleibt und niemand sich verletzt. Ritus und Sicherheit stehen nicht im Widerspruch." },
        { title: "Der Rabbiner legt die Ordnung fest", body: "Wo orthodoxe, konservative und liberale Praxis sich unterscheiden — die mechitza, die Umkreisungen, der Wortlaut der Segenssprüche — folgen wir der Weisung des amtierenden Rabbiners und weisen das Haus entsprechend ein." },
        { title: "Bräuche werden geehrt, nicht eingeebnet", body: "Mechitza und getrenntes Tanzen für praktizierende Familien; egalitäre Bräuche für andere. Wir fragen, im Vertrauen, was Ihre Familie hält, und behandeln eine jüdische Hochzeit nicht als Vorlage für die nächste." },
      ],
    },
    planning: {
      eyebrow: "Mehrtägige Planung",
      headline: "Eine *jüdische Hochzeit,* Stunde für Stunde.",
      deck: "Der Bauplan, den wir für eine typische jüdische Hochzeit mit 150 Gästen verwenden. Jeder Tag ist flexibel; die Struktur nicht. Die Schabbat-Zeit gibt der örtliche Sonnenuntergang vor.",
      days: [
        {
          numeral: "I",
          dayLabel: "Erster Tag",
          title: "Empfang & Schabbat",
          body: "Die Gäste reisen über den Tag verteilt an, die Transfers vom Atelier koordiniert. Für praktizierende Familien halten wir nach dem Lichterzünden ein Schabbat-Dinner — ein ruhiger, betreuter Abend vor der Hochzeit, die koschere Küche bereits im Dienst.",
          events: [
            { time: "Morgen", body: "Ankünfte · Flughafentransfers · Check-in im Hotel" },
            { time: "Nachmittag", body: "Freie Zeit · Willkommensaufmerksamkeiten in jedem Zimmer" },
            { time: "Vor Sonnenuntergang", body: "Lichterzünden · Schabbat beginnt (nach örtlichem Sonnenuntergang)" },
            { time: "Abend", body: "Schabbat-Dinner · Kiddusch · betreutes Mahl an der langen Tafel" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Zweiter Tag",
          title: "Die Hochzeit",
          body: "Der volle Hochzeitstag. Kabbalat Panim parallel, die Unterzeichnung der ketubah, die bedeken, dann die chuppah zur Stunde, die der Rabbiner festlegt — meist am späten Nachmittag — damit die Zeremonie auf das goldene Licht trifft und das Fest in die Nacht trägt.",
          events: [
            { time: "15:00", body: "Kabbalat Panim · zwei parallele Empfänge" },
            { time: "16:00", body: "Unterzeichnung der ketubah · Zeugen · bedeken" },
            { time: "16:45", body: "Chuppah · Ring · sheva brachot · Zerbrechen des Glases" },
            { time: "17:15", body: "Yichud · das private Intervall des Paares" },
            { time: "18:00", body: "Empfangs-Cocktail" },
            { time: "19:30", body: "Hora · Dinner · sheva brachot · Reden · Tanz" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Dritter Tag",
          title: "Brunch & Abschied",
          body: "Ein Brunch am Morgen danach, ausgerichtet vom Paar — oft im Freien, lockerer, im Zeichen des Abschieds. Für manche Familien ist es auch ein sheva-brachot-Mahl, bei dem die sieben Segenssprüche noch einmal wiederholt werden.",
          events: [
            { time: "11:00", body: "Brunch · am Pool oder im Garten" },
            { time: "12:30", body: "Optionale sheva brachot · sieben Segenssprüche wiederholt" },
            { time: "Nachmittag", body: "Abreisen · Flughafentransfers" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Reiseziel-Eignung",
      headline: "Wo jüdische Hochzeiten *am besten gelingen.*",
      viewAllLabel: "Alle Reiseziele ansehen →",
      viewAllHref: staticPath("de", "/destinations"),
      cards: [
        { rating: 5, name: "St. Barths", sub: "Karibik · November – April", destinationSlug: "st-barths" },
        { rating: 5, name: "Die Hamptons", sub: "USA · Mai – September", destinationSlug: "the-hamptons" },
        { rating: 5, name: "Comer See", sub: "Italien · Juni – September", destinationSlug: "lake-como" },
        { rating: 4, name: "Amalfi", sub: "Italien · Mai – Oktober", destinationSlug: "amalfi" },
        { rating: 4, name: "Toskana", sub: "Italien · Mai – Oktober", destinationSlug: "tuscany" },
        { rating: 4, name: "Côte d'Azur", sub: "Frankreich · Juni – September", destinationSlug: "cote-dazur" },
        { rating: 4, name: "Mustique", sub: "Karibik · November – April", destinationSlug: "mustique" },
        { rating: 3, name: "Aspen & Napa", sub: "USA · saisonal", destinationSlug: "aspen-napa" },
      ],
    },
    guest: {
      eyebrow: "Gästemanagement",
      headline: "Die *praktische* Betreuung von 150 Gästen.",
      deck: "Die logistische Ebene, die die meisten Planer unterbesetzen. Bei einer jüdischen Hochzeit im Ausland beginnt sie mit der Küche und mit dem Kalender.",
      cells: [
        { title: "Koscheres Speiseprotokoll", body: "Eine mit dem Haus vereinbarte, versiegelte koschere Küche, unser eigener Caterer bei Bedarf und klar gekennzeichnete Mahlzeiten über das Wochenende. Koschere, vegetarische, vegane und allergenfreie Optionen bei jedem Service." },
        { title: "Schabbat-treue Gäste", body: "Zimmer nahe am Ort, damit niemand fahren muss, vorbereitete Schlüsselkarten und Beleuchtung, auf das Lichterzünden abgestimmte Mahlzeiten und ein Schabbat-gerechter Ablauf für jene, die ihn halten." },
        { title: "Ältere & Mobilität", body: "Reservierte Plätze, separater Transport, im Erdgeschoss reservierte Zimmer für ältere Gäste und eine Ansprechperson des Ateliers über das ganze Wochenende. Arzt auf Abruf für die Dauer." },
        { title: "Anreise & Zimmerkontingente", body: "Zimmerkontingente in drei Stufen, Flughafentransfers an den Anreisetagen und Willkommenspakete in jedem Zimmer mit Ablauf, Kleiderordnung je Anlass und wichtigen Kontakten." },
        { title: "Kleidung & kippot", body: "Kippot für die Gäste an der chuppah bereitgestellt, ein Tallit zur Hand, wenn die Zeremonie es verlangt, und Bügelservice im Hotel zur Anreise und am Hochzeitsmorgen." },
        { title: "Kommunikation", body: "Eine Gästegruppe drei Wochen vorab, eine Hochzeitswebsite mit Ablauf, Kleiderordnungen und Lageplänen sowie gedruckte Leitfäden — samt einer kurzen Notiz für Gäste, die zum ersten Mal eine jüdische Hochzeit erleben." },
      ],
    },
    related: {
      eyebrow: "Weiterlesen",
      headline: "Aus dem *Journal.*",
      articles: [
        { category: "Jüdische Hochzeiten · Koscher", title: "Wie koscheres Catering im Ausland wirklich funktioniert", body: "Über versiegelte Küchen, eingeflogene Caterer und die Gespräche mit dem Haus, die Monate vorher stattfinden müssen.", imageKey: "culture-related-1" },
        { category: "Tradition", title: "Die chuppah, im Detail", body: "An allen Seiten offen, über dem Paar gehalten: ein kurzer Leitfaden zum Baldachin und seiner Bedeutung.", imageKey: "culture-related-2" },
        { category: "Planung · Schabbat", title: "Eine Destinationshochzeit rund um den Schabbat planen", body: "Warum der örtliche Sonnenuntergang, nicht der Kalender, das Wochenende bestimmt — und wie wir darum herum bauen.", imageKey: "culture-related-3" },
        { category: "Interreligiös", title: "Interreligiöse jüdische Hochzeiten, ganz gehalten", body: "Zwei Geistliche, zwei Traditionen, ein stimmiger Tag, ohne eine Seite zu verwässern.", imageKey: "culture-related-4" },
        { category: "Kosten · Jüdisch", title: "Was eine luxuriöse jüdische Hochzeit wirklich kostet", body: "Offene 2026er Budgets nach Gästezahl, einschließlich der Kosten, die Küche mitzubringen.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "St. Barths", href: destinationPath("de", "st-barths") },
        { label: "Die Hamptons", href: destinationPath("de", "the-hamptons") },
        { label: "Comer See", href: destinationPath("de", "lake-como") },
        { label: "Côte d'Azur", href: destinationPath("de", "cote-dazur") },
      ],
      sidebarVenues: [
        { label: "Eden Roc · St. Barths" },
        { label: "Villa d'Este · Comer See" },
        { label: "Topping Rose House · Die Hamptons" },
        { label: "Grand-Hôtel du Cap-Ferrat" },
      ],
      sidebarCultures: [
        { label: "Indische Hochzeiten", href: culturePath("de", "indian-weddings") },
        { label: "Interreligiöse Hochzeiten", href: culturePath("de", "interfaith-weddings") },
        { label: "Christliche Hochzeiten", href: culturePath("de", "christian-weddings") },
        { label: "Europäische Hochzeiten", href: culturePath("de", "european-weddings") },
      ],
    },
    faq: {
      eyebrow: "Fragen, beantwortet",
      headline: "Häufig *gefragt.*",
      items: [
        {
          question: "Können Sie eine orthodoxe Zeremonie im Ausland halten?",
          answer: [
            "Ja. Wir haben orthodoxe Zeremonien am Reiseziel gehalten, mit der mechitza, den Zeugen und der Ordnung, die der amtierende Rabbiner verlangt.",
            "Die Arbeit liegt in der Vorbereitung: der richtige Rabbiner, eine ordentlich versiegelte koschere Küche, Unterkünfte nah genug, dass praktizierende Gäste nicht fahren müssen, und ein Wochenende, das auf den örtlichen Schabbat abgestimmt ist. All das bestätigen wir mit dem Rabbiner, bevor irgendetwas gebucht wird.",
          ],
        },
        {
          question: "Wie funktioniert koscheres Catering in einem Hotel?",
          answer: [
            "Koscher ist ein Küchenprotokoll, kein Menü. Je nach Ihrem Maß an Observanz und dem Ort kaschern wir entweder unter Aufsicht einen Teil der Hausküche, oder wir bringen unseren eigenen Caterer und eine versiegelte Küche.",
            "Wir vereinbaren das Vorgehen Monate im Voraus mit dem Haus und weisen sein gesamtes Team ein, damit der Standard, den Ihre Familie hält, ohne Kompromiss erfüllt wird.",
          ],
        },
        {
          question: "Stellen Sie den Rabbiner?",
          answer: [
            "Das können wir. Ein Rabbiner, mit dem wir seit Jahren arbeiten, reist mit dem Atelier, und wir arbeiten auch mit dem eigenen Rabbiner des Paares, wo es einen hat.",
            "Der amtierende Rabbiner legt den Ablauf der Zeremonie, den Wortlaut der Segenssprüche und die Anforderungen an ketubah und Zeugen fest — wir bauen den Tag um seine Weisung herum.",
          ],
        },
        {
          question: "Wie ist es mit der Schabbat-Zeit?",
          answer: [
            "Jüdische Hochzeiten finden nicht am Schabbat statt. Wir legen die Zeremonie auf Samstag nach dem örtlichen Sonnenuntergang oder auf Sonntag und bauen den Empfang und jedes Schabbat-Dinner um die tatsächliche Sonnenuntergangszeit am Ort, die wir auf die Minute bestätigen.",
          ],
        },
        {
          question: "Können Sie eine interreligiöse jüdische Hochzeit halten?",
          answer: [
            "Ja — es gehört zu unseren am häufigsten erbetenen Arbeiten. Unser Standard sind zwei Geistliche und eine stimmige Zeremonie: die chuppah und die sieben Segenssprüche neben der anderen Tradition, ohne eine Seite zu verwässern.",
            "Die Gestalt hängt von den Familien ab und davon, welche Geistlichen gemeinsam zelebrieren. Wir helfen, Geistliche zu finden, die bereit sind, und halten den Tag so, dass beide Traditionen ganz bleiben.",
          ],
        },
        {
          question: "Was kostet eine jüdische Destinationshochzeit üblicherweise?",
          answer: [
            "Eine brauchbare Spanne für 2026, bei Hochzeiten mit 80 bis 200 Gästen, reicht von 180.000 bis 650.000 USD, alles inklusive; koscheres Catering und die eingeflogene Küche schlagen gegenüber einer vergleichbaren nicht-koscheren Hochzeit typischerweise mit 15 bis 25 % zu Buche.",
            "Wir teilen in der ersten Beratung vollständig transparente Budgets, mit Spannen je Posten nach Gästezahl und Maß an Observanz.",
          ],
        },
        {
          question: "Brauchen wir eine separate standesamtliche Zeremonie?",
          answer: [
            "Oft ja. Die religiöse Zeremonie unter der chuppah ist das Herz des Tages, doch an vielen Reisezielen wird die rechtsgültige Ehe gesondert eingetragen — manchmal zu Hause vor der Abreise.",
            "Wir zeichnen den rechtlichen Weg je nach Reiseziel und Nationalität früh nach, damit der religiöse Tag ganz aus seinem eigenen Sinn besteht und der Papierkram bereits erledigt ist.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Ein persönliches Gespräch —",
      headline: "*Beginnen* Sie Ihre\njüdische Hochzeit.",
      body: "Sagen Sie uns die Tradition, die Sie halten, die Familien, das Maß an Observanz und ein ungefähres Datum. Grecia antwortet, persönlich, innerhalb von fünf Werktagen.",
      ctaLabel: "Persönliche Beratung anfragen →",
      ctaHref: staticPath("de", "/contact"),
    },
  },

  it: {
    name: "Matrimoni Ebraici",
    cardEyebrow: "Ebraico",
    cardBlurb: "Chuppah, ketubah, sheva brachot — ortodosso, conservatore, riformato.",
    cardMeta: "Scopri",
    intro:
      "Dalla chuppah alla ketubah, tenuti con un rabbino e un catering kosher che viaggiano con noi fino alla costa.",
    hero: {
      eyebrow: "Le Tradizioni · N. 02",
      scriptOverline: "Un matrimonio di",
      headline: "tradizione *ebraica.*",
      deck: "Chuppah, ketubah e sheva brachot, tenuti all'estero con il rabbino e la cucina kosher che portiamo con noi. Da uno a tre giorni, da cinquanta a trecento invitati.",
      captionLeft: "Maya & Daniel · St. Barths",
      captionCenter: "Sotto la chuppah · 2025",
      captionRight: "Tavola II",
    },
    factStrip: [
      { label: "Durata", value: "1 – 3 giorni", sub: "Con opzione Shabbat" },
      { label: "Invitati", value: "50 – 300", sub: "Dall'intimo al grande" },
      { label: "Anticipo", value: "12 – 18 mesi", sub: "Il rabbino prenota presto" },
      { label: "Correnti", value: "Ortodossa · Conservatrice", sub: "Riformata · Laica" },
      { label: "Catering", value: "Coordinamento kosher", sub: "Cucina trasferita" },
      { label: "Lingue", value: "EN · Ebraico", sub: "E la vostra" },
    ],
    overview: {
      sideEyebrow: "La tradizione",
      sideNote:
        "Ventisei matrimoni ebraici, quattordici anni. Un registro vivo di ciò che sappiamo per tenere la tradizione all'estero con grazia.",
      headline: "Una chuppah,\ndue famiglie,\nun'*alleanza.*",
      lede: "Un matrimonio ebraico è un'alleanza siglata in pubblico. Sotto la chuppah — aperta su tutti i lati — due persone si uniscono davanti a testimoni, e la comunità è parte della cerimonia, non il suo pubblico.",
      bodyParagraphs: [
        "Abbiamo pianificato ventisei matrimoni ebraici dal 2012, attraverso le correnti ortodossa, conservatrice, riformata e la tradizione laico-culturale. La maggior parte si è svolta in un'unica giornata piena; diversi si sono aperti con una cena di Shabbat la sera prima, e alcuni hanno percorso l'intero arco dal venerdì alla domenica.",
        "La parte più difficile di un matrimonio ebraico di destinazione raramente è la cerimonia: sono la cucina kosher e gli orari di Shabbat. Per questo li portiamo con noi. Un rabbino con cui lavoriamo da anni viaggia con noi, e un catering kosher si trasferisce con un protocollo di cucina sigillata concordato con la struttura mesi prima.",
        "Dentro la tradizione, le differenze contano. Una ketubah ortodossa è testimoniata diversamente da una riformata; una mechitza è essenziale per alcune famiglie e assente per altre; le sheva brachot possono essere cantate in ebraico o lette in due lingue. Non diamo mai nulla per scontato. Chiediamo, in privato, e teniamo ciò che il rabbino officiante stabilisce.",
        "Ciò che non cambia è la forma della giornata: la bedeken prima della chuppah, il bicchiere rotto alla chiusura, lo yichud prima della festa, e una hora che non finisce finché le sedie non tornano a terra. Teniamo quell'arco come se le famiglie l'avessero scritto — perché, lungo i secoli, l'hanno fatto.",
      ],
      pull: "«La parte più difficile di un matrimonio ebraico di destinazione raramente è la cerimonia: sono la cucina kosher e gli orari di Shabbat. Per questo li portiamo con noi.»",
      signatureName: "Grecia",
      signatureRole: "Fondatrice · Dopo ventisei matrimoni ebraici",
    },
    ceremonyArc: {
      eyebrow: "Struttura della cerimonia",
      headline: "L'arco in *sette parti.*",
      deck: "L'ordine cerimoniale che teniamo in una tipica giornata di matrimonio ebraico. Esistono varianti: il rabbino officiante fissa l'ordine e il testo per la vostra famiglia e la vostra corrente.",
      steps: [
        { numeral: "I", name: "Kabbalat Panim", sub: "Accogliere gli invitati", when: "Prima della cerimonia", body: "Due ricevimenti in parallelo, uno per la sposa e uno per lo sposo. La ketubah viene riletta e le famiglie si riuniscono prima che la coppia sia ricongiunta." },
        { numeral: "II", name: "Bedeken", sub: "Il velare", when: "Subito prima", body: "Lo sposo è condotto dalla sposa per abbassarle il velo, in memoria delle matriarche. Un istante breve e intenso che spesso porta tutta l'emozione della giornata." },
        { numeral: "III", name: "Ketubah", sub: "Firma del contratto", when: "Prima della chuppah", body: "Il contratto di matrimonio è firmato dai testimoni richiesti dalla tradizione del rabbino officiante, poi portato alla chuppah per essere letto ad alta voce." },
        { numeral: "IV", name: "Chuppah", sub: "Sotto il baldacchino", when: "La cerimonia", body: "I voti sotto il baldacchino aperto: l'anello dato davanti ai testimoni, la lettura della ketubah e le sheva brachot — sette benedizioni — cantate su un calice di vino." },
        { numeral: "V", name: "Rottura del bicchiere", sub: "Shevirat ha-kos", when: "Chiusura della cerimonia", body: "Lo sposo rompe un bicchiere con il piede, memoria mantenuta anche nella gioia. Gli invitati gridano «Mazel tov» e comincia la festa." },
        { numeral: "VI", name: "Yichud", sub: "Ritiro", when: "Subito dopo", body: "Gli sposi novelli si ritirano da soli per un breve intervallo: i primi minuti di silenzio del matrimonio, prima che la sala sia affidata agli invitati." },
        { numeral: "VII", name: "Hora e ricevimento", sub: "Celebrazione", when: "Di sera", body: "La coppia sollevata sulle sedie nella hora, poi la cena, le sheva brachot ripetute durante il pasto, i discorsi e un ballo che non finisce presto." },
      ],
    },
    designConcepts: {
      eyebrow: "Concept di design",
      headline: "Chuppah, *moodboard.*",
      deck: "Tre direzioni di design che abbiamo costruito più di una volta. Ogni matrimonio le adatta: la palette, il baldacchino, la scala floreale.",
      cards: [
        {
          title: "Chuppah Avorio e Ulivo",
          body: "Un baldacchino essenziale in lino avorio e ulivo cadente, con candele bianche a colonna e un telo di chuppah ricamato a mano. Splendido di fronte al mare.",
          palette: ["#f5f0e6", "#b8b48f", "#6b6f4c", "#d6cdb8", "#3a3d2c"],
          imageKey: "concept-1",
          rows: [
            { label: "Chuppah", value: "Lino a quattro pali, 3,6 m" },
            { label: "Fiori", value: "Ulivo · rosa bianca · eucalipto" },
            { label: "Ideale per", value: "Spiaggia · terrazza · giardino" },
          ],
        },
        {
          title: "Giardino Bianco",
          body: "Un baldacchino romantico di rose bianche rampicanti, gelsomino e verde su una struttura di legno grezzo. Morbido, abbondante e di una classicità tranquilla.",
          palette: ["#fbf7f0", "#e8e2d4", "#a7a78b", "#cdb89a", "#4a523d"],
          imageKey: "concept-2",
          rows: [
            { label: "Chuppah", value: "Pergola di legno fiorita" },
            { label: "Fiori", value: "Rosa da giardino · gelsomino · edera" },
            { label: "Ideale per", value: "Villa · vigneto · tenuta" },
          ],
        },
        {
          title: "Minimal Moderno",
          body: "Un baldacchino architettonico e pulito in pietra chiara e ottone spazzolato, con un'unica linea floreale scultorea. Per coppie che vogliono misura, non assenza.",
          palette: ["#ece7df", "#c9c2b4", "#8a8473", "#bfa46a", "#2f2c26"],
          imageKey: "concept-3",
          rows: [
            { label: "Chuppah", value: "Struttura in ottone e pietra" },
            { label: "Fiori", value: "Stelo singolo · scultoreo" },
            { label: "Ideale per", value: "Rooftop · galleria · villa moderna" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocollo culturale",
      headline: "Ciò che teniamo *sacro.*",
      deck: "Sei principi su cui non transigiamo. Dove la regola varia secondo la corrente, teniamo ciò che il rabbino officiante stabilisce — non ciò che è comodo.",
      items: [
        { title: "Mai di Shabbat", body: "I matrimoni ebraici non si tengono di Shabbat. Le cerimonie iniziano dopo il tramonto di sabato, oppure di domenica. Costruiamo l'intero calendario del fine settimana attorno all'ora reale del tramonto locale, non a un'approssimazione." },
        { title: "La ketubah testimoniata come si deve", body: "La ketubah è firmata dai testimoni che il rabbino officiante richiede per la vostra tradizione. Confermiamo il testo, i testimoni e la lingua con il rabbino molto prima del giorno, mai il giorno stesso." },
        { title: "La cucina kosher, sigillata e istruita", body: "Il catering kosher non è una scelta di menu; è un protocollo di cucina. Concordiamo una cucina sigillata con la struttura mesi prima, trasferiamo il nostro catering quando serve e istruiamo ogni membro del team della struttura." },
        { title: "Il bicchiere rotto in sicurezza", body: "La rottura del bicchiere si prepara con un bicchiere avvolto e pre-inciso su una superficie protetta, perché l'istante sia intero e nessuno si faccia male. Rito e sicurezza non sono in contrasto." },
        { title: "Il rabbino fissa l'ordine", body: "Dove le prassi ortodossa, conservatrice e riformata differiscono — la mechitza, i giri, il testo delle benedizioni — seguiamo l'indicazione del rabbino officiante e istruiamo la location di conseguenza." },
        { title: "Le usanze si onorano, non si appiattiscono", body: "Mechitza e ballo separato per le famiglie osservanti; usanze egualitarie per altre. Chiediamo, in privato, ciò che la vostra famiglia custodisce, e non trattiamo un matrimonio ebraico come modello del successivo." },
      ],
    },
    planning: {
      eyebrow: "Pianificazione su più giorni",
      headline: "Un *matrimonio ebraico,* ora per ora.",
      deck: "Lo schema che usiamo per un tipico matrimonio ebraico da 150 invitati. Ogni giorno è flessibile; la struttura no. L'orario di Shabbat è fissato dal tramonto locale.",
      days: [
        {
          numeral: "I",
          dayLabel: "Primo giorno",
          title: "Benvenuto & Shabbat",
          body: "Gli invitati arrivano nell'arco della giornata, con i transfer coordinati dall'atelier. Per le famiglie osservanti teniamo una cena di Shabbat dopo l'accensione delle candele: una serata serena e assistita prima del matrimonio, con la cucina kosher già in servizio.",
          events: [
            { time: "Mattina", body: "Arrivi · transfer aeroportuali · check-in in hotel" },
            { time: "Pomeriggio", body: "Tempo libero · attenzioni di benvenuto in ogni camera" },
            { time: "Prima del tramonto", body: "Accensione delle candele · inizia lo Shabbat (secondo il tramonto locale)" },
            { time: "Sera", body: "Cena di Shabbat · kiddush · pasto assistito al tavolo lungo" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Secondo giorno",
          title: "Il matrimonio",
          body: "La giornata piena del matrimonio. Kabbalat Panim in parallelo, la firma della ketubah, la bedeken, e poi la chuppah all'ora fissata dal rabbino — di solito nel tardo pomeriggio — perché la cerimonia incontri la luce dorata e la festa si protragga nella notte.",
          events: [
            { time: "15:00", body: "Kabbalat Panim · due ricevimenti in parallelo" },
            { time: "16:00", body: "Firma della ketubah · testimoni · bedeken" },
            { time: "16:45", body: "Chuppah · anello · sheva brachot · rottura del bicchiere" },
            { time: "17:15", body: "Yichud · l'intervallo privato della coppia" },
            { time: "18:00", body: "Cocktail di ricevimento" },
            { time: "19:30", body: "Hora · cena · sheva brachot · discorsi · ballo" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Terzo giorno",
          title: "Brunch & saluti",
          body: "Un brunch il mattino dopo offerto dalla coppia — spesso all'aperto, più rilassato, dedicato ai saluti. Per alcune famiglie è anche un pasto di sheva brachot, con le sette benedizioni ripetute ancora una volta.",
          events: [
            { time: "11:00", body: "Brunch · a bordo piscina o in giardino" },
            { time: "12:30", body: "Sheva brachot facoltative · sette benedizioni ripetute" },
            { time: "Pomeriggio", body: "Partenze · transfer aeroportuali" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilità delle destinazioni",
      headline: "Dove i matrimoni ebraici *riescono meglio.*",
      viewAllLabel: "Vedi tutte le destinazioni →",
      viewAllHref: staticPath("it", "/destinations"),
      cards: [
        { rating: 5, name: "St. Barths", sub: "Caraibi · novembre – aprile", destinationSlug: "st-barths" },
        { rating: 5, name: "Gli Hamptons", sub: "Stati Uniti · maggio – settembre", destinationSlug: "the-hamptons" },
        { rating: 5, name: "Lago di Como", sub: "Italia · giugno – settembre", destinationSlug: "lake-como" },
        { rating: 4, name: "Amalfi", sub: "Italia · maggio – ottobre", destinationSlug: "amalfi" },
        { rating: 4, name: "Toscana", sub: "Italia · maggio – ottobre", destinationSlug: "tuscany" },
        { rating: 4, name: "Costa Azzurra", sub: "Francia · giugno – settembre", destinationSlug: "cote-dazur" },
        { rating: 4, name: "Mustique", sub: "Caraibi · novembre – aprile", destinationSlug: "mustique" },
        { rating: 3, name: "Aspen & Napa", sub: "Stati Uniti · stagionale", destinationSlug: "aspen-napa" },
      ],
    },
    guest: {
      eyebrow: "Gestione degli invitati",
      headline: "La cura *pratica* di 150 invitati.",
      deck: "Il livello logistico che la maggior parte dei planner sottodimensiona. Per un matrimonio ebraico all'estero, comincia dalla cucina e dal calendario.",
      cells: [
        { title: "Protocollo alimentare kosher", body: "Una cucina kosher sigillata concordata con la struttura, il nostro catering quando serve e pasti chiaramente segnalati durante il fine settimana. Opzioni kosher, vegetariane, vegane e senza allergeni a ogni servizio." },
        { title: "Invitati osservanti dello Shabbat", body: "Camere vicine alla location perché nessuno debba guidare, schede magnetiche e illuminazione predisposte in anticipo, pasti calibrati sull'accensione delle candele e un programma compatibile con lo Shabbat per chi lo osserva." },
        { title: "Anziani & mobilità", body: "Posti riservati, trasporto a parte, camere al piano terra per gli invitati più anziani e un referente dell'atelier per tutto il fine settimana. Medico reperibile per l'intera durata." },
        { title: "Viaggi & blocchi di camere", body: "Blocchi di camere su tre livelli, transfer aeroportuali nei giorni di arrivo e pacchetti di benvenuto in ogni camera con il programma, il dress code per evento e i contatti chiave." },
        { title: "Abbigliamento & kippot", body: "Kippot a disposizione degli invitati alla chuppah, un tallit pronto quando la cerimonia lo richiede e servizio di stiratura in hotel per l'arrivo e la mattina del matrimonio." },
        { title: "Comunicazioni", body: "Un gruppo invitati tre settimane prima, un sito del matrimonio con il programma, i dress code e le mappe della location, e guide stampate — inclusa una breve nota per chi assiste per la prima volta a un matrimonio ebraico." },
      ],
    },
    related: {
      eyebrow: "Continua a leggere",
      headline: "Dal *diario.*",
      articles: [
        { category: "Matrimoni Ebraici · Kosher", title: "Come funziona davvero il catering kosher all'estero", body: "Su cucine sigillate, catering trasferito e le conversazioni con la struttura che devono avvenire mesi prima.", imageKey: "culture-related-1" },
        { category: "Tradizione", title: "La chuppah, nel dettaglio", body: "Aperta su tutti i lati, tenuta sopra la coppia: una breve guida al baldacchino e al suo significato.", imageKey: "culture-related-2" },
        { category: "Pianificazione · Shabbat", title: "Pianificare un matrimonio di destinazione attorno allo Shabbat", body: "Perché è il tramonto locale, non il calendario, a fissare il fine settimana — e come costruiamo a partire da lì.", imageKey: "culture-related-3" },
        { category: "Interreligioso", title: "Matrimoni ebraici interreligiosi, tenuti interi", body: "Due celebranti, due tradizioni, una giornata coesa, senza diluire nessuna delle due parti.", imageKey: "culture-related-4" },
        { category: "Costo · Ebraico", title: "Quanto costa davvero un matrimonio ebraico di lusso", body: "Budget franchi 2026 per numero di invitati, incluso il costo di portarsi la cucina.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "St. Barths", href: destinationPath("it", "st-barths") },
        { label: "Gli Hamptons", href: destinationPath("it", "the-hamptons") },
        { label: "Lago di Como", href: destinationPath("it", "lake-como") },
        { label: "Costa Azzurra", href: destinationPath("it", "cote-dazur") },
      ],
      sidebarVenues: [
        { label: "Eden Roc · St. Barths" },
        { label: "Villa d'Este · Lago di Como" },
        { label: "Topping Rose House · Gli Hamptons" },
        { label: "Grand-Hôtel du Cap-Ferrat" },
      ],
      sidebarCultures: [
        { label: "Matrimoni indiani", href: culturePath("it", "indian-weddings") },
        { label: "Matrimoni interreligiosi", href: culturePath("it", "interfaith-weddings") },
        { label: "Matrimoni cristiani", href: culturePath("it", "christian-weddings") },
        { label: "Matrimoni europei", href: culturePath("it", "european-weddings") },
      ],
    },
    faq: {
      eyebrow: "Domande, con risposta",
      headline: "Domande *frequenti.*",
      items: [
        {
          question: "Potete tenere una cerimonia ortodossa all'estero?",
          answer: [
            "Sì. Abbiamo tenuto cerimonie ortodosse in destinazione, con la mechitza, i testimoni e l'ordine che il rabbino officiante richiede.",
            "Il lavoro sta nella preparazione: il rabbino giusto, una cucina kosher debitamente sigillata, alloggi abbastanza vicini perché gli invitati osservanti non debbano guidare e un fine settimana calibrato sullo Shabbat locale. Confermiamo tutto con il rabbino prima di prenotare qualsiasi cosa.",
          ],
        },
        {
          question: "Come funziona il catering kosher in una struttura?",
          answer: [
            "Kosher è un protocollo di cucina, non un menu. A seconda del vostro livello di osservanza e della location, o rendiamo kosher sotto supervisione una parte della cucina della struttura, oppure portiamo il nostro catering e una cucina sigillata.",
            "Concordiamo il dispositivo con la struttura mesi prima e istruiamo tutto il suo team, così che lo standard che la vostra famiglia custodisce sia rispettato senza compromessi.",
          ],
        },
        {
          question: "Fornite voi il rabbino?",
          answer: [
            "Possiamo. Un rabbino con cui lavoriamo da anni viaggia con l'atelier, e lavoriamo anche con il rabbino della coppia, quando ne hanno uno.",
            "Il rabbino officiante fissa l'ordine della cerimonia, il testo delle benedizioni e i requisiti della ketubah e dei testimoni — costruiamo la giornata attorno alla sua indicazione.",
          ],
        },
        {
          question: "E l'orario di Shabbat?",
          answer: [
            "I matrimoni ebraici non si tengono di Shabbat. Fissiamo la cerimonia per sabato dopo il tramonto locale, oppure per domenica, e costruiamo l'accoglienza e qualsiasi cena di Shabbat attorno all'ora reale del tramonto in loco, che confermiamo al minuto.",
          ],
        },
        {
          question: "Potete tenere un matrimonio ebraico interreligioso?",
          answer: [
            "Sì — è tra i lavori che ci vengono richiesti più spesso. Il nostro approccio abituale è di due celebranti e un'unica cerimonia coesa: la chuppah e le sette benedizioni accanto all'altra tradizione, senza diluire nessuna delle due parti.",
            "La forma dipende dalle famiglie e da quali celebranti co-celebreranno. Aiutiamo a trovare il clero disposto a farlo e teniamo la giornata perché entrambe le tradizioni restino intere.",
          ],
        },
        {
          question: "Qual è il costo tipico di un matrimonio ebraico di destinazione?",
          answer: [
            "Un intervallo utile per il 2026, su matrimoni da 80 a 200 invitati, va da 180.000 a 650.000 USD, tutto incluso; il catering kosher e la cucina trasferita aggiungono di norma il 15–25 % rispetto a un matrimonio non kosher comparabile.",
            "Condividiamo budget pienamente trasparenti già alla prima consulenza, con intervalli per voce di spesa secondo il numero di invitati e il livello di osservanza.",
          ],
        },
        {
          question: "Serve una cerimonia civile a parte?",
          answer: [
            "Spesso sì. La cerimonia religiosa sotto la chuppah è il cuore della giornata, ma in molte destinazioni il matrimonio legale si registra separatamente, talvolta a casa prima di partire.",
            "Tracciamo per tempo la via legale secondo la vostra destinazione e nazionalità, così che la giornata religiosa si regga interamente sul proprio significato, con le pratiche già sistemate.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Una conversazione privata —",
      headline: "*Iniziate* il vostro\nmatrimonio ebraico.",
      body: "Raccontateci la tradizione che custodite, le famiglie, il livello di osservanza e una data indicativa. Grecia risponde, di persona, entro cinque giorni lavorativi.",
      ctaLabel: "Richiedere una consulenza privata →",
      ctaHref: staticPath("it", "/contact"),
    },
  },
};
