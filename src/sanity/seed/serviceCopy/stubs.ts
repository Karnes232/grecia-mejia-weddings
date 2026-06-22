/**
 * The seven non-flagship services as translated STUBS — name, summary, hero,
 * a one-line overview placeholder, and the shared CTA, in all six locales.
 * The deeper sections (inclusions / process / audience / FAQ) are authored in
 * Sanity Studio. Built from a per-locale scaffold + per-service name/summary
 * so the copy stays compact.
 */

import { locales, type Locale } from "../../../i18n/routing";

import { SERVICE_META, type ServiceCopy } from "./shared";

type CtaCopy = {
  eyebrow: string;
  headline: string;
  body: string;
  ctaLabel: string;
};

type Scaffold = {
  eyebrowPrefix: string; // "Services · No."
  scriptOverline: string; // "The service"
  studio: string; // "The studio"
  numPrefix: string; // "No."
  placeholderBody: string;
  cta: CtaCopy;
};

const SCAFFOLD: Record<Locale, Scaffold> = {
  en: {
    eyebrowPrefix: "Services · No.",
    scriptOverline: "The service",
    studio: "The studio",
    numPrefix: "No.",
    placeholderBody:
      "This page is a placeholder — the full service description, process, audience and FAQ are authored in Sanity Studio.",
    cta: {
      eyebrow: "A private conversation —",
      headline: "*Begin* your wedding journey.",
      body: "Tell us the wedding you are imagining, the destination, and a rough date. Grecia writes back, personally, within five working days.",
      ctaLabel: "Request a private consultation →",
    },
  },
  es: {
    eyebrowPrefix: "Servicios · N.º",
    scriptOverline: "El servicio",
    studio: "El atelier",
    numPrefix: "N.º",
    placeholderBody:
      "Esta página es provisional — la descripción completa del servicio, el proceso, el público y las preguntas frecuentes se redactan en Sanity Studio.",
    cta: {
      eyebrow: "Una conversación privada —",
      headline: "*Comienza* tu viaje nupcial.",
      body: "Cuéntanos la boda que imaginas, el destino y una fecha aproximada. Grecia responde personalmente en cinco días laborables.",
      ctaLabel: "Solicitar una consulta privada →",
    },
  },
  fr: {
    eyebrowPrefix: "Services · N°",
    scriptOverline: "Le service",
    studio: "L'atelier",
    numPrefix: "N°",
    placeholderBody:
      "Cette page est provisoire — la description complète du service, le processus, le public et la FAQ sont rédigés dans Sanity Studio.",
    cta: {
      eyebrow: "Une conversation privée —",
      headline: "*Commencez* votre parcours nuptial.",
      body: "Dites-nous le mariage que vous imaginez, la destination et une date approximative. Grecia vous répond personnellement sous cinq jours ouvrés.",
      ctaLabel: "Demander une consultation privée →",
    },
  },
  pt: {
    eyebrowPrefix: "Serviços · N.º",
    scriptOverline: "O serviço",
    studio: "O ateliê",
    numPrefix: "N.º",
    placeholderBody:
      "Esta página é provisória — a descrição completa do serviço, o processo, o público e as perguntas frequentes são redigidos no Sanity Studio.",
    cta: {
      eyebrow: "Uma conversa privada —",
      headline: "*Comece* a sua jornada nupcial.",
      body: "Diga-nos o casamento que imagina, o destino e uma data aproximada. Grecia responde pessoalmente em cinco dias úteis.",
      ctaLabel: "Solicitar uma consulta privada →",
    },
  },
  de: {
    eyebrowPrefix: "Leistungen · Nr.",
    scriptOverline: "Die Leistung",
    studio: "Das Atelier",
    numPrefix: "Nr.",
    placeholderBody:
      "Diese Seite ist ein Platzhalter — die vollständige Leistungsbeschreibung, der Ablauf, die Zielgruppe und die FAQ werden im Sanity Studio verfasst.",
    cta: {
      eyebrow: "Ein privates Gespräch —",
      headline: "*Beginnen* Sie Ihre Hochzeitsreise.",
      body: "Erzählen Sie uns von der Hochzeit, die Sie sich vorstellen, vom Ziel und von einem ungefähren Datum. Grecia antwortet persönlich innerhalb von fünf Werktagen.",
      ctaLabel: "Privates Gespräch anfragen →",
    },
  },
  it: {
    eyebrowPrefix: "Servizi · N.",
    scriptOverline: "Il servizio",
    studio: "L'atelier",
    numPrefix: "N.",
    placeholderBody:
      "Questa pagina è provvisoria — la descrizione completa del servizio, il processo, il pubblico e le FAQ vengono redatti in Sanity Studio.",
    cta: {
      eyebrow: "Una conversazione privata —",
      headline: "*Inizia* il tuo viaggio nuziale.",
      body: "Raccontaci il matrimonio che immagini, la destinazione e una data indicativa. Grecia risponde personalmente entro cinque giorni lavorativi.",
      ctaLabel: "Richiedi una consulenza privata →",
    },
  },
};

type StubText = { name: string; summary: string };

const STUB_TEXT: Record<string, Record<Locale, StubText>> = {
  "luxury-wedding-planning": {
    en: { name: "Luxury Wedding Planning", summary: "The complete white-glove engagement — discretion, taste, and a calendar held by hand." },
    es: { name: "Planificación de Bodas de Lujo", summary: "El encargo completo de guante blanco — discreción, gusto y un calendario sostenido a mano." },
    fr: { name: "Organisation de Mariage de Luxe", summary: "L'engagement complet en gants blancs — discrétion, goût et un calendrier tenu à la main." },
    pt: { name: "Planeamento de Casamentos de Luxo", summary: "O compromisso completo de luva branca — discrição, bom gosto e um calendário sustentado à mão." },
    de: { name: "Luxushochzeitsplanung", summary: "Das vollständige Engagement mit weißen Handschuhen — Diskretion, Geschmack und ein von Hand gehaltener Kalender." },
    it: { name: "Organizzazione Matrimoni di Lusso", summary: "L'impegno completo in guanti bianchi — discrezione, gusto e un calendario retto a mano." },
  },
  "multicultural-wedding-planning": {
    en: { name: "Multicultural Wedding Planning", summary: "Multi-day, multi-religion celebrations with cultural protocol and linguistic fluency." },
    es: { name: "Planificación de Bodas Multiculturales", summary: "Celebraciones de varios días y varias religiones, con protocolo cultural y fluidez lingüística." },
    fr: { name: "Organisation de Mariage Multiculturel", summary: "Des célébrations sur plusieurs jours et plusieurs religions, avec protocole culturel et aisance linguistique." },
    pt: { name: "Planeamento de Casamentos Multiculturais", summary: "Celebrações de vários dias e várias religiões, com protocolo cultural e fluência linguística." },
    de: { name: "Multikulturelle Hochzeitsplanung", summary: "Mehrtägige, multireligiöse Feiern mit kulturellem Protokoll und sprachlicher Sicherheit." },
    it: { name: "Organizzazione Matrimoni Multiculturali", summary: "Celebrazioni di più giorni e più religioni, con protocollo culturale e scioltezza linguistica." },
  },
  "wedding-weekend-planning": {
    en: { name: "Wedding Weekend Planning", summary: "Three-to-five-day arcs paced for travelling guests — welcome to farewell brunch." },
    es: { name: "Planificación de Fin de Semana Nupcial", summary: "Arcos de tres a cinco días al ritmo de los invitados que viajan — de la bienvenida al brunch de despedida." },
    fr: { name: "Organisation de Week-end de Mariage", summary: "Des trames de trois à cinq jours rythmées pour les invités qui voyagent — de l'accueil au brunch d'adieu." },
    pt: { name: "Planeamento de Fim de Semana Nupcial", summary: "Arcos de três a cinco dias ao ritmo dos convidados que viajam — das boas-vindas ao brunch de despedida." },
    de: { name: "Hochzeitswochenend-Planung", summary: "Drei- bis fünftägige Bögen im Takt reisender Gäste — vom Empfang bis zum Abschiedsbrunch." },
    it: { name: "Organizzazione del Weekend di Nozze", summary: "Archi di tre-cinque giorni al ritmo degli invitati che viaggiano — dal benvenuto al brunch di commiato." },
  },
  "venue-sourcing": {
    en: { name: "Venue Sourcing", summary: "Private estates, châteaux, villas and architectural rarities, chosen by name." },
    es: { name: "Búsqueda de Locaciones", summary: "Fincas privadas, châteaux, villas y rarezas arquitectónicas, elegidas por su nombre." },
    fr: { name: "Recherche de Lieux", summary: "Domaines privés, châteaux, villas et raretés architecturales, choisis nommément." },
    pt: { name: "Seleção de Locais", summary: "Quintas privadas, châteaux, villas e raridades arquitetónicas, escolhidas pelo nome." },
    de: { name: "Locationsuche", summary: "Private Anwesen, Schlösser, Villen und architektonische Raritäten, namentlich gewählt." },
    it: { name: "Ricerca Location", summary: "Tenute private, château, ville e rarità architettoniche, scelte per nome." },
  },
  "wedding-design": {
    en: { name: "Wedding Design", summary: "Bespoke art direction — florals, tablescape, lighting, scent and sound." },
    es: { name: "Diseño de Bodas", summary: "Dirección de arte a medida — flores, mesa, iluminación, aroma y sonido." },
    fr: { name: "Design de Mariage", summary: "Direction artistique sur mesure — fleurs, art de la table, lumière, parfum et son." },
    pt: { name: "Design de Casamentos", summary: "Direção de arte à medida — flores, mesa, iluminação, aroma e som." },
    de: { name: "Hochzeitsdesign", summary: "Maßgeschneiderte künstlerische Leitung — Floristik, Tafel, Licht, Duft und Klang." },
    it: { name: "Design di Matrimoni", summary: "Direzione artistica su misura — fiori, mise en place, luce, profumo e suono." },
  },
  "event-production": {
    en: { name: "Event Production", summary: "Stage, sound, lighting, AV, fabrication and fireworks, run by the studio." },
    es: { name: "Producción de Eventos", summary: "Escenario, sonido, iluminación, audiovisuales, fabricación y fuegos artificiales, a cargo del atelier." },
    fr: { name: "Production Événementielle", summary: "Scène, son, lumière, audiovisuel, fabrication et feux d'artifice, assurés par l'atelier." },
    pt: { name: "Produção de Eventos", summary: "Palco, som, iluminação, audiovisuais, fabricação e fogo de artifício, a cargo do ateliê." },
    de: { name: "Eventproduktion", summary: "Bühne, Ton, Licht, AV, Bau und Feuerwerk, ausgeführt vom Atelier." },
    it: { name: "Produzione Eventi", summary: "Palco, audio, luci, AV, allestimento e fuochi d'artificio, gestiti dall'atelier." },
  },
  "guest-experience": {
    en: { name: "Guest Experience", summary: "Welcome parties, excursions, transfers, gifting and farewell brunches." },
    es: { name: "Experiencia de Invitados", summary: "Fiestas de bienvenida, excursiones, traslados, regalos y brunches de despedida." },
    fr: { name: "Expérience des Invités", summary: "Fêtes de bienvenue, excursions, transferts, cadeaux et brunchs d'adieu." },
    pt: { name: "Experiência dos Convidados", summary: "Festas de boas-vindas, excursões, transferes, ofertas e brunches de despedida." },
    de: { name: "Gästeerlebnis", summary: "Willkommenspartys, Ausflüge, Transfers, Geschenke und Abschiedsbrunches." },
    it: { name: "Esperienza degli Ospiti", summary: "Feste di benvenuto, escursioni, transfer, omaggi e brunch di commiato." },
  },
};

function buildStub(canonicalSlug: string): Record<Locale, ServiceCopy> {
  const meta = SERVICE_META.find((m) => m.slug === canonicalSlug);
  if (!meta) throw new Error(`Unknown service: ${canonicalSlug}`);

  return Object.fromEntries(
    locales.map((locale) => {
      const s = SCAFFOLD[locale];
      const t = STUB_TEXT[canonicalSlug][locale];
      const copy: ServiceCopy = {
        name: t.name,
        summary: t.summary,
        hero: {
          eyebrow: `${s.eyebrowPrefix} ${meta.number}`,
          scriptOverline: s.scriptOverline,
          headline: t.name,
          deck: t.summary,
          captionLeft: s.studio,
          captionCenter: t.name,
          captionRight: `${s.numPrefix} ${meta.number}`,
        },
        overview: {
          eyebrow: s.scriptOverline,
          headline: t.name,
          lede: t.summary,
          bodyParagraphs: [s.placeholderBody],
        },
        cta: s.cta,
      };
      return [locale, copy];
    }),
  ) as Record<Locale, ServiceCopy>;
}

export const luxuryWeddingPlanning = buildStub("luxury-wedding-planning");
export const multiculturalWeddingPlanning = buildStub(
  "multicultural-wedding-planning",
);
export const weddingWeekendPlanning = buildStub("wedding-weekend-planning");
export const venueSourcing = buildStub("venue-sourcing");
export const weddingDesign = buildStub("wedding-design");
export const eventProduction = buildStub("event-production");
export const guestExperience = buildStub("guest-experience");
