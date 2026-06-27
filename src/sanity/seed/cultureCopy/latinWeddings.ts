/**
 * Culture detail copy · Latin Weddings (culture № 07).
 *
 * Mirrors the Indian Weddings prototype in structure and density, but the
 * register here carries the founder's own voice: Grecia is Dominican, the
 * studio's home atelier is in Punta Cana, and this is — in her words — her
 * own tradition. Card-level copy (name / cardEyebrow / cardBlurb / cardMeta /
 * intro) is reused verbatim from `culture.ts`.
 *
 * Customs are attributed to the specific country that keeps them wherever a
 * country is named; pan-Latin generalisation is avoided. See the report that
 * accompanied this file for the claims flagged for editorial review.
 */

import {
  culturePath,
  destinationPath,
  staticPath,
  type CultureCopy,
} from "./shared";
import type { Locale } from "../../../i18n/routing";

export const latinWeddings: Record<Locale, CultureCopy> = {
  // ── English ───────────────────────────────────────────────────────────────
  en: {
    name: "Latin Weddings",
    cardEyebrow: "Latin",
    cardBlurb:
      "Arras, lazo, padrinos. Bilingual receptions with mariachi or bachata.",
    cardMeta: "Discover",
    intro:
      "Arras, lazo and padrinos, with bilingual receptions carried by mariachi or bachata.",
    hero: {
      eyebrow: "The Traditions",
      scriptOverline: "A wedding of",
      headline: "Latin *tradition.*",
      deck: "This is the studio's own. Grecia is Dominican; the home atelier sits in Punta Cana. A Latin wedding is a Catholic ceremony and a long, loud, generous party — held in two languages, for the whole family.",
      captionLeft: "Carolina & Mateo · Casa de Campo",
      captionCenter: "The lazo, during the mass · 2025",
      captionRight: "Plate VII",
    },
    factStrip: [
      {
        label: "Wedding length",
        value: "1 – 2 days",
        sub: "Welcome dinner + the day",
      },
      {
        label: "Guest range",
        value: "100 – 500",
        sub: "Family travels in full",
      },
      {
        label: "Lead time",
        value: "12 – 18 months",
        sub: "Parish dates book early",
      },
      {
        label: "Traditions held",
        value: "Mexican · Dominican",
        sub: "Colombian · Argentine",
      },
      {
        label: "Music",
        value: "Mariachi · bachata",
        sub: "Merengue · the hora loca",
      },
      {
        label: "Languages",
        value: "ES · EN",
        sub: "PT for Brazilian families",
      },
    ],
    overview: {
      sideEyebrow: "The tradition",
      sideNote:
        "This is my own. I am Dominican; our atelier is in Punta Cana. I have planned my cousins' weddings and my closest friends' — and I plan a Latin wedding the way I would plan one for my family.",
      headline: "A mass, a *party,* and the whole family.",
      lede: "A Latin wedding, in most of our families, begins in church. The Catholic ceremony is the heart of the day — the arras, the lazo, the padrinos standing as witnesses — and everything that follows is the celebration the family has been waiting years to throw.",
      bodyParagraphs: [
        "Across Latin America the wedding is not one tradition but many, and the differences matter. A Mexican wedding leans on the padrinos — sponsors who take on a named role, often a financial one, in the ceremony itself. A Dominican wedding, ours, is church then merengue and bachata until the band gives out. A Colombian wedding may carry the serenata the night before; an Argentine wedding often skips the bridal party and the bouquet toss entirely and runs past sunrise.",
        "What they share is scale and warmth. The guest list is large because family is large — primos, tíos, padrinos, abuelos, the whole extended circle travels, and three generations dance in the same room. The reception is long, the music is live for the moments that matter, and no one is rushed off the floor.",
        "We plan the church and the party as one arc. Many planners hand the mass to the parish and start their work at the cocktail; we do not. We coordinate the priest, the parish customs, the arras and the lazo, the padrinos' seating and their cue — and then we carry the same care into the hora loca at midnight.",
        "And we plan in two languages from the first email. The invitation, the program, the MC, the welcome packet — Spanish and English as standard, Portuguese when a Brazilian family is at the table. No guest should ever feel they are at someone else's wedding.",
      ],
      pull: '"A Latin wedding is a Catholic ceremony and a party that earns its length. We hold both with the same hands."',
      signatureName: "Grecia",
      signatureRole: "Founder · Dominican · Punta Cana",
    },
    ceremonyArc: {
      eyebrow: "Ceremony structure",
      headline: "From the mass to the *last song.*",
      deck: "The arc we hold for a Catholic Latin wedding — church first, party after. Regional customs adjust the detail; the shape holds.",
      steps: [
        {
          numeral: "I",
          name: "The nuptial mass",
          sub: "Catholic ceremony",
          when: "Late afternoon",
          body: "Most of our couples marry in the Church. A full nuptial mass, often an hour, with readings the family has chosen and the priest who knows them.",
        },
        {
          numeral: "II",
          name: "Arras & lazo",
          sub: "Coins and the cord",
          when: "During the mass",
          body: "The thirteen arras (coins) pass from groom to bride as a pledge to provide. The lazo — a figure-eight cord or rosary — is placed over both by the padrinos, binding them as one.",
        },
        {
          numeral: "III",
          name: "The recessional",
          sub: "Out of the church",
          when: "After the mass",
          body: "The couple leaves to applause, often to bells, rice, or in the Dominican tradition a brass-and-drum send-off straight into the street.",
        },
        {
          numeral: "IV",
          name: "Cocktail & live trio",
          sub: "The arrival hour",
          when: "Early evening",
          body: "Guests move to the reception for cocktails and a live trio or guitar — boleros, son, soft bachata — while the family photographs.",
        },
        {
          numeral: "V",
          name: "The entrances",
          sub: "Couple and party",
          when: "Dinner open",
          body: "The MC, bilingual, brings in the wedding party and then the couple to a song chosen to lift the room. The first dance often opens the floor immediately.",
        },
        {
          numeral: "VI",
          name: "Dinner & toasts",
          sub: "Seated, with speeches",
          when: "Evening",
          body: "A seated dinner with toasts from padrinos and parents. The pace is unhurried — the meal is part of the celebration, not a pause before it.",
        },
        {
          numeral: "VII",
          name: "Hora loca & the last song",
          sub: "Midnight on",
          when: "Late night",
          body: "Near midnight the hora loca breaks out — masks, props, a second band or a brass line — and the night runs long. The last song is chosen in advance, and everyone is on the floor for it.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Design concepts",
      headline: "Three directions, *one warmth.*",
      deck: "Three working design directions we have built more than once for Latin weddings. Every wedding adapts these — palette, flowers, the scale of the room.",
      cards: [
        {
          title: "Tropical Abundance",
          body: "Layered greenery, heliconia and orchid, palm and banana leaf — the Caribbean garden at full volume. Built for Punta Cana and the islands.",
          palette: ["#1f3d2b", "#3f6b3a", "#e7a33c", "#d65d3a", "#f3ede0"],
          imageKey: "concept-1",
          rows: [
            { label: "Florals", value: "Heliconia · orchid · palm" },
            { label: "Tables", value: "Long, family-style" },
            { label: "Best for", value: "Beach · garden · resort" },
          ],
        },
        {
          title: "Hacienda Evening",
          body: "Warm terracotta, ironwork and candlelight, marigold and dahlia — a Mexican hacienda after dark. Mariachi-ready, made for the long table.",
          palette: ["#7a2e22", "#c2683a", "#e0a93f", "#3a2a20", "#efe6d6"],
          imageKey: "concept-2",
          rows: [
            { label: "Florals", value: "Marigold · dahlia · rose" },
            { label: "Tables", value: "Long table · candlelight" },
            { label: "Best for", value: "Hacienda · courtyard · estate" },
          ],
        },
        {
          title: "Coastal White & Citrus",
          body: "Ivory and bone, lemon and lime, white bougainvillea against limewash — quietly modern, the bright coastal wedding. Reads in any light.",
          palette: ["#f4efe4", "#e8d9b8", "#d6e3c0", "#e8c23c", "#8a9b6e"],
          imageKey: "concept-3",
          rows: [
            { label: "Florals", value: "White bougainvillea · citrus" },
            { label: "Tables", value: "Mixed round + long" },
            { label: "Best for", value: "Coast · villa · terrace" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Cultural protocol",
      headline: "What we *honour.*",
      deck: "Six things we hold without compromise at a Latin wedding. They are not formalities — they are the wedding.",
      items: [
        {
          title: "The padrinos are honoured, not decorative",
          body: "Padrinos and madrinas — of the arras, of the lazo, of the rings — carry a named role. We brief them on their cue, seat them with the family, and make sure they are recognised in the program. In Mexican weddings especially, their role is central.",
        },
        {
          title: "The arras and lazo follow the family's parish",
          body: "Every parish and every family keeps the arras and lazo a little differently — who carries them, when they are placed, what the lazo is made of. We ask the family, not a template, and follow their custom exactly.",
        },
        {
          title: "Live music at the moments that matter",
          body: "The recessional, the entrance, the hora loca — these are live, not playlists. Mariachi, a bachata band, merengue, a brass line for the hora loca. Recorded music fills the gaps; it does not carry the key moments.",
        },
        {
          title: "The hora loca is planned, not improvised",
          body: "The hora loca is scheduled with the venue — noise curfews, the prop and mask drop, the second band's call time, the lighting change. It looks spontaneous because it is rehearsed.",
        },
        {
          title: "Abuela eats first",
          body: "Elders are seated, served, and looked after before anyone else. Grandparents have the best table, the quietest corner if they want it, and a member of our team who never leaves their side.",
        },
        {
          title: "A bilingual MC as standard",
          body: "The MC works in Spanish and English — every announcement, toast cue, and instruction in both. Portuguese is added when a Brazilian family is present. No guest is ever guessing what comes next.",
        },
      ],
    },
    planning: {
      eyebrow: "Multi-day planning",
      headline: "Two days, *hour by hour.*",
      deck: "The blueprint we use for a typical 250-guest Latin wedding — a welcome dinner, the wedding day around the mass, and a recovery brunch.",
      days: [
        {
          numeral: "I",
          dayLabel: "Day One",
          title: "Welcome dinner",
          body: "Family arrives through the day; we coordinate transfers and check-ins. In the evening, a welcome dinner — relaxed, often a long table by the water, with a guitar trio and the first round of toasts from the family.",
          events: [
            {
              time: "Morning",
              body: "Guest arrivals · airport transfers · hotel check-in",
            },
            {
              time: "16:00",
              body: "Welcome bags delivered · bilingual schedule in every room",
            },
            {
              time: "19:30",
              body: "Welcome dinner · long table · live trio · family toasts",
            },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Day Two",
          title: "The wedding",
          body: "The nuptial mass in the late afternoon, the arras and lazo within it, then cocktails, dinner, dancing, and the hora loca near midnight. The day is built backward from the parish's ceremony time.",
          events: [
            { time: "15:00", body: "Couple and party prep · separate suites" },
            {
              time: "17:00",
              body: "Nuptial mass · arras & lazo · padrinos in place",
            },
            {
              time: "18:15",
              body: "Recessional · send-off · family photographs",
            },
            { time: "18:45", body: "Cocktail hour · live trio" },
            {
              time: "20:00",
              body: "Entrances · first dance · seated dinner · toasts",
            },
            {
              time: "23:30",
              body: "Hora loca · masks, props, brass · dancing till late",
            },
            { time: "02:00", body: "The last song · everyone on the floor" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Day Three",
          title: "Recovery brunch",
          body: "A late, easy brunch the morning after — in the Dominican tradition, a pot of sancocho does the work of recovery. Goodbyes, photographs, and transfers home for most; the close family often lingers a day longer.",
          events: [
            {
              time: "12:00",
              body: "Recovery brunch · sancocho · poolside or garden",
            },
            { time: "Afternoon", body: "Departures · airport transfers" },
            { time: "Evening", body: "Close-family dinner (optional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Destination compatibility",
      headline: "Where Latin weddings *belong.*",
      viewAllLabel: "View all destinations →",
      viewAllHref: staticPath("en", "/destinations"),
      cards: [
        {
          rating: 5,
          name: "Punta Cana",
          sub: "Dominican Republic · year-round",
          destinationSlug: "punta-cana",
        },
        {
          rating: 5,
          name: "Tulum & Los Cabos",
          sub: "Mexico · November – April",
          destinationSlug: "tulum-los-cabos",
        },
        {
          rating: 4,
          name: "St. Barths",
          sub: "Caribbean · November – April",
          destinationSlug: "st-barths",
        },
        {
          rating: 4,
          name: "Mustique",
          sub: "Caribbean · December – April",
          destinationSlug: "mustique",
        },
        {
          rating: 4,
          name: "Tuscany",
          sub: "Italy · May – October",
          destinationSlug: "tuscany",
        },
        {
          rating: 4,
          name: "Amalfi Coast",
          sub: "Italy · May – October",
          destinationSlug: "amalfi",
        },
        {
          rating: 3,
          name: "Côte d'Azur",
          sub: "France · June – September",
          destinationSlug: "cote-dazur",
        },
        {
          rating: 3,
          name: "The Hamptons",
          sub: "United States · June – September",
          destinationSlug: "the-hamptons",
        },
      ],
    },
    guest: {
      eyebrow: "Guest management",
      headline: "The *practical* care of the whole family.",
      deck: "The logistics layer a Latin wedding lives and dies on — because the whole family travels, and three generations are in the room.",
      cells: [
        {
          title: "Multigenerational travel",
          body: "Group room blocks across price tiers so cousins, padrinos and grandparents can all come. Transfers coordinated across days of arrivals, with a family liaison who answers in Spanish.",
        },
        {
          title: "Bilingual communications",
          body: "Every invitation, program, sign and welcome packet in Spanish and English — Portuguese added for Brazilian families. A WhatsApp group for every guest, three weeks ahead.",
        },
        {
          title: "Children everywhere",
          body: "Latin weddings bring children, and the children stay late. A multilingual childcare team and a quiet room let parents actually dance, while the kids are minded and fed nearby.",
        },
        {
          title: "Elders, cared for",
          body: "Ground-floor rooms, dedicated transport, an elders' liaison, and medical-on-call for the weekend. Abuela is seated, served, and never left alone.",
        },
        {
          title: "Dietary breadth",
          body: "A long, generous menu — and full vegetarian, vegan, gluten-free and allergen-free options for every course. Regional dishes the family will recognise, done properly.",
        },
        {
          title: "Late-night logistics",
          body: "The party runs late, so transport runs late — staggered transfers from midnight on, a safe ride home for every guest, and a recovery brunch waiting the next day.",
        },
      ],
    },
    related: {
      eyebrow: "Continue reading",
      headline: "From the *journal.*",
      articles: [
        {
          category: "Latin Weddings · Punta Cana",
          title: "Best Venues for a Latin Wedding in Punta Cana",
          body: "A working register of the resorts and haciendas that hold a 300-guest party with grace.",
          imageKey: "culture-related-1",
        },
        {
          category: "Tradition",
          title: "The Arras and the Lazo, Explained",
          body: "On the thirteen coins and the cord — what they mean and how they vary by family.",
          imageKey: "culture-related-2",
        },
        {
          category: "Music · Latin",
          title: "Mariachi in the Caribbean: Flown In or Found Local",
          body: "What it really takes to put a full mariachi on a beach far from Mexico.",
          imageKey: "culture-related-3",
        },
        {
          category: "Tradition",
          title: "The Hora Loca, Done Elegantly",
          body: "How the midnight hour stays joyful without tipping into chaos.",
          imageKey: "culture-related-4",
        },
        {
          category: "Cost · Latin",
          title: "What a Luxury Latin Wedding Actually Costs",
          body: "Frank 2026 budgets by guest count, country, and how live the music gets.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("en", "punta-cana") },
        {
          label: "Tulum & Los Cabos",
          href: destinationPath("en", "tulum-los-cabos"),
        },
        { label: "St. Barths", href: destinationPath("en", "st-barths") },
        { label: "Mustique", href: destinationPath("en", "mustique") },
      ],
      sidebarVenues: [
        { label: "Casa de Campo" },
        { label: "Eden Roc Cap Cana" },
        { label: "Hacienda Temozón" },
        { label: "Chablé Maroma" },
      ],
      sidebarCultures: [
        {
          label: "Christian weddings",
          href: culturePath("en", "christian-weddings"),
        },
        {
          label: "European weddings",
          href: culturePath("en", "european-weddings"),
        },
        {
          label: "Interfaith weddings",
          href: culturePath("en", "interfaith-weddings"),
        },
        {
          label: "Indian weddings",
          href: culturePath("en", "indian-weddings"),
        },
      ],
    },
    faq: {
      eyebrow: "Questions, answered",
      headline: "Frequently *asked.*",
      items: [
        {
          question: "Do you plan the church mass too, or only the party?",
          answer: [
            "Both, as one. We coordinate the parish, the priest, the readings, and the arras, lazo and padrinos — and we carry the same care into the reception and the hora loca.",
            "Many planners start at the cocktail and leave the mass to the family. We do not; the ceremony is the heart of the day.",
          ],
        },
        {
          question:
            "Mariachi in the Caribbean — do you fly them in, or find them locally?",
          answer: [
            "Both are possible. For a Mexican family who want a specific mariachi, we fly the group in and handle travel, instruments and lodging. For others, we work with strong regional ensembles already in the Caribbean.",
            "We are honest about cost: flying a full mariachi to Punta Cana is a real line item, and we price it transparently in the first consultation.",
          ],
        },
        {
          question: "What is an hora loca, and can it be elegant?",
          answer: [
            'The hora loca — the "crazy hour" — is a burst near midnight: masks, props, often a second band or a brass line, and everyone on the floor. It is the high point of a Latin reception.',
            "It can absolutely be elegant. We curate the props, light it well, and rehearse the timing, so it feels like a designed crescendo rather than chaos.",
          ],
        },
        {
          question: "What does a luxury Latin wedding cost in 2026?",
          answer: [
            "A useful 2026 range for 150–350 guests is USD $150,000 – $600,000 all-in, depending on country, guest count, and how live the music is.",
            "We share transparent, line-item budgets in the first consultation — including the real cost of live bands and a flown-in mariachi if you want one.",
          ],
        },
        {
          question: "How do Dominican and Mexican customs differ?",
          answer: [
            "Both are usually Catholic, with the arras and lazo. But the emphasis differs: a Mexican wedding centres the padrinos, often with mariachi and a marked hacienda formality; a Dominican wedding leans into merengue and bachata and runs long and loud.",
            'We plan each to its own tradition — never a generic "Latin" template — and ask the family which customs they keep.',
          ],
        },
        {
          question: "Can the ceremony be bilingual?",
          answer: [
            "Yes. We arrange readings and vows in Spanish and English, a bilingual program, and a priest comfortable moving between languages — Portuguese too for Brazilian families.",
            "The goal is simple: no guest, on either side, should feel they are at someone else's wedding.",
          ],
        },
        {
          question: "Why does Grecia call this the studio's own tradition?",
          answer: [
            "Grecia is Dominican, and our home atelier is in Punta Cana. She has planned weddings for her own family and closest friends.",
            "It means the cultural fluency is not researched — it is lived. We plan a Latin wedding the way we would plan one for our own.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "A private conversation —",
      headline: "*Begin* your\nLatin wedding.",
      body: "Tell us the country, the family, the parish, and a rough date. Grecia writes back, personally, within five working days.",
      ctaLabel: "Request a private consultation →",
      ctaHref: staticPath("en", "/contact"),
    },
  },

  // ── Español ───────────────────────────────────────────────────────────────
  es: {
    name: "Bodas Latinas",
    cardEyebrow: "Latina",
    cardBlurb:
      "Arras, lazo, padrinos. Recepciones bilingües con mariachi o bachata.",
    cardMeta: "Descubrir",
    intro:
      "Arras, lazo y padrinos, con recepciones bilingües al ritmo del mariachi o la bachata.",
    hero: {
      eyebrow: "Las Tradiciones",
      scriptOverline: "Una boda de",
      headline: "tradición *latina.*",
      deck: "Esta es la nuestra. Grecia es dominicana; el atelier está en Punta Cana. Una boda latina es una ceremonia católica y una fiesta larga, generosa y a todo volumen — celebrada en dos idiomas, para toda la familia.",
      captionLeft: "Carolina y Mateo · Casa de Campo",
      captionCenter: "El lazo, durante la misa · 2025",
      captionRight: "Lámina VII",
    },
    factStrip: [
      {
        label: "Duración",
        value: "1 – 2 días",
        sub: "Cena de bienvenida + el día",
      },
      {
        label: "Invitados",
        value: "100 – 500",
        sub: "Viaja la familia entera",
      },
      {
        label: "Antelación",
        value: "12 – 18 meses",
        sub: "La parroquia se reserva pronto",
      },
      {
        label: "Tradiciones",
        value: "Mexicana · Dominicana",
        sub: "Colombiana · Argentina",
      },
      {
        label: "Música",
        value: "Mariachi · bachata",
        sub: "Merengue · la hora loca",
      },
      {
        label: "Idiomas",
        value: "ES · EN",
        sub: "PT para familias brasileñas",
      },
    ],
    overview: {
      sideEyebrow: "La tradición",
      sideNote:
        "Esta es la mía. Soy dominicana; nuestro atelier está en Punta Cana. He organizado las bodas de mis primos y de mis amigas más cercanas — y planifico una boda latina como la planificaría para mi propia familia.",
      headline: "Una misa, una *fiesta* y toda la familia.",
      lede: "Una boda latina, en la mayoría de nuestras familias, empieza en la iglesia. La ceremonia católica es el corazón del día — las arras, el lazo, los padrinos de pie como testigos — y todo lo que sigue es la celebración que la familia llevaba años esperando dar.",
      bodyParagraphs: [
        "En toda América Latina la boda no es una sola tradición, sino muchas, y las diferencias importan. Una boda mexicana se apoya en los padrinos — patrocinadores que asumen un papel nombrado, a menudo económico, dentro de la propia ceremonia. Una boda dominicana, la nuestra, es iglesia y luego merengue y bachata hasta que la orquesta se rinde. Una boda colombiana puede llevar la serenata la noche anterior; una boda argentina suele prescindir del cortejo y del lanzamiento del ramo, y se alarga hasta el amanecer.",
        "Lo que comparten es la escala y la calidez. La lista de invitados es larga porque la familia es grande — primos, tíos, padrinos, abuelos, todo el círculo extendido viaja, y tres generaciones bailan en la misma sala. La recepción es larga, la música es en vivo para los momentos que importan, y a nadie se le saca de la pista.",
        "Planificamos la iglesia y la fiesta como un mismo arco. Muchos planificadores dejan la misa a la parroquia y empiezan su trabajo en el cóctel; nosotros no. Coordinamos al sacerdote, las costumbres de la parroquia, las arras y el lazo, el lugar y la señal de los padrinos — y luego llevamos ese mismo cuidado hasta la hora loca de medianoche.",
        "Y planificamos en dos idiomas desde el primer correo. La invitación, el programa, el maestro de ceremonias, el paquete de bienvenida — español e inglés por norma, portugués cuando hay una familia brasileña a la mesa. Ningún invitado debería sentir nunca que está en la boda de otro.",
      ],
      pull: "«Una boda latina es una ceremonia católica y una fiesta que se gana su duración. Sostenemos ambas con las mismas manos.»",
      signatureName: "Grecia",
      signatureRole: "Fundadora · Dominicana · Punta Cana",
    },
    ceremonyArc: {
      eyebrow: "Estructura de la ceremonia",
      headline: "De la misa a la *última canción.*",
      deck: "El arco que sostenemos para una boda latina católica — primero la iglesia, después la fiesta. Las costumbres regionales ajustan el detalle; la forma se mantiene.",
      steps: [
        {
          numeral: "I",
          name: "La misa nupcial",
          sub: "Ceremonia católica",
          when: "Media tarde",
          body: "La mayoría de nuestras parejas se casa por la Iglesia. Una misa nupcial completa, a menudo de una hora, con las lecturas que la familia ha elegido y el sacerdote que los conoce.",
        },
        {
          numeral: "II",
          name: "Arras y lazo",
          sub: "Las monedas y el cordón",
          when: "Durante la misa",
          body: "Las trece arras pasan del novio a la novia como promesa de provisión. El lazo — un cordón en forma de ocho o un rosario — lo colocan los padrinos sobre ambos, uniéndolos como uno.",
        },
        {
          numeral: "III",
          name: "La salida",
          sub: "Fuera de la iglesia",
          when: "Tras la misa",
          body: "La pareja sale entre aplausos, a menudo con campanas, arroz o, en la tradición dominicana, una despedida de metales y tambores que sale directa a la calle.",
        },
        {
          numeral: "IV",
          name: "Cóctel y trío en vivo",
          sub: "La hora de la llegada",
          when: "Anochecer",
          body: "Los invitados pasan a la recepción para el cóctel con un trío o guitarra en vivo — boleros, son, bachata suave — mientras la familia se fotografía.",
        },
        {
          numeral: "V",
          name: "Las entradas",
          sub: "Pareja y cortejo",
          when: "Apertura de la cena",
          body: "El maestro de ceremonias, bilingüe, hace entrar al cortejo y luego a la pareja con una canción elegida para levantar la sala. El primer baile suele abrir la pista de inmediato.",
        },
        {
          numeral: "VI",
          name: "Cena y brindis",
          sub: "Sentados, con discursos",
          when: "Noche",
          body: "Una cena sentada con brindis de padrinos y padres. El ritmo es pausado — la comida es parte de la celebración, no una pausa antes de ella.",
        },
        {
          numeral: "VII",
          name: "Hora loca y última canción",
          sub: "De medianoche en adelante",
          when: "Madrugada",
          body: "Cerca de medianoche estalla la hora loca — máscaras, accesorios, una segunda banda o una línea de metales — y la noche se alarga. La última canción se elige de antemano, y todos están en la pista para ella.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Conceptos de diseño",
      headline: "Tres direcciones, *una calidez.*",
      deck: "Tres direcciones de diseño que hemos construido más de una vez para bodas latinas. Cada boda las adapta — paleta, flores, la escala de la sala.",
      cards: [
        {
          title: "Abundancia Tropical",
          body: "Verdes en capas, heliconia y orquídea, palma y hoja de plátano — el jardín caribeño a todo volumen. Pensado para Punta Cana y las islas.",
          palette: ["#1f3d2b", "#3f6b3a", "#e7a33c", "#d65d3a", "#f3ede0"],
          imageKey: "concept-1",
          rows: [
            { label: "Flores", value: "Heliconia · orquídea · palma" },
            { label: "Mesas", value: "Largas, estilo familiar" },
            { label: "Ideal para", value: "Playa · jardín · resort" },
          ],
        },
        {
          title: "Tarde de Hacienda",
          body: "Terracota cálida, hierro forjado y velas, cempasúchil y dalia — una hacienda mexicana al caer la noche. Lista para el mariachi, hecha para la mesa larga.",
          palette: ["#7a2e22", "#c2683a", "#e0a93f", "#3a2a20", "#efe6d6"],
          imageKey: "concept-2",
          rows: [
            { label: "Flores", value: "Cempasúchil · dalia · rosa" },
            { label: "Mesas", value: "Mesa larga · velas" },
            { label: "Ideal para", value: "Hacienda · patio · finca" },
          ],
        },
        {
          title: "Blanco Costero y Cítricos",
          body: "Marfil y hueso, limón y lima, buganvilla blanca contra la cal — discretamente moderno, la boda costera luminosa. Funciona con cualquier luz.",
          palette: ["#f4efe4", "#e8d9b8", "#d6e3c0", "#e8c23c", "#8a9b6e"],
          imageKey: "concept-3",
          rows: [
            { label: "Flores", value: "Buganvilla blanca · cítricos" },
            { label: "Mesas", value: "Redondas y largas mezcladas" },
            { label: "Ideal para", value: "Costa · villa · terraza" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocolo cultural",
      headline: "Lo que *honramos.*",
      deck: "Seis cosas que sostenemos sin concesiones en una boda latina. No son formalidades — son la boda.",
      items: [
        {
          title: "Los padrinos se honran, no se decoran",
          body: "Padrinos y madrinas — de las arras, del lazo, de los anillos — llevan un papel nombrado. Les explicamos su señal, los sentamos con la familia y nos aseguramos de que aparezcan en el programa. En las bodas mexicanas, sobre todo, su papel es central.",
        },
        {
          title: "Las arras y el lazo siguen a la parroquia de la familia",
          body: "Cada parroquia y cada familia guardan las arras y el lazo de forma algo distinta — quién los lleva, cuándo se colocan, de qué es el lazo. Preguntamos a la familia, no a una plantilla, y seguimos su costumbre al pie de la letra.",
        },
        {
          title: "Música en vivo en los momentos que importan",
          body: "La salida, la entrada, la hora loca — son en vivo, no listas de reproducción. Mariachi, una banda de bachata, merengue, una línea de metales para la hora loca. La música grabada llena los huecos; no sostiene los momentos clave.",
        },
        {
          title: "La hora loca se planifica, no se improvisa",
          body: "La hora loca se programa con el lugar — toques de queda de ruido, la caída de accesorios y máscaras, la hora de llamada de la segunda banda, el cambio de luces. Parece espontánea porque está ensayada.",
        },
        {
          title: "La abuela come primero",
          body: "A los mayores se les sienta, se les sirve y se les cuida antes que a nadie. Los abuelos tienen la mejor mesa, el rincón más tranquilo si lo quieren, y un miembro de nuestro equipo que no se separa de ellos.",
        },
        {
          title: "Un maestro de ceremonias bilingüe por norma",
          body: "El maestro de ceremonias trabaja en español e inglés — cada anuncio, señal de brindis e instrucción en ambos. Se añade el portugués cuando hay una familia brasileña. Ningún invitado adivina nunca qué viene después.",
        },
      ],
    },
    planning: {
      eyebrow: "Planificación de varios días",
      headline: "Dos días, *hora a hora.*",
      deck: "El esquema que usamos para una boda latina típica de 250 invitados — una cena de bienvenida, el día de la boda en torno a la misa y un brunch de recuperación.",
      days: [
        {
          numeral: "I",
          dayLabel: "Día Uno",
          title: "Cena de bienvenida",
          body: "La familia llega a lo largo del día; coordinamos traslados y entradas al hotel. Por la noche, una cena de bienvenida — relajada, a menudo una mesa larga junto al agua, con un trío de guitarra y los primeros brindis de la familia.",
          events: [
            {
              time: "Mañana",
              body: "Llegadas · traslados desde el aeropuerto · check-in",
            },
            {
              time: "16:00",
              body: "Entrega de bolsas de bienvenida · programa bilingüe en cada habitación",
            },
            {
              time: "19:30",
              body: "Cena de bienvenida · mesa larga · trío en vivo · brindis familiares",
            },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Día Dos",
          title: "La boda",
          body: "La misa nupcial a media tarde, las arras y el lazo dentro de ella, luego cóctel, cena, baile y la hora loca cerca de medianoche. El día se arma hacia atrás desde la hora de la ceremonia en la parroquia.",
          events: [
            {
              time: "15:00",
              body: "Preparación de pareja y cortejo · suites separadas",
            },
            {
              time: "17:00",
              body: "Misa nupcial · arras y lazo · padrinos en su lugar",
            },
            {
              time: "18:15",
              body: "Salida · despedida · fotografías de familia",
            },
            { time: "18:45", body: "Hora del cóctel · trío en vivo" },
            {
              time: "20:00",
              body: "Entradas · primer baile · cena sentada · brindis",
            },
            {
              time: "23:30",
              body: "Hora loca · máscaras, accesorios, metales · baile hasta tarde",
            },
            { time: "02:00", body: "La última canción · todos en la pista" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Día Tres",
          title: "Brunch de recuperación",
          body: "Un brunch tardío y tranquilo a la mañana siguiente — en la tradición dominicana, una olla de sancocho hace el trabajo de recuperación. Despedidas, fotos y traslados de regreso para la mayoría; la familia cercana suele quedarse un día más.",
          events: [
            {
              time: "12:00",
              body: "Brunch de recuperación · sancocho · junto a la piscina o el jardín",
            },
            { time: "Tarde", body: "Salidas · traslados al aeropuerto" },
            { time: "Noche", body: "Cena de familia cercana (opcional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilidad de destinos",
      headline: "Dónde *pertenecen* las bodas latinas.",
      viewAllLabel: "Ver todos los destinos →",
      viewAllHref: staticPath("es", "/destinations"),
      cards: [
        {
          rating: 5,
          name: "Punta Cana",
          sub: "República Dominicana · todo el año",
          destinationSlug: "punta-cana",
        },
        {
          rating: 5,
          name: "Tulum y Los Cabos",
          sub: "México · noviembre – abril",
          destinationSlug: "tulum-los-cabos",
        },
        {
          rating: 4,
          name: "St. Barths",
          sub: "Caribe · noviembre – abril",
          destinationSlug: "st-barths",
        },
        {
          rating: 4,
          name: "Mustique",
          sub: "Caribe · diciembre – abril",
          destinationSlug: "mustique",
        },
        {
          rating: 4,
          name: "Toscana",
          sub: "Italia · mayo – octubre",
          destinationSlug: "tuscany",
        },
        {
          rating: 4,
          name: "Costa de Amalfi",
          sub: "Italia · mayo – octubre",
          destinationSlug: "amalfi",
        },
        {
          rating: 3,
          name: "Costa Azul",
          sub: "Francia · junio – septiembre",
          destinationSlug: "cote-dazur",
        },
        {
          rating: 3,
          name: "Los Hamptons",
          sub: "Estados Unidos · junio – septiembre",
          destinationSlug: "the-hamptons",
        },
      ],
    },
    guest: {
      eyebrow: "Gestión de invitados",
      headline: "El cuidado *práctico* de toda la familia.",
      deck: "La capa logística de la que vive o muere una boda latina — porque viaja toda la familia y hay tres generaciones en la sala.",
      cells: [
        {
          title: "Viaje multigeneracional",
          body: "Bloques de habitaciones en distintos rangos de precio para que primos, padrinos y abuelos puedan venir todos. Traslados coordinados a lo largo de días de llegadas, con un enlace familiar que responde en español.",
        },
        {
          title: "Comunicaciones bilingües",
          body: "Cada invitación, programa, cartel y paquete de bienvenida en español e inglés — portugués para familias brasileñas. Un grupo de WhatsApp para cada invitado, tres semanas antes.",
        },
        {
          title: "Niños por todas partes",
          body: "Las bodas latinas traen niños, y los niños se quedan hasta tarde. Un equipo de cuidado infantil multilingüe y una sala tranquila permiten que los padres bailen de verdad, mientras los niños están atendidos y alimentados cerca.",
        },
        {
          title: "Mayores, bien cuidados",
          body: "Habitaciones en planta baja, transporte dedicado, un enlace para los mayores y atención médica de guardia el fin de semana. A la abuela se le sienta, se le sirve y nunca se le deja sola.",
        },
        {
          title: "Amplitud dietética",
          body: "Un menú largo y generoso — con opciones vegetarianas, veganas, sin gluten y sin alérgenos para cada plato. Platos regionales que la familia reconocerá, hechos como es debido.",
        },
        {
          title: "Logística de madrugada",
          body: "La fiesta se alarga, así que el transporte también — traslados escalonados desde medianoche, un regreso seguro para cada invitado y un brunch de recuperación esperando al día siguiente.",
        },
      ],
    },
    related: {
      eyebrow: "Seguir leyendo",
      headline: "Del *diario.*",
      articles: [
        {
          category: "Bodas Latinas · Punta Cana",
          title: "Los mejores lugares para una boda latina en Punta Cana",
          body: "Un registro de los resorts y haciendas que sostienen una fiesta de 300 invitados con gracia.",
          imageKey: "culture-related-1",
        },
        {
          category: "Tradición",
          title: "Las arras y el lazo, explicados",
          body: "Sobre las trece monedas y el cordón — qué significan y cómo varían según la familia.",
          imageKey: "culture-related-2",
        },
        {
          category: "Música · Latina",
          title: "Mariachi en el Caribe: traído o local",
          body: "Lo que de verdad cuesta poner un mariachi completo en una playa lejos de México.",
          imageKey: "culture-related-3",
        },
        {
          category: "Tradición",
          title: "La hora loca, con elegancia",
          body: "Cómo la hora de medianoche se mantiene alegre sin caer en el caos.",
          imageKey: "culture-related-4",
        },
        {
          category: "Coste · Latina",
          title: "Lo que cuesta de verdad una boda latina de lujo",
          body: "Presupuestos francos para 2026 por número de invitados, país y cuánta música en vivo.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("es", "punta-cana") },
        {
          label: "Tulum y Los Cabos",
          href: destinationPath("es", "tulum-los-cabos"),
        },
        { label: "St. Barths", href: destinationPath("es", "st-barths") },
        { label: "Mustique", href: destinationPath("es", "mustique") },
      ],
      sidebarVenues: [
        { label: "Casa de Campo" },
        { label: "Eden Roc Cap Cana" },
        { label: "Hacienda Temozón" },
        { label: "Chablé Maroma" },
      ],
      sidebarCultures: [
        {
          label: "Bodas cristianas",
          href: culturePath("es", "christian-weddings"),
        },
        {
          label: "Bodas europeas",
          href: culturePath("es", "european-weddings"),
        },
        {
          label: "Bodas interreligiosas",
          href: culturePath("es", "interfaith-weddings"),
        },
        { label: "Bodas indias", href: culturePath("es", "indian-weddings") },
      ],
    },
    faq: {
      eyebrow: "Preguntas, respondidas",
      headline: "Preguntas *frecuentes.*",
      items: [
        {
          question:
            "¿También planifican la misa en la iglesia, o solo la fiesta?",
          answer: [
            "Ambas, como una sola. Coordinamos la parroquia, al sacerdote, las lecturas y las arras, el lazo y los padrinos — y llevamos ese mismo cuidado a la recepción y a la hora loca.",
            "Muchos planificadores empiezan en el cóctel y dejan la misa a la familia. Nosotros no; la ceremonia es el corazón del día.",
          ],
        },
        {
          question:
            "Mariachi en el Caribe, ¿lo traen de fuera o lo buscan local?",
          answer: [
            "Ambas opciones son posibles. Para una familia mexicana que quiere un mariachi concreto, traemos al grupo y gestionamos viaje, instrumentos y alojamiento. Para otras, trabajamos con conjuntos regionales fuertes ya presentes en el Caribe.",
            "Somos honestos con el coste: traer un mariachi completo a Punta Cana es una partida real, y la presupuestamos con transparencia en la primera consulta.",
          ],
        },
        {
          question: "¿Qué es una hora loca y puede ser elegante?",
          answer: [
            "La hora loca es un estallido cerca de medianoche: máscaras, accesorios, a menudo una segunda banda o una línea de metales, y todos en la pista. Es el punto culminante de una recepción latina.",
            "Puede ser absolutamente elegante. Curamos los accesorios, la iluminamos bien y ensayamos el ritmo, para que se sienta como un crescendo diseñado y no como caos.",
          ],
        },
        {
          question: "¿Cuánto cuesta una boda latina de lujo en 2026?",
          answer: [
            "Un rango útil para 2026, de 150 a 350 invitados, es de USD 150.000 – 600.000 todo incluido, según el país, el número de invitados y cuánta música en vivo haya.",
            "Compartimos presupuestos transparentes y detallados en la primera consulta — incluido el coste real de las bandas en vivo y de un mariachi traído de fuera si lo desean.",
          ],
        },
        {
          question:
            "¿En qué se diferencian las costumbres dominicanas de las mexicanas?",
          answer: [
            "Ambas suelen ser católicas, con arras y lazo. Pero el énfasis difiere: una boda mexicana centra a los padrinos, a menudo con mariachi y una marcada formalidad de hacienda; una boda dominicana se vuelca en el merengue y la bachata, y se alarga, larga y ruidosa.",
            "Planificamos cada una según su propia tradición — nunca una plantilla genérica «latina» — y preguntamos a la familia qué costumbres guarda.",
          ],
        },
        {
          question: "¿Puede ser bilingüe la ceremonia?",
          answer: [
            "Sí. Organizamos lecturas y votos en español e inglés, un programa bilingüe y un sacerdote cómodo moviéndose entre idiomas — también portugués para familias brasileñas.",
            "El objetivo es sencillo: ningún invitado, de ninguno de los dos lados, debería sentir que está en la boda de otro.",
          ],
        },
        {
          question: "¿Por qué llama Grecia a esta su propia tradición?",
          answer: [
            "Grecia es dominicana, y nuestro atelier está en Punta Cana. Ha organizado bodas para su propia familia y sus amigas más cercanas.",
            "Significa que la fluidez cultural no se ha investigado — se ha vivido. Planificamos una boda latina como la planificaríamos para los nuestros.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Una conversación privada —",
      headline: "*Comienza* tu\nboda latina.",
      body: "Cuéntanos el país, la familia, la parroquia y una fecha aproximada. Grecia responde, en persona, en un plazo de cinco días laborables.",
      ctaLabel: "Solicitar una consulta privada →",
      ctaHref: staticPath("es", "/contact"),
    },
  },

  // ── Français ──────────────────────────────────────────────────────────────
  fr: {
    name: "Mariages Latins",
    cardEyebrow: "Latin",
    cardBlurb:
      "Arras, lazo, padrinos. Réceptions bilingues avec mariachi ou bachata.",
    cardMeta: "Découvrir",
    intro:
      "Arras, lazo et padrinos, avec des réceptions bilingues portées par le mariachi ou la bachata.",
    hero: {
      eyebrow: "Les Traditions",
      scriptOverline: "Un mariage de",
      headline: "tradition *latine.*",
      deck: "C'est la nôtre. Grecia est dominicaine ; l'atelier se trouve à Punta Cana. Un mariage latin, c'est une cérémonie catholique et une fête longue, généreuse, à plein volume — tenue en deux langues, pour toute la famille.",
      captionLeft: "Carolina & Mateo · Casa de Campo",
      captionCenter: "Le lazo, pendant la messe · 2025",
      captionRight: "Planche VII",
    },
    factStrip: [
      {
        label: "Durée",
        value: "1 – 2 jours",
        sub: "Dîner d'accueil + le jour",
      },
      {
        label: "Invités",
        value: "100 – 500",
        sub: "La famille voyage en entier",
      },
      {
        label: "Délai",
        value: "12 – 18 mois",
        sub: "La paroisse se réserve tôt",
      },
      {
        label: "Traditions",
        value: "Mexicaine · Dominicaine",
        sub: "Colombienne · Argentine",
      },
      {
        label: "Musique",
        value: "Mariachi · bachata",
        sub: "Merengue · la hora loca",
      },
      {
        label: "Langues",
        value: "ES · EN",
        sub: "PT pour les familles brésiliennes",
      },
    ],
    overview: {
      sideEyebrow: "La tradition",
      sideNote:
        "C'est la mienne. Je suis dominicaine ; notre atelier est à Punta Cana. J'ai organisé les mariages de mes cousins et de mes amies les plus proches — et je planifie un mariage latin comme je le ferais pour ma propre famille.",
      headline: "Une messe, une *fête,* et toute la famille.",
      lede: "Un mariage latin, dans la plupart de nos familles, commence à l'église. La cérémonie catholique est le cœur de la journée — les arras, le lazo, les padrinos debout comme témoins — et tout ce qui suit est la célébration que la famille attendait de donner depuis des années.",
      bodyParagraphs: [
        "À travers l'Amérique latine, le mariage n'est pas une seule tradition mais plusieurs, et les différences comptent. Un mariage mexicain s'appuie sur les padrinos — des parrains qui assument un rôle nommé, souvent financier, au sein même de la cérémonie. Un mariage dominicain, le nôtre, c'est l'église puis le merengue et la bachata jusqu'à ce que l'orchestre rende les armes. Un mariage colombien peut porter la serenata la veille ; un mariage argentin se passe souvent du cortège et du lancer de bouquet, et se prolonge jusqu'à l'aube.",
        "Ce qu'ils partagent, c'est l'ampleur et la chaleur. La liste d'invités est longue parce que la famille est grande — primos, tíos, padrinos, abuelos, tout le cercle élargi voyage, et trois générations dansent dans la même salle. La réception est longue, la musique est live pour les moments qui comptent, et personne n'est chassé de la piste.",
        "Nous planifions l'église et la fête comme un seul arc. Beaucoup de planificateurs laissent la messe à la paroisse et commencent leur travail au cocktail ; pas nous. Nous coordonnons le prêtre, les usages de la paroisse, les arras et le lazo, la place et le signal des padrinos — puis nous portons ce même soin jusqu'à la hora loca de minuit.",
        "Et nous planifions en deux langues dès le premier courriel. L'invitation, le programme, le maître de cérémonie, le coffret d'accueil — espagnol et anglais par défaut, portugais quand une famille brésilienne est à table. Aucun invité ne devrait jamais avoir le sentiment d'être au mariage d'un autre.",
      ],
      pull: "« Un mariage latin, c'est une cérémonie catholique et une fête qui mérite sa durée. Nous tenons les deux des mêmes mains. »",
      signatureName: "Grecia",
      signatureRole: "Fondatrice · Dominicaine · Punta Cana",
    },
    ceremonyArc: {
      eyebrow: "Structure de la cérémonie",
      headline: "De la messe à la *dernière chanson.*",
      deck: "L'arc que nous tenons pour un mariage latin catholique — l'église d'abord, la fête ensuite. Les usages régionaux ajustent le détail ; la forme tient.",
      steps: [
        {
          numeral: "I",
          name: "La messe nuptiale",
          sub: "Cérémonie catholique",
          when: "Fin d'après-midi",
          body: "La plupart de nos couples se marient à l'Église. Une messe nuptiale complète, souvent d'une heure, avec les lectures choisies par la famille et le prêtre qui les connaît.",
        },
        {
          numeral: "II",
          name: "Arras & lazo",
          sub: "Les pièces et le cordon",
          when: "Pendant la messe",
          body: "Les treize arras passent du marié à la mariée comme promesse de subvenir. Le lazo — un cordon en huit ou un chapelet — est posé sur les deux par les padrinos, les liant comme un seul.",
        },
        {
          numeral: "III",
          name: "La sortie",
          sub: "Hors de l'église",
          when: "Après la messe",
          body: "Le couple sort sous les applaudissements, souvent au son des cloches, du riz, ou dans la tradition dominicaine, une fanfare de cuivres et de tambours qui part droit dans la rue.",
        },
        {
          numeral: "IV",
          name: "Cocktail & trio live",
          sub: "L'heure de l'arrivée",
          when: "Début de soirée",
          body: "Les invités gagnent la réception pour le cocktail, avec un trio ou une guitare en live — boléros, son, bachata douce — pendant que la famille se fait photographier.",
        },
        {
          numeral: "V",
          name: "Les entrées",
          sub: "Couple et cortège",
          when: "Ouverture du dîner",
          body: "Le maître de cérémonie, bilingue, fait entrer le cortège puis le couple sur une chanson choisie pour soulever la salle. La première danse ouvre souvent la piste aussitôt.",
        },
        {
          numeral: "VI",
          name: "Dîner & toasts",
          sub: "Assis, avec discours",
          when: "Soirée",
          body: "Un dîner assis avec les toasts des padrinos et des parents. Le rythme est sans hâte — le repas fait partie de la célébration, et non d'une pause avant elle.",
        },
        {
          numeral: "VII",
          name: "Hora loca & dernière chanson",
          sub: "À partir de minuit",
          when: "Fin de nuit",
          body: "Vers minuit, la hora loca éclate — masques, accessoires, un second orchestre ou une ligne de cuivres — et la nuit se prolonge. La dernière chanson est choisie d'avance, et tout le monde est sur la piste pour elle.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Concepts de design",
      headline: "Trois directions, *une chaleur.*",
      deck: "Trois directions de design que nous avons construites plus d'une fois pour des mariages latins. Chaque mariage les adapte — palette, fleurs, échelle de la salle.",
      cards: [
        {
          title: "Abondance Tropicale",
          body: "Verdure en couches, héliconia et orchidée, palme et feuille de bananier — le jardin caribéen à plein volume. Pensé pour Punta Cana et les îles.",
          palette: ["#1f3d2b", "#3f6b3a", "#e7a33c", "#d65d3a", "#f3ede0"],
          imageKey: "concept-1",
          rows: [
            { label: "Fleurs", value: "Héliconia · orchidée · palme" },
            { label: "Tables", value: "Longues, en mode familial" },
            { label: "Idéal pour", value: "Plage · jardin · resort" },
          ],
        },
        {
          title: "Soirée Hacienda",
          body: "Terre cuite chaude, ferronnerie et bougies, œillet d'Inde et dahlia — une hacienda mexicaine à la nuit tombée. Prête pour le mariachi, faite pour la table longue.",
          palette: ["#7a2e22", "#c2683a", "#e0a93f", "#3a2a20", "#efe6d6"],
          imageKey: "concept-2",
          rows: [
            { label: "Fleurs", value: "Œillet d'Inde · dahlia · rose" },
            { label: "Tables", value: "Table longue · bougies" },
            { label: "Idéal pour", value: "Hacienda · patio · domaine" },
          ],
        },
        {
          title: "Blanc Côtier & Agrumes",
          body: "Ivoire et os, citron et citron vert, bougainvillier blanc contre le badigeon — discrètement moderne, le mariage côtier lumineux. Rend dans toute lumière.",
          palette: ["#f4efe4", "#e8d9b8", "#d6e3c0", "#e8c23c", "#8a9b6e"],
          imageKey: "concept-3",
          rows: [
            { label: "Fleurs", value: "Bougainvillier blanc · agrumes" },
            { label: "Tables", value: "Rondes et longues mêlées" },
            { label: "Idéal pour", value: "Côte · villa · terrasse" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocole culturel",
      headline: "Ce que nous *honorons.*",
      deck: "Six choses que nous tenons sans compromis lors d'un mariage latin. Ce ne sont pas des formalités — c'est le mariage.",
      items: [
        {
          title: "Les padrinos sont honorés, non décoratifs",
          body: "Padrinos et madrinas — des arras, du lazo, des alliances — portent un rôle nommé. Nous leur expliquons leur signal, les plaçons avec la famille et veillons à ce qu'ils figurent au programme. Dans les mariages mexicains surtout, leur rôle est central.",
        },
        {
          title: "Les arras et le lazo suivent la paroisse de la famille",
          body: "Chaque paroisse et chaque famille gardent les arras et le lazo un peu différemment — qui les porte, quand on les pose, en quoi est fait le lazo. Nous demandons à la famille, pas à un modèle, et suivons leur usage à la lettre.",
        },
        {
          title: "De la musique live aux moments qui comptent",
          body: "La sortie, l'entrée, la hora loca — c'est du live, pas des playlists. Mariachi, un orchestre de bachata, merengue, une ligne de cuivres pour la hora loca. La musique enregistrée comble les vides ; elle ne porte pas les moments clés.",
        },
        {
          title: "La hora loca se planifie, ne s'improvise pas",
          body: "La hora loca est calée avec le lieu — couvre-feux sonores, la chute des accessoires et masques, l'heure d'appel du second orchestre, le changement de lumière. Elle paraît spontanée parce qu'elle est répétée.",
        },
        {
          title: "La abuela mange en premier",
          body: "Les aînés sont assis, servis et soignés avant tout le monde. Les grands-parents ont la meilleure table, le coin le plus calme s'ils le souhaitent, et un membre de notre équipe qui ne les quitte pas.",
        },
        {
          title: "Un maître de cérémonie bilingue par défaut",
          body: "Le maître de cérémonie travaille en espagnol et en anglais — chaque annonce, signal de toast et instruction dans les deux. Le portugais s'ajoute quand une famille brésilienne est présente. Aucun invité ne devine jamais ce qui vient.",
        },
      ],
    },
    planning: {
      eyebrow: "Planification sur plusieurs jours",
      headline: "Deux jours, *heure par heure.*",
      deck: "Le schéma que nous utilisons pour un mariage latin type de 250 invités — un dîner d'accueil, le jour du mariage autour de la messe, et un brunch de récupération.",
      days: [
        {
          numeral: "I",
          dayLabel: "Jour Un",
          title: "Dîner d'accueil",
          body: "La famille arrive au fil de la journée ; nous coordonnons transferts et arrivées à l'hôtel. Le soir, un dîner d'accueil — détendu, souvent une table longue au bord de l'eau, avec un trio de guitare et les premiers toasts de la famille.",
          events: [
            {
              time: "Matin",
              body: "Arrivées · transferts aéroport · enregistrement hôtel",
            },
            {
              time: "16:00",
              body: "Remise des coffrets d'accueil · programme bilingue dans chaque chambre",
            },
            {
              time: "19:30",
              body: "Dîner d'accueil · table longue · trio live · toasts en famille",
            },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Jour Deux",
          title: "Le mariage",
          body: "La messe nuptiale en fin d'après-midi, les arras et le lazo en son sein, puis cocktail, dîner, danse, et la hora loca vers minuit. La journée est construite à rebours depuis l'heure de la cérémonie à la paroisse.",
          events: [
            {
              time: "15:00",
              body: "Préparation du couple et du cortège · suites séparées",
            },
            {
              time: "17:00",
              body: "Messe nuptiale · arras & lazo · padrinos en place",
            },
            {
              time: "18:15",
              body: "Sortie · haie d'honneur · photographies de famille",
            },
            { time: "18:45", body: "Heure du cocktail · trio live" },
            {
              time: "20:00",
              body: "Entrées · première danse · dîner assis · toasts",
            },
            {
              time: "23:30",
              body: "Hora loca · masques, accessoires, cuivres · danse jusqu'à tard",
            },
            {
              time: "02:00",
              body: "La dernière chanson · tout le monde sur la piste",
            },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Jour Trois",
          title: "Brunch de récupération",
          body: "Un brunch tardif et tranquille le lendemain — dans la tradition dominicaine, une marmite de sancocho fait le travail de récupération. Au revoir, photos et transferts retour pour la plupart ; la famille proche s'attarde souvent un jour de plus.",
          events: [
            {
              time: "12:00",
              body: "Brunch de récupération · sancocho · piscine ou jardin",
            },
            { time: "Après-midi", body: "Départs · transferts aéroport" },
            { time: "Soir", body: "Dîner en famille proche (en option)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilité des destinations",
      headline: "Où les mariages latins *trouvent leur place.*",
      viewAllLabel: "Voir toutes les destinations →",
      viewAllHref: staticPath("fr", "/destinations"),
      cards: [
        {
          rating: 5,
          name: "Punta Cana",
          sub: "République dominicaine · toute l'année",
          destinationSlug: "punta-cana",
        },
        {
          rating: 5,
          name: "Tulum & Los Cabos",
          sub: "Mexique · novembre – avril",
          destinationSlug: "tulum-los-cabos",
        },
        {
          rating: 4,
          name: "St. Barths",
          sub: "Caraïbes · novembre – avril",
          destinationSlug: "st-barths",
        },
        {
          rating: 4,
          name: "Mustique",
          sub: "Caraïbes · décembre – avril",
          destinationSlug: "mustique",
        },
        {
          rating: 4,
          name: "Toscane",
          sub: "Italie · mai – octobre",
          destinationSlug: "tuscany",
        },
        {
          rating: 4,
          name: "Côte amalfitaine",
          sub: "Italie · mai – octobre",
          destinationSlug: "amalfi",
        },
        {
          rating: 3,
          name: "Côte d'Azur",
          sub: "France · juin – septembre",
          destinationSlug: "cote-dazur",
        },
        {
          rating: 3,
          name: "Les Hamptons",
          sub: "États-Unis · juin – septembre",
          destinationSlug: "the-hamptons",
        },
      ],
    },
    guest: {
      eyebrow: "Gestion des invités",
      headline: "Le soin *pratique* de toute la famille.",
      deck: "La couche logistique dont dépend un mariage latin — parce que toute la famille voyage et que trois générations sont dans la salle.",
      cells: [
        {
          title: "Voyage multigénérationnel",
          body: "Des blocs de chambres à plusieurs gammes de prix pour que cousins, padrinos et grands-parents puissent tous venir. Transferts coordonnés sur plusieurs jours d'arrivées, avec un référent famille qui répond en espagnol.",
        },
        {
          title: "Communications bilingues",
          body: "Chaque invitation, programme, panneau et coffret d'accueil en espagnol et en anglais — portugais pour les familles brésiliennes. Un groupe WhatsApp pour chaque invité, trois semaines avant.",
        },
        {
          title: "Des enfants partout",
          body: "Les mariages latins amènent des enfants, et les enfants restent tard. Une équipe de garde multilingue et une salle calme permettent aux parents de vraiment danser, pendant que les enfants sont gardés et nourris à proximité.",
        },
        {
          title: "Les aînés, pris en charge",
          body: "Chambres de plain-pied, transport dédié, un référent pour les aînés et une astreinte médicale le week-end. La abuela est assise, servie, et jamais laissée seule.",
        },
        {
          title: "Ampleur des régimes",
          body: "Un menu long et généreux — avec des options végétariennes, véganes, sans gluten et sans allergènes pour chaque plat. Des plats régionaux que la famille reconnaîtra, faits comme il faut.",
        },
        {
          title: "Logistique de fin de nuit",
          body: "La fête se prolonge, donc le transport aussi — transferts échelonnés à partir de minuit, un retour sûr pour chaque invité, et un brunch de récupération qui attend le lendemain.",
        },
      ],
    },
    related: {
      eyebrow: "Continuer la lecture",
      headline: "Du *journal.*",
      articles: [
        {
          category: "Mariages Latins · Punta Cana",
          title: "Les meilleurs lieux pour un mariage latin à Punta Cana",
          body: "Un registre des resorts et haciendas qui tiennent une fête de 300 invités avec grâce.",
          imageKey: "culture-related-1",
        },
        {
          category: "Tradition",
          title: "Les arras et le lazo, expliqués",
          body: "Sur les treize pièces et le cordon — ce qu'ils signifient et comment ils varient selon la famille.",
          imageKey: "culture-related-2",
        },
        {
          category: "Musique · Latine",
          title: "Le mariachi aux Caraïbes : importé ou local",
          body: "Ce qu'il faut vraiment pour poser un mariachi complet sur une plage loin du Mexique.",
          imageKey: "culture-related-3",
        },
        {
          category: "Tradition",
          title: "La hora loca, avec élégance",
          body: "Comment l'heure de minuit reste joyeuse sans basculer dans le chaos.",
          imageKey: "culture-related-4",
        },
        {
          category: "Coût · Latin",
          title: "Ce que coûte vraiment un mariage latin de luxe",
          body: "Budgets francs pour 2026 par nombre d'invités, pays et part de musique live.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("fr", "punta-cana") },
        {
          label: "Tulum & Los Cabos",
          href: destinationPath("fr", "tulum-los-cabos"),
        },
        { label: "St. Barths", href: destinationPath("fr", "st-barths") },
        { label: "Mustique", href: destinationPath("fr", "mustique") },
      ],
      sidebarVenues: [
        { label: "Casa de Campo" },
        { label: "Eden Roc Cap Cana" },
        { label: "Hacienda Temozón" },
        { label: "Chablé Maroma" },
      ],
      sidebarCultures: [
        {
          label: "Mariages chrétiens",
          href: culturePath("fr", "christian-weddings"),
        },
        {
          label: "Mariages européens",
          href: culturePath("fr", "european-weddings"),
        },
        {
          label: "Mariages interconfessionnels",
          href: culturePath("fr", "interfaith-weddings"),
        },
        {
          label: "Mariages indiens",
          href: culturePath("fr", "indian-weddings"),
        },
      ],
    },
    faq: {
      eyebrow: "Questions, réponses",
      headline: "Questions *fréquentes.*",
      items: [
        {
          question:
            "Planifiez-vous aussi la messe à l'église, ou seulement la fête ?",
          answer: [
            "Les deux, comme un tout. Nous coordonnons la paroisse, le prêtre, les lectures et les arras, le lazo et les padrinos — et nous portons ce même soin jusqu'à la réception et la hora loca.",
            "Beaucoup de planificateurs commencent au cocktail et laissent la messe à la famille. Pas nous ; la cérémonie est le cœur de la journée.",
          ],
        },
        {
          question:
            "Le mariachi aux Caraïbes — le faites-vous venir ou le trouvez-vous sur place ?",
          answer: [
            "Les deux sont possibles. Pour une famille mexicaine qui veut un mariachi précis, nous faisons venir le groupe et gérons voyage, instruments et hébergement. Pour d'autres, nous travaillons avec de solides ensembles régionaux déjà présents aux Caraïbes.",
            "Nous sommes honnêtes sur le coût : faire venir un mariachi complet à Punta Cana est une vraie ligne de budget, que nous chiffrons en toute transparence dès la première consultation.",
          ],
        },
        {
          question: "Qu'est-ce qu'une hora loca, et peut-elle être élégante ?",
          answer: [
            "La hora loca — l'« heure folle » — est un éclat vers minuit : masques, accessoires, souvent un second orchestre ou une ligne de cuivres, et tout le monde sur la piste. C'est l'apogée d'une réception latine.",
            "Elle peut tout à fait être élégante. Nous choisissons les accessoires, l'éclairons bien et en répétons le tempo, pour qu'elle ressemble à un crescendo conçu plutôt qu'au chaos.",
          ],
        },
        {
          question: "Combien coûte un mariage latin de luxe en 2026 ?",
          answer: [
            "Une fourchette utile pour 2026, de 150 à 350 invités, va de 150 000 à 600 000 USD tout compris, selon le pays, le nombre d'invités et la part de musique live.",
            "Nous partageons des budgets transparents et détaillés dès la première consultation — y compris le coût réel des orchestres live et d'un mariachi importé si vous en voulez un.",
          ],
        },
        {
          question:
            "En quoi les usages dominicains et mexicains diffèrent-ils ?",
          answer: [
            "Les deux sont généralement catholiques, avec les arras et le lazo. Mais l'accent diffère : un mariage mexicain centre les padrinos, souvent avec mariachi et une formalité d'hacienda marquée ; un mariage dominicain se livre au merengue et à la bachata, et se prolonge, long et bruyant.",
            "Nous planifions chacun selon sa propre tradition — jamais un modèle « latin » générique — et demandons à la famille quels usages elle garde.",
          ],
        },
        {
          question: "La cérémonie peut-elle être bilingue ?",
          answer: [
            "Oui. Nous organisons lectures et vœux en espagnol et en anglais, un programme bilingue et un prêtre à l'aise entre les langues — le portugais aussi pour les familles brésiliennes.",
            "Le but est simple : aucun invité, d'aucun des deux côtés, ne devrait avoir le sentiment d'être au mariage d'un autre.",
          ],
        },
        {
          question: "Pourquoi Grecia appelle-t-elle cela sa propre tradition ?",
          answer: [
            "Grecia est dominicaine, et notre atelier est à Punta Cana. Elle a organisé des mariages pour sa propre famille et ses amies les plus proches.",
            "Cela signifie que la fluidité culturelle n'est pas étudiée — elle est vécue. Nous planifions un mariage latin comme nous le ferions pour les nôtres.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Une conversation privée —",
      headline: "*Commencez* votre\nmariage latin.",
      body: "Dites-nous le pays, la famille, la paroisse et une date approximative. Grecia répond, en personne, sous cinq jours ouvrés.",
      ctaLabel: "Demander une consultation privée →",
      ctaHref: staticPath("fr", "/contact"),
    },
  },

  // ── Português ─────────────────────────────────────────────────────────────
  pt: {
    name: "Casamentos Latinos",
    cardEyebrow: "Latino",
    cardBlurb:
      "Arras, lazo, padrinhos. Receções bilingues com mariachi ou bachata.",
    cardMeta: "Descobrir",
    intro:
      "Arras, lazo e padrinhos, com receções bilingues conduzidas por mariachi ou bachata.",
    hero: {
      eyebrow: "As Tradições",
      scriptOverline: "Um casamento de",
      headline: "tradição *latina.*",
      deck: "Este é o nosso. Grecia é dominicana; o ateliê fica em Punta Cana. Um casamento latino é uma cerimónia católica e uma festa longa, generosa e em alto volume — realizada em duas línguas, para toda a família.",
      captionLeft: "Carolina e Mateo · Casa de Campo",
      captionCenter: "O lazo, durante a missa · 2025",
      captionRight: "Estampa VII",
    },
    factStrip: [
      {
        label: "Duração",
        value: "1 – 2 dias",
        sub: "Jantar de boas-vindas + o dia",
      },
      {
        label: "Convidados",
        value: "100 – 500",
        sub: "Viaja a família inteira",
      },
      {
        label: "Antecedência",
        value: "12 – 18 meses",
        sub: "A paróquia reserva-se cedo",
      },
      {
        label: "Tradições",
        value: "Mexicana · Dominicana",
        sub: "Colombiana · Argentina",
      },
      {
        label: "Música",
        value: "Mariachi · bachata",
        sub: "Merengue · a hora loca",
      },
      {
        label: "Línguas",
        value: "ES · EN",
        sub: "PT para famílias brasileiras",
      },
    ],
    overview: {
      sideEyebrow: "A tradição",
      sideNote:
        "Este é o meu. Sou dominicana; o nosso ateliê fica em Punta Cana. Organizei os casamentos dos meus primos e das minhas amigas mais próximas — e planeio um casamento latino como o planearia para a minha própria família.",
      headline: "Uma missa, uma *festa* e toda a família.",
      lede: "Um casamento latino, na maioria das nossas famílias, começa na igreja. A cerimónia católica é o coração do dia — as arras, o lazo, os padrinhos de pé como testemunhas — e tudo o que se segue é a celebração que a família esperava dar há anos.",
      bodyParagraphs: [
        "Por toda a América Latina o casamento não é uma só tradição, mas muitas, e as diferenças importam. Um casamento mexicano apoia-se nos padrinhos — patrocinadores que assumem um papel nomeado, muitas vezes financeiro, dentro da própria cerimónia. Um casamento dominicano, o nosso, é igreja e depois merengue e bachata até a orquestra ceder. Um casamento colombiano pode levar a serenata na véspera; um casamento argentino dispensa muitas vezes o cortejo e o lançamento do ramo, e estende-se até ao amanhecer.",
        "O que partilham é a escala e o calor. A lista de convidados é longa porque a família é grande — primos, tíos, padrinhos, avós, todo o círculo alargado viaja, e três gerações dançam na mesma sala. A receção é longa, a música é ao vivo nos momentos que importam, e ninguém é tirado da pista.",
        "Planeamos a igreja e a festa como um único arco. Muitos planeadores deixam a missa à paróquia e começam o seu trabalho no cocktail; nós não. Coordenamos o padre, os costumes da paróquia, as arras e o lazo, o lugar e o sinal dos padrinhos — e depois levamos esse mesmo cuidado até à hora loca da meia-noite.",
        "E planeamos em duas línguas desde o primeiro e-mail. O convite, o programa, o mestre de cerimónias, o kit de boas-vindas — espanhol e inglês por norma, português quando há uma família brasileira à mesa. Nenhum convidado deveria sentir alguma vez que está no casamento de outra pessoa.",
      ],
      pull: "«Um casamento latino é uma cerimónia católica e uma festa que merece a sua duração. Sustentamos ambas com as mesmas mãos.»",
      signatureName: "Grecia",
      signatureRole: "Fundadora · Dominicana · Punta Cana",
    },
    ceremonyArc: {
      eyebrow: "Estrutura da cerimónia",
      headline: "Da missa à *última canção.*",
      deck: "O arco que sustentamos para um casamento latino católico — a igreja primeiro, a festa depois. Os costumes regionais ajustam o detalhe; a forma mantém-se.",
      steps: [
        {
          numeral: "I",
          name: "A missa nupcial",
          sub: "Cerimónia católica",
          when: "Final da tarde",
          body: "A maioria dos nossos casais casa-se pela Igreja. Uma missa nupcial completa, muitas vezes de uma hora, com as leituras escolhidas pela família e o padre que os conhece.",
        },
        {
          numeral: "II",
          name: "Arras e lazo",
          sub: "As moedas e o cordão",
          when: "Durante a missa",
          body: "As treze arras passam do noivo à noiva como promessa de provimento. O lazo — um cordão em oito ou um terço — é colocado sobre ambos pelos padrinhos, unindo-os como um só.",
        },
        {
          numeral: "III",
          name: "A saída",
          sub: "Para fora da igreja",
          when: "Após a missa",
          body: "O casal sai entre aplausos, muitas vezes com sinos, arroz, ou na tradição dominicana, uma despedida de metais e tambores que segue direta para a rua.",
        },
        {
          numeral: "IV",
          name: "Cocktail e trio ao vivo",
          sub: "A hora da chegada",
          when: "Início da noite",
          body: "Os convidados passam à receção para o cocktail com um trio ou guitarra ao vivo — boleros, son, bachata suave — enquanto a família se fotografa.",
        },
        {
          numeral: "V",
          name: "As entradas",
          sub: "Casal e cortejo",
          when: "Abertura do jantar",
          body: "O mestre de cerimónias, bilingue, faz entrar o cortejo e depois o casal ao som de uma canção escolhida para levantar a sala. A primeira dança abre muitas vezes a pista de imediato.",
        },
        {
          numeral: "VI",
          name: "Jantar e brindes",
          sub: "Sentados, com discursos",
          when: "Noite",
          body: "Um jantar sentado com brindes dos padrinhos e dos pais. O ritmo é sem pressa — a refeição faz parte da celebração, não é uma pausa antes dela.",
        },
        {
          numeral: "VII",
          name: "Hora loca e última canção",
          sub: "Da meia-noite em diante",
          when: "Madrugada",
          body: "Perto da meia-noite irrompe a hora loca — máscaras, adereços, uma segunda banda ou uma linha de metais — e a noite estende-se. A última canção é escolhida de antemão, e todos estão na pista para ela.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Conceitos de design",
      headline: "Três direções, *um calor.*",
      deck: "Três direções de design que construímos mais de uma vez para casamentos latinos. Cada casamento adapta-as — paleta, flores, a escala da sala.",
      cards: [
        {
          title: "Abundância Tropical",
          body: "Verdes em camadas, helicónia e orquídea, palma e folha de bananeira — o jardim caribenho em alto volume. Pensado para Punta Cana e as ilhas.",
          palette: ["#1f3d2b", "#3f6b3a", "#e7a33c", "#d65d3a", "#f3ede0"],
          imageKey: "concept-1",
          rows: [
            { label: "Flores", value: "Helicónia · orquídea · palma" },
            { label: "Mesas", value: "Longas, ao estilo familiar" },
            { label: "Ideal para", value: "Praia · jardim · resort" },
          ],
        },
        {
          title: "Tarde de Hacienda",
          body: "Terracota quente, ferro forjado e velas, cravo-de-defunto e dália — uma hacienda mexicana ao cair da noite. Pronta para o mariachi, feita para a mesa longa.",
          palette: ["#7a2e22", "#c2683a", "#e0a93f", "#3a2a20", "#efe6d6"],
          imageKey: "concept-2",
          rows: [
            { label: "Flores", value: "Cravo-de-defunto · dália · rosa" },
            { label: "Mesas", value: "Mesa longa · velas" },
            { label: "Ideal para", value: "Hacienda · pátio · quinta" },
          ],
        },
        {
          title: "Branco Costeiro e Citrinos",
          body: "Marfim e osso, limão e lima, buganvília branca contra a cal — discretamente moderno, o casamento costeiro luminoso. Funciona em qualquer luz.",
          palette: ["#f4efe4", "#e8d9b8", "#d6e3c0", "#e8c23c", "#8a9b6e"],
          imageKey: "concept-3",
          rows: [
            { label: "Flores", value: "Buganvília branca · citrinos" },
            { label: "Mesas", value: "Redondas e longas misturadas" },
            { label: "Ideal para", value: "Costa · vila · terraço" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocolo cultural",
      headline: "O que *honramos.*",
      deck: "Seis coisas que sustentamos sem cedências num casamento latino. Não são formalidades — são o casamento.",
      items: [
        {
          title: "Os padrinhos são honrados, não decorativos",
          body: "Padrinhos e madrinhas — das arras, do lazo, das alianças — carregam um papel nomeado. Explicamos-lhes o seu sinal, sentamo-los com a família e garantimos que constam do programa. Nos casamentos mexicanos sobretudo, o seu papel é central.",
        },
        {
          title: "As arras e o lazo seguem a paróquia da família",
          body: "Cada paróquia e cada família guardam as arras e o lazo de forma um pouco diferente — quem os leva, quando são colocados, de que é feito o lazo. Perguntamos à família, não a um modelo, e seguimos o seu costume à letra.",
        },
        {
          title: "Música ao vivo nos momentos que importam",
          body: "A saída, a entrada, a hora loca — são ao vivo, não playlists. Mariachi, uma banda de bachata, merengue, uma linha de metais para a hora loca. A música gravada preenche os intervalos; não sustenta os momentos-chave.",
        },
        {
          title: "A hora loca planeia-se, não se improvisa",
          body: "A hora loca é marcada com o espaço — limites de ruído, a queda de adereços e máscaras, a hora de chamada da segunda banda, a mudança de luz. Parece espontânea porque é ensaiada.",
        },
        {
          title: "A abuela come primeiro",
          body: "Os mais velhos são sentados, servidos e cuidados antes de todos. Os avós têm a melhor mesa, o canto mais sossegado se o quiserem, e um membro da nossa equipa que nunca se afasta deles.",
        },
        {
          title: "Um mestre de cerimónias bilingue por norma",
          body: "O mestre de cerimónias trabalha em espanhol e inglês — cada anúncio, sinal de brinde e instrução em ambos. Acrescenta-se o português quando há uma família brasileira. Nenhum convidado adivinha o que vem a seguir.",
        },
      ],
    },
    planning: {
      eyebrow: "Planeamento de vários dias",
      headline: "Dois dias, *hora a hora.*",
      deck: "O esquema que usamos para um casamento latino típico de 250 convidados — um jantar de boas-vindas, o dia do casamento em torno da missa, e um brunch de recuperação.",
      days: [
        {
          numeral: "I",
          dayLabel: "Dia Um",
          title: "Jantar de boas-vindas",
          body: "A família chega ao longo do dia; coordenamos transferes e check-ins. À noite, um jantar de boas-vindas — descontraído, muitas vezes uma mesa longa junto à água, com um trio de guitarra e os primeiros brindes da família.",
          events: [
            {
              time: "Manhã",
              body: "Chegadas · transferes do aeroporto · check-in no hotel",
            },
            {
              time: "16:00",
              body: "Entrega dos kits de boas-vindas · programa bilingue em cada quarto",
            },
            {
              time: "19:30",
              body: "Jantar de boas-vindas · mesa longa · trio ao vivo · brindes em família",
            },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Dia Dois",
          title: "O casamento",
          body: "A missa nupcial ao final da tarde, as arras e o lazo no seu interior, depois cocktail, jantar, dança, e a hora loca perto da meia-noite. O dia é construído de trás para a frente a partir da hora da cerimónia na paróquia.",
          events: [
            {
              time: "15:00",
              body: "Preparação do casal e do cortejo · suites separadas",
            },
            {
              time: "17:00",
              body: "Missa nupcial · arras e lazo · padrinhos a postos",
            },
            {
              time: "18:15",
              body: "Saída · despedida · fotografias de família",
            },
            { time: "18:45", body: "Hora do cocktail · trio ao vivo" },
            {
              time: "20:00",
              body: "Entradas · primeira dança · jantar sentado · brindes",
            },
            {
              time: "23:30",
              body: "Hora loca · máscaras, adereços, metais · dança até tarde",
            },
            { time: "02:00", body: "A última canção · todos na pista" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Dia Três",
          title: "Brunch de recuperação",
          body: "Um brunch tardio e tranquilo na manhã seguinte — na tradição dominicana, uma panela de sancocho faz o trabalho de recuperação. Despedidas, fotos e transferes de regresso para a maioria; a família próxima fica muitas vezes mais um dia.",
          events: [
            {
              time: "12:00",
              body: "Brunch de recuperação · sancocho · à beira da piscina ou no jardim",
            },
            { time: "Tarde", body: "Partidas · transferes para o aeroporto" },
            { time: "Noite", body: "Jantar de família próxima (opcional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilidade de destinos",
      headline: "Onde os casamentos latinos *pertencem.*",
      viewAllLabel: "Ver todos os destinos →",
      viewAllHref: staticPath("pt", "/destinations"),
      cards: [
        {
          rating: 5,
          name: "Punta Cana",
          sub: "República Dominicana · todo o ano",
          destinationSlug: "punta-cana",
        },
        {
          rating: 5,
          name: "Tulum e Los Cabos",
          sub: "México · novembro – abril",
          destinationSlug: "tulum-los-cabos",
        },
        {
          rating: 4,
          name: "St. Barths",
          sub: "Caraíbas · novembro – abril",
          destinationSlug: "st-barths",
        },
        {
          rating: 4,
          name: "Mustique",
          sub: "Caraíbas · dezembro – abril",
          destinationSlug: "mustique",
        },
        {
          rating: 4,
          name: "Toscana",
          sub: "Itália · maio – outubro",
          destinationSlug: "tuscany",
        },
        {
          rating: 4,
          name: "Costa Amalfitana",
          sub: "Itália · maio – outubro",
          destinationSlug: "amalfi",
        },
        {
          rating: 3,
          name: "Costa Azul",
          sub: "França · junho – setembro",
          destinationSlug: "cote-dazur",
        },
        {
          rating: 3,
          name: "Os Hamptons",
          sub: "Estados Unidos · junho – setembro",
          destinationSlug: "the-hamptons",
        },
      ],
    },
    guest: {
      eyebrow: "Gestão de convidados",
      headline: "O cuidado *prático* de toda a família.",
      deck: "A camada logística de que um casamento latino vive ou morre — porque viaja a família inteira e há três gerações na sala.",
      cells: [
        {
          title: "Viagem multigeracional",
          body: "Blocos de quartos em vários níveis de preço para que primos, padrinhos e avós possam vir todos. Transferes coordenados ao longo de dias de chegadas, com um elo familiar que responde em espanhol.",
        },
        {
          title: "Comunicações bilingues",
          body: "Cada convite, programa, placa e kit de boas-vindas em espanhol e inglês — português para famílias brasileiras. Um grupo de WhatsApp para cada convidado, três semanas antes.",
        },
        {
          title: "Crianças por todo o lado",
          body: "Os casamentos latinos trazem crianças, e as crianças ficam até tarde. Uma equipa de acolhimento infantil multilingue e uma sala tranquila permitem que os pais dancem a sério, enquanto as crianças são cuidadas e alimentadas por perto.",
        },
        {
          title: "Os mais velhos, bem cuidados",
          body: "Quartos no rés do chão, transporte dedicado, um elo para os mais velhos e apoio médico de prevenção no fim de semana. A abuela é sentada, servida e nunca deixada sozinha.",
        },
        {
          title: "Amplitude alimentar",
          body: "Um menu longo e generoso — com opções vegetarianas, veganas, sem glúten e sem alergénios para cada prato. Pratos regionais que a família vai reconhecer, feitos como deve ser.",
        },
        {
          title: "Logística de madrugada",
          body: "A festa estende-se, por isso o transporte também — transferes escalonados a partir da meia-noite, um regresso seguro para cada convidado, e um brunch de recuperação à espera no dia seguinte.",
        },
      ],
    },
    related: {
      eyebrow: "Continuar a ler",
      headline: "Do *diário.*",
      articles: [
        {
          category: "Casamentos Latinos · Punta Cana",
          title: "Os melhores espaços para um casamento latino em Punta Cana",
          body: "Um registo dos resorts e haciendas que sustentam uma festa de 300 convidados com graça.",
          imageKey: "culture-related-1",
        },
        {
          category: "Tradição",
          title: "As arras e o lazo, explicados",
          body: "Sobre as treze moedas e o cordão — o que significam e como variam de família para família.",
          imageKey: "culture-related-2",
        },
        {
          category: "Música · Latina",
          title: "Mariachi nas Caraíbas: trazido ou local",
          body: "O que é preciso de verdade para pôr um mariachi completo numa praia longe do México.",
          imageKey: "culture-related-3",
        },
        {
          category: "Tradição",
          title: "A hora loca, com elegância",
          body: "Como a hora da meia-noite se mantém alegre sem cair no caos.",
          imageKey: "culture-related-4",
        },
        {
          category: "Custo · Latino",
          title: "Quanto custa de verdade um casamento latino de luxo",
          body: "Orçamentos francos para 2026 por número de convidados, país e quantidade de música ao vivo.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("pt", "punta-cana") },
        {
          label: "Tulum e Los Cabos",
          href: destinationPath("pt", "tulum-los-cabos"),
        },
        { label: "St. Barths", href: destinationPath("pt", "st-barths") },
        { label: "Mustique", href: destinationPath("pt", "mustique") },
      ],
      sidebarVenues: [
        { label: "Casa de Campo" },
        { label: "Eden Roc Cap Cana" },
        { label: "Hacienda Temozón" },
        { label: "Chablé Maroma" },
      ],
      sidebarCultures: [
        {
          label: "Casamentos cristãos",
          href: culturePath("pt", "christian-weddings"),
        },
        {
          label: "Casamentos europeus",
          href: culturePath("pt", "european-weddings"),
        },
        {
          label: "Casamentos inter-religiosos",
          href: culturePath("pt", "interfaith-weddings"),
        },
        {
          label: "Casamentos indianos",
          href: culturePath("pt", "indian-weddings"),
        },
      ],
    },
    faq: {
      eyebrow: "Perguntas, respondidas",
      headline: "Perguntas *frequentes.*",
      items: [
        {
          question: "Também planeiam a missa na igreja, ou só a festa?",
          answer: [
            "Ambas, como um todo. Coordenamos a paróquia, o padre, as leituras e as arras, o lazo e os padrinhos — e levamos esse mesmo cuidado à receção e à hora loca.",
            "Muitos planeadores começam no cocktail e deixam a missa à família. Nós não; a cerimónia é o coração do dia.",
          ],
        },
        {
          question:
            "Mariachi nas Caraíbas — trazem de fora ou encontram local?",
          answer: [
            "Ambas as opções são possíveis. Para uma família mexicana que quer um mariachi específico, trazemos o grupo e tratamos da viagem, dos instrumentos e do alojamento. Para outras, trabalhamos com fortes conjuntos regionais já presentes nas Caraíbas.",
            "Somos honestos quanto ao custo: trazer um mariachi completo para Punta Cana é uma rubrica real, e orçamentamo-la com transparência na primeira consulta.",
          ],
        },
        {
          question: "O que é uma hora loca e pode ser elegante?",
          answer: [
            "A hora loca — a «hora louca» — é uma explosão perto da meia-noite: máscaras, adereços, muitas vezes uma segunda banda ou uma linha de metais, e todos na pista. É o ponto alto de uma receção latina.",
            "Pode ser absolutamente elegante. Selecionamos os adereços, iluminamo-la bem e ensaiamos o ritmo, para que pareça um crescendo desenhado e não caos.",
          ],
        },
        {
          question: "Quanto custa um casamento latino de luxo em 2026?",
          answer: [
            "Um intervalo útil para 2026, de 150 a 350 convidados, vai de 150 000 a 600 000 USD tudo incluído, conforme o país, o número de convidados e a quantidade de música ao vivo.",
            "Partilhamos orçamentos transparentes e detalhados na primeira consulta — incluindo o custo real das bandas ao vivo e de um mariachi trazido de fora, se o quiserem.",
          ],
        },
        {
          question: "Em que diferem os costumes dominicanos dos mexicanos?",
          answer: [
            "Ambos são geralmente católicos, com as arras e o lazo. Mas a ênfase difere: um casamento mexicano centra os padrinhos, muitas vezes com mariachi e uma formalidade de hacienda marcada; um casamento dominicano entrega-se ao merengue e à bachata, e estende-se, longo e ruidoso.",
            "Planeamos cada um segundo a sua própria tradição — nunca um modelo «latino» genérico — e perguntamos à família que costumes guarda.",
          ],
        },
        {
          question: "A cerimónia pode ser bilingue?",
          answer: [
            "Sim. Organizamos leituras e votos em espanhol e inglês, um programa bilingue e um padre à vontade entre línguas — também português para famílias brasileiras.",
            "O objetivo é simples: nenhum convidado, de qualquer dos lados, deveria sentir que está no casamento de outra pessoa.",
          ],
        },
        {
          question: "Por que chama Grecia a isto a sua própria tradição?",
          answer: [
            "Grecia é dominicana, e o nosso ateliê fica em Punta Cana. Organizou casamentos para a sua própria família e amigas mais próximas.",
            "Significa que a fluência cultural não é estudada — é vivida. Planeamos um casamento latino como o planearíamos para os nossos.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Uma conversa privada —",
      headline: "*Comece* o seu\ncasamento latino.",
      body: "Diga-nos o país, a família, a paróquia e uma data aproximada. Grecia responde, em pessoa, no prazo de cinco dias úteis.",
      ctaLabel: "Pedir uma consulta privada →",
      ctaHref: staticPath("pt", "/contact"),
    },
  },

  // ── Deutsch ───────────────────────────────────────────────────────────────
  de: {
    name: "Lateinamerikanische Hochzeiten",
    cardEyebrow: "Lateinamerikanisch",
    cardBlurb:
      "Arras, Lazo, Padrinos. Zweisprachige Empfänge mit Mariachi oder Bachata.",
    cardMeta: "Entdecken",
    intro:
      "Arras, Lazo und Padrinos, mit zweisprachigen Empfängen, getragen von Mariachi oder Bachata.",
    hero: {
      eyebrow: "Die Traditionen",
      scriptOverline: "Eine Hochzeit der",
      headline: "lateinamerikanischen *Tradition.*",
      deck: "Das ist unsere eigene. Grecia ist Dominikanerin; das Atelier liegt in Punta Cana. Eine lateinamerikanische Hochzeit ist eine katholische Zeremonie und ein langes, lautes, großzügiges Fest — gehalten in zwei Sprachen, für die ganze Familie.",
      captionLeft: "Carolina & Mateo · Casa de Campo",
      captionCenter: "Das Lazo, während der Messe · 2025",
      captionRight: "Tafel VII",
    },
    factStrip: [
      {
        label: "Dauer",
        value: "1 – 2 Tage",
        sub: "Willkommensdinner + der Tag",
      },
      { label: "Gäste", value: "100 – 500", sub: "Die ganze Familie reist an" },
      {
        label: "Vorlaufzeit",
        value: "12 – 18 Monate",
        sub: "Pfarrtermine früh belegt",
      },
      {
        label: "Traditionen",
        value: "Mexikanisch · Dominikanisch",
        sub: "Kolumbianisch · Argentinisch",
      },
      {
        label: "Musik",
        value: "Mariachi · Bachata",
        sub: "Merengue · die Hora loca",
      },
      {
        label: "Sprachen",
        value: "ES · EN",
        sub: "PT für brasilianische Familien",
      },
    ],
    overview: {
      sideEyebrow: "Die Tradition",
      sideNote:
        "Das ist meine eigene. Ich bin Dominikanerin; unser Atelier liegt in Punta Cana. Ich habe die Hochzeiten meiner Cousins und meiner engsten Freundinnen geplant — und ich plane eine lateinamerikanische Hochzeit so, wie ich sie für meine eigene Familie planen würde.",
      headline: "Eine Messe, ein *Fest* und die ganze Familie.",
      lede: "Eine lateinamerikanische Hochzeit beginnt in den meisten unserer Familien in der Kirche. Die katholische Zeremonie ist das Herz des Tages — die Arras, das Lazo, die Padrinos als Trauzeugen — und alles, was folgt, ist das Fest, das die Familie seit Jahren geben wollte.",
      bodyParagraphs: [
        "In ganz Lateinamerika ist die Hochzeit nicht eine Tradition, sondern viele, und die Unterschiede zählen. Eine mexikanische Hochzeit stützt sich auf die Padrinos — Paten, die eine benannte, oft finanzielle Rolle in der Zeremonie selbst übernehmen. Eine dominikanische Hochzeit, unsere, ist Kirche und dann Merengue und Bachata, bis die Band aufgibt. Eine kolumbianische Hochzeit trägt mitunter die Serenata am Vorabend; eine argentinische Hochzeit verzichtet oft ganz auf Brautgefolge und Brautstraußwurf und zieht sich bis zum Morgengrauen.",
        "Was sie teilen, sind Umfang und Wärme. Die Gästeliste ist lang, weil die Familie groß ist — primos, tíos, padrinos, abuelos, der ganze erweiterte Kreis reist an, und drei Generationen tanzen im selben Saal. Der Empfang ist lang, die Musik bei den Momenten, die zählen, live, und niemand wird von der Tanzfläche gedrängt.",
        "Wir planen Kirche und Fest als einen Bogen. Viele Planer überlassen die Messe der Pfarrei und beginnen ihre Arbeit beim Empfang; wir nicht. Wir koordinieren den Priester, die Bräuche der Pfarrei, die Arras und das Lazo, den Platz und das Stichwort der Padrinos — und tragen dann dieselbe Sorgfalt bis zur Hora loca um Mitternacht.",
        "Und wir planen ab der ersten E-Mail in zwei Sprachen. Die Einladung, das Programm, der Zeremonienmeister, das Willkommenspaket — Spanisch und Englisch als Standard, Portugiesisch, wenn eine brasilianische Familie am Tisch sitzt. Kein Gast sollte je das Gefühl haben, auf der Hochzeit eines anderen zu sein.",
      ],
      pull: "„Eine lateinamerikanische Hochzeit ist eine katholische Zeremonie und ein Fest, das seine Länge verdient. Wir halten beides mit denselben Händen.“",
      signatureName: "Grecia",
      signatureRole: "Gründerin · Dominikanerin · Punta Cana",
    },
    ceremonyArc: {
      eyebrow: "Aufbau der Zeremonie",
      headline: "Von der Messe bis zum *letzten Lied.*",
      deck: "Der Bogen, den wir für eine katholische lateinamerikanische Hochzeit halten — zuerst die Kirche, dann das Fest. Regionale Bräuche passen das Detail an; die Form bleibt.",
      steps: [
        {
          numeral: "I",
          name: "Die Brautmesse",
          sub: "Katholische Zeremonie",
          when: "Später Nachmittag",
          body: "Die meisten unserer Paare heiraten kirchlich. Eine vollständige Brautmesse, oft eine Stunde, mit den von der Familie gewählten Lesungen und dem Priester, der sie kennt.",
        },
        {
          numeral: "II",
          name: "Arras & Lazo",
          sub: "Die Münzen und das Band",
          when: "Während der Messe",
          body: "Die dreizehn Arras gehen vom Bräutigam zur Braut als Versprechen, zu versorgen. Das Lazo — ein Band in Achterform oder ein Rosenkranz — wird von den Padrinos über beide gelegt und vereint sie als eines.",
        },
        {
          numeral: "III",
          name: "Der Auszug",
          sub: "Aus der Kirche hinaus",
          when: "Nach der Messe",
          body: "Das Paar zieht unter Applaus aus, oft zu Glocken, Reis oder in der dominikanischen Tradition einem Blas- und Trommelgeleit direkt auf die Straße.",
        },
        {
          numeral: "IV",
          name: "Cocktail & Live-Trio",
          sub: "Die Ankunftsstunde",
          when: "Früher Abend",
          body: "Die Gäste wechseln zum Empfang für Cocktails mit einem Live-Trio oder Gitarre — Boleros, Son, sanfte Bachata — während die Familie fotografiert wird.",
        },
        {
          numeral: "V",
          name: "Die Einzüge",
          sub: "Paar und Gefolge",
          when: "Beginn des Dinners",
          body: "Der zweisprachige Zeremonienmeister führt das Gefolge und dann das Paar zu einem Lied ein, das den Saal hebt. Der erste Tanz öffnet oft sofort die Tanzfläche.",
        },
        {
          numeral: "VI",
          name: "Dinner & Trinksprüche",
          sub: "Sitzend, mit Reden",
          when: "Abend",
          body: "Ein Sitzdinner mit Trinksprüchen der Padrinos und Eltern. Das Tempo ist gelassen — das Mahl ist Teil des Festes, keine Pause davor.",
        },
        {
          numeral: "VII",
          name: "Hora loca & letztes Lied",
          sub: "Ab Mitternacht",
          when: "Späte Nacht",
          body: "Gegen Mitternacht bricht die Hora loca aus — Masken, Requisiten, eine zweite Band oder eine Bläserlinie — und die Nacht zieht sich. Das letzte Lied wird im Voraus gewählt, und alle stehen dafür auf der Tanzfläche.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Designkonzepte",
      headline: "Drei Richtungen, *eine Wärme.*",
      deck: "Drei Designrichtungen, die wir für lateinamerikanische Hochzeiten mehr als einmal gebaut haben. Jede Hochzeit passt sie an — Palette, Blumen, die Größe des Saals.",
      cards: [
        {
          title: "Tropische Fülle",
          body: "Geschichtetes Grün, Helikonie und Orchidee, Palme und Bananenblatt — der karibische Garten in voller Lautstärke. Gedacht für Punta Cana und die Inseln.",
          palette: ["#1f3d2b", "#3f6b3a", "#e7a33c", "#d65d3a", "#f3ede0"],
          imageKey: "concept-1",
          rows: [
            { label: "Blumen", value: "Helikonie · Orchidee · Palme" },
            { label: "Tische", value: "Lang, im Familienstil" },
            { label: "Ideal für", value: "Strand · Garten · Resort" },
          ],
        },
        {
          title: "Hacienda-Abend",
          body: "Warme Terrakotta, Schmiedeeisen und Kerzenlicht, Ringelblume und Dahlie — eine mexikanische Hacienda nach Einbruch der Dunkelheit. Mariachi-bereit, für die lange Tafel gemacht.",
          palette: ["#7a2e22", "#c2683a", "#e0a93f", "#3a2a20", "#efe6d6"],
          imageKey: "concept-2",
          rows: [
            { label: "Blumen", value: "Ringelblume · Dahlie · Rose" },
            { label: "Tische", value: "Lange Tafel · Kerzenlicht" },
            { label: "Ideal für", value: "Hacienda · Innenhof · Gut" },
          ],
        },
        {
          title: "Küstenweiß & Zitrus",
          body: "Elfenbein und Knochen, Zitrone und Limette, weiße Bougainvillea gegen Kalktünche — leise modern, die helle Küstenhochzeit. Wirkt in jedem Licht.",
          palette: ["#f4efe4", "#e8d9b8", "#d6e3c0", "#e8c23c", "#8a9b6e"],
          imageKey: "concept-3",
          rows: [
            { label: "Blumen", value: "Weiße Bougainvillea · Zitrus" },
            { label: "Tische", value: "Runde und lange gemischt" },
            { label: "Ideal für", value: "Küste · Villa · Terrasse" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Kulturelles Protokoll",
      headline: "Was wir *ehren.*",
      deck: "Sechs Dinge, die wir bei einer lateinamerikanischen Hochzeit ohne Kompromiss halten. Sie sind keine Formalitäten — sie sind die Hochzeit.",
      items: [
        {
          title: "Die Padrinos werden geehrt, nicht dekoriert",
          body: "Padrinos und Madrinas — der Arras, des Lazo, der Ringe — tragen eine benannte Rolle. Wir weisen sie auf ihr Stichwort ein, setzen sie zur Familie und sorgen dafür, dass sie im Programm erscheinen. Besonders bei mexikanischen Hochzeiten ist ihre Rolle zentral.",
        },
        {
          title: "Arras und Lazo folgen der Pfarrei der Familie",
          body: "Jede Pfarrei und jede Familie hält Arras und Lazo ein wenig anders — wer sie trägt, wann sie gelegt werden, woraus das Lazo ist. Wir fragen die Familie, nicht eine Vorlage, und folgen ihrem Brauch genau.",
        },
        {
          title: "Live-Musik in den Momenten, die zählen",
          body: "Der Auszug, der Einzug, die Hora loca — die sind live, keine Playlists. Mariachi, eine Bachata-Band, Merengue, eine Bläserlinie für die Hora loca. Aufgenommene Musik füllt die Lücken; sie trägt nicht die Schlüsselmomente.",
        },
        {
          title: "Die Hora loca wird geplant, nicht improvisiert",
          body: "Die Hora loca wird mit dem Veranstaltungsort abgestimmt — Lärmsperrzeiten, der Einsatz von Requisiten und Masken, die Abrufzeit der zweiten Band, der Lichtwechsel. Sie wirkt spontan, weil sie geprobt ist.",
        },
        {
          title: "Die Abuela isst zuerst",
          body: "Die Älteren werden vor allen anderen gesetzt, bedient und umsorgt. Die Großeltern haben den besten Tisch, die ruhigste Ecke, wenn sie es möchten, und ein Mitglied unseres Teams, das nie von ihrer Seite weicht.",
        },
        {
          title: "Ein zweisprachiger Zeremonienmeister als Standard",
          body: "Der Zeremonienmeister arbeitet auf Spanisch und Englisch — jede Ansage, jedes Trinkspruch-Stichwort und jede Anweisung in beiden. Portugiesisch kommt hinzu, wenn eine brasilianische Familie da ist. Kein Gast rät je, was als Nächstes kommt.",
        },
      ],
    },
    planning: {
      eyebrow: "Mehrtägige Planung",
      headline: "Zwei Tage, *Stunde für Stunde.*",
      deck: "Der Bauplan, den wir für eine typische lateinamerikanische Hochzeit mit 250 Gästen verwenden — ein Willkommensdinner, der Hochzeitstag rund um die Messe und ein Erholungsbrunch.",
      days: [
        {
          numeral: "I",
          dayLabel: "Tag Eins",
          title: "Willkommensdinner",
          body: "Die Familie reist über den Tag verteilt an; wir koordinieren Transfers und Check-ins. Am Abend ein Willkommensdinner — entspannt, oft eine lange Tafel am Wasser, mit einem Gitarrentrio und den ersten Trinksprüchen der Familie.",
          events: [
            {
              time: "Vormittag",
              body: "Ankünfte · Flughafentransfers · Hotel-Check-in",
            },
            {
              time: "16:00",
              body: "Willkommenspakete verteilt · zweisprachiges Programm in jedem Zimmer",
            },
            {
              time: "19:30",
              body: "Willkommensdinner · lange Tafel · Live-Trio · Trinksprüche der Familie",
            },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Tag Zwei",
          title: "Die Hochzeit",
          body: "Die Brautmesse am späten Nachmittag, die Arras und das Lazo darin, dann Cocktail, Dinner, Tanz und die Hora loca gegen Mitternacht. Der Tag wird von der Zeremonienzeit der Pfarrei aus rückwärts gebaut.",
          events: [
            {
              time: "15:00",
              body: "Vorbereitung von Paar und Gefolge · getrennte Suiten",
            },
            {
              time: "17:00",
              body: "Brautmesse · Arras & Lazo · Padrinos an ihrem Platz",
            },
            { time: "18:15", body: "Auszug · Spalier · Familienfotos" },
            { time: "18:45", body: "Cocktailstunde · Live-Trio" },
            {
              time: "20:00",
              body: "Einzüge · erster Tanz · Sitzdinner · Trinksprüche",
            },
            {
              time: "23:30",
              body: "Hora loca · Masken, Requisiten, Bläser · Tanz bis spät",
            },
            {
              time: "02:00",
              body: "Das letzte Lied · alle auf der Tanzfläche",
            },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Tag Drei",
          title: "Erholungsbrunch",
          body: "Ein später, gemächlicher Brunch am Morgen danach — in der dominikanischen Tradition leistet ein Topf Sancocho die Erholungsarbeit. Abschiede, Fotos und Rücktransfers für die meisten; die enge Familie bleibt oft einen Tag länger.",
          events: [
            {
              time: "12:00",
              body: "Erholungsbrunch · Sancocho · am Pool oder im Garten",
            },
            { time: "Nachmittag", body: "Abreisen · Flughafentransfers" },
            { time: "Abend", body: "Dinner der engen Familie (optional)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Reiseziel-Kompatibilität",
      headline: "Wo lateinamerikanische Hochzeiten *hingehören.*",
      viewAllLabel: "Alle Reiseziele ansehen →",
      viewAllHref: staticPath("de", "/destinations"),
      cards: [
        {
          rating: 5,
          name: "Punta Cana",
          sub: "Dominikanische Republik · ganzjährig",
          destinationSlug: "punta-cana",
        },
        {
          rating: 5,
          name: "Tulum & Los Cabos",
          sub: "Mexiko · November – April",
          destinationSlug: "tulum-los-cabos",
        },
        {
          rating: 4,
          name: "St. Barths",
          sub: "Karibik · November – April",
          destinationSlug: "st-barths",
        },
        {
          rating: 4,
          name: "Mustique",
          sub: "Karibik · Dezember – April",
          destinationSlug: "mustique",
        },
        {
          rating: 4,
          name: "Toskana",
          sub: "Italien · Mai – Oktober",
          destinationSlug: "tuscany",
        },
        {
          rating: 4,
          name: "Amalfiküste",
          sub: "Italien · Mai – Oktober",
          destinationSlug: "amalfi",
        },
        {
          rating: 3,
          name: "Côte d'Azur",
          sub: "Frankreich · Juni – September",
          destinationSlug: "cote-dazur",
        },
        {
          rating: 3,
          name: "Die Hamptons",
          sub: "Vereinigte Staaten · Juni – September",
          destinationSlug: "the-hamptons",
        },
      ],
    },
    guest: {
      eyebrow: "Gästemanagement",
      headline: "Die *praktische* Fürsorge für die ganze Familie.",
      deck: "Die logistische Ebene, von der eine lateinamerikanische Hochzeit lebt oder fällt — weil die ganze Familie reist und drei Generationen im Saal sind.",
      cells: [
        {
          title: "Mehrgenerationen-Reise",
          body: "Zimmerkontingente in mehreren Preisklassen, damit Cousins, Padrinos und Großeltern alle kommen können. Transfers über mehrere Anreisetage koordiniert, mit einem Familien-Ansprechpartner, der auf Spanisch antwortet.",
        },
        {
          title: "Zweisprachige Kommunikation",
          body: "Jede Einladung, jedes Programm, jedes Schild und jedes Willkommenspaket auf Spanisch und Englisch — Portugiesisch für brasilianische Familien. Eine WhatsApp-Gruppe für jeden Gast, drei Wochen vorher.",
        },
        {
          title: "Kinder überall",
          body: "Lateinamerikanische Hochzeiten bringen Kinder mit, und die Kinder bleiben lange. Ein mehrsprachiges Betreuungsteam und ein ruhiger Raum lassen die Eltern wirklich tanzen, während die Kinder in der Nähe betreut und versorgt werden.",
        },
        {
          title: "Ältere, umsorgt",
          body: "Zimmer im Erdgeschoss, eigener Transport, ein Ansprechpartner für die Älteren und ein medizinischer Bereitschaftsdienst am Wochenende. Die Abuela wird gesetzt, bedient und nie allein gelassen.",
        },
        {
          title: "Kulinarische Breite",
          body: "Ein langes, großzügiges Menü — mit vollständigen vegetarischen, veganen, glutenfreien und allergenfreien Optionen für jeden Gang. Regionale Gerichte, die die Familie wiedererkennt, richtig gemacht.",
        },
        {
          title: "Logistik der späten Nacht",
          body: "Das Fest zieht sich, also auch der Transport — gestaffelte Transfers ab Mitternacht, eine sichere Heimfahrt für jeden Gast und ein Erholungsbrunch, der am nächsten Tag wartet.",
        },
      ],
    },
    related: {
      eyebrow: "Weiterlesen",
      headline: "Aus dem *Journal.*",
      articles: [
        {
          category: "Lateinamerikanische Hochzeiten · Punta Cana",
          title:
            "Die besten Locations für eine lateinamerikanische Hochzeit in Punta Cana",
          body: "Ein Arbeitsregister der Resorts und Haciendas, die ein Fest mit 300 Gästen mit Anmut tragen.",
          imageKey: "culture-related-1",
        },
        {
          category: "Tradition",
          title: "Die Arras und das Lazo, erklärt",
          body: "Über die dreizehn Münzen und das Band — was sie bedeuten und wie sie von Familie zu Familie variieren.",
          imageKey: "culture-related-2",
        },
        {
          category: "Musik · Lateinamerikanisch",
          title: "Mariachi in der Karibik: eingeflogen oder vor Ort",
          body: "Was es wirklich braucht, um ein volles Mariachi an einen Strand fern von Mexiko zu bringen.",
          imageKey: "culture-related-3",
        },
        {
          category: "Tradition",
          title: "Die Hora loca, elegant gemacht",
          body: "Wie die Mitternachtsstunde freudig bleibt, ohne ins Chaos zu kippen.",
          imageKey: "culture-related-4",
        },
        {
          category: "Kosten · Lateinamerikanisch",
          title:
            "Was eine luxuriöse lateinamerikanische Hochzeit wirklich kostet",
          body: "Ehrliche Budgets für 2026 nach Gästezahl, Land und Anteil an Live-Musik.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("de", "punta-cana") },
        {
          label: "Tulum & Los Cabos",
          href: destinationPath("de", "tulum-los-cabos"),
        },
        { label: "St. Barths", href: destinationPath("de", "st-barths") },
        { label: "Mustique", href: destinationPath("de", "mustique") },
      ],
      sidebarVenues: [
        { label: "Casa de Campo" },
        { label: "Eden Roc Cap Cana" },
        { label: "Hacienda Temozón" },
        { label: "Chablé Maroma" },
      ],
      sidebarCultures: [
        {
          label: "Christliche Hochzeiten",
          href: culturePath("de", "christian-weddings"),
        },
        {
          label: "Europäische Hochzeiten",
          href: culturePath("de", "european-weddings"),
        },
        {
          label: "Interreligiöse Hochzeiten",
          href: culturePath("de", "interfaith-weddings"),
        },
        {
          label: "Indische Hochzeiten",
          href: culturePath("de", "indian-weddings"),
        },
      ],
    },
    faq: {
      eyebrow: "Fragen, beantwortet",
      headline: "Häufig *gefragt.*",
      items: [
        {
          question:
            "Planen Sie auch die Messe in der Kirche oder nur das Fest?",
          answer: [
            "Beides, als Einheit. Wir koordinieren die Pfarrei, den Priester, die Lesungen und die Arras, das Lazo und die Padrinos — und tragen dieselbe Sorgfalt bis zum Empfang und zur Hora loca.",
            "Viele Planer beginnen beim Empfang und überlassen die Messe der Familie. Wir nicht; die Zeremonie ist das Herz des Tages.",
          ],
        },
        {
          question:
            "Mariachi in der Karibik — fliegen Sie sie ein oder finden Sie sie vor Ort?",
          answer: [
            "Beides ist möglich. Für eine mexikanische Familie, die ein bestimmtes Mariachi möchte, fliegen wir die Gruppe ein und kümmern uns um Reise, Instrumente und Unterkunft. Für andere arbeiten wir mit starken regionalen Ensembles, die bereits in der Karibik sind.",
            "Wir sind ehrlich bei den Kosten: ein volles Mariachi nach Punta Cana zu bringen ist ein echter Posten, den wir bei der ersten Beratung transparent veranschlagen.",
          ],
        },
        {
          question: "Was ist eine Hora loca, und kann sie elegant sein?",
          answer: [
            "Die Hora loca — die „verrückte Stunde“ — ist ein Ausbruch gegen Mitternacht: Masken, Requisiten, oft eine zweite Band oder eine Bläserlinie, und alle auf der Tanzfläche. Sie ist der Höhepunkt eines lateinamerikanischen Empfangs.",
            "Sie kann absolut elegant sein. Wir kuratieren die Requisiten, leuchten sie gut aus und proben das Timing, damit sie wie ein gestaltetes Crescendo wirkt und nicht wie Chaos.",
          ],
        },
        {
          question:
            "Was kostet eine luxuriöse lateinamerikanische Hochzeit 2026?",
          answer: [
            "Eine nützliche Spanne für 2026, bei 150 bis 350 Gästen, liegt bei 150.000 – 600.000 USD all-in, je nach Land, Gästezahl und Anteil an Live-Musik.",
            "Wir teilen bei der ersten Beratung transparente, positionsweise Budgets — einschließlich der realen Kosten für Live-Bands und ein eingeflogenes Mariachi, falls Sie eines wünschen.",
          ],
        },
        {
          question:
            "Worin unterscheiden sich dominikanische und mexikanische Bräuche?",
          answer: [
            "Beide sind meist katholisch, mit Arras und Lazo. Doch die Betonung unterscheidet sich: eine mexikanische Hochzeit rückt die Padrinos ins Zentrum, oft mit Mariachi und einer ausgeprägten Hacienda-Förmlichkeit; eine dominikanische Hochzeit gibt sich dem Merengue und der Bachata hin und zieht sich lang und laut.",
            "Wir planen jede nach ihrer eigenen Tradition — nie eine generische „lateinamerikanische“ Vorlage — und fragen die Familie, welche Bräuche sie pflegt.",
          ],
        },
        {
          question: "Kann die Zeremonie zweisprachig sein?",
          answer: [
            "Ja. Wir richten Lesungen und Gelübde auf Spanisch und Englisch ein, ein zweisprachiges Programm und einen Priester, der mühelos zwischen den Sprachen wechselt — auch Portugiesisch für brasilianische Familien.",
            "Das Ziel ist einfach: kein Gast, auf keiner Seite, sollte das Gefühl haben, auf der Hochzeit eines anderen zu sein.",
          ],
        },
        {
          question: "Warum nennt Grecia dies die eigene Tradition des Studios?",
          answer: [
            "Grecia ist Dominikanerin, und unser Atelier liegt in Punta Cana. Sie hat Hochzeiten für ihre eigene Familie und engsten Freundinnen geplant.",
            "Das heißt, die kulturelle Vertrautheit ist nicht recherchiert — sie ist gelebt. Wir planen eine lateinamerikanische Hochzeit so, wie wir sie für unsere eigene planen würden.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Ein privates Gespräch —",
      headline: "*Beginnen* Sie Ihre\nlateinamerikanische Hochzeit.",
      body: "Sagen Sie uns das Land, die Familie, die Pfarrei und ein ungefähres Datum. Grecia antwortet persönlich, innerhalb von fünf Werktagen.",
      ctaLabel: "Ein privates Beratungsgespräch anfragen →",
      ctaHref: staticPath("de", "/contact"),
    },
  },

  // ── Italiano ──────────────────────────────────────────────────────────────
  it: {
    name: "Matrimoni Latini",
    cardEyebrow: "Latino",
    cardBlurb:
      "Arras, lazo, padrinos. Ricevimenti bilingui con mariachi o bachata.",
    cardMeta: "Scopri",
    intro:
      "Arras, lazo e padrinos, con ricevimenti bilingui retti da mariachi o bachata.",
    hero: {
      eyebrow: "Le Tradizioni",
      scriptOverline: "Un matrimonio di",
      headline: "tradizione *latina.*",
      deck: "Questa è la nostra. Grecia è dominicana; l'atelier è a Punta Cana. Un matrimonio latino è una cerimonia cattolica e una festa lunga, generosa e ad alto volume — celebrata in due lingue, per tutta la famiglia.",
      captionLeft: "Carolina e Mateo · Casa de Campo",
      captionCenter: "Il lazo, durante la messa · 2025",
      captionRight: "Tavola VII",
    },
    factStrip: [
      {
        label: "Durata",
        value: "1 – 2 giorni",
        sub: "Cena di benvenuto + il giorno",
      },
      {
        label: "Invitati",
        value: "100 – 500",
        sub: "Viaggia tutta la famiglia",
      },
      {
        label: "Preavviso",
        value: "12 – 18 mesi",
        sub: "La parrocchia si prenota presto",
      },
      {
        label: "Tradizioni",
        value: "Messicana · Dominicana",
        sub: "Colombiana · Argentina",
      },
      {
        label: "Musica",
        value: "Mariachi · bachata",
        sub: "Merengue · la hora loca",
      },
      {
        label: "Lingue",
        value: "ES · EN",
        sub: "PT per le famiglie brasiliane",
      },
    ],
    overview: {
      sideEyebrow: "La tradizione",
      sideNote:
        "Questa è la mia. Sono dominicana; il nostro atelier è a Punta Cana. Ho organizzato i matrimoni dei miei cugini e delle mie amiche più care — e progetto un matrimonio latino come lo farei per la mia stessa famiglia.",
      headline: "Una messa, una *festa* e tutta la famiglia.",
      lede: "Un matrimonio latino, nella maggior parte delle nostre famiglie, comincia in chiesa. La cerimonia cattolica è il cuore della giornata — le arras, il lazo, i padrinos in piedi come testimoni — e tutto ciò che segue è la festa che la famiglia aspettava da anni di dare.",
      bodyParagraphs: [
        "In tutta l'America Latina il matrimonio non è una sola tradizione ma molte, e le differenze contano. Un matrimonio messicano si fonda sui padrinos — patroni che assumono un ruolo nominato, spesso economico, nella cerimonia stessa. Un matrimonio dominicano, il nostro, è chiesa e poi merengue e bachata finché la band non cede. Un matrimonio colombiano può portare la serenata la sera prima; un matrimonio argentino spesso rinuncia del tutto al corteo e al lancio del bouquet, e si prolunga fino all'alba.",
        "Ciò che condividono è l'ampiezza e il calore. La lista degli invitati è lunga perché la famiglia è grande — primos, tíos, padrinos, abuelos, tutta la cerchia allargata viaggia, e tre generazioni ballano nella stessa sala. Il ricevimento è lungo, la musica è dal vivo nei momenti che contano, e nessuno viene allontanato dalla pista.",
        "Progettiamo la chiesa e la festa come un solo arco. Molti organizzatori affidano la messa alla parrocchia e iniziano il loro lavoro al cocktail; noi no. Coordiniamo il sacerdote, le usanze della parrocchia, le arras e il lazo, il posto e il segnale dei padrinos — e poi portiamo la stessa cura fino alla hora loca di mezzanotte.",
        "E progettiamo in due lingue dalla prima e-mail. L'invito, il programma, il maestro di cerimonia, il kit di benvenuto — spagnolo e inglese come standard, portoghese quando c'è una famiglia brasiliana a tavola. Nessun invitato dovrebbe mai sentirsi al matrimonio di qualcun altro.",
      ],
      pull: "«Un matrimonio latino è una cerimonia cattolica e una festa che si merita la sua durata. Le sosteniamo entrambe con le stesse mani.»",
      signatureName: "Grecia",
      signatureRole: "Fondatrice · Dominicana · Punta Cana",
    },
    ceremonyArc: {
      eyebrow: "Struttura della cerimonia",
      headline: "Dalla messa all'*ultima canzone.*",
      deck: "L'arco che sosteniamo per un matrimonio latino cattolico — prima la chiesa, poi la festa. Le usanze regionali ne regolano il dettaglio; la forma resta.",
      steps: [
        {
          numeral: "I",
          name: "La messa nuziale",
          sub: "Cerimonia cattolica",
          when: "Tardo pomeriggio",
          body: "La maggior parte delle nostre coppie si sposa in Chiesa. Una messa nuziale completa, spesso di un'ora, con le letture scelte dalla famiglia e il sacerdote che le conosce.",
        },
        {
          numeral: "II",
          name: "Arras e lazo",
          sub: "Le monete e il cordone",
          when: "Durante la messa",
          body: "Le tredici arras passano dallo sposo alla sposa come promessa di provvedere. Il lazo — un cordone a forma di otto o un rosario — viene posto su entrambi dai padrinos, unendoli come uno solo.",
        },
        {
          numeral: "III",
          name: "L'uscita",
          sub: "Fuori dalla chiesa",
          when: "Dopo la messa",
          body: "La coppia esce tra gli applausi, spesso tra campane, riso o, nella tradizione dominicana, un congedo di ottoni e tamburi che va dritto in strada.",
        },
        {
          numeral: "IV",
          name: "Cocktail e trio dal vivo",
          sub: "L'ora dell'arrivo",
          when: "Prima sera",
          body: "Gli invitati passano al ricevimento per il cocktail con un trio o una chitarra dal vivo — boleri, son, bachata morbida — mentre la famiglia si fa fotografare.",
        },
        {
          numeral: "V",
          name: "Gli ingressi",
          sub: "Coppia e corteo",
          when: "Apertura della cena",
          body: "Il maestro di cerimonia, bilingue, fa entrare il corteo e poi la coppia su una canzone scelta per sollevare la sala. Il primo ballo apre spesso subito la pista.",
        },
        {
          numeral: "VI",
          name: "Cena e brindisi",
          sub: "Seduti, con discorsi",
          when: "Sera",
          body: "Una cena seduta con i brindisi dei padrinos e dei genitori. Il ritmo è senza fretta — il pasto è parte della festa, non una pausa prima di essa.",
        },
        {
          numeral: "VII",
          name: "Hora loca e ultima canzone",
          sub: "Da mezzanotte in poi",
          when: "Notte fonda",
          body: "Verso mezzanotte esplode la hora loca — maschere, oggetti di scena, una seconda band o una linea di ottoni — e la notte si allunga. L'ultima canzone è scelta in anticipo, e tutti sono in pista per essa.",
        },
      ],
    },
    designConcepts: {
      eyebrow: "Concept di design",
      headline: "Tre direzioni, *un calore.*",
      deck: "Tre direzioni di design che abbiamo costruito più di una volta per matrimoni latini. Ogni matrimonio le adatta — palette, fiori, la scala della sala.",
      cards: [
        {
          title: "Abbondanza Tropicale",
          body: "Verde a strati, heliconia e orchidea, palma e foglia di banano — il giardino caraibico ad alto volume. Pensato per Punta Cana e le isole.",
          palette: ["#1f3d2b", "#3f6b3a", "#e7a33c", "#d65d3a", "#f3ede0"],
          imageKey: "concept-1",
          rows: [
            { label: "Fiori", value: "Heliconia · orchidea · palma" },
            { label: "Tavoli", value: "Lunghi, in stile familiare" },
            { label: "Ideale per", value: "Spiaggia · giardino · resort" },
          ],
        },
        {
          title: "Sera in Hacienda",
          body: "Terracotta calda, ferro battuto e candele, tagete e dalia — una hacienda messicana al calar della notte. Pronta per il mariachi, fatta per la tavolata lunga.",
          palette: ["#7a2e22", "#c2683a", "#e0a93f", "#3a2a20", "#efe6d6"],
          imageKey: "concept-2",
          rows: [
            { label: "Fiori", value: "Tagete · dalia · rosa" },
            { label: "Tavoli", value: "Tavolata lunga · candele" },
            { label: "Ideale per", value: "Hacienda · cortile · tenuta" },
          ],
        },
        {
          title: "Bianco Costiero e Agrumi",
          body: "Avorio e osso, limone e lime, bougainvillea bianca contro la calce — sobriamente moderno, il matrimonio costiero luminoso. Rende in ogni luce.",
          palette: ["#f4efe4", "#e8d9b8", "#d6e3c0", "#e8c23c", "#8a9b6e"],
          imageKey: "concept-3",
          rows: [
            { label: "Fiori", value: "Bougainvillea bianca · agrumi" },
            { label: "Tavoli", value: "Rotondi e lunghi misti" },
            { label: "Ideale per", value: "Costa · villa · terrazza" },
          ],
        },
      ],
    },
    protocols: {
      eyebrow: "Protocollo culturale",
      headline: "Ciò che *onoriamo.*",
      deck: "Sei cose che sosteniamo senza compromessi a un matrimonio latino. Non sono formalità — sono il matrimonio.",
      items: [
        {
          title: "I padrinos sono onorati, non decorativi",
          body: "Padrinos e madrinas — delle arras, del lazo, degli anelli — portano un ruolo nominato. Spieghiamo loro il segnale, li facciamo sedere con la famiglia e ci assicuriamo che compaiano nel programma. Nei matrimoni messicani in particolare, il loro ruolo è centrale.",
        },
        {
          title: "Le arras e il lazo seguono la parrocchia della famiglia",
          body: "Ogni parrocchia e ogni famiglia custodiscono le arras e il lazo in modo un po' diverso — chi li porta, quando vengono posti, di cosa è fatto il lazo. Chiediamo alla famiglia, non a un modello, e seguiamo la loro usanza alla lettera.",
        },
        {
          title: "Musica dal vivo nei momenti che contano",
          body: "L'uscita, l'ingresso, la hora loca — sono dal vivo, non playlist. Mariachi, una band di bachata, merengue, una linea di ottoni per la hora loca. La musica registrata riempie i vuoti; non regge i momenti chiave.",
        },
        {
          title: "La hora loca si pianifica, non si improvvisa",
          body: "La hora loca viene concordata con la sede — limiti di rumore, il lancio di oggetti di scena e maschere, l'orario di chiamata della seconda band, il cambio di luci. Sembra spontanea perché è provata.",
        },
        {
          title: "La abuela mangia per prima",
          body: "Gli anziani vengono fatti sedere, serviti e accuditi prima di tutti. I nonni hanno il tavolo migliore, l'angolo più tranquillo se lo desiderano, e un membro del nostro team che non si allontana mai da loro.",
        },
        {
          title: "Un maestro di cerimonia bilingue come standard",
          body: "Il maestro di cerimonia lavora in spagnolo e inglese — ogni annuncio, segnale di brindisi e istruzione in entrambe. Si aggiunge il portoghese quando c'è una famiglia brasiliana. Nessun invitato indovina mai cosa viene dopo.",
        },
      ],
    },
    planning: {
      eyebrow: "Pianificazione su più giorni",
      headline: "Due giorni, *ora per ora.*",
      deck: "Lo schema che usiamo per un tipico matrimonio latino da 250 invitati — una cena di benvenuto, il giorno delle nozze attorno alla messa, e un brunch di recupero.",
      days: [
        {
          numeral: "I",
          dayLabel: "Giorno Uno",
          title: "Cena di benvenuto",
          body: "La famiglia arriva nell'arco della giornata; coordiniamo i transfer e i check-in. La sera, una cena di benvenuto — rilassata, spesso una tavolata lunga in riva all'acqua, con un trio di chitarra e i primi brindisi della famiglia.",
          events: [
            {
              time: "Mattina",
              body: "Arrivi · transfer aeroportuali · check-in in hotel",
            },
            {
              time: "16:00",
              body: "Consegna dei kit di benvenuto · programma bilingue in ogni camera",
            },
            {
              time: "19:30",
              body: "Cena di benvenuto · tavolata lunga · trio dal vivo · brindisi in famiglia",
            },
          ],
        },
        {
          numeral: "II",
          dayLabel: "Giorno Due",
          title: "Il matrimonio",
          body: "La messa nuziale nel tardo pomeriggio, le arras e il lazo al suo interno, poi cocktail, cena, ballo e la hora loca verso mezzanotte. La giornata si costruisce a ritroso dall'orario della cerimonia in parrocchia.",
          events: [
            {
              time: "15:00",
              body: "Preparazione di coppia e corteo · suite separate",
            },
            {
              time: "17:00",
              body: "Messa nuziale · arras e lazo · padrinos al loro posto",
            },
            {
              time: "18:15",
              body: "Uscita · congedo · fotografie di famiglia",
            },
            { time: "18:45", body: "Ora del cocktail · trio dal vivo" },
            {
              time: "20:00",
              body: "Ingressi · primo ballo · cena seduta · brindisi",
            },
            {
              time: "23:30",
              body: "Hora loca · maschere, oggetti di scena, ottoni · ballo fino a tardi",
            },
            { time: "02:00", body: "L'ultima canzone · tutti in pista" },
          ],
        },
        {
          numeral: "III",
          dayLabel: "Giorno Tre",
          title: "Brunch di recupero",
          body: "Un brunch tardo e tranquillo la mattina dopo — nella tradizione dominicana, una pentola di sancocho fa il lavoro di recupero. Saluti, foto e transfer di ritorno per la maggior parte; la famiglia stretta spesso si trattiene un giorno in più.",
          events: [
            {
              time: "12:00",
              body: "Brunch di recupero · sancocho · a bordo piscina o in giardino",
            },
            { time: "Pomeriggio", body: "Partenze · transfer aeroportuali" },
            { time: "Sera", body: "Cena della famiglia stretta (facoltativa)" },
          ],
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibilità delle destinazioni",
      headline: "Dove i matrimoni latini *trovano casa.*",
      viewAllLabel: "Vedi tutte le destinazioni →",
      viewAllHref: staticPath("it", "/destinations"),
      cards: [
        {
          rating: 5,
          name: "Punta Cana",
          sub: "Repubblica Dominicana · tutto l'anno",
          destinationSlug: "punta-cana",
        },
        {
          rating: 5,
          name: "Tulum e Los Cabos",
          sub: "Messico · novembre – aprile",
          destinationSlug: "tulum-los-cabos",
        },
        {
          rating: 4,
          name: "St. Barths",
          sub: "Caraibi · novembre – aprile",
          destinationSlug: "st-barths",
        },
        {
          rating: 4,
          name: "Mustique",
          sub: "Caraibi · dicembre – aprile",
          destinationSlug: "mustique",
        },
        {
          rating: 4,
          name: "Toscana",
          sub: "Italia · maggio – ottobre",
          destinationSlug: "tuscany",
        },
        {
          rating: 4,
          name: "Costiera Amalfitana",
          sub: "Italia · maggio – ottobre",
          destinationSlug: "amalfi",
        },
        {
          rating: 3,
          name: "Costa Azzurra",
          sub: "Francia · giugno – settembre",
          destinationSlug: "cote-dazur",
        },
        {
          rating: 3,
          name: "Gli Hamptons",
          sub: "Stati Uniti · giugno – settembre",
          destinationSlug: "the-hamptons",
        },
      ],
    },
    guest: {
      eyebrow: "Gestione degli invitati",
      headline: "La cura *pratica* di tutta la famiglia.",
      deck: "Lo strato logistico da cui un matrimonio latino vive o muore — perché viaggia tutta la famiglia e ci sono tre generazioni in sala.",
      cells: [
        {
          title: "Viaggio multigenerazionale",
          body: "Blocchi camere su più fasce di prezzo perché cugini, padrinos e nonni possano venire tutti. Transfer coordinati su più giorni di arrivi, con un referente di famiglia che risponde in spagnolo.",
        },
        {
          title: "Comunicazioni bilingui",
          body: "Ogni invito, programma, cartello e kit di benvenuto in spagnolo e inglese — portoghese per le famiglie brasiliane. Un gruppo WhatsApp per ogni invitato, tre settimane prima.",
        },
        {
          title: "Bambini ovunque",
          body: "I matrimoni latini portano bambini, e i bambini restano fino a tardi. Un team di assistenza multilingue e una stanza tranquilla permettono ai genitori di ballare davvero, mentre i bambini sono accuditi e rifocillati lì accanto.",
        },
        {
          title: "Anziani, accuditi",
          body: "Camere al piano terra, trasporto dedicato, un referente per gli anziani e un servizio medico di reperibilità per il fine settimana. La abuela viene fatta sedere, servita e mai lasciata sola.",
        },
        {
          title: "Ampiezza dietetica",
          body: "Un menu lungo e generoso — con opzioni vegetariane, vegane, senza glutine e senza allergeni per ogni portata. Piatti regionali che la famiglia riconoscerà, fatti come si deve.",
        },
        {
          title: "Logistica di notte fonda",
          body: "La festa si allunga, quindi anche il trasporto — transfer scaglionati da mezzanotte, un rientro sicuro per ogni invitato, e un brunch di recupero ad attendere il giorno dopo.",
        },
      ],
    },
    related: {
      eyebrow: "Continua a leggere",
      headline: "Dal *diario.*",
      articles: [
        {
          category: "Matrimoni Latini · Punta Cana",
          title: "Le migliori location per un matrimonio latino a Punta Cana",
          body: "Un registro dei resort e delle haciendas che reggono una festa da 300 invitati con grazia.",
          imageKey: "culture-related-1",
        },
        {
          category: "Tradizione",
          title: "Le arras e il lazo, spiegati",
          body: "Sulle tredici monete e il cordone — cosa significano e come variano da famiglia a famiglia.",
          imageKey: "culture-related-2",
        },
        {
          category: "Musica · Latina",
          title: "Mariachi ai Caraibi: portato o locale",
          body: "Cosa serve davvero per mettere un mariachi completo su una spiaggia lontana dal Messico.",
          imageKey: "culture-related-3",
        },
        {
          category: "Tradizione",
          title: "La hora loca, con eleganza",
          body: "Come l'ora di mezzanotte resta gioiosa senza scivolare nel caos.",
          imageKey: "culture-related-4",
        },
        {
          category: "Costo · Latino",
          title: "Quanto costa davvero un matrimonio latino di lusso",
          body: "Budget franchi per il 2026 per numero di invitati, paese e quantità di musica dal vivo.",
          imageKey: "culture-related-5",
        },
      ],
      sidebarDestinations: [
        { label: "Punta Cana", href: destinationPath("it", "punta-cana") },
        {
          label: "Tulum e Los Cabos",
          href: destinationPath("it", "tulum-los-cabos"),
        },
        { label: "St. Barths", href: destinationPath("it", "st-barths") },
        { label: "Mustique", href: destinationPath("it", "mustique") },
      ],
      sidebarVenues: [
        { label: "Casa de Campo" },
        { label: "Eden Roc Cap Cana" },
        { label: "Hacienda Temozón" },
        { label: "Chablé Maroma" },
      ],
      sidebarCultures: [
        {
          label: "Matrimoni cristiani",
          href: culturePath("it", "christian-weddings"),
        },
        {
          label: "Matrimoni europei",
          href: culturePath("it", "european-weddings"),
        },
        {
          label: "Matrimoni interreligiosi",
          href: culturePath("it", "interfaith-weddings"),
        },
        {
          label: "Matrimoni indiani",
          href: culturePath("it", "indian-weddings"),
        },
      ],
    },
    faq: {
      eyebrow: "Domande, con risposta",
      headline: "Domande *frequenti.*",
      items: [
        {
          question: "Organizzate anche la messa in chiesa, o solo la festa?",
          answer: [
            "Entrambe, come un tutt'uno. Coordiniamo la parrocchia, il sacerdote, le letture e le arras, il lazo e i padrinos — e portiamo la stessa cura fino al ricevimento e alla hora loca.",
            "Molti organizzatori iniziano al cocktail e lasciano la messa alla famiglia. Noi no; la cerimonia è il cuore della giornata.",
          ],
        },
        {
          question:
            "Mariachi ai Caraibi — li fate arrivare o li trovate sul posto?",
          answer: [
            "Entrambe le opzioni sono possibili. Per una famiglia messicana che vuole un mariachi specifico, facciamo arrivare il gruppo e gestiamo viaggio, strumenti e alloggio. Per altre, lavoriamo con solidi ensemble regionali già presenti ai Caraibi.",
            "Siamo onesti sul costo: portare un mariachi completo a Punta Cana è una voce reale, e la preventiviamo con trasparenza alla prima consulenza.",
          ],
        },
        {
          question: "Cos'è una hora loca, e può essere elegante?",
          answer: [
            "La hora loca — l'«ora folle» — è un'esplosione verso mezzanotte: maschere, oggetti di scena, spesso una seconda band o una linea di ottoni, e tutti in pista. È il culmine di un ricevimento latino.",
            "Può essere assolutamente elegante. Curiamo gli oggetti di scena, la illuminiamo bene e ne proviamo il ritmo, così da farla sembrare un crescendo progettato e non caos.",
          ],
        },
        {
          question: "Quanto costa un matrimonio latino di lusso nel 2026?",
          answer: [
            "Una forbice utile per il 2026, da 150 a 350 invitati, va da 150.000 a 600.000 USD tutto incluso, a seconda del paese, del numero di invitati e di quanta musica dal vivo.",
            "Condividiamo budget trasparenti e dettagliati alla prima consulenza — incluso il costo reale delle band dal vivo e di un mariachi portato da fuori, se ne desiderate uno.",
          ],
        },
        {
          question:
            "In cosa differiscono le usanze dominicane da quelle messicane?",
          answer: [
            "Entrambe sono di solito cattoliche, con le arras e il lazo. Ma l'accento cambia: un matrimonio messicano mette al centro i padrinos, spesso con mariachi e una marcata formalità da hacienda; un matrimonio dominicano si abbandona al merengue e alla bachata, e si allunga, lungo e rumoroso.",
            "Progettiamo ciascuno secondo la sua tradizione — mai un modello «latino» generico — e chiediamo alla famiglia quali usanze custodisce.",
          ],
        },
        {
          question: "La cerimonia può essere bilingue?",
          answer: [
            "Sì. Predisponiamo letture e voti in spagnolo e inglese, un programma bilingue e un sacerdote a suo agio nel passare tra le lingue — anche portoghese per le famiglie brasiliane.",
            "L'obiettivo è semplice: nessun invitato, da nessuna delle due parti, dovrebbe sentirsi al matrimonio di qualcun altro.",
          ],
        },
        {
          question:
            "Perché Grecia chiama questa la tradizione propria dell'atelier?",
          answer: [
            "Grecia è dominicana, e il nostro atelier è a Punta Cana. Ha organizzato matrimoni per la sua stessa famiglia e per le amiche più care.",
            "Significa che la dimestichezza culturale non è studiata — è vissuta. Progettiamo un matrimonio latino come lo faremmo per i nostri.",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Una conversazione privata —",
      headline: "*Inizia* il tuo\nmatrimonio latino.",
      body: "Diteci il paese, la famiglia, la parrocchia e una data di massima. Grecia risponde, di persona, entro cinque giorni lavorativi.",
      ctaLabel: "Richiedi una consulenza privata →",
      ctaHref: staticPath("it", "/contact"),
    },
  },
};
