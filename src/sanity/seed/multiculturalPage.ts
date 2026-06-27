/**
 * Seed the `multiculturalPage` hub singleton across all six locales (+ the
 * shared `multiculturalPageMedia` stub), plus the `translation.metadata` record.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:multicultural
 * Run AFTER `npm run seed:cultures` — the atlas references the culture docs.
 *
 * Idempotent — deterministic IDs + `createOrReplace` for the localized text
 * docs; `createIfNotExists` for the media stub. Content mirrors the design
 * handoff (`pages/multicultural-hub.jsx`). Proper nouns (specialist names,
 * hrefs, image slots) are locale-invariant; everything editorial is translated.
 */

import { createClient } from "@sanity/client";
import { randomUUID } from "node:crypto";

import { apiVersion, dataset, projectId } from "../env";
import { locales, type Locale } from "../../i18n/routing";

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

const docId = (locale: Locale) => `multiculturalPage-${locale}`;
const cultureId = (slug: string, locale: Locale) => `culture-${slug}-${locale}`;

const keyed = <T extends object>(value: T) => ({
  _key: randomUUID(),
  ...value,
});

type Block = { style: string; text: string };
const ptBlocks = (blocks: Block[]) =>
  blocks.map(({ style, text }) => ({
    _type: "block",
    _key: randomUUID(),
    style,
    markDefs: [],
    children: [{ _type: "span", _key: randomUUID(), text, marks: [] }],
  }));

// ── Locale-invariant constants ─────────────────────────────────────────────
// Atlas order — references the `culture` docs seeded by `seed:cultures`.
const CULTURE_ORDER = [
  "indian-weddings",
  "jewish-weddings",
  "arab-weddings",
  "south-asian-weddings",
  "christian-weddings",
  "interfaith-weddings",
  "latin-weddings",
  "european-weddings",
] as const;

const SPECIALIST_NAMES = [
  "Pandit R. Sharma",
  "Rabbi D. Goldstein",
  "Father M. Vázquez",
  "Imam A. Khoury",
  "Bhai G. Singh",
  "Atelier Levin",
  "Studio Aanya",
  "Henna by Reema",
] as const;

// Per related article: image slot + internal link. Order matches RELATED copy.
const RELATED_META = [
  {
    imageKey: "mc-related-1",
    href: "/journal",
    alt: "An Indian wedding mandap",
  },
  { imageKey: "mc-related-2", href: "/journal", alt: "An interfaith ceremony" },
  {
    imageKey: "mc-related-3",
    href: "/journal",
    alt: "A Jewish wedding chuppah",
  },
  { imageKey: "mc-related-4", href: "/journal", alt: "A sangeet celebration" },
  { imageKey: "mc-related-5", href: "/journal", alt: "A Latin wedding dance" },
] as const;

// Related sidebars reference real docs (same locale). Label + link come from
// each referenced doc; ids are `<type>-<slug>-<locale>`.
const SIDEBAR_DESTINATION_SLUGS = [
  "punta-cana",
  "lake-como",
  "provence",
  "amalfi",
] as const;
const SIDEBAR_SERVICE_SLUGS = [
  "multicultural-wedding-planning",
  "wedding-weekend-planning",
  "guest-experience",
  "wedding-design",
] as const;
const SIDEBAR_WEDDING_SLUGS = [
  "luxury-indian-wedding-punta-cana",
  "jewish-wedding-tuscany",
  "chateau-wedding-provence",
] as const;

// `related.articles` references real journal articles (same locale). Card
// content + image come from each article doc (ids `article-<slug>-<locale>`).
const RELATED_ARTICLE_SLUGS = [
  "best-indian-wedding-venues-punta-cana",
  "kosher-jewish-wedding-caribbean",
  "the-sangeet-night-before",
  "luxury-punta-cana-wedding-cost",
  "when-to-wed-amalfi-coast",
] as const;

const CTA_HREF = "/contact";

// ── Hero ───────────────────────────────────────────────────────────────────
type HeroCopy = {
  eyebrow: string;
  scriptOverline: string;
  headline: string;
  deck: string;
  captionLeft: string;
  captionCenter: string;
  captionRight: string;
};

const HERO: Record<Locale, HeroCopy> = {
  en: {
    eyebrow: "The traditions we hold",
    scriptOverline: "Curated with",
    headline: "cultural *fluency.*",
    deck: "Eight cultural traditions, fifteen years of practice, and a working register of the specialists who hold each one. Each tradition kept by people who have lived inside it.",
    captionLeft: "Mandap · Cap Cana",
    captionCenter: "Saira & Adam, 2025",
    captionRight: "Plate I",
  },
  es: {
    eyebrow: "Las tradiciones que sostenemos",
    scriptOverline: "Curado con",
    headline: "fluidez *cultural.*",
    deck: "Ocho tradiciones culturales, quince años de práctica y un registro activo de los especialistas que sostienen cada una. Cada tradición guardada por personas que han vivido dentro de ella.",
    captionLeft: "Mandap · Cap Cana",
    captionCenter: "Saira y Adam, 2025",
    captionRight: "Lámina I",
  },
  fr: {
    eyebrow: "Les traditions que nous portons",
    scriptOverline: "Composé avec",
    headline: "une aisance *culturelle.*",
    deck: "Huit traditions culturelles, quinze ans de pratique et un registre actif des spécialistes qui portent chacune d'elles. Chaque tradition gardée par des personnes qui ont vécu en son sein.",
    captionLeft: "Mandap · Cap Cana",
    captionCenter: "Saira & Adam, 2025",
    captionRight: "Planche I",
  },
  pt: {
    eyebrow: "As tradições que sustentamos",
    scriptOverline: "Curado com",
    headline: "fluência *cultural.*",
    deck: "Oito tradições culturais, quinze anos de prática e um registo ativo dos especialistas que sustentam cada uma. Cada tradição guardada por pessoas que viveram dentro dela.",
    captionLeft: "Mandap · Cap Cana",
    captionCenter: "Saira & Adam, 2025",
    captionRight: "Estampa I",
  },
  de: {
    eyebrow: "Die Traditionen, die wir tragen",
    scriptOverline: "Kuratiert mit",
    headline: "kultureller *Souveränität.*",
    deck: "Acht kulturelle Traditionen, fünfzehn Jahre Praxis und ein lebendiges Verzeichnis der Spezialisten, die jede einzelne tragen. Jede Tradition bewahrt von Menschen, die in ihr gelebt haben.",
    captionLeft: "Mandap · Cap Cana",
    captionCenter: "Saira & Adam, 2025",
    captionRight: "Tafel I",
  },
  it: {
    eyebrow: "Le tradizioni che custodiamo",
    scriptOverline: "Curato con",
    headline: "fluidità *culturale.*",
    deck: "Otto tradizioni culturali, quindici anni di pratica e un registro attivo degli specialisti che reggono ciascuna. Ogni tradizione custodita da persone che vi hanno vissuto dentro.",
    captionLeft: "Mandap · Cap Cana",
    captionCenter: "Saira & Adam, 2025",
    captionRight: "Tavola I",
  },
};

// ── Intro / philosophy ───────────────────────────────────────────────────
type PhilosophyCopy = {
  sideLabel: string;
  sideNote: string;
  headline: string;
  lede: string;
  body: string[];
  pull: string;
};

const PHILOSOPHY: Record<Locale, PhilosophyCopy> = {
  en: {
    sideLabel: "A philosophy",
    sideNote:
      "We accept fourteen weddings a year. Roughly nine of those are multicultural. Almost every one is multi-day.",
    headline: "Tradition, held by *people* who have lived inside it.",
    lede: "A multicultural wedding is not a venue with two backdrops. It is a structural commitment — to ritual order, to officiants, to dietary protocol, to the choreography of two or three families holding one room.",
    body: [
      "We do not stage cultural weddings; we host them. Every tradition we list on this page is held by specialists we have worked with, by name, for years — the Hindu pandit who has officiated forty of our weddings, the kosher caterer who travels with us to Punta Cana and Lake Como, the Catholic priest who knows our families.",
      "We refuse to plan a tradition we cannot hold honestly. If a couple writes to us with a religion or cultural arc we have not held before, we say so — and either find the specialist together, or refer the wedding to a planner who has.",
    ],
    pull: "We refuse to plan a tradition we cannot hold honestly.",
  },
  es: {
    sideLabel: "Una filosofía",
    sideNote:
      "Aceptamos catorce bodas al año. Cerca de nueve son multiculturales. Casi todas son de varios días.",
    headline:
      "La tradición, sostenida por *personas* que han vivido dentro de ella.",
    lede: "Una boda multicultural no es un lugar con dos telones. Es un compromiso estructural: con el orden ritual, con los oficiantes, con el protocolo alimentario, con la coreografía de dos o tres familias sosteniendo una misma sala.",
    body: [
      "No montamos bodas culturales; las celebramos. Cada tradición que figura en esta página la sostienen especialistas con quienes hemos trabajado, por su nombre, durante años: el pandit hindú que ha oficiado cuarenta de nuestras bodas, el catering kosher que viaja con nosotros a Punta Cana y al Lago de Como, el sacerdote católico que conoce a nuestras familias.",
      "Nos negamos a planificar una tradición que no podamos sostener con honestidad. Si una pareja nos escribe con una religión o un arco cultural que no hemos sostenido antes, lo decimos, y o bien encontramos juntos al especialista, o derivamos la boda a un planificador que sí lo conozca.",
    ],
    pull: "Nos negamos a planificar una tradición que no podamos sostener con honestidad.",
  },
  fr: {
    sideLabel: "Une philosophie",
    sideNote:
      "Nous acceptons quatorze mariages par an. Environ neuf sont multiculturels. Presque tous s'étendent sur plusieurs jours.",
    headline:
      "La tradition, portée par des *personnes* qui ont vécu en son sein.",
    lede: "Un mariage multiculturel n'est pas un lieu à deux décors. C'est un engagement structurel — envers l'ordre rituel, les officiants, le protocole alimentaire, la chorégraphie de deux ou trois familles tenant une même salle.",
    body: [
      "Nous ne mettons pas en scène les mariages culturels ; nous les accueillons. Chaque tradition figurant sur cette page est portée par des spécialistes avec qui nous travaillons, nommément, depuis des années — le pandit hindou qui a officié quarante de nos mariages, le traiteur casher qui voyage avec nous jusqu'à Punta Cana et au lac de Côme, le prêtre catholique qui connaît nos familles.",
      "Nous refusons d'organiser une tradition que nous ne pouvons porter honnêtement. Si un couple nous écrit au sujet d'une religion ou d'une trame culturelle que nous n'avons jamais portée, nous le disons — et soit nous trouvons le spécialiste ensemble, soit nous confions le mariage à un organisateur qui la connaît.",
    ],
    pull: "Nous refusons d'organiser une tradition que nous ne pouvons porter honnêtement.",
  },
  pt: {
    sideLabel: "Uma filosofia",
    sideNote:
      "Aceitamos catorze casamentos por ano. Cerca de nove são multiculturais. Quase todos se estendem por vários dias.",
    headline: "A tradição, sustentada por *pessoas* que viveram dentro dela.",
    lede: "Um casamento multicultural não é um espaço com dois cenários. É um compromisso estrutural — com a ordem ritual, com os celebrantes, com o protocolo alimentar, com a coreografia de duas ou três famílias a sustentar uma mesma sala.",
    body: [
      "Não encenamos casamentos culturais; acolhemo-los. Cada tradição que consta nesta página é sustentada por especialistas com quem trabalhamos, pelo nome, há anos — o pandit hindu que oficiou quarenta dos nossos casamentos, o catering kosher que viaja connosco até Punta Cana e ao Lago de Como, o padre católico que conhece as nossas famílias.",
      "Recusamo-nos a planear uma tradição que não consigamos sustentar com honestidade. Se um casal nos escreve com uma religião ou um arco cultural que nunca sustentámos, dizemo-lo — e ou encontramos juntos o especialista, ou encaminhamos o casamento para um planeador que o conheça.",
    ],
    pull: "Recusamo-nos a planear uma tradição que não consigamos sustentar com honestidade.",
  },
  de: {
    sideLabel: "Eine Philosophie",
    sideNote:
      "Wir nehmen vierzehn Hochzeiten im Jahr an. Etwa neun davon sind multikulturell. Fast jede erstreckt sich über mehrere Tage.",
    headline: "Tradition, getragen von *Menschen,* die in ihr gelebt haben.",
    lede: "Eine multikulturelle Hochzeit ist kein Ort mit zwei Kulissen. Sie ist eine strukturelle Verpflichtung — gegenüber der rituellen Ordnung, den Geistlichen, dem Speiseprotokoll, der Choreografie von zwei oder drei Familien, die einen Raum zusammenhalten.",
    body: [
      "Wir inszenieren kulturelle Hochzeiten nicht; wir richten sie aus. Jede Tradition auf dieser Seite wird von Spezialisten getragen, mit denen wir namentlich seit Jahren arbeiten — der hinduistische Pandit, der vierzig unserer Hochzeiten geleitet hat, der koschere Caterer, der mit uns nach Punta Cana und an den Comer See reist, der katholische Priester, der unsere Familien kennt.",
      "Wir weigern uns, eine Tradition zu planen, die wir nicht ehrlich tragen können. Schreibt uns ein Paar mit einer Religion oder einem kulturellen Bogen, den wir noch nie getragen haben, sagen wir es — und finden entweder gemeinsam den Spezialisten oder vermitteln die Hochzeit an einen Planer, der sie kennt.",
    ],
    pull: "Wir weigern uns, eine Tradition zu planen, die wir nicht ehrlich tragen können.",
  },
  it: {
    sideLabel: "Una filosofia",
    sideNote:
      "Accettiamo quattordici matrimoni all'anno. Circa nove sono multiculturali. Quasi tutti si svolgono in più giorni.",
    headline: "La tradizione, retta da *persone* che vi hanno vissuto dentro.",
    lede: "Un matrimonio multiculturale non è un luogo con due scenografie. È un impegno strutturale — verso l'ordine rituale, verso i celebranti, verso il protocollo alimentare, verso la coreografia di due o tre famiglie che reggono una stessa sala.",
    body: [
      "Non mettiamo in scena i matrimoni culturali; li ospitiamo. Ogni tradizione elencata in questa pagina è retta da specialisti con cui lavoriamo, per nome, da anni — il pandit indù che ha officiato quaranta dei nostri matrimoni, il catering kosher che viaggia con noi fino a Punta Cana e al Lago di Como, il sacerdote cattolico che conosce le nostre famiglie.",
      "Ci rifiutiamo di organizzare una tradizione che non possiamo sostenere onestamente. Se una coppia ci scrive con una religione o un arco culturale che non abbiamo mai sostenuto, lo diciamo — e o troviamo insieme lo specialista, o affidiamo il matrimonio a un organizzatore che lo conosce.",
    ],
    pull: "Ci rifiutiamo di organizzare una tradizione che non possiamo sostenere onestamente.",
  },
};

// ── Methodology ────────────────────────────────────────────────────────────
type Step = { title: string; body: string };
type MethodologyCopy = {
  eyebrow: string;
  headline: string;
  intro: string;
  steps: Step[];
};

const METHODOLOGY: Record<Locale, MethodologyCopy> = {
  en: {
    eyebrow: "How we work",
    headline: "A *methodology* in five steps.",
    intro:
      "The same five-step process holds every multicultural wedding we plan. Each step takes time. The process begins eighteen-to-twenty-four months before the wedding.",
    steps: [
      {
        title: "Listen",
        body: "We begin with the families. Two-to-three hours, in person where possible. We map the ritual structure each side considers non-negotiable.",
      },
      {
        title: "Map",
        body: "We draft the ceremony order — sometimes in two languages, often across two religions. We send it back to the families for revision.",
      },
      {
        title: "Source",
        body: "We bring in the specialists. Pandit, rabbi, priest, mehndi artist, kosher caterer, choreographer, decorator. Each chosen by name, never by directory.",
      },
      {
        title: "Stage",
        body: "We rehearse the multi-day arc on paper, day by day, hour by hour. Catering. Logistics. Attire changes. Guest accommodations.",
      },
      {
        title: "Host",
        body: "We hold the wedding. Grecia is on site for every event of every day. Nothing is delegated past the studio.",
      },
    ],
  },
  es: {
    eyebrow: "Cómo trabajamos",
    headline: "Una *metodología* en cinco pasos.",
    intro:
      "El mismo proceso de cinco pasos sostiene cada boda multicultural que planificamos. Cada paso lleva tiempo. El proceso comienza dieciocho a veinticuatro meses antes de la boda.",
    steps: [
      {
        title: "Escuchar",
        body: "Comenzamos con las familias. Dos o tres horas, en persona cuando es posible. Trazamos la estructura ritual que cada parte considera innegociable.",
      },
      {
        title: "Trazar",
        body: "Redactamos el orden de la ceremonia — a veces en dos idiomas, a menudo entre dos religiones. Se lo devolvemos a las familias para que lo revisen.",
      },
      {
        title: "Buscar",
        body: "Incorporamos a los especialistas. Pandit, rabino, sacerdote, artista de mehndi, catering kosher, coreógrafo, decorador. Cada uno elegido por su nombre, nunca por directorio.",
      },
      {
        title: "Ensayar",
        body: "Ensayamos sobre el papel el arco de varios días, día a día, hora a hora. Catering. Logística. Cambios de vestuario. Alojamiento de los invitados.",
      },
      {
        title: "Celebrar",
        body: "Celebramos la boda. Grecia está presente en cada evento de cada día. Nada se delega más allá del atelier.",
      },
    ],
  },
  fr: {
    eyebrow: "Notre méthode",
    headline: "Une *méthode* en cinq étapes.",
    intro:
      "Le même processus en cinq étapes porte chaque mariage multiculturel que nous organisons. Chaque étape prend du temps. Le processus commence dix-huit à vingt-quatre mois avant le mariage.",
    steps: [
      {
        title: "Écouter",
        body: "Nous commençons par les familles. Deux à trois heures, en personne lorsque c'est possible. Nous cartographions la structure rituelle que chaque partie juge non négociable.",
      },
      {
        title: "Cartographier",
        body: "Nous rédigeons l'ordre de la cérémonie — parfois en deux langues, souvent entre deux religions. Nous le renvoyons aux familles pour révision.",
      },
      {
        title: "Sourcer",
        body: "Nous faisons venir les spécialistes. Pandit, rabbin, prêtre, artiste mehndi, traiteur casher, chorégraphe, décorateur. Chacun choisi nommément, jamais par annuaire.",
      },
      {
        title: "Mettre en scène",
        body: "Nous répétons sur le papier la trame de plusieurs jours, jour après jour, heure par heure. Traiteur. Logistique. Changements de tenue. Hébergement des invités.",
      },
      {
        title: "Accueillir",
        body: "Nous tenons le mariage. Grecia est présente à chaque événement de chaque journée. Rien n'est délégué au-delà de l'atelier.",
      },
    ],
  },
  pt: {
    eyebrow: "Como trabalhamos",
    headline: "Uma *metodologia* em cinco passos.",
    intro:
      "O mesmo processo de cinco passos sustenta cada casamento multicultural que planeamos. Cada passo leva tempo. O processo começa dezoito a vinte e quatro meses antes do casamento.",
    steps: [
      {
        title: "Ouvir",
        body: "Começamos pelas famílias. Duas a três horas, pessoalmente sempre que possível. Mapeamos a estrutura ritual que cada lado considera inegociável.",
      },
      {
        title: "Mapear",
        body: "Esboçamos a ordem da cerimónia — por vezes em duas línguas, muitas vezes entre duas religiões. Devolvemo-la às famílias para revisão.",
      },
      {
        title: "Selecionar",
        body: "Trazemos os especialistas. Pandit, rabino, padre, artista de mehndi, catering kosher, coreógrafo, decorador. Cada um escolhido pelo nome, nunca por diretório.",
      },
      {
        title: "Ensaiar",
        body: "Ensaiamos no papel o arco de vários dias, dia a dia, hora a hora. Catering. Logística. Mudanças de traje. Alojamento dos convidados.",
      },
      {
        title: "Acolher",
        body: "Realizamos o casamento. Grecia está presente em cada evento de cada dia. Nada é delegado para além do ateliê.",
      },
    ],
  },
  de: {
    eyebrow: "Wie wir arbeiten",
    headline: "Eine *Methode* in fünf Schritten.",
    intro:
      "Derselbe fünfstufige Prozess trägt jede multikulturelle Hochzeit, die wir planen. Jeder Schritt braucht Zeit. Der Prozess beginnt achtzehn bis vierundzwanzig Monate vor der Hochzeit.",
    steps: [
      {
        title: "Zuhören",
        body: "Wir beginnen bei den Familien. Zwei bis drei Stunden, nach Möglichkeit persönlich. Wir kartieren die rituelle Struktur, die jede Seite für unverhandelbar hält.",
      },
      {
        title: "Kartieren",
        body: "Wir entwerfen die Zeremonienreihenfolge — manchmal in zwei Sprachen, oft über zwei Religionen hinweg. Wir senden sie zur Überarbeitung an die Familien zurück.",
      },
      {
        title: "Beschaffen",
        body: "Wir holen die Spezialisten. Pandit, Rabbiner, Priester, Mehndi-Künstlerin, koscherer Caterer, Choreograf, Dekorateur. Jeder namentlich gewählt, nie aus einem Verzeichnis.",
      },
      {
        title: "Inszenieren",
        body: "Wir proben den mehrtägigen Bogen auf dem Papier, Tag für Tag, Stunde für Stunde. Catering. Logistik. Garderobenwechsel. Unterbringung der Gäste.",
      },
      {
        title: "Ausrichten",
        body: "Wir halten die Hochzeit. Grecia ist bei jedem Programmpunkt jedes Tages vor Ort. Nichts wird über das Atelier hinaus delegiert.",
      },
    ],
  },
  it: {
    eyebrow: "Come lavoriamo",
    headline: "Un *metodo* in cinque passi.",
    intro:
      "Lo stesso processo in cinque passi regge ogni matrimonio multiculturale che organizziamo. Ogni passo richiede tempo. Il processo inizia da diciotto a ventiquattro mesi prima del matrimonio.",
    steps: [
      {
        title: "Ascoltare",
        body: "Cominciamo dalle famiglie. Due-tre ore, di persona quando possibile. Mappiamo la struttura rituale che ciascuna parte considera non negoziabile.",
      },
      {
        title: "Mappare",
        body: "Redigiamo l'ordine della cerimonia — a volte in due lingue, spesso tra due religioni. Lo rimandiamo alle famiglie per la revisione.",
      },
      {
        title: "Selezionare",
        body: "Coinvolgiamo gli specialisti. Pandit, rabbino, sacerdote, artista di mehndi, catering kosher, coreografo, decoratore. Ciascuno scelto per nome, mai da un elenco.",
      },
      {
        title: "Allestire",
        body: "Proviamo sulla carta l'arco di più giorni, giorno per giorno, ora per ora. Catering. Logistica. Cambi d'abito. Sistemazione degli ospiti.",
      },
      {
        title: "Ospitare",
        body: "Teniamo il matrimonio. Grecia è presente a ogni evento di ogni giorno. Nulla viene delegato oltre l'atelier.",
      },
    ],
  },
};

// ── Atlas (head only — cards come from the culture docs) ────────────────────
type AtlasCopy = { eyebrow: string; headline: string; deck: string };

const ATLAS: Record<Locale, AtlasCopy> = {
  en: {
    eyebrow: "The traditions",
    headline: "Eight cultural *arcs.*",
    deck: "Each tradition listed here is one we hold by specialists. Click through for the full ceremony arc, design concepts, and multi-day planning notes.",
  },
  es: {
    eyebrow: "Las tradiciones",
    headline: "Ocho *arcos* culturales.",
    deck: "Cada tradición que aparece aquí es una que sostenemos con especialistas. Entra para ver el arco ceremonial completo, los conceptos de diseño y las notas de planificación de varios días.",
  },
  fr: {
    eyebrow: "Les traditions",
    headline: "Huit *trames* culturelles.",
    deck: "Chaque tradition présentée ici est une tradition que nous portons avec des spécialistes. Cliquez pour découvrir la trame cérémonielle complète, les concepts de design et les notes de planification sur plusieurs jours.",
  },
  pt: {
    eyebrow: "As tradições",
    headline: "Oito *arcos* culturais.",
    deck: "Cada tradição aqui listada é uma que sustentamos com especialistas. Clique para ver o arco cerimonial completo, os conceitos de design e as notas de planeamento de vários dias.",
  },
  de: {
    eyebrow: "Die Traditionen",
    headline: "Acht kulturelle *Bögen.*",
    deck: "Jede hier aufgeführte Tradition ist eine, die wir mit Spezialisten tragen. Klicken Sie für den vollständigen Zeremonienbogen, die Gestaltungskonzepte und die mehrtägigen Planungsnotizen.",
  },
  it: {
    eyebrow: "Le tradizioni",
    headline: "Otto *archi* culturali.",
    deck: "Ogni tradizione qui elencata è una che reggiamo con specialisti. Clicca per l'arco cerimoniale completo, i concept di design e le note di pianificazione di più giorni.",
  },
};

// ── Interfaith pairings ─────────────────────────────────────────────────
type Pairing = { first: string; second: string; body: string };
type PairingsCopy = {
  eyebrow: string;
  headline: string;
  intro: string;
  items: Pairing[];
};

const PAIRINGS: Record<Locale, PairingsCopy> = {
  en: {
    eyebrow: "Interfaith · Multi-tradition",
    headline: "When two *arcs* meet in one wedding.",
    intro:
      "The pairings we have held more than three times each. Every combination here is one we have planned in person — never improvised.",
    items: [
      {
        first: "Hindu",
        second: "Christian",
        body: "Two ceremonies, one weekend — the studio's most-requested combination. Pheras on day three, Catholic mass on day four.",
      },
      {
        first: "Jewish",
        second: "Catholic",
        body: "Chuppah followed by a Catholic blessing. Two officiants, one cohesive ritual arc.",
      },
      {
        first: "Hindu",
        second: "Jewish",
        body: "Chuppah held inside the mandap. Two clergy. Three languages.",
      },
      {
        first: "Muslim",
        second: "Christian",
        body: "Katb el-kitab in private, then a Christian ceremony for the families.",
      },
      {
        first: "Sikh",
        second: "Hindu",
        body: "Anand Karaj at dawn, Hindu pheras at dusk. One temple, two arcs.",
      },
      {
        first: "Arab",
        second: "Catholic",
        body: "Zaffe procession into a Catholic mass. The bride arrives twice.",
      },
    ],
  },
  es: {
    eyebrow: "Interreligiosa · Multitradición",
    headline: "Cuando dos *arcos* se encuentran en una boda.",
    intro:
      "Las combinaciones que hemos sostenido más de tres veces cada una. Cada combinación aquí es una que hemos planificado en persona — nunca improvisada.",
    items: [
      {
        first: "Hindú",
        second: "Cristiana",
        body: "Dos ceremonias, un fin de semana — la combinación más solicitada del atelier. Pheras el tercer día, misa católica el cuarto.",
      },
      {
        first: "Judía",
        second: "Católica",
        body: "Chupá seguida de una bendición católica. Dos oficiantes, un único arco ritual cohesivo.",
      },
      {
        first: "Hindú",
        second: "Judía",
        body: "Chupá celebrada dentro del mandap. Dos oficiantes. Tres idiomas.",
      },
      {
        first: "Musulmana",
        second: "Cristiana",
        body: "Katb el-kitab en privado y luego una ceremonia cristiana para las familias.",
      },
      {
        first: "Sij",
        second: "Hindú",
        body: "Anand Karaj al amanecer, pheras hindúes al atardecer. Un templo, dos arcos.",
      },
      {
        first: "Árabe",
        second: "Católica",
        body: "Cortejo zaffe hacia una misa católica. La novia llega dos veces.",
      },
    ],
  },
  fr: {
    eyebrow: "Interconfessionnel · Multi-tradition",
    headline: "Quand deux *trames* se rencontrent dans un mariage.",
    intro:
      "Les associations que nous avons tenues plus de trois fois chacune. Chaque combinaison ici est une que nous avons organisée en personne — jamais improvisée.",
    items: [
      {
        first: "Hindou",
        second: "Chrétien",
        body: "Deux cérémonies, un week-end — la combinaison la plus demandée de l'atelier. Pheras le troisième jour, messe catholique le quatrième.",
      },
      {
        first: "Juif",
        second: "Catholique",
        body: "Houppa suivie d'une bénédiction catholique. Deux officiants, une seule trame rituelle cohérente.",
      },
      {
        first: "Hindou",
        second: "Juif",
        body: "Houppa tenue à l'intérieur du mandap. Deux officiants. Trois langues.",
      },
      {
        first: "Musulman",
        second: "Chrétien",
        body: "Katb el-kitab en privé, puis une cérémonie chrétienne pour les familles.",
      },
      {
        first: "Sikh",
        second: "Hindou",
        body: "Anand Karaj à l'aube, pheras hindous au crépuscule. Un temple, deux trames.",
      },
      {
        first: "Arabe",
        second: "Catholique",
        body: "Cortège zaffe vers une messe catholique. La mariée arrive deux fois.",
      },
    ],
  },
  pt: {
    eyebrow: "Inter-religioso · Multitradição",
    headline: "Quando dois *arcos* se encontram num casamento.",
    intro:
      "As combinações que sustentámos mais de três vezes cada uma. Cada combinação aqui é uma que planeámos pessoalmente — nunca improvisada.",
    items: [
      {
        first: "Hindu",
        second: "Cristão",
        body: "Duas cerimónias, um fim de semana — a combinação mais pedida do ateliê. Pheras no terceiro dia, missa católica no quarto.",
      },
      {
        first: "Judaico",
        second: "Católico",
        body: "Chupá seguida de uma bênção católica. Dois celebrantes, um único arco ritual coeso.",
      },
      {
        first: "Hindu",
        second: "Judaico",
        body: "Chupá realizada dentro do mandap. Dois celebrantes. Três línguas.",
      },
      {
        first: "Muçulmano",
        second: "Cristão",
        body: "Katb el-kitab em privado e depois uma cerimónia cristã para as famílias.",
      },
      {
        first: "Sikh",
        second: "Hindu",
        body: "Anand Karaj ao amanhecer, pheras hindus ao anoitecer. Um templo, dois arcos.",
      },
      {
        first: "Árabe",
        second: "Católico",
        body: "Cortejo zaffe rumo a uma missa católica. A noiva chega duas vezes.",
      },
    ],
  },
  de: {
    eyebrow: "Interreligiös · Multi-Tradition",
    headline: "Wenn zwei *Bögen* in einer Hochzeit zusammentreffen.",
    intro:
      "Die Kombinationen, die wir jeweils mehr als dreimal gehalten haben. Jede Kombination hier ist eine, die wir persönlich geplant haben — nie improvisiert.",
    items: [
      {
        first: "Hinduistisch",
        second: "Christlich",
        body: "Zwei Zeremonien, ein Wochenende — die am häufigsten gewünschte Kombination des Ateliers. Pheras am dritten Tag, katholische Messe am vierten.",
      },
      {
        first: "Jüdisch",
        second: "Katholisch",
        body: "Chuppa gefolgt von einem katholischen Segen. Zwei Geistliche, ein stimmiger ritueller Bogen.",
      },
      {
        first: "Hinduistisch",
        second: "Jüdisch",
        body: "Chuppa im Inneren des Mandap gehalten. Zwei Geistliche. Drei Sprachen.",
      },
      {
        first: "Muslimisch",
        second: "Christlich",
        body: "Katb el-Kitab im Privaten, dann eine christliche Zeremonie für die Familien.",
      },
      {
        first: "Sikhistisch",
        second: "Hinduistisch",
        body: "Anand Karaj im Morgengrauen, hinduistische Pheras in der Dämmerung. Ein Tempel, zwei Bögen.",
      },
      {
        first: "Arabisch",
        second: "Katholisch",
        body: "Zaffe-Prozession in eine katholische Messe. Die Braut kommt zweimal an.",
      },
    ],
  },
  it: {
    eyebrow: "Interreligioso · Multi-tradizione",
    headline: "Quando due *archi* si incontrano in un matrimonio.",
    intro:
      "Le combinazioni che abbiamo tenuto più di tre volte ciascuna. Ogni combinazione qui è una che abbiamo organizzato di persona — mai improvvisata.",
    items: [
      {
        first: "Indù",
        second: "Cristiano",
        body: "Due cerimonie, un fine settimana — la combinazione più richiesta dell'atelier. Pheras il terzo giorno, messa cattolica il quarto.",
      },
      {
        first: "Ebraico",
        second: "Cattolico",
        body: "Chuppah seguita da una benedizione cattolica. Due celebranti, un unico arco rituale coeso.",
      },
      {
        first: "Indù",
        second: "Ebraico",
        body: "Chuppah tenuta all'interno del mandap. Due celebranti. Tre lingue.",
      },
      {
        first: "Musulmano",
        second: "Cristiano",
        body: "Katb el-kitab in privato, poi una cerimonia cristiana per le famiglie.",
      },
      {
        first: "Sikh",
        second: "Indù",
        body: "Anand Karaj all'alba, pheras indù al tramonto. Un tempio, due archi.",
      },
      {
        first: "Arabo",
        second: "Cattolico",
        body: "Corteo zaffe verso una messa cattolica. La sposa arriva due volte.",
      },
    ],
  },
};

// ── Specialists (names locale-invariant) ────────────────────────────────────
type SpecialistsCopy = {
  eyebrow: string;
  headline: string;
  intro: string;
  roles: string[];
  bodies: string[];
};

const SPECIALISTS: Record<Locale, SpecialistsCopy> = {
  en: {
    eyebrow: "Authority",
    headline: "The *specialists* who hold each tradition.",
    intro:
      "A working register of the officiants, caterers, choreographers and decorators we partner with — by name, by year, by relationship.",
    roles: [
      "Hindu pandit",
      "Rabbi",
      "Catholic priest",
      "Imam",
      "Sikh Granthi",
      "Kosher caterer",
      "Indian choreographer",
      "Mehndi artist",
    ],
    bodies: [
      "14 years · 40 weddings · Cap Cana, Mumbai, London. Trained at Varanasi.",
      "Multilingual · Conservative & Reform · travels for destination weddings worldwide.",
      "Multilingual Spanish-English mass. Resident of Punta Cana since 1994.",
      "Lebanese-Egyptian protocol. Travels for katb el-kitab and full ceremony.",
      "Anand Karaj ceremonies. Based London, travels worldwide.",
      "8 years · destination kosher catering · travels with kitchen team.",
      "Sangeet, baraat, mehndi-night choreography. Mumbai-based, travels.",
      "12 years · 300+ brides · brings team for full-weekend services.",
    ],
  },
  es: {
    eyebrow: "Autoridad",
    headline: "Los *especialistas* que sostienen cada tradición.",
    intro:
      "Un registro activo de los oficiantes, caterings, coreógrafos y decoradores con quienes colaboramos — por su nombre, por los años, por la relación.",
    roles: [
      "Pandit hindú",
      "Rabino",
      "Sacerdote católico",
      "Imán",
      "Granthi sij",
      "Catering kosher",
      "Coreógrafo indio",
      "Artista de mehndi",
    ],
    bodies: [
      "14 años · 40 bodas · Cap Cana, Bombay, Londres. Formado en Varanasi.",
      "Multilingüe · conservador y reformista · viaja para bodas de destino por todo el mundo.",
      "Misa multilingüe español-inglés. Residente de Punta Cana desde 1994.",
      "Protocolo libanés-egipcio. Viaja para el katb el-kitab y la ceremonia completa.",
      "Ceremonias Anand Karaj. Con base en Londres, viaja por todo el mundo.",
      "8 años · catering kosher de destino · viaja con su equipo de cocina.",
      "Coreografía de sangeet, baraat y noche de mehndi. Con base en Bombay, viaja.",
      "12 años · más de 300 novias · trae a su equipo para los servicios de todo el fin de semana.",
    ],
  },
  fr: {
    eyebrow: "Autorité",
    headline: "Les *spécialistes* qui portent chaque tradition.",
    intro:
      "Un registre actif des officiants, traiteurs, chorégraphes et décorateurs avec qui nous collaborons — nommément, par les années, par la relation.",
    roles: [
      "Pandit hindou",
      "Rabbin",
      "Prêtre catholique",
      "Imam",
      "Granthi sikh",
      "Traiteur casher",
      "Chorégraphe indien",
      "Artiste mehndi",
    ],
    bodies: [
      "14 ans · 40 mariages · Cap Cana, Mumbai, Londres. Formé à Varanasi.",
      "Multilingue · massorti et libéral · voyage pour des mariages de destination dans le monde entier.",
      "Messe multilingue espagnol-anglais. Résident de Punta Cana depuis 1994.",
      "Protocole libano-égyptien. Voyage pour le katb el-kitab et la cérémonie complète.",
      "Cérémonies Anand Karaj. Basé à Londres, voyage dans le monde entier.",
      "8 ans · traiteur casher de destination · voyage avec son équipe de cuisine.",
      "Chorégraphie de sangeet, baraat et soirée mehndi. Basé à Mumbai, voyage.",
      "12 ans · plus de 300 mariées · amène son équipe pour les prestations du week-end entier.",
    ],
  },
  pt: {
    eyebrow: "Autoridade",
    headline: "Os *especialistas* que sustentam cada tradição.",
    intro:
      "Um registo ativo dos celebrantes, caterings, coreógrafos e decoradores com quem colaboramos — pelo nome, pelos anos, pela relação.",
    roles: [
      "Pandit hindu",
      "Rabino",
      "Padre católico",
      "Imã",
      "Granthi sikh",
      "Catering kosher",
      "Coreógrafo indiano",
      "Artista de mehndi",
    ],
    bodies: [
      "14 anos · 40 casamentos · Cap Cana, Mumbai, Londres. Formado em Varanasi.",
      "Multilingue · conservador e reformista · viaja para casamentos de destino em todo o mundo.",
      "Missa multilingue espanhol-inglês. Residente de Punta Cana desde 1994.",
      "Protocolo libanês-egípcio. Viaja para o katb el-kitab e a cerimónia completa.",
      "Cerimónias Anand Karaj. Sediado em Londres, viaja por todo o mundo.",
      "8 anos · catering kosher de destino · viaja com a sua equipa de cozinha.",
      "Coreografia de sangeet, baraat e noite de mehndi. Sediado em Mumbai, viaja.",
      "12 anos · mais de 300 noivas · traz a sua equipa para os serviços de todo o fim de semana.",
    ],
  },
  de: {
    eyebrow: "Autorität",
    headline: "Die *Spezialisten,* die jede Tradition tragen.",
    intro:
      "Ein lebendiges Verzeichnis der Geistlichen, Caterer, Choreografen und Dekorateure, mit denen wir zusammenarbeiten — namentlich, nach Jahren, nach Beziehung.",
    roles: [
      "Hinduistischer Pandit",
      "Rabbiner",
      "Katholischer Priester",
      "Imam",
      "Sikh-Granthi",
      "Koscherer Caterer",
      "Indischer Choreograf",
      "Mehndi-Künstlerin",
    ],
    bodies: [
      "14 Jahre · 40 Hochzeiten · Cap Cana, Mumbai, London. Ausgebildet in Varanasi.",
      "Mehrsprachig · konservativ & liberal · reist weltweit für Destinationshochzeiten.",
      "Mehrsprachige spanisch-englische Messe. Seit 1994 in Punta Cana ansässig.",
      "Libanesisch-ägyptisches Protokoll. Reist für Katb el-Kitab und die vollständige Zeremonie.",
      "Anand-Karaj-Zeremonien. In London ansässig, reist weltweit.",
      "8 Jahre · koscheres Destinations-Catering · reist mit dem Küchenteam.",
      "Choreografie für Sangeet, Baraat und Mehndi-Nacht. In Mumbai ansässig, reist.",
      "12 Jahre · über 300 Bräute · bringt ihr Team für die Leistungen des ganzen Wochenendes.",
    ],
  },
  it: {
    eyebrow: "Autorità",
    headline: "Gli *specialisti* che reggono ogni tradizione.",
    intro:
      "Un registro attivo dei celebranti, dei catering, dei coreografi e dei decoratori con cui collaboriamo — per nome, per anni, per rapporto.",
    roles: [
      "Pandit indù",
      "Rabbino",
      "Sacerdote cattolico",
      "Imam",
      "Granthi sikh",
      "Catering kosher",
      "Coreografo indiano",
      "Artista di mehndi",
    ],
    bodies: [
      "14 anni · 40 matrimoni · Cap Cana, Mumbai, Londra. Formatosi a Varanasi.",
      "Multilingue · conservatore e riformato · viaggia per matrimoni di destinazione in tutto il mondo.",
      "Messa multilingue spagnolo-inglese. Residente a Punta Cana dal 1994.",
      "Protocollo libanese-egiziano. Viaggia per il katb el-kitab e la cerimonia completa.",
      "Cerimonie Anand Karaj. Con base a Londra, viaggia in tutto il mondo.",
      "8 anni · catering kosher di destinazione · viaggia con la sua squadra di cucina.",
      "Coreografia di sangeet, baraat e serata mehndi. Con base a Mumbai, viaggia.",
      "12 anni · oltre 300 spose · porta la sua squadra per i servizi dell'intero fine settimana.",
    ],
  },
};

// ── Related / journal ───────────────────────────────────────────────────
type Article = { category: string; title: string; body: string };
type Link = { label: string };
type RelatedCopy = {
  eyebrow: string;
  headline: string;
  articles: Article[];
  destinationsHeading: string;
  servicesHeading: string;
  weddingsHeading: string;
  destinations: Link[];
  services: Link[];
  weddings: Link[];
};

const RELATED: Record<Locale, RelatedCopy> = {
  en: {
    eyebrow: "Continue reading",
    headline: "From the *journal.*",
    articles: [
      {
        category: "Indian Weddings · Punta Cana",
        title: "Best Indian Wedding Venues in Punta Cana",
        body: "The resorts that hold a 300-guest baraat with grace.",
      },
      {
        category: "Interfaith",
        title: "Two Clergy, One Ceremony",
        body: "How we structure interfaith ritual arcs without compromise.",
      },
      {
        category: "Jewish · Destination",
        title: "A Jewish Wedding in the Caribbean: Kosher on the Coast",
        body: "On building a kosher kitchen 1,500 miles from the nearest mashgiach.",
      },
      {
        category: "Multi-day · Planning",
        title: "The Sangeet: Why the Night Before Matters More",
        body: "On the rehearsal that is no longer a rehearsal.",
      },
      {
        category: "Latin",
        title: "Padrinos, Arras, Lazo: A Catholic-Latin Glossary",
        body: "For the brides marrying into a tradition new to them.",
      },
    ],
    destinationsHeading: "Destinations",
    servicesHeading: "Services",
    weddingsHeading: "Recent weddings",
    destinations: [
      { label: "Punta Cana" },
      { label: "Lake Como" },
      { label: "Provence" },
      { label: "Mallorca" },
    ],
    services: [
      { label: "Multicultural planning" },
      { label: "Wedding weekend design" },
      { label: "Cultural sourcing" },
      { label: "Legal & protocol" },
    ],
    weddings: [
      { label: "Saira & Adam · Hindu-Christian" },
      { label: "Maya & Daniel · Jewish" },
      { label: "Aisha & Tariq · Arab" },
    ],
  },
  es: {
    eyebrow: "Seguir leyendo",
    headline: "Del *diario.*",
    articles: [
      {
        category: "Bodas Indias · Punta Cana",
        title: "Los mejores lugares para bodas indias en Punta Cana",
        body: "Los resorts que acogen con gracia un baraat de 300 invitados.",
      },
      {
        category: "Interreligiosa",
        title: "Dos oficiantes, una ceremonia",
        body: "Cómo estructuramos los arcos rituales interreligiosos sin concesiones.",
      },
      {
        category: "Judía · Destino",
        title: "Una boda judía en el Caribe: kosher en la costa",
        body: "Sobre montar una cocina kosher a 2.400 kilómetros del mashgiach más cercano.",
      },
      {
        category: "Varios días · Planificación",
        title: "El sangeet: por qué la noche anterior importa más",
        body: "Sobre el ensayo que ya no es un ensayo.",
      },
      {
        category: "Latina",
        title: "Padrinos, arras, lazo: un glosario católico-latino",
        body: "Para las novias que se casan en una tradición nueva para ellas.",
      },
    ],
    destinationsHeading: "Destinos",
    servicesHeading: "Servicios",
    weddingsHeading: "Bodas recientes",
    destinations: [
      { label: "Punta Cana" },
      { label: "Lago de Como" },
      { label: "Provenza" },
      { label: "Mallorca" },
    ],
    services: [
      { label: "Planificación multicultural" },
      { label: "Diseño de fin de semana nupcial" },
      { label: "Búsqueda cultural" },
      { label: "Legal y protocolo" },
    ],
    weddings: [
      { label: "Saira y Adam · Hindú-Cristiana" },
      { label: "Maya y Daniel · Judía" },
      { label: "Aisha y Tariq · Árabe" },
    ],
  },
  fr: {
    eyebrow: "Poursuivre la lecture",
    headline: "Du *journal.*",
    articles: [
      {
        category: "Mariages Indiens · Punta Cana",
        title: "Les meilleurs lieux de mariage indien à Punta Cana",
        body: "Les resorts qui accueillent avec grâce un baraat de 300 invités.",
      },
      {
        category: "Interconfessionnel",
        title: "Deux officiants, une cérémonie",
        body: "Comment nous structurons les trames rituelles interconfessionnelles sans compromis.",
      },
      {
        category: "Juif · Destination",
        title: "Un mariage juif aux Caraïbes : casher sur la côte",
        body: "Monter une cuisine casher à 2 400 kilomètres du mashgiah le plus proche.",
      },
      {
        category: "Plusieurs jours · Planification",
        title: "Le sangeet : pourquoi la veille compte davantage",
        body: "Sur la répétition qui n'en est plus une.",
      },
      {
        category: "Latin",
        title: "Padrinos, arras, lazo : un glossaire catholique-latin",
        body: "Pour les mariées qui épousent une tradition nouvelle pour elles.",
      },
    ],
    destinationsHeading: "Destinations",
    servicesHeading: "Services",
    weddingsHeading: "Mariages récents",
    destinations: [
      { label: "Punta Cana" },
      { label: "Lac de Côme" },
      { label: "Provence" },
      { label: "Majorque" },
    ],
    services: [
      { label: "Planification multiculturelle" },
      { label: "Design du week-end de mariage" },
      { label: "Sourcing culturel" },
      { label: "Juridique & protocole" },
    ],
    weddings: [
      { label: "Saira & Adam · Hindou-Chrétien" },
      { label: "Maya & Daniel · Juif" },
      { label: "Aisha & Tariq · Arabe" },
    ],
  },
  pt: {
    eyebrow: "Continuar a ler",
    headline: "Do *diário.*",
    articles: [
      {
        category: "Casamentos Indianos · Punta Cana",
        title: "Os melhores locais para casamentos indianos em Punta Cana",
        body: "Os resorts que acolhem com graça um baraat de 300 convidados.",
      },
      {
        category: "Inter-religioso",
        title: "Dois celebrantes, uma cerimónia",
        body: "Como estruturamos os arcos rituais inter-religiosos sem concessões.",
      },
      {
        category: "Judaico · Destino",
        title: "Um casamento judaico nas Caraíbas: kosher na costa",
        body: "Sobre montar uma cozinha kosher a 2.400 quilómetros do mashgiach mais próximo.",
      },
      {
        category: "Vários dias · Planeamento",
        title: "O sangeet: porque a noite anterior importa mais",
        body: "Sobre o ensaio que já não é um ensaio.",
      },
      {
        category: "Latino",
        title: "Padrinhos, arras, lazo: um glossário católico-latino",
        body: "Para as noivas que se casam numa tradição nova para elas.",
      },
    ],
    destinationsHeading: "Destinos",
    servicesHeading: "Serviços",
    weddingsHeading: "Casamentos recentes",
    destinations: [
      { label: "Punta Cana" },
      { label: "Lago de Como" },
      { label: "Provença" },
      { label: "Maiorca" },
    ],
    services: [
      { label: "Planeamento multicultural" },
      { label: "Design de fim de semana nupcial" },
      { label: "Curadoria cultural" },
      { label: "Jurídico e protocolo" },
    ],
    weddings: [
      { label: "Saira & Adam · Hindu-Cristão" },
      { label: "Maya & Daniel · Judaico" },
      { label: "Aisha & Tariq · Árabe" },
    ],
  },
  de: {
    eyebrow: "Weiterlesen",
    headline: "Aus dem *Journal.*",
    articles: [
      {
        category: "Indische Hochzeiten · Punta Cana",
        title: "Die besten indischen Hochzeitslocations in Punta Cana",
        body: "Die Resorts, die einen Baraat mit 300 Gästen mit Anmut tragen.",
      },
      {
        category: "Interreligiös",
        title: "Zwei Geistliche, eine Zeremonie",
        body: "Wie wir interreligiöse rituelle Bögen ohne Kompromisse strukturieren.",
      },
      {
        category: "Jüdisch · Destination",
        title: "Eine jüdische Hochzeit in der Karibik: koscher an der Küste",
        body: "Über den Aufbau einer koscheren Küche 2.400 Kilometer vom nächsten Maschgiach entfernt.",
      },
      {
        category: "Mehrtägig · Planung",
        title: "Das Sangeet: Warum der Abend davor mehr zählt",
        body: "Über die Probe, die keine Probe mehr ist.",
      },
      {
        category: "Lateinamerikanisch",
        title:
          "Padrinos, Arras, Lazo: ein katholisch-lateinamerikanisches Glossar",
        body: "Für Bräute, die in eine ihnen neue Tradition einheiraten.",
      },
    ],
    destinationsHeading: "Reiseziele",
    servicesHeading: "Leistungen",
    weddingsHeading: "Jüngste Hochzeiten",
    destinations: [
      { label: "Punta Cana" },
      { label: "Comer See" },
      { label: "Provence" },
      { label: "Mallorca" },
    ],
    services: [
      { label: "Multikulturelle Planung" },
      { label: "Gestaltung des Hochzeitswochenendes" },
      { label: "Kulturelles Sourcing" },
      { label: "Recht & Protokoll" },
    ],
    weddings: [
      { label: "Saira & Adam · Hinduistisch-Christlich" },
      { label: "Maya & Daniel · Jüdisch" },
      { label: "Aisha & Tariq · Arabisch" },
    ],
  },
  it: {
    eyebrow: "Continua a leggere",
    headline: "Dal *diario.*",
    articles: [
      {
        category: "Matrimoni Indiani · Punta Cana",
        title: "Le migliori location per matrimoni indiani a Punta Cana",
        body: "I resort che accolgono con grazia un baraat da 300 invitati.",
      },
      {
        category: "Interreligioso",
        title: "Due celebranti, una cerimonia",
        body: "Come strutturiamo gli archi rituali interreligiosi senza compromessi.",
      },
      {
        category: "Ebraico · Destinazione",
        title: "Un matrimonio ebraico ai Caraibi: kosher sulla costa",
        body: "Sull'allestire una cucina kosher a 2.400 chilometri dal mashgiach più vicino.",
      },
      {
        category: "Più giorni · Pianificazione",
        title: "Il sangeet: perché la sera prima conta di più",
        body: "Sulla prova che non è più una prova.",
      },
      {
        category: "Latino",
        title: "Padrinos, arras, lazo: un glossario cattolico-latino",
        body: "Per le spose che si sposano in una tradizione nuova per loro.",
      },
    ],
    destinationsHeading: "Destinazioni",
    servicesHeading: "Servizi",
    weddingsHeading: "Matrimoni recenti",
    destinations: [
      { label: "Punta Cana" },
      { label: "Lago di Como" },
      { label: "Provenza" },
      { label: "Maiorca" },
    ],
    services: [
      { label: "Pianificazione multiculturale" },
      { label: "Design del weekend di nozze" },
      { label: "Ricerca culturale" },
      { label: "Legale e protocollo" },
    ],
    weddings: [
      { label: "Saira & Adam · Indù-Cristiano" },
      { label: "Maya & Daniel · Ebraico" },
      { label: "Aisha & Tariq · Arabo" },
    ],
  },
};

// ── CTA ──────────────────────────────────────────────────────────────────
type CtaCopy = {
  scriptLine: string;
  headline: string;
  body: string;
  ctaLabel: string;
};

const CTA: Record<Locale, CtaCopy> = {
  en: {
    scriptLine: "A private conversation —",
    headline: "*Begin* your multicultural wedding.",
    body: "Write to us about your tradition, your families, and the wedding you are imagining. Grecia writes back, personally, within five working days.",
    ctaLabel: "Request a private consultation →",
  },
  es: {
    scriptLine: "Una conversación privada —",
    headline: "*Comienza* tu boda multicultural.",
    body: "Escríbenos sobre tu tradición, tus familias y la boda que imaginas. Grecia responde personalmente en cinco días laborables.",
    ctaLabel: "Solicitar una consulta privada →",
  },
  fr: {
    scriptLine: "Une conversation privée —",
    headline: "*Commencez* votre mariage multiculturel.",
    body: "Écrivez-nous au sujet de votre tradition, de vos familles et du mariage que vous imaginez. Grecia répond personnellement sous cinq jours ouvrés.",
    ctaLabel: "Demander une consultation privée →",
  },
  pt: {
    scriptLine: "Uma conversa privada —",
    headline: "*Comece* o seu casamento multicultural.",
    body: "Escreva-nos sobre a sua tradição, as suas famílias e o casamento que imagina. Grecia responde pessoalmente em cinco dias úteis.",
    ctaLabel: "Solicitar uma consulta privada →",
  },
  de: {
    scriptLine: "Ein privates Gespräch —",
    headline: "*Beginnen* Sie Ihre multikulturelle Hochzeit.",
    body: "Schreiben Sie uns über Ihre Tradition, Ihre Familien und die Hochzeit, die Sie sich vorstellen. Grecia antwortet persönlich innerhalb von fünf Werktagen.",
    ctaLabel: "Privates Gespräch anfragen →",
  },
  it: {
    scriptLine: "Una conversazione privata —",
    headline: "*Inizia* il tuo matrimonio multiculturale.",
    body: "Scrivici della tua tradizione, delle tue famiglie e del matrimonio che immagini. Grecia risponde personalmente entro cinque giorni lavorativi.",
    ctaLabel: "Richiedi una consulenza privata →",
  },
};

// ── Build doc ──────────────────────────────────────────────────────────────
function buildDoc(locale: Locale) {
  const philosophy = PHILOSOPHY[locale];
  const methodology = METHODOLOGY[locale];
  const pairings = PAIRINGS[locale];
  const specialists = SPECIALISTS[locale];
  const related = RELATED[locale];

  return {
    hero: HERO[locale],
    philosophy: {
      sideLabel: philosophy.sideLabel,
      sideNote: philosophy.sideNote,
      headline: philosophy.headline,
      lede: philosophy.lede,
      body: ptBlocks(
        philosophy.body.map((text) => ({ style: "normal", text })),
      ),
      pull: philosophy.pull,
    },
    methodology: {
      eyebrow: methodology.eyebrow,
      headline: methodology.headline,
      intro: methodology.intro,
      steps: methodology.steps.map((s) => keyed(s)),
    },
    atlas: {
      ...ATLAS[locale],
      cultures: CULTURE_ORDER.map((slug) =>
        keyed({ _type: "reference", _weak: true, _ref: cultureId(slug, locale) }),
      ),
    },
    pairings: {
      eyebrow: pairings.eyebrow,
      headline: pairings.headline,
      intro: pairings.intro,
      items: pairings.items.map((p) => keyed(p)),
    },
    specialists: {
      eyebrow: specialists.eyebrow,
      headline: specialists.headline,
      intro: specialists.intro,
      items: SPECIALIST_NAMES.map((name, i) =>
        keyed({
          role: specialists.roles[i],
          name,
          body: specialists.bodies[i],
        }),
      ),
    },
    related: {
      eyebrow: related.eyebrow,
      headline: related.headline,
      articles: RELATED_ARTICLE_SLUGS.map((slug) =>
        keyed({
          _type: "reference",
          _ref: `article-${slug}-${locale}`,
          _weak: true,
        }),
      ),
      sidebarDestinations: SIDEBAR_DESTINATION_SLUGS.map((slug) =>
        keyed({
          _type: "reference",
          _ref: `destination-${slug}-${locale}`,
          _weak: true,
        }),
      ),
      sidebarServices: SIDEBAR_SERVICE_SLUGS.map((slug) =>
        keyed({
          _type: "reference",
          _ref: `service-${slug}-${locale}`,
          _weak: true,
        }),
      ),
      sidebarWeddings: SIDEBAR_WEDDING_SLUGS.map((slug) =>
        keyed({
          _type: "reference",
          _ref: `portfolio-${slug}-${locale}`,
          _weak: true,
        }),
      ),
    },
    cta: {
      scriptLine: CTA[locale].scriptLine,
      headline: CTA[locale].headline,
      body: CTA[locale].body,
      ctaLabel: CTA[locale].ctaLabel,
      ctaHref: CTA_HREF,
    },
  };
}

async function run() {
  console.log(`Seeding multiculturalPage in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  for (const locale of locales) {
    tx.createOrReplace({
      _id: docId(locale),
      _type: "multiculturalPage",
      language: locale,
      ...buildDoc(locale),
    });
  }

  tx.createOrReplace({
    _id: "multiculturalPage-metadata",
    _type: "translation.metadata",
    schemaTypes: ["multiculturalPage"],
    translations: locales.map((locale) => ({
      _key: locale,
      language: locale,
      value: { _type: "reference", _ref: docId(locale), _weak: true },
    })),
  });

  // Shared media stub — created only if absent so re-runs never clobber images.
  tx.createIfNotExists({
    _id: "multiculturalPageMedia",
    _type: "multiculturalPageMedia",
    hero: {
      image: { _type: "image", alt: "An Indian wedding mandap at Cap Cana" },
    },
    relatedArticles: RELATED_META.map((m) =>
      keyed({ key: m.imageKey, image: { _type: "image", alt: m.alt } }),
    ),
  });

  await tx.commit();
  console.log(
    `✓ Seeded ${locales.length} multiculturalPage docs + media stub + translation metadata.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
