/**
 * Seed the `pressPage` singleton across all six locales (+ the shared
 * `pressPageMedia` stub).
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:press
 *
 * Idempotent — deterministic IDs + `createOrReplace` for the localized text
 * docs. The media doc is created with `createIfNotExists` so re-running never
 * clobbers images an editor has already uploaded; only the featured `key`
 * slots and `alt` defaults are pre-seeded.
 *
 * Content mirrors the design handoff (`pages/press.jsx`). Proper nouns
 * (publication brands, award bodies, place names) are kept locale-invariant via
 * shared constants; everything editorial is fully translated. Per the agreed
 * scope, the prototype's "press kit" section is omitted.
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

const docId = (locale: Locale) => `pressPage-${locale}`;

const keyed = <T extends object>(value: T) => ({
  _key: randomUUID(),
  ...value,
});

// Portable Text helper: convert plain paragraphs into "normal" PT blocks.
const ptParagraphs = (paragraphs: string[]) =>
  paragraphs.map((text) => ({
    _type: "block",
    _key: randomUUID(),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: randomUUID(), text, marks: [] }],
  }));

// ── Locale-invariant constants ───────────────────────────────────────────
const FEATURE_KEYS = [
  "press-feat-1",
  "press-feat-2",
  "press-feat-3",
  "press-feat-4",
  "press-feat-5",
] as const;

const FEATURE_PUBS = [
  "Vogue Weddings",
  "Harper's Bazaar",
  "Architectural Digest",
  "Condé Nast Traveler",
  "Town & Country",
] as const;

const FEATURE_DATES = [
  "September 2018 · Italy · Spain · India",
  "2023 · Brides",
  "2022",
  "2019",
  "2024",
] as const;

const QUOTE_META = [
  { publication: "Vogue Weddings", year: "2018" },
  { publication: "Harper's Bazaar", year: "2023" },
  { publication: "Condé Nast Traveler", year: "2019" },
  { publication: "Architectural Digest", year: "2022" },
] as const;

const ARCHIVE_META = [
  { year: "2026", publication: "Brides" },
  { year: "2025", publication: "Vogue India" },
  { year: "2024", publication: "Town & Country" },
  { year: "2024", publication: "Caribbean Bridal Awards" },
  { year: "2023", publication: "Harper's Bazaar" },
  { year: "2023", publication: "Tatler" },
  { year: "2022", publication: "Architectural Digest" },
  { year: "2022", publication: "Vogue Weddings India" },
  { year: "2021", publication: "Caribbean Bridal Awards" },
  { year: "2020", publication: "Brides" },
  { year: "2019", publication: "Condé Nast Traveler" },
  { year: "2018", publication: "Vogue Weddings" },
] as const;

const AWARD_META = [
  { year: "2024", publication: "Caribbean Bridal Awards" },
  { year: "2023", publication: "Harper's Bazaar Brides" },
  { year: "2022", publication: "Vogue Weddings India" },
  { year: "2021", publication: "Caribbean Bridal Awards" },
  { year: "2020", publication: "Brides Caribbean" },
  { year: "2019", publication: "Condé Nast Traveler" },
  { year: "2018", publication: "Vogue Weddings Italy" },
  { year: "2017", publication: "Destination Weddings Council" },
] as const;

// ── Per-locale editorial copy ────────────────────────────────────────────
type Copy = {
  hero: {
    eyebrow: string;
    scriptOverline: string;
    headline: string;
    deck: string;
    captionLeft: string;
    captionCenter: string;
    captionRight: string;
  };
  intro: {
    sideLabel: string;
    sideNote: string;
    headline: string;
    lede: string;
    body: string[];
  };
  featured: {
    label: string;
    headline: string;
    intro: string;
    titles: string[];
    summaries: string[];
  };
  quotes: {
    label: string;
    headline: string;
    texts: string[];
  };
  archive: {
    label: string;
    headline: string;
    count: string;
    titles: string[];
    types: string[];
  };
  awards: {
    label: string;
    headline: string;
    intro: string;
    titles: string[];
  };
  cta: {
    eyebrow: string;
    headline: string;
    body: string;
    ctaLabel: string;
  };
};

const COPY: Record<Locale, Copy> = {
  en: {
    hero: {
      eyebrow: "Press & Recognition",
      scriptOverline: "The studio, in",
      headline: "*the* press.",
      deck: "Fifteen years of features, profiles and recognition — earned, never pitched. What the editors said when they came to a Grecia Mejía wedding.",
      captionLeft: "Vogue Weddings · 12-page profile",
      captionCenter: "Selected press · 2018 – 2026",
      captionRight: "Plate I",
    },
    intro: {
      sideLabel: "A note on press",
      sideNote:
        "We have never employed a publicist. Every feature on this page began with an editor at a wedding.",
      headline: "Earned, *never* pitched.",
      lede: "The studio does not chase coverage. We have never hired a PR firm, never paid for placement, never sent a single press release.",
      body: [
        "Every feature, profile and award on this page arrived the same way: an editor attended one of our weddings — as a guest, a friend of the couple, or occasionally the bride herself — and wrote about it afterward. We are quietly proud of that. It means the press reflects the work, not the marketing.",
        "For media enquiries, interview requests, or to commission a feature, write to the studio directly — Grecia and the studio director answer the press personally.",
      ],
    },
    featured: {
      label: "Selected features",
      headline: "In *print.*",
      intro:
        "The features we are most proud of — long-form profiles and editorial spreads across the world's luxury press.",
      titles: [
        "The Atelier That *Disappears* Into the Day",
        "The 25 Wedding Planners *Worth Travelling For*",
        "A Mandap on the *Mediterranean*",
        "Where to Wed in the *Caribbean*",
        "The Art of the *Multi-Day* Wedding",
      ],
      summaries: [
        "A twelve-page profile of the studio across three international editions, following a four-day Hindu-Christian wedding in Cap Cana from first conversation to morning brunch.",
        "Named among the world's top twenty-five destination planners, with a focus on the studio's multicultural fluency.",
        "An editorial on the design language of a Lake Como Indian wedding the studio produced.",
        "The studio named as Editor's Pick for boutique destination weddings in Punta Cana.",
        "A feature on the rise of the wedding weekend, anchored by a Grecia Mejía celebration.",
      ],
    },
    quotes: {
      label: "In their words",
      headline: "What the *editors* said.",
      texts: [
        "She does not plan a wedding so much as translate a family into a single, unrepeatable day.",
        "The rarest thing in this industry: a planner who disappears into the day so that only the couple remains.",
        "Grecia Mejía has quietly become the name that multicultural couples whisper to one another.",
        "A studio that treats tradition as architecture, not decoration — and it shows in every frame.",
      ],
    },
    archive: {
      label: "The full record",
      headline: "Coverage *archive.*",
      count: "38 features · 2016 – 2026",
      titles: [
        "Real Wedding: A Four-Day Indian Celebration in Cap Cana",
        "The Destination Mandap: Punta Cana's Quiet Rise",
        "The Art of the Multi-Day Wedding",
        "Wedding Planner of the Year",
        "The 25 Wedding Planners Worth Travelling For",
        "The Address Book: Destination Weddings",
        "A Mandap on the Mediterranean",
        "Editor's Choice: Multicultural Weddings",
        "Wedding Planner of the Year",
        "Planning Through a Pause: The Studios That Held On",
        "Where to Wed in the Caribbean",
        "The Atelier That Disappears Into the Day",
      ],
      types: [
        "Real wedding",
        "Feature",
        "Feature",
        "Award",
        "List",
        "Directory",
        "Editorial",
        "Recognition",
        "Award",
        "Feature",
        "Editor's Pick",
        "Profile",
      ],
    },
    awards: {
      label: "Recognition",
      headline: "Awards & *honours.*",
      intro:
        "Recognition from the industry bodies and editors whose judgment we respect.",
      titles: [
        "Caribbean Wedding Planner of the Year",
        "Top 25 Wedding Planners Worldwide",
        "Editor's Choice · Multicultural Weddings",
        "Caribbean Wedding Planner of the Year",
        "Resilience Award · Studios",
        "Editor's Pick · Best Studios",
        "Feature of the Year · 12 pages",
        "Rising Studio of the Year",
      ],
    },
    cta: {
      eyebrow: "A private conversation —",
      headline: "*Begin* your\nwedding journey.",
      body: "Tell us where you'd like to wed. Grecia writes back, personally, within five working days.",
      ctaLabel: "Request a private consultation",
    },
  },

  es: {
    hero: {
      eyebrow: "Prensa y Reconocimiento",
      scriptOverline: "El estudio, en",
      headline: "*la* prensa.",
      deck: "Quince años de reportajes, perfiles y reconocimiento — ganados, nunca solicitados. Lo que dijeron los editores cuando asistieron a una boda de Grecia Mejía.",
      captionLeft: "Vogue Weddings · perfil de 12 páginas",
      captionCenter: "Prensa seleccionada · 2018 – 2026",
      captionRight: "Lámina I",
    },
    intro: {
      sideLabel: "Una nota sobre la prensa",
      sideNote:
        "Nunca hemos contratado a un publicista. Cada reportaje de esta página comenzó con un editor en una boda.",
      headline: "Ganado, *nunca* solicitado.",
      lede: "El atelier no persigue cobertura. Nunca hemos contratado una agencia de relaciones públicas, nunca hemos pagado por aparecer, nunca hemos enviado una sola nota de prensa.",
      body: [
        "Cada reportaje, perfil y premio de esta página llegó de la misma manera: un editor asistió a una de nuestras bodas —como invitado, amigo de la pareja o, en ocasiones, la propia novia— y escribió sobre ella después. Estamos calladamente orgullosos de ello. Significa que la prensa refleja el trabajo, no el marketing.",
        "Para consultas de prensa, solicitudes de entrevista o para encargar un reportaje, escriba directamente al atelier: Grecia y la directora del estudio atienden a la prensa personalmente.",
      ],
    },
    featured: {
      label: "Reportajes seleccionados",
      headline: "En *papel.*",
      intro:
        "Los reportajes de los que estamos más orgullosos: perfiles extensos y reportajes editoriales en la prensa de lujo del mundo.",
      titles: [
        "El atelier que *desaparece* en el día",
        "Los 25 wedding planners *por los que vale la pena viajar*",
        "Un mandap en el *Mediterráneo*",
        "Dónde casarse en el *Caribe*",
        "El arte de la boda de *varios días*",
      ],
      summaries: [
        "Un perfil de doce páginas del atelier en tres ediciones internacionales, que sigue una boda hindú-cristiana de cuatro días en Cap Cana desde la primera conversación hasta el brunch de la mañana siguiente.",
        "Incluido entre los veinticinco mejores planificadores de bodas de destino del mundo, con especial atención a la fluidez multicultural del atelier.",
        "Un editorial sobre el lenguaje de diseño de una boda india en el Lago de Como producida por el atelier.",
        "El atelier seleccionado como Editor's Pick para bodas de destino boutique en Punta Cana.",
        "Un reportaje sobre el auge del fin de semana nupcial, articulado en torno a una celebración de Grecia Mejía.",
      ],
    },
    quotes: {
      label: "En sus palabras",
      headline: "Lo que dijeron los *editores.*",
      texts: [
        "No tanto planifica una boda como traduce a una familia en un único día irrepetible.",
        "Lo más raro en este sector: una planificadora que desaparece en el día para que solo quede la pareja.",
        "Grecia Mejía se ha convertido, en silencio, en el nombre que las parejas multiculturales se susurran entre sí.",
        "Un atelier que trata la tradición como arquitectura, no como decoración, y se nota en cada imagen.",
      ],
    },
    archive: {
      label: "El registro completo",
      headline: "*Archivo* de cobertura.",
      count: "38 reportajes · 2016 – 2026",
      titles: [
        "Boda real: una celebración india de cuatro días en Cap Cana",
        "El mandap de destino: el ascenso silencioso de Punta Cana",
        "El arte de la boda de varios días",
        "Wedding Planner del Año",
        "Los 25 wedding planners por los que vale la pena viajar",
        "La agenda: bodas de destino",
        "Un mandap en el Mediterráneo",
        "Editor's Choice: bodas multiculturales",
        "Wedding Planner del Año",
        "Planificar en una pausa: los estudios que resistieron",
        "Dónde casarse en el Caribe",
        "El atelier que desaparece en el día",
      ],
      types: [
        "Boda real",
        "Reportaje",
        "Reportaje",
        "Premio",
        "Lista",
        "Directorio",
        "Editorial",
        "Reconocimiento",
        "Premio",
        "Reportaje",
        "Selección del editor",
        "Perfil",
      ],
    },
    awards: {
      label: "Reconocimiento",
      headline: "Premios y *distinciones.*",
      intro:
        "Reconocimiento de los organismos del sector y los editores cuyo criterio respetamos.",
      titles: [
        "Wedding Planner del Año del Caribe",
        "Top 25 wedding planners del mundo",
        "Editor's Choice · Bodas multiculturales",
        "Wedding Planner del Año del Caribe",
        "Premio a la Resiliencia · Estudios",
        "Editor's Pick · Mejores estudios",
        "Reportaje del Año · 12 páginas",
        "Estudio Revelación del Año",
      ],
    },
    cta: {
      eyebrow: "Una conversación privada —",
      headline: "*Comience* su\nviaje nupcial.",
      body: "Cuéntenos dónde le gustaría casarse. Grecia responde, personalmente, en un plazo de cinco días laborables.",
      ctaLabel: "Solicitar una consulta privada",
    },
  },

  fr: {
    hero: {
      eyebrow: "Presse & Reconnaissance",
      scriptOverline: "Le studio, dans",
      headline: "*la* presse.",
      deck: "Quinze ans de reportages, de portraits et de reconnaissance — mérités, jamais sollicités. Ce qu'ont dit les rédacteurs venus à un mariage Grecia Mejía.",
      captionLeft: "Vogue Weddings · portrait de 12 pages",
      captionCenter: "Presse sélectionnée · 2018 – 2026",
      captionRight: "Planche I",
    },
    intro: {
      sideLabel: "Une note sur la presse",
      sideNote:
        "Nous n'avons jamais employé d'attaché de presse. Chaque reportage de cette page a commencé avec un rédacteur lors d'un mariage.",
      headline: "Mérité, *jamais* sollicité.",
      lede: "L'atelier ne court pas après la couverture médiatique. Nous n'avons jamais engagé d'agence de relations presse, jamais payé pour une parution, jamais envoyé le moindre communiqué.",
      body: [
        "Chaque reportage, portrait et prix de cette page est arrivé de la même façon : un rédacteur a assisté à l'un de nos mariages — en tant qu'invité, ami du couple, ou parfois la mariée elle-même — et en a écrit ensuite. Nous en sommes discrètement fiers. Cela signifie que la presse reflète le travail, non le marketing.",
        "Pour toute demande presse, demande d'interview ou commande de reportage, écrivez directement à l'atelier — Grecia et la directrice du studio répondent personnellement à la presse.",
      ],
    },
    featured: {
      label: "Reportages sélectionnés",
      headline: "Sur le *papier.*",
      intro:
        "Les reportages dont nous sommes le plus fiers — portraits au long cours et pages éditoriales dans la presse de luxe du monde entier.",
      titles: [
        "L'atelier qui *disparaît* dans la journée",
        "Les 25 wedding planners *pour qui voyager*",
        "Un mandap sur la *Méditerranée*",
        "Où se marier aux *Caraïbes*",
        "L'art du mariage *sur plusieurs jours*",
      ],
      summaries: [
        "Un portrait de douze pages de l'atelier dans trois éditions internationales, suivant un mariage hindou-chrétien de quatre jours à Cap Cana, de la première conversation au brunch du matin.",
        "Cité parmi les vingt-cinq meilleurs organisateurs de mariages de destination au monde, avec un accent sur l'aisance multiculturelle de l'atelier.",
        "Un éditorial sur le langage esthétique d'un mariage indien au lac de Côme produit par l'atelier.",
        "L'atelier désigné Editor's Pick pour les mariages de destination boutique à Punta Cana.",
        "Un reportage sur l'essor du week-end nuptial, porté par une célébration de Grecia Mejía.",
      ],
    },
    quotes: {
      label: "Dans leurs mots",
      headline: "Ce qu'ont dit les *rédacteurs.*",
      texts: [
        "Elle n'organise pas tant un mariage qu'elle ne traduit une famille en une seule journée irremplaçable.",
        "La chose la plus rare dans ce métier : une organisatrice qui s'efface dans la journée pour qu'il ne reste que le couple.",
        "Grecia Mejía est discrètement devenue le nom que les couples multiculturels se murmurent entre eux.",
        "Un atelier qui traite la tradition comme une architecture, non comme un décor — et cela se voit dans chaque image.",
      ],
    },
    archive: {
      label: "Le registre complet",
      headline: "*Archives* de presse.",
      count: "38 reportages · 2016 – 2026",
      titles: [
        "Vrai mariage : une célébration indienne de quatre jours à Cap Cana",
        "Le mandap de destination : l'ascension discrète de Punta Cana",
        "L'art du mariage sur plusieurs jours",
        "Wedding Planner de l'année",
        "Les 25 wedding planners pour qui voyager",
        "Le carnet d'adresses : mariages de destination",
        "Un mandap sur la Méditerranée",
        "Editor's Choice : mariages multiculturels",
        "Wedding Planner de l'année",
        "Organiser pendant une pause : les ateliers qui ont tenu",
        "Où se marier aux Caraïbes",
        "L'atelier qui disparaît dans la journée",
      ],
      types: [
        "Vrai mariage",
        "Reportage",
        "Reportage",
        "Prix",
        "Liste",
        "Répertoire",
        "Éditorial",
        "Reconnaissance",
        "Prix",
        "Reportage",
        "Choix de la rédaction",
        "Portrait",
      ],
    },
    awards: {
      label: "Reconnaissance",
      headline: "Prix & *distinctions.*",
      intro:
        "La reconnaissance des organismes du secteur et des rédacteurs dont nous respectons le jugement.",
      titles: [
        "Wedding Planner de l'année des Caraïbes",
        "Top 25 des wedding planners au monde",
        "Editor's Choice · Mariages multiculturels",
        "Wedding Planner de l'année des Caraïbes",
        "Prix de la résilience · Ateliers",
        "Editor's Pick · Meilleurs ateliers",
        "Reportage de l'année · 12 pages",
        "Atelier révélation de l'année",
      ],
    },
    cta: {
      eyebrow: "Une conversation privée —",
      headline: "*Commencez* votre\nvoyage nuptial.",
      body: "Dites-nous où vous aimeriez vous marier. Grecia vous répond, personnellement, sous cinq jours ouvrés.",
      ctaLabel: "Demander une consultation privée",
    },
  },

  pt: {
    hero: {
      eyebrow: "Imprensa e Reconhecimento",
      scriptOverline: "O ateliê, na",
      headline: "*imprensa.*",
      deck: "Quinze anos de reportagens, perfis e reconhecimento — conquistados, nunca pedidos. O que disseram os editores quando vieram a um casamento de Grecia Mejía.",
      captionLeft: "Vogue Weddings · perfil de 12 páginas",
      captionCenter: "Imprensa selecionada · 2018 – 2026",
      captionRight: "Estampa I",
    },
    intro: {
      sideLabel: "Uma nota sobre a imprensa",
      sideNote:
        "Nunca contratámos um assessor de imprensa. Cada reportagem desta página começou com um editor num casamento.",
      headline: "Conquistado, *nunca* pedido.",
      lede: "O ateliê não persegue cobertura. Nunca contratámos uma agência de relações públicas, nunca pagámos por uma aparição, nunca enviámos um único comunicado de imprensa.",
      body: [
        "Cada reportagem, perfil e prémio desta página chegou da mesma forma: um editor assistiu a um dos nossos casamentos — como convidado, amigo do casal ou, por vezes, a própria noiva — e escreveu sobre ele depois. Temos um orgulho discreto nisso. Significa que a imprensa reflete o trabalho, não o marketing.",
        "Para questões de imprensa, pedidos de entrevista ou para encomendar uma reportagem, escreva diretamente ao ateliê — Grecia e a diretora do estúdio atendem a imprensa pessoalmente.",
      ],
    },
    featured: {
      label: "Reportagens selecionadas",
      headline: "Em *papel.*",
      intro:
        "As reportagens de que mais nos orgulhamos — perfis extensos e ensaios editoriais na imprensa de luxo de todo o mundo.",
      titles: [
        "O ateliê que *desaparece* no dia",
        "Os 25 wedding planners *por quem vale a pena viajar*",
        "Um mandap no *Mediterrâneo*",
        "Onde casar nas *Caraíbas*",
        "A arte do casamento de *vários dias*",
      ],
      summaries: [
        "Um perfil de doze páginas do ateliê em três edições internacionais, acompanhando um casamento hindu-cristão de quatro dias em Cap Cana, da primeira conversa ao brunch da manhã seguinte.",
        "Incluído entre os vinte e cinco melhores planeadores de casamentos de destino do mundo, com destaque para a fluência multicultural do ateliê.",
        "Um editorial sobre a linguagem de design de um casamento indiano no Lago de Como produzido pelo ateliê.",
        "O ateliê escolhido como Editor's Pick para casamentos de destino boutique em Punta Cana.",
        "Uma reportagem sobre a ascensão do fim de semana nupcial, ancorada numa celebração de Grecia Mejía.",
      ],
    },
    quotes: {
      label: "Nas suas palavras",
      headline: "O que disseram os *editores.*",
      texts: [
        "Ela não planeia tanto um casamento quanto traduz uma família num único dia irrepetível.",
        "O mais raro neste setor: uma planeadora que desaparece no dia para que reste apenas o casal.",
        "Grecia Mejía tornou-se, em silêncio, o nome que os casais multiculturais sussurram uns aos outros.",
        "Um ateliê que trata a tradição como arquitetura, não como decoração — e nota-se em cada imagem.",
      ],
    },
    archive: {
      label: "O registo completo",
      headline: "*Arquivo* de cobertura.",
      count: "38 reportagens · 2016 – 2026",
      titles: [
        "Casamento real: uma celebração indiana de quatro dias em Cap Cana",
        "O mandap de destino: a ascensão discreta de Punta Cana",
        "A arte do casamento de vários dias",
        "Wedding Planner do Ano",
        "Os 25 wedding planners por quem vale a pena viajar",
        "A agenda de contactos: casamentos de destino",
        "Um mandap no Mediterrâneo",
        "Editor's Choice: casamentos multiculturais",
        "Wedding Planner do Ano",
        "Planear durante uma pausa: os ateliês que resistiram",
        "Onde casar nas Caraíbas",
        "O ateliê que desaparece no dia",
      ],
      types: [
        "Casamento real",
        "Reportagem",
        "Reportagem",
        "Prémio",
        "Lista",
        "Diretório",
        "Editorial",
        "Reconhecimento",
        "Prémio",
        "Reportagem",
        "Escolha do editor",
        "Perfil",
      ],
    },
    awards: {
      label: "Reconhecimento",
      headline: "Prémios e *distinções.*",
      intro:
        "Reconhecimento dos organismos do setor e dos editores cujo critério respeitamos.",
      titles: [
        "Wedding Planner do Ano das Caraíbas",
        "Top 25 wedding planners do mundo",
        "Editor's Choice · Casamentos multiculturais",
        "Wedding Planner do Ano das Caraíbas",
        "Prémio de Resiliência · Ateliês",
        "Editor's Pick · Melhores ateliês",
        "Reportagem do Ano · 12 páginas",
        "Ateliê Revelação do Ano",
      ],
    },
    cta: {
      eyebrow: "Uma conversa privada —",
      headline: "*Comece* a sua\njornada nupcial.",
      body: "Diga-nos onde gostaria de se casar. Grecia responde, pessoalmente, no prazo de cinco dias úteis.",
      ctaLabel: "Solicitar uma consulta privada",
    },
  },

  de: {
    hero: {
      eyebrow: "Presse & Anerkennung",
      scriptOverline: "Das Atelier, in",
      headline: "*der* Presse.",
      deck: "Fünfzehn Jahre Beiträge, Porträts und Anerkennung — verdient, nie erbeten. Was die Redakteure sagten, als sie zu einer Grecia-Mejía-Hochzeit kamen.",
      captionLeft: "Vogue Weddings · 12-seitiges Porträt",
      captionCenter: "Ausgewählte Presse · 2018 – 2026",
      captionRight: "Tafel I",
    },
    intro: {
      sideLabel: "Eine Anmerkung zur Presse",
      sideNote:
        "Wir haben nie einen Pressesprecher beschäftigt. Jeder Beitrag auf dieser Seite begann mit einem Redakteur auf einer Hochzeit.",
      headline: "Verdient, *nie* erbeten.",
      lede: "Das Atelier jagt keiner Berichterstattung hinterher. Wir haben nie eine PR-Agentur engagiert, nie für eine Platzierung bezahlt, nie eine einzige Pressemitteilung verschickt.",
      body: [
        "Jeder Beitrag, jedes Porträt und jeder Preis auf dieser Seite entstand auf dieselbe Weise: Ein Redakteur war bei einer unserer Hochzeiten — als Gast, als Freund des Paares oder gelegentlich als Braut selbst — und schrieb anschließend darüber. Darauf sind wir still stolz. Es bedeutet, dass die Presse die Arbeit widerspiegelt, nicht das Marketing.",
        "Für Presseanfragen, Interviewanfragen oder die Beauftragung eines Beitrags schreiben Sie direkt an das Atelier — Grecia und die Studioleiterin betreuen die Presse persönlich.",
      ],
    },
    featured: {
      label: "Ausgewählte Beiträge",
      headline: "Im *Druck.*",
      intro:
        "Die Beiträge, auf die wir am stolzesten sind — ausführliche Porträts und Editorial-Strecken in der Luxuspresse der Welt.",
      titles: [
        "Das Atelier, das im *Tag* verschwindet",
        "Die 25 Hochzeitsplaner, *für die sich die Reise lohnt*",
        "Ein Mandap am *Mittelmeer*",
        "Wo man in der *Karibik* heiratet",
        "Die Kunst der *mehrtägigen* Hochzeit",
      ],
      summaries: [
        "Ein zwölfseitiges Porträt des Ateliers in drei internationalen Ausgaben, das eine viertägige hinduistisch-christliche Hochzeit in Cap Cana vom ersten Gespräch bis zum morgendlichen Brunch begleitet.",
        "Unter die fünfundzwanzig besten Destination-Planer der Welt gewählt, mit Fokus auf die multikulturelle Souveränität des Ateliers.",
        "Ein Editorial über die Gestaltungssprache einer indischen Hochzeit am Comer See, die das Atelier ausrichtete.",
        "Das Atelier als Editor's Pick für Boutique-Destination-Hochzeiten in Punta Cana ausgezeichnet.",
        "Eine Reportage über den Aufstieg des Hochzeitswochenendes, getragen von einer Feier von Grecia Mejía.",
      ],
    },
    quotes: {
      label: "In ihren Worten",
      headline: "Was die *Redakteure* sagten.",
      texts: [
        "Sie plant nicht so sehr eine Hochzeit, als dass sie eine Familie in einen einzigen, unwiederholbaren Tag übersetzt.",
        "Das Seltenste in dieser Branche: eine Planerin, die im Tag verschwindet, sodass nur das Paar bleibt.",
        "Grecia Mejía ist still zu dem Namen geworden, den multikulturelle Paare einander zuflüstern.",
        "Ein Atelier, das Tradition als Architektur behandelt, nicht als Dekoration — und das zeigt sich in jedem Bild.",
      ],
    },
    archive: {
      label: "Das vollständige Verzeichnis",
      headline: "Das Presse-*Archiv.*",
      count: "38 Beiträge · 2016 – 2026",
      titles: [
        "Echte Hochzeit: eine viertägige indische Feier in Cap Cana",
        "Der Destination-Mandap: Punta Canas stiller Aufstieg",
        "Die Kunst der mehrtägigen Hochzeit",
        "Hochzeitsplaner des Jahres",
        "Die 25 Hochzeitsplaner, für die sich die Reise lohnt",
        "Das Adressbuch: Destination-Hochzeiten",
        "Ein Mandap am Mittelmeer",
        "Editor's Choice: multikulturelle Hochzeiten",
        "Hochzeitsplaner des Jahres",
        "Planen in der Pause: die Ateliers, die durchhielten",
        "Wo man in der Karibik heiratet",
        "Das Atelier, das im Tag verschwindet",
      ],
      types: [
        "Echte Hochzeit",
        "Beitrag",
        "Beitrag",
        "Auszeichnung",
        "Liste",
        "Verzeichnis",
        "Editorial",
        "Anerkennung",
        "Auszeichnung",
        "Beitrag",
        "Wahl der Redaktion",
        "Porträt",
      ],
    },
    awards: {
      label: "Anerkennung",
      headline: "Preise & *Auszeichnungen.*",
      intro:
        "Anerkennung von den Branchengremien und Redakteuren, deren Urteil wir respektieren.",
      titles: [
        "Karibischer Hochzeitsplaner des Jahres",
        "Top 25 Hochzeitsplaner weltweit",
        "Editor's Choice · Multikulturelle Hochzeiten",
        "Karibischer Hochzeitsplaner des Jahres",
        "Resilienz-Preis · Ateliers",
        "Editor's Pick · Beste Ateliers",
        "Beitrag des Jahres · 12 Seiten",
        "Aufsteiger-Atelier des Jahres",
      ],
    },
    cta: {
      eyebrow: "Ein privates Gespräch —",
      headline: "*Beginnen* Sie Ihre\nHochzeitsreise.",
      body: "Sagen Sie uns, wo Sie heiraten möchten. Grecia antwortet persönlich innerhalb von fünf Werktagen.",
      ctaLabel: "Eine private Beratung anfragen",
    },
  },

  it: {
    hero: {
      eyebrow: "Stampa e Riconoscimenti",
      scriptOverline: "Lo studio, sulla",
      headline: "*stampa.*",
      deck: "Quindici anni di servizi, ritratti e riconoscimenti — conquistati, mai sollecitati. Ciò che dissero i redattori quando vennero a un matrimonio di Grecia Mejía.",
      captionLeft: "Vogue Weddings · ritratto di 12 pagine",
      captionCenter: "Stampa selezionata · 2018 – 2026",
      captionRight: "Tavola I",
    },
    intro: {
      sideLabel: "Una nota sulla stampa",
      sideNote:
        "Non abbiamo mai avuto un ufficio stampa. Ogni servizio in questa pagina è nato con un redattore a un matrimonio.",
      headline: "Conquistato, *mai* sollecitato.",
      lede: "L'atelier non insegue la copertura mediatica. Non abbiamo mai assunto un'agenzia di PR, mai pagato per una pubblicazione, mai inviato un solo comunicato stampa.",
      body: [
        "Ogni servizio, ritratto e premio in questa pagina è arrivato nello stesso modo: un redattore ha partecipato a uno dei nostri matrimoni — come ospite, amico della coppia o, a volte, la sposa stessa — e ne ha scritto dopo. Ne siamo silenziosamente fieri. Significa che la stampa riflette il lavoro, non il marketing.",
        "Per richieste stampa, richieste di intervista o per commissionare un servizio, scrivete direttamente all'atelier — Grecia e la direttrice dello studio seguono personalmente la stampa.",
      ],
    },
    featured: {
      label: "Servizi selezionati",
      headline: "Su *carta.*",
      intro:
        "I servizi di cui andiamo più fieri — ritratti approfonditi e pagine editoriali nella stampa di lusso di tutto il mondo.",
      titles: [
        "L'atelier che *scompare* nel giorno",
        "I 25 wedding planner *per cui vale la pena viaggiare*",
        "Un mandap sul *Mediterraneo*",
        "Dove sposarsi ai *Caraibi*",
        "L'arte del matrimonio di *più giorni*",
      ],
      summaries: [
        "Un ritratto di dodici pagine dell'atelier in tre edizioni internazionali, che segue un matrimonio indù-cristiano di quattro giorni a Cap Cana, dalla prima conversazione al brunch del mattino.",
        "Inserito tra i venticinque migliori wedding planner di destinazione al mondo, con un'attenzione alla fluidità multiculturale dell'atelier.",
        "Un editoriale sul linguaggio progettuale di un matrimonio indiano sul Lago di Como prodotto dall'atelier.",
        "L'atelier scelto come Editor's Pick per i matrimoni di destinazione boutique a Punta Cana.",
        "Un servizio sull'ascesa del weekend nuziale, incentrato su una celebrazione di Grecia Mejía.",
      ],
    },
    quotes: {
      label: "Con le loro parole",
      headline: "Ciò che dissero i *redattori.*",
      texts: [
        "Non tanto organizza un matrimonio quanto traduce una famiglia in un unico, irripetibile giorno.",
        "La cosa più rara in questo settore: un'organizzatrice che scompare nel giorno perché resti solo la coppia.",
        "Grecia Mejía è diventata silenziosamente il nome che le coppie multiculturali si sussurrano l'un l'altra.",
        "Un atelier che tratta la tradizione come architettura, non come decorazione — e si vede in ogni fotogramma.",
      ],
    },
    archive: {
      label: "Il registro completo",
      headline: "*Archivio* della stampa.",
      count: "38 servizi · 2016 – 2026",
      titles: [
        "Matrimonio vero: una celebrazione indiana di quattro giorni a Cap Cana",
        "Il mandap di destinazione: la quieta ascesa di Punta Cana",
        "L'arte del matrimonio di più giorni",
        "Wedding Planner dell'Anno",
        "I 25 wedding planner per cui vale la pena viaggiare",
        "La rubrica: matrimoni di destinazione",
        "Un mandap sul Mediterraneo",
        "Editor's Choice: matrimoni multiculturali",
        "Wedding Planner dell'Anno",
        "Organizzare durante una pausa: gli atelier che hanno resistito",
        "Dove sposarsi ai Caraibi",
        "L'atelier che scompare nel giorno",
      ],
      types: [
        "Matrimonio vero",
        "Servizio",
        "Servizio",
        "Premio",
        "Elenco",
        "Rubrica",
        "Editoriale",
        "Riconoscimento",
        "Premio",
        "Servizio",
        "Scelta del redattore",
        "Ritratto",
      ],
    },
    awards: {
      label: "Riconoscimento",
      headline: "Premi e *riconoscimenti.*",
      intro:
        "Il riconoscimento degli enti di settore e dei redattori di cui rispettiamo il giudizio.",
      titles: [
        "Wedding Planner dell'Anno dei Caraibi",
        "Top 25 wedding planner al mondo",
        "Editor's Choice · Matrimoni multiculturali",
        "Wedding Planner dell'Anno dei Caraibi",
        "Premio alla Resilienza · Atelier",
        "Editor's Pick · Migliori atelier",
        "Servizio dell'Anno · 12 pagine",
        "Atelier Rivelazione dell'Anno",
      ],
    },
    cta: {
      eyebrow: "Una conversazione privata —",
      headline: "*Iniziate* il vostro\nviaggio nuziale.",
      body: "Diteci dove vorreste sposarvi. Grecia risponde, personalmente, entro cinque giorni lavorativi.",
      ctaLabel: "Richiedere una consulenza privata",
    },
  },
};

// ── Build doc ──────────────────────────────────────────────────────────
function buildDoc(locale: Locale) {
  const c = COPY[locale];

  return {
    hero: c.hero,
    intro: {
      sideLabel: c.intro.sideLabel,
      sideNote: c.intro.sideNote,
      headline: c.intro.headline,
      lede: c.intro.lede,
      body: ptParagraphs(c.intro.body),
    },
    featured: {
      label: c.featured.label,
      headline: c.featured.headline,
      intro: c.featured.intro,
      items: c.featured.titles.map((title, i) =>
        keyed({
          publication: FEATURE_PUBS[i],
          date: FEATURE_DATES[i],
          title,
          summary: c.featured.summaries[i],
          imageKey: FEATURE_KEYS[i],
        }),
      ),
    },
    quotes: {
      label: c.quotes.label,
      headline: c.quotes.headline,
      items: c.quotes.texts.map((quote, i) =>
        keyed({
          quote,
          publication: QUOTE_META[i].publication,
          year: QUOTE_META[i].year,
        }),
      ),
    },
    archive: {
      label: c.archive.label,
      headline: c.archive.headline,
      count: c.archive.count,
      items: c.archive.titles.map((title, i) =>
        keyed({
          year: ARCHIVE_META[i].year,
          publication: ARCHIVE_META[i].publication,
          title,
          type: c.archive.types[i],
        }),
      ),
    },
    awards: {
      label: c.awards.label,
      headline: c.awards.headline,
      intro: c.awards.intro,
      items: c.awards.titles.map((title, i) =>
        keyed({
          year: AWARD_META[i].year,
          title,
          publication: AWARD_META[i].publication,
        }),
      ),
    },
    cta: {
      eyebrow: c.cta.eyebrow,
      headline: c.cta.headline,
      body: c.cta.body,
      cta: { label: c.cta.ctaLabel, href: "/contact" },
    },
  };
}

async function run() {
  console.log(`Seeding pressPage in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  for (const locale of locales) {
    tx.createOrReplace({
      _id: docId(locale),
      _type: "pressPage",
      language: locale,
      ...buildDoc(locale),
    });
  }

  tx.createOrReplace({
    _id: "pressPage-metadata",
    _type: "translation.metadata",
    schemaTypes: ["pressPage"],
    translations: locales.map((locale) => ({
      _key: locale,
      language: locale,
      value: { _type: "reference", _ref: docId(locale), _weak: true },
    })),
  });

  // Shared media doc — pre-seed the hero + featured key slots and alt
  // defaults. Created only if absent so re-runs never clobber uploaded images.
  tx.createIfNotExists({
    _id: "pressPageMedia",
    _type: "pressPageMedia",
    hero: {
      image: {
        _type: "image",
        alt: "A Grecia Mejía wedding, photographed for the press",
      },
    },
    featured: {
      images: FEATURE_KEYS.map((key, i) =>
        keyed({
          _type: "image",
          key,
          alt: `${FEATURE_PUBS[i]} feature`,
        }),
      ),
    },
  });

  await tx.commit();
  console.log(
    `✓ Seeded ${locales.length} pressPage docs + media stub + translation metadata.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
