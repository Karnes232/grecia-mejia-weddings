/**
 * Journal article — "The Sangeet: Why the Night Before Matters More".
 * Rich body composed from the `body.ts` helpers.
 */

import { type Locale } from "../../../../i18n/routing";
import * as b from "../body";
import type { ArticleSeed, ArticleLocaleCopy } from "../types";

const IND = "/multicultural-weddings/indian-weddings";
const WELCOME = "/journal/welcome-party-second-star";

type Body = {
  introP: b.Run[];
  rehearsalH: string;
  rehearsalP1: string;
  rehearsalP2: string;
  gal: [string, string];
  planH: string;
  planP: string;
  perfH: string;
  perfP: string;
  roomH: string;
  roomP: string;
  pqQuote: string;
  pqCite: string;
  takeH: string;
  takeItems: string[];
  splitEyebrow: string;
  splitHeading: string;
  splitParas: [string, string];
  cta: { script: string; heading: string; body: string; ctaLabel: string };
  mattersH: string;
  mattersP: b.Run[];
};

const en: ArticleLocaleCopy = {
  title: "The Sangeet: Why the Night *Before* Matters More",
  excerpt:
    "On the rehearsal that is no longer a rehearsal, and how it has become the most-photographed evening of the weekend.",
  kicker: "Planning",
  lede: "The sangeet stopped being a rehearsal years ago. Today it is the loosest, warmest, most-photographed night of the weekend — and we plan it that way on purpose.",
  faqs: [
    {
      question: "What exactly is a sangeet?",
      answer:
        "The sangeet is the music-and-dance evening held before the wedding ceremony, when both families gather to perform, celebrate and set the tone for the days ahead. It was once an intimate rehearsal of song; now it is a full production in its own right.",
    },
    {
      question: "When in the weekend should the sangeet fall?",
      answer:
        "We place it the night before the ceremony, after the haldi and mehndi have loosened everyone. By then the families know one another, the nerves have gone, and the room is ready to be joyful rather than formal.",
    },
    {
      question: "How long do the performances usually run?",
      answer: [
        "Ninety minutes of choreographed performances is the sweet spot — long enough to honour every side, short enough to keep the floor open for dancing afterwards. See our ",
        { text: "Indian weddings guide", href: IND },
        " for the full multi-day rhythm.",
      ],
    },
    {
      question: "Do guests need to prepare in advance?",
      answer:
        "The family performers do — we rehearse them by video call in the months before, and once on the ground the day before. Everyone else simply arrives ready to dance; the joy of the sangeet is that it asks nothing of the wider guest list but their presence.",
    },
  ],
  bleedQuote: {
    script: "The night before —",
    quote:
      "By the time the ceremony arrives, the families already love one another. The sangeet is where that happens, quietly, on a dance floor, before anyone thinks to call it a wedding.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const enBody: Body = {
  introP: [
    "For most of the couples we plan with, the sangeet is the evening they describe afterwards with the widest smile. It sits inside the broader arc of an ",
    { text: "Indian wedding", href: IND },
    ", the night before the vows, and it has quietly become the emotional centre of the whole weekend.",
  ],
  rehearsalH: "From rehearsal to reception",
  rehearsalP1:
    "The sangeet began as something private — a gathering of women singing traditional songs in the days before a wedding, a rehearsal of melody more than of movement. It was warm, small and unphotographed, meant only for the families who lived it.",
  rehearsalP2:
    "That evening has grown. Today the sangeet is a full reception in all but name: choreographed performances from both sides, a floor that fills the moment the last number ends, and a photographer who often returns with the images the couple frames first. The rehearsal became the reception, and no one minds.",
  gal: ["Both families rehearsing on the terrace", "The floor fills after the last performance · Cap Cana"],
  planH: "How we plan it",
  planP:
    "We treat the sangeet as its own production, with its own run of show, its own lighting plot and its own arc from arrival to open floor. It is not the wedding's opening act; it is a night that has to hold on its own terms.",
  perfH: "The performances",
  perfP:
    "We start rehearsing the family performers months out, by video call, then again on the ground the day before. Ninety minutes is our ceiling — enough to honour every cousin and aunt who wants the floor, never so long that the guests waiting to dance grow restless. We sequence the numbers so the energy climbs, and we always leave the last slot open for the couple.",
  roomH: "The room",
  roomP:
    "Lighting carries the evening. We keep it low and warm, with the dance floor bright and the tables soft, so the eye is always drawn to the performance and then to the movement. The sound has to serve both a sung ghazal and a Bollywood finale, so we build the rig for range, not volume. The room should feel like a living room that happens to seat two hundred.",
  pqQuote:
    "A sangeet lives or dies by its floor. Plan the performances all you like — the night is only a success if the guests cannot stay in their seats once they end.",
  pqCite: "Grecia Mejía · Founder",
  takeH: "The short version",
  takeItems: [
    "The sangeet now carries the emotional weight the ceremony once did — plan it as a reception, not a rehearsal",
    "Hold it the night before the ceremony, after haldi and mehndi have warmed the families",
    "Cap performances at ninety minutes and leave the floor open afterwards",
    "Light it low and warm; build the sound rig for range, not volume",
  ],
  splitEyebrow: "Why we plan it first",
  splitHeading: "The night that makes the wedding easy.",
  splitParas: [
    "When the sangeet works, the ceremony that follows is almost effortless — the families have already met on the dance floor, and the nerves that usually shadow a wedding morning simply are not there.",
    "So we plan the sangeet before we plan the vows. Get the night before right, and the day itself arrives among people who already feel like one family rather than two.",
  ],
  cta: {
    script: "A private conversation —",
    heading: "Planning a sangeet worth remembering?",
    body: "We accept fourteen weddings a year. Tell us your dates and the shape of your celebration, and Grecia will write back personally within five working days.",
    ctaLabel: "Request a consultation",
  },
  mattersH: "Why it matters",
  mattersP: [
    "The sangeet matters because it is where the weekend decides what kind of weekend it will be. Loosen the room here and everything after runs warmer. It is the same instinct behind a well-planned ",
    { text: "welcome party", href: WELCOME },
    " — the celebration begins long before the ceremony, and the couples who understand that are the ones who remember the whole weekend, not only the day.",
  ],
};

const es: ArticleLocaleCopy = {
  title: "El sangeet: por qué la noche *anterior* importa más",
  excerpt:
    "Sobre el ensayo que ya no es un ensayo, y cómo se ha convertido en la velada más fotografiada del fin de semana.",
  kicker: "Planificación",
  lede: "El sangeet dejó de ser un ensayo hace años. Hoy es la noche más distendida, cálida y fotografiada del fin de semana, y la planificamos así a propósito.",
  faqs: [
    {
      question: "¿Qué es exactamente un sangeet?",
      answer:
        "El sangeet es la velada de música y baile que se celebra antes de la ceremonia, cuando ambas familias se reúnen para actuar, celebrar y marcar el tono de los días que vienen. Antes era un ensayo íntimo de canto; hoy es una producción en sí misma.",
    },
    {
      question: "¿En qué momento del fin de semana debe ir el sangeet?",
      answer:
        "Lo situamos la noche anterior a la ceremonia, después de que el haldi y el mehndi hayan relajado a todos. Para entonces las familias ya se conocen, los nervios se han ido y la sala está lista para la alegría más que para la formalidad.",
    },
    {
      question: "¿Cuánto suelen durar las actuaciones?",
      answer: [
        "Noventa minutos de actuaciones coreografiadas es el punto ideal: bastante para honrar a cada lado, breve para dejar la pista abierta al baile después. Consulta nuestra ",
        { text: "guía de bodas indias", href: IND },
        " para el ritmo completo de varios días.",
      ],
    },
    {
      question: "¿Los invitados deben prepararse con antelación?",
      answer:
        "Los intérpretes de la familia sí: los ensayamos por videollamada en los meses previos, y una vez sobre el terreno el día antes. El resto simplemente llega listo para bailar; la gracia del sangeet es que no pide nada a la lista amplia salvo su presencia.",
    },
  ],
  bleedQuote: {
    script: "La noche anterior —",
    quote:
      "Cuando llega la ceremonia, las familias ya se quieren. El sangeet es donde eso ocurre, en silencio, en una pista de baile, antes de que nadie piense en llamarlo boda.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const esBody: Body = {
  introP: [
    "Para la mayoría de las parejas con las que planificamos, el sangeet es la velada que después describen con la sonrisa más amplia. Se inscribe en el arco más amplio de una ",
    { text: "boda india", href: IND },
    ", la noche anterior a los votos, y se ha convertido en silencio en el centro emocional de todo el fin de semana.",
  ],
  rehearsalH: "Del ensayo a la recepción",
  rehearsalP1:
    "El sangeet nació como algo privado: una reunión de mujeres cantando canciones tradicionales en los días previos a una boda, un ensayo de melodía más que de movimiento. Era cálido, pequeño y sin fotografías, pensado solo para las familias que lo vivían.",
  rehearsalP2:
    "Esa velada ha crecido. Hoy el sangeet es una recepción completa en todo salvo el nombre: actuaciones coreografiadas de ambos lados, una pista que se llena en cuanto termina el último número y un fotógrafo que a menudo vuelve con las imágenes que la pareja enmarca primero. El ensayo se hizo recepción, y a nadie le importa.",
  gal: ["Ambas familias ensayando en la terraza", "La pista se llena tras la última actuación · Cap Cana"],
  planH: "Cómo lo planificamos",
  planP:
    "Tratamos el sangeet como su propia producción, con su propio guion de escena, su propio plano de luces y su propio arco desde la llegada hasta la pista abierta. No es el acto de apertura de la boda; es una noche que debe sostenerse por sí misma.",
  perfH: "Las actuaciones",
  perfP:
    "Empezamos a ensayar a los intérpretes de la familia con meses de antelación, por videollamada, y de nuevo sobre el terreno el día antes. Noventa minutos es nuestro techo: bastante para honrar a cada primo y tía que quiere la pista, nunca tanto que los invitados que esperan bailar se impacienten. Secuenciamos los números para que la energía suba, y siempre dejamos el último hueco para la pareja.",
  roomH: "La sala",
  roomP:
    "La iluminación sostiene la velada. La mantenemos baja y cálida, con la pista luminosa y las mesas suaves, para que la mirada vaya siempre a la actuación y luego al movimiento. El sonido debe servir a un ghazal cantado y a un final de Bollywood, así que montamos el equipo para el rango, no para el volumen. La sala debe sentirse como un salón que resulta sentar a doscientos.",
  pqQuote:
    "Un sangeet vive o muere por su pista. Planifica las actuaciones cuanto quieras: la noche solo triunfa si los invitados no pueden quedarse sentados en cuanto terminan.",
  pqCite: "Grecia Mejía · Fundadora",
  takeH: "La versión corta",
  takeItems: [
    "El sangeet lleva ahora el peso emocional que antes tenía la ceremonia: planifícalo como recepción, no como ensayo",
    "Celébralo la noche anterior a la ceremonia, después de que el haldi y el mehndi hayan templado a las familias",
    "Limita las actuaciones a noventa minutos y deja la pista abierta después",
    "Ilumínalo bajo y cálido; monta el sonido para el rango, no para el volumen",
  ],
  splitEyebrow: "Por qué lo planificamos primero",
  splitHeading: "La noche que hace fácil la boda.",
  splitParas: [
    "Cuando el sangeet funciona, la ceremonia que sigue es casi sin esfuerzo: las familias ya se han encontrado en la pista, y los nervios que suelen ensombrecer la mañana de una boda sencillamente no están.",
    "Por eso planificamos el sangeet antes de planificar los votos. Acierta con la noche anterior y el día en sí llega entre personas que ya se sienten una familia y no dos.",
  ],
  cta: {
    script: "Una conversación privada —",
    heading: "¿Planeas un sangeet digno de recordar?",
    body: "Aceptamos catorce bodas al año. Cuéntanos tus fechas y la forma de tu celebración, y Grecia te responderá personalmente en cinco días laborables.",
    ctaLabel: "Solicitar una consulta",
  },
  mattersH: "Por qué importa",
  mattersP: [
    "El sangeet importa porque es donde el fin de semana decide qué clase de fin de semana será. Relaja la sala aquí y todo lo que sigue transcurre más cálido. Es el mismo instinto que hay tras una ",
    { text: "fiesta de bienvenida", href: WELCOME },
    " bien planificada: la celebración empieza mucho antes de la ceremonia, y las parejas que lo entienden son las que recuerdan todo el fin de semana, no solo el día.",
  ],
};

const fr: ArticleLocaleCopy = {
  title: "Le sangeet : pourquoi la veille *compte* davantage",
  excerpt:
    "Sur la répétition qui n'en est plus une, et comment elle est devenue la soirée la plus photographiée du week-end.",
  kicker: "Organisation",
  lede: "Le sangeet a cessé d'être une répétition il y a longtemps. C'est aujourd'hui la soirée la plus détendue, la plus chaleureuse et la plus photographiée du week-end, et nous la pensons ainsi à dessein.",
  faqs: [
    {
      question: "Qu'est-ce qu'un sangeet, exactement ?",
      answer:
        "Le sangeet est la soirée de musique et de danse tenue avant la cérémonie, quand les deux familles se réunissent pour se produire, célébrer et donner le ton des jours à venir. C'était jadis une répétition intime de chants ; c'est aujourd'hui une production à part entière.",
    },
    {
      question: "À quel moment du week-end placer le sangeet ?",
      answer:
        "Nous le plaçons la veille de la cérémonie, une fois que le haldi et le mehndi ont détendu tout le monde. À ce moment, les familles se connaissent, les nerfs sont tombés, et la salle est prête à la joie plutôt qu'à la formalité.",
    },
    {
      question: "Combien de temps durent les performances ?",
      answer: [
        "Quatre-vingt-dix minutes de performances chorégraphiées, c'est l'idéal — assez pour honorer chaque camp, assez court pour garder la piste ouverte à la danse ensuite. Voir notre ",
        { text: "guide des mariages indiens", href: IND },
        " pour le rythme complet sur plusieurs jours.",
      ],
    },
    {
      question: "Les invités doivent-ils se préparer à l'avance ?",
      answer:
        "Les danseurs de la famille, oui : nous les répétons par visioconférence dans les mois précédents, puis sur place la veille. Les autres arrivent simplement prêts à danser ; la joie du sangeet est qu'il ne demande à la liste élargie que sa présence.",
    },
  ],
  bleedQuote: {
    script: "La veille —",
    quote:
      "Le jour de la cérémonie, les familles s'aiment déjà. C'est au sangeet que cela se produit, en silence, sur une piste de danse, avant que quiconque songe à l'appeler un mariage.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const frBody: Body = {
  introP: [
    "Pour la plupart des couples que nous accompagnons, le sangeet est la soirée qu'ils décrivent ensuite avec le plus large sourire. Il s'inscrit dans l'arc plus vaste d'un ",
    { text: "mariage indien", href: IND },
    ", la veille des vœux, et il est devenu en silence le centre émotionnel de tout le week-end.",
  ],
  rehearsalH: "De la répétition à la réception",
  rehearsalP1:
    "Le sangeet a commencé comme quelque chose de privé — un rassemblement de femmes chantant des chants traditionnels dans les jours précédant un mariage, une répétition de mélodie plus que de mouvement. C'était chaleureux, petit et sans photographie, réservé aux familles qui le vivaient.",
  rehearsalP2:
    "Cette soirée a grandi. Aujourd'hui le sangeet est une réception à part entière, sauf le nom : performances chorégraphiées des deux côtés, une piste qui se remplit dès la fin du dernier numéro, et un photographe qui revient souvent avec les images que le couple encadre en premier. La répétition est devenue la réception, et personne ne s'en plaint.",
  gal: ["Les deux familles répétant sur la terrasse", "La piste se remplit après la dernière performance · Cap Cana"],
  planH: "Comment nous l'organisons",
  planP:
    "Nous traitons le sangeet comme sa propre production, avec son propre conducteur, son propre plan lumière et son propre arc de l'arrivée à la piste ouverte. Ce n'est pas l'acte d'ouverture du mariage ; c'est une soirée qui doit tenir par elle-même.",
  perfH: "Les performances",
  perfP:
    "Nous commençons à répéter les danseurs de la famille des mois à l'avance, en visioconférence, puis de nouveau sur place la veille. Quatre-vingt-dix minutes est notre plafond — assez pour honorer chaque cousin et tante qui veut la piste, jamais au point que les invités qui attendent de danser s'impatientent. Nous séquençons les numéros pour que l'énergie monte, et nous gardons toujours le dernier créneau pour le couple.",
  roomH: "La salle",
  roomP:
    "La lumière porte la soirée. Nous la gardons basse et chaude, la piste éclairée et les tables douces, pour que l'œil aille toujours à la performance puis au mouvement. Le son doit servir un ghazal chanté comme un final de Bollywood, alors nous montons le dispositif pour la plage, non pour le volume. La salle doit ressembler à un salon qui se trouve asseoir deux cents personnes.",
  pqQuote:
    "Un sangeet vit ou meurt par sa piste. Répétez les performances autant que vous voulez — la soirée n'est réussie que si les invités ne peuvent rester assis dès qu'elles s'achèvent.",
  pqCite: "Grecia Mejía · Fondatrice",
  takeH: "En bref",
  takeItems: [
    "Le sangeet porte désormais le poids émotionnel qu'avait la cérémonie — organisez-le comme une réception, non comme une répétition",
    "Tenez-le la veille de la cérémonie, une fois que le haldi et le mehndi ont réchauffé les familles",
    "Plafonnez les performances à quatre-vingt-dix minutes et laissez la piste ouverte ensuite",
    "Éclairez-le bas et chaud ; montez le son pour la plage, non pour le volume",
  ],
  splitEyebrow: "Pourquoi nous l'organisons en premier",
  splitHeading: "La soirée qui rend le mariage facile.",
  splitParas: [
    "Quand le sangeet fonctionne, la cérémonie qui suit est presque sans effort — les familles se sont déjà rencontrées sur la piste, et les nerfs qui ombragent d'ordinaire un matin de mariage ne sont tout simplement pas là.",
    "Nous organisons donc le sangeet avant les vœux. Réussissez la veille, et le jour même arrive parmi des gens qui se sentent déjà une seule famille plutôt que deux.",
  ],
  cta: {
    script: "Une conversation privée —",
    heading: "Un sangeet dont on se souvient ?",
    body: "Nous acceptons quatorze mariages par an. Dites-nous vos dates et la forme de votre célébration, et Grecia vous répondra personnellement sous cinq jours ouvrés.",
    ctaLabel: "Demander une consultation",
  },
  mattersH: "Pourquoi c'est important",
  mattersP: [
    "Le sangeet compte parce que c'est là que le week-end décide du week-end qu'il sera. Détendez la salle ici et tout ce qui suit se déroule plus chaleureusement. C'est le même instinct que derrière une ",
    { text: "soirée de bienvenue", href: WELCOME },
    " bien pensée — la fête commence bien avant la cérémonie, et les couples qui le comprennent sont ceux qui se souviennent de tout le week-end, non du seul jour.",
  ],
};

const pt: ArticleLocaleCopy = {
  title: "O sangeet: porque a noite *anterior* importa mais",
  excerpt:
    "Sobre o ensaio que já não é um ensaio, e como se tornou o serão mais fotografado do fim de semana.",
  kicker: "Planeamento",
  lede: "O sangeet deixou de ser um ensaio há anos. Hoje é a noite mais descontraída, calorosa e fotografada do fim de semana, e planeamo-la assim de propósito.",
  faqs: [
    {
      question: "O que é exatamente um sangeet?",
      answer:
        "O sangeet é o serão de música e dança realizado antes da cerimónia, quando ambas as famílias se reúnem para atuar, celebrar e definir o tom dos dias que se seguem. Era outrora um ensaio íntimo de canto; hoje é uma produção por direito próprio.",
    },
    {
      question: "Em que momento do fim de semana deve ficar o sangeet?",
      answer:
        "Colocamo-lo na noite anterior à cerimónia, depois de o haldi e o mehndi terem descontraído toda a gente. Nessa altura as famílias já se conhecem, os nervos passaram, e a sala está pronta para a alegria mais do que para a formalidade.",
    },
    {
      question: "Quanto tempo duram as atuações?",
      answer: [
        "Noventa minutos de atuações coreografadas é o ponto ideal — o suficiente para honrar cada lado, breve para manter a pista aberta à dança depois. Veja o nosso ",
        { text: "guia de casamentos indianos", href: IND },
        " para o ritmo completo de vários dias.",
      ],
    },
    {
      question: "Os convidados precisam de se preparar com antecedência?",
      answer:
        "Os intérpretes da família sim: ensaiamo-los por videochamada nos meses anteriores, e de novo no terreno na véspera. Os restantes chegam simplesmente prontos a dançar; a graça do sangeet é que nada pede à lista alargada senão a sua presença.",
    },
  ],
  bleedQuote: {
    script: "Na véspera —",
    quote:
      "Quando chega a cerimónia, as famílias já se estimam. É no sangeet que isso acontece, em silêncio, numa pista de dança, antes de alguém pensar em chamar-lhe casamento.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const ptBody: Body = {
  introP: [
    "Para a maioria dos casais com quem planeamos, o sangeet é o serão que depois descrevem com o sorriso mais largo. Inscreve-se no arco mais amplo de um ",
    { text: "casamento indiano", href: IND },
    ", na noite anterior aos votos, e tornou-se em silêncio o centro emocional de todo o fim de semana.",
  ],
  rehearsalH: "Do ensaio à receção",
  rehearsalP1:
    "O sangeet começou como algo privado — uma reunião de mulheres a cantar canções tradicionais nos dias que antecedem um casamento, um ensaio de melodia mais do que de movimento. Era caloroso, pequeno e sem fotografia, pensado só para as famílias que o viviam.",
  rehearsalP2:
    "Esse serão cresceu. Hoje o sangeet é uma receção completa em tudo menos no nome: atuações coreografadas de ambos os lados, uma pista que se enche assim que termina o último número, e um fotógrafo que muitas vezes volta com as imagens que o casal emoldura primeiro. O ensaio tornou-se receção, e ninguém se importa.",
  gal: ["Ambas as famílias a ensaiar no terraço", "A pista enche-se após a última atuação · Cap Cana"],
  planH: "Como o planeamos",
  planP:
    "Tratamos o sangeet como a sua própria produção, com o seu próprio alinhamento, o seu próprio plano de luz e o seu próprio arco da chegada à pista aberta. Não é o ato de abertura do casamento; é uma noite que tem de aguentar-se por si.",
  perfH: "As atuações",
  perfP:
    "Começamos a ensaiar os intérpretes da família meses antes, por videochamada, e de novo no terreno na véspera. Noventa minutos é o nosso teto — o suficiente para honrar cada primo e tia que quer a pista, nunca tanto que os convidados à espera de dançar se impacientem. Sequenciamos os números para a energia subir, e deixamos sempre o último espaço para o casal.",
  roomH: "A sala",
  roomP:
    "A iluminação sustenta o serão. Mantemo-la baixa e quente, com a pista luminosa e as mesas suaves, para que o olhar vá sempre à atuação e depois ao movimento. O som tem de servir um ghazal cantado e um final de Bollywood, por isso montamos o equipamento para o alcance, não para o volume. A sala deve sentir-se como uma sala de estar que por acaso senta duzentos.",
  pqQuote:
    "Um sangeet vive ou morre pela sua pista. Ensaie as atuações quanto quiser — a noite só triunfa se os convidados não conseguirem ficar sentados assim que elas terminam.",
  pqCite: "Grecia Mejía · Fundadora",
  takeH: "A versão curta",
  takeItems: [
    "O sangeet carrega agora o peso emocional que a cerimónia tinha — planeie-o como receção, não como ensaio",
    "Realize-o na noite anterior à cerimónia, depois de o haldi e o mehndi terem aquecido as famílias",
    "Limite as atuações a noventa minutos e deixe a pista aberta depois",
    "Ilumine-o baixo e quente; monte o som para o alcance, não para o volume",
  ],
  splitEyebrow: "Porque o planeamos primeiro",
  splitHeading: "A noite que torna o casamento fácil.",
  splitParas: [
    "Quando o sangeet resulta, a cerimónia que se segue é quase sem esforço — as famílias já se encontraram na pista, e os nervos que costumam ensombrar uma manhã de casamento simplesmente não estão lá.",
    "Por isso planeamos o sangeet antes de planear os votos. Acerte na véspera, e o dia em si chega entre pessoas que já se sentem uma família e não duas.",
  ],
  cta: {
    script: "Uma conversa privada —",
    heading: "A planear um sangeet digno de memória?",
    body: "Aceitamos catorze casamentos por ano. Diga-nos as suas datas e a forma da sua celebração, e a Grecia responder-lhe-á pessoalmente em cinco dias úteis.",
    ctaLabel: "Pedir uma consulta",
  },
  mattersH: "Porque importa",
  mattersP: [
    "O sangeet importa porque é onde o fim de semana decide que género de fim de semana será. Descontraia a sala aqui e tudo o que se segue decorre mais caloroso. É o mesmo instinto por trás de uma ",
    { text: "festa de boas-vindas", href: WELCOME },
    " bem planeada — a celebração começa muito antes da cerimónia, e os casais que o entendem são os que recordam todo o fim de semana, não apenas o dia.",
  ],
};

const de: ArticleLocaleCopy = {
  title: "Der Sangeet: Warum der Abend *davor* mehr zählt",
  excerpt:
    "Über die Probe, die keine Probe mehr ist, und wie sie zum meistfotografierten Abend des Wochenendes wurde.",
  kicker: "Planung",
  lede: "Der Sangeet ist seit Jahren keine Probe mehr. Heute ist er der lockerste, wärmste, meistfotografierte Abend des Wochenendes — und wir planen ihn bewusst so.",
  faqs: [
    {
      question: "Was genau ist ein Sangeet?",
      answer:
        "Der Sangeet ist der Musik- und Tanzabend vor der Zeremonie, an dem beide Familien zusammenkommen, um aufzutreten, zu feiern und den Ton für die kommenden Tage zu setzen. Einst war er eine intime Gesangsprobe; heute ist er eine eigenständige Produktion.",
    },
    {
      question: "Wann im Wochenende sollte der Sangeet stattfinden?",
      answer:
        "Wir legen ihn auf den Abend vor der Zeremonie, wenn Haldi und Mehndi alle gelöst haben. Bis dahin kennen sich die Familien, die Nervosität ist verflogen, und der Raum ist bereit für Freude statt Förmlichkeit.",
    },
    {
      question: "Wie lange dauern die Darbietungen üblicherweise?",
      answer: [
        "Neunzig Minuten choreografierte Darbietungen sind der ideale Rahmen — genug, um jede Seite zu ehren, kurz genug, um die Tanzfläche danach offenzuhalten. Siehe unseren ",
        { text: "Leitfaden zu indischen Hochzeiten", href: IND },
        " für den vollen mehrtägigen Rhythmus.",
      ],
    },
    {
      question: "Müssen sich Gäste im Voraus vorbereiten?",
      answer:
        "Die Familienauftretenden ja — wir proben sie in den Monaten davor per Videocall und dann vor Ort am Tag zuvor. Alle anderen kommen einfach tanzbereit; die Freude des Sangeet ist, dass er der breiten Gästeliste nichts abverlangt außer ihrer Anwesenheit.",
    },
  ],
  bleedQuote: {
    script: "Der Abend davor —",
    quote:
      "Wenn die Zeremonie kommt, lieben sich die Familien bereits. Beim Sangeet geschieht das, still, auf einer Tanzfläche, ehe jemand daran denkt, es Hochzeit zu nennen.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const deBody: Body = {
  introP: [
    "Für die meisten Paare, mit denen wir planen, ist der Sangeet der Abend, den sie danach mit dem breitesten Lächeln beschreiben. Er sitzt im größeren Bogen einer ",
    { text: "indischen Hochzeit", href: IND },
    ", am Abend vor dem Ja-Wort, und ist still zum emotionalen Zentrum des ganzen Wochenendes geworden.",
  ],
  rehearsalH: "Von der Probe zum Empfang",
  rehearsalP1:
    "Der Sangeet begann als etwas Privates — eine Runde Frauen, die in den Tagen vor einer Hochzeit traditionelle Lieder sangen, eine Probe der Melodie mehr als der Bewegung. Er war warm, klein und unfotografiert, gedacht nur für die Familien, die ihn lebten.",
  rehearsalP2:
    "Dieser Abend ist gewachsen. Heute ist der Sangeet ein vollwertiger Empfang in allem außer dem Namen: choreografierte Darbietungen von beiden Seiten, eine Tanzfläche, die sich mit der letzten Nummer füllt, und ein Fotograf, der oft mit den Bildern zurückkommt, die das Paar zuerst rahmt. Die Probe wurde zum Empfang, und niemand stört sich daran.",
  gal: ["Beide Familien proben auf der Terrasse", "Die Tanzfläche füllt sich nach der letzten Darbietung · Cap Cana"],
  planH: "Wie wir ihn planen",
  planP:
    "Wir behandeln den Sangeet als eigene Produktion, mit eigenem Ablauf, eigenem Lichtplan und eigenem Bogen von der Ankunft bis zur offenen Tanzfläche. Er ist nicht der Eröffnungsakt der Hochzeit; er ist ein Abend, der für sich bestehen muss.",
  perfH: "Die Darbietungen",
  perfP:
    "Wir beginnen Monate im Voraus, die Familienauftretenden per Videocall zu proben, dann erneut vor Ort am Tag zuvor. Neunzig Minuten sind unsere Obergrenze — genug, um jeden Cousin und jede Tante zu ehren, die die Fläche wollen, nie so lang, dass die Gäste, die tanzen wollen, unruhig werden. Wir reihen die Nummern so, dass die Energie steigt, und lassen den letzten Platz immer für das Paar.",
  roomH: "Der Raum",
  roomP:
    "Das Licht trägt den Abend. Wir halten es tief und warm, die Tanzfläche hell und die Tische weich, damit das Auge stets zur Darbietung und dann zur Bewegung wandert. Der Ton muss einer gesungenen Ghazal wie einem Bollywood-Finale dienen, also bauen wir die Anlage auf Bandbreite, nicht auf Lautstärke. Der Raum soll sich wie ein Wohnzimmer anfühlen, das zufällig zweihundert Menschen setzt.",
  pqQuote:
    "Ein Sangeet lebt oder stirbt mit seiner Tanzfläche. Proben Sie die Darbietungen, so viel Sie wollen — der Abend gelingt nur, wenn die Gäste nicht sitzen bleiben können, sobald sie enden.",
  pqCite: "Grecia Mejía · Gründerin",
  takeH: "Die Kurzfassung",
  takeItems: [
    "Der Sangeet trägt heute das emotionale Gewicht, das einst die Zeremonie trug — planen Sie ihn als Empfang, nicht als Probe",
    "Halten Sie ihn am Abend vor der Zeremonie, wenn Haldi und Mehndi die Familien erwärmt haben",
    "Begrenzen Sie die Darbietungen auf neunzig Minuten und halten Sie die Fläche danach offen",
    "Beleuchten Sie ihn tief und warm; bauen Sie die Anlage auf Bandbreite, nicht auf Lautstärke",
  ],
  splitEyebrow: "Warum wir ihn zuerst planen",
  splitHeading: "Der Abend, der die Hochzeit leicht macht.",
  splitParas: [
    "Wenn der Sangeet gelingt, ist die folgende Zeremonie fast mühelos — die Familien haben sich bereits auf der Tanzfläche getroffen, und die Nervosität, die einen Hochzeitsmorgen sonst überschattet, ist schlicht nicht da.",
    "Also planen wir den Sangeet vor dem Ja-Wort. Bekommt man den Abend davor richtig hin, so kommt der Tag selbst unter Menschen an, die sich bereits als eine Familie fühlen statt als zwei.",
  ],
  cta: {
    script: "Ein privates Gespräch —",
    heading: "Planen Sie einen unvergesslichen Sangeet?",
    body: "Wir nehmen vierzehn Hochzeiten im Jahr an. Nennen Sie uns Ihre Termine und die Form Ihrer Feier, und Grecia antwortet Ihnen persönlich binnen fünf Werktagen.",
    ctaLabel: "Beratung anfragen",
  },
  mattersH: "Warum es zählt",
  mattersP: [
    "Der Sangeet zählt, weil hier das Wochenende entscheidet, was für ein Wochenende es wird. Lösen Sie den Raum hier, und alles Folgende läuft wärmer. Es ist derselbe Instinkt wie hinter einer gut geplanten ",
    { text: "Willkommensparty", href: WELCOME },
    " — die Feier beginnt lange vor der Zeremonie, und die Paare, die das verstehen, sind die, die sich an das ganze Wochenende erinnern, nicht nur an den Tag.",
  ],
};

const it: ArticleLocaleCopy = {
  title: "Il sangeet: perché la sera *prima* conta di più",
  excerpt:
    "Sulla prova che non è più una prova, e su come sia diventata la serata più fotografata del fine settimana.",
  kicker: "Pianificazione",
  lede: "Il sangeet ha smesso di essere una prova anni fa. Oggi è la serata più rilassata, calorosa e fotografata del fine settimana, e la pianifichiamo così di proposito.",
  faqs: [
    {
      question: "Che cos'è esattamente un sangeet?",
      answer:
        "Il sangeet è la serata di musica e danza tenuta prima della cerimonia, quando entrambe le famiglie si riuniscono per esibirsi, festeggiare e dare il tono ai giorni a venire. Un tempo era una prova intima di canto; oggi è una produzione a sé.",
    },
    {
      question: "In quale momento del fine settimana va il sangeet?",
      answer:
        "Lo collochiamo la sera prima della cerimonia, dopo che l'haldi e il mehndi hanno sciolto tutti. A quel punto le famiglie si conoscono, i nervi sono svaniti, e la sala è pronta alla gioia più che alla formalità.",
    },
    {
      question: "Quanto durano di solito le esibizioni?",
      answer: [
        "Novanta minuti di esibizioni coreografate è il punto ideale — abbastanza per onorare ogni lato, breve per lasciare la pista aperta al ballo dopo. Vedi la nostra ",
        { text: "guida ai matrimoni indiani", href: IND },
        " per il ritmo completo di più giorni.",
      ],
    },
    {
      question: "Gli invitati devono prepararsi in anticipo?",
      answer:
        "Gli interpreti della famiglia sì: li proviamo per videochiamata nei mesi precedenti, e di nuovo sul posto il giorno prima. Gli altri arrivano semplicemente pronti a ballare; la gioia del sangeet è che alla lista allargata non chiede nulla se non la sua presenza.",
    },
  ],
  bleedQuote: {
    script: "La sera prima —",
    quote:
      "Quando arriva la cerimonia, le famiglie già si vogliono bene. È al sangeet che ciò accade, in silenzio, su una pista da ballo, prima che a qualcuno venga in mente di chiamarlo matrimonio.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const itBody: Body = {
  introP: [
    "Per la maggior parte delle coppie con cui pianifichiamo, il sangeet è la serata che poi descrivono col sorriso più largo. Si iscrive nell'arco più ampio di un ",
    { text: "matrimonio indiano", href: IND },
    ", la sera prima delle promesse, ed è diventato in silenzio il centro emotivo dell'intero fine settimana.",
  ],
  rehearsalH: "Dalla prova al ricevimento",
  rehearsalP1:
    "Il sangeet nacque come qualcosa di privato — un raduno di donne che cantavano canzoni tradizionali nei giorni prima di un matrimonio, una prova di melodia più che di movimento. Era caldo, piccolo e senza fotografie, pensato solo per le famiglie che lo vivevano.",
  rehearsalP2:
    "Quella serata è cresciuta. Oggi il sangeet è un ricevimento a tutti gli effetti tranne che nel nome: esibizioni coreografate da entrambi i lati, una pista che si riempie appena finisce l'ultimo numero, e un fotografo che spesso torna con le immagini che la coppia incornicia per prime. La prova è diventata ricevimento, e a nessuno dispiace.",
  gal: ["Entrambe le famiglie in prova sulla terrazza", "La pista si riempie dopo l'ultima esibizione · Cap Cana"],
  planH: "Come lo pianifichiamo",
  planP:
    "Trattiamo il sangeet come una produzione a sé, con la sua scaletta, il suo piano luci e il suo arco dall'arrivo alla pista aperta. Non è l'atto d'apertura del matrimonio; è una serata che deve reggere da sola.",
  perfH: "Le esibizioni",
  perfP:
    "Iniziamo a provare gli interpreti della famiglia mesi prima, per videochiamata, e di nuovo sul posto il giorno prima. Novanta minuti è il nostro tetto — abbastanza per onorare ogni cugino e zia che vuole la pista, mai così tanto che gli invitati in attesa di ballare si spazientiscano. Sequenziamo i numeri perché l'energia salga, e lasciamo sempre l'ultimo spazio alla coppia.",
  roomH: "La sala",
  roomP:
    "L'illuminazione regge la serata. La teniamo bassa e calda, con la pista luminosa e i tavoli morbidi, perché l'occhio vada sempre all'esibizione e poi al movimento. Il suono deve servire un ghazal cantato e un finale di Bollywood, quindi montiamo l'impianto per la gamma, non per il volume. La sala deve sembrare un salotto che per caso siede duecento persone.",
  pqQuote:
    "Un sangeet vive o muore per la sua pista. Prova le esibizioni quanto vuoi — la serata riesce solo se gli invitati non riescono a restare seduti appena finiscono.",
  pqCite: "Grecia Mejía · Fondatrice",
  takeH: "In breve",
  takeItems: [
    "Il sangeet porta ora il peso emotivo che aveva la cerimonia — pianificalo come ricevimento, non come prova",
    "Tienilo la sera prima della cerimonia, dopo che l'haldi e il mehndi hanno scaldato le famiglie",
    "Limita le esibizioni a novanta minuti e lascia la pista aperta dopo",
    "Illuminalo basso e caldo; monta il suono per la gamma, non per il volume",
  ],
  splitEyebrow: "Perché lo pianifichiamo per primo",
  splitHeading: "La serata che rende facile il matrimonio.",
  splitParas: [
    "Quando il sangeet funziona, la cerimonia che segue è quasi senza sforzo — le famiglie si sono già incontrate in pista, e i nervi che di solito ombreggiano una mattina di matrimonio semplicemente non ci sono.",
    "Perciò pianifichiamo il sangeet prima delle promesse. Azzecca la sera prima, e il giorno stesso arriva tra persone che già si sentono una famiglia sola anziché due.",
  ],
  cta: {
    script: "Una conversazione privata —",
    heading: "Stai pianificando un sangeet da ricordare?",
    body: "Accettiamo quattordici matrimoni all'anno. Dicci le date e la forma della tua celebrazione, e Grecia ti risponderà personalmente entro cinque giorni lavorativi.",
    ctaLabel: "Richiedi una consulenza",
  },
  mattersH: "Perché conta",
  mattersP: [
    "Il sangeet conta perché è dove il fine settimana decide che genere di fine settimana sarà. Rilassa la sala qui e tutto ciò che segue scorre più caldo. È lo stesso istinto dietro una ",
    { text: "festa di benvenuto", href: WELCOME },
    " ben pianificata — la festa comincia molto prima della cerimonia, e le coppie che lo capiscono sono quelle che ricordano l'intero fine settimana, non solo il giorno.",
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
    b.h2(t.rehearsalH),
    b.p(t.rehearsalP1),
    b.p(t.rehearsalP2),
    b.gallery([{ alt: t.gal[0], caption: t.gal[0] }, { alt: t.gal[1], caption: t.gal[1] }]),
    b.h2(t.planH),
    b.p(t.planP),
    b.h3(t.perfH),
    b.p(t.perfP),
    b.h3(t.roomH),
    b.p(t.roomP),
    b.pullQuote(t.pqQuote, t.pqCite),
    b.takeaways(t.takeH, t.takeItems),
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
    b.h2(t.mattersH),
    b.p(t.mattersP),
  ];
};

export const article: ArticleSeed = {
  canonicalSlug: "the-sangeet-night-before",
  categorySlug: "multicultural-weddings",
  relatedDestinationSlug: "punta-cana",
  relatedCultureSlug: "indian-weddings",
  readMinutes: 8,
  publishedAt: "2026-01-20T09:00:00Z",
  featured: false,
  relatedArticles: [
    "best-indian-wedding-venues-punta-cana",
    "welcome-party-second-star",
    "interfaith-ceremony-coast",
  ],
  byLocale,
  buildBody,
};
