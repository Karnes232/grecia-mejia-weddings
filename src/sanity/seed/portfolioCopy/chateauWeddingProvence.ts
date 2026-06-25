import { type Locale } from "../../../i18n/routing";

import { type PortfolioCopy } from "./shared";

/** Camille & Laurent — European · Provence · Château de la Croix. */
export const chateauWeddingProvence: Record<Locale, PortfolioCopy> = {
  en: {
    name: "Camille & Laurent",
    filterTags: ["European", "Mediterranean"],
    cardMeta: "European · Provence · 140 guests · 2025",
    cardBlurb:
      "A two-day Provençal wedding in a château ringed by lavender — a civil ceremony, a long table, and a single open-air dinner.",
    hero: {
      eyebrow: "Case Study · European · Provence",
      scriptOverline: "Camille & Laurent",
      headline: "A château in the *lavender.*",
      sub: "Provence, France · September 2025 · 140 guests",
      captionLeft: "Photographed by M. Aubert",
      captionCenter: "The long table at dusk · Château de la Croix",
      captionRight: "Plate I",
    },
    guests: "One hundred & forty",
    duration: "Two days · three events",
    season: "September 2025",
    story: {
      sideEyebrow: "The couple",
      sideNote:
        "Camille, from Paris. Laurent, from Lyon. They wanted nothing imported — a French wedding, in France, that felt like a long dinner among people they loved.",
      headline: "Paris and Lyon, married in *Provence.*",
      lede: "Camille and Laurent asked for restraint: one venue, one long table, one unhurried evening. The hardest brief we are given is the simple one done perfectly.",
      body: [
        "The château had been in Laurent's family on his mother's side; we restored the kitchen garden, opened the south terrace, and seated all one hundred and forty at a single table beneath the planes.",
        "A civil ceremony at the mairie in the morning, an aperitif in the lavender at five, dinner that ran until the candles burned down. Nothing more, and nothing less.",
      ],
    },
    quote: {
      quote:
        "We asked for one perfect evening and she gave us two perfect days. It was our home, only better — as if the house had finally been used for what it was built for.",
      cite: "Camille & Laurent · September 2025",
    },
    design: {
      eyebrow: "The design concept",
      headline: "Lavender & *stone.*",
      body: [
        "The château gave us everything: pale stone, grey shutters, the silver of the olives. We added only what the land already grew — lavender, rosemary, and roses cut that morning.",
        "One long oak table for one hundred and forty, dressed in unbleached linen, lit by four hundred taper candles and nothing electric after dark.",
      ],
      palette: [
        { hex: "#efe9dc", name: "Linen" },
        { hex: "#b9a6c4", name: "Lavender" },
        { hex: "#cbb68a", name: "Wheat" },
        { hex: "#8a8f7a", name: "Olive grey" },
        { hex: "#5b5345", name: "Stone" },
      ],
    },
    logistics: {
      eyebrow: "Behind the wedding",
      headline: "The *logistics.*",
      deck: "Two days, one hundred and forty guests, one table, no marquee. The restraint took the most work.",
      blocks: [
        {
          title: "The table",
          body: "A single sixty-metre oak table milled for the wedding, seating one hundred and forty under the plane trees, with a wet-weather plan inside the orangery.",
          rows: [
            { label: "Seating", value: "140 · one table" },
            { label: "Length", value: "60 metres of oak" },
            { label: "Light", value: "400 tapers · no electric" },
          ],
        },
        {
          title: "The catering",
          body: "A Michelin-trained chef from Avignon cooked a single tasting menu of the region, paired with the family's own wine.",
          rows: [
            { label: "Menu", value: "One tasting · Provençal" },
            { label: "Wine", value: "Family estate" },
            { label: "Service", value: "Plated · 14 staff" },
          ],
        },
        {
          title: "The day",
          body: "Civil ceremony at the mairie, aperitif in the lavender field, dinner at the long table — a single, slow arc with no transfers.",
          rows: [
            { label: "Ceremony", value: "Civil · mairie" },
            { label: "Events", value: "Three · over two days" },
            { label: "Languages", value: "French · English" },
          ],
        },
      ],
    },
    services: {
      eyebrow: "Services used",
      headline: "What the studio *held.*",
      deck: "Every part of this wedding ran through the studio. Nothing was sub-contracted past our team.",
      items: [
        { number: "01", title: "Destination Wedding Planning", body: "Eighteen months of quiet preparation for a deliberately simple day." },
        { number: "02", title: "Venue Sourcing", body: "Restoring a family château to host a single open-air dinner for one hundred and forty." },
        { number: "03", title: "Wedding Design", body: "Lavender, stone and linen — and four hundred candles after dark." },
        { number: "04", title: "Event Production", body: "A sixty-metre table, an orangery contingency, and a wet-weather plan never needed." },
      ],
    },
    related: { eyebrow: "Continue reading", headline: "Related *writing.*" },
    cta: {
      eyebrow: "A private conversation —",
      headline: "Let us write *your* story.",
      body: "We accept fourteen weddings a year. If yours might be one of them, Grecia writes back personally within five working days.",
      ctaLabel: "Request a private consultation →",
    },
  },

  es: {
    name: "Camille & Laurent",
    filterTags: ["Europea", "Mediterráneo"],
    cardMeta: "Europea · Provenza · 140 invitados · 2025",
    cardBlurb:
      "Una boda provenzal de dos días en un château rodeado de lavanda — una ceremonia civil, una mesa larga y una única cena al aire libre.",
    hero: {
      eyebrow: "Caso de estudio · Europea · Provenza",
      scriptOverline: "Camille & Laurent",
      headline: "Un château entre la *lavanda.*",
      sub: "Provenza, Francia · Septiembre de 2025 · 140 invitados",
      captionLeft: "Fotografiado por M. Aubert",
      captionCenter: "La mesa larga al anochecer · Château de la Croix",
      captionRight: "Lámina I",
    },
    guests: "Ciento cuarenta",
    duration: "Dos días · tres eventos",
    season: "Septiembre de 2025",
    story: {
      sideEyebrow: "La pareja",
      sideNote:
        "Camille, de París. Laurent, de Lyon. No querían nada importado — una boda francesa, en Francia, que se sintiera como una larga cena entre seres queridos.",
      headline: "París y Lyon, casados en *Provenza.*",
      lede: "Camille y Laurent pidieron contención: un solo lugar, una sola mesa larga, una velada sin prisa. El encargo más difícil es el sencillo hecho a la perfección.",
      body: [
        "El château pertenecía a la familia de Laurent por parte de madre; restauramos el huerto, abrimos la terraza sur y sentamos a los ciento cuarenta en una sola mesa bajo los plátanos.",
        "Una ceremonia civil en la mairie por la mañana, un aperitivo entre la lavanda a las cinco, una cena que se prolongó hasta que se consumieron las velas. Nada más, y nada menos.",
      ],
    },
    quote: {
      quote:
        "Pedimos una velada perfecta y nos dio dos días perfectos. Fue nuestro hogar, solo que mejor — como si la casa por fin se usara para lo que fue construida.",
      cite: "Camille & Laurent · Septiembre de 2025",
    },
    design: {
      eyebrow: "El concepto de diseño",
      headline: "Lavanda y *piedra.*",
      body: [
        "El château nos lo dio todo: piedra pálida, contraventanas grises, la plata de los olivos. Solo añadimos lo que la tierra ya cultivaba — lavanda, romero y rosas cortadas esa mañana.",
        "Una sola mesa larga de roble para ciento cuarenta, vestida con lino crudo, iluminada por cuatrocientas velas y nada eléctrico tras el anochecer.",
      ],
      palette: [
        { hex: "#efe9dc", name: "Lino" },
        { hex: "#b9a6c4", name: "Lavanda" },
        { hex: "#cbb68a", name: "Trigo" },
        { hex: "#8a8f7a", name: "Gris oliva" },
        { hex: "#5b5345", name: "Piedra" },
      ],
    },
    logistics: {
      eyebrow: "Tras la boda",
      headline: "La *logística.*",
      deck: "Dos días, ciento cuarenta invitados, una mesa, sin carpa. La contención fue lo que más trabajo dio.",
      blocks: [
        {
          title: "La mesa",
          body: "Una única mesa de roble de sesenta metros fabricada para la boda, para ciento cuarenta comensales bajo los plátanos, con plan de lluvia en la orangerie.",
          rows: [
            { label: "Comensales", value: "140 · una mesa" },
            { label: "Longitud", value: "60 metros de roble" },
            { label: "Luz", value: "400 velas · sin electricidad" },
          ],
        },
        {
          title: "El catering",
          body: "Un chef con formación Michelin de Aviñón cocinó un único menú degustación de la región, maridado con el vino de la propia familia.",
          rows: [
            { label: "Menú", value: "Una degustación · provenzal" },
            { label: "Vino", value: "Finca familiar" },
            { label: "Servicio", value: "Emplatado · 14 personas" },
          ],
        },
        {
          title: "El día",
          body: "Ceremonia civil en la mairie, aperitivo en el campo de lavanda, cena en la mesa larga — un único arco lento sin traslados.",
          rows: [
            { label: "Ceremonia", value: "Civil · mairie" },
            { label: "Eventos", value: "Tres · en dos días" },
            { label: "Idiomas", value: "Francés · inglés" },
          ],
        },
      ],
    },
    services: {
      eyebrow: "Servicios utilizados",
      headline: "Lo que el atelier *sostuvo.*",
      deck: "Cada parte de esta boda pasó por el atelier. Nada se subcontrató más allá de nuestro equipo.",
      items: [
        { number: "01", title: "Planificación de Bodas de Destino", body: "Dieciocho meses de preparación silenciosa para un día deliberadamente sencillo." },
        { number: "02", title: "Búsqueda de Locaciones", body: "Restaurar un château familiar para una única cena al aire libre para ciento cuarenta." },
        { number: "03", title: "Diseño de Bodas", body: "Lavanda, piedra y lino — y cuatrocientas velas tras el anochecer." },
        { number: "04", title: "Producción de Eventos", body: "Una mesa de sesenta metros, una orangerie de respaldo y un plan de lluvia nunca necesario." },
      ],
    },
    related: { eyebrow: "Seguir leyendo", headline: "Lecturas *relacionadas.*" },
    cta: {
      eyebrow: "Una conversación privada —",
      headline: "Déjanos escribir *tu* historia.",
      body: "Aceptamos catorce bodas al año. Si la tuya pudiera ser una de ellas, Grecia responde personalmente en cinco días laborables.",
      ctaLabel: "Solicitar una consulta privada →",
    },
  },

  fr: {
    name: "Camille & Laurent",
    filterTags: ["Européen", "Méditerranée"],
    cardMeta: "Européen · Provence · 140 invités · 2025",
    cardBlurb:
      "Un mariage provençal de deux jours dans un château cerné de lavande — une cérémonie civile, une longue table, un seul dîner en plein air.",
    hero: {
      eyebrow: "Étude de cas · Européen · Provence",
      scriptOverline: "Camille & Laurent",
      headline: "Un château dans la *lavande.*",
      sub: "Provence, France · Septembre 2025 · 140 invités",
      captionLeft: "Photographié par M. Aubert",
      captionCenter: "La longue table au crépuscule · Château de la Croix",
      captionRight: "Planche I",
    },
    guests: "Cent quarante",
    duration: "Deux jours · trois événements",
    season: "Septembre 2025",
    story: {
      sideEyebrow: "Le couple",
      sideNote:
        "Camille, de Paris. Laurent, de Lyon. Ils ne voulaient rien d'importé — un mariage français, en France, comme un long dîner entre êtres chers.",
      headline: "Paris et Lyon, mariés en *Provence.*",
      lede: "Camille et Laurent ont demandé de la retenue : un seul lieu, une seule longue table, une soirée sans hâte. Le brief le plus difficile est le simple, exécuté à la perfection.",
      body: [
        "Le château appartenait à la famille de Laurent du côté maternel ; nous avons restauré le potager, ouvert la terrasse sud et installé les cent quarante à une seule table sous les platanes.",
        "Une cérémonie civile à la mairie le matin, un apéritif dans la lavande à cinq heures, un dîner qui dura jusqu'à ce que les bougies s'éteignent. Rien de plus, rien de moins.",
      ],
    },
    quote: {
      quote:
        "Nous avons demandé une soirée parfaite et elle nous a offert deux jours parfaits. C'était notre maison, en mieux — comme si elle servait enfin à ce pour quoi elle avait été bâtie.",
      cite: "Camille & Laurent · Septembre 2025",
    },
    design: {
      eyebrow: "Le concept de design",
      headline: "Lavande & *pierre.*",
      body: [
        "Le château nous a tout donné : pierre pâle, volets gris, l'argent des oliviers. Nous n'avons ajouté que ce que la terre cultivait déjà — lavande, romarin et roses coupées le matin même.",
        "Une seule longue table de chêne pour cent quarante, habillée de lin écru, éclairée par quatre cents bougies et rien d'électrique après la tombée de la nuit.",
      ],
      palette: [
        { hex: "#efe9dc", name: "Lin" },
        { hex: "#b9a6c4", name: "Lavande" },
        { hex: "#cbb68a", name: "Blé" },
        { hex: "#8a8f7a", name: "Gris olive" },
        { hex: "#5b5345", name: "Pierre" },
      ],
    },
    logistics: {
      eyebrow: "Dans les coulisses",
      headline: "La *logistique.*",
      deck: "Deux jours, cent quarante invités, une table, sans chapiteau. La retenue a demandé le plus de travail.",
      blocks: [
        {
          title: "La table",
          body: "Une unique table de chêne de soixante mètres façonnée pour le mariage, pour cent quarante convives sous les platanes, avec un plan de repli dans l'orangerie.",
          rows: [
            { label: "Convives", value: "140 · une table" },
            { label: "Longueur", value: "60 mètres de chêne" },
            { label: "Lumière", value: "400 bougies · sans électricité" },
          ],
        },
        {
          title: "Le traiteur",
          body: "Un chef formé en étoile, d'Avignon, a cuisiné un unique menu dégustation de la région, accordé au vin du domaine familial.",
          rows: [
            { label: "Menu", value: "Une dégustation · provençal" },
            { label: "Vin", value: "Domaine familial" },
            { label: "Service", value: "À l'assiette · 14 personnes" },
          ],
        },
        {
          title: "La journée",
          body: "Cérémonie civile à la mairie, apéritif dans le champ de lavande, dîner à la longue table — une trame unique et lente, sans transferts.",
          rows: [
            { label: "Cérémonie", value: "Civile · mairie" },
            { label: "Événements", value: "Trois · sur deux jours" },
            { label: "Langues", value: "Français · anglais" },
          ],
        },
      ],
    },
    services: {
      eyebrow: "Services utilisés",
      headline: "Ce que l'atelier a *porté.*",
      deck: "Chaque partie de ce mariage est passée par l'atelier. Rien n'a été sous-traité au-delà de notre équipe.",
      items: [
        { number: "01", title: "Organisation de Mariage de Destination", body: "Dix-huit mois de préparation discrète pour une journée volontairement simple." },
        { number: "02", title: "Recherche de Lieux", body: "Restaurer un château familial pour un seul dîner en plein air de cent quarante couverts." },
        { number: "03", title: "Design de Mariage", body: "Lavande, pierre et lin — et quatre cents bougies à la tombée de la nuit." },
        { number: "04", title: "Production Événementielle", body: "Une table de soixante mètres, une orangerie de secours et un plan pluie jamais utilisé." },
      ],
    },
    related: { eyebrow: "Poursuivre la lecture", headline: "Lectures *liées.*" },
    cta: {
      eyebrow: "Une conversation privée —",
      headline: "Laissez-nous écrire *votre* histoire.",
      body: "Nous acceptons quatorze mariages par an. Si le vôtre pourrait en faire partie, Grecia vous répond personnellement sous cinq jours ouvrés.",
      ctaLabel: "Demander une consultation privée →",
    },
  },

  pt: {
    name: "Camille & Laurent",
    filterTags: ["Europeu", "Mediterrâneo"],
    cardMeta: "Europeu · Provença · 140 convidados · 2025",
    cardBlurb:
      "Um casamento provençal de dois dias num château rodeado de lavanda — uma cerimónia civil, uma mesa longa e um único jantar ao ar livre.",
    hero: {
      eyebrow: "Estudo de caso · Europeu · Provença",
      scriptOverline: "Camille & Laurent",
      headline: "Um château na *lavanda.*",
      sub: "Provença, França · Setembro de 2025 · 140 convidados",
      captionLeft: "Fotografado por M. Aubert",
      captionCenter: "A mesa longa ao anoitecer · Château de la Croix",
      captionRight: "Estampa I",
    },
    guests: "Cento e quarenta",
    duration: "Dois dias · três eventos",
    season: "Setembro de 2025",
    story: {
      sideEyebrow: "O casal",
      sideNote:
        "Camille, de Paris. Laurent, de Lyon. Não queriam nada importado — um casamento francês, em França, que parecesse um longo jantar entre pessoas queridas.",
      headline: "Paris e Lyon, casados na *Provença.*",
      lede: "Camille e Laurent pediram contenção: um só local, uma só mesa longa, uma noite sem pressa. O encargo mais difícil é o simples feito na perfeição.",
      body: [
        "O château pertencia à família de Laurent por parte da mãe; restaurámos a horta, abrimos o terraço sul e sentámos os cento e quarenta a uma só mesa sob os plátanos.",
        "Uma cerimónia civil na mairie de manhã, um aperitivo na lavanda às cinco, um jantar que se prolongou até as velas se consumirem. Nada mais, e nada menos.",
      ],
    },
    quote: {
      quote:
        "Pedimos uma noite perfeita e deu-nos dois dias perfeitos. Foi a nossa casa, só que melhor — como se a casa fosse finalmente usada para aquilo para que foi construída.",
      cite: "Camille & Laurent · Setembro de 2025",
    },
    design: {
      eyebrow: "O conceito de design",
      headline: "Lavanda e *pedra.*",
      body: [
        "O château deu-nos tudo: pedra pálida, portadas cinzentas, a prata das oliveiras. Acrescentámos apenas o que a terra já cultivava — lavanda, alecrim e rosas cortadas nessa manhã.",
        "Uma só mesa longa de carvalho para cento e quarenta, vestida de linho cru, iluminada por quatrocentas velas e nada elétrico depois do anoitecer.",
      ],
      palette: [
        { hex: "#efe9dc", name: "Linho" },
        { hex: "#b9a6c4", name: "Lavanda" },
        { hex: "#cbb68a", name: "Trigo" },
        { hex: "#8a8f7a", name: "Cinza-oliva" },
        { hex: "#5b5345", name: "Pedra" },
      ],
    },
    logistics: {
      eyebrow: "Nos bastidores",
      headline: "A *logística.*",
      deck: "Dois dias, cento e quarenta convidados, uma mesa, sem tenda. A contenção foi o que mais trabalho deu.",
      blocks: [
        {
          title: "A mesa",
          body: "Uma única mesa de carvalho de sessenta metros feita para o casamento, para cento e quarenta convidados sob os plátanos, com plano de chuva na orangerie.",
          rows: [
            { label: "Convidados", value: "140 · uma mesa" },
            { label: "Comprimento", value: "60 metros de carvalho" },
            { label: "Luz", value: "400 velas · sem eletricidade" },
          ],
        },
        {
          title: "O catering",
          body: "Um chef com formação Michelin de Avinhão cozinhou um único menu de degustação da região, harmonizado com o vinho da própria família.",
          rows: [
            { label: "Menu", value: "Uma degustação · provençal" },
            { label: "Vinho", value: "Quinta da família" },
            { label: "Serviço", value: "Empratado · 14 pessoas" },
          ],
        },
        {
          title: "O dia",
          body: "Cerimónia civil na mairie, aperitivo no campo de lavanda, jantar na mesa longa — um único arco lento, sem transferes.",
          rows: [
            { label: "Cerimónia", value: "Civil · mairie" },
            { label: "Eventos", value: "Três · em dois dias" },
            { label: "Línguas", value: "Francês · inglês" },
          ],
        },
      ],
    },
    services: {
      eyebrow: "Serviços utilizados",
      headline: "O que o ateliê *sustentou.*",
      deck: "Cada parte deste casamento passou pelo ateliê. Nada foi subcontratado para além da nossa equipa.",
      items: [
        { number: "01", title: "Planeamento de Casamentos de Destino", body: "Dezoito meses de preparação discreta para um dia deliberadamente simples." },
        { number: "02", title: "Seleção de Locais", body: "Restaurar um château de família para um único jantar ao ar livre para cento e quarenta." },
        { number: "03", title: "Design de Casamentos", body: "Lavanda, pedra e linho — e quatrocentas velas depois do anoitecer." },
        { number: "04", title: "Produção de Eventos", body: "Uma mesa de sessenta metros, uma orangerie de reserva e um plano de chuva nunca necessário." },
      ],
    },
    related: { eyebrow: "Continuar a ler", headline: "Leituras *relacionadas.*" },
    cta: {
      eyebrow: "Uma conversa privada —",
      headline: "Deixe-nos escrever a *sua* história.",
      body: "Aceitamos catorze casamentos por ano. Se o seu puder ser um deles, Grecia responde pessoalmente em cinco dias úteis.",
      ctaLabel: "Solicitar uma consulta privada →",
    },
  },

  de: {
    name: "Camille & Laurent",
    filterTags: ["Europäisch", "Mittelmeer"],
    cardMeta: "Europäisch · Provence · 140 Gäste · 2025",
    cardBlurb:
      "Eine zweitägige provenzalische Hochzeit in einem von Lavendel umgebenen Château — eine standesamtliche Trauung, eine lange Tafel, ein einziges Dinner unter freiem Himmel.",
    hero: {
      eyebrow: "Fallstudie · Europäisch · Provence",
      scriptOverline: "Camille & Laurent",
      headline: "Ein Château im *Lavendel.*",
      sub: "Provence, Frankreich · September 2025 · 140 Gäste",
      captionLeft: "Fotografiert von M. Aubert",
      captionCenter: "Die lange Tafel in der Dämmerung · Château de la Croix",
      captionRight: "Tafel I",
    },
    guests: "Einhundertvierzig",
    duration: "Zwei Tage · drei Programmpunkte",
    season: "September 2025",
    story: {
      sideEyebrow: "Das Paar",
      sideNote:
        "Camille, aus Paris. Laurent, aus Lyon. Sie wollten nichts Importiertes — eine französische Hochzeit, in Frankreich, wie ein langes Dinner unter geliebten Menschen.",
      headline: "Paris und Lyon, getraut in der *Provence.*",
      lede: "Camille und Laurent baten um Zurückhaltung: ein Ort, eine lange Tafel, ein ungehetzter Abend. Das schwierigste Briefing ist das einfache, perfekt umgesetzt.",
      body: [
        "Das Château gehörte Laurents Familie mütterlicherseits; wir stellten den Küchengarten her, öffneten die Südterrasse und setzten alle einhundertvierzig an eine einzige Tafel unter die Platanen.",
        "Eine standesamtliche Trauung in der Mairie am Morgen, ein Aperitif im Lavendel um fünf, ein Dinner, das dauerte, bis die Kerzen niederbrannten. Nicht mehr und nicht weniger.",
      ],
    },
    quote: {
      quote:
        "Wir baten um einen perfekten Abend, und sie schenkte uns zwei perfekte Tage. Es war unser Zuhause, nur besser — als würde das Haus endlich für das genutzt, wofür es gebaut wurde.",
      cite: "Camille & Laurent · September 2025",
    },
    design: {
      eyebrow: "Das Gestaltungskonzept",
      headline: "Lavendel & *Stein.*",
      body: [
        "Das Château gab uns alles: blasser Stein, graue Fensterläden, das Silber der Olivenbäume. Wir fügten nur hinzu, was das Land ohnehin wachsen ließ — Lavendel, Rosmarin und Rosen, am Morgen geschnitten.",
        "Eine einzige lange Eichentafel für einhundertvierzig, mit ungebleichtem Leinen gedeckt, von vierhundert Kerzen beleuchtet und nichts Elektrischem nach Einbruch der Dunkelheit.",
      ],
      palette: [
        { hex: "#efe9dc", name: "Leinen" },
        { hex: "#b9a6c4", name: "Lavendel" },
        { hex: "#cbb68a", name: "Weizen" },
        { hex: "#8a8f7a", name: "Olivgrau" },
        { hex: "#5b5345", name: "Stein" },
      ],
    },
    logistics: {
      eyebrow: "Hinter der Hochzeit",
      headline: "Die *Logistik.*",
      deck: "Zwei Tage, einhundertvierzig Gäste, eine Tafel, kein Zelt. Die Zurückhaltung kostete die meiste Arbeit.",
      blocks: [
        {
          title: "Die Tafel",
          body: "Eine einzige, sechzig Meter lange Eichentafel, für die Hochzeit gefertigt, für einhundertvierzig Gäste unter den Platanen, mit Schlechtwetterplan in der Orangerie.",
          rows: [
            { label: "Plätze", value: "140 · eine Tafel" },
            { label: "Länge", value: "60 Meter Eiche" },
            { label: "Licht", value: "400 Kerzen · ohne Strom" },
          ],
        },
        {
          title: "Das Catering",
          body: "Ein sternegeschulter Koch aus Avignon kochte ein einziges Degustationsmenü der Region, begleitet vom eigenen Wein der Familie.",
          rows: [
            { label: "Menü", value: "Eine Degustation · provenzalisch" },
            { label: "Wein", value: "Familiengut" },
            { label: "Service", value: "Tellerserviert · 14 Personen" },
          ],
        },
        {
          title: "Der Tag",
          body: "Standesamtliche Trauung in der Mairie, Aperitif im Lavendelfeld, Dinner an der langen Tafel — ein einziger, langsamer Bogen ohne Transfers.",
          rows: [
            { label: "Trauung", value: "Standesamtlich · Mairie" },
            { label: "Programmpunkte", value: "Drei · über zwei Tage" },
            { label: "Sprachen", value: "Französisch · Englisch" },
          ],
        },
      ],
    },
    services: {
      eyebrow: "Genutzte Leistungen",
      headline: "Was das Atelier *trug.*",
      deck: "Jeder Teil dieser Hochzeit lief durch das Atelier. Nichts wurde über unser Team hinaus vergeben.",
      items: [
        { number: "01", title: "Zielhochzeitsplanung", body: "Achtzehn Monate stiller Vorbereitung für einen bewusst schlichten Tag." },
        { number: "02", title: "Locationsuche", body: "Ein Familien-Château herrichten für ein einziges Dinner unter freiem Himmel für einhundertvierzig." },
        { number: "03", title: "Hochzeitsdesign", body: "Lavendel, Stein und Leinen — und vierhundert Kerzen nach Einbruch der Dunkelheit." },
        { number: "04", title: "Eventproduktion", body: "Eine sechzig Meter lange Tafel, eine Orangerie als Rückfallebene und ein nie gebrauchter Schlechtwetterplan." },
      ],
    },
    related: { eyebrow: "Weiterlesen", headline: "Verwandte *Texte.*" },
    cta: {
      eyebrow: "Ein privates Gespräch —",
      headline: "Lassen Sie uns *Ihre* Geschichte schreiben.",
      body: "Wir nehmen vierzehn Hochzeiten im Jahr an. Wenn Ihre dazugehören könnte, antwortet Grecia persönlich innerhalb von fünf Werktagen.",
      ctaLabel: "Privates Gespräch anfragen →",
    },
  },

  it: {
    name: "Camille & Laurent",
    filterTags: ["Europeo", "Mediterraneo"],
    cardMeta: "Europeo · Provenza · 140 invitati · 2025",
    cardBlurb:
      "Un matrimonio provenzale di due giorni in uno château circondato dalla lavanda — una cerimonia civile, una lunga tavolata, un'unica cena all'aperto.",
    hero: {
      eyebrow: "Caso studio · Europeo · Provenza",
      scriptOverline: "Camille & Laurent",
      headline: "Uno château nella *lavanda.*",
      sub: "Provenza, Francia · Settembre 2025 · 140 invitati",
      captionLeft: "Fotografato da M. Aubert",
      captionCenter: "La lunga tavolata al tramonto · Château de la Croix",
      captionRight: "Tavola I",
    },
    guests: "Centoquaranta",
    duration: "Due giorni · tre eventi",
    season: "Settembre 2025",
    story: {
      sideEyebrow: "La coppia",
      sideNote:
        "Camille, di Parigi. Laurent, di Lione. Non volevano nulla di importato — un matrimonio francese, in Francia, come una lunga cena tra persone amate.",
      headline: "Parigi e Lione, sposi in *Provenza.*",
      lede: "Camille e Laurent hanno chiesto misura: un solo luogo, una sola lunga tavolata, una serata senza fretta. Il brief più difficile è quello semplice, eseguito alla perfezione.",
      body: [
        "Lo château apparteneva alla famiglia di Laurent per parte di madre; abbiamo restaurato l'orto, aperto la terrazza sud e fatto sedere tutti e centoquaranta a un'unica tavolata sotto i platani.",
        "Una cerimonia civile alla mairie al mattino, un aperitivo nella lavanda alle cinque, una cena durata finché le candele non si sono consumate. Nulla di più, e nulla di meno.",
      ],
    },
    quote: {
      quote:
        "Abbiamo chiesto una serata perfetta e ci ha regalato due giornate perfette. Era casa nostra, solo migliore — come se la casa fosse finalmente usata per ciò per cui era stata costruita.",
      cite: "Camille & Laurent · Settembre 2025",
    },
    design: {
      eyebrow: "Il concept di design",
      headline: "Lavanda e *pietra.*",
      body: [
        "Lo château ci ha dato tutto: pietra chiara, persiane grigie, l'argento degli ulivi. Abbiamo aggiunto solo ciò che la terra già coltivava — lavanda, rosmarino e rose tagliate quella mattina.",
        "Un'unica lunga tavolata di rovere per centoquaranta, vestita di lino grezzo, illuminata da quattrocento candele e nulla di elettrico dopo il buio.",
      ],
      palette: [
        { hex: "#efe9dc", name: "Lino" },
        { hex: "#b9a6c4", name: "Lavanda" },
        { hex: "#cbb68a", name: "Grano" },
        { hex: "#8a8f7a", name: "Grigio oliva" },
        { hex: "#5b5345", name: "Pietra" },
      ],
    },
    logistics: {
      eyebrow: "Dietro il matrimonio",
      headline: "La *logistica.*",
      deck: "Due giorni, centoquaranta invitati, una tavolata, senza tensostruttura. La misura ha richiesto il lavoro maggiore.",
      blocks: [
        {
          title: "La tavolata",
          body: "Un'unica tavolata di rovere di sessanta metri realizzata per il matrimonio, per centoquaranta commensali sotto i platani, con piano pioggia nell'orangerie.",
          rows: [
            { label: "Commensali", value: "140 · una tavolata" },
            { label: "Lunghezza", value: "60 metri di rovere" },
            { label: "Luce", value: "400 candele · senza elettricità" },
          ],
        },
        {
          title: "Il catering",
          body: "Uno chef di formazione stellata, da Avignone, ha cucinato un unico menù degustazione della regione, in abbinamento al vino della famiglia.",
          rows: [
            { label: "Menù", value: "Una degustazione · provenzale" },
            { label: "Vino", value: "Tenuta di famiglia" },
            { label: "Servizio", value: "Al piatto · 14 persone" },
          ],
        },
        {
          title: "La giornata",
          body: "Cerimonia civile alla mairie, aperitivo nel campo di lavanda, cena alla lunga tavolata — un unico arco lento, senza transfer.",
          rows: [
            { label: "Cerimonia", value: "Civile · mairie" },
            { label: "Eventi", value: "Tre · in due giorni" },
            { label: "Lingue", value: "Francese · inglese" },
          ],
        },
      ],
    },
    services: {
      eyebrow: "Servizi utilizzati",
      headline: "Ciò che l'atelier ha *retto.*",
      deck: "Ogni parte di questo matrimonio è passata per l'atelier. Nulla è stato subappaltato oltre il nostro team.",
      items: [
        { number: "01", title: "Organizzazione Matrimoni di Destinazione", body: "Diciotto mesi di preparazione discreta per una giornata volutamente semplice." },
        { number: "02", title: "Ricerca Location", body: "Restaurare uno château di famiglia per un'unica cena all'aperto per centoquaranta." },
        { number: "03", title: "Design di Matrimoni", body: "Lavanda, pietra e lino — e quattrocento candele dopo il buio." },
        { number: "04", title: "Produzione Eventi", body: "Una tavolata di sessanta metri, un'orangerie di riserva e un piano pioggia mai usato." },
      ],
    },
    related: { eyebrow: "Continua a leggere", headline: "Letture *correlate.*" },
    cta: {
      eyebrow: "Una conversazione privata —",
      headline: "Lascia che scriviamo la *tua* storia.",
      body: "Accettiamo quattordici matrimoni all'anno. Se il tuo potrebbe essere uno di questi, Grecia risponde personalmente entro cinque giorni lavorativi.",
      ctaLabel: "Richiedi una consulenza privata →",
    },
  },
};
