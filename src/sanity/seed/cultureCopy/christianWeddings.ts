/**
 * Christian Weddings — full detail-page copy, all six locales.
 *
 * Culture № 05. Catholic, Orthodox and Protestant ceremonies — from a
 * cathedral mass to a garden blessing. Card copy (name / cardEyebrow /
 * cardBlurb / cardMeta / intro) is reused verbatim from `culture.ts`.
 *
 * NOTE ON CULTURAL ACCURACY: canonical and liturgical requirements vary by
 * diocese, jurisdiction and parish. Copy throughout attributes rules to "the
 * couple's parish / priest" rather than stating universal law. See the report
 * accompanying this file for the specific claims flagged for editorial review.
 */

import { culturePath, destinationPath, staticPath, type CultureCopy } from "./shared";
import type { Locale } from "../../../i18n/routing";

export const christianWeddings: Record<Locale, CultureCopy> = {
  // ─────────────────────────────────────────────────────────────── EN ──
  en: {
    name: "Christian Weddings",
    cardEyebrow: "Christian",
    cardBlurb: "Catholic, Orthodox, Protestant. Cathedral or garden.",
    cardMeta: "Discover",
    intro:
      "Catholic, Orthodox and Protestant ceremonies — from a cathedral mass to a garden blessing.",
    hero: {
      eyebrow: "The Traditions · No. 05",
      scriptOverline: "A wedding of",
      headline: "Christian *sacrament.*",
      deck: "From a full nuptial mass beneath a cathedral nave to a garden blessing after a quiet church wedding at home. We coordinate with the couple's own parish and clergy, wherever in the world the day is held.",
      captionLeft: "Élodie & Thomas · Lake Como",
      captionCenter: "A garden blessing · 2025",
      captionRight: "Plate V",
    },
    factStrip: [
      { label: "Wedding length", value: "1 – 2 days", sub: "Ceremony + reception" },
      { label: "Guest range", value: "60 – 400", sub: "Intimate to grand" },
      { label: "Lead time", value: "12 – 18 months", sub: "Parishes book early" },
      { label: "Rites held", value: "Catholic · Orthodox", sub: "Protestant" },
      { label: "Ceremony settings", value: "Chapel · cathedral", sub: "Garden" },
      { label: "Languages", value: "EN · IT · FR", sub: "ES · Latin on request" },
    ],
    overview: {
      sideEyebrow: "The tradition",
      sideNote:
        "A working register of what we know about holding a Christian wedding abroad — with the parish, not around it.",
      headline: "One *sacrament,* many settings.",
      lede: "A Christian wedding is, before it is anything else, a rite held by a church. Our work begins not with the florals but with the clergy — and with the difference between the ceremony that is sacred and the paperwork that makes it legal.",
      bodyParagraphs: [
        "We have planned Christian weddings across three communions — Catholic, Orthodox and Protestant — and the first thing we tell every couple is the same: the church comes first. Months before a single table is laid, we are in correspondence with the parish that will marry you, whether that is a cathedral in Florence, a clifftop chapel above the Amalfi Coast, or the priest who has known one family for three generations and is willing to travel.",
        "The second conversation is the one couples rarely expect. In most countries the religious ceremony and the civil marriage are two separate acts. Some dioceses and jurisdictions allow a priest to register the marriage civilly on the day; many do not. Where they do not, we arrange the civil formalities cleanly and in advance — at home or at the destination — so that the day itself can be wholly about the sacrament, not a signing.",
        "A growing number of our couples marry in their own church at home first, then hold a garden blessing abroad. This is often the most graceful path: the sacrament is celebrated in the parish that matters to the family, and the destination day becomes a blessing, a renewal of vows, and a reception under open sky — unbound by canonical venue rules.",
        "Across all of it, our register is the same one we keep for every tradition: hold the rite as the couple's clergy would hold it. We do not summarise a liturgy for pacing, we do not move the Eucharist for a photograph, and we never let a vendor handle what belongs to the sacristy. The celebration is ours to design. The sacrament is the church's to keep.",
      ],
      pull: "\"The celebration is ours to design. The sacrament is the church's to keep.\"",
      signatureName: "Grecia",
      signatureRole: "Founder · On holding the rite with the parish",
    },
    ceremonyArc: {
      eyebrow: "Ceremony structure",
      headline: "The nuptial *mass,* part by part.",
      deck: "A representative Catholic nuptial mass, with notes for Orthodox and Protestant variants. The order and its contents are set by the officiating clergy and the couple's parish — this is our working sketch, not a fixed rule.",
      steps: [
        {
          numeral: "I",
          name: "Processional & gathering",
          sub: "Entrance rite",
          when: "Ceremony · 00:00",
          body: "The wedding party and the bride process to the front of the church. The priest welcomes the assembly and opens the rite. In Orthodox practice the gathering may begin at the narthex with the Betrothal and the exchange of rings.",
        },
        {
          numeral: "II",
          name: "Liturgy of the Word",
          sub: "Scripture & homily",
          when: "Ceremony · 00:10",
          body: "Readings chosen by the couple, a psalm, the Gospel, and the homily. Protestant ceremonies often centre this part, with the sermon and readings carrying the weight where there is no mass.",
        },
        {
          numeral: "III",
          name: "Exchange of consent & rings",
          sub: "The vows",
          when: "Ceremony · 00:25",
          body: "The couple declare their consent before the priest and the assembly, and exchange rings. This is the heart of the marriage rite across all three communions, though the words and form differ by church.",
        },
        {
          numeral: "IV",
          name: "The Crowning",
          sub: "Orthodox variant",
          when: "Ceremony · 00:30",
          body: "In an Orthodox wedding, the couple are crowned with the stefana and led around the analogion in the Dance of Isaiah. This step replaces the Western exchange of vows as the visible centre of the rite, and is led by the family's own priest.",
        },
        {
          numeral: "V",
          name: "Nuptial blessing & communion",
          sub: "The Eucharist",
          when: "Ceremony · 00:40",
          body: "In a Catholic mass the priest pronounces the nuptial blessing and the Liturgy of the Eucharist follows, with communion. Whether and how guests of other communions receive is decided by the officiating priest and made clear to the assembly in advance.",
        },
        {
          numeral: "VI",
          name: "Recessional",
          sub: "Departure",
          when: "Ceremony · 01:00",
          body: "The newly married couple lead the assembly out of the church to the bells or the organ. Receiving line, photographs on the steps, and the transfer to the reception.",
        },
        {
          numeral: "VII",
          name: "Reception",
          sub: "Celebration dinner",
          when: "Evening",
          body: "Seated dinner, the toasts, the first dance and the cutting of the cake. The register of the reception is the couple's to set — formal estate dinner or long-table under the vines.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Design concepts",
      headline: "Nave, garden, *candlelight.*",
      deck: "Three working directions we have built more than once. Each adapts to the church and the season — palette, florals, and the scale of the setting.",
      cards: [
        {
          title: "Cathedral Whites",
          body: "A formal palette of ivory, alabaster and soft stone, built for a cathedral nave and a black-tie reception. White roses, lisianthus and tall tapers down a long aisle.",
          palette: ["#f6f1e7", "#e9e0cf", "#cbb994", "#8c7a5c", "#3a3328"],
          imageKey: "concept-1",
          rows: [
            { label: "Ceremony", value: "Cathedral · full nuptial mass" },
            { label: "Florals", value: "White rose · lisianthus · taper" },
            { label: "Best for", value: "Grand · formal · evening" },
          ],
        },
        {
          title: "Garden Chapel",
          body: "An open-air blessing in layered greenery, ivory peonies and unstained wood. Quietly modern, made for the couple who married at home and bless the union abroad.",
          palette: ["#eee7d6", "#b9c1a3", "#7c8a63", "#4d5a3c", "#2c3322"],
          imageKey: "concept-2",
          rows: [
            { label: "Ceremony", value: "Garden · blessing or vow renewal" },
            { label: "Florals", value: "Peony · olive · greenery" },
            { label: "Best for", value: "Daytime · villa · vineyard" },
          ],
        },
        {
          title: "Candlelit Estate",
          body: "A warm, intimate evening palette of amber, bronze and deep olive, lit almost entirely by candle. A small chapel or estate ceremony followed by a long-table dinner.",
          palette: ["#efe2c8", "#d8a85e", "#9c6b34", "#5a4226", "#2e2418"],
          imageKey: "concept-3",
          rows: [
            { label: "Ceremony", value: "Chapel · candlelit" },
            { label: "Florals", value: "Amber rose · bronze · olive" },
            { label: "Best for", value: "Intimate · estate · evening" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Cultural protocol",
      headline: "What we *hold sacred.*",
      deck: "Six principles we do not compromise on. They keep the sacrament with the church and the celebration with us.",
      items: [
        {
          title: "Parish requirements start early",
          body: "Canonical paperwork, baptismal and confirmation records, and the pre-marriage preparation the rite may require are begun a year ahead. We coordinate the file with the couple's parish; the priest's requirements, not ours, set the timeline.",
        },
        {
          title: "The church's rules govern the nave",
          body: "Music, photography and decoration inside the church are governed by that church's own rules, not by the planner. We confirm what is permitted with the parish before any vendor is briefed, and we brief the vendors to honour it.",
        },
        {
          title: "Orthodox crowning by the family's priest",
          body: "Where an Orthodox crowning is held, it is conducted by the family's own priest. We arrange the travel, the stefana and the liturgical needs, and we defer entirely to the celebrant on the form of the rite.",
        },
        {
          title: "Communion is planned with clergy",
          body: "Whether the Eucharist is celebrated, and how guests of other communions are received, is decided by the officiating priest and communicated to guests in advance — never improvised at the altar.",
        },
        {
          title: "Civil validity is arranged separately",
          body: "Where the religious ceremony does not register the marriage civilly, we arrange the civil act cleanly and in advance, and we are explicit with the couple about which act makes the marriage legal.",
        },
        {
          title: "Sacred objects belong to the sacristy",
          body: "The vessels, the altar linens and the sacred objects are handled by the sacristan or clergy, never by florists or vendors. We build the celebration around the sacristy, never into it.",
        },
      ],
    },
    planning: {
      eyebrow: "The planning",
      headline: "Two days, *hour by hour.*",
      deck: "The blueprint we use for a typical 150-guest Christian wedding abroad. The day flexes; the structure does not.",
      days: [
        {
          numeral: "I",
          dayLabel: "Day One",
          title: "Rehearsal & welcome",
          body: "The ceremony rehearsal at the church with the celebrant, the wedding party and the musicians, followed by a welcome dinner for arriving guests. The rehearsal is led by the priest; we hold the logistics around it.",
          events: [
            { time: "Morning", body: "Guest arrivals · airport transfers · hotel check-in" },
            { time: "16:00", body: "Ceremony rehearsal at the church · with the celebrant" },
            { time: "17:30", body: "Rehearsal walk-through with musicians and readers" },
            { time: "20:00", body: "Welcome dinner · terrace or trattoria" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Day Two",
          title: "The wedding day",
          body: "Preparation, the ceremony at the appointed hour, photographs, and the reception into the evening. We schedule the day around the church's hour, not the other way around.",
          events: [
            { time: "10:00", body: "Bride and groom preparation · separate suites" },
            { time: "14:30", body: "Guests seated at the church" },
            { time: "15:00", body: "Ceremony · nuptial mass or blessing · 60 minutes" },
            { time: "16:15", body: "Receiving line · photographs on the steps" },
            { time: "18:00", body: "Reception cocktails · golden hour" },
            { time: "19:30", body: "Seated dinner · toasts · first dance" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Day Three",
          title: "Farewell brunch",
          body: "A relaxed morning-after brunch hosted by the couple, usually outdoors, focused on goodbyes. The unofficial close of the wedding for most guests.",
          events: [
            { time: "11:00", body: "Farewell brunch · garden or poolside" },
            { time: "Afternoon", body: "Departures · airport transfers" },
            { time: "Evening", body: "Close-family dinner (optional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Destination compatibility",
      headline: "Where Christian weddings *work best.*",
      viewAllLabel: "View all destinations",
      viewAllHref: staticPath("en", "/destinations"),
      cards: [
        { rating: 5, name: "Amalfi Coast", sub: "Italy · May – October", imageKey: "compat-1", destinationHref: destinationPath("en", "amalfi") },
        { rating: 5, name: "Lake Como", sub: "Italy · June – September", imageKey: "compat-2", destinationHref: destinationPath("en", "lake-como") },
        { rating: 5, name: "Tuscany", sub: "Italy · May – October", imageKey: "compat-3", destinationHref: destinationPath("en", "tuscany") },
        { rating: 5, name: "Paris & Île-de-France", sub: "France · April – October", imageKey: "compat-4", destinationHref: destinationPath("en", "paris-ile-de-france") },
        { rating: 5, name: "Provence", sub: "France · May – September", imageKey: "compat-5", destinationHref: destinationPath("en", "provence") },
        { rating: 4, name: "Côte d'Azur", sub: "France · June – September", imageKey: "compat-6", destinationHref: destinationPath("en", "cote-dazur") },
        { rating: 4, name: "Punta Cana", sub: "Caribbean · year-round", imageKey: "compat-7", destinationHref: destinationPath("en", "punta-cana") },
        { rating: 4, name: "The Hamptons", sub: "United States · June – September", imageKey: "compat-8", destinationHref: destinationPath("en", "the-hamptons") },
      ],
    },
    guest: {
      eyebrow: "Guest management",
      headline: "The *practical* care of every guest.",
      deck: "The logistics layer most planners under-resource — including the etiquette of a church ceremony for guests of any faith or none.",
      cells: [
        {
          title: "Ceremony etiquette",
          body: "A short, warm guide for guests who have never attended a Catholic, Orthodox or Protestant service: when to stand and sit, what the order of service means, and — clearly and without pressure — who is invited to receive communion and who is welcomed simply to be present.",
        },
        {
          title: "Dress codes",
          body: "Per-event dress codes set with the couple and the church's expectations in mind — shoulders covered for the nave where the parish requests it, black-tie or garden formal for the reception. Printed in every welcome package and on the wedding site.",
        },
        {
          title: "Elders & mobility",
          body: "Dedicated seating near the front, step-free routes into historic churches arranged in advance, separate transport and an elders' liaison from the studio. Ground-floor rooms reserved for guests who need them.",
        },
        {
          title: "Travel & accommodations",
          body: "Group room blocks across three tiers, airport transfers coordinated across the arrival days, and welcome packages with the schedule, dress code per event, the church address and emergency contacts.",
        },
        {
          title: "Children & childcare",
          body: "A multilingual childcare team for the reception, children's menus at every meal, and a quiet room near the nave for families with infants during a long mass. Children are welcome at the ceremony; a calm exit is always available.",
        },
        {
          title: "Communications",
          body: "A guest WhatsApp group three weeks ahead, a wedding website with the daily schedule, dress codes and venue maps, and printed guides in each welcome package. The studio team is reachable throughout the weekend.",
        },
      ],
    },
    related: {
      eyebrow: "Continue reading",
      headline: "From the *journal.*",
      articles: [
        { category: "Christian · Italy", title: "Marrying in a Catholic Church Abroad: What the Parish Needs", body: "A working guide to the paperwork, the preparation and the timeline — diocese by diocese.", imageKey: "culture-related-1" },
        { category: "Tradition · Orthodox", title: "The Crowning, Explained", body: "On the stefana, the Dance of Isaiah, and arranging an Orthodox wedding far from home.", imageKey: "culture-related-2" },
        { category: "Planning · Christian", title: "Church First at Home, Blessing Abroad", body: "Why a growing number of our couples marry in their own parish, then bless the union under open sky.", imageKey: "culture-related-3" },
        { category: "Design · Christian", title: "A Field Guide to Cathedral Florals", body: "Scale, candlelight and the long aisle — designing for a historic nave.", imageKey: "culture-related-4" },
        { category: "Cost · Christian", title: "What a Destination Christian Wedding Actually Costs", body: "Frank 2026 budgets by guest count and setting.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Amalfi Coast", href: destinationPath("en", "amalfi") },
        { label: "Tuscany", href: destinationPath("en", "tuscany") },
        { label: "Provence", href: destinationPath("en", "provence") },
        { label: "Lake Como", href: destinationPath("en", "lake-como") },
      ],
      sidebarVenues: [
        { label: "Villa Cimbrone, Ravello" },
        { label: "Duomo di Firenze, Florence" },
        { label: "Château de Tourreau, Provence" },
        { label: "Villa del Balbianello, Lake Como" },
      ],
      sidebarCultures: [
        { label: "Interfaith weddings", href: culturePath("en", "interfaith-weddings") },
        { label: "Latin weddings", href: culturePath("en", "latin-weddings") },
        { label: "European weddings", href: culturePath("en", "european-weddings") },
        { label: "Jewish weddings", href: culturePath("en", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Questions, answered",
      headline: "Frequently *asked.*",
      items: [
        {
          question: "Can we have a Catholic wedding abroad — and what does the parish need?",
          answer: [
            "Yes, and we plan them regularly. The marriage is arranged through the couple's own parish at home, which prepares the file — baptismal and confirmation records, the pre-marriage preparation, and the canonical paperwork — and then transfers it to the church abroad with the diocese's permission.",
            "Requirements vary by diocese and by the parish that will marry you, so we begin this correspondence a year ahead. We coordinate the file; the priest sets what it must contain.",
          ],
        },
        {
          question: "Can we hold an Orthodox crowning at a resort or villa?",
          answer: [
            "The crowning is conducted by the family's own priest, and where it is held away from a consecrated church, it is the celebrant who decides whether and how that is possible.",
            "Our part is the arrangement around it — the priest's travel, the stefana, the liturgical needs and the setting. We defer entirely to the celebrant on the form of the rite.",
          ],
        },
        {
          question: "We want to marry in our church at home, then bless the union abroad. Does that work?",
          answer: [
            "Beautifully — it is one of the most graceful paths we plan. The sacrament is celebrated in the parish that matters to your family, and the destination day becomes a blessing or a renewal of vows, free of canonical venue rules.",
            "A blessing can be led by a priest, a deacon or a celebrant of your choosing, in a garden, on a terrace or under the vines, followed by the reception you imagined.",
          ],
        },
        {
          question: "Is the religious ceremony legally binding?",
          answer: [
            "It depends on the country. In some jurisdictions a priest may register the marriage civilly on the day; in many, the civil marriage is a separate act that must be completed at a registry office.",
            "Where the ceremony is not civilly binding, we arrange the civil formalities cleanly and in advance, and we are explicit about which act makes your marriage legal.",
          ],
        },
        {
          question: "What does a destination Christian wedding cost in 2026?",
          answer: [
            "A useful 2026 range for a 100–200 guest wedding across a ceremony and reception is USD $120,000 – $450,000, all-in, depending heavily on the setting and the season.",
            "We share full, transparent budgets in the first consultation, with line-item ranges by guest count.",
          ],
        },
        {
          question: "How do you handle mixed Catholic–Protestant families?",
          answer: [
            "With care and a clear order of service. The officiating priest or minister decides the form of the rite and how guests of the other communion are received; we make all of it clear to guests in advance so no one feels uncertain at the altar.",
            "Where both families wish to be represented in the ceremony, a co-officiated service can often be arranged with the agreement of both clergy.",
          ],
        },
        {
          question: "Can guests of other faiths, or none, attend comfortably?",
          answer: [
            "Always. We send every guest a short, warm guide to the ceremony — what to expect, when to stand and sit, and who is invited to receive communion and who is simply welcomed to be present.",
            "No guest is ever made to feel out of place; the studio team is on hand throughout to answer questions in person.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "A private conversation —",
      headline: "*Begin* your\nChristian wedding.",
      body: "Tell us the rite, the parish, the families, and a rough date. Grecia writes back, personally, within five working days.",
      ctaLabel: "Request a private consultation",
      ctaHref: staticPath("en", "/contact"),
    },
  },

  // ─────────────────────────────────────────────────────────────── ES ──
  es: {
    name: "Bodas Cristianas",
    cardEyebrow: "Cristiana",
    cardBlurb: "Católica, ortodoxa, protestante. Catedral o jardín.",
    cardMeta: "Descubrir",
    intro:
      "Ceremonias católicas, ortodoxas y protestantes, desde una misa en catedral hasta una bendición en el jardín.",
    hero: {
      eyebrow: "Las Tradiciones · N.º 05",
      scriptOverline: "Una boda de",
      headline: "*sacramento* cristiano.",
      deck: "Desde una misa nupcial completa bajo la nave de una catedral hasta una bendición en el jardín tras una boda discreta por la iglesia en casa. Coordinamos con la parroquia y el clero de la propia pareja, en cualquier lugar del mundo donde se celebre el día.",
      captionLeft: "Élodie y Thomas · Lago de Como",
      captionCenter: "Una bendición en el jardín · 2025",
      captionRight: "Lámina V",
    },
    factStrip: [
      { label: "Duración", value: "1 – 2 días", sub: "Ceremonia + recepción" },
      { label: "Invitados", value: "60 – 400", sub: "De íntima a grandiosa" },
      { label: "Antelación", value: "12 – 18 meses", sub: "Las parroquias reservan pronto" },
      { label: "Ritos celebrados", value: "Católico · Ortodoxo", sub: "Protestante" },
      { label: "Espacios de ceremonia", value: "Capilla · catedral", sub: "Jardín" },
      { label: "Idiomas", value: "ES · IT · FR", sub: "EN · latín a petición" },
    ],
    overview: {
      sideEyebrow: "La tradición",
      sideNote:
        "Un registro práctico de lo que sabemos sobre celebrar una boda cristiana en el extranjero — con la parroquia, no al margen de ella.",
      headline: "Un *sacramento,* muchos escenarios.",
      lede: "Una boda cristiana es, antes que ninguna otra cosa, un rito celebrado por una iglesia. Nuestro trabajo empieza no en las flores, sino en el clero — y en la diferencia entre la ceremonia que es sagrada y los papeles que la hacen legal.",
      bodyParagraphs: [
        "Hemos organizado bodas cristianas en tres comuniones — católica, ortodoxa y protestante — y lo primero que decimos a cada pareja es siempre lo mismo: la iglesia va primero. Meses antes de poner una sola mesa, ya estamos en correspondencia con la parroquia que os casará, ya sea una catedral en Florencia, una capilla sobre los acantilados de la Costa Amalfitana o el sacerdote que conoce a una familia desde hace tres generaciones y está dispuesto a viajar.",
        "La segunda conversación es la que las parejas rara vez esperan. En la mayoría de los países la ceremonia religiosa y el matrimonio civil son dos actos distintos. Algunas diócesis y jurisdicciones permiten que un sacerdote inscriba el matrimonio civilmente el mismo día; muchas no. Donde no se permite, organizamos las formalidades civiles con claridad y con antelación — en casa o en el destino — para que el día sea por entero el sacramento, y no una firma.",
        "Un número creciente de nuestras parejas se casa primero en su propia iglesia en casa y luego celebra una bendición en el jardín en el extranjero. Suele ser el camino más elegante: el sacramento se celebra en la parroquia que importa a la familia, y el día en el destino se convierte en una bendición, una renovación de votos y una recepción a cielo abierto — libre de las normas canónicas sobre el lugar.",
        "En todo ello, nuestro registro es el mismo que mantenemos para cada tradición: sostener el rito como lo sostendría el clero de la pareja. No resumimos una liturgia por cuestión de ritmo, no movemos la Eucaristía por una fotografía y nunca dejamos que un proveedor maneje lo que pertenece a la sacristía. La celebración es nuestra para diseñarla. El sacramento es de la iglesia para guardarlo.",
      ],
      pull: "«La celebración es nuestra para diseñarla. El sacramento es de la iglesia para guardarlo.»",
      signatureName: "Grecia",
      signatureRole: "Fundadora · Sobre sostener el rito con la parroquia",
    },
    ceremonyArc: {
      eyebrow: "Estructura de la ceremonia",
      headline: "La *misa* nupcial, parte por parte.",
      deck: "Una misa nupcial católica representativa, con notas para las variantes ortodoxa y protestante. El orden y su contenido los fija el clero oficiante y la parroquia de la pareja — este es nuestro esbozo de trabajo, no una norma fija.",
      steps: [
        {
          numeral: "I",
          name: "Procesión y acogida",
          sub: "Rito de entrada",
          when: "Ceremonia · 00:00",
          body: "El cortejo nupcial y la novia avanzan hacia el altar. El sacerdote acoge a la asamblea y abre el rito. En la práctica ortodoxa la acogida puede comenzar en el nártex con los Esponsales y el intercambio de anillos.",
        },
        {
          numeral: "II",
          name: "Liturgia de la Palabra",
          sub: "Escritura y homilía",
          when: "Ceremonia · 00:10",
          body: "Lecturas elegidas por la pareja, un salmo, el Evangelio y la homilía. Las ceremonias protestantes suelen centrarse en esta parte, donde el sermón y las lecturas llevan el peso a falta de misa.",
        },
        {
          numeral: "III",
          name: "Consentimiento y anillos",
          sub: "Los votos",
          when: "Ceremonia · 00:25",
          body: "La pareja declara su consentimiento ante el sacerdote y la asamblea, e intercambia los anillos. Es el corazón del rito matrimonial en las tres comuniones, aunque las palabras y la forma difieran según la iglesia.",
        },
        {
          numeral: "IV",
          name: "La Coronación",
          sub: "Variante ortodoxa",
          when: "Ceremonia · 00:30",
          body: "En una boda ortodoxa, la pareja es coronada con las stefana y conducida en torno al analogion en la Danza de Isaías. Este paso reemplaza el intercambio occidental de votos como centro visible del rito, y lo dirige el propio sacerdote de la familia.",
        },
        {
          numeral: "V",
          name: "Bendición nupcial y comunión",
          sub: "La Eucaristía",
          when: "Ceremonia · 00:40",
          body: "En una misa católica el sacerdote pronuncia la bendición nupcial y sigue la Liturgia de la Eucaristía, con la comunión. Si los invitados de otras comuniones reciben la comunión y cómo lo decide el sacerdote oficiante, y se aclara a la asamblea de antemano.",
        },
        {
          numeral: "VI",
          name: "Procesión de salida",
          sub: "La salida",
          when: "Ceremonia · 01:00",
          body: "Los recién casados conducen a la asamblea fuera de la iglesia al son de las campanas o del órgano. Fila de felicitaciones, fotografías en la escalinata y traslado a la recepción.",
        },
        {
          numeral: "VII",
          name: "Recepción",
          sub: "Cena de celebración",
          when: "Por la tarde",
          body: "Cena sentada, los brindis, el primer baile y el corte de la tarta. El registro de la recepción lo marca la pareja — cena formal en una finca o mesa larga entre las viñas.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Conceptos de diseño",
      headline: "Nave, jardín, *luz de velas.*",
      deck: "Tres direcciones de trabajo que hemos construido más de una vez. Cada una se adapta a la iglesia y a la estación — paleta, flores y la escala del escenario.",
      cards: [
        {
          title: "Blancos de Catedral",
          body: "Una paleta formal de marfil, alabastro y piedra suave, pensada para la nave de una catedral y una recepción de etiqueta. Rosas blancas, lisianthus y cirios altos a lo largo de un pasillo largo.",
          palette: ["#f6f1e7", "#e9e0cf", "#cbb994", "#8c7a5c", "#3a3328"],
          imageKey: "concept-1",
          rows: [
            { label: "Ceremonia", value: "Catedral · misa nupcial completa" },
            { label: "Flores", value: "Rosa blanca · lisianthus · cirio" },
            { label: "Ideal para", value: "Grandiosa · formal · noche" },
          ],
        },
        {
          title: "Capilla de Jardín",
          body: "Una bendición al aire libre entre verdor en capas, peonías marfil y madera sin tratar. Discretamente moderna, para la pareja que se casó en casa y bendice la unión en el extranjero.",
          palette: ["#eee7d6", "#b9c1a3", "#7c8a63", "#4d5a3c", "#2c3322"],
          imageKey: "concept-2",
          rows: [
            { label: "Ceremonia", value: "Jardín · bendición o renovación" },
            { label: "Flores", value: "Peonía · olivo · verdor" },
            { label: "Ideal para", value: "Día · villa · viñedo" },
          ],
        },
        {
          title: "Finca a la Luz de Velas",
          body: "Una paleta cálida e íntima de ámbar, bronce y verde oliva oscuro, iluminada casi por entero a velas. Una ceremonia en una pequeña capilla o finca seguida de una cena en mesa larga.",
          palette: ["#efe2c8", "#d8a85e", "#9c6b34", "#5a4226", "#2e2418"],
          imageKey: "concept-3",
          rows: [
            { label: "Ceremonia", value: "Capilla · a la luz de velas" },
            { label: "Flores", value: "Rosa ámbar · bronce · olivo" },
            { label: "Ideal para", value: "Íntima · finca · noche" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocolo cultural",
      headline: "Lo que *consideramos sagrado.*",
      deck: "Seis principios que no negociamos. Mantienen el sacramento con la iglesia y la celebración con nosotros.",
      items: [
        {
          title: "Los requisitos de la parroquia empiezan pronto",
          body: "Los papeles canónicos, las partidas de bautismo y confirmación y la preparación prematrimonial que el rito pueda exigir se inician con un año de antelación. Coordinamos el expediente con la parroquia de la pareja; los requisitos del sacerdote, no los nuestros, marcan el calendario.",
        },
        {
          title: "Las normas de la iglesia rigen la nave",
          body: "La música, la fotografía y la decoración dentro de la iglesia se rigen por las normas de esa iglesia, no por el organizador. Confirmamos lo permitido con la parroquia antes de informar a cualquier proveedor, y los instruimos para respetarlo.",
        },
        {
          title: "La coronación ortodoxa, por el sacerdote de la familia",
          body: "Cuando se celebra una coronación ortodoxa, la conduce el propio sacerdote de la familia. Organizamos el viaje, las stefana y las necesidades litúrgicas, y nos remitimos por completo al celebrante en cuanto a la forma del rito.",
        },
        {
          title: "La comunión se planifica con el clero",
          body: "Si se celebra la Eucaristía, y cómo reciben la comunión los invitados de otras comuniones, lo decide el sacerdote oficiante y se comunica a los invitados de antemano — nunca se improvisa en el altar.",
        },
        {
          title: "La validez civil se gestiona por separado",
          body: "Cuando la ceremonia religiosa no inscribe el matrimonio civilmente, gestionamos el acto civil con claridad y con antelación, y somos explícitos con la pareja sobre qué acto hace legal el matrimonio.",
        },
        {
          title: "Los objetos sagrados pertenecen a la sacristía",
          body: "Los cálices, los lienzos del altar y los objetos sagrados los maneja el sacristán o el clero, nunca los floristas o proveedores. Construimos la celebración en torno a la sacristía, nunca dentro de ella.",
        },
      ],
    },
    planning: {
      eyebrow: "La planificación",
      headline: "Dos días, *hora por hora.*",
      deck: "El plano que usamos para una boda cristiana típica de 150 invitados en el extranjero. El día se adapta; la estructura no.",
      days: [
        {
          numeral: "I",
          dayLabel: "Día Uno",
          title: "Ensayo y bienvenida",
          body: "El ensayo de la ceremonia en la iglesia con el celebrante, el cortejo nupcial y los músicos, seguido de una cena de bienvenida para los invitados que llegan. El ensayo lo dirige el sacerdote; nosotros sostenemos la logística alrededor.",
          events: [
            { time: "Mañana", body: "Llegada de invitados · traslados · check-in en el hotel" },
            { time: "16:00", body: "Ensayo de la ceremonia en la iglesia · con el celebrante" },
            { time: "17:30", body: "Repaso con músicos y lectores" },
            { time: "20:00", body: "Cena de bienvenida · terraza o trattoria" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Día Dos",
          title: "El día de la boda",
          body: "Preparativos, la ceremonia a la hora señalada, las fotografías y la recepción hasta la noche. Planificamos el día en torno a la hora de la iglesia, y no al revés.",
          events: [
            { time: "10:00", body: "Preparativos de los novios · suites separadas" },
            { time: "14:30", body: "Invitados sentados en la iglesia" },
            { time: "15:00", body: "Ceremonia · misa nupcial o bendición · 60 minutos" },
            { time: "16:15", body: "Fila de felicitaciones · fotografías en la escalinata" },
            { time: "18:00", body: "Cóctel de recepción · hora dorada" },
            { time: "19:30", body: "Cena sentada · brindis · primer baile" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Día Tres",
          title: "Brunch de despedida",
          body: "Un brunch relajado del día después ofrecido por la pareja, normalmente al aire libre, centrado en las despedidas. El cierre no oficial de la boda para la mayoría de los invitados.",
          events: [
            { time: "11:00", body: "Brunch de despedida · jardín o junto a la piscina" },
            { time: "Tarde", body: "Salidas · traslados al aeropuerto" },
            { time: "Noche", body: "Cena de familia cercana (opcional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilidad de destinos",
      headline: "Dónde *funcionan mejor* las bodas cristianas.",
      viewAllLabel: "Ver todos los destinos",
      viewAllHref: staticPath("es", "/destinations"),
      cards: [
        { rating: 5, name: "Costa Amalfitana", sub: "Italia · mayo – octubre", imageKey: "compat-1", destinationHref: destinationPath("es", "amalfi") },
        { rating: 5, name: "Lago de Como", sub: "Italia · junio – septiembre", imageKey: "compat-2", destinationHref: destinationPath("es", "lake-como") },
        { rating: 5, name: "Toscana", sub: "Italia · mayo – octubre", imageKey: "compat-3", destinationHref: destinationPath("es", "tuscany") },
        { rating: 5, name: "París e Isla de Francia", sub: "Francia · abril – octubre", imageKey: "compat-4", destinationHref: destinationPath("es", "paris-ile-de-france") },
        { rating: 5, name: "Provenza", sub: "Francia · mayo – septiembre", imageKey: "compat-5", destinationHref: destinationPath("es", "provence") },
        { rating: 4, name: "Costa Azul", sub: "Francia · junio – septiembre", imageKey: "compat-6", destinationHref: destinationPath("es", "cote-dazur") },
        { rating: 4, name: "Punta Cana", sub: "Caribe · todo el año", imageKey: "compat-7", destinationHref: destinationPath("es", "punta-cana") },
        { rating: 4, name: "Los Hamptons", sub: "Estados Unidos · junio – septiembre", imageKey: "compat-8", destinationHref: destinationPath("es", "the-hamptons") },
      ],
    },
    guest: {
      eyebrow: "Gestión de invitados",
      headline: "El cuidado *práctico* de cada invitado.",
      deck: "La capa logística que la mayoría de los organizadores infravalora — incluida la etiqueta de una ceremonia en la iglesia para invitados de cualquier fe o de ninguna.",
      cells: [
        {
          title: "Etiqueta de la ceremonia",
          body: "Una guía breve y cálida para los invitados que nunca han asistido a un oficio católico, ortodoxo o protestante: cuándo ponerse de pie y sentarse, qué significa el orden del oficio y — con claridad y sin presión — quién está invitado a comulgar y quién es bienvenido simplemente a estar presente.",
        },
        {
          title: "Códigos de vestimenta",
          body: "Códigos de vestimenta por evento fijados con la pareja y las expectativas de la iglesia en mente — hombros cubiertos en la nave cuando la parroquia lo pida, etiqueta o formal de jardín para la recepción. Impresos en cada paquete de bienvenida y en el sitio de la boda.",
        },
        {
          title: "Mayores y movilidad",
          body: "Asientos reservados cerca del altar, accesos sin escalones a las iglesias históricas dispuestos de antemano, transporte aparte y un enlace para mayores del atelier. Habitaciones en planta baja reservadas para quienes las necesiten.",
        },
        {
          title: "Viaje y alojamiento",
          body: "Bloques de habitaciones en tres categorías, traslados coordinados durante los días de llegada y paquetes de bienvenida con el calendario, el código de vestimenta por evento, la dirección de la iglesia y los contactos de emergencia.",
        },
        {
          title: "Niños y cuidado infantil",
          body: "Un equipo multilingüe de cuidado infantil para la recepción, menús infantiles en cada comida y una sala tranquila junto a la nave para las familias con bebés durante una misa larga. Los niños son bienvenidos en la ceremonia; siempre hay una salida discreta disponible.",
        },
        {
          title: "Comunicaciones",
          body: "Un grupo de WhatsApp para los invitados tres semanas antes, un sitio web de la boda con el calendario diario, los códigos de vestimenta y los mapas de los lugares, y guías impresas en cada paquete de bienvenida. El equipo del atelier está disponible todo el fin de semana.",
        },
      ],
    },
    related: {
      eyebrow: "Seguir leyendo",
      headline: "Del *diario.*",
      articles: [
        { category: "Cristiana · Italia", title: "Casarse por la Iglesia católica en el extranjero: qué necesita la parroquia", body: "Una guía práctica sobre los papeles, la preparación y los plazos — diócesis por diócesis.", imageKey: "culture-related-1" },
        { category: "Tradición · Ortodoxa", title: "La Coronación, explicada", body: "Sobre las stefana, la Danza de Isaías y organizar una boda ortodoxa lejos de casa.", imageKey: "culture-related-2" },
        { category: "Planificación · Cristiana", title: "Iglesia primero en casa, bendición en el extranjero", body: "Por qué un número creciente de nuestras parejas se casa en su parroquia y luego bendice la unión a cielo abierto.", imageKey: "culture-related-3" },
        { category: "Diseño · Cristiana", title: "Guía de flores para catedral", body: "Escala, luz de velas y el pasillo largo — diseñar para una nave histórica.", imageKey: "culture-related-4" },
        { category: "Coste · Cristiana", title: "Lo que cuesta de verdad una boda cristiana en destino", body: "Presupuestos francos de 2026 por número de invitados y escenario.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Costa Amalfitana", href: destinationPath("es", "amalfi") },
        { label: "Toscana", href: destinationPath("es", "tuscany") },
        { label: "Provenza", href: destinationPath("es", "provence") },
        { label: "Lago de Como", href: destinationPath("es", "lake-como") },
      ],
      sidebarVenues: [
        { label: "Villa Cimbrone, Ravello" },
        { label: "Duomo de Florencia" },
        { label: "Château de Tourreau, Provenza" },
        { label: "Villa del Balbianello, Lago de Como" },
      ],
      sidebarCultures: [
        { label: "Bodas interreligiosas", href: culturePath("es", "interfaith-weddings") },
        { label: "Bodas latinas", href: culturePath("es", "latin-weddings") },
        { label: "Bodas europeas", href: culturePath("es", "european-weddings") },
        { label: "Bodas judías", href: culturePath("es", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Preguntas, respondidas",
      headline: "Preguntas *frecuentes.*",
      items: [
        {
          question: "¿Podemos casarnos por la Iglesia católica en el extranjero — y qué necesita la parroquia?",
          answer: [
            "Sí, y las organizamos con regularidad. El matrimonio se tramita a través de la propia parroquia de la pareja en casa, que prepara el expediente — partidas de bautismo y confirmación, la preparación prematrimonial y los papeles canónicos — y luego lo transfiere a la iglesia del extranjero con el permiso de la diócesis.",
            "Los requisitos varían según la diócesis y la parroquia que os case, por lo que iniciamos esta correspondencia con un año de antelación. Coordinamos el expediente; el sacerdote fija lo que debe contener.",
          ],
        },
        {
          question: "¿Podemos celebrar una coronación ortodoxa en un resort o una villa?",
          answer: [
            "La coronación la conduce el propio sacerdote de la familia, y cuando se celebra fuera de una iglesia consagrada, es el celebrante quien decide si es posible y cómo.",
            "Nuestra parte es lo que la rodea — el viaje del sacerdote, las stefana, las necesidades litúrgicas y el escenario. Nos remitimos por completo al celebrante en cuanto a la forma del rito.",
          ],
        },
        {
          question: "Queremos casarnos en nuestra iglesia en casa y luego bendecir la unión en el extranjero. ¿Es posible?",
          answer: [
            "Maravillosamente — es uno de los caminos más elegantes que planificamos. El sacramento se celebra en la parroquia que importa a vuestra familia, y el día en el destino se convierte en una bendición o renovación de votos, libre de las normas canónicas sobre el lugar.",
            "Una bendición puede dirigirla un sacerdote, un diácono o un celebrante de vuestra elección, en un jardín, en una terraza o entre las viñas, seguida de la recepción que imaginabais.",
          ],
        },
        {
          question: "¿La ceremonia religiosa tiene validez legal?",
          answer: [
            "Depende del país. En algunas jurisdicciones un sacerdote puede inscribir el matrimonio civilmente el mismo día; en muchas, el matrimonio civil es un acto aparte que debe completarse en un registro civil.",
            "Cuando la ceremonia no es vinculante civilmente, gestionamos las formalidades civiles con claridad y con antelación, y somos explícitos sobre qué acto hace legal vuestro matrimonio.",
          ],
        },
        {
          question: "¿Cuánto cuesta una boda cristiana en destino en 2026?",
          answer: [
            "Un rango útil para 2026, para una boda de 100 a 200 invitados con ceremonia y recepción, es de 120 000 a 450 000 USD, todo incluido, dependiendo mucho del escenario y la temporada.",
            "Compartimos presupuestos completos y transparentes en la primera consulta, con rangos por partida según el número de invitados.",
          ],
        },
        {
          question: "¿Cómo gestionáis las familias mixtas católico-protestantes?",
          answer: [
            "Con cuidado y un orden del oficio claro. El sacerdote o ministro oficiante decide la forma del rito y cómo se recibe a los invitados de la otra comunión; lo aclaramos todo a los invitados de antemano para que nadie se sienta inseguro ante el altar.",
            "Cuando ambas familias desean estar representadas en la ceremonia, a menudo puede organizarse un oficio cooficiado con el acuerdo de ambos clérigos.",
          ],
        },
        {
          question: "¿Pueden asistir cómodamente invitados de otras religiones, o de ninguna?",
          answer: [
            "Siempre. Enviamos a cada invitado una guía breve y cálida de la ceremonia — qué esperar, cuándo ponerse de pie y sentarse, y quién está invitado a comulgar y quién es simplemente bienvenido a estar presente.",
            "Ningún invitado se siente jamás fuera de lugar; el equipo del atelier está a mano durante todo el fin de semana para responder preguntas en persona.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Una conversación privada —",
      headline: "*Comienza* tu\nboda cristiana.",
      body: "Cuéntanos el rito, la parroquia, las familias y una fecha aproximada. Grecia responde personalmente en un plazo de cinco días laborables.",
      ctaLabel: "Solicitar una consulta privada",
      ctaHref: staticPath("es", "/contact"),
    },
  },

  // ─────────────────────────────────────────────────────────────── FR ──
  fr: {
    name: "Mariages Chrétiens",
    cardEyebrow: "Chrétien",
    cardBlurb: "Catholique, orthodoxe, protestant. Cathédrale ou jardin.",
    cardMeta: "Découvrir",
    intro:
      "Cérémonies catholiques, orthodoxes et protestantes — d'une messe en cathédrale à une bénédiction au jardin.",
    hero: {
      eyebrow: "Les Traditions · No 05",
      scriptOverline: "Un mariage de",
      headline: "*sacrement* chrétien.",
      deck: "D'une messe nuptiale complète sous la nef d'une cathédrale à une bénédiction au jardin après un mariage discret à l'église, chez soi. Nous coordonnons avec la paroisse et le clergé du couple, où que se tienne le jour dans le monde.",
      captionLeft: "Élodie & Thomas · Lac de Côme",
      captionCenter: "Une bénédiction au jardin · 2025",
      captionRight: "Planche V",
    },
    factStrip: [
      { label: "Durée", value: "1 – 2 jours", sub: "Cérémonie + réception" },
      { label: "Invités", value: "60 – 400", sub: "De l'intime au grand" },
      { label: "Anticipation", value: "12 – 18 mois", sub: "Les paroisses réservent tôt" },
      { label: "Rites tenus", value: "Catholique · Orthodoxe", sub: "Protestant" },
      { label: "Lieux de cérémonie", value: "Chapelle · cathédrale", sub: "Jardin" },
      { label: "Langues", value: "FR · IT · EN", sub: "ES · latin sur demande" },
    ],
    overview: {
      sideEyebrow: "La tradition",
      sideNote:
        "Un registre de travail de ce que nous savons sur la tenue d'un mariage chrétien à l'étranger — avec la paroisse, non en marge d'elle.",
      headline: "Un *sacrement,* maints décors.",
      lede: "Un mariage chrétien est, avant toute chose, un rite tenu par une église. Notre travail commence non par les fleurs mais par le clergé — et par la différence entre la cérémonie qui est sacrée et les papiers qui la rendent légale.",
      bodyParagraphs: [
        "Nous avons organisé des mariages chrétiens dans trois communions — catholique, orthodoxe et protestante — et la première chose que nous disons à chaque couple est toujours la même : l'église passe avant tout. Des mois avant qu'une seule table ne soit dressée, nous sommes en correspondance avec la paroisse qui vous mariera, qu'il s'agisse d'une cathédrale à Florence, d'une chapelle au sommet d'une falaise au-dessus de la côte amalfitaine, ou du prêtre qui connaît une famille depuis trois générations et accepte de voyager.",
        "La deuxième conversation est celle que les couples attendent rarement. Dans la plupart des pays, la cérémonie religieuse et le mariage civil sont deux actes distincts. Certains diocèses et juridictions permettent à un prêtre d'enregistrer le mariage civilement le jour même ; beaucoup ne le permettent pas. Là où ce n'est pas le cas, nous organisons les formalités civiles avec clarté et à l'avance — chez soi ou à destination — pour que le jour soit tout entier consacré au sacrement, et non à une signature.",
        "Un nombre croissant de nos couples se marient d'abord dans leur propre église, chez eux, puis tiennent une bénédiction au jardin à l'étranger. C'est souvent la voie la plus gracieuse : le sacrement est célébré dans la paroisse qui compte pour la famille, et le jour à destination devient une bénédiction, un renouvellement des vœux et une réception à ciel ouvert — affranchie des règles canoniques sur le lieu.",
        "À travers tout cela, notre registre est le même que pour chaque tradition : tenir le rite comme le tiendrait le clergé du couple. Nous ne résumons pas une liturgie pour le rythme, nous ne déplaçons pas l'Eucharistie pour une photographie, et nous ne laissons jamais un prestataire toucher ce qui appartient à la sacristie. La célébration nous revient à concevoir. Le sacrement revient à l'église à garder.",
      ],
      pull: "«La célébration nous revient à concevoir. Le sacrement revient à l'église à garder.»",
      signatureName: "Grecia",
      signatureRole: "Fondatrice · Sur la tenue du rite avec la paroisse",
    },
    ceremonyArc: {
      eyebrow: "Structure de la cérémonie",
      headline: "La *messe* nuptiale, partie par partie.",
      deck: "Une messe nuptiale catholique représentative, avec des notes pour les variantes orthodoxe et protestante. L'ordre et son contenu sont fixés par le clergé officiant et la paroisse du couple — c'est notre esquisse de travail, non une règle fixe.",
      steps: [
        {
          numeral: "I",
          name: "Procession et accueil",
          sub: "Rite d'entrée",
          when: "Cérémonie · 00:00",
          body: "Le cortège et la mariée s'avancent vers le chœur. Le prêtre accueille l'assemblée et ouvre le rite. Dans la pratique orthodoxe, l'accueil peut commencer au narthex avec les Fiançailles et l'échange des anneaux.",
        },
        {
          numeral: "II",
          name: "Liturgie de la Parole",
          sub: "Écriture et homélie",
          when: "Cérémonie · 00:10",
          body: "Lectures choisies par le couple, un psaume, l'Évangile et l'homélie. Les cérémonies protestantes centrent souvent cette partie, le sermon et les lectures portant le poids en l'absence de messe.",
        },
        {
          numeral: "III",
          name: "Consentement et anneaux",
          sub: "Les vœux",
          when: "Cérémonie · 00:25",
          body: "Le couple déclare son consentement devant le prêtre et l'assemblée, et échange les anneaux. C'est le cœur du rite du mariage dans les trois communions, même si les mots et la forme diffèrent selon l'église.",
        },
        {
          numeral: "IV",
          name: "Le Couronnement",
          sub: "Variante orthodoxe",
          when: "Cérémonie · 00:30",
          body: "Lors d'un mariage orthodoxe, le couple est couronné des stéfana et conduit autour de l'analogion dans la Danse d'Isaïe. Cette étape remplace l'échange occidental des vœux comme centre visible du rite, et est conduite par le propre prêtre de la famille.",
        },
        {
          numeral: "V",
          name: "Bénédiction nuptiale et communion",
          sub: "L'Eucharistie",
          when: "Cérémonie · 00:40",
          body: "Dans une messe catholique, le prêtre prononce la bénédiction nuptiale et la Liturgie de l'Eucharistie suit, avec la communion. La question de savoir si les invités des autres communions communient, et comment, est décidée par le prêtre officiant et précisée à l'assemblée à l'avance.",
        },
        {
          numeral: "VI",
          name: "Sortie",
          sub: "Le départ",
          when: "Cérémonie · 01:00",
          body: "Les jeunes mariés conduisent l'assemblée hors de l'église au son des cloches ou de l'orgue. Haie d'honneur, photographies sur le parvis, et transfert vers la réception.",
        },
        {
          numeral: "VII",
          name: "Réception",
          sub: "Dîner de célébration",
          when: "En soirée",
          body: "Dîner assis, les toasts, la première danse et la découpe du gâteau. Le registre de la réception revient au couple — dîner formel dans un domaine ou table longue sous les vignes.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Concepts de design",
      headline: "Nef, jardin, *lumière de bougies.*",
      deck: "Trois directions de travail que nous avons construites plus d'une fois. Chacune s'adapte à l'église et à la saison — palette, fleurs et échelle du décor.",
      cards: [
        {
          title: "Blancs de Cathédrale",
          body: "Une palette formelle d'ivoire, d'albâtre et de pierre douce, pensée pour la nef d'une cathédrale et une réception en tenue de soirée. Roses blanches, lisianthus et cierges hauts le long d'une longue allée.",
          palette: ["#f6f1e7", "#e9e0cf", "#cbb994", "#8c7a5c", "#3a3328"],
          imageKey: "concept-1",
          rows: [
            { label: "Cérémonie", value: "Cathédrale · messe nuptiale complète" },
            { label: "Fleurs", value: "Rose blanche · lisianthus · cierge" },
            { label: "Idéal pour", value: "Grand · formel · soirée" },
          ],
        },
        {
          title: "Chapelle de Jardin",
          body: "Une bénédiction en plein air dans une verdure en couches, des pivoines ivoire et du bois brut. Discrètement moderne, pour le couple qui s'est marié chez lui et bénit l'union à l'étranger.",
          palette: ["#eee7d6", "#b9c1a3", "#7c8a63", "#4d5a3c", "#2c3322"],
          imageKey: "concept-2",
          rows: [
            { label: "Cérémonie", value: "Jardin · bénédiction ou renouvellement" },
            { label: "Fleurs", value: "Pivoine · olivier · verdure" },
            { label: "Idéal pour", value: "Jour · villa · vignoble" },
          ],
        },
        {
          title: "Domaine aux Bougies",
          body: "Une palette chaude et intime d'ambre, de bronze et de vert olive profond, éclairée presque entièrement à la bougie. Une cérémonie dans une petite chapelle ou un domaine, suivie d'un dîner en table longue.",
          palette: ["#efe2c8", "#d8a85e", "#9c6b34", "#5a4226", "#2e2418"],
          imageKey: "concept-3",
          rows: [
            { label: "Cérémonie", value: "Chapelle · aux bougies" },
            { label: "Fleurs", value: "Rose ambre · bronze · olivier" },
            { label: "Idéal pour", value: "Intime · domaine · soirée" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocole culturel",
      headline: "Ce que nous *tenons pour sacré.*",
      deck: "Six principes sur lesquels nous ne transigeons pas. Ils gardent le sacrement à l'église et la célébration avec nous.",
      items: [
        {
          title: "Les exigences de la paroisse commencent tôt",
          body: "Les papiers canoniques, les actes de baptême et de confirmation et la préparation au mariage que le rite peut exiger sont entamés un an à l'avance. Nous coordonnons le dossier avec la paroisse du couple ; ce sont les exigences du prêtre, non les nôtres, qui fixent le calendrier.",
        },
        {
          title: "Les règles de l'église régissent la nef",
          body: "La musique, la photographie et la décoration à l'intérieur de l'église sont régies par les règles de cette église, non par l'organisateur. Nous confirmons ce qui est permis avec la paroisse avant tout briefing d'un prestataire, et nous les instruisons de le respecter.",
        },
        {
          title: "Le couronnement orthodoxe, par le prêtre de la famille",
          body: "Lorsqu'un couronnement orthodoxe a lieu, il est conduit par le propre prêtre de la famille. Nous organisons le voyage, les stéfana et les besoins liturgiques, et nous nous en remettons entièrement au célébrant quant à la forme du rite.",
        },
        {
          title: "La communion se prépare avec le clergé",
          body: "La question de savoir si l'Eucharistie est célébrée, et comment les invités des autres communions communient, est décidée par le prêtre officiant et communiquée aux invités à l'avance — jamais improvisée à l'autel.",
        },
        {
          title: "La validité civile s'organise séparément",
          body: "Lorsque la cérémonie religieuse n'enregistre pas le mariage civilement, nous organisons l'acte civil avec clarté et à l'avance, et nous sommes explicites avec le couple sur l'acte qui rend le mariage légal.",
        },
        {
          title: "Les objets sacrés appartiennent à la sacristie",
          body: "Les vases sacrés, les linges d'autel et les objets sacrés sont manipulés par le sacristain ou le clergé, jamais par les fleuristes ou les prestataires. Nous construisons la célébration autour de la sacristie, jamais en son sein.",
        },
      ],
    },
    planning: {
      eyebrow: "La planification",
      headline: "Deux jours, *heure par heure.*",
      deck: "Le plan que nous utilisons pour un mariage chrétien type de 150 invités à l'étranger. Le jour s'adapte ; la structure, non.",
      days: [
        {
          numeral: "I",
          dayLabel: "Jour Un",
          title: "Répétition et accueil",
          body: "La répétition de la cérémonie à l'église avec le célébrant, le cortège et les musiciens, suivie d'un dîner d'accueil pour les invités qui arrivent. La répétition est dirigée par le prêtre ; nous en tenons la logistique.",
          events: [
            { time: "Matin", body: "Arrivée des invités · transferts · enregistrement à l'hôtel" },
            { time: "16:00", body: "Répétition de la cérémonie à l'église · avec le célébrant" },
            { time: "17:30", body: "Filage avec les musiciens et les lecteurs" },
            { time: "20:00", body: "Dîner d'accueil · terrasse ou trattoria" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Jour Deux",
          title: "Le jour du mariage",
          body: "Les préparatifs, la cérémonie à l'heure dite, les photographies et la réception jusqu'au soir. Nous planifions la journée autour de l'heure de l'église, et non l'inverse.",
          events: [
            { time: "10:00", body: "Préparatifs des mariés · suites séparées" },
            { time: "14:30", body: "Invités installés à l'église" },
            { time: "15:00", body: "Cérémonie · messe nuptiale ou bénédiction · 60 minutes" },
            { time: "16:15", body: "Haie d'honneur · photographies sur le parvis" },
            { time: "18:00", body: "Cocktail de réception · heure dorée" },
            { time: "19:30", body: "Dîner assis · toasts · première danse" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Jour Trois",
          title: "Brunch d'adieu",
          body: "Un brunch détendu du lendemain offert par le couple, généralement en plein air, axé sur les au revoir. La clôture officieuse du mariage pour la plupart des invités.",
          events: [
            { time: "11:00", body: "Brunch d'adieu · jardin ou bord de piscine" },
            { time: "Après-midi", body: "Départs · transferts vers l'aéroport" },
            { time: "Soir", body: "Dîner en famille proche (facultatif)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilité des destinations",
      headline: "Où les mariages chrétiens *réussissent le mieux.*",
      viewAllLabel: "Voir toutes les destinations",
      viewAllHref: staticPath("fr", "/destinations"),
      cards: [
        { rating: 5, name: "Côte amalfitaine", sub: "Italie · mai – octobre", imageKey: "compat-1", destinationHref: destinationPath("fr", "amalfi") },
        { rating: 5, name: "Lac de Côme", sub: "Italie · juin – septembre", imageKey: "compat-2", destinationHref: destinationPath("fr", "lake-como") },
        { rating: 5, name: "Toscane", sub: "Italie · mai – octobre", imageKey: "compat-3", destinationHref: destinationPath("fr", "tuscany") },
        { rating: 5, name: "Paris & Île-de-France", sub: "France · avril – octobre", imageKey: "compat-4", destinationHref: destinationPath("fr", "paris-ile-de-france") },
        { rating: 5, name: "Provence", sub: "France · mai – septembre", imageKey: "compat-5", destinationHref: destinationPath("fr", "provence") },
        { rating: 4, name: "Côte d'Azur", sub: "France · juin – septembre", imageKey: "compat-6", destinationHref: destinationPath("fr", "cote-dazur") },
        { rating: 4, name: "Punta Cana", sub: "Caraïbes · toute l'année", imageKey: "compat-7", destinationHref: destinationPath("fr", "punta-cana") },
        { rating: 4, name: "Les Hamptons", sub: "États-Unis · juin – septembre", imageKey: "compat-8", destinationHref: destinationPath("fr", "the-hamptons") },
      ],
    },
    guest: {
      eyebrow: "Gestion des invités",
      headline: "Le soin *pratique* de chaque invité.",
      deck: "La couche logistique que la plupart des organisateurs sous-dotent — y compris l'étiquette d'une cérémonie à l'église pour des invités de toute foi ou d'aucune.",
      cells: [
        {
          title: "Étiquette de la cérémonie",
          body: "Un guide bref et chaleureux pour les invités qui n'ont jamais assisté à un office catholique, orthodoxe ou protestant : quand se lever et s'asseoir, ce que signifie l'ordre de l'office et — clairement et sans pression — qui est invité à communier et qui est simplement bienvenu à être présent.",
        },
        {
          title: "Codes vestimentaires",
          body: "Des codes vestimentaires par événement fixés avec le couple et les attentes de l'église à l'esprit — épaules couvertes dans la nef lorsque la paroisse le demande, tenue de soirée ou formelle de jardin pour la réception. Imprimés dans chaque coffret d'accueil et sur le site du mariage.",
        },
        {
          title: "Aînés et mobilité",
          body: "Des places réservées près du chœur, des accès sans marches aux églises historiques arrangés à l'avance, un transport à part et un référent aînés de l'atelier. Chambres en rez-de-chaussée réservées à ceux qui en ont besoin.",
        },
        {
          title: "Voyage et hébergement",
          body: "Des blocs de chambres sur trois niveaux, des transferts coordonnés sur les jours d'arrivée et des coffrets d'accueil avec le programme, le code vestimentaire par événement, l'adresse de l'église et les contacts d'urgence.",
        },
        {
          title: "Enfants et garde",
          body: "Une équipe de garde multilingue pour la réception, des menus enfants à chaque repas et une salle calme près de la nef pour les familles avec nourrissons pendant une longue messe. Les enfants sont bienvenus à la cérémonie ; une sortie discrète est toujours possible.",
        },
        {
          title: "Communications",
          body: "Un groupe WhatsApp pour les invités trois semaines à l'avance, un site de mariage avec le programme quotidien, les codes vestimentaires et les plans des lieux, et des guides imprimés dans chaque coffret d'accueil. L'équipe de l'atelier est joignable tout le week-end.",
        },
      ],
    },
    related: {
      eyebrow: "Continuer la lecture",
      headline: "Du *journal.*",
      articles: [
        { category: "Chrétien · Italie", title: "Se marier à l'église catholique à l'étranger : ce dont la paroisse a besoin", body: "Un guide de travail sur les papiers, la préparation et le calendrier — diocèse par diocèse.", imageKey: "culture-related-1" },
        { category: "Tradition · Orthodoxe", title: "Le Couronnement, expliqué", body: "Sur les stéfana, la Danse d'Isaïe et l'organisation d'un mariage orthodoxe loin de chez soi.", imageKey: "culture-related-2" },
        { category: "Planification · Chrétien", title: "L'église d'abord chez soi, la bénédiction à l'étranger", body: "Pourquoi un nombre croissant de nos couples se marient à leur paroisse puis bénissent l'union à ciel ouvert.", imageKey: "culture-related-3" },
        { category: "Design · Chrétien", title: "Guide des fleurs de cathédrale", body: "Échelle, lumière de bougies et la longue allée — concevoir pour une nef historique.", imageKey: "culture-related-4" },
        { category: "Coût · Chrétien", title: "Ce que coûte vraiment un mariage chrétien à destination", body: "Budgets francs de 2026 par nombre d'invités et par décor.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Côte amalfitaine", href: destinationPath("fr", "amalfi") },
        { label: "Toscane", href: destinationPath("fr", "tuscany") },
        { label: "Provence", href: destinationPath("fr", "provence") },
        { label: "Lac de Côme", href: destinationPath("fr", "lake-como") },
      ],
      sidebarVenues: [
        { label: "Villa Cimbrone, Ravello" },
        { label: "Cathédrale de Florence" },
        { label: "Château de Tourreau, Provence" },
        { label: "Villa del Balbianello, Lac de Côme" },
      ],
      sidebarCultures: [
        { label: "Mariages interconfessionnels", href: culturePath("fr", "interfaith-weddings") },
        { label: "Mariages latins", href: culturePath("fr", "latin-weddings") },
        { label: "Mariages européens", href: culturePath("fr", "european-weddings") },
        { label: "Mariages juifs", href: culturePath("fr", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Questions, réponses",
      headline: "Questions *fréquentes.*",
      items: [
        {
          question: "Pouvons-nous nous marier à l'église catholique à l'étranger — et que faut-il à la paroisse ?",
          answer: [
            "Oui, et nous en organisons régulièrement. Le mariage est arrangé par la propre paroisse du couple, chez lui, qui prépare le dossier — actes de baptême et de confirmation, préparation au mariage et papiers canoniques — puis le transfère à l'église étrangère avec l'autorisation du diocèse.",
            "Les exigences varient selon le diocèse et la paroisse qui vous mariera, c'est pourquoi nous entamons cette correspondance un an à l'avance. Nous coordonnons le dossier ; le prêtre fixe ce qu'il doit contenir.",
          ],
        },
        {
          question: "Pouvons-nous tenir un couronnement orthodoxe dans un complexe hôtelier ou une villa ?",
          answer: [
            "Le couronnement est conduit par le propre prêtre de la famille, et lorsqu'il se tient hors d'une église consacrée, c'est le célébrant qui décide si cela est possible et comment.",
            "Notre part est ce qui l'entoure — le voyage du prêtre, les stéfana, les besoins liturgiques et le décor. Nous nous en remettons entièrement au célébrant quant à la forme du rite.",
          ],
        },
        {
          question: "Nous voulons nous marier à notre église, chez nous, puis bénir l'union à l'étranger. Est-ce possible ?",
          answer: [
            "Magnifiquement — c'est l'une des voies les plus gracieuses que nous planifions. Le sacrement est célébré dans la paroisse qui compte pour votre famille, et le jour à destination devient une bénédiction ou un renouvellement des vœux, affranchi des règles canoniques sur le lieu.",
            "Une bénédiction peut être conduite par un prêtre, un diacre ou un célébrant de votre choix, dans un jardin, sur une terrasse ou sous les vignes, suivie de la réception que vous imaginiez.",
          ],
        },
        {
          question: "La cérémonie religieuse a-t-elle une valeur légale ?",
          answer: [
            "Cela dépend du pays. Dans certaines juridictions, un prêtre peut enregistrer le mariage civilement le jour même ; dans beaucoup, le mariage civil est un acte distinct qui doit être accompli en mairie ou à l'état civil.",
            "Lorsque la cérémonie n'a pas de valeur civile, nous organisons les formalités civiles avec clarté et à l'avance, et nous sommes explicites sur l'acte qui rend votre mariage légal.",
          ],
        },
        {
          question: "Combien coûte un mariage chrétien à destination en 2026 ?",
          answer: [
            "Une fourchette utile pour 2026, pour un mariage de 100 à 200 invités avec cérémonie et réception, est de 120 000 à 450 000 USD, tout compris, selon largement le décor et la saison.",
            "Nous partageons des budgets complets et transparents dès la première consultation, avec des fourchettes par poste selon le nombre d'invités.",
          ],
        },
        {
          question: "Comment gérez-vous les familles mixtes catholiques-protestantes ?",
          answer: [
            "Avec soin et un ordre d'office clair. Le prêtre ou le ministre officiant décide de la forme du rite et de la manière dont les invités de l'autre communion sont reçus ; nous rendons tout cela clair pour les invités à l'avance, afin que personne ne se sente incertain à l'autel.",
            "Lorsque les deux familles souhaitent être représentées dans la cérémonie, un office co-célébré peut souvent être arrangé avec l'accord des deux clergés.",
          ],
        },
        {
          question: "Des invités d'autres confessions, ou d'aucune, peuvent-ils assister sereinement ?",
          answer: [
            "Toujours. Nous envoyons à chaque invité un guide bref et chaleureux de la cérémonie — à quoi s'attendre, quand se lever et s'asseoir, et qui est invité à communier et qui est simplement bienvenu à être présent.",
            "Aucun invité ne se sent jamais déplacé ; l'équipe de l'atelier est présente tout au long pour répondre aux questions en personne.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Une conversation privée —",
      headline: "*Commencez* votre\nmariage chrétien.",
      body: "Dites-nous le rite, la paroisse, les familles et une date approximative. Grecia vous répond personnellement sous cinq jours ouvrés.",
      ctaLabel: "Demander une consultation privée",
      ctaHref: staticPath("fr", "/contact"),
    },
  },

  // ─────────────────────────────────────────────────────────────── PT ──
  pt: {
    name: "Casamentos Cristãos",
    cardEyebrow: "Cristão",
    cardBlurb: "Católico, ortodoxo, protestante. Catedral ou jardim.",
    cardMeta: "Descobrir",
    intro:
      "Cerimónias católicas, ortodoxas e protestantes — de uma missa em catedral a uma bênção no jardim.",
    hero: {
      eyebrow: "As Tradições · N.º 05",
      scriptOverline: "Um casamento de",
      headline: "*sacramento* cristão.",
      deck: "De uma missa nupcial completa sob a nave de uma catedral a uma bênção no jardim depois de um casamento discreto pela igreja em casa. Coordenamos com a paróquia e o clero do próprio casal, em qualquer parte do mundo onde o dia se celebre.",
      captionLeft: "Élodie e Thomas · Lago de Como",
      captionCenter: "Uma bênção no jardim · 2025",
      captionRight: "Estampa V",
    },
    factStrip: [
      { label: "Duração", value: "1 – 2 dias", sub: "Cerimónia + receção" },
      { label: "Convidados", value: "60 – 400", sub: "Da íntima à grandiosa" },
      { label: "Antecedência", value: "12 – 18 meses", sub: "As paróquias reservam cedo" },
      { label: "Ritos celebrados", value: "Católico · Ortodoxo", sub: "Protestante" },
      { label: "Espaços de cerimónia", value: "Capela · catedral", sub: "Jardim" },
      { label: "Idiomas", value: "PT · IT · FR", sub: "EN · latim a pedido" },
    ],
    overview: {
      sideEyebrow: "A tradição",
      sideNote:
        "Um registo prático do que sabemos sobre celebrar um casamento cristão no estrangeiro — com a paróquia, não à margem dela.",
      headline: "Um *sacramento,* muitos cenários.",
      lede: "Um casamento cristão é, antes de mais, um rito celebrado por uma igreja. O nosso trabalho começa não nas flores mas no clero — e na diferença entre a cerimónia que é sagrada e os papéis que a tornam legal.",
      bodyParagraphs: [
        "Organizámos casamentos cristãos em três comunhões — católica, ortodoxa e protestante — e a primeira coisa que dizemos a cada casal é sempre a mesma: a igreja vem primeiro. Meses antes de se pôr uma única mesa, já estamos em correspondência com a paróquia que vos casará, seja uma catedral em Florença, uma capela no alto de uma falésia sobre a Costa Amalfitana, ou o padre que conhece uma família há três gerações e está disposto a viajar.",
        "A segunda conversa é a que os casais raramente esperam. Na maioria dos países a cerimónia religiosa e o casamento civil são dois atos distintos. Algumas dioceses e jurisdições permitem que um padre registe o casamento civilmente no próprio dia; muitas não. Onde não permitem, organizamos as formalidades civis com clareza e com antecedência — em casa ou no destino — para que o dia seja por inteiro o sacramento, e não uma assinatura.",
        "Um número crescente dos nossos casais casa-se primeiro na sua própria igreja em casa e depois celebra uma bênção no jardim no estrangeiro. É muitas vezes o caminho mais elegante: o sacramento é celebrado na paróquia que importa à família, e o dia no destino torna-se uma bênção, uma renovação de votos e uma receção a céu aberto — livre das regras canónicas sobre o local.",
        "Em tudo isto, o nosso registo é o mesmo que mantemos para cada tradição: sustentar o rito como o sustentaria o clero do casal. Não resumimos uma liturgia por causa do ritmo, não movemos a Eucaristia por uma fotografia e nunca deixamos que um fornecedor manuseie o que pertence à sacristia. A celebração é nossa para desenhar. O sacramento é da igreja para guardar.",
      ],
      pull: "«A celebração é nossa para desenhar. O sacramento é da igreja para guardar.»",
      signatureName: "Grecia",
      signatureRole: "Fundadora · Sobre sustentar o rito com a paróquia",
    },
    ceremonyArc: {
      eyebrow: "Estrutura da cerimónia",
      headline: "A *missa* nupcial, parte a parte.",
      deck: "Uma missa nupcial católica representativa, com notas para as variantes ortodoxa e protestante. A ordem e o seu conteúdo são fixados pelo clero celebrante e pela paróquia do casal — este é o nosso esboço de trabalho, não uma regra fixa.",
      steps: [
        {
          numeral: "I",
          name: "Procissão e acolhimento",
          sub: "Rito de entrada",
          when: "Cerimónia · 00:00",
          body: "O cortejo e a noiva avançam para o altar. O padre acolhe a assembleia e abre o rito. Na prática ortodoxa o acolhimento pode começar no nártex com os Esponsais e a troca de anéis.",
        },
        {
          numeral: "II",
          name: "Liturgia da Palavra",
          sub: "Escritura e homilia",
          when: "Cerimónia · 00:10",
          body: "Leituras escolhidas pelo casal, um salmo, o Evangelho e a homilia. As cerimónias protestantes centram-se muitas vezes nesta parte, com o sermão e as leituras a sustentar o peso na ausência de missa.",
        },
        {
          numeral: "III",
          name: "Consentimento e anéis",
          sub: "Os votos",
          when: "Cerimónia · 00:25",
          body: "O casal declara o seu consentimento perante o padre e a assembleia, e troca os anéis. É o coração do rito do matrimónio nas três comunhões, ainda que as palavras e a forma difiram conforme a igreja.",
        },
        {
          numeral: "IV",
          name: "A Coroação",
          sub: "Variante ortodoxa",
          when: "Cerimónia · 00:30",
          body: "Num casamento ortodoxo, o casal é coroado com as stefana e conduzido em torno do analogion na Dança de Isaías. Este passo substitui a troca ocidental de votos como centro visível do rito, e é conduzido pelo próprio padre da família.",
        },
        {
          numeral: "V",
          name: "Bênção nupcial e comunhão",
          sub: "A Eucaristia",
          when: "Cerimónia · 00:40",
          body: "Numa missa católica o padre pronuncia a bênção nupcial e segue-se a Liturgia da Eucaristia, com a comunhão. Se os convidados de outras comunhões comungam e como o decide o padre celebrante, e é esclarecido à assembleia de antemão.",
        },
        {
          numeral: "VI",
          name: "Saída",
          sub: "A partida",
          when: "Cerimónia · 01:00",
          body: "Os recém-casados conduzem a assembleia para fora da igreja ao som dos sinos ou do órgão. Fila de cumprimentos, fotografias na escadaria e transferência para a receção.",
        },
        {
          numeral: "VII",
          name: "Receção",
          sub: "Jantar de celebração",
          when: "Ao entardecer",
          body: "Jantar sentado, os brindes, a primeira dança e o corte do bolo. O registo da receção cabe ao casal — jantar formal numa quinta ou mesa longa entre as vinhas.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Conceitos de design",
      headline: "Nave, jardim, *luz de velas.*",
      deck: "Três direções de trabalho que construímos mais do que uma vez. Cada uma se adapta à igreja e à estação — paleta, flores e a escala do cenário.",
      cards: [
        {
          title: "Brancos de Catedral",
          body: "Uma paleta formal de marfim, alabastro e pedra suave, pensada para a nave de uma catedral e uma receção de gala. Rosas brancas, lisianthus e velas altas ao longo de um corredor comprido.",
          palette: ["#f6f1e7", "#e9e0cf", "#cbb994", "#8c7a5c", "#3a3328"],
          imageKey: "concept-1",
          rows: [
            { label: "Cerimónia", value: "Catedral · missa nupcial completa" },
            { label: "Flores", value: "Rosa branca · lisianthus · vela" },
            { label: "Ideal para", value: "Grandiosa · formal · noite" },
          ],
        },
        {
          title: "Capela de Jardim",
          body: "Uma bênção ao ar livre em verdura em camadas, peónias marfim e madeira ao natural. Discretamente moderna, para o casal que se casou em casa e abençoa a união no estrangeiro.",
          palette: ["#eee7d6", "#b9c1a3", "#7c8a63", "#4d5a3c", "#2c3322"],
          imageKey: "concept-2",
          rows: [
            { label: "Cerimónia", value: "Jardim · bênção ou renovação" },
            { label: "Flores", value: "Peónia · oliveira · verdura" },
            { label: "Ideal para", value: "Dia · villa · vinha" },
          ],
        },
        {
          title: "Quinta à Luz de Velas",
          body: "Uma paleta quente e íntima de âmbar, bronze e verde-oliva profundo, iluminada quase por inteiro a velas. Uma cerimónia numa pequena capela ou quinta seguida de um jantar em mesa longa.",
          palette: ["#efe2c8", "#d8a85e", "#9c6b34", "#5a4226", "#2e2418"],
          imageKey: "concept-3",
          rows: [
            { label: "Cerimónia", value: "Capela · à luz de velas" },
            { label: "Flores", value: "Rosa âmbar · bronze · oliveira" },
            { label: "Ideal para", value: "Íntima · quinta · noite" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocolo cultural",
      headline: "O que *temos por sagrado.*",
      deck: "Seis princípios sobre os quais não transigimos. Mantêm o sacramento com a igreja e a celebração connosco.",
      items: [
        {
          title: "Os requisitos da paróquia começam cedo",
          body: "Os papéis canónicos, os registos de batismo e crisma e a preparação para o matrimónio que o rito possa exigir são iniciados com um ano de antecedência. Coordenamos o processo com a paróquia do casal; são os requisitos do padre, não os nossos, que marcam o calendário.",
        },
        {
          title: "As regras da igreja regem a nave",
          body: "A música, a fotografia e a decoração dentro da igreja regem-se pelas regras dessa igreja, não pelo organizador. Confirmamos o que é permitido com a paróquia antes de instruir qualquer fornecedor, e instruímo-los a respeitá-lo.",
        },
        {
          title: "A coroação ortodoxa, pelo padre da família",
          body: "Quando se celebra uma coroação ortodoxa, é conduzida pelo próprio padre da família. Organizamos a viagem, as stefana e as necessidades litúrgicas, e remetemo-nos por completo ao celebrante quanto à forma do rito.",
        },
        {
          title: "A comunhão planeia-se com o clero",
          body: "Se a Eucaristia é celebrada, e como comungam os convidados de outras comunhões, decide-o o padre celebrante e comunica-se aos convidados de antemão — nunca se improvisa ao altar.",
        },
        {
          title: "A validade civil trata-se em separado",
          body: "Quando a cerimónia religiosa não regista o casamento civilmente, tratamos do ato civil com clareza e com antecedência, e somos explícitos com o casal sobre qual ato torna o casamento legal.",
        },
        {
          title: "Os objetos sagrados pertencem à sacristia",
          body: "Os cálices, os panos de altar e os objetos sagrados são manuseados pelo sacristão ou pelo clero, nunca pelos floristas ou fornecedores. Construímos a celebração à volta da sacristia, nunca dentro dela.",
        },
      ],
    },
    planning: {
      eyebrow: "O planeamento",
      headline: "Dois dias, *hora a hora.*",
      deck: "O plano que usamos para um casamento cristão típico de 150 convidados no estrangeiro. O dia adapta-se; a estrutura não.",
      days: [
        {
          numeral: "I",
          dayLabel: "Dia Um",
          title: "Ensaio e boas-vindas",
          body: "O ensaio da cerimónia na igreja com o celebrante, o cortejo e os músicos, seguido de um jantar de boas-vindas para os convidados que chegam. O ensaio é conduzido pelo padre; nós sustentamos a logística em redor.",
          events: [
            { time: "Manhã", body: "Chegada de convidados · transferes · check-in no hotel" },
            { time: "16:00", body: "Ensaio da cerimónia na igreja · com o celebrante" },
            { time: "17:30", body: "Marcação com músicos e leitores" },
            { time: "20:00", body: "Jantar de boas-vindas · terraço ou trattoria" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Dia Dois",
          title: "O dia do casamento",
          body: "Os preparativos, a cerimónia à hora marcada, as fotografias e a receção até à noite. Planeamos o dia em torno da hora da igreja, e não o contrário.",
          events: [
            { time: "10:00", body: "Preparativos dos noivos · suites separadas" },
            { time: "14:30", body: "Convidados sentados na igreja" },
            { time: "15:00", body: "Cerimónia · missa nupcial ou bênção · 60 minutos" },
            { time: "16:15", body: "Fila de cumprimentos · fotografias na escadaria" },
            { time: "18:00", body: "Cocktail de receção · hora dourada" },
            { time: "19:30", body: "Jantar sentado · brindes · primeira dança" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Dia Três",
          title: "Brunch de despedida",
          body: "Um brunch tranquilo do dia seguinte oferecido pelo casal, normalmente ao ar livre, centrado nas despedidas. O fecho não oficial do casamento para a maioria dos convidados.",
          events: [
            { time: "11:00", body: "Brunch de despedida · jardim ou junto à piscina" },
            { time: "Tarde", body: "Partidas · transferes para o aeroporto" },
            { time: "Noite", body: "Jantar de família próxima (opcional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilidade de destinos",
      headline: "Onde os casamentos cristãos *resultam melhor.*",
      viewAllLabel: "Ver todos os destinos",
      viewAllHref: staticPath("pt", "/destinations"),
      cards: [
        { rating: 5, name: "Costa Amalfitana", sub: "Itália · maio – outubro", imageKey: "compat-1", destinationHref: destinationPath("pt", "amalfi") },
        { rating: 5, name: "Lago de Como", sub: "Itália · junho – setembro", imageKey: "compat-2", destinationHref: destinationPath("pt", "lake-como") },
        { rating: 5, name: "Toscana", sub: "Itália · maio – outubro", imageKey: "compat-3", destinationHref: destinationPath("pt", "tuscany") },
        { rating: 5, name: "Paris e Île-de-France", sub: "França · abril – outubro", imageKey: "compat-4", destinationHref: destinationPath("pt", "paris-ile-de-france") },
        { rating: 5, name: "Provença", sub: "França · maio – setembro", imageKey: "compat-5", destinationHref: destinationPath("pt", "provence") },
        { rating: 4, name: "Côte d'Azur", sub: "França · junho – setembro", imageKey: "compat-6", destinationHref: destinationPath("pt", "cote-dazur") },
        { rating: 4, name: "Punta Cana", sub: "Caraíbas · todo o ano", imageKey: "compat-7", destinationHref: destinationPath("pt", "punta-cana") },
        { rating: 4, name: "Os Hamptons", sub: "Estados Unidos · junho – setembro", imageKey: "compat-8", destinationHref: destinationPath("pt", "the-hamptons") },
      ],
    },
    guest: {
      eyebrow: "Gestão de convidados",
      headline: "O cuidado *prático* de cada convidado.",
      deck: "A camada logística que a maioria dos organizadores subaprovisiona — incluindo a etiqueta de uma cerimónia na igreja para convidados de qualquer fé ou de nenhuma.",
      cells: [
        {
          title: "Etiqueta da cerimónia",
          body: "Um guia breve e caloroso para os convidados que nunca assistiram a um ofício católico, ortodoxo ou protestante: quando levantar-se e sentar-se, o que significa a ordem do ofício e — com clareza e sem pressão — quem está convidado a comungar e quem é bem-vindo simplesmente a estar presente.",
        },
        {
          title: "Códigos de vestuário",
          body: "Códigos de vestuário por evento definidos com o casal e as expectativas da igreja em mente — ombros cobertos na nave quando a paróquia o pede, traje de gala ou formal de jardim para a receção. Impressos em cada pacote de boas-vindas e no site do casamento.",
        },
        {
          title: "Idosos e mobilidade",
          body: "Lugares reservados perto do altar, acessos sem degraus às igrejas históricas tratados de antemão, transporte à parte e um elo de ligação para idosos do ateliê. Quartos no piso térreo reservados para quem deles precise.",
        },
        {
          title: "Viagem e alojamento",
          body: "Blocos de quartos em três escalões, transferes coordenados ao longo dos dias de chegada e pacotes de boas-vindas com o programa, o código de vestuário por evento, a morada da igreja e os contactos de emergência.",
        },
        {
          title: "Crianças e acompanhamento",
          body: "Uma equipa multilíngue de acompanhamento infantil para a receção, menus de criança em cada refeição e uma sala tranquila junto à nave para as famílias com bebés durante uma missa longa. As crianças são bem-vindas na cerimónia; há sempre uma saída discreta disponível.",
        },
        {
          title: "Comunicações",
          body: "Um grupo de WhatsApp para os convidados três semanas antes, um site do casamento com o programa diário, os códigos de vestuário e os mapas dos locais, e guias impressos em cada pacote de boas-vindas. A equipa do ateliê está contactável todo o fim de semana.",
        },
      ],
    },
    related: {
      eyebrow: "Continuar a ler",
      headline: "Do *diário.*",
      articles: [
        { category: "Cristão · Itália", title: "Casar pela Igreja católica no estrangeiro: o que a paróquia precisa", body: "Um guia prático sobre os papéis, a preparação e os prazos — diocese a diocese.", imageKey: "culture-related-1" },
        { category: "Tradição · Ortodoxo", title: "A Coroação, explicada", body: "Sobre as stefana, a Dança de Isaías e organizar um casamento ortodoxo longe de casa.", imageKey: "culture-related-2" },
        { category: "Planeamento · Cristão", title: "Igreja primeiro em casa, bênção no estrangeiro", body: "Porque é que um número crescente dos nossos casais casa na sua paróquia e depois abençoa a união a céu aberto.", imageKey: "culture-related-3" },
        { category: "Design · Cristão", title: "Guia de flores para catedral", body: "Escala, luz de velas e o corredor comprido — desenhar para uma nave histórica.", imageKey: "culture-related-4" },
        { category: "Custo · Cristão", title: "Quanto custa de facto um casamento cristão em destino", body: "Orçamentos francos de 2026 por número de convidados e cenário.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Costa Amalfitana", href: destinationPath("pt", "amalfi") },
        { label: "Toscana", href: destinationPath("pt", "tuscany") },
        { label: "Provença", href: destinationPath("pt", "provence") },
        { label: "Lago de Como", href: destinationPath("pt", "lake-como") },
      ],
      sidebarVenues: [
        { label: "Villa Cimbrone, Ravello" },
        { label: "Catedral de Florença" },
        { label: "Château de Tourreau, Provença" },
        { label: "Villa del Balbianello, Lago de Como" },
      ],
      sidebarCultures: [
        { label: "Casamentos inter-religiosos", href: culturePath("pt", "interfaith-weddings") },
        { label: "Casamentos latinos", href: culturePath("pt", "latin-weddings") },
        { label: "Casamentos europeus", href: culturePath("pt", "european-weddings") },
        { label: "Casamentos judaicos", href: culturePath("pt", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Perguntas, respondidas",
      headline: "Perguntas *frequentes.*",
      items: [
        {
          question: "Podemos casar pela Igreja católica no estrangeiro — e o que precisa a paróquia?",
          answer: [
            "Sim, e organizamo-los com regularidade. O casamento é tratado através da própria paróquia do casal, em casa, que prepara o processo — registos de batismo e crisma, a preparação para o matrimónio e os papéis canónicos — e depois transfere-o para a igreja no estrangeiro com a permissão da diocese.",
            "Os requisitos variam conforme a diocese e a paróquia que vos casar, pelo que iniciamos esta correspondência com um ano de antecedência. Coordenamos o processo; o padre fixa o que deve conter.",
          ],
        },
        {
          question: "Podemos celebrar uma coroação ortodoxa num resort ou numa villa?",
          answer: [
            "A coroação é conduzida pelo próprio padre da família e, quando se celebra fora de uma igreja consagrada, é o celebrante quem decide se é possível e como.",
            "A nossa parte é o que a rodeia — a viagem do padre, as stefana, as necessidades litúrgicas e o cenário. Remetemo-nos por completo ao celebrante quanto à forma do rito.",
          ],
        },
        {
          question: "Queremos casar na nossa igreja em casa e depois abençoar a união no estrangeiro. É possível?",
          answer: [
            "Lindamente — é um dos caminhos mais elegantes que planeamos. O sacramento é celebrado na paróquia que importa à vossa família, e o dia no destino torna-se uma bênção ou renovação de votos, livre das regras canónicas sobre o local.",
            "Uma bênção pode ser conduzida por um padre, um diácono ou um celebrante à vossa escolha, num jardim, num terraço ou entre as vinhas, seguida da receção que imaginavam.",
          ],
        },
        {
          question: "A cerimónia religiosa tem validade legal?",
          answer: [
            "Depende do país. Nalgumas jurisdições um padre pode registar o casamento civilmente no próprio dia; em muitas, o casamento civil é um ato à parte que tem de ser concluído numa conservatória do registo civil.",
            "Quando a cerimónia não tem validade civil, tratamos das formalidades civis com clareza e com antecedência, e somos explícitos sobre qual ato torna o vosso casamento legal.",
          ],
        },
        {
          question: "Quanto custa um casamento cristão em destino em 2026?",
          answer: [
            "Um intervalo útil para 2026, para um casamento de 100 a 200 convidados com cerimónia e receção, é de 120 000 a 450 000 USD, tudo incluído, dependendo muito do cenário e da estação.",
            "Partilhamos orçamentos completos e transparentes na primeira consulta, com intervalos por rubrica conforme o número de convidados.",
          ],
        },
        {
          question: "Como gerem as famílias mistas católico-protestantes?",
          answer: [
            "Com cuidado e uma ordem do ofício clara. O padre ou ministro celebrante decide a forma do rito e como são recebidos os convidados da outra comunhão; esclarecemos tudo aos convidados de antemão para que ninguém se sinta inseguro ao altar.",
            "Quando ambas as famílias desejam estar representadas na cerimónia, pode muitas vezes organizar-se um ofício concelebrado com o acordo de ambos os clérigos.",
          ],
        },
        {
          question: "Convidados de outras religiões, ou de nenhuma, podem assistir à vontade?",
          answer: [
            "Sempre. Enviamos a cada convidado um guia breve e caloroso da cerimónia — o que esperar, quando levantar-se e sentar-se, e quem está convidado a comungar e quem é simplesmente bem-vindo a estar presente.",
            "Nenhum convidado se sente alguma vez deslocado; a equipa do ateliê está à mão durante todo o fim de semana para responder a perguntas em pessoa.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Uma conversa privada —",
      headline: "*Comece* o seu\ncasamento cristão.",
      body: "Diga-nos o rito, a paróquia, as famílias e uma data aproximada. A Grecia responde pessoalmente no prazo de cinco dias úteis.",
      ctaLabel: "Solicitar uma consulta privada",
      ctaHref: staticPath("pt", "/contact"),
    },
  },

  // ─────────────────────────────────────────────────────────────── DE ──
  de: {
    name: "Christliche Hochzeiten",
    cardEyebrow: "Christlich",
    cardBlurb: "Katholisch, orthodox, protestantisch. Kathedrale oder Garten.",
    cardMeta: "Entdecken",
    intro:
      "Katholische, orthodoxe und protestantische Zeremonien — von einer Messe in der Kathedrale bis zu einer Segnung im Garten.",
    hero: {
      eyebrow: "Die Traditionen · Nr. 05",
      scriptOverline: "Eine Hochzeit von",
      headline: "christlichem *Sakrament.*",
      deck: "Von einer vollständigen Brautmesse unter dem Mittelschiff einer Kathedrale bis zu einer Segnung im Garten nach einer stillen kirchlichen Trauung daheim. Wir koordinieren mit der eigenen Pfarrei und Geistlichkeit des Paares, wo immer auf der Welt der Tag begangen wird.",
      captionLeft: "Élodie & Thomas · Comer See",
      captionCenter: "Eine Segnung im Garten · 2025",
      captionRight: "Tafel V",
    },
    factStrip: [
      { label: "Dauer", value: "1 – 2 Tage", sub: "Zeremonie + Empfang" },
      { label: "Gäste", value: "60 – 400", sub: "Von intim bis groß" },
      { label: "Vorlaufzeit", value: "12 – 18 Monate", sub: "Pfarreien buchen früh" },
      { label: "Gehaltene Riten", value: "Katholisch · Orthodox", sub: "Protestantisch" },
      { label: "Zeremonieorte", value: "Kapelle · Kathedrale", sub: "Garten" },
      { label: "Sprachen", value: "DE · IT · FR", sub: "EN · Latein auf Wunsch" },
    ],
    overview: {
      sideEyebrow: "Die Tradition",
      sideNote:
        "Ein Arbeitsregister dessen, was wir über das Halten einer christlichen Hochzeit im Ausland wissen — mit der Pfarrei, nicht an ihr vorbei.",
      headline: "Ein *Sakrament,* viele Schauplätze.",
      lede: "Eine christliche Hochzeit ist vor allem anderen ein Ritus, der von einer Kirche gehalten wird. Unsere Arbeit beginnt nicht bei den Blumen, sondern bei der Geistlichkeit — und bei dem Unterschied zwischen der Zeremonie, die heilig ist, und den Papieren, die sie rechtsgültig machen.",
      bodyParagraphs: [
        "Wir haben christliche Hochzeiten über drei Konfessionen hinweg geplant — katholisch, orthodox und protestantisch — und das Erste, was wir jedem Paar sagen, ist stets dasselbe: die Kirche kommt zuerst. Monate bevor ein einziger Tisch gedeckt wird, stehen wir bereits in Korrespondenz mit der Pfarrei, die Sie traut, sei es eine Kathedrale in Florenz, eine Kapelle hoch über der Amalfiküste oder der Priester, der eine Familie seit drei Generationen kennt und bereit ist zu reisen.",
        "Das zweite Gespräch ist jenes, das Paare selten erwarten. In den meisten Ländern sind die kirchliche Zeremonie und die zivile Eheschließung zwei getrennte Akte. Manche Diözesen und Rechtsordnungen erlauben es einem Priester, die Ehe am selben Tag standesamtlich zu registrieren; viele tun das nicht. Wo nicht, regeln wir die zivilen Formalitäten sauber und im Voraus — daheim oder am Zielort — damit der Tag selbst ganz dem Sakrament gehört und nicht einer Unterschrift.",
        "Eine wachsende Zahl unserer Paare heiratet zuerst in der eigenen Kirche daheim und hält dann eine Segnung im Garten im Ausland. Das ist oft der anmutigste Weg: das Sakrament wird in der Pfarrei gefeiert, die der Familie wichtig ist, und der Tag am Zielort wird zu einer Segnung, einer Erneuerung der Gelübde und einem Empfang unter freiem Himmel — befreit von den kirchenrechtlichen Regeln zum Trauungsort.",
        "Bei alldem ist unser Register dasselbe, das wir für jede Tradition führen: den Ritus so zu halten, wie ihn die Geistlichkeit des Paares hielte. Wir fassen keine Liturgie des Tempos wegen zusammen, wir verschieben die Eucharistie nicht für eine Aufnahme, und wir lassen niemals einen Dienstleister handhaben, was zur Sakristei gehört. Die Feier zu gestalten ist unsere Aufgabe. Das Sakrament zu bewahren ist die der Kirche.",
      ],
      pull: "„Die Feier zu gestalten ist unsere Aufgabe. Das Sakrament zu bewahren ist die der Kirche.“",
      signatureName: "Grecia",
      signatureRole: "Gründerin · Über das Halten des Ritus mit der Pfarrei",
    },
    ceremonyArc: {
      eyebrow: "Aufbau der Zeremonie",
      headline: "Die *Brautmesse,* Teil für Teil.",
      deck: "Eine repräsentative katholische Brautmesse, mit Hinweisen zu den orthodoxen und protestantischen Varianten. Reihenfolge und Inhalt legen die zelebrierende Geistlichkeit und die Pfarrei des Paares fest — dies ist unsere Arbeitsskizze, keine feste Regel.",
      steps: [
        {
          numeral: "I",
          name: "Einzug & Versammlung",
          sub: "Eröffnungsritus",
          when: "Zeremonie · 00:00",
          body: "Die Hochzeitsgesellschaft und die Braut ziehen zum Altarraum. Der Priester begrüßt die Gemeinde und eröffnet den Ritus. In der orthodoxen Praxis kann die Versammlung im Narthex mit der Verlobung und dem Ringtausch beginnen.",
        },
        {
          numeral: "II",
          name: "Wortgottesdienst",
          sub: "Schrift & Predigt",
          when: "Zeremonie · 00:10",
          body: "Vom Paar gewählte Lesungen, ein Psalm, das Evangelium und die Predigt. Protestantische Zeremonien stellen oft diesen Teil ins Zentrum, wobei Predigt und Lesungen das Gewicht tragen, wo keine Messe gefeiert wird.",
        },
        {
          numeral: "III",
          name: "Konsens & Ringe",
          sub: "Das Eheversprechen",
          when: "Zeremonie · 00:25",
          body: "Das Paar erklärt seinen Konsens vor dem Priester und der Gemeinde und tauscht die Ringe. Dies ist das Herzstück des Trauungsritus in allen drei Konfessionen, auch wenn Worte und Form je nach Kirche verschieden sind.",
        },
        {
          numeral: "IV",
          name: "Die Krönung",
          sub: "Orthodoxe Variante",
          when: "Zeremonie · 00:30",
          body: "Bei einer orthodoxen Trauung wird das Paar mit den Stefana gekrönt und im Tanz Jesajas um das Analogion geführt. Dieser Schritt ersetzt den westlichen Austausch der Gelübde als sichtbares Zentrum des Ritus und wird vom eigenen Priester der Familie geleitet.",
        },
        {
          numeral: "V",
          name: "Brautsegen & Kommunion",
          sub: "Die Eucharistie",
          when: "Zeremonie · 00:40",
          body: "In einer katholischen Messe spricht der Priester den Brautsegen, und es folgt die Eucharistiefeier mit der Kommunion. Ob und wie Gäste anderer Konfessionen die Kommunion empfangen, entscheidet der zelebrierende Priester und teilt es der Gemeinde vorab mit.",
        },
        {
          numeral: "VI",
          name: "Auszug",
          sub: "Der Aufbruch",
          when: "Zeremonie · 01:00",
          body: "Das frisch vermählte Paar führt die Gemeinde zum Klang der Glocken oder der Orgel aus der Kirche. Gratulationsreihe, Fotografien auf den Stufen und Überleitung zum Empfang.",
        },
        {
          numeral: "VII",
          name: "Empfang",
          sub: "Festliches Dinner",
          when: "Am Abend",
          body: "Gesetztes Dinner, die Trinksprüche, der erste Tanz und das Anschneiden der Torte. Das Register des Empfangs bestimmt das Paar — formelles Dinner im Landgut oder lange Tafel unter den Reben.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Gestaltungskonzepte",
      headline: "Schiff, Garten, *Kerzenlicht.*",
      deck: "Drei Arbeitsrichtungen, die wir mehr als einmal gebaut haben. Jede passt sich der Kirche und der Jahreszeit an — Palette, Blumen und Maßstab des Schauplatzes.",
      cards: [
        {
          title: "Kathedralenweiß",
          body: "Eine formelle Palette aus Elfenbein, Alabaster und sanftem Stein, gebaut für ein Kathedralenschiff und einen Empfang in Abendgarderobe. Weiße Rosen, Lisianthus und hohe Kerzen entlang eines langen Mittelgangs.",
          palette: ["#f6f1e7", "#e9e0cf", "#cbb994", "#8c7a5c", "#3a3328"],
          imageKey: "concept-1",
          rows: [
            { label: "Zeremonie", value: "Kathedrale · volle Brautmesse" },
            { label: "Blumen", value: "Weiße Rose · Lisianthus · Kerze" },
            { label: "Ideal für", value: "Groß · formell · abends" },
          ],
        },
        {
          title: "Gartenkapelle",
          body: "Eine Segnung unter freiem Himmel in geschichtetem Grün, elfenbeinfarbenen Pfingstrosen und ungebeiztem Holz. Leise modern, für das Paar, das daheim geheiratet hat und die Verbindung im Ausland segnet.",
          palette: ["#eee7d6", "#b9c1a3", "#7c8a63", "#4d5a3c", "#2c3322"],
          imageKey: "concept-2",
          rows: [
            { label: "Zeremonie", value: "Garten · Segnung oder Erneuerung" },
            { label: "Blumen", value: "Pfingstrose · Olive · Grün" },
            { label: "Ideal für", value: "Tags · Villa · Weingut" },
          ],
        },
        {
          title: "Landgut im Kerzenschein",
          body: "Eine warme, intime Abendpalette aus Bernstein, Bronze und tiefem Olivgrün, fast gänzlich von Kerzen erhellt. Eine Zeremonie in einer kleinen Kapelle oder einem Landgut, gefolgt von einem Dinner an langer Tafel.",
          palette: ["#efe2c8", "#d8a85e", "#9c6b34", "#5a4226", "#2e2418"],
          imageKey: "concept-3",
          rows: [
            { label: "Zeremonie", value: "Kapelle · im Kerzenschein" },
            { label: "Blumen", value: "Bernsteinrose · Bronze · Olive" },
            { label: "Ideal für", value: "Intim · Landgut · abends" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Kulturelles Protokoll",
      headline: "Was uns *heilig ist.*",
      deck: "Sechs Grundsätze, bei denen wir keine Kompromisse machen. Sie halten das Sakrament bei der Kirche und die Feier bei uns.",
      items: [
        {
          title: "Die Anforderungen der Pfarrei beginnen früh",
          body: "Die kirchenrechtlichen Papiere, die Tauf- und Firmungsnachweise und die Ehevorbereitung, die der Ritus verlangen kann, werden ein Jahr im Voraus begonnen. Wir koordinieren die Unterlagen mit der Pfarrei des Paares; die Anforderungen des Priesters, nicht unsere, bestimmen den Zeitplan.",
        },
        {
          title: "Die Regeln der Kirche bestimmen das Schiff",
          body: "Musik, Fotografie und Dekoration im Inneren der Kirche richten sich nach den Regeln dieser Kirche, nicht nach dem Planer. Wir klären mit der Pfarrei, was erlaubt ist, bevor ein Dienstleister gebrieft wird, und weisen die Dienstleister an, es zu achten.",
        },
        {
          title: "Die orthodoxe Krönung durch den Priester der Familie",
          body: "Wo eine orthodoxe Krönung stattfindet, wird sie vom eigenen Priester der Familie vollzogen. Wir organisieren die Reise, die Stefana und die liturgischen Erfordernisse und überlassen die Form des Ritus ganz dem Zelebranten.",
        },
        {
          title: "Die Kommunion wird mit der Geistlichkeit geplant",
          body: "Ob die Eucharistie gefeiert wird und wie Gäste anderer Konfessionen die Kommunion empfangen, entscheidet der zelebrierende Priester und teilt es den Gästen im Voraus mit — niemals am Altar improvisiert.",
        },
        {
          title: "Die zivile Gültigkeit wird gesondert geregelt",
          body: "Wo die kirchliche Zeremonie die Ehe nicht standesamtlich registriert, regeln wir den zivilen Akt sauber und im Voraus und sind dem Paar gegenüber deutlich, welcher Akt die Ehe rechtsgültig macht.",
        },
        {
          title: "Heilige Gegenstände gehören in die Sakristei",
          body: "Die Gefäße, die Altartücher und die heiligen Gegenstände werden vom Sakristan oder der Geistlichkeit gehandhabt, niemals von Floristen oder Dienstleistern. Wir bauen die Feier um die Sakristei herum, niemals in sie hinein.",
        },
      ],
    },
    planning: {
      eyebrow: "Die Planung",
      headline: "Zwei Tage, *Stunde für Stunde.*",
      deck: "Der Bauplan, den wir für eine typische christliche Hochzeit mit 150 Gästen im Ausland verwenden. Der Tag ist flexibel; der Aufbau nicht.",
      days: [
        {
          numeral: "I",
          dayLabel: "Tag Eins",
          title: "Probe & Willkommen",
          body: "Die Zeremonienprobe in der Kirche mit dem Zelebranten, der Hochzeitsgesellschaft und den Musikern, gefolgt von einem Willkommensdinner für die anreisenden Gäste. Die Probe leitet der Priester; wir halten die Logistik darum.",
          events: [
            { time: "Vormittag", body: "Ankunft der Gäste · Transfers · Hotel-Check-in" },
            { time: "16:00", body: "Zeremonienprobe in der Kirche · mit dem Zelebranten" },
            { time: "17:30", body: "Durchlauf mit Musikern und Lektoren" },
            { time: "20:00", body: "Willkommensdinner · Terrasse oder Trattoria" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Tag Zwei",
          title: "Der Hochzeitstag",
          body: "Die Vorbereitung, die Zeremonie zur festgesetzten Stunde, die Fotografien und der Empfang bis in den Abend. Wir planen den Tag um die Stunde der Kirche, nicht umgekehrt.",
          events: [
            { time: "10:00", body: "Vorbereitung von Braut und Bräutigam · getrennte Suiten" },
            { time: "14:30", body: "Gäste in der Kirche platziert" },
            { time: "15:00", body: "Zeremonie · Brautmesse oder Segnung · 60 Minuten" },
            { time: "16:15", body: "Gratulationsreihe · Fotografien auf den Stufen" },
            { time: "18:00", body: "Empfangs-Cocktails · goldene Stunde" },
            { time: "19:30", body: "Gesetztes Dinner · Trinksprüche · erster Tanz" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Tag Drei",
          title: "Abschiedsbrunch",
          body: "Ein entspannter Brunch am Tag danach, vom Paar ausgerichtet, meist im Freien, im Zeichen des Abschieds. Der inoffizielle Ausklang der Hochzeit für die meisten Gäste.",
          events: [
            { time: "11:00", body: "Abschiedsbrunch · Garten oder am Pool" },
            { time: "Nachmittag", body: "Abreisen · Flughafentransfers" },
            { time: "Abend", body: "Dinner im engen Familienkreis (optional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Reiseziel-Eignung",
      headline: "Wo christliche Hochzeiten *am besten gelingen.*",
      viewAllLabel: "Alle Reiseziele ansehen",
      viewAllHref: staticPath("de", "/destinations"),
      cards: [
        { rating: 5, name: "Amalfiküste", sub: "Italien · Mai – Oktober", imageKey: "compat-1", destinationHref: destinationPath("de", "amalfi") },
        { rating: 5, name: "Comer See", sub: "Italien · Juni – September", imageKey: "compat-2", destinationHref: destinationPath("de", "lake-como") },
        { rating: 5, name: "Toskana", sub: "Italien · Mai – Oktober", imageKey: "compat-3", destinationHref: destinationPath("de", "tuscany") },
        { rating: 5, name: "Paris & Île-de-France", sub: "Frankreich · April – Oktober", imageKey: "compat-4", destinationHref: destinationPath("de", "paris-ile-de-france") },
        { rating: 5, name: "Provence", sub: "Frankreich · Mai – September", imageKey: "compat-5", destinationHref: destinationPath("de", "provence") },
        { rating: 4, name: "Côte d'Azur", sub: "Frankreich · Juni – September", imageKey: "compat-6", destinationHref: destinationPath("de", "cote-dazur") },
        { rating: 4, name: "Punta Cana", sub: "Karibik · ganzjährig", imageKey: "compat-7", destinationHref: destinationPath("de", "punta-cana") },
        { rating: 4, name: "Die Hamptons", sub: "Vereinigte Staaten · Juni – September", imageKey: "compat-8", destinationHref: destinationPath("de", "the-hamptons") },
      ],
    },
    guest: {
      eyebrow: "Gästebetreuung",
      headline: "Die *praktische* Sorge um jeden Gast.",
      deck: "Die logistische Ebene, die die meisten Planer unterbesetzen — einschließlich der Etikette einer kirchlichen Zeremonie für Gäste jeglichen Glaubens oder keinen.",
      cells: [
        {
          title: "Etikette der Zeremonie",
          body: "Ein kurzer, herzlicher Leitfaden für Gäste, die nie einem katholischen, orthodoxen oder protestantischen Gottesdienst beigewohnt haben: wann man steht und sitzt, was die Ordnung des Gottesdienstes bedeutet und — klar und ohne Druck — wer zur Kommunion eingeladen ist und wer schlicht willkommen ist, dabei zu sein.",
        },
        {
          title: "Kleiderordnungen",
          body: "Kleiderordnungen je Anlass, festgelegt mit dem Paar und im Blick auf die Erwartungen der Kirche — bedeckte Schultern im Kirchenschiff, wo die Pfarrei es erbittet, Abendgarderobe oder Gartenformell für den Empfang. Gedruckt in jedem Willkommenspaket und auf der Hochzeitsseite.",
        },
        {
          title: "Ältere & Mobilität",
          body: "Reservierte Plätze nahe dem Altarraum, stufenlose Zugänge zu historischen Kirchen im Voraus eingerichtet, gesonderter Transport und ein Ansprechpartner für Ältere aus dem Atelier. Zimmer im Erdgeschoss für jene reserviert, die sie brauchen.",
        },
        {
          title: "Reise & Unterkunft",
          body: "Zimmerkontingente in drei Stufen, über die Anreisetage koordinierte Transfers und Willkommenspakete mit dem Programm, der Kleiderordnung je Anlass, der Adresse der Kirche und den Notfallkontakten.",
        },
        {
          title: "Kinder & Betreuung",
          body: "Ein mehrsprachiges Betreuungsteam für den Empfang, Kindermenüs zu jeder Mahlzeit und ein ruhiger Raum nahe dem Kirchenschiff für Familien mit Säuglingen während einer langen Messe. Kinder sind bei der Zeremonie willkommen; ein ruhiger Ausgang ist stets möglich.",
        },
        {
          title: "Kommunikation",
          body: "Eine WhatsApp-Gruppe für die Gäste drei Wochen im Voraus, eine Hochzeitswebsite mit dem Tagesprogramm, den Kleiderordnungen und den Lageplänen sowie gedruckte Leitfäden in jedem Willkommenspaket. Das Atelier-Team ist das ganze Wochenende über erreichbar.",
        },
      ],
    },
    related: {
      eyebrow: "Weiterlesen",
      headline: "Aus dem *Journal.*",
      articles: [
        { category: "Christlich · Italien", title: "Kirchlich katholisch heiraten im Ausland: Was die Pfarrei braucht", body: "Ein Arbeitsleitfaden zu den Papieren, der Vorbereitung und dem Zeitplan — Diözese für Diözese.", imageKey: "culture-related-1" },
        { category: "Tradition · Orthodox", title: "Die Krönung, erklärt", body: "Über die Stefana, den Tanz Jesajas und das Ausrichten einer orthodoxen Hochzeit fern der Heimat.", imageKey: "culture-related-2" },
        { category: "Planung · Christlich", title: "Kirche zuerst daheim, Segnung im Ausland", body: "Warum eine wachsende Zahl unserer Paare in der eigenen Pfarrei heiratet und die Verbindung dann unter freiem Himmel segnet.", imageKey: "culture-related-3" },
        { category: "Design · Christlich", title: "Ein Leitfaden für Kathedralenblumen", body: "Maßstab, Kerzenlicht und der lange Mittelgang — Gestaltung für ein historisches Schiff.", imageKey: "culture-related-4" },
        { category: "Kosten · Christlich", title: "Was eine christliche Destinationshochzeit wirklich kostet", body: "Offene Budgets für 2026 nach Gästezahl und Schauplatz.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Amalfiküste", href: destinationPath("de", "amalfi") },
        { label: "Toskana", href: destinationPath("de", "tuscany") },
        { label: "Provence", href: destinationPath("de", "provence") },
        { label: "Comer See", href: destinationPath("de", "lake-como") },
      ],
      sidebarVenues: [
        { label: "Villa Cimbrone, Ravello" },
        { label: "Dom von Florenz" },
        { label: "Château de Tourreau, Provence" },
        { label: "Villa del Balbianello, Comer See" },
      ],
      sidebarCultures: [
        { label: "Interreligiöse Hochzeiten", href: culturePath("de", "interfaith-weddings") },
        { label: "Lateinamerikanische Hochzeiten", href: culturePath("de", "latin-weddings") },
        { label: "Europäische Hochzeiten", href: culturePath("de", "european-weddings") },
        { label: "Jüdische Hochzeiten", href: culturePath("de", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Fragen, beantwortet",
      headline: "Häufig *gefragt.*",
      items: [
        {
          question: "Können wir kirchlich katholisch im Ausland heiraten — und was braucht die Pfarrei?",
          answer: [
            "Ja, und wir planen sie regelmäßig. Die Ehe wird über die eigene Heimatpfarrei des Paares angebahnt, die die Unterlagen vorbereitet — Tauf- und Firmungsnachweise, die Ehevorbereitung und die kirchenrechtlichen Papiere — und sie dann mit Erlaubnis der Diözese an die Kirche im Ausland übergibt.",
            "Die Anforderungen variieren je nach Diözese und der Pfarrei, die Sie traut, weshalb wir diese Korrespondenz ein Jahr im Voraus beginnen. Wir koordinieren die Unterlagen; der Priester legt fest, was sie enthalten müssen.",
          ],
        },
        {
          question: "Können wir eine orthodoxe Krönung in einem Resort oder einer Villa halten?",
          answer: [
            "Die Krönung wird vom eigenen Priester der Familie vollzogen, und wo sie außerhalb einer geweihten Kirche stattfindet, entscheidet der Zelebrant, ob und wie das möglich ist.",
            "Unser Teil ist das Drumherum — die Reise des Priesters, die Stefana, die liturgischen Erfordernisse und der Schauplatz. Die Form des Ritus überlassen wir ganz dem Zelebranten.",
          ],
        },
        {
          question: "Wir möchten in unserer Kirche daheim heiraten und die Verbindung dann im Ausland segnen. Geht das?",
          answer: [
            "Wunderbar — es ist einer der anmutigsten Wege, die wir planen. Das Sakrament wird in der Pfarrei gefeiert, die Ihrer Familie wichtig ist, und der Tag am Zielort wird zu einer Segnung oder Erneuerung der Gelübde, frei von den kirchenrechtlichen Regeln zum Ort.",
            "Eine Segnung kann von einem Priester, einem Diakon oder einem Zelebranten Ihrer Wahl geleitet werden, in einem Garten, auf einer Terrasse oder unter den Reben, gefolgt vom Empfang, den Sie sich vorgestellt haben.",
          ],
        },
        {
          question: "Ist die kirchliche Zeremonie rechtlich bindend?",
          answer: [
            "Das hängt vom Land ab. In manchen Rechtsordnungen darf ein Priester die Ehe am selben Tag standesamtlich registrieren; in vielen ist die zivile Eheschließung ein gesonderter Akt, der beim Standesamt zu vollziehen ist.",
            "Wo die Zeremonie zivilrechtlich nicht bindend ist, regeln wir die zivilen Formalitäten sauber und im Voraus und sind deutlich darin, welcher Akt Ihre Ehe rechtsgültig macht.",
          ],
        },
        {
          question: "Was kostet eine christliche Destinationshochzeit 2026?",
          answer: [
            "Ein brauchbarer Rahmen für 2026, für eine Hochzeit mit 100 bis 200 Gästen samt Zeremonie und Empfang, sind 120.000 bis 450.000 USD, alles inklusive, stark abhängig von Schauplatz und Jahreszeit.",
            "Wir teilen vollständige, transparente Budgets bereits in der ersten Beratung, mit Posten-Spannen nach Gästezahl.",
          ],
        },
        {
          question: "Wie gehen Sie mit gemischten katholisch-protestantischen Familien um?",
          answer: [
            "Mit Sorgfalt und einer klaren Ordnung des Gottesdienstes. Der zelebrierende Priester oder Pfarrer entscheidet über die Form des Ritus und darüber, wie Gäste der anderen Konfession empfangen werden; wir machen das alles den Gästen im Voraus klar, damit sich niemand am Altar unsicher fühlt.",
            "Wo beide Familien in der Zeremonie vertreten sein möchten, lässt sich mit Zustimmung beider Geistlicher oft ein gemeinsam zelebrierter Gottesdienst einrichten.",
          ],
        },
        {
          question: "Können Gäste anderen Glaubens oder ohne Bekenntnis unbeschwert teilnehmen?",
          answer: [
            "Immer. Wir senden jedem Gast einen kurzen, herzlichen Leitfaden zur Zeremonie — was zu erwarten ist, wann man steht und sitzt, und wer zur Kommunion eingeladen ist und wer schlicht willkommen ist, dabei zu sein.",
            "Kein Gast fühlt sich je fehl am Platz; das Atelier-Team ist durchweg zur Stelle, um Fragen persönlich zu beantworten.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Ein privates Gespräch —",
      headline: "*Beginnen* Sie Ihre\nchristliche Hochzeit.",
      body: "Nennen Sie uns den Ritus, die Pfarrei, die Familien und ein ungefähres Datum. Grecia antwortet Ihnen persönlich innerhalb von fünf Werktagen.",
      ctaLabel: "Ein privates Beratungsgespräch anfragen",
      ctaHref: staticPath("de", "/contact"),
    },
  },

  // ─────────────────────────────────────────────────────────────── IT ──
  it: {
    name: "Matrimoni Cristiani",
    cardEyebrow: "Cristiano",
    cardBlurb: "Cattolico, ortodosso, protestante. Cattedrale o giardino.",
    cardMeta: "Scopri",
    intro:
      "Cerimonie cattoliche, ortodosse e protestanti — da una messa in cattedrale a una benedizione in giardino.",
    hero: {
      eyebrow: "Le Tradizioni · N. 05",
      scriptOverline: "Un matrimonio di",
      headline: "*sacramento* cristiano.",
      deck: "Da una messa nuziale completa sotto la navata di una cattedrale a una benedizione in giardino dopo un matrimonio in chiesa, discreto, a casa. Coordiniamo con la parrocchia e il clero della coppia, ovunque nel mondo si celebri il giorno.",
      captionLeft: "Élodie e Thomas · Lago di Como",
      captionCenter: "Una benedizione in giardino · 2025",
      captionRight: "Tavola V",
    },
    factStrip: [
      { label: "Durata", value: "1 – 2 giorni", sub: "Cerimonia + ricevimento" },
      { label: "Invitati", value: "60 – 400", sub: "Dall'intimo al grandioso" },
      { label: "Anticipo", value: "12 – 18 mesi", sub: "Le parrocchie si prenotano presto" },
      { label: "Riti celebrati", value: "Cattolico · Ortodosso", sub: "Protestante" },
      { label: "Luoghi della cerimonia", value: "Cappella · cattedrale", sub: "Giardino" },
      { label: "Lingue", value: "IT · FR · EN", sub: "ES · latino su richiesta" },
    ],
    overview: {
      sideEyebrow: "La tradizione",
      sideNote:
        "Un registro di lavoro di ciò che sappiamo sul celebrare un matrimonio cristiano all'estero — con la parrocchia, non al di fuori di essa.",
      headline: "Un *sacramento,* molte scene.",
      lede: "Un matrimonio cristiano è, prima di ogni altra cosa, un rito celebrato da una chiesa. Il nostro lavoro comincia non dai fiori ma dal clero — e dalla differenza tra la cerimonia che è sacra e le carte che la rendono legale.",
      bodyParagraphs: [
        "Abbiamo organizzato matrimoni cristiani in tre comunioni — cattolica, ortodossa e protestante — e la prima cosa che diciamo a ogni coppia è sempre la stessa: la chiesa viene prima. Mesi prima che venga apparecchiato un solo tavolo, siamo già in corrispondenza con la parrocchia che vi sposerà, sia essa una cattedrale a Firenze, una cappella a strapiombo sulla Costiera Amalfitana, o il sacerdote che conosce una famiglia da tre generazioni ed è disposto a viaggiare.",
        "La seconda conversazione è quella che le coppie raramente si aspettano. Nella maggior parte dei paesi la cerimonia religiosa e il matrimonio civile sono due atti distinti. Alcune diocesi e giurisdizioni permettono a un sacerdote di registrare il matrimonio civilmente lo stesso giorno; molte no. Dove non è possibile, organizziamo le formalità civili con chiarezza e in anticipo — a casa o nella destinazione — così che il giorno sia interamente il sacramento, e non una firma.",
        "Un numero crescente delle nostre coppie si sposa prima nella propria chiesa a casa e poi celebra una benedizione in giardino all'estero. È spesso la via più aggraziata: il sacramento si celebra nella parrocchia che conta per la famiglia, e il giorno nella destinazione diventa una benedizione, un rinnovo delle promesse e un ricevimento a cielo aperto — libero dalle regole canoniche sul luogo.",
        "In tutto questo, il nostro registro è lo stesso che teniamo per ogni tradizione: sostenere il rito come lo sosterrebbe il clero della coppia. Non riassumiamo una liturgia per ragioni di ritmo, non spostiamo l'Eucaristia per una fotografia e non lasciamo mai che un fornitore maneggi ciò che appartiene alla sagrestia. La celebrazione è nostra da disegnare. Il sacramento è della chiesa da custodire.",
      ],
      pull: "«La celebrazione è nostra da disegnare. Il sacramento è della chiesa da custodire.»",
      signatureName: "Grecia",
      signatureRole: "Fondatrice · Sul sostenere il rito con la parrocchia",
    },
    ceremonyArc: {
      eyebrow: "Struttura della cerimonia",
      headline: "La *messa* nuziale, parte per parte.",
      deck: "Una messa nuziale cattolica rappresentativa, con note per le varianti ortodossa e protestante. L'ordine e il suo contenuto sono fissati dal clero celebrante e dalla parrocchia della coppia — questo è il nostro schizzo di lavoro, non una regola fissa.",
      steps: [
        {
          numeral: "I",
          name: "Processione e accoglienza",
          sub: "Rito d'ingresso",
          when: "Cerimonia · 00:00",
          body: "Il corteo e la sposa avanzano verso l'altare. Il sacerdote accoglie l'assemblea e apre il rito. Nella prassi ortodossa l'accoglienza può iniziare nel nartece con il Fidanzamento e lo scambio degli anelli.",
        },
        {
          numeral: "II",
          name: "Liturgia della Parola",
          sub: "Scrittura e omelia",
          when: "Cerimonia · 00:10",
          body: "Letture scelte dalla coppia, un salmo, il Vangelo e l'omelia. Le cerimonie protestanti spesso pongono al centro questa parte, con il sermone e le letture a sostenere il peso in assenza di messa.",
        },
        {
          numeral: "III",
          name: "Consenso e anelli",
          sub: "Le promesse",
          when: "Cerimonia · 00:25",
          body: "La coppia dichiara il proprio consenso davanti al sacerdote e all'assemblea, e scambia gli anelli. È il cuore del rito del matrimonio in tutte e tre le comunioni, sebbene le parole e la forma differiscano a seconda della chiesa.",
        },
        {
          numeral: "IV",
          name: "L'Incoronazione",
          sub: "Variante ortodossa",
          when: "Cerimonia · 00:30",
          body: "In un matrimonio ortodosso, la coppia viene incoronata con le stefana e condotta intorno all'analogion nella Danza di Isaia. Questo passo sostituisce lo scambio occidentale delle promesse come centro visibile del rito, ed è guidato dal sacerdote stesso della famiglia.",
        },
        {
          numeral: "V",
          name: "Benedizione nuziale e comunione",
          sub: "L'Eucaristia",
          when: "Cerimonia · 00:40",
          body: "In una messa cattolica il sacerdote pronuncia la benedizione nuziale e segue la Liturgia eucaristica, con la comunione. Se gli invitati di altre comunioni ricevano la comunione e in che modo lo decide il sacerdote celebrante, e viene chiarito all'assemblea in anticipo.",
        },
        {
          numeral: "VI",
          name: "Uscita",
          sub: "Il congedo",
          when: "Cerimonia · 01:00",
          body: "Gli sposi novelli conducono l'assemblea fuori dalla chiesa al suono delle campane o dell'organo. Fila di auguri, fotografie sul sagrato e trasferimento al ricevimento.",
        },
        {
          numeral: "VII",
          name: "Ricevimento",
          sub: "Cena di festa",
          when: "In serata",
          body: "Cena seduti, i brindisi, il primo ballo e il taglio della torta. Il registro del ricevimento spetta alla coppia — cena formale in una tenuta o tavolata lunga tra le vigne.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Concept di design",
      headline: "Navata, giardino, *luce di candele.*",
      deck: "Tre direzioni di lavoro che abbiamo costruito più di una volta. Ciascuna si adatta alla chiesa e alla stagione — palette, fiori e scala dell'ambientazione.",
      cards: [
        {
          title: "Bianchi di Cattedrale",
          body: "Una palette formale di avorio, alabastro e pietra tenue, pensata per la navata di una cattedrale e un ricevimento in abito da sera. Rose bianche, lisianthus e ceri alti lungo una navata lunga.",
          palette: ["#f6f1e7", "#e9e0cf", "#cbb994", "#8c7a5c", "#3a3328"],
          imageKey: "concept-1",
          rows: [
            { label: "Cerimonia", value: "Cattedrale · messa nuziale completa" },
            { label: "Fiori", value: "Rosa bianca · lisianthus · cero" },
            { label: "Ideale per", value: "Grandioso · formale · sera" },
          ],
        },
        {
          title: "Cappella di Giardino",
          body: "Una benedizione all'aperto tra verde a strati, peonie avorio e legno al naturale. Sobriamente moderna, per la coppia che si è sposata a casa e benedice l'unione all'estero.",
          palette: ["#eee7d6", "#b9c1a3", "#7c8a63", "#4d5a3c", "#2c3322"],
          imageKey: "concept-2",
          rows: [
            { label: "Cerimonia", value: "Giardino · benedizione o rinnovo" },
            { label: "Fiori", value: "Peonia · ulivo · verde" },
            { label: "Ideale per", value: "Giorno · villa · vigneto" },
          ],
        },
        {
          title: "Tenuta a Lume di Candela",
          body: "Una palette calda e intima di ambra, bronzo e verde oliva profondo, illuminata quasi interamente a candela. Una cerimonia in una piccola cappella o tenuta seguita da una cena in tavolata lunga.",
          palette: ["#efe2c8", "#d8a85e", "#9c6b34", "#5a4226", "#2e2418"],
          imageKey: "concept-3",
          rows: [
            { label: "Cerimonia", value: "Cappella · a lume di candela" },
            { label: "Fiori", value: "Rosa ambra · bronzo · ulivo" },
            { label: "Ideale per", value: "Intimo · tenuta · sera" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocollo culturale",
      headline: "Ciò che *teniamo sacro.*",
      deck: "Sei principi sui quali non scendiamo a compromessi. Tengono il sacramento alla chiesa e la celebrazione a noi.",
      items: [
        {
          title: "I requisiti della parrocchia iniziano presto",
          body: "Le carte canoniche, i certificati di battesimo e cresima e la preparazione al matrimonio che il rito può richiedere si avviano con un anno di anticipo. Coordiniamo il fascicolo con la parrocchia della coppia; sono i requisiti del sacerdote, non i nostri, a fissare il calendario.",
        },
        {
          title: "Le regole della chiesa governano la navata",
          body: "La musica, la fotografia e gli addobbi all'interno della chiesa sono governati dalle regole di quella chiesa, non dall'organizzatore. Confermiamo con la parrocchia ciò che è permesso prima di istruire qualsiasi fornitore, e li istruiamo a rispettarlo.",
        },
        {
          title: "L'incoronazione ortodossa, dal sacerdote della famiglia",
          body: "Dove si celebra un'incoronazione ortodossa, è condotta dal sacerdote stesso della famiglia. Organizziamo il viaggio, le stefana e le necessità liturgiche, e ci rimettiamo interamente al celebrante quanto alla forma del rito.",
        },
        {
          title: "La comunione si pianifica con il clero",
          body: "Se l'Eucaristia viene celebrata, e come ricevano la comunione gli invitati di altre comunioni, lo decide il sacerdote celebrante e lo comunica agli invitati in anticipo — mai improvvisato all'altare.",
        },
        {
          title: "La validità civile si gestisce a parte",
          body: "Quando la cerimonia religiosa non registra il matrimonio civilmente, gestiamo l'atto civile con chiarezza e in anticipo, e siamo espliciti con la coppia su quale atto renda legale il matrimonio.",
        },
        {
          title: "Gli oggetti sacri appartengono alla sagrestia",
          body: "I vasi sacri, le tovaglie d'altare e gli oggetti sacri sono maneggiati dal sagrestano o dal clero, mai dai fioristi o dai fornitori. Costruiamo la celebrazione attorno alla sagrestia, mai al suo interno.",
        },
      ],
    },
    planning: {
      eyebrow: "La pianificazione",
      headline: "Due giorni, *ora per ora.*",
      deck: "Lo schema che usiamo per un tipico matrimonio cristiano di 150 invitati all'estero. Il giorno è flessibile; la struttura no.",
      days: [
        {
          numeral: "I",
          dayLabel: "Giorno Uno",
          title: "Prova e benvenuto",
          body: "La prova della cerimonia in chiesa con il celebrante, il corteo e i musicisti, seguita da una cena di benvenuto per gli invitati in arrivo. La prova è guidata dal sacerdote; noi teniamo la logistica intorno.",
          events: [
            { time: "Mattina", body: "Arrivo degli invitati · transfer · check-in in hotel" },
            { time: "16:00", body: "Prova della cerimonia in chiesa · con il celebrante" },
            { time: "17:30", body: "Filata con musicisti e lettori" },
            { time: "20:00", body: "Cena di benvenuto · terrazza o trattoria" },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Giorno Due",
          title: "Il giorno delle nozze",
          body: "I preparativi, la cerimonia all'ora stabilita, le fotografie e il ricevimento fino a sera. Pianifichiamo la giornata attorno all'ora della chiesa, e non il contrario.",
          events: [
            { time: "10:00", body: "Preparativi degli sposi · suite separate" },
            { time: "14:30", body: "Invitati seduti in chiesa" },
            { time: "15:00", body: "Cerimonia · messa nuziale o benedizione · 60 minuti" },
            { time: "16:15", body: "Fila di auguri · fotografie sul sagrato" },
            { time: "18:00", body: "Cocktail di ricevimento · ora dorata" },
            { time: "19:30", body: "Cena seduti · brindisi · primo ballo" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Giorno Tre",
          title: "Brunch di commiato",
          body: "Un brunch disteso del giorno dopo offerto dalla coppia, di solito all'aperto, incentrato sui saluti. La chiusura non ufficiale del matrimonio per la maggior parte degli invitati.",
          events: [
            { time: "11:00", body: "Brunch di commiato · giardino o a bordo piscina" },
            { time: "Pomeriggio", body: "Partenze · transfer per l'aeroporto" },
            { time: "Sera", body: "Cena con la famiglia stretta (facoltativa)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilità con le destinazioni",
      headline: "Dove i matrimoni cristiani *riescono meglio.*",
      viewAllLabel: "Vedi tutte le destinazioni",
      viewAllHref: staticPath("it", "/destinations"),
      cards: [
        { rating: 5, name: "Costiera Amalfitana", sub: "Italia · maggio – ottobre", imageKey: "compat-1", destinationHref: destinationPath("it", "amalfi") },
        { rating: 5, name: "Lago di Como", sub: "Italia · giugno – settembre", imageKey: "compat-2", destinationHref: destinationPath("it", "lake-como") },
        { rating: 5, name: "Toscana", sub: "Italia · maggio – ottobre", imageKey: "compat-3", destinationHref: destinationPath("it", "tuscany") },
        { rating: 5, name: "Parigi e Île-de-France", sub: "Francia · aprile – ottobre", imageKey: "compat-4", destinationHref: destinationPath("it", "paris-ile-de-france") },
        { rating: 5, name: "Provenza", sub: "Francia · maggio – settembre", imageKey: "compat-5", destinationHref: destinationPath("it", "provence") },
        { rating: 4, name: "Costa Azzurra", sub: "Francia · giugno – settembre", imageKey: "compat-6", destinationHref: destinationPath("it", "cote-dazur") },
        { rating: 4, name: "Punta Cana", sub: "Caraibi · tutto l'anno", imageKey: "compat-7", destinationHref: destinationPath("it", "punta-cana") },
        { rating: 4, name: "Gli Hamptons", sub: "Stati Uniti · giugno – settembre", imageKey: "compat-8", destinationHref: destinationPath("it", "the-hamptons") },
      ],
    },
    guest: {
      eyebrow: "Gestione degli invitati",
      headline: "La cura *pratica* di ogni invitato.",
      deck: "Lo strato logistico che la maggior parte degli organizzatori sottovaluta — inclusa l'etichetta di una cerimonia in chiesa per invitati di qualsiasi fede o di nessuna.",
      cells: [
        {
          title: "Etichetta della cerimonia",
          body: "Una guida breve e calorosa per gli invitati che non hanno mai assistito a una funzione cattolica, ortodossa o protestante: quando alzarsi e sedersi, cosa significa l'ordine della funzione e — con chiarezza e senza pressioni — chi è invitato a ricevere la comunione e chi è semplicemente benvenuto a essere presente.",
        },
        {
          title: "Codici di abbigliamento",
          body: "Codici di abbigliamento per ogni evento definiti con la coppia e le aspettative della chiesa in mente — spalle coperte nella navata dove la parrocchia lo chiede, abito da sera o formale da giardino per il ricevimento. Stampati in ogni kit di benvenuto e sul sito del matrimonio.",
        },
        {
          title: "Anziani e mobilità",
          body: "Posti riservati vicino all'altare, accessi senza gradini alle chiese storiche predisposti in anticipo, trasporto a parte e un referente per gli anziani dell'atelier. Camere al piano terra riservate a chi ne ha bisogno.",
        },
        {
          title: "Viaggio e alloggio",
          body: "Blocchi di camere su tre fasce, transfer coordinati lungo i giorni di arrivo e kit di benvenuto con il programma, il codice di abbigliamento per evento, l'indirizzo della chiesa e i contatti di emergenza.",
        },
        {
          title: "Bambini e assistenza",
          body: "Un team multilingue per l'assistenza ai bambini durante il ricevimento, menu per bambini a ogni pasto e una sala tranquilla vicino alla navata per le famiglie con neonati durante una messa lunga. I bambini sono benvenuti alla cerimonia; un'uscita discreta è sempre disponibile.",
        },
        {
          title: "Comunicazioni",
          body: "Un gruppo WhatsApp per gli invitati tre settimane prima, un sito del matrimonio con il programma giornaliero, i codici di abbigliamento e le mappe dei luoghi, e guide stampate in ogni kit di benvenuto. Il team dell'atelier è raggiungibile per tutto il fine settimana.",
        },
      ],
    },
    related: {
      eyebrow: "Continua a leggere",
      headline: "Dal *diario.*",
      articles: [
        { category: "Cristiano · Italia", title: "Sposarsi in chiesa cattolica all'estero: cosa serve alla parrocchia", body: "Una guida di lavoro sulle carte, la preparazione e i tempi — diocesi per diocesi.", imageKey: "culture-related-1" },
        { category: "Tradizione · Ortodosso", title: "L'Incoronazione, spiegata", body: "Sulle stefana, la Danza di Isaia e l'organizzare un matrimonio ortodosso lontano da casa.", imageKey: "culture-related-2" },
        { category: "Pianificazione · Cristiano", title: "Prima la chiesa a casa, la benedizione all'estero", body: "Perché un numero crescente delle nostre coppie si sposa nella propria parrocchia e poi benedice l'unione a cielo aperto.", imageKey: "culture-related-3" },
        { category: "Design · Cristiano", title: "Guida ai fiori per la cattedrale", body: "Scala, luce di candele e la navata lunga — progettare per una navata storica.", imageKey: "culture-related-4" },
        { category: "Costo · Cristiano", title: "Quanto costa davvero un matrimonio cristiano in destinazione", body: "Budget franchi del 2026 per numero di invitati e ambientazione.", imageKey: "culture-related-5" },
      ],
      sidebarDestinations: [
        { label: "Costiera Amalfitana", href: destinationPath("it", "amalfi") },
        { label: "Toscana", href: destinationPath("it", "tuscany") },
        { label: "Provenza", href: destinationPath("it", "provence") },
        { label: "Lago di Como", href: destinationPath("it", "lake-como") },
      ],
      sidebarVenues: [
        { label: "Villa Cimbrone, Ravello" },
        { label: "Duomo di Firenze" },
        { label: "Château de Tourreau, Provenza" },
        { label: "Villa del Balbianello, Lago di Como" },
      ],
      sidebarCultures: [
        { label: "Matrimoni interreligiosi", href: culturePath("it", "interfaith-weddings") },
        { label: "Matrimoni latini", href: culturePath("it", "latin-weddings") },
        { label: "Matrimoni europei", href: culturePath("it", "european-weddings") },
        { label: "Matrimoni ebraici", href: culturePath("it", "jewish-weddings") },
      ],
    },
    faq: {
      eyebrow: "Domande, con risposta",
      headline: "Domande *frequenti.*",
      items: [
        {
          question: "Possiamo sposarci in chiesa cattolica all'estero — e cosa serve alla parrocchia?",
          answer: [
            "Sì, e li organizziamo regolarmente. Il matrimonio si tratta tramite la parrocchia della coppia a casa, che prepara il fascicolo — certificati di battesimo e cresima, la preparazione al matrimonio e le carte canoniche — e poi lo trasferisce alla chiesa all'estero con il permesso della diocesi.",
            "I requisiti variano a seconda della diocesi e della parrocchia che vi sposerà, perciò avviamo questa corrispondenza con un anno di anticipo. Coordiniamo il fascicolo; il sacerdote fissa ciò che deve contenere.",
          ],
        },
        {
          question: "Possiamo celebrare un'incoronazione ortodossa in un resort o in una villa?",
          answer: [
            "L'incoronazione è condotta dal sacerdote stesso della famiglia e, quando si celebra fuori da una chiesa consacrata, è il celebrante a decidere se è possibile e come.",
            "La nostra parte è ciò che la circonda — il viaggio del sacerdote, le stefana, le necessità liturgiche e l'ambientazione. Ci rimettiamo interamente al celebrante quanto alla forma del rito.",
          ],
        },
        {
          question: "Vogliamo sposarci nella nostra chiesa a casa e poi benedire l'unione all'estero. È possibile?",
          answer: [
            "Splendidamente — è una delle vie più aggraziate che pianifichiamo. Il sacramento si celebra nella parrocchia che conta per la vostra famiglia, e il giorno nella destinazione diventa una benedizione o un rinnovo delle promesse, libero dalle regole canoniche sul luogo.",
            "Una benedizione può essere guidata da un sacerdote, un diacono o un celebrante a vostra scelta, in un giardino, su una terrazza o tra le vigne, seguita dal ricevimento che avevate immaginato.",
          ],
        },
        {
          question: "La cerimonia religiosa ha valore legale?",
          answer: [
            "Dipende dal paese. In alcune giurisdizioni un sacerdote può registrare il matrimonio civilmente lo stesso giorno; in molte, il matrimonio civile è un atto a parte da completare presso l'ufficio dello stato civile.",
            "Quando la cerimonia non ha valore civile, gestiamo le formalità civili con chiarezza e in anticipo, e siamo espliciti su quale atto renda legale il vostro matrimonio.",
          ],
        },
        {
          question: "Quanto costa un matrimonio cristiano in destinazione nel 2026?",
          answer: [
            "Un intervallo utile per il 2026, per un matrimonio di 100-200 invitati con cerimonia e ricevimento, è di 120.000 – 450.000 USD, tutto compreso, a seconda in larga misura dell'ambientazione e della stagione.",
            "Condividiamo budget completi e trasparenti già alla prima consulenza, con intervalli per voce in base al numero di invitati.",
          ],
        },
        {
          question: "Come gestite le famiglie miste cattolico-protestanti?",
          answer: [
            "Con cura e un ordine della funzione chiaro. Il sacerdote o il ministro celebrante decide la forma del rito e come vengono accolti gli invitati dell'altra comunione; chiariamo tutto agli invitati in anticipo, così che nessuno si senta incerto all'altare.",
            "Quando entrambe le famiglie desiderano essere rappresentate nella cerimonia, si può spesso organizzare una funzione concelebrata con l'accordo di entrambi i ministri.",
          ],
        },
        {
          question: "Invitati di altre religioni, o di nessuna, possono partecipare serenamente?",
          answer: [
            "Sempre. Inviamo a ogni invitato una guida breve e calorosa alla cerimonia — cosa aspettarsi, quando alzarsi e sedersi, e chi è invitato a ricevere la comunione e chi è semplicemente benvenuto a essere presente.",
            "Nessun invitato si sente mai fuori posto; il team dell'atelier è a disposizione per tutto il tempo per rispondere alle domande di persona.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Una conversazione privata —",
      headline: "*Inizia* il tuo\nmatrimonio cristiano.",
      body: "Diteci il rito, la parrocchia, le famiglie e una data indicativa. Grecia risponde personalmente entro cinque giorni lavorativi.",
      ctaLabel: "Richiedi una consulenza privata",
      ctaHref: staticPath("it", "/contact"),
    },
  },
};
