import { type Locale } from "../../../i18n/routing";

import { PUNTA_CANA_VENUE_ORDER } from "../venueCopy/puntaCanaVenues";
import { type RegionCopy } from "./shared";

// ── Region-card stat labels (per locale) ────────────────────────────────────
type RegionLabels = {
  houses: string;
  whenToWed: string;
  weddingsHere: string;
  yearRound: string;
};

const L: Record<Locale, RegionLabels> = {
  en: { houses: "Selected houses", whenToWed: "When to wed", weddingsHere: "Weddings here", yearRound: "Year-round" },
  es: { houses: "Casas seleccionadas", whenToWed: "Cuándo casarse", weddingsHere: "Bodas aquí", yearRound: "Todo el año" },
  fr: { houses: "Maisons sélectionnées", whenToWed: "Quand se marier", weddingsHere: "Mariages ici", yearRound: "Toute l'année" },
  pt: { houses: "Casas selecionadas", whenToWed: "Quando casar", weddingsHere: "Casamentos aqui", yearRound: "O ano todo" },
  de: { houses: "Ausgewählte Häuser", whenToWed: "Wann heiraten", weddingsHere: "Hochzeiten hier", yearRound: "Ganzjährig" },
  it: { houses: "Case selezionate", whenToWed: "Quando sposarsi", weddingsHere: "Matrimoni qui", yearRound: "Tutto l'anno" },
};

// ── Region-level copy ───────────────────────────────────────────────────────
type RegionText = {
  cardBlurb: string;
  hero: RegionCopy["hero"];
  guide: Omit<RegionCopy["guide"], "subRegions" | "related"> & {
    subRegions: string[];
    related: { label: string; href?: string }[];
  };
  venuesHeadline: RegionCopy["venuesHeadline"];
  cta: RegionCopy["cta"];
};

const REGION_TEXT: Record<Locale, RegionText> = {
  en: {
    cardBlurb:
      "Three beach clubs, two private estates, four resort partners, one cathedral. The studio's home region — the venues we know best.",
    hero: {
      eyebrow: "Venues · Punta Cana",
      scriptOverline: "The houses of",
      headline: "Punta *Cana.*",
      deck: "Fourteen working houses across Cap Cana, Bávaro and Casa de Campo — the venues the studio knows by the kitchen, the gardener, and the storm protocol.",
      captionLeft: "Cap Cana · Dominican Republic",
      captionCenter: "Selected venues · 2026",
      captionRight: "Plate II",
    },
    guide: {
      sideLabel: "A note on the region",
      headline: "Three coastlines, *fourteen* houses.",
      bodyParagraphs: [
        "The wedding side of Punta Cana stretches from Cap Cana in the south up through Bávaro and into the quieter palm coast toward Macao. Each sub-region has a different character — and a different protocol.",
        "Cap Cana is the formal end: gated, private, with a calmer beach and stronger architecture. Bávaro is the resort core — most of the catering muscle, most of the capacity, the most flexible kitchens. Casa de Campo is the country-club register: estates, golf, the quieter wedding.",
        "We include a working note on the storm calendar in every venue page. Hurricane risk runs August through October — bookable, with contingencies, but we always advise against it for couples new to destination weddings.",
      ],
      subRegions: ["Cap Cana", "Bávaro", "Casa de Campo", "La Romana", "Macao Coast"],
      related: [
        { label: "Punta Cana destination guide" },
        { label: "Indian weddings in Punta Cana" },
        { label: "Jewish weddings in Punta Cana" },
        { label: "The Punta Cana cost brief" },
      ],
    },
    venuesHeadline: { eyebrow: "The fourteen", headline: "Houses, *selected.*" },
    cta: {
      eyebrow: "A private conversation —",
      headline: "*Begin* your Punta Cana venue search.",
      body: "Tell us the wedding you are imagining and a rough date. Grecia writes back with a shortlist, personally, within five working days.",
      ctaLabel: "Request a private consultation",
      ctaHref: "/contact",
    },
  },
  es: {
    cardBlurb:
      "Tres clubes de playa, dos fincas privadas, cuatro resorts asociados, una catedral. La región de origen del atelier: las sedes que mejor conocemos.",
    hero: {
      eyebrow: "Locaciones · Punta Cana",
      scriptOverline: "Las casas de",
      headline: "Punta *Cana.*",
      deck: "Catorce casas en activo entre Cap Cana, Bávaro y Casa de Campo: las sedes que el atelier conoce por la cocina, el jardinero y el protocolo de tormentas.",
      captionLeft: "Cap Cana · República Dominicana",
      captionCenter: "Locaciones seleccionadas · 2026",
      captionRight: "Lámina II",
    },
    guide: {
      sideLabel: "Una nota sobre la región",
      headline: "Tres costas, *catorce* casas.",
      bodyParagraphs: [
        "El lado nupcial de Punta Cana se extiende desde Cap Cana en el sur, pasando por Bávaro, hasta la costa de palmeras más tranquila hacia Macao. Cada subregión tiene un carácter distinto y un protocolo distinto.",
        "Cap Cana es el extremo formal: cerrado, privado, con una playa más tranquila y una arquitectura más sólida. Bávaro es el núcleo de los resorts: la mayor capacidad de catering, la mayor capacidad y las cocinas más flexibles. Casa de Campo es el registro de club de campo: fincas, golf, la boda más tranquila.",
        "Incluimos una nota práctica sobre el calendario de tormentas en cada página de sede. El riesgo de huracanes va de agosto a octubre: se puede reservar, con contingencias, pero siempre lo desaconsejamos a las parejas que se inician en las bodas de destino.",
      ],
      subRegions: ["Cap Cana", "Bávaro", "Casa de Campo", "La Romana", "Costa de Macao"],
      related: [
        { label: "Guía de destino de Punta Cana" },
        { label: "Bodas indias en Punta Cana" },
        { label: "Bodas judías en Punta Cana" },
        { label: "El informe de costes de Punta Cana" },
      ],
    },
    venuesHeadline: { eyebrow: "Las catorce", headline: "Casas, *seleccionadas.*" },
    cta: {
      eyebrow: "Una conversación privada —",
      headline: "*Comience* su búsqueda de sede en Punta Cana.",
      body: "Cuéntenos la boda que imagina y una fecha aproximada. Grecia responde con una lista, personalmente, en un plazo de cinco días laborables.",
      ctaLabel: "Solicitar una consulta privada",
      ctaHref: "/contact",
    },
  },
  fr: {
    cardBlurb:
      "Trois beach clubs, deux domaines privés, quatre resorts partenaires, une cathédrale. La région d'origine de l'atelier — les lieux que nous connaissons le mieux.",
    hero: {
      eyebrow: "Lieux · Punta Cana",
      scriptOverline: "Les maisons de",
      headline: "Punta *Cana.*",
      deck: "Quatorze maisons en activité entre Cap Cana, Bávaro et Casa de Campo — les lieux que l'atelier connaît par la cuisine, le jardinier et le protocole tempête.",
      captionLeft: "Cap Cana · République dominicaine",
      captionCenter: "Lieux sélectionnés · 2026",
      captionRight: "Planche II",
    },
    guide: {
      sideLabel: "Une note sur la région",
      headline: "Trois littoraux, *quatorze* maisons.",
      bodyParagraphs: [
        "Le versant nuptial de Punta Cana s'étend de Cap Cana au sud, en passant par Bávaro, jusqu'à la côte de palmiers plus calme vers Macao. Chaque sous-région a un caractère différent — et un protocole différent.",
        "Cap Cana est l'extrémité formelle : fermée, privée, avec une plage plus calme et une architecture plus affirmée. Bávaro est le cœur des resorts — l'essentiel de la force de restauration, de la capacité et des cuisines les plus souples. Casa de Campo est le registre country-club : domaines, golf, le mariage plus tranquille.",
        "Nous incluons une note pratique sur le calendrier des tempêtes sur chaque page de lieu. Le risque d'ouragan court d'août à octobre — réservable, avec des plans de secours, mais que nous déconseillons toujours aux couples novices du mariage de destination.",
      ],
      subRegions: ["Cap Cana", "Bávaro", "Casa de Campo", "La Romana", "Côte de Macao"],
      related: [
        { label: "Guide de destination de Punta Cana" },
        { label: "Mariages indiens à Punta Cana" },
        { label: "Mariages juifs à Punta Cana" },
        { label: "Le brief budgétaire de Punta Cana" },
      ],
    },
    venuesHeadline: { eyebrow: "Les quatorze", headline: "Maisons, *sélectionnées.*" },
    cta: {
      eyebrow: "Une conversation privée —",
      headline: "*Commencez* votre recherche de lieu à Punta Cana.",
      body: "Dites-nous le mariage que vous imaginez et une date approximative. Grecia vous répond avec une présélection, personnellement, sous cinq jours ouvrés.",
      ctaLabel: "Demander une consultation privée",
      ctaHref: "/contact",
    },
  },
  pt: {
    cardBlurb:
      "Três clubes de praia, duas propriedades privadas, quatro resorts parceiros, uma catedral. A região de origem do ateliê — os locais que melhor conhecemos.",
    hero: {
      eyebrow: "Locais · Punta Cana",
      scriptOverline: "As casas de",
      headline: "Punta *Cana.*",
      deck: "Catorze casas em atividade entre Cap Cana, Bávaro e Casa de Campo — os locais que o ateliê conhece pela cozinha, pelo jardineiro e pelo protocolo de tempestades.",
      captionLeft: "Cap Cana · República Dominicana",
      captionCenter: "Locais selecionados · 2026",
      captionRight: "Estampa II",
    },
    guide: {
      sideLabel: "Uma nota sobre a região",
      headline: "Três costas, *catorze* casas.",
      bodyParagraphs: [
        "O lado nupcial de Punta Cana estende-se de Cap Cana, a sul, passando por Bávaro, até à costa de palmeiras mais tranquila em direção a Macao. Cada sub-região tem um carácter diferente — e um protocolo diferente.",
        "Cap Cana é o extremo formal: fechado, privado, com uma praia mais calma e uma arquitetura mais forte. Bávaro é o núcleo dos resorts — a maior força de catering, a maior capacidade e as cozinhas mais flexíveis. Casa de Campo é o registo de country club: propriedades, golfe, o casamento mais tranquilo.",
        "Incluímos uma nota prática sobre o calendário de tempestades em cada página de local. O risco de furacões vai de agosto a outubro — reservável, com contingências, mas desaconselhamos sempre aos casais que se iniciam nos casamentos de destino.",
      ],
      subRegions: ["Cap Cana", "Bávaro", "Casa de Campo", "La Romana", "Costa de Macao"],
      related: [
        { label: "Guia de destino de Punta Cana" },
        { label: "Casamentos indianos em Punta Cana" },
        { label: "Casamentos judaicos em Punta Cana" },
        { label: "O resumo de custos de Punta Cana" },
      ],
    },
    venuesHeadline: { eyebrow: "As catorze", headline: "Casas, *selecionadas.*" },
    cta: {
      eyebrow: "Uma conversa privada —",
      headline: "*Comece* a sua procura de local em Punta Cana.",
      body: "Diga-nos o casamento que imagina e uma data aproximada. Grecia responde com uma lista, pessoalmente, no prazo de cinco dias úteis.",
      ctaLabel: "Solicitar uma consulta privada",
      ctaHref: "/contact",
    },
  },
  de: {
    cardBlurb:
      "Drei Beach Clubs, zwei Privatanwesen, vier Partner-Resorts, eine Kathedrale. Die Heimatregion des Ateliers — die Orte, die wir am besten kennen.",
    hero: {
      eyebrow: "Orte · Punta Cana",
      scriptOverline: "Die Häuser von",
      headline: "Punta *Cana.*",
      deck: "Vierzehn aktive Häuser zwischen Cap Cana, Bávaro und Casa de Campo — die Orte, die das Atelier nach Küche, Gärtner und Sturmprotokoll kennt.",
      captionLeft: "Cap Cana · Dominikanische Republik",
      captionCenter: "Ausgewählte Orte · 2026",
      captionRight: "Tafel II",
    },
    guide: {
      sideLabel: "Eine Anmerkung zur Region",
      headline: "Drei Küsten, *vierzehn* Häuser.",
      bodyParagraphs: [
        "Die Hochzeitsseite von Punta Cana erstreckt sich von Cap Cana im Süden über Bávaro bis zur ruhigeren Palmenküste Richtung Macao. Jede Teilregion hat einen anderen Charakter — und ein anderes Protokoll.",
        "Cap Cana ist das formelle Ende: abgeschlossen, privat, mit ruhigerem Strand und stärkerer Architektur. Bávaro ist der Resort-Kern — die meiste Catering-Kraft, die meiste Kapazität, die flexibelsten Küchen. Casa de Campo ist das Country-Club-Register: Anwesen, Golf, die ruhigere Hochzeit.",
        "Wir nehmen auf jeder Ortsseite eine praktische Anmerkung zum Sturmkalender auf. Das Hurrikanrisiko reicht von August bis Oktober — buchbar, mit Notfallplänen, aber wir raten Paaren, die zum ersten Mal eine Destinationshochzeit planen, stets davon ab.",
      ],
      subRegions: ["Cap Cana", "Bávaro", "Casa de Campo", "La Romana", "Macao-Küste"],
      related: [
        { label: "Punta-Cana-Reiseführer" },
        { label: "Indische Hochzeiten in Punta Cana" },
        { label: "Jüdische Hochzeiten in Punta Cana" },
        { label: "Das Punta-Cana-Kostenbriefing" },
      ],
    },
    venuesHeadline: { eyebrow: "Die vierzehn", headline: "Häuser, *ausgewählt.*" },
    cta: {
      eyebrow: "Ein privates Gespräch —",
      headline: "*Beginnen* Sie Ihre Ortssuche in Punta Cana.",
      body: "Sagen Sie uns, welche Hochzeit Sie sich vorstellen, und ein ungefähres Datum. Grecia antwortet persönlich mit einer Auswahl innerhalb von fünf Werktagen.",
      ctaLabel: "Eine private Beratung anfragen",
      ctaHref: "/contact",
    },
  },
  it: {
    cardBlurb:
      "Tre beach club, due tenute private, quattro resort partner, una cattedrale. La regione di origine dell'atelier — le sedi che conosciamo meglio.",
    hero: {
      eyebrow: "Sedi · Punta Cana",
      scriptOverline: "Le case di",
      headline: "Punta *Cana.*",
      deck: "Quattordici case in attività tra Cap Cana, Bávaro e Casa de Campo — le sedi che l'atelier conosce per la cucina, il giardiniere e il protocollo per le tempeste.",
      captionLeft: "Cap Cana · Repubblica Dominicana",
      captionCenter: "Sedi selezionate · 2026",
      captionRight: "Tavola II",
    },
    guide: {
      sideLabel: "Una nota sulla regione",
      headline: "Tre coste, *quattordici* case.",
      bodyParagraphs: [
        "Il versante nuziale di Punta Cana si estende da Cap Cana a sud, attraverso Bávaro, fino alla costa di palme più tranquilla verso Macao. Ogni sotto-regione ha un carattere diverso — e un protocollo diverso.",
        "Cap Cana è l'estremità formale: recintata, privata, con una spiaggia più tranquilla e un'architettura più decisa. Bávaro è il cuore dei resort — la maggior forza di catering, la maggior capienza, le cucine più flessibili. Casa de Campo è il registro country-club: tenute, golf, il matrimonio più tranquillo.",
        "Includiamo una nota pratica sul calendario delle tempeste in ogni pagina di sede. Il rischio di uragani va da agosto a ottobre — prenotabile, con piani di riserva, ma lo sconsigliamo sempre alle coppie alle prime armi con i matrimoni di destinazione.",
      ],
      subRegions: ["Cap Cana", "Bávaro", "Casa de Campo", "La Romana", "Costa di Macao"],
      related: [
        { label: "Guida di destinazione di Punta Cana" },
        { label: "Matrimoni indiani a Punta Cana" },
        { label: "Matrimoni ebraici a Punta Cana" },
        { label: "Il brief sui costi di Punta Cana" },
      ],
    },
    venuesHeadline: { eyebrow: "Le quattordici", headline: "Case, *selezionate.*" },
    cta: {
      eyebrow: "Una conversazione privata —",
      headline: "*Iniziate* la vostra ricerca di sede a Punta Cana.",
      body: "Diteci il matrimonio che immaginate e una data approssimativa. Grecia risponde con una rosa di proposte, personalmente, entro cinque giorni lavorativi.",
      ctaLabel: "Richiedere una consulenza privata",
      ctaHref: "/contact",
    },
  },
};

// ── Assemble per-locale RegionCopy ──────────────────────────────────────────
export const PUNTA_CANA: Record<Locale, RegionCopy> = Object.fromEntries(
  (["en", "es", "fr", "pt", "de", "it"] as Locale[]).map((locale) => {
    const lab = L[locale];
    const rt = REGION_TEXT[locale];
    const copy: RegionCopy = {
      name: "Punta Cana",
      cardBlurb: rt.cardBlurb,
      cardMeta: [
        { label: lab.houses, useVenueCount: true },
        { value: lab.yearRound, label: lab.whenToWed },
        { value: "120+", label: lab.weddingsHere },
      ],
      hero: rt.hero,
      guide: {
        sideLabel: rt.guide.sideLabel,
        headline: rt.guide.headline,
        bodyParagraphs: rt.guide.bodyParagraphs,
        subRegions: rt.guide.subRegions.map((label) => ({ label })),
        related: rt.guide.related,
      },
      venuesHeadline: rt.venuesHeadline,
      venues: PUNTA_CANA_VENUE_ORDER,
      cta: rt.cta,
    };
    return [locale, copy];
  }),
) as Record<Locale, RegionCopy>;
