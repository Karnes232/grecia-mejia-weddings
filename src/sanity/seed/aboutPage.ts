/**
 * Seed the `aboutPage` singleton across all six locales (+ the shared
 * `aboutPageMedia` stub).
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:about
 *
 * Idempotent — deterministic IDs + `createOrReplace` for the localized text
 * docs. The media doc is created with `createIfNotExists` so re-running never
 * clobbers images an editor has already uploaded; only the team `key` slots
 * and `alt` defaults are pre-seeded.
 *
 * Content mirrors the design handoff (`pages/about.jsx`). Proper nouns (team
 * names, publication brands, contact links) are kept locale-invariant via
 * shared constants; everything editorial is fully translated.
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

const docId = (locale: Locale) => `aboutPage-${locale}`;

const keyed = <T extends object>(value: T) => ({
  _key: randomUUID(),
  ...value,
});

// Portable Text helper: convert {style, text} entries into PT blocks.
type Block = { style: string; text: string };
const ptBlocks = (blocks: Block[]) =>
  blocks.map(({ style, text }) => ({
    _type: "block",
    _key: randomUUID(),
    style,
    markDefs: [],
    children: [{ _type: "span", _key: randomUUID(), text, marks: [] }],
  }));

// ── Locale-invariant constants ───────────────────────────────────────────
const TEAM_MEMBERS = [
  { name: "Grecia Mejía", imageKey: "member-1" },
  { name: "Eduarda Conti", imageKey: "member-2" },
  { name: "Aanya Verma", imageKey: "member-3" },
  { name: "Maria Pérez", imageKey: "member-4" },
] as const;

const STAT_VALUES = ["15", "240+", "23", "9", "14"] as const;

const TIMELINE_YEARS = [
  "2010",
  "2011",
  "2014",
  "2016",
  "2018",
  "2019",
  "2020",
  "2022",
  "2024",
  "2026",
] as const;

const PUBLICATIONS = [
  "Vogue Weddings",
  "Harper's Bazaar",
  "Architectural Digest",
  "Brides",
  "Town & Country",
  "Tatler",
  "Condé Nast Traveler",
  "Departures",
] as const;

const AWARD_META = [
  { year: "2024", publication: "Caribbean Bridal Awards" },
  { year: "2023", publication: "Harper's Bazaar Brides" },
  { year: "2022", publication: "Vogue Weddings India" },
  { year: "2021", publication: "Caribbean Bridal Awards" },
  { year: "2019", publication: "Condé Nast Traveler" },
  { year: "2018", publication: "Vogue Weddings Italy" },
] as const;

const CONTACT_VALUES = {
  email: { value: "hello@greciamejia.com", href: "mailto:hello@greciamejia.com" },
  phone: { value: "+1 829 000 0000", href: "tel:+18290000000" },
  whatsapp: { value: "+1 829 000 0000", href: "https://wa.me/18290000000" },
  instagram: {
    value: "@greciamejiaweddings",
    href: "https://instagram.com/greciamejiaweddings",
  },
} as const;

// ── Hero ───────────────────────────────────────────────────────────────
type HeroCopy = {
  eyebrow: string;
  scriptOverline: string;
  headline: string;
  deck: string;
  signedName: string;
  signedRole: string;
  captionLeft: string;
  captionRight: string;
};

const HERO: Record<Locale, HeroCopy> = {
  en: {
    eyebrow: "The House · About",
    scriptOverline: "A note from",
    headline: "Grecia *Mejía.*",
    deck: "Founder, lead curator, and the person who writes back to every couple. Fifteen years of weddings, fourteen calendar slots a year, and a small studio that refuses to grow past what it can hold.",
    signedName: "Grecia",
    signedRole: "Founder & Lead Curator · Punta Cana",
    captionLeft: "Photographed by L. Rossi",
    captionRight: "Studio, Cap Cana · 2025",
  },
  es: {
    eyebrow: "La Casa · Sobre nosotros",
    scriptOverline: "Unas palabras de",
    headline: "Grecia *Mejía.*",
    deck: "Fundadora, curadora principal y la persona que responde a cada pareja. Quince años de bodas, catorce fechas al año en el calendario y un pequeño atelier que se niega a crecer más allá de lo que puede sostener.",
    signedName: "Grecia",
    signedRole: "Fundadora y Curadora Principal · Punta Cana",
    captionLeft: "Fotografiada por L. Rossi",
    captionRight: "Estudio, Cap Cana · 2025",
  },
  fr: {
    eyebrow: "La Maison · À propos",
    scriptOverline: "Un mot de",
    headline: "Grecia *Mejía.*",
    deck: "Fondatrice, curatrice principale, et la personne qui répond elle-même à chaque couple. Quinze ans de mariages, quatorze dates par an au calendrier, et un petit atelier qui refuse de grandir au-delà de ce qu'il peut porter.",
    signedName: "Grecia",
    signedRole: "Fondatrice et Curatrice principale · Punta Cana",
    captionLeft: "Photographiée par L. Rossi",
    captionRight: "Atelier, Cap Cana · 2025",
  },
  pt: {
    eyebrow: "A Casa · Sobre",
    scriptOverline: "Uma nota de",
    headline: "Grecia *Mejía.*",
    deck: "Fundadora, curadora principal e a pessoa que responde a cada casal. Quinze anos de casamentos, catorze datas por ano no calendário e um pequeno ateliê que se recusa a crescer além do que consegue sustentar.",
    signedName: "Grecia",
    signedRole: "Fundadora e Curadora Principal · Punta Cana",
    captionLeft: "Fotografada por L. Rossi",
    captionRight: "Ateliê, Cap Cana · 2025",
  },
  de: {
    eyebrow: "Das Haus · Über uns",
    scriptOverline: "Ein Wort von",
    headline: "Grecia *Mejía.*",
    deck: "Gründerin, leitende Kuratorin und die Person, die jedem Paar persönlich antwortet. Fünfzehn Jahre Hochzeiten, vierzehn Termine im Jahr im Kalender und ein kleines Atelier, das sich weigert, über das hinauszuwachsen, was es tragen kann.",
    signedName: "Grecia",
    signedRole: "Gründerin & leitende Kuratorin · Punta Cana",
    captionLeft: "Fotografiert von L. Rossi",
    captionRight: "Atelier, Cap Cana · 2025",
  },
  it: {
    eyebrow: "La Casa · Chi siamo",
    scriptOverline: "Una nota di",
    headline: "Grecia *Mejía.*",
    deck: "Fondatrice, curatrice principale e la persona che risponde personalmente a ogni coppia. Quindici anni di matrimoni, quattordici date all'anno in calendario e un piccolo atelier che si rifiuta di crescere oltre ciò che può sostenere.",
    signedName: "Grecia",
    signedRole: "Fondatrice e Curatrice principale · Punta Cana",
    captionLeft: "Fotografata da L. Rossi",
    captionRight: "Atelier, Cap Cana · 2025",
  },
};

// ── Founder story — meta ───────────────────────────────────────────────
type StoryMeta = {
  sideLabel: string;
  sideNote: string;
  headline: string;
  figureEmphasis: string;
  figureNote: string;
  signoffName: string;
  signoffPlace: string;
};

const STORY_META: Record<Locale, StoryMeta> = {
  en: {
    sideLabel: "A working biography",
    sideNote:
      "Written by Grecia, edited for length. Last revised January 2026, after the studio's fifteenth year.",
    headline: "I did not set out to start a *studio.*",
    figureEmphasis: "Bávaro Beach, March 2014",
    figureNote: "The Mendoza-Rivera wedding · 220 guests",
    signoffName: "Grecia",
    signoffPlace: "Punta Cana, January 2026",
  },
  es: {
    sideLabel: "Una biografía de trabajo",
    sideNote:
      "Escrito por Grecia, editado por extensión. Última revisión en enero de 2026, tras el decimoquinto año del atelier.",
    headline: "No me propuse fundar un *atelier.*",
    figureEmphasis: "Playa Bávaro, marzo de 2014",
    figureNote: "La boda Mendoza-Rivera · 220 invitados",
    signoffName: "Grecia",
    signoffPlace: "Punta Cana, enero de 2026",
  },
  fr: {
    sideLabel: "Une biographie de travail",
    sideNote:
      "Écrit par Grecia, abrégé. Dernière révision en janvier 2026, après la quinzième année de l'atelier.",
    headline: "Je n'avais pas prévu de fonder un *atelier.*",
    figureEmphasis: "Plage de Bávaro, mars 2014",
    figureNote: "Le mariage Mendoza-Rivera · 220 invités",
    signoffName: "Grecia",
    signoffPlace: "Punta Cana, janvier 2026",
  },
  pt: {
    sideLabel: "Uma biografia de trabalho",
    sideNote:
      "Escrito por Grecia, editado por questões de extensão. Última revisão em janeiro de 2026, após o décimo quinto ano do ateliê.",
    headline: "Eu não pretendia fundar um *ateliê.*",
    figureEmphasis: "Praia de Bávaro, março de 2014",
    figureNote: "O casamento Mendoza-Rivera · 220 convidados",
    signoffName: "Grecia",
    signoffPlace: "Punta Cana, janeiro de 2026",
  },
  de: {
    sideLabel: "Eine Arbeitsbiografie",
    sideNote:
      "Verfasst von Grecia, aus Platzgründen gekürzt. Zuletzt überarbeitet im Januar 2026, nach dem fünfzehnten Jahr des Ateliers.",
    headline: "Ich wollte gar kein *Atelier* gründen.",
    figureEmphasis: "Bávaro Beach, März 2014",
    figureNote: "Die Hochzeit Mendoza-Rivera · 220 Gäste",
    signoffName: "Grecia",
    signoffPlace: "Punta Cana, Januar 2026",
  },
  it: {
    sideLabel: "Una biografia di lavoro",
    sideNote:
      "Scritto da Grecia, ridotto per ragioni di spazio. Ultima revisione a gennaio 2026, dopo il quindicesimo anno dell'atelier.",
    headline: "Non avevo intenzione di fondare un *atelier.*",
    figureEmphasis: "Spiaggia di Bávaro, marzo 2014",
    figureNote: "Il matrimonio Mendoza-Rivera · 220 invitati",
    signoffName: "Grecia",
    signoffPlace: "Punta Cana, gennaio 2026",
  },
};

// ── Founder story — body (Portable Text) ───────────────────────────────
const STORY_BODY: Record<Locale, Block[]> = {
  en: [
    {
      style: "lede",
      text: "In 2010 I was twenty-six, living in Punta Cana, and helping a friend host her wedding — a Catholic ceremony for one hundred and forty guests, planned over six months out of a small apartment in Bávaro. I had no business doing it. I did it anyway.",
    },
    {
      style: "normal",
      text: "That wedding led to four more in the following year. By the time I formalised the studio in 2011, I had ten under my belt and a notebook of mistakes I never wanted to repeat — most of them about pacing, family choreography, and the things that resorts will and won't say honestly when you ask them about capacity.",
    },
    {
      style: "normal",
      text: "For the first three years I planned everything alone. Catholic weddings on the Dominican coast, mostly — sometimes one hundred guests, sometimes four hundred, almost always with a Catholic Mass at Iglesia Nuestra Señora and a reception somewhere on the Bávaro stretch.",
    },
    {
      style: "normal",
      text: "The first Hindu wedding came in 2014. A bride from Mumbai, a groom from Toronto, three hundred and twelve guests, and a four-day arc I had read about in books but never actually planned. I asked the bride if I could bring in a pandit from Mumbai and a choreographer from Delhi, fly them in for the week, and treat the whole thing as a kind of apprenticeship.",
    },
    {
      style: "normal",
      text: "She said yes. That wedding became the studio. Within five years half of our calendar was multicultural — Indian, Jewish, Arab, interfaith. I learned how to plan a mehndi night, how to coordinate a kosher kitchen in the Caribbean, how to hold a chuppah ceremony with the bride's grandmother seated under it.",
    },
    {
      style: "blockquote",
      text: "I learned how to hold a chuppah ceremony with the bride's grandmother seated under it. That is the work.",
    },
    {
      style: "normal",
      text: "Today the studio plans fourteen weddings a year across three continents. We have a small team — six of us in Punta Cana, three in Milan, two consultants in London — and a working register of specialists we have worked with for years.",
    },
    {
      style: "normal",
      text: "I write back to every couple personally. I am on site for every event of every day of every wedding. Nothing is delegated past the studio, and the calendar is small on purpose. There are larger planners. They have my respect; but our brief is different.",
    },
    {
      style: "normal",
      text: "My promise to the couples I work with is the same promise I made the first bride in 2010: I will hold this. I will be there. I will not improvise what I cannot hold honestly. And if I cannot hold it, I will say so — and find you someone who can.",
    },
  ],
  es: [
    {
      style: "lede",
      text: "En 2010 tenía veintiséis años, vivía en Punta Cana y ayudaba a una amiga a celebrar su boda: una ceremonia católica para ciento cuarenta invitados, planificada durante seis meses desde un pequeño apartamento en Bávaro. No tenía por qué hacerlo. Lo hice de todos modos.",
    },
    {
      style: "normal",
      text: "Esa boda dio paso a cuatro más al año siguiente. Cuando formalicé el atelier en 2011, ya llevaba diez a mis espaldas y un cuaderno de errores que no quería repetir jamás, la mayoría sobre el ritmo, la coreografía familiar y las cosas que los resorts dicen y no dicen con honestidad cuando les preguntas por la capacidad.",
    },
    {
      style: "normal",
      text: "Durante los primeros tres años lo planifiqué todo sola. Bodas católicas en la costa dominicana, en su mayoría: a veces cien invitados, a veces cuatrocientos, casi siempre con una misa católica en la Iglesia Nuestra Señora y una recepción en algún punto del litoral de Bávaro.",
    },
    {
      style: "normal",
      text: "La primera boda hindú llegó en 2014. Una novia de Bombay, un novio de Toronto, trescientos doce invitados y un arco de cuatro días sobre el que había leído en libros pero que nunca había planificado de verdad. Le pregunté a la novia si podía traer a un pandit de Bombay y a un coreógrafo de Delhi, traerlos durante la semana y tratar todo aquello como una especie de aprendizaje.",
    },
    {
      style: "normal",
      text: "Dijo que sí. Esa boda se convirtió en el atelier. En cinco años, la mitad de nuestro calendario era multicultural: indio, judío, árabe, interreligioso. Aprendí a planificar una noche de mehndi, a coordinar una cocina kosher en el Caribe, a sostener una ceremonia bajo la chupá con la abuela de la novia sentada bajo ella.",
    },
    {
      style: "blockquote",
      text: "Aprendí a sostener una ceremonia bajo la chupá con la abuela de la novia sentada bajo ella. Ese es el trabajo.",
    },
    {
      style: "normal",
      text: "Hoy el atelier planifica catorce bodas al año en tres continentes. Somos un equipo pequeño —seis en Punta Cana, tres en Milán, dos asesores en Londres— y un registro activo de especialistas con quienes llevamos años trabajando.",
    },
    {
      style: "normal",
      text: "Respondo personalmente a cada pareja. Estoy presente en cada evento de cada día de cada boda. Nada se delega más allá del atelier, y el calendario es pequeño a propósito. Hay planificadores más grandes. Les tengo respeto; pero nuestro encargo es distinto.",
    },
    {
      style: "normal",
      text: "Mi promesa a las parejas con las que trabajo es la misma que le hice a la primera novia en 2010: sostendré esto. Estaré ahí. No improvisaré lo que no pueda sostener con honestidad. Y si no puedo sostenerlo, lo diré, y te encontraré a alguien que pueda.",
    },
  ],
  fr: [
    {
      style: "lede",
      text: "En 2010, j'avais vingt-six ans, je vivais à Punta Cana et j'aidais une amie à organiser son mariage — une cérémonie catholique pour cent quarante invités, préparée pendant six mois depuis un petit appartement de Bávaro. Rien ne m'y destinait. Je l'ai fait quand même.",
    },
    {
      style: "normal",
      text: "Ce mariage en a entraîné quatre autres l'année suivante. Lorsque j'ai officialisé l'atelier en 2011, j'en avais déjà dix à mon actif et un carnet d'erreurs que je ne voulais jamais répéter — la plupart sur le rythme, la chorégraphie familiale et ce que les resorts disent, ou taisent, honnêtement quand on les interroge sur leur capacité.",
    },
    {
      style: "normal",
      text: "Pendant les trois premières années, j'ai tout organisé seule. Des mariages catholiques sur la côte dominicaine, surtout — parfois cent invités, parfois quatre cents, presque toujours avec une messe catholique à l'Iglesia Nuestra Señora et une réception quelque part le long de la baie de Bávaro.",
    },
    {
      style: "normal",
      text: "Le premier mariage hindou est arrivé en 2014. Une mariée de Mumbai, un marié de Toronto, trois cent douze invités et une trame de quatre jours dont j'avais lu la description dans des livres sans jamais l'avoir vraiment orchestrée. J'ai demandé à la mariée si je pouvais faire venir un pandit de Mumbai et un chorégraphe de Delhi, les faire venir pour la semaine et traiter le tout comme une sorte d'apprentissage.",
    },
    {
      style: "normal",
      text: "Elle a dit oui. Ce mariage est devenu l'atelier. En cinq ans, la moitié de notre calendrier était multiculturelle — indienne, juive, arabe, interconfessionnelle. J'ai appris à organiser une soirée mehndi, à coordonner une cuisine casher dans les Caraïbes, à tenir une cérémonie sous la houppa avec la grand-mère de la mariée assise en dessous.",
    },
    {
      style: "blockquote",
      text: "J'ai appris à tenir une cérémonie sous la houppa avec la grand-mère de la mariée assise en dessous. C'est cela, le travail.",
    },
    {
      style: "normal",
      text: "Aujourd'hui, l'atelier organise quatorze mariages par an sur trois continents. Nous sommes une petite équipe — six à Punta Cana, trois à Milan, deux consultants à Londres — et un registre actif de spécialistes avec qui nous travaillons depuis des années.",
    },
    {
      style: "normal",
      text: "Je réponds personnellement à chaque couple. Je suis présente à chaque événement de chaque journée de chaque mariage. Rien n'est délégué au-delà de l'atelier, et le calendrier est restreint à dessein. Il existe de plus grands organisateurs. Je les respecte ; mais notre mission est différente.",
    },
    {
      style: "normal",
      text: "Ma promesse aux couples avec qui je travaille est la même que celle faite à la première mariée en 2010 : je porterai cela. Je serai là. Je n'improviserai pas ce que je ne peux pas porter honnêtement. Et si je ne peux pas le porter, je le dirai — et je vous trouverai quelqu'un qui le peut.",
    },
  ],
  pt: [
    {
      style: "lede",
      text: "Em 2010 eu tinha vinte e seis anos, vivia em Punta Cana e ajudava uma amiga a realizar o seu casamento — uma cerimónia católica para cento e quarenta convidados, planeada ao longo de seis meses a partir de um pequeno apartamento em Bávaro. Não tinha nada que estar a fazê-lo. Fi-lo de qualquer forma.",
    },
    {
      style: "normal",
      text: "Esse casamento levou a mais quatro no ano seguinte. Quando formalizei o ateliê em 2011, já tinha dez no currículo e um caderno de erros que nunca quis repetir — a maioria sobre o ritmo, a coreografia familiar e as coisas que os resorts dizem, e não dizem, com honestidade quando se pergunta pela capacidade.",
    },
    {
      style: "normal",
      text: "Nos primeiros três anos planeei tudo sozinha. Casamentos católicos na costa dominicana, sobretudo — por vezes cem convidados, por vezes quatrocentos, quase sempre com uma missa católica na Iglesia Nuestra Señora e uma receção algures ao longo da faixa de Bávaro.",
    },
    {
      style: "normal",
      text: "O primeiro casamento hindu chegou em 2014. Uma noiva de Mumbai, um noivo de Toronto, trezentos e doze convidados e um arco de quatro dias sobre o qual tinha lido em livros mas que nunca tinha realmente planeado. Perguntei à noiva se podia trazer um pandit de Mumbai e um coreógrafo de Deli, trazê-los durante a semana e tratar tudo aquilo como uma espécie de aprendizagem.",
    },
    {
      style: "normal",
      text: "Ela disse que sim. Esse casamento tornou-se o ateliê. Em cinco anos, metade do nosso calendário era multicultural — indiano, judaico, árabe, inter-religioso. Aprendi a planear uma noite de mehndi, a coordenar uma cozinha kosher nas Caraíbas, a conduzir uma cerimónia sob a chupá com a avó da noiva sentada por baixo dela.",
    },
    {
      style: "blockquote",
      text: "Aprendi a conduzir uma cerimónia sob a chupá com a avó da noiva sentada por baixo dela. É esse o trabalho.",
    },
    {
      style: "normal",
      text: "Hoje o ateliê planeia catorze casamentos por ano em três continentes. Somos uma equipa pequena — seis em Punta Cana, três em Milão, dois consultores em Londres — e um registo ativo de especialistas com quem trabalhamos há anos.",
    },
    {
      style: "normal",
      text: "Respondo pessoalmente a cada casal. Estou presente em cada evento de cada dia de cada casamento. Nada é delegado para além do ateliê, e o calendário é pequeno de propósito. Há planeadores maiores. Têm o meu respeito; mas o nosso propósito é diferente.",
    },
    {
      style: "normal",
      text: "A minha promessa aos casais com quem trabalho é a mesma que fiz à primeira noiva em 2010: vou sustentar isto. Vou estar lá. Não improvisarei aquilo que não consigo sustentar com honestidade. E se não conseguir sustentá-lo, di-lo-ei — e encontrar-lhe-ei alguém que consiga.",
    },
  ],
  de: [
    {
      style: "lede",
      text: "2010 war ich sechsundzwanzig, lebte in Punta Cana und half einer Freundin, ihre Hochzeit auszurichten — eine katholische Zeremonie für hundertvierzig Gäste, über sechs Monate hinweg aus einer kleinen Wohnung in Bávaro geplant. Ich hatte keinerlei Veranlassung dazu. Ich tat es trotzdem.",
    },
    {
      style: "normal",
      text: "Aus dieser Hochzeit wurden im folgenden Jahr vier weitere. Als ich das Atelier 2011 formell gründete, hatte ich bereits zehn hinter mir und ein Notizbuch voller Fehler, die ich nie wiederholen wollte — die meisten betrafen das Timing, die familiäre Choreografie und das, was Resorts ehrlich sagen und verschweigen, wenn man sie nach ihrer Kapazität fragt.",
    },
    {
      style: "normal",
      text: "In den ersten drei Jahren plante ich alles allein. Überwiegend katholische Hochzeiten an der dominikanischen Küste — mal hundert Gäste, mal vierhundert, fast immer mit einer katholischen Messe in der Iglesia Nuestra Señora und einem Empfang irgendwo am Strand von Bávaro.",
    },
    {
      style: "normal",
      text: "Die erste hinduistische Hochzeit kam 2014. Eine Braut aus Mumbai, ein Bräutigam aus Toronto, dreihundertzwölf Gäste und ein viertägiger Bogen, über den ich in Büchern gelesen, den ich aber nie wirklich geplant hatte. Ich fragte die Braut, ob ich einen Pandit aus Mumbai und einen Choreografen aus Delhi einfliegen, sie für die Woche herholen und das Ganze als eine Art Lehrzeit behandeln dürfe.",
    },
    {
      style: "normal",
      text: "Sie sagte ja. Diese Hochzeit wurde zum Atelier. Innerhalb von fünf Jahren war die Hälfte unseres Kalenders multikulturell — indisch, jüdisch, arabisch, interreligiös. Ich lernte, eine Mehndi-Nacht zu planen, eine koschere Küche in der Karibik zu koordinieren, eine Chuppa-Zeremonie zu halten, unter der die Großmutter der Braut saß.",
    },
    {
      style: "blockquote",
      text: "Ich lernte, eine Chuppa-Zeremonie zu halten, unter der die Großmutter der Braut saß. Das ist die Arbeit.",
    },
    {
      style: "normal",
      text: "Heute plant das Atelier vierzehn Hochzeiten im Jahr auf drei Kontinenten. Wir sind ein kleines Team — sechs in Punta Cana, drei in Mailand, zwei Berater in London — und ein lebendiges Verzeichnis von Spezialisten, mit denen wir seit Jahren arbeiten.",
    },
    {
      style: "normal",
      text: "Ich antworte jedem Paar persönlich. Ich bin bei jedem Programmpunkt jedes Tages jeder Hochzeit vor Ort. Nichts wird über das Atelier hinaus delegiert, und der Kalender ist mit Absicht klein. Es gibt größere Planer. Sie haben meinen Respekt; doch unser Auftrag ist ein anderer.",
    },
    {
      style: "normal",
      text: "Mein Versprechen an die Paare, mit denen ich arbeite, ist dasselbe, das ich der ersten Braut 2010 gab: Ich werde das tragen. Ich werde da sein. Ich werde nicht improvisieren, was ich nicht ehrlich tragen kann. Und wenn ich es nicht tragen kann, werde ich es sagen — und Ihnen jemanden finden, der es kann.",
    },
  ],
  it: [
    {
      style: "lede",
      text: "Nel 2010 avevo ventisei anni, vivevo a Punta Cana e aiutavo un'amica a organizzare il suo matrimonio — una cerimonia cattolica per centoquaranta invitati, preparata in sei mesi da un piccolo appartamento a Bávaro. Non avevo alcun titolo per farlo. L'ho fatto comunque.",
    },
    {
      style: "normal",
      text: "Quel matrimonio ne portò altri quattro l'anno successivo. Quando formalizzai l'atelier nel 2011, ne avevo già dieci alle spalle e un quaderno di errori che non volevo ripetere mai più — per lo più sul ritmo, sulla coreografia familiare e su ciò che i resort dicono, e tacciono, onestamente quando li interroghi sulla capienza.",
    },
    {
      style: "normal",
      text: "Per i primi tre anni ho organizzato tutto da sola. Matrimoni cattolici sulla costa dominicana, soprattutto — a volte cento invitati, a volte quattrocento, quasi sempre con una messa cattolica alla Iglesia Nuestra Señora e un ricevimento da qualche parte lungo il litorale di Bávaro.",
    },
    {
      style: "normal",
      text: "Il primo matrimonio indù arrivò nel 2014. Una sposa di Mumbai, uno sposo di Toronto, trecentododici invitati e un arco di quattro giorni di cui avevo letto nei libri ma che non avevo mai davvero organizzato. Chiesi alla sposa se potevo far venire un pandit da Mumbai e un coreografo da Delhi, portarli per la settimana e trattare il tutto come una sorta di apprendistato.",
    },
    {
      style: "normal",
      text: "Disse di sì. Quel matrimonio divenne l'atelier. Nel giro di cinque anni metà del nostro calendario era multiculturale — indiano, ebraico, arabo, interreligioso. Imparai a organizzare una serata mehndi, a coordinare una cucina kosher ai Caraibi, a tenere una cerimonia sotto la chuppah con la nonna della sposa seduta sotto di essa.",
    },
    {
      style: "blockquote",
      text: "Imparai a tenere una cerimonia sotto la chuppah con la nonna della sposa seduta sotto di essa. È questo il lavoro.",
    },
    {
      style: "normal",
      text: "Oggi l'atelier organizza quattordici matrimoni all'anno in tre continenti. Siamo una squadra piccola — sei a Punta Cana, tre a Milano, due consulenti a Londra — e un registro attivo di specialisti con cui lavoriamo da anni.",
    },
    {
      style: "normal",
      text: "Rispondo personalmente a ogni coppia. Sono presente a ogni evento di ogni giorno di ogni matrimonio. Nulla viene delegato oltre l'atelier, e il calendario è piccolo di proposito. Esistono organizzatori più grandi. Hanno il mio rispetto; ma il nostro compito è diverso.",
    },
    {
      style: "normal",
      text: "La mia promessa alle coppie con cui lavoro è la stessa che feci alla prima sposa nel 2010: lo sosterrò. Ci sarò. Non improvviserò ciò che non posso sostenere onestamente. E se non posso sostenerlo, lo dirò — e vi troverò qualcuno che può.",
    },
  ],
};

// ── Manifesto ──────────────────────────────────────────────────────────
type Tenet = { title: string; body: string };
type ManifestoCopy = {
  label: string;
  headline: string;
  intro: string;
  tenets: Tenet[];
};

const MANIFESTO: Record<Locale, ManifestoCopy> = {
  en: {
    label: "A manifesto",
    headline: "*Five* things we hold true.",
    intro:
      "The principles the studio refuses to compromise on. We have walked away from weddings that asked us to. We will again.",
    tenets: [
      {
        title: "Tradition is structure, not decoration",
        body: "Cultural traditions hold the architecture of a wedding. We will not stylise or shorten a ceremony for the sake of pacing — the pacing is already there, and we trust it.",
      },
      {
        title: "The calendar stays small",
        body: "Fourteen weddings a year. Every wedding planned eighteen-to-twenty-four months in advance, with Grecia personally on site for every day of every event. The calendar grows when the work grows, not the marketing.",
      },
      {
        title: "No improvisation, no pretending",
        body: "We will not plan a tradition or wedding type we cannot hold honestly. If we are out of our depth, we say so — and either find the specialist together, or refer you to a planner who knows it better.",
      },
      {
        title: "Specialists, by name",
        body: "Every officiant, caterer, decorator and musician in our register is one we have worked with by name, for years. We do not sub-contract; we collaborate. The same names hold every wedding in their category.",
      },
      {
        title: "The work is the wedding",
        body: "A wedding is not staged for an audience; it is hosted for a family. We do not chase Instagram aesthetics or magazine features. If the wedding works, the press follows on its own. So far it always has.",
      },
    ],
  },
  es: {
    label: "Un manifiesto",
    headline: "*Cinco* cosas que defendemos.",
    intro:
      "Los principios que el atelier se niega a comprometer. Hemos renunciado a bodas que nos lo pidieron. Volveremos a hacerlo.",
    tenets: [
      {
        title: "La tradición es estructura, no decoración",
        body: "Las tradiciones culturales sostienen la arquitectura de una boda. No estilizaremos ni acortaremos una ceremonia en aras del ritmo: el ritmo ya está ahí, y confiamos en él.",
      },
      {
        title: "El calendario sigue siendo pequeño",
        body: "Catorce bodas al año. Cada boda planificada con dieciocho a veinticuatro meses de antelación, con Grecia presente en persona cada día de cada evento. El calendario crece cuando crece el trabajo, no el marketing.",
      },
      {
        title: "Sin improvisación, sin fingir",
        body: "No planificaremos una tradición o un tipo de boda que no podamos sostener con honestidad. Si nos supera, lo decimos, y encontramos juntos al especialista o te derivamos a un planificador que la conozca mejor.",
      },
      {
        title: "Especialistas, por su nombre",
        body: "Cada oficiante, catering, decorador y músico de nuestro registro es alguien con quien hemos trabajado por su nombre, durante años. No subcontratamos; colaboramos. Los mismos nombres sostienen cada boda en su categoría.",
      },
      {
        title: "El trabajo es la boda",
        body: "Una boda no se monta para un público; se celebra para una familia. No perseguimos la estética de Instagram ni las apariciones en revistas. Si la boda funciona, la prensa llega sola. Hasta ahora siempre lo ha hecho.",
      },
    ],
  },
  fr: {
    label: "Un manifeste",
    headline: "*Cinq* principes que nous défendons.",
    intro:
      "Les principes sur lesquels l'atelier refuse de transiger. Nous avons renoncé à des mariages qui nous le demandaient. Nous le referons.",
    tenets: [
      {
        title: "La tradition est une structure, non un décor",
        body: "Les traditions culturelles portent l'architecture d'un mariage. Nous ne stylisons ni n'abrégeons une cérémonie au nom du rythme : le rythme est déjà là, et nous lui faisons confiance.",
      },
      {
        title: "Le calendrier reste restreint",
        body: "Quatorze mariages par an. Chaque mariage préparé dix-huit à vingt-quatre mois à l'avance, avec Grecia présente en personne chaque jour de chaque événement. Le calendrier grandit quand le travail grandit, pas le marketing.",
      },
      {
        title: "Pas d'improvisation, pas de faux-semblant",
        body: "Nous n'organiserons pas une tradition ou un type de mariage que nous ne pouvons porter honnêtement. Si cela nous dépasse, nous le disons — et nous trouvons le spécialiste ensemble, ou nous vous orientons vers un organisateur qui le connaît mieux.",
      },
      {
        title: "Des spécialistes, nommément",
        body: "Chaque officiant, traiteur, décorateur et musicien de notre registre est quelqu'un avec qui nous travaillons nommément, depuis des années. Nous ne sous-traitons pas ; nous collaborons. Les mêmes noms portent chaque mariage dans leur catégorie.",
      },
      {
        title: "Le travail, c'est le mariage",
        body: "Un mariage ne se met pas en scène pour un public ; il s'organise pour une famille. Nous ne courons pas après l'esthétique d'Instagram ni les pages des magazines. Si le mariage est réussi, la presse suit d'elle-même. Jusqu'ici, c'est toujours arrivé.",
      },
    ],
  },
  pt: {
    label: "Um manifesto",
    headline: "*Cinco* princípios que defendemos.",
    intro:
      "Os princípios em que o ateliê se recusa a transigir. Já recusámos casamentos que no-lo pediram. Voltaremos a fazê-lo.",
    tenets: [
      {
        title: "A tradição é estrutura, não decoração",
        body: "As tradições culturais sustentam a arquitetura de um casamento. Não estilizamos nem encurtamos uma cerimónia em nome do ritmo: o ritmo já lá está, e confiamos nele.",
      },
      {
        title: "O calendário permanece pequeno",
        body: "Catorze casamentos por ano. Cada casamento planeado com dezoito a vinte e quatro meses de antecedência, com Grecia presente em pessoa em cada dia de cada evento. O calendário cresce quando o trabalho cresce, não o marketing.",
      },
      {
        title: "Sem improviso, sem fingimento",
        body: "Não planearemos uma tradição ou um tipo de casamento que não consigamos sustentar com honestidade. Se nos ultrapassa, dizemo-lo — e encontramos juntos o especialista, ou encaminhamo-lo para um planeador que o conheça melhor.",
      },
      {
        title: "Especialistas, pelo nome",
        body: "Cada celebrante, catering, decorador e músico do nosso registo é alguém com quem trabalhamos pelo nome, há anos. Não subcontratamos; colaboramos. Os mesmos nomes sustentam cada casamento na sua categoria.",
      },
      {
        title: "O trabalho é o casamento",
        body: "Um casamento não se encena para uma plateia; realiza-se para uma família. Não perseguimos a estética do Instagram nem as páginas das revistas. Se o casamento resulta, a imprensa segue por si. Até agora, sempre seguiu.",
      },
    ],
  },
  de: {
    label: "Ein Manifest",
    headline: "*Fünf* feste Überzeugungen.",
    intro:
      "Die Grundsätze, bei denen das Atelier keine Kompromisse eingeht. Wir haben Hochzeiten abgelehnt, die uns dazu drängten. Wir werden es wieder tun.",
    tenets: [
      {
        title: "Tradition ist Struktur, nicht Dekoration",
        body: "Kulturelle Traditionen tragen die Architektur einer Hochzeit. Wir stilisieren oder kürzen eine Zeremonie nicht um des Tempos willen — das Tempo ist bereits da, und wir vertrauen ihm.",
      },
      {
        title: "Der Kalender bleibt klein",
        body: "Vierzehn Hochzeiten im Jahr. Jede Hochzeit achtzehn bis vierundzwanzig Monate im Voraus geplant, mit Grecia persönlich vor Ort an jedem Tag jedes Ereignisses. Der Kalender wächst, wenn die Arbeit wächst, nicht das Marketing.",
      },
      {
        title: "Keine Improvisation, kein Vortäuschen",
        body: "Wir planen keine Tradition und keinen Hochzeitstyp, den wir nicht ehrlich tragen können. Wenn es uns übersteigt, sagen wir es — und finden den Spezialisten gemeinsam oder verweisen Sie an einen Planer, der es besser kennt.",
      },
      {
        title: "Spezialisten, mit Namen",
        body: "Jeder Zelebrant, Caterer, Dekorateur und Musiker in unserem Verzeichnis ist jemand, mit dem wir namentlich seit Jahren arbeiten. Wir vergeben keine Unteraufträge; wir arbeiten zusammen. Dieselben Namen tragen jede Hochzeit in ihrer Kategorie.",
      },
      {
        title: "Die Arbeit ist die Hochzeit",
        body: "Eine Hochzeit wird nicht für ein Publikum inszeniert; sie wird für eine Familie ausgerichtet. Wir jagen weder der Instagram-Ästhetik noch Magazinstrecken hinterher. Wenn die Hochzeit gelingt, folgt die Presse von allein. Bisher war es immer so.",
      },
    ],
  },
  it: {
    label: "Un manifesto",
    headline: "*Cinque* principi che difendiamo.",
    intro:
      "I principi su cui l'atelier si rifiuta di scendere a compromessi. Abbiamo rinunciato a matrimoni che ce lo chiedevano. Lo faremo di nuovo.",
    tenets: [
      {
        title: "La tradizione è struttura, non decorazione",
        body: "Le tradizioni culturali reggono l'architettura di un matrimonio. Non stilizziamo né accorciamo una cerimonia in nome del ritmo: il ritmo è già lì, e ci fidiamo di esso.",
      },
      {
        title: "Il calendario resta piccolo",
        body: "Quattordici matrimoni all'anno. Ogni matrimonio pianificato con diciotto-ventiquattro mesi di anticipo, con Grecia presente di persona in ogni giorno di ogni evento. Il calendario cresce quando cresce il lavoro, non il marketing.",
      },
      {
        title: "Nessuna improvvisazione, nessuna finzione",
        body: "Non organizzeremo una tradizione o un tipo di matrimonio che non possiamo sostenere onestamente. Se ci supera, lo diciamo — e troviamo insieme lo specialista, oppure vi indirizziamo a un organizzatore che lo conosce meglio.",
      },
      {
        title: "Specialisti, per nome",
        body: "Ogni celebrante, catering, decoratore e musicista del nostro registro è qualcuno con cui lavoriamo per nome, da anni. Non subappaltiamo; collaboriamo. Gli stessi nomi reggono ogni matrimonio nella loro categoria.",
      },
      {
        title: "Il lavoro è il matrimonio",
        body: "Un matrimonio non si mette in scena per un pubblico; si celebra per una famiglia. Non rincorriamo l'estetica di Instagram né le pagine delle riviste. Se il matrimonio funziona, la stampa segue da sé. Finora è sempre stato così.",
      },
    ],
  },
};

// ── Timeline ───────────────────────────────────────────────────────────
type TimelineEntry = { title: string; place: string; body: string };
type TimelineCopy = {
  label: string;
  headline: string;
  intro: string;
  items: TimelineEntry[];
};

const TIMELINE: Record<Locale, TimelineCopy> = {
  en: {
    label: "A working chronology",
    headline: "Fifteen *years.*",
    intro:
      "The studio's milestones, in their own time. The list is honest — including the years we paused and the year we lost a wedding to a hurricane.",
    items: [
      {
        title: "The first wedding",
        place: "Punta Cana · Catholic",
        body: "A friend's wedding for 140 guests, planned out of a Bávaro apartment. No business plan, no studio. Ten weddings followed in the next eighteen months.",
      },
      {
        title: "The studio is founded",
        place: "Grecia Mejía Weddings · Cap Cana",
        body: "Formal registration of the studio. First office in Cap Cana. First hire: Maria, who is still with us. First photograph in the press: a small mention in Brides Caribbean.",
      },
      {
        title: "The first Indian wedding",
        place: "Saira & Rohan · Cap Cana · 312 guests",
        body: "A four-day Mumbai-Toronto wedding that became, in retrospect, the wedding that defined the studio. We flew in a pandit and a choreographer. It worked. We knew the direction.",
      },
      {
        title: "First Italian wedding",
        place: "Lake Como · The Villa Erba wedding",
        body: "Our first European wedding — a multilingual Catholic ceremony for an Italian-American family. The beginning of the studio's Mediterranean register.",
      },
      {
        title: "Vogue Weddings feature",
        place: "Editorial feature · 12 pages",
        body: "A profile of the studio across Vogue Weddings Italy, Spain and India. We did not pitch it. The bride did.",
      },
      {
        title: "The first Jewish destination wedding",
        place: "Caribbean · Kosher on the coast",
        body: "A 220-guest wedding that taught us how to build a kosher kitchen 1,500 miles from the nearest mashgiach. The methodology that holds every Jewish wedding we plan since.",
      },
      {
        title: "The year of waiting",
        place: "Twelve postponements · No weddings",
        body: "The studio postponed every wedding on the calendar. We did not hold a single ceremony for fifteen months. Every couple stayed with us.",
      },
      {
        title: "The studio doubles in size",
        place: "Six in Punta Cana · Three in Milan",
        body: "Eduarda joined as Senior Curator; we opened a satellite studio in Milan to handle the growing Mediterranean calendar. Fourteen-wedding cap formalised.",
      },
      {
        title: "The Caribbean Wedding Planner of the Year",
        place: "Caribbean Bridal Awards · Recognition",
        body: "Awarded for the second time. We are quietly proud; we sent the trophy to the studio in Milan, where it sits on a shelf above the espresso machine.",
      },
      {
        title: "Fifteen years",
        place: "Cap Cana · 240+ weddings to date",
        body: "This year — the studio holds its fifteenth-anniversary calendar. Ten weddings already booked into Q2 2027. The work continues, slowly.",
      },
    ],
  },
  es: {
    label: "Una cronología de trabajo",
    headline: "Quince *años.*",
    intro:
      "Los hitos del atelier, a su propio tiempo. La lista es honesta, incluidos los años en que paramos y el año en que perdimos una boda por un huracán.",
    items: [
      {
        title: "La primera boda",
        place: "Punta Cana · Católica",
        body: "La boda de una amiga para 140 invitados, planificada desde un apartamento en Bávaro. Sin plan de negocio, sin atelier. Diez bodas siguieron en los siguientes dieciocho meses.",
      },
      {
        title: "Se funda el atelier",
        place: "Grecia Mejía Weddings · Cap Cana",
        body: "Registro formal del atelier. Primera oficina en Cap Cana. Primera contratación: Maria, que sigue con nosotros. Primera fotografía en prensa: una pequeña mención en Brides Caribbean.",
      },
      {
        title: "La primera boda india",
        place: "Saira y Rohan · Cap Cana · 312 invitados",
        body: "Una boda de cuatro días entre Bombay y Toronto que se convirtió, en retrospectiva, en la boda que definió el atelier. Trajimos a un pandit y a un coreógrafo. Funcionó. Supimos la dirección.",
      },
      {
        title: "Primera boda italiana",
        place: "Lago de Como · La boda de Villa Erba",
        body: "Nuestra primera boda europea: una ceremonia católica multilingüe para una familia ítalo-estadounidense. El comienzo del registro mediterráneo del atelier.",
      },
      {
        title: "Reportaje en Vogue Weddings",
        place: "Reportaje editorial · 12 páginas",
        body: "Un perfil del atelier en Vogue Weddings Italia, España e India. No lo propusimos nosotros. Lo hizo la novia.",
      },
      {
        title: "La primera boda judía de destino",
        place: "Caribe · Kosher en la costa",
        body: "Una boda de 220 invitados que nos enseñó a montar una cocina kosher a 2.400 kilómetros del mashgiach más cercano. La metodología que sostiene cada boda judía que planificamos desde entonces.",
      },
      {
        title: "El año de la espera",
        place: "Doce aplazamientos · Ninguna boda",
        body: "El atelier aplazó cada boda del calendario. No celebramos una sola ceremonia durante quince meses. Cada pareja se quedó con nosotros.",
      },
      {
        title: "El atelier duplica su tamaño",
        place: "Seis en Punta Cana · Tres en Milán",
        body: "Eduarda se incorporó como Curadora Sénior; abrimos un estudio satélite en Milán para gestionar el creciente calendario mediterráneo. Se formalizó el tope de catorce bodas.",
      },
      {
        title: "Wedding Planner del Año del Caribe",
        place: "Caribbean Bridal Awards · Reconocimiento",
        body: "Premiadas por segunda vez. Estamos calladamente orgullosas; enviamos el trofeo al estudio de Milán, donde descansa en un estante sobre la máquina de espresso.",
      },
      {
        title: "Quince años",
        place: "Cap Cana · Más de 240 bodas hasta la fecha",
        body: "Este año, el atelier celebra su calendario del decimoquinto aniversario. Diez bodas ya reservadas para el segundo trimestre de 2027. El trabajo continúa, despacio.",
      },
    ],
  },
  fr: {
    label: "Une chronologie de travail",
    headline: "Quinze *ans.*",
    intro:
      "Les jalons de l'atelier, à leur propre rythme. La liste est honnête — y compris les années où nous avons fait une pause et l'année où nous avons perdu un mariage à cause d'un ouragan.",
    items: [
      {
        title: "Le premier mariage",
        place: "Punta Cana · Catholique",
        body: "Le mariage d'une amie pour 140 invités, préparé depuis un appartement de Bávaro. Aucun plan d'affaires, aucun atelier. Dix mariages ont suivi dans les dix-huit mois.",
      },
      {
        title: "La fondation de l'atelier",
        place: "Grecia Mejía Weddings · Cap Cana",
        body: "Enregistrement officiel de l'atelier. Premier bureau à Cap Cana. Première recrue : Maria, toujours avec nous. Première photographie dans la presse : une brève mention dans Brides Caribbean.",
      },
      {
        title: "Le premier mariage indien",
        place: "Saira & Rohan · Cap Cana · 312 invités",
        body: "Un mariage de quatre jours entre Mumbai et Toronto qui est devenu, rétrospectivement, le mariage qui a défini l'atelier. Nous avons fait venir un pandit et un chorégraphe. Cela a fonctionné. Nous connaissions la direction.",
      },
      {
        title: "Premier mariage italien",
        place: "Lac de Côme · Le mariage de la Villa Erba",
        body: "Notre premier mariage européen — une cérémonie catholique multilingue pour une famille italo-américaine. Le début du registre méditerranéen de l'atelier.",
      },
      {
        title: "Reportage dans Vogue Weddings",
        place: "Reportage éditorial · 12 pages",
        body: "Un portrait de l'atelier dans Vogue Weddings Italie, Espagne et Inde. Nous ne l'avons pas sollicité. La mariée, si.",
      },
      {
        title: "Le premier mariage juif de destination",
        place: "Caraïbes · Casher sur la côte",
        body: "Un mariage de 220 invités qui nous a appris à monter une cuisine casher à 2 400 kilomètres du mashgiah le plus proche. La méthode qui porte chaque mariage juif que nous organisons depuis.",
      },
      {
        title: "L'année de l'attente",
        place: "Douze reports · Aucun mariage",
        body: "L'atelier a reporté chaque mariage du calendrier. Nous n'avons tenu aucune cérémonie pendant quinze mois. Chaque couple nous est resté fidèle.",
      },
      {
        title: "L'atelier double de taille",
        place: "Six à Punta Cana · Trois à Milan",
        body: "Eduarda a rejoint l'atelier comme Curatrice principale ; nous avons ouvert un studio satellite à Milan pour gérer le calendrier méditerranéen croissant. Le plafond de quatorze mariages a été officialisé.",
      },
      {
        title: "Wedding Planner de l'année des Caraïbes",
        place: "Caribbean Bridal Awards · Reconnaissance",
        body: "Récompensées pour la deuxième fois. Nous en sommes discrètement fières ; nous avons envoyé le trophée au studio de Milan, où il repose sur une étagère au-dessus de la machine à espresso.",
      },
      {
        title: "Quinze ans",
        place: "Cap Cana · Plus de 240 mariages à ce jour",
        body: "Cette année — l'atelier tient le calendrier de son quinzième anniversaire. Dix mariages déjà réservés pour le deuxième trimestre 2027. Le travail continue, lentement.",
      },
    ],
  },
  pt: {
    label: "Uma cronologia de trabalho",
    headline: "Quinze *anos.*",
    intro:
      "Os marcos do ateliê, ao seu próprio tempo. A lista é honesta — incluindo os anos em que parámos e o ano em que perdemos um casamento por causa de um furacão.",
    items: [
      {
        title: "O primeiro casamento",
        place: "Punta Cana · Católico",
        body: "O casamento de uma amiga para 140 convidados, planeado a partir de um apartamento em Bávaro. Sem plano de negócios, sem ateliê. Dez casamentos seguiram-se nos dezoito meses seguintes.",
      },
      {
        title: "O ateliê é fundado",
        place: "Grecia Mejía Weddings · Cap Cana",
        body: "Registo formal do ateliê. Primeiro escritório em Cap Cana. Primeira contratação: Maria, que continua connosco. Primeira fotografia na imprensa: uma breve menção na Brides Caribbean.",
      },
      {
        title: "O primeiro casamento indiano",
        place: "Saira & Rohan · Cap Cana · 312 convidados",
        body: "Um casamento de quatro dias entre Mumbai e Toronto que se tornou, em retrospetiva, o casamento que definiu o ateliê. Trouxemos um pandit e um coreógrafo. Resultou. Soubemos a direção.",
      },
      {
        title: "Primeiro casamento italiano",
        place: "Lago de Como · O casamento da Villa Erba",
        body: "O nosso primeiro casamento europeu — uma cerimónia católica multilingue para uma família ítalo-americana. O início do registo mediterrânico do ateliê.",
      },
      {
        title: "Reportagem na Vogue Weddings",
        place: "Reportagem editorial · 12 páginas",
        body: "Um perfil do ateliê na Vogue Weddings Itália, Espanha e Índia. Não fomos nós a propô-lo. Foi a noiva.",
      },
      {
        title: "O primeiro casamento judaico de destino",
        place: "Caraíbas · Kosher na costa",
        body: "Um casamento de 220 convidados que nos ensinou a montar uma cozinha kosher a 2.400 quilómetros do mashgiach mais próximo. A metodologia que sustenta cada casamento judaico que planeamos desde então.",
      },
      {
        title: "O ano da espera",
        place: "Doze adiamentos · Nenhum casamento",
        body: "O ateliê adiou todos os casamentos do calendário. Não realizámos uma única cerimónia durante quinze meses. Cada casal ficou connosco.",
      },
      {
        title: "O ateliê duplica de tamanho",
        place: "Seis em Punta Cana · Três em Milão",
        body: "Eduarda juntou-se como Curadora Sénior; abrimos um estúdio satélite em Milão para gerir o crescente calendário mediterrânico. O limite de catorze casamentos foi formalizado.",
      },
      {
        title: "Wedding Planner do Ano das Caraíbas",
        place: "Caribbean Bridal Awards · Reconhecimento",
        body: "Premiadas pela segunda vez. Estamos discretamente orgulhosas; enviámos o troféu para o estúdio de Milão, onde repousa numa prateleira por cima da máquina de espresso.",
      },
      {
        title: "Quinze anos",
        place: "Cap Cana · Mais de 240 casamentos até à data",
        body: "Este ano — o ateliê cumpre o calendário do seu décimo quinto aniversário. Dez casamentos já reservados para o segundo trimestre de 2027. O trabalho continua, devagar.",
      },
    ],
  },
  de: {
    label: "Eine Arbeitschronik",
    headline: "Fünfzehn *Jahre.*",
    intro:
      "Die Meilensteine des Ateliers, in ihrer eigenen Zeit. Die Liste ist ehrlich — einschließlich der Jahre, in denen wir pausierten, und des Jahres, in dem wir eine Hochzeit an einen Hurrikan verloren.",
    items: [
      {
        title: "Die erste Hochzeit",
        place: "Punta Cana · Katholisch",
        body: "Die Hochzeit einer Freundin für 140 Gäste, geplant aus einer Wohnung in Bávaro. Kein Geschäftsplan, kein Atelier. In den nächsten achtzehn Monaten folgten zehn Hochzeiten.",
      },
      {
        title: "Das Atelier wird gegründet",
        place: "Grecia Mejía Weddings · Cap Cana",
        body: "Formelle Anmeldung des Ateliers. Erstes Büro in Cap Cana. Erste Einstellung: Maria, die noch heute bei uns ist. Erstes Pressefoto: eine kurze Erwähnung in Brides Caribbean.",
      },
      {
        title: "Die erste indische Hochzeit",
        place: "Saira & Rohan · Cap Cana · 312 Gäste",
        body: "Eine viertägige Hochzeit zwischen Mumbai und Toronto, die rückblickend zur prägenden Hochzeit des Ateliers wurde. Wir holten einen Pandit und einen Choreografen. Es funktionierte. Wir kannten die Richtung.",
      },
      {
        title: "Erste italienische Hochzeit",
        place: "Comer See · Die Hochzeit der Villa Erba",
        body: "Unsere erste europäische Hochzeit — eine mehrsprachige katholische Zeremonie für eine italienisch-amerikanische Familie. Der Beginn des mediterranen Verzeichnisses des Ateliers.",
      },
      {
        title: "Beitrag in Vogue Weddings",
        place: "Editorial-Strecke · 12 Seiten",
        body: "Ein Porträt des Ateliers in Vogue Weddings Italien, Spanien und Indien. Wir haben es nicht angeboten. Die Braut tat es.",
      },
      {
        title: "Die erste jüdische Destinationshochzeit",
        place: "Karibik · Koscher an der Küste",
        body: "Eine Hochzeit mit 220 Gästen, die uns lehrte, eine koschere Küche 2.400 Kilometer vom nächsten Maschgiach entfernt aufzubauen. Die Methode, die seither jede jüdische Hochzeit trägt, die wir planen.",
      },
      {
        title: "Das Jahr des Wartens",
        place: "Zwölf Verschiebungen · Keine Hochzeiten",
        body: "Das Atelier verschob jede Hochzeit im Kalender. Fünfzehn Monate lang hielten wir keine einzige Zeremonie. Jedes Paar blieb bei uns.",
      },
      {
        title: "Das Atelier verdoppelt sich",
        place: "Sechs in Punta Cana · Drei in Mailand",
        body: "Eduarda kam als Senior-Kuratorin dazu; wir eröffneten ein Zweigatelier in Mailand, um den wachsenden mediterranen Kalender zu betreuen. Die Obergrenze von vierzehn Hochzeiten wurde festgeschrieben.",
      },
      {
        title: "Wedding Planner des Jahres der Karibik",
        place: "Caribbean Bridal Awards · Auszeichnung",
        body: "Zum zweiten Mal ausgezeichnet. Wir sind still stolz; wir schickten die Trophäe ins Mailänder Atelier, wo sie auf einem Regal über der Espressomaschine steht.",
      },
      {
        title: "Fünfzehn Jahre",
        place: "Cap Cana · Über 240 Hochzeiten bis heute",
        body: "Dieses Jahr — das Atelier führt den Kalender seines fünfzehnten Jubiläums. Zehn Hochzeiten bereits für das zweite Quartal 2027 gebucht. Die Arbeit geht weiter, langsam.",
      },
    ],
  },
  it: {
    label: "Una cronologia di lavoro",
    headline: "Quindici *anni.*",
    intro:
      "Le tappe dell'atelier, nel loro tempo. L'elenco è onesto — compresi gli anni in cui ci siamo fermati e l'anno in cui abbiamo perso un matrimonio per un uragano.",
    items: [
      {
        title: "Il primo matrimonio",
        place: "Punta Cana · Cattolico",
        body: "Il matrimonio di un'amica per 140 invitati, organizzato da un appartamento a Bávaro. Nessun business plan, nessun atelier. Dieci matrimoni seguirono nei diciotto mesi successivi.",
      },
      {
        title: "L'atelier viene fondato",
        place: "Grecia Mejía Weddings · Cap Cana",
        body: "Registrazione formale dell'atelier. Primo ufficio a Cap Cana. Prima assunzione: Maria, che è ancora con noi. Prima fotografia sulla stampa: una breve menzione su Brides Caribbean.",
      },
      {
        title: "Il primo matrimonio indiano",
        place: "Saira & Rohan · Cap Cana · 312 invitati",
        body: "Un matrimonio di quattro giorni tra Mumbai e Toronto che è diventato, col senno di poi, il matrimonio che ha definito l'atelier. Facemmo venire un pandit e un coreografo. Funzionò. Sapevamo la direzione.",
      },
      {
        title: "Primo matrimonio italiano",
        place: "Lago di Como · Il matrimonio di Villa Erba",
        body: "Il nostro primo matrimonio europeo — una cerimonia cattolica multilingue per una famiglia italo-americana. L'inizio del registro mediterraneo dell'atelier.",
      },
      {
        title: "Servizio su Vogue Weddings",
        place: "Servizio editoriale · 12 pagine",
        body: "Un ritratto dell'atelier su Vogue Weddings Italia, Spagna e India. Non lo proponemmo noi. Lo fece la sposa.",
      },
      {
        title: "Il primo matrimonio ebraico di destinazione",
        place: "Caraibi · Kosher sulla costa",
        body: "Un matrimonio di 220 invitati che ci insegnò ad allestire una cucina kosher a 2.400 chilometri dal mashgiach più vicino. La metodologia che regge ogni matrimonio ebraico che pianifichiamo da allora.",
      },
      {
        title: "L'anno dell'attesa",
        place: "Dodici rinvii · Nessun matrimonio",
        body: "L'atelier rinviò ogni matrimonio in calendario. Non tenemmo una sola cerimonia per quindici mesi. Ogni coppia rimase con noi.",
      },
      {
        title: "L'atelier raddoppia",
        place: "Sei a Punta Cana · Tre a Milano",
        body: "Eduarda si è unita come Curatrice Senior; abbiamo aperto uno studio satellite a Milano per gestire il crescente calendario mediterraneo. Il tetto di quattordici matrimoni è stato formalizzato.",
      },
      {
        title: "Wedding Planner dell'Anno dei Caraibi",
        place: "Caribbean Bridal Awards · Riconoscimento",
        body: "Premiate per la seconda volta. Ne siamo silenziosamente orgogliose; abbiamo mandato il trofeo allo studio di Milano, dove riposa su una mensola sopra la macchina dell'espresso.",
      },
      {
        title: "Quindici anni",
        place: "Cap Cana · Oltre 240 matrimoni a oggi",
        body: "Quest'anno — l'atelier tiene il calendario del suo quindicesimo anniversario. Dieci matrimoni già prenotati per il secondo trimestre del 2027. Il lavoro continua, lentamente.",
      },
    ],
  },
};

// ── Numbers (stat labels; values are shared) ───────────────────────────
const NUMBERS: Record<Locale, string[]> = {
  en: [
    "Years curating weddings",
    "Weddings hosted across three continents",
    "Countries we have worked",
    "Languages spoken across the studio",
    "Weddings on the calendar each year",
  ],
  es: [
    "Años curando bodas",
    "Bodas celebradas en tres continentes",
    "Países en los que hemos trabajado",
    "Idiomas que se hablan en el atelier",
    "Bodas en el calendario cada año",
  ],
  fr: [
    "Ans à composer des mariages",
    "Mariages célébrés sur trois continents",
    "Pays où nous avons travaillé",
    "Langues parlées au sein de l'atelier",
    "Mariages au calendrier chaque année",
  ],
  pt: [
    "Anos a curar casamentos",
    "Casamentos realizados em três continentes",
    "Países onde trabalhámos",
    "Idiomas falados no ateliê",
    "Casamentos no calendário por ano",
  ],
  de: [
    "Jahre Hochzeitskuratierung",
    "Hochzeiten auf drei Kontinenten ausgerichtet",
    "Länder, in denen wir gearbeitet haben",
    "im Atelier gesprochene Sprachen",
    "Hochzeiten im Kalender pro Jahr",
  ],
  it: [
    "Anni a curare matrimoni",
    "Matrimoni celebrati in tre continenti",
    "Paesi in cui abbiamo lavorato",
    "Lingue parlate nell'atelier",
    "Matrimoni in calendario ogni anno",
  ],
};

// ── Team (names + image keys are shared; roles/bios localized) ─────────
type Member = { role: string; bio: string };
type TeamCopy = {
  label: string;
  headline: string;
  intro: string;
  members: Member[];
};

const TEAM: Record<Locale, TeamCopy> = {
  en: {
    label: "The team",
    headline: "The *studio,* in person.",
    intro:
      "Eleven people across three cities. Small on purpose — every wedding is planned by two of us, no more, no less.",
    members: [
      {
        role: "Founder · Lead Curator",
        bio: "Dominican-born, Punta Cana resident. Multilingual EN/ES/IT. Personally writes back to every couple within five working days.",
      },
      {
        role: "Senior Curator · Milan",
        bio: "Mediterranean specialist, formerly with the Four Seasons. Holds the studio's Italian and French calendars from a small office in Brera.",
      },
      {
        role: "Cultural Coordinator",
        bio: "Mumbai-trained, fifteen years in destination weddings. Leads every Indian, South Asian and interfaith wedding the studio plans.",
      },
      {
        role: "Design Director",
        bio: "With the studio since 2011. Florals, tablescape, lighting and atmosphere — every wedding flows through Maria before it flows back to the couple.",
      },
    ],
  },
  es: {
    label: "El equipo",
    headline: "El *atelier,* en persona.",
    intro:
      "Once personas en tres ciudades. Pequeño a propósito: cada boda la planifican dos de nosotras, ni más ni menos.",
    members: [
      {
        role: "Fundadora · Curadora Principal",
        bio: "Nacida en República Dominicana, residente en Punta Cana. Multilingüe EN/ES/IT. Responde personalmente a cada pareja en cinco días laborables.",
      },
      {
        role: "Curadora Sénior · Milán",
        bio: "Especialista mediterránea, antes en Four Seasons. Lleva los calendarios italiano y francés del atelier desde una pequeña oficina en Brera.",
      },
      {
        role: "Coordinadora Cultural",
        bio: "Formada en Bombay, quince años en bodas de destino. Dirige cada boda india, del sur de Asia e interreligiosa que planifica el atelier.",
      },
      {
        role: "Directora de Diseño",
        bio: "En el atelier desde 2011. Flores, mesas, iluminación y atmósfera: cada boda pasa por Maria antes de volver a la pareja.",
      },
    ],
  },
  fr: {
    label: "L'équipe",
    headline: "L'*atelier,* en personne.",
    intro:
      "Onze personnes dans trois villes. Petit à dessein — chaque mariage est préparé par deux d'entre nous, ni plus, ni moins.",
    members: [
      {
        role: "Fondatrice · Curatrice en chef",
        bio: "Née en République dominicaine, résidente de Punta Cana. Multilingue EN/ES/IT. Répond elle-même à chaque couple sous cinq jours ouvrés.",
      },
      {
        role: "Curatrice senior · Milan",
        bio: "Spécialiste de la Méditerranée, anciennement chez Four Seasons. Tient les calendriers italien et français de l'atelier depuis un petit bureau à Brera.",
      },
      {
        role: "Coordinatrice culturelle",
        bio: "Formée à Mumbai, quinze ans dans les mariages de destination. Dirige chaque mariage indien, sud-asiatique et interconfessionnel de l'atelier.",
      },
      {
        role: "Directrice du design",
        bio: "Avec l'atelier depuis 2011. Fleurs, art de la table, lumière et atmosphère — chaque mariage passe par Maria avant de revenir au couple.",
      },
    ],
  },
  pt: {
    label: "A equipa",
    headline: "O *ateliê,* em pessoa.",
    intro:
      "Onze pessoas em três cidades. Pequeno de propósito — cada casamento é planeado por duas de nós, nem mais, nem menos.",
    members: [
      {
        role: "Fundadora · Curadora Principal",
        bio: "Nascida na República Dominicana, residente em Punta Cana. Multilingue EN/ES/IT. Responde pessoalmente a cada casal em cinco dias úteis.",
      },
      {
        role: "Curadora Sénior · Milão",
        bio: "Especialista mediterrânica, anteriormente na Four Seasons. Gere os calendários italiano e francês do ateliê a partir de um pequeno escritório em Brera.",
      },
      {
        role: "Coordenadora Cultural",
        bio: "Formada em Mumbai, quinze anos em casamentos de destino. Lidera cada casamento indiano, do sul da Ásia e inter-religioso que o ateliê planeia.",
      },
      {
        role: "Diretora de Design",
        bio: "No ateliê desde 2011. Flores, mesa, iluminação e atmosfera — cada casamento passa por Maria antes de voltar ao casal.",
      },
    ],
  },
  de: {
    label: "Das Team",
    headline: "Das *Atelier,* in Person.",
    intro:
      "Elf Menschen in drei Städten. Bewusst klein — jede Hochzeit wird von zwei von uns geplant, nicht mehr, nicht weniger.",
    members: [
      {
        role: "Gründerin · Leitende Kuratorin",
        bio: "In der Dominikanischen Republik geboren, in Punta Cana ansässig. Mehrsprachig EN/ES/IT. Antwortet jedem Paar persönlich innerhalb von fünf Werktagen.",
      },
      {
        role: "Senior-Kuratorin · Mailand",
        bio: "Mittelmeer-Spezialistin, zuvor bei Four Seasons. Führt die italienischen und französischen Kalender des Ateliers von einem kleinen Büro in Brera.",
      },
      {
        role: "Kulturkoordinatorin",
        bio: "In Mumbai ausgebildet, fünfzehn Jahre in Destinationshochzeiten. Leitet jede indische, südasiatische und interreligiöse Hochzeit des Ateliers.",
      },
      {
        role: "Design-Direktorin",
        bio: "Seit 2011 im Atelier. Floristik, Tafel, Licht und Atmosphäre — jede Hochzeit fließt durch Maria, bevor sie zum Paar zurückfließt.",
      },
    ],
  },
  it: {
    label: "Il team",
    headline: "L'*atelier,* di persona.",
    intro:
      "Undici persone in tre città. Piccolo di proposito — ogni matrimonio è pianificato da due di noi, né più né meno.",
    members: [
      {
        role: "Fondatrice · Curatrice principale",
        bio: "Nata nella Repubblica Dominicana, residente a Punta Cana. Multilingue EN/ES/IT. Risponde personalmente a ogni coppia entro cinque giorni lavorativi.",
      },
      {
        role: "Curatrice senior · Milano",
        bio: "Specialista del Mediterraneo, in precedenza al Four Seasons. Tiene i calendari italiano e francese dell'atelier da un piccolo ufficio a Brera.",
      },
      {
        role: "Coordinatrice culturale",
        bio: "Formata a Mumbai, quindici anni nei matrimoni di destinazione. Guida ogni matrimonio indiano, sud-asiatico e interreligioso che l'atelier organizza.",
      },
      {
        role: "Direttrice del design",
        bio: "Nell'atelier dal 2011. Fiori, mise en place, luci e atmosfera — ogni matrimonio passa da Maria prima di tornare alla coppia.",
      },
    ],
  },
};

// ── Press & awards (publication brands shared via AWARD_META) ──────────
type Award = { title: string; sub: string };
type PressCopy = {
  label: string;
  headline: string;
  awardsHeading: string;
  awards: Award[];
};

const PRESS: Record<Locale, PressCopy> = {
  en: {
    label: "Press & recognition",
    headline: "The studio, in *print.*",
    awardsHeading: "Awards & recognition",
    awards: [
      { title: "Caribbean Wedding Planner of the Year", sub: "Best Destination Studio" },
      { title: "Top 25 Wedding Planners Worldwide", sub: "International recognition list" },
      { title: "Editor's Choice · Multicultural Weddings", sub: "Indian & Jewish weddings" },
      { title: "Caribbean Wedding Planner of the Year", sub: "First award · Destination weddings" },
      { title: "Editor's Pick · Best Studios", sub: "Boutique studio of the year" },
      { title: "Feature · 12 pages", sub: "Profile of the studio" },
    ],
  },
  es: {
    label: "Prensa y reconocimiento",
    headline: "El atelier, en *papel.*",
    awardsHeading: "Premios y reconocimientos",
    awards: [
      { title: "Wedding Planner del Año del Caribe", sub: "Mejor estudio de bodas de destino" },
      { title: "Top 25 Wedding Planners del mundo", sub: "Lista de reconocimiento internacional" },
      { title: "Selección del editor · Bodas multiculturales", sub: "Bodas indias y judías" },
      { title: "Wedding Planner del Año del Caribe", sub: "Primer premio · Bodas de destino" },
      { title: "Elección del editor · Mejores estudios", sub: "Estudio boutique del año" },
      { title: "Reportaje · 12 páginas", sub: "Perfil del atelier" },
    ],
  },
  fr: {
    label: "Presse & reconnaissance",
    headline: "L'atelier, sur le *papier.*",
    awardsHeading: "Prix & distinctions",
    awards: [
      { title: "Wedding Planner de l'année des Caraïbes", sub: "Meilleur studio de mariages de destination" },
      { title: "Top 25 des wedding planners au monde", sub: "Liste de reconnaissance internationale" },
      { title: "Choix de la rédaction · Mariages multiculturels", sub: "Mariages indiens & juifs" },
      { title: "Wedding Planner de l'année des Caraïbes", sub: "Premier prix · Mariages de destination" },
      { title: "Sélection de la rédaction · Meilleurs studios", sub: "Studio boutique de l'année" },
      { title: "Reportage · 12 pages", sub: "Portrait de l'atelier" },
    ],
  },
  pt: {
    label: "Imprensa & reconhecimento",
    headline: "O ateliê, em *papel.*",
    awardsHeading: "Prémios & reconhecimento",
    awards: [
      { title: "Wedding Planner do Ano das Caraíbas", sub: "Melhor estúdio de casamentos de destino" },
      { title: "Top 25 Wedding Planners do mundo", sub: "Lista de reconhecimento internacional" },
      { title: "Escolha do editor · Casamentos multiculturais", sub: "Casamentos indianos & judaicos" },
      { title: "Wedding Planner do Ano das Caraíbas", sub: "Primeiro prémio · Casamentos de destino" },
      { title: "Escolha do editor · Melhores estúdios", sub: "Estúdio boutique do ano" },
      { title: "Reportagem · 12 páginas", sub: "Perfil do ateliê" },
    ],
  },
  de: {
    label: "Presse & Anerkennung",
    headline: "Das Atelier, in *Druck.*",
    awardsHeading: "Auszeichnungen & Anerkennung",
    awards: [
      { title: "Wedding Planner des Jahres der Karibik", sub: "Bestes Atelier für Destinationshochzeiten" },
      { title: "Top 25 Wedding Planner weltweit", sub: "Internationale Anerkennungsliste" },
      { title: "Wahl der Redaktion · Multikulturelle Hochzeiten", sub: "Indische & jüdische Hochzeiten" },
      { title: "Wedding Planner des Jahres der Karibik", sub: "Erste Auszeichnung · Destinationshochzeiten" },
      { title: "Empfehlung der Redaktion · Beste Ateliers", sub: "Boutique-Atelier des Jahres" },
      { title: "Beitrag · 12 Seiten", sub: "Porträt des Ateliers" },
    ],
  },
  it: {
    label: "Stampa & riconoscimenti",
    headline: "L'atelier, su *carta.*",
    awardsHeading: "Premi & riconoscimenti",
    awards: [
      { title: "Wedding Planner dell'Anno dei Caraibi", sub: "Miglior atelier per matrimoni di destinazione" },
      { title: "Top 25 Wedding Planner al mondo", sub: "Lista di riconoscimento internazionale" },
      { title: "Scelta della redazione · Matrimoni multiculturali", sub: "Matrimoni indiani & ebraici" },
      { title: "Wedding Planner dell'Anno dei Caraibi", sub: "Primo premio · Matrimoni di destinazione" },
      { title: "Scelta della redazione · Migliori atelier", sub: "Atelier boutique dell'anno" },
      { title: "Servizio · 12 pagine", sub: "Ritratto dell'atelier" },
    ],
  },
};

// ── Contact ────────────────────────────────────────────────────────────
type ContactCopy = {
  label: string;
  scriptLine: string;
  headline: string;
  body: string;
  cta: string;
  labels: {
    email: string;
    phone: string;
    whatsapp: string;
    instagram: string;
    studios: string;
    calendar: string;
  };
  studios: string;
  calendar: string;
};

const CONTACT: Record<Locale, ContactCopy> = {
  en: {
    label: "A private conversation",
    scriptLine: "Begin —",
    headline: "*write* to Grecia.",
    body: "We accept fourteen weddings each year. The calendar opens twenty-four months in advance and closes when it closes. Grecia writes back to every couple personally, within five working days.",
    cta: "Request a private consultation →",
    labels: {
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      studios: "Studios",
      calendar: "Calendar",
    },
    studios: "Punta Cana · Milan · Paris (2027)",
    calendar: "Booking 2027 · 2028",
  },
  es: {
    label: "Una conversación privada",
    scriptLine: "Comienza —",
    headline: "*escribe* a Grecia.",
    body: "Aceptamos catorce bodas al año. El calendario se abre con veinticuatro meses de antelación y se cierra cuando se cierra. Grecia responde personalmente a cada pareja en cinco días laborables.",
    cta: "Solicitar una consulta privada →",
    labels: {
      email: "Correo",
      phone: "Teléfono",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      studios: "Estudios",
      calendar: "Calendario",
    },
    studios: "Punta Cana · Milán · París (2027)",
    calendar: "Reservas 2027 · 2028",
  },
  fr: {
    label: "Une conversation privée",
    scriptLine: "Commencez —",
    headline: "*écrivez* à Grecia.",
    body: "Nous acceptons quatorze mariages par an. Le calendrier ouvre vingt-quatre mois à l'avance et se ferme quand il se ferme. Grecia répond personnellement à chaque couple sous cinq jours ouvrés.",
    cta: "Demander une consultation privée →",
    labels: {
      email: "E-mail",
      phone: "Téléphone",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      studios: "Ateliers",
      calendar: "Calendrier",
    },
    studios: "Punta Cana · Milan · Paris (2027)",
    calendar: "Réservations 2027 · 2028",
  },
  pt: {
    label: "Uma conversa privada",
    scriptLine: "Comece —",
    headline: "*escreva* a Grecia.",
    body: "Aceitamos catorze casamentos por ano. O calendário abre com vinte e quatro meses de antecedência e fecha quando fecha. Grecia responde pessoalmente a cada casal em cinco dias úteis.",
    cta: "Solicitar uma consulta privada →",
    labels: {
      email: "E-mail",
      phone: "Telefone",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      studios: "Ateliês",
      calendar: "Calendário",
    },
    studios: "Punta Cana · Milão · Paris (2027)",
    calendar: "Reservas 2027 · 2028",
  },
  de: {
    label: "Ein privates Gespräch",
    scriptLine: "Beginnen Sie —",
    headline: "*schreiben* Sie an Grecia.",
    body: "Wir nehmen vierzehn Hochzeiten pro Jahr an. Der Kalender öffnet vierundzwanzig Monate im Voraus und schließt, wenn er schließt. Grecia antwortet jedem Paar persönlich innerhalb von fünf Werktagen.",
    cta: "Privates Gespräch anfragen →",
    labels: {
      email: "E-Mail",
      phone: "Telefon",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      studios: "Ateliers",
      calendar: "Kalender",
    },
    studios: "Punta Cana · Mailand · Paris (2027)",
    calendar: "Buchung 2027 · 2028",
  },
  it: {
    label: "Una conversazione privata",
    scriptLine: "Inizia —",
    headline: "*scrivi* a Grecia.",
    body: "Accettiamo quattordici matrimoni all'anno. Il calendario apre ventiquattro mesi in anticipo e si chiude quando si chiude. Grecia risponde personalmente a ogni coppia entro cinque giorni lavorativi.",
    cta: "Richiedi una consulenza privata →",
    labels: {
      email: "E-mail",
      phone: "Telefono",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      studios: "Atelier",
      calendar: "Calendario",
    },
    studios: "Punta Cana · Milano · Parigi (2027)",
    calendar: "Prenotazioni 2027 · 2028",
  },
};

// ── Build doc ──────────────────────────────────────────────────────────
function buildDoc(locale: Locale) {
  const story = STORY_META[locale];
  const manifesto = MANIFESTO[locale];
  const timeline = TIMELINE[locale];
  const team = TEAM[locale];
  const press = PRESS[locale];
  const contact = CONTACT[locale];

  return {
    hero: HERO[locale],
    story: {
      sideLabel: story.sideLabel,
      sideNote: story.sideNote,
      headline: story.headline,
      body: ptBlocks(STORY_BODY[locale]),
      figureCaption: { emphasis: story.figureEmphasis, note: story.figureNote },
      signoffName: story.signoffName,
      signoffPlace: story.signoffPlace,
    },
    manifesto: {
      label: manifesto.label,
      headline: manifesto.headline,
      intro: manifesto.intro,
      tenets: manifesto.tenets.map((t) => keyed(t)),
    },
    timeline: {
      label: timeline.label,
      headline: timeline.headline,
      intro: timeline.intro,
      items: timeline.items.map((it, i) =>
        keyed({
          year: TIMELINE_YEARS[i],
          title: it.title,
          place: it.place,
          body: it.body,
        }),
      ),
    },
    numbers: {
      stats: STAT_VALUES.map((value, i) =>
        keyed({ value, label: NUMBERS[locale][i] }),
      ),
    },
    team: {
      label: team.label,
      headline: team.headline,
      intro: team.intro,
      members: team.members.map((m, i) =>
        keyed({
          role: m.role,
          name: TEAM_MEMBERS[i].name,
          bio: m.bio,
          imageKey: TEAM_MEMBERS[i].imageKey,
        }),
      ),
    },
    press: {
      label: press.label,
      headline: press.headline,
      publications: [...PUBLICATIONS],
      awards: {
        heading: press.awardsHeading,
        items: press.awards.map((a, i) =>
          keyed({
            year: AWARD_META[i].year,
            title: a.title,
            sub: a.sub,
            publication: AWARD_META[i].publication,
          }),
        ),
      },
    },
    contact: {
      label: contact.label,
      scriptLine: contact.scriptLine,
      headline: contact.headline,
      body: contact.body,
      cta: { label: contact.cta, href: "/contact" },
      details: [
        keyed({
          label: contact.labels.email,
          value: CONTACT_VALUES.email.value,
          href: CONTACT_VALUES.email.href,
        }),
        keyed({
          label: contact.labels.phone,
          value: CONTACT_VALUES.phone.value,
          href: CONTACT_VALUES.phone.href,
        }),
        keyed({
          label: contact.labels.whatsapp,
          value: CONTACT_VALUES.whatsapp.value,
          href: CONTACT_VALUES.whatsapp.href,
        }),
        keyed({
          label: contact.labels.instagram,
          value: CONTACT_VALUES.instagram.value,
          href: CONTACT_VALUES.instagram.href,
        }),
        keyed({ label: contact.labels.studios, value: contact.studios }),
        keyed({ label: contact.labels.calendar, value: contact.calendar }),
      ],
    },
  };
}

async function run() {
  console.log(`Seeding aboutPage in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  for (const locale of locales) {
    tx.createOrReplace({
      _id: docId(locale),
      _type: "aboutPage",
      language: locale,
      ...buildDoc(locale),
    });
  }

  tx.createOrReplace({
    _id: "aboutPage-metadata",
    _type: "translation.metadata",
    schemaTypes: ["aboutPage"],
    translations: locales.map((locale) => ({
      _key: locale,
      language: locale,
      value: { _type: "reference", _ref: docId(locale), _weak: true },
    })),
  });

  // Shared media doc — pre-seed the team key slots + alt defaults. Created
  // only if absent so re-runs never clobber uploaded images.
  tx.createIfNotExists({
    _id: "aboutPageMedia",
    _type: "aboutPageMedia",
    hero: {
      image: {
        _type: "image",
        alt: "Grecia Mejía, founder and lead curator",
      },
    },
    storyFigure: {
      image: {
        _type: "image",
        alt: "The Mendoza-Rivera wedding, Bávaro Beach, 2014",
      },
    },
    team: {
      images: TEAM_MEMBERS.map((m) =>
        keyed({ _type: "image", key: m.imageKey, alt: m.name }),
      ),
    },
  });

  await tx.commit();
  console.log(
    `✓ Seeded ${locales.length} aboutPage docs + media stub + translation metadata.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
