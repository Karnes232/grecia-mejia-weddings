/**
 * The five "featured" venues shown on the homepage "Venues, considered" list
 * that live outside Punta Cana's set: Kukua + Villa Ta Ville (Punta Cana area),
 * Château de la Croix (France/Provence), Finca San Bartolo (Spain/Mallorca),
 * Castello di Velasco (Italy/Tuscany).
 *
 * Seeded as STUBS (region card + header + facts + short overview + CTA), same
 * depth as the non-Jellyfish Punta Cana venues, across all six locales. Slugs +
 * region slugs are locale-invariant; each references an existing `venueRegion`.
 * Mirrors `puntaCanaVenues.ts`.
 */

import { type Locale } from "../../../i18n/routing";

import { type VenueCopy } from "./shared";

const LOCALES: Locale[] = ["en", "es", "fr", "pt", "de", "it"];

type VBase = {
  slug: string;
  name: string;
  number: string;
  place: string;
  capacity: string;
  region: string; // existing venueRegion canonical slug
};

const FEATURED_BASE: VBase[] = [
  { slug: "kukua-beach-club", name: "Kukua Beach Club", number: "04", place: "Bávaro", capacity: "120 – 500", region: "punta-cana" },
  { slug: "villa-ta-ville", name: "Villa Ta Ville", number: "05", place: "Cap Cana", capacity: "40 – 160", region: "punta-cana" },
  { slug: "chateau-de-la-croix", name: "Château de la Croix", number: "01", place: "Provence", capacity: "80 – 250", region: "france" },
  { slug: "finca-san-bartolo", name: "Finca San Bartolo", number: "01", place: "Mallorca", capacity: "60 – 200", region: "spain" },
  { slug: "castello-di-velasco", name: "Castello di Velasco", number: "01", place: "Tuscany", capacity: "80 – 220", region: "italy" },
];

export const FEATURED_VENUE_ORDER = FEATURED_BASE.map((v) => v.slug);

// ── Per-locale card labels ──────────────────────────────────────────────────
type Labels = { capacity: string; bestFor: string; multicultural: string; guests: string };
const L: Record<Locale, Labels> = {
  en: { capacity: "Capacity", bestFor: "Best for", multicultural: "Multicultural", guests: "guests" },
  es: { capacity: "Capacidad", bestFor: "Ideal para", multicultural: "Multicultural", guests: "invitados" },
  fr: { capacity: "Capacité", bestFor: "Idéal pour", multicultural: "Multiculturel", guests: "invités" },
  pt: { capacity: "Capacidade", bestFor: "Ideal para", multicultural: "Multicultural", guests: "convidados" },
  de: { capacity: "Kapazität", bestFor: "Am besten für", multicultural: "Multikulturell", guests: "Gäste" },
  it: { capacity: "Capienza", bestFor: "Ideale per", multicultural: "Multiculturale", guests: "ospiti" },
};

const STUB_HEADER: Record<Locale, { ctaLabel: string; gallery: string }> = {
  en: { ctaLabel: "Request a site visit", gallery: "View full gallery" },
  es: { ctaLabel: "Solicitar una visita", gallery: "Ver la galería completa" },
  fr: { ctaLabel: "Demander une visite", gallery: "Voir toute la galerie" },
  pt: { ctaLabel: "Solicitar uma visita", gallery: "Ver a galeria completa" },
  de: { ctaLabel: "Eine Besichtigung anfragen", gallery: "Galerie ansehen" },
  it: { ctaLabel: "Richiedere un sopralluogo", gallery: "Vedi la galleria" },
};

const STUB_OVERVIEW_LABEL: Record<Locale, { side: string; headline: string }> = {
  en: { side: "The venue", headline: "A working *note.*" },
  es: { side: "La sede", headline: "Una nota de *trabajo.*" },
  fr: { side: "Le lieu", headline: "Une note de *travail.*" },
  pt: { side: "O local", headline: "Uma nota de *trabalho.*" },
  de: { side: "Der Ort", headline: "Eine Arbeits*notiz.*" },
  it: { side: "La sede", headline: "Una nota di *lavoro.*" },
};

const STUB_CTA: Record<Locale, { eyebrow: string; body: string; ctaLabel: string }> = {
  en: { eyebrow: "A private conversation —", body: "Tell us your tradition, guest count, and a rough date. Grecia writes back, personally, within five working days.", ctaLabel: "Request a site visit" },
  es: { eyebrow: "Una conversación privada —", body: "Cuéntenos su tradición, el número de invitados y una fecha aproximada. Grecia responde, personalmente, en cinco días laborables.", ctaLabel: "Solicitar una visita" },
  fr: { eyebrow: "Une conversation privée —", body: "Dites-nous votre tradition, le nombre d'invités et une date approximative. Grecia vous répond, personnellement, sous cinq jours ouvrés.", ctaLabel: "Demander une visite" },
  pt: { eyebrow: "Uma conversa privada —", body: "Diga-nos a sua tradição, o número de convidados e uma data aproximada. Grecia responde, pessoalmente, em cinco dias úteis.", ctaLabel: "Solicitar uma visita" },
  de: { eyebrow: "Ein privates Gespräch —", body: "Sagen Sie uns Ihre Tradition, die Gästezahl und ein ungefähres Datum. Grecia antwortet persönlich innerhalb von fünf Werktagen.", ctaLabel: "Eine Besichtigung anfragen" },
  it: { eyebrow: "Una conversazione privata —", body: "Diteci la vostra tradizione, il numero di ospiti e una data approssimativa. Grecia risponde, personalmente, entro cinque giorni lavorativi.", ctaLabel: "Richiedere un sopralluogo" },
};

// ── Per-venue, per-locale text (order matches FEATURED_BASE) ─────────────────
type VText = { tag: string; locDesc: string; blurb: string; bestFor: string; traditions: string };

const VTEXT: Record<Locale, VText[]> = {
  en: [
    { tag: "Beach club", locDesc: "Beachfront", blurb: "White sand, olive-toned linens and a long horizon — the most generous of the Bávaro beach clubs, built for three-hundred-guest weekends.", bestFor: "Large multi-event weekends", traditions: "All eight traditions" },
    { tag: "Private villa", locDesc: "Oceanfront", blurb: "An Italian-modernist villa with rosewood interiors and a private cove, kept for smaller, design-led celebrations in Cap Cana.", bestFor: "Intimate design-led weddings", traditions: "Civil · Interfaith · Catholic" },
    { tag: "Château", locDesc: "Countryside", blurb: "A Provençal château ringed by lavender fields and century-old planes — the studio's home for summer weddings in the south of France.", bestFor: "Summer château weekends", traditions: "Catholic · Jewish · Interfaith" },
    { tag: "Finca", locDesc: "Hillside", blurb: "A stone finca among ancient olives, with sea light and a private chapel, set in the Tramuntana hills of Mallorca.", bestFor: "Catholic mass · island weekends", traditions: "Catholic · Civil · Interfaith" },
    { tag: "Castle", locDesc: "Hilltop", blurb: "A Renaissance castle with frescoed ceilings and vineyard terraces, held for grand Tuscan weddings above the Val d'Orcia.", bestFor: "Grand Tuscan weekends", traditions: "Catholic · Jewish · Interfaith" },
  ],
  es: [
    { tag: "Club de playa", locDesc: "Frente al mar", blurb: "Arena blanca, lencería en tonos oliva y un horizonte largo — el más amplio de los clubes de playa de Bávaro, hecho para fines de semana de trescientos invitados.", bestFor: "Fines de semana de varios eventos", traditions: "Las ocho tradiciones" },
    { tag: "Villa privada", locDesc: "Frente al océano", blurb: "Una villa modernista italiana con interiores de palo de rosa y una cala privada, reservada para celebraciones más íntimas y de diseño en Cap Cana.", bestFor: "Bodas íntimas y de diseño", traditions: "Civil · Interreligiosa · Católica" },
    { tag: "Château", locDesc: "Campo", blurb: "Un château provenzal rodeado de campos de lavanda y plátanos centenarios — el hogar del atelier para bodas de verano en el sur de Francia.", bestFor: "Fines de semana de verano en château", traditions: "Católica · Judía · Interreligiosa" },
    { tag: "Finca", locDesc: "Ladera", blurb: "Una finca de piedra entre olivos centenarios, con luz de mar y una capilla privada, en la sierra de Tramuntana de Mallorca.", bestFor: "Misa católica · fines de semana isleños", traditions: "Católica · Civil · Interreligiosa" },
    { tag: "Castillo", locDesc: "Cima", blurb: "Un castillo renacentista con techos al fresco y terrazas de viñedo, reservado para grandes bodas toscanas sobre el Val d'Orcia.", bestFor: "Grandes fines de semana toscanos", traditions: "Católica · Judía · Interreligiosa" },
  ],
  fr: [
    { tag: "Beach club", locDesc: "Bord de mer", blurb: "Sable blanc, linge aux tons olive et un long horizon — le plus généreux des beach clubs de Bávaro, conçu pour des week-ends de trois cents invités.", bestFor: "Week-ends multi-événements", traditions: "Les huit traditions" },
    { tag: "Villa privée", locDesc: "Front de mer", blurb: "Une villa moderniste italienne aux intérieurs en palissandre et une crique privée, réservée aux célébrations plus intimes et design à Cap Cana.", bestFor: "Mariages intimes et design", traditions: "Civil · Interconfessionnel · Catholique" },
    { tag: "Château", locDesc: "Campagne", blurb: "Un château provençal cerné de champs de lavande et de platanes centenaires — la maison de l'atelier pour les mariages d'été dans le sud de la France.", bestFor: "Week-ends d'été au château", traditions: "Catholique · Juif · Interconfessionnel" },
    { tag: "Finca", locDesc: "Colline", blurb: "Une finca en pierre parmi des oliviers anciens, baignée de lumière marine et dotée d'une chapelle privée, nichée dans la Tramuntana de Majorque.", bestFor: "Messe catholique · week-ends insulaires", traditions: "Catholique · Civil · Interconfessionnel" },
    { tag: "Château fort", locDesc: "Sommet", blurb: "Un château Renaissance aux plafonds à fresques et aux terrasses de vignes, réservé aux grands mariages toscans au-dessus du Val d'Orcia.", bestFor: "Grands week-ends toscans", traditions: "Catholique · Juif · Interconfessionnel" },
  ],
  pt: [
    { tag: "Clube de praia", locDesc: "Frente ao mar", blurb: "Areia branca, roupa de mesa em tons de oliveira e um horizonte longo — o mais amplo dos clubes de praia de Bávaro, feito para fins de semana de trezentos convidados.", bestFor: "Fins de semana de vários eventos", traditions: "As oito tradições" },
    { tag: "Villa privada", locDesc: "Frente ao oceano", blurb: "Uma villa modernista italiana com interiores em pau-rosa e uma enseada privada, reservada para celebrações mais íntimas e de design em Cap Cana.", bestFor: "Casamentos íntimos e de design", traditions: "Civil · Inter-religioso · Católico" },
    { tag: "Château", locDesc: "Campo", blurb: "Um château provençal rodeado de campos de lavanda e plátanos centenários — a casa do ateliê para casamentos de verão no sul de França.", bestFor: "Fins de semana de verão no château", traditions: "Católico · Judaico · Inter-religioso" },
    { tag: "Finca", locDesc: "Encosta", blurb: "Uma finca de pedra entre oliveiras centenárias, com luz do mar e uma capela privada, na serra de Tramuntana de Maiorca.", bestFor: "Missa católica · fins de semana na ilha", traditions: "Católico · Civil · Inter-religioso" },
    { tag: "Castelo", locDesc: "Topo da colina", blurb: "Um castelo renascentista com tetos afrescados e terraços de vinha, reservado para grandes casamentos toscanos sobre o Val d'Orcia.", bestFor: "Grandes fins de semana toscanos", traditions: "Católico · Judaico · Inter-religioso" },
  ],
  de: [
    { tag: "Beach Club", locDesc: "Strandlage", blurb: "Weißer Sand, olivfarbene Tischwäsche und ein weiter Horizont — der großzügigste der Beach Clubs von Bávaro, gebaut für Wochenenden mit dreihundert Gästen.", bestFor: "Mehrtägige Großfeiern", traditions: "Alle acht Traditionen" },
    { tag: "Privatvilla", locDesc: "Direkt am Meer", blurb: "Eine italienisch-modernistische Villa mit Palisander-Interieurs und einer privaten Bucht, reserviert für kleinere, designorientierte Feiern in Cap Cana.", bestFor: "Intime, designorientierte Hochzeiten", traditions: "Standesamtlich · Interreligiös · Katholisch" },
    { tag: "Château", locDesc: "Landschaft", blurb: "Ein provenzalisches Château, umgeben von Lavendelfeldern und hundertjährigen Platanen — das Zuhause des Ateliers für Sommerhochzeiten in Südfrankreich.", bestFor: "Sommerliche Château-Wochenenden", traditions: "Katholisch · Jüdisch · Interreligiös" },
    { tag: "Finca", locDesc: "Hanglage", blurb: "Eine steinerne Finca zwischen uralten Olivenbäumen, mit Meereslicht und einer privaten Kapelle, im Tramuntana-Gebirge Mallorcas.", bestFor: "Katholische Messe · Insel-Wochenenden", traditions: "Katholisch · Standesamtlich · Interreligiös" },
    { tag: "Schloss", locDesc: "Hügelkuppe", blurb: "Ein Renaissance-Schloss mit freskierten Decken und Weinbergterrassen, reserviert für große toskanische Hochzeiten über dem Val d'Orcia.", bestFor: "Große toskanische Wochenenden", traditions: "Katholisch · Jüdisch · Interreligiös" },
  ],
  it: [
    { tag: "Beach club", locDesc: "Fronte mare", blurb: "Sabbia bianca, tessuti dai toni oliva e un orizzonte lungo — il più ampio dei beach club di Bávaro, pensato per weekend da trecento invitati.", bestFor: "Weekend con più eventi", traditions: "Tutte e otto le tradizioni" },
    { tag: "Villa privata", locDesc: "Fronte oceano", blurb: "Una villa modernista italiana con interni in palissandro e una cala privata, riservata a celebrazioni più intime e di design a Cap Cana.", bestFor: "Matrimoni intimi e di design", traditions: "Civile · Interreligioso · Cattolico" },
    { tag: "Château", locDesc: "Campagna", blurb: "Uno château provenzale circondato da campi di lavanda e platani secolari — la casa dell'atelier per i matrimoni estivi nel sud della Francia.", bestFor: "Weekend estivi allo château", traditions: "Cattolico · Ebraico · Interreligioso" },
    { tag: "Finca", locDesc: "Collina", blurb: "Una finca di pietra tra ulivi secolari, con luce di mare e una cappella privata, sulle colline della Tramuntana di Maiorca.", bestFor: "Messa cattolica · weekend sull'isola", traditions: "Cattolico · Civile · Interreligioso" },
    { tag: "Castello", locDesc: "Cima", blurb: "Un castello rinascimentale con soffitti affrescati e terrazze vitate, riservato ai grandi matrimoni toscani sopra la Val d'Orcia.", bestFor: "Grandi weekend toscani", traditions: "Cattolico · Ebraico · Interreligioso" },
  ],
};

function buildFeaturedVenue(i: number, locale: Locale): VenueCopy {
  const v = FEATURED_BASE[i];
  const tx = VTEXT[locale][i];
  const lab = L[locale];
  const sh = STUB_HEADER[locale];
  const ol = STUB_OVERVIEW_LABEL[locale];
  const cta = STUB_CTA[locale];

  const location = `${v.place} · ${tx.locDesc}`;
  const cardMeta = [
    { label: lab.capacity, value: `${v.capacity} ${lab.guests}` },
    { label: lab.bestFor, value: tx.bestFor },
    { label: lab.multicultural, value: tx.traditions },
  ];

  return {
    name: v.name,
    region: v.region,
    number: v.number,
    tag: tx.tag,
    location,
    cardBlurb: tx.blurb,
    cardMeta,
    header: {
      eyebrow: `№ ${v.number} · ${tx.tag} · ${v.place}`,
      headline: `${v.name}.`,
      location,
      deck: tx.blurb,
      galleryLabel: sh.gallery,
      ctaLabel: sh.ctaLabel,
      ctaHref: "/contact",
    },
    facts: cardMeta.map((m) => ({ label: m.label, value: m.value, sub: "" })),
    overview: {
      sideLabel: ol.side,
      sideNote: "",
      headline: ol.headline,
      lede: tx.blurb,
      bodyParagraphs: [],
    },
    cta: {
      eyebrow: cta.eyebrow,
      headline: `*Begin* your wedding at ${v.name}.`,
      body: cta.body,
      ctaLabel: cta.ctaLabel,
      ctaHref: "/contact",
    },
  };
}

export const FEATURED_VENUES: Record<Locale, Record<string, VenueCopy>> =
  Object.fromEntries(
    LOCALES.map((locale) => [
      locale,
      Object.fromEntries(
        FEATURED_BASE.map((v, i) => [v.slug, buildFeaturedVenue(i, locale)]),
      ),
    ]),
  ) as Record<Locale, Record<string, VenueCopy>>;
