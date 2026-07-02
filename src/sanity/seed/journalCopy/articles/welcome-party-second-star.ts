/**
 * Journal article — "The Welcome Party: Your Wedding's Second Star".
 * Rich body mirroring the design's `pages/journal-article.jsx`.
 */

import { type Locale } from "../../../../i18n/routing";
import * as b from "../body";
import type { ArticleSeed, ArticleLocaleCopy } from "../types";

const PC = "/destinations/punta-cana";
const SANGEET = "/journal/the-sangeet-night-before";

type Body = {
  introP: b.Run[];
  tenseH: string;
  tenseP1: string;
  tenseP2: string;
  featureCaption: string;
  featureCredit: string;
  takeH: string;
  takeItems: string[];
  doesH: string;
  doesP: string;
  resetH: string;
  resetP: string;
  registerH: string;
  registerP: string;
  pqQuote: string;
  pqCite: string;
  statLabels: [string, string, string];
  splitEyebrow: string;
  splitHeading: string;
  splitParas: [string, string];
  cta: { script: string; heading: string; body: string; ctaLabel: string };
  beginsH: string;
  beginsP: b.Run[];
};

const STAT_VALUES: [string, string, string] = ["1", "3", "70%"];

const en: ArticleLocaleCopy = {
  title: "The Welcome Party: Your Wedding's Second *Star*",
  excerpt:
    "Why the night-before reception has quietly become the most important event of a destination wedding weekend.",
  lede: "Guests fly in tense and tired. The welcome party is where the weekend actually begins — and where, more and more, the warmest memories are made.",
  faqs: [
    {
      question: "What is a wedding welcome party?",
      answer:
        "It is the gathering the evening before the wedding, once most guests have arrived. Traditionally a casual rehearsal-dinner overflow, it has grown into a full first-night reception that sets the tone for the entire weekend.",
    },
    {
      question: "Should the welcome party be formal?",
      answer:
        "No. Its whole value is that it is not the wedding. Keep it warm and unstructured — food guests can eat standing, music they can talk over, and nowhere in particular anyone has to be.",
    },
    {
      question: "Who pays for the welcome party?",
      answer:
        "Whoever is hosting the weekend, most often the couple. Because it carries so much of the emotional weight of a destination wedding, we treat it as a headline event in the budget, not an afterthought.",
    },
    {
      question: "How long should the welcome party last?",
      answer:
        "Two to three hours is plenty. Guests are tired from travel; the point is to greet, feed and settle them, not to exhaust them the night before the main event.",
    },
  ],
  bleedQuote: {
    script: "The night before —",
    quote:
      "Nobody remembers the seating chart. They remember the first night, when the whole family was in one room for the first time, and the weekend had not yet begun.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const enBody: Body = {
  introP: [
    "For years the welcome party was an afterthought — a loose dinner for whoever had landed early. Then destination weddings changed the maths. When almost everyone travels, the night before stops being a warm-up and becomes the first real gathering. In a place like ",
    { text: "Punta Cana", href: PC },
    ", where guests arrive from three continents over two days, it is often the moment the weekend truly starts.",
  ],
  tenseH: "Guests arrive tense",
  tenseP1:
    "Consider the state your guests are in when they land. A long flight, a time-zone shift, a taxi through unfamiliar heat, a room they have never seen. They are happy to be there and quietly frazzled all at once — and the wedding is still a full day away.",
  tenseP2:
    "That tension does not simply disappear overnight. If the first time everyone is together is the ceremony itself, a good deal of the day is spent letting shoulders drop. The welcome party does that work in advance, so the wedding can be pure celebration.",
  featureCaption: "The first night, before the weekend begins",
  featureCredit: "Photographed November 2025",
  takeH: "The short version",
  takeItems: [
    "When most guests travel, the night before becomes the first real gathering",
    "Its job is to release the tension of travel before the wedding day",
    "Keep it warm and unstructured — the opposite of the ceremony",
    "Treated well, it is where the weekend's warmest memories are made",
  ],
  doesH: "What the welcome party does",
  doesP:
    "A good welcome party does two quiet things at once. It resets the room after a day of travel, and it sets the emotional register for everything that follows. Neither is glamorous, and both matter more than almost anything you will spend money on.",
  resetH: "It resets the room",
  resetP:
    "By the end of the first evening, strangers have become a wedding party. The bride's college friends have met the groom's cousins; the two families have shaken hands and shared a drink. All the awkward first introductions happen here, gently, so that by the ceremony everyone already belongs.",
  registerH: "It sets the register",
  registerP:
    "The first night tells guests what kind of weekend this will be. Warm rather than stiff, generous rather than transactional, a family gathering rather than a performance. Get that register right on the first evening and it carries, unspoken, through every hour that follows.",
  pqQuote:
    "We plan the welcome party with more care than the reception. The reception runs on momentum. The first night has to create that momentum from nothing.",
  pqCite: "Grecia Mejía · Founder",
  statLabels: [
    "The first night sets the tone for the whole weekend",
    "Two-to-three hours is all it needs to run",
    "Of couples now say it was their favourite event",
  ],
  splitEyebrow: "How we run it",
  splitHeading: "Warm, unhurried, unstructured.",
  splitParas: [
    "We keep the first night deliberately loose — food guests can eat standing, music they can talk over, and no schedule anyone has to obey. The whole design is the opposite of the ceremony's precision.",
    "That looseness is what lets it breathe. Guests wander, cluster, drift and reconvene at their own pace, and by the end of the evening the room has arranged itself into a wedding party without anyone being told where to stand.",
  ],
  cta: {
    script: "A private conversation —",
    heading: "Planning a destination wedding weekend?",
    body: "We accept fourteen weddings a year. Tell us your dates and guest count, and Grecia will write back personally within five working days.",
    ctaLabel: "Request a consultation",
  },
  beginsH: "The night the weekend begins",
  beginsP: [
    "So we have stopped treating the welcome party as an accessory to the wedding and started treating it as the wedding's second star. It carries a weekend's worth of warmth in a single evening — and for many families it becomes the night they remember most. For one particular expression of it, see our piece on ",
    { text: "the sangeet, the night before", href: SANGEET },
    ".",
  ],
};

const es: ArticleLocaleCopy = {
  title: "La fiesta de bienvenida: la segunda *estrella* de tu boda",
  excerpt:
    "Por qué la recepción de la noche anterior se ha convertido, en silencio, en el evento más importante de un fin de semana de boda de destino.",
  lede: "Los invitados llegan tensos y cansados. La fiesta de bienvenida es donde el fin de semana empieza de verdad, y donde, cada vez más, nacen los recuerdos más cálidos.",
  faqs: [
    {
      question: "¿Qué es una fiesta de bienvenida de boda?",
      answer:
        "Es la reunión de la noche anterior a la boda, cuando ya han llegado la mayoría de los invitados. Antes era un desbordamiento informal de la cena de ensayo; hoy es una primera recepción completa que marca el tono de todo el fin de semana.",
    },
    {
      question: "¿Debe ser formal la fiesta de bienvenida?",
      answer:
        "No. Todo su valor está en que no es la boda. Mantenla cálida y sin estructura: comida que se come de pie, música sobre la que se pueda conversar y ningún sitio en particular donde haya que estar.",
    },
    {
      question: "¿Quién paga la fiesta de bienvenida?",
      answer:
        "Quien acoge el fin de semana, casi siempre la pareja. Como lleva gran parte del peso emocional de una boda de destino, la tratamos como un evento estelar del presupuesto, no como algo secundario.",
    },
    {
      question: "¿Cuánto debe durar la fiesta de bienvenida?",
      answer:
        "Dos o tres horas bastan. Los invitados llegan cansados del viaje; se trata de recibirlos, alimentarlos y acomodarlos, no de agotarlos la noche antes del evento principal.",
    },
  ],
  bleedQuote: {
    script: "La noche anterior —",
    quote:
      "Nadie recuerda el plano de mesas. Recuerdan la primera noche, cuando toda la familia estuvo en una sala por primera vez y el fin de semana aún no había empezado.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const esBody: Body = {
  introP: [
    "Durante años la fiesta de bienvenida fue algo secundario: una cena informal para quien había llegado temprano. Luego las bodas de destino cambiaron las cuentas. Cuando casi todos viajan, la noche anterior deja de ser un calentamiento y se convierte en la primera reunión de verdad. En un lugar como ",
    { text: "Punta Cana", href: PC },
    ", donde los invitados llegan de tres continentes en dos días, suele ser el momento en que el fin de semana empieza de verdad.",
  ],
  tenseH: "Los invitados llegan tensos",
  tenseP1:
    "Piensa en el estado en que llegan tus invitados. Un vuelo largo, un cambio de horario, un taxi por un calor desconocido, una habitación que nunca han visto. Están felices de estar allí y algo agotados a la vez, y la boda todavía queda a un día entero.",
  tenseP2:
    "Esa tensión no desaparece sola de la noche a la mañana. Si la primera vez que todos coinciden es la propia ceremonia, buena parte del día se va en dejar que los hombros bajen. La fiesta de bienvenida hace ese trabajo por adelantado, para que la boda sea pura celebración.",
  featureCaption: "La primera noche, antes de que empiece el fin de semana",
  featureCredit: "Fotografiado en noviembre de 2025",
  takeH: "La versión corta",
  takeItems: [
    "Cuando la mayoría viaja, la noche anterior se vuelve la primera reunión de verdad",
    "Su función es liberar la tensión del viaje antes del día de la boda",
    "Mantenla cálida y sin estructura: lo contrario de la ceremonia",
    "Bien cuidada, es donde nacen los recuerdos más cálidos del fin de semana",
  ],
  doesH: "Qué hace la fiesta de bienvenida",
  doesP:
    "Una buena fiesta de bienvenida hace dos cosas discretas a la vez. Reinicia la sala tras un día de viaje y fija el registro emocional de todo lo que sigue. Ninguna es glamurosa, y ambas importan más que casi cualquier otra cosa en la que gastes dinero.",
  resetH: "Reinicia la sala",
  resetP:
    "Al final de la primera velada, unos desconocidos se han convertido en cortejo nupcial. Las amigas de la universidad de la novia han conocido a los primos del novio; las dos familias se han dado la mano y han compartido una copa. Todas las primeras presentaciones incómodas ocurren aquí, con suavidad, para que en la ceremonia todos pertenezcan ya.",
  registerH: "Fija el registro",
  registerP:
    "La primera noche les dice a los invitados qué clase de fin de semana será. Cálido y no rígido, generoso y no transaccional, una reunión familiar y no una representación. Acierta ese registro la primera velada y se mantiene, sin decirlo, en cada hora que sigue.",
  pqQuote:
    "Planificamos la fiesta de bienvenida con más cuidado que la recepción. La recepción vive del impulso. La primera noche tiene que crear ese impulso de la nada.",
  pqCite: "Grecia Mejía · Fundadora",
  statLabels: [
    "La primera noche marca el tono de todo el fin de semana",
    "Con dos o tres horas es suficiente para desarrollarla",
    "De las parejas dicen ahora que fue su evento favorito",
  ],
  splitEyebrow: "Cómo la organizamos",
  splitHeading: "Cálida, sin prisa, sin estructura.",
  splitParas: [
    "Mantenemos la primera noche deliberadamente suelta: comida que se come de pie, música sobre la que se conversa y ningún horario que haya que obedecer. Todo el diseño es lo contrario de la precisión de la ceremonia.",
    "Esa soltura es lo que le permite respirar. Los invitados deambulan, se agrupan, se dispersan y se reúnen a su ritmo, y al final de la velada la sala se ha ordenado en un cortejo nupcial sin que nadie tuviera que decir dónde ponerse.",
  ],
  cta: {
    script: "Una conversación privada —",
    heading: "¿Planeas un fin de semana de boda de destino?",
    body: "Aceptamos catorce bodas al año. Cuéntanos tus fechas y número de invitados, y Grecia te responderá personalmente en cinco días laborables.",
    ctaLabel: "Solicitar una consulta",
  },
  beginsH: "La noche en que empieza el fin de semana",
  beginsP: [
    "Así que hemos dejado de tratar la fiesta de bienvenida como un accesorio de la boda y hemos empezado a tratarla como la segunda estrella de la boda. Lleva la calidez de todo un fin de semana en una sola velada, y para muchas familias se convierte en la noche que más recuerdan. Para una expresión concreta de ella, mira nuestro texto sobre ",
    { text: "el sangeet, la noche anterior", href: SANGEET },
    ".",
  ],
};

const fr: ArticleLocaleCopy = {
  title: "La soirée d'accueil : la seconde *vedette* de votre mariage",
  excerpt:
    "Pourquoi la réception de la veille est devenue, discrètement, l'événement le plus important d'un week-end de mariage de destination.",
  lede: "Les invités arrivent tendus et fatigués. La soirée d'accueil est le vrai début du week-end — et, de plus en plus, le lieu des souvenirs les plus chaleureux.",
  faqs: [
    {
      question: "Qu'est-ce qu'une soirée d'accueil de mariage ?",
      answer:
        "C'est le rassemblement de la veille du mariage, une fois la plupart des invités arrivés. Jadis simple prolongement informel du dîner de répétition, elle est devenue une première réception à part entière qui donne le ton de tout le week-end.",
    },
    {
      question: "La soirée d'accueil doit-elle être formelle ?",
      answer:
        "Non. Toute sa valeur tient à ce qu'elle n'est pas le mariage. Gardez-la chaleureuse et sans structure : des mets qui se mangent debout, une musique par-dessus laquelle on peut parler, et nulle place assignée où se tenir.",
    },
    {
      question: "Qui paie la soirée d'accueil ?",
      answer:
        "Celui qui reçoit pour le week-end, le plus souvent le couple. Comme elle porte une grande part du poids émotionnel d'un mariage de destination, nous la traitons comme un événement phare du budget, non comme un détail.",
    },
    {
      question: "Combien de temps doit durer la soirée d'accueil ?",
      answer:
        "Deux à trois heures suffisent amplement. Les invités sont fatigués du voyage ; il s'agit de les accueillir, de les nourrir et de les installer, non de les épuiser la veille de l'événement principal.",
    },
  ],
  bleedQuote: {
    script: "La veille —",
    quote:
      "Personne ne se souvient du plan de table. On se souvient de la première nuit, quand toute la famille s'est trouvée dans une même pièce pour la première fois, et que le week-end n'avait pas encore commencé.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const frBody: Body = {
  introP: [
    "Des années durant, la soirée d'accueil fut un détail — un dîner sans façon pour ceux arrivés en avance. Puis les mariages de destination ont changé le calcul. Quand presque tout le monde voyage, la veille cesse d'être un échauffement pour devenir le premier vrai rassemblement. Dans un lieu comme ",
    { text: "Punta Cana", href: PC },
    ", où les invités arrivent de trois continents en deux jours, c'est souvent le moment où le week-end commence vraiment.",
  ],
  tenseH: "Les invités arrivent tendus",
  tenseP1:
    "Songez à l'état de vos invités à leur arrivée. Un long vol, un décalage horaire, un taxi dans une chaleur inconnue, une chambre qu'ils n'ont jamais vue. Ils sont heureux d'être là et discrètement à cran, tout à la fois — et le mariage est encore à un jour entier.",
  tenseP2:
    "Cette tension ne s'évanouit pas d'elle-même du jour au lendemain. Si la première fois que tout le monde est réuni est la cérémonie elle-même, une bonne part de la journée sert à laisser les épaules se détendre. La soirée d'accueil fait ce travail à l'avance, pour que le mariage soit pure célébration.",
  featureCaption: "La première nuit, avant que le week-end commence",
  featureCredit: "Photographié en novembre 2025",
  takeH: "En bref",
  takeItems: [
    "Quand la plupart voyagent, la veille devient le premier vrai rassemblement",
    "Son rôle est de dissiper la tension du voyage avant le jour du mariage",
    "Gardez-la chaleureuse et sans structure — l'inverse de la cérémonie",
    "Bien menée, c'est là que naissent les souvenirs les plus chaleureux du week-end",
  ],
  doesH: "Ce que fait la soirée d'accueil",
  doesP:
    "Une bonne soirée d'accueil fait deux choses discrètes à la fois. Elle remet la salle à zéro après une journée de voyage, et elle fixe le registre émotionnel de tout ce qui suit. Ni l'une ni l'autre n'est spectaculaire, et toutes deux comptent plus que presque tout ce pour quoi vous dépenserez.",
  resetH: "Elle remet la salle à zéro",
  resetP:
    "À la fin de la première soirée, des inconnus sont devenus un cortège de mariage. Les amies d'université de la mariée ont rencontré les cousins du marié ; les deux familles se sont serré la main et ont partagé un verre. Toutes les premières présentations gênantes ont lieu ici, en douceur, pour qu'à la cérémonie chacun appartienne déjà.",
  registerH: "Elle fixe le registre",
  registerP:
    "La première nuit dit aux invités quel genre de week-end les attend. Chaleureux plutôt que guindé, généreux plutôt que transactionnel, une réunion de famille plutôt qu'une représentation. Trouvez ce registre juste dès la première soirée et il se poursuit, tacitement, à chaque heure qui suit.",
  pqQuote:
    "Nous préparons la soirée d'accueil avec plus de soin que la réception. La réception vit sur son élan. La première nuit doit créer cet élan à partir de rien.",
  pqCite: "Grecia Mejía · Fondatrice",
  statLabels: [
    "La première nuit donne le ton de tout le week-end",
    "Deux à trois heures suffisent à la dérouler",
    "Des couples disent aujourd'hui que ce fut leur événement préféré",
  ],
  splitEyebrow: "Comment nous la menons",
  splitHeading: "Chaleureuse, sans hâte, sans structure.",
  splitParas: [
    "Nous gardons la première nuit délibérément détendue — des mets qui se mangent debout, une musique par-dessus laquelle on parle, et aucun horaire à respecter. Tout le dessein est l'inverse de la précision de la cérémonie.",
    "C'est ce relâchement qui la laisse respirer. Les invités flânent, se regroupent, se dispersent et se retrouvent à leur rythme, et à la fin de la soirée la salle s'est arrangée en cortège de mariage sans qu'on ait dit à personne où se placer.",
  ],
  cta: {
    script: "Une conversation privée —",
    heading: "Un week-end de mariage de destination en tête ?",
    body: "Nous acceptons quatorze mariages par an. Dites-nous vos dates et le nombre d'invités, et Grecia vous répondra personnellement sous cinq jours ouvrés.",
    ctaLabel: "Demander une consultation",
  },
  beginsH: "La nuit où le week-end commence",
  beginsP: [
    "Nous avons donc cessé de traiter la soirée d'accueil comme un accessoire du mariage pour la traiter comme la seconde vedette du mariage. Elle porte la chaleur de tout un week-end en une seule soirée — et pour bien des familles elle devient la nuit dont on se souvient le plus. Pour une expression particulière, voyez notre article sur ",
    { text: "le sangeet, la veille", href: SANGEET },
    ".",
  ],
};

const pt: ArticleLocaleCopy = {
  title: "A festa de boas-vindas: a segunda *estrela* do seu casamento",
  excerpt:
    "Porque a receção da véspera se tornou, em silêncio, o evento mais importante de um fim de semana de casamento de destino.",
  lede: "Os convidados chegam tensos e cansados. A festa de boas-vindas é onde o fim de semana realmente começa — e onde, cada vez mais, nascem as memórias mais calorosas.",
  faqs: [
    {
      question: "O que é uma festa de boas-vindas de casamento?",
      answer:
        "É o encontro na véspera do casamento, depois de a maioria dos convidados já ter chegado. Antes um prolongamento informal do jantar de ensaio, tornou-se uma primeira receção completa que define o tom de todo o fim de semana.",
    },
    {
      question: "A festa de boas-vindas deve ser formal?",
      answer:
        "Não. Todo o seu valor está em não ser o casamento. Mantenha-a calorosa e sem estrutura: comida que se come de pé, música sobre a qual se pode conversar e nenhum lugar em particular onde seja preciso estar.",
    },
    {
      question: "Quem paga a festa de boas-vindas?",
      answer:
        "Quem acolhe o fim de semana, quase sempre o casal. Como carrega grande parte do peso emocional de um casamento de destino, tratamo-la como um evento de destaque no orçamento, não como algo secundário.",
    },
    {
      question: "Quanto deve durar a festa de boas-vindas?",
      answer:
        "Duas a três horas chegam bem. Os convidados estão cansados da viagem; trata-se de recebê-los, alimentá-los e acomodá-los, não de esgotá-los na noite anterior ao evento principal.",
    },
  ],
  bleedQuote: {
    script: "Na véspera —",
    quote:
      "Ninguém se lembra do plano de mesas. Lembram-se da primeira noite, quando toda a família esteve numa sala pela primeira vez e o fim de semana ainda não tinha começado.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const ptBody: Body = {
  introP: [
    "Durante anos a festa de boas-vindas foi algo secundário — um jantar informal para quem tinha chegado cedo. Depois os casamentos de destino mudaram as contas. Quando quase todos viajam, a véspera deixa de ser um aquecimento e torna-se o primeiro encontro a sério. Num lugar como ",
    { text: "Punta Cana", href: PC },
    ", onde os convidados chegam de três continentes em dois dias, é muitas vezes o momento em que o fim de semana verdadeiramente começa.",
  ],
  tenseH: "Os convidados chegam tensos",
  tenseP1:
    "Pense no estado em que os seus convidados chegam. Um voo longo, uma mudança de fuso horário, um táxi por um calor desconhecido, um quarto que nunca viram. Estão felizes por ali estar e discretamente esgotados ao mesmo tempo — e o casamento está ainda a um dia inteiro de distância.",
  tenseP2:
    "Essa tensão não desaparece sozinha de um dia para o outro. Se a primeira vez que todos se juntam é a própria cerimónia, boa parte do dia gasta-se a deixar os ombros descer. A festa de boas-vindas faz esse trabalho de antemão, para que o casamento seja pura celebração.",
  featureCaption: "A primeira noite, antes de o fim de semana começar",
  featureCredit: "Fotografado em novembro de 2025",
  takeH: "A versão curta",
  takeItems: [
    "Quando a maioria viaja, a véspera torna-se o primeiro encontro a sério",
    "A sua função é libertar a tensão da viagem antes do dia do casamento",
    "Mantenha-a calorosa e sem estrutura — o oposto da cerimónia",
    "Bem cuidada, é onde nascem as memórias mais calorosas do fim de semana",
  ],
  doesH: "O que faz a festa de boas-vindas",
  doesP:
    "Uma boa festa de boas-vindas faz duas coisas discretas ao mesmo tempo. Reinicia a sala após um dia de viagem e fixa o registo emocional de tudo o que se segue. Nenhuma é glamorosa, e ambas importam mais do que quase tudo em que vai gastar dinheiro.",
  resetH: "Reinicia a sala",
  resetP:
    "Ao fim da primeira noite, desconhecidos tornaram-se um cortejo nupcial. As amigas de faculdade da noiva conheceram os primos do noivo; as duas famílias apertaram a mão e partilharam uma bebida. Todas as primeiras apresentações embaraçosas acontecem aqui, com suavidade, para que na cerimónia todos já pertençam.",
  registerH: "Fixa o registo",
  registerP:
    "A primeira noite diz aos convidados que género de fim de semana será. Caloroso e não rígido, generoso e não transacional, um encontro de família e não uma encenação. Acerte esse registo na primeira noite e ele mantém-se, sem se dizer, a cada hora que se segue.",
  pqQuote:
    "Planeamos a festa de boas-vindas com mais cuidado do que a receção. A receção vive do impulso. A primeira noite tem de criar esse impulso a partir do nada.",
  pqCite: "Grecia Mejía · Fundadora",
  statLabels: [
    "A primeira noite define o tom de todo o fim de semana",
    "Duas a três horas bastam para a desenrolar",
    "Dos casais dizem agora que foi o seu evento favorito",
  ],
  splitEyebrow: "Como a conduzimos",
  splitHeading: "Calorosa, sem pressa, sem estrutura.",
  splitParas: [
    "Mantemos a primeira noite deliberadamente solta — comida que se come de pé, música sobre a qual se conversa e nenhum horário a obedecer. Todo o desenho é o oposto da precisão da cerimónia.",
    "É essa soltura que a deixa respirar. Os convidados vagueiam, agrupam-se, dispersam-se e voltam a juntar-se ao seu ritmo, e ao fim da noite a sala organizou-se num cortejo nupcial sem que ninguém tenha dito a alguém onde ficar.",
  ],
  cta: {
    script: "Uma conversa privada —",
    heading: "A planear um fim de semana de casamento de destino?",
    body: "Aceitamos catorze casamentos por ano. Diga-nos as suas datas e número de convidados, e a Grecia responder-lhe-á pessoalmente em cinco dias úteis.",
    ctaLabel: "Pedir uma consulta",
  },
  beginsH: "A noite em que o fim de semana começa",
  beginsP: [
    "Por isso deixámos de tratar a festa de boas-vindas como um acessório do casamento e começámos a tratá-la como a segunda estrela do casamento. Carrega a calor de todo um fim de semana numa só noite — e para muitas famílias torna-se a noite de que mais se lembram. Para uma expressão particular dela, veja o nosso texto sobre ",
    { text: "o sangeet, na véspera", href: SANGEET },
    ".",
  ],
};

const de: ArticleLocaleCopy = {
  title: "Die Welcome-Party: der zweite *Star* Ihrer Hochzeit",
  excerpt:
    "Warum der Empfang am Vorabend still zum wichtigsten Ereignis eines Destination-Hochzeitswochenendes geworden ist.",
  lede: "Gäste landen angespannt und müde. Die Welcome-Party ist, wo das Wochenende wirklich beginnt — und wo immer öfter die wärmsten Erinnerungen entstehen.",
  faqs: [
    {
      question: "Was ist eine Hochzeits-Welcome-Party?",
      answer:
        "Es ist das Zusammenkommen am Abend vor der Hochzeit, sobald die meisten Gäste angereist sind. Früher ein loser Ausläufer des Probeessens, ist es zu einem vollwertigen ersten Empfang gewachsen, der den Ton für das ganze Wochenende setzt.",
    },
    {
      question: "Sollte die Welcome-Party förmlich sein?",
      answer:
        "Nein. Ihr ganzer Wert liegt darin, dass sie nicht die Hochzeit ist. Halten Sie sie warm und ohne Struktur — Speisen, die man im Stehen isst, Musik, über die man reden kann, und keinen bestimmten Ort, an dem jemand sein muss.",
    },
    {
      question: "Wer zahlt die Welcome-Party?",
      answer:
        "Wer das Wochenende ausrichtet, meist das Paar. Da sie so viel vom emotionalen Gewicht einer Destination-Hochzeit trägt, behandeln wir sie als Hauptereignis im Budget, nicht als Nebensache.",
    },
    {
      question: "Wie lange sollte die Welcome-Party dauern?",
      answer:
        "Zwei bis drei Stunden genügen reichlich. Die Gäste sind müde von der Reise; es geht darum, sie zu begrüßen, zu bewirten und ankommen zu lassen, nicht sie am Abend vor dem Hauptereignis zu erschöpfen.",
    },
  ],
  bleedQuote: {
    script: "Am Abend zuvor —",
    quote:
      "Niemand erinnert sich an den Sitzplan. Man erinnert sich an die erste Nacht, als die ganze Familie zum ersten Mal in einem Raum war und das Wochenende noch nicht begonnen hatte.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const deBody: Body = {
  introP: [
    "Jahrelang war die Welcome-Party eine Nebensache — ein zwangloses Dinner für jene, die früh gelandet waren. Dann veränderten Destination-Hochzeiten die Rechnung. Wenn fast alle reisen, hört der Vorabend auf, ein Aufwärmen zu sein, und wird zum ersten wirklichen Zusammenkommen. An einem Ort wie ",
    { text: "Punta Cana", href: PC },
    ", wo Gäste über zwei Tage von drei Kontinenten anreisen, ist es oft der Moment, in dem das Wochenende wirklich beginnt.",
  ],
  tenseH: "Gäste landen angespannt",
  tenseP1:
    "Bedenken Sie, in welchem Zustand Ihre Gäste landen. Ein langer Flug, eine Zeitverschiebung, ein Taxi durch ungewohnte Hitze, ein Zimmer, das sie nie gesehen haben. Sie freuen sich, dort zu sein, und sind zugleich still ausgelaugt — und die Hochzeit ist noch einen ganzen Tag entfernt.",
  tenseP2:
    "Diese Anspannung verschwindet nicht einfach über Nacht. Ist das erste Mal, dass alle zusammen sind, die Zeremonie selbst, geht ein guter Teil des Tages damit auf, die Schultern sinken zu lassen. Die Welcome-Party leistet diese Arbeit im Voraus, damit die Hochzeit reines Feiern sein kann.",
  featureCaption: "Die erste Nacht, bevor das Wochenende beginnt",
  featureCredit: "Fotografiert im November 2025",
  takeH: "Die Kurzfassung",
  takeItems: [
    "Wenn die meisten reisen, wird der Vorabend zum ersten wirklichen Zusammenkommen",
    "Ihre Aufgabe ist es, die Reisespannung vor dem Hochzeitstag zu lösen",
    "Halten Sie sie warm und ohne Struktur — das Gegenteil der Zeremonie",
    "Gut geführt, entstehen hier die wärmsten Erinnerungen des Wochenendes",
  ],
  doesH: "Was die Welcome-Party leistet",
  doesP:
    "Eine gute Welcome-Party tut zwei stille Dinge zugleich. Sie setzt den Raum nach einem Reisetag zurück und legt das emotionale Register für alles Folgende fest. Keines ist glamourös, und beide zählen mehr als fast alles, wofür Sie Geld ausgeben werden.",
  resetH: "Sie setzt den Raum zurück",
  resetP:
    "Am Ende des ersten Abends sind aus Fremden eine Hochzeitsgesellschaft geworden. Die Studienfreundinnen der Braut haben die Cousins des Bräutigams getroffen; die beiden Familien haben sich die Hand gegeben und ein Glas geteilt. Alle unbeholfenen ersten Vorstellungen geschehen hier, sanft, sodass bei der Zeremonie jeder schon dazugehört.",
  registerH: "Sie legt das Register fest",
  registerP:
    "Die erste Nacht sagt den Gästen, was für ein Wochenende dies wird. Warm statt steif, großzügig statt transaktional, eine Familienzusammenkunft statt einer Aufführung. Treffen Sie dieses Register am ersten Abend richtig, und es trägt, ungesagt, durch jede folgende Stunde.",
  pqQuote:
    "Wir planen die Welcome-Party mit mehr Sorgfalt als den Empfang. Der Empfang läuft auf Schwung. Die erste Nacht muss diesen Schwung aus dem Nichts erschaffen.",
  pqCite: "Grecia Mejía · Gründerin",
  statLabels: [
    "Die erste Nacht setzt den Ton für das ganze Wochenende",
    "Zwei bis drei Stunden genügen für ihren Verlauf",
    "Der Paare sagen heute, sie war ihr liebstes Ereignis",
  ],
  splitEyebrow: "Wie wir sie führen",
  splitHeading: "Warm, unhastig, ohne Struktur.",
  splitParas: [
    "Wir halten die erste Nacht bewusst locker — Speisen, die man im Stehen isst, Musik, über die man redet, und kein Zeitplan, dem jemand gehorchen muss. Das ganze Konzept ist das Gegenteil der Präzision der Zeremonie.",
    "Diese Lockerheit ist es, die sie atmen lässt. Die Gäste schlendern, sammeln sich, zerstreuen sich und finden sich im eigenen Tempo wieder zusammen, und am Ende des Abends hat sich der Raum zur Hochzeitsgesellschaft geordnet, ohne dass jemandem gesagt wurde, wo er stehen soll.",
  ],
  cta: {
    script: "Ein privates Gespräch —",
    heading: "Planen Sie ein Destination-Hochzeitswochenende?",
    body: "Wir nehmen vierzehn Hochzeiten im Jahr an. Nennen Sie uns Ihre Termine und die Gästezahl, und Grecia antwortet Ihnen persönlich binnen fünf Werktagen.",
    ctaLabel: "Beratung anfragen",
  },
  beginsH: "Die Nacht, in der das Wochenende beginnt",
  beginsP: [
    "So haben wir aufgehört, die Welcome-Party als Zubehör der Hochzeit zu behandeln, und begonnen, sie als den zweiten Star der Hochzeit zu behandeln. Sie trägt die Wärme eines ganzen Wochenendes in einem einzigen Abend — und für viele Familien wird sie die Nacht, an die sie sich am meisten erinnern. Für eine besondere Ausprägung sehen Sie unseren Beitrag über ",
    { text: "den Sangeet, am Abend zuvor", href: SANGEET },
    ".",
  ],
};

const it: ArticleLocaleCopy = {
  title: "Il welcome party: la seconda *stella* del tuo matrimonio",
  excerpt:
    "Perché il ricevimento della sera prima è diventato, in silenzio, l'evento più importante di un fine settimana di matrimonio di destinazione.",
  lede: "Gli ospiti arrivano tesi e stanchi. Il welcome party è dove il fine settimana comincia davvero — e dove, sempre più spesso, nascono i ricordi più caldi.",
  faqs: [
    {
      question: "Che cos'è un welcome party di matrimonio?",
      answer:
        "È il ritrovo della sera prima del matrimonio, quando la maggior parte degli ospiti è già arrivata. Un tempo semplice prolungamento informale della cena di prova, è diventato un primo ricevimento a tutti gli effetti che dà il tono a tutto il fine settimana.",
    },
    {
      question: "Il welcome party deve essere formale?",
      answer:
        "No. Tutto il suo valore sta nel non essere il matrimonio. Tienilo caldo e senza struttura: cibo che si mangia in piedi, musica su cui si può conversare e nessun posto preciso in cui bisogna stare.",
    },
    {
      question: "Chi paga il welcome party?",
      answer:
        "Chi ospita il fine settimana, quasi sempre la coppia. Poiché porta gran parte del peso emotivo di un matrimonio di destinazione, lo trattiamo come un evento di punta nel budget, non come un dettaglio.",
    },
    {
      question: "Quanto deve durare il welcome party?",
      answer:
        "Due o tre ore bastano ampiamente. Gli ospiti sono stanchi del viaggio; il punto è accoglierli, rifocillarli e farli ambientare, non sfinirli la sera prima dell'evento principale.",
    },
  ],
  bleedQuote: {
    script: "La sera prima —",
    quote:
      "Nessuno ricorda la disposizione dei tavoli. Ricordano la prima sera, quando tutta la famiglia si è trovata in una sala per la prima volta e il fine settimana non era ancora cominciato.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const itBody: Body = {
  introP: [
    "Per anni il welcome party è stato un dettaglio — una cena informale per chi era atterrato in anticipo. Poi i matrimoni di destinazione hanno cambiato i conti. Quando quasi tutti viaggiano, la sera prima smette di essere un riscaldamento e diventa il primo vero ritrovo. In un luogo come ",
    { text: "Punta Cana", href: PC },
    ", dove gli ospiti arrivano da tre continenti nell'arco di due giorni, è spesso il momento in cui il fine settimana comincia davvero.",
  ],
  tenseH: "Gli ospiti arrivano tesi",
  tenseP1:
    "Pensa allo stato in cui arrivano i tuoi ospiti. Un volo lungo, un cambio di fuso orario, un taxi in un caldo sconosciuto, una stanza che non hanno mai visto. Sono felici di essere lì e sottilmente sfiancati allo stesso tempo — e il matrimonio è ancora a un giorno intero di distanza.",
  tenseP2:
    "Quella tensione non svanisce da sola dalla sera alla mattina. Se la prima volta che tutti si trovano insieme è la cerimonia stessa, buona parte della giornata se ne va a lasciar scendere le spalle. Il welcome party fa quel lavoro in anticipo, così che il matrimonio possa essere pura festa.",
  featureCaption: "La prima sera, prima che il fine settimana cominci",
  featureCredit: "Fotografato a novembre 2025",
  takeH: "In breve",
  takeItems: [
    "Quando la maggioranza viaggia, la sera prima diventa il primo vero ritrovo",
    "Il suo compito è sciogliere la tensione del viaggio prima del giorno del matrimonio",
    "Tienilo caldo e senza struttura — l'opposto della cerimonia",
    "Curato bene, è dove nascono i ricordi più caldi del fine settimana",
  ],
  doesH: "Che cosa fa il welcome party",
  doesP:
    "Un buon welcome party fa due cose discrete allo stesso tempo. Ripristina la sala dopo una giornata di viaggio e fissa il registro emotivo di tutto ciò che segue. Nessuna delle due è glamour, ed entrambe contano più di quasi tutto ciò per cui spenderai denaro.",
  resetH: "Ripristina la sala",
  resetP:
    "Alla fine della prima sera, degli sconosciuti sono diventati un corteo nuziale. Le amiche di università della sposa hanno conosciuto i cugini dello sposo; le due famiglie si sono strette la mano e hanno condiviso un bicchiere. Tutte le prime presentazioni imbarazzate avvengono qui, con dolcezza, così che alla cerimonia ognuno appartenga già.",
  registerH: "Fissa il registro",
  registerP:
    "La prima sera dice agli ospiti che genere di fine settimana sarà. Caldo e non rigido, generoso e non transazionale, un ritrovo di famiglia e non una recita. Azzecca quel registro la prima sera e si protrae, taciuto, per ogni ora che segue.",
  pqQuote:
    "Pianifichiamo il welcome party con più cura del ricevimento. Il ricevimento vive di slancio. La prima sera deve creare quello slancio dal nulla.",
  pqCite: "Grecia Mejía · Fondatrice",
  statLabels: [
    "La prima sera dà il tono a tutto il fine settimana",
    "Due o tre ore bastano per svolgerlo",
    "Delle coppie dice oggi che è stato il loro evento preferito",
  ],
  splitEyebrow: "Come lo conduciamo",
  splitHeading: "Caldo, senza fretta, senza struttura.",
  splitParas: [
    "Teniamo la prima sera volutamente sciolta — cibo che si mangia in piedi, musica su cui si conversa e nessun orario a cui obbedire. Tutto il disegno è l'opposto della precisione della cerimonia.",
    "È quella scioltezza a lasciarlo respirare. Gli ospiti vagano, si raggruppano, si disperdono e si riuniscono al proprio ritmo, e alla fine della sera la sala si è disposta in un corteo nuziale senza che a nessuno sia stato detto dove stare.",
  ],
  cta: {
    script: "Una conversazione privata —",
    heading: "Stai pensando a un fine settimana di matrimonio di destinazione?",
    body: "Accettiamo quattordici matrimoni all'anno. Dicci le date e il numero di invitati, e Grecia ti risponderà personalmente entro cinque giorni lavorativi.",
    ctaLabel: "Richiedi una consulenza",
  },
  beginsH: "La sera in cui il fine settimana comincia",
  beginsP: [
    "Così abbiamo smesso di trattare il welcome party come un accessorio del matrimonio e abbiamo cominciato a trattarlo come la seconda stella del matrimonio. Porta il calore di un intero fine settimana in una sola sera — e per molte famiglie diventa la sera che ricordano di più. Per una sua espressione particolare, vedi il nostro pezzo su ",
    { text: "il sangeet, la sera prima", href: SANGEET },
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
    b.h2(t.tenseH),
    b.p(t.tenseP1),
    b.p(t.tenseP2),
    b.featureImage(t.featureCaption, t.featureCaption, t.featureCredit),
    b.takeaways(t.takeH, t.takeItems),
    b.h2(t.doesH),
    b.p(t.doesP),
    b.h3(t.resetH),
    b.p(t.resetP),
    b.h3(t.registerH),
    b.p(t.registerP),
    b.pullQuote(t.pqQuote, t.pqCite),
    b.stats([
      { value: STAT_VALUES[0], label: t.statLabels[0] },
      { value: STAT_VALUES[1], label: t.statLabels[1] },
      { value: STAT_VALUES[2], label: t.statLabels[2] },
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
    b.h2(t.beginsH),
    b.p(t.beginsP),
  ];
};

export const article: ArticleSeed = {
  canonicalSlug: "welcome-party-second-star",
  categorySlug: "guest-experience",
  relatedDestinationSlug: "punta-cana",
  readMinutes: 10,
  publishedAt: "2025-11-05T09:00:00Z",
  featured: false,
  relatedArticles: [
    "best-indian-wedding-venues-punta-cana",
    "the-sangeet-night-before",
    "single-stem-centrepiece",
  ],
  byLocale,
  buildBody,
};
