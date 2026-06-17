/**
 * Grecia Mejía, the Journal author. One doc per locale (linked via
 * translation.metadata) so `role` + `bio` translate while the name stays the
 * same across locales.
 */

import { type Locale } from "../../../i18n/routing";

export type AuthorLocaleCopy = { name: string; role: string; bio: string };

export const AUTHOR_COPY: Record<Locale, AuthorLocaleCopy> = {
  en: {
    name: "Grecia Mejía",
    role: "Founder",
    bio: "Grecia Mejía is the founder of the studio, planning destination and multicultural weddings across the Caribbean and Europe.",
  },
  es: {
    name: "Grecia Mejía",
    role: "Fundadora",
    bio: "Grecia Mejía es la fundadora del estudio y planifica bodas de destino y multiculturales en el Caribe y Europa.",
  },
  fr: {
    name: "Grecia Mejía",
    role: "Fondatrice",
    bio: "Grecia Mejía est la fondatrice de l'atelier et organise des mariages de destination et multiculturels dans les Caraïbes et en Europe.",
  },
  pt: {
    name: "Grecia Mejía",
    role: "Fundadora",
    bio: "Grecia Mejía é a fundadora do atelier e planeia casamentos de destino e multiculturais nas Caraíbas e na Europa.",
  },
  de: {
    name: "Grecia Mejía",
    role: "Gründerin",
    bio: "Grecia Mejía ist die Gründerin des Studios und plant Destination- und multikulturelle Hochzeiten in der Karibik und in Europa.",
  },
  it: {
    name: "Grecia Mejía",
    role: "Fondatrice",
    bio: "Grecia Mejía è la fondatrice dello studio e organizza matrimoni di destinazione e multiculturali nei Caraibi e in Europa.",
  },
};
