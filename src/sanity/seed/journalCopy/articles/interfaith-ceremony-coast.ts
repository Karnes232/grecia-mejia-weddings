/**
 * Journal article — "Two Clergy, One Ceremony: Interfaith on the Coast".
 * Full rich body mirroring the design's `pages/journal-article.jsx`.
 */

import { type Locale } from "../../../../i18n/routing";
import * as b from "../body";
import type { ArticleSeed, ArticleLocaleCopy } from "../types";

const JEW = "/multicultural-weddings/jewish-weddings";
const SANGEET = "/journal/the-sangeet-night-before";

type Body = {
  introP: b.Run[];
  choreoH: string;
  choreoP1: string;
  choreoP2: string;
  featureCaption: string;
  featureCredit: string;
  takeH: string;
  takeItems: string[];
  arcH: string;
  arcP: string;
  scriptH: string;
  scriptP: string;
  symbolsH: string;
  symbolsP: string;
  pqQuote: string;
  pqCite: string;
  splitEyebrow: string;
  splitHeading: string;
  splitParas: [string, string];
  rehearsalH: string;
  rehearsalP: string;
  cta: { script: string; heading: string; body: string; ctaLabel: string };
  rememberH: string;
  rememberP: b.Run[];
};

const en: ArticleLocaleCopy = {
  title: "Two Clergy, One Ceremony: *Interfaith* on the Coast",
  excerpt:
    "How we structure interfaith ritual arcs — without compromise, without contradiction, without anyone feeling like a guest at their own wedding.",
  kicker: "Interfaith",
  lede: "An interfaith ceremony is not a negotiation; it is choreography. We build a single arc that lets two traditions speak in full, in turn, without either side feeling abridged.",
  faqs: [
    {
      question: "Can two officiants from different faiths share one ceremony?",
      answer:
        "Yes, and often beautifully. We introduce the two clergy months ahead, agree the order of ritual together, and give each a full passage rather than a token line. The result reads as one ceremony, not two stitched together.",
    },
    {
      question: "How do you avoid a ceremony that feels split in half?",
      answer: [
        "By building a single arc rather than two back-to-back services. Shared symbols carry the ceremony across the seam — see our ",
        { text: "Jewish weddings guide", href: JEW },
        " for how a chuppah can hold more than one tradition beneath it.",
      ],
    },
    {
      question: "What if one family is more observant than the other?",
      answer:
        "We plan around the strictest requirement, never the loosest. When one tradition asks for a specific officiant, a specific text, or a specific sequence, that becomes the fixed point the rest of the arc is built around.",
    },
    {
      question: "How long does an interfaith ceremony run?",
      answer:
        "Longer than a single-tradition service — usually forty to sixty minutes — because both liturgies are given room. The rehearsal is where we protect the pace, so nothing feels rushed on the day.",
    },
  ],
  bleedQuote: {
    script: "After the vows —",
    quote:
      "The families arrived as two. They left as one. That is the whole work of an interfaith ceremony, and it happens in the arc, not the paperwork.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const enBody: Body = {
  introP: [
    "Most interfaith couples come to us braced for compromise — certain that someone will have to give something up. They rarely do. The two traditions almost never conflict on the essentials; they simply speak different grammars for the same vow. Our overview of ",
    { text: "Jewish weddings", href: JEW },
    " is a good place to see how one tradition's ritual logic works before it meets another at the altar.",
  ],
  choreoH: "Choreography, not compromise",
  choreoP1:
    "The instinct, when two faiths meet, is to split the difference — half of one service, half of the other, a polite handshake in the middle. We have watched that approach leave both families feeling shortchanged, as if their tradition had been trimmed to make room. So we do the opposite. We give each tradition its full voice and choreograph the order in which those voices speak.",
  choreoP2:
    "Choreography is the right word because the work is spatial and temporal, not doctrinal. Who stands where, who speaks when, how one blessing hands off to the next without a jarring cut — these are the decisions that make an interfaith ceremony feel inevitable rather than assembled. Nobody is asked to believe less. Everybody is asked to wait their turn, and the waiting is part of the grace.",
  featureCaption: "Two officiants beneath a single chuppah, at the shoreline",
  featureCredit: "Photographed March 2026",
  takeH: "The short version",
  takeItems: [
    "Build one arc, not two services back to back",
    "Give each tradition a full passage, never a token line",
    "Let shared symbols carry the ceremony across the seam",
    "Rehearse the handoffs until the transitions disappear",
  ],
  arcH: "Building the single arc",
  arcP: "An arc has a beginning, a rise, and a resolution — and an interfaith ceremony needs all three to read as one event. We open in a way both traditions recognise, build through the passages that belong to each faith in turn, and resolve on a moment the whole room shares. The order is never accidental; we sequence the rituals so that each one prepares the ground for the next, and the ceremony gathers weight as it goes rather than resetting halfway through.",
  scriptH: "Two officiants, one script",
  scriptP: "We introduce the two clergy long before the day, and we ask them to write the ceremony together, not in parallel. A shared script means each officiant knows precisely where their passage begins and ends, how to cue the other, and where their words are meant to echo rather than repeat. The couple approves the whole document as a single text. By the rehearsal, the two voices already know how to pass the ceremony between them, and the seam that families fear simply never appears.",
  symbolsH: "The shared symbols",
  symbolsP: "Every tradition carries objects and gestures that mean more than words — a canopy, a cup, a cord, a circling, a lit flame. The art of an interfaith arc is finding the symbols that can hold both meanings at once and letting them carry the ceremony across the places where the liturgies differ. A chuppah can shelter more than one blessing. A shared cup can be lifted in two languages. When the symbols do the connective work, the transitions stop feeling like transitions and start feeling like a single unbroken thread.",
  pqQuote:
    "We never ask a family to translate their tradition into someone else's. We ask both to stand under the same sky and speak in turn — and the coast, it turns out, is very good at holding two voices.",
  pqCite: "Grecia Mejía · Founder",
  splitEyebrow: "Where the arc is set",
  splitHeading: "The coast does half the work.",
  splitParas: [
    "An open shoreline has no architecture that belongs to one faith over another. There is no nave, no orientation, no fixed altar to argue over — only sky, water, and the space you choose to consecrate. That neutrality is a gift: it lets two traditions meet on ground that favours neither.",
    "We use the horizon as the ceremony's spine. The couple faces the water, the families gather at the sides, and the two officiants take their places along a line that reads as one continuous stage. The setting itself refuses to take a side, and the ceremony inherits that ease.",
  ],
  rehearsalH: "The rehearsal is everything",
  rehearsalP: "An interfaith ceremony lives or dies at the rehearsal. This is where we walk every handoff at full pace, time each passage, and find the half-second pauses that let one blessing settle before the next begins. We rehearse with both officiants present, both families watching, so that everyone sees the whole arc before the day arrives. What looks effortless on the coast is always the product of an unhurried afternoon spent the day before, protecting the pace and rehearsing the seams until they vanish.",
  cta: {
    script: "A private conversation —",
    heading: "Planning an interfaith wedding on the coast?",
    body: "We take a small number of weddings each year. Tell us your two traditions and your dates, and Grecia will write back personally within five working days.",
    ctaLabel: "Request a consultation",
  },
  rememberH: "What families remember",
  rememberP: [
    "No family has ever told us they remembered the paperwork. What they remember is the moment their own tradition was given its full weight in front of the other side — and the moment they watched the other side receive it with grace. That is the quiet triumph of the single arc: two families arrive separate and leave joined. For a companion piece on the celebrations that surround the ceremony, read our account of ",
    { text: "the sangeet, the night before", href: SANGEET },
    ".",
  ],
};

const es: ArticleLocaleCopy = {
  title: "Dos oficiantes, una ceremonia: *interreligiosa* en la costa",
  excerpt:
    "Cómo estructuramos los arcos rituales interreligiosos: sin concesiones, sin contradicción, sin que nadie se sienta invitado en su propia boda.",
  kicker: "Interreligiosa",
  lede: "Una ceremonia interreligiosa no es una negociación; es coreografía. Construimos un único arco que deja hablar a las dos tradiciones por completo, por turnos, sin que ninguna se sienta recortada.",
  faqs: [
    {
      question: "¿Pueden dos oficiantes de credos distintos compartir una ceremonia?",
      answer:
        "Sí, y a menudo con belleza. Presentamos a los dos oficiantes con meses de antelación, acordamos juntos el orden del ritual y damos a cada uno un pasaje completo, no una línea simbólica. El resultado se lee como una ceremonia, no como dos cosidas.",
    },
    {
      question: "¿Cómo se evita una ceremonia partida en dos?",
      answer: [
        "Construyendo un único arco en lugar de dos oficios consecutivos. Los símbolos compartidos llevan la ceremonia a través de la costura: mira nuestra ",
        { text: "guía de bodas judías", href: JEW },
        " para ver cómo una jupá puede acoger más de una tradición bajo ella.",
      ],
    },
    {
      question: "¿Y si una familia es más practicante que la otra?",
      answer:
        "Planificamos en torno al requisito más estricto, nunca al más laxo. Cuando una tradición pide un oficiante concreto, un texto concreto o una secuencia concreta, ese se convierte en el punto fijo sobre el que se construye el resto del arco.",
    },
    {
      question: "¿Cuánto dura una ceremonia interreligiosa?",
      answer:
        "Más que un oficio de una sola tradición —normalmente de cuarenta a sesenta minutos— porque ambas liturgias tienen espacio. El ensayo es donde protegemos el ritmo, para que nada se sienta apresurado el día de la boda.",
    },
  ],
  bleedQuote: {
    script: "Tras los votos —",
    quote:
      "Las familias llegaron como dos. Se fueron como una. Ese es todo el trabajo de una ceremonia interreligiosa, y ocurre en el arco, no en los papeles.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const esBody: Body = {
  introP: [
    "La mayoría de las parejas interreligiosas llegan preparadas para ceder, seguras de que alguien tendrá que renunciar a algo. Rara vez ocurre. Las dos tradiciones casi nunca chocan en lo esencial; simplemente hablan gramáticas distintas para el mismo voto. Nuestra visión de las ",
    { text: "bodas judías", href: JEW },
    " es un buen lugar para ver cómo funciona la lógica ritual de una tradición antes de encontrarse con otra ante el altar.",
  ],
  choreoH: "Coreografía, no concesión",
  choreoP1:
    "El instinto, cuando dos credos se encuentran, es partir la diferencia: la mitad de un oficio, la mitad del otro, un apretón de manos cortés en el medio. Hemos visto que ese enfoque deja a ambas familias con la sensación de haber salido perdiendo, como si su tradición se hubiera recortado para hacer sitio. Así que hacemos lo contrario. Damos a cada tradición su voz completa y coreografiamos el orden en que esas voces hablan.",
  choreoP2:
    "Coreografía es la palabra justa porque el trabajo es espacial y temporal, no doctrinal. Quién se pone dónde, quién habla cuándo, cómo una bendición cede el paso a la siguiente sin un corte brusco: esas son las decisiones que hacen que una ceremonia interreligiosa parezca inevitable en lugar de montada. A nadie se le pide creer menos. A todos se les pide esperar su turno, y la espera es parte de la gracia.",
  featureCaption: "Dos oficiantes bajo una misma jupá, en la orilla",
  featureCredit: "Fotografiado en marzo de 2026",
  takeH: "La versión corta",
  takeItems: [
    "Construye un arco, no dos oficios consecutivos",
    "Da a cada tradición un pasaje completo, nunca una línea simbólica",
    "Deja que los símbolos compartidos lleven la ceremonia por la costura",
    "Ensaya los relevos hasta que las transiciones desaparezcan",
  ],
  arcH: "Construir el arco único",
  arcP: "Un arco tiene un comienzo, un ascenso y una resolución, y una ceremonia interreligiosa necesita los tres para leerse como un solo acto. Abrimos de un modo que ambas tradiciones reconocen, avanzamos por los pasajes que pertenecen a cada credo por turnos y resolvemos en un momento que comparte toda la sala. El orden nunca es casual; secuenciamos los rituales para que cada uno prepare el terreno del siguiente, y la ceremonia gana peso a medida que avanza en lugar de reiniciarse a la mitad.",
  scriptH: "Dos oficiantes, un solo guion",
  scriptP: "Presentamos a los dos oficiantes mucho antes del día, y les pedimos que escriban la ceremonia juntos, no en paralelo. Un guion compartido significa que cada oficiante sabe exactamente dónde empieza y termina su pasaje, cómo dar la entrada al otro y dónde sus palabras deben resonar en lugar de repetir. La pareja aprueba todo el documento como un único texto. Para el ensayo, las dos voces ya saben cómo pasarse la ceremonia, y la costura que temen las familias simplemente no aparece.",
  symbolsH: "Los símbolos compartidos",
  symbolsP: "Toda tradición porta objetos y gestos que dicen más que las palabras: un palio, una copa, un cordón, un círculo, una llama encendida. El arte del arco interreligioso está en hallar los símbolos que pueden sostener ambos significados a la vez y dejarles llevar la ceremonia por los lugares donde las liturgias difieren. Una jupá puede cobijar más de una bendición. Una copa compartida puede alzarse en dos lenguas. Cuando los símbolos hacen el trabajo de conexión, las transiciones dejan de sentirse como transiciones y empiezan a sentirse como un único hilo ininterrumpido.",
  pqQuote:
    "Nunca pedimos a una familia que traduzca su tradición a la de otra. Pedimos a ambas que se sitúen bajo el mismo cielo y hablen por turnos, y la costa, resulta, es muy buena sosteniendo dos voces.",
  pqCite: "Grecia Mejía · Fundadora",
  splitEyebrow: "Dónde se sitúa el arco",
  splitHeading: "La costa hace la mitad del trabajo.",
  splitParas: [
    "Una orilla abierta no tiene arquitectura que pertenezca a un credo más que a otro. No hay nave, ni orientación, ni altar fijo por el que discutir: solo cielo, agua y el espacio que elijas consagrar. Esa neutralidad es un regalo: deja que dos tradiciones se encuentren en un terreno que no favorece a ninguna.",
    "Usamos el horizonte como columna de la ceremonia. La pareja mira al agua, las familias se reúnen a los lados y los dos oficiantes ocupan su lugar en una línea que se lee como un solo escenario continuo. El entorno mismo se niega a tomar partido, y la ceremonia hereda esa calma.",
  ],
  rehearsalH: "El ensayo lo es todo",
  rehearsalP: "Una ceremonia interreligiosa vive o muere en el ensayo. Aquí recorremos cada relevo a ritmo real, cronometramos cada pasaje y encontramos las pausas de medio segundo que dejan asentarse una bendición antes de que empiece la siguiente. Ensayamos con ambos oficiantes presentes y ambas familias mirando, para que todos vean el arco completo antes de que llegue el día. Lo que parece natural en la costa es siempre fruto de una tarde sin prisa el día anterior, protegiendo el ritmo y ensayando las costuras hasta que se desvanecen.",
  cta: {
    script: "Una conversación privada —",
    heading: "¿Planeas una boda interreligiosa en la costa?",
    body: "Aceptamos un número reducido de bodas al año. Cuéntanos tus dos tradiciones y tus fechas, y Grecia te responderá personalmente en cinco días laborables.",
    ctaLabel: "Solicitar una consulta",
  },
  rememberH: "Lo que recuerdan las familias",
  rememberP: [
    "Ninguna familia nos ha dicho nunca que recordara los papeles. Lo que recuerdan es el momento en que su propia tradición recibió todo su peso ante la otra parte, y el momento en que vieron a la otra parte acogerla con gracia. Ese es el triunfo silencioso del arco único: dos familias llegan separadas y se van unidas. Para un texto complementario sobre las celebraciones que rodean la ceremonia, lee nuestra crónica del ",
    { text: "sangeet, la noche anterior", href: SANGEET },
    ".",
  ],
};

const fr: ArticleLocaleCopy = {
  title: "Deux officiants, une cérémonie : *interconfessionnel* sur la côte",
  excerpt:
    "Comment nous structurons les arcs rituels interconfessionnels — sans compromis, sans contradiction, sans que personne ne se sente invité à son propre mariage.",
  kicker: "Interconfessionnel",
  lede: "Une cérémonie interconfessionnelle n'est pas une négociation ; c'est une chorégraphie. Nous bâtissons un arc unique qui laisse les deux traditions s'exprimer pleinement, tour à tour, sans que l'une se sente abrégée.",
  faqs: [
    {
      question: "Deux officiants de confessions différentes peuvent-ils partager une cérémonie ?",
      answer:
        "Oui, et souvent avec beauté. Nous présentons les deux officiants des mois à l'avance, convenons ensemble de l'ordre du rituel et donnons à chacun un passage entier, non une ligne symbolique. Le résultat se lit comme une cérémonie, non comme deux cousues ensemble.",
    },
    {
      question: "Comment éviter une cérémonie coupée en deux ?",
      answer: [
        "En bâtissant un arc unique plutôt que deux offices consécutifs. Les symboles partagés portent la cérémonie à travers la couture — voyez notre ",
        { text: "guide des mariages juifs", href: JEW },
        " pour découvrir comment une houppa peut abriter plus d'une tradition sous elle.",
      ],
    },
    {
      question: "Et si une famille est plus pratiquante que l'autre ?",
      answer:
        "Nous planifions autour de l'exigence la plus stricte, jamais la plus souple. Quand une tradition demande un officiant précis, un texte précis ou une séquence précise, cela devient le point fixe autour duquel se construit le reste de l'arc.",
    },
    {
      question: "Combien de temps dure une cérémonie interconfessionnelle ?",
      answer:
        "Plus longtemps qu'un office d'une seule tradition — d'ordinaire quarante à soixante minutes — car les deux liturgies ont de la place. La répétition est là où nous protégeons le rythme, pour que rien ne semble précipité le jour venu.",
    },
  ],
  bleedQuote: {
    script: "Après les vœux —",
    quote:
      "Les familles sont arrivées à deux. Elles sont reparties en une. C'est là tout le travail d'une cérémonie interconfessionnelle, et cela se joue dans l'arc, non dans les papiers.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const frBody: Body = {
  introP: [
    "La plupart des couples interconfessionnels arrivent parés au compromis, certains que quelqu'un devra renoncer à quelque chose. C'est rarement le cas. Les deux traditions ne s'opposent presque jamais sur l'essentiel ; elles parlent simplement des grammaires différentes pour le même vœu. Notre panorama des ",
    { text: "mariages juifs", href: JEW },
    " est un bon endroit pour voir comment la logique rituelle d'une tradition fonctionne avant de rencontrer une autre devant l'autel.",
  ],
  choreoH: "Chorégraphie, non compromis",
  choreoP1:
    "L'instinct, quand deux confessions se rencontrent, est de couper la poire en deux : la moitié d'un office, la moitié de l'autre, une poignée de main polie au milieu. Nous avons vu cette approche laisser les deux familles avec le sentiment d'avoir été lésées, comme si leur tradition avait été rognée pour faire de la place. Nous faisons donc l'inverse. Nous donnons à chaque tradition sa voix pleine et chorégraphions l'ordre dans lequel ces voix s'expriment.",
  choreoP2:
    "Chorégraphie est le mot juste, car le travail est spatial et temporel, non doctrinal. Qui se tient où, qui parle quand, comment une bénédiction cède la place à la suivante sans coupure brutale — ce sont les décisions qui rendent une cérémonie interconfessionnelle inévitable plutôt qu'assemblée. On ne demande à personne de croire moins. On demande à chacun d'attendre son tour, et l'attente fait partie de la grâce.",
  featureCaption: "Deux officiants sous une même houppa, au bord de l'eau",
  featureCredit: "Photographié en mars 2026",
  takeH: "En bref",
  takeItems: [
    "Bâtissez un arc, non deux offices consécutifs",
    "Donnez à chaque tradition un passage entier, jamais une ligne symbolique",
    "Laissez les symboles partagés porter la cérémonie à travers la couture",
    "Répétez les relais jusqu'à ce que les transitions disparaissent",
  ],
  arcH: "Bâtir l'arc unique",
  arcP: "Un arc a un début, une montée et une résolution — et une cérémonie interconfessionnelle a besoin des trois pour se lire comme un seul événement. Nous ouvrons d'une manière que les deux traditions reconnaissent, progressons par les passages qui appartiennent à chaque confession tour à tour, et résolvons sur un moment que toute la salle partage. L'ordre n'est jamais fortuit ; nous séquençons les rituels pour que chacun prépare le terrain du suivant, et la cérémonie prend du poids à mesure qu'elle avance au lieu de repartir de zéro à mi-chemin.",
  scriptH: "Deux officiants, un seul texte",
  scriptP: "Nous présentons les deux officiants bien avant le jour, et nous leur demandons d'écrire la cérémonie ensemble, non en parallèle. Un texte partagé signifie que chaque officiant sait précisément où commence et finit son passage, comment donner le relais à l'autre, et où ses mots doivent faire écho plutôt que répéter. Le couple approuve tout le document comme un texte unique. À la répétition, les deux voix savent déjà comment se passer la cérémonie, et la couture que les familles redoutent n'apparaît tout simplement pas.",
  symbolsH: "Les symboles partagés",
  symbolsP: "Toute tradition porte des objets et des gestes qui disent plus que les mots — un dais, une coupe, un cordon, une circumambulation, une flamme allumée. L'art de l'arc interconfessionnel est de trouver les symboles capables de porter les deux sens à la fois et de les laisser conduire la cérémonie à travers les endroits où les liturgies diffèrent. Une houppa peut abriter plus d'une bénédiction. Une coupe partagée peut se lever en deux langues. Quand les symboles font le travail de liaison, les transitions cessent d'être des transitions et deviennent un seul fil ininterrompu.",
  pqQuote:
    "Nous ne demandons jamais à une famille de traduire sa tradition dans celle d'une autre. Nous demandons aux deux de se tenir sous le même ciel et de parler tour à tour — et la côte, il se trouve, sait très bien tenir deux voix.",
  pqCite: "Grecia Mejía · Fondatrice",
  splitEyebrow: "Où l'arc se dresse",
  splitHeading: "La côte fait la moitié du travail.",
  splitParas: [
    "Un rivage ouvert n'a aucune architecture qui appartienne à une confession plutôt qu'à une autre. Pas de nef, pas d'orientation, pas d'autel fixe à disputer — seulement le ciel, l'eau et l'espace que vous choisissez de consacrer. Cette neutralité est un cadeau : elle laisse deux traditions se rencontrer sur un terrain qui n'en favorise aucune.",
    "Nous faisons de l'horizon la colonne de la cérémonie. Le couple fait face à l'eau, les familles se rassemblent sur les côtés, et les deux officiants prennent place le long d'une ligne qui se lit comme une seule scène continue. Le cadre lui-même refuse de prendre parti, et la cérémonie hérite de cette aisance.",
  ],
  rehearsalH: "La répétition est tout",
  rehearsalP: "Une cérémonie interconfessionnelle vit ou meurt à la répétition. C'est là que nous parcourons chaque relais à plein rythme, minutons chaque passage et trouvons les pauses d'une demi-seconde qui laissent une bénédiction se poser avant que la suivante ne commence. Nous répétons avec les deux officiants présents, les deux familles observant, pour que chacun voie l'arc entier avant le jour venu. Ce qui paraît sans effort sur la côte est toujours le fruit d'un après-midi sans hâte la veille, à protéger le rythme et à répéter les coutures jusqu'à ce qu'elles s'effacent.",
  cta: {
    script: "Une conversation privée —",
    heading: "Un mariage interconfessionnel sur la côte en tête ?",
    body: "Nous acceptons un petit nombre de mariages par an. Dites-nous vos deux traditions et vos dates, et Grecia vous répondra personnellement sous cinq jours ouvrés.",
    ctaLabel: "Demander une consultation",
  },
  rememberH: "Ce dont les familles se souviennent",
  rememberP: [
    "Aucune famille ne nous a jamais dit se souvenir des papiers. Ce dont elles se souviennent, c'est du moment où leur propre tradition a reçu tout son poids devant l'autre camp — et du moment où elles ont vu l'autre camp l'accueillir avec grâce. C'est le triomphe discret de l'arc unique : deux familles arrivent séparées et repartent unies. Pour un texte compagnon sur les célébrations qui entourent la cérémonie, lisez notre récit du ",
    { text: "sangeet, la veille au soir", href: SANGEET },
    ".",
  ],
};

const pt: ArticleLocaleCopy = {
  title: "Dois celebrantes, uma cerimónia: *inter-religiosa* na costa",
  excerpt:
    "Como estruturamos os arcos rituais inter-religiosos — sem cedências, sem contradição, sem ninguém se sentir convidado no seu próprio casamento.",
  kicker: "Inter-religiosa",
  lede: "Uma cerimónia inter-religiosa não é uma negociação; é coreografia. Construímos um único arco que deixa as duas tradições falarem por inteiro, à vez, sem nenhuma se sentir reduzida.",
  faqs: [
    {
      question: "Podem dois celebrantes de credos diferentes partilhar uma cerimónia?",
      answer:
        "Sim, e muitas vezes com beleza. Apresentamos os dois celebrantes com meses de antecedência, acordamos juntos a ordem do ritual e damos a cada um uma passagem completa, não uma linha simbólica. O resultado lê-se como uma cerimónia, não como duas cosidas.",
    },
    {
      question: "Como se evita uma cerimónia partida ao meio?",
      answer: [
        "Construindo um único arco em vez de dois ofícios consecutivos. Os símbolos partilhados levam a cerimónia através da costura — veja o nosso ",
        { text: "guia de casamentos judaicos", href: JEW },
        " para ver como uma chupá pode acolher mais do que uma tradição debaixo dela.",
      ],
    },
    {
      question: "E se uma família for mais praticante do que a outra?",
      answer:
        "Planeamos em torno do requisito mais rigoroso, nunca do mais flexível. Quando uma tradição pede um celebrante específico, um texto específico ou uma sequência específica, esse torna-se o ponto fixo à volta do qual se constrói o resto do arco.",
    },
    {
      question: "Quanto dura uma cerimónia inter-religiosa?",
      answer:
        "Mais do que um ofício de uma só tradição — normalmente de quarenta a sessenta minutos — porque ambas as liturgias têm espaço. O ensaio é onde protegemos o ritmo, para que nada pareça apressado no dia.",
    },
  ],
  bleedQuote: {
    script: "Depois dos votos —",
    quote:
      "As famílias chegaram como duas. Partiram como uma. É esse todo o trabalho de uma cerimónia inter-religiosa, e acontece no arco, não nos papéis.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const ptBody: Body = {
  introP: [
    "A maioria dos casais inter-religiosos chega preparada para ceder, certa de que alguém terá de abdicar de algo. Raramente acontece. As duas tradições quase nunca colidem no essencial; falam apenas gramáticas diferentes para o mesmo voto. A nossa visão dos ",
    { text: "casamentos judaicos", href: JEW },
    " é um bom lugar para ver como funciona a lógica ritual de uma tradição antes de encontrar outra diante do altar.",
  ],
  choreoH: "Coreografia, não cedência",
  choreoP1:
    "O instinto, quando dois credos se encontram, é dividir a diferença: metade de um ofício, metade do outro, um aperto de mão cortês ao meio. Vimos essa abordagem deixar ambas as famílias com a sensação de terem saído a perder, como se a sua tradição tivesse sido aparada para abrir espaço. Por isso fazemos o contrário. Damos a cada tradição a sua voz completa e coreografamos a ordem em que essas vozes falam.",
  choreoP2:
    "Coreografia é a palavra certa porque o trabalho é espacial e temporal, não doutrinal. Quem fica onde, quem fala quando, como uma bênção cede o lugar à seguinte sem um corte brusco — são essas as decisões que fazem uma cerimónia inter-religiosa parecer inevitável em vez de montada. A ninguém se pede que acredite menos. A todos se pede que esperem a sua vez, e a espera faz parte da graça.",
  featureCaption: "Dois celebrantes sob uma mesma chupá, à beira-mar",
  featureCredit: "Fotografado em março de 2026",
  takeH: "A versão curta",
  takeItems: [
    "Construa um arco, não dois ofícios consecutivos",
    "Dê a cada tradição uma passagem completa, nunca uma linha simbólica",
    "Deixe os símbolos partilhados levarem a cerimónia através da costura",
    "Ensaie as passagens até as transições desaparecerem",
  ],
  arcH: "Construir o arco único",
  arcP: "Um arco tem um começo, uma subida e uma resolução — e uma cerimónia inter-religiosa precisa dos três para se ler como um só acontecimento. Abrimos de um modo que ambas as tradições reconhecem, avançamos pelas passagens que pertencem a cada credo à vez e resolvemos num momento que toda a sala partilha. A ordem nunca é casual; sequenciamos os rituais para que cada um prepare o terreno do seguinte, e a cerimónia ganha peso à medida que avança em vez de recomeçar a meio.",
  scriptH: "Dois celebrantes, um só guião",
  scriptP: "Apresentamos os dois celebrantes muito antes do dia, e pedimos-lhes que escrevam a cerimónia juntos, não em paralelo. Um guião partilhado significa que cada celebrante sabe exatamente onde começa e acaba a sua passagem, como dar a deixa ao outro e onde as suas palavras devem ecoar em vez de repetir. O casal aprova todo o documento como um texto único. No ensaio, as duas vozes já sabem como passar a cerimónia entre si, e a costura que as famílias temem simplesmente não aparece.",
  symbolsH: "Os símbolos partilhados",
  symbolsP: "Toda a tradição traz objetos e gestos que dizem mais do que as palavras — um pálio, um cálice, um cordão, um círculo, uma chama acesa. A arte do arco inter-religioso está em encontrar os símbolos que podem sustentar os dois significados ao mesmo tempo e deixá-los levar a cerimónia pelos lugares onde as liturgias diferem. Uma chupá pode abrigar mais do que uma bênção. Um cálice partilhado pode erguer-se em duas línguas. Quando os símbolos fazem o trabalho de ligação, as transições deixam de se sentir como transições e começam a sentir-se como um único fio ininterrupto.",
  pqQuote:
    "Nunca pedimos a uma família que traduza a sua tradição para a de outra. Pedimos a ambas que fiquem sob o mesmo céu e falem à vez — e a costa, afinal, é muito boa a segurar duas vozes.",
  pqCite: "Grecia Mejía · Fundadora",
  splitEyebrow: "Onde o arco se ergue",
  splitHeading: "A costa faz metade do trabalho.",
  splitParas: [
    "Uma orla aberta não tem arquitetura que pertença a um credo mais do que a outro. Não há nave, nem orientação, nem altar fixo por que discutir — apenas céu, água e o espaço que se escolhe consagrar. Essa neutralidade é um presente: deixa duas tradições encontrarem-se num terreno que não favorece nenhuma.",
    "Usamos o horizonte como coluna da cerimónia. O casal fica de frente para a água, as famílias reúnem-se aos lados e os dois celebrantes tomam o seu lugar ao longo de uma linha que se lê como um só palco contínuo. O cenário em si recusa tomar partido, e a cerimónia herda essa calma.",
  ],
  rehearsalH: "O ensaio é tudo",
  rehearsalP: "Uma cerimónia inter-religiosa vive ou morre no ensaio. É aqui que percorremos cada passagem a ritmo real, cronometramos cada trecho e encontramos as pausas de meio segundo que deixam uma bênção assentar antes de a seguinte começar. Ensaiamos com ambos os celebrantes presentes e ambas as famílias a assistir, para que todos vejam o arco completo antes de o dia chegar. O que parece natural na costa é sempre fruto de uma tarde sem pressa na véspera, a proteger o ritmo e a ensaiar as costuras até se desvanecerem.",
  cta: {
    script: "Uma conversa privada —",
    heading: "A planear um casamento inter-religioso na costa?",
    body: "Aceitamos um número reduzido de casamentos por ano. Diga-nos as suas duas tradições e as suas datas, e a Grecia responder-lhe-á pessoalmente em cinco dias úteis.",
    ctaLabel: "Pedir uma consulta",
  },
  rememberH: "O que as famílias recordam",
  rememberP: [
    "Nenhuma família nos disse alguma vez que se lembrava dos papéis. O que recordam é o momento em que a sua própria tradição recebeu todo o seu peso perante o outro lado — e o momento em que viram o outro lado acolhê-la com graça. É esse o triunfo silencioso do arco único: duas famílias chegam separadas e partem unidas. Para um texto complementar sobre as celebrações que rodeiam a cerimónia, leia a nossa crónica do ",
    { text: "sangeet, na véspera", href: SANGEET },
    ".",
  ],
};

const de: ArticleLocaleCopy = {
  title: "Zwei Geistliche, eine Zeremonie: *interreligiös* an der Küste",
  excerpt:
    "Wie wir interreligiöse Ritualbögen strukturieren — ohne Kompromiss, ohne Widerspruch, ohne dass sich jemand als Gast bei der eigenen Hochzeit fühlt.",
  kicker: "Interreligiös",
  lede: "Eine interreligiöse Zeremonie ist keine Verhandlung, sondern Choreografie. Wir bauen einen einzigen Bogen, der beide Traditionen voll und im Wechsel sprechen lässt, ohne dass eine sich beschnitten fühlt.",
  faqs: [
    {
      question: "Können zwei Geistliche verschiedener Konfessionen eine Zeremonie teilen?",
      answer:
        "Ja, und oft auf schöne Weise. Wir stellen die beiden Geistlichen Monate im Voraus vor, vereinbaren gemeinsam die Reihenfolge des Rituals und geben jedem eine volle Passage statt einer symbolischen Zeile. Das Ergebnis liest sich als eine Zeremonie, nicht als zwei zusammengenähte.",
    },
    {
      question: "Wie vermeidet man eine in zwei Hälften geteilte Zeremonie?",
      answer: [
        "Indem man einen einzigen Bogen baut statt zweier aufeinanderfolgender Gottesdienste. Gemeinsame Symbole tragen die Zeremonie über die Naht hinweg — siehe unseren ",
        { text: "Leitfaden zu jüdischen Hochzeiten", href: JEW },
        ", um zu sehen, wie eine Chuppa mehr als eine Tradition unter sich bergen kann.",
      ],
    },
    {
      question: "Was, wenn eine Familie strenger gläubig ist als die andere?",
      answer:
        "Wir planen um die strengste Anforderung herum, nie um die lockerste. Wenn eine Tradition einen bestimmten Geistlichen, einen bestimmten Text oder eine bestimmte Abfolge verlangt, wird das zum Fixpunkt, um den herum der Rest des Bogens gebaut wird.",
    },
    {
      question: "Wie lange dauert eine interreligiöse Zeremonie?",
      answer:
        "Länger als ein Gottesdienst einer einzigen Tradition — meist vierzig bis sechzig Minuten — weil beide Liturgien Raum bekommen. Bei der Probe schützen wir das Tempo, damit am Tag nichts gehetzt wirkt.",
    },
  ],
  bleedQuote: {
    script: "Nach dem Gelübde —",
    quote:
      "Die Familien kamen als zwei. Sie gingen als eine. Das ist die ganze Arbeit einer interreligiösen Zeremonie, und sie geschieht im Bogen, nicht im Papierkram.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const deBody: Body = {
  introP: [
    "Die meisten interreligiösen Paare kommen auf einen Kompromiss gefasst zu uns, überzeugt, dass jemand etwas aufgeben muss. Das ist selten der Fall. Die beiden Traditionen stoßen im Wesentlichen fast nie zusammen; sie sprechen nur unterschiedliche Grammatiken für dasselbe Gelübde. Unser Überblick über ",
    { text: "jüdische Hochzeiten", href: JEW },
    " ist ein guter Ort, um zu sehen, wie die Rituallogik einer Tradition funktioniert, bevor sie am Altar auf eine andere trifft.",
  ],
  choreoH: "Choreografie, kein Kompromiss",
  choreoP1:
    "Der Instinkt, wenn zwei Konfessionen aufeinandertreffen, ist, die Differenz zu teilen: die Hälfte des einen Gottesdienstes, die Hälfte des anderen, ein höflicher Handschlag in der Mitte. Wir haben gesehen, wie dieser Ansatz beiden Familien das Gefühl gibt, zu kurz gekommen zu sein, als wäre ihre Tradition beschnitten worden, um Platz zu schaffen. Also tun wir das Gegenteil. Wir geben jeder Tradition ihre volle Stimme und choreografieren die Reihenfolge, in der diese Stimmen sprechen.",
  choreoP2:
    "Choreografie ist das richtige Wort, denn die Arbeit ist räumlich und zeitlich, nicht doktrinär. Wer wo steht, wer wann spricht, wie ein Segen ohne harten Schnitt an den nächsten übergibt — das sind die Entscheidungen, die eine interreligiöse Zeremonie unausweichlich statt zusammengesetzt erscheinen lassen. Niemand wird gebeten, weniger zu glauben. Jeder wird gebeten, an der Reihe zu warten, und das Warten ist Teil der Anmut.",
  featureCaption: "Zwei Geistliche unter einer einzigen Chuppa, am Ufer",
  featureCredit: "Fotografiert im März 2026",
  takeH: "Die Kurzfassung",
  takeItems: [
    "Bauen Sie einen Bogen, nicht zwei aufeinanderfolgende Gottesdienste",
    "Geben Sie jeder Tradition eine volle Passage, nie eine symbolische Zeile",
    "Lassen Sie gemeinsame Symbole die Zeremonie über die Naht tragen",
    "Proben Sie die Übergaben, bis die Übergänge verschwinden",
  ],
  arcH: "Den einzigen Bogen bauen",
  arcP: "Ein Bogen hat einen Anfang, einen Anstieg und eine Auflösung — und eine interreligiöse Zeremonie braucht alle drei, um sich als ein Ereignis zu lesen. Wir eröffnen auf eine Weise, die beide Traditionen erkennen, schreiten durch die Passagen, die jeder Konfession abwechselnd gehören, und lösen auf einen Moment auf, den der ganze Raum teilt. Die Reihenfolge ist nie zufällig; wir ordnen die Rituale so, dass jedes den Boden für das nächste bereitet, und die Zeremonie gewinnt an Gewicht, während sie fortschreitet, statt sich auf halbem Weg zurückzusetzen.",
  scriptH: "Zwei Geistliche, ein Skript",
  scriptP: "Wir stellen die beiden Geistlichen lange vor dem Tag vor und bitten sie, die Zeremonie gemeinsam zu schreiben, nicht parallel. Ein gemeinsames Skript bedeutet, dass jeder Geistliche genau weiß, wo seine Passage beginnt und endet, wie er dem anderen das Stichwort gibt und wo seine Worte widerhallen statt wiederholen sollen. Das Paar genehmigt das ganze Dokument als einen einzigen Text. Bis zur Probe wissen die beiden Stimmen bereits, wie sie die Zeremonie einander übergeben, und die Naht, die Familien fürchten, erscheint einfach nicht.",
  symbolsH: "Die gemeinsamen Symbole",
  symbolsP: "Jede Tradition trägt Gegenstände und Gesten, die mehr sagen als Worte — ein Baldachin, ein Kelch, eine Schnur, eine Umrundung, eine entzündete Flamme. Die Kunst des interreligiösen Bogens besteht darin, die Symbole zu finden, die beide Bedeutungen zugleich tragen können, und sie die Zeremonie über die Stellen führen zu lassen, an denen die Liturgien sich unterscheiden. Eine Chuppa kann mehr als einen Segen bergen. Ein gemeinsamer Kelch kann in zwei Sprachen erhoben werden. Wenn die Symbole die verbindende Arbeit leisten, fühlen sich die Übergänge nicht mehr wie Übergänge an, sondern wie ein einziger ununterbrochener Faden.",
  pqQuote:
    "Wir bitten nie eine Familie, ihre Tradition in die einer anderen zu übersetzen. Wir bitten beide, unter demselben Himmel zu stehen und im Wechsel zu sprechen — und die Küste, wie sich zeigt, hält zwei Stimmen sehr gut.",
  pqCite: "Grecia Mejía · Gründerin",
  splitEyebrow: "Wo der Bogen steht",
  splitHeading: "Die Küste erledigt die halbe Arbeit.",
  splitParas: [
    "Ein offenes Ufer hat keine Architektur, die einer Konfession mehr gehört als einer anderen. Kein Kirchenschiff, keine Ausrichtung, kein fester Altar, um den man streiten könnte — nur Himmel, Wasser und der Raum, den man zu weihen wählt. Diese Neutralität ist ein Geschenk: Sie lässt zwei Traditionen auf einem Boden zusammentreffen, der keine bevorzugt.",
    "Wir machen den Horizont zum Rückgrat der Zeremonie. Das Paar blickt aufs Wasser, die Familien versammeln sich an den Seiten, und die beiden Geistlichen nehmen ihren Platz entlang einer Linie ein, die sich als eine einzige durchgehende Bühne liest. Der Ort selbst weigert sich, Partei zu ergreifen, und die Zeremonie erbt diese Leichtigkeit.",
  ],
  rehearsalH: "Die Probe ist alles",
  rehearsalP: "Eine interreligiöse Zeremonie steht und fällt mit der Probe. Hier gehen wir jede Übergabe im vollen Tempo durch, stoppen jede Passage und finden die halben Sekunden Pause, die einen Segen sich setzen lassen, bevor der nächste beginnt. Wir proben mit beiden Geistlichen anwesend, beide Familien schauen zu, damit alle den ganzen Bogen sehen, bevor der Tag kommt. Was an der Küste mühelos aussieht, ist stets die Frucht eines unbeeilten Nachmittags am Vortag, an dem das Tempo geschützt und die Nähte geprobt werden, bis sie verschwinden.",
  cta: {
    script: "Ein privates Gespräch —",
    heading: "Planen Sie eine interreligiöse Hochzeit an der Küste?",
    body: "Wir nehmen eine kleine Zahl an Hochzeiten im Jahr an. Nennen Sie uns Ihre beiden Traditionen und Ihre Termine, und Grecia antwortet Ihnen persönlich binnen fünf Werktagen.",
    ctaLabel: "Beratung anfragen",
  },
  rememberH: "Woran Familien sich erinnern",
  rememberP: [
    "Keine Familie hat uns je gesagt, sie erinnere sich an den Papierkram. Woran sie sich erinnern, ist der Moment, in dem ihre eigene Tradition vor der anderen Seite ihr volles Gewicht bekam — und der Moment, in dem sie sahen, wie die andere Seite es mit Anmut empfing. Das ist der stille Triumph des einzigen Bogens: Zwei Familien kommen getrennt an und gehen vereint. Für einen Begleittext über die Feiern rund um die Zeremonie lesen Sie unseren Bericht über ",
    { text: "die Sangeet am Abend zuvor", href: SANGEET },
    ".",
  ],
};

const it: ArticleLocaleCopy = {
  title: "Due officianti, una cerimonia: *interreligiosa* sulla costa",
  excerpt:
    "Come strutturiamo gli archi rituali interreligiosi — senza compromessi, senza contraddizione, senza che nessuno si senta ospite al proprio matrimonio.",
  kicker: "Interreligiosa",
  lede: "Una cerimonia interreligiosa non è una trattativa; è coreografia. Costruiamo un unico arco che lascia parlare per intero le due tradizioni, a turno, senza che nessuna si senta ridotta.",
  faqs: [
    {
      question: "Due officianti di fedi diverse possono condividere una cerimonia?",
      answer:
        "Sì, e spesso con bellezza. Presentiamo i due officianti con mesi di anticipo, concordiamo insieme l'ordine del rito e diamo a ciascuno un passaggio intero, non una battuta simbolica. Il risultato si legge come una cerimonia, non come due cucite insieme.",
    },
    {
      question: "Come si evita una cerimonia spezzata a metà?",
      answer: [
        "Costruendo un unico arco anziché due riti consecutivi. I simboli condivisi portano la cerimonia attraverso la cucitura — vedi la nostra ",
        { text: "guida ai matrimoni ebraici", href: JEW },
        " per scoprire come una chuppah possa accogliere più di una tradizione sotto di sé.",
      ],
    },
    {
      question: "E se una famiglia è più praticante dell'altra?",
      answer:
        "Pianifichiamo attorno al requisito più rigoroso, mai al più elastico. Quando una tradizione chiede un officiante preciso, un testo preciso o una sequenza precisa, quello diventa il punto fisso attorno a cui si costruisce il resto dell'arco.",
    },
    {
      question: "Quanto dura una cerimonia interreligiosa?",
      answer:
        "Più a lungo di un rito di una sola tradizione — di solito da quaranta a sessanta minuti — perché entrambe le liturgie hanno spazio. La prova è dove proteggiamo il ritmo, così che nulla sembri affrettato il giorno stesso.",
    },
  ],
  bleedQuote: {
    script: "Dopo le promesse —",
    quote:
      "Le famiglie sono arrivate come due. Sono ripartite come una. È tutto qui il lavoro di una cerimonia interreligiosa, e accade nell'arco, non nelle carte.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const itBody: Body = {
  introP: [
    "La maggior parte delle coppie interreligiose arriva pronta al compromesso, certa che qualcuno dovrà rinunciare a qualcosa. Raramente accade. Le due tradizioni quasi mai si scontrano sull'essenziale; parlano semplicemente grammatiche diverse per lo stesso voto. La nostra panoramica sui ",
    { text: "matrimoni ebraici", href: JEW },
    " è un buon punto per vedere come funziona la logica rituale di una tradizione prima di incontrarne un'altra davanti all'altare.",
  ],
  choreoH: "Coreografia, non compromesso",
  choreoP1:
    "L'istinto, quando due fedi si incontrano, è dividere la differenza: metà di un rito, metà dell'altro, una stretta di mano cortese nel mezzo. Abbiamo visto quell'approccio lasciare entrambe le famiglie con la sensazione di averci rimesso, come se la loro tradizione fosse stata ridotta per fare spazio. Così facciamo il contrario. Diamo a ogni tradizione la sua voce piena e coreografiamo l'ordine in cui quelle voci parlano.",
  choreoP2:
    "Coreografia è la parola giusta perché il lavoro è spaziale e temporale, non dottrinale. Chi sta dove, chi parla quando, come una benedizione cede il passo alla successiva senza un taglio brusco: sono queste le decisioni che rendono una cerimonia interreligiosa inevitabile anziché assemblata. A nessuno si chiede di credere di meno. A tutti si chiede di aspettare il proprio turno, e l'attesa è parte della grazia.",
  featureCaption: "Due officianti sotto un'unica chuppah, in riva al mare",
  featureCredit: "Fotografato a marzo 2026",
  takeH: "In breve",
  takeItems: [
    "Costruisci un arco, non due riti consecutivi",
    "Dai a ogni tradizione un passaggio intero, mai una battuta simbolica",
    "Lascia che i simboli condivisi portino la cerimonia attraverso la cucitura",
    "Prova i passaggi finché le transizioni non scompaiono",
  ],
  arcH: "Costruire l'arco unico",
  arcP: "Un arco ha un inizio, una salita e una risoluzione — e una cerimonia interreligiosa ha bisogno di tutti e tre per leggersi come un solo evento. Apriamo in un modo che entrambe le tradizioni riconoscono, procediamo attraverso i passaggi che appartengono a ciascuna fede a turno e risolviamo su un momento che tutta la sala condivide. L'ordine non è mai casuale; sequenziamo i riti perché ciascuno prepari il terreno del successivo, e la cerimonia acquista peso mentre avanza anziché ripartire da zero a metà.",
  scriptH: "Due officianti, un solo copione",
  scriptP: "Presentiamo i due officianti molto prima del giorno, e chiediamo loro di scrivere la cerimonia insieme, non in parallelo. Un copione condiviso significa che ogni officiante sa esattamente dove comincia e finisce il suo passaggio, come dare l'imbeccata all'altro e dove le sue parole devono echeggiare anziché ripetere. La coppia approva l'intero documento come un unico testo. Alla prova, le due voci già sanno come passarsi la cerimonia, e la cucitura che le famiglie temono semplicemente non compare.",
  symbolsH: "I simboli condivisi",
  symbolsP: "Ogni tradizione porta oggetti e gesti che dicono più delle parole — un baldacchino, un calice, un cordone, un giro, una fiamma accesa. L'arte dell'arco interreligioso sta nel trovare i simboli capaci di reggere entrambi i significati insieme e nel lasciarli condurre la cerimonia attraverso i luoghi in cui le liturgie differiscono. Una chuppah può riparare più di una benedizione. Un calice condiviso può alzarsi in due lingue. Quando i simboli fanno il lavoro di collegamento, le transizioni smettono di sembrare transizioni e cominciano a sembrare un unico filo ininterrotto.",
  pqQuote:
    "Non chiediamo mai a una famiglia di tradurre la propria tradizione in quella di un'altra. Chiediamo a entrambe di stare sotto lo stesso cielo e di parlare a turno — e la costa, a quanto pare, è bravissima a reggere due voci.",
  pqCite: "Grecia Mejía · Fondatrice",
  splitEyebrow: "Dove si erge l'arco",
  splitHeading: "La costa fa metà del lavoro.",
  splitParas: [
    "Una riva aperta non ha architettura che appartenga a una fede più che a un'altra. Nessuna navata, nessun orientamento, nessun altare fisso su cui discutere — solo cielo, acqua e lo spazio che scegli di consacrare. Quella neutralità è un dono: lascia che due tradizioni si incontrino su un terreno che non favorisce nessuna.",
    "Usiamo l'orizzonte come spina dorsale della cerimonia. La coppia guarda l'acqua, le famiglie si radunano ai lati e i due officianti prendono posto lungo una linea che si legge come un unico palco continuo. La cornice stessa rifiuta di prendere parte, e la cerimonia eredita quella disinvoltura.",
  ],
  rehearsalH: "La prova è tutto",
  rehearsalP: "Una cerimonia interreligiosa vive o muore alla prova. È qui che percorriamo ogni passaggio a ritmo pieno, cronometriamo ogni brano e troviamo le pause di mezzo secondo che lasciano posarsi una benedizione prima che cominci la successiva. Proviamo con entrambi gli officianti presenti e entrambe le famiglie a guardare, così che tutti vedano l'arco intero prima che arrivi il giorno. Ciò che sulla costa sembra senza sforzo è sempre il frutto di un pomeriggio senza fretta il giorno prima, a proteggere il ritmo e a provare le cuciture finché non svaniscono.",
  cta: {
    script: "Una conversazione privata —",
    heading: "Stai pensando a un matrimonio interreligioso sulla costa?",
    body: "Accettiamo un numero ridotto di matrimoni all'anno. Dicci le tue due tradizioni e le tue date, e Grecia ti risponderà personalmente entro cinque giorni lavorativi.",
    ctaLabel: "Richiedi una consulenza",
  },
  rememberH: "Ciò che le famiglie ricordano",
  rememberP: [
    "Nessuna famiglia ci ha mai detto di ricordare le carte. Ciò che ricordano è il momento in cui la loro tradizione ha ricevuto tutto il suo peso davanti all'altra parte — e il momento in cui hanno visto l'altra parte accoglierla con grazia. È questo il trionfo silenzioso dell'arco unico: due famiglie arrivano separate e ripartono unite. Per un testo compagno sulle celebrazioni che circondano la cerimonia, leggi il nostro racconto del ",
    { text: "sangeet, la sera prima", href: SANGEET },
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
    b.h2(t.choreoH),
    b.p(t.choreoP1),
    b.p(t.choreoP2),
    b.featureImage(t.featureCaption, t.featureCaption, t.featureCredit),
    b.takeaways(t.takeH, t.takeItems),
    b.h2(t.arcH),
    b.p(t.arcP),
    b.h3(t.scriptH),
    b.p(t.scriptP),
    b.h3(t.symbolsH),
    b.p(t.symbolsP),
    b.pullQuote(t.pqQuote, t.pqCite),
    b.split({
      alt: t.splitHeading,
      eyebrow: t.splitEyebrow,
      heading: t.splitHeading,
      paragraphs: [t.splitParas[0], t.splitParas[1]],
    }),
    b.h2(t.rehearsalH),
    b.p(t.rehearsalP),
    b.inlineCta({
      script: t.cta.script,
      heading: t.cta.heading,
      body: t.cta.body,
      ctaLabel: t.cta.ctaLabel,
      ctaHref: "/contact",
    }),
    b.h2(t.rememberH),
    b.p(t.rememberP),
  ];
};

export const article: ArticleSeed = {
  canonicalSlug: "interfaith-ceremony-coast",
  categorySlug: "multicultural-weddings",
  relatedDestinationSlug: "punta-cana",
  readMinutes: 14,
  publishedAt: "2025-12-18T09:00:00Z",
  featured: false,
  relatedArticles: [
    "the-sangeet-night-before",
    "kosher-jewish-wedding-caribbean",
    "best-indian-wedding-venues-punta-cana",
  ],
  byLocale,
  buildBody,
};
