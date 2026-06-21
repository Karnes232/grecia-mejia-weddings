/**
 * Seed the `destinationsPage` singleton across all six locales.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:destinations
 *
 * Idempotent — uses deterministic IDs and `createOrReplace`. Image fields
 * are left empty; an editor uploads through Studio after the schema lands.
 */

import { createClient } from "@sanity/client";
import { randomUUID } from "node:crypto";

import { apiVersion, dataset, projectId } from "../env";
import { locales, type Locale } from "../../i18n/routing";
import {
  DESTINATIONS_BY_REGION,
  REGION_ORDER,
  type Region,
} from "./destinationCopy/facts";

const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN env var.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const docId = (locale: Locale) => `destinationsPage-${locale}`;

const keyed = <T extends object>(value: T) => ({
  _key: randomUUID(),
  ...value,
});

// Portable Text helper: convert a plain string into a single-block PT array.
const ptBlock = (text: string) => [
  {
    _type: "block",
    _key: randomUUID(),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: randomUUID(), text, marks: [] }],
  },
];

// ── Hero ───────────────────────────────────────────────────────────────
const HERO: Record<
  Locale,
  {
    eyebrow: string;
    scriptOverline: string;
    headline: string;
    deck: string;
    captionLeft: string;
    captionCenter: string;
    captionRight: string;
  }
> = {
  en: {
    eyebrow: "Destinations · the atlas",
    scriptOverline: "An atlas of",
    headline: "*considered* destinations.",
    deck: "Twenty-three countries, six regions, one studio. The places we return to year after year — and the cadence of each.",
    captionLeft: "Photographed on the Amalfi Coast",
    captionCenter: "The atlas, Volume II",
    captionRight: "2026",
  },
  es: {
    eyebrow: "Destinos · el atlas",
    scriptOverline: "Un atlas de",
    headline: "destinos *considerados*.",
    deck: "Veintitrés países, seis regiones, un atelier. Los lugares a los que regresamos año tras año, y la cadencia de cada uno.",
    captionLeft: "Fotografiado en la Costa Amalfitana",
    captionCenter: "El atlas, Volumen II",
    captionRight: "2026",
  },
  fr: {
    eyebrow: "Destinations · l'atlas",
    scriptOverline: "Un atlas de",
    headline: "destinations *réfléchies*.",
    deck: "Vingt-trois pays, six régions, un atelier. Les lieux où nous revenons année après année — et la cadence de chacun.",
    captionLeft: "Photographié sur la côte amalfitaine",
    captionCenter: "L'atlas, Volume II",
    captionRight: "2026",
  },
  pt: {
    eyebrow: "Destinos · o atlas",
    scriptOverline: "Um atlas de",
    headline: "destinos *considerados*.",
    deck: "Vinte e três países, seis regiões, um ateliê. Os lugares aos quais voltamos ano após ano — e a cadência de cada um.",
    captionLeft: "Fotografado na Costa Amalfitana",
    captionCenter: "O atlas, Volume II",
    captionRight: "2026",
  },
  de: {
    eyebrow: "Destinationen · der Atlas",
    scriptOverline: "Ein Atlas",
    headline: "*bedachter* Destinationen.",
    deck: "Dreiundzwanzig Länder, sechs Regionen, ein Atelier. Die Orte, zu denen wir Jahr für Jahr zurückkehren — und der Rhythmus eines jeden.",
    captionLeft: "Fotografiert an der Amalfiküste",
    captionCenter: "Der Atlas, Band II",
    captionRight: "2026",
  },
  it: {
    eyebrow: "Destinazioni · l'atlante",
    scriptOverline: "Un atlante di",
    headline: "destinazioni *meditate*.",
    deck: "Ventitré paesi, sei regioni, un atelier. I luoghi a cui torniamo anno dopo anno — e la cadenza di ciascuno.",
    captionLeft: "Fotografato sulla Costiera Amalfitana",
    captionCenter: "L'atlante, Volume II",
    captionRight: "2026",
  },
};

// ── Intro ──────────────────────────────────────────────────────────────
const INTRO: Record<
  Locale,
  {
    eyebrow: string;
    headline: string;
    lede: string;
    body: string;
    stats: Array<{ value: string; label: string }>;
  }
> = {
  en: {
    eyebrow: "Where we work",
    headline: "A small atelier with\na *long-reach* calendar.",
    lede: "We travel for fourteen weddings a year, in residence between Cap Cana and the Mediterranean. Each destination on this page is one we have planned, in person, more than once.",
    body: "The atlas is grouped by region. Within each, you'll find a working register of the towns, coastlines and islands we know well — when to go, what the wedding looks like there, and which traditions sit best in each climate.",
    stats: [
      { value: "23", label: "Countries" },
      { value: "6", label: "Regions" },
      { value: "240+", label: "Weddings" },
      { value: "15", label: "Years on the road" },
    ],
  },
  es: {
    eyebrow: "Dónde trabajamos",
    headline: "Un atelier pequeño con\nun calendario de *amplio alcance*.",
    lede: "Viajamos para catorce bodas al año, en residencia entre Cap Cana y el Mediterráneo. Cada destino en esta página es uno que hemos planeado, en persona, más de una vez.",
    body: "El atlas está agrupado por región. Dentro de cada una encontrarás un registro vivo de los pueblos, costas e islas que conocemos bien — cuándo ir, cómo es la boda allí y qué tradiciones encajan mejor en cada clima.",
    stats: [
      { value: "23", label: "Países" },
      { value: "6", label: "Regiones" },
      { value: "240+", label: "Bodas" },
      { value: "15", label: "Años en camino" },
    ],
  },
  fr: {
    eyebrow: "Où nous travaillons",
    headline: "Un petit atelier avec\nun calendrier de *longue portée*.",
    lede: "Nous voyageons pour quatorze mariages par an, en résidence entre Cap Cana et la Méditerranée. Chaque destination de cette page est une que nous avons planifiée, en personne, plus d'une fois.",
    body: "L'atlas est regroupé par région. Dans chacune, vous trouverez un registre vivant des villes, des côtes et des îles que nous connaissons bien — quand y aller, à quoi ressemble le mariage là-bas, et quelles traditions s'y prêtent le mieux.",
    stats: [
      { value: "23", label: "Pays" },
      { value: "6", label: "Régions" },
      { value: "240+", label: "Mariages" },
      { value: "15", label: "Années sur la route" },
    ],
  },
  pt: {
    eyebrow: "Onde trabalhamos",
    headline: "Um pequeno ateliê com\num calendário de *longo alcance*.",
    lede: "Viajamos para catorze casamentos por ano, em residência entre Cap Cana e o Mediterrâneo. Cada destino nesta página é um que planejamos, pessoalmente, mais de uma vez.",
    body: "O atlas está agrupado por região. Em cada uma, você encontrará um registro vivo das cidades, costas e ilhas que conhecemos bem — quando ir, como é o casamento ali, e quais tradições assentam melhor em cada clima.",
    stats: [
      { value: "23", label: "Países" },
      { value: "6", label: "Regiões" },
      { value: "240+", label: "Casamentos" },
      { value: "15", label: "Anos na estrada" },
    ],
  },
  de: {
    eyebrow: "Wo wir arbeiten",
    headline: "Ein kleines Atelier mit\neinem *weitreichenden* Kalender.",
    lede: "Wir reisen jährlich für vierzehn Hochzeiten, in Residenz zwischen Cap Cana und dem Mittelmeer. Jede Destination auf dieser Seite ist eine, die wir persönlich mehr als einmal geplant haben.",
    body: "Der Atlas ist nach Regionen gegliedert. Innerhalb jeder finden Sie ein lebendiges Verzeichnis der Orte, Küsten und Inseln, die wir gut kennen — wann hingehen, wie die Hochzeit dort aussieht und welche Traditionen am besten in jedem Klima sitzen.",
    stats: [
      { value: "23", label: "Länder" },
      { value: "6", label: "Regionen" },
      { value: "240+", label: "Hochzeiten" },
      { value: "15", label: "Jahre unterwegs" },
    ],
  },
  it: {
    eyebrow: "Dove lavoriamo",
    headline: "Un piccolo atelier con\nun calendario di *ampio raggio*.",
    lede: "Viaggiamo per quattordici matrimoni l'anno, in residenza tra Cap Cana e il Mediterraneo. Ogni destinazione su questa pagina è una che abbiamo pianificato, di persona, più di una volta.",
    body: "L'atlante è raggruppato per regione. In ciascuna troverai un registro vivo delle città, delle coste e delle isole che conosciamo bene — quando andare, com'è il matrimonio lì, e quali tradizioni si adattano meglio a ciascun clima.",
    stats: [
      { value: "23", label: "Paesi" },
      { value: "6", label: "Regioni" },
      { value: "240+", label: "Matrimoni" },
      { value: "15", label: "Anni in viaggio" },
    ],
  },
};

// ── Regions copy ───────────────────────────────────────────────────────
type RegionCopy = {
  eyebrow: string;
  name: string;
  intro: string;
};

const REGIONS_COPY: Record<
  Locale,
  Record<
    "caribbean" | "mediterranean" | "western-europe" | "americas",
    RegionCopy
  >
> = {
  en: {
    caribbean: {
      eyebrow: "Region One",
      name: "The *Caribbean*",
      intro:
        "The home atelier. Year-round weddings on white-sand coastlines, with a calendar that peaks November through April.",
    },
    mediterranean: {
      eyebrow: "Region Two",
      name: "The *Mediterranean*",
      intro:
        "Cliffside palazzi, lemon groves, late-summer light. We work the Med from May through early October.",
    },
    "western-europe": {
      eyebrow: "Region Three",
      name: "Western *Europe*",
      intro:
        "Châteaux, country estates, and the formal grace of French & English wedding tradition. May through September.",
    },
    americas: {
      eyebrow: "Region Four",
      name: "The *Americas*",
      intro:
        "From Aspen winters to Tulum springs — the high desert, the long coastline, and the slow gardens of Mexico and Argentina.",
    },
  },
  es: {
    caribbean: {
      eyebrow: "Región Uno",
      name: "El *Caribe*",
      intro:
        "El atelier de casa. Bodas todo el año en costas de arena blanca, con un calendario que culmina de noviembre a abril.",
    },
    mediterranean: {
      eyebrow: "Región Dos",
      name: "El *Mediterráneo*",
      intro:
        "Palacios sobre acantilados, limonares, luz de fin de verano. Trabajamos el Mediterráneo de mayo a principios de octubre.",
    },
    "western-europe": {
      eyebrow: "Región Tres",
      name: "Europa *Occidental*",
      intro:
        "Châteaux, fincas de campo y la gracia formal de la tradición nupcial francesa e inglesa. De mayo a septiembre.",
    },
    americas: {
      eyebrow: "Región Cuatro",
      name: "Las *Américas*",
      intro:
        "De los inviernos de Aspen a las primaveras de Tulum — el alto desierto, la larga costa y los jardines pausados de México y Argentina.",
    },
  },
  fr: {
    caribbean: {
      eyebrow: "Région Un",
      name: "Les *Caraïbes*",
      intro:
        "L'atelier d'origine. Mariages toute l'année sur des côtes de sable blanc, avec un calendrier qui culmine de novembre à avril.",
    },
    mediterranean: {
      eyebrow: "Région Deux",
      name: "La *Méditerranée*",
      intro:
        "Palazzi à flanc de falaise, citronniers, lumière de fin d'été. Nous travaillons la Méditerranée de mai à début octobre.",
    },
    "western-europe": {
      eyebrow: "Région Trois",
      name: "Europe *Occidentale*",
      intro:
        "Châteaux, domaines de campagne, et la grâce formelle de la tradition nuptiale française et anglaise. De mai à septembre.",
    },
    americas: {
      eyebrow: "Région Quatre",
      name: "Les *Amériques*",
      intro:
        "Des hivers d'Aspen aux printemps de Tulum — le haut désert, la longue côte, et les jardins lents du Mexique et de l'Argentine.",
    },
  },
  pt: {
    caribbean: {
      eyebrow: "Região Um",
      name: "O *Caribe*",
      intro:
        "O ateliê de casa. Casamentos o ano inteiro em costas de areia branca, com um calendário que culmina de novembro a abril.",
    },
    mediterranean: {
      eyebrow: "Região Dois",
      name: "O *Mediterrâneo*",
      intro:
        "Palazzi à beira de falésia, limoeiros, luz de fim de verão. Trabalhamos o Mediterrâneo de maio a início de outubro.",
    },
    "western-europe": {
      eyebrow: "Região Três",
      name: "Europa *Ocidental*",
      intro:
        "Châteaux, propriedades rurais, e a graça formal da tradição nupcial francesa e inglesa. De maio a setembro.",
    },
    americas: {
      eyebrow: "Região Quatro",
      name: "As *Américas*",
      intro:
        "Dos invernos de Aspen às primaveras de Tulum — o alto deserto, a longa costa, e os jardins lentos do México e da Argentina.",
    },
  },
  de: {
    caribbean: {
      eyebrow: "Region Eins",
      name: "Die *Karibik*",
      intro:
        "Das Heim-Atelier. Ganzjährige Hochzeiten an weißen Sandküsten, mit einem Kalender, der von November bis April seinen Höhepunkt erreicht.",
    },
    mediterranean: {
      eyebrow: "Region Zwei",
      name: "Das *Mittelmeer*",
      intro:
        "Palazzi am Klippenrand, Zitronenhaine, Spätsommerlicht. Wir arbeiten am Mittelmeer von Mai bis Anfang Oktober.",
    },
    "western-europe": {
      eyebrow: "Region Drei",
      name: "*West*europa",
      intro:
        "Schlösser, Landsitze und die formale Anmut der französischen und englischen Hochzeitstradition. Von Mai bis September.",
    },
    americas: {
      eyebrow: "Region Vier",
      name: "Die *Amerikas*",
      intro:
        "Von Aspener Wintern bis zu Tulumer Frühlingen — die Hochwüste, die lange Küste und die langsamen Gärten Mexikos und Argentiniens.",
    },
  },
  it: {
    caribbean: {
      eyebrow: "Regione Uno",
      name: "I *Caraibi*",
      intro:
        "L'atelier di casa. Matrimoni tutto l'anno su coste di sabbia bianca, con un calendario che culmina da novembre ad aprile.",
    },
    mediterranean: {
      eyebrow: "Regione Due",
      name: "Il *Mediterraneo*",
      intro:
        "Palazzi a strapiombo, limoneti, luce di fine estate. Lavoriamo il Mediterraneo da maggio a inizio ottobre.",
    },
    "western-europe": {
      eyebrow: "Regione Tre",
      name: "Europa *Occidentale*",
      intro:
        "Châteaux, tenute di campagna e la grazia formale della tradizione nuziale francese e inglese. Da maggio a settembre.",
    },
    americas: {
      eyebrow: "Regione Quattro",
      name: "Le *Americhe*",
      intro:
        "Dagli inverni di Aspen alle primavere di Tulum — l'altipiano desertico, la lunga costa e i giardini lenti del Messico e dell'Argentina.",
    },
  },
};

// Destinations data lives in `./destinationCopy/facts.ts` and is imported above.

// ── Seasonal calendar ──────────────────────────────────────────────────
const CALENDAR_ROWS: Array<{ slug: string; months: string[] }> = [
  {
    slug: "caribbean",
    months: [
      "peak",
      "peak",
      "peak",
      "peak",
      "good",
      "off",
      "off",
      "off",
      "good",
      "good",
      "peak",
      "peak",
    ],
  },
  {
    slug: "mediterranean",
    months: [
      "off",
      "off",
      "off",
      "good",
      "peak",
      "peak",
      "peak",
      "peak",
      "peak",
      "good",
      "off",
      "off",
    ],
  },
  {
    slug: "western-europe",
    months: [
      "off",
      "off",
      "off",
      "good",
      "peak",
      "peak",
      "peak",
      "good",
      "good",
      "off",
      "off",
      "off",
    ],
  },
  {
    slug: "americas",
    months: [
      "good",
      "good",
      "peak",
      "peak",
      "good",
      "good",
      "good",
      "good",
      "peak",
      "peak",
      "good",
      "good",
    ],
  },
  {
    slug: "asia-pacific",
    months: [
      "peak",
      "peak",
      "peak",
      "good",
      "off",
      "off",
      "off",
      "off",
      "off",
      "good",
      "peak",
      "peak",
    ],
  },
];

const CALENDAR_COPY: Record<
  Locale,
  {
    headline: string;
    intro: string;
    legend: { peak: string; good: string; off: string };
    rowLabels: Record<string, { region: string; note: string }>;
  }
> = {
  en: {
    headline: "When to wed *where.*",
    intro:
      "A working calendar of when each region is at its best — and which months we recommend you avoid.",
    legend: {
      peak: "Peak season",
      good: "Shoulder · good",
      off: "Off-season · we don't recommend",
    },
    rowLabels: {
      caribbean: { region: "Caribbean", note: "Year-round" },
      mediterranean: {
        region: "Mediterranean",
        note: "Late spring to early autumn",
      },
      "western-europe": {
        region: "Western Europe",
        note: "Late spring to summer",
      },
      americas: { region: "The Americas", note: "Variable by sub-region" },
      "asia-pacific": { region: "Asia & Pacific", note: "Dry seasons only" },
    },
  },
  es: {
    headline: "Cuándo casarse *dónde.*",
    intro:
      "Un calendario vivo de cuándo cada región está en su mejor momento — y qué meses recomendamos evitar.",
    legend: {
      peak: "Temporada alta",
      good: "Hombro · bueno",
      off: "Temporada baja · no recomendamos",
    },
    rowLabels: {
      caribbean: { region: "Caribe", note: "Todo el año" },
      mediterranean: {
        region: "Mediterráneo",
        note: "De primavera tardía a otoño temprano",
      },
      "western-europe": {
        region: "Europa Occidental",
        note: "De primavera tardía a verano",
      },
      americas: { region: "Las Américas", note: "Variable por subregión" },
      "asia-pacific": {
        region: "Asia y Pacífico",
        note: "Solo estaciones secas",
      },
    },
  },
  fr: {
    headline: "Quand se marier, *où.*",
    intro:
      "Un calendrier vivant pour savoir quand chaque région est à son meilleur — et les mois que nous recommandons d'éviter.",
    legend: {
      peak: "Haute saison",
      good: "Épaule · bon",
      off: "Hors saison · nous ne recommandons pas",
    },
    rowLabels: {
      caribbean: { region: "Caraïbes", note: "Toute l'année" },
      mediterranean: {
        region: "Méditerranée",
        note: "De fin de printemps à début d'automne",
      },
      "western-europe": {
        region: "Europe occidentale",
        note: "De fin de printemps à été",
      },
      americas: { region: "Les Amériques", note: "Variable par sous-région" },
      "asia-pacific": {
        region: "Asie & Pacifique",
        note: "Saisons sèches uniquement",
      },
    },
  },
  pt: {
    headline: "Quando se casar, *onde.*",
    intro:
      "Um calendário vivo de quando cada região está no seu melhor — e quais meses recomendamos evitar.",
    legend: {
      peak: "Alta temporada",
      good: "Meia-temporada · boa",
      off: "Baixa temporada · não recomendamos",
    },
    rowLabels: {
      caribbean: { region: "Caribe", note: "Ano inteiro" },
      mediterranean: {
        region: "Mediterrâneo",
        note: "Do fim da primavera ao início do outono",
      },
      "western-europe": {
        region: "Europa Ocidental",
        note: "Do fim da primavera ao verão",
      },
      americas: { region: "As Américas", note: "Variável por sub-região" },
      "asia-pacific": {
        region: "Ásia e Pacífico",
        note: "Apenas estações secas",
      },
    },
  },
  de: {
    headline: "Wann heiraten, *wo.*",
    intro:
      "Ein lebendiger Kalender, wann jede Region am besten ist — und welche Monate wir abraten.",
    legend: {
      peak: "Hochsaison",
      good: "Schulter · gut",
      off: "Nebensaison · nicht empfohlen",
    },
    rowLabels: {
      caribbean: { region: "Karibik", note: "Ganzjährig" },
      mediterranean: {
        region: "Mittelmeer",
        note: "Spätfrühling bis Frühherbst",
      },
      "western-europe": {
        region: "Westeuropa",
        note: "Spätfrühling bis Sommer",
      },
      americas: { region: "Die Amerikas", note: "Variabel je Teilregion" },
      "asia-pacific": { region: "Asien & Pazifik", note: "Nur Trockenzeiten" },
    },
  },
  it: {
    headline: "Quando sposarsi, *dove.*",
    intro:
      "Un calendario vivo di quando ogni regione è al suo meglio — e quali mesi raccomandiamo di evitare.",
    legend: {
      peak: "Alta stagione",
      good: "Mezza stagione · buona",
      off: "Bassa stagione · non raccomandiamo",
    },
    rowLabels: {
      caribbean: { region: "Caraibi", note: "Tutto l'anno" },
      mediterranean: {
        region: "Mediterraneo",
        note: "Da tarda primavera a inizio autunno",
      },
      "western-europe": {
        region: "Europa occidentale",
        note: "Da tarda primavera a estate",
      },
      americas: { region: "Le Americhe", note: "Variabile per sotto-regione" },
      "asia-pacific": {
        region: "Asia e Pacifico",
        note: "Solo stagioni secche",
      },
    },
  },
};

// ── Spotlight ──────────────────────────────────────────────────────────
const SPOTLIGHT: Record<
  Locale,
  {
    eyebrow: string;
    scriptAccent: string;
    headline: string;
    deck: string;
    body: string;
    facts: Array<{ label: string; value: string }>;
    imageCaptionPlace: string;
    imageCaptionDate: string;
    ctaLabel: string;
  }
> = {
  en: {
    eyebrow: "Spotlight · The home atelier",
    scriptAccent: "Curating",
    headline: "the *Punta Cana* wedding.",
    deck: "The studio's home base for fifteen years — and where, statistically, half of our weddings are held.",
    body: "Punta Cana gave us our first wedding, our first multicultural celebration, and our most-repeated venues. The brief on a Punta Cana wedding hasn't changed in a decade: powder coastlines, year-round flying weather, generous capacity, and the cultural fluency to host any tradition on the sand.",
    facts: [
      { label: "Best months", value: "November – April" },
      { label: "Guests", value: "40 – 600" },
      { label: "Languages", value: "English · Spanish" },
      { label: "Flight time", value: "3–9 hrs from major hubs" },
    ],
    imageCaptionPlace: "Cap Cana, Dominican Republic",
    imageCaptionDate: "Photographed January 2026",
    ctaLabel: "Explore Punta Cana →",
  },
  es: {
    eyebrow: "En foco · El atelier de casa",
    scriptAccent: "Curando",
    headline: "la boda en *Punta Cana*.",
    deck: "La base del estudio desde hace quince años — y donde, estadísticamente, se celebra la mitad de nuestras bodas.",
    body: "Punta Cana nos dio nuestra primera boda, nuestra primera celebración multicultural y nuestros venues más repetidos. El brief de una boda en Punta Cana no ha cambiado en una década: costas de polvo, clima de vuelo todo el año, capacidad generosa y la fluidez cultural para acoger cualquier tradición sobre la arena.",
    facts: [
      { label: "Mejores meses", value: "Noviembre – Abril" },
      { label: "Invitados", value: "40 – 600" },
      { label: "Idiomas", value: "Inglés · Español" },
      { label: "Tiempo de vuelo", value: "3–9 h desde grandes hubs" },
    ],
    imageCaptionPlace: "Cap Cana, República Dominicana",
    imageCaptionDate: "Fotografiado en enero 2026",
    ctaLabel: "Explorar Punta Cana →",
  },
  fr: {
    eyebrow: "En lumière · L'atelier d'origine",
    scriptAccent: "Composer",
    headline: "le mariage à *Punta Cana*.",
    deck: "La base du studio depuis quinze ans — et où, statistiquement, la moitié de nos mariages se déroulent.",
    body: "Punta Cana nous a donné notre premier mariage, notre première célébration multiculturelle et nos lieux les plus repris. Le brief d'un mariage à Punta Cana n'a pas changé depuis dix ans : côtes poudrées, météo de vol toute l'année, capacité généreuse et la maîtrise culturelle pour accueillir toute tradition sur le sable.",
    facts: [
      { label: "Meilleurs mois", value: "Novembre – Avril" },
      { label: "Invités", value: "40 – 600" },
      { label: "Langues", value: "Anglais · Espagnol" },
      { label: "Vol", value: "3–9 h depuis les grands hubs" },
    ],
    imageCaptionPlace: "Cap Cana, République dominicaine",
    imageCaptionDate: "Photographié en janvier 2026",
    ctaLabel: "Explorer Punta Cana →",
  },
  pt: {
    eyebrow: "Em foco · O ateliê de casa",
    scriptAccent: "Curando",
    headline: "o casamento em *Punta Cana*.",
    deck: "A base do estúdio há quinze anos — e onde, estatisticamente, metade dos nossos casamentos acontecem.",
    body: "Punta Cana nos deu o nosso primeiro casamento, a nossa primeira celebração multicultural e os nossos venues mais repetidos. O briefing de um casamento em Punta Cana não mudou em uma década: costas de pó, clima de voo o ano inteiro, capacidade generosa e a fluência cultural para acolher qualquer tradição na areia.",
    facts: [
      { label: "Melhores meses", value: "Novembro – Abril" },
      { label: "Convidados", value: "40 – 600" },
      { label: "Idiomas", value: "Inglês · Espanhol" },
      { label: "Voo", value: "3–9 h dos principais hubs" },
    ],
    imageCaptionPlace: "Cap Cana, República Dominicana",
    imageCaptionDate: "Fotografado em janeiro de 2026",
    ctaLabel: "Explorar Punta Cana →",
  },
  de: {
    eyebrow: "Im Fokus · Das Heim-Atelier",
    scriptAccent: "Kuratieren",
    headline: "der *Punta Cana* Hochzeit.",
    deck: "Die Heimatbasis des Studios seit fünfzehn Jahren — und wo statistisch die Hälfte unserer Hochzeiten stattfindet.",
    body: "Punta Cana gab uns unsere erste Hochzeit, unsere erste multikulturelle Feier und unsere meistgenutzten Venues. Das Briefing einer Punta-Cana-Hochzeit hat sich seit einem Jahrzehnt nicht geändert: puderweiche Küsten, ganzjähriges Flugwetter, großzügige Kapazität und die kulturelle Sicherheit, jede Tradition auf dem Sand zu beheimaten.",
    facts: [
      { label: "Beste Monate", value: "November – April" },
      { label: "Gäste", value: "40 – 600" },
      { label: "Sprachen", value: "Englisch · Spanisch" },
      { label: "Flugzeit", value: "3–9 Std. von Hauptdrehkreuzen" },
    ],
    imageCaptionPlace: "Cap Cana, Dominikanische Republik",
    imageCaptionDate: "Fotografiert im Januar 2026",
    ctaLabel: "Punta Cana erkunden →",
  },
  it: {
    eyebrow: "In primo piano · L'atelier di casa",
    scriptAccent: "Curando",
    headline: "il matrimonio a *Punta Cana*.",
    deck: "La base dello studio da quindici anni — e dove, statisticamente, si tiene la metà dei nostri matrimoni.",
    body: "Punta Cana ci ha dato il nostro primo matrimonio, la nostra prima celebrazione multiculturale e i nostri venue più ripetuti. Il brief di un matrimonio a Punta Cana non è cambiato in un decennio: coste di cipria, clima di volo tutto l'anno, capacità generosa e la padronanza culturale per ospitare qualsiasi tradizione sulla sabbia.",
    facts: [
      { label: "Mesi migliori", value: "Novembre – Aprile" },
      { label: "Ospiti", value: "40 – 600" },
      { label: "Lingue", value: "Inglese · Spagnolo" },
      { label: "Volo", value: "3–9 h dai principali hub" },
    ],
    imageCaptionPlace: "Cap Cana, Repubblica Dominicana",
    imageCaptionDate: "Fotografato a gennaio 2026",
    ctaLabel: "Esplora Punta Cana →",
  },
};

// ── Journey CTA (mirrors home page tone) ───────────────────────────────
const JOURNEY: Record<
  Locale,
  { eyebrow: string; headline: string; body: string; cta: string }
> = {
  en: {
    eyebrow: "A private conversation —",
    headline: "*Begin* your wedding journey.",
    body: "Tell us where you'd like to wed. Grecia writes back, personally, within five working days.",
    cta: "Request a private consultation",
  },
  es: {
    eyebrow: "Una conversación privada —",
    headline: "*Comienza* el camino de tu boda.",
    body: "Dinos dónde quieres casarte. Grecia responde, en persona, en cinco días laborables.",
    cta: "Solicitar una consulta privada",
  },
  fr: {
    eyebrow: "Une conversation privée —",
    headline: "*Commencez* votre chemin de mariage.",
    body: "Dites-nous où vous aimeriez vous marier. Grecia vous répond, personnellement, sous cinq jours ouvrés.",
    cta: "Demander une consultation privée",
  },
  pt: {
    eyebrow: "Uma conversa privada —",
    headline: "*Comece* a sua jornada de casamento.",
    body: "Diga-nos onde gostaria de se casar. Grecia responde, pessoalmente, em cinco dias úteis.",
    cta: "Solicitar uma consulta privada",
  },
  de: {
    eyebrow: "Ein privates Gespräch —",
    headline: "*Beginnen* Sie Ihre Hochzeitsreise.",
    body: "Sagen Sie uns, wo Sie heiraten möchten. Grecia antwortet persönlich innerhalb von fünf Werktagen.",
    cta: "Privates Gespräch anfragen",
  },
  it: {
    eyebrow: "Una conversazione privata —",
    headline: "*Inizia* il tuo viaggio nuziale.",
    body: "Dicci dove vorresti sposarti. Grecia risponde, personalmente, entro cinque giorni lavorativi.",
    cta: "Richiedi una consulenza privata",
  },
};

// ── Build doc ──────────────────────────────────────────────────────────
function buildDoc(locale: Locale) {
  const hero = HERO[locale];
  const intro = INTRO[locale];
  const regionsCopy = REGIONS_COPY[locale];
  const calendar = CALENDAR_COPY[locale];
  const spotlight = SPOTLIGHT[locale];
  const journey = JOURNEY[locale];

  return {
    hero,
    intro: {
      eyebrow: intro.eyebrow,
      headline: intro.headline,
      lede: intro.lede,
      body: ptBlock(intro.body),
      stats: intro.stats.map((s) => keyed(s)),
    },
    regions: REGION_ORDER.map((slug) =>
      keyed({
        slug,
        eyebrow: regionsCopy[slug].eyebrow,
        name: regionsCopy[slug].name,
        intro: regionsCopy[slug].intro,
        destinations: DESTINATIONS_BY_REGION[slug as Region].map((d) =>
          keyed({
            number: d.number,
            destination: {
              _type: "reference",
              _ref: `destination-${d.slug}-${locale}`,
              _weak: true,
            },
          }),
        ),
      }),
    ),
    calendar: {
      headline: calendar.headline,
      intro: calendar.intro,
      legend: calendar.legend,
      rows: CALENDAR_ROWS.map((row) =>
        keyed({
          region: calendar.rowLabels[row.slug].region,
          note: calendar.rowLabels[row.slug].note,
          months: row.months,
        }),
      ),
    },
    spotlight: {
      eyebrow: spotlight.eyebrow,
      destination: {
        _type: "reference",
        _ref: `destination-punta-cana-${locale}`,
        _weak: true,
      },
    },
    journeyCta: {
      eyebrow: journey.eyebrow,
      headline: journey.headline,
      body: journey.body,
      cta: { label: journey.cta, href: "/contact" },
    },
  };
}

async function run() {
  console.log(`Seeding destinationsPage in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  for (const locale of locales) {
    tx.createOrReplace({
      _id: docId(locale),
      _type: "destinationsPage",
      language: locale,
      ...buildDoc(locale),
    });
  }

  tx.createOrReplace({
    _id: "destinationsPage-metadata",
    _type: "translation.metadata",
    schemaTypes: ["destinationsPage"],
    translations: locales.map((locale) => ({
      _key: locale,
      language: locale,
      value: { _type: "reference", _ref: docId(locale), _weak: true },
    })),
  });

  // Shared media doc — placeholder for the hero image.
  // Atlas tile + spotlight images now come from each destination's
  // destinationMedia doc.
  tx.createIfNotExists({
    _id: "destinationsPageMedia",
    _type: "destinationsPageMedia",
  });

  await tx.commit();
  console.log(
    `✓ Seeded ${locales.length} destinationsPage docs + media stub + translation metadata.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
