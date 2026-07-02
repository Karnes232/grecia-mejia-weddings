/**
 * Journal article — "Kosher on the Coast: A Jewish Wedding in the Caribbean".
 * On building a kosher kitchen far from the nearest mashgiach, and the
 * methodology that now holds every Jewish wedding.
 */

import { type Locale } from "../../../../i18n/routing";
import * as b from "../body";
import type { ArticleSeed, ArticleLocaleCopy } from "../types";

const JEW = "/multicultural-weddings/jewish-weddings";
const IND = "/journal/best-indian-wedding-venues-punta-cana";

type Body = {
  introP: b.Run[];
  kitchenH: string;
  kitchenP1: string;
  kitchenP2: string;
  featureCaption: string;
  featureCredit: string;
  takeH: string;
  takeItems: string[];
  methodH: string;
  methodP: string;
  kasherH: string;
  kasherP: string;
  mashgiachH: string;
  mashgiachP: string;
  splitEyebrow: string;
  splitHeading: string;
  splitParas: [string, string];
  pqQuote: string;
  pqCite: string;
  chuppahH: string;
  chuppahP: string;
  statLabels: [string, string, string];
  cta: { script: string; heading: string; body: string; ctaLabel: string };
  tellH: string;
  tellP: b.Run[];
};

const STAT_VALUES: [string, string, string] = ["11", "3", "48"];

const en: ArticleLocaleCopy = {
  title: "Kosher on the Coast: A Jewish Wedding in the *Caribbean*",
  excerpt:
    "On building a kosher kitchen 1,500 miles from the nearest mashgiach — and the methodology that holds every Jewish wedding since.",
  kicker: "Caribbean",
  lede: "Building a kosher kitchen far from any community is a logistics problem before it is a religious one. The method we worked out the first time now holds every Jewish wedding we plan.",
  faqs: [
    {
      question: "Can you keep a wedding fully kosher in the Caribbean?",
      answer:
        "Yes. We build a temporary kosher kitchen on site, kasher the equipment under supervision, and fly in a mashgiach who stays for the full arc. It is logistics, not compromise — nothing about the standard changes because the venue is a beach.",
    },
    {
      question: "Where does the mashgiach come from?",
      answer: [
        "From a certifying authority we have worked with for years. They travel with us, arrive before the kitchen is kashered, and remain through the last meal — see our overview of ",
        { text: "Jewish weddings", href: JEW },
        " for how the whole calendar fits together.",
      ],
    },
    {
      question: "How far in advance should a kosher wedding be planned?",
      answer:
        "Twelve to eighteen months. The kitchen build, the supervision schedule and the shipping of sealed ingredients all have long lead times, and peak season books first.",
    },
    {
      question: "Is glatt kosher possible at a destination wedding?",
      answer:
        "Yes, and as standard when a family keeps it. We source glatt meat through sealed cold chains and coordinate every delivery with the mashgiach so the chain is never broken between the plane and the plate.",
    },
  ],
  bleedQuote: {
    script: "After eleven Jewish weddings —",
    quote:
      "You do not lower the standard because the venue is a beach. You build the kitchen that lets the standard travel, and then the coast is just a beautiful place to keep it.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const enBody: Body = {
  introP: [
    "The first Jewish wedding we planned on the coast taught us more than any brief could. If you are early in planning, start with our overview of ",
    { text: "Jewish weddings", href: JEW },
    " as a tradition; this piece is about the one thing that keeps couples awake — how you keep a kitchen kosher fifteen hundred miles from the nearest supervising authority.",
  ],
  kitchenH: "The kitchen is the problem",
  kitchenP1:
    "Everything else about a Jewish wedding on the coast is solvable with taste and time — the chuppah, the ketubah, the hora at midnight. The kitchen is the problem, because a kosher kitchen is not a menu choice; it is a physical space governed by law, and no beach resort has one waiting.",
  kitchenP2:
    "The temptation is to fake it — to trust a chef's word, to wave through a caterer who says the word kosher without meaning glatt, without a mashgiach, without kashered surfaces. We do not. The standard is the standard, and the whole point of hiring us is that we hold it when it would be easier not to.",
  featureCaption: "The chuppah at golden hour, Punta Cana",
  featureCredit: "Photographed January 2026",
  takeH: "The short version",
  takeItems: [
    "A kosher kitchen is a built space, not a menu — plan the build first",
    "The mashgiach travels with us and stays for the entire wedding arc",
    "Sealed cold chains carry glatt meat from source to plate unbroken",
    "Twelve to eighteen months' lead time for a destination kosher wedding",
  ],
  methodH: "The method",
  methodP:
    "What we worked out the first time is now a fixed procedure — two moving parts that we repeat, unchanged, at every Jewish wedding we plan. One concerns the room; the other concerns the person who watches it.",
  kasherH: "Kashering on site",
  kasherP:
    "We build a temporary kosher kitchen in a sealed, dedicated space beside the venue — separate stations for meat and dairy, new or kashered equipment, sealed provisions shipped in advance. Every surface that touches food is kashered under supervision before a single ingredient arrives, and the space is locked between services so nothing can compromise it overnight.",
  mashgiachH: "The mashgiach travels",
  mashgiachP:
    "A mashgiach flies in with us and stays for the full arc — not a signature on arrival, but a presence through every meal from the first kashering to the last plate cleared. They arrive before the kitchen is built, oversee the kashering, receive each sealed delivery, and hold the keys. The supervision is continuous because a break of an hour undoes the week.",
  splitEyebrow: "Why it holds",
  splitHeading: "The method does not bend to the venue.",
  splitParas: [
    "The beauty of a fixed procedure is that the coast stops being a variable. Whether the kitchen goes up beside a beach club or a private estate, the two moving parts are identical, and identical parts are the ones we can guarantee.",
    "It is also what lets a family relax. When the mashgiach holds the keys and the cold chain is sealed, the couple can stop supervising the supervision — and spend the week being married rather than managing a kitchen.",
  ],
  pqQuote:
    "A destination kosher kitchen is not a compromise you negotiate down. It is a standard you carry with you, in a crate, on a plane, and rebuild on the sand exactly as it was at home.",
  pqCite: "Grecia Mejía · Founder",
  chuppahH: "Chuppah on the sand",
  chuppahP:
    "Once the kitchen is settled, the wedding itself is free to be beautiful. The chuppah goes up at golden hour with the sea behind it, the ketubah is signed in the shade of the palms, and the meal that follows is glatt kosher to the last plate — no one at the table would guess the kitchen behind it was built from nothing three days before.",
  statLabels: [
    "Jewish weddings planned since 2015",
    "Days to build and kasher the kitchen",
    "Hours the mashgiach is on site",
  ],
  cta: {
    script: "A private conversation —",
    heading: "Planning a kosher wedding by the sea?",
    body: "We accept fourteen weddings a year. Tell us your dates and your standard, and Grecia will write back personally within five working days.",
    ctaLabel: "Request a consultation",
  },
  tellH: "What we tell couples",
  tellP: [
    "We tell couples the same thing we tell ourselves: the kitchen comes first, and everything after it is easier. It is the same discipline that runs through all our work — the same reason we can list, honestly, the ",
    { text: "best Indian wedding venues in Punta Cana", href: IND },
    ". Get the hard, invisible thing right, and the beautiful, visible thing takes care of itself.",
  ],
};

const es: ArticleLocaleCopy = {
  title: "Kosher en la costa: una boda judía en el *Caribe*",
  excerpt:
    "Sobre construir una cocina kosher a 2.400 km del mashgiach más cercano, y la metodología que sostiene cada boda judía desde entonces.",
  kicker: "Caribe",
  lede: "Construir una cocina kosher lejos de cualquier comunidad es un problema logístico antes que religioso. El método que ideamos la primera vez sostiene hoy cada boda judía que planificamos.",
  faqs: [
    {
      question: "¿Se puede mantener una boda totalmente kosher en el Caribe?",
      answer:
        "Sí. Montamos una cocina kosher temporal en el sitio, kasherizamos el equipo bajo supervisión y traemos en avión a un mashgiach que se queda todo el arco. Es logística, no concesión: nada del estándar cambia porque la sede sea una playa.",
    },
    {
      question: "¿De dónde viene el mashgiach?",
      answer: [
        "De una autoridad certificadora con la que trabajamos desde hace años. Viaja con nosotros, llega antes de kasherizar la cocina y permanece hasta la última comida: consulta nuestra visión de las ",
        { text: "bodas judías", href: JEW },
        " para ver cómo encaja todo el calendario.",
      ],
    },
    {
      question: "¿Con cuánta antelación conviene planificar una boda kosher?",
      answer:
        "De doce a dieciocho meses. El montaje de la cocina, el calendario de supervisión y el envío de ingredientes sellados tienen plazos largos, y la temporada alta se reserva primero.",
    },
    {
      question: "¿Es posible glatt kosher en una boda de destino?",
      answer:
        "Sí, y como estándar cuando una familia lo observa. Conseguimos carne glatt por cadenas de frío selladas y coordinamos cada entrega con el mashgiach para que la cadena nunca se rompa entre el avión y el plato.",
    },
  ],
  bleedQuote: {
    script: "Tras once bodas judías —",
    quote:
      "No bajas el estándar porque la sede sea una playa. Construyes la cocina que permite viajar al estándar, y entonces la costa es solo un lugar hermoso donde mantenerlo.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const esBody: Body = {
  introP: [
    "La primera boda judía que planificamos en la costa nos enseñó más que cualquier informe. Si estás al inicio, empieza por nuestra visión de las ",
    { text: "bodas judías", href: JEW },
    " como tradición; este texto trata de lo único que quita el sueño a las parejas: cómo mantener una cocina kosher a dos mil cuatrocientos kilómetros de la autoridad supervisora más cercana.",
  ],
  kitchenH: "La cocina es el problema",
  kitchenP1:
    "Todo lo demás de una boda judía en la costa se resuelve con gusto y tiempo: la chuppah, la ketubá, la hora a medianoche. La cocina es el problema, porque una cocina kosher no es una elección de menú; es un espacio físico regido por la ley, y ningún resort de playa tiene una esperando.",
  kitchenP2:
    "La tentación es fingirlo: fiarse de la palabra de un chef, dejar pasar a un catering que dice kosher sin querer decir glatt, sin mashgiach, sin superficies kasherizadas. No lo hacemos. El estándar es el estándar, y el sentido de contratarnos es que lo sostenemos cuando sería más fácil no hacerlo.",
  featureCaption: "La chuppah al atardecer, Punta Cana",
  featureCredit: "Fotografiado en enero de 2026",
  takeH: "La versión corta",
  takeItems: [
    "Una cocina kosher es un espacio construido, no un menú: planifica primero el montaje",
    "El mashgiach viaja con nosotros y se queda todo el arco de la boda",
    "Cadenas de frío selladas llevan la carne glatt del origen al plato sin romperse",
    "De doce a dieciocho meses de plazo para una boda kosher de destino",
  ],
  methodH: "El método",
  methodP:
    "Lo que ideamos la primera vez es hoy un procedimiento fijo: dos piezas móviles que repetimos, sin cambios, en cada boda judía que planificamos. Una atañe a la sala; la otra, a la persona que la vigila.",
  kasherH: "Kasherizar en el sitio",
  kasherP:
    "Montamos una cocina kosher temporal en un espacio sellado y dedicado junto a la sede: estaciones separadas para carne y lácteos, equipo nuevo o kasherizado, provisiones selladas enviadas por adelantado. Cada superficie que toca alimentos se kasheriza bajo supervisión antes de que llegue un solo ingrediente, y el espacio se cierra entre servicios para que nada lo comprometa de noche.",
  mashgiachH: "El mashgiach viaja",
  mashgiachP:
    "Un mashgiach llega en avión con nosotros y se queda todo el arco: no una firma a la llegada, sino una presencia en cada comida, desde la primera kasherización hasta el último plato retirado. Llega antes de montar la cocina, supervisa la kasherización, recibe cada entrega sellada y guarda las llaves. La supervisión es continua porque una hora de interrupción deshace la semana.",
  splitEyebrow: "Por qué se sostiene",
  splitHeading: "El método no se pliega a la sede.",
  splitParas: [
    "La belleza de un procedimiento fijo es que la costa deja de ser una variable. Ya se monte la cocina junto a un club de playa o una finca privada, las dos piezas móviles son idénticas, y las piezas idénticas son las que podemos garantizar.",
    "Es también lo que permite que una familia se relaje. Cuando el mashgiach guarda las llaves y la cadena de frío está sellada, la pareja puede dejar de supervisar la supervisión, y pasar la semana casándose en lugar de gestionando una cocina.",
  ],
  pqQuote:
    "Una cocina kosher de destino no es una concesión que se negocia a la baja. Es un estándar que llevas contigo, en una caja, en un avión, y reconstruyes en la arena exactamente como estaba en casa.",
  pqCite: "Grecia Mejía · Fundadora",
  chuppahH: "Chuppah sobre la arena",
  chuppahP:
    "Una vez resuelta la cocina, la boda queda libre para ser hermosa. La chuppah se alza al atardecer con el mar detrás, la ketubá se firma a la sombra de las palmas, y la comida que sigue es glatt kosher hasta el último plato: nadie en la mesa adivinaría que la cocina detrás se construyó de la nada tres días antes.",
  statLabels: [
    "Bodas judías planificadas desde 2015",
    "Días para montar y kasherizar la cocina",
    "Horas que el mashgiach está en el sitio",
  ],
  cta: {
    script: "Una conversación privada —",
    heading: "¿Planeas una boda kosher junto al mar?",
    body: "Aceptamos catorce bodas al año. Cuéntanos tus fechas y tu estándar, y Grecia te responderá personalmente en cinco días laborables.",
    ctaLabel: "Solicitar una consulta",
  },
  tellH: "Lo que decimos a las parejas",
  tellP: [
    "A las parejas les decimos lo mismo que nos decimos a nosotros: la cocina va primero, y todo lo que viene después es más fácil. Es la misma disciplina que recorre todo nuestro trabajo, la misma razón por la que podemos enumerar, con honestidad, las ",
    { text: "mejores locaciones para bodas indias en Punta Cana", href: IND },
    ". Acierta con lo difícil e invisible, y lo hermoso y visible se cuida solo.",
  ],
};

const fr: ArticleLocaleCopy = {
  title: "Cacher sur la côte : un mariage juif aux *Caraïbes*",
  excerpt:
    "Sur la construction d'une cuisine cacher à 2 400 km du mashgiah le plus proche — et la méthode qui tient chaque mariage juif depuis.",
  kicker: "Caraïbes",
  lede: "Monter une cuisine cacher loin de toute communauté est d'abord un problème de logistique. La méthode trouvée la première fois tient désormais chaque mariage juif que nous organisons.",
  faqs: [
    {
      question: "Peut-on tenir un mariage entièrement cacher aux Caraïbes ?",
      answer:
        "Oui. Nous montons une cuisine cacher temporaire sur place, nous cachérisons l'équipement sous surveillance et faisons venir en avion un mashgiah qui reste tout l'arc. C'est de la logistique, pas un compromis : rien du standard ne change parce que le lieu est une plage.",
    },
    {
      question: "D'où vient le mashgiah ?",
      answer: [
        "D'une autorité de certification avec laquelle nous travaillons depuis des années. Il voyage avec nous, arrive avant la cachérisation de la cuisine et reste jusqu'au dernier repas — voir notre panorama des ",
        { text: "mariages juifs", href: JEW },
        " pour comprendre comment s'articule tout le calendrier.",
      ],
    },
    {
      question: "Combien de temps à l'avance planifier un mariage cacher ?",
      answer:
        "De douze à dix-huit mois. Le montage de la cuisine, le calendrier de surveillance et l'expédition d'ingrédients scellés ont de longs délais, et la haute saison se réserve en premier.",
    },
    {
      question: "Le glatt cacher est-il possible en mariage de destination ?",
      answer:
        "Oui, et en standard quand une famille l'observe. Nous nous approvisionnons en viande glatt par chaînes du froid scellées et coordonnons chaque livraison avec le mashgiah pour que la chaîne ne se rompe jamais entre l'avion et l'assiette.",
    },
  ],
  bleedQuote: {
    script: "Après onze mariages juifs —",
    quote:
      "On ne baisse pas le standard parce que le lieu est une plage. On construit la cuisine qui laisse voyager le standard, et alors la côte n'est qu'un bel endroit où le tenir.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const frBody: Body = {
  introP: [
    "Le premier mariage juif que nous avons organisé sur la côte nous a plus appris qu'aucun brief. Si vous débutez, commencez par notre panorama des ",
    { text: "mariages juifs", href: JEW },
    " comme tradition ; ce texte porte sur la seule chose qui empêche les couples de dormir : comment tenir une cuisine cacher à deux mille quatre cents kilomètres de l'autorité de surveillance la plus proche.",
  ],
  kitchenH: "La cuisine est le problème",
  kitchenP1:
    "Tout le reste d'un mariage juif sur la côte se règle avec du goût et du temps — la houppa, la ketouba, la hora à minuit. La cuisine est le problème, car une cuisine cacher n'est pas un choix de menu ; c'est un espace physique régi par la loi, et aucun resort de plage n'en a une qui attend.",
  kitchenP2:
    "La tentation est de faire semblant : se fier à la parole d'un chef, laisser passer un traiteur qui dit cacher sans vouloir dire glatt, sans mashgiah, sans surfaces cachérisées. Nous ne le faisons pas. Le standard est le standard, et tout l'intérêt de nous engager est que nous le tenons quand il serait plus simple de ne pas le faire.",
  featureCaption: "La houppa au crépuscule, Punta Cana",
  featureCredit: "Photographié en janvier 2026",
  takeH: "En bref",
  takeItems: [
    "Une cuisine cacher est un espace construit, pas un menu : planifiez d'abord le montage",
    "Le mashgiah voyage avec nous et reste tout l'arc du mariage",
    "Des chaînes du froid scellées portent la viande glatt de la source à l'assiette sans rupture",
    "De douze à dix-huit mois de délai pour un mariage cacher de destination",
  ],
  methodH: "La méthode",
  methodP:
    "Ce que nous avons trouvé la première fois est désormais une procédure fixe : deux pièces mobiles que nous répétons, inchangées, à chaque mariage juif. L'une concerne la pièce ; l'autre, la personne qui la surveille.",
  kasherH: "Cachériser sur place",
  kasherP:
    "Nous montons une cuisine cacher temporaire dans un espace scellé et dédié à côté du lieu — postes séparés pour la viande et le lait, équipement neuf ou cachérisé, provisions scellées expédiées à l'avance. Chaque surface qui touche la nourriture est cachérisée sous surveillance avant l'arrivée du moindre ingrédient, et l'espace est verrouillé entre les services afin que rien ne le compromette la nuit.",
  mashgiachH: "Le mashgiah voyage",
  mashgiachP:
    "Un mashgiah arrive en avion avec nous et reste tout l'arc — non pas une signature à l'arrivée, mais une présence à chaque repas, de la première cachérisation à la dernière assiette débarrassée. Il arrive avant que la cuisine soit montée, supervise la cachérisation, reçoit chaque livraison scellée et détient les clés. La surveillance est continue car une heure de rupture défait la semaine.",
  splitEyebrow: "Pourquoi elle tient",
  splitHeading: "La méthode ne plie pas au lieu.",
  splitParas: [
    "La beauté d'une procédure fixe, c'est que la côte cesse d'être une variable. Que la cuisine se monte à côté d'un beach club ou d'un domaine privé, les deux pièces mobiles sont identiques, et les pièces identiques sont celles que nous pouvons garantir.",
    "C'est aussi ce qui permet à une famille de se détendre. Quand le mashgiah détient les clés et que la chaîne du froid est scellée, le couple peut cesser de surveiller la surveillance — et passer la semaine à se marier plutôt qu'à gérer une cuisine.",
  ],
  pqQuote:
    "Une cuisine cacher de destination n'est pas un compromis que l'on négocie à la baisse. C'est un standard que l'on emporte avec soi, dans une caisse, dans un avion, et que l'on rebâtit sur le sable exactement comme il était à la maison.",
  pqCite: "Grecia Mejía · Fondatrice",
  chuppahH: "Houppa sur le sable",
  chuppahP:
    "Une fois la cuisine réglée, le mariage est libre d'être beau. La houppa s'élève au crépuscule avec la mer derrière, la ketouba se signe à l'ombre des palmiers, et le repas qui suit est glatt cacher jusqu'à la dernière assiette — personne à table ne devinerait que la cuisine derrière a été bâtie de rien trois jours plus tôt.",
  statLabels: [
    "Mariages juifs organisés depuis 2015",
    "Jours pour monter et cachériser la cuisine",
    "Heures où le mashgiah est sur place",
  ],
  cta: {
    script: "Une conversation privée —",
    heading: "Un mariage cacher au bord de mer en tête ?",
    body: "Nous acceptons quatorze mariages par an. Dites-nous vos dates et votre standard, et Grecia vous répondra personnellement sous cinq jours ouvrés.",
    ctaLabel: "Demander une consultation",
  },
  tellH: "Ce que nous disons aux couples",
  tellP: [
    "Aux couples, nous disons ce que nous nous disons : la cuisine d'abord, et tout ce qui suit est plus simple. C'est la même discipline qui traverse tout notre travail, la même raison pour laquelle nous pouvons énumérer, honnêtement, les ",
    { text: "meilleurs lieux de mariage indien à Punta Cana", href: IND },
    ". Réussissez la chose difficile et invisible, et la chose belle et visible se règle d'elle-même.",
  ],
};

const pt: ArticleLocaleCopy = {
  title: "Kosher na costa: um casamento judaico nas *Caraíbas*",
  excerpt:
    "Sobre construir uma cozinha kosher a 2.400 km do mashgiach mais próximo — e a metodologia que sustenta cada casamento judaico desde então.",
  kicker: "Caraíbas",
  lede: "Montar uma cozinha kosher longe de qualquer comunidade é primeiro um problema de logística. O método que criámos da primeira vez sustenta hoje cada casamento judaico que planeamos.",
  faqs: [
    {
      question: "É possível manter um casamento totalmente kosher nas Caraíbas?",
      answer:
        "Sim. Montamos uma cozinha kosher temporária no local, kasherizamos o equipamento sob supervisão e trazemos de avião um mashgiach que fica todo o arco. É logística, não concessão: nada do padrão muda por o local ser uma praia.",
    },
    {
      question: "De onde vem o mashgiach?",
      answer: [
        "De uma autoridade certificadora com quem trabalhamos há anos. Viaja connosco, chega antes de kasherizar a cozinha e permanece até à última refeição — veja a nossa visão dos ",
        { text: "casamentos judaicos", href: JEW },
        " para perceber como encaixa todo o calendário.",
      ],
    },
    {
      question: "Com que antecedência se deve planear um casamento kosher?",
      answer:
        "De doze a dezoito meses. A montagem da cozinha, o calendário de supervisão e o envio de ingredientes selados têm prazos longos, e a época alta reserva-se primeiro.",
    },
    {
      question: "É possível glatt kosher num casamento de destino?",
      answer:
        "Sim, e como padrão quando uma família o observa. Adquirimos carne glatt por cadeias de frio seladas e coordenamos cada entrega com o mashgiach para que a cadeia nunca se quebre entre o avião e o prato.",
    },
  ],
  bleedQuote: {
    script: "Depois de onze casamentos judaicos —",
    quote:
      "Não se baixa o padrão porque o local é uma praia. Constrói-se a cozinha que deixa o padrão viajar, e então a costa é apenas um lugar bonito onde mantê-lo.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const ptBody: Body = {
  introP: [
    "O primeiro casamento judaico que planeámos na costa ensinou-nos mais do que qualquer briefing. Se está no início, comece pela nossa visão dos ",
    { text: "casamentos judaicos", href: JEW },
    " como tradição; este texto trata da única coisa que tira o sono aos casais: como manter uma cozinha kosher a dois mil e quatrocentos quilómetros da autoridade supervisora mais próxima.",
  ],
  kitchenH: "A cozinha é o problema",
  kitchenP1:
    "Tudo o resto de um casamento judaico na costa resolve-se com gosto e tempo — a chuppah, a ketubá, a horá à meia-noite. A cozinha é o problema, porque uma cozinha kosher não é uma escolha de menu; é um espaço físico regido pela lei, e nenhum resort de praia tem uma à espera.",
  kitchenP2:
    "A tentação é fingi-lo: confiar na palavra de um chef, deixar passar um catering que diz kosher sem querer dizer glatt, sem mashgiach, sem superfícies kasherizadas. Não o fazemos. O padrão é o padrão, e o sentido de nos contratar é que o sustentamos quando seria mais fácil não o fazer.",
  featureCaption: "A chuppah ao pôr do sol, Punta Cana",
  featureCredit: "Fotografado em janeiro de 2026",
  takeH: "A versão curta",
  takeItems: [
    "Uma cozinha kosher é um espaço construído, não um menu: planeie primeiro a montagem",
    "O mashgiach viaja connosco e fica todo o arco do casamento",
    "Cadeias de frio seladas levam a carne glatt da origem ao prato sem quebra",
    "De doze a dezoito meses de prazo para um casamento kosher de destino",
  ],
  methodH: "O método",
  methodP:
    "O que criámos da primeira vez é hoje um procedimento fixo: duas peças móveis que repetimos, sem alteração, em cada casamento judaico. Uma diz respeito à sala; a outra, à pessoa que a vigia.",
  kasherH: "Kasherizar no local",
  kasherP:
    "Montamos uma cozinha kosher temporária num espaço selado e dedicado junto ao local — estações separadas para carne e lacticínios, equipamento novo ou kasherizado, provisões seladas enviadas com antecedência. Cada superfície que toca alimentos é kasherizada sob supervisão antes de chegar um único ingrediente, e o espaço é trancado entre serviços para que nada o comprometa de noite.",
  mashgiachH: "O mashgiach viaja",
  mashgiachP:
    "Um mashgiach chega de avião connosco e fica todo o arco — não uma assinatura à chegada, mas uma presença em cada refeição, da primeira kasherização ao último prato levantado. Chega antes de a cozinha ser montada, supervisiona a kasherização, recebe cada entrega selada e guarda as chaves. A supervisão é contínua porque uma hora de quebra desfaz a semana.",
  splitEyebrow: "Porque se sustenta",
  splitHeading: "O método não se dobra ao local.",
  splitParas: [
    "A beleza de um procedimento fixo é que a costa deixa de ser uma variável. Quer a cozinha se monte junto a um clube de praia ou a uma quinta privada, as duas peças móveis são idênticas, e as peças idênticas são as que podemos garantir.",
    "É também o que permite a uma família descontrair. Quando o mashgiach guarda as chaves e a cadeia de frio está selada, o casal pode deixar de supervisionar a supervisão — e passar a semana a casar em vez de gerir uma cozinha.",
  ],
  pqQuote:
    "Uma cozinha kosher de destino não é uma concessão que se negoceia em baixa. É um padrão que se leva consigo, numa caixa, num avião, e se reconstrói na areia exatamente como estava em casa.",
  pqCite: "Grecia Mejía · Fundadora",
  chuppahH: "Chuppah sobre a areia",
  chuppahP:
    "Uma vez resolvida a cozinha, o casamento fica livre para ser bonito. A chuppah ergue-se ao pôr do sol com o mar atrás, a ketubá assina-se à sombra das palmeiras, e a refeição que se segue é glatt kosher até ao último prato — ninguém à mesa adivinharia que a cozinha por trás foi construída do nada três dias antes.",
  statLabels: [
    "Casamentos judaicos planeados desde 2015",
    "Dias para montar e kasherizar a cozinha",
    "Horas em que o mashgiach está no local",
  ],
  cta: {
    script: "Uma conversa privada —",
    heading: "A planear um casamento kosher à beira-mar?",
    body: "Aceitamos catorze casamentos por ano. Diga-nos as suas datas e o seu padrão, e a Grecia responder-lhe-á pessoalmente em cinco dias úteis.",
    ctaLabel: "Pedir uma consulta",
  },
  tellH: "O que dizemos aos casais",
  tellP: [
    "Aos casais dizemos o mesmo que dizemos a nós próprios: a cozinha vem primeiro, e tudo o que vem depois é mais fácil. É a mesma disciplina que atravessa todo o nosso trabalho, a mesma razão pela qual podemos enumerar, com honestidade, os ",
    { text: "melhores locais para casamentos indianos em Punta Cana", href: IND },
    ". Acerte na coisa difícil e invisível, e a coisa bonita e visível cuida-se sozinha.",
  ],
};

const de: ArticleLocaleCopy = {
  title: "Koscher an der Küste: eine jüdische Hochzeit in der *Karibik*",
  excerpt:
    "Über den Bau einer koscheren Küche 2.400 km vom nächsten Maschgiach — und die Methode, die seither jede jüdische Hochzeit trägt.",
  kicker: "Karibik",
  lede: "Eine koschere Küche fern jeder Gemeinde aufzubauen ist zuerst ein Logistikproblem. Die Methode, die wir beim ersten Mal fanden, trägt heute jede jüdische Hochzeit, die wir planen.",
  faqs: [
    {
      question: "Lässt sich eine Hochzeit in der Karibik vollständig koscher halten?",
      answer:
        "Ja. Wir bauen vor Ort eine temporäre koschere Küche, koschern die Ausrüstung unter Aufsicht und fliegen einen Maschgiach ein, der den ganzen Bogen bleibt. Es ist Logistik, kein Kompromiss — nichts am Standard ändert sich, weil der Ort ein Strand ist.",
    },
    {
      question: "Woher kommt der Maschgiach?",
      answer: [
        "Von einer Zertifizierungsstelle, mit der wir seit Jahren arbeiten. Er reist mit uns, kommt vor dem Koschern der Küche an und bleibt bis zur letzten Mahlzeit — siehe unseren Überblick über ",
        { text: "jüdische Hochzeiten", href: JEW },
        " dazu, wie der ganze Kalender zusammenpasst.",
      ],
    },
    {
      question: "Wie weit im Voraus sollte eine koschere Hochzeit geplant werden?",
      answer:
        "Zwölf bis achtzehn Monate. Der Küchenaufbau, der Aufsichtsplan und der Versand versiegelter Zutaten haben lange Vorlaufzeiten, und die Hochsaison bucht zuerst.",
    },
    {
      question: "Ist glatt koscher bei einer Destinationshochzeit möglich?",
      answer:
        "Ja, und als Standard, wenn eine Familie es hält. Wir beziehen Glatt-Fleisch über versiegelte Kühlketten und stimmen jede Lieferung mit dem Maschgiach ab, damit die Kette zwischen Flugzeug und Teller nie bricht.",
    },
  ],
  bleedQuote: {
    script: "Nach elf jüdischen Hochzeiten —",
    quote:
      "Man senkt den Standard nicht, weil der Ort ein Strand ist. Man baut die Küche, die den Standard reisen lässt, und dann ist die Küste nur ein schöner Ort, ihn zu halten.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const deBody: Body = {
  introP: [
    "Die erste jüdische Hochzeit, die wir an der Küste planten, lehrte uns mehr als jedes Briefing. Am Anfang beginnen Sie mit unserem Überblick über ",
    { text: "jüdische Hochzeiten", href: JEW },
    " als Tradition; dieser Text handelt von dem Einen, das Paare wachhält: wie man eine Küche zweitausendvierhundert Kilometer von der nächsten Aufsichtsbehörde koscher hält.",
  ],
  kitchenH: "Die Küche ist das Problem",
  kitchenP1:
    "Alles andere an einer jüdischen Hochzeit an der Küste ist mit Geschmack und Zeit lösbar — die Chuppa, die Ketuba, die Hora um Mitternacht. Die Küche ist das Problem, denn eine koschere Küche ist keine Menüwahl; sie ist ein physischer, vom Gesetz bestimmter Raum, und kein Strandresort hat einen bereitstehen.",
  kitchenP2:
    "Die Versuchung ist, es vorzutäuschen — dem Wort eines Kochs zu trauen, einen Caterer durchzuwinken, der koscher sagt, ohne glatt zu meinen, ohne Maschgiach, ohne gekoscherte Flächen. Das tun wir nicht. Der Standard ist der Standard, und der ganze Sinn, uns zu engagieren, ist, dass wir ihn halten, wenn es leichter wäre, es nicht zu tun.",
  featureCaption: "Die Chuppa zur goldenen Stunde, Punta Cana",
  featureCredit: "Fotografiert im Januar 2026",
  takeH: "Die Kurzfassung",
  takeItems: [
    "Eine koschere Küche ist ein gebauter Raum, kein Menü — planen Sie zuerst den Aufbau",
    "Der Maschgiach reist mit uns und bleibt den ganzen Hochzeitsbogen",
    "Versiegelte Kühlketten tragen Glatt-Fleisch ungebrochen von der Quelle zum Teller",
    "Zwölf bis achtzehn Monate Vorlauf für eine koschere Destinationshochzeit",
  ],
  methodH: "Die Methode",
  methodP:
    "Was wir beim ersten Mal fanden, ist heute ein festes Verfahren: zwei bewegliche Teile, die wir unverändert bei jeder jüdischen Hochzeit wiederholen. Das eine betrifft den Raum; das andere die Person, die ihn bewacht.",
  kasherH: "Koschern vor Ort",
  kasherP:
    "Wir bauen eine temporäre koschere Küche in einem versiegelten, eigenen Raum neben dem Ort — getrennte Stationen für Fleisch und Milch, neue oder gekoscherte Ausrüstung, versiegelte, vorab versandte Vorräte. Jede Fläche, die Speisen berührt, wird unter Aufsicht gekoschert, bevor eine einzige Zutat ankommt, und der Raum wird zwischen den Services verschlossen, damit ihn über Nacht nichts kompromittiert.",
  mashgiachH: "Der Maschgiach reist",
  mashgiachP:
    "Ein Maschgiach fliegt mit uns ein und bleibt den ganzen Bogen — keine Unterschrift bei Ankunft, sondern eine Präsenz bei jeder Mahlzeit, vom ersten Koschern bis zum letzten abgeräumten Teller. Er kommt an, bevor die Küche steht, überwacht das Koschern, nimmt jede versiegelte Lieferung an und hält die Schlüssel. Die Aufsicht ist durchgehend, denn eine Stunde Unterbrechung macht die Woche zunichte.",
  splitEyebrow: "Warum sie hält",
  splitHeading: "Die Methode beugt sich nicht dem Ort.",
  splitParas: [
    "Das Schöne an einem festen Verfahren ist, dass die Küste aufhört, eine Variable zu sein. Ob die Küche neben einem Beach Club oder einem privaten Anwesen entsteht, die zwei beweglichen Teile sind identisch, und identische Teile sind die, die wir garantieren können.",
    "Es lässt auch eine Familie zur Ruhe kommen. Wenn der Maschgiach die Schlüssel hält und die Kühlkette versiegelt ist, kann das Paar aufhören, die Aufsicht zu beaufsichtigen — und die Woche damit verbringen, zu heiraten, statt eine Küche zu führen.",
  ],
  pqQuote:
    "Eine koschere Destinationsküche ist kein Kompromiss, den man herunterhandelt. Sie ist ein Standard, den man in einer Kiste, in einem Flugzeug, mit sich trägt und im Sand genau so wieder aufbaut, wie er zu Hause war.",
  pqCite: "Grecia Mejía · Gründerin",
  chuppahH: "Chuppa auf dem Sand",
  chuppahP:
    "Ist die Küche geregelt, darf die Hochzeit schön sein. Die Chuppa steigt zur goldenen Stunde mit dem Meer im Rücken empor, die Ketuba wird im Schatten der Palmen unterzeichnet, und die Mahlzeit danach ist glatt koscher bis zum letzten Teller — niemand am Tisch würde ahnen, dass die Küche dahinter drei Tage zuvor aus dem Nichts gebaut wurde.",
  statLabels: [
    "Jüdische Hochzeiten seit 2015 geplant",
    "Tage, um die Küche zu bauen und zu koschern",
    "Stunden, die der Maschgiach vor Ort ist",
  ],
  cta: {
    script: "Ein privates Gespräch —",
    heading: "Planen Sie eine koschere Hochzeit am Meer?",
    body: "Wir nehmen vierzehn Hochzeiten im Jahr an. Nennen Sie uns Ihre Termine und Ihren Standard, und Grecia antwortet Ihnen persönlich binnen fünf Werktagen.",
    ctaLabel: "Beratung anfragen",
  },
  tellH: "Was wir Paaren sagen",
  tellP: [
    "Paaren sagen wir dasselbe wie uns selbst: die Küche zuerst, und alles danach ist leichter. Es ist dieselbe Disziplin, die durch unsere ganze Arbeit läuft, derselbe Grund, warum wir ehrlich die ",
    { text: "besten indischen Hochzeits-Locations in Punta Cana", href: IND },
    " auflisten können. Bringen Sie das Schwere, Unsichtbare in Ordnung, und das Schöne, Sichtbare erledigt sich von selbst.",
  ],
};

const it: ArticleLocaleCopy = {
  title: "Kosher sulla costa: un matrimonio ebraico ai *Caraibi*",
  excerpt:
    "Sul costruire una cucina kosher a 2.400 km dal mashgiach più vicino — e il metodo che da allora regge ogni matrimonio ebraico.",
  kicker: "Caraibi",
  lede: "Allestire una cucina kosher lontano da ogni comunità è prima di tutto un problema logistico. Il metodo trovato la prima volta regge oggi ogni matrimonio ebraico che organizziamo.",
  faqs: [
    {
      question: "Si può tenere un matrimonio interamente kosher ai Caraibi?",
      answer:
        "Sì. Allestiamo sul posto una cucina kosher temporanea, kasherizziamo l'attrezzatura sotto supervisione e facciamo arrivare in aereo un mashgiach che resta per tutto l'arco. È logistica, non compromesso: nulla dello standard cambia perché la sede è una spiaggia.",
    },
    {
      question: "Da dove viene il mashgiach?",
      answer: [
        "Da un'autorità certificatrice con cui lavoriamo da anni. Viaggia con noi, arriva prima della kasherizzazione della cucina e resta fino all'ultimo pasto — vedi la nostra panoramica sui ",
        { text: "matrimoni ebraici", href: JEW },
        " per come si incastra l'intero calendario.",
      ],
    },
    {
      question: "Con quanto anticipo va pianificato un matrimonio kosher?",
      answer:
        "Da dodici a diciotto mesi. L'allestimento della cucina, il calendario di supervisione e la spedizione di ingredienti sigillati hanno tempi lunghi, e l'alta stagione prenota per prima.",
    },
    {
      question: "Il glatt kosher è possibile in un matrimonio di destinazione?",
      answer:
        "Sì, e come standard quando una famiglia lo osserva. Ci riforniamo di carne glatt tramite catene del freddo sigillate e coordiniamo ogni consegna con il mashgiach perché la catena non si spezzi mai tra l'aereo e il piatto.",
    },
  ],
  bleedQuote: {
    script: "Dopo undici matrimoni ebraici —",
    quote:
      "Non abbassi lo standard perché la sede è una spiaggia. Costruisci la cucina che fa viaggiare lo standard, e allora la costa è solo un bel posto dove mantenerlo.",
    cite: "Grecia Mejía · Punta Cana, 2026",
  },
};

const itBody: Body = {
  introP: [
    "Il primo matrimonio ebraico che abbiamo organizzato sulla costa ci ha insegnato più di qualsiasi brief. Se sei all'inizio, parti dalla nostra panoramica sui ",
    { text: "matrimoni ebraici", href: JEW },
    " come tradizione; questo testo riguarda l'unica cosa che toglie il sonno alle coppie: come tenere una cucina kosher a duemilaquattrocento chilometri dall'autorità di supervisione più vicina.",
  ],
  kitchenH: "La cucina è il problema",
  kitchenP1:
    "Tutto il resto di un matrimonio ebraico sulla costa si risolve con gusto e tempo — la chuppah, la ketubah, la hora a mezzanotte. La cucina è il problema, perché una cucina kosher non è una scelta di menù; è uno spazio fisico governato dalla legge, e nessun resort di spiaggia ne ha una pronta.",
  kitchenP2:
    "La tentazione è fingerlo: fidarsi della parola di uno chef, far passare un catering che dice kosher senza intendere glatt, senza mashgiach, senza superfici kasherizzate. Non lo facciamo. Lo standard è lo standard, e il senso di ingaggiarci è che lo teniamo quando sarebbe più facile non farlo.",
  featureCaption: "La chuppah all'ora d'oro, Punta Cana",
  featureCredit: "Fotografato a gennaio 2026",
  takeH: "In breve",
  takeItems: [
    "Una cucina kosher è uno spazio costruito, non un menù: pianifica prima l'allestimento",
    "Il mashgiach viaggia con noi e resta per tutto l'arco del matrimonio",
    "Catene del freddo sigillate portano la carne glatt dall'origine al piatto senza rotture",
    "Da dodici a diciotto mesi di anticipo per un matrimonio kosher di destinazione",
  ],
  methodH: "Il metodo",
  methodP:
    "Ciò che abbiamo trovato la prima volta è oggi una procedura fissa: due pezzi mobili che ripetiamo, immutati, a ogni matrimonio ebraico. Uno riguarda la sala; l'altro, la persona che la sorveglia.",
  kasherH: "Kasherizzare sul posto",
  kasherP:
    "Allestiamo una cucina kosher temporanea in uno spazio sigillato e dedicato accanto alla sede — postazioni separate per carne e latticini, attrezzatura nuova o kasherizzata, provviste sigillate spedite in anticipo. Ogni superficie che tocca il cibo viene kasherizzata sotto supervisione prima che arrivi un solo ingrediente, e lo spazio è chiuso a chiave tra i servizi perché nulla lo comprometta di notte.",
  mashgiachH: "Il mashgiach viaggia",
  mashgiachP:
    "Un mashgiach arriva in aereo con noi e resta per tutto l'arco — non una firma all'arrivo, ma una presenza a ogni pasto, dalla prima kasherizzazione all'ultimo piatto sparecchiato. Arriva prima che la cucina sia allestita, sovrintende alla kasherizzazione, riceve ogni consegna sigillata e tiene le chiavi. La supervisione è continua perché un'ora di interruzione disfa la settimana.",
  splitEyebrow: "Perché regge",
  splitHeading: "Il metodo non si piega alla sede.",
  splitParas: [
    "Il bello di una procedura fissa è che la costa smette di essere una variabile. Che la cucina sorga accanto a un beach club o a una tenuta privata, i due pezzi mobili sono identici, e i pezzi identici sono quelli che possiamo garantire.",
    "È anche ciò che permette a una famiglia di rilassarsi. Quando il mashgiach tiene le chiavi e la catena del freddo è sigillata, la coppia può smettere di sorvegliare la sorveglianza — e passare la settimana a sposarsi anziché a gestire una cucina.",
  ],
  pqQuote:
    "Una cucina kosher di destinazione non è un compromesso da negoziare al ribasso. È uno standard che ti porti dietro, in una cassa, su un aereo, e ricostruisci sulla sabbia esattamente com'era a casa.",
  pqCite: "Grecia Mejía · Fondatrice",
  chuppahH: "Chuppah sulla sabbia",
  chuppahP:
    "Una volta risolta la cucina, il matrimonio è libero di essere bello. La chuppah si erge all'ora d'oro con il mare alle spalle, la ketubah si firma all'ombra delle palme, e il pasto che segue è glatt kosher fino all'ultimo piatto — nessuno a tavola indovinerebbe che la cucina dietro è stata costruita dal nulla tre giorni prima.",
  statLabels: [
    "Matrimoni ebraici organizzati dal 2015",
    "Giorni per allestire e kasherizzare la cucina",
    "Ore in cui il mashgiach è sul posto",
  ],
  cta: {
    script: "Una conversazione privata —",
    heading: "Stai pensando a un matrimonio kosher sul mare?",
    body: "Accettiamo quattordici matrimoni all'anno. Dicci le date e il tuo standard, e Grecia ti risponderà personalmente entro cinque giorni lavorativi.",
    ctaLabel: "Richiedi una consulenza",
  },
  tellH: "Cosa diciamo alle coppie",
  tellP: [
    "Alle coppie diciamo la stessa cosa che diciamo a noi stessi: la cucina viene prima, e tutto ciò che segue è più facile. È la stessa disciplina che attraversa tutto il nostro lavoro, la stessa ragione per cui possiamo elencare, con onestà, le ",
    { text: "migliori sedi per matrimoni indiani a Punta Cana", href: IND },
    ". Fai bene la cosa difficile e invisibile, e la cosa bella e visibile si cura da sola.",
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
    b.h2(t.kitchenH),
    b.p(t.kitchenP1),
    b.p(t.kitchenP2),
    b.featureImage(t.featureCaption, t.featureCaption, t.featureCredit),
    b.takeaways(t.takeH, t.takeItems),
    b.h2(t.methodH),
    b.p(t.methodP),
    b.h3(t.kasherH),
    b.p(t.kasherP),
    b.h3(t.mashgiachH),
    b.p(t.mashgiachP),
    b.split({
      alt: t.splitHeading,
      eyebrow: t.splitEyebrow,
      heading: t.splitHeading,
      paragraphs: [t.splitParas[0], t.splitParas[1]],
    }),
    b.pullQuote(t.pqQuote, t.pqCite),
    b.h2(t.chuppahH),
    b.p(t.chuppahP),
    b.stats([
      { value: STAT_VALUES[0], label: t.statLabels[0] },
      { value: STAT_VALUES[1], label: t.statLabels[1] },
      { value: STAT_VALUES[2], label: t.statLabels[2] },
    ]),
    b.inlineCta({
      script: t.cta.script,
      heading: t.cta.heading,
      body: t.cta.body,
      ctaLabel: t.cta.ctaLabel,
      ctaHref: "/contact",
    }),
    b.h2(t.tellH),
    b.p(t.tellP),
  ];
};

export const article: ArticleSeed = {
  canonicalSlug: "kosher-jewish-wedding-caribbean",
  categorySlug: "jewish-weddings",
  relatedDestinationSlug: "punta-cana",
  relatedCultureSlug: "jewish-weddings",
  readMinutes: 14,
  publishedAt: "2026-02-02T09:00:00Z",
  featured: false,
  relatedArticles: [
    "best-indian-wedding-venues-punta-cana",
    "interfaith-ceremony-coast",
    "the-sangeet-night-before",
  ],
  byLocale,
  buildBody,
};
