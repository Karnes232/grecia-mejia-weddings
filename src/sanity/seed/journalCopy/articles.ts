/**
 * The 9 sample Journal articles. Document ids are keyed by the canonical English
 * slug. Each article's title/excerpt/kicker/lede are translated to all six
 * locales; references (category, destination, culture, venue, related articles)
 * resolve to the established deterministic ids per locale.
 *
 * Slugs are NOT translated here (sample data uses the canonical EN slug across
 * locales) — the route machinery uses translated slugs only where a SLUGS table
 * exists; this throwaway scaffolding keeps article slugs locale-invariant.
 */

import { type Locale } from "../../../i18n/routing";

export type ArticleLocaleCopy = {
  /** May use *word* for one italic accent. */
  title: string;
  excerpt: string;
  /** Second eyebrow half — omit (undefined) for article #9. */
  kicker?: string;
  /** ONE short body paragraph. */
  lede: string;
};

export type ArticleSeed = {
  canonicalSlug: string;
  /** Canonical category slug → articleCategory-<slug>-<locale>. */
  categorySlug: string;
  /** Always punta-cana for this sample set. */
  relatedDestinationSlug: string;
  relatedCultureSlug?: string;
  relatedVenueSlug?: string;
  readMinutes: number;
  publishedAt: string;
  featured: boolean;
  /** 3 canonical slugs from the other eight articles. */
  relatedArticles: string[];
  byLocale: Record<Locale, ArticleLocaleCopy>;
};

export const ARTICLES: ArticleSeed[] = [
  {
    canonicalSlug: "best-indian-wedding-venues-punta-cana",
    categorySlug: "indian-weddings",
    relatedDestinationSlug: "punta-cana",
    relatedCultureSlug: "indian-weddings",
    relatedVenueSlug: "jellyfish-restaurant",
    readMinutes: 12,
    publishedAt: "2026-03-01T09:00:00Z",
    featured: true,
    relatedArticles: [
      "luxury-punta-cana-wedding-cost",
      "the-sangeet-night-before",
      "beach-wedding-contingencies",
    ],
    byLocale: {
      en: {
        title: "Best Indian Wedding *Venues* in Punta Cana",
        excerpt:
          "A working register of the resorts and beach clubs that hold a 300-guest baraat with grace — capacity, kitchens, and the storm calendar.",
        kicker: "Punta Cana",
        lede: "Not every beach can carry a baraat. We list only the venues whose kitchens, capacity and weather windows we have tested with our own weddings.",
      },
      es: {
        title: "Las mejores *locaciones* para bodas indias en Punta Cana",
        excerpt:
          "Un registro práctico de los resorts y clubes de playa que acogen un baraat de 300 invitados con gracia: capacidad, cocinas y calendario de tormentas.",
        kicker: "Punta Cana",
        lede: "No toda playa puede sostener un baraat. Solo incluimos las sedes cuyas cocinas, capacidad y ventanas climáticas hemos probado con nuestras propias bodas.",
      },
      fr: {
        title: "Les meilleurs *lieux* de mariage indien à Punta Cana",
        excerpt:
          "Un registre vivant des resorts et beach clubs qui accueillent un baraat de 300 invités avec grâce — capacité, cuisines et calendrier des tempêtes.",
        kicker: "Punta Cana",
        lede: "Toutes les plages ne peuvent porter un baraat. Nous n'inscrivons que les lieux dont nous avons éprouvé la cuisine, la capacité et la fenêtre météo avec nos propres mariages.",
      },
      pt: {
        title: "Os melhores *locais* para casamentos indianos em Punta Cana",
        excerpt:
          "Um registo prático dos resorts e clubes de praia que acolhem um baraat de 300 convidados com graça — capacidade, cozinhas e calendário de tempestades.",
        kicker: "Punta Cana",
        lede: "Nem toda a praia aguenta um baraat. Só incluímos os locais cujas cozinhas, capacidade e janelas climáticas testámos com os nossos próprios casamentos.",
      },
      de: {
        title: "Die besten indischen Hochzeits-*Locations* in Punta Cana",
        excerpt:
          "Ein praktisches Register der Resorts und Beach Clubs, die einen 300-Gäste-Baraat mit Anmut tragen — Kapazität, Küchen und der Sturmkalender.",
        kicker: "Punta Cana",
        lede: "Nicht jeder Strand trägt einen Baraat. Wir führen nur Orte, deren Küche, Kapazität und Wetterfenster wir mit eigenen Hochzeiten erprobt haben.",
      },
      it: {
        title: "Le migliori *sedi* per matrimoni indiani a Punta Cana",
        excerpt:
          "Un registro pratico dei resort e beach club che accolgono un baraat di 300 invitati con grazia — capienza, cucine e calendario delle tempeste.",
        kicker: "Punta Cana",
        lede: "Non ogni spiaggia regge un baraat. Inseriamo solo le sedi di cui abbiamo provato cucina, capienza e finestra meteo con i nostri matrimoni.",
      },
    },
  },
  {
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
    byLocale: {
      en: {
        title: "What a Luxury Punta Cana Wedding Actually *Costs*",
        excerpt:
          "A frank breakdown of 2026 budgets by guest count, with line-item ranges nobody else will put in writing.",
        kicker: "Punta Cana",
        lede: "The honest number depends on guest count, season and how much you bring in. Here are the ranges we quote couples, line by line, with nothing hidden.",
      },
      es: {
        title: "Lo que *cuesta* de verdad una boda de lujo en Punta Cana",
        excerpt:
          "Un desglose franco de los presupuestos de 2026 por número de invitados, con rangos por partida que nadie más pone por escrito.",
        kicker: "Punta Cana",
        lede: "La cifra honesta depende del número de invitados, la temporada y cuánto se trae de fuera. Estos son los rangos que damos a las parejas, partida por partida, sin nada oculto.",
      },
      fr: {
        title: "Ce que *coûte* vraiment un mariage de luxe à Punta Cana",
        excerpt:
          "Une décomposition franche des budgets 2026 selon le nombre d'invités, avec des fourchettes par poste que personne d'autre ne met par écrit.",
        kicker: "Punta Cana",
        lede: "Le chiffre honnête dépend du nombre d'invités, de la saison et de ce que vous faites venir. Voici les fourchettes que nous donnons aux couples, poste par poste, sans rien cacher.",
      },
      pt: {
        title: "Quanto *custa* mesmo um casamento de luxo em Punta Cana",
        excerpt:
          "Uma análise franca dos orçamentos de 2026 por número de convidados, com intervalos por rubrica que mais ninguém põe por escrito.",
        kicker: "Punta Cana",
        lede: "O número honesto depende do número de convidados, da época e do que se traz de fora. Estes são os intervalos que damos aos casais, rubrica a rubrica, sem nada escondido.",
      },
      de: {
        title: "Was eine Luxushochzeit in Punta Cana wirklich *kostet*",
        excerpt:
          "Eine offene Aufschlüsselung der 2026er Budgets nach Gästezahl, mit Posten-Spannen, die sonst niemand schriftlich nennt.",
        kicker: "Punta Cana",
        lede: "Die ehrliche Zahl hängt von Gästezahl, Saison und Mitgebrachtem ab. Hier sind die Spannen, die wir Paaren nennen — Posten für Posten, ohne Versteckspiel.",
      },
      it: {
        title: "Quanto *costa* davvero un matrimonio di lusso a Punta Cana",
        excerpt:
          "Un'analisi schietta dei budget 2026 per numero di invitati, con fasce per voce che nessun altro mette per iscritto.",
        kicker: "Punta Cana",
        lede: "Il numero onesto dipende dal numero di invitati, dalla stagione e da quanto si porta da fuori. Ecco le fasce che diamo alle coppie, voce per voce, senza nulla di nascosto.",
      },
    },
  },
  {
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
    byLocale: {
      en: {
        title: "Kosher on the Coast: A Jewish Wedding in the *Caribbean*",
        excerpt:
          "On building a kosher kitchen 1,500 miles from the nearest mashgiach — and the methodology that holds every Jewish wedding since.",
        kicker: "Caribbean",
        lede: "Building a kosher kitchen far from any community is a logistics problem before it is a religious one. The method we worked out the first time now holds every Jewish wedding we plan.",
      },
      es: {
        title: "Kosher en la costa: una boda judía en el *Caribe*",
        excerpt:
          "Sobre construir una cocina kosher a 2.400 km del mashgiach más cercano, y la metodología que sostiene cada boda judía desde entonces.",
        kicker: "Caribe",
        lede: "Construir una cocina kosher lejos de cualquier comunidad es un problema logístico antes que religioso. El método que ideamos la primera vez sostiene hoy cada boda judía que planificamos.",
      },
      fr: {
        title: "Cacher sur la côte : un mariage juif aux *Caraïbes*",
        excerpt:
          "Sur la construction d'une cuisine cacher à 2 400 km du mashgiah le plus proche — et la méthode qui tient chaque mariage juif depuis.",
        kicker: "Caraïbes",
        lede: "Monter une cuisine cacher loin de toute communauté est d'abord un problème de logistique. La méthode trouvée la première fois tient désormais chaque mariage juif que nous organisons.",
      },
      pt: {
        title: "Kosher na costa: um casamento judaico nas *Caraíbas*",
        excerpt:
          "Sobre construir uma cozinha kosher a 2.400 km do mashgiach mais próximo — e a metodologia que sustenta cada casamento judaico desde então.",
        kicker: "Caraíbas",
        lede: "Montar uma cozinha kosher longe de qualquer comunidade é primeiro um problema de logística. O método que criámos da primeira vez sustenta hoje cada casamento judaico que planeamos.",
      },
      de: {
        title: "Koscher an der Küste: eine jüdische Hochzeit in der *Karibik*",
        excerpt:
          "Über den Bau einer koscheren Küche 2.400 km vom nächsten Maschgiach — und die Methode, die seither jede jüdische Hochzeit trägt.",
        kicker: "Karibik",
        lede: "Eine koschere Küche fern jeder Gemeinde aufzubauen ist zuerst ein Logistikproblem. Die Methode, die wir beim ersten Mal fanden, trägt heute jede jüdische Hochzeit, die wir planen.",
      },
      it: {
        title: "Kosher sulla costa: un matrimonio ebraico ai *Caraibi*",
        excerpt:
          "Sul costruire una cucina kosher a 2.400 km dal mashgiach più vicino — e il metodo che da allora regge ogni matrimonio ebraico.",
        kicker: "Caraibi",
        lede: "Allestire una cucina kosher lontano da ogni comunità è prima di tutto un problema logistico. Il metodo trovato la prima volta regge oggi ogni matrimonio ebraico che organizziamo.",
      },
    },
  },
  {
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
    byLocale: {
      en: {
        title: "The Sangeet: Why the Night *Before* Matters More",
        excerpt:
          "On the rehearsal that is no longer a rehearsal, and how it has become the most-photographed evening of the weekend.",
        kicker: "Planning",
        lede: "The sangeet stopped being a rehearsal years ago. Today it is the loosest, warmest, most-photographed night of the weekend — and we plan it that way on purpose.",
      },
      es: {
        title: "El sangeet: por qué la noche *anterior* importa más",
        excerpt:
          "Sobre el ensayo que ya no es un ensayo, y cómo se ha convertido en la velada más fotografiada del fin de semana.",
        kicker: "Planificación",
        lede: "El sangeet dejó de ser un ensayo hace años. Hoy es la noche más distendida, cálida y fotografiada del fin de semana, y la planificamos así a propósito.",
      },
      fr: {
        title: "Le sangeet : pourquoi la veille *compte* davantage",
        excerpt:
          "Sur la répétition qui n'en est plus une, et comment elle est devenue la soirée la plus photographiée du week-end.",
        kicker: "Organisation",
        lede: "Le sangeet a cessé d'être une répétition il y a longtemps. C'est aujourd'hui la soirée la plus détendue, la plus chaleureuse et la plus photographiée du week-end, et nous la pensons ainsi à dessein.",
      },
      pt: {
        title: "O sangeet: porque a noite *anterior* importa mais",
        excerpt:
          "Sobre o ensaio que já não é um ensaio, e como se tornou o serão mais fotografado do fim de semana.",
        kicker: "Planeamento",
        lede: "O sangeet deixou de ser um ensaio há anos. Hoje é a noite mais descontraída, calorosa e fotografada do fim de semana, e planeamo-la assim de propósito.",
      },
      de: {
        title: "Der Sangeet: Warum der Abend *davor* mehr zählt",
        excerpt:
          "Über die Probe, die keine Probe mehr ist, und wie sie zum meistfotografierten Abend des Wochenendes wurde.",
        kicker: "Planung",
        lede: "Der Sangeet ist seit Jahren keine Probe mehr. Heute ist er der lockerste, wärmste, meistfotografierte Abend des Wochenendes — und wir planen ihn bewusst so.",
      },
      it: {
        title: "Il sangeet: perché la sera *prima* conta di più",
        excerpt:
          "Sulla prova che non è più una prova, e su come sia diventata la serata più fotografata del fine settimana.",
        kicker: "Pianificazione",
        lede: "Il sangeet ha smesso di essere una prova anni fa. Oggi è la serata più rilassata, calorosa e fotografata del fine settimana, e la pianifichiamo così di proposito.",
      },
    },
  },
  {
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
    byLocale: {
      en: {
        title: "When to Wed on the *Amalfi Coast*",
        excerpt:
          "A month-by-month guide to light, heat, and the cadence of Positano weddings — and the two weeks we never book.",
        kicker: "Italy",
        lede: "The Amalfi Coast reads differently in May than in September. Here is the month-by-month case for each window, and the two weeks of August we quietly refuse.",
      },
      es: {
        title: "Cuándo casarse en la *Costa de Amalfi*",
        excerpt:
          "Una guía mes a mes sobre la luz, el calor y el ritmo de las bodas en Positano, y las dos semanas que nunca reservamos.",
        kicker: "Italia",
        lede: "La Costa de Amalfi se lee distinta en mayo que en septiembre. Aquí va el argumento mes a mes para cada ventana, y las dos semanas de agosto que rechazamos en silencio.",
      },
      fr: {
        title: "Quand se marier sur la *côte amalfitaine*",
        excerpt:
          "Un guide mois par mois sur la lumière, la chaleur et le rythme des mariages de Positano — et les deux semaines que nous ne réservons jamais.",
        kicker: "Italie",
        lede: "La côte amalfitaine ne se lit pas en mai comme en septembre. Voici l'argument mois par mois pour chaque fenêtre, et les deux semaines d'août que nous refusons discrètement.",
      },
      pt: {
        title: "Quando casar na *Costa Amalfitana*",
        excerpt:
          "Um guia mês a mês sobre a luz, o calor e o ritmo dos casamentos em Positano — e as duas semanas que nunca reservamos.",
        kicker: "Itália",
        lede: "A Costa Amalfitana lê-se de modo diferente em maio e em setembro. Aqui fica o argumento mês a mês para cada janela, e as duas semanas de agosto que recusamos em silêncio.",
      },
      de: {
        title: "Wann man an der *Amalfiküste* heiratet",
        excerpt:
          "Ein Monat-für-Monat-Leitfaden zu Licht, Hitze und dem Takt der Positano-Hochzeiten — und die zwei Wochen, die wir nie buchen.",
        kicker: "Italien",
        lede: "Die Amalfiküste liest sich im Mai anders als im September. Hier das Monat-für-Monat-Argument für jedes Fenster — und die zwei Augustwochen, die wir still ablehnen.",
      },
      it: {
        title: "Quando sposarsi in *Costiera Amalfitana*",
        excerpt:
          "Una guida mese per mese su luce, caldo e ritmo dei matrimoni a Positano — e le due settimane che non prenotiamo mai.",
        kicker: "Italia",
        lede: "La Costiera Amalfitana si legge diversa a maggio e a settembre. Ecco l'argomento mese per mese per ogni finestra, e le due settimane di agosto che rifiutiamo in silenzio.",
      },
    },
  },
  {
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
    byLocale: {
      en: {
        title: "Two Clergy, One Ceremony: *Interfaith* on the Coast",
        excerpt:
          "How we structure interfaith ritual arcs — without compromise, without contradiction, without anyone feeling like a guest at their own wedding.",
        kicker: "Interfaith",
        lede: "An interfaith ceremony is not a negotiation; it is choreography. We build a single arc that lets two traditions speak in full, in turn, without either side feeling abridged.",
      },
      es: {
        title: "Dos oficiantes, una ceremonia: *interreligiosa* en la costa",
        excerpt:
          "Cómo estructuramos los arcos rituales interreligiosos: sin concesiones, sin contradicción, sin que nadie se sienta invitado en su propia boda.",
        kicker: "Interreligiosa",
        lede: "Una ceremonia interreligiosa no es una negociación; es coreografía. Construimos un único arco que deja hablar a las dos tradiciones por completo, por turnos, sin que ninguna se sienta recortada.",
      },
      fr: {
        title: "Deux officiants, une cérémonie : *interconfessionnel* sur la côte",
        excerpt:
          "Comment nous structurons les arcs rituels interconfessionnels — sans compromis, sans contradiction, sans que personne ne se sente invité à son propre mariage.",
        kicker: "Interconfessionnel",
        lede: "Une cérémonie interconfessionnelle n'est pas une négociation ; c'est une chorégraphie. Nous bâtissons un arc unique qui laisse les deux traditions s'exprimer pleinement, tour à tour, sans que l'une se sente abrégée.",
      },
      pt: {
        title: "Dois celebrantes, uma cerimónia: *inter-religiosa* na costa",
        excerpt:
          "Como estruturamos os arcos rituais inter-religiosos — sem cedências, sem contradição, sem ninguém se sentir convidado no seu próprio casamento.",
        kicker: "Inter-religiosa",
        lede: "Uma cerimónia inter-religiosa não é uma negociação; é coreografia. Construímos um único arco que deixa as duas tradições falarem por inteiro, à vez, sem nenhuma se sentir reduzida.",
      },
      de: {
        title: "Zwei Geistliche, eine Zeremonie: *interreligiös* an der Küste",
        excerpt:
          "Wie wir interreligiöse Ritualbögen strukturieren — ohne Kompromiss, ohne Widerspruch, ohne dass sich jemand als Gast bei der eigenen Hochzeit fühlt.",
        kicker: "Interreligiös",
        lede: "Eine interreligiöse Zeremonie ist keine Verhandlung, sondern Choreografie. Wir bauen einen einzigen Bogen, der beide Traditionen voll und im Wechsel sprechen lässt, ohne dass eine sich beschnitten fühlt.",
      },
      it: {
        title: "Due officianti, una cerimonia: *interreligiosa* sulla costa",
        excerpt:
          "Come strutturiamo gli archi rituali interreligiosi — senza compromessi, senza contraddizione, senza che nessuno si senta ospite al proprio matrimonio.",
        kicker: "Interreligiosa",
        lede: "Una cerimonia interreligiosa non è una trattativa; è coreografia. Costruiamo un unico arco che lascia parlare per intero le due tradizioni, a turno, senza che nessuna si senta ridotta.",
      },
    },
  },
  {
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
    byLocale: {
      en: {
        title: "When the Tide Comes In: Beach Wedding *Contingencies*",
        excerpt:
          "How we plan beach ceremonies that survive the unexpected — the tide tables, the tent we never show the couple, and the 4pm rule.",
        kicker: "Logistics",
        lede: "Every beach ceremony we plan has a second ceremony hidden behind it. The tide tables, the standby tent, and the 4pm rule are why the couple never has to know.",
      },
      es: {
        title: "Cuando sube la marea: *contingencias* de una boda en la playa",
        excerpt:
          "Cómo planificamos ceremonias en la playa que sobreviven a lo imprevisto: las tablas de mareas, la carpa que nunca mostramos a la pareja y la regla de las 16 h.",
        kicker: "Logística",
        lede: "Cada ceremonia en la playa que planificamos lleva detrás una segunda ceremonia oculta. Las tablas de mareas, la carpa de reserva y la regla de las 16 h son la razón por la que la pareja nunca tiene que enterarse.",
      },
      fr: {
        title: "Quand la marée monte : *plans B* d'un mariage sur la plage",
        excerpt:
          "Comment nous planifions des cérémonies sur la plage qui survivent à l'imprévu — les tables de marées, la tente qu'on ne montre jamais au couple et la règle de 16 h.",
        kicker: "Logistique",
        lede: "Chaque cérémonie sur la plage que nous planifions en cache une seconde. Les tables de marées, la tente de secours et la règle de 16 h font que le couple n'a jamais à le savoir.",
      },
      pt: {
        title: "Quando a maré sobe: *planos B* de um casamento na praia",
        excerpt:
          "Como planeamos cerimónias na praia que sobrevivem ao imprevisto — as tabelas de marés, a tenda que nunca mostramos ao casal e a regra das 16h.",
        kicker: "Logística",
        lede: "Cada cerimónia na praia que planeamos esconde uma segunda cerimónia atrás de si. As tabelas de marés, a tenda de reserva e a regra das 16h são a razão pela qual o casal nunca precisa de saber.",
      },
      de: {
        title: "Wenn die Flut kommt: *Notfallpläne* für die Strandhochzeit",
        excerpt:
          "Wie wir Strandzeremonien planen, die das Unerwartete überstehen — die Gezeitentabellen, das Zelt, das wir dem Paar nie zeigen, und die 16-Uhr-Regel.",
        kicker: "Logistik",
        lede: "Hinter jeder Strandzeremonie, die wir planen, steht eine zweite, verborgene. Gezeitentabellen, Ersatzzelt und die 16-Uhr-Regel sorgen dafür, dass das Paar es nie erfahren muss.",
      },
      it: {
        title: "Quando sale la marea: *piani B* di un matrimonio in spiaggia",
        excerpt:
          "Come pianifichiamo cerimonie in spiaggia che sopravvivono all'imprevisto — le tavole delle maree, il tendone che non mostriamo mai agli sposi e la regola delle 16.",
        kicker: "Logistica",
        lede: "Dietro ogni cerimonia in spiaggia che pianifichiamo se ne nasconde una seconda. Le tavole delle maree, il tendone di riserva e la regola delle 16 fanno sì che gli sposi non debbano mai saperlo.",
      },
    },
  },
  {
    canonicalSlug: "single-stem-centrepiece",
    categorySlug: "wedding-design",
    relatedDestinationSlug: "punta-cana",
    readMinutes: 6,
    publishedAt: "2025-11-20T09:00:00Z",
    featured: false,
    relatedArticles: [
      "when-to-wed-amalfi-coast",
      "welcome-party-second-star",
      "the-sangeet-night-before",
    ],
    byLocale: {
      en: {
        title: "The Quiet Return of the *Single-Stem* Centrepiece",
        excerpt:
          "Why the most expensive tablescape of 2026 looks like almost nothing at all — and the discipline it takes to get there.",
        kicker: "Trends",
        lede: "The single stem looks like restraint and reads like confidence. Reaching that emptiness, it turns out, costs more than the crowded tables it replaced.",
      },
      es: {
        title: "El regreso silencioso del centro de mesa de *un solo tallo*",
        excerpt:
          "Por qué la mesa más cara de 2026 parece casi nada, y la disciplina que hace falta para lograrlo.",
        kicker: "Tendencias",
        lede: "El tallo único parece contención y se lee como confianza. Llegar a ese vacío, resulta, cuesta más que las mesas recargadas que sustituyó.",
      },
      fr: {
        title: "Le retour discret du centre de table à *tige unique*",
        excerpt:
          "Pourquoi la table la plus chère de 2026 ne ressemble presque à rien — et la discipline qu'il faut pour y parvenir.",
        kicker: "Tendances",
        lede: "La tige unique a l'air de retenue et se lit comme de l'assurance. Atteindre ce vide coûte, en réalité, plus cher que les tables chargées qu'elle remplace.",
      },
      pt: {
        title: "O regresso discreto do centro de mesa de *haste única*",
        excerpt:
          "Porque a mesa mais cara de 2026 parece quase nada — e a disciplina que é precisa para lá chegar.",
        kicker: "Tendências",
        lede: "A haste única parece contenção e lê-se como confiança. Chegar a esse vazio, afinal, custa mais do que as mesas cheias que substituiu.",
      },
      de: {
        title: "Die leise Rückkehr des *Einzelstiel*-Tafelschmucks",
        excerpt:
          "Warum die teuerste Tafel 2026 fast nach nichts aussieht — und welche Disziplin es kostet, dahin zu kommen.",
        kicker: "Trends",
        lede: "Der einzelne Stiel wirkt wie Zurückhaltung und liest sich wie Selbstsicherheit. Diese Leere zu erreichen kostet, wie sich zeigt, mehr als die überladenen Tische, die sie ersetzt.",
      },
      it: {
        title: "Il ritorno silenzioso del centrotavola a *stelo singolo*",
        excerpt:
          "Perché la tavola più costosa del 2026 sembra quasi nulla — e la disciplina che serve per arrivarci.",
        kicker: "Tendenze",
        lede: "Lo stelo singolo sembra misura e si legge come sicurezza. Raggiungere quel vuoto, a conti fatti, costa più dei tavoli affollati che ha sostituito.",
      },
    },
  },
  {
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
    byLocale: {
      en: {
        title: "The Welcome Party: Your Wedding's Second *Star*",
        excerpt:
          "Why the night-before reception has quietly become the most important event of a destination wedding weekend.",
        lede: "Guests fly in tense and tired. The welcome party is where the weekend actually begins — and where, more and more, the warmest memories are made.",
      },
      es: {
        title: "La fiesta de bienvenida: la segunda *estrella* de tu boda",
        excerpt:
          "Por qué la recepción de la noche anterior se ha convertido, en silencio, en el evento más importante de un fin de semana de boda de destino.",
        lede: "Los invitados llegan tensos y cansados. La fiesta de bienvenida es donde el fin de semana empieza de verdad, y donde, cada vez más, nacen los recuerdos más cálidos.",
      },
      fr: {
        title: "La soirée d'accueil : la seconde *vedette* de votre mariage",
        excerpt:
          "Pourquoi la réception de la veille est devenue, discrètement, l'événement le plus important d'un week-end de mariage de destination.",
        lede: "Les invités arrivent tendus et fatigués. La soirée d'accueil est le vrai début du week-end — et, de plus en plus, le lieu des souvenirs les plus chaleureux.",
      },
      pt: {
        title: "A festa de boas-vindas: a segunda *estrela* do seu casamento",
        excerpt:
          "Porque a receção da véspera se tornou, em silêncio, o evento mais importante de um fim de semana de casamento de destino.",
        lede: "Os convidados chegam tensos e cansados. A festa de boas-vindas é onde o fim de semana realmente começa — e onde, cada vez mais, nascem as memórias mais calorosas.",
      },
      de: {
        title: "Die Welcome-Party: der zweite *Star* Ihrer Hochzeit",
        excerpt:
          "Warum der Empfang am Vorabend still zum wichtigsten Ereignis eines Destination-Hochzeitswochenendes geworden ist.",
        lede: "Gäste landen angespannt und müde. Die Welcome-Party ist, wo das Wochenende wirklich beginnt — und wo immer öfter die wärmsten Erinnerungen entstehen.",
      },
      it: {
        title: "Il welcome party: la seconda *stella* del tuo matrimonio",
        excerpt:
          "Perché il ricevimento della sera prima è diventato, in silenzio, l'evento più importante di un fine settimana di matrimonio di destinazione.",
        lede: "Gli ospiti arrivano tesi e stanchi. Il welcome party è dove il fine settimana comincia davvero — e dove, sempre più spesso, nascono i ricordi più caldi.",
      },
    },
  },
];
