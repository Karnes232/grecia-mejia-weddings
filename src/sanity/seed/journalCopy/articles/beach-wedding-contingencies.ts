/**
 * Journal article — "When the Tide Comes In: Beach Wedding Contingencies".
 * Full rich body mirroring the design's `pages/journal-article.jsx`.
 */

import { type Locale } from "../../../../i18n/routing";
import * as b from "../body";
import type { ArticleSeed, ArticleLocaleCopy } from "../types";

const PC = "/destinations/punta-cana";
const AMALFI = "/journal/when-to-wed-amalfi-coast";

type Body = {
  introP: b.Run[];
  tideH: string;
  tideP1: b.Run[];
  tideP2: string;
  statLabels: [string, string, string];
  takeH: string;
  takeItems: string[];
  contingenciesH: string;
  contingenciesP: string;
  tentH: string;
  tentP: string;
  fourH: string;
  fourP: string;
  pqQuote: string;
  pqCite: string;
  vcLabel: string;
  jelly: { tag: string; eyebrow: string; blurb: string; meta: [string, string][]; link: string };
  splitEyebrow: string;
  splitHeading: string;
  splitParas: [string, string];
  dcEyebrow: string;
  dcLink: string;
  cta: { script: string; heading: string; body: string; ctaLabel: string };
  unseenH: string;
  unseenP: b.Run[];
};

const STAT_VALUES: [string, string, string] = ["4pm", "2", "90"];

const en: ArticleLocaleCopy = {
  title: "When the Tide Comes In: Beach Wedding *Contingencies*",
  excerpt:
    "How we plan beach ceremonies that survive the unexpected — the tide tables, the tent we never show the couple, and the 4pm rule.",
  kicker: "Logistics",
  lede: "Every beach ceremony we plan has a second ceremony hidden behind it. The tide tables, the standby tent, and the 4pm rule are why the couple never has to know.",
  faqs: [
    {
      question: "What happens if it rains on a beach wedding?",
      answer:
        "Nothing the couple sees. Every beach ceremony we plan carries a standby tent, pre-rigged and out of sight; if the sky turns, we move the room in under twenty minutes while the guests are still with their champagne.",
    },
    {
      question: "How do you plan around the tide?",
      answer:
        "We read the tide tables for the exact date months ahead, then set the ceremony hour to the falling tide so the water is retreating, not advancing, as the couple says their vows.",
    },
    {
      question: "What is the 4pm rule?",
      answer:
        "Our own standard: no beach ceremony begins after four in the afternoon. It protects the golden-hour light, the dinner service, and the margin we need if anything has to move.",
    },
    {
      question: "Do you ever lose a beach ceremony to weather?",
      answer: [
        "Rarely, and never without a plan already in motion. For the seasonal side of that judgement, see our guide on ",
        { text: "when to wed on the Amalfi Coast", href: AMALFI },
        ".",
      ],
    },
  ],
  bleedQuote: {
    script: "The sea keeps its own time —",
    quote:
      "We do not fight the tide. We read it, we plan around it, and we build a second wedding behind the first so the couple only ever meets the one that works.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const enBody: Body = {
  introP: [
    "A beach ceremony looks effortless because someone spent months making it so. Before we place a single chair on the sand at ",
    { text: "Punta Cana", href: PC },
    ", we have already planned the version of the day where the weather turns — and rehearsed the move so it never shows.",
  ],
  tideH: "The tide is not negotiable",
  tideP1: [
    "The one thing on a beach that answers to no planner is the water. The tide arrives on ",
    { text: "its own schedule", strong: true },
    ", printed in tables months in advance, and it does not care about the timeline we have promised.",
  ],
  tideP2:
    "So we start there. We read the tide tables for the exact date, find the falling tide, and set the ceremony hour to it — the water retreating, the sand widening, the aisle growing rather than shrinking as the couple walks it.",
  statLabels: [
    "The latest a beach ceremony begins",
    "Backup structures rigged and ready",
    "Minutes to move the room indoors",
  ],
  takeH: "The short version",
  takeItems: [
    "Read the tide tables first; set the ceremony to the falling tide",
    "A standby tent is pre-rigged and hidden before the guests arrive",
    "No beach ceremony begins after 4pm — the light and the margin depend on it",
    "The couple never sees the contingency; that is the whole point",
  ],
  contingenciesH: "The three contingencies",
  contingenciesP:
    "Behind every beach wedding we plan sit three quiet safeguards. None of them are visible on the day, and if we have done our work, none of them are needed. But each is ready, and that readiness is the luxury.",
  tentH: "The standby tent",
  tentP:
    "The tent is the one the couple never sees. It stands rigged and dressed just out of frame, matched to the ceremony's palette, ready to receive the room in a single move. If the sky turns, we shift dinner beneath it while the guests are still with their champagne, and the evening simply continues.",
  fourH: "The 4pm rule",
  fourP:
    "Our own standard, held without exception: no beach ceremony begins after four in the afternoon. It protects the golden-hour light every photographer wants, it keeps the dinner service unhurried, and it preserves the margin we need if anything at all has to move.",
  pqQuote:
    "A beach wedding is two weddings. The one on the sand, and the one folded up behind the palms that no one is ever meant to see.",
  pqCite: "Grecia Mejía · Founder",
  vcLabel: "Where we test our plans",
  jelly: {
    tag: "Beach pavilion",
    eyebrow: "Bávaro · shoreline ceremony",
    blurb:
      "A two-level palm-thatched pavilion where the standby structure lives out of sight and the tide is close enough to read from the aisle. The room we trust to rehearse the unexpected.",
    meta: [
      ["Tide read", "From the aisle"],
      ["Standby", "On-site tent"],
      ["Best for", "Falling-tide vows"],
    ],
    link: "Read the venue brief",
  },
  splitEyebrow: "The plan you never see",
  splitHeading: "Two weddings, one afternoon.",
  splitParas: [
    "Every contingency we build is designed to stay invisible — a second wedding rigged, dressed and waiting, so the first can proceed as if nothing could ever interrupt it.",
    "The couple walks the sand believing the day is simple. That belief is the deliverable; the machinery behind it is ours to carry, and ours alone.",
  ],
  dcEyebrow: "The destination, in full",
  dcLink: "Read the destination guide",
  cta: {
    script: "A private conversation —",
    heading: "Planning a beach ceremony that has to be flawless?",
    body: "Tell us your date and your shoreline, and Grecia will write back personally within five working days with the contingencies already in mind.",
    ctaLabel: "Request a consultation",
  },
  unseenH: "What the couple never sees",
  unseenP: [
    "The best contingency is the one that stays folded behind the palms. The couple remembers the light on the water; we remember the tent we never raised. For the seasonal judgement behind all of this, read on to ",
    { text: "when to wed on the Amalfi Coast", href: AMALFI },
    ".",
  ],
};

const es: ArticleLocaleCopy = {
  title: "Cuando sube la marea: *contingencias* de una boda en la playa",
  excerpt:
    "Cómo planificamos ceremonias en la playa que sobreviven a lo imprevisto: las tablas de mareas, la carpa que nunca mostramos a la pareja y la regla de las 16 h.",
  kicker: "Logística",
  lede: "Cada ceremonia en la playa que planificamos lleva detrás una segunda ceremonia oculta. Las tablas de mareas, la carpa de reserva y la regla de las 16 h son la razón por la que la pareja nunca tiene que enterarse.",
  faqs: [
    {
      question: "¿Qué pasa si llueve en una boda en la playa?",
      answer:
        "Nada que la pareja vea. Cada ceremonia en la playa que planificamos lleva una carpa de reserva, montada de antemano y fuera de la vista; si el cielo cambia, trasladamos la sala en menos de veinte minutos mientras los invitados aún tienen su champán.",
    },
    {
      question: "¿Cómo planifican en torno a la marea?",
      answer:
        "Leemos las tablas de mareas para la fecha exacta con meses de antelación, y fijamos la hora de la ceremonia en la marea descendente, para que el agua se retire, y no avance, mientras la pareja da el sí.",
    },
    {
      question: "¿Qué es la regla de las 16 h?",
      answer:
        "Nuestro propio estándar: ninguna ceremonia en la playa empieza después de las cuatro de la tarde. Protege la luz dorada, el servicio de cena y el margen que necesitamos si algo debe moverse.",
    },
    {
      question: "¿Alguna vez pierden una ceremonia en la playa por el clima?",
      answer: [
        "Rara vez, y nunca sin un plan ya en marcha. Para el lado estacional de ese criterio, mira nuestra guía sobre ",
        { text: "cuándo casarse en la Costa Amalfitana", href: AMALFI },
        ".",
      ],
    },
  ],
  bleedQuote: {
    script: "El mar sigue su propio tiempo —",
    quote:
      "No luchamos contra la marea. La leemos, planificamos en torno a ella y construimos una segunda boda detrás de la primera para que la pareja solo conozca la que funciona.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const esBody: Body = {
  introP: [
    "Una ceremonia en la playa parece sencilla porque alguien pasó meses haciéndola así. Antes de colocar una sola silla sobre la arena en ",
    { text: "Punta Cana", href: PC },
    ", ya hemos planificado la versión del día en que el tiempo cambia — y ensayado el traslado para que nunca se note.",
  ],
  tideH: "La marea no se negocia",
  tideP1: [
    "Lo único en una playa que no responde a ningún planificador es el agua. La marea llega según ",
    { text: "su propio horario", strong: true },
    ", impreso en tablas con meses de antelación, y no le importa el cronograma que hemos prometido.",
  ],
  tideP2:
    "Así que empezamos ahí. Leemos las tablas de mareas para la fecha exacta, buscamos la marea descendente y fijamos en ella la hora de la ceremonia — el agua retirándose, la arena ensanchándose, el pasillo creciendo en lugar de encogerse mientras la pareja lo recorre.",
  statLabels: [
    "Lo más tarde que empieza una ceremonia en la playa",
    "Estructuras de respaldo montadas y listas",
    "Minutos para trasladar la sala a cubierto",
  ],
  takeH: "La versión corta",
  takeItems: [
    "Lee primero las tablas de mareas; fija la ceremonia en la marea descendente",
    "La carpa de reserva se monta y se oculta antes de que lleguen los invitados",
    "Ninguna ceremonia en la playa empieza después de las 16 h — la luz y el margen dependen de ello",
    "La pareja nunca ve la contingencia; ese es todo el objetivo",
  ],
  contingenciesH: "Las tres contingencias",
  contingenciesP:
    "Detrás de cada boda en la playa que planificamos hay tres salvaguardas silenciosas. Ninguna es visible el día, y si hemos hecho bien nuestro trabajo, ninguna hace falta. Pero cada una está lista, y esa disposición es el lujo.",
  tentH: "La carpa de reserva",
  tentP:
    "La carpa es la que la pareja nunca ve. Está montada y vestida justo fuera de plano, a juego con la paleta de la ceremonia, lista para recibir la sala en un solo movimiento. Si el cielo cambia, trasladamos la cena bajo ella mientras los invitados aún tienen su champán, y la velada simplemente continúa.",
  fourH: "La regla de las 16 h",
  fourP:
    "Nuestro propio estándar, sostenido sin excepción: ninguna ceremonia en la playa empieza después de las cuatro de la tarde. Protege la luz dorada que todo fotógrafo desea, mantiene sin prisas el servicio de cena y preserva el margen que necesitamos si algo debe moverse.",
  pqQuote:
    "Una boda en la playa son dos bodas. La de la arena, y la plegada detrás de las palmeras que nadie debe ver jamás.",
  pqCite: "Grecia Mejía · Fundadora",
  vcLabel: "Dónde ponemos a prueba nuestros planes",
  jelly: {
    tag: "Pabellón de playa",
    eyebrow: "Bávaro · ceremonia en la orilla",
    blurb:
      "Un pabellón de dos niveles con techo de palma donde la estructura de reserva vive fuera de la vista y la marea está lo bastante cerca para leerla desde el pasillo. La sala en la que confiamos para ensayar lo imprevisto.",
    meta: [
      ["Lectura de marea", "Desde el pasillo"],
      ["Respaldo", "Carpa en la sede"],
      ["Ideal para", "Votos en marea baja"],
    ],
    link: "Leer la ficha de la sede",
  },
  splitEyebrow: "El plan que nunca ves",
  splitHeading: "Dos bodas, una tarde.",
  splitParas: [
    "Cada contingencia que construimos está diseñada para permanecer invisible — una segunda boda montada, vestida y a la espera, para que la primera transcurra como si nada pudiera interrumpirla.",
    "La pareja camina por la arena creyendo que el día es sencillo. Esa creencia es el entregable; la maquinaria detrás es nuestra para cargar, y solo nuestra.",
  ],
  dcEyebrow: "El destino, completo",
  dcLink: "Leer la guía del destino",
  cta: {
    script: "Una conversación privada —",
    heading: "¿Planeas una ceremonia en la playa que debe ser impecable?",
    body: "Cuéntanos tu fecha y tu orilla, y Grecia te responderá personalmente en cinco días laborables con las contingencias ya en mente.",
    ctaLabel: "Solicitar una consulta",
  },
  unseenH: "Lo que la pareja nunca ve",
  unseenP: [
    "La mejor contingencia es la que queda plegada detrás de las palmeras. La pareja recuerda la luz sobre el agua; nosotros recordamos la carpa que nunca levantamos. Para el criterio estacional detrás de todo esto, sigue leyendo hacia ",
    { text: "cuándo casarse en la Costa Amalfitana", href: AMALFI },
    ".",
  ],
};

const fr: ArticleLocaleCopy = {
  title: "Quand la marée monte : *plans B* d'un mariage sur la plage",
  excerpt:
    "Comment nous planifions des cérémonies sur la plage qui survivent à l'imprévu — les tables de marées, la tente qu'on ne montre jamais au couple et la règle de 16 h.",
  kicker: "Logistique",
  lede: "Chaque cérémonie sur la plage que nous planifions en cache une seconde. Les tables de marées, la tente de secours et la règle de 16 h font que le couple n'a jamais à le savoir.",
  faqs: [
    {
      question: "Que se passe-t-il s'il pleut sur un mariage de plage ?",
      answer:
        "Rien que le couple ne voie. Chaque cérémonie sur la plage que nous planifions dispose d'une tente de secours, montée à l'avance et hors de vue ; si le ciel tourne, nous déplaçons la salle en moins de vingt minutes tandis que les invités tiennent encore leur champagne.",
    },
    {
      question: "Comment planifiez-vous autour de la marée ?",
      answer:
        "Nous lisons les tables de marées pour la date exacte des mois à l'avance, puis fixons l'heure de la cérémonie à la marée descendante, pour que l'eau se retire, et n'avance pas, tandis que le couple prononce ses vœux.",
    },
    {
      question: "Qu'est-ce que la règle de 16 h ?",
      answer:
        "Notre propre standard : aucune cérémonie sur la plage ne commence après quatre heures de l'après-midi. Elle protège la lumière dorée, le service du dîner et la marge dont nous avons besoin si quelque chose doit bouger.",
    },
    {
      question: "Perdez-vous parfois une cérémonie de plage à cause du temps ?",
      answer: [
        "Rarement, et jamais sans un plan déjà en marche. Pour le versant saisonnier de ce jugement, voyez notre guide sur ",
        { text: "quand se marier sur la côte amalfitaine", href: AMALFI },
        ".",
      ],
    },
  ],
  bleedQuote: {
    script: "La mer suit son propre temps —",
    quote:
      "Nous ne combattons pas la marée. Nous la lisons, nous planifions autour d'elle, et nous bâtissons un second mariage derrière le premier pour que le couple ne rencontre jamais que celui qui fonctionne.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const frBody: Body = {
  introP: [
    "Une cérémonie sur la plage paraît sans effort parce que quelqu'un a passé des mois à la rendre telle. Avant de poser une seule chaise sur le sable à ",
    { text: "Punta Cana", href: PC },
    ", nous avons déjà planifié la version du jour où le temps tourne — et répété le déplacement pour qu'il ne se voie jamais.",
  ],
  tideH: "La marée ne se négocie pas",
  tideP1: [
    "La seule chose sur une plage qui n'obéit à aucun planificateur, c'est l'eau. La marée arrive selon ",
    { text: "son propre horaire", strong: true },
    ", imprimé dans des tables des mois à l'avance, et elle se moque du déroulé que nous avons promis.",
  ],
  tideP2:
    "Nous partons donc de là. Nous lisons les tables de marées pour la date exacte, trouvons la marée descendante, et y fixons l'heure de la cérémonie — l'eau se retirant, le sable s'élargissant, l'allée grandissant plutôt que rétrécissant tandis que le couple la parcourt.",
  statLabels: [
    "L'heure la plus tardive de début d'une cérémonie de plage",
    "Structures de secours montées et prêtes",
    "Minutes pour déplacer la salle à l'abri",
  ],
  takeH: "En bref",
  takeItems: [
    "Lisez d'abord les tables de marées ; fixez la cérémonie à la marée descendante",
    "La tente de secours est montée et dissimulée avant l'arrivée des invités",
    "Aucune cérémonie de plage ne commence après 16 h — la lumière et la marge en dépendent",
    "Le couple ne voit jamais le plan B ; c'est là tout le principe",
  ],
  contingenciesH: "Les trois plans B",
  contingenciesP:
    "Derrière chaque mariage de plage que nous planifions se tiennent trois garde-fous discrets. Aucun n'est visible le jour même, et si nous avons bien travaillé, aucun n'est nécessaire. Mais chacun est prêt, et cette préparation est le luxe.",
  tentH: "La tente de secours",
  tentP:
    "La tente est celle que le couple ne voit jamais. Elle se dresse, montée et habillée, juste hors champ, accordée à la palette de la cérémonie, prête à recevoir la salle d'un seul geste. Si le ciel tourne, nous glissons le dîner sous elle tandis que les invités tiennent encore leur champagne, et la soirée continue simplement.",
  fourH: "La règle de 16 h",
  fourP:
    "Notre propre standard, tenu sans exception : aucune cérémonie sur la plage ne commence après quatre heures de l'après-midi. Elle protège la lumière dorée que tout photographe recherche, garde le service du dîner sans hâte, et préserve la marge dont nous avons besoin si quoi que ce soit doit bouger.",
  pqQuote:
    "Un mariage de plage, ce sont deux mariages. Celui sur le sable, et celui replié derrière les palmiers que nul n'est censé voir.",
  pqCite: "Grecia Mejía · Fondatrice",
  vcLabel: "Où nous éprouvons nos plans",
  jelly: {
    tag: "Pavillon de plage",
    eyebrow: "Bávaro · cérémonie sur le rivage",
    blurb:
      "Un pavillon à deux niveaux couvert de palmes où la structure de secours vit hors de vue et où la marée est assez proche pour se lire depuis l'allée. La salle à laquelle nous confions la répétition de l'imprévu.",
    meta: [
      ["Lecture de marée", "Depuis l'allée"],
      ["Secours", "Tente sur place"],
      ["Idéal pour", "Vœux à marée descendante"],
    ],
    link: "Lire la fiche du lieu",
  },
  splitEyebrow: "Le plan que vous ne voyez jamais",
  splitHeading: "Deux mariages, une après-midi.",
  splitParas: [
    "Chaque plan B que nous bâtissons est conçu pour rester invisible — un second mariage monté, habillé et en attente, pour que le premier se déroule comme si rien ne pouvait jamais l'interrompre.",
    "Le couple parcourt le sable en croyant la journée simple. Cette croyance est le livrable ; la mécanique derrière est à nous de porter, et à nous seuls.",
  ],
  dcEyebrow: "La destination, en entier",
  dcLink: "Lire le guide de destination",
  cta: {
    script: "Une conversation privée —",
    heading: "Un mariage de plage qui doit être irréprochable ?",
    body: "Dites-nous votre date et votre rivage, et Grecia vous répondra personnellement sous cinq jours ouvrés, les plans B déjà en tête.",
    ctaLabel: "Demander une consultation",
  },
  unseenH: "Ce que le couple ne voit jamais",
  unseenP: [
    "Le meilleur plan B est celui qui reste replié derrière les palmiers. Le couple se souvient de la lumière sur l'eau ; nous nous souvenons de la tente que nous n'avons jamais dressée. Pour le jugement saisonnier derrière tout cela, poursuivez vers ",
    { text: "quand se marier sur la côte amalfitaine", href: AMALFI },
    ".",
  ],
};

const pt: ArticleLocaleCopy = {
  title: "Quando a maré sobe: *planos B* de um casamento na praia",
  excerpt:
    "Como planeamos cerimónias na praia que sobrevivem ao imprevisto — as tabelas de marés, a tenda que nunca mostramos ao casal e a regra das 16h.",
  kicker: "Logística",
  lede: "Cada cerimónia na praia que planeamos esconde uma segunda cerimónia atrás de si. As tabelas de marés, a tenda de reserva e a regra das 16h são a razão pela qual o casal nunca precisa de saber.",
  faqs: [
    {
      question: "O que acontece se chover num casamento na praia?",
      answer:
        "Nada que o casal veja. Cada cerimónia na praia que planeamos leva uma tenda de reserva, montada de antemão e fora de vista; se o céu mudar, movemos a sala em menos de vinte minutos enquanto os convidados ainda têm o seu champanhe.",
    },
    {
      question: "Como planeiam em torno da maré?",
      answer:
        "Lemos as tabelas de marés para a data exata com meses de antecedência e fixamos a hora da cerimónia na maré vazante, para que a água recue, e não avance, enquanto o casal troca os votos.",
    },
    {
      question: "O que é a regra das 16h?",
      answer:
        "O nosso próprio padrão: nenhuma cerimónia na praia começa depois das quatro da tarde. Protege a luz dourada, o serviço de jantar e a margem de que precisamos se algo tiver de mudar.",
    },
    {
      question: "Alguma vez perdem uma cerimónia na praia por causa do tempo?",
      answer: [
        "Raramente, e nunca sem um plano já em marcha. Para o lado sazonal desse critério, veja o nosso guia sobre ",
        { text: "quando casar na Costa Amalfitana", href: AMALFI },
        ".",
      ],
    },
  ],
  bleedQuote: {
    script: "O mar segue o seu próprio tempo —",
    quote:
      "Não lutamos contra a maré. Lemo-la, planeamos em torno dela e construímos um segundo casamento atrás do primeiro para que o casal só conheça aquele que funciona.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const ptBody: Body = {
  introP: [
    "Uma cerimónia na praia parece simples porque alguém passou meses a torná-la assim. Antes de colocarmos uma única cadeira sobre a areia em ",
    { text: "Punta Cana", href: PC },
    ", já planeámos a versão do dia em que o tempo muda — e ensaiámos a mudança para que nunca se note.",
  ],
  tideH: "A maré não se negoceia",
  tideP1: [
    "A única coisa numa praia que não responde a nenhum planeador é a água. A maré chega segundo ",
    { text: "o seu próprio horário", strong: true },
    ", impresso em tabelas com meses de antecedência, e não se importa com o cronograma que prometemos.",
  ],
  tideP2:
    "Por isso começamos aí. Lemos as tabelas de marés para a data exata, encontramos a maré vazante e fixamos nela a hora da cerimónia — a água a recuar, a areia a alargar, o corredor a crescer em vez de encolher enquanto o casal o percorre.",
  statLabels: [
    "A hora mais tardia em que começa uma cerimónia na praia",
    "Estruturas de reserva montadas e prontas",
    "Minutos para mover a sala para o interior",
  ],
  takeH: "A versão curta",
  takeItems: [
    "Leia primeiro as tabelas de marés; fixe a cerimónia na maré vazante",
    "A tenda de reserva é montada e escondida antes de os convidados chegarem",
    "Nenhuma cerimónia na praia começa depois das 16h — a luz e a margem dependem disso",
    "O casal nunca vê o plano B; é esse todo o objetivo",
  ],
  contingenciesH: "Os três planos B",
  contingenciesP:
    "Atrás de cada casamento na praia que planeamos estão três salvaguardas silenciosas. Nenhuma é visível no dia, e se fizemos bem o nosso trabalho, nenhuma é necessária. Mas cada uma está pronta, e essa prontidão é o luxo.",
  tentH: "A tenda de reserva",
  tentP:
    "A tenda é a que o casal nunca vê. Ergue-se, montada e vestida, mesmo fora de plano, a condizer com a paleta da cerimónia, pronta a receber a sala num só movimento. Se o céu mudar, deslocamos o jantar para debaixo dela enquanto os convidados ainda têm o seu champanhe, e a noite simplesmente continua.",
  fourH: "A regra das 16h",
  fourP:
    "O nosso próprio padrão, mantido sem exceção: nenhuma cerimónia na praia começa depois das quatro da tarde. Protege a luz dourada que todo o fotógrafo quer, mantém sem pressa o serviço de jantar e preserva a margem de que precisamos se seja o que for tiver de mudar.",
  pqQuote:
    "Um casamento na praia são dois casamentos. O da areia, e o dobrado atrás das palmeiras que ninguém deve ver.",
  pqCite: "Grecia Mejía · Fundadora",
  vcLabel: "Onde pomos os nossos planos à prova",
  jelly: {
    tag: "Pavilhão de praia",
    eyebrow: "Bávaro · cerimónia na orla",
    blurb:
      "Um pavilhão de dois níveis coberto de palma onde a estrutura de reserva vive fora de vista e a maré está perto o suficiente para se ler do corredor. A sala em que confiamos para ensaiar o imprevisto.",
    meta: [
      ["Leitura de maré", "Do corredor"],
      ["Reserva", "Tenda no local"],
      ["Ideal para", "Votos na maré vazante"],
    ],
    link: "Ler a ficha do local",
  },
  splitEyebrow: "O plano que nunca vê",
  splitHeading: "Dois casamentos, uma tarde.",
  splitParas: [
    "Cada plano B que construímos é feito para permanecer invisível — um segundo casamento montado, vestido e à espera, para que o primeiro decorra como se nada pudesse interrompê-lo.",
    "O casal caminha na areia acreditando que o dia é simples. Essa crença é a entrega; a maquinaria por trás é nossa para carregar, e só nossa.",
  ],
  dcEyebrow: "O destino, por inteiro",
  dcLink: "Ler o guia do destino",
  cta: {
    script: "Uma conversa privada —",
    heading: "A planear uma cerimónia na praia que tem de ser impecável?",
    body: "Diga-nos a sua data e a sua orla, e a Grecia responder-lhe-á pessoalmente em cinco dias úteis, já com os planos B em mente.",
    ctaLabel: "Pedir uma consulta",
  },
  unseenH: "O que o casal nunca vê",
  unseenP: [
    "O melhor plano B é o que fica dobrado atrás das palmeiras. O casal recorda a luz sobre a água; nós recordamos a tenda que nunca erguemos. Para o critério sazonal por trás de tudo isto, continue para ",
    { text: "quando casar na Costa Amalfitana", href: AMALFI },
    ".",
  ],
};

const de: ArticleLocaleCopy = {
  title: "Wenn die Flut kommt: *Notfallpläne* für die Strandhochzeit",
  excerpt:
    "Wie wir Strandzeremonien planen, die das Unerwartete überstehen — die Gezeitentabellen, das Zelt, das wir dem Paar nie zeigen, und die 16-Uhr-Regel.",
  kicker: "Logistik",
  lede: "Hinter jeder Strandzeremonie, die wir planen, steht eine zweite, verborgene. Gezeitentabellen, Ersatzzelt und die 16-Uhr-Regel sorgen dafür, dass das Paar es nie erfahren muss.",
  faqs: [
    {
      question: "Was passiert, wenn es bei einer Strandhochzeit regnet?",
      answer:
        "Nichts, was das Paar sieht. Jede Strandzeremonie, die wir planen, führt ein Ersatzzelt mit, vorab aufgebaut und außer Sicht; dreht der Himmel, verlegen wir den Raum in unter zwanzig Minuten, während die Gäste noch bei ihrem Champagner sind.",
    },
    {
      question: "Wie planen Sie rund um die Gezeiten?",
      answer:
        "Wir lesen die Gezeitentabellen für das genaue Datum Monate im Voraus und legen die Zeremonienstunde auf die ablaufende Flut, damit sich das Wasser zurückzieht und nicht vorrückt, während das Paar sein Ja-Wort gibt.",
    },
    {
      question: "Was ist die 16-Uhr-Regel?",
      answer:
        "Unser eigener Standard: keine Strandzeremonie beginnt nach vier Uhr nachmittags. Sie schützt das goldene Licht, den Dinnerservice und den Spielraum, den wir brauchen, falls etwas verlegt werden muss.",
    },
    {
      question: "Verlieren Sie je eine Strandzeremonie ans Wetter?",
      answer: [
        "Selten, und nie ohne einen bereits laufenden Plan. Für die saisonale Seite dieser Einschätzung sehen Sie unseren Leitfaden ",
        { text: "wann man an der Amalfiküste heiratet", href: AMALFI },
        ".",
      ],
    },
  ],
  bleedQuote: {
    script: "Das Meer hält seine eigene Zeit —",
    quote:
      "Wir kämpfen nicht gegen die Flut. Wir lesen sie, wir planen um sie herum, und wir bauen hinter der ersten eine zweite Hochzeit, damit das Paar nur der begegnet, die funktioniert.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const deBody: Body = {
  introP: [
    "Eine Strandzeremonie wirkt mühelos, weil jemand Monate darauf verwendet hat, sie so zu machen. Bevor wir einen einzigen Stuhl in den Sand von ",
    { text: "Punta Cana", href: PC },
    " stellen, haben wir die Version des Tages, an dem das Wetter dreht, bereits geplant — und den Umzug so geprobt, dass er nie sichtbar wird.",
  ],
  tideH: "Die Flut ist nicht verhandelbar",
  tideP1: [
    "Das Einzige am Strand, das keinem Planer gehorcht, ist das Wasser. Die Flut kommt nach ",
    { text: "ihrem eigenen Plan", strong: true },
    ", Monate im Voraus in Tabellen gedruckt, und sie kümmert sich nicht um den Ablauf, den wir versprochen haben.",
  ],
  tideP2:
    "Also beginnen wir dort. Wir lesen die Gezeitentabellen für das genaue Datum, finden die ablaufende Flut und legen die Zeremonienstunde darauf — das Wasser weicht zurück, der Sand weitet sich, der Gang wächst, statt zu schrumpfen, während das Paar ihn beschreitet.",
  statLabels: [
    "Der späteste Beginn einer Strandzeremonie",
    "Ersatzstrukturen aufgebaut und bereit",
    "Minuten, um den Raum nach drinnen zu verlegen",
  ],
  takeH: "Die Kurzfassung",
  takeItems: [
    "Zuerst die Gezeitentabellen lesen; die Zeremonie auf die ablaufende Flut legen",
    "Das Ersatzzelt wird aufgebaut und versteckt, bevor die Gäste eintreffen",
    "Keine Strandzeremonie beginnt nach 16 Uhr — Licht und Spielraum hängen davon ab",
    "Das Paar sieht den Notfallplan nie; genau das ist der Sinn",
  ],
  contingenciesH: "Die drei Notfallpläne",
  contingenciesP:
    "Hinter jeder Strandhochzeit, die wir planen, stehen drei stille Absicherungen. Keine ist am Tag sichtbar, und wenn wir unsere Arbeit gut gemacht haben, wird keine gebraucht. Aber jede ist bereit, und diese Bereitschaft ist der Luxus.",
  tentH: "Das Ersatzzelt",
  tentP:
    "Das Zelt ist jenes, das das Paar nie sieht. Es steht aufgebaut und geschmückt knapp außerhalb des Bildes, abgestimmt auf die Palette der Zeremonie, bereit, den Raum in einem einzigen Zug aufzunehmen. Dreht der Himmel, verlegen wir das Dinner darunter, während die Gäste noch bei ihrem Champagner sind, und der Abend geht einfach weiter.",
  fourH: "Die 16-Uhr-Regel",
  fourP:
    "Unser eigener Standard, ohne Ausnahme gehalten: keine Strandzeremonie beginnt nach vier Uhr nachmittags. Sie schützt das goldene Licht, das jeder Fotograf will, hält den Dinnerservice unhastig und wahrt den Spielraum, den wir brauchen, falls überhaupt etwas verlegt werden muss.",
  pqQuote:
    "Eine Strandhochzeit sind zwei Hochzeiten. Die im Sand und die zusammengefaltete hinter den Palmen, die niemand je sehen soll.",
  pqCite: "Grecia Mejía · Gründerin",
  vcLabel: "Wo wir unsere Pläne erproben",
  jelly: {
    tag: "Strandpavillon",
    eyebrow: "Bávaro · Zeremonie an der Uferlinie",
    blurb:
      "Ein zweigeschossiger, palmgedeckter Pavillon, in dem die Ersatzstruktur außer Sicht steht und die Flut nahe genug ist, um sie vom Gang aus zu lesen. Der Raum, dem wir das Proben des Unerwarteten anvertrauen.",
    meta: [
      ["Gezeiten-Lesung", "Vom Gang aus"],
      ["Ersatz", "Zelt vor Ort"],
      ["Ideal für", "Gelübde bei ablaufender Flut"],
    ],
    link: "Zum Location-Steckbrief",
  },
  splitEyebrow: "Der Plan, den Sie nie sehen",
  splitHeading: "Zwei Hochzeiten, ein Nachmittag.",
  splitParas: [
    "Jeder Notfallplan, den wir bauen, ist darauf angelegt, unsichtbar zu bleiben — eine zweite Hochzeit, aufgebaut, geschmückt und wartend, damit die erste verläuft, als könnte sie nichts je unterbrechen.",
    "Das Paar geht über den Sand im Glauben, der Tag sei einfach. Dieser Glaube ist das Ergebnis; die Mechanik dahinter tragen wir, und nur wir.",
  ],
  dcEyebrow: "Das Reiseziel, ganz",
  dcLink: "Zum Reiseführer",
  cta: {
    script: "Ein privates Gespräch —",
    heading: "Planen Sie eine Strandzeremonie, die makellos sein muss?",
    body: "Nennen Sie uns Ihr Datum und Ihre Uferlinie, und Grecia antwortet Ihnen persönlich binnen fünf Werktagen — die Notfallpläne bereits im Kopf.",
    ctaLabel: "Beratung anfragen",
  },
  unseenH: "Was das Paar nie sieht",
  unseenP: [
    "Der beste Notfallplan ist der, der hinter den Palmen zusammengefaltet bleibt. Das Paar erinnert sich an das Licht auf dem Wasser; wir erinnern uns an das Zelt, das wir nie aufgerichtet haben. Für die saisonale Einschätzung hinter all dem lesen Sie weiter zu ",
    { text: "wann man an der Amalfiküste heiratet", href: AMALFI },
    ".",
  ],
};

const it: ArticleLocaleCopy = {
  title: "Quando sale la marea: *piani B* di un matrimonio in spiaggia",
  excerpt:
    "Come pianifichiamo cerimonie in spiaggia che sopravvivono all'imprevisto — le tavole delle maree, il tendone che non mostriamo mai agli sposi e la regola delle 16.",
  kicker: "Logistica",
  lede: "Dietro ogni cerimonia in spiaggia che pianifichiamo se ne nasconde una seconda. Le tavole delle maree, il tendone di riserva e la regola delle 16 fanno sì che gli sposi non debbano mai saperlo.",
  faqs: [
    {
      question: "Cosa succede se piove a un matrimonio in spiaggia?",
      answer:
        "Nulla che gli sposi vedano. Ogni cerimonia in spiaggia che pianifichiamo porta con sé un tendone di riserva, montato in anticipo e fuori vista; se il cielo cambia, spostiamo la sala in meno di venti minuti mentre gli invitati hanno ancora il loro champagne.",
    },
    {
      question: "Come pianificate intorno alla marea?",
      answer:
        "Leggiamo le tavole delle maree per la data esatta con mesi di anticipo, poi fissiamo l'ora della cerimonia sulla marea calante, perché l'acqua si ritiri, e non avanzi, mentre gli sposi pronunciano i voti.",
    },
    {
      question: "Cos'è la regola delle 16?",
      answer:
        "Il nostro standard: nessuna cerimonia in spiaggia comincia dopo le quattro del pomeriggio. Protegge la luce dorata, il servizio della cena e il margine che ci serve se qualcosa deve spostarsi.",
    },
    {
      question: "Perdete mai una cerimonia in spiaggia per il meteo?",
      answer: [
        "Di rado, e mai senza un piano già in movimento. Per il lato stagionale di questo giudizio, vedi la nostra guida su ",
        { text: "quando sposarsi in Costiera Amalfitana", href: AMALFI },
        ".",
      ],
    },
  ],
  bleedQuote: {
    script: "Il mare tiene il proprio tempo —",
    quote:
      "Non combattiamo la marea. La leggiamo, pianifichiamo intorno a essa e costruiamo un secondo matrimonio dietro il primo, perché gli sposi incontrino solo quello che funziona.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const itBody: Body = {
  introP: [
    "Una cerimonia in spiaggia sembra semplice perché qualcuno ha passato mesi a renderla tale. Prima di posare una sola sedia sulla sabbia a ",
    { text: "Punta Cana", href: PC },
    ", abbiamo già pianificato la versione del giorno in cui il tempo cambia — e provato lo spostamento perché non si veda mai.",
  ],
  tideH: "La marea non si tratta",
  tideP1: [
    "L'unica cosa in spiaggia che non risponde a nessun pianificatore è l'acqua. La marea arriva secondo ",
    { text: "il suo orario", strong: true },
    ", stampato nelle tavole con mesi di anticipo, e non si cura del programma che abbiamo promesso.",
  ],
  tideP2:
    "Perciò partiamo da lì. Leggiamo le tavole delle maree per la data esatta, troviamo la marea calante e vi fissiamo l'ora della cerimonia — l'acqua che si ritira, la sabbia che si allarga, la navata che cresce anziché restringersi mentre gli sposi la percorrono.",
  statLabels: [
    "L'ora più tarda in cui inizia una cerimonia in spiaggia",
    "Strutture di riserva montate e pronte",
    "Minuti per spostare la sala al coperto",
  ],
  takeH: "In breve",
  takeItems: [
    "Leggi prima le tavole delle maree; fissa la cerimonia sulla marea calante",
    "Il tendone di riserva è montato e nascosto prima che arrivino gli invitati",
    "Nessuna cerimonia in spiaggia inizia dopo le 16 — la luce e il margine dipendono da questo",
    "Gli sposi non vedono mai il piano B; è tutto il senso della cosa",
  ],
  contingenciesH: "I tre piani B",
  contingenciesP:
    "Dietro ogni matrimonio in spiaggia che pianifichiamo stanno tre garanzie silenziose. Nessuna è visibile il giorno stesso, e se abbiamo lavorato bene, nessuna serve. Ma ognuna è pronta, e quella prontezza è il lusso.",
  tentH: "Il tendone di riserva",
  tentP:
    "Il tendone è quello che gli sposi non vedono mai. Sta montato e vestito appena fuori campo, accordato alla palette della cerimonia, pronto a ricevere la sala in un solo movimento. Se il cielo cambia, spostiamo la cena sotto di esso mentre gli invitati hanno ancora il loro champagne, e la serata semplicemente continua.",
  fourH: "La regola delle 16",
  fourP:
    "Il nostro standard, tenuto senza eccezioni: nessuna cerimonia in spiaggia comincia dopo le quattro del pomeriggio. Protegge la luce dorata che ogni fotografo cerca, mantiene senza fretta il servizio della cena e preserva il margine che ci serve se qualsiasi cosa deve spostarsi.",
  pqQuote:
    "Un matrimonio in spiaggia sono due matrimoni. Quello sulla sabbia, e quello ripiegato dietro le palme che nessuno deve vedere.",
  pqCite: "Grecia Mejía · Fondatrice",
  vcLabel: "Dove mettiamo alla prova i nostri piani",
  jelly: {
    tag: "Padiglione di spiaggia",
    eyebrow: "Bávaro · cerimonia sulla riva",
    blurb:
      "Un padiglione a due livelli con tetto di palma dove la struttura di riserva vive fuori vista e la marea è abbastanza vicina da leggersi dalla navata. La sala a cui affidiamo la prova dell'imprevisto.",
    meta: [
      ["Lettura marea", "Dalla navata"],
      ["Riserva", "Tendone in loco"],
      ["Ideale per", "Voti a marea calante"],
    ],
    link: "Leggi la scheda della sede",
  },
  splitEyebrow: "Il piano che non vedi mai",
  splitHeading: "Due matrimoni, un pomeriggio.",
  splitParas: [
    "Ogni piano B che costruiamo è pensato per restare invisibile — un secondo matrimonio montato, vestito e in attesa, perché il primo si svolga come se nulla potesse mai interromperlo.",
    "Gli sposi camminano sulla sabbia credendo la giornata semplice. Quella convinzione è ciò che consegniamo; il meccanismo dietro è nostro da portare, e solo nostro.",
  ],
  dcEyebrow: "La destinazione, per intero",
  dcLink: "Leggi la guida alla destinazione",
  cta: {
    script: "Una conversazione privata —",
    heading: "Stai pianificando una cerimonia in spiaggia che deve essere impeccabile?",
    body: "Dicci la tua data e la tua riva, e Grecia ti risponderà personalmente entro cinque giorni lavorativi, con i piani B già in mente.",
    ctaLabel: "Richiedi una consulenza",
  },
  unseenH: "Ciò che gli sposi non vedono mai",
  unseenP: [
    "Il miglior piano B è quello che resta ripiegato dietro le palme. Gli sposi ricordano la luce sull'acqua; noi ricordiamo il tendone che non abbiamo mai alzato. Per il giudizio stagionale dietro tutto questo, prosegui verso ",
    { text: "quando sposarsi in Costiera Amalfitana", href: AMALFI },
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
    b.h2(t.tideH),
    b.p(t.tideP1),
    b.p(t.tideP2),
    b.stats([
      { value: STAT_VALUES[0], label: t.statLabels[0] },
      { value: STAT_VALUES[1], label: t.statLabels[1] },
      { value: STAT_VALUES[2], label: t.statLabels[2] },
    ]),
    b.takeaways(t.takeH, t.takeItems),
    b.h2(t.contingenciesH),
    b.p(t.contingenciesP),
    b.h3(t.tentH),
    b.p(t.tentP),
    b.h3(t.fourH),
    b.p(t.fourP),
    b.pullQuote(t.pqQuote, t.pqCite),
    b.venueCards(locale, t.vcLabel, [
      {
        venueSlug: "jellyfish-restaurant",
        tag: t.jelly.tag,
        eyebrow: t.jelly.eyebrow,
        blurb: t.jelly.blurb,
        metaRows: t.jelly.meta.map(([label, value]) => ({ label, value })),
        linkLabel: t.jelly.link,
      },
    ]),
    b.split({
      alt: t.splitHeading,
      eyebrow: t.splitEyebrow,
      heading: t.splitHeading,
      paragraphs: [t.splitParas[0], t.splitParas[1]],
    }),
    b.inlineCta({
      script: t.cta.script,
      heading: t.cta.heading,
      body: t.cta.body,
      ctaLabel: t.cta.ctaLabel,
      ctaHref: "/contact",
    }),
    b.destinationCard(locale, "punta-cana", t.dcEyebrow, t.dcLink),
    b.h2(t.unseenH),
    b.p(t.unseenP),
  ];
};

export const article: ArticleSeed = {
  canonicalSlug: "beach-wedding-contingencies",
  categorySlug: "wedding-venues",
  relatedDestinationSlug: "punta-cana",
  relatedVenueSlug: "jellyfish-restaurant",
  readMinutes: 7,
  publishedAt: "2025-12-05T09:00:00Z",
  featured: false,
  relatedArticles: [
    "best-indian-wedding-venues-punta-cana",
    "when-to-wed-amalfi-coast",
    "luxury-punta-cana-wedding-cost",
  ],
  byLocale,
  buildBody,
};
