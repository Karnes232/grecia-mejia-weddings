/**
 * The 13 Journal categories. Document ids are keyed by the canonical English
 * slug; titles + slugs are translated per locale (slugs ASCII-safe).
 */

import { type Locale } from "../../../i18n/routing";

export type CategoryLocaleCopy = { title: string; slug: string };

export type CategorySeed = {
  /** Canonical English slug — drives the document id. */
  canonicalSlug: string;
  order: number;
  byLocale: Record<Locale, CategoryLocaleCopy>;
};

export const CATEGORIES: CategorySeed[] = [
  {
    canonicalSlug: "destination-weddings",
    order: 1,
    byLocale: {
      en: { title: "Destination Weddings", slug: "destination-weddings" },
      es: { title: "Bodas de destino", slug: "bodas-de-destino" },
      fr: { title: "Mariages de destination", slug: "mariages-de-destination" },
      pt: { title: "Casamentos de destino", slug: "casamentos-de-destino" },
      de: { title: "Destination-Hochzeiten", slug: "destination-hochzeiten" },
      it: { title: "Matrimoni di destinazione", slug: "matrimoni-di-destinazione" },
    },
  },
  {
    canonicalSlug: "punta-cana",
    order: 2,
    byLocale: {
      en: { title: "Punta Cana", slug: "punta-cana" },
      es: { title: "Punta Cana", slug: "punta-cana" },
      fr: { title: "Punta Cana", slug: "punta-cana" },
      pt: { title: "Punta Cana", slug: "punta-cana" },
      de: { title: "Punta Cana", slug: "punta-cana" },
      it: { title: "Punta Cana", slug: "punta-cana" },
    },
  },
  {
    canonicalSlug: "indian-weddings",
    order: 3,
    byLocale: {
      en: { title: "Indian Weddings", slug: "indian-weddings" },
      es: { title: "Bodas indias", slug: "bodas-indias" },
      fr: { title: "Mariages indiens", slug: "mariages-indiens" },
      pt: { title: "Casamentos indianos", slug: "casamentos-indianos" },
      de: { title: "Indische Hochzeiten", slug: "indische-hochzeiten" },
      it: { title: "Matrimoni indiani", slug: "matrimoni-indiani" },
    },
  },
  {
    canonicalSlug: "jewish-weddings",
    order: 4,
    byLocale: {
      en: { title: "Jewish Weddings", slug: "jewish-weddings" },
      es: { title: "Bodas judías", slug: "bodas-judias" },
      fr: { title: "Mariages juifs", slug: "mariages-juifs" },
      pt: { title: "Casamentos judaicos", slug: "casamentos-judaicos" },
      de: { title: "Jüdische Hochzeiten", slug: "juedische-hochzeiten" },
      it: { title: "Matrimoni ebraici", slug: "matrimoni-ebraici" },
    },
  },
  {
    canonicalSlug: "multicultural-weddings",
    order: 5,
    byLocale: {
      en: { title: "Multicultural", slug: "multicultural-weddings" },
      es: { title: "Multicultural", slug: "bodas-multiculturales" },
      fr: { title: "Multiculturel", slug: "mariages-multiculturels" },
      pt: { title: "Multicultural", slug: "casamentos-multiculturais" },
      de: { title: "Multikulturell", slug: "multikulturelle-hochzeiten" },
      it: { title: "Multiculturale", slug: "matrimoni-multiculturali" },
    },
  },
  {
    canonicalSlug: "wedding-venues",
    order: 6,
    byLocale: {
      en: { title: "Wedding Venues", slug: "wedding-venues" },
      es: { title: "Locaciones de boda", slug: "locaciones-de-boda" },
      fr: { title: "Lieux de mariage", slug: "lieux-de-mariage" },
      pt: { title: "Locais de casamento", slug: "locais-de-casamento" },
      de: { title: "Hochzeitsorte", slug: "hochzeitsorte" },
      it: { title: "Sedi per matrimoni", slug: "sedi-per-matrimoni" },
    },
  },
  {
    canonicalSlug: "wedding-costs",
    order: 7,
    byLocale: {
      en: { title: "Wedding Costs", slug: "wedding-costs" },
      es: { title: "Costos de boda", slug: "costos-de-boda" },
      fr: { title: "Coûts de mariage", slug: "couts-de-mariage" },
      pt: { title: "Custos de casamento", slug: "custos-de-casamento" },
      de: { title: "Hochzeitskosten", slug: "hochzeitskosten" },
      it: { title: "Costi del matrimonio", slug: "costi-del-matrimonio" },
    },
  },
  {
    canonicalSlug: "wedding-planning-guides",
    order: 8,
    byLocale: {
      en: { title: "Planning Guides", slug: "wedding-planning-guides" },
      es: { title: "Guías de planificación", slug: "guias-de-planificacion" },
      fr: { title: "Guides de planification", slug: "guides-de-planification" },
      pt: { title: "Guias de planeamento", slug: "guias-de-planeamento" },
      de: { title: "Planungsratgeber", slug: "planungsratgeber" },
      it: { title: "Guide alla pianificazione", slug: "guide-alla-pianificazione" },
    },
  },
  {
    canonicalSlug: "wedding-design",
    order: 9,
    byLocale: {
      en: { title: "Wedding Design", slug: "wedding-design" },
      es: { title: "Diseño de boda", slug: "diseno-de-boda" },
      fr: { title: "Design de mariage", slug: "design-de-mariage" },
      pt: { title: "Design de casamento", slug: "design-de-casamento" },
      de: { title: "Hochzeitsdesign", slug: "hochzeitsdesign" },
      it: { title: "Design di matrimonio", slug: "design-di-matrimonio" },
    },
  },
  {
    canonicalSlug: "wedding-trends",
    order: 10,
    byLocale: {
      en: { title: "Wedding Trends", slug: "wedding-trends" },
      es: { title: "Tendencias de boda", slug: "tendencias-de-boda" },
      fr: { title: "Tendances de mariage", slug: "tendances-de-mariage" },
      pt: { title: "Tendências de casamento", slug: "tendencias-de-casamento" },
      de: { title: "Hochzeitstrends", slug: "hochzeitstrends" },
      it: { title: "Tendenze matrimoniali", slug: "tendenze-matrimoniali" },
    },
  },
  {
    canonicalSlug: "guest-experience",
    order: 11,
    byLocale: {
      en: { title: "Guest Experience", slug: "guest-experience" },
      es: { title: "Experiencia de invitados", slug: "experiencia-de-invitados" },
      fr: { title: "Expérience des invités", slug: "experience-des-invites" },
      pt: { title: "Experiência dos convidados", slug: "experiencia-dos-convidados" },
      de: { title: "Gästeerlebnis", slug: "gaesteerlebnis" },
      it: { title: "Esperienza degli ospiti", slug: "esperienza-degli-ospiti" },
    },
  },
  {
    canonicalSlug: "wedding-weekend-planning",
    order: 12,
    byLocale: {
      en: { title: "Weekend Planning", slug: "wedding-weekend-planning" },
      es: { title: "Planificación del fin de semana", slug: "planificacion-del-fin-de-semana" },
      fr: { title: "Planification du week-end", slug: "planification-du-week-end" },
      pt: { title: "Planeamento do fim de semana", slug: "planeamento-do-fim-de-semana" },
      de: { title: "Wochenendplanung", slug: "wochenendplanung" },
      it: { title: "Pianificazione del weekend", slug: "pianificazione-del-weekend" },
    },
  },
  {
    canonicalSlug: "legal-requirements",
    order: 13,
    byLocale: {
      en: { title: "Legal Requirements", slug: "legal-requirements" },
      es: { title: "Requisitos legales", slug: "requisitos-legales" },
      fr: { title: "Formalités légales", slug: "formalites-legales" },
      pt: { title: "Requisitos legais", slug: "requisitos-legais" },
      de: { title: "Rechtliche Voraussetzungen", slug: "rechtliche-voraussetzungen" },
      it: { title: "Requisiti legali", slug: "requisiti-legali" },
    },
  },
];
