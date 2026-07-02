/**
 * Flagship Journal article — "Best Indian Wedding Venues in Punta Cana".
 * Full rich body mirroring the design's `pages/journal-article.jsx`.
 */

import { type Locale } from "../../../../i18n/routing";
import * as b from "../body";
import type { ArticleSeed, ArticleLocaleCopy } from "../types";

const PC = "/destinations/punta-cana";
const IND = "/multicultural-weddings/indian-weddings";
const COST = "/journal/luxury-punta-cana-wedding-cost";

type Body = {
  introP: b.Run[];
  climateH: string;
  climateP1: b.Run[];
  climateP2: string;
  featureCaption: string;
  featureCredit: string;
  statLabels: [string, string, string];
  takeH: string;
  takeItems: string[];
  venuesH: string;
  venuesP: b.Run[];
  beachH: string;
  beachP: string;
  vcLabel: string;
  jelly: { tag: string; eyebrow: string; blurb: string; meta: [string, string][]; link: string };
  kukua: { tag: string; eyebrow: string; blurb: string; meta: [string, string][]; link: string };
  gal: [string, string];
  pqQuote: string;
  pqCite: string;
  resortsH: string;
  resortsP: b.Run[];
  splitEyebrow: string;
  splitHeading: string;
  splitParas: [string, string];
  resortsTrade: string;
  dcEyebrow: string;
  dcLink: string;
  cta: { script: string; heading: string; body: string; ctaLabel: string };
  estatesH: string;
  estatesP: string;
  estItems: b.Run[][];
  costH: string;
  costP: b.Run[];
};

const STAT_VALUES: [string, string, string] = ["40", "5", "800"];

const en: ArticleLocaleCopy = {
  title: "Best Indian Wedding *Venues* in Punta Cana",
  excerpt:
    "A working register of the resorts and beach clubs that hold a 300-guest baraat with grace — capacity, kitchens, and the storm calendar.",
  kicker: "Punta Cana",
  lede: "Not every beach can carry a baraat. We list only the venues whose kitchens, capacity and weather windows we have tested with our own weddings.",
  faqs: [
    {
      question: "Which Punta Cana venue is best for a large Indian wedding?",
      answer:
        "For 300-plus guests, Kukua Beach Club and Caleton are our first calls — both have the multi-zone layout and kitchen capacity for a full multi-day arc. Jellyfish is the better room under 180.",
    },
    {
      question: "Can these venues accommodate a baraat?",
      answer:
        "Yes. Every venue here can host a baraat — the beach clubs along the shoreline, the resorts and estates along their entrance drives. We coordinate the dhol, the horse or car, and the choreography as standard.",
    },
    {
      question: "How far in advance should we book?",
      answer: [
        "Eighteen to twenty-four months for peak season. Indian weddings book first because of the multi-day calendar and the specialists involved — see our ",
        { text: "Indian weddings guide", href: IND },
        " for the full timeline.",
      ],
    },
    {
      question: "Do these venues handle vegetarian and Jain catering?",
      answer:
        "Yes, and as standard. Every venue we recommend provides full vegetarian, Jain, vegan and allergen-free menus across every meal. Eden Roc has the most accommodating kitchen for strict requirements.",
    },
  ],
  bleedQuote: {
    script: "After forty weddings —",
    quote:
      "The venue is never the wedding. But the wrong venue can quietly undo a year of planning in a single afternoon. Choose the room that disappears, and lets the family fill it.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const enBody: Body = {
  introP: [
    "This is the honest register — not a directory of everything that calls itself a wedding venue, but the houses we return to, and why. If you are early in planning, start with our ",
    { text: "Punta Cana destination guide", href: PC },
    " and our overview of ",
    { text: "Indian weddings", href: IND },
    " as a tradition; this piece assumes you already know you want the Dominican Republic.",
  ],
  climateH: "The climate & the calendar",
  climateP1: [
    "Before any venue conversation, the calendar. Punta Cana's dry season runs ",
    { text: "November through April", strong: true },
    " — mid-eighties, low humidity, a breeze from the east. Ninety percent of our Indian weddings fall here, and these venues book first, often eighteen months out.",
  ],
  climateP2:
    "June through October carries hurricane-season risk. It is bookable — roughly a third of our budget-conscious couples choose it, at a 20–25% saving — but for a multi-day wedding with three hundred travelling guests, we counsel caution.",
  featureCaption: "The dry-season coast at Cap Cana",
  featureCredit: "Photographed February 2025",
  statLabels: [
    "Indian weddings planned since 2012",
    "Venues we return to, again and again",
    "Guests the largest can seat",
  ],
  takeH: "The short version",
  takeItems: [
    "Book November–April for the dry season; expect to commit 18 months ahead",
    "The venues below cover every guest count from 80 to 800",
    "Kukua and Caleton handle multi-day, multi-event weddings best",
    "Jellyfish is the studio's pick for weddings under 180 guests",
  ],
  venuesH: "The venues, by type",
  venuesP: [
    "We group them into three working categories: ",
    { text: "beach clubs and pavilions", strong: true },
    " for the ceremony on the sand, ",
    { text: "resort partners", strong: true },
    " for the all-in weekend with on-site rooms, and ",
    { text: "private estates", strong: true },
    " for the couple who wants the place to themselves.",
  ],
  beachH: "Beach clubs & pavilions",
  beachP:
    "The beach club is the classic Punta Cana Indian wedding: a sand-floor mandap at golden hour, the baraat along the shoreline, dinner under string lights as the tide comes in. The two houses below we trust with the full multi-day arc.",
  vcLabel: "The studio's beach-club picks",
  jelly: {
    tag: "Beach pavilion",
    eyebrow: "Bávaro · up to 180 guests",
    blurb:
      "A two-level palm-thatched pavilion that separates ceremony and reception without ever leaving the venue. Our pick for the wedding under 180.",
    meta: [
      ["Capacity", "40 – 180"],
      ["Baraat", "Shoreline"],
      ["Best for", "Sunset mandap"],
    ],
    link: "Read the venue brief",
  },
  kukua: {
    tag: "Beach club",
    eyebrow: "Cap Cana · up to 400 guests",
    blurb:
      "Three distinct event zones make it ideal for the multi-day, multi-event arc — mehndi, sangeet, ceremony and reception, all on one stretch of sand.",
    meta: [
      ["Capacity", "80 – 400"],
      ["Event zones", "Three"],
      ["Best for", "Full weekend"],
    ],
    link: "Read the venue brief",
  },
  gal: ["The sand-floor mandap at golden hour", "Mehndi, the night before · Bávaro"],
  pqQuote:
    "A beach club lives or dies by its kitchen. The pretty ones are everywhere; the ones that can plate three hundred vegetarian thalis at once are rare.",
  pqCite: "Grecia Mejía · Founder",
  resortsH: "Resort partners",
  resortsP: [
    "When the guest list travels — and for Indian weddings it always travels — the resort partner solves accommodation, catering and ceremony in one contract. ",
    { text: "Eden Roc Cap Cana", strong: true },
    ", a Relais & Châteaux property, has the most accommodating kitchen in the region for Jain, vegetarian and kosher-grade requirements.",
  ],
  splitEyebrow: "Why the resort wins",
  splitHeading: "One contract, three problems solved.",
  splitParas: [
    "Accommodation, catering and ceremony under a single roof — the resort partner removes the three hardest logistics of a travelling guest list in one signature.",
    "For a four-day wedding where most guests fly in, the convenience compounds: morning haldi, afternoon excursions, and the baraat all happen without a single coach transfer.",
  ],
  resortsTrade:
    "The trade is intimacy. A resort shares the property with other guests, and the photography is rarely as private as an estate or a closed beach club. For couples who want the place to themselves, the next section is for you.",
  dcEyebrow: "The destination, in full",
  dcLink: "Read the destination guide",
  cta: {
    script: "A private conversation —",
    heading: "Planning an Indian wedding in Punta Cana?",
    body: "We accept fourteen weddings a year. Tell us your dates and guest count, and Grecia will write back personally within five working days.",
    ctaLabel: "Request a consultation",
  },
  estatesH: "Private estates",
  estatesP:
    "For couples who want the venue entirely to themselves — no other weddings, no resort guests, full control of the timeline — a private estate is the answer. Higher in cost and coordination, but for 150–250 guests across a long weekend, nothing else compares for privacy.",
  estItems: [
    [{ text: "Capacity", strong: true }, " — estates hold 80–250 comfortably; beyond that, marquees are required"],
    [{ text: "Catering", strong: true }, " — almost always brought in; we travel with our Indian catering partner"],
    [{ text: "Accommodation", strong: true }, " — guests stay off-site at nearby resorts, ten to twenty minutes away"],
  ],
  costH: "What it costs",
  costP: [
    "A useful 2026 range for a 200–400 guest Indian wedding across three-to-five days is ",
    { text: "USD $350,000 – $1.2M", strong: true },
    ", all-in. Venue rental is a fraction of that — typically $18,000–$60,000. For the full breakdown, see our companion guide on ",
    { text: "what a luxury Punta Cana wedding actually costs", href: COST },
    ".",
  ],
};

const es: ArticleLocaleCopy = {
  title: "Las mejores *locaciones* para bodas indias en Punta Cana",
  excerpt:
    "Un registro práctico de los resorts y clubes de playa que acogen un baraat de 300 invitados con gracia: capacidad, cocinas y calendario de tormentas.",
  kicker: "Punta Cana",
  lede: "No toda playa puede sostener un baraat. Solo incluimos las sedes cuyas cocinas, capacidad y ventanas climáticas hemos probado con nuestras propias bodas.",
  faqs: [
    {
      question: "¿Qué sede de Punta Cana es mejor para una boda india grande?",
      answer:
        "Para más de 300 invitados, Kukua Beach Club y Caleton son nuestras primeras llamadas: ambas tienen la distribución por zonas y la capacidad de cocina para un arco de varios días. Jellyfish es mejor por debajo de 180.",
    },
    {
      question: "¿Pueden estas sedes acoger un baraat?",
      answer:
        "Sí. Todas las sedes aquí pueden acoger un baraat: los clubes de playa por la orilla, los resorts y las fincas por sus accesos. Coordinamos el dhol, el caballo o el coche, y la coreografía como estándar.",
    },
    {
      question: "¿Con cuánta antelación conviene reservar?",
      answer: [
        "De dieciocho a veinticuatro meses en temporada alta. Las bodas indias reservan primero por el calendario de varios días y los especialistas implicados: consulta nuestra ",
        { text: "guía de bodas indias", href: IND },
        " para el calendario completo.",
      ],
    },
    {
      question: "¿Ofrecen catering vegetariano y jainista?",
      answer:
        "Sí, y como estándar. Toda sede que recomendamos ofrece menús vegetarianos, jainistas, veganos y sin alérgenos en cada comida. Eden Roc tiene la cocina más flexible para requisitos estrictos.",
    },
  ],
  bleedQuote: {
    script: "Tras cuarenta bodas —",
    quote:
      "La sede nunca es la boda. Pero la sede equivocada puede deshacer en silencio un año de planificación en una sola tarde. Elige la sala que desaparece y deja que la familia la llene.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const esBody: Body = {
  introP: [
    "Este es el registro honesto: no un directorio de todo lo que se llama sede de bodas, sino las casas a las que volvemos, y por qué. Si estás al inicio, empieza por nuestra ",
    { text: "guía de destino de Punta Cana", href: PC },
    " y nuestra visión de las ",
    { text: "bodas indias", href: IND },
    " como tradición; este texto asume que ya sabes que quieres la República Dominicana.",
  ],
  climateH: "El clima y el calendario",
  climateP1: [
    "Antes de hablar de sedes, el calendario. La temporada seca de Punta Cana va de ",
    { text: "noviembre a abril", strong: true },
    " — unos 29°C, baja humedad, brisa del este. El noventa por ciento de nuestras bodas indias caen aquí, y estas sedes se reservan primero, a menudo con dieciocho meses.",
  ],
  climateP2:
    "De junio a octubre hay riesgo de temporada de huracanes. Es reservable —cerca de un tercio de nuestras parejas con presupuesto ajustado lo eligen, con un ahorro del 20–25%— pero para una boda de varios días con trescientos invitados que viajan, aconsejamos prudencia.",
  featureCaption: "La costa en temporada seca en Cap Cana",
  featureCredit: "Fotografiado en febrero de 2025",
  statLabels: [
    "Bodas indias planificadas desde 2012",
    "Sedes a las que volvemos una y otra vez",
    "Invitados que sienta la más grande",
  ],
  takeH: "La versión corta",
  takeItems: [
    "Reserva de noviembre a abril para la temporada seca; cuenta con comprometerte 18 meses antes",
    "Las sedes de abajo cubren de 80 a 800 invitados",
    "Kukua y Caleton manejan mejor las bodas de varios días y eventos",
    "Jellyfish es la elección del estudio para bodas de menos de 180 invitados",
  ],
  venuesH: "Las sedes, por tipo",
  venuesP: [
    "Las agrupamos en tres categorías de trabajo: ",
    { text: "clubes de playa y pabellones", strong: true },
    " para la ceremonia en la arena, ",
    { text: "resorts asociados", strong: true },
    " para el fin de semana completo con alojamiento, y ",
    { text: "fincas privadas", strong: true },
    " para quien quiere el lugar para sí.",
  ],
  beachH: "Clubes de playa y pabellones",
  beachP:
    "El club de playa es la boda india clásica de Punta Cana: un mandap sobre la arena al atardecer, el baraat por la orilla, la cena bajo luces mientras sube la marea. Las dos casas de abajo las confiamos con el arco completo de varios días.",
  vcLabel: "Las elecciones de playa del estudio",
  jelly: {
    tag: "Pabellón de playa",
    eyebrow: "Bávaro · hasta 180 invitados",
    blurb:
      "Un pabellón de dos niveles con techo de palma que separa ceremonia y recepción sin salir de la sede. Nuestra elección para la boda de menos de 180.",
    meta: [
      ["Capacidad", "40 – 180"],
      ["Baraat", "Orilla"],
      ["Ideal para", "Mandap al atardecer"],
    ],
    link: "Leer la ficha de la sede",
  },
  kukua: {
    tag: "Club de playa",
    eyebrow: "Cap Cana · hasta 400 invitados",
    blurb:
      "Tres zonas de evento distintas lo hacen ideal para el arco de varios días —mehndi, sangeet, ceremonia y recepción— todo en una misma playa.",
    meta: [
      ["Capacidad", "80 – 400"],
      ["Zonas de evento", "Tres"],
      ["Ideal para", "Fin de semana completo"],
    ],
    link: "Leer la ficha de la sede",
  },
  gal: ["El mandap sobre la arena al atardecer", "Mehndi, la noche anterior · Bávaro"],
  pqQuote:
    "Un club de playa vive o muere por su cocina. Los bonitos están por todas partes; los que emplatan trescientos thalis vegetarianos a la vez son raros.",
  pqCite: "Grecia Mejía · Fundadora",
  resortsH: "Resorts asociados",
  resortsP: [
    "Cuando la lista de invitados viaja —y en las bodas indias siempre viaja— el resort asociado resuelve alojamiento, catering y ceremonia en un solo contrato. ",
    { text: "Eden Roc Cap Cana", strong: true },
    ", propiedad Relais & Châteaux, tiene la cocina más flexible de la región para requisitos jainistas, vegetarianos y de grado kosher.",
  ],
  splitEyebrow: "Por qué gana el resort",
  splitHeading: "Un contrato, tres problemas resueltos.",
  splitParas: [
    "Alojamiento, catering y ceremonia bajo un mismo techo: el resort elimina las tres logísticas más difíciles de una lista que viaja con una sola firma.",
    "Para una boda de cuatro días con invitados que vuelan, la comodidad se acumula: haldi de mañana, excursiones de tarde y el baraat, todo sin un solo traslado en autobús.",
  ],
  resortsTrade:
    "El precio es la intimidad. Un resort comparte la propiedad con otros huéspedes, y la fotografía rara vez es tan privada como en una finca o un club cerrado. Para quien quiere el lugar para sí, la siguiente sección es para ti.",
  dcEyebrow: "El destino, completo",
  dcLink: "Leer la guía del destino",
  cta: {
    script: "Una conversación privada —",
    heading: "¿Planeas una boda india en Punta Cana?",
    body: "Aceptamos catorce bodas al año. Cuéntanos tus fechas y número de invitados, y Grecia te responderá personalmente en cinco días laborables.",
    ctaLabel: "Solicitar una consulta",
  },
  estatesH: "Fincas privadas",
  estatesP:
    "Para quien quiere la sede entera para sí —sin otras bodas, sin huéspedes de resort, control total del cronograma— la finca privada es la respuesta. Más costosa y de mayor coordinación, pero para 150–250 invitados en un fin de semana largo, nada la iguala en privacidad.",
  estItems: [
    [{ text: "Capacidad", strong: true }, " — las fincas albergan de 80 a 250 con holgura; más allá se necesitan carpas"],
    [{ text: "Catering", strong: true }, " — casi siempre traído; viajamos con nuestro socio de catering indio"],
    [{ text: "Alojamiento", strong: true }, " — los invitados se hospedan fuera, en resorts cercanos a diez o veinte minutos"],
  ],
  costH: "Cuánto cuesta",
  costP: [
    "Un rango útil para 2026, para una boda india de 200–400 invitados en tres a cinco días, es ",
    { text: "USD $350.000 – $1,2M", strong: true },
    ", todo incluido. El alquiler de la sede es una fracción: normalmente $18.000–$60.000. Para el desglose completo, mira nuestra guía sobre ",
    { text: "lo que cuesta de verdad una boda de lujo en Punta Cana", href: COST },
    ".",
  ],
};

const fr: ArticleLocaleCopy = {
  title: "Les meilleurs *lieux* de mariage indien à Punta Cana",
  excerpt:
    "Un registre vivant des resorts et beach clubs qui accueillent un baraat de 300 invités avec grâce — capacité, cuisines et calendrier des tempêtes.",
  kicker: "Punta Cana",
  lede: "Toutes les plages ne peuvent porter un baraat. Nous n'inscrivons que les lieux dont nous avons éprouvé la cuisine, la capacité et la fenêtre météo avec nos propres mariages.",
  faqs: [
    {
      question: "Quel lieu de Punta Cana convient à un grand mariage indien ?",
      answer:
        "Au-delà de 300 invités, Kukua Beach Club et Caleton sont nos premiers appels — tous deux ont l'agencement multi-zones et la capacité de cuisine pour un arc de plusieurs jours. Jellyfish est la meilleure salle sous 180.",
    },
    {
      question: "Ces lieux peuvent-ils accueillir un baraat ?",
      answer:
        "Oui. Chaque lieu ici peut accueillir un baraat — les beach clubs le long du rivage, les resorts et domaines le long de leurs allées. Nous coordonnons le dhol, le cheval ou la voiture, et la chorégraphie en standard.",
    },
    {
      question: "Combien de temps à l'avance faut-il réserver ?",
      answer: [
        "De dix-huit à vingt-quatre mois en haute saison. Les mariages indiens réservent en premier, en raison du calendrier sur plusieurs jours — voir notre ",
        { text: "guide des mariages indiens", href: IND },
        " pour le calendrier complet.",
      ],
    },
    {
      question: "Ces lieux gèrent-ils le végétarien et le jaïn ?",
      answer:
        "Oui, et en standard. Chaque lieu que nous recommandons propose des menus végétariens, jaïns, végans et sans allergènes à chaque repas. Eden Roc a la cuisine la plus accommodante pour les exigences strictes.",
    },
  ],
  bleedQuote: {
    script: "Après quarante mariages —",
    quote:
      "Le lieu n'est jamais le mariage. Mais le mauvais lieu peut défaire en silence une année de préparation en une seule après-midi. Choisissez la salle qui s'efface, et laisse la famille la remplir.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const frBody: Body = {
  introP: [
    "Voici le registre honnête — non pas un annuaire de tout ce qui se dit lieu de mariage, mais les maisons où nous revenons, et pourquoi. Si vous débutez, commencez par notre ",
    { text: "guide de destination Punta Cana", href: PC },
    " et notre panorama des ",
    { text: "mariages indiens", href: IND },
    " comme tradition ; ce texte suppose que vous voulez déjà la République dominicaine.",
  ],
  climateH: "Le climat & le calendrier",
  climateP1: [
    "Avant toute discussion de lieu, le calendrier. La saison sèche de Punta Cana va de ",
    { text: "novembre à avril", strong: true },
    " — environ 29°C, faible humidité, brise d'est. Quatre-vingt-dix pour cent de nos mariages indiens s'y tiennent, et ces lieux se réservent en premier, souvent dix-huit mois à l'avance.",
  ],
  climateP2:
    "De juin à octobre plane le risque de la saison des ouragans. C'est réservable — un tiers environ de nos couples au budget serré le choisissent, avec 20–25% d'économie — mais pour un mariage de plusieurs jours à trois cents invités voyageurs, nous conseillons la prudence.",
  featureCaption: "La côte en saison sèche à Cap Cana",
  featureCredit: "Photographié en février 2025",
  statLabels: [
    "Mariages indiens organisés depuis 2012",
    "Lieux où nous revenons, encore et encore",
    "Invités que le plus grand peut asseoir",
  ],
  takeH: "En bref",
  takeItems: [
    "Réservez novembre–avril pour la saison sèche ; comptez vous engager 18 mois avant",
    "Les lieux ci-dessous couvrent de 80 à 800 invités",
    "Kukua et Caleton gèrent le mieux les mariages sur plusieurs jours",
    "Jellyfish est le choix du studio pour les mariages sous 180 invités",
  ],
  venuesH: "Les lieux, par type",
  venuesP: [
    "Nous les rangeons en trois catégories : ",
    { text: "beach clubs et pavillons", strong: true },
    " pour la cérémonie sur le sable, ",
    { text: "resorts partenaires", strong: true },
    " pour le week-end complet avec hébergement, et ",
    { text: "domaines privés", strong: true },
    " pour qui veut le lieu à soi.",
  ],
  beachH: "Beach clubs & pavillons",
  beachP:
    "Le beach club est le mariage indien classique de Punta Cana : un mandap sur le sable au crépuscule, le baraat le long du rivage, le dîner sous les guirlandes tandis que la marée monte. Les deux maisons ci-dessous, nous leur confions l'arc complet.",
  vcLabel: "Les choix beach club du studio",
  jelly: {
    tag: "Pavillon de plage",
    eyebrow: "Bávaro · jusqu'à 180 invités",
    blurb:
      "Un pavillon à deux niveaux couvert de palmes qui sépare cérémonie et réception sans quitter le lieu. Notre choix pour le mariage sous 180.",
    meta: [
      ["Capacité", "40 – 180"],
      ["Baraat", "Rivage"],
      ["Idéal pour", "Mandap au crépuscule"],
    ],
    link: "Lire la fiche du lieu",
  },
  kukua: {
    tag: "Beach club",
    eyebrow: "Cap Cana · jusqu'à 400 invités",
    blurb:
      "Trois zones d'événement distinctes le rendent idéal pour l'arc de plusieurs jours — mehndi, sangeet, cérémonie et réception, sur une même plage.",
    meta: [
      ["Capacité", "80 – 400"],
      ["Zones d'événement", "Trois"],
      ["Idéal pour", "Week-end complet"],
    ],
    link: "Lire la fiche du lieu",
  },
  gal: ["Le mandap sur le sable au crépuscule", "Mehndi, la veille · Bávaro"],
  pqQuote:
    "Un beach club vit ou meurt par sa cuisine. Les jolis sont partout ; ceux qui dressent trois cents thalis végétariens d'un coup sont rares.",
  pqCite: "Grecia Mejía · Fondatrice",
  resortsH: "Resorts partenaires",
  resortsP: [
    "Quand la liste voyage — et pour les mariages indiens elle voyage toujours — le resort partenaire règle hébergement, traiteur et cérémonie en un seul contrat. ",
    { text: "Eden Roc Cap Cana", strong: true },
    ", propriété Relais & Châteaux, a la cuisine la plus accommodante de la région pour les exigences jaïnes, végétariennes et de niveau cacher.",
  ],
  splitEyebrow: "Pourquoi le resort l'emporte",
  splitHeading: "Un contrat, trois problèmes résolus.",
  splitParas: [
    "Hébergement, traiteur et cérémonie sous un même toit — le resort supprime les trois logistiques les plus dures d'une liste voyageuse en une signature.",
    "Pour un mariage de quatre jours où la plupart arrivent en avion, le confort se cumule : haldi le matin, excursions l'après-midi, et le baraat, le tout sans un seul transfert en car.",
  ],
  resortsTrade:
    "Le prix, c'est l'intimité. Un resort partage la propriété avec d'autres clients, et la photographie est rarement aussi privée qu'un domaine ou un beach club fermé. Pour qui veut le lieu à soi, la section suivante est pour vous.",
  dcEyebrow: "La destination, en entier",
  dcLink: "Lire le guide de destination",
  cta: {
    script: "Une conversation privée —",
    heading: "Un mariage indien à Punta Cana en tête ?",
    body: "Nous acceptons quatorze mariages par an. Dites-nous vos dates et le nombre d'invités, et Grecia vous répondra personnellement sous cinq jours ouvrés.",
    ctaLabel: "Demander une consultation",
  },
  estatesH: "Domaines privés",
  estatesP:
    "Pour qui veut le lieu entièrement à soi — aucun autre mariage, aucun client de resort, la maîtrise totale du déroulé — le domaine privé est la réponse. Plus coûteux et plus exigeant, mais pour 150–250 invités sur un long week-end, rien n'égale son intimité.",
  estItems: [
    [{ text: "Capacité", strong: true }, " — les domaines accueillent 80 à 250 à l'aise ; au-delà, des chapiteaux s'imposent"],
    [{ text: "Traiteur", strong: true }, " — presque toujours apporté ; nous voyageons avec notre partenaire traiteur indien"],
    [{ text: "Hébergement", strong: true }, " — les invités logent hors site, dans des resorts proches à dix ou vingt minutes"],
  ],
  costH: "Ce que cela coûte",
  costP: [
    "Une fourchette utile pour 2026, pour un mariage indien de 200–400 invités sur trois à cinq jours, est ",
    { text: "USD 350 000 – 1,2 M$", strong: true },
    ", tout compris. La location du lieu n'en est qu'une fraction : typiquement 18 000–60 000 $. Pour le détail complet, voyez notre guide sur ",
    { text: "ce que coûte vraiment un mariage de luxe à Punta Cana", href: COST },
    ".",
  ],
};

const pt: ArticleLocaleCopy = {
  title: "Os melhores *locais* para casamentos indianos em Punta Cana",
  excerpt:
    "Um registo prático dos resorts e clubes de praia que acolhem um baraat de 300 convidados com graça — capacidade, cozinhas e calendário de tempestades.",
  kicker: "Punta Cana",
  lede: "Nem toda a praia aguenta um baraat. Só incluímos os locais cujas cozinhas, capacidade e janelas climáticas testámos com os nossos próprios casamentos.",
  faqs: [
    {
      question: "Que local de Punta Cana é melhor para um grande casamento indiano?",
      answer:
        "Para mais de 300 convidados, o Kukua Beach Club e o Caleton são as nossas primeiras chamadas — ambos têm a disposição por zonas e a capacidade de cozinha para um arco de vários dias. O Jellyfish é a melhor sala abaixo de 180.",
    },
    {
      question: "Estes locais acolhem um baraat?",
      answer:
        "Sim. Todos os locais aqui podem acolher um baraat — os clubes de praia pela orla, os resorts e quintas pelos seus acessos. Coordenamos o dhol, o cavalo ou o carro, e a coreografia como padrão.",
    },
    {
      question: "Com que antecedência se deve reservar?",
      answer: [
        "Dezoito a vinte e quatro meses na época alta. Os casamentos indianos reservam primeiro pelo calendário de vários dias — veja o nosso ",
        { text: "guia de casamentos indianos", href: IND },
        " para o calendário completo.",
      ],
    },
    {
      question: "Estes locais fazem catering vegetariano e jainista?",
      answer:
        "Sim, e como padrão. Todo o local que recomendamos oferece menus vegetarianos, jainistas, veganos e sem alergénios em cada refeição. O Eden Roc tem a cozinha mais flexível para requisitos rigorosos.",
    },
  ],
  bleedQuote: {
    script: "Depois de quarenta casamentos —",
    quote:
      "O local nunca é o casamento. Mas o local errado pode desfazer em silêncio um ano de planeamento numa só tarde. Escolha a sala que desaparece e deixa a família enchê-la.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const ptBody: Body = {
  introP: [
    "Este é o registo honesto — não um diretório de tudo o que se diz local de casamento, mas as casas a que voltamos, e porquê. Se está no início, comece pelo nosso ",
    { text: "guia de destino de Punta Cana", href: PC },
    " e pela nossa visão dos ",
    { text: "casamentos indianos", href: IND },
    " como tradição; este texto assume que já sabe que quer a República Dominicana.",
  ],
  climateH: "O clima & o calendário",
  climateP1: [
    "Antes de qualquer conversa de local, o calendário. A época seca de Punta Cana vai de ",
    { text: "novembro a abril", strong: true },
    " — cerca de 29°C, baixa humidade, brisa de leste. Noventa por cento dos nossos casamentos indianos caem aqui, e estes locais reservam primeiro, muitas vezes com dezoito meses.",
  ],
  climateP2:
    "De junho a outubro há risco de época de furacões. É reservável — cerca de um terço dos nossos casais com orçamento contido escolhe-o, com 20–25% de poupança — mas para um casamento de vários dias com trezentos convidados que viajam, aconselhamos prudência.",
  featureCaption: "A costa na época seca em Cap Cana",
  featureCredit: "Fotografado em fevereiro de 2025",
  statLabels: [
    "Casamentos indianos planeados desde 2012",
    "Locais a que voltamos, vezes sem conta",
    "Convidados que o maior consegue sentar",
  ],
  takeH: "A versão curta",
  takeItems: [
    "Reserve novembro–abril para a época seca; conte comprometer-se 18 meses antes",
    "Os locais abaixo cobrem de 80 a 800 convidados",
    "Kukua e Caleton gerem melhor os casamentos de vários dias",
    "Jellyfish é a escolha do estúdio para casamentos abaixo de 180 convidados",
  ],
  venuesH: "Os locais, por tipo",
  venuesP: [
    "Agrupamo-los em três categorias: ",
    { text: "clubes de praia e pavilhões", strong: true },
    " para a cerimónia na areia, ",
    { text: "resorts parceiros", strong: true },
    " para o fim de semana completo com alojamento, e ",
    { text: "quintas privadas", strong: true },
    " para quem quer o lugar só para si.",
  ],
  beachH: "Clubes de praia & pavilhões",
  beachP:
    "O clube de praia é o casamento indiano clássico de Punta Cana: um mandap sobre a areia ao pôr do sol, o baraat pela orla, o jantar sob luzes enquanto a maré sobe. As duas casas abaixo confiamos-lhes o arco completo de vários dias.",
  vcLabel: "As escolhas de praia do estúdio",
  jelly: {
    tag: "Pavilhão de praia",
    eyebrow: "Bávaro · até 180 convidados",
    blurb:
      "Um pavilhão de dois níveis coberto de palma que separa cerimónia e receção sem sair do local. A nossa escolha para o casamento abaixo de 180.",
    meta: [
      ["Capacidade", "40 – 180"],
      ["Baraat", "Orla"],
      ["Ideal para", "Mandap ao pôr do sol"],
    ],
    link: "Ler a ficha do local",
  },
  kukua: {
    tag: "Clube de praia",
    eyebrow: "Cap Cana · até 400 convidados",
    blurb:
      "Três zonas de evento distintas tornam-no ideal para o arco de vários dias — mehndi, sangeet, cerimónia e receção — tudo na mesma praia.",
    meta: [
      ["Capacidade", "80 – 400"],
      ["Zonas de evento", "Três"],
      ["Ideal para", "Fim de semana completo"],
    ],
    link: "Ler a ficha do local",
  },
  gal: ["O mandap sobre a areia ao pôr do sol", "Mehndi, na véspera · Bávaro"],
  pqQuote:
    "Um clube de praia vive ou morre pela sua cozinha. Os bonitos estão por todo o lado; os que empratam trezentos thalis vegetarianos ao mesmo tempo são raros.",
  pqCite: "Grecia Mejía · Fundadora",
  resortsH: "Resorts parceiros",
  resortsP: [
    "Quando a lista viaja — e nos casamentos indianos viaja sempre — o resort parceiro resolve alojamento, catering e cerimónia num só contrato. ",
    { text: "Eden Roc Cap Cana", strong: true },
    ", propriedade Relais & Châteaux, tem a cozinha mais flexível da região para requisitos jainistas, vegetarianos e de grau kosher.",
  ],
  splitEyebrow: "Porque o resort vence",
  splitHeading: "Um contrato, três problemas resolvidos.",
  splitParas: [
    "Alojamento, catering e cerimónia sob o mesmo teto — o resort remove as três logísticas mais difíceis de uma lista que viaja com uma só assinatura.",
    "Para um casamento de quatro dias em que a maioria voa, a comodidade acumula-se: haldi de manhã, excursões à tarde e o baraat, tudo sem um único transfer de autocarro.",
  ],
  resortsTrade:
    "O preço é a intimidade. Um resort partilha a propriedade com outros hóspedes, e a fotografia raramente é tão privada como numa quinta ou num clube fechado. Para quem quer o lugar só para si, a secção seguinte é para si.",
  dcEyebrow: "O destino, por inteiro",
  dcLink: "Ler o guia do destino",
  cta: {
    script: "Uma conversa privada —",
    heading: "A planear um casamento indiano em Punta Cana?",
    body: "Aceitamos catorze casamentos por ano. Diga-nos as suas datas e número de convidados, e a Grecia responder-lhe-á pessoalmente em cinco dias úteis.",
    ctaLabel: "Pedir uma consulta",
  },
  estatesH: "Quintas privadas",
  estatesP:
    "Para quem quer o local inteiramente para si — sem outros casamentos, sem hóspedes de resort, controlo total do cronograma — a quinta privada é a resposta. Mais cara e de maior coordenação, mas para 150–250 convidados num fim de semana longo, nada a iguala em privacidade.",
  estItems: [
    [{ text: "Capacidade", strong: true }, " — as quintas acolhem 80 a 250 à vontade; além disso, exigem-se tendas"],
    [{ text: "Catering", strong: true }, " — quase sempre trazido; viajamos com o nosso parceiro de catering indiano"],
    [{ text: "Alojamento", strong: true }, " — os convidados ficam fora, em resorts próximos a dez ou vinte minutos"],
  ],
  costH: "Quanto custa",
  costP: [
    "Um intervalo útil para 2026, para um casamento indiano de 200–400 convidados em três a cinco dias, é ",
    { text: "USD $350.000 – $1,2M", strong: true },
    ", tudo incluído. O aluguer do local é uma fração: normalmente $18.000–$60.000. Para o detalhe completo, veja o nosso guia sobre ",
    { text: "quanto custa mesmo um casamento de luxo em Punta Cana", href: COST },
    ".",
  ],
};

const de: ArticleLocaleCopy = {
  title: "Die besten indischen Hochzeits-*Locations* in Punta Cana",
  excerpt:
    "Ein praktisches Register der Resorts und Beach Clubs, die einen 300-Gäste-Baraat mit Anmut tragen — Kapazität, Küchen und der Sturmkalender.",
  kicker: "Punta Cana",
  lede: "Nicht jeder Strand trägt einen Baraat. Wir führen nur Orte, deren Küche, Kapazität und Wetterfenster wir mit eigenen Hochzeiten erprobt haben.",
  faqs: [
    {
      question: "Welche Location in Punta Cana eignet sich für eine große indische Hochzeit?",
      answer:
        "Bei über 300 Gästen sind Kukua Beach Club und Caleton unsere ersten Anrufe — beide haben das Mehrzonen-Layout und die Küchenkapazität für einen mehrtägigen Bogen. Jellyfish ist der bessere Raum unter 180.",
    },
    {
      question: "Können diese Orte einen Baraat aufnehmen?",
      answer:
        "Ja. Jeder Ort hier kann einen Baraat aufnehmen — die Beach Clubs entlang der Uferlinie, die Resorts und Anwesen entlang ihrer Zufahrten. Wir koordinieren Dhol, Pferd oder Wagen und die Choreografie als Standard.",
    },
    {
      question: "Wie weit im Voraus sollte man buchen?",
      answer: [
        "Achtzehn bis vierundzwanzig Monate in der Hochsaison. Indische Hochzeiten buchen zuerst wegen des mehrtägigen Kalenders — siehe unseren ",
        { text: "Leitfaden zu indischen Hochzeiten", href: IND },
        " für den ganzen Zeitplan.",
      ],
    },
    {
      question: "Bieten diese Orte vegetarisches und jainistisches Catering?",
      answer:
        "Ja, und als Standard. Jeder Ort, den wir empfehlen, bietet vegetarische, jainistische, vegane und allergenfreie Menüs zu jeder Mahlzeit. Eden Roc hat die anpassungsfähigste Küche für strenge Anforderungen.",
    },
  ],
  bleedQuote: {
    script: "Nach vierzig Hochzeiten —",
    quote:
      "Der Ort ist nie die Hochzeit. Aber der falsche Ort kann ein Jahr Planung an einem einzigen Nachmittag still zunichtemachen. Wählen Sie den Raum, der verschwindet und die Familie ihn füllen lässt.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const deBody: Body = {
  introP: [
    "Dies ist das ehrliche Register — kein Verzeichnis von allem, was sich Hochzeitslocation nennt, sondern die Häuser, zu denen wir zurückkehren, und warum. Am Anfang beginnen Sie mit unserem ",
    { text: "Punta-Cana-Reiseführer", href: PC },
    " und unserem Überblick über ",
    { text: "indische Hochzeiten", href: IND },
    " als Tradition; dieser Text setzt voraus, dass Sie die Dominikanische Republik bereits wollen.",
  ],
  climateH: "Das Klima & der Kalender",
  climateP1: [
    "Vor jedem Location-Gespräch der Kalender. Die Trockenzeit von Punta Cana reicht von ",
    { text: "November bis April", strong: true },
    " — um 29°C, geringe Luftfeuchte, Brise aus Osten. Neunzig Prozent unserer indischen Hochzeiten fallen hierhin, und diese Orte buchen zuerst, oft achtzehn Monate im Voraus.",
  ],
  climateP2:
    "Von Juni bis Oktober besteht das Risiko der Hurrikansaison. Buchbar — etwa ein Drittel unserer budgetbewussten Paare wählt sie, mit 20–25% Ersparnis — doch für eine mehrtägige Hochzeit mit dreihundert reisenden Gästen raten wir zur Vorsicht.",
  featureCaption: "Die Küste in der Trockenzeit bei Cap Cana",
  featureCredit: "Fotografiert im Februar 2025",
  statLabels: [
    "Indische Hochzeiten seit 2012 geplant",
    "Orte, zu denen wir immer wieder zurückkehren",
    "Gäste, die der größte fasst",
  ],
  takeH: "Die Kurzfassung",
  takeItems: [
    "November–April für die Trockenzeit buchen; rechnen Sie mit 18 Monaten Vorlauf",
    "Die Orte unten decken 80 bis 800 Gäste ab",
    "Kukua und Caleton meistern mehrtägige Hochzeiten am besten",
    "Jellyfish ist die Wahl des Studios für Hochzeiten unter 180 Gästen",
  ],
  venuesH: "Die Orte, nach Typ",
  venuesP: [
    "Wir ordnen sie in drei Arbeitskategorien: ",
    { text: "Beach Clubs und Pavillons", strong: true },
    " für die Zeremonie im Sand, ",
    { text: "Resort-Partner", strong: true },
    " für das Rundum-Wochenende mit Zimmern, und ",
    { text: "private Anwesen", strong: true },
    " für Paare, die den Ort für sich wollen.",
  ],
  beachH: "Beach Clubs & Pavillons",
  beachP:
    "Der Beach Club ist die klassische indische Hochzeit von Punta Cana: ein Mandap auf dem Sand zur goldenen Stunde, der Baraat entlang der Uferlinie, das Dinner unter Lichterketten, während die Flut kommt. Den zwei Häusern unten vertrauen wir den ganzen Bogen an.",
  vcLabel: "Die Beach-Club-Favoriten des Studios",
  jelly: {
    tag: "Strandpavillon",
    eyebrow: "Bávaro · bis 180 Gäste",
    blurb:
      "Ein zweigeschossiger, palmgedeckter Pavillon, der Zeremonie und Empfang trennt, ohne den Ort zu verlassen. Unsere Wahl für die Hochzeit unter 180.",
    meta: [
      ["Kapazität", "40 – 180"],
      ["Baraat", "Uferlinie"],
      ["Ideal für", "Mandap zur goldenen Stunde"],
    ],
    link: "Zum Location-Steckbrief",
  },
  kukua: {
    tag: "Beach Club",
    eyebrow: "Cap Cana · bis 400 Gäste",
    blurb:
      "Drei getrennte Eventzonen machen ihn ideal für den mehrtägigen Bogen — Mehndi, Sangeet, Zeremonie und Empfang, alles an einem Strand.",
    meta: [
      ["Kapazität", "80 – 400"],
      ["Eventzonen", "Drei"],
      ["Ideal für", "Ganzes Wochenende"],
    ],
    link: "Zum Location-Steckbrief",
  },
  gal: ["Der Mandap auf dem Sand zur goldenen Stunde", "Mehndi, am Abend zuvor · Bávaro"],
  pqQuote:
    "Ein Beach Club lebt oder stirbt mit seiner Küche. Die hübschen gibt es überall; die, die dreihundert vegetarische Thalis auf einmal anrichten, sind selten.",
  pqCite: "Grecia Mejía · Gründerin",
  resortsH: "Resort-Partner",
  resortsP: [
    "Wenn die Gästeliste reist — und bei indischen Hochzeiten reist sie immer — löst der Resort-Partner Unterkunft, Catering und Zeremonie in einem Vertrag. ",
    { text: "Eden Roc Cap Cana", strong: true },
    ", ein Relais-&-Châteaux-Haus, hat die anpassungsfähigste Küche der Region für jainistische, vegetarische und koschergerechte Anforderungen.",
  ],
  splitEyebrow: "Warum das Resort gewinnt",
  splitHeading: "Ein Vertrag, drei Probleme gelöst.",
  splitParas: [
    "Unterkunft, Catering und Zeremonie unter einem Dach — das Resort nimmt die drei schwersten Logistiken einer reisenden Gästeliste mit einer Unterschrift ab.",
    "Bei einer viertägigen Hochzeit, zu der die meisten einfliegen, summiert sich der Komfort: Haldi am Morgen, Ausflüge am Nachmittag und der Baraat, alles ohne einen einzigen Bustransfer.",
  ],
  resortsTrade:
    "Der Preis ist Intimität. Ein Resort teilt das Gelände mit anderen Gästen, und die Fotografie ist selten so privat wie auf einem Anwesen oder in einem geschlossenen Beach Club. Für Paare, die den Ort für sich wollen, ist der nächste Abschnitt.",
  dcEyebrow: "Das Reiseziel, ganz",
  dcLink: "Zum Reiseführer",
  cta: {
    script: "Ein privates Gespräch —",
    heading: "Planen Sie eine indische Hochzeit in Punta Cana?",
    body: "Wir nehmen vierzehn Hochzeiten im Jahr an. Nennen Sie uns Ihre Termine und die Gästezahl, und Grecia antwortet Ihnen persönlich binnen fünf Werktagen.",
    ctaLabel: "Beratung anfragen",
  },
  estatesH: "Private Anwesen",
  estatesP:
    "Für Paare, die den Ort ganz für sich wollen — keine anderen Hochzeiten, keine Resortgäste, volle Kontrolle über den Ablauf — ist das private Anwesen die Antwort. Teurer und aufwändiger, doch für 150–250 Gäste über ein langes Wochenende ist nichts privater.",
  estItems: [
    [{ text: "Kapazität", strong: true }, " — Anwesen fassen 80 bis 250 bequem; darüber sind Zelte nötig"],
    [{ text: "Catering", strong: true }, " — fast immer mitgebracht; wir reisen mit unserem indischen Catering-Partner"],
    [{ text: "Unterkunft", strong: true }, " — Gäste wohnen außerhalb, in nahen Resorts, zehn bis zwanzig Minuten entfernt"],
  ],
  costH: "Was es kostet",
  costP: [
    "Eine brauchbare Spanne für 2026, für eine indische Hochzeit mit 200–400 Gästen über drei bis fünf Tage, ist ",
    { text: "USD 350.000 – 1,2 Mio.", strong: true },
    ", alles inklusive. Die Location-Miete ist nur ein Bruchteil: meist 18.000–60.000 $. Für die volle Aufschlüsselung siehe unseren Leitfaden ",
    { text: "was eine Luxushochzeit in Punta Cana wirklich kostet", href: COST },
    ".",
  ],
};

const it: ArticleLocaleCopy = {
  title: "Le migliori *sedi* per matrimoni indiani a Punta Cana",
  excerpt:
    "Un registro pratico dei resort e beach club che accolgono un baraat di 300 invitati con grazia — capienza, cucine e calendario delle tempeste.",
  kicker: "Punta Cana",
  lede: "Non ogni spiaggia regge un baraat. Inseriamo solo le sedi di cui abbiamo provato cucina, capienza e finestra meteo con i nostri matrimoni.",
  faqs: [
    {
      question: "Quale sede di Punta Cana è migliore per un grande matrimonio indiano?",
      answer:
        "Oltre i 300 invitati, Kukua Beach Club e Caleton sono le nostre prime chiamate — entrambi hanno l'assetto multi-zona e la capacità di cucina per un arco di più giorni. Jellyfish è la sala migliore sotto i 180.",
    },
    {
      question: "Queste sedi possono accogliere un baraat?",
      answer:
        "Sì. Ogni sede qui può accogliere un baraat — i beach club lungo la riva, i resort e le tenute lungo i viali d'ingresso. Coordiniamo il dhol, il cavallo o l'auto, e la coreografia come standard.",
    },
    {
      question: "Con quanto anticipo conviene prenotare?",
      answer: [
        "Da diciotto a ventiquattro mesi in alta stagione. I matrimoni indiani prenotano per primi per via del calendario di più giorni — vedi la nostra ",
        { text: "guida ai matrimoni indiani", href: IND },
        " per il calendario completo.",
      ],
    },
    {
      question: "Queste sedi gestiscono catering vegetariano e giainista?",
      answer:
        "Sì, e come standard. Ogni sede che consigliamo offre menù vegetariani, giainisti, vegani e senza allergeni a ogni pasto. Eden Roc ha la cucina più accomodante per requisiti rigorosi.",
    },
  ],
  bleedQuote: {
    script: "Dopo quaranta matrimoni —",
    quote:
      "La sede non è mai il matrimonio. Ma la sede sbagliata può disfare in silenzio un anno di lavoro in un solo pomeriggio. Scegli la sala che scompare e lascia che la famiglia la riempia.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const itBody: Body = {
  introP: [
    "Questo è il registro onesto — non un elenco di tutto ciò che si dice sede di matrimonio, ma le case a cui torniamo, e perché. Se sei all'inizio, parti dalla nostra ",
    { text: "guida alla destinazione Punta Cana", href: PC },
    " e dalla nostra panoramica sui ",
    { text: "matrimoni indiani", href: IND },
    " come tradizione; questo testo dà per scontato che tu voglia già la Repubblica Dominicana.",
  ],
  climateH: "Il clima & il calendario",
  climateP1: [
    "Prima di ogni discorso sulla sede, il calendario. La stagione secca di Punta Cana va da ",
    { text: "novembre ad aprile", strong: true },
    " — circa 29°C, bassa umidità, brezza da est. Il novanta per cento dei nostri matrimoni indiani cade qui, e queste sedi prenotano per prime, spesso con diciotto mesi d'anticipo.",
  ],
  climateP2:
    "Da giugno a ottobre c'è il rischio della stagione degli uragani. È prenotabile — circa un terzo delle nostre coppie attente al budget la sceglie, con un risparmio del 20–25% — ma per un matrimonio di più giorni con trecento invitati in viaggio consigliamo prudenza.",
  featureCaption: "La costa nella stagione secca a Cap Cana",
  featureCredit: "Fotografato a febbraio 2025",
  statLabels: [
    "Matrimoni indiani organizzati dal 2012",
    "Sedi a cui torniamo, ancora e ancora",
    "Invitati che la più grande può sedere",
  ],
  takeH: "In breve",
  takeItems: [
    "Prenota novembre–aprile per la stagione secca; conta di impegnarti 18 mesi prima",
    "Le sedi qui sotto coprono da 80 a 800 invitati",
    "Kukua e Caleton gestiscono meglio i matrimoni di più giorni",
    "Jellyfish è la scelta dello studio per matrimoni sotto i 180 invitati",
  ],
  venuesH: "Le sedi, per tipo",
  venuesP: [
    "Le raggruppiamo in tre categorie: ",
    { text: "beach club e padiglioni", strong: true },
    " per la cerimonia sulla sabbia, ",
    { text: "resort partner", strong: true },
    " per il fine settimana completo con alloggio, e ",
    { text: "tenute private", strong: true },
    " per chi vuole il luogo tutto per sé.",
  ],
  beachH: "Beach club & padiglioni",
  beachP:
    "Il beach club è il classico matrimonio indiano di Punta Cana: un mandap sulla sabbia all'ora d'oro, il baraat lungo la riva, la cena sotto le luci mentre sale la marea. Alle due case qui sotto affidiamo l'intero arco di più giorni.",
  vcLabel: "Le scelte da beach club dello studio",
  jelly: {
    tag: "Padiglione di spiaggia",
    eyebrow: "Bávaro · fino a 180 invitati",
    blurb:
      "Un padiglione a due livelli con tetto di palma che separa cerimonia e ricevimento senza lasciare la sede. La nostra scelta per il matrimonio sotto i 180.",
    meta: [
      ["Capienza", "40 – 180"],
      ["Baraat", "Riva"],
      ["Ideale per", "Mandap all'ora d'oro"],
    ],
    link: "Leggi la scheda della sede",
  },
  kukua: {
    tag: "Beach club",
    eyebrow: "Cap Cana · fino a 400 invitati",
    blurb:
      "Tre zone evento distinte lo rendono ideale per l'arco di più giorni — mehndi, sangeet, cerimonia e ricevimento — tutto sulla stessa spiaggia.",
    meta: [
      ["Capienza", "80 – 400"],
      ["Zone evento", "Tre"],
      ["Ideale per", "Fine settimana completo"],
    ],
    link: "Leggi la scheda della sede",
  },
  gal: ["Il mandap sulla sabbia all'ora d'oro", "Mehndi, la sera prima · Bávaro"],
  pqQuote:
    "Un beach club vive o muore per la sua cucina. Quelli belli sono ovunque; quelli che impiattano trecento thali vegetariani in una volta sono rari.",
  pqCite: "Grecia Mejía · Fondatrice",
  resortsH: "Resort partner",
  resortsP: [
    "Quando la lista viaggia — e nei matrimoni indiani viaggia sempre — il resort partner risolve alloggio, catering e cerimonia in un solo contratto. ",
    { text: "Eden Roc Cap Cana", strong: true },
    ", proprietà Relais & Châteaux, ha la cucina più accomodante della regione per requisiti giainisti, vegetariani e di grado kosher.",
  ],
  splitEyebrow: "Perché vince il resort",
  splitHeading: "Un contratto, tre problemi risolti.",
  splitParas: [
    "Alloggio, catering e cerimonia sotto lo stesso tetto — il resort toglie le tre logistiche più difficili di una lista che viaggia con una sola firma.",
    "Per un matrimonio di quattro giorni in cui la maggior parte arriva in aereo, la comodità si somma: haldi al mattino, escursioni al pomeriggio e il baraat, il tutto senza un solo transfer in pullman.",
  ],
  resortsTrade:
    "Il prezzo è l'intimità. Un resort condivide la proprietà con altri ospiti, e la fotografia è raramente privata quanto in una tenuta o in un club chiuso. Per chi vuole il luogo tutto per sé, la sezione seguente è per voi.",
  dcEyebrow: "La destinazione, per intero",
  dcLink: "Leggi la guida alla destinazione",
  cta: {
    script: "Una conversazione privata —",
    heading: "Stai pensando a un matrimonio indiano a Punta Cana?",
    body: "Accettiamo quattordici matrimoni all'anno. Dicci le date e il numero di invitati, e Grecia ti risponderà personalmente entro cinque giorni lavorativi.",
    ctaLabel: "Richiedi una consulenza",
  },
  estatesH: "Tenute private",
  estatesP:
    "Per chi vuole la sede interamente per sé — nessun altro matrimonio, nessun ospite del resort, controllo totale del programma — la tenuta privata è la risposta. Più costosa e di maggiore coordinamento, ma per 150–250 invitati in un lungo fine settimana nulla la eguaglia in privacy.",
  estItems: [
    [{ text: "Capienza", strong: true }, " — le tenute ospitano 80–250 con agio; oltre, servono tensostrutture"],
    [{ text: "Catering", strong: true }, " — quasi sempre portato; viaggiamo con il nostro partner di catering indiano"],
    [{ text: "Alloggio", strong: true }, " — gli ospiti soggiornano fuori, in resort vicini a dieci o venti minuti"],
  ],
  costH: "Quanto costa",
  costP: [
    "Una fascia utile per il 2026, per un matrimonio indiano di 200–400 invitati su tre-cinque giorni, è ",
    { text: "USD $350.000 – $1,2M", strong: true },
    ", tutto incluso. L'affitto della sede è una frazione: di solito $18.000–$60.000. Per il dettaglio completo, vedi la nostra guida su ",
    { text: "quanto costa davvero un matrimonio di lusso a Punta Cana", href: COST },
    ".",
  ],
};

const byLocale: Record<Locale, ArticleLocaleCopy> = { en, es, fr, pt, de, it };
const BODY: Record<Locale, Body> = {
  en: enBody,
  es: esBody,
  fr: frBody,
  pt: ptBody,
  de: deBody,
  it: itBody,
};

const buildBody = (locale: Locale): Record<string, unknown>[] => {
  const c = byLocale[locale];
  const t = BODY[locale];
  return [
    b.lede(c.lede),
    b.p(t.introP),
    b.h2(t.climateH),
    b.p(t.climateP1),
    b.p(t.climateP2),
    b.featureImage(t.featureCaption, t.featureCaption, t.featureCredit),
    b.stats([
      { value: STAT_VALUES[0], label: t.statLabels[0] },
      { value: STAT_VALUES[1], label: t.statLabels[1] },
      { value: STAT_VALUES[2], label: t.statLabels[2] },
    ]),
    b.takeaways(t.takeH, t.takeItems),
    b.h2(t.venuesH),
    b.p(t.venuesP),
    b.h3(t.beachH),
    b.p(t.beachP),
    b.venueCards(locale, t.vcLabel, [
      {
        venueSlug: "jellyfish-restaurant",
        tag: t.jelly.tag,
        eyebrow: t.jelly.eyebrow,
        blurb: t.jelly.blurb,
        metaRows: t.jelly.meta.map(([label, value]) => ({ label, value })),
        linkLabel: t.jelly.link,
      },
      {
        venueSlug: "kukua-beach-club",
        tag: t.kukua.tag,
        eyebrow: t.kukua.eyebrow,
        blurb: t.kukua.blurb,
        metaRows: t.kukua.meta.map(([label, value]) => ({ label, value })),
        linkLabel: t.kukua.link,
      },
    ]),
    b.gallery([{ alt: t.gal[0], caption: t.gal[0] }, { alt: t.gal[1], caption: t.gal[1] }]),
    b.pullQuote(t.pqQuote, t.pqCite),
    b.h3(t.resortsH),
    b.p(t.resortsP),
    b.split({
      alt: t.splitHeading,
      eyebrow: t.splitEyebrow,
      heading: t.splitHeading,
      paragraphs: [t.splitParas[0], t.splitParas[1]],
    }),
    b.p(t.resortsTrade),
    b.destinationCard(locale, "punta-cana", t.dcEyebrow, t.dcLink),
    b.inlineCta({
      script: t.cta.script,
      heading: t.cta.heading,
      body: t.cta.body,
      ctaLabel: t.cta.ctaLabel,
      ctaHref: "/contact",
    }),
    b.h3(t.estatesH),
    b.p(t.estatesP),
    ...b.ul(t.estItems),
    b.h2(t.costH),
    b.p(t.costP),
  ];
};

export const article: ArticleSeed = {
  canonicalSlug: "best-indian-wedding-venues-punta-cana",
  categorySlug: "indian-weddings",
  relatedDestinationSlug: "punta-cana",
  relatedCultureSlug: "indian-weddings",
  relatedVenueSlug: "jellyfish-restaurant",
  readMinutes: 12,
  publishedAt: "2026-03-01T09:00:00Z",
  featured: true,
  relatedArticles: [
    "luxury-punta-cana-wedding-cost",
    "the-sangeet-night-before",
    "beach-wedding-contingencies",
  ],
  byLocale,
  buildBody,
};
