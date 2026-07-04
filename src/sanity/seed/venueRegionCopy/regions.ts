import { type Locale } from "../../../i18n/routing";

import { type RegionCopy, type RegionSlug } from "./shared";

/**
 * The six non-Punta-Cana regions, seeded as hub-ready stubs: card copy + hero +
 * a short region guide + CTA, with an empty venue list to be filled in later.
 */

type StubSlug = Exclude<RegionSlug, "punta-cana">;

// ── Locale-invariant facts ──────────────────────────────────────────────────
const FACTS: Record<
  StubSlug,
  { weddings: string; season: string | null }
> = {
  italy: { weddings: "38", season: "May – Oct" },
  france: { weddings: "22", season: "May – Sep" },
  spain: { weddings: "18", season: "May – Oct" },
  "caribbean-islands": { weddings: "16", season: "Nov – Apr" },
  "united-states": { weddings: "12", season: null }, // "Variable"
  greece: { weddings: "8", season: "May – Oct" },
};

// ── Per-locale display names ─────────────────────────────────────────────────
const NAMES: Record<StubSlug, Record<Locale, string>> = {
  italy: {
    en: "Italy",
    es: "Italia",
    fr: "Italie",
    pt: "Itália",
    de: "Italien",
    it: "Italia",
  },
  france: {
    en: "France",
    es: "Francia",
    fr: "France",
    pt: "França",
    de: "Frankreich",
    it: "Francia",
  },
  spain: {
    en: "Spain",
    es: "España",
    fr: "Espagne",
    pt: "Espanha",
    de: "Spanien",
    it: "Spagna",
  },
  "caribbean-islands": {
    en: "Caribbean Islands",
    es: "Islas del Caribe",
    fr: "Îles des Caraïbes",
    pt: "Ilhas das Caraíbas",
    de: "Karibische Inseln",
    it: "Isole caraibiche",
  },
  "united-states": {
    en: "United States",
    es: "Estados Unidos",
    fr: "États-Unis",
    pt: "Estados Unidos",
    de: "Vereinigte Staaten",
    it: "Stati Uniti",
  },
  greece: {
    en: "Greece",
    es: "Grecia",
    fr: "Grèce",
    pt: "Grécia",
    de: "Griechenland",
    it: "Grecia",
  },
};

// ── Per-locale card blurbs (also used as the hero deck + guide opener) ───────
const BLURBS: Record<StubSlug, Record<Locale, string>> = {
  italy: {
    en: "Amalfi palazzi, Tuscan villas, Lake Como estates and the working register of Sicilian beach clubs.",
    es: "Palazzi de Amalfi, villas toscanas, fincas del Lago de Como y el registro activo de clubes de playa sicilianos.",
    fr: "Palazzi d'Amalfi, villas toscanes, domaines du lac de Côme et le registre des beach clubs siciliens.",
    pt: "Palazzi de Amalfi, villas toscanas, propriedades do Lago de Como e o registo ativo de clubes de praia sicilianos.",
    de: "Amalfi-Palazzi, toskanische Villen, Anwesen am Comer See und das Verzeichnis sizilianischer Beach Clubs.",
    it: "Palazzi di Amalfi, ville toscane, tenute sul Lago di Como e il registro attivo dei beach club siciliani.",
  },
  france: {
    en: "Châteaux of Provence and the Loire, Côte d'Azur villas, and a small register of Parisian estates for the city-bound wedding.",
    es: "Châteaux de Provenza y el Loira, villas de la Costa Azul y un pequeño registro de fincas parisinas para la boda urbana.",
    fr: "Châteaux de Provence et de la Loire, villas de la Côte d'Azur et un petit registre de domaines parisiens pour le mariage citadin.",
    pt: "Châteaux da Provença e do Loire, villas da Côte d'Azur e um pequeno registo de propriedades parisienses para o casamento urbano.",
    de: "Schlösser der Provence und der Loire, Villen an der Côte d'Azur und ein kleines Register Pariser Anwesen für die Stadthochzeit.",
    it: "Châteaux di Provenza e della Loira, ville della Costa Azzurra e un piccolo registro di tenute parigine per il matrimonio in città.",
  },
  spain: {
    en: "Mallorca fincas, Andalucían palacios, Ibiza beach houses. The most flexible region of the Mediterranean for multi-day weekends.",
    es: "Fincas de Mallorca, palacios andaluces, casas de playa de Ibiza. La región más flexible del Mediterráneo para fines de semana de varios días.",
    fr: "Fincas de Majorque, palacios andalous, maisons de plage d'Ibiza. La région la plus souple de la Méditerranée pour les week-ends sur plusieurs jours.",
    pt: "Fincas de Maiorca, palácios andaluzes, casas de praia de Ibiza. A região mais flexível do Mediterrâneo para fins de semana de vários dias.",
    de: "Fincas auf Mallorca, andalusische Palacios, Strandhäuser auf Ibiza. Die flexibelste Mittelmeerregion für mehrtägige Wochenenden.",
    it: "Fincas di Maiorca, palacios andalusi, case sulla spiaggia di Ibiza. La regione più flessibile del Mediterraneo per i weekend di più giorni.",
  },
  "caribbean-islands": {
    en: "St. Barths, Mustique, Harbour Island, Providenciales. Smaller weddings, the rarest weather, the most private guest experience.",
    es: "St. Barths, Mustique, Harbour Island, Providenciales. Bodas más reducidas, el clima más excepcional, la experiencia más privada para los invitados.",
    fr: "Saint-Barth, Mustique, Harbour Island, Providenciales. Des mariages plus restreints, le climat le plus rare, l'expérience la plus privée pour les invités.",
    pt: "St. Barths, Mustique, Harbour Island, Providenciales. Casamentos mais pequenos, o clima mais raro, a experiência mais privada para os convidados.",
    de: "St. Barths, Mustique, Harbour Island, Providenciales. Kleinere Hochzeiten, das seltenste Wetter, das privateste Gästeerlebnis.",
    it: "St. Barths, Mustique, Harbour Island, Providenciales. Matrimoni più piccoli, il clima più raro, l'esperienza più riservata per gli ospiti.",
  },
  "united-states": {
    en: "Hamptons estates, Aspen winter lodges, Napa vineyards. North American weddings for couples staying close to home.",
    es: "Fincas de los Hamptons, lodges invernales de Aspen, viñedos de Napa. Bodas norteamericanas para parejas que se quedan cerca de casa.",
    fr: "Domaines des Hamptons, lodges d'hiver d'Aspen, vignobles de Napa. Des mariages nord-américains pour les couples qui restent près de chez eux.",
    pt: "Propriedades dos Hamptons, lodges de inverno de Aspen, vinhas de Napa. Casamentos norte-americanos para casais que ficam perto de casa.",
    de: "Hamptons-Anwesen, Aspen-Winterlodges, Weingüter im Napa Valley. Nordamerikanische Hochzeiten für Paare, die nahe der Heimat bleiben.",
    it: "Tenute degli Hamptons, lodge invernali di Aspen, vigneti della Napa. Matrimoni nordamericani per coppie che restano vicino a casa.",
  },
  greece: {
    en: "Santorini cliffside, Mykonos villas, Crete coastal estates. A small but considered register.",
    es: "Acantilados de Santorini, villas de Mykonos, fincas costeras de Creta. Un registro pequeño pero meditado.",
    fr: "Falaises de Santorin, villas de Mykonos, domaines côtiers de Crète. Un registre restreint mais réfléchi.",
    pt: "Falésias de Santorini, villas de Mykonos, propriedades costeiras de Creta. Um registo pequeno mas ponderado.",
    de: "Santorin-Steilküste, Mykonos-Villen, Küstenanwesen auf Kreta. Ein kleines, aber wohlüberlegtes Register.",
    it: "Scogliere di Santorini, ville di Mykonos, tenute costiere di Creta. Un registro piccolo ma ponderato.",
  },
};

// ── Per-locale scaffolding ──────────────────────────────────────────────────
type Shared = {
  venuesWord: string;
  scriptHouses: string;
  selectedVenues: string;
  houses: string;
  whenToWed: string;
  weddingsHere: string;
  variable: string;
  guideLabel: string;
  guideHeadline: string;
  comingNote: string;
  venuesEyebrow: string;
  venuesHeadline: string;
  ctaEyebrow: string;
  ctaBeginYour: string;
  ctaVenueSearch: string;
  ctaBody: string;
  ctaLabel: string;
};

const SHARED: Record<Locale, Shared> = {
  en: {
    venuesWord: "Venues",
    scriptHouses: "The houses of",
    selectedVenues: "Selected venues · 2026",
    houses: "Selected venues",
    whenToWed: "When to wed",
    weddingsHere: "Weddings here",
    variable: "Variable",
    guideLabel: "A note on the region",
    guideHeadline: "The register, *in brief.*",
    comingNote:
      "The full venue register for this region is being added — write to the studio for the current shortlist.",
    venuesEyebrow: "The register",
    venuesHeadline: "Houses, *selected.*",
    ctaEyebrow: "A private conversation —",
    ctaBeginYour: "*Begin* your",
    ctaVenueSearch: "venue search.",
    ctaBody:
      "Tell us the wedding you are imagining and a rough date. Grecia writes back with a shortlist, personally, within five working days.",
    ctaLabel: "Request a private consultation",
  },
  es: {
    venuesWord: "Locaciones",
    scriptHouses: "Las casas de",
    selectedVenues: "Locaciones seleccionadas · 2026",
    houses: "Lugares seleccionados",
    whenToWed: "Cuándo casarse",
    weddingsHere: "Bodas aquí",
    variable: "Variable",
    guideLabel: "Una nota sobre la región",
    guideHeadline: "El registro, *en breve.*",
    comingNote:
      "El registro completo de sedes de esta región se está añadiendo; escriba al atelier para la lista actual.",
    venuesEyebrow: "El registro",
    venuesHeadline: "Casas, *seleccionadas.*",
    ctaEyebrow: "Una conversación privada —",
    ctaBeginYour: "*Comience* su búsqueda de sede en",
    ctaVenueSearch: "",
    ctaBody:
      "Cuéntenos la boda que imagina y una fecha aproximada. Grecia responde con una lista, personalmente, en un plazo de cinco días laborables.",
    ctaLabel: "Solicitar una consulta privada",
  },
  fr: {
    venuesWord: "Lieux",
    scriptHouses: "Les maisons de",
    selectedVenues: "Lieux sélectionnés · 2026",
    houses: "Lieux sélectionnés",
    whenToWed: "Quand se marier",
    weddingsHere: "Mariages ici",
    variable: "Variable",
    guideLabel: "Une note sur la région",
    guideHeadline: "Le registre, *en bref.*",
    comingNote:
      "Le registre complet des lieux de cette région est en cours d'ajout — écrivez à l'atelier pour la présélection actuelle.",
    venuesEyebrow: "Le registre",
    venuesHeadline: "Maisons, *sélectionnées.*",
    ctaEyebrow: "Une conversation privée —",
    ctaBeginYour: "*Commencez* votre recherche de lieu en",
    ctaVenueSearch: "",
    ctaBody:
      "Dites-nous le mariage que vous imaginez et une date approximative. Grecia vous répond avec une présélection, personnellement, sous cinq jours ouvrés.",
    ctaLabel: "Demander une consultation privée",
  },
  pt: {
    venuesWord: "Locais",
    scriptHouses: "As casas de",
    selectedVenues: "Locais selecionados · 2026",
    houses: "Locais selecionados",
    whenToWed: "Quando casar",
    weddingsHere: "Casamentos aqui",
    variable: "Variável",
    guideLabel: "Uma nota sobre a região",
    guideHeadline: "O registo, *em resumo.*",
    comingNote:
      "O registo completo de locais desta região está a ser adicionado — escreva ao ateliê para a lista atual.",
    venuesEyebrow: "O registo",
    venuesHeadline: "Casas, *selecionadas.*",
    ctaEyebrow: "Uma conversa privada —",
    ctaBeginYour: "*Comece* a sua procura de local em",
    ctaVenueSearch: "",
    ctaBody:
      "Diga-nos o casamento que imagina e uma data aproximada. Grecia responde com uma lista, pessoalmente, no prazo de cinco dias úteis.",
    ctaLabel: "Solicitar uma consulta privada",
  },
  de: {
    venuesWord: "Orte",
    scriptHouses: "Die Häuser von",
    selectedVenues: "Ausgewählte Orte · 2026",
    houses: "Ausgewählte Locations",
    whenToWed: "Wann heiraten",
    weddingsHere: "Hochzeiten hier",
    variable: "Variabel",
    guideLabel: "Eine Anmerkung zur Region",
    guideHeadline: "Das Register, *in Kürze.*",
    comingNote:
      "Das vollständige Ortsverzeichnis dieser Region wird ergänzt — schreiben Sie dem Atelier für die aktuelle Auswahl.",
    venuesEyebrow: "Das Register",
    venuesHeadline: "Häuser, *ausgewählt.*",
    ctaEyebrow: "Ein privates Gespräch —",
    ctaBeginYour: "*Beginnen* Sie Ihre Ortssuche in",
    ctaVenueSearch: "",
    ctaBody:
      "Sagen Sie uns, welche Hochzeit Sie sich vorstellen, und ein ungefähres Datum. Grecia antwortet persönlich mit einer Auswahl innerhalb von fünf Werktagen.",
    ctaLabel: "Eine private Beratung anfragen",
  },
  it: {
    venuesWord: "Sedi",
    scriptHouses: "Le case di",
    selectedVenues: "Sedi selezionate · 2026",
    houses: "Location selezionate",
    whenToWed: "Quando sposarsi",
    weddingsHere: "Matrimoni qui",
    variable: "Variabile",
    guideLabel: "Una nota sulla regione",
    guideHeadline: "Il registro, *in breve.*",
    comingNote:
      "Il registro completo delle sedi di questa regione è in fase di aggiunta — scrivete all'atelier per la rosa attuale.",
    venuesEyebrow: "Il registro",
    venuesHeadline: "Case, *selezionate.*",
    ctaEyebrow: "Una conversazione privata —",
    ctaBeginYour: "*Iniziate* la vostra ricerca di sede in",
    ctaVenueSearch: "",
    ctaBody:
      "Diteci il matrimonio che immaginate e una data approssimativa. Grecia risponde con una rosa di proposte, personalmente, entro cinque giorni lavorativi.",
    ctaLabel: "Richiedere una consulenza privata",
  },
};

function buildStub(slug: StubSlug, locale: Locale): RegionCopy {
  const s = SHARED[locale];
  const name = NAMES[slug][locale];
  const facts = FACTS[slug];
  const blurb = BLURBS[slug][locale];
  const ctaHeadline = [s.ctaBeginYour, name, s.ctaVenueSearch]
    .filter(Boolean)
    .join(" ");

  return {
    name,
    cardBlurb: blurb,
    cardMeta: [
      { label: s.houses, useVenueCount: true },
      { value: facts.season ?? s.variable, label: s.whenToWed },
      { value: facts.weddings, label: s.weddingsHere },
    ],
    hero: {
      eyebrow: `${s.venuesWord} · ${name}`,
      scriptOverline: s.scriptHouses,
      headline: `${name}.`,
      deck: blurb,
      captionLeft: name,
      captionCenter: s.selectedVenues,
      captionRight: "—",
    },
    guide: {
      sideLabel: s.guideLabel,
      headline: s.guideHeadline,
      bodyParagraphs: [blurb, s.comingNote],
      subRegions: [],
      related: [],
    },
    venuesHeadline: { eyebrow: s.venuesEyebrow, headline: s.venuesHeadline },
    cta: {
      eyebrow: s.ctaEyebrow,
      headline: ctaHeadline,
      body: s.ctaBody,
      ctaLabel: s.ctaLabel,
      ctaHref: "/contact",
    },
  };
}

const STUB_SLUGS: StubSlug[] = [
  "italy",
  "france",
  "spain",
  "caribbean-islands",
  "united-states",
  "greece",
];

const LOCALES: Locale[] = ["en", "es", "fr", "pt", "de", "it"];

/** `{ [canonicalSlug]: { [locale]: RegionCopy } }` for the six stub regions. */
export const STUB_REGIONS: Record<
  StubSlug,
  Record<Locale, RegionCopy>
> = Object.fromEntries(
  STUB_SLUGS.map((slug) => [
    slug,
    Object.fromEntries(
      LOCALES.map((locale) => [locale, buildStub(slug, locale)]),
    ) as Record<Locale, RegionCopy>,
  ]),
) as Record<StubSlug, Record<Locale, RegionCopy>>;
