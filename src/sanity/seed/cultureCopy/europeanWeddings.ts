/**
 * Seed copy · Culture № 08 — European Weddings.
 *
 * The full detail-page content, fully translated across the six locales.
 * Mirrors the structure/density/register of the Indian Weddings prototype
 * (`pages/multicultural-detail.jsx`), re-pointed to the European tradition:
 * châteaux, palazzi, fincas, schlösser and the regional protocol that differs
 * more inside Europe than couples expect.
 *
 * Card copy (name / cardEyebrow / cardBlurb / cardMeta / intro) is reused
 * verbatim from `culture.ts` for european-weddings.
 *
 * NOTE ON LEGAL CLAIMS: civil-marriage requirements are described generally
 * ("requirements differ by country and commune — we map them first") rather
 * than quoting residency-day counts, which vary and change.
 */

import { culturePath, destinationPath, staticPath, type CultureCopy } from "./shared";
import type { Locale } from "../../../i18n/routing";

export const europeanWeddings: Record<Locale, CultureCopy> = {
  // ── English ───────────────────────────────────────────────────────────────
  en: {
    name: "European Weddings",
    cardEyebrow: "European",
    cardBlurb:
      "Châteaux, palazzi, regional protocol. French, Italian, Spanish, German.",
    cardMeta: "Discover",
    intro:
      "Châteaux and palazzi, held to French, Italian, Spanish and German regional protocol.",
    hero: {
      eyebrow: "The Traditions · No. 08",
      scriptOverline: "A wedding of",
      headline: "European *tradition.*",
      deck: "The continent couples think they know. In practice, the protocol shifts from one country — and one commune — to the next: a château in the Loire, a palazzo above Como, a finca in Andalusia, a schloss in Bavaria, each with its own law and its own register.",
      captionLeft: "Camille & Henri · Loire Valley",
      captionCenter: "Château at golden hour · 2025",
      captionRight: "Plate VIII",
    },
    factStrip: [
      { label: "Wedding length", value: "1 – 3 days", sub: "Civil act · ceremony · feast" },
      { label: "Guest range", value: "60 – 300", sub: "Intimate to grand" },
      { label: "Lead time", value: "12 – 24 months", sub: "Historic houses book early" },
      { label: "Regions held", value: "France · Italy", sub: "Spain · Germany" },
      { label: "Venues", value: "Château · palazzo", sub: "Finca · schloss" },
      { label: "Languages", value: "FR · IT · ES · DE", sub: "Trilingual programmes" },
    ],
    overview: {
      sideEyebrow: "The tradition",
      sideNote:
        "Europe is not one wedding. It is four legal systems, four kitchens and four registers — held country by country, commune by commune.",
      headline: "One *continent,* four protocols.",
      lede: "Couples arrive thinking Europe is a single style. The reality is that a French mairie, an Italian comune, a Spanish notario and a German Standesamt each ask for different things — and the wedding has to answer each one precisely.",
      bodyParagraphs: [
        "Regional protocol differs more inside Europe than almost any couple expects. The distance between a Provençal vin d'honneur and a Bavarian Polterabend is greater than the distance between continents — and the joy of a European wedding lies in honouring exactly where you are.",
        "The civil and the religious are kept separate across most of the continent, and the order matters. In France the marriage is legal only at the mairie; in Italy a binding ceremony can be held at the comune; in Spain the notario and the parish each have their role. We map the legal calendar first, then build the celebration around it.",
        "We do not parachute one team across borders. We keep local fixers in each region — a maître d'hôtel in the Loire, a wedding-licensed officiant in Tuscany, a finca family in Andalusia, a Standesamt liaison in Bavaria — people who know the curfews, the caterers and the customs of their own corner.",
        "Requirements differ by country and commune, and they change. We treat the paperwork as the spine of the wedding: confirmed early, in writing, with the local registry — so the day itself is only ever about the celebration.",
      ],
      pull: "\"The distance between a Provençal vin d'honneur and a Bavarian Polterabend is greater than the distance between continents.\"",
      signatureName: "Grecia",
      signatureRole: "Founder · Across French, Italian, Spanish and German weddings",
    },
    ceremonyArc: {
      eyebrow: "Ceremony structure",
      headline: "A European *arc.*",
      deck: "A representative order across a French, Italian, Spanish or German wedding — with the regional note that shifts each step. Every country adjusts; the rhythm holds.",
      steps: [
        { numeral: "I", name: "The civil act", sub: "Mairie · comune · Standesamt", when: "Often the day before", body: "The legally binding step, held at the town hall before an official. In France the mairie is mandatory; in Italy the comune can host the binding ceremony; in Germany the Standesamt. We confirm it with the local registry months ahead." },
        { numeral: "II", name: "Church or symbolic", sub: "Religious or celebrant-led", when: "Ceremony day, late morning", body: "A Catholic mass, an Orthodox rite, or a symbolic ceremony led by a celebrant in the château grounds. This is the emotional heart of the day, distinct from the civil act." },
        { numeral: "III", name: "Vin d'honneur / aperitivo", sub: "The welcome drink", when: "Ceremony day, midday", body: "The French vin d'honneur and the Italian aperitivo open to the wider circle — neighbours, the village, the extended guest list. Champagne, regional wine, canapés in the garden." },
        { numeral: "IV", name: "Dinner à la française", sub: "Seated, coursed, long", when: "Evening", body: "A seated dinner served à la française or à l'italiana — multiple courses, paced over hours, with the region's own wines. The dinner may be the more intimate tier of the day." },
        { numeral: "V", name: "Speeches & cake", sub: "Croquembouche · millefoglie", when: "Late evening", body: "Speeches, then the cake ritual — a French croquembouche tower, an Italian millefoglie, a Spanish tarta — cut and shared as the dinner gives way to the dancing." },
        { numeral: "VI", name: "Dancing till late", sub: "Polterabend & customs noted", when: "Into the night", body: "The party runs late within the venue's curfew. German weddings may keep a Polterabend the night before and customs such as the log-sawing; we hold the local rituals couples want." },
      ],
    },
    designConcepts: {
      eyebrow: "Design concepts",
      headline: "Château, *candlelight.*",
      deck: "Three working directions we have built more than once across the continent. Each adapts to the house, the region and the light.",
      cards: [
        {
          title: "Château Classique",
          body: "A pared, formal French scheme: ivory and stone, long tapers, garden roses and box hedging. The château does the work; the design simply frames it.",
          palette: ["#f4efe4", "#d8cdb4", "#9aa17e", "#6d6a52", "#33301f"],
          imageKey: "concept-1",
          rows: [
            { label: "Setting", value: "Loire / Provence château" },
            { label: "Florals", value: "Garden rose · peony · box" },
            { label: "Best for", value: "Formal · grand · seated" },
          ],
        },
        {
          title: "Palazzo Candlelight",
          body: "An Italian evening of frescoed walls, hundreds of tapers, terracotta and gold. Warm, low light; long tables under loggias above the lake.",
          palette: ["#efe2cc", "#cd9b5a", "#8a4a2c", "#5a3322", "#2f2418"],
          imageKey: "concept-2",
          rows: [
            { label: "Setting", value: "Como / Tuscan palazzo" },
            { label: "Florals", value: "Ranunculus · olive · citrus" },
            { label: "Best for", value: "Evening · romantic · candlelit" },
          ],
        },
        {
          title: "Modern Finca",
          body: "A relaxed Andalusian scheme: whitewash, olive, raffia and warm neutrals. Long lunches in the shade, dancing under bare bulbs after dark.",
          palette: ["#f1ece1", "#cdb894", "#9a9a72", "#6f5a3e", "#3a3326"],
          imageKey: "concept-3",
          rows: [
            { label: "Setting", value: "Andalusian / Mallorcan finca" },
            { label: "Florals", value: "Olive · bougainvillea · herbs" },
            { label: "Best for", value: "Relaxed · sun · outdoor" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Cultural protocol",
      headline: "What we *hold to.*",
      deck: "Six principles we do not compromise on across European weddings.",
      items: [
        { title: "The paperwork calendar drives everything", body: "Civil-marriage requirements differ by country and commune — we map them first, in writing, with the local registry. Every other decision follows the legal date, never the reverse." },
        { title: "Historic houses are respected to the letter", body: "Châteaux, palazzi and schlösser carry curfews, conservation rules and load limits. We read the contract closely and design within it — no nail in a panelled wall, no candle where it is forbidden." },
        { title: "Regional caterers over imported ones", body: "We cook the region, not against it. A Tuscan kitchen for a Tuscan wedding, a Provençal table in Provence. Imported menus rarely beat the local hands who know the produce." },
        { title: "The welcome is for everyone, the dinner may not be", body: "The vin d'honneur and aperitivo are open and generous; the seated dinner is often a smaller tier. We communicate guest tiers gracefully, in advance, so no one is surprised at the door." },
        { title: "Noise and fireworks are handled months ahead", body: "Local noise ordinances and fireworks permits vary by commune and are arranged early. We never promise a midnight display we have not already cleared." },
        { title: "Protected gardens are photographed, never staged on", body: "Many historic gardens are protected. We photograph them as they are and stage elsewhere — beauty does not justify a footprint where the conservation rules forbid one." },
      ],
    },
    planning: {
      eyebrow: "Multi-day planning",
      headline: "A European *wedding,* day by day.",
      deck: "The blueprint we use for a typical 150-guest château or palazzo wedding. Each day flexes; the structure holds.",
      days: [
        {
          numeral: "I",
          dayLabel: "Day One",
          title: "Arrival & welcome",
          body: "Guests arrive through the day; the studio coordinates transfers from the nearest airport and station. An informal welcome dinner in the village or the château courtyard — the first chance for two families and several languages to meet.",
          events: [
            { time: "Through the day", body: "Arrivals · airport & station transfers · check-in" },
            { time: "16:00", body: "Civil act at the mairie / comune (where held the day before)" },
            { time: "19:30", body: "Welcome dinner · village trattoria or château courtyard" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Day Two",
          title: "The wedding day",
          body: "The ceremony at late morning, the vin d'honneur at midday, dinner à la française into the evening, speeches and cake, then dancing till late within the house's curfew.",
          events: [
            { time: "10:00", body: "Bride & groom prep · separate suites" },
            { time: "11:30", body: "Church or symbolic ceremony in the grounds" },
            { time: "12:30", body: "Vin d'honneur / aperitivo · garden · the wider circle" },
            { time: "15:00", body: "Photographs · the protected gardens, never staged on" },
            { time: "19:30", body: "Dinner à la française · long tables · regional wines" },
            { time: "22:00", body: "Speeches · cake · croquembouche or millefoglie" },
            { time: "23:00", body: "Dancing till late · within the curfew" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Day Three",
          title: "Farewell déjeuner",
          body: "A long, late farewell lunch — outdoors where the weather allows, a recovery brunch in spirit. The unofficial close of the wedding before the afternoon departures.",
          events: [
            { time: "12:30", body: "Farewell déjeuner · terrace or garden" },
            { time: "Afternoon", body: "Departures · transfers to airport & station" },
            { time: "Evening", body: "Close-family dinner (optional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Destination compatibility",
      headline: "Where European weddings *work best.*",
      viewAllLabel: "View all destinations →",
      viewAllHref: staticPath("en", "/destinations"),
      cards: [
        { rating: 5, name: "Amalfi Coast", sub: "Italy · May – October", destinationSlug: "amalfi" },
        { rating: 5, name: "Lake Como", sub: "Italy · May – September", destinationSlug: "lake-como" },
        { rating: 5, name: "Tuscany", sub: "Italy · May – October", destinationSlug: "tuscany" },
        { rating: 5, name: "Paris & Île-de-France", sub: "France · May – September", destinationSlug: "paris-ile-de-france" },
        { rating: 5, name: "Provence", sub: "France · May – October", destinationSlug: "provence" },
        { rating: 5, name: "Côte d'Azur", sub: "France · June – September", destinationSlug: "cote-dazur" },
        { rating: 3, name: "Punta Cana", sub: "Caribbean · year-round", destinationSlug: "punta-cana" },
        { rating: 3, name: "The Hamptons", sub: "United States · June – September", destinationSlug: "the-hamptons" },
      ],
    },
    guest: {
      eyebrow: "Guest management",
      headline: "The *practical* care of a cross-border guest list.",
      deck: "The logistics layer most planners under-resource. We start a year ahead.",
      cells: [
        { title: "Multi-country travel", body: "Guests arriving from several countries at once. We coordinate transfers from the nearest airport and station, group room blocks across hotel tiers, and a single point of contact for every itinerary." },
        { title: "Language of the day", body: "Trilingual ceremony programmes and signage as standard — French, Italian, Spanish or German alongside English. A bilingual celebrant where the families ask for it, so no one follows the day from a distance." },
        { title: "Elders & mobility", body: "Ground-floor rooms, dedicated transport and an elders' liaison. Historic houses are rarely step-free; we map the accessible route through every château and palazzo in advance." },
        { title: "Dress codes by venue", body: "Formality follows the house. We brief guests precisely — black tie for the château, smart linen for the finca — and note the gravel, the heels and the evening chill so no one is caught out." },
        { title: "Children", body: "Multilingual childcare for the dinner and dancing, children's menus at every table, and quiet rooms for naps during the long European afternoon." },
        { title: "Communications", body: "A guest website with the schedule, dress code per event, and venue maps; a group channel three weeks ahead; printed guides in each welcome package, in every language the families need." },
      ],
    },
    related: {
      eyebrow: "Continue reading",
      headline: "From the *journal.*",
      articles: [
        { category: "European · France", title: "How a Château Wedding Actually Works", body: "On curfews, conservation rules, and the mairie that comes first.", imageKey: "culture-related-1" },
        { category: "European · Italy", title: "Palazzo or Villa: Choosing Above Lake Como", body: "Where the candlelight, the loggia and the lake meet.", imageKey: "culture-related-2" },
        { category: "Legal · Europe", title: "The Civil Step, Country by Country", body: "Mairie, comune, notario, Standesamt — what each one asks.", imageKey: "culture-related-3" },
        { category: "Cost · European", title: "What a European Wedding Actually Costs", body: "Frank 2026 budgets by country and guest count.", imageKey: "culture-related-4" },
        { category: "Design · Spain", title: "The Modern Finca, in Detail", body: "Whitewash, olive and the long Andalusian lunch.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Provence", href: destinationPath("en", "provence") },
        { label: "Tuscany", href: destinationPath("en", "tuscany") },
        { label: "Lake Como", href: destinationPath("en", "lake-como") },
        { label: "Côte d'Azur", href: destinationPath("en", "cote-dazur") },
      ],
      sidebarVenues: [
        { label: "Château de la Croix" },
        { label: "Villa Balbiano" },
        { label: "Borgo Tuscan estate" },
        { label: "Finca Andalusia" },
      ],
      sidebarCultures: [
        { label: "Christian weddings", href: culturePath("en", "christian-weddings") },
        { label: "Latin weddings", href: culturePath("en", "latin-weddings") },
        { label: "Interfaith weddings", href: culturePath("en", "interfaith-weddings") },
        { label: "Jewish weddings", href: culturePath("en", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Questions, answered",
      headline: "Frequently *asked.*",
      items: [
        {
          question: "Can foreigners legally marry in France or Italy — how does the civil step work?",
          answer: [
            "Yes, and we handle it as a matter of course. Requirements differ by country and commune — we map them first, in writing, with the local registry, then build the celebration around the confirmed legal date.",
            "Many couples complete the binding civil act at home or at the town hall the day before, and keep the château or palazzo for a symbolic ceremony. We advise the cleanest route for your nationalities and your venue.",
          ],
        },
        {
          question: "Château or palazzo — how do they differ in practice?",
          answer: [
            "A French château tends toward the formal: stone, gardens, a seated dinner à la française, daytime grandeur. An Italian palazzo tends toward the evening — frescoed rooms, candlelight, long tables under a loggia above the lake.",
            "Both carry curfews and conservation rules. We read each house's contract closely and design within it.",
          ],
        },
        {
          question: "What is the typical cost of a European wedding in 2026?",
          answer: [
            "A useful 2026 range for a 100–200 guest château or palazzo wedding is USD $250,000 – $800,000, all-in, varying widely by country, house and season.",
            "We share transparent line-item budgets in the first consultation, by country and guest count.",
          ],
        },
        {
          question: "Do you work with the venue's mandatory caterer?",
          answer: [
            "Often, yes — many historic houses require an in-house or approved caterer, and we welcome it where the kitchen is strong, because the regional hands usually know the produce best.",
            "Where the house allows an external caterer, we bring a regional one rather than an imported team. We confirm the catering clause before any contract is signed.",
          ],
        },
        {
          question: "How do you handle weather in a historic house with no marquee allowed?",
          answer: [
            "We build a wet-weather plan into the contract from the start — an indoor room reserved within the house, a covered loggia, or a permitted structure where conservation rules allow.",
            "Where a marquee is forbidden we design for the rooms as they are, never against them.",
          ],
        },
        {
          question: "Can you hold German or Austrian customs — Polterabend and the rest?",
          answer: [
            "Yes. A German wedding may keep a Polterabend the night before — crockery broken for luck, swept up together — and customs such as the log-sawing or the bridal-shoe games.",
            "We hold the rituals the couple and the families want, with a Standesamt liaison for the civil act and local musicians for the evening.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "A private conversation —",
      headline: "*Begin* your\nEuropean wedding.",
      body: "Tell us the country, the house, the families, and a rough date. Grecia writes back, personally, within five working days.",
      ctaLabel: "Request a private consultation →",
      ctaHref: staticPath("en", "/contact"),
    },
  },

  // ── Español ───────────────────────────────────────────────────────────────
  es: {
    name: "Bodas Europeas",
    cardEyebrow: "Europea",
    cardBlurb:
      "Châteaux, palazzi, protocolo regional. Francesa, italiana, española, alemana.",
    cardMeta: "Descubrir",
    intro:
      "Châteaux y palazzi, celebradas según el protocolo regional francés, italiano, español y alemán.",
    hero: {
      eyebrow: "Las Tradiciones · N.º 08",
      scriptOverline: "Una boda de",
      headline: "*tradición* europea.",
      deck: "El continente que las parejas creen conocer. En la práctica, el protocolo cambia de un país —y de un municipio— al siguiente: un château en el Loira, un palazzo sobre Como, una finca en Andalucía, un schloss en Baviera, cada uno con su propia ley y su propio registro.",
      captionLeft: "Camille y Henri · Valle del Loira",
      captionCenter: "Château a la hora dorada · 2025",
      captionRight: "Lámina VIII",
    },
    factStrip: [
      { label: "Duración de la boda", value: "1 – 3 días", sub: "Acto civil · ceremonia · banquete" },
      { label: "Número de invitados", value: "60 – 300", sub: "De íntima a grandiosa" },
      { label: "Antelación", value: "12 – 24 meses", sub: "Las casas históricas se reservan pronto" },
      { label: "Regiones que celebramos", value: "Francia · Italia", sub: "España · Alemania" },
      { label: "Espacios", value: "Château · palazzo", sub: "Finca · schloss" },
      { label: "Idiomas", value: "FR · IT · ES · DE", sub: "Programas trilingües" },
    ],
    overview: {
      sideEyebrow: "La tradición",
      sideNote:
        "Europa no es una sola boda. Son cuatro sistemas legales, cuatro cocinas y cuatro registros, celebrados país por país, municipio por municipio.",
      headline: "Un *continente,* cuatro protocolos.",
      lede: "Las parejas llegan creyendo que Europa es un único estilo. La realidad es que una mairie francesa, un comune italiano, un notario español y un Standesamt alemán piden cosas distintas, y la boda debe responder a cada uno con precisión.",
      bodyParagraphs: [
        "El protocolo regional difiere dentro de Europa más de lo que casi ninguna pareja espera. La distancia entre un vin d'honneur provenzal y un Polterabend bávaro es mayor que la distancia entre continentes, y la alegría de una boda europea está en honrar exactamente el lugar donde se celebra.",
        "Lo civil y lo religioso se mantienen separados en casi todo el continente, y el orden importa. En Francia el matrimonio solo es legal en la mairie; en Italia puede celebrarse una ceremonia vinculante en el comune; en España el notario y la parroquia tienen cada uno su papel. Primero trazamos el calendario legal y luego construimos la celebración a su alrededor.",
        "No desplazamos un solo equipo a través de las fronteras. Mantenemos colaboradores locales en cada región —un maître en el Loira, un oficiante autorizado en la Toscana, una familia de finca en Andalucía, un enlace con el Standesamt en Baviera—, gente que conoce los horarios de cierre, los caterers y las costumbres de su propio rincón.",
        "Los requisitos difieren según el país y el municipio, y cambian. Tratamos el papeleo como la columna vertebral de la boda: confirmado pronto, por escrito, con el registro local, para que el día en sí sea solo celebración.",
      ],
      pull: "«La distancia entre un vin d'honneur provenzal y un Polterabend bávaro es mayor que la distancia entre continentes.»",
      signatureName: "Grecia",
      signatureRole: "Fundadora · En bodas francesas, italianas, españolas y alemanas",
    },
    ceremonyArc: {
      eyebrow: "Estructura de la ceremonia",
      headline: "Un *arco* europeo.",
      deck: "Un orden representativo en una boda francesa, italiana, española o alemana, con la nota regional que cambia cada paso. Cada país ajusta; el ritmo se mantiene.",
      steps: [
        { numeral: "I", name: "El acto civil", sub: "Mairie · comune · Standesamt", when: "A menudo la víspera", body: "El paso legalmente vinculante, ante un oficial en el ayuntamiento. En Francia la mairie es obligatoria; en Italia el comune puede acoger la ceremonia vinculante; en Alemania el Standesamt. Lo confirmamos con el registro local meses antes." },
        { numeral: "II", name: "Iglesia o simbólica", sub: "Religiosa o con oficiante", when: "Día de la ceremonia, media mañana", body: "Una misa católica, un rito ortodoxo o una ceremonia simbólica conducida por un oficiante en los jardines del château. Es el corazón emocional del día, distinto del acto civil." },
        { numeral: "III", name: "Vin d'honneur / aperitivo", sub: "La copa de bienvenida", when: "Día de la ceremonia, mediodía", body: "El vin d'honneur francés y el aperitivo italiano se abren al círculo amplio: vecinos, el pueblo, la lista extendida. Champán, vino regional, canapés en el jardín." },
        { numeral: "IV", name: "Cena à la française", sub: "Sentada, por platos, larga", when: "Tarde-noche", body: "Una cena sentada servida à la française o à l'italiana: varios platos, espaciada durante horas, con los vinos de la región. La cena puede ser el nivel más íntimo del día." },
        { numeral: "V", name: "Discursos y pastel", sub: "Croquembouche · millefoglie", when: "Noche", body: "Discursos y luego el ritual del pastel: una torre de croquembouche francesa, un millefoglie italiano, una tarta española, cortada y compartida cuando la cena da paso al baile." },
        { numeral: "VI", name: "Baile hasta tarde", sub: "Polterabend y costumbres", when: "Hasta la madrugada", body: "La fiesta se alarga dentro del horario de cierre del espacio. Las bodas alemanas pueden tener un Polterabend la víspera y costumbres como el aserrado del tronco; sostenemos los rituales locales que la pareja desea." },
      ],
    },
    designConcepts: {
      eyebrow: "Conceptos de diseño",
      headline: "Château, *a la luz de las velas.*",
      deck: "Tres direcciones de diseño que hemos construido más de una vez por todo el continente. Cada una se adapta a la casa, la región y la luz.",
      cards: [
        {
          title: "Château Classique",
          body: "Un esquema francés sobrio y formal: marfil y piedra, velas largas, rosas de jardín y boj. El château hace el trabajo; el diseño solo lo enmarca.",
          palette: ["#f4efe4", "#d8cdb4", "#9aa17e", "#6d6a52", "#33301f"],
          imageKey: "concept-1",
          rows: [
            { label: "Entorno", value: "Château del Loira / Provenza" },
            { label: "Flores", value: "Rosa de jardín · peonía · boj" },
            { label: "Ideal para", value: "Formal · grandiosa · sentada" },
          ],
        },
        {
          title: "Palazzo Candlelight",
          body: "Una velada italiana de muros con frescos, cientos de velas, terracota y oro. Luz cálida y baja; mesas largas bajo logias sobre el lago.",
          palette: ["#efe2cc", "#cd9b5a", "#8a4a2c", "#5a3322", "#2f2418"],
          imageKey: "concept-2",
          rows: [
            { label: "Entorno", value: "Palazzo de Como / Toscana" },
            { label: "Flores", value: "Ranúnculo · olivo · cítricos" },
            { label: "Ideal para", value: "Nocturna · romántica · a la luz de las velas" },
          ],
        },
        {
          title: "Finca Moderna",
          body: "Un esquema andaluz relajado: cal, olivo, rafia y neutros cálidos. Largos almuerzos a la sombra, baile bajo bombillas desnudas al anochecer.",
          palette: ["#f1ece1", "#cdb894", "#9a9a72", "#6f5a3e", "#3a3326"],
          imageKey: "concept-3",
          rows: [
            { label: "Entorno", value: "Finca andaluza / mallorquina" },
            { label: "Flores", value: "Olivo · buganvilla · hierbas" },
            { label: "Ideal para", value: "Relajada · sol · al aire libre" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocolo cultural",
      headline: "A lo que *nos atenemos.*",
      deck: "Seis principios que no negociamos en las bodas europeas.",
      items: [
        { title: "El calendario del papeleo lo rige todo", body: "Los requisitos del matrimonio civil difieren según el país y el municipio; primero los trazamos, por escrito, con el registro local. Cualquier otra decisión sigue a la fecha legal, nunca al revés." },
        { title: "Las casas históricas se respetan al pie de la letra", body: "Châteaux, palazzi y schlösser conllevan horarios de cierre, normas de conservación y límites de carga. Leemos el contrato con detalle y diseñamos dentro de él: ni un clavo en una pared con paneles, ni una vela donde está prohibida." },
        { title: "Caterers regionales antes que importados", body: "Cocinamos la región, no contra ella. Una cocina toscana para una boda toscana, una mesa provenzal en Provenza. Los menús importados rara vez superan a las manos locales que conocen el producto." },
        { title: "La bienvenida es para todos; la cena, quizá no", body: "El vin d'honneur y el aperitivo son abiertos y generosos; la cena sentada suele ser un nivel más reducido. Comunicamos los niveles de invitados con gracia y antelación, para que nadie se sorprenda en la puerta." },
        { title: "El ruido y los fuegos se gestionan con meses de antelación", body: "Las ordenanzas de ruido locales y los permisos de fuegos artificiales varían según el municipio y se tramitan pronto. Nunca prometemos un castillo de medianoche que no hayamos autorizado ya." },
        { title: "Los jardines protegidos se fotografían, nunca se pisan para montar", body: "Muchos jardines históricos están protegidos. Los fotografiamos tal como son y montamos en otro sitio: la belleza no justifica una huella donde las normas de conservación la prohíben." },
      ],
    },
    planning: {
      eyebrow: "Planificación de varios días",
      headline: "Una *boda* europea, día a día.",
      deck: "El esquema que usamos para una boda típica de 150 invitados en château o palazzo. Cada día es flexible; la estructura se mantiene.",
      days: [
        {
          numeral: "I",
          dayLabel: "Día uno",
          title: "Llegada y bienvenida",
          body: "Los invitados llegan a lo largo del día; el atelier coordina los traslados desde el aeropuerto y la estación más cercanos. Una cena de bienvenida informal en el pueblo o en el patio del château: la primera oportunidad para que dos familias y varios idiomas se conozcan.",
          events: [
            { time: "Durante el día", body: "Llegadas · traslados aeropuerto y estación · check-in" },
            { time: "16:00", body: "Acto civil en la mairie / comune (cuando se celebra la víspera)" },
            { time: "19:30", body: "Cena de bienvenida · trattoria del pueblo o patio del château" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Día dos",
          title: "El día de la boda",
          body: "La ceremonia a media mañana, el vin d'honneur al mediodía, la cena à la française hasta la noche, discursos y pastel, y baile hasta tarde dentro del horario de cierre de la casa.",
          events: [
            { time: "10:00", body: "Preparación de los novios · suites separadas" },
            { time: "11:30", body: "Ceremonia religiosa o simbólica en los jardines" },
            { time: "12:30", body: "Vin d'honneur / aperitivo · jardín · el círculo amplio" },
            { time: "15:00", body: "Fotografías · jardines protegidos, nunca pisados para montar" },
            { time: "19:30", body: "Cena à la française · mesas largas · vinos regionales" },
            { time: "22:00", body: "Discursos · pastel · croquembouche o millefoglie" },
            { time: "23:00", body: "Baile hasta tarde · dentro del horario de cierre" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Día tres",
          title: "Déjeuner de despedida",
          body: "Un almuerzo de despedida largo y tardío, al aire libre cuando el tiempo lo permite, un brunch de recuperación en espíritu. El cierre no oficial de la boda antes de las salidas de la tarde.",
          events: [
            { time: "12:30", body: "Déjeuner de despedida · terraza o jardín" },
            { time: "Tarde", body: "Salidas · traslados al aeropuerto y la estación" },
            { time: "Noche", body: "Cena de familia cercana (opcional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilidad de destinos",
      headline: "Dónde funcionan mejor las bodas *europeas.*",
      viewAllLabel: "Ver todos los destinos →",
      viewAllHref: staticPath("es", "/destinations"),
      cards: [
        { rating: 5, name: "Costa de Amalfi", sub: "Italia · mayo – octubre", destinationSlug: "amalfi" },
        { rating: 5, name: "Lago de Como", sub: "Italia · mayo – septiembre", destinationSlug: "lake-como" },
        { rating: 5, name: "Toscana", sub: "Italia · mayo – octubre", destinationSlug: "tuscany" },
        { rating: 5, name: "París e Isla de Francia", sub: "Francia · mayo – septiembre", destinationSlug: "paris-ile-de-france" },
        { rating: 5, name: "Provenza", sub: "Francia · mayo – octubre", destinationSlug: "provence" },
        { rating: 5, name: "Costa Azul", sub: "Francia · junio – septiembre", destinationSlug: "cote-dazur" },
        { rating: 3, name: "Punta Cana", sub: "Caribe · todo el año", destinationSlug: "punta-cana" },
        { rating: 3, name: "Los Hamptons", sub: "Estados Unidos · junio – septiembre", destinationSlug: "the-hamptons" },
      ],
    },
    guest: {
      eyebrow: "Gestión de invitados",
      headline: "El cuidado *práctico* de una lista de invitados transfronteriza.",
      deck: "La capa logística que la mayoría de los planificadores infradotan. Empezamos con un año de antelación.",
      cells: [
        { title: "Viaje multinacional", body: "Invitados que llegan de varios países a la vez. Coordinamos traslados desde el aeropuerto y la estación más cercanos, bloques de habitaciones por niveles de hotel y un único punto de contacto para cada itinerario." },
        { title: "El idioma del día", body: "Programas de ceremonia y señalización trilingües como norma: francés, italiano, español o alemán junto al inglés. Un oficiante bilingüe cuando las familias lo piden, para que nadie siga el día desde la distancia." },
        { title: "Mayores y movilidad", body: "Habitaciones en planta baja, transporte dedicado y un enlace para los mayores. Las casas históricas rara vez carecen de escalones; trazamos de antemano la ruta accesible por cada château y palazzo." },
        { title: "Códigos de vestimenta por espacio", body: "La formalidad sigue a la casa. Informamos a los invitados con precisión —etiqueta para el château, lino elegante para la finca— y advertimos de la grava, los tacones y el fresco de la noche para que nadie se quede a contrapié." },
        { title: "Niños", body: "Cuidado infantil multilingüe para la cena y el baile, menús infantiles en cada mesa y salas tranquilas para la siesta durante la larga tarde europea." },
        { title: "Comunicaciones", body: "Una web de invitados con el programa, el código de vestimenta por evento y los mapas del lugar; un canal de grupo tres semanas antes; guías impresas en cada paquete de bienvenida, en cada idioma que las familias necesiten." },
      ],
    },
    related: {
      eyebrow: "Seguir leyendo",
      headline: "Del *cuaderno.*",
      articles: [
        { category: "Europea · Francia", title: "Cómo funciona de verdad una boda en château", body: "Sobre horarios de cierre, normas de conservación y la mairie que va primero.", imageKey: "culture-related-1" },
        { category: "Europea · Italia", title: "Palazzo o villa: elegir sobre el lago de Como", body: "Donde se encuentran las velas, la logia y el lago.", imageKey: "culture-related-2" },
        { category: "Legal · Europa", title: "El paso civil, país por país", body: "Mairie, comune, notario, Standesamt: qué pide cada uno.", imageKey: "culture-related-3" },
        { category: "Coste · Europea", title: "Lo que cuesta de verdad una boda europea", body: "Presupuestos francos para 2026 por país y número de invitados.", imageKey: "culture-related-4" },
        { category: "Diseño · España", title: "La finca moderna, en detalle", body: "Cal, olivo y el largo almuerzo andaluz.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Provenza", href: destinationPath("es", "provence") },
        { label: "Toscana", href: destinationPath("es", "tuscany") },
        { label: "Lago de Como", href: destinationPath("es", "lake-como") },
        { label: "Costa Azul", href: destinationPath("es", "cote-dazur") },
      ],
      sidebarVenues: [
        { label: "Château de la Croix" },
        { label: "Villa Balbiano" },
        { label: "Finca toscana de Borgo" },
        { label: "Finca de Andalucía" },
      ],
      sidebarCultures: [
        { label: "Bodas cristianas", href: culturePath("es", "christian-weddings") },
        { label: "Bodas latinas", href: culturePath("es", "latin-weddings") },
        { label: "Bodas interreligiosas", href: culturePath("es", "interfaith-weddings") },
        { label: "Bodas judías", href: culturePath("es", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Preguntas, respondidas",
      headline: "Preguntas *frecuentes.*",
      items: [
        {
          question: "¿Pueden los extranjeros casarse legalmente en Francia o Italia? ¿Cómo funciona el paso civil?",
          answer: [
            "Sí, y lo gestionamos como algo habitual. Los requisitos difieren según el país y el municipio; primero los trazamos, por escrito, con el registro local, y luego construimos la celebración en torno a la fecha legal confirmada.",
            "Muchas parejas completan el acto civil vinculante en casa o en el ayuntamiento la víspera, y reservan el château o el palazzo para una ceremonia simbólica. Aconsejamos la vía más limpia según sus nacionalidades y su espacio.",
          ],
        },
        {
          question: "Château o palazzo, ¿en qué se diferencian en la práctica?",
          answer: [
            "Un château francés tiende a lo formal: piedra, jardines, una cena sentada à la française, grandeza diurna. Un palazzo italiano tiende a la noche: salas con frescos, velas, mesas largas bajo una logia sobre el lago.",
            "Ambos conllevan horarios de cierre y normas de conservación. Leemos con detalle el contrato de cada casa y diseñamos dentro de él.",
          ],
        },
        {
          question: "¿Cuál es el coste típico de una boda europea en 2026?",
          answer: [
            "Un rango útil para 2026 en una boda de 100–200 invitados en château o palazzo es de 250.000 a 800.000 USD, todo incluido, con grandes variaciones según país, casa y temporada.",
            "Compartimos presupuestos transparentes por partidas en la primera consulta, por país y número de invitados.",
          ],
        },
        {
          question: "¿Trabajan con el catering obligatorio del espacio?",
          answer: [
            "A menudo sí: muchas casas históricas exigen un catering propio o autorizado, y lo recibimos con gusto cuando la cocina es buena, porque las manos regionales suelen conocer mejor el producto.",
            "Cuando la casa permite un catering externo, traemos uno regional en lugar de un equipo importado. Confirmamos la cláusula de catering antes de firmar cualquier contrato.",
          ],
        },
        {
          question: "¿Cómo gestionan el clima en una casa histórica donde no se permite carpa?",
          answer: [
            "Incorporamos un plan de lluvia al contrato desde el principio: una sala interior reservada dentro de la casa, una logia cubierta o una estructura permitida donde las normas de conservación lo admitan.",
            "Donde se prohíbe la carpa, diseñamos para las salas tal como son, nunca contra ellas.",
          ],
        },
        {
          question: "¿Pueden sostener costumbres alemanas o austriacas, como el Polterabend?",
          answer: [
            "Sí. Una boda alemana puede tener un Polterabend la víspera —vajilla rota para la suerte, barrida juntos— y costumbres como el aserrado del tronco o los juegos del zapato nupcial.",
            "Sostenemos los rituales que la pareja y las familias desean, con un enlace con el Standesamt para el acto civil y músicos locales para la velada.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Una conversación privada —",
      headline: "*Comience* su\nboda europea.",
      body: "Cuéntenos el país, la casa, las familias y una fecha aproximada. Grecia responde, en persona, en un plazo de cinco días laborables.",
      ctaLabel: "Solicitar una consulta privada →",
      ctaHref: staticPath("es", "/contact"),
    },
  },

  // ── Français ──────────────────────────────────────────────────────────────
  fr: {
    name: "Mariages Européens",
    cardEyebrow: "Européen",
    cardBlurb:
      "Châteaux, palazzi, protocole régional. Français, italien, espagnol, allemand.",
    cardMeta: "Découvrir",
    intro:
      "Châteaux et palazzi, tenus selon le protocole régional français, italien, espagnol et allemand.",
    hero: {
      eyebrow: "Les Traditions · No 08",
      scriptOverline: "Un mariage de",
      headline: "*tradition* européenne.",
      deck: "Le continent que les couples croient connaître. En pratique, le protocole change d'un pays — et d'une commune — à l'autre : un château en Val de Loire, un palazzo au-dessus de Côme, une finca en Andalousie, un schloss en Bavière, chacun avec sa loi et son registre propres.",
      captionLeft: "Camille & Henri · Val de Loire",
      captionCenter: "Château à l'heure dorée · 2025",
      captionRight: "Planche VIII",
    },
    factStrip: [
      { label: "Durée du mariage", value: "1 – 3 jours", sub: "Acte civil · cérémonie · banquet" },
      { label: "Nombre d'invités", value: "60 – 300", sub: "De l'intime au grand" },
      { label: "Délai", value: "12 – 24 mois", sub: "Les demeures historiques se réservent tôt" },
      { label: "Régions tenues", value: "France · Italie", sub: "Espagne · Allemagne" },
      { label: "Lieux", value: "Château · palazzo", sub: "Finca · schloss" },
      { label: "Langues", value: "FR · IT · ES · DE", sub: "Programmes trilingues" },
    ],
    overview: {
      sideEyebrow: "La tradition",
      sideNote:
        "L'Europe n'est pas un seul mariage. Ce sont quatre systèmes juridiques, quatre cuisines et quatre registres, tenus pays par pays, commune par commune.",
      headline: "Un *continent,* quatre protocoles.",
      lede: "Les couples arrivent en pensant que l'Europe est un seul style. La réalité, c'est qu'une mairie française, un comune italien, un notario espagnol et un Standesamt allemand demandent chacun des choses différentes — et le mariage doit répondre à chacun avec précision.",
      bodyParagraphs: [
        "Le protocole régional diffère davantage à l'intérieur de l'Europe que presque aucun couple ne l'imagine. La distance entre un vin d'honneur provençal et un Polterabend bavarois est plus grande que celle entre continents — et la joie d'un mariage européen tient à honorer exactement le lieu où l'on se trouve.",
        "Le civil et le religieux restent séparés dans la majeure partie du continent, et l'ordre compte. En France, le mariage n'est légal qu'à la mairie ; en Italie, une cérémonie liante peut se tenir au comune ; en Espagne, le notario et la paroisse ont chacun leur rôle. Nous traçons d'abord le calendrier légal, puis nous bâtissons la célébration autour de lui.",
        "Nous ne déployons pas une seule équipe à travers les frontières. Nous gardons des relais locaux dans chaque région — un maître d'hôtel en Val de Loire, un officiant habilité en Toscane, une famille de finca en Andalousie, un correspondant Standesamt en Bavière — des gens qui connaissent les couvre-feux, les traiteurs et les coutumes de leur propre coin.",
        "Les exigences diffèrent selon le pays et la commune, et elles évoluent. Nous traitons les démarches comme la colonne vertébrale du mariage : confirmées tôt, par écrit, avec le registre local — pour que le jour lui-même ne soit jamais que la célébration.",
      ],
      pull: "« La distance entre un vin d'honneur provençal et un Polterabend bavarois est plus grande que celle entre continents. »",
      signatureName: "Grecia",
      signatureRole: "Fondatrice · À travers les mariages français, italiens, espagnols et allemands",
    },
    ceremonyArc: {
      eyebrow: "Structure de la cérémonie",
      headline: "Un *arc* européen.",
      deck: "Un ordre représentatif d'un mariage français, italien, espagnol ou allemand — avec la note régionale qui modifie chaque étape. Chaque pays ajuste ; le rythme demeure.",
      steps: [
        { numeral: "I", name: "L'acte civil", sub: "Mairie · comune · Standesamt", when: "Souvent la veille", body: "L'étape juridiquement liante, devant un officier à la mairie. En France, la mairie est obligatoire ; en Italie, le comune peut accueillir la cérémonie liante ; en Allemagne, le Standesamt. Nous le confirmons avec le registre local des mois à l'avance." },
        { numeral: "II", name: "Église ou symbolique", sub: "Religieuse ou avec officiant", when: "Jour de la cérémonie, fin de matinée", body: "Une messe catholique, un rite orthodoxe ou une cérémonie symbolique conduite par un officiant dans le parc du château. C'est le cœur émotionnel de la journée, distinct de l'acte civil." },
        { numeral: "III", name: "Vin d'honneur / aperitivo", sub: "Le verre de bienvenue", when: "Jour de la cérémonie, midi", body: "Le vin d'honneur français et l'aperitivo italien s'ouvrent au cercle élargi — les voisins, le village, la liste étendue. Champagne, vin régional, canapés dans le jardin." },
        { numeral: "IV", name: "Dîner à la française", sub: "Assis, en plusieurs services, long", when: "Soirée", body: "Un dîner assis servi à la française ou à l'italienne — plusieurs services, étalés sur des heures, avec les vins de la région. Le dîner peut être le niveau le plus intime de la journée." },
        { numeral: "V", name: "Discours & gâteau", sub: "Croquembouche · millefoglie", when: "Tard dans la soirée", body: "Les discours, puis le rituel du gâteau — une pièce montée de croquembouche française, un millefoglie italien, une tarta espagnole — coupé et partagé quand le dîner cède la place à la danse." },
        { numeral: "VI", name: "Danse jusque tard", sub: "Polterabend & coutumes", when: "Dans la nuit", body: "La fête se prolonge dans la limite du couvre-feu du lieu. Les mariages allemands peuvent garder un Polterabend la veille et des coutumes comme le sciage de la bûche ; nous tenons les rituels locaux que le couple souhaite." },
      ],
    },
    designConcepts: {
      eyebrow: "Concepts de décor",
      headline: "Château, *à la bougie.*",
      deck: "Trois directions de décor que nous avons construites plus d'une fois à travers le continent. Chacune s'adapte à la demeure, à la région et à la lumière.",
      cards: [
        {
          title: "Château Classique",
          body: "Un parti pris français dépouillé et formel : ivoire et pierre, longues bougies, roses de jardin et buis. Le château fait le travail ; le décor ne fait que l'encadrer.",
          palette: ["#f4efe4", "#d8cdb4", "#9aa17e", "#6d6a52", "#33301f"],
          imageKey: "concept-1",
          rows: [
            { label: "Cadre", value: "Château de Loire / Provence" },
            { label: "Fleurs", value: "Rose de jardin · pivoine · buis" },
            { label: "Idéal pour", value: "Formel · grand · assis" },
          ],
        },
        {
          title: "Palazzo Candlelight",
          body: "Une soirée italienne de murs à fresques, de centaines de bougies, de terre cuite et d'or. Lumière chaude et basse ; longues tables sous les loggias au-dessus du lac.",
          palette: ["#efe2cc", "#cd9b5a", "#8a4a2c", "#5a3322", "#2f2418"],
          imageKey: "concept-2",
          rows: [
            { label: "Cadre", value: "Palazzo de Côme / Toscane" },
            { label: "Fleurs", value: "Renoncule · olivier · agrumes" },
            { label: "Idéal pour", value: "Soirée · romantique · aux chandelles" },
          ],
        },
        {
          title: "Finca Moderne",
          body: "Un parti pris andalou décontracté : chaux, olivier, raphia et tons chauds. Longs déjeuners à l'ombre, danse sous des ampoules nues à la nuit tombée.",
          palette: ["#f1ece1", "#cdb894", "#9a9a72", "#6f5a3e", "#3a3326"],
          imageKey: "concept-3",
          rows: [
            { label: "Cadre", value: "Finca andalouse / majorquine" },
            { label: "Fleurs", value: "Olivier · bougainvillier · herbes" },
            { label: "Idéal pour", value: "Décontracté · soleil · plein air" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocole culturel",
      headline: "Ce à quoi nous *nous tenons.*",
      deck: "Six principes sur lesquels nous ne transigeons pas dans les mariages européens.",
      items: [
        { title: "Le calendrier des démarches commande tout", body: "Les exigences du mariage civil diffèrent selon le pays et la commune — nous les traçons d'abord, par écrit, avec le registre local. Toute autre décision suit la date légale, jamais l'inverse." },
        { title: "Les demeures historiques sont respectées à la lettre", body: "Châteaux, palazzi et schlösser imposent couvre-feux, règles de conservation et limites de charge. Nous lisons le contrat de près et concevons à l'intérieur : pas un clou dans un mur boisé, pas une bougie là où elle est interdite." },
        { title: "Traiteurs régionaux plutôt qu'importés", body: "Nous cuisinons la région, non contre elle. Une cuisine toscane pour un mariage toscan, une table provençale en Provence. Les menus importés dépassent rarement les mains locales qui connaissent le produit." },
        { title: "Le vin d'honneur est pour tous, le dîner pas toujours", body: "Le vin d'honneur et l'aperitivo sont ouverts et généreux ; le dîner assis est souvent un cercle plus restreint. Nous communiquons les niveaux d'invités avec délicatesse, à l'avance, afin que personne ne soit surpris à l'entrée." },
        { title: "Le bruit et les feux d'artifice sont réglés des mois à l'avance", body: "Les arrêtés municipaux sur le bruit et les autorisations de feux d'artifice varient selon la commune et se règlent tôt. Nous ne promettons jamais un feu de minuit que nous n'avons pas déjà fait autoriser." },
        { title: "Les jardins protégés sont photographiés, jamais investis pour la mise en scène", body: "Beaucoup de jardins historiques sont protégés. Nous les photographions tels quels et installons ailleurs : la beauté ne justifie pas une empreinte là où les règles de conservation l'interdisent." },
      ],
    },
    planning: {
      eyebrow: "Organisation sur plusieurs jours",
      headline: "Un *mariage* européen, jour après jour.",
      deck: "Le canevas que nous utilisons pour un mariage type de 150 invités au château ou au palazzo. Chaque journée s'adapte ; la structure tient.",
      days: [
        {
          numeral: "I",
          dayLabel: "Jour un",
          title: "Arrivée & accueil",
          body: "Les invités arrivent tout au long de la journée ; le studio coordonne les transferts depuis l'aéroport et la gare les plus proches. Un dîner d'accueil informel au village ou dans la cour du château — la première occasion pour deux familles et plusieurs langues de se rencontrer.",
          events: [
            { time: "Au fil de la journée", body: "Arrivées · transferts aéroport et gare · enregistrement" },
            { time: "16:00", body: "Acte civil à la mairie / comune (lorsqu'il a lieu la veille)" },
            { time: "19:30", body: "Dîner d'accueil · trattoria du village ou cour du château" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Jour deux",
          title: "Le jour du mariage",
          body: "La cérémonie en fin de matinée, le vin d'honneur à midi, le dîner à la française jusqu'au soir, discours et gâteau, puis danse jusque tard dans la limite du couvre-feu de la demeure.",
          events: [
            { time: "10:00", body: "Préparatifs des mariés · suites séparées" },
            { time: "11:30", body: "Cérémonie religieuse ou symbolique dans le parc" },
            { time: "12:30", body: "Vin d'honneur / aperitivo · jardin · le cercle élargi" },
            { time: "15:00", body: "Photographies · les jardins protégés, jamais investis pour la mise en scène" },
            { time: "19:30", body: "Dîner à la française · longues tables · vins régionaux" },
            { time: "22:00", body: "Discours · gâteau · croquembouche ou millefoglie" },
            { time: "23:00", body: "Danse jusque tard · dans la limite du couvre-feu" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Jour trois",
          title: "Déjeuner d'adieu",
          body: "Un long déjeuner d'adieu tardif — en plein air si le temps le permet, un brunch de récupération dans l'esprit. La clôture officieuse du mariage avant les départs de l'après-midi.",
          events: [
            { time: "12:30", body: "Déjeuner d'adieu · terrasse ou jardin" },
            { time: "Après-midi", body: "Départs · transferts vers l'aéroport et la gare" },
            { time: "Soir", body: "Dîner en famille proche (facultatif)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilité des destinations",
      headline: "Où les mariages européens *réussissent le mieux.*",
      viewAllLabel: "Voir toutes les destinations →",
      viewAllHref: staticPath("fr", "/destinations"),
      cards: [
        { rating: 5, name: "Côte amalfitaine", sub: "Italie · mai – octobre", destinationSlug: "amalfi" },
        { rating: 5, name: "Lac de Côme", sub: "Italie · mai – septembre", destinationSlug: "lake-como" },
        { rating: 5, name: "Toscane", sub: "Italie · mai – octobre", destinationSlug: "tuscany" },
        { rating: 5, name: "Paris & Île-de-France", sub: "France · mai – septembre", destinationSlug: "paris-ile-de-france" },
        { rating: 5, name: "Provence", sub: "France · mai – octobre", destinationSlug: "provence" },
        { rating: 5, name: "Côte d'Azur", sub: "France · juin – septembre", destinationSlug: "cote-dazur" },
        { rating: 3, name: "Punta Cana", sub: "Caraïbes · toute l'année", destinationSlug: "punta-cana" },
        { rating: 3, name: "Les Hamptons", sub: "États-Unis · juin – septembre", destinationSlug: "the-hamptons" },
      ],
    },
    guest: {
      eyebrow: "Gestion des invités",
      headline: "Le soin *pratique* d'une liste d'invités transfrontalière.",
      deck: "La couche logistique que la plupart des organisateurs sous-dotent. Nous commençons un an à l'avance.",
      cells: [
        { title: "Voyage multi-pays", body: "Des invités arrivant de plusieurs pays à la fois. Nous coordonnons les transferts depuis l'aéroport et la gare les plus proches, des blocs de chambres par catégories d'hôtel et un point de contact unique pour chaque itinéraire." },
        { title: "La langue du jour", body: "Programmes de cérémonie et signalétique trilingues par principe — français, italien, espagnol ou allemand aux côtés de l'anglais. Un officiant bilingue lorsque les familles le demandent, pour que personne ne suive la journée de loin." },
        { title: "Aînés & mobilité", body: "Chambres en rez-de-chaussée, transport dédié et un référent pour les aînés. Les demeures historiques sont rarement de plain-pied ; nous cartographions à l'avance l'itinéraire accessible de chaque château et palazzo." },
        { title: "Codes vestimentaires par lieu", body: "La tenue suit la demeure. Nous informons les invités avec précision — cravate noire pour le château, lin élégant pour la finca — et signalons le gravier, les talons et la fraîcheur du soir pour que personne ne soit pris au dépourvu." },
        { title: "Enfants", body: "Garde d'enfants multilingue pour le dîner et la danse, menus enfants à chaque table et salles calmes pour la sieste pendant le long après-midi européen." },
        { title: "Communications", body: "Un site invités avec le programme, le code vestimentaire par événement et les plans du lieu ; un fil de groupe trois semaines avant ; des guides imprimés dans chaque coffret d'accueil, dans toutes les langues nécessaires aux familles." },
      ],
    },
    related: {
      eyebrow: "Poursuivre la lecture",
      headline: "Du *journal.*",
      articles: [
        { category: "Européen · France", title: "Comment se déroule vraiment un mariage au château", body: "Sur les couvre-feux, les règles de conservation et la mairie qui passe d'abord.", imageKey: "culture-related-1" },
        { category: "Européen · Italie", title: "Palazzo ou villa : choisir au-dessus du lac de Côme", body: "Là où se rejoignent la bougie, la loggia et le lac.", imageKey: "culture-related-2" },
        { category: "Juridique · Europe", title: "L'étape civile, pays par pays", body: "Mairie, comune, notario, Standesamt : ce que chacun demande.", imageKey: "culture-related-3" },
        { category: "Coût · Européen", title: "Ce que coûte vraiment un mariage européen", body: "Budgets francs pour 2026, par pays et par nombre d'invités.", imageKey: "culture-related-4" },
        { category: "Décor · Espagne", title: "La finca moderne, en détail", body: "Chaux, olivier et le long déjeuner andalou.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Provence", href: destinationPath("fr", "provence") },
        { label: "Toscane", href: destinationPath("fr", "tuscany") },
        { label: "Lac de Côme", href: destinationPath("fr", "lake-como") },
        { label: "Côte d'Azur", href: destinationPath("fr", "cote-dazur") },
      ],
      sidebarVenues: [
        { label: "Château de la Croix" },
        { label: "Villa Balbiano" },
        { label: "Domaine toscan de Borgo" },
        { label: "Finca d'Andalousie" },
      ],
      sidebarCultures: [
        { label: "Mariages chrétiens", href: culturePath("fr", "christian-weddings") },
        { label: "Mariages latins", href: culturePath("fr", "latin-weddings") },
        { label: "Mariages interconfessionnels", href: culturePath("fr", "interfaith-weddings") },
        { label: "Mariages juifs", href: culturePath("fr", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Questions, réponses",
      headline: "Questions *fréquentes.*",
      items: [
        {
          question: "Des étrangers peuvent-ils se marier légalement en France ou en Italie — comment se passe l'étape civile ?",
          answer: [
            "Oui, et nous le gérons couramment. Les exigences diffèrent selon le pays et la commune — nous les traçons d'abord, par écrit, avec le registre local, puis nous bâtissons la célébration autour de la date légale confirmée.",
            "Beaucoup de couples accomplissent l'acte civil liant chez eux ou à la mairie la veille, et réservent le château ou le palazzo pour une cérémonie symbolique. Nous conseillons la voie la plus simple selon vos nationalités et votre lieu.",
          ],
        },
        {
          question: "Château ou palazzo — quelle différence en pratique ?",
          answer: [
            "Un château français tend vers le formel : pierre, jardins, un dîner assis à la française, une grandeur diurne. Un palazzo italien tend vers le soir — salles à fresques, bougies, longues tables sous une loggia au-dessus du lac.",
            "Les deux imposent couvre-feux et règles de conservation. Nous lisons de près le contrat de chaque demeure et concevons à l'intérieur.",
          ],
        },
        {
          question: "Quel est le coût type d'un mariage européen en 2026 ?",
          answer: [
            "Une fourchette utile pour 2026, pour un mariage de 100 à 200 invités au château ou au palazzo, va de 250 000 à 800 000 USD, tout compris, avec de fortes variations selon le pays, la demeure et la saison.",
            "Nous partageons des budgets transparents, poste par poste, dès la première consultation, par pays et par nombre d'invités.",
          ],
        },
        {
          question: "Travaillez-vous avec le traiteur imposé par le lieu ?",
          answer: [
            "Souvent, oui : beaucoup de demeures historiques imposent un traiteur maison ou agréé, et nous l'accueillons volontiers quand la cuisine est solide, car les mains régionales connaissent en général le mieux le produit.",
            "Quand la demeure autorise un traiteur extérieur, nous en amenons un régional plutôt qu'une équipe importée. Nous vérifions la clause traiteur avant toute signature de contrat.",
          ],
        },
        {
          question: "Comment gérez-vous la météo dans une demeure historique où la tente est interdite ?",
          answer: [
            "Nous intégrons un plan pluie au contrat dès le départ — une salle intérieure réservée dans la demeure, une loggia couverte ou une structure autorisée là où les règles de conservation l'admettent.",
            "Là où la tente est interdite, nous concevons pour les salles telles qu'elles sont, jamais contre elles.",
          ],
        },
        {
          question: "Pouvez-vous tenir les coutumes allemandes ou autrichiennes — le Polterabend et le reste ?",
          answer: [
            "Oui. Un mariage allemand peut garder un Polterabend la veille — de la vaisselle brisée pour la chance, balayée ensemble — et des coutumes comme le sciage de la bûche ou les jeux de la chaussure de la mariée.",
            "Nous tenons les rituels que le couple et les familles souhaitent, avec un correspondant Standesamt pour l'acte civil et des musiciens locaux pour la soirée.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Une conversation privée —",
      headline: "*Commencez* votre\nmariage européen.",
      body: "Dites-nous le pays, la demeure, les familles et une date approximative. Grecia vous répond, personnellement, sous cinq jours ouvrés.",
      ctaLabel: "Demander une consultation privée →",
      ctaHref: staticPath("fr", "/contact"),
    },
  },

  // ── Português ─────────────────────────────────────────────────────────────
  pt: {
    name: "Casamentos Europeus",
    cardEyebrow: "Europeu",
    cardBlurb:
      "Châteaux, palazzi, protocolo regional. Francês, italiano, espanhol, alemão.",
    cardMeta: "Descobrir",
    intro:
      "Châteaux e palazzi, realizados segundo o protocolo regional francês, italiano, espanhol e alemão.",
    hero: {
      eyebrow: "As Tradições · N.º 08",
      scriptOverline: "Um casamento de",
      headline: "*tradição* europeia.",
      deck: "O continente que os casais julgam conhecer. Na prática, o protocolo muda de um país — e de um município — para o seguinte: um château no Loire, um palazzo sobre Como, uma finca na Andaluzia, um schloss na Baviera, cada um com a sua própria lei e o seu próprio registo.",
      captionLeft: "Camille & Henri · Vale do Loire",
      captionCenter: "Château à hora dourada · 2025",
      captionRight: "Estampa VIII",
    },
    factStrip: [
      { label: "Duração do casamento", value: "1 – 3 dias", sub: "Ato civil · cerimónia · banquete" },
      { label: "Número de convidados", value: "60 – 300", sub: "Do íntimo ao grandioso" },
      { label: "Antecedência", value: "12 – 24 meses", sub: "As casas históricas reservam-se cedo" },
      { label: "Regiões realizadas", value: "França · Itália", sub: "Espanha · Alemanha" },
      { label: "Espaços", value: "Château · palazzo", sub: "Finca · schloss" },
      { label: "Idiomas", value: "FR · IT · ES · DE", sub: "Programas trilingues" },
    ],
    overview: {
      sideEyebrow: "A tradição",
      sideNote:
        "A Europa não é um só casamento. São quatro sistemas legais, quatro cozinhas e quatro registos, realizados país a país, município a município.",
      headline: "Um *continente,* quatro protocolos.",
      lede: "Os casais chegam a pensar que a Europa é um só estilo. A realidade é que uma mairie francesa, um comune italiano, um notario espanhol e um Standesamt alemão pedem coisas diferentes — e o casamento tem de responder a cada um com precisão.",
      bodyParagraphs: [
        "O protocolo regional difere dentro da Europa mais do que quase nenhum casal imagina. A distância entre um vin d'honneur provençal e um Polterabend bávaro é maior do que a distância entre continentes — e a alegria de um casamento europeu está em honrar exatamente o lugar onde se realiza.",
        "O civil e o religioso mantêm-se separados em grande parte do continente, e a ordem importa. Em França o casamento só é legal na mairie; em Itália pode realizar-se uma cerimónia vinculativa no comune; em Espanha o notario e a paróquia têm cada um o seu papel. Traçamos primeiro o calendário legal e depois construímos a celebração à sua volta.",
        "Não deslocamos uma única equipa através das fronteiras. Mantemos colaboradores locais em cada região — um maître no Loire, um celebrante habilitado na Toscana, uma família de finca na Andaluzia, um elo com o Standesamt na Baviera — pessoas que conhecem os horários de recolher, os caterers e os costumes do seu próprio canto.",
        "Os requisitos diferem consoante o país e o município, e mudam. Tratamos a papelada como a espinha dorsal do casamento: confirmada cedo, por escrito, com o registo local — para que o dia em si seja apenas a celebração.",
      ],
      pull: "«A distância entre um vin d'honneur provençal e um Polterabend bávaro é maior do que a distância entre continentes.»",
      signatureName: "Grecia",
      signatureRole: "Fundadora · Em casamentos franceses, italianos, espanhóis e alemães",
    },
    ceremonyArc: {
      eyebrow: "Estrutura da cerimónia",
      headline: "Um *arco* europeu.",
      deck: "Uma ordem representativa de um casamento francês, italiano, espanhol ou alemão — com a nota regional que muda cada passo. Cada país ajusta; o ritmo mantém-se.",
      steps: [
        { numeral: "I", name: "O ato civil", sub: "Mairie · comune · Standesamt", when: "Muitas vezes na véspera", body: "O passo juridicamente vinculativo, perante um oficial na câmara. Em França a mairie é obrigatória; em Itália o comune pode acolher a cerimónia vinculativa; na Alemanha o Standesamt. Confirmamo-lo com o registo local meses antes." },
        { numeral: "II", name: "Igreja ou simbólica", sub: "Religiosa ou com celebrante", when: "Dia da cerimónia, fim da manhã", body: "Uma missa católica, um rito ortodoxo ou uma cerimónia simbólica conduzida por um celebrante nos jardins do château. É o coração emocional do dia, distinto do ato civil." },
        { numeral: "III", name: "Vin d'honneur / aperitivo", sub: "O brinde de boas-vindas", when: "Dia da cerimónia, meio-dia", body: "O vin d'honneur francês e o aperitivo italiano abrem-se ao círculo alargado — os vizinhos, a aldeia, a lista estendida. Champanhe, vinho regional, canapés no jardim." },
        { numeral: "IV", name: "Jantar à la française", sub: "Sentado, por pratos, longo", when: "Noite", body: "Um jantar sentado servido à la française ou à l'italiana — vários pratos, ao longo de horas, com os vinhos da região. O jantar pode ser o nível mais íntimo do dia." },
        { numeral: "V", name: "Discursos & bolo", sub: "Croquembouche · millefoglie", when: "Tarde na noite", body: "Os discursos e depois o ritual do bolo — uma torre de croquembouche francesa, um millefoglie italiano, uma tarta espanhola — cortado e partilhado quando o jantar dá lugar à dança." },
        { numeral: "VI", name: "Dança até tarde", sub: "Polterabend & costumes", when: "Pela noite dentro", body: "A festa prolonga-se dentro do horário de recolher do espaço. Os casamentos alemães podem ter um Polterabend na véspera e costumes como o serrar do tronco; sustentamos os rituais locais que o casal deseja." },
      ],
    },
    designConcepts: {
      eyebrow: "Conceitos de decoração",
      headline: "Château, *à luz das velas.*",
      deck: "Três direções de decoração que já construímos mais do que uma vez pelo continente. Cada uma se adapta à casa, à região e à luz.",
      cards: [
        {
          title: "Château Classique",
          body: "Um esquema francês contido e formal: marfim e pedra, velas altas, rosas de jardim e buxo. O château faz o trabalho; a decoração apenas o emoldura.",
          palette: ["#f4efe4", "#d8cdb4", "#9aa17e", "#6d6a52", "#33301f"],
          imageKey: "concept-1",
          rows: [
            { label: "Cenário", value: "Château do Loire / Provença" },
            { label: "Flores", value: "Rosa de jardim · peónia · buxo" },
            { label: "Ideal para", value: "Formal · grandioso · sentado" },
          ],
        },
        {
          title: "Palazzo Candlelight",
          body: "Um serão italiano de paredes com frescos, centenas de velas, terracota e ouro. Luz quente e baixa; mesas longas sob loggias acima do lago.",
          palette: ["#efe2cc", "#cd9b5a", "#8a4a2c", "#5a3322", "#2f2418"],
          imageKey: "concept-2",
          rows: [
            { label: "Cenário", value: "Palazzo de Como / Toscana" },
            { label: "Flores", value: "Ranúnculo · oliveira · citrinos" },
            { label: "Ideal para", value: "Noturno · romântico · à luz das velas" },
          ],
        },
        {
          title: "Finca Moderna",
          body: "Um esquema andaluz descontraído: cal, oliveira, ráfia e tons quentes. Longos almoços à sombra, dança sob lâmpadas nuas ao anoitecer.",
          palette: ["#f1ece1", "#cdb894", "#9a9a72", "#6f5a3e", "#3a3326"],
          imageKey: "concept-3",
          rows: [
            { label: "Cenário", value: "Finca andaluza / maiorquina" },
            { label: "Flores", value: "Oliveira · buganvília · ervas" },
            { label: "Ideal para", value: "Descontraído · sol · ao ar livre" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocolo cultural",
      headline: "Aquilo a que nos *atemos.*",
      deck: "Seis princípios que não negociamos nos casamentos europeus.",
      items: [
        { title: "O calendário da papelada comanda tudo", body: "Os requisitos do casamento civil diferem consoante o país e o município — traçamo-los primeiro, por escrito, com o registo local. Qualquer outra decisão segue a data legal, nunca o contrário." },
        { title: "As casas históricas respeitam-se à letra", body: "Châteaux, palazzi e schlösser impõem horários de recolher, regras de conservação e limites de carga. Lemos o contrato com atenção e desenhamos dentro dele: nem um prego numa parede lambrilhada, nem uma vela onde é proibida." },
        { title: "Caterers regionais antes de importados", body: "Cozinhamos a região, não contra ela. Uma cozinha toscana para um casamento toscano, uma mesa provençal na Provença. Os menus importados raramente superam as mãos locais que conhecem o produto." },
        { title: "As boas-vindas são para todos; o jantar talvez não", body: "O vin d'honneur e o aperitivo são abertos e generosos; o jantar sentado é muitas vezes um círculo mais restrito. Comunicamos os níveis de convidados com delicadeza e antecedência, para que ninguém se surpreenda à porta." },
        { title: "O ruído e o fogo de artifício resolvem-se com meses de antecedência", body: "Os regulamentos municipais de ruído e as licenças de fogo de artifício variam por município e tratam-se cedo. Nunca prometemos um fogo da meia-noite que ainda não tenhamos autorizado." },
        { title: "Os jardins protegidos fotografam-se, nunca se ocupam para montagem", body: "Muitos jardins históricos são protegidos. Fotografamo-los tal como são e montamos noutro lugar: a beleza não justifica uma pegada onde as regras de conservação a proíbem." },
      ],
    },
    planning: {
      eyebrow: "Planeamento de vários dias",
      headline: "Um *casamento* europeu, dia a dia.",
      deck: "O modelo que usamos para um casamento típico de 150 convidados em château ou palazzo. Cada dia é flexível; a estrutura mantém-se.",
      days: [
        {
          numeral: "I",
          dayLabel: "Dia um",
          title: "Chegada & boas-vindas",
          body: "Os convidados chegam ao longo do dia; o estúdio coordena os transferes do aeroporto e da estação mais próximos. Um jantar de boas-vindas informal na aldeia ou no pátio do château — a primeira ocasião para duas famílias e várias línguas se conhecerem.",
          events: [
            { time: "Ao longo do dia", body: "Chegadas · transferes aeroporto e estação · check-in" },
            { time: "16:00", body: "Ato civil na mairie / comune (quando realizado na véspera)" },
            { time: "19:30", body: "Jantar de boas-vindas · trattoria da aldeia ou pátio do château" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Dia dois",
          title: "O dia do casamento",
          body: "A cerimónia ao fim da manhã, o vin d'honneur ao meio-dia, o jantar à la française pela noite, discursos e bolo, e dança até tarde dentro do horário de recolher da casa.",
          events: [
            { time: "10:00", body: "Preparativos dos noivos · suítes separadas" },
            { time: "11:30", body: "Cerimónia religiosa ou simbólica nos jardins" },
            { time: "12:30", body: "Vin d'honneur / aperitivo · jardim · o círculo alargado" },
            { time: "15:00", body: "Fotografias · os jardins protegidos, nunca ocupados para montagem" },
            { time: "19:30", body: "Jantar à la française · mesas longas · vinhos regionais" },
            { time: "22:00", body: "Discursos · bolo · croquembouche ou millefoglie" },
            { time: "23:00", body: "Dança até tarde · dentro do horário de recolher" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Dia três",
          title: "Déjeuner de despedida",
          body: "Um almoço de despedida longo e tardio — ao ar livre quando o tempo permite, um brunch de recuperação em espírito. O encerramento não oficial do casamento antes das partidas da tarde.",
          events: [
            { time: "12:30", body: "Déjeuner de despedida · terraço ou jardim" },
            { time: "Tarde", body: "Partidas · transferes para o aeroporto e a estação" },
            { time: "Noite", body: "Jantar de família próxima (opcional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilidade de destinos",
      headline: "Onde os casamentos europeus *funcionam melhor.*",
      viewAllLabel: "Ver todos os destinos →",
      viewAllHref: staticPath("pt", "/destinations"),
      cards: [
        { rating: 5, name: "Costa Amalfitana", sub: "Itália · maio – outubro", destinationSlug: "amalfi" },
        { rating: 5, name: "Lago de Como", sub: "Itália · maio – setembro", destinationSlug: "lake-como" },
        { rating: 5, name: "Toscana", sub: "Itália · maio – outubro", destinationSlug: "tuscany" },
        { rating: 5, name: "Paris & Île-de-France", sub: "França · maio – setembro", destinationSlug: "paris-ile-de-france" },
        { rating: 5, name: "Provença", sub: "França · maio – outubro", destinationSlug: "provence" },
        { rating: 5, name: "Costa Azul", sub: "França · junho – setembro", destinationSlug: "cote-dazur" },
        { rating: 3, name: "Punta Cana", sub: "Caraíbas · todo o ano", destinationSlug: "punta-cana" },
        { rating: 3, name: "Os Hamptons", sub: "Estados Unidos · junho – setembro", destinationSlug: "the-hamptons" },
      ],
    },
    guest: {
      eyebrow: "Gestão de convidados",
      headline: "O cuidado *prático* de uma lista de convidados transfronteiriça.",
      deck: "A camada logística que a maioria dos organizadores subdimensiona. Começamos com um ano de antecedência.",
      cells: [
        { title: "Viagem multipaís", body: "Convidados a chegar de vários países ao mesmo tempo. Coordenamos transferes do aeroporto e da estação mais próximos, blocos de quartos por categorias de hotel e um único ponto de contacto para cada itinerário." },
        { title: "A língua do dia", body: "Programas de cerimónia e sinalética trilingues por princípio — francês, italiano, espanhol ou alemão a par do inglês. Um celebrante bilingue quando as famílias o pedem, para que ninguém acompanhe o dia à distância." },
        { title: "Idosos & mobilidade", body: "Quartos no piso térreo, transporte dedicado e um elo para os mais velhos. As casas históricas raramente são sem degraus; mapeamos com antecedência o percurso acessível de cada château e palazzo." },
        { title: "Códigos de traje por espaço", body: "A formalidade segue a casa. Informamos os convidados com precisão — black tie para o château, linho elegante para a finca — e assinalamos o saibro, os saltos e o fresco da noite para que ninguém seja apanhado de surpresa." },
        { title: "Crianças", body: "Acolhimento infantil multilingue para o jantar e a dança, menus de criança em cada mesa e salas tranquilas para a sesta durante a longa tarde europeia." },
        { title: "Comunicações", body: "Um site de convidados com o programa, o código de traje por evento e os mapas do espaço; um canal de grupo três semanas antes; guias impressos em cada kit de boas-vindas, em todas as línguas de que as famílias precisem." },
      ],
    },
    related: {
      eyebrow: "Continuar a ler",
      headline: "Do *diário.*",
      articles: [
        { category: "Europeu · França", title: "Como funciona, de facto, um casamento num château", body: "Sobre horários de recolher, regras de conservação e a mairie que vem primeiro.", imageKey: "culture-related-1" },
        { category: "Europeu · Itália", title: "Palazzo ou villa: escolher sobre o lago de Como", body: "Onde se encontram as velas, a loggia e o lago.", imageKey: "culture-related-2" },
        { category: "Legal · Europa", title: "O passo civil, país a país", body: "Mairie, comune, notario, Standesamt: o que cada um pede.", imageKey: "culture-related-3" },
        { category: "Custo · Europeu", title: "Quanto custa, de facto, um casamento europeu", body: "Orçamentos francos para 2026, por país e número de convidados.", imageKey: "culture-related-4" },
        { category: "Decoração · Espanha", title: "A finca moderna, em detalhe", body: "Cal, oliveira e o longo almoço andaluz.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Provença", href: destinationPath("pt", "provence") },
        { label: "Toscana", href: destinationPath("pt", "tuscany") },
        { label: "Lago de Como", href: destinationPath("pt", "lake-como") },
        { label: "Costa Azul", href: destinationPath("pt", "cote-dazur") },
      ],
      sidebarVenues: [
        { label: "Château de la Croix" },
        { label: "Villa Balbiano" },
        { label: "Quinta toscana de Borgo" },
        { label: "Finca da Andaluzia" },
      ],
      sidebarCultures: [
        { label: "Casamentos cristãos", href: culturePath("pt", "christian-weddings") },
        { label: "Casamentos latinos", href: culturePath("pt", "latin-weddings") },
        { label: "Casamentos inter-religiosos", href: culturePath("pt", "interfaith-weddings") },
        { label: "Casamentos judaicos", href: culturePath("pt", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Perguntas, respondidas",
      headline: "Perguntas *frequentes.*",
      items: [
        {
          question: "Os estrangeiros podem casar-se legalmente em França ou em Itália — como funciona o passo civil?",
          answer: [
            "Sim, e tratamos disso por rotina. Os requisitos diferem consoante o país e o município — traçamo-los primeiro, por escrito, com o registo local, e depois construímos a celebração em torno da data legal confirmada.",
            "Muitos casais cumprem o ato civil vinculativo em casa ou na câmara na véspera, e reservam o château ou o palazzo para uma cerimónia simbólica. Aconselhamos a via mais simples conforme as vossas nacionalidades e o vosso espaço.",
          ],
        },
        {
          question: "Château ou palazzo — em que diferem na prática?",
          answer: [
            "Um château francês tende para o formal: pedra, jardins, um jantar sentado à la française, grandeza diurna. Um palazzo italiano tende para a noite — salas com frescos, velas, mesas longas sob uma loggia acima do lago.",
            "Ambos impõem horários de recolher e regras de conservação. Lemos com atenção o contrato de cada casa e desenhamos dentro dele.",
          ],
        },
        {
          question: "Qual é o custo típico de um casamento europeu em 2026?",
          answer: [
            "Um intervalo útil para 2026, num casamento de 100 a 200 convidados em château ou palazzo, vai de 250 000 a 800 000 USD, tudo incluído, com fortes variações conforme país, casa e época.",
            "Partilhamos orçamentos transparentes, rubrica a rubrica, na primeira consulta, por país e número de convidados.",
          ],
        },
        {
          question: "Trabalham com o catering obrigatório do espaço?",
          answer: [
            "Muitas vezes, sim: muitas casas históricas exigem um catering próprio ou aprovado, e recebemo-lo com agrado quando a cozinha é sólida, porque as mãos regionais costumam conhecer melhor o produto.",
            "Quando a casa permite um catering externo, trazemos um regional em vez de uma equipa importada. Confirmamos a cláusula de catering antes de assinar qualquer contrato.",
          ],
        },
        {
          question: "Como gerem o tempo numa casa histórica onde não é permitida tenda?",
          answer: [
            "Incorporamos um plano de chuva no contrato desde o início — uma sala interior reservada dentro da casa, uma loggia coberta ou uma estrutura permitida onde as regras de conservação o admitam.",
            "Onde a tenda é proibida, desenhamos para as salas tal como são, nunca contra elas.",
          ],
        },
        {
          question: "Conseguem sustentar costumes alemães ou austríacos — o Polterabend e o resto?",
          answer: [
            "Sim. Um casamento alemão pode ter um Polterabend na véspera — louça partida para dar sorte, varrida em conjunto — e costumes como o serrar do tronco ou os jogos do sapato da noiva.",
            "Sustentamos os rituais que o casal e as famílias desejam, com um elo ao Standesamt para o ato civil e músicos locais para o serão.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Uma conversa privada —",
      headline: "*Comece* o seu\ncasamento europeu.",
      body: "Diga-nos o país, a casa, as famílias e uma data aproximada. A Grecia responde, pessoalmente, no prazo de cinco dias úteis.",
      ctaLabel: "Solicitar uma consulta privada →",
      ctaHref: staticPath("pt", "/contact"),
    },
  },

  // ── Deutsch ───────────────────────────────────────────────────────────────
  de: {
    name: "Europäische Hochzeiten",
    cardEyebrow: "Europäisch",
    cardBlurb:
      "Châteaux, Palazzi, regionales Protokoll. Französisch, italienisch, spanisch, deutsch.",
    cardMeta: "Entdecken",
    intro:
      "Châteaux und Palazzi, gehalten nach französischem, italienischem, spanischem und deutschem Regionalprotokoll.",
    hero: {
      eyebrow: "Die Traditionen · Nr. 08",
      scriptOverline: "Eine Hochzeit von",
      headline: "europäischer *Tradition.*",
      deck: "Der Kontinent, den Paare zu kennen glauben. In der Praxis verschiebt sich das Protokoll von einem Land — und einer Gemeinde — zur nächsten: ein Château an der Loire, ein Palazzo über dem Comer See, eine Finca in Andalusien, ein Schloss in Bayern, jedes mit eigenem Recht und eigenem Register.",
      captionLeft: "Camille & Henri · Loire-Tal",
      captionCenter: "Château zur goldenen Stunde · 2025",
      captionRight: "Tafel VIII",
    },
    factStrip: [
      { label: "Dauer der Hochzeit", value: "1 – 3 Tage", sub: "Standesamt · Trauung · Festmahl" },
      { label: "Gästezahl", value: "60 – 300", sub: "Von intim bis groß" },
      { label: "Vorlauf", value: "12 – 24 Monate", sub: "Historische Häuser sind früh vergeben" },
      { label: "Gehaltene Regionen", value: "Frankreich · Italien", sub: "Spanien · Deutschland" },
      { label: "Orte", value: "Château · Palazzo", sub: "Finca · Schloss" },
      { label: "Sprachen", value: "FR · IT · ES · DE", sub: "Dreisprachige Programme" },
    ],
    overview: {
      sideEyebrow: "Die Tradition",
      sideNote:
        "Europa ist nicht eine Hochzeit. Es sind vier Rechtssysteme, vier Küchen und vier Register — gehalten Land für Land, Gemeinde für Gemeinde.",
      headline: "Ein *Kontinent,* vier Protokolle.",
      lede: "Paare kommen in dem Glauben, Europa sei ein einziger Stil. Die Wirklichkeit ist, dass eine französische Mairie, ein italienisches Comune, ein spanischer Notario und ein deutsches Standesamt jeweils Verschiedenes verlangen — und die Hochzeit jedem davon genau entsprechen muss.",
      bodyParagraphs: [
        "Das regionale Protokoll unterscheidet sich innerhalb Europas stärker, als fast jedes Paar erwartet. Die Entfernung zwischen einem provenzalischen Vin d'honneur und einem bayerischen Polterabend ist größer als die zwischen Kontinenten — und die Freude einer europäischen Hochzeit liegt darin, genau den Ort zu ehren, an dem man ist.",
        "Das Standesamtliche und das Kirchliche bleiben auf dem größten Teil des Kontinents getrennt, und die Reihenfolge zählt. In Frankreich ist die Ehe nur an der Mairie rechtsgültig; in Italien kann eine bindende Zeremonie im Comune stattfinden; in Spanien haben Notario und Pfarrei je ihre Rolle. Wir kartieren zuerst den rechtlichen Kalender und bauen die Feier darum herum.",
        "Wir setzen nicht ein einziges Team über Grenzen hinweg ein. Wir halten lokale Vertraute in jeder Region — einen Maître an der Loire, einen amtlich befugten Trauredner in der Toskana, eine Finca-Familie in Andalusien, eine Standesamt-Verbindung in Bayern — Menschen, die die Sperrstunden, die Caterer und die Bräuche ihres eigenen Winkels kennen.",
        "Die Anforderungen unterscheiden sich nach Land und Gemeinde, und sie ändern sich. Wir behandeln die Formalitäten als das Rückgrat der Hochzeit: früh bestätigt, schriftlich, mit dem örtlichen Register — damit der Tag selbst stets nur die Feier ist.",
      ],
      pull: "„Die Entfernung zwischen einem provenzalischen Vin d'honneur und einem bayerischen Polterabend ist größer als die zwischen Kontinenten.“",
      signatureName: "Grecia",
      signatureRole: "Gründerin · Über französische, italienische, spanische und deutsche Hochzeiten hinweg",
    },
    ceremonyArc: {
      eyebrow: "Aufbau der Trauung",
      headline: "Ein europäischer *Bogen.*",
      deck: "Eine repräsentative Reihenfolge über eine französische, italienische, spanische oder deutsche Hochzeit — mit der regionalen Note, die jeden Schritt verändert. Jedes Land passt an; der Rhythmus bleibt.",
      steps: [
        { numeral: "I", name: "Der standesamtliche Akt", sub: "Mairie · Comune · Standesamt", when: "Oft am Vortag", body: "Der rechtlich bindende Schritt, vor einem Standesbeamten im Rathaus. In Frankreich ist die Mairie verpflichtend; in Italien kann das Comune die bindende Trauung ausrichten; in Deutschland das Standesamt. Wir bestätigen ihn Monate im Voraus mit dem örtlichen Register." },
        { numeral: "II", name: "Kirche oder symbolisch", sub: "Kirchlich oder mit Trauredner", when: "Trauungstag, später Vormittag", body: "Eine katholische Messe, ein orthodoxer Ritus oder eine symbolische Zeremonie, geleitet von einem Trauredner im Park des Château. Dies ist das emotionale Herz des Tages, getrennt vom standesamtlichen Akt." },
        { numeral: "III", name: "Vin d'honneur / Aperitivo", sub: "Der Begrüßungstrunk", when: "Trauungstag, mittags", body: "Der französische Vin d'honneur und der italienische Aperitivo öffnen sich dem weiteren Kreis — den Nachbarn, dem Dorf, der erweiterten Gästeliste. Champagner, regionaler Wein, Canapés im Garten." },
        { numeral: "IV", name: "Dinner à la française", sub: "Gesetzt, mehrgängig, lang", when: "Abend", body: "Ein gesetztes Dinner, serviert à la française oder à l'italiana — mehrere Gänge, über Stunden getaktet, mit den Weinen der Region. Das Dinner kann die intimere Ebene des Tages sein." },
        { numeral: "V", name: "Reden & Kuchen", sub: "Croquembouche · Millefoglie", when: "Später Abend", body: "Die Reden, dann das Kuchen-Ritual — ein französischer Croquembouche-Turm, ein italienisches Millefoglie, eine spanische Tarta — angeschnitten und geteilt, wenn das Dinner dem Tanz weicht." },
        { numeral: "VI", name: "Tanz bis spät", sub: "Polterabend & Bräuche", when: "Bis in die Nacht", body: "Die Feier läuft spät innerhalb der Sperrstunde des Hauses. Deutsche Hochzeiten halten womöglich einen Polterabend am Vorabend und Bräuche wie das Baumstammsägen; wir halten die örtlichen Rituale, die das Paar wünscht." },
      ],
    },
    designConcepts: {
      eyebrow: "Gestaltungskonzepte",
      headline: "Château, *Kerzenschein.*",
      deck: "Drei tragende Gestaltungsrichtungen, die wir mehr als einmal über den Kontinent hinweg gebaut haben. Jede passt sich dem Haus, der Region und dem Licht an.",
      cards: [
        {
          title: "Château Classique",
          body: "Ein reduziertes, formales französisches Schema: Elfenbein und Stein, hohe Kerzen, Gartenrosen und Buchsbaum. Das Château leistet die Arbeit; die Gestaltung rahmt es nur.",
          palette: ["#f4efe4", "#d8cdb4", "#9aa17e", "#6d6a52", "#33301f"],
          imageKey: "concept-1",
          rows: [
            { label: "Kulisse", value: "Château Loire / Provence" },
            { label: "Blumen", value: "Gartenrose · Pfingstrose · Buchs" },
            { label: "Ideal für", value: "Formell · groß · gesetzt" },
          ],
        },
        {
          title: "Palazzo Candlelight",
          body: "Ein italienischer Abend aus freskierten Wänden, hunderten Kerzen, Terrakotta und Gold. Warmes, tiefes Licht; lange Tafeln unter Loggien über dem See.",
          palette: ["#efe2cc", "#cd9b5a", "#8a4a2c", "#5a3322", "#2f2418"],
          imageKey: "concept-2",
          rows: [
            { label: "Kulisse", value: "Palazzo Comer See / Toskana" },
            { label: "Blumen", value: "Ranunkel · Olive · Zitrus" },
            { label: "Ideal für", value: "Abend · romantisch · bei Kerzenschein" },
          ],
        },
        {
          title: "Moderne Finca",
          body: "Ein entspanntes andalusisches Schema: Kalkweiß, Olive, Bast und warme Naturtöne. Lange Mittagessen im Schatten, Tanz unter nackten Glühbirnen nach Einbruch der Dunkelheit.",
          palette: ["#f1ece1", "#cdb894", "#9a9a72", "#6f5a3e", "#3a3326"],
          imageKey: "concept-3",
          rows: [
            { label: "Kulisse", value: "Finca Andalusien / Mallorca" },
            { label: "Blumen", value: "Olive · Bougainvillea · Kräuter" },
            { label: "Ideal für", value: "Entspannt · Sonne · im Freien" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Kulturelles Protokoll",
      headline: "Woran wir uns *halten.*",
      deck: "Sechs Grundsätze, bei denen wir bei europäischen Hochzeiten keine Kompromisse machen.",
      items: [
        { title: "Der Formalitätenkalender bestimmt alles", body: "Die Anforderungen der standesamtlichen Eheschließung unterscheiden sich nach Land und Gemeinde — wir kartieren sie zuerst, schriftlich, mit dem örtlichen Register. Jede weitere Entscheidung folgt dem rechtlichen Datum, niemals umgekehrt." },
        { title: "Historische Häuser werden buchstabengetreu respektiert", body: "Châteaux, Palazzi und Schlösser tragen Sperrstunden, Denkmalauflagen und Lastgrenzen. Wir lesen den Vertrag genau und gestalten darin — kein Nagel in eine getäfelte Wand, keine Kerze, wo sie verboten ist." },
        { title: "Regionale Caterer vor importierten", body: "Wir kochen die Region, nicht gegen sie. Eine toskanische Küche für eine toskanische Hochzeit, eine provenzalische Tafel in der Provence. Importierte Menüs übertreffen selten die lokalen Hände, die das Produkt kennen." },
        { title: "Der Empfang ist für alle, das Dinner vielleicht nicht", body: "Vin d'honneur und Aperitivo sind offen und großzügig; das gesetzte Dinner ist oft ein engerer Kreis. Wir kommunizieren die Gästeebenen anmutig und im Voraus, damit niemand an der Tür überrascht wird." },
        { title: "Lärm und Feuerwerk werden Monate im Voraus geregelt", body: "Örtliche Lärmverordnungen und Feuerwerksgenehmigungen sind je Gemeinde verschieden und werden früh besorgt. Wir versprechen nie ein Mitternachtsfeuerwerk, das wir nicht bereits genehmigt haben." },
        { title: "Geschützte Gärten werden fotografiert, nie zum Aufbau betreten", body: "Viele historische Gärten stehen unter Schutz. Wir fotografieren sie, wie sie sind, und bauen andernorts auf: Schönheit rechtfertigt keinen Fußabdruck, wo die Denkmalauflagen ihn verbieten." },
      ],
    },
    planning: {
      eyebrow: "Planung über mehrere Tage",
      headline: "Eine europäische *Hochzeit,* Tag für Tag.",
      deck: "Die Vorlage, die wir für eine typische Hochzeit mit 150 Gästen im Château oder Palazzo nutzen. Jeder Tag ist flexibel; die Struktur bleibt.",
      days: [
        {
          numeral: "I",
          dayLabel: "Tag eins",
          title: "Ankunft & Empfang",
          body: "Die Gäste kommen über den Tag verteilt an; das Studio koordiniert die Transfers vom nächsten Flughafen und Bahnhof. Ein informelles Begrüßungsdinner im Dorf oder im Hof des Château — die erste Gelegenheit für zwei Familien und mehrere Sprachen, sich zu begegnen.",
          events: [
            { time: "Über den Tag", body: "Ankünfte · Transfers Flughafen und Bahnhof · Check-in" },
            { time: "16:00", body: "Standesamtlicher Akt an der Mairie / im Comune (sofern am Vortag)" },
            { time: "19:30", body: "Begrüßungsdinner · Dorf-Trattoria oder Château-Hof" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Tag zwei",
          title: "Der Hochzeitstag",
          body: "Die Trauung am späten Vormittag, der Vin d'honneur mittags, das Dinner à la française bis in den Abend, Reden und Kuchen, dann Tanz bis spät innerhalb der Sperrstunde des Hauses.",
          events: [
            { time: "10:00", body: "Vorbereitung von Braut & Bräutigam · getrennte Suiten" },
            { time: "11:30", body: "Kirchliche oder symbolische Trauung im Park" },
            { time: "12:30", body: "Vin d'honneur / Aperitivo · Garten · der weitere Kreis" },
            { time: "15:00", body: "Fotografien · die geschützten Gärten, nie zum Aufbau betreten" },
            { time: "19:30", body: "Dinner à la française · lange Tafeln · regionale Weine" },
            { time: "22:00", body: "Reden · Kuchen · Croquembouche oder Millefoglie" },
            { time: "23:00", body: "Tanz bis spät · innerhalb der Sperrstunde" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Tag drei",
          title: "Abschieds-Déjeuner",
          body: "Ein langes, spätes Abschiedsessen — im Freien, wenn das Wetter es zulässt, dem Geist nach ein Erholungsbrunch. Der inoffizielle Abschluss der Hochzeit vor den Abreisen am Nachmittag.",
          events: [
            { time: "12:30", body: "Abschieds-Déjeuner · Terrasse oder Garten" },
            { time: "Nachmittag", body: "Abreisen · Transfers zum Flughafen und Bahnhof" },
            { time: "Abend", body: "Dinner im engsten Familienkreis (optional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Reiseziel-Eignung",
      headline: "Wo europäische Hochzeiten *am besten gelingen.*",
      viewAllLabel: "Alle Reiseziele ansehen →",
      viewAllHref: staticPath("de", "/destinations"),
      cards: [
        { rating: 5, name: "Amalfiküste", sub: "Italien · Mai – Oktober", destinationSlug: "amalfi" },
        { rating: 5, name: "Comer See", sub: "Italien · Mai – September", destinationSlug: "lake-como" },
        { rating: 5, name: "Toskana", sub: "Italien · Mai – Oktober", destinationSlug: "tuscany" },
        { rating: 5, name: "Paris & Île-de-France", sub: "Frankreich · Mai – September", destinationSlug: "paris-ile-de-france" },
        { rating: 5, name: "Provence", sub: "Frankreich · Mai – Oktober", destinationSlug: "provence" },
        { rating: 5, name: "Côte d'Azur", sub: "Frankreich · Juni – September", destinationSlug: "cote-dazur" },
        { rating: 3, name: "Punta Cana", sub: "Karibik · ganzjährig", destinationSlug: "punta-cana" },
        { rating: 3, name: "Die Hamptons", sub: "Vereinigte Staaten · Juni – September", destinationSlug: "the-hamptons" },
      ],
    },
    guest: {
      eyebrow: "Gästebetreuung",
      headline: "Die *praktische* Fürsorge einer grenzüberschreitenden Gästeliste.",
      deck: "Die logistische Ebene, die die meisten Planer unterbesetzen. Wir beginnen ein Jahr im Voraus.",
      cells: [
        { title: "Reise über mehrere Länder", body: "Gäste, die aus mehreren Ländern zugleich anreisen. Wir koordinieren Transfers vom nächsten Flughafen und Bahnhof, Zimmerkontingente über Hotelkategorien hinweg und einen einzigen Ansprechpartner für jede Reiseroute." },
        { title: "Die Sprache des Tages", body: "Dreisprachige Trauungsprogramme und Beschilderung als Standard — Französisch, Italienisch, Spanisch oder Deutsch neben Englisch. Ein zweisprachiger Trauredner, wenn die Familien es wünschen, damit niemand dem Tag aus der Ferne folgt." },
        { title: "Ältere & Mobilität", body: "Zimmer im Erdgeschoss, eigener Transport und ein Ansprechpartner für die Älteren. Historische Häuser sind selten stufenlos; wir kartieren im Voraus den barrierearmen Weg durch jedes Château und jeden Palazzo." },
        { title: "Kleiderordnung je Haus", body: "Die Förmlichkeit folgt dem Haus. Wir briefen die Gäste genau — Black Tie fürs Château, eleganter Leinen für die Finca — und weisen auf Kies, Absätze und die Abendkühle hin, damit niemand überrascht wird." },
        { title: "Kinder", body: "Mehrsprachige Kinderbetreuung fürs Dinner und den Tanz, Kindermenüs an jedem Tisch und ruhige Räume für den Mittagsschlaf während des langen europäischen Nachmittags." },
        { title: "Kommunikation", body: "Eine Gäste-Website mit Programm, Kleiderordnung je Ereignis und Lageplänen; ein Gruppenkanal drei Wochen vorab; gedruckte Begleithefte in jedem Willkommenspaket, in jeder Sprache, die die Familien brauchen." },
      ],
    },
    related: {
      eyebrow: "Weiterlesen",
      headline: "Aus dem *Journal.*",
      articles: [
        { category: "Europäisch · Frankreich", title: "Wie eine Château-Hochzeit wirklich abläuft", body: "Über Sperrstunden, Denkmalauflagen und die Mairie, die zuerst kommt.", imageKey: "culture-related-1" },
        { category: "Europäisch · Italien", title: "Palazzo oder Villa: Wählen über dem Comer See", body: "Wo Kerzenschein, Loggia und See sich treffen.", imageKey: "culture-related-2" },
        { category: "Recht · Europa", title: "Der standesamtliche Schritt, Land für Land", body: "Mairie, Comune, Notario, Standesamt — was jedes verlangt.", imageKey: "culture-related-3" },
        { category: "Kosten · Europäisch", title: "Was eine europäische Hochzeit wirklich kostet", body: "Offene Budgets für 2026, nach Land und Gästezahl.", imageKey: "culture-related-4" },
        { category: "Gestaltung · Spanien", title: "Die moderne Finca im Detail", body: "Kalkweiß, Olive und das lange andalusische Mittagessen.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Provence", href: destinationPath("de", "provence") },
        { label: "Toskana", href: destinationPath("de", "tuscany") },
        { label: "Comer See", href: destinationPath("de", "lake-como") },
        { label: "Côte d'Azur", href: destinationPath("de", "cote-dazur") },
      ],
      sidebarVenues: [
        { label: "Château de la Croix" },
        { label: "Villa Balbiano" },
        { label: "Toskanisches Borgo-Gut" },
        { label: "Finca Andalusien" },
      ],
      sidebarCultures: [
        { label: "Christliche Hochzeiten", href: culturePath("de", "christian-weddings") },
        { label: "Lateinamerikanische Hochzeiten", href: culturePath("de", "latin-weddings") },
        { label: "Interreligiöse Hochzeiten", href: culturePath("de", "interfaith-weddings") },
        { label: "Jüdische Hochzeiten", href: culturePath("de", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Fragen, beantwortet",
      headline: "Häufig *gefragt.*",
      items: [
        {
          question: "Dürfen Ausländer in Frankreich oder Italien rechtsgültig heiraten — wie läuft der standesamtliche Schritt?",
          answer: [
            "Ja, und wir regeln das routiniert. Die Anforderungen unterscheiden sich nach Land und Gemeinde — wir kartieren sie zuerst, schriftlich, mit dem örtlichen Register, und bauen dann die Feier um das bestätigte rechtliche Datum.",
            "Viele Paare vollziehen den bindenden standesamtlichen Akt zu Hause oder am Vortag im Rathaus und behalten das Château oder den Palazzo für eine symbolische Zeremonie. Wir empfehlen den klarsten Weg je nach Ihren Staatsangehörigkeiten und Ihrem Ort.",
          ],
        },
        {
          question: "Château oder Palazzo — worin unterscheiden sie sich in der Praxis?",
          answer: [
            "Ein französisches Château neigt zum Formellen: Stein, Gärten, ein gesetztes Dinner à la française, Erhabenheit bei Tag. Ein italienischer Palazzo neigt zum Abend — freskierte Säle, Kerzenschein, lange Tafeln unter einer Loggia über dem See.",
            "Beide tragen Sperrstunden und Denkmalauflagen. Wir lesen den Vertrag jedes Hauses genau und gestalten darin.",
          ],
        },
        {
          question: "Was kostet eine europäische Hochzeit 2026 typischerweise?",
          answer: [
            "Eine brauchbare Spanne für 2026, für eine Hochzeit mit 100 bis 200 Gästen im Château oder Palazzo, reicht von 250.000 bis 800.000 USD, alles inklusive, mit starken Schwankungen je nach Land, Haus und Saison.",
            "Wir teilen transparente Budgets, Posten für Posten, schon in der ersten Beratung, nach Land und Gästezahl.",
          ],
        },
        {
          question: "Arbeiten Sie mit dem vorgeschriebenen Caterer des Hauses?",
          answer: [
            "Oft, ja: Viele historische Häuser verlangen einen hauseigenen oder zugelassenen Caterer, und wir begrüßen das, wo die Küche stark ist, denn die regionalen Hände kennen das Produkt meist am besten.",
            "Wo das Haus einen externen Caterer erlaubt, bringen wir einen regionalen statt eines importierten Teams. Wir prüfen die Catering-Klausel, bevor irgendein Vertrag unterzeichnet wird.",
          ],
        },
        {
          question: "Wie gehen Sie mit dem Wetter in einem historischen Haus um, in dem kein Zelt erlaubt ist?",
          answer: [
            "Wir nehmen von Anfang an einen Schlechtwetterplan in den Vertrag auf — einen reservierten Innenraum im Haus, eine überdachte Loggia oder eine zulässige Struktur, wo die Denkmalauflagen es gestatten.",
            "Wo ein Zelt verboten ist, gestalten wir für die Räume, wie sie sind, niemals gegen sie.",
          ],
        },
        {
          question: "Können Sie deutsche oder österreichische Bräuche halten — den Polterabend und das Übrige?",
          answer: [
            "Ja. Eine deutsche Hochzeit kann einen Polterabend am Vorabend halten — zerbrochenes Geschirr für das Glück, gemeinsam zusammengekehrt — und Bräuche wie das Baumstammsägen oder das Brautschuh-Spiel.",
            "Wir halten die Rituale, die das Paar und die Familien wünschen, mit einer Standesamt-Verbindung für den standesamtlichen Akt und örtlichen Musikern für den Abend.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Ein privates Gespräch —",
      headline: "*Beginnen* Sie Ihre\neuropäische Hochzeit.",
      body: "Nennen Sie uns das Land, das Haus, die Familien und ein ungefähres Datum. Grecia antwortet persönlich, innerhalb von fünf Werktagen.",
      ctaLabel: "Ein privates Beratungsgespräch anfragen →",
      ctaHref: staticPath("de", "/contact"),
    },
  },

  // ── Italiano ──────────────────────────────────────────────────────────────
  it: {
    name: "Matrimoni Europei",
    cardEyebrow: "Europeo",
    cardBlurb:
      "Châteaux, palazzi, protocollo regionale. Francese, italiano, spagnolo, tedesco.",
    cardMeta: "Scopri",
    intro:
      "Châteaux e palazzi, tenuti secondo il protocollo regionale francese, italiano, spagnolo e tedesco.",
    hero: {
      eyebrow: "Le Tradizioni · N. 08",
      scriptOverline: "Un matrimonio di",
      headline: "*tradizione* europea.",
      deck: "Il continente che le coppie credono di conoscere. In pratica, il protocollo cambia da un paese — e da un comune — al successivo: un château nella Loira, un palazzo sopra il lago di Como, una finca in Andalusia, uno schloss in Baviera, ciascuno con la propria legge e il proprio registro.",
      captionLeft: "Camille & Henri · Valle della Loira",
      captionCenter: "Château all'ora dorata · 2025",
      captionRight: "Tavola VIII",
    },
    factStrip: [
      { label: "Durata del matrimonio", value: "1 – 3 giorni", sub: "Atto civile · cerimonia · banchetto" },
      { label: "Numero di ospiti", value: "60 – 300", sub: "Dall'intimo al grandioso" },
      { label: "Anticipo", value: "12 – 24 mesi", sub: "Le dimore storiche si prenotano presto" },
      { label: "Regioni tenute", value: "Francia · Italia", sub: "Spagna · Germania" },
      { label: "Luoghi", value: "Château · palazzo", sub: "Finca · schloss" },
      { label: "Lingue", value: "FR · IT · ES · DE", sub: "Programmi trilingui" },
    ],
    overview: {
      sideEyebrow: "La tradizione",
      sideNote:
        "L'Europa non è un solo matrimonio. Sono quattro sistemi giuridici, quattro cucine e quattro registri — tenuti paese per paese, comune per comune.",
      headline: "Un *continente,* quattro protocolli.",
      lede: "Le coppie arrivano pensando che l'Europa sia un solo stile. La realtà è che una mairie francese, un comune italiano, un notario spagnolo e uno Standesamt tedesco chiedono ciascuno cose diverse — e il matrimonio deve rispondere a ognuno con precisione.",
      bodyParagraphs: [
        "Il protocollo regionale differisce all'interno dell'Europa più di quanto quasi ogni coppia si aspetti. La distanza tra un vin d'honneur provenzale e un Polterabend bavarese è maggiore di quella tra continenti — e la gioia di un matrimonio europeo sta nell'onorare esattamente il luogo in cui ci si trova.",
        "Il civile e il religioso restano separati in gran parte del continente, e l'ordine conta. In Francia il matrimonio è legale solo alla mairie; in Italia una cerimonia vincolante può tenersi in comune; in Spagna il notario e la parrocchia hanno ciascuno il proprio ruolo. Tracciamo prima il calendario legale e poi costruiamo la celebrazione attorno a esso.",
        "Non spostiamo un'unica squadra attraverso i confini. Manteniamo collaboratori locali in ogni regione — un maître nella Loira, un celebrante abilitato in Toscana, una famiglia di finca in Andalusia, un referente per lo Standesamt in Baviera — persone che conoscono gli orari di chiusura, i caterer e le usanze del proprio angolo.",
        "I requisiti differiscono per paese e per comune, e cambiano. Trattiamo le pratiche come la spina dorsale del matrimonio: confermate per tempo, per iscritto, con l'anagrafe locale — perché il giorno stesso sia soltanto la celebrazione.",
      ],
      pull: "«La distanza tra un vin d'honneur provenzale e un Polterabend bavarese è maggiore di quella tra continenti.»",
      signatureName: "Grecia",
      signatureRole: "Fondatrice · Tra matrimoni francesi, italiani, spagnoli e tedeschi",
    },
    ceremonyArc: {
      eyebrow: "Struttura della cerimonia",
      headline: "Un *arco* europeo.",
      deck: "Un ordine rappresentativo di un matrimonio francese, italiano, spagnolo o tedesco — con la nota regionale che cambia ogni passo. Ogni paese adatta; il ritmo rimane.",
      steps: [
        { numeral: "I", name: "L'atto civile", sub: "Mairie · comune · Standesamt", when: "Spesso la vigilia", body: "Il passo giuridicamente vincolante, davanti a un ufficiale in municipio. In Francia la mairie è obbligatoria; in Italia il comune può ospitare la cerimonia vincolante; in Germania lo Standesamt. Lo confermiamo con l'anagrafe locale mesi prima." },
        { numeral: "II", name: "Chiesa o simbolica", sub: "Religiosa o con celebrante", when: "Giorno della cerimonia, tarda mattina", body: "Una messa cattolica, un rito ortodosso o una cerimonia simbolica condotta da un celebrante nel parco dello château. È il cuore emotivo della giornata, distinto dall'atto civile." },
        { numeral: "III", name: "Vin d'honneur / aperitivo", sub: "Il brindisi di benvenuto", when: "Giorno della cerimonia, mezzogiorno", body: "Il vin d'honneur francese e l'aperitivo italiano si aprono alla cerchia allargata — i vicini, il paese, la lista estesa. Champagne, vino regionale, stuzzichini in giardino." },
        { numeral: "IV", name: "Cena à la française", sub: "Seduta, a portate, lunga", when: "Sera", body: "Una cena seduta servita à la française o all'italiana — più portate, scandite nelle ore, con i vini della regione. La cena può essere il livello più intimo della giornata." },
        { numeral: "V", name: "Discorsi e torta", sub: "Croquembouche · millefoglie", when: "Tarda serata", body: "I discorsi, poi il rito della torta — una piramide di croquembouche francese, una millefoglie italiana, una tarta spagnola — tagliata e condivisa quando la cena lascia spazio al ballo." },
        { numeral: "VI", name: "Ballo fino a tardi", sub: "Polterabend e usanze", when: "Nella notte", body: "La festa prosegue fino a tardi entro l'orario di chiusura del luogo. I matrimoni tedeschi possono tenere un Polterabend la vigilia e usanze come il taglio del tronco; teniamo i riti locali che la coppia desidera." },
      ],
    },
    designConcepts: {
      eyebrow: "Concetti di allestimento",
      headline: "Château, *a lume di candela.*",
      deck: "Tre direzioni di allestimento che abbiamo costruito più di una volta in tutto il continente. Ognuna si adatta alla dimora, alla regione e alla luce.",
      cards: [
        {
          title: "Château Classique",
          body: "Uno schema francese sobrio e formale: avorio e pietra, lunghe candele, rose da giardino e bosso. Lo château fa il lavoro; l'allestimento si limita a incorniciarlo.",
          palette: ["#f4efe4", "#d8cdb4", "#9aa17e", "#6d6a52", "#33301f"],
          imageKey: "concept-1",
          rows: [
            { label: "Ambientazione", value: "Château della Loira / Provenza" },
            { label: "Fiori", value: "Rosa da giardino · peonia · bosso" },
            { label: "Ideale per", value: "Formale · grandioso · seduto" },
          ],
        },
        {
          title: "Palazzo Candlelight",
          body: "Una serata italiana di pareti affrescate, centinaia di candele, terracotta e oro. Luce calda e bassa; lunghe tavolate sotto le logge sopra il lago.",
          palette: ["#efe2cc", "#cd9b5a", "#8a4a2c", "#5a3322", "#2f2418"],
          imageKey: "concept-2",
          rows: [
            { label: "Ambientazione", value: "Palazzo del lago di Como / Toscana" },
            { label: "Fiori", value: "Ranuncolo · olivo · agrumi" },
            { label: "Ideale per", value: "Serale · romantico · a lume di candela" },
          ],
        },
        {
          title: "Finca Moderna",
          body: "Uno schema andaluso rilassato: calce, olivo, rafia e toni caldi. Lunghi pranzi all'ombra, ballo sotto lampadine spoglie al calar della sera.",
          palette: ["#f1ece1", "#cdb894", "#9a9a72", "#6f5a3e", "#3a3326"],
          imageKey: "concept-3",
          rows: [
            { label: "Ambientazione", value: "Finca andalusa / maiorchina" },
            { label: "Fiori", value: "Olivo · bouganville · erbe" },
            { label: "Ideale per", value: "Rilassato · sole · all'aperto" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocollo culturale",
      headline: "Ciò a cui *teniamo fede.*",
      deck: "Sei principi su cui non scendiamo a compromessi nei matrimoni europei.",
      items: [
        { title: "Il calendario delle pratiche guida tutto", body: "I requisiti del matrimonio civile differiscono per paese e per comune — li tracciamo per primi, per iscritto, con l'anagrafe locale. Ogni altra decisione segue la data legale, mai il contrario." },
        { title: "Le dimore storiche si rispettano alla lettera", body: "Châteaux, palazzi e schlösser comportano orari di chiusura, vincoli di tutela e limiti di carico. Leggiamo il contratto con attenzione e progettiamo al suo interno: non un chiodo in una parete rivestita, non una candela dove è vietata." },
        { title: "Caterer regionali prima di quelli importati", body: "Cuciniamo la regione, non contro di essa. Una cucina toscana per un matrimonio toscano, una tavola provenzale in Provenza. I menù importati di rado superano le mani locali che conoscono il prodotto." },
        { title: "Il benvenuto è per tutti, la cena forse no", body: "Il vin d'honneur e l'aperitivo sono aperti e generosi; la cena seduta è spesso una cerchia più ristretta. Comunichiamo i livelli di ospiti con garbo e in anticipo, perché nessuno resti sorpreso alla porta." },
        { title: "Rumore e fuochi si gestiscono con mesi di anticipo", body: "Le ordinanze comunali sul rumore e i permessi per i fuochi d'artificio variano per comune e si predispongono presto. Non promettiamo mai uno spettacolo di mezzanotte che non abbiamo già autorizzato." },
        { title: "I giardini tutelati si fotografano, mai si occupano per l'allestimento", body: "Molti giardini storici sono tutelati. Li fotografiamo così come sono e allestiamo altrove: la bellezza non giustifica un'impronta dove i vincoli di tutela la vietano." },
      ],
    },
    planning: {
      eyebrow: "Pianificazione su più giorni",
      headline: "Un *matrimonio* europeo, giorno per giorno.",
      deck: "Lo schema che usiamo per un tipico matrimonio da 150 ospiti in château o palazzo. Ogni giorno è flessibile; la struttura rimane.",
      days: [
        {
          numeral: "I",
          dayLabel: "Giorno uno",
          title: "Arrivo & benvenuto",
          body: "Gli ospiti arrivano nell'arco della giornata; lo studio coordina i transfer dall'aeroporto e dalla stazione più vicini. Una cena di benvenuto informale in paese o nella corte dello château — la prima occasione per due famiglie e più lingue di incontrarsi.",
          events: [
            { time: "Nell'arco del giorno", body: "Arrivi · transfer aeroporto e stazione · check-in" },
            { time: "16:00", body: "Atto civile alla mairie / in comune (quando si tiene la vigilia)" },
            { time: "19:30", body: "Cena di benvenuto · trattoria del paese o corte dello château" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Giorno due",
          title: "Il giorno delle nozze",
          body: "La cerimonia a tarda mattina, il vin d'honneur a mezzogiorno, la cena à la française fino a sera, discorsi e torta, poi ballo fino a tardi entro l'orario di chiusura della dimora.",
          events: [
            { time: "10:00", body: "Preparativi degli sposi · suite separate" },
            { time: "11:30", body: "Cerimonia religiosa o simbolica nel parco" },
            { time: "12:30", body: "Vin d'honneur / aperitivo · giardino · la cerchia allargata" },
            { time: "15:00", body: "Fotografie · i giardini tutelati, mai occupati per l'allestimento" },
            { time: "19:30", body: "Cena à la française · lunghe tavolate · vini regionali" },
            { time: "22:00", body: "Discorsi · torta · croquembouche o millefoglie" },
            { time: "23:00", body: "Ballo fino a tardi · entro l'orario di chiusura" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Giorno tre",
          title: "Déjeuner d'addio",
          body: "Un lungo pranzo d'addio nel tardo mattino — all'aperto quando il tempo lo consente, nello spirito un brunch di ripresa. La chiusura non ufficiale del matrimonio prima delle partenze del pomeriggio.",
          events: [
            { time: "12:30", body: "Déjeuner d'addio · terrazza o giardino" },
            { time: "Pomeriggio", body: "Partenze · transfer verso aeroporto e stazione" },
            { time: "Sera", body: "Cena della famiglia stretta (facoltativa)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilità delle destinazioni",
      headline: "Dove i matrimoni europei *riescono meglio.*",
      viewAllLabel: "Vedi tutte le destinazioni →",
      viewAllHref: staticPath("it", "/destinations"),
      cards: [
        { rating: 5, name: "Costiera Amalfitana", sub: "Italia · maggio – ottobre", destinationSlug: "amalfi" },
        { rating: 5, name: "Lago di Como", sub: "Italia · maggio – settembre", destinationSlug: "lake-como" },
        { rating: 5, name: "Toscana", sub: "Italia · maggio – ottobre", destinationSlug: "tuscany" },
        { rating: 5, name: "Parigi & Île-de-France", sub: "Francia · maggio – settembre", destinationSlug: "paris-ile-de-france" },
        { rating: 5, name: "Provenza", sub: "Francia · maggio – ottobre", destinationSlug: "provence" },
        { rating: 5, name: "Costa Azzurra", sub: "Francia · giugno – settembre", destinationSlug: "cote-dazur" },
        { rating: 3, name: "Punta Cana", sub: "Caraibi · tutto l'anno", destinationSlug: "punta-cana" },
        { rating: 3, name: "Gli Hamptons", sub: "Stati Uniti · giugno – settembre", destinationSlug: "the-hamptons" },
      ],
    },
    guest: {
      eyebrow: "Gestione degli ospiti",
      headline: "La cura *pratica* di una lista di ospiti transfrontaliera.",
      deck: "Lo strato logistico che la maggior parte degli organizzatori sottodimensiona. Iniziamo con un anno di anticipo.",
      cells: [
        { title: "Viaggio in più paesi", body: "Ospiti in arrivo da più paesi contemporaneamente. Coordiniamo i transfer dall'aeroporto e dalla stazione più vicini, blocchi di camere su più categorie di hotel e un unico referente per ogni itinerario." },
        { title: "La lingua del giorno", body: "Programmi di cerimonia e segnaletica trilingui per principio — francese, italiano, spagnolo o tedesco accanto all'inglese. Un celebrante bilingue quando le famiglie lo chiedono, perché nessuno segua la giornata da lontano." },
        { title: "Anziani & mobilità", body: "Camere al piano terra, trasporto dedicato e un referente per gli anziani. Le dimore storiche raramente sono prive di gradini; mappiamo in anticipo il percorso accessibile in ogni château e palazzo." },
        { title: "Codici di abbigliamento per luogo", body: "La formalità segue la dimora. Informiamo gli ospiti con precisione — black tie per lo château, lino elegante per la finca — e segnaliamo la ghiaia, i tacchi e il fresco della sera, perché nessuno sia colto alla sprovvista." },
        { title: "Bambini", body: "Assistenza ai bambini multilingue per la cena e il ballo, menù per bambini a ogni tavolo e stanze tranquille per il riposino durante il lungo pomeriggio europeo." },
        { title: "Comunicazioni", body: "Un sito per gli ospiti con il programma, il codice di abbigliamento per evento e le mappe del luogo; un canale di gruppo tre settimane prima; guide stampate in ogni pacchetto di benvenuto, in tutte le lingue di cui le famiglie hanno bisogno." },
      ],
    },
    related: {
      eyebrow: "Continua a leggere",
      headline: "Dal *diario.*",
      articles: [
        { category: "Europeo · Francia", title: "Come funziona davvero un matrimonio in château", body: "Su orari di chiusura, vincoli di tutela e la mairie che viene prima.", imageKey: "culture-related-1" },
        { category: "Europeo · Italia", title: "Palazzo o villa: scegliere sopra il lago di Como", body: "Dove si incontrano le candele, la loggia e il lago.", imageKey: "culture-related-2" },
        { category: "Legale · Europa", title: "Il passo civile, paese per paese", body: "Mairie, comune, notario, Standesamt: che cosa chiede ciascuno.", imageKey: "culture-related-3" },
        { category: "Costo · Europeo", title: "Quanto costa davvero un matrimonio europeo", body: "Budget franchi per il 2026, per paese e numero di ospiti.", imageKey: "culture-related-4" },
        { category: "Allestimento · Spagna", title: "La finca moderna, nel dettaglio", body: "Calce, olivo e il lungo pranzo andaluso.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Provenza", href: destinationPath("it", "provence") },
        { label: "Toscana", href: destinationPath("it", "tuscany") },
        { label: "Lago di Como", href: destinationPath("it", "lake-como") },
        { label: "Costa Azzurra", href: destinationPath("it", "cote-dazur") },
      ],
      sidebarVenues: [
        { label: "Château de la Croix" },
        { label: "Villa Balbiano" },
        { label: "Borgo-tenuta in Toscana" },
        { label: "Finca in Andalusia" },
      ],
      sidebarCultures: [
        { label: "Matrimoni cristiani", href: culturePath("it", "christian-weddings") },
        { label: "Matrimoni latini", href: culturePath("it", "latin-weddings") },
        { label: "Matrimoni interreligiosi", href: culturePath("it", "interfaith-weddings") },
        { label: "Matrimoni ebraici", href: culturePath("it", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Domande, risposte",
      headline: "Domande *frequenti.*",
      items: [
        {
          question: "Gli stranieri possono sposarsi legalmente in Francia o in Italia — come funziona il passo civile?",
          answer: [
            "Sì, e ce ne occupiamo come prassi. I requisiti differiscono per paese e per comune — li tracciamo per primi, per iscritto, con l'anagrafe locale, e poi costruiamo la celebrazione attorno alla data legale confermata.",
            "Molte coppie compiono l'atto civile vincolante a casa o in municipio la vigilia, e tengono lo château o il palazzo per una cerimonia simbolica. Consigliamo la via più lineare in base alle vostre nazionalità e al vostro luogo.",
          ],
        },
        {
          question: "Château o palazzo — in che cosa differiscono nella pratica?",
          answer: [
            "Uno château francese tende al formale: pietra, giardini, una cena seduta à la française, grandezza diurna. Un palazzo italiano tende alla sera — sale affrescate, candele, lunghe tavolate sotto una loggia sopra il lago.",
            "Entrambi comportano orari di chiusura e vincoli di tutela. Leggiamo con attenzione il contratto di ogni dimora e progettiamo al suo interno.",
          ],
        },
        {
          question: "Qual è il costo tipico di un matrimonio europeo nel 2026?",
          answer: [
            "Una forbice utile per il 2026, per un matrimonio da 100 a 200 ospiti in château o palazzo, va da 250.000 a 800.000 USD, tutto compreso, con forti variazioni a seconda di paese, dimora e stagione.",
            "Condividiamo budget trasparenti, voce per voce, già alla prima consulenza, per paese e numero di ospiti.",
          ],
        },
        {
          question: "Lavorate con il catering obbligatorio del luogo?",
          answer: [
            "Spesso sì: molte dimore storiche impongono un catering interno o convenzionato, e lo accogliamo volentieri quando la cucina è solida, perché le mani regionali di solito conoscono meglio il prodotto.",
            "Quando la dimora consente un catering esterno, ne portiamo uno regionale anziché una squadra importata. Verifichiamo la clausola sul catering prima di firmare qualsiasi contratto.",
          ],
        },
        {
          question: "Come gestite il meteo in una dimora storica dove non è ammesso il tendone?",
          answer: [
            "Inseriamo un piano per il maltempo nel contratto fin dall'inizio — una sala interna riservata nella dimora, una loggia coperta o una struttura consentita dove i vincoli di tutela lo permettono.",
            "Dove il tendone è vietato, progettiamo per le sale così come sono, mai contro di esse.",
          ],
        },
        {
          question: "Riuscite a tenere usanze tedesche o austriache — il Polterabend e il resto?",
          answer: [
            "Sì. Un matrimonio tedesco può tenere un Polterabend la vigilia — stoviglie rotte per fortuna, spazzate insieme — e usanze come il taglio del tronco o i giochi della scarpa della sposa.",
            "Teniamo i riti che la coppia e le famiglie desiderano, con un referente per lo Standesamt per l'atto civile e musicisti locali per la serata.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Una conversazione privata —",
      headline: "*Inizia* il tuo\nmatrimonio europeo.",
      body: "Diteci il paese, la dimora, le famiglie e una data di massima. Grecia risponde, di persona, entro cinque giorni lavorativi.",
      ctaLabel: "Richiedi una consulenza privata →",
      ctaHref: staticPath("it", "/contact"),
    },
  },
};
