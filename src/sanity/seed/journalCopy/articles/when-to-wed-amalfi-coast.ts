/**
 * Journal article — "When to Wed on the Amalfi Coast".
 * A month-by-month guide to light, heat and the cadence of Positano weddings.
 */

import { type Locale } from "../../../../i18n/routing";
import * as b from "../body";
import type { ArticleSeed, ArticleLocaleCopy } from "../types";

const CONTINGENCIES = "/journal/beach-wedding-contingencies";

type Body = {
  introP: b.Run[];
  springH: string;
  springP1: string;
  springP2: string;
  featureCaption: string;
  featureCredit: string;
  summerH: string;
  summerP1: string;
  summerP2: b.Run[];
  pqQuote: string;
  pqCite: string;
  goldenH: string;
  goldenP: string;
  statLabels: [string, string, string];
  takeH: string;
  takeItems: string[];
  splitEyebrow: string;
  splitHeading: string;
  splitParas: [string, string];
  cta: { script: string; heading: string; body: string; ctaLabel: string };
  ruleH: string;
  ruleP: b.Run[];
};

const STAT_VALUES: [string, string, string] = ["May", "Sept", "2"];

const en: ArticleLocaleCopy = {
  title: "When to Wed on the *Amalfi Coast*",
  excerpt:
    "A month-by-month guide to light, heat, and the cadence of Positano weddings — and the two weeks we never book.",
  kicker: "Italy",
  lede: "The Amalfi Coast reads differently in May than in September. Here is the month-by-month case for each window, and the two weeks of August we quietly refuse.",
  faqs: [
    {
      question: "What is the best month for an Amalfi Coast wedding?",
      answer:
        "September is our favourite: warm sea, softer light, and the summer crowds thinning by the day. Late May and June are the close second — green hillsides, long evenings, and heat that has not yet turned heavy.",
    },
    {
      question: "Is August a good time to marry on the Amalfi Coast?",
      answer:
        "Not the middle two weeks. Around Ferragosto the coast is at its hottest and most crowded, roads clog, and staff are stretched. We plan July and early September weddings gladly, but we hold the fortnight around the fifteenth open only for couples who insist.",
    },
    {
      question: "How hot does Positano get in summer?",
      answer:
        "July and August routinely sit in the low thirties Celsius, with humidity that climbs through the afternoon. We move ceremonies to the golden hour and keep the day's earlier hours for shade, water, and slow arrivals.",
    },
    {
      question: "When does the light look best for photography?",
      answer:
        "The golden window of September and October gives the warmest, longest light of the year. Sunset falls at a civilised hour, the sea holds its colour, and the whole coast glows without the summer haze.",
    },
  ],
  bleedQuote: {
    script: "After a decade on this coast —",
    quote:
      "The Amalfi Coast rewards the couple who reads the calendar, not the couple who fights it. Pick the month that flatters your day, and the coast will do the rest.",
    cite: "Grecia Mejía · Amalfi Coast, 2026",
  },
};

const enBody: Body = {
  introP: [
    "There is no single right month to marry in Positano — only the month that suits the wedding you want. We plan across the whole season, from the green of late spring to the amber of October, and each window has its own character. Below is how we read the year.",
  ],
  springH: "Spring: May & June",
  springP1:
    "Late May and June are the coast at its freshest. The hillsides are still green from the winter rains, the bougainvillea is in full colour, and the evenings run long and soft. Heat is present but rarely oppressive — a linen suit is comfortable through the afternoon, and no one is reaching for shade before the ceremony.",
  springP2:
    "The trade is a small chance of a spring shower, which passes quickly and leaves the light washed and clear. For couples who want green, not gold, and a coast not yet at full summer volume, these are the months we recommend first.",
  featureCaption: "Positano in early June, hillsides still green",
  featureCredit: "Photographed June 2025",
  summerH: "High summer: July & August",
  summerP1:
    "July and early September aside, high summer is the coast at full voice — hot, bright, and busy. The sea is warm enough for a morning swim, the terraces stay lively past midnight, and the light is strong and clean. It is a beautiful time to marry if you plan around the heat rather than against it.",
  summerP2: [
    "We do, however, hold two weeks open reluctantly: the fortnight around ",
    { text: "Ferragosto", strong: true },
    ", the fifteenth of August. That is when the coast is at its hottest and most crowded, when the roads clog and every kitchen and car is stretched thin. We will plan those dates for a couple who insists — but we counsel against them, and we quietly steer everyone else to the shoulders of the month.",
  ],
  pqQuote:
    "The coast in August is not the coast in September. Same sea, same cliffs — but one fights you and the other holds you.",
  pqCite: "Grecia Mejía · Founder",
  goldenH: "The golden window: September & October",
  goldenP:
    "If there is a perfect season, this is it. September brings warm water, softer light, and crowds that thin by the day; October carries the year's warmest colour and its longest golden hour. The heat has broken, the roads have eased, and the whole coast seems to exhale. More of our Positano weddings fall here than in any other window — and every year that share grows.",
  statLabels: [
    "The freshest window — green, long evenings",
    "The golden window — warmest light, easier roads",
    "The August weeks we hold back from booking",
  ],
  takeH: "The month, in a line",
  takeItems: [
    "May & June — green, long evenings, a small chance of a passing shower",
    "July — hot and lively; plan around the golden hour and keep mornings for shade",
    "August — beautiful at the edges, but not the fortnight around Ferragosto",
    "September & October — the golden window; the light and the calendar are both on your side",
  ],
  splitEyebrow: "How we plan the day",
  splitHeading: "Read the light, then write the timeline.",
  splitParas: [
    "Whatever the month, we build the day around the sun. In high summer that means an evening ceremony and a shaded, slow afternoon; in the golden window it means we can start earlier and let the light stretch.",
    "The month sets the rhythm; the timeline follows it. Get the season right and the day almost plans itself — the coast simply gives you the hours it wants to.",
  ],
  cta: {
    script: "A private conversation —",
    heading: "Choosing your month on the Amalfi Coast?",
    body: "Tell us the feeling you want — green and fresh, or warm and golden — and Grecia will write back personally with the windows that fit, within five working days.",
    ctaLabel: "Request a consultation",
  },
  ruleH: "Our rule",
  ruleP: [
    "Our rule is simple: choose the month for the light and the mood, then plan the day around the weather it brings. And whatever the season, hold a fallback for rain and heat — the reasons why are in our companion piece on ",
    { text: "beach-wedding contingencies", href: CONTINGENCIES },
    ".",
  ],
};

const es: ArticleLocaleCopy = {
  title: "Cuándo casarse en la *Costa de Amalfi*",
  excerpt:
    "Una guía mes a mes sobre la luz, el calor y el ritmo de las bodas en Positano, y las dos semanas que nunca reservamos.",
  kicker: "Italia",
  lede: "La Costa de Amalfi se lee distinta en mayo que en septiembre. Aquí va el argumento mes a mes para cada ventana, y las dos semanas de agosto que rechazamos en silencio.",
  faqs: [
    {
      question: "¿Cuál es el mejor mes para una boda en la Costa de Amalfi?",
      answer:
        "Septiembre es nuestro favorito: mar templado, luz más suave y multitudes de verano que se aligeran día a día. Finales de mayo y junio son un cercano segundo lugar: laderas verdes, tardes largas y un calor que aún no se ha vuelto pesado.",
    },
    {
      question: "¿Es agosto un buen momento para casarse en la Costa de Amalfi?",
      answer:
        "No las dos semanas centrales. En torno al Ferragosto la costa está en su punto más caluroso y concurrido, las carreteras se colapsan y el personal va al límite. Planificamos con gusto bodas de julio y principios de septiembre, pero la quincena en torno al día quince solo la abrimos para quien insiste.",
    },
    {
      question: "¿Cuánto calor hace en Positano en verano?",
      answer:
        "Julio y agosto rondan habitualmente los treinta y pocos grados Celsius, con una humedad que sube a lo largo de la tarde. Trasladamos las ceremonias a la hora dorada y reservamos las horas más tempranas del día para la sombra, el agua y las llegadas sin prisa.",
    },
    {
      question: "¿Cuándo se ve mejor la luz para la fotografía?",
      answer:
        "La ventana dorada de septiembre y octubre ofrece la luz más cálida y larga del año. El atardecer cae a una hora civilizada, el mar mantiene su color y toda la costa resplandece sin la calima del verano.",
    },
  ],
  bleedQuote: {
    script: "Tras una década en esta costa —",
    quote:
      "La Costa de Amalfi premia a quien lee el calendario, no a quien lo combate. Elige el mes que favorezca tu día, y la costa hará el resto.",
    cite: "Grecia Mejía · Amalfi Coast, 2026",
  },
};

const esBody: Body = {
  introP: [
    "No hay un único mes correcto para casarse en Positano, solo el mes que conviene a la boda que quieres. Planificamos toda la temporada, del verde de finales de primavera al ámbar de octubre, y cada ventana tiene su propio carácter. Así leemos nosotros el año.",
  ],
  springH: "Primavera: mayo y junio",
  springP1:
    "Finales de mayo y junio son la costa en su momento más fresco. Las laderas siguen verdes por las lluvias del invierno, la buganvilla está en pleno color y las tardes se alargan y se suavizan. El calor está presente, pero rara vez agobia: un traje de lino resulta cómodo toda la tarde y nadie busca la sombra antes de la ceremonia.",
  springP2:
    "El precio es una pequeña probabilidad de un chubasco primaveral, que pasa rápido y deja la luz limpia y clara. Para quien quiere verde, no oro, y una costa que aún no está a pleno volumen de verano, estos son los meses que recomendamos primero.",
  featureCaption: "Positano a principios de junio, laderas aún verdes",
  featureCredit: "Fotografiado en junio de 2025",
  summerH: "Pleno verano: julio y agosto",
  summerP1:
    "Salvo julio y principios de septiembre, el pleno verano es la costa a plena voz: caluroso, luminoso y concurrido. El mar está lo bastante templado para un baño matinal, las terrazas siguen animadas pasada la medianoche y la luz es fuerte y limpia. Es un momento hermoso para casarse si planificas en torno al calor y no contra él.",
  summerP2: [
    "Ahora bien, dejamos dos semanas abiertas a regañadientes: la quincena en torno al ",
    { text: "Ferragosto", strong: true },
    ", el quince de agosto. Es cuando la costa está en su punto más caluroso y concurrido, cuando las carreteras se colapsan y cada cocina y cada coche van al límite. Planificaremos esas fechas para quien insista, pero desaconsejamos hacerlo y guiamos en silencio a los demás hacia los extremos del mes.",
  ],
  pqQuote:
    "La costa en agosto no es la costa en septiembre. El mismo mar, los mismos acantilados, pero uno te combate y el otro te sostiene.",
  pqCite: "Grecia Mejía · Fundadora",
  goldenH: "La ventana dorada: septiembre y octubre",
  goldenP:
    "Si existe una temporada perfecta, es esta. Septiembre trae agua templada, luz más suave y multitudes que se aligeran día a día; octubre carga el color más cálido del año y su hora dorada más larga. El calor ha cedido, las carreteras se han despejado y toda la costa parece exhalar. Más bodas nuestras en Positano caen aquí que en cualquier otra ventana, y cada año esa proporción crece.",
  statLabels: [
    "La ventana más fresca: verde, tardes largas",
    "La ventana dorada: la luz más cálida, carreteras más fáciles",
    "Las semanas de agosto que nos abstenemos de reservar",
  ],
  takeH: "El mes, en una línea",
  takeItems: [
    "Mayo y junio: verde, tardes largas, una pequeña probabilidad de chubasco pasajero",
    "Julio: caluroso y animado; planifica en torno a la hora dorada y reserva las mañanas para la sombra",
    "Agosto: hermoso en los extremos, pero no la quincena en torno al Ferragosto",
    "Septiembre y octubre: la ventana dorada; la luz y el calendario están de tu lado",
  ],
  splitEyebrow: "Cómo planificamos el día",
  splitHeading: "Lee la luz y luego escribe el cronograma.",
  splitParas: [
    "Sea cual sea el mes, construimos el día en torno al sol. En pleno verano eso significa ceremonia al atardecer y una tarde lenta y a la sombra; en la ventana dorada podemos empezar antes y dejar que la luz se estire.",
    "El mes marca el ritmo; el cronograma lo sigue. Acierta con la temporada y el día casi se planifica solo: la costa simplemente te da las horas que quiere.",
  ],
  cta: {
    script: "Una conversación privada —",
    heading: "¿Eliges tu mes en la Costa de Amalfi?",
    body: "Cuéntanos la sensación que buscas —verde y fresca, o cálida y dorada— y Grecia te responderá personalmente con las ventanas que encajen, en cinco días laborables.",
    ctaLabel: "Solicitar una consulta",
  },
  ruleH: "Nuestra regla",
  ruleP: [
    "Nuestra regla es sencilla: elige el mes por la luz y el ambiente, y luego planifica el día en torno al tiempo que trae. Y sea cual sea la temporada, ten un plan B para la lluvia y el calor: las razones están en nuestro texto complementario sobre ",
    { text: "contingencias de bodas en la playa", href: CONTINGENCIES },
    ".",
  ],
};

const fr: ArticleLocaleCopy = {
  title: "Quand se marier sur la *côte amalfitaine*",
  excerpt:
    "Un guide mois par mois sur la lumière, la chaleur et le rythme des mariages de Positano — et les deux semaines que nous ne réservons jamais.",
  kicker: "Italie",
  lede: "La côte amalfitaine ne se lit pas en mai comme en septembre. Voici l'argument mois par mois pour chaque fenêtre, et les deux semaines d'août que nous refusons discrètement.",
  faqs: [
    {
      question: "Quel est le meilleur mois pour un mariage sur la côte amalfitaine ?",
      answer:
        "Septembre est notre préféré : mer chaude, lumière plus douce, et les foules estivales qui s'allègent de jour en jour. Fin mai et juin arrivent juste après — collines verdoyantes, longues soirées, et une chaleur pas encore lourde.",
    },
    {
      question: "Août est-il un bon moment pour se marier sur la côte amalfitaine ?",
      answer:
        "Pas les deux semaines centrales. Autour du Ferragosto, la côte est à son plus chaud et son plus fréquenté, les routes s'engorgent et le personnel est débordé. Nous organisons volontiers des mariages en juillet et début septembre, mais nous ne libérons la quinzaine autour du quinze que pour les couples qui insistent.",
    },
    {
      question: "Quelle chaleur fait-il à Positano en été ?",
      answer:
        "Juillet et août tournent régulièrement autour de trente à trente-cinq degrés Celsius, avec une humidité qui grimpe l'après-midi. Nous déplaçons les cérémonies à l'heure dorée et gardons les premières heures du jour pour l'ombre, l'eau et les arrivées sans hâte.",
    },
    {
      question: "Quand la lumière est-elle la plus belle pour la photographie ?",
      answer:
        "La fenêtre dorée de septembre et octobre offre la lumière la plus chaude et la plus longue de l'année. Le coucher de soleil tombe à une heure raisonnable, la mer garde sa couleur, et toute la côte rayonne sans la brume de l'été.",
    },
  ],
  bleedQuote: {
    script: "Après une décennie sur cette côte —",
    quote:
      "La côte amalfitaine récompense le couple qui lit le calendrier, non celui qui le combat. Choisissez le mois qui flatte votre journée, et la côte fera le reste.",
    cite: "Grecia Mejía · Amalfi Coast, 2026",
  },
};

const frBody: Body = {
  introP: [
    "Il n'y a pas un seul bon mois pour se marier à Positano — seulement le mois qui convient au mariage que vous voulez. Nous organisons sur toute la saison, du vert de la fin du printemps à l'ambre d'octobre, et chaque fenêtre a son propre caractère. Voici comment nous lisons l'année.",
  ],
  springH: "Printemps : mai et juin",
  springP1:
    "Fin mai et juin, la côte est à son plus frais. Les collines sont encore vertes des pluies d'hiver, la bougainvillée est en pleine couleur, et les soirées s'étirent, douces. La chaleur est là mais rarement écrasante — un costume de lin reste confortable tout l'après-midi, et personne ne cherche l'ombre avant la cérémonie.",
  springP2:
    "Le prix : une petite chance d'averse printanière, qui passe vite et laisse la lumière lavée et nette. Pour les couples qui veulent du vert, pas de l'or, et une côte pas encore à plein volume estival, ce sont les mois que nous recommandons en premier.",
  featureCaption: "Positano début juin, collines encore vertes",
  featureCredit: "Photographié en juin 2025",
  summerH: "Plein été : juillet et août",
  summerP1:
    "Juillet et début septembre mis à part, le plein été, c'est la côte à pleine voix — chaude, lumineuse et animée. La mer est assez chaude pour une baignade matinale, les terrasses restent vivantes passé minuit, et la lumière est forte et nette. C'est un beau moment pour se marier si l'on compose avec la chaleur plutôt que contre elle.",
  summerP2: [
    "Nous gardons toutefois deux semaines ouvertes à contrecœur : la quinzaine autour du ",
    { text: "Ferragosto", strong: true },
    ", le quinze août. C'est le moment où la côte est à son plus chaud et son plus fréquenté, où les routes s'engorgent et où chaque cuisine et chaque voiture est tirée à l'extrême. Nous organiserons ces dates pour un couple qui insiste — mais nous les déconseillons, et nous orientons discrètement tous les autres vers les extrémités du mois.",
  ],
  pqQuote:
    "La côte en août n'est pas la côte en septembre. Même mer, mêmes falaises — mais l'une vous combat et l'autre vous porte.",
  pqCite: "Grecia Mejía · Fondatrice",
  goldenH: "La fenêtre dorée : septembre et octobre",
  goldenP:
    "S'il existe une saison parfaite, c'est celle-ci. Septembre apporte une eau chaude, une lumière plus douce et des foules qui s'allègent de jour en jour ; octobre porte la couleur la plus chaude de l'année et sa plus longue heure dorée. La chaleur est retombée, les routes se sont dégagées, et toute la côte semble expirer. Plus de nos mariages à Positano tombent ici que dans toute autre fenêtre — et chaque année cette part grandit.",
  statLabels: [
    "La fenêtre la plus fraîche — vert, longues soirées",
    "La fenêtre dorée — lumière la plus chaude, routes plus faciles",
    "Les semaines d'août que nous nous retenons de réserver",
  ],
  takeH: "Le mois, en une ligne",
  takeItems: [
    "Mai et juin — vert, longues soirées, une petite chance d'averse passagère",
    "Juillet — chaud et animé ; composez avec l'heure dorée et gardez les matinées pour l'ombre",
    "Août — beau aux extrémités, mais pas la quinzaine autour du Ferragosto",
    "Septembre et octobre — la fenêtre dorée ; la lumière et le calendrier sont de votre côté",
  ],
  splitEyebrow: "Comment nous planifions la journée",
  splitHeading: "Lisez la lumière, puis écrivez le déroulé.",
  splitParas: [
    "Quel que soit le mois, nous bâtissons la journée autour du soleil. En plein été, cela signifie une cérémonie en soirée et un après-midi lent et ombragé ; dans la fenêtre dorée, nous pouvons commencer plus tôt et laisser la lumière s'étirer.",
    "Le mois donne le rythme ; le déroulé le suit. Choisissez bien la saison et la journée se planifie presque d'elle-même — la côte vous donne simplement les heures qu'elle veut.",
  ],
  cta: {
    script: "Une conversation privée —",
    heading: "Vous choisissez votre mois sur la côte amalfitaine ?",
    body: "Dites-nous l'atmosphère que vous voulez — verte et fraîche, ou chaude et dorée — et Grecia vous répondra personnellement avec les fenêtres qui conviennent, sous cinq jours ouvrés.",
    ctaLabel: "Demander une consultation",
  },
  ruleH: "Notre règle",
  ruleP: [
    "Notre règle est simple : choisissez le mois pour la lumière et l'atmosphère, puis planifiez la journée autour du temps qu'il apporte. Et quelle que soit la saison, gardez un plan de repli pour la pluie et la chaleur — les raisons sont dans notre article compagnon sur les ",
    { text: "imprévus des mariages en bord de mer", href: CONTINGENCIES },
    ".",
  ],
};

const pt: ArticleLocaleCopy = {
  title: "Quando casar na *Costa Amalfitana*",
  excerpt:
    "Um guia mês a mês sobre a luz, o calor e o ritmo dos casamentos em Positano — e as duas semanas que nunca reservamos.",
  kicker: "Itália",
  lede: "A Costa Amalfitana lê-se de modo diferente em maio e em setembro. Aqui fica o argumento mês a mês para cada janela, e as duas semanas de agosto que recusamos em silêncio.",
  faqs: [
    {
      question: "Qual é o melhor mês para um casamento na Costa Amalfitana?",
      answer:
        "Setembro é o nosso favorito: mar ameno, luz mais suave e as multidões de verão a aligeirar dia após dia. Fim de maio e junho são um próximo segundo lugar — encostas verdes, tardes longas e um calor que ainda não se tornou pesado.",
    },
    {
      question: "Agosto é uma boa altura para casar na Costa Amalfitana?",
      answer:
        "Não as duas semanas centrais. Em torno do Ferragosto a costa está no seu ponto mais quente e concorrido, as estradas congestionam e o pessoal fica no limite. Planeamos com gosto casamentos de julho e início de setembro, mas a quinzena em torno do dia quinze só a abrimos para quem insiste.",
    },
    {
      question: "Que calor faz em Positano no verão?",
      answer:
        "Julho e agosto ficam habitualmente na casa dos trinta e poucos graus Celsius, com uma humidade que sobe ao longo da tarde. Passamos as cerimónias para a hora dourada e guardamos as horas mais cedo do dia para a sombra, a água e as chegadas sem pressa.",
    },
    {
      question: "Quando é que a luz fica melhor para fotografia?",
      answer:
        "A janela dourada de setembro e outubro dá a luz mais quente e mais longa do ano. O pôr do sol cai a uma hora civilizada, o mar mantém a sua cor, e toda a costa resplandece sem a bruma do verão.",
    },
  ],
  bleedQuote: {
    script: "Depois de uma década nesta costa —",
    quote:
      "A Costa Amalfitana premeia o casal que lê o calendário, não o que o combate. Escolha o mês que favorece o seu dia, e a costa faz o resto.",
    cite: "Grecia Mejía · Amalfi Coast, 2026",
  },
};

const ptBody: Body = {
  introP: [
    "Não há um único mês certo para casar em Positano — só o mês que serve o casamento que quer. Planeamos por toda a época, do verde do fim da primavera ao âmbar de outubro, e cada janela tem o seu carácter. Eis como lemos o ano.",
  ],
  springH: "Primavera: maio e junho",
  springP1:
    "Fim de maio e junho são a costa no seu ponto mais fresco. As encostas ainda estão verdes das chuvas de inverno, a buganvília está em plena cor, e as tardes prolongam-se, suaves. O calor está presente, mas raramente sufoca — um fato de linho é confortável toda a tarde, e ninguém procura a sombra antes da cerimónia.",
  springP2:
    "O preço é uma pequena hipótese de aguaceiro primaveril, que passa depressa e deixa a luz lavada e nítida. Para quem quer verde, não ouro, e uma costa ainda não em pleno volume de verão, estes são os meses que recomendamos primeiro.",
  featureCaption: "Positano no início de junho, encostas ainda verdes",
  featureCredit: "Fotografado em junho de 2025",
  summerH: "Pleno verão: julho e agosto",
  summerP1:
    "Salvo julho e início de setembro, o pleno verão é a costa em plena voz — quente, luminoso e movimentado. O mar está ameno o suficiente para um mergulho matinal, os terraços mantêm-se animados depois da meia-noite, e a luz é forte e limpa. É uma bela altura para casar se planear em torno do calor e não contra ele.",
  summerP2: [
    "Guardamos, no entanto, duas semanas abertas a contragosto: a quinzena em torno do ",
    { text: "Ferragosto", strong: true },
    ", o quinze de agosto. É quando a costa está no seu ponto mais quente e concorrido, quando as estradas congestionam e cada cozinha e cada carro vão no limite. Planearemos essas datas para quem insista — mas desaconselhamos, e guiamos em silêncio todos os outros para os extremos do mês.",
  ],
  pqQuote:
    "A costa em agosto não é a costa em setembro. O mesmo mar, as mesmas falésias — mas uma combate-o e a outra ampara-o.",
  pqCite: "Grecia Mejía · Fundadora",
  goldenH: "A janela dourada: setembro e outubro",
  goldenP:
    "Se existe uma época perfeita, é esta. Setembro traz água amena, luz mais suave e multidões que se aligeiram dia após dia; outubro carrega a cor mais quente do ano e a sua hora dourada mais longa. O calor cedeu, as estradas desafogaram, e toda a costa parece expirar. Mais casamentos nossos em Positano caem aqui do que em qualquer outra janela — e a cada ano essa fatia cresce.",
  statLabels: [
    "A janela mais fresca — verde, tardes longas",
    "A janela dourada — a luz mais quente, estradas mais fáceis",
    "As semanas de agosto que nos abstemos de reservar",
  ],
  takeH: "O mês, numa linha",
  takeItems: [
    "Maio e junho — verde, tardes longas, uma pequena hipótese de aguaceiro passageiro",
    "Julho — quente e animado; planeie em torno da hora dourada e guarde as manhãs para a sombra",
    "Agosto — belo nos extremos, mas não a quinzena em torno do Ferragosto",
    "Setembro e outubro — a janela dourada; a luz e o calendário estão do seu lado",
  ],
  splitEyebrow: "Como planeamos o dia",
  splitHeading: "Leia a luz e depois escreva o cronograma.",
  splitParas: [
    "Seja qual for o mês, construímos o dia em torno do sol. No pleno verão isso significa cerimónia ao entardecer e uma tarde lenta e à sombra; na janela dourada podemos começar mais cedo e deixar a luz esticar-se.",
    "O mês marca o ritmo; o cronograma segue-o. Acerte na época e o dia quase se planeia sozinho — a costa dá-lhe simplesmente as horas que quer.",
  ],
  cta: {
    script: "Uma conversa privada —",
    heading: "A escolher o seu mês na Costa Amalfitana?",
    body: "Diga-nos a sensação que procura — verde e fresca, ou quente e dourada — e a Grecia responder-lhe-á pessoalmente com as janelas que se ajustam, em cinco dias úteis.",
    ctaLabel: "Pedir uma consulta",
  },
  ruleH: "A nossa regra",
  ruleP: [
    "A nossa regra é simples: escolha o mês pela luz e pelo ambiente, e depois planeie o dia em torno do tempo que ele traz. E seja qual for a época, mantenha um plano B para a chuva e o calor — as razões estão no nosso texto companheiro sobre ",
    { text: "contingências de casamentos na praia", href: CONTINGENCIES },
    ".",
  ],
};

const de: ArticleLocaleCopy = {
  title: "Wann man an der *Amalfiküste* heiratet",
  excerpt:
    "Ein Monat-für-Monat-Leitfaden zu Licht, Hitze und dem Takt der Positano-Hochzeiten — und die zwei Wochen, die wir nie buchen.",
  kicker: "Italien",
  lede: "Die Amalfiküste liest sich im Mai anders als im September. Hier das Monat-für-Monat-Argument für jedes Fenster — und die zwei Augustwochen, die wir still ablehnen.",
  faqs: [
    {
      question: "Welcher Monat eignet sich am besten für eine Hochzeit an der Amalfiküste?",
      answer:
        "September ist unser Liebling: warmes Meer, weicheres Licht und Sommermengen, die von Tag zu Tag abnehmen. Ende Mai und Juni folgen dicht dahinter — grüne Hänge, lange Abende und eine Hitze, die noch nicht schwer geworden ist.",
    },
    {
      question: "Ist August eine gute Zeit, um an der Amalfiküste zu heiraten?",
      answer:
        "Nicht die mittleren zwei Wochen. Um Ferragosto ist die Küste am heißesten und am vollsten, die Straßen verstopfen und das Personal ist überlastet. Hochzeiten im Juli und Anfang September planen wir gern, doch die Wochen um den fünfzehnten halten wir nur für Paare offen, die darauf bestehen.",
    },
    {
      question: "Wie heiß wird es in Positano im Sommer?",
      answer:
        "Juli und August liegen regelmäßig bei gut dreißig Grad Celsius, mit einer Luftfeuchte, die über den Nachmittag steigt. Wir verlegen Zeremonien in die goldene Stunde und halten die früheren Tagesstunden für Schatten, Wasser und langsames Ankommen frei.",
    },
    {
      question: "Wann sieht das Licht für Fotografie am besten aus?",
      answer:
        "Das goldene Fenster von September und Oktober bietet das wärmste, längste Licht des Jahres. Der Sonnenuntergang fällt auf eine zivilisierte Stunde, das Meer hält seine Farbe, und die ganze Küste leuchtet ohne den Sommerdunst.",
    },
  ],
  bleedQuote: {
    script: "Nach einem Jahrzehnt an dieser Küste —",
    quote:
      "Die Amalfiküste belohnt das Paar, das den Kalender liest, nicht das, das gegen ihn kämpft. Wählt den Monat, der euren Tag schmeichelt, und die Küste tut den Rest.",
    cite: "Grecia Mejía · Amalfi Coast, 2026",
  },
};

const deBody: Body = {
  introP: [
    "Es gibt keinen einzig richtigen Monat, um in Positano zu heiraten — nur den Monat, der zu der Hochzeit passt, die ihr wollt. Wir planen über die ganze Saison, vom Grün des Spätfrühlings bis zum Bernstein des Oktobers, und jedes Fenster hat seinen eigenen Charakter. So lesen wir das Jahr.",
  ],
  springH: "Frühling: Mai & Juni",
  springP1:
    "Ende Mai und Juni ist die Küste am frischesten. Die Hänge sind noch grün von den Winterregen, die Bougainvillea steht in voller Farbe, und die Abende ziehen sich lang und weich. Hitze ist da, aber selten erdrückend — ein Leinenanzug bleibt den Nachmittag über bequem, und niemand sucht vor der Zeremonie den Schatten.",
  springP2:
    "Der Preis ist eine kleine Chance auf einen Frühlingsschauer, der rasch vorüberzieht und das Licht klar und gewaschen zurücklässt. Für Paare, die Grün wollen, nicht Gold, und eine Küste, die noch nicht auf vollem Sommervolumen ist, sind das die Monate, die wir zuerst empfehlen.",
  featureCaption: "Positano Anfang Juni, Hänge noch grün",
  featureCredit: "Fotografiert im Juni 2025",
  summerH: "Hochsommer: Juli & August",
  summerP1:
    "Juli und Anfang September beiseite, ist der Hochsommer die Küste in voller Stimme — heiß, hell und belebt. Das Meer ist warm genug für ein Bad am Morgen, die Terrassen bleiben bis nach Mitternacht lebendig, und das Licht ist stark und klar. Es ist eine schöne Zeit zu heiraten, wenn man mit der Hitze plant statt gegen sie.",
  summerP2: [
    "Zwei Wochen jedoch halten wir nur widerwillig offen: die Zeit um ",
    { text: "Ferragosto", strong: true },
    ", den fünfzehnten August. Dann ist die Küste am heißesten und am vollsten, dann verstopfen die Straßen und jede Küche und jeder Wagen ist bis aufs Äußerste gespannt. Wir planen diese Daten für ein Paar, das darauf besteht — doch wir raten davon ab und lenken alle anderen still zu den Rändern des Monats.",
  ],
  pqQuote:
    "Die Küste im August ist nicht die Küste im September. Dasselbe Meer, dieselben Klippen — doch das eine kämpft gegen euch und das andere trägt euch.",
  pqCite: "Grecia Mejía · Gründerin",
  goldenH: "Das goldene Fenster: September & Oktober",
  goldenP:
    "Wenn es eine perfekte Saison gibt, dann diese. September bringt warmes Wasser, weicheres Licht und Mengen, die von Tag zu Tag abnehmen; Oktober trägt die wärmste Farbe des Jahres und seine längste goldene Stunde. Die Hitze ist gebrochen, die Straßen haben sich geleert, und die ganze Küste scheint auszuatmen. Mehr unserer Positano-Hochzeiten fallen hierhin als in jedes andere Fenster — und jedes Jahr wächst dieser Anteil.",
  statLabels: [
    "Das frischeste Fenster — grün, lange Abende",
    "Das goldene Fenster — wärmstes Licht, leichtere Straßen",
    "Die Augustwochen, deren Buchung wir uns verwehren",
  ],
  takeH: "Der Monat, in einer Zeile",
  takeItems: [
    "Mai & Juni — grün, lange Abende, eine kleine Chance auf einen vorüberziehenden Schauer",
    "Juli — heiß und lebhaft; plant um die goldene Stunde und haltet die Morgen für Schatten frei",
    "August — schön an den Rändern, aber nicht die Wochen um Ferragosto",
    "September & Oktober — das goldene Fenster; Licht und Kalender sind auf eurer Seite",
  ],
  splitEyebrow: "Wie wir den Tag planen",
  splitHeading: "Lest das Licht, dann schreibt den Ablauf.",
  splitParas: [
    "Welcher Monat auch immer, wir bauen den Tag um die Sonne. Im Hochsommer heißt das eine Zeremonie am Abend und ein langsamer, beschatteter Nachmittag; im goldenen Fenster können wir früher beginnen und das Licht sich strecken lassen.",
    "Der Monat gibt den Rhythmus; der Ablauf folgt ihm. Trefft die Saison richtig, und der Tag plant sich fast von selbst — die Küste gibt euch einfach die Stunden, die sie will.",
  ],
  cta: {
    script: "Ein privates Gespräch —",
    heading: "Wählt ihr euren Monat an der Amalfiküste?",
    body: "Sagt uns das Gefühl, das ihr wollt — grün und frisch oder warm und golden — und Grecia antwortet euch persönlich mit den passenden Fenstern, binnen fünf Werktagen.",
    ctaLabel: "Beratung anfragen",
  },
  ruleH: "Unsere Regel",
  ruleP: [
    "Unsere Regel ist einfach: Wählt den Monat nach Licht und Stimmung, und plant dann den Tag um das Wetter, das er bringt. Und in jeder Saison: haltet einen Rückfallplan für Regen und Hitze bereit — die Gründe stehen in unserem Begleittext zu ",
    { text: "Notfallplänen für Strandhochzeiten", href: CONTINGENCIES },
    ".",
  ],
};

const it: ArticleLocaleCopy = {
  title: "Quando sposarsi in *Costiera Amalfitana*",
  excerpt:
    "Una guida mese per mese su luce, caldo e ritmo dei matrimoni a Positano — e le due settimane che non prenotiamo mai.",
  kicker: "Italia",
  lede: "La Costiera Amalfitana si legge diversa a maggio e a settembre. Ecco l'argomento mese per mese per ogni finestra, e le due settimane di agosto che rifiutiamo in silenzio.",
  faqs: [
    {
      question: "Qual è il mese migliore per un matrimonio in Costiera Amalfitana?",
      answer:
        "Settembre è il nostro preferito: mare caldo, luce più morbida e le folle estive che si alleggeriscono di giorno in giorno. Fine maggio e giugno sono un secondo posto vicino — colline verdi, serate lunghe e un caldo non ancora diventato pesante.",
    },
    {
      question: "Agosto è un buon momento per sposarsi in Costiera Amalfitana?",
      answer:
        "Non le due settimane centrali. Attorno al Ferragosto la costa è nel suo punto più caldo e affollato, le strade si intasano e il personale è al limite. Pianifichiamo volentieri matrimoni a luglio e a inizio settembre, ma la quindicina attorno al quindici la apriamo solo per chi insiste.",
    },
    {
      question: "Quanto caldo fa a Positano d'estate?",
      answer:
        "Luglio e agosto stanno regolarmente sui trenta e qualche grado Celsius, con un'umidità che sale nel pomeriggio. Spostiamo le cerimonie all'ora d'oro e teniamo le ore più mattutine per l'ombra, l'acqua e gli arrivi senza fretta.",
    },
    {
      question: "Quando la luce è migliore per la fotografia?",
      answer:
        "La finestra dorata di settembre e ottobre offre la luce più calda e più lunga dell'anno. Il tramonto cade a un'ora civile, il mare tiene il suo colore, e tutta la costa risplende senza la foschia dell'estate.",
    },
  ],
  bleedQuote: {
    script: "Dopo un decennio su questa costa —",
    quote:
      "La Costiera Amalfitana premia la coppia che legge il calendario, non quella che lo combatte. Scegliete il mese che valorizza la vostra giornata, e la costa farà il resto.",
    cite: "Grecia Mejía · Amalfi Coast, 2026",
  },
};

const itBody: Body = {
  introP: [
    "Non c'è un solo mese giusto per sposarsi a Positano — solo il mese che si addice al matrimonio che volete. Pianifichiamo su tutta la stagione, dal verde della tarda primavera all'ambra di ottobre, e ogni finestra ha il suo carattere. Ecco come leggiamo l'anno.",
  ],
  springH: "Primavera: maggio e giugno",
  springP1:
    "Fine maggio e giugno sono la costa nel suo momento più fresco. Le colline sono ancora verdi delle piogge invernali, la buganvillea è in piena fioritura, e le serate si allungano, morbide. Il caldo c'è ma raramente opprime — un abito di lino resta comodo per tutto il pomeriggio, e nessuno cerca l'ombra prima della cerimonia.",
  springP2:
    "Il prezzo è una piccola possibilità di un acquazzone primaverile, che passa in fretta e lascia la luce lavata e nitida. Per le coppie che vogliono il verde, non l'oro, e una costa non ancora al pieno volume estivo, questi sono i mesi che consigliamo per primi.",
  featureCaption: "Positano a inizio giugno, colline ancora verdi",
  featureCredit: "Fotografato a giugno 2025",
  summerH: "Piena estate: luglio e agosto",
  summerP1:
    "Luglio e inizio settembre a parte, la piena estate è la costa a piena voce — calda, luminosa e animata. Il mare è abbastanza caldo per un bagno mattutino, le terrazze restano vive oltre la mezzanotte, e la luce è forte e limpida. È un bel momento per sposarsi se si pianifica attorno al caldo e non contro di esso.",
  summerP2: [
    "Teniamo però due settimane aperte a malincuore: la quindicina attorno al ",
    { text: "Ferragosto", strong: true },
    ", il quindici agosto. È quando la costa è nel suo punto più caldo e affollato, quando le strade si intasano e ogni cucina e ogni auto sono tirate all'estremo. Pianificheremo quelle date per una coppia che insiste — ma le sconsigliamo, e indirizziamo in silenzio tutti gli altri verso i margini del mese.",
  ],
  pqQuote:
    "La costa ad agosto non è la costa a settembre. Stesso mare, stesse falesie — ma una vi combatte e l'altra vi sostiene.",
  pqCite: "Grecia Mejía · Fondatrice",
  goldenH: "La finestra dorata: settembre e ottobre",
  goldenP:
    "Se esiste una stagione perfetta, è questa. Settembre porta acqua calda, luce più morbida e folle che si alleggeriscono di giorno in giorno; ottobre porta il colore più caldo dell'anno e la sua ora d'oro più lunga. Il caldo si è spezzato, le strade si sono liberate, e tutta la costa sembra espirare. Più nostri matrimoni a Positano cadono qui che in ogni altra finestra — e ogni anno quella quota cresce.",
  statLabels: [
    "La finestra più fresca — verde, serate lunghe",
    "La finestra dorata — la luce più calda, strade più facili",
    "Le settimane di agosto che ci asteniamo dal prenotare",
  ],
  takeH: "Il mese, in una riga",
  takeItems: [
    "Maggio e giugno — verde, serate lunghe, una piccola possibilità di acquazzone passeggero",
    "Luglio — caldo e animato; pianifica attorno all'ora d'oro e tieni le mattine per l'ombra",
    "Agosto — bello ai margini, ma non la quindicina attorno al Ferragosto",
    "Settembre e ottobre — la finestra dorata; la luce e il calendario sono dalla vostra parte",
  ],
  splitEyebrow: "Come pianifichiamo la giornata",
  splitHeading: "Leggete la luce, poi scrivete il programma.",
  splitParas: [
    "Qualunque sia il mese, costruiamo la giornata attorno al sole. In piena estate significa cerimonia in serata e un pomeriggio lento e all'ombra; nella finestra dorata possiamo iniziare prima e lasciare che la luce si distenda.",
    "Il mese detta il ritmo; il programma lo segue. Azzeccate la stagione e la giornata si pianifica quasi da sé — la costa vi dà semplicemente le ore che vuole.",
  ],
  cta: {
    script: "Una conversazione privata —",
    heading: "State scegliendo il vostro mese in Costiera Amalfitana?",
    body: "Diteci la sensazione che cercate — verde e fresca, o calda e dorata — e Grecia vi risponderà personalmente con le finestre più adatte, entro cinque giorni lavorativi.",
    ctaLabel: "Richiedi una consulenza",
  },
  ruleH: "La nostra regola",
  ruleP: [
    "La nostra regola è semplice: scegliete il mese per la luce e l'atmosfera, poi pianificate la giornata attorno al tempo che porta. E qualunque sia la stagione, tenete un piano di riserva per pioggia e caldo — le ragioni sono nel nostro pezzo compagno sulle ",
    { text: "contingenze dei matrimoni in spiaggia", href: CONTINGENCIES },
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
    b.h2(t.springH),
    b.p(t.springP1),
    b.p(t.springP2),
    b.featureImage(t.featureCaption, t.featureCaption, t.featureCredit),
    b.h2(t.summerH),
    b.p(t.summerP1),
    b.p(t.summerP2),
    b.pullQuote(t.pqQuote, t.pqCite),
    b.h2(t.goldenH),
    b.p(t.goldenP),
    b.stats([
      { value: STAT_VALUES[0], label: t.statLabels[0] },
      { value: STAT_VALUES[1], label: t.statLabels[1] },
      { value: STAT_VALUES[2], label: t.statLabels[2] },
    ]),
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
    b.h2(t.ruleH),
    b.p(t.ruleP),
  ];
};

export const article: ArticleSeed = {
  canonicalSlug: "when-to-wed-amalfi-coast",
  categorySlug: "destination-weddings",
  relatedDestinationSlug: "punta-cana",
  readMinutes: 11,
  publishedAt: "2026-01-08T09:00:00Z",
  featured: false,
  relatedArticles: [
    "best-indian-wedding-venues-punta-cana",
    "single-stem-centrepiece",
    "beach-wedding-contingencies",
  ],
  byLocale,
  buildBody,
};
