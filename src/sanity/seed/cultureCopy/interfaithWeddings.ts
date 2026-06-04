/**
 * Interfaith Weddings — Culture № 06 — full detail-page copy, six locales.
 *
 * The studio's stated specialty: two clergy, two languages, one cohesive
 * ceremony arc. The editorial position is RESPECT FOR EACH TRADITION'S
 * INTEGRITY — we hold each tradition whole rather than blending them, and we
 * never claim that any religious authority universally permits co-officiation
 * (it depends on the clergy and the denomination). Card copy (name, eyebrow,
 * blurb, meta, intro) is reused verbatim from `culture.ts`.
 */

import { culturePath, destinationPath, staticPath, type CultureCopy } from "./shared";
import type { Locale } from "../../../i18n/routing";

export const interfaithWeddings: Record<Locale, CultureCopy> = {
  en: {
    name: "Interfaith Weddings",
    cardEyebrow: "Interfaith",
    cardBlurb:
      "Two clergy. Two languages. One cohesive ceremony arc. The studio's specialty.",
    cardMeta: "Discover",
    intro:
      "Two clergy, two languages, one cohesive ceremony arc — the work the studio is asked for most.",
    hero: {
      eyebrow: "The Traditions · No. 06",
      scriptOverline: "Two faiths,",
      headline: "one *vow.*",
      deck: "The studio's stated specialty. Two clergy, two languages, and the architecture to hold both traditions whole — neither shortened, neither subordinate — across a single weekend.",
      captionLeft: "Noa & Arjun · Lake Como",
      captionCenter: "Chuppah and mandap, one lawn · 2025",
      captionRight: "Plate VI",
    },
    factStrip: [
      { label: "Wedding length", value: "2 – 3 days", sub: "Two ceremonies, one arc" },
      { label: "Guest range", value: "120 – 400", sub: "Larger by request" },
      { label: "Lead time", value: "18 – 24 months", sub: "Two clergy book early" },
      { label: "Common pairings", value: "Hindu · Jewish", sub: "Catholic · Muslim · more" },
      { label: "Clergy", value: "Two officiants", sub: "As standard, not exception" },
      { label: "Languages", value: "EN + 1", sub: "Hebrew · Hindi · Arabic · Latin" },
    ],
    overview: {
      sideEyebrow: "The specialty",
      sideNote:
        "Forty interfaith weddings. A working register of how two traditions are held in one weekend without either being diminished.",
      headline: "Two faiths,\ntwo clergy,\none *weekend.*",
      lede: "An interfaith wedding is not a compromise. It is two complete ceremonies, each held to the full weight of its tradition, arranged so that no guest feels their faith was treated as the guest at someone else's celebration.",
      bodyParagraphs: [
        "We have planned forty interfaith weddings across the pairings we are asked for most — Hindu and Christian, Jewish and Catholic, Muslim and Christian, and the quieter combinations within a single family's history. The constant is two clergy who agree, in advance, to share a weekend without sharing an altar carelessly.",
        "Our position is the opposite of fusion. We do not invent a hybrid rite. We do not ask a rabbi and a pandit to co-author a new liturgy neither tradition recognises. We hold the pheras whole and we hold the chuppah whole — and we build the architecture, the timing, and the language so the two read as one story rather than two halves.",
        "Whether co-officiation is even possible is the first question, not an assumption. Some clergy will stand together; many will not, and many denominations forbid it. We map what each officiant's tradition permits before we map the schedule, and we are honest with couples when the answer is two ceremonies held separately rather than side by side.",
        "The method, after forty: brief each family privately first, let each clergy meet the other before they meet the run sheet, and design one shared moment the couple builds together — a reading, a blessing, a procession — that belongs to neither tradition and offends neither. The traditions stay whole. The marriage is the bridge.",
      ],
      pull: '"We do not blend two ceremonies into one. We hold each whole, and let the marriage be the bridge between them."',
      signatureName: "Grecia",
      signatureRole: "Founder · After forty interfaith weddings",
    },
    ceremonyArc: {
      eyebrow: "The method",
      headline: "The two-clergy *arc.*",
      deck: "Our working method for an interfaith weekend — the sequence we hold whatever the pairing. The order of the two ceremonies is always the couple's decision.",
      steps: [
        { numeral: "I", name: "The two-clergy consultation", sub: "Both officiants, one table", when: "12 – 9 months out", body: "We bring both clergy together early to establish what each tradition permits, what each requires, and where the lines are. This conversation decides everything that follows." },
        { numeral: "II", name: "Mapping the two rituals", sub: "Each tradition, held whole", when: "9 – 6 months out", body: "We lay each ceremony out in full — nothing abbreviated to make room for the other — then design the timing and the room so both can be honoured completely." },
        { numeral: "III", name: "The first ceremony", sub: "The couple's chosen order", when: "Ceremony day", body: "The first tradition is held in full, led by its own clergy, in its own language, with its own sacred objects. Guests receive a guide so the unfamiliar feels welcoming, not opaque." },
        { numeral: "IV", name: "The shared moment", sub: "Built by the couple", when: "Between the ceremonies", body: "One jointly designed element — a reading, a blessing, a procession from one ceremony to the next — that the couple authors together. It belongs to neither tradition and asks nothing of either clergy." },
        { numeral: "V", name: "The second ceremony", sub: "The second tradition, whole", when: "Ceremony day", body: "The second tradition is held with the same completeness as the first, led by its own officiant. Neither ceremony is the headline; neither is the opening act." },
        { numeral: "VI", name: "One reception", sub: "Two families, one table", when: "Evening", body: "A single celebration that carries both cultures forward — two cuisines, two kinds of music, one room. The point at which two families become, visibly, one." },
      ],
    },
    designConcepts: {
      eyebrow: "Design concepts",
      headline: "Holding *both.*",
      deck: "Three directions we have built more than once for interfaith weekends. Each keeps both traditions legible without forcing them to merge.",
      cards: [
        {
          title: "Two Canopies",
          body: "A chuppah and a mandap on one lawn, set apart and equal — each built to its own tradition, neither dressed to imitate the other. The couple walks between them.",
          palette: ["#f5f0e6", "#e8d6a0", "#c89d4e", "#7a6a3a", "#3a2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Structure", value: "Twin canopies, set apart" },
            { label: "Florals", value: "Distinct per tradition" },
            { label: "Best for", value: "Hindu + Jewish · garden estate" },
          ],
        },
        {
          title: "Neutral Ground",
          body: "A single restrained setting — ivory, stone, candlelight — that belongs to no one tradition and flatters both. The detail comes from the ceremonies, not the décor.",
          palette: ["#ebe3d3", "#d6cdb8", "#a7a78b", "#8a7d5a", "#2f3527"],
          imageKey: "concept-2",
          rows: [
            { label: "Structure", value: "One altar, reconfigured" },
            { label: "Florals", value: "Neutral, tradition-agnostic" },
            { label: "Best for", value: "Catholic + Muslim · chapel or villa" },
          ],
        },
        {
          title: "The Shared Table",
          body: "The reception as the meeting point — two cuisines plated side by side, two musical traditions across one evening, seating that braids the families rather than dividing them.",
          palette: ["#f3ead7", "#c9a24e", "#7a3814", "#4a523d", "#2a2018"],
          imageKey: "concept-3",
          rows: [
            { label: "Structure", value: "Long-table, braided seating" },
            { label: "Florals", value: "Both palettes, one runner" },
            { label: "Best for", value: "Any pairing · reception-forward" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Cultural protocol",
      headline: "What we *hold to.*",
      deck: "Six principles we do not compromise on. They are what allow two traditions to share a weekend without either feeling reduced.",
      items: [
        { title: "Neither tradition is abbreviated", body: "We never shorten one ceremony to make room for the other. If both cannot be held in full, we add a day rather than cut a rite. The whole point is that neither family watches their tradition treated as the lesser." },
        { title: "Clergy meet each other first", body: "The two officiants speak before either of them sees the schedule. What each tradition permits, requires, and forbids is established between them — not assumed by us, and not discovered on the day." },
        { title: "Families are briefed privately, separately", body: "Each family tells us, in confidence and apart, where their comfort and their lines are. Concerns are heard before they become tensions, and never relayed across the aisle without consent." },
        { title: "Sacred objects do not share a stage casually", body: "A Torah, a sacred fire, a cross, a Qur'an — these are not props arranged for symmetry. Each is handled as its own tradition requires, and never combined for the sake of a photograph." },
        { title: "The order of ceremonies is the couple's decision", body: "Which tradition goes first is theirs to choose — and once chosen, held firmly. We do not relitigate it under family pressure. Neither order implies precedence; both ceremonies are complete." },
        { title: "Guests receive a guide to both traditions", body: "Every guest is given context for the faith that is not their own — what they will see, what it means, when to stand, what is invitation and what is observance. No one watches half the weekend as an outsider." },
      ],
    },
    planning: {
      eyebrow: "Multi-day planning",
      headline: "The interfaith *weekend,* hour by hour.",
      deck: "The blueprint we use for a typical two-ceremony interfaith weekend. Often two ceremonies across two days, joined by one reception.",
      days: [
        {
          numeral: "I",
          dayLabel: "Day One",
          title: "Welcome & gathering",
          body: "Guests arrive and the two families meet — for many, this is the first time. A relaxed welcome sets the tone: both cultures present, neither performing. Any tradition-specific pre-wedding rite is held this evening.",
          events: [
            { time: "Afternoon", body: "Guest arrivals · transfers · hotel check-in" },
            { time: "17:00", body: "Welcome reception · both families · introductions" },
            { time: "19:00", body: "Pre-wedding rite (mehndi, henna, or rehearsal) as the pairing calls for" },
            { time: "21:00", body: "Informal dinner · two cuisines · mixed seating" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Day Two",
          title: "The two ceremonies",
          body: "Both ceremonies, each held whole, in the couple's chosen order, joined by the shared moment between them. One reception in the evening carries both cultures into the marriage.",
          events: [
            { time: "10:30", body: "First ceremony · own clergy · own language · own rites" },
            { time: "12:30", body: "The shared moment · couple-authored · between the ceremonies" },
            { time: "13:00", body: "Second ceremony · second clergy · held in full" },
            { time: "15:00", body: "Celebration lunch · both cuisines" },
            { time: "19:30", body: "Reception · two musical traditions · braided seating · first dance" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Day Three",
          title: "Farewell",
          body: "A morning-after gathering hosted by the couple — unhurried, both families together, the formality set down. The unofficial close of the weekend, with goodbyes given time.",
          events: [
            { time: "11:00", body: "Farewell brunch · garden or terrace" },
            { time: "Afternoon", body: "Departures · airport transfers" },
            { time: "Evening", body: "Close-family dinner (optional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Destination compatibility",
      headline: "Where interfaith weddings *work best.*",
      viewAllLabel: "View all destinations →",
      viewAllHref: staticPath("en", "/destinations"),
      cards: [
        { rating: 5, name: "Lake Como", sub: "Italy · May – October", imageKey: "compat-1", destinationHref: destinationPath("en", "lake-como") },
        { rating: 5, name: "Tuscany", sub: "Italy · May – October", imageKey: "compat-2", destinationHref: destinationPath("en", "tuscany") },
        { rating: 5, name: "Provence", sub: "France · June – September", imageKey: "compat-3", destinationHref: destinationPath("en", "provence") },
        { rating: 4, name: "Amalfi Coast", sub: "Italy · May – October", imageKey: "compat-4", destinationHref: destinationPath("en", "amalfi") },
        { rating: 4, name: "Paris & Île-de-France", sub: "France · April – October", imageKey: "compat-5", destinationHref: destinationPath("en", "paris-ile-de-france") },
        { rating: 4, name: "Punta Cana", sub: "Caribbean · year-round", imageKey: "compat-6", destinationHref: destinationPath("en", "punta-cana") },
        { rating: 4, name: "The Hamptons", sub: "United States · June – September", imageKey: "compat-7", destinationHref: destinationPath("en", "the-hamptons") },
        { rating: 3, name: "Mustique", sub: "Caribbean · November – April", imageKey: "compat-8", destinationHref: destinationPath("en", "mustique") },
      ],
    },
    guest: {
      eyebrow: "Guest management",
      headline: "The *practical* care of two communities.",
      deck: "The interfaith logistics most planners under-resource. We start with the guests who will be strangers to half the weekend.",
      cells: [
        { title: "Dual dietary protocol", body: "Kosher and halal coordinated within a single kitchen plan — separate preparation, certified sourcing, no cross-contact — alongside vegetarian, Jain, vegan and allergen-free menus. One catering brief that honours both families' laws." },
        { title: "Guides to both traditions", body: "Every guest receives context for the faith that is not their own: what they will see, what it means, when to stand, what is participation and what is witness. Printed in the welcome pack and on the wedding site." },
        { title: "Seating across families", body: "We braid the two families rather than seating them apart. Place settings designed so neither side spends the reception among only its own — the room itself does the work of joining." },
        { title: "Elders & sensitivities", body: "The relatives most attached to tradition are briefed first and seated with care. An elders' liaison from the studio manages comfort, mobility, and any quiet concern before it reaches the couple." },
        { title: "Travel & accommodations", body: "Group room blocks across tiers, transfers coordinated across days of arrivals, welcome packages with the schedule, dress code per event, and a guide to both ceremonies in every room." },
        { title: "Communications", body: "One WhatsApp group three weeks ahead, a wedding website carrying both ceremonies' context, and a studio team on hand through the weekend to answer — in either tradition — any question a guest is too polite to ask." },
      ],
    },
    related: {
      eyebrow: "Continue reading",
      headline: "From the *journal.*",
      articles: [
        { category: "Interfaith · Method", title: "How to Plan an Interfaith Wedding Without Diminishing Either Faith", body: "On holding two traditions whole — and why fusion is the wrong instinct.", imageKey: "culture-related-1" },
        { category: "Interfaith · Clergy", title: "Finding Two Clergy Who Will Share a Weekend", body: "The first and hardest question — and how denomination shapes the answer.", imageKey: "culture-related-2" },
        { category: "Hindu + Jewish", title: "The Pheras Beside the Chuppah", body: "A field note on the pairing we are asked for most.", imageKey: "culture-related-3" },
        { category: "Design · Interfaith", title: "Two Canopies, One Lawn", body: "Designing a setting that holds both traditions without forcing them to merge.", imageKey: "culture-related-4" },
        { category: "Cost · Interfaith", title: "What an Interfaith Destination Wedding Actually Costs", body: "Frank 2026 budgets for two-ceremony weekends.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Lake Como", href: destinationPath("en", "lake-como") },
        { label: "Tuscany", href: destinationPath("en", "tuscany") },
        { label: "Provence", href: destinationPath("en", "provence") },
        { label: "Amalfi Coast", href: destinationPath("en", "amalfi") },
      ],
      sidebarVenues: [
        { label: "Villa Balbiano" },
        { label: "Borgo Santo Pietro" },
        { label: "Château de Tourreau" },
        { label: "Villa Cimbrone" },
      ],
      sidebarCultures: [
        { label: "Indian weddings", href: culturePath("en", "indian-weddings") },
        { label: "Jewish weddings", href: culturePath("en", "jewish-weddings") },
        { label: "Arab weddings", href: culturePath("en", "arab-weddings") },
        { label: "Christian weddings", href: culturePath("en", "christian-weddings") },
      ],
    },
    faq: {
      eyebrow: "Questions, answered",
      headline: "Frequently *asked.*",
      items: [
        {
          question: "How do you find clergy willing to co-officiate?",
          answer: [
            "It is the first question we ask, not the last. Some officiants will stand together; many will not, and a number of denominations forbid co-officiation outright. We never assume it is possible.",
            "We hold a clergy-to-clergy consultation early — sometimes a year out — to establish what each tradition permits. When co-officiation is not available, the answer is two ceremonies held separately but with equal care. We are honest about which it will be before any planning begins.",
          ],
        },
        {
          question: "One day or two?",
          answer: [
            "Most interfaith weekends are two to three days, with the two ceremonies on one day where the clergy and the rites allow it, or across two days where they do not.",
            "The deciding factor is never our convenience — it is whether both ceremonies can be held in full. If they cannot share a day without one being rushed, we add a day rather than abbreviate a rite.",
          ],
        },
        {
          question: "What if one family is uneasy about the other tradition?",
          answer: [
            "This is common, and we plan for it. Each family is briefed privately and separately first, so concerns are heard before they become tensions.",
            "The guide to both traditions does much of the work: when a relative understands what they are about to witness, unease usually gives way to curiosity. The shared moment the couple builds together is often where the two families first feel like one.",
          ],
        },
        {
          question: "How does a Hindu–Jewish wedding work specifically?",
          answer: [
            "It is the pairing we are asked for most. In the usual shape, the pheras and the chuppah are each held whole — a pandit leading the seven steps around the sacred fire, a rabbi (where the rabbi will officiate an interfaith wedding) leading the chuppah, ketubah and sheva brachot.",
            "The order is the couple's choice. We design the timing, the two canopies, and the dual-dietary kitchen plan so kosher and the vegetarian-forward Hindu menu both sit comfortably in one weekend.",
          ],
        },
        {
          question: "What is the typical cost in 2026?",
          answer: [
            "A useful 2026 range for a 150–300 guest two-ceremony interfaith weekend is USD $250,000 – $900,000, all-in. Two clergy, two sets of rites, and dual-dietary catering carry real cost.",
            "We share full transparent budgets in the first consultation, with line-item ranges by guest count and by pairing.",
          ],
        },
        {
          question: "Do you blend the two ceremonies into one?",
          answer: [
            "No. We hold each tradition whole. We do not invent a hybrid rite or ask two clergy to co-author a liturgy neither tradition recognises.",
            "What we design is one shared moment the couple builds themselves — a reading, a blessing, a procession — that belongs to neither faith and asks nothing of either clergy. The ceremonies stay complete; the marriage is the bridge.",
          ],
        },
        {
          question: "What about guests who have never attended either tradition?",
          answer: [
            "Every guest receives a guide to both traditions three weeks ahead: what they will see, what it means, when to stand, what is invitation and what is observance. The studio team is present throughout to answer in person. No one watches half the weekend as an outsider.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "A private conversation —",
      headline: "*Begin* your\ninterfaith wedding.",
      body: "Tell us the two traditions, the two families, whether your clergy are found, and a rough date. Grecia writes back, personally, within five working days.",
      ctaLabel: "Request a private consultation →",
      ctaHref: staticPath("en", "/contact"),
    },
  },

  es: {
    name: "Bodas Interreligiosas",
    cardEyebrow: "Interreligiosa",
    cardBlurb:
      "Dos oficiantes. Dos idiomas. Un único arco ceremonial cohesivo. La especialidad del atelier.",
    cardMeta: "Descubrir",
    intro:
      "Dos oficiantes, dos idiomas, un único arco ceremonial cohesivo: el trabajo que más se nos pide.",
    hero: {
      eyebrow: "Las Tradiciones · N.º 06",
      scriptOverline: "Dos fes,",
      headline: "un *voto.*",
      deck: "La especialidad declarada del atelier. Dos oficiantes, dos idiomas y la arquitectura para sostener ambas tradiciones enteras —ninguna acortada, ninguna subordinada— a lo largo de un solo fin de semana.",
      captionLeft: "Noa y Arjun · Lago de Como",
      captionCenter: "Chupá y mandap, un mismo jardín · 2025",
      captionRight: "Lámina VI",
    },
    factStrip: [
      { label: "Duración de la boda", value: "2 – 3 días", sub: "Dos ceremonias, un arco" },
      { label: "Número de invitados", value: "120 – 400", sub: "Más, bajo petición" },
      { label: "Antelación", value: "18 – 24 meses", sub: "Dos oficiantes reservan pronto" },
      { label: "Combinaciones comunes", value: "Hindú · Judía", sub: "Católica · Musulmana · más" },
      { label: "Oficiantes", value: "Dos oficiantes", sub: "Como norma, no excepción" },
      { label: "Idiomas", value: "ES + 1", sub: "Hebreo · Hindi · Árabe · Latín" },
    ],
    overview: {
      sideEyebrow: "La especialidad",
      sideNote:
        "Cuarenta bodas interreligiosas. Un registro de trabajo de cómo se sostienen dos tradiciones en un fin de semana sin que ninguna quede disminuida.",
      headline: "Dos fes,\ndos oficiantes,\nun *fin de semana.*",
      lede: "Una boda interreligiosa no es un acuerdo intermedio. Son dos ceremonias completas, cada una sostenida con todo el peso de su tradición, dispuestas para que ningún invitado sienta que su fe fue tratada como invitada en la celebración ajena.",
      bodyParagraphs: [
        "Hemos planeado cuarenta bodas interreligiosas entre las combinaciones que más se nos piden: hindú y cristiana, judía y católica, musulmana y cristiana, y las uniones más discretas dentro de la historia de una sola familia. La constante son dos oficiantes que acuerdan, de antemano, compartir un fin de semana sin compartir un altar a la ligera.",
        "Nuestra postura es lo contrario de la fusión. No inventamos un rito híbrido. No pedimos a un rabino y a un pandit que coescriban una liturgia nueva que ninguna tradición reconoce. Sostenemos los pheras enteros y sostenemos la chupá entera, y construimos la arquitectura, los tiempos y el lenguaje para que ambas se lean como una sola historia y no como dos mitades.",
        "Si la co-oficiación es siquiera posible es la primera pregunta, no una suposición. Algunos oficiantes estarán juntos; muchos no lo harán, y muchas confesiones lo prohíben. Trazamos lo que la tradición de cada oficiante permite antes de trazar el horario, y somos sinceros con la pareja cuando la respuesta son dos ceremonias separadas en lugar de una junto a la otra.",
        "El método, tras cuarenta: informar primero a cada familia en privado, dejar que cada oficiante conozca al otro antes de conocer el guion, y diseñar un momento compartido que la pareja construye junta —una lectura, una bendición, una procesión— que no pertenece a ninguna tradición ni ofende a ninguna. Las tradiciones quedan enteras. El matrimonio es el puente.",
      ],
      pull: '"No fundimos dos ceremonias en una. Sostenemos cada una entera y dejamos que el matrimonio sea el puente entre ambas."',
      signatureName: "Grecia",
      signatureRole: "Fundadora · Tras cuarenta bodas interreligiosas",
    },
    ceremonyArc: {
      eyebrow: "El método",
      headline: "El arco de los *dos oficiantes.*",
      deck: "Nuestro método de trabajo para un fin de semana interreligioso: la secuencia que sostenemos sea cual sea la combinación. El orden de las dos ceremonias es siempre decisión de la pareja.",
      steps: [
        { numeral: "I", name: "La consulta de los dos oficiantes", sub: "Ambos oficiantes, una mesa", when: "12 – 9 meses antes", body: "Reunimos pronto a ambos oficiantes para establecer qué permite cada tradición, qué exige cada una y dónde están los límites. Esta conversación decide todo lo que sigue." },
        { numeral: "II", name: "Trazar los dos rituales", sub: "Cada tradición, entera", when: "9 – 6 meses antes", body: "Desplegamos cada ceremonia por completo —nada acortado para dejar sitio a la otra— y luego diseñamos los tiempos y el espacio para que ambas puedan honrarse íntegramente." },
        { numeral: "III", name: "La primera ceremonia", sub: "El orden elegido por la pareja", when: "Día de la ceremonia", body: "La primera tradición se sostiene entera, dirigida por su propio oficiante, en su propio idioma, con sus propios objetos sagrados. Los invitados reciben una guía para que lo desconocido resulte acogedor, no opaco." },
        { numeral: "IV", name: "El momento compartido", sub: "Construido por la pareja", when: "Entre las ceremonias", body: "Un elemento diseñado en común —una lectura, una bendición, una procesión de una ceremonia a la otra— que la pareja crea junta. No pertenece a ninguna tradición ni exige nada de ninguno de los oficiantes." },
        { numeral: "V", name: "La segunda ceremonia", sub: "La segunda tradición, entera", when: "Día de la ceremonia", body: "La segunda tradición se sostiene con la misma plenitud que la primera, dirigida por su propio oficiante. Ninguna ceremonia es el plato fuerte; ninguna es el telonero." },
        { numeral: "VI", name: "Una recepción", sub: "Dos familias, una mesa", when: "Noche", body: "Una sola celebración que lleva adelante ambas culturas: dos cocinas, dos clases de música, una misma sala. El punto en que dos familias se vuelven, visiblemente, una." },
      ],
    },
    designConcepts: {
      eyebrow: "Conceptos de diseño",
      headline: "Sostener *ambas.*",
      deck: "Tres direcciones que hemos construido más de una vez para fines de semana interreligiosos. Cada una mantiene legibles ambas tradiciones sin forzar su fusión.",
      cards: [
        {
          title: "Dos Doseles",
          body: "Una chupá y un mandap en un mismo jardín, separados e iguales, cada uno construido según su tradición, ninguno disfrazado para imitar al otro. La pareja camina entre ambos.",
          palette: ["#f5f0e6", "#e8d6a0", "#c89d4e", "#7a6a3a", "#3a2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Estructura", value: "Doseles gemelos, separados" },
            { label: "Flores", value: "Distintas por tradición" },
            { label: "Ideal para", value: "Hindú + Judía · finca con jardín" },
          ],
        },
        {
          title: "Terreno Neutral",
          body: "Un único escenario contenido —marfil, piedra, luz de velas— que no pertenece a ninguna tradición y favorece a ambas. El detalle nace de las ceremonias, no del decorado.",
          palette: ["#ebe3d3", "#d6cdb8", "#a7a78b", "#8a7d5a", "#2f3527"],
          imageKey: "concept-2",
          rows: [
            { label: "Estructura", value: "Un altar, reconfigurado" },
            { label: "Flores", value: "Neutras, sin tradición fija" },
            { label: "Ideal para", value: "Católica + Musulmana · capilla o villa" },
          ],
        },
        {
          title: "La Mesa Compartida",
          body: "La recepción como punto de encuentro: dos cocinas servidas lado a lado, dos tradiciones musicales en una misma noche, una disposición que entrelaza a las familias en vez de dividirlas.",
          palette: ["#f3ead7", "#c9a24e", "#7a3814", "#4a523d", "#2a2018"],
          imageKey: "concept-3",
          rows: [
            { label: "Estructura", value: "Mesa larga, asientos entrelazados" },
            { label: "Flores", value: "Ambas paletas, un camino" },
            { label: "Ideal para", value: "Cualquier combinación · centrada en la recepción" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocolo cultural",
      headline: "A lo que *nos atenemos.*",
      deck: "Seis principios que no negociamos. Son lo que permite que dos tradiciones compartan un fin de semana sin que ninguna se sienta reducida.",
      items: [
        { title: "Ninguna tradición se acorta", body: "Nunca acortamos una ceremonia para dejar sitio a la otra. Si ambas no caben enteras, añadimos un día antes que recortar un rito. De eso se trata: que ninguna familia vea su tradición tratada como la menor." },
        { title: "Los oficiantes se conocen primero", body: "Los dos oficiantes hablan antes de que ninguno vea el horario. Lo que cada tradición permite, exige y prohíbe se establece entre ellos, no lo suponemos nosotros ni se descubre el día de la boda." },
        { title: "A las familias se las informa en privado y por separado", body: "Cada familia nos dice, en confianza y aparte, dónde están su comodidad y sus límites. Las inquietudes se escuchan antes de volverse tensiones, y nunca se trasladan al otro lado sin consentimiento." },
        { title: "Los objetos sagrados no comparten escenario a la ligera", body: "Una Torá, un fuego sagrado, una cruz, un Corán: no son elementos decorativos dispuestos por simetría. Cada uno se trata como exige su tradición y nunca se combina para una fotografía." },
        { title: "El orden de las ceremonias lo decide la pareja", body: "Qué tradición va primero es decisión suya, y una vez elegida, se mantiene con firmeza. No la revisamos bajo presión familiar. Ningún orden implica precedencia; ambas ceremonias son completas." },
        { title: "Los invitados reciben una guía de ambas tradiciones", body: "A cada invitado se le da contexto sobre la fe que no es la suya: qué verá, qué significa, cuándo ponerse de pie, qué es invitación y qué es observancia. Nadie pasa medio fin de semana como extraño." },
      ],
    },
    planning: {
      eyebrow: "Planificación de varios días",
      headline: "El *fin de semana* interreligioso, hora a hora.",
      deck: "El plano que usamos para un fin de semana interreligioso típico de dos ceremonias. A menudo dos ceremonias en dos días, unidas por una sola recepción.",
      days: [
        {
          numeral: "I",
          dayLabel: "Día Uno",
          title: "Bienvenida y encuentro",
          body: "Llegan los invitados y las dos familias se conocen; para muchos, por primera vez. Una bienvenida relajada marca el tono: ambas culturas presentes, ninguna actuando. Cualquier rito previo propio de una tradición se celebra esta noche.",
          events: [
            { time: "Tarde", body: "Llegada de invitados · traslados · check-in en el hotel" },
            { time: "17:00", body: "Recepción de bienvenida · ambas familias · presentaciones" },
            { time: "19:00", body: "Rito previo (mehndi, henna o ensayo) según lo pida la combinación" },
            { time: "21:00", body: "Cena informal · dos cocinas · asientos mixtos" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Día Dos",
          title: "Las dos ceremonias",
          body: "Ambas ceremonias, cada una sostenida entera, en el orden elegido por la pareja, unidas por el momento compartido entre ellas. Una sola recepción por la noche lleva ambas culturas al matrimonio.",
          events: [
            { time: "10:30", body: "Primera ceremonia · su oficiante · su idioma · sus ritos" },
            { time: "12:30", body: "El momento compartido · creado por la pareja · entre las ceremonias" },
            { time: "13:00", body: "Segunda ceremonia · segundo oficiante · entera" },
            { time: "15:00", body: "Almuerzo de celebración · ambas cocinas" },
            { time: "19:30", body: "Recepción · dos tradiciones musicales · asientos entrelazados · primer baile" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Día Tres",
          title: "Despedida",
          body: "Un encuentro de la mañana siguiente que ofrece la pareja: sin prisa, ambas familias juntas, la formalidad ya depuesta. El cierre extraoficial del fin de semana, con tiempo para las despedidas.",
          events: [
            { time: "11:00", body: "Brunch de despedida · jardín o terraza" },
            { time: "Tarde", body: "Salidas · traslados al aeropuerto" },
            { time: "Noche", body: "Cena de familia cercana (opcional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilidad de destinos",
      headline: "Dónde funcionan mejor las bodas interreligiosas.",
      viewAllLabel: "Ver todos los destinos →",
      viewAllHref: staticPath("es", "/destinations"),
      cards: [
        { rating: 5, name: "Lago de Como", sub: "Italia · mayo – octubre", imageKey: "compat-1", destinationHref: destinationPath("es", "lake-como") },
        { rating: 5, name: "Toscana", sub: "Italia · mayo – octubre", imageKey: "compat-2", destinationHref: destinationPath("es", "tuscany") },
        { rating: 5, name: "Provenza", sub: "Francia · junio – septiembre", imageKey: "compat-3", destinationHref: destinationPath("es", "provence") },
        { rating: 4, name: "Costa de Amalfi", sub: "Italia · mayo – octubre", imageKey: "compat-4", destinationHref: destinationPath("es", "amalfi") },
        { rating: 4, name: "París e Isla de Francia", sub: "Francia · abril – octubre", imageKey: "compat-5", destinationHref: destinationPath("es", "paris-ile-de-france") },
        { rating: 4, name: "Punta Cana", sub: "Caribe · todo el año", imageKey: "compat-6", destinationHref: destinationPath("es", "punta-cana") },
        { rating: 4, name: "Los Hamptons", sub: "Estados Unidos · junio – septiembre", imageKey: "compat-7", destinationHref: destinationPath("es", "the-hamptons") },
        { rating: 3, name: "Mustique", sub: "Caribe · noviembre – abril", imageKey: "compat-8", destinationHref: destinationPath("es", "mustique") },
      ],
    },
    guest: {
      eyebrow: "Gestión de invitados",
      headline: "El *cuidado práctico* de dos comunidades.",
      deck: "La logística interreligiosa que la mayoría de los planificadores infradotan. Empezamos por los invitados que serán extraños a la mitad del fin de semana.",
      cells: [
        { title: "Protocolo dietético doble", body: "Kosher y halal coordinados dentro de un único plan de cocina —preparación separada, suministro certificado, sin contacto cruzado— junto a menús vegetariano, jainista, vegano y sin alérgenos. Un solo encargo de catering que honra las leyes de ambas familias." },
        { title: "Guías de ambas tradiciones", body: "Cada invitado recibe contexto sobre la fe que no es la suya: qué verá, qué significa, cuándo ponerse de pie, qué es participación y qué es presencia. Impreso en el paquete de bienvenida y en la web de la boda." },
        { title: "Asientos entre familias", body: "Entrelazamos a las dos familias en vez de sentarlas aparte. Distribución pensada para que ningún lado pase la recepción solo entre los suyos: la propia sala hace el trabajo de unir." },
        { title: "Mayores y sensibilidades", body: "A los parientes más apegados a la tradición se les informa primero y se les sienta con cuidado. Un enlace de mayores del atelier gestiona comodidad, movilidad y cualquier inquietud discreta antes de que llegue a la pareja." },
        { title: "Viajes y alojamiento", body: "Bloques de habitaciones por categorías, traslados coordinados a lo largo de varios días de llegadas, paquetes de bienvenida con el horario, el código de vestimenta por evento y una guía de ambas ceremonias en cada habitación." },
        { title: "Comunicaciones", body: "Un grupo de WhatsApp tres semanas antes, una web de la boda con el contexto de ambas ceremonias y un equipo del atelier disponible todo el fin de semana para responder —en cualquiera de las dos tradiciones— cualquier pregunta que un invitado sea demasiado cortés para hacer." },
      ],
    },
    related: {
      eyebrow: "Seguir leyendo",
      headline: "Del *diario.*",
      articles: [
        { category: "Interreligiosa · Método", title: "Cómo planear una boda interreligiosa sin disminuir ninguna fe", body: "Sobre sostener dos tradiciones enteras, y por qué la fusión es el instinto equivocado.", imageKey: "culture-related-1" },
        { category: "Interreligiosa · Oficiantes", title: "Encontrar dos oficiantes que compartan un fin de semana", body: "La primera y más difícil pregunta, y cómo la confesión moldea la respuesta.", imageKey: "culture-related-2" },
        { category: "Hindú + Judía", title: "Los pheras junto a la chupá", body: "Una nota de campo sobre la combinación que más se nos pide.", imageKey: "culture-related-3" },
        { category: "Diseño · Interreligiosa", title: "Dos doseles, un jardín", body: "Diseñar un escenario que sostenga ambas tradiciones sin forzar su fusión.", imageKey: "culture-related-4" },
        { category: "Coste · Interreligiosa", title: "Lo que cuesta de verdad una boda interreligiosa en destino", body: "Presupuestos francos de 2026 para fines de semana de dos ceremonias.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Lago de Como", href: destinationPath("es", "lake-como") },
        { label: "Toscana", href: destinationPath("es", "tuscany") },
        { label: "Provenza", href: destinationPath("es", "provence") },
        { label: "Costa de Amalfi", href: destinationPath("es", "amalfi") },
      ],
      sidebarVenues: [
        { label: "Villa Balbiano" },
        { label: "Borgo Santo Pietro" },
        { label: "Château de Tourreau" },
        { label: "Villa Cimbrone" },
      ],
      sidebarCultures: [
        { label: "Bodas indias", href: culturePath("es", "indian-weddings") },
        { label: "Bodas judías", href: culturePath("es", "jewish-weddings") },
        { label: "Bodas árabes", href: culturePath("es", "arab-weddings") },
        { label: "Bodas cristianas", href: culturePath("es", "christian-weddings") },
      ],
    },
    faq: {
      eyebrow: "Preguntas, respondidas",
      headline: "Preguntas *frecuentes.*",
      items: [
        {
          question: "¿Cómo encuentran oficiantes dispuestos a co-oficiar?",
          answer: [
            "Es la primera pregunta que hacemos, no la última. Algunos oficiantes estarán juntos; muchos no lo harán, y varias confesiones prohíben la co-oficiación de plano. Nunca damos por hecho que sea posible.",
            "Celebramos pronto una consulta entre oficiantes —a veces con un año de antelación— para establecer qué permite cada tradición. Cuando la co-oficiación no está disponible, la respuesta son dos ceremonias separadas pero con igual cuidado. Somos sinceros sobre cuál será antes de empezar a planear.",
          ],
        },
        {
          question: "¿Un día o dos?",
          answer: [
            "La mayoría de los fines de semana interreligiosos duran de dos a tres días, con las dos ceremonias en un mismo día cuando los oficiantes y los ritos lo permiten, o en dos días cuando no.",
            "El factor decisivo nunca es nuestra comodidad, sino si ambas ceremonias pueden sostenerse enteras. Si no caben en un día sin que una vaya apresurada, añadimos un día antes que acortar un rito.",
          ],
        },
        {
          question: "¿Y si una familia está incómoda con la otra tradición?",
          answer: [
            "Es habitual, y lo prevemos. A cada familia se la informa primero en privado y por separado, para que las inquietudes se escuchen antes de volverse tensiones.",
            "La guía de ambas tradiciones hace gran parte del trabajo: cuando un pariente entiende lo que va a presenciar, la incomodidad suele dar paso a la curiosidad. El momento compartido que la pareja construye junta es a menudo donde las dos familias se sienten por primera vez como una.",
          ],
        },
        {
          question: "¿Cómo funciona en concreto una boda hindú-judía?",
          answer: [
            "Es la combinación que más se nos pide. En la forma habitual, los pheras y la chupá se sostienen enteros: un pandit dirige los siete pasos alrededor del fuego sagrado y un rabino (cuando el rabino oficia bodas interreligiosas) dirige la chupá, la ketubá y las sheva brajot.",
            "El orden lo elige la pareja. Diseñamos los tiempos, los dos doseles y el plan de cocina de doble dieta para que el kosher y el menú hindú de base vegetariana convivan cómodamente en un mismo fin de semana.",
          ],
        },
        {
          question: "¿Cuál es el coste típico en 2026?",
          answer: [
            "Un rango útil para 2026, en un fin de semana interreligioso de dos ceremonias con 150-300 invitados, es de USD 250.000 – 900.000, todo incluido. Dos oficiantes, dos conjuntos de ritos y un catering de doble dieta tienen un coste real.",
            "Compartimos presupuestos transparentes y completos en la primera consulta, con rangos por partidas según el número de invitados y la combinación.",
          ],
        },
        {
          question: "¿Funden las dos ceremonias en una?",
          answer: [
            "No. Sostenemos cada tradición entera. No inventamos un rito híbrido ni pedimos a dos oficiantes que coescriban una liturgia que ninguna tradición reconoce.",
            "Lo que diseñamos es un momento compartido que la pareja crea por sí misma —una lectura, una bendición, una procesión— que no pertenece a ninguna fe ni exige nada de ningún oficiante. Las ceremonias quedan completas; el matrimonio es el puente.",
          ],
        },
        {
          question: "¿Y los invitados que nunca han asistido a ninguna de las dos tradiciones?",
          answer: [
            "Cada invitado recibe una guía de ambas tradiciones tres semanas antes: qué verá, qué significa, cuándo ponerse de pie, qué es invitación y qué es observancia. El equipo del atelier está presente para responder en persona. Nadie pasa medio fin de semana como extraño.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Una conversación privada —",
      headline: "*Comience* su\nboda interreligiosa.",
      body: "Cuéntenos las dos tradiciones, las dos familias, si ya tienen oficiantes y una fecha aproximada. Grecia responde, en persona, en cinco días hábiles.",
      ctaLabel: "Solicitar una consulta privada →",
      ctaHref: staticPath("es", "/contact"),
    },
  },

  fr: {
    name: "Mariages Interconfessionnels",
    cardEyebrow: "Interconfessionnel",
    cardBlurb:
      "Deux officiants. Deux langues. Une seule trame cérémonielle cohérente. La spécialité de l'atelier.",
    cardMeta: "Découvrir",
    intro:
      "Deux officiants, deux langues, une seule trame cérémonielle cohérente — le travail qu'on nous demande le plus.",
    hero: {
      eyebrow: "Les Traditions · No 06",
      scriptOverline: "Deux fois,",
      headline: "un *vœu.*",
      deck: "La spécialité affichée de l'atelier. Deux officiants, deux langues et l'architecture pour tenir les deux traditions entières — aucune écourtée, aucune subordonnée — sur un seul week-end.",
      captionLeft: "Noa & Arjun · Lac de Côme",
      captionCenter: "Houppa et mandap, une même pelouse · 2025",
      captionRight: "Planche VI",
    },
    factStrip: [
      { label: "Durée du mariage", value: "2 – 3 jours", sub: "Deux cérémonies, une trame" },
      { label: "Nombre d'invités", value: "120 – 400", sub: "Davantage sur demande" },
      { label: "Délai", value: "18 – 24 mois", sub: "Deux officiants réservent tôt" },
      { label: "Associations courantes", value: "Hindou · Juif", sub: "Catholique · Musulman · plus" },
      { label: "Officiants", value: "Deux officiants", sub: "Par principe, non par exception" },
      { label: "Langues", value: "FR + 1", sub: "Hébreu · Hindi · Arabe · Latin" },
    ],
    overview: {
      sideEyebrow: "La spécialité",
      sideNote:
        "Quarante mariages interconfessionnels. Un registre de travail sur la manière de tenir deux traditions en un week-end sans qu'aucune ne soit amoindrie.",
      headline: "Deux fois,\ndeux officiants,\nun *week-end.*",
      lede: "Un mariage interconfessionnel n'est pas un compromis. Ce sont deux cérémonies complètes, chacune tenue avec tout le poids de sa tradition, agencées pour qu'aucun invité ne sente sa foi traitée en invitée de la fête d'autrui.",
      bodyParagraphs: [
        "Nous avons organisé quarante mariages interconfessionnels parmi les associations qu'on nous demande le plus — hindoue et chrétienne, juive et catholique, musulmane et chrétienne, et les unions plus discrètes au sein de l'histoire d'une seule famille. La constante : deux officiants qui acceptent, à l'avance, de partager un week-end sans partager un autel à la légère.",
        "Notre position est l'inverse de la fusion. Nous n'inventons pas de rite hybride. Nous ne demandons pas à un rabbin et à un pandit de coécrire une liturgie nouvelle qu'aucune tradition ne reconnaît. Nous tenons les pheras entiers et nous tenons la houppa entière — et nous bâtissons l'architecture, le minutage et la langue pour que les deux se lisent comme une seule histoire plutôt que deux moitiés.",
        "Savoir si la co-célébration est seulement possible est la première question, non une supposition. Certains officiants se tiendront ensemble ; beaucoup s'y refuseront, et de nombreuses confessions l'interdisent. Nous cartographions ce que la tradition de chaque officiant permet avant de cartographier le programme, et nous sommes francs avec les couples lorsque la réponse est deux cérémonies tenues séparément plutôt que côte à côte.",
        "La méthode, après quarante : informer d'abord chaque famille en privé, laisser chaque officiant rencontrer l'autre avant de découvrir le déroulé, et concevoir un moment partagé que le couple bâtit ensemble — une lecture, une bénédiction, une procession — qui n'appartient à aucune tradition et n'en offense aucune. Les traditions restent entières. Le mariage est le pont.",
      ],
      pull: '"Nous ne fondons pas deux cérémonies en une. Nous tenons chacune entière et laissons le mariage être le pont entre elles."',
      signatureName: "Grecia",
      signatureRole: "Fondatrice · Après quarante mariages interconfessionnels",
    },
    ceremonyArc: {
      eyebrow: "La méthode",
      headline: "La trame des *deux officiants.*",
      deck: "Notre méthode de travail pour un week-end interconfessionnel — la séquence que nous tenons quelle que soit l'association. L'ordre des deux cérémonies est toujours la décision du couple.",
      steps: [
        { numeral: "I", name: "La consultation des deux officiants", sub: "Les deux officiants, une table", when: "12 – 9 mois avant", body: "Nous réunissons tôt les deux officiants pour établir ce que chaque tradition permet, ce que chacune exige et où sont les limites. Cette conversation décide de tout ce qui suit." },
        { numeral: "II", name: "Cartographier les deux rituels", sub: "Chaque tradition, entière", when: "9 – 6 mois avant", body: "Nous déployons chaque cérémonie en entier — rien d'écourté pour faire place à l'autre — puis nous concevons le minutage et l'espace pour que les deux soient honorées pleinement." },
        { numeral: "III", name: "La première cérémonie", sub: "L'ordre choisi par le couple", when: "Jour de la cérémonie", body: "La première tradition est tenue en entier, menée par son propre officiant, dans sa propre langue, avec ses propres objets sacrés. Les invités reçoivent un guide pour que l'inconnu se fasse accueillant, non opaque." },
        { numeral: "IV", name: "Le moment partagé", sub: "Bâti par le couple", when: "Entre les cérémonies", body: "Un élément conçu en commun — une lecture, une bénédiction, une procession d'une cérémonie à l'autre — que le couple écrit ensemble. Il n'appartient à aucune tradition et ne demande rien à aucun officiant." },
        { numeral: "V", name: "La seconde cérémonie", sub: "La seconde tradition, entière", when: "Jour de la cérémonie", body: "La seconde tradition est tenue avec la même plénitude que la première, menée par son propre officiant. Aucune cérémonie n'est la tête d'affiche ; aucune n'est la première partie." },
        { numeral: "VI", name: "Une réception", sub: "Deux familles, une table", when: "Soirée", body: "Une seule fête qui porte les deux cultures en avant — deux cuisines, deux musiques, une même salle. Le moment où deux familles deviennent, visiblement, une." },
      ],
    },
    designConcepts: {
      eyebrow: "Concepts de design",
      headline: "Tenir *les deux.*",
      deck: "Trois directions que nous avons bâties plus d'une fois pour des week-ends interconfessionnels. Chacune garde les deux traditions lisibles sans les forcer à fusionner.",
      cards: [
        {
          title: "Deux Dais",
          body: "Une houppa et un mandap sur une même pelouse, distincts et égaux — chacun bâti selon sa tradition, aucun déguisé pour imiter l'autre. Le couple marche entre les deux.",
          palette: ["#f5f0e6", "#e8d6a0", "#c89d4e", "#7a6a3a", "#3a2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Structure", value: "Dais jumeaux, distincts" },
            { label: "Fleurs", value: "Propres à chaque tradition" },
            { label: "Idéal pour", value: "Hindou + Juif · domaine de jardin" },
          ],
        },
        {
          title: "Terrain Neutre",
          body: "Un décor unique et sobre — ivoire, pierre, lumière de bougies — qui n'appartient à aucune tradition et flatte les deux. Le détail vient des cérémonies, non du décor.",
          palette: ["#ebe3d3", "#d6cdb8", "#a7a78b", "#8a7d5a", "#2f3527"],
          imageKey: "concept-2",
          rows: [
            { label: "Structure", value: "Un autel, reconfiguré" },
            { label: "Fleurs", value: "Neutres, sans tradition" },
            { label: "Idéal pour", value: "Catholique + Musulman · chapelle ou villa" },
          ],
        },
        {
          title: "La Table Partagée",
          body: "La réception comme point de rencontre — deux cuisines dressées côte à côte, deux traditions musicales sur une même soirée, un plan de table qui entrelace les familles plutôt que de les diviser.",
          palette: ["#f3ead7", "#c9a24e", "#7a3814", "#4a523d", "#2a2018"],
          imageKey: "concept-3",
          rows: [
            { label: "Structure", value: "Table longue, places entrelacées" },
            { label: "Fleurs", value: "Les deux palettes, un chemin" },
            { label: "Idéal pour", value: "Toute association · axée réception" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocole culturel",
      headline: "Ce à quoi *nous tenons.*",
      deck: "Six principes sur lesquels nous ne transigeons pas. Ils permettent à deux traditions de partager un week-end sans qu'aucune ne se sente réduite.",
      items: [
        { title: "Aucune tradition n'est écourtée", body: "Nous n'abrégeons jamais une cérémonie pour faire place à l'autre. Si les deux ne tiennent pas en entier, nous ajoutons un jour plutôt que d'amputer un rite. Tout est là : qu'aucune famille ne voie sa tradition traitée en parente pauvre." },
        { title: "Les officiants se rencontrent d'abord", body: "Les deux officiants se parlent avant que l'un d'eux ne voie le programme. Ce que chaque tradition permet, exige et interdit s'établit entre eux — non supposé par nous, ni découvert le jour même." },
        { title: "Les familles sont informées en privé, séparément", body: "Chaque famille nous dit, en confidence et à part, où se trouvent son confort et ses limites. Les inquiétudes sont entendues avant de devenir des tensions, et jamais transmises à l'autre côté sans accord." },
        { title: "Les objets sacrés ne partagent pas une scène à la légère", body: "Une Torah, un feu sacré, une croix, un Coran : ce ne sont pas des accessoires disposés par souci de symétrie. Chacun est manié comme sa tradition l'exige, et jamais combiné pour une photographie." },
        { title: "L'ordre des cérémonies est la décision du couple", body: "Quelle tradition passe en premier leur revient — et une fois choisi, tenu fermement. Nous ne le remettons pas en cause sous la pression familiale. Aucun ordre n'implique de préséance ; les deux cérémonies sont complètes." },
        { title: "Les invités reçoivent un guide des deux traditions", body: "Chaque invité reçoit le contexte de la foi qui n'est pas la sienne : ce qu'il verra, ce que cela signifie, quand se lever, ce qui relève de l'invitation et ce qui relève de l'observance. Personne ne passe la moitié du week-end en étranger." },
      ],
    },
    planning: {
      eyebrow: "Organisation sur plusieurs jours",
      headline: "Le *week-end* interconfessionnel, heure par heure.",
      deck: "Le canevas que nous utilisons pour un week-end interconfessionnel typique à deux cérémonies. Souvent deux cérémonies sur deux jours, réunies par une seule réception.",
      days: [
        {
          numeral: "I",
          dayLabel: "Jour Un",
          title: "Accueil & rencontre",
          body: "Les invités arrivent et les deux familles se rencontrent — pour beaucoup, c'est la première fois. Un accueil détendu donne le ton : les deux cultures présentes, aucune en représentation. Tout rite pré-nuptial propre à une tradition se tient ce soir-là.",
          events: [
            { time: "Après-midi", body: "Arrivées des invités · transferts · enregistrement à l'hôtel" },
            { time: "17h00", body: "Réception d'accueil · les deux familles · présentations" },
            { time: "19h00", body: "Rite pré-nuptial (mehndi, henné ou répétition) selon l'association" },
            { time: "21h00", body: "Dîner informel · deux cuisines · placement mixte" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Jour Deux",
          title: "Les deux cérémonies",
          body: "Les deux cérémonies, chacune tenue entière, dans l'ordre choisi par le couple, réunies par le moment partagé entre elles. Une seule réception le soir porte les deux cultures dans le mariage.",
          events: [
            { time: "10h30", body: "Première cérémonie · son officiant · sa langue · ses rites" },
            { time: "12h30", body: "Le moment partagé · écrit par le couple · entre les cérémonies" },
            { time: "13h00", body: "Seconde cérémonie · second officiant · tenue en entier" },
            { time: "15h00", body: "Déjeuner de fête · les deux cuisines" },
            { time: "19h30", body: "Réception · deux traditions musicales · placement entrelacé · première danse" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Jour Trois",
          title: "Adieux",
          body: "Un rassemblement du lendemain offert par le couple — sans hâte, les deux familles ensemble, la formalité déposée. La clôture officieuse du week-end, avec le temps qu'il faut pour les au revoir.",
          events: [
            { time: "11h00", body: "Brunch d'adieu · jardin ou terrasse" },
            { time: "Après-midi", body: "Départs · transferts aéroport" },
            { time: "Soirée", body: "Dîner en famille proche (facultatif)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilité des destinations",
      headline: "Où les mariages interconfessionnels *fonctionnent le mieux.*",
      viewAllLabel: "Voir toutes les destinations →",
      viewAllHref: staticPath("fr", "/destinations"),
      cards: [
        { rating: 5, name: "Lac de Côme", sub: "Italie · mai – octobre", imageKey: "compat-1", destinationHref: destinationPath("fr", "lake-como") },
        { rating: 5, name: "Toscane", sub: "Italie · mai – octobre", imageKey: "compat-2", destinationHref: destinationPath("fr", "tuscany") },
        { rating: 5, name: "Provence", sub: "France · juin – septembre", imageKey: "compat-3", destinationHref: destinationPath("fr", "provence") },
        { rating: 4, name: "Côte amalfitaine", sub: "Italie · mai – octobre", imageKey: "compat-4", destinationHref: destinationPath("fr", "amalfi") },
        { rating: 4, name: "Paris & Île-de-France", sub: "France · avril – octobre", imageKey: "compat-5", destinationHref: destinationPath("fr", "paris-ile-de-france") },
        { rating: 4, name: "Punta Cana", sub: "Caraïbes · toute l'année", imageKey: "compat-6", destinationHref: destinationPath("fr", "punta-cana") },
        { rating: 4, name: "Les Hamptons", sub: "États-Unis · juin – septembre", imageKey: "compat-7", destinationHref: destinationPath("fr", "the-hamptons") },
        { rating: 3, name: "Mustique", sub: "Caraïbes · novembre – avril", imageKey: "compat-8", destinationHref: destinationPath("fr", "mustique") },
      ],
    },
    guest: {
      eyebrow: "Gestion des invités",
      headline: "Le *soin pratique* de deux communautés.",
      deck: "La logistique interconfessionnelle que la plupart des organisateurs sous-dotent. Nous commençons par les invités qui seront étrangers à la moitié du week-end.",
      cells: [
        { title: "Protocole alimentaire double", body: "Casher et halal coordonnés dans un seul plan de cuisine — préparation séparée, approvisionnement certifié, sans contact croisé — aux côtés de menus végétariens, jaïns, végétaliens et sans allergènes. Un seul cahier des charges qui honore les lois des deux familles." },
        { title: "Guides des deux traditions", body: "Chaque invité reçoit le contexte de la foi qui n'est pas la sienne : ce qu'il verra, ce que cela signifie, quand se lever, ce qui relève de la participation et ce qui relève du témoignage. Imprimé dans le coffret d'accueil et sur le site du mariage." },
        { title: "Placement entre familles", body: "Nous entrelaçons les deux familles plutôt que de les asseoir à part. Un plan de table pensé pour qu'aucun côté ne passe la réception entre les siens : la salle elle-même fait le travail de réunir." },
        { title: "Aînés & sensibilités", body: "Les proches les plus attachés à la tradition sont informés en premier et placés avec soin. Un référent aînés de l'atelier gère le confort, la mobilité et toute inquiétude discrète avant qu'elle n'atteigne le couple." },
        { title: "Voyage & hébergement", body: "Des blocs de chambres par catégories, des transferts coordonnés sur plusieurs jours d'arrivées, des coffrets d'accueil avec le programme, le code vestimentaire par événement et un guide des deux cérémonies dans chaque chambre." },
        { title: "Communications", body: "Un groupe WhatsApp trois semaines avant, un site de mariage portant le contexte des deux cérémonies et une équipe de l'atelier disponible tout le week-end pour répondre — dans l'une ou l'autre tradition — à toute question qu'un invité serait trop poli pour poser." },
      ],
    },
    related: {
      eyebrow: "Poursuivre la lecture",
      headline: "Du *journal.*",
      articles: [
        { category: "Interconfessionnel · Méthode", title: "Organiser un mariage interconfessionnel sans amoindrir aucune foi", body: "Sur l'art de tenir deux traditions entières — et pourquoi la fusion est le mauvais réflexe.", imageKey: "culture-related-1" },
        { category: "Interconfessionnel · Officiants", title: "Trouver deux officiants qui partageront un week-end", body: "La première et la plus difficile question — et comment la confession façonne la réponse.", imageKey: "culture-related-2" },
        { category: "Hindou + Juif", title: "Les pheras près de la houppa", body: "Une note de terrain sur l'association qu'on nous demande le plus.", imageKey: "culture-related-3" },
        { category: "Design · Interconfessionnel", title: "Deux dais, une pelouse", body: "Concevoir un décor qui tient les deux traditions sans les forcer à fusionner.", imageKey: "culture-related-4" },
        { category: "Coût · Interconfessionnel", title: "Le vrai coût d'un mariage interconfessionnel en destination", body: "Budgets francs 2026 pour les week-ends à deux cérémonies.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Lac de Côme", href: destinationPath("fr", "lake-como") },
        { label: "Toscane", href: destinationPath("fr", "tuscany") },
        { label: "Provence", href: destinationPath("fr", "provence") },
        { label: "Côte amalfitaine", href: destinationPath("fr", "amalfi") },
      ],
      sidebarVenues: [
        { label: "Villa Balbiano" },
        { label: "Borgo Santo Pietro" },
        { label: "Château de Tourreau" },
        { label: "Villa Cimbrone" },
      ],
      sidebarCultures: [
        { label: "Mariages indiens", href: culturePath("fr", "indian-weddings") },
        { label: "Mariages juifs", href: culturePath("fr", "jewish-weddings") },
        { label: "Mariages arabes", href: culturePath("fr", "arab-weddings") },
        { label: "Mariages chrétiens", href: culturePath("fr", "christian-weddings") },
      ],
    },
    faq: {
      eyebrow: "Questions, réponses",
      headline: "Questions *fréquentes.*",
      items: [
        {
          question: "Comment trouvez-vous des officiants prêts à co-célébrer ?",
          answer: [
            "C'est la première question que nous posons, non la dernière. Certains officiants se tiendront ensemble ; beaucoup s'y refuseront, et plusieurs confessions interdisent purement la co-célébration. Nous ne supposons jamais qu'elle est possible.",
            "Nous tenons tôt une consultation entre officiants — parfois un an à l'avance — pour établir ce que chaque tradition permet. Lorsque la co-célébration n'est pas possible, la réponse est deux cérémonies tenues séparément mais avec un soin égal. Nous sommes francs sur ce qu'il en sera avant tout début d'organisation.",
          ],
        },
        {
          question: "Un jour ou deux ?",
          answer: [
            "La plupart des week-ends interconfessionnels durent deux à trois jours, avec les deux cérémonies le même jour quand les officiants et les rites le permettent, ou sur deux jours quand ce n'est pas le cas.",
            "Le facteur décisif n'est jamais notre commodité — c'est de savoir si les deux cérémonies peuvent être tenues en entier. Si elles ne peuvent partager un jour sans que l'une soit précipitée, nous ajoutons un jour plutôt que d'écourter un rite.",
          ],
        },
        {
          question: "Et si une famille est mal à l'aise avec l'autre tradition ?",
          answer: [
            "C'est fréquent, et nous le prévoyons. Chaque famille est informée en privé et séparément d'abord, pour que les inquiétudes soient entendues avant de devenir des tensions.",
            "Le guide des deux traditions fait une grande partie du travail : quand un proche comprend ce qu'il va voir, le malaise cède en général la place à la curiosité. Le moment partagé que le couple bâtit ensemble est souvent l'instant où les deux familles se sentent pour la première fois ne faire qu'une.",
          ],
        },
        {
          question: "Comment se déroule concrètement un mariage hindou-juif ?",
          answer: [
            "C'est l'association qu'on nous demande le plus. Dans sa forme habituelle, les pheras et la houppa sont tenus entiers — un pandit mène les sept pas autour du feu sacré, un rabbin (lorsqu'il célèbre des mariages interconfessionnels) mène la houppa, la ketouba et les sheva brakhot.",
            "L'ordre est le choix du couple. Nous concevons le minutage, les deux dais et le plan de cuisine à double régime pour que le casher et le menu hindou à dominante végétarienne cohabitent aisément sur un même week-end.",
          ],
        },
        {
          question: "Quel est le coût typique en 2026 ?",
          answer: [
            "Une fourchette utile pour 2026, sur un week-end interconfessionnel à deux cérémonies de 150 à 300 invités, est de 250 000 – 900 000 USD, tout compris. Deux officiants, deux ensembles de rites et un traiteur à double régime ont un coût réel.",
            "Nous partageons des budgets transparents et complets dès la première consultation, avec des fourchettes ligne par ligne selon le nombre d'invités et l'association.",
          ],
        },
        {
          question: "Fondez-vous les deux cérémonies en une seule ?",
          answer: [
            "Non. Nous tenons chaque tradition entière. Nous n'inventons pas de rite hybride et ne demandons pas à deux officiants de coécrire une liturgie qu'aucune tradition ne reconnaît.",
            "Ce que nous concevons, c'est un moment partagé que le couple écrit lui-même — une lecture, une bénédiction, une procession — qui n'appartient à aucune foi et ne demande rien à aucun officiant. Les cérémonies restent complètes ; le mariage est le pont.",
          ],
        },
        {
          question: "Et les invités qui n'ont jamais assisté à l'une ou l'autre tradition ?",
          answer: [
            "Chaque invité reçoit un guide des deux traditions trois semaines avant : ce qu'il verra, ce que cela signifie, quand se lever, ce qui relève de l'invitation et ce qui relève de l'observance. L'équipe de l'atelier est présente pour répondre en personne. Personne ne passe la moitié du week-end en étranger.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Une conversation privée —",
      headline: "*Commencez* votre\nmariage interconfessionnel.",
      body: "Dites-nous les deux traditions, les deux familles, si vos officiants sont trouvés et une date approximative. Grecia vous répond, en personne, sous cinq jours ouvrés.",
      ctaLabel: "Demander une consultation privée →",
      ctaHref: staticPath("fr", "/contact"),
    },
  },

  pt: {
    name: "Casamentos Inter-religiosos",
    cardEyebrow: "Inter-religioso",
    cardBlurb:
      "Dois celebrantes. Duas línguas. Um único arco cerimonial coeso. A especialidade do ateliê.",
    cardMeta: "Descobrir",
    intro:
      "Dois celebrantes, duas línguas, um único arco cerimonial coeso — o trabalho que mais nos pedem.",
    hero: {
      eyebrow: "As Tradições · N.º 06",
      scriptOverline: "Duas fés,",
      headline: "um *voto.*",
      deck: "A especialidade declarada do ateliê. Dois celebrantes, duas línguas e a arquitetura para sustentar ambas as tradições inteiras — nenhuma encurtada, nenhuma subordinada — ao longo de um único fim de semana.",
      captionLeft: "Noa e Arjun · Lago de Como",
      captionCenter: "Chupá e mandap, um mesmo relvado · 2025",
      captionRight: "Estampa VI",
    },
    factStrip: [
      { label: "Duração do casamento", value: "2 – 3 dias", sub: "Duas cerimónias, um arco" },
      { label: "Número de convidados", value: "120 – 400", sub: "Mais, a pedido" },
      { label: "Antecedência", value: "18 – 24 meses", sub: "Dois celebrantes reservam cedo" },
      { label: "Combinações comuns", value: "Hindu · Judaica", sub: "Católica · Muçulmana · mais" },
      { label: "Celebrantes", value: "Dois celebrantes", sub: "Por norma, não por exceção" },
      { label: "Línguas", value: "PT + 1", sub: "Hebraico · Híndi · Árabe · Latim" },
    ],
    overview: {
      sideEyebrow: "A especialidade",
      sideNote:
        "Quarenta casamentos inter-religiosos. Um registo de trabalho sobre como sustentar duas tradições num fim de semana sem que nenhuma fique diminuída.",
      headline: "Duas fés,\ndois celebrantes,\num *fim de semana.*",
      lede: "Um casamento inter-religioso não é um meio-termo. São duas cerimónias completas, cada uma sustentada com todo o peso da sua tradição, dispostas para que nenhum convidado sinta a sua fé tratada como hóspede na festa alheia.",
      bodyParagraphs: [
        "Já planeámos quarenta casamentos inter-religiosos entre as combinações que mais nos pedem — hindu e cristã, judaica e católica, muçulmana e cristã, e as uniões mais discretas dentro da história de uma só família. A constante são dois celebrantes que acordam, de antemão, partilhar um fim de semana sem partilhar um altar de ânimo leve.",
        "A nossa posição é o contrário da fusão. Não inventamos um rito híbrido. Não pedimos a um rabino e a um pandit que coescrevam uma liturgia nova que nenhuma tradição reconhece. Sustentamos os pheras inteiros e sustentamos a chupá inteira — e construímos a arquitetura, os tempos e a língua para que ambos se leiam como uma só história em vez de duas metades.",
        "Saber se a co-celebração é sequer possível é a primeira pergunta, não uma suposição. Alguns celebrantes estarão juntos; muitos recusam-se, e muitas confissões proíbem-no. Mapeamos o que a tradição de cada celebrante permite antes de mapear o horário, e somos honestos com os noivos quando a resposta são duas cerimónias realizadas em separado, e não lado a lado.",
        "O método, após quarenta: informar primeiro cada família em privado, deixar cada celebrante conhecer o outro antes de conhecer o alinhamento, e desenhar um momento partilhado que o casal constrói em conjunto — uma leitura, uma bênção, um cortejo — que não pertence a nenhuma tradição nem ofende nenhuma. As tradições ficam inteiras. O casamento é a ponte.",
      ],
      pull: '"Não fundimos duas cerimónias numa só. Sustentamos cada uma inteira e deixamos que o casamento seja a ponte entre elas."',
      signatureName: "Grecia",
      signatureRole: "Fundadora · Após quarenta casamentos inter-religiosos",
    },
    ceremonyArc: {
      eyebrow: "O método",
      headline: "O arco dos *dois celebrantes.*",
      deck: "O nosso método de trabalho para um fim de semana inter-religioso — a sequência que sustentamos seja qual for a combinação. A ordem das duas cerimónias é sempre decisão do casal.",
      steps: [
        { numeral: "I", name: "A consulta dos dois celebrantes", sub: "Ambos os celebrantes, uma mesa", when: "12 – 9 meses antes", body: "Reunimos cedo os dois celebrantes para estabelecer o que cada tradição permite, o que cada uma exige e onde estão os limites. Esta conversa decide tudo o que se segue." },
        { numeral: "II", name: "Mapear os dois rituais", sub: "Cada tradição, inteira", when: "9 – 6 meses antes", body: "Dispomos cada cerimónia por inteiro — nada encurtado para dar lugar à outra — e depois desenhamos os tempos e o espaço para que ambas possam ser honradas por completo." },
        { numeral: "III", name: "A primeira cerimónia", sub: "A ordem escolhida pelo casal", when: "Dia da cerimónia", body: "A primeira tradição é sustentada por inteiro, conduzida pelo seu próprio celebrante, na sua própria língua, com os seus próprios objetos sagrados. Os convidados recebem um guia para que o desconhecido seja acolhedor, não opaco." },
        { numeral: "IV", name: "O momento partilhado", sub: "Construído pelo casal", when: "Entre as cerimónias", body: "Um elemento desenhado em conjunto — uma leitura, uma bênção, um cortejo de uma cerimónia para a outra — que o casal cria junto. Não pertence a nenhuma tradição nem exige nada de nenhum celebrante." },
        { numeral: "V", name: "A segunda cerimónia", sub: "A segunda tradição, inteira", when: "Dia da cerimónia", body: "A segunda tradição é sustentada com a mesma plenitude da primeira, conduzida pelo seu próprio celebrante. Nenhuma cerimónia é o destaque; nenhuma é a abertura." },
        { numeral: "VI", name: "Uma receção", sub: "Duas famílias, uma mesa", when: "Noite", body: "Uma só celebração que leva ambas as culturas em frente — duas cozinhas, dois tipos de música, uma mesma sala. O ponto em que duas famílias se tornam, visivelmente, uma." },
      ],
    },
    designConcepts: {
      eyebrow: "Conceitos de design",
      headline: "Sustentar *ambas.*",
      deck: "Três direções que construímos mais do que uma vez para fins de semana inter-religiosos. Cada uma mantém ambas as tradições legíveis sem forçar a sua fusão.",
      cards: [
        {
          title: "Dois Dosséis",
          body: "Uma chupá e um mandap num mesmo relvado, separados e iguais — cada um construído segundo a sua tradição, nenhum disfarçado para imitar o outro. O casal caminha entre ambos.",
          palette: ["#f5f0e6", "#e8d6a0", "#c89d4e", "#7a6a3a", "#3a2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Estrutura", value: "Dosséis gémeos, separados" },
            { label: "Flores", value: "Distintas por tradição" },
            { label: "Ideal para", value: "Hindu + Judaica · quinta com jardim" },
          ],
        },
        {
          title: "Terreno Neutro",
          body: "Um único cenário contido — marfim, pedra, luz de velas — que não pertence a nenhuma tradição e favorece ambas. O detalhe vem das cerimónias, não da decoração.",
          palette: ["#ebe3d3", "#d6cdb8", "#a7a78b", "#8a7d5a", "#2f3527"],
          imageKey: "concept-2",
          rows: [
            { label: "Estrutura", value: "Um altar, reconfigurado" },
            { label: "Flores", value: "Neutras, sem tradição fixa" },
            { label: "Ideal para", value: "Católica + Muçulmana · capela ou villa" },
          ],
        },
        {
          title: "A Mesa Partilhada",
          body: "A receção como ponto de encontro — duas cozinhas servidas lado a lado, duas tradições musicais numa mesma noite, uma disposição que entrelaça as famílias em vez de as dividir.",
          palette: ["#f3ead7", "#c9a24e", "#7a3814", "#4a523d", "#2a2018"],
          imageKey: "concept-3",
          rows: [
            { label: "Estrutura", value: "Mesa comprida, lugares entrelaçados" },
            { label: "Flores", value: "Ambas as paletas, um caminho" },
            { label: "Ideal para", value: "Qualquer combinação · centrada na receção" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocolo cultural",
      headline: "Aquilo a que *nos mantemos fiéis.*",
      deck: "Seis princípios que não negociamos. São o que permite a duas tradições partilhar um fim de semana sem que nenhuma se sinta reduzida.",
      items: [
        { title: "Nenhuma tradição é encurtada", body: "Nunca encurtamos uma cerimónia para dar lugar à outra. Se ambas não couberem por inteiro, acrescentamos um dia em vez de cortar um rito. É disto que se trata: que nenhuma família veja a sua tradição tratada como a menor." },
        { title: "Os celebrantes conhecem-se primeiro", body: "Os dois celebrantes falam antes de qualquer um deles ver o horário. O que cada tradição permite, exige e proíbe estabelece-se entre eles — não suposto por nós, nem descoberto no próprio dia." },
        { title: "As famílias são informadas em privado e em separado", body: "Cada família diz-nos, em confidência e à parte, onde estão o seu conforto e os seus limites. As preocupações são ouvidas antes de se tornarem tensões, e nunca transmitidas ao outro lado sem consentimento." },
        { title: "Os objetos sagrados não partilham um palco de ânimo leve", body: "Uma Torá, um fogo sagrado, uma cruz, um Alcorão: não são adereços dispostos por simetria. Cada um é manuseado como a sua tradição exige, e nunca combinado por causa de uma fotografia." },
        { title: "A ordem das cerimónias é decisão do casal", body: "Qual tradição vem primeiro cabe-lhes a eles — e, uma vez escolhida, mantida com firmeza. Não a revemos sob pressão familiar. Nenhuma ordem implica precedência; ambas as cerimónias são completas." },
        { title: "Os convidados recebem um guia de ambas as tradições", body: "A cada convidado é dado contexto sobre a fé que não é a sua: o que vai ver, o que significa, quando se levantar, o que é convite e o que é observância. Ninguém passa meio fim de semana como estranho." },
      ],
    },
    planning: {
      eyebrow: "Planeamento de vários dias",
      headline: "O *fim de semana* inter-religioso, hora a hora.",
      deck: "A planta que usamos para um fim de semana inter-religioso típico de duas cerimónias. Muitas vezes duas cerimónias em dois dias, unidas por uma só receção.",
      days: [
        {
          numeral: "I",
          dayLabel: "Dia Um",
          title: "Boas-vindas e encontro",
          body: "Os convidados chegam e as duas famílias conhecem-se — para muitos, pela primeira vez. Umas boas-vindas descontraídas dão o tom: ambas as culturas presentes, nenhuma a representar. Qualquer rito pré-nupcial próprio de uma tradição realiza-se nesta noite.",
          events: [
            { time: "Tarde", body: "Chegada de convidados · transferes · check-in no hotel" },
            { time: "17:00", body: "Receção de boas-vindas · ambas as famílias · apresentações" },
            { time: "19:00", body: "Rito pré-nupcial (mehndi, hena ou ensaio) conforme a combinação" },
            { time: "21:00", body: "Jantar informal · duas cozinhas · lugares mistos" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Dia Dois",
          title: "As duas cerimónias",
          body: "Ambas as cerimónias, cada uma sustentada inteira, na ordem escolhida pelo casal, unidas pelo momento partilhado entre elas. Uma só receção à noite leva ambas as culturas para o casamento.",
          events: [
            { time: "10:30", body: "Primeira cerimónia · o seu celebrante · a sua língua · os seus ritos" },
            { time: "12:30", body: "O momento partilhado · criado pelo casal · entre as cerimónias" },
            { time: "13:00", body: "Segunda cerimónia · segundo celebrante · sustentada por inteiro" },
            { time: "15:00", body: "Almoço de celebração · ambas as cozinhas" },
            { time: "19:30", body: "Receção · duas tradições musicais · lugares entrelaçados · primeira dança" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Dia Três",
          title: "Despedida",
          body: "Um encontro da manhã seguinte oferecido pelo casal — sem pressa, ambas as famílias juntas, a formalidade já pousada. O encerramento extraoficial do fim de semana, com tempo para as despedidas.",
          events: [
            { time: "11:00", body: "Brunch de despedida · jardim ou terraço" },
            { time: "Tarde", body: "Partidas · transferes para o aeroporto" },
            { time: "Noite", body: "Jantar de família próxima (opcional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilidade de destinos",
      headline: "Onde os casamentos inter-religiosos *funcionam melhor.*",
      viewAllLabel: "Ver todos os destinos →",
      viewAllHref: staticPath("pt", "/destinations"),
      cards: [
        { rating: 5, name: "Lago de Como", sub: "Itália · maio – outubro", imageKey: "compat-1", destinationHref: destinationPath("pt", "lake-como") },
        { rating: 5, name: "Toscana", sub: "Itália · maio – outubro", imageKey: "compat-2", destinationHref: destinationPath("pt", "tuscany") },
        { rating: 5, name: "Provença", sub: "França · junho – setembro", imageKey: "compat-3", destinationHref: destinationPath("pt", "provence") },
        { rating: 4, name: "Costa Amalfitana", sub: "Itália · maio – outubro", imageKey: "compat-4", destinationHref: destinationPath("pt", "amalfi") },
        { rating: 4, name: "Paris e Île-de-France", sub: "França · abril – outubro", imageKey: "compat-5", destinationHref: destinationPath("pt", "paris-ile-de-france") },
        { rating: 4, name: "Punta Cana", sub: "Caraíbas · todo o ano", imageKey: "compat-6", destinationHref: destinationPath("pt", "punta-cana") },
        { rating: 4, name: "Os Hamptons", sub: "Estados Unidos · junho – setembro", imageKey: "compat-7", destinationHref: destinationPath("pt", "the-hamptons") },
        { rating: 3, name: "Mustique", sub: "Caraíbas · novembro – abril", imageKey: "compat-8", destinationHref: destinationPath("pt", "mustique") },
      ],
    },
    guest: {
      eyebrow: "Gestão de convidados",
      headline: "O *cuidado prático* de duas comunidades.",
      deck: "A logística inter-religiosa que a maioria dos organizadores subdimensiona. Começamos pelos convidados que serão estranhos a metade do fim de semana.",
      cells: [
        { title: "Protocolo dietético duplo", body: "Kosher e halal coordenados dentro de um único plano de cozinha — preparação separada, fornecimento certificado, sem contacto cruzado — a par de menus vegetariano, jainista, vegano e sem alergénios. Um só caderno de catering que honra as leis de ambas as famílias." },
        { title: "Guias de ambas as tradições", body: "Cada convidado recebe contexto sobre a fé que não é a sua: o que vai ver, o que significa, quando se levantar, o que é participação e o que é presença. Impresso no kit de boas-vindas e no site do casamento." },
        { title: "Lugares entre famílias", body: "Entrelaçamos as duas famílias em vez de as sentar à parte. Disposição pensada para que nenhum lado passe a receção só entre os seus: a própria sala faz o trabalho de unir." },
        { title: "Mais velhos e sensibilidades", body: "Os familiares mais ligados à tradição são informados primeiro e sentados com cuidado. Um elo de ligação para os mais velhos, do ateliê, gere conforto, mobilidade e qualquer preocupação discreta antes de chegar ao casal." },
        { title: "Viagem e alojamento", body: "Blocos de quartos por categorias, transferes coordenados ao longo de vários dias de chegadas, kits de boas-vindas com o horário, o código de vestuário por evento e um guia de ambas as cerimónias em cada quarto." },
        { title: "Comunicações", body: "Um grupo de WhatsApp três semanas antes, um site de casamento com o contexto de ambas as cerimónias e uma equipa do ateliê disponível todo o fim de semana para responder — em qualquer das duas tradições — a qualquer pergunta que um convidado seja demasiado cortês para fazer." },
      ],
    },
    related: {
      eyebrow: "Continuar a ler",
      headline: "Do *diário.*",
      articles: [
        { category: "Inter-religioso · Método", title: "Como planear um casamento inter-religioso sem diminuir nenhuma fé", body: "Sobre sustentar duas tradições inteiras — e por que a fusão é o instinto errado.", imageKey: "culture-related-1" },
        { category: "Inter-religioso · Celebrantes", title: "Encontrar dois celebrantes que partilhem um fim de semana", body: "A primeira e mais difícil pergunta — e como a confissão molda a resposta.", imageKey: "culture-related-2" },
        { category: "Hindu + Judaica", title: "Os pheras junto à chupá", body: "Uma nota de campo sobre a combinação que mais nos pedem.", imageKey: "culture-related-3" },
        { category: "Design · Inter-religioso", title: "Dois dosséis, um relvado", body: "Desenhar um cenário que sustente ambas as tradições sem forçar a sua fusão.", imageKey: "culture-related-4" },
        { category: "Custo · Inter-religioso", title: "Quanto custa realmente um casamento inter-religioso em destino", body: "Orçamentos francos de 2026 para fins de semana de duas cerimónias.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Lago de Como", href: destinationPath("pt", "lake-como") },
        { label: "Toscana", href: destinationPath("pt", "tuscany") },
        { label: "Provença", href: destinationPath("pt", "provence") },
        { label: "Costa Amalfitana", href: destinationPath("pt", "amalfi") },
      ],
      sidebarVenues: [
        { label: "Villa Balbiano" },
        { label: "Borgo Santo Pietro" },
        { label: "Château de Tourreau" },
        { label: "Villa Cimbrone" },
      ],
      sidebarCultures: [
        { label: "Casamentos indianos", href: culturePath("pt", "indian-weddings") },
        { label: "Casamentos judaicos", href: culturePath("pt", "jewish-weddings") },
        { label: "Casamentos árabes", href: culturePath("pt", "arab-weddings") },
        { label: "Casamentos cristãos", href: culturePath("pt", "christian-weddings") },
      ],
    },
    faq: {
      eyebrow: "Perguntas, respondidas",
      headline: "Perguntas *frequentes.*",
      items: [
        {
          question: "Como encontram celebrantes dispostos a co-celebrar?",
          answer: [
            "É a primeira pergunta que fazemos, não a última. Alguns celebrantes estarão juntos; muitos recusam-se, e várias confissões proíbem a co-celebração de todo. Nunca damos por garantido que seja possível.",
            "Realizamos cedo uma consulta entre celebrantes — por vezes com um ano de antecedência — para estabelecer o que cada tradição permite. Quando a co-celebração não está disponível, a resposta são duas cerimónias realizadas em separado mas com igual cuidado. Somos honestos sobre qual será antes de qualquer planeamento começar.",
          ],
        },
        {
          question: "Um dia ou dois?",
          answer: [
            "A maioria dos fins de semana inter-religiosos dura dois a três dias, com as duas cerimónias no mesmo dia quando os celebrantes e os ritos o permitem, ou em dois dias quando não.",
            "O fator decisivo nunca é a nossa conveniência — é se ambas as cerimónias podem ser sustentadas por inteiro. Se não couberem num dia sem que uma fique apressada, acrescentamos um dia em vez de encurtar um rito.",
          ],
        },
        {
          question: "E se uma família estiver desconfortável com a outra tradição?",
          answer: [
            "É comum, e planeamos para isso. Cada família é informada primeiro em privado e em separado, para que as preocupações sejam ouvidas antes de se tornarem tensões.",
            "O guia de ambas as tradições faz grande parte do trabalho: quando um familiar entende o que vai presenciar, o desconforto costuma dar lugar à curiosidade. O momento partilhado que o casal constrói em conjunto é muitas vezes onde as duas famílias se sentem pela primeira vez como uma.",
          ],
        },
        {
          question: "Como funciona, em concreto, um casamento hindu-judaico?",
          answer: [
            "É a combinação que mais nos pedem. Na forma habitual, os pheras e a chupá são sustentados inteiros — um pandit conduz os sete passos à volta do fogo sagrado e um rabino (quando o rabino celebra casamentos inter-religiosos) conduz a chupá, a ketubá e as sheva brachot.",
            "A ordem é a escolha do casal. Desenhamos os tempos, os dois dosséis e o plano de cozinha de dieta dupla para que o kosher e o menu hindu de base vegetariana convivam comodamente num mesmo fim de semana.",
          ],
        },
        {
          question: "Qual é o custo típico em 2026?",
          answer: [
            "Um intervalo útil para 2026, num fim de semana inter-religioso de duas cerimónias com 150-300 convidados, é de USD 250.000 – 900.000, tudo incluído. Dois celebrantes, dois conjuntos de ritos e um catering de dieta dupla têm um custo real.",
            "Partilhamos orçamentos transparentes e completos na primeira consulta, com intervalos por rubrica conforme o número de convidados e a combinação.",
          ],
        },
        {
          question: "Fundem as duas cerimónias numa só?",
          answer: [
            "Não. Sustentamos cada tradição inteira. Não inventamos um rito híbrido nem pedimos a dois celebrantes que coescrevam uma liturgia que nenhuma tradição reconhece.",
            "O que desenhamos é um momento partilhado que o casal cria por si — uma leitura, uma bênção, um cortejo — que não pertence a nenhuma fé nem exige nada de nenhum celebrante. As cerimónias ficam completas; o casamento é a ponte.",
          ],
        },
        {
          question: "E os convidados que nunca assistiram a nenhuma das tradições?",
          answer: [
            "Cada convidado recebe um guia de ambas as tradições três semanas antes: o que vai ver, o que significa, quando se levantar, o que é convite e o que é observância. A equipa do ateliê está presente para responder pessoalmente. Ninguém passa meio fim de semana como estranho.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Uma conversa privada —",
      headline: "*Comece* o seu\ncasamento inter-religioso.",
      body: "Diga-nos as duas tradições, as duas famílias, se já têm celebrantes e uma data aproximada. A Grecia responde, pessoalmente, em cinco dias úteis.",
      ctaLabel: "Solicitar uma consulta privada →",
      ctaHref: staticPath("pt", "/contact"),
    },
  },

  de: {
    name: "Interreligiöse Hochzeiten",
    cardEyebrow: "Interreligiös",
    cardBlurb:
      "Zwei Geistliche. Zwei Sprachen. Ein stimmiger Zeremonienbogen. Die Spezialität des Ateliers.",
    cardMeta: "Entdecken",
    intro:
      "Zwei Geistliche, zwei Sprachen, ein stimmiger Zeremonienbogen — die Arbeit, nach der wir am häufigsten gefragt werden.",
    hero: {
      eyebrow: "Die Traditionen · Nr. 06",
      scriptOverline: "Zwei Glauben,",
      headline: "ein *Versprechen.*",
      deck: "Die erklärte Spezialität des Ateliers. Zwei Geistliche, zwei Sprachen und die Architektur, beide Traditionen ganz zu tragen — keine gekürzt, keine untergeordnet — an einem einzigen Wochenende.",
      captionLeft: "Noa & Arjun · Comer See",
      captionCenter: "Chuppa und Mandap, ein Rasen · 2025",
      captionRight: "Tafel VI",
    },
    factStrip: [
      { label: "Dauer der Hochzeit", value: "2 – 3 Tage", sub: "Zwei Zeremonien, ein Bogen" },
      { label: "Gästezahl", value: "120 – 400", sub: "Mehr auf Anfrage" },
      { label: "Vorlaufzeit", value: "18 – 24 Monate", sub: "Zwei Geistliche buchen früh" },
      { label: "Häufige Paarungen", value: "Hinduistisch · Jüdisch", sub: "Katholisch · Muslimisch · mehr" },
      { label: "Geistliche", value: "Zwei Geistliche", sub: "Als Regel, nicht als Ausnahme" },
      { label: "Sprachen", value: "DE + 1", sub: "Hebräisch · Hindi · Arabisch · Latein" },
    ],
    overview: {
      sideEyebrow: "Die Spezialität",
      sideNote:
        "Vierzig interreligiöse Hochzeiten. Ein Arbeitsregister, wie zwei Traditionen an einem Wochenende getragen werden, ohne dass eine geschmälert wird.",
      headline: "Zwei Glauben,\nzwei Geistliche,\nein *Wochenende.*",
      lede: "Eine interreligiöse Hochzeit ist kein Kompromiss. Es sind zwei vollständige Zeremonien, jede mit dem ganzen Gewicht ihrer Tradition gehalten, so angeordnet, dass kein Gast spürt, sein Glaube sei als Gast bei der Feier des anderen behandelt worden.",
      bodyParagraphs: [
        "Wir haben vierzig interreligiöse Hochzeiten geplant, unter den Paarungen, nach denen wir am häufigsten gefragt werden — hinduistisch und christlich, jüdisch und katholisch, muslimisch und christlich, sowie die leiseren Verbindungen innerhalb der Geschichte einer einzigen Familie. Die Konstante sind zwei Geistliche, die im Voraus zustimmen, ein Wochenende zu teilen, ohne leichtfertig einen Altar zu teilen.",
        "Unsere Haltung ist das Gegenteil von Verschmelzung. Wir erfinden keinen hybriden Ritus. Wir bitten weder einen Rabbiner noch einen Pandit, eine neue Liturgie mitzuverfassen, die keine Tradition anerkennt. Wir halten die Pheras ganz und wir halten die Chuppa ganz — und wir bauen die Architektur, das Timing und die Sprache so, dass die beiden als eine Geschichte gelesen werden statt als zwei Hälften.",
        "Ob eine gemeinsame Amtshandlung überhaupt möglich ist, ist die erste Frage, keine Annahme. Manche Geistliche stehen zusammen; viele tun es nicht, und viele Konfessionen verbieten es. Wir kartieren, was die Tradition jedes Geistlichen erlaubt, bevor wir den Zeitplan kartieren, und wir sind ehrlich zu den Paaren, wenn die Antwort zwei getrennt gehaltene Zeremonien lautet statt einer neben der anderen.",
        "Die Methode, nach vierzig: jede Familie zuerst vertraulich informieren, jeden Geistlichen den anderen treffen lassen, bevor er den Ablaufplan sieht, und einen gemeinsamen Moment gestalten, den das Paar zusammen baut — eine Lesung, ein Segen, eine Prozession — der zu keiner Tradition gehört und keine verletzt. Die Traditionen bleiben ganz. Die Ehe ist die Brücke.",
      ],
      pull: '"Wir verschmelzen nicht zwei Zeremonien zu einer. Wir halten jede ganz und lassen die Ehe die Brücke zwischen ihnen sein."',
      signatureName: "Grecia",
      signatureRole: "Gründerin · Nach vierzig interreligiösen Hochzeiten",
    },
    ceremonyArc: {
      eyebrow: "Die Methode",
      headline: "Der Bogen der *zwei Geistlichen.*",
      deck: "Unsere Arbeitsmethode für ein interreligiöses Wochenende — die Abfolge, die wir unabhängig von der Paarung halten. Die Reihenfolge der beiden Zeremonien ist stets die Entscheidung des Paares.",
      steps: [
        { numeral: "I", name: "Die Beratung der zwei Geistlichen", sub: "Beide Geistliche, ein Tisch", when: "12 – 9 Monate vorher", body: "Wir bringen beide Geistliche früh zusammen, um festzulegen, was jede Tradition erlaubt, was jede erfordert und wo die Grenzen liegen. Dieses Gespräch entscheidet über alles Weitere." },
        { numeral: "II", name: "Die zwei Rituale kartieren", sub: "Jede Tradition, ganz", when: "9 – 6 Monate vorher", body: "Wir legen jede Zeremonie vollständig aus — nichts gekürzt, um der anderen Platz zu machen — und gestalten dann Timing und Raum so, dass beide vollständig geehrt werden können." },
        { numeral: "III", name: "Die erste Zeremonie", sub: "Die vom Paar gewählte Reihenfolge", when: "Zeremonientag", body: "Die erste Tradition wird vollständig gehalten, geführt von ihrem eigenen Geistlichen, in ihrer eigenen Sprache, mit ihren eigenen heiligen Gegenständen. Die Gäste erhalten einen Leitfaden, damit das Unbekannte einladend statt undurchsichtig wirkt." },
        { numeral: "IV", name: "Der gemeinsame Moment", sub: "Vom Paar gebaut", when: "Zwischen den Zeremonien", body: "Ein gemeinsam gestaltetes Element — eine Lesung, ein Segen, eine Prozession von einer Zeremonie zur nächsten — das das Paar zusammen verfasst. Es gehört zu keiner Tradition und verlangt nichts von einem der Geistlichen." },
        { numeral: "V", name: "Die zweite Zeremonie", sub: "Die zweite Tradition, ganz", when: "Zeremonientag", body: "Die zweite Tradition wird mit derselben Vollständigkeit wie die erste gehalten, geführt von ihrem eigenen Geistlichen. Keine Zeremonie ist der Höhepunkt; keine ist das Vorprogramm." },
        { numeral: "VI", name: "Ein Empfang", sub: "Zwei Familien, ein Tisch", when: "Abend", body: "Eine einzige Feier, die beide Kulturen weiterträgt — zwei Küchen, zwei Arten von Musik, ein Raum. Der Punkt, an dem zwei Familien sichtbar zu einer werden." },
      ],
    },
    designConcepts: {
      eyebrow: "Designkonzepte",
      headline: "*Beide* halten.",
      deck: "Drei Richtungen, die wir mehr als einmal für interreligiöse Wochenenden gebaut haben. Jede hält beide Traditionen lesbar, ohne sie zur Verschmelzung zu zwingen.",
      cards: [
        {
          title: "Zwei Baldachine",
          body: "Eine Chuppa und ein Mandap auf einem Rasen, getrennt und gleichwertig — jeder nach seiner Tradition gebaut, keiner so gekleidet, dass er den anderen nachahmt. Das Paar geht zwischen beiden hindurch.",
          palette: ["#f5f0e6", "#e8d6a0", "#c89d4e", "#7a6a3a", "#3a2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Struktur", value: "Zwillingsbaldachine, getrennt" },
            { label: "Floristik", value: "Je Tradition verschieden" },
            { label: "Am besten für", value: "Hinduistisch + Jüdisch · Gartengut" },
          ],
        },
        {
          title: "Neutraler Boden",
          body: "Eine einzige zurückhaltende Kulisse — Elfenbein, Stein, Kerzenlicht — die zu keiner Tradition gehört und beide kleidet. Das Detail kommt aus den Zeremonien, nicht aus dem Dekor.",
          palette: ["#ebe3d3", "#d6cdb8", "#a7a78b", "#8a7d5a", "#2f3527"],
          imageKey: "concept-2",
          rows: [
            { label: "Struktur", value: "Ein Altar, umgestaltet" },
            { label: "Floristik", value: "Neutral, traditionsfrei" },
            { label: "Am besten für", value: "Katholisch + Muslimisch · Kapelle oder Villa" },
          ],
        },
        {
          title: "Der gemeinsame Tisch",
          body: "Der Empfang als Treffpunkt — zwei Küchen nebeneinander angerichtet, zwei Musiktraditionen an einem Abend, eine Sitzordnung, die die Familien verflicht statt sie zu trennen.",
          palette: ["#f3ead7", "#c9a24e", "#7a3814", "#4a523d", "#2a2018"],
          imageKey: "concept-3",
          rows: [
            { label: "Struktur", value: "Lange Tafel, verflochtene Plätze" },
            { label: "Floristik", value: "Beide Paletten, ein Läufer" },
            { label: "Am besten für", value: "Jede Paarung · empfangsbetont" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Kulturelles Protokoll",
      headline: "Woran wir *festhalten.*",
      deck: "Sechs Grundsätze, bei denen wir keine Kompromisse machen. Sie sind es, die zwei Traditionen ein Wochenende teilen lassen, ohne dass eine sich verringert fühlt.",
      items: [
        { title: "Keine Tradition wird gekürzt", body: "Wir kürzen nie eine Zeremonie, um der anderen Platz zu machen. Passen beide nicht ganz, fügen wir lieber einen Tag hinzu, als einen Ritus zu beschneiden. Genau darum geht es: dass keine Familie ihre Tradition als die geringere behandelt sieht." },
        { title: "Die Geistlichen treffen sich zuerst", body: "Die beiden Geistlichen sprechen miteinander, bevor einer von ihnen den Zeitplan sieht. Was jede Tradition erlaubt, erfordert und verbietet, wird zwischen ihnen festgelegt — nicht von uns angenommen und nicht am Tag selbst entdeckt." },
        { title: "Die Familien werden privat und getrennt unterrichtet", body: "Jede Familie sagt uns vertraulich und für sich, wo ihre Wohlfühlgrenze und ihre roten Linien liegen. Bedenken werden gehört, bevor sie zu Spannungen werden, und nie ohne Einverständnis über den Gang getragen." },
        { title: "Heilige Gegenstände teilen nicht leichtfertig eine Bühne", body: "Eine Tora, ein heiliges Feuer, ein Kreuz, ein Koran: das sind keine Requisiten, die der Symmetrie wegen arrangiert werden. Jeder wird gehandhabt, wie seine Tradition es verlangt, und nie für ein Foto kombiniert." },
        { title: "Die Reihenfolge der Zeremonien entscheidet das Paar", body: "Welche Tradition zuerst kommt, liegt bei ihm — und ist einmal gewählt, fest gehalten. Wir rollen sie unter Familiendruck nicht wieder auf. Keine Reihenfolge bedeutet Vorrang; beide Zeremonien sind vollständig." },
        { title: "Die Gäste erhalten einen Leitfaden zu beiden Traditionen", body: "Jeder Gast erhält Kontext zu dem Glauben, der nicht der seine ist: was er sehen wird, was es bedeutet, wann man steht, was Einladung und was Andacht ist. Niemand erlebt das halbe Wochenende als Außenstehender." },
      ],
    },
    planning: {
      eyebrow: "Mehrtägige Planung",
      headline: "Das interreligiöse *Wochenende,* Stunde für Stunde.",
      deck: "Die Vorlage, die wir für ein typisches interreligiöses Wochenende mit zwei Zeremonien verwenden. Oft zwei Zeremonien an zwei Tagen, verbunden durch einen Empfang.",
      days: [
        {
          numeral: "I",
          dayLabel: "Tag Eins",
          title: "Willkommen & Begegnung",
          body: "Die Gäste treffen ein, und die beiden Familien begegnen sich — für viele zum ersten Mal. Ein entspanntes Willkommen gibt den Ton an: beide Kulturen präsent, keine vorführend. Jeder traditionsspezifische Vorritus findet an diesem Abend statt.",
          events: [
            { time: "Nachmittag", body: "Ankunft der Gäste · Transfers · Hotel-Check-in" },
            { time: "17:00", body: "Willkommensempfang · beide Familien · Vorstellungen" },
            { time: "19:00", body: "Vorritus (Mehndi, Henna oder Probe) je nach Paarung" },
            { time: "21:00", body: "Lockeres Abendessen · zwei Küchen · gemischte Sitzordnung" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Tag Zwei",
          title: "Die zwei Zeremonien",
          body: "Beide Zeremonien, jede ganz gehalten, in der vom Paar gewählten Reihenfolge, verbunden durch den gemeinsamen Moment dazwischen. Ein Empfang am Abend trägt beide Kulturen in die Ehe.",
          events: [
            { time: "10:30", body: "Erste Zeremonie · eigener Geistlicher · eigene Sprache · eigene Riten" },
            { time: "12:30", body: "Der gemeinsame Moment · vom Paar verfasst · zwischen den Zeremonien" },
            { time: "13:00", body: "Zweite Zeremonie · zweiter Geistlicher · ganz gehalten" },
            { time: "15:00", body: "Festessen · beide Küchen" },
            { time: "19:30", body: "Empfang · zwei Musiktraditionen · verflochtene Sitzordnung · erster Tanz" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Tag Drei",
          title: "Abschied",
          body: "Eine Zusammenkunft am Morgen danach, ausgerichtet vom Paar — ohne Eile, beide Familien zusammen, die Förmlichkeit abgelegt. Der inoffizielle Abschluss des Wochenendes, mit Zeit für die Verabschiedungen.",
          events: [
            { time: "11:00", body: "Abschieds-Brunch · Garten oder Terrasse" },
            { time: "Nachmittag", body: "Abreisen · Flughafentransfers" },
            { time: "Abend", body: "Abendessen im engen Familienkreis (optional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Destinationskompatibilität",
      headline: "Wo interreligiöse Hochzeiten *am besten gelingen.*",
      viewAllLabel: "Alle Destinationen ansehen →",
      viewAllHref: staticPath("de", "/destinations"),
      cards: [
        { rating: 5, name: "Comer See", sub: "Italien · Mai – Oktober", imageKey: "compat-1", destinationHref: destinationPath("de", "lake-como") },
        { rating: 5, name: "Toskana", sub: "Italien · Mai – Oktober", imageKey: "compat-2", destinationHref: destinationPath("de", "tuscany") },
        { rating: 5, name: "Provence", sub: "Frankreich · Juni – September", imageKey: "compat-3", destinationHref: destinationPath("de", "provence") },
        { rating: 4, name: "Amalfiküste", sub: "Italien · Mai – Oktober", imageKey: "compat-4", destinationHref: destinationPath("de", "amalfi") },
        { rating: 4, name: "Paris & Île-de-France", sub: "Frankreich · April – Oktober", imageKey: "compat-5", destinationHref: destinationPath("de", "paris-ile-de-france") },
        { rating: 4, name: "Punta Cana", sub: "Karibik · ganzjährig", imageKey: "compat-6", destinationHref: destinationPath("de", "punta-cana") },
        { rating: 4, name: "Die Hamptons", sub: "USA · Juni – September", imageKey: "compat-7", destinationHref: destinationPath("de", "the-hamptons") },
        { rating: 3, name: "Mustique", sub: "Karibik · November – April", imageKey: "compat-8", destinationHref: destinationPath("de", "mustique") },
      ],
    },
    guest: {
      eyebrow: "Gästemanagement",
      headline: "Die *praktische* Fürsorge für zwei Gemeinschaften.",
      deck: "Die interreligiöse Logistik, die die meisten Planer unterausstatten. Wir beginnen bei den Gästen, die dem halben Wochenende fremd sein werden.",
      cells: [
        { title: "Doppeltes Speiseprotokoll", body: "Koscher und halal innerhalb eines einzigen Küchenplans koordiniert — getrennte Zubereitung, zertifizierte Beschaffung, kein Kreuzkontakt — neben vegetarischen, jainistischen, veganen und allergenfreien Menüs. Ein Catering-Briefing, das die Gebote beider Familien ehrt." },
        { title: "Leitfäden zu beiden Traditionen", body: "Jeder Gast erhält Kontext zu dem Glauben, der nicht der seine ist: was er sehen wird, was es bedeutet, wann man steht, was Teilnahme und was Zeugenschaft ist. Gedruckt im Willkommenspaket und auf der Hochzeitsseite." },
        { title: "Sitzordnung über Familien hinweg", body: "Wir verflechten die beiden Familien, statt sie getrennt zu setzen. Eine Tischordnung, die so gestaltet ist, dass keine Seite den Empfang nur unter den Ihren verbringt — der Raum selbst leistet die Arbeit des Zusammenführens." },
        { title: "Ältere & Empfindlichkeiten", body: "Die der Tradition am stärksten verbundenen Verwandten werden zuerst unterrichtet und mit Bedacht platziert. Ein Ältesten-Ansprechpartner des Ateliers regelt Komfort, Mobilität und jede leise Sorge, bevor sie das Paar erreicht." },
        { title: "Anreise & Unterkunft", body: "Zimmerkontingente in mehreren Kategorien, über mehrere Anreisetage koordinierte Transfers, Willkommenspakete mit Zeitplan, Kleiderordnung je Veranstaltung und einem Leitfaden zu beiden Zeremonien in jedem Zimmer." },
        { title: "Kommunikation", body: "Eine WhatsApp-Gruppe drei Wochen vorher, eine Hochzeitsseite mit dem Kontext beider Zeremonien und ein Atelier-Team, das das ganze Wochenende über bereitsteht, um — in beiden Traditionen — jede Frage zu beantworten, für die ein Gast zu höflich ist." },
      ],
    },
    related: {
      eyebrow: "Weiterlesen",
      headline: "Aus dem *Journal.*",
      articles: [
        { category: "Interreligiös · Methode", title: "Eine interreligiöse Hochzeit planen, ohne einen Glauben zu schmälern", body: "Über das Ganzhalten zweier Traditionen — und warum Verschmelzung der falsche Instinkt ist.", imageKey: "culture-related-1" },
        { category: "Interreligiös · Geistliche", title: "Zwei Geistliche finden, die ein Wochenende teilen", body: "Die erste und schwierigste Frage — und wie die Konfession die Antwort prägt.", imageKey: "culture-related-2" },
        { category: "Hinduistisch + Jüdisch", title: "Die Pheras neben der Chuppa", body: "Eine Feldnotiz zu der Paarung, nach der wir am häufigsten gefragt werden.", imageKey: "culture-related-3" },
        { category: "Design · Interreligiös", title: "Zwei Baldachine, ein Rasen", body: "Eine Kulisse gestalten, die beide Traditionen hält, ohne sie zur Verschmelzung zu zwingen.", imageKey: "culture-related-4" },
        { category: "Kosten · Interreligiös", title: "Was eine interreligiöse Destinationshochzeit wirklich kostet", body: "Offene Budgets 2026 für Wochenenden mit zwei Zeremonien.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Comer See", href: destinationPath("de", "lake-como") },
        { label: "Toskana", href: destinationPath("de", "tuscany") },
        { label: "Provence", href: destinationPath("de", "provence") },
        { label: "Amalfiküste", href: destinationPath("de", "amalfi") },
      ],
      sidebarVenues: [
        { label: "Villa Balbiano" },
        { label: "Borgo Santo Pietro" },
        { label: "Château de Tourreau" },
        { label: "Villa Cimbrone" },
      ],
      sidebarCultures: [
        { label: "Indische Hochzeiten", href: culturePath("de", "indian-weddings") },
        { label: "Jüdische Hochzeiten", href: culturePath("de", "jewish-weddings") },
        { label: "Arabische Hochzeiten", href: culturePath("de", "arab-weddings") },
        { label: "Christliche Hochzeiten", href: culturePath("de", "christian-weddings") },
      ],
    },
    faq: {
      eyebrow: "Fragen, beantwortet",
      headline: "Häufig *gefragt.*",
      items: [
        {
          question: "Wie finden Sie Geistliche, die bereit sind, gemeinsam zu amtieren?",
          answer: [
            "Das ist die erste Frage, die wir stellen, nicht die letzte. Manche Geistliche stehen zusammen; viele tun es nicht, und etliche Konfessionen verbieten die gemeinsame Amtshandlung rundheraus. Wir setzen nie voraus, dass sie möglich ist.",
            "Wir halten früh eine Beratung von Geistlichem zu Geistlichem ab — manchmal ein Jahr im Voraus —, um festzulegen, was jede Tradition erlaubt. Ist eine gemeinsame Amtshandlung nicht möglich, lautet die Antwort zwei getrennt, aber mit gleicher Sorgfalt gehaltene Zeremonien. Wir sind ehrlich darüber, was es sein wird, bevor jede Planung beginnt.",
          ],
        },
        {
          question: "Ein Tag oder zwei?",
          answer: [
            "Die meisten interreligiösen Wochenenden dauern zwei bis drei Tage, mit den beiden Zeremonien an einem Tag, wo Geistliche und Riten es zulassen, oder an zwei Tagen, wo nicht.",
            "Der ausschlaggebende Faktor ist nie unsere Bequemlichkeit — sondern ob beide Zeremonien ganz gehalten werden können. Passen sie nicht an einen Tag, ohne dass eine gehetzt wird, fügen wir einen Tag hinzu, statt einen Ritus zu kürzen.",
          ],
        },
        {
          question: "Was, wenn eine Familie mit der anderen Tradition fremdelt?",
          answer: [
            "Das ist häufig, und wir planen dafür. Jede Familie wird zuerst privat und getrennt unterrichtet, damit Bedenken gehört werden, bevor sie zu Spannungen werden.",
            "Der Leitfaden zu beiden Traditionen leistet viel der Arbeit: wenn ein Verwandter versteht, was er gleich erleben wird, weicht das Fremdeln meist der Neugier. Der gemeinsame Moment, den das Paar zusammen baut, ist oft der Augenblick, in dem sich die beiden Familien zum ersten Mal als eine fühlen.",
          ],
        },
        {
          question: "Wie läuft eine hinduistisch-jüdische Hochzeit konkret ab?",
          answer: [
            "Es ist die Paarung, nach der wir am häufigsten gefragt werden. In der üblichen Form werden die Pheras und die Chuppa jeweils ganz gehalten — ein Pandit führt die sieben Schritte um das heilige Feuer, ein Rabbiner (sofern der Rabbiner interreligiöse Hochzeiten leitet) führt Chuppa, Ketubba und Sheva Brachot.",
            "Die Reihenfolge ist die Wahl des Paares. Wir gestalten Timing, die zwei Baldachine und den Küchenplan für zwei Diäten so, dass koscher und das vegetarisch geprägte hinduistische Menü an einem Wochenende bequem nebeneinander bestehen.",
          ],
        },
        {
          question: "Wie hoch sind die typischen Kosten 2026?",
          answer: [
            "Eine brauchbare Spanne für 2026 für ein interreligiöses Wochenende mit zwei Zeremonien und 150–300 Gästen liegt bei 250.000 – 900.000 USD, all-in. Zwei Geistliche, zwei Riten-Sätze und ein Catering für zwei Diäten kosten real.",
            "Wir teilen vollständige, transparente Budgets in der ersten Beratung, mit Spannen je Posten nach Gästezahl und Paarung.",
          ],
        },
        {
          question: "Verschmelzen Sie die beiden Zeremonien zu einer?",
          answer: [
            "Nein. Wir halten jede Tradition ganz. Wir erfinden keinen hybriden Ritus und bitten keine zwei Geistlichen, eine Liturgie mitzuverfassen, die keine Tradition anerkennt.",
            "Was wir gestalten, ist ein gemeinsamer Moment, den das Paar selbst baut — eine Lesung, ein Segen, eine Prozession —, der zu keinem Glauben gehört und nichts von einem der Geistlichen verlangt. Die Zeremonien bleiben vollständig; die Ehe ist die Brücke.",
          ],
        },
        {
          question: "Was ist mit Gästen, die noch nie bei einer der beiden Traditionen waren?",
          answer: [
            "Jeder Gast erhält drei Wochen vorher einen Leitfaden zu beiden Traditionen: was er sehen wird, was es bedeutet, wann man steht, was Einladung und was Andacht ist. Das Atelier-Team ist durchgehend da, um persönlich zu antworten. Niemand erlebt das halbe Wochenende als Außenstehender.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Ein privates Gespräch —",
      headline: "*Beginnen* Sie Ihre\ninterreligiöse Hochzeit.",
      body: "Nennen Sie uns die beiden Traditionen, die beiden Familien, ob Ihre Geistlichen gefunden sind, und ein ungefähres Datum. Grecia antwortet persönlich innerhalb von fünf Werktagen.",
      ctaLabel: "Ein privates Beratungsgespräch anfragen →",
      ctaHref: staticPath("de", "/contact"),
    },
  },

  it: {
    name: "Matrimoni Interreligiosi",
    cardEyebrow: "Interreligioso",
    cardBlurb:
      "Due celebranti. Due lingue. Un unico arco cerimoniale coeso. La specialità dell'atelier.",
    cardMeta: "Scopri",
    intro:
      "Due celebranti, due lingue, un unico arco cerimoniale coeso — il lavoro che ci viene richiesto più di ogni altro.",
    hero: {
      eyebrow: "Le Tradizioni · N. 06",
      scriptOverline: "Due fedi,",
      headline: "un *voto.*",
      deck: "La specialità dichiarata dell'atelier. Due celebranti, due lingue e l'architettura per tenere entrambe le tradizioni intere — nessuna accorciata, nessuna subordinata — nell'arco di un solo fine settimana.",
      captionLeft: "Noa e Arjun · Lago di Como",
      captionCenter: "Chuppah e mandap, un solo prato · 2025",
      captionRight: "Tavola VI",
    },
    factStrip: [
      { label: "Durata del matrimonio", value: "2 – 3 giorni", sub: "Due cerimonie, un arco" },
      { label: "Numero di ospiti", value: "120 – 400", sub: "Di più su richiesta" },
      { label: "Preavviso", value: "18 – 24 mesi", sub: "Due celebranti prenotano presto" },
      { label: "Abbinamenti comuni", value: "Indù · Ebraico", sub: "Cattolico · Musulmano · altri" },
      { label: "Celebranti", value: "Due celebranti", sub: "Per regola, non per eccezione" },
      { label: "Lingue", value: "IT + 1", sub: "Ebraico · Hindi · Arabo · Latino" },
    ],
    overview: {
      sideEyebrow: "La specialità",
      sideNote:
        "Quaranta matrimoni interreligiosi. Un registro di lavoro su come si tengono due tradizioni in un fine settimana senza che nessuna venga diminuita.",
      headline: "Due fedi,\ndue celebranti,\nun *fine settimana.*",
      lede: "Un matrimonio interreligioso non è un compromesso. Sono due cerimonie complete, ciascuna tenuta con tutto il peso della propria tradizione, disposte in modo che nessun ospite senta la propria fede trattata come ospite alla festa altrui.",
      bodyParagraphs: [
        "Abbiamo organizzato quaranta matrimoni interreligiosi tra gli abbinamenti che ci vengono richiesti di più — indù e cristiano, ebraico e cattolico, musulmano e cristiano, e le unioni più discrete dentro la storia di una sola famiglia. La costante sono due celebranti che concordano, in anticipo, di condividere un fine settimana senza condividere un altare con leggerezza.",
        "La nostra posizione è l'opposto della fusione. Non inventiamo un rito ibrido. Non chiediamo a un rabbino e a un pandit di coscrivere una liturgia nuova che nessuna tradizione riconosce. Teniamo i pheras interi e teniamo la chuppah intera — e costruiamo l'architettura, i tempi e la lingua perché le due si leggano come un'unica storia anziché come due metà.",
        "Se la co-celebrazione sia anche solo possibile è la prima domanda, non un presupposto. Alcuni celebranti staranno insieme; molti non lo faranno, e molte confessioni lo vietano. Mappiamo ciò che la tradizione di ciascun celebrante permette prima di mappare il programma, e siamo onesti con le coppie quando la risposta sono due cerimonie tenute separatamente anziché l'una accanto all'altra.",
        "Il metodo, dopo quaranta: informare prima ogni famiglia in privato, lasciare che ogni celebrante incontri l'altro prima di conoscere la scaletta, e disegnare un momento condiviso che la coppia costruisce insieme — una lettura, una benedizione, una processione — che non appartiene a nessuna tradizione e non ne offende nessuna. Le tradizioni restano intere. Il matrimonio è il ponte.",
      ],
      pull: '"Non fondiamo due cerimonie in una. Teniamo ciascuna intera e lasciamo che il matrimonio sia il ponte tra esse."',
      signatureName: "Grecia",
      signatureRole: "Fondatrice · Dopo quaranta matrimoni interreligiosi",
    },
    ceremonyArc: {
      eyebrow: "Il metodo",
      headline: "L'arco dei *due celebranti.*",
      deck: "Il nostro metodo di lavoro per un fine settimana interreligioso — la sequenza che teniamo qualunque sia l'abbinamento. L'ordine delle due cerimonie è sempre decisione della coppia.",
      steps: [
        { numeral: "I", name: "La consulenza dei due celebranti", sub: "Entrambi i celebranti, un tavolo", when: "12 – 9 mesi prima", body: "Riuniamo presto i due celebranti per stabilire cosa permette ciascuna tradizione, cosa esige ognuna e dove sono i confini. Questa conversazione decide tutto ciò che segue." },
        { numeral: "II", name: "Mappare i due rituali", sub: "Ogni tradizione, intera", when: "9 – 6 mesi prima", body: "Stendiamo ogni cerimonia per intero — nulla accorciato per far posto all'altra — poi disegniamo i tempi e lo spazio perché entrambe possano essere onorate completamente." },
        { numeral: "III", name: "La prima cerimonia", sub: "L'ordine scelto dalla coppia", when: "Giorno della cerimonia", body: "La prima tradizione si tiene per intero, guidata dal proprio celebrante, nella propria lingua, con i propri oggetti sacri. Gli ospiti ricevono una guida perché l'ignoto risulti accogliente, non opaco." },
        { numeral: "IV", name: "Il momento condiviso", sub: "Costruito dalla coppia", when: "Tra le cerimonie", body: "Un elemento disegnato insieme — una lettura, una benedizione, una processione da una cerimonia all'altra — che la coppia crea insieme. Non appartiene a nessuna tradizione e non chiede nulla a nessuno dei celebranti." },
        { numeral: "V", name: "La seconda cerimonia", sub: "La seconda tradizione, intera", when: "Giorno della cerimonia", body: "La seconda tradizione si tiene con la stessa pienezza della prima, guidata dal proprio celebrante. Nessuna cerimonia è il piatto forte; nessuna è l'apertura." },
        { numeral: "VI", name: "Un ricevimento", sub: "Due famiglie, un tavolo", when: "Sera", body: "Un'unica festa che porta avanti entrambe le culture — due cucine, due tipi di musica, una sola sala. Il punto in cui due famiglie diventano, visibilmente, una." },
      ],
    },
    designConcepts: {
      eyebrow: "Concept di design",
      headline: "Tenere *entrambe.*",
      deck: "Tre direzioni che abbiamo costruito più di una volta per fine settimana interreligiosi. Ciascuna mantiene leggibili entrambe le tradizioni senza forzarle a fondersi.",
      cards: [
        {
          title: "Due Baldacchini",
          body: "Una chuppah e un mandap su uno stesso prato, distinti e pari — ciascuno costruito secondo la propria tradizione, nessuno travestito per imitare l'altro. La coppia cammina tra i due.",
          palette: ["#f5f0e6", "#e8d6a0", "#c89d4e", "#7a6a3a", "#3a2a1e"],
          imageKey: "concept-1",
          rows: [
            { label: "Struttura", value: "Baldacchini gemelli, distinti" },
            { label: "Fiori", value: "Distinti per tradizione" },
            { label: "Ideale per", value: "Indù + Ebraico · tenuta con giardino" },
          ],
        },
        {
          title: "Terreno Neutro",
          body: "Un'unica scenografia sobria — avorio, pietra, luce di candele — che non appartiene a nessuna tradizione e valorizza entrambe. Il dettaglio nasce dalle cerimonie, non dall'allestimento.",
          palette: ["#ebe3d3", "#d6cdb8", "#a7a78b", "#8a7d5a", "#2f3527"],
          imageKey: "concept-2",
          rows: [
            { label: "Struttura", value: "Un altare, riconfigurato" },
            { label: "Fiori", value: "Neutri, senza tradizione" },
            { label: "Ideale per", value: "Cattolico + Musulmano · cappella o villa" },
          ],
        },
        {
          title: "La Tavola Condivisa",
          body: "Il ricevimento come punto d'incontro — due cucine impiattate fianco a fianco, due tradizioni musicali in una stessa sera, una disposizione che intreccia le famiglie anziché dividerle.",
          palette: ["#f3ead7", "#c9a24e", "#7a3814", "#4a523d", "#2a2018"],
          imageKey: "concept-3",
          rows: [
            { label: "Struttura", value: "Tavolo lungo, posti intrecciati" },
            { label: "Fiori", value: "Entrambe le palette, un runner" },
            { label: "Ideale per", value: "Qualsiasi abbinamento · centrato sul ricevimento" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocollo culturale",
      headline: "Ciò a cui *teniamo fede.*",
      deck: "Sei principi su cui non scendiamo a compromessi. Sono ciò che permette a due tradizioni di condividere un fine settimana senza che nessuna si senta ridotta.",
      items: [
        { title: "Nessuna tradizione viene accorciata", body: "Non accorciamo mai una cerimonia per far posto all'altra. Se entrambe non entrano intere, aggiungiamo un giorno anziché tagliare un rito. È tutto qui: che nessuna famiglia veda la propria tradizione trattata come la minore." },
        { title: "I celebranti si incontrano per primi", body: "I due celebranti si parlano prima che uno di loro veda il programma. Ciò che ciascuna tradizione permette, esige e vieta si stabilisce tra loro — non lo supponiamo noi, né lo si scopre il giorno stesso." },
        { title: "Le famiglie sono informate in privato e separatamente", body: "Ogni famiglia ci dice, in confidenza e a parte, dove sono il proprio agio e i propri limiti. Le preoccupazioni vengono ascoltate prima di diventare tensioni, e mai riferite all'altra parte senza consenso." },
        { title: "Gli oggetti sacri non condividono un palco con leggerezza", body: "Una Torah, un fuoco sacro, una croce, un Corano: non sono oggetti di scena disposti per simmetria. Ciascuno è maneggiato come la sua tradizione esige, e mai combinato per una fotografia." },
        { title: "L'ordine delle cerimonie è decisione della coppia", body: "Quale tradizione venga per prima spetta a loro — e, una volta scelto, mantenuto con fermezza. Non lo rimettiamo in discussione sotto pressione familiare. Nessun ordine implica precedenza; entrambe le cerimonie sono complete." },
        { title: "Gli ospiti ricevono una guida a entrambe le tradizioni", body: "A ogni ospite viene dato il contesto della fede che non è la sua: cosa vedrà, cosa significa, quando alzarsi, cosa è invito e cosa è osservanza. Nessuno vive mezzo fine settimana da estraneo." },
      ],
    },
    planning: {
      eyebrow: "Pianificazione su più giorni",
      headline: "Il *fine settimana* interreligioso, ora per ora.",
      deck: "Il progetto che usiamo per un tipico fine settimana interreligioso a due cerimonie. Spesso due cerimonie in due giorni, unite da un solo ricevimento.",
      days: [
        {
          numeral: "I",
          dayLabel: "Giorno Uno",
          title: "Benvenuto e incontro",
          body: "Gli ospiti arrivano e le due famiglie si incontrano — per molti, è la prima volta. Un benvenuto rilassato dà il tono: entrambe le culture presenti, nessuna in scena. Ogni rito pre-nuziale proprio di una tradizione si tiene questa sera.",
          events: [
            { time: "Pomeriggio", body: "Arrivo degli ospiti · transfer · check-in in hotel" },
            { time: "17:00", body: "Ricevimento di benvenuto · entrambe le famiglie · presentazioni" },
            { time: "19:00", body: "Rito pre-nuziale (mehndi, henné o prova) secondo l'abbinamento" },
            { time: "21:00", body: "Cena informale · due cucine · posti misti" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Giorno Due",
          title: "Le due cerimonie",
          body: "Entrambe le cerimonie, ciascuna tenuta intera, nell'ordine scelto dalla coppia, unite dal momento condiviso tra esse. Un solo ricevimento la sera porta entrambe le culture nel matrimonio.",
          events: [
            { time: "10:30", body: "Prima cerimonia · proprio celebrante · propria lingua · propri riti" },
            { time: "12:30", body: "Il momento condiviso · creato dalla coppia · tra le cerimonie" },
            { time: "13:00", body: "Seconda cerimonia · secondo celebrante · tenuta per intero" },
            { time: "15:00", body: "Pranzo di festa · entrambe le cucine" },
            { time: "19:30", body: "Ricevimento · due tradizioni musicali · posti intrecciati · primo ballo" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Giorno Tre",
          title: "Commiato",
          body: "Un ritrovo della mattina dopo offerto dalla coppia — senza fretta, entrambe le famiglie insieme, la formalità deposta. La chiusura ufficiosa del fine settimana, con il tempo per i saluti.",
          events: [
            { time: "11:00", body: "Brunch di commiato · giardino o terrazza" },
            { time: "Pomeriggio", body: "Partenze · transfer aeroportuali" },
            { time: "Sera", body: "Cena tra parenti stretti (facoltativa)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilità delle destinazioni",
      headline: "Dove i matrimoni interreligiosi *riescono meglio.*",
      viewAllLabel: "Vedi tutte le destinazioni →",
      viewAllHref: staticPath("it", "/destinations"),
      cards: [
        { rating: 5, name: "Lago di Como", sub: "Italia · maggio – ottobre", imageKey: "compat-1", destinationHref: destinationPath("it", "lake-como") },
        { rating: 5, name: "Toscana", sub: "Italia · maggio – ottobre", imageKey: "compat-2", destinationHref: destinationPath("it", "tuscany") },
        { rating: 5, name: "Provenza", sub: "Francia · giugno – settembre", imageKey: "compat-3", destinationHref: destinationPath("it", "provence") },
        { rating: 4, name: "Costiera Amalfitana", sub: "Italia · maggio – ottobre", imageKey: "compat-4", destinationHref: destinationPath("it", "amalfi") },
        { rating: 4, name: "Parigi e Île-de-France", sub: "Francia · aprile – ottobre", imageKey: "compat-5", destinationHref: destinationPath("it", "paris-ile-de-france") },
        { rating: 4, name: "Punta Cana", sub: "Caraibi · tutto l'anno", imageKey: "compat-6", destinationHref: destinationPath("it", "punta-cana") },
        { rating: 4, name: "Gli Hamptons", sub: "Stati Uniti · giugno – settembre", imageKey: "compat-7", destinationHref: destinationPath("it", "the-hamptons") },
        { rating: 3, name: "Mustique", sub: "Caraibi · novembre – aprile", imageKey: "compat-8", destinationHref: destinationPath("it", "mustique") },
      ],
    },
    guest: {
      eyebrow: "Gestione degli ospiti",
      headline: "La *cura pratica* di due comunità.",
      deck: "La logistica interreligiosa che la maggior parte degli organizzatori sotto-dimensiona. Partiamo dagli ospiti che saranno estranei a metà del fine settimana.",
      cells: [
        { title: "Protocollo dietetico doppio", body: "Kosher e halal coordinati all'interno di un unico piano di cucina — preparazione separata, approvvigionamento certificato, nessun contatto incrociato — accanto a menu vegetariano, jainista, vegano e privo di allergeni. Un solo brief di catering che onora le leggi di entrambe le famiglie." },
        { title: "Guide a entrambe le tradizioni", body: "Ogni ospite riceve il contesto della fede che non è la sua: cosa vedrà, cosa significa, quando alzarsi, cosa è partecipazione e cosa è testimonianza. Stampato nel kit di benvenuto e sul sito del matrimonio." },
        { title: "Posti tra le famiglie", body: "Intrecciamo le due famiglie anziché farle sedere a parte. Una disposizione pensata perché nessuna parte trascorra il ricevimento solo tra i propri: la sala stessa fa il lavoro di unire." },
        { title: "Anziani e sensibilità", body: "I parenti più legati alla tradizione vengono informati per primi e seduti con cura. Un referente per gli anziani dell'atelier gestisce comfort, mobilità e ogni preoccupazione discreta prima che raggiunga la coppia." },
        { title: "Viaggio e alloggio", body: "Blocchi di camere su più categorie, transfer coordinati su più giorni di arrivi, kit di benvenuto con il programma, il codice di abbigliamento per evento e una guida a entrambe le cerimonie in ogni camera." },
        { title: "Comunicazioni", body: "Un gruppo WhatsApp tre settimane prima, un sito del matrimonio che riporta il contesto di entrambe le cerimonie e un team dell'atelier a disposizione per tutto il fine settimana per rispondere — in una o nell'altra tradizione — a qualsiasi domanda che un ospite sia troppo educato per fare." },
      ],
    },
    related: {
      eyebrow: "Continua a leggere",
      headline: "Dal *diario.*",
      articles: [
        { category: "Interreligioso · Metodo", title: "Come pianificare un matrimonio interreligioso senza diminuire nessuna fede", body: "Sul tenere intere due tradizioni — e perché la fusione è l'istinto sbagliato.", imageKey: "culture-related-1" },
        { category: "Interreligioso · Celebranti", title: "Trovare due celebranti che condividano un fine settimana", body: "La prima e più difficile domanda — e come la confessione plasma la risposta.", imageKey: "culture-related-2" },
        { category: "Indù + Ebraico", title: "I pheras accanto alla chuppah", body: "Una nota sul campo sull'abbinamento che ci viene richiesto di più.", imageKey: "culture-related-3" },
        { category: "Design · Interreligioso", title: "Due baldacchini, un prato", body: "Disegnare una scenografia che tenga entrambe le tradizioni senza forzarle a fondersi.", imageKey: "culture-related-4" },
        { category: "Costo · Interreligioso", title: "Quanto costa davvero un matrimonio interreligioso di destinazione", body: "Budget franchi 2026 per fine settimana a due cerimonie.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Lago di Como", href: destinationPath("it", "lake-como") },
        { label: "Toscana", href: destinationPath("it", "tuscany") },
        { label: "Provenza", href: destinationPath("it", "provence") },
        { label: "Costiera Amalfitana", href: destinationPath("it", "amalfi") },
      ],
      sidebarVenues: [
        { label: "Villa Balbiano" },
        { label: "Borgo Santo Pietro" },
        { label: "Château de Tourreau" },
        { label: "Villa Cimbrone" },
      ],
      sidebarCultures: [
        { label: "Matrimoni indiani", href: culturePath("it", "indian-weddings") },
        { label: "Matrimoni ebraici", href: culturePath("it", "jewish-weddings") },
        { label: "Matrimoni arabi", href: culturePath("it", "arab-weddings") },
        { label: "Matrimoni cristiani", href: culturePath("it", "christian-weddings") },
      ],
    },
    faq: {
      eyebrow: "Domande, risposte",
      headline: "Domande *frequenti.*",
      items: [
        {
          question: "Come trovate celebranti disposti a co-celebrare?",
          answer: [
            "È la prima domanda che poniamo, non l'ultima. Alcuni celebranti staranno insieme; molti non lo faranno, e diverse confessioni vietano del tutto la co-celebrazione. Non diamo mai per scontato che sia possibile.",
            "Teniamo presto una consulenza tra celebranti — a volte con un anno di anticipo — per stabilire cosa permette ciascuna tradizione. Quando la co-celebrazione non è disponibile, la risposta sono due cerimonie tenute separatamente ma con uguale cura. Siamo onesti su quale sarà prima che inizi qualsiasi pianificazione.",
          ],
        },
        {
          question: "Un giorno o due?",
          answer: [
            "La maggior parte dei fine settimana interreligiosi dura due-tre giorni, con le due cerimonie nello stesso giorno quando celebranti e riti lo permettono, o in due giorni quando no.",
            "Il fattore decisivo non è mai la nostra comodità — è se entrambe le cerimonie possano essere tenute intere. Se non entrano in un giorno senza che una sia affrettata, aggiungiamo un giorno anziché accorciare un rito.",
          ],
        },
        {
          question: "E se una famiglia è a disagio con l'altra tradizione?",
          answer: [
            "È comune, e lo prevediamo. Ogni famiglia viene informata prima in privato e separatamente, perché le preoccupazioni siano ascoltate prima di diventare tensioni.",
            "La guida a entrambe le tradizioni fa gran parte del lavoro: quando un parente capisce ciò a cui assisterà, il disagio di solito cede il posto alla curiosità. Il momento condiviso che la coppia costruisce insieme è spesso l'istante in cui le due famiglie si sentono per la prima volta una sola.",
          ],
        },
        {
          question: "Come funziona nello specifico un matrimonio indù-ebraico?",
          answer: [
            "È l'abbinamento che ci viene richiesto di più. Nella forma consueta, i pheras e la chuppah si tengono interi — un pandit guida i sette passi attorno al fuoco sacro, un rabbino (quando il rabbino celebra matrimoni interreligiosi) guida la chuppah, la ketubah e le sheva brachot.",
            "L'ordine è la scelta della coppia. Disegniamo i tempi, i due baldacchini e il piano di cucina a doppia dieta perché il kosher e il menu indù a base vegetariana convivano comodamente in uno stesso fine settimana.",
          ],
        },
        {
          question: "Qual è il costo tipico nel 2026?",
          answer: [
            "Un intervallo utile per il 2026, per un fine settimana interreligioso a due cerimonie con 150-300 ospiti, è di USD 250.000 – 900.000, tutto incluso. Due celebranti, due insiemi di riti e un catering a doppia dieta hanno un costo reale.",
            "Condividiamo budget trasparenti e completi alla prima consulenza, con intervalli per voce in base al numero di ospiti e all'abbinamento.",
          ],
        },
        {
          question: "Fondete le due cerimonie in una sola?",
          answer: [
            "No. Teniamo ogni tradizione intera. Non inventiamo un rito ibrido né chiediamo a due celebranti di coscrivere una liturgia che nessuna tradizione riconosce.",
            "Ciò che disegniamo è un momento condiviso che la coppia crea da sé — una lettura, una benedizione, una processione — che non appartiene a nessuna fede e non chiede nulla a nessun celebrante. Le cerimonie restano complete; il matrimonio è il ponte.",
          ],
        },
        {
          question: "E gli ospiti che non hanno mai assistito a nessuna delle due tradizioni?",
          answer: [
            "Ogni ospite riceve una guida a entrambe le tradizioni tre settimane prima: cosa vedrà, cosa significa, quando alzarsi, cosa è invito e cosa è osservanza. Il team dell'atelier è presente per rispondere di persona. Nessuno vive mezzo fine settimana da estraneo.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Una conversazione privata —",
      headline: "*Inizia* il tuo\nmatrimonio interreligioso.",
      body: "Raccontaci le due tradizioni, le due famiglie, se i vostri celebranti sono già trovati e una data approssimativa. Grecia risponde, di persona, entro cinque giorni lavorativi.",
      ctaLabel: "Richiedi una consulenza privata →",
      ctaHref: staticPath("it", "/contact"),
    },
  },
};
