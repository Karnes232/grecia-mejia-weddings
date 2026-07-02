/**
 * Journal article — "What a Luxury Punta Cana Wedding Actually Costs".
 * A frank 2026 budget breakdown by guest count. Rich body mirroring the
 * design's `pages/journal-article.jsx`.
 */

import { type Locale } from "../../../../i18n/routing";
import * as b from "../body";
import type { ArticleSeed, ArticleLocaleCopy } from "../types";

const PC = "/destinations/punta-cana";
const VENUES = "/journal/best-indian-wedding-venues-punta-cana";

type Body = {
  introP: b.Run[];
  driversH: string;
  driversP1: string;
  driversP2: string;
  statLabels: [string, string, string];
  takeH: string;
  takeItems: string[];
  countH: string;
  countP: string;
  underH: string;
  underP: string;
  midH: string;
  midP: string;
  pqQuote: string;
  pqCite: string;
  moneyH: string;
  moneyP: b.Run[];
  moneyItems: b.Run[][];
  cta: { script: string; heading: string; body: string; ctaLabel: string };
  dcEyebrow: string;
  dcLink: string;
  honestyH: string;
  honestyP: b.Run[];
};

const STAT_VALUES: [string, string, string] = ["$180K", "$420K", "$1.2M"];

const en: ArticleLocaleCopy = {
  title: "What a Luxury Punta Cana Wedding Actually *Costs*",
  excerpt:
    "A frank breakdown of 2026 budgets by guest count, with line-item ranges nobody else will put in writing.",
  kicker: "Punta Cana",
  lede: "The honest number depends on guest count, season and how much you bring in. Here are the ranges we quote couples, line by line, with nothing hidden.",
  faqs: [
    {
      question: "What is the minimum budget for a luxury wedding in Punta Cana?",
      answer:
        "For a genuinely luxury standard — a strong venue, imported design, a real photographer and a planner who is present — we start conversations around $180,000 for an intimate wedding under 120 guests. Below that number, something has to give.",
    },
    {
      question: "Why is a destination wedding so expensive?",
      answer: [
        "Most of the cost is not the party — it is bringing luxury to a place that does not manufacture it locally. Design, specialist vendors and logistics all travel. Our companion piece on the ",
        { text: "best venues in Punta Cana", href: VENUES },
        " explains how the venue you choose shifts that maths.",
      ],
    },
    {
      question: "How much of the budget goes to the planner?",
      answer:
        "Our fee is a fixed percentage of the total, disclosed in the first proposal. We do not take vendor commissions, so the number you see is the number you pay — that is the whole point of hiring us.",
    },
    {
      question: "Can we spend less by marrying in low season?",
      answer:
        "Yes — June through October carries a 20 to 25 percent saving on venue and hotel, though it also carries hurricane-season risk. For a smaller guest list willing to hold a weather contingency, it can be the right trade.",
    },
  ],
  bleedQuote: {
    script: "The number nobody quotes —",
    quote:
      "A budget is not a limit. It is a set of choices made in advance, so that on the day itself nothing has to be decided by price. That is the luxury we are actually selling.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const enBody: Body = {
  introP: [
    "Everyone wants the number before they want the conversation, and no one will give it to them straight. So here it is. What follows are the 2026 ranges we quote couples for a luxury wedding in ",
    { text: "Punta Cana", href: PC },
    " — not a marketing figure, but the working budgets behind the weddings we actually deliver.",
  ],
  driversH: "What drives the number",
  driversP1:
    "Three things move the total more than anything else: how many people you feed, what season you marry in, and how much of the design has to travel. Guest count is the multiplier — every head is a plate, a chair, a favour and a share of the flowers. It compounds fast.",
  driversP2:
    "Season is the quiet lever. The dry months from November to April command peak rates; June to October saves a meaningful fraction but asks you to hold a weather plan. And the further your taste sits from what Punta Cana produces locally, the more you import — and imported design is where luxury budgets quietly double.",
  statLabels: [
    "Intimate weddings, under 120 guests",
    "The typical range, 120 to 250 guests",
    "The ceiling for the largest we take",
  ],
  takeH: "The short version",
  takeItems: [
    "Luxury starts around $180K for under 120 guests, all-in",
    "The typical 120 to 250 guest wedding lands near $420K",
    "Guest count and imported design move the total most",
    "Low season saves 20 to 25 percent, with a weather trade",
  ],
  countH: "By guest count",
  countP:
    "The cleanest way to read a budget is by the size of the room. Below are the two bands most of our couples fall into, with the honest ranges we would quote before we know anything else about your taste.",
  underH: "Under 120 guests",
  underP:
    "An intimate wedding is not a cheap wedding — it is a concentrated one. With fewer plates to fund, the money moves toward experience: a better venue buy-out, a photographer flown in, design that would be extravagant at scale but is merely generous at this size. Expect $180,000 to $300,000, all-in, for a wedding done properly at this count.",
  midH: "120–250 guests",
  midP:
    "This is the heart of what we do, and the band where the maths turns non-linear. Catering, rentals and staffing scale with every guest, and a second event — a welcome party, a farewell brunch — is usually in play. Most of these weddings land between $350,000 and $600,000, with $420,000 the honest midpoint we quote when a couple asks for one number.",
  pqQuote:
    "The couples who overspend are not the ones with the biggest guest lists. They are the ones who decided nothing early, and paid a premium for every decision made late.",
  pqCite: "Grecia Mejía · Founder",
  moneyH: "Where the money actually goes",
  moneyP: [
    "People assume the venue is the biggest line. It rarely is. ",
    { text: "Design and production is almost always the largest single cost", strong: true },
    " — often thirty to forty percent of the total — because it is the part that travels and the part that makes the photographs. Here is roughly how a mid-band budget divides.",
  ],
  moneyItems: [
    [{ text: "Venue", strong: true }, " — the room and its buy-out, typically 10 to 15 percent; less than most couples fear"],
    [{ text: "Catering", strong: true }, " — food, drink and service staff, usually 20 to 25 percent and scaling per head"],
    [{ text: "Design", strong: true }, " — flowers, lighting, furniture and production, the largest line at 30 to 40 percent"],
    [{ text: "Guest experience", strong: true }, " — welcome events, transport and gifting, the 15 percent that people remember"],
  ],
  cta: {
    script: "A private conversation —",
    heading: "Want the number for your wedding, not the average?",
    body: "Tell us your dates and guest count, and Grecia will write back with an honest range for your wedding specifically — within five working days, and with nothing hidden.",
    ctaLabel: "Request a consultation",
  },
  dcEyebrow: "The destination, in full",
  dcLink: "Read the destination guide",
  honestyH: "A note on honesty",
  honestyP: [
    "We put these numbers in writing because the alternative — a coy \"it depends\" until you are too invested to walk — is how the industry protects its margins, not its couples. It genuinely does depend, but on things we can name. Once you know your guest count and your season, read our companion piece on the ",
    { text: "best venues in Punta Cana", href: VENUES },
    " — the venue you choose is the first real fork in the budget.",
  ],
};

const es: ArticleLocaleCopy = {
  title: "Lo que *cuesta* de verdad una boda de lujo en Punta Cana",
  excerpt:
    "Un desglose franco de los presupuestos de 2026 por número de invitados, con rangos por partida que nadie más pone por escrito.",
  kicker: "Punta Cana",
  lede: "La cifra honesta depende del número de invitados, la temporada y cuánto se trae de fuera. Estos son los rangos que damos a las parejas, partida por partida, sin nada oculto.",
  faqs: [
    {
      question: "¿Cuál es el presupuesto mínimo para una boda de lujo en Punta Cana?",
      answer:
        "Para un estándar genuinamente de lujo —una buena sede, diseño importado, un fotógrafo de verdad y una planificadora presente— empezamos las conversaciones en torno a $180.000 para una boda íntima de menos de 120 invitados. Por debajo de esa cifra, algo tiene que ceder.",
    },
    {
      question: "¿Por qué es tan cara una boda de destino?",
      answer: [
        "Casi todo el coste no es la fiesta: es llevar el lujo a un lugar que no lo fabrica localmente. Diseño, proveedores especializados y logística viajan todos. Nuestra guía complementaria sobre las ",
        { text: "mejores sedes de Punta Cana", href: VENUES },
        " explica cómo la sede que eliges cambia esas cuentas.",
      ],
    },
    {
      question: "¿Cuánto del presupuesto va a la planificadora?",
      answer:
        "Nuestros honorarios son un porcentaje fijo del total, declarado en la primera propuesta. No cobramos comisiones a proveedores, así que la cifra que ves es la que pagas: ese es el sentido de contratarnos.",
    },
    {
      question: "¿Podemos gastar menos casándonos en temporada baja?",
      answer:
        "Sí: de junio a octubre hay un ahorro del 20 al 25 por ciento en sede y hotel, aunque conlleva el riesgo de la temporada de huracanes. Para una lista más pequeña dispuesta a mantener un plan climático, puede ser el trato correcto.",
    },
  ],
  bleedQuote: {
    script: "La cifra que nadie da —",
    quote:
      "Un presupuesto no es un límite. Es un conjunto de decisiones tomadas de antemano, para que el día en sí nada tenga que decidirse por precio. Ese es el lujo que de verdad vendemos.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const esBody: Body = {
  introP: [
    "Todos quieren la cifra antes que la conversación, y nadie se la da directa. Así que aquí está. Lo que sigue son los rangos de 2026 que damos a las parejas para una boda de lujo en ",
    { text: "Punta Cana", href: PC },
    " —no una cifra de marketing, sino los presupuestos reales tras las bodas que de verdad ejecutamos.",
  ],
  driversH: "Qué mueve la cifra",
  driversP1:
    "Tres cosas mueven el total más que ninguna otra: a cuántas personas alimentas, en qué temporada te casas y cuánto del diseño debe viajar. El número de invitados es el multiplicador: cada cabeza es un plato, una silla, un detalle y una parte de las flores. Se acumula rápido.",
  driversP2:
    "La temporada es la palanca silenciosa. Los meses secos de noviembre a abril imponen tarifas máximas; de junio a octubre se ahorra una fracción significativa pero te pide mantener un plan climático. Y cuanto más lejos esté tu gusto de lo que Punta Cana produce localmente, más importas —y el diseño importado es donde los presupuestos de lujo se duplican en silencio.",
  statLabels: [
    "Bodas íntimas, menos de 120 invitados",
    "El rango típico, de 120 a 250 invitados",
    "El techo de la más grande que aceptamos",
  ],
  takeH: "La versión corta",
  takeItems: [
    "El lujo empieza en torno a $180K para menos de 120 invitados, todo incluido",
    "La boda típica de 120 a 250 invitados ronda los $420K",
    "El número de invitados y el diseño importado mueven más el total",
    "La temporada baja ahorra del 20 al 25 por ciento, con un trato climático",
  ],
  countH: "Por número de invitados",
  countP:
    "La forma más clara de leer un presupuesto es por el tamaño de la sala. Abajo están las dos bandas en las que caen la mayoría de nuestras parejas, con los rangos honestos que daríamos antes de saber nada más de tu gusto.",
  underH: "Menos de 120 invitados",
  underP:
    "Una boda íntima no es una boda barata: es una concentrada. Con menos platos que financiar, el dinero se mueve hacia la experiencia: una mejor exclusiva de la sede, un fotógrafo traído en avión, un diseño que sería extravagante a escala pero es simplemente generoso a este tamaño. Cuenta con $180.000 a $300.000, todo incluido, para una boda bien hecha a este número.",
  midH: "120–250 invitados",
  midP:
    "Este es el corazón de lo que hacemos, y la banda donde las cuentas se vuelven no lineales. Catering, alquileres y personal escalan con cada invitado, y un segundo evento —una fiesta de bienvenida, un brunch de despedida— suele estar en juego. La mayoría de estas bodas caen entre $350.000 y $600.000, con $420.000 como el punto medio honesto que damos cuando una pareja pide una sola cifra.",
  pqQuote:
    "Las parejas que se pasan de presupuesto no son las de las listas más grandes. Son las que no decidieron nada pronto y pagaron una prima por cada decisión tomada tarde.",
  pqCite: "Grecia Mejía · Fundadora",
  moneyH: "Adónde va de verdad el dinero",
  moneyP: [
    "Se asume que la sede es la partida mayor. Rara vez lo es. ",
    { text: "El diseño y la producción son casi siempre el mayor coste individual", strong: true },
    " —a menudo del treinta al cuarenta por ciento del total— porque es la parte que viaja y la parte que hace las fotografías. Así se divide, más o menos, un presupuesto de banda media.",
  ],
  moneyItems: [
    [{ text: "Sede", strong: true }, " — la sala y su exclusiva, normalmente del 10 al 15 por ciento; menos de lo que temen las parejas"],
    [{ text: "Catering", strong: true }, " — comida, bebida y personal de servicio, del 20 al 25 por ciento y escalando por cabeza"],
    [{ text: "Diseño", strong: true }, " — flores, iluminación, mobiliario y producción, la partida mayor con el 30 al 40 por ciento"],
    [{ text: "Experiencia del invitado", strong: true }, " — eventos de bienvenida, transporte y regalos, el 15 por ciento que la gente recuerda"],
  ],
  cta: {
    script: "Una conversación privada —",
    heading: "¿Quieres la cifra de tu boda, no la media?",
    body: "Cuéntanos tus fechas y número de invitados, y Grecia te responderá con un rango honesto para tu boda en concreto —en cinco días laborables y sin nada oculto.",
    ctaLabel: "Solicitar una consulta",
  },
  dcEyebrow: "El destino, completo",
  dcLink: "Leer la guía del destino",
  honestyH: "Una nota sobre la honestidad",
  honestyP: [
    "Ponemos estas cifras por escrito porque la alternativa —un evasivo «depende» hasta que estás demasiado comprometida para echarte atrás— es cómo el sector protege sus márgenes, no a sus parejas. Sí depende de verdad, pero de cosas que podemos nombrar. Una vez conozcas tu número de invitados y tu temporada, lee nuestra guía complementaria sobre las ",
    { text: "mejores sedes de Punta Cana", href: VENUES },
    " —la sede que elijas es la primera bifurcación real del presupuesto.",
  ],
};

const fr: ArticleLocaleCopy = {
  title: "Ce que *coûte* vraiment un mariage de luxe à Punta Cana",
  excerpt:
    "Une décomposition franche des budgets 2026 selon le nombre d'invités, avec des fourchettes par poste que personne d'autre ne met par écrit.",
  kicker: "Punta Cana",
  lede: "Le chiffre honnête dépend du nombre d'invités, de la saison et de ce que vous faites venir. Voici les fourchettes que nous donnons aux couples, poste par poste, sans rien cacher.",
  faqs: [
    {
      question: "Quel est le budget minimum pour un mariage de luxe à Punta Cana ?",
      answer:
        "Pour un standard réellement luxueux — un beau lieu, un décor importé, un vrai photographe et une organisatrice présente — nous ouvrons les conversations autour de 180 000 $ pour un mariage intime de moins de 120 invités. En dessous de ce chiffre, il faut renoncer à quelque chose.",
    },
    {
      question: "Pourquoi un mariage de destination coûte-t-il si cher ?",
      answer: [
        "L'essentiel du coût n'est pas la fête : c'est amener le luxe dans un lieu qui ne le fabrique pas sur place. Décor, prestataires spécialisés et logistique voyagent tous. Notre article compagnon sur les ",
        { text: "meilleurs lieux de Punta Cana", href: VENUES },
        " explique comment le lieu choisi change ce calcul.",
      ],
    },
    {
      question: "Quelle part du budget revient à l'organisatrice ?",
      answer:
        "Nos honoraires sont un pourcentage fixe du total, indiqué dès la première proposition. Nous ne prenons aucune commission des prestataires, donc le chiffre que vous voyez est celui que vous payez : c'est tout l'intérêt de nous engager.",
    },
    {
      question: "Peut-on dépenser moins en se mariant en basse saison ?",
      answer:
        "Oui — de juin à octobre, on économise 20 à 25 pour cent sur le lieu et l'hôtel, mais avec le risque de la saison des ouragans. Pour une liste plus réduite prête à maintenir un plan météo, ce peut être le bon compromis.",
    },
  ],
  bleedQuote: {
    script: "Le chiffre que personne ne donne —",
    quote:
      "Un budget n'est pas une limite. C'est un ensemble de choix faits à l'avance, pour que le jour venu rien n'ait à se décider par le prix. C'est ce luxe-là que nous vendons vraiment.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const frBody: Body = {
  introP: [
    "Tout le monde veut le chiffre avant la conversation, et personne ne le donne franchement. Alors le voici. Ce qui suit, ce sont les fourchettes 2026 que nous donnons aux couples pour un mariage de luxe à ",
    { text: "Punta Cana", href: PC },
    " — non pas un chiffre marketing, mais les budgets réels derrière les mariages que nous livrons vraiment.",
  ],
  driversH: "Ce qui fait le chiffre",
  driversP1:
    "Trois choses font bouger le total plus que tout : combien de personnes vous nourrissez, en quelle saison vous vous mariez et quelle part du décor doit voyager. Le nombre d'invités est le multiplicateur : chaque tête est une assiette, une chaise, un cadeau et une part des fleurs. Cela s'accumule vite.",
  driversP2:
    "La saison est le levier discret. Les mois secs de novembre à avril imposent les tarifs de pointe ; de juin à octobre, on économise une fraction notable mais il faut tenir un plan météo. Et plus votre goût s'éloigne de ce que Punta Cana produit sur place, plus vous importez — et le décor importé, c'est là que les budgets de luxe doublent en silence.",
  statLabels: [
    "Mariages intimes, moins de 120 invités",
    "La fourchette typique, 120 à 250 invités",
    "Le plafond du plus grand que nous prenons",
  ],
  takeH: "En bref",
  takeItems: [
    "Le luxe commence autour de 180 K$ pour moins de 120 invités, tout compris",
    "Le mariage typique de 120 à 250 invités avoisine 420 K$",
    "Le nombre d'invités et le décor importé pèsent le plus",
    "La basse saison économise 20 à 25 pour cent, avec un compromis météo",
  ],
  countH: "Selon le nombre d'invités",
  countP:
    "La façon la plus nette de lire un budget, c'est par la taille de la salle. Voici les deux tranches où tombent la plupart de nos couples, avec les fourchettes honnêtes que nous donnerions avant même de connaître votre goût.",
  underH: "Moins de 120 invités",
  underP:
    "Un mariage intime n'est pas un mariage bon marché : c'est un mariage concentré. Avec moins d'assiettes à financer, l'argent va vers l'expérience : une meilleure privatisation du lieu, un photographe qu'on fait venir, un décor qui serait extravagant à grande échelle mais reste simplement généreux à cette taille. Comptez 180 000 $ à 300 000 $, tout compris, pour un mariage bien fait à ce nombre.",
  midH: "120–250 invités",
  midP:
    "C'est le cœur de notre métier, et la tranche où le calcul devient non linéaire. Traiteur, locations et personnel augmentent avec chaque invité, et un second événement — une soirée d'accueil, un brunch d'adieu — est souvent en jeu. La plupart de ces mariages tombent entre 350 000 $ et 600 000 $, avec 420 000 $ pour point médian honnête quand un couple demande un seul chiffre.",
  pqQuote:
    "Les couples qui dépassent le budget ne sont pas ceux aux plus grandes listes. Ce sont ceux qui n'ont rien décidé tôt, et ont payé une prime sur chaque décision prise tard.",
  pqCite: "Grecia Mejía · Fondatrice",
  moneyH: "Où va vraiment l'argent",
  moneyP: [
    "On suppose que le lieu est le plus gros poste. Il l'est rarement. ",
    { text: "Le décor et la production sont presque toujours le plus gros coût unique", strong: true },
    " — souvent trente à quarante pour cent du total — car c'est la part qui voyage et celle qui fait les photographies. Voici, en gros, comment se répartit un budget de tranche moyenne.",
  ],
  moneyItems: [
    [{ text: "Lieu", strong: true }, " — la salle et sa privatisation, en général 10 à 15 pour cent ; moins que ce que craignent les couples"],
    [{ text: "Traiteur", strong: true }, " — nourriture, boissons et personnel de service, 20 à 25 pour cent et croissant par tête"],
    [{ text: "Décor", strong: true }, " — fleurs, éclairage, mobilier et production, le plus gros poste à 30 à 40 pour cent"],
    [{ text: "Expérience des invités", strong: true }, " — événements d'accueil, transport et cadeaux, les 15 pour cent dont on se souvient"],
  ],
  cta: {
    script: "Une conversation privée —",
    heading: "Vous voulez le chiffre de votre mariage, pas la moyenne ?",
    body: "Dites-nous vos dates et le nombre d'invités, et Grecia vous répondra avec une fourchette honnête pour votre mariage précisément — sous cinq jours ouvrés, et sans rien cacher.",
    ctaLabel: "Demander une consultation",
  },
  dcEyebrow: "La destination, en entier",
  dcLink: "Lire le guide de destination",
  honestyH: "Une note sur l'honnêteté",
  honestyP: [
    "Nous mettons ces chiffres par écrit parce que l'alternative — un « ça dépend » évasif jusqu'à ce que vous soyez trop engagée pour renoncer — c'est ainsi que le secteur protège ses marges, pas ses couples. Cela dépend vraiment, mais de choses que nous pouvons nommer. Une fois votre nombre d'invités et votre saison connus, lisez notre article compagnon sur les ",
    { text: "meilleurs lieux de Punta Cana", href: VENUES },
    " — le lieu que vous choisissez est la première vraie bifurcation du budget.",
  ],
};

const pt: ArticleLocaleCopy = {
  title: "Quanto *custa* mesmo um casamento de luxo em Punta Cana",
  excerpt:
    "Uma análise franca dos orçamentos de 2026 por número de convidados, com intervalos por rubrica que mais ninguém põe por escrito.",
  kicker: "Punta Cana",
  lede: "O número honesto depende do número de convidados, da época e do que se traz de fora. Estes são os intervalos que damos aos casais, rubrica a rubrica, sem nada escondido.",
  faqs: [
    {
      question: "Qual é o orçamento mínimo para um casamento de luxo em Punta Cana?",
      answer:
        "Para um padrão genuinamente de luxo — um bom local, design importado, um fotógrafo a sério e uma planeadora presente — começamos as conversas por volta de $180.000 para um casamento íntimo de menos de 120 convidados. Abaixo desse número, algo tem de ceder.",
    },
    {
      question: "Porque é tão caro um casamento de destino?",
      answer: [
        "A maior parte do custo não é a festa: é levar o luxo a um lugar que não o fabrica localmente. Design, fornecedores especializados e logística viajam todos. O nosso artigo complementar sobre os ",
        { text: "melhores locais de Punta Cana", href: VENUES },
        " explica como o local que escolhe altera essas contas.",
      ],
    },
    {
      question: "Quanto do orçamento vai para a planeadora?",
      answer:
        "Os nossos honorários são uma percentagem fixa do total, indicada na primeira proposta. Não recebemos comissões de fornecedores, por isso o número que vê é o que paga: é esse o sentido de nos contratar.",
    },
    {
      question: "Podemos gastar menos casando na época baixa?",
      answer:
        "Sim — de junho a outubro há uma poupança de 20 a 25 por cento no local e no hotel, embora acarrete o risco da época de furacões. Para uma lista mais pequena disposta a manter um plano climático, pode ser a troca certa.",
    },
  ],
  bleedQuote: {
    script: "O número que ninguém dá —",
    quote:
      "Um orçamento não é um limite. É um conjunto de escolhas feitas de antemão, para que no próprio dia nada tenha de ser decidido pelo preço. É esse o luxo que de facto vendemos.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const ptBody: Body = {
  introP: [
    "Todos querem o número antes da conversa, e ninguém o dá direto. Então aqui está. O que se segue são os intervalos de 2026 que damos aos casais para um casamento de luxo em ",
    { text: "Punta Cana", href: PC },
    " — não um número de marketing, mas os orçamentos reais por trás dos casamentos que de facto realizamos.",
  ],
  driversH: "O que move o número",
  driversP1:
    "Três coisas movem o total mais do que qualquer outra: quantas pessoas alimenta, em que época casa e quanto do design tem de viajar. O número de convidados é o multiplicador: cada cabeça é um prato, uma cadeira, uma lembrança e uma parte das flores. Acumula depressa.",
  driversP2:
    "A época é a alavanca silenciosa. Os meses secos de novembro a abril impõem as tarifas de pico; de junho a outubro poupa-se uma fração significativa mas exige manter um plano climático. E quanto mais longe estiver o seu gosto do que Punta Cana produz localmente, mais importa — e o design importado é onde os orçamentos de luxo duplicam em silêncio.",
  statLabels: [
    "Casamentos íntimos, menos de 120 convidados",
    "O intervalo típico, de 120 a 250 convidados",
    "O teto do maior que aceitamos",
  ],
  takeH: "A versão curta",
  takeItems: [
    "O luxo começa perto de $180K para menos de 120 convidados, tudo incluído",
    "O casamento típico de 120 a 250 convidados ronda os $420K",
    "O número de convidados e o design importado movem mais o total",
    "A época baixa poupa 20 a 25 por cento, com uma troca climática",
  ],
  countH: "Por número de convidados",
  countP:
    "A forma mais clara de ler um orçamento é pelo tamanho da sala. Abaixo estão as duas faixas em que caem a maioria dos nossos casais, com os intervalos honestos que daríamos antes de sabermos mais sobre o seu gosto.",
  underH: "Menos de 120 convidados",
  underP:
    "Um casamento íntimo não é um casamento barato: é um concentrado. Com menos pratos a financiar, o dinheiro move-se para a experiência: uma melhor exclusividade do local, um fotógrafo trazido de avião, um design que seria extravagante em escala mas é apenas generoso neste tamanho. Conte com $180.000 a $300.000, tudo incluído, para um casamento bem feito neste número.",
  midH: "120–250 convidados",
  midP:
    "Este é o coração do que fazemos, e a faixa onde as contas se tornam não lineares. Catering, alugueres e pessoal escalam com cada convidado, e um segundo evento — uma festa de boas-vindas, um brunch de despedida — costuma estar em jogo. A maioria destes casamentos cai entre $350.000 e $600.000, com $420.000 como o ponto médio honesto que damos quando um casal pede um único número.",
  pqQuote:
    "Os casais que ultrapassam o orçamento não são os das maiores listas. São os que não decidiram nada cedo e pagaram um prémio por cada decisão tomada tarde.",
  pqCite: "Grecia Mejía · Fundadora",
  moneyH: "Para onde vai mesmo o dinheiro",
  moneyP: [
    "Assume-se que o local é a maior rubrica. Raramente é. ",
    { text: "O design e a produção são quase sempre o maior custo isolado", strong: true },
    " — muitas vezes trinta a quarenta por cento do total — porque é a parte que viaja e a parte que faz as fotografias. É assim, mais ou menos, que se divide um orçamento de faixa média.",
  ],
  moneyItems: [
    [{ text: "Local", strong: true }, " — a sala e a sua exclusividade, normalmente 10 a 15 por cento; menos do que os casais temem"],
    [{ text: "Catering", strong: true }, " — comida, bebida e pessoal de serviço, 20 a 25 por cento e escalando por cabeça"],
    [{ text: "Design", strong: true }, " — flores, iluminação, mobiliário e produção, a maior rubrica com 30 a 40 por cento"],
    [{ text: "Experiência do convidado", strong: true }, " — eventos de boas-vindas, transporte e ofertas, os 15 por cento de que as pessoas se lembram"],
  ],
  cta: {
    script: "Uma conversa privada —",
    heading: "Quer o número do seu casamento, não a média?",
    body: "Diga-nos as suas datas e número de convidados, e a Grecia responder-lhe-á com um intervalo honesto para o seu casamento em concreto — em cinco dias úteis e sem nada escondido.",
    ctaLabel: "Pedir uma consulta",
  },
  dcEyebrow: "O destino, por inteiro",
  dcLink: "Ler o guia do destino",
  honestyH: "Uma nota sobre honestidade",
  honestyP: [
    "Pomos estes números por escrito porque a alternativa — um evasivo «depende» até estar demasiado envolvida para desistir — é como o setor protege as suas margens, não os seus casais. Depende mesmo, mas de coisas que podemos nomear. Assim que souber o seu número de convidados e a sua época, leia o nosso artigo complementar sobre os ",
    { text: "melhores locais de Punta Cana", href: VENUES },
    " — o local que escolher é a primeira bifurcação real do orçamento.",
  ],
};

const de: ArticleLocaleCopy = {
  title: "Was eine Luxushochzeit in Punta Cana wirklich *kostet*",
  excerpt:
    "Eine offene Aufschlüsselung der 2026er Budgets nach Gästezahl, mit Posten-Spannen, die sonst niemand schriftlich nennt.",
  kicker: "Punta Cana",
  lede: "Die ehrliche Zahl hängt von Gästezahl, Saison und Mitgebrachtem ab. Hier sind die Spannen, die wir Paaren nennen — Posten für Posten, ohne Versteckspiel.",
  faqs: [
    {
      question: "Wie hoch ist das Mindestbudget für eine Luxushochzeit in Punta Cana?",
      answer:
        "Für einen wirklich luxuriösen Standard — eine starke Location, importiertes Design, einen echten Fotografen und eine präsente Planerin — beginnen wir Gespräche bei rund 180.000 $ für eine intime Hochzeit unter 120 Gästen. Unter dieser Zahl muss etwas nachgeben.",
    },
    {
      question: "Warum ist eine Destination-Hochzeit so teuer?",
      answer: [
        "Der Großteil der Kosten ist nicht die Feier — es ist, Luxus an einen Ort zu bringen, der ihn nicht vor Ort herstellt. Design, Spezialdienstleister und Logistik reisen alle mit. Unser Begleitartikel über die ",
        { text: "besten Locations in Punta Cana", href: VENUES },
        " erklärt, wie die gewählte Location diese Rechnung verschiebt.",
      ],
    },
    {
      question: "Wie viel des Budgets geht an die Planerin?",
      answer:
        "Unser Honorar ist ein fester Prozentsatz der Gesamtsumme, im ersten Angebot offengelegt. Wir nehmen keine Anbieterprovisionen, also ist die Zahl, die Sie sehen, die Zahl, die Sie zahlen — genau darum engagiert man uns.",
    },
    {
      question: "Können wir in der Nebensaison weniger ausgeben?",
      answer:
        "Ja — Juni bis Oktober bringt 20 bis 25 Prozent Ersparnis bei Location und Hotel, birgt aber das Risiko der Hurrikansaison. Für eine kleinere Gästeliste, die einen Wetterplan tragen will, kann es der richtige Kompromiss sein.",
    },
  ],
  bleedQuote: {
    script: "Die Zahl, die niemand nennt —",
    quote:
      "Ein Budget ist keine Grenze. Es ist eine Reihe im Voraus getroffener Entscheidungen, damit am Tag selbst nichts vom Preis entschieden werden muss. Das ist der Luxus, den wir wirklich verkaufen.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const deBody: Body = {
  introP: [
    "Alle wollen die Zahl, bevor sie das Gespräch wollen, und niemand nennt sie geradeheraus. Also hier ist sie. Was folgt, sind die 2026er Spannen, die wir Paaren für eine Luxushochzeit in ",
    { text: "Punta Cana", href: PC },
    " nennen — keine Marketingzahl, sondern die realen Budgets hinter den Hochzeiten, die wir tatsächlich umsetzen.",
  ],
  driversH: "Was die Zahl bestimmt",
  driversP1:
    "Drei Dinge bewegen die Summe mehr als alles andere: wie viele Menschen Sie bewirten, in welcher Saison Sie heiraten und wie viel des Designs reisen muss. Die Gästezahl ist der Multiplikator — jeder Kopf ist ein Gedeck, ein Stuhl, ein Gastgeschenk und ein Anteil an den Blumen. Das summiert sich schnell.",
  driversP2:
    "Die Saison ist der stille Hebel. Die Trockenmonate November bis April verlangen Höchstpreise; Juni bis Oktober spart einen spürbaren Bruchteil, verlangt aber einen Wetterplan. Und je weiter Ihr Geschmack von dem entfernt ist, was Punta Cana vor Ort produziert, desto mehr importieren Sie — und importiertes Design ist der Ort, wo Luxusbudgets sich still verdoppeln.",
  statLabels: [
    "Intime Hochzeiten, unter 120 Gästen",
    "Die typische Spanne, 120 bis 250 Gäste",
    "Die Obergrenze der größten, die wir annehmen",
  ],
  takeH: "Die Kurzfassung",
  takeItems: [
    "Luxus beginnt bei etwa 180 K$ für unter 120 Gäste, alles inklusive",
    "Die typische Hochzeit mit 120 bis 250 Gästen liegt bei rund 420 K$",
    "Gästezahl und importiertes Design bewegen die Summe am meisten",
    "Nebensaison spart 20 bis 25 Prozent, mit einem Wetterkompromiss",
  ],
  countH: "Nach Gästezahl",
  countP:
    "Am klarsten liest man ein Budget nach der Größe des Raums. Unten stehen die zwei Bänder, in die die meisten unserer Paare fallen, mit den ehrlichen Spannen, die wir nennen würden, bevor wir irgendetwas über Ihren Geschmack wissen.",
  underH: "Unter 120 Gästen",
  underP:
    "Eine intime Hochzeit ist keine günstige Hochzeit — sie ist eine konzentrierte. Mit weniger Gedecken zu finanzieren wandert das Geld zur Erfahrung: ein besserer Buy-out der Location, ein eingeflogener Fotograf, ein Design, das im großen Maßstab extravagant wäre, in dieser Größe aber bloß großzügig ist. Rechnen Sie mit 180.000 $ bis 300.000 $, alles inklusive, für eine bei dieser Zahl richtig gemachte Hochzeit.",
  midH: "120–250 Gäste",
  midP:
    "Das ist das Herz dessen, was wir tun, und das Band, in dem die Rechnung nichtlinear wird. Catering, Mieten und Personal skalieren mit jedem Gast, und ein zweites Event — eine Willkommensparty, ein Abschiedsbrunch — ist meist im Spiel. Die meisten dieser Hochzeiten liegen zwischen 350.000 $ und 600.000 $, mit 420.000 $ als ehrlichem Mittelwert, den wir nennen, wenn ein Paar um eine einzige Zahl bittet.",
  pqQuote:
    "Die Paare, die zu viel ausgeben, sind nicht die mit den größten Gästelisten. Es sind die, die früh nichts entschieden haben und für jede spät getroffene Entscheidung einen Aufschlag zahlten.",
  pqCite: "Grecia Mejía · Gründerin",
  moneyH: "Wohin das Geld wirklich geht",
  moneyP: [
    "Man nimmt an, die Location sei der größte Posten. Das ist sie selten. ",
    { text: "Design und Produktion sind fast immer der größte Einzelposten", strong: true },
    " — oft dreißig bis vierzig Prozent der Summe — weil es der Teil ist, der reist, und der Teil, der die Fotografien macht. So teilt sich, grob, ein Budget des mittleren Bandes.",
  ],
  moneyItems: [
    [{ text: "Location", strong: true }, " — der Raum und sein Buy-out, meist 10 bis 15 Prozent; weniger, als die meisten Paare fürchten"],
    [{ text: "Catering", strong: true }, " — Speisen, Getränke und Servicepersonal, meist 20 bis 25 Prozent und pro Kopf skalierend"],
    [{ text: "Design", strong: true }, " — Blumen, Licht, Möbel und Produktion, der größte Posten mit 30 bis 40 Prozent"],
    [{ text: "Gästeerlebnis", strong: true }, " — Willkommensevents, Transport und Geschenke, die 15 Prozent, an die man sich erinnert"],
  ],
  cta: {
    script: "Ein privates Gespräch —",
    heading: "Wollen Sie die Zahl für Ihre Hochzeit, nicht den Durchschnitt?",
    body: "Nennen Sie uns Ihre Termine und die Gästezahl, und Grecia antwortet mit einer ehrlichen Spanne für genau Ihre Hochzeit — binnen fünf Werktagen und ohne Versteckspiel.",
    ctaLabel: "Beratung anfragen",
  },
  dcEyebrow: "Das Reiseziel, ganz",
  dcLink: "Zum Reiseführer",
  honestyH: "Eine Anmerkung zur Ehrlichkeit",
  honestyP: [
    "Wir schreiben diese Zahlen aus, weil die Alternative — ein ausweichendes „kommt darauf an\", bis Sie zu investiert sind, um zu gehen — die Art ist, wie die Branche ihre Margen schützt, nicht ihre Paare. Es kommt wirklich darauf an, aber auf Dinge, die wir benennen können. Sobald Sie Ihre Gästezahl und Ihre Saison kennen, lesen Sie unseren Begleitartikel über die ",
    { text: "besten Locations in Punta Cana", href: VENUES },
    " — die gewählte Location ist die erste echte Weggabelung des Budgets.",
  ],
};

const it: ArticleLocaleCopy = {
  title: "Quanto *costa* davvero un matrimonio di lusso a Punta Cana",
  excerpt:
    "Un'analisi schietta dei budget 2026 per numero di invitati, con fasce per voce che nessun altro mette per iscritto.",
  kicker: "Punta Cana",
  lede: "Il numero onesto dipende dal numero di invitati, dalla stagione e da quanto si porta da fuori. Ecco le fasce che diamo alle coppie, voce per voce, senza nulla di nascosto.",
  faqs: [
    {
      question: "Qual è il budget minimo per un matrimonio di lusso a Punta Cana?",
      answer:
        "Per uno standard davvero di lusso — una sede forte, allestimento importato, un fotografo vero e una wedding planner presente — apriamo le conversazioni intorno a $180.000 per un matrimonio intimo sotto i 120 invitati. Sotto quel numero, qualcosa deve cedere.",
    },
    {
      question: "Perché un matrimonio di destinazione costa così tanto?",
      answer: [
        "Gran parte del costo non è la festa: è portare il lusso in un luogo che non lo produce sul posto. Allestimento, fornitori specializzati e logistica viaggiano tutti. Il nostro articolo compagno sulle ",
        { text: "migliori sedi di Punta Cana", href: VENUES },
        " spiega come la sede scelta cambia questi conti.",
      ],
    },
    {
      question: "Quanto del budget va alla wedding planner?",
      answer:
        "Il nostro onorario è una percentuale fissa del totale, dichiarata nella prima proposta. Non prendiamo commissioni dai fornitori, quindi il numero che vedi è quello che paghi: è tutto il senso di ingaggiarci.",
    },
    {
      question: "Possiamo spendere meno sposandoci in bassa stagione?",
      answer:
        "Sì — da giugno a ottobre c'è un risparmio del 20-25 per cento su sede e hotel, benché comporti il rischio della stagione degli uragani. Per una lista più piccola disposta a tenere un piano meteo, può essere lo scambio giusto.",
    },
  ],
  bleedQuote: {
    script: "Il numero che nessuno dà —",
    quote:
      "Un budget non è un limite. È un insieme di scelte fatte in anticipo, perché il giorno stesso nulla debba decidersi in base al prezzo. È questo il lusso che vendiamo davvero.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const itBody: Body = {
  introP: [
    "Tutti vogliono il numero prima della conversazione, e nessuno lo dà chiaro. Quindi eccolo. Ciò che segue sono le fasce 2026 che diamo alle coppie per un matrimonio di lusso a ",
    { text: "Punta Cana", href: PC },
    " — non un numero di marketing, ma i budget reali dietro i matrimoni che realizziamo davvero.",
  ],
  driversH: "Cosa muove il numero",
  driversP1:
    "Tre cose muovono il totale più di ogni altra: quante persone sfami, in che stagione ti sposi e quanto dell'allestimento deve viaggiare. Il numero di invitati è il moltiplicatore: ogni testa è un piatto, una sedia, un pensiero e una parte dei fiori. Si accumula in fretta.",
  driversP2:
    "La stagione è la leva silenziosa. I mesi secchi da novembre ad aprile impongono le tariffe di picco; da giugno a ottobre si risparmia una frazione notevole ma si deve tenere un piano meteo. E più il tuo gusto è lontano da ciò che Punta Cana produce sul posto, più importi — e l'allestimento importato è dove i budget di lusso raddoppiano in silenzio.",
  statLabels: [
    "Matrimoni intimi, sotto i 120 invitati",
    "La fascia tipica, da 120 a 250 invitati",
    "Il tetto del più grande che accettiamo",
  ],
  takeH: "In breve",
  takeItems: [
    "Il lusso parte da circa $180K per meno di 120 invitati, tutto incluso",
    "Il matrimonio tipico da 120 a 250 invitati si aggira sui $420K",
    "Numero di invitati e allestimento importato muovono di più il totale",
    "La bassa stagione risparmia il 20-25 per cento, con uno scambio meteo",
  ],
  countH: "Per numero di invitati",
  countP:
    "Il modo più netto di leggere un budget è per dimensione della sala. Qui sotto ci sono le due fasce in cui rientra la maggior parte delle nostre coppie, con le fasce oneste che daremmo prima ancora di sapere altro del tuo gusto.",
  underH: "Sotto i 120 invitati",
  underP:
    "Un matrimonio intimo non è un matrimonio economico: è un matrimonio concentrato. Con meno piatti da finanziare, il denaro si sposta verso l'esperienza: una migliore privativa della sede, un fotografo fatto arrivare in aereo, un allestimento che su larga scala sarebbe stravagante ma a questa dimensione è semplicemente generoso. Conta $180.000 a $300.000, tutto incluso, per un matrimonio fatto bene a questo numero.",
  midH: "120–250 invitati",
  midP:
    "Questo è il cuore di ciò che facciamo, e la fascia in cui i conti diventano non lineari. Catering, noleggi e personale scalano con ogni invitato, e un secondo evento — una festa di benvenuto, un brunch di commiato — è di solito in gioco. La maggior parte di questi matrimoni cade tra $350.000 e $600.000, con $420.000 come punto medio onesto che diamo quando una coppia chiede un solo numero.",
  pqQuote:
    "Le coppie che sforano il budget non sono quelle con le liste più lunghe. Sono quelle che non hanno deciso nulla presto, e hanno pagato un sovrapprezzo per ogni decisione presa tardi.",
  pqCite: "Grecia Mejía · Fondatrice",
  moneyH: "Dove va davvero il denaro",
  moneyP: [
    "Si presume che la sede sia la voce più grande. Raramente lo è. ",
    { text: "Allestimento e produzione sono quasi sempre il costo singolo più grande", strong: true },
    " — spesso dal trenta al quaranta per cento del totale — perché è la parte che viaggia e la parte che fa le fotografie. Ecco, grosso modo, come si divide un budget di fascia media.",
  ],
  moneyItems: [
    [{ text: "Sede", strong: true }, " — la sala e la sua privativa, di solito dal 10 al 15 per cento; meno di quanto temano le coppie"],
    [{ text: "Catering", strong: true }, " — cibo, bevande e personale di servizio, dal 20 al 25 per cento e scalando a testa"],
    [{ text: "Allestimento", strong: true }, " — fiori, luci, arredi e produzione, la voce più grande al 30-40 per cento"],
    [{ text: "Esperienza degli invitati", strong: true }, " — eventi di benvenuto, trasporti e regali, il 15 per cento che la gente ricorda"],
  ],
  cta: {
    script: "Una conversazione privata —",
    heading: "Vuoi il numero del tuo matrimonio, non la media?",
    body: "Dicci le date e il numero di invitati, e Grecia ti risponderà con una fascia onesta per il tuo matrimonio nello specifico — entro cinque giorni lavorativi e senza nulla di nascosto.",
    ctaLabel: "Richiedi una consulenza",
  },
  dcEyebrow: "La destinazione, per intero",
  dcLink: "Leggi la guida alla destinazione",
  honestyH: "Una nota sull'onestà",
  honestyP: [
    "Mettiamo questi numeri per iscritto perché l'alternativa — un evasivo «dipende» finché non sei troppo coinvolta per tirarti indietro — è come il settore protegge i suoi margini, non le sue coppie. Dipende davvero, ma da cose che possiamo nominare. Una volta noti il tuo numero di invitati e la tua stagione, leggi il nostro articolo compagno sulle ",
    { text: "migliori sedi di Punta Cana", href: VENUES },
    " — la sede che scegli è il primo vero bivio del budget.",
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
    b.h2(t.driversH),
    b.p(t.driversP1),
    b.p(t.driversP2),
    b.stats([
      { value: STAT_VALUES[0], label: t.statLabels[0] },
      { value: STAT_VALUES[1], label: t.statLabels[1] },
      { value: STAT_VALUES[2], label: t.statLabels[2] },
    ]),
    b.takeaways(t.takeH, t.takeItems),
    b.h2(t.countH),
    b.p(t.countP),
    b.h3(t.underH),
    b.p(t.underP),
    b.h3(t.midH),
    b.p(t.midP),
    b.pullQuote(t.pqQuote, t.pqCite),
    b.h2(t.moneyH),
    b.p(t.moneyP),
    ...b.ul(t.moneyItems),
    b.inlineCta({
      script: t.cta.script,
      heading: t.cta.heading,
      body: t.cta.body,
      ctaLabel: t.cta.ctaLabel,
      ctaHref: "/contact",
    }),
    b.destinationCard(locale, "punta-cana", t.dcEyebrow, t.dcLink),
    b.h2(t.honestyH),
    b.p(t.honestyP),
  ];
};

export const article: ArticleSeed = {
  canonicalSlug: "luxury-punta-cana-wedding-cost",
  categorySlug: "wedding-costs",
  relatedDestinationSlug: "punta-cana",
  readMinutes: 9,
  publishedAt: "2026-02-15T09:00:00Z",
  featured: false,
  relatedArticles: [
    "best-indian-wedding-venues-punta-cana",
    "beach-wedding-contingencies",
    "welcome-party-second-star",
  ],
  byLocale,
  buildBody,
};
