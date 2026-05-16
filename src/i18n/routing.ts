import { defineRouting } from 'next-intl/routing'

export const locales = ['en', 'es', 'fr', 'pt', 'de', 'it'] as const
export type Locale = (typeof locales)[number]

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/destinations': {
      en: '/destinations',
      es: '/destinos',
      fr: '/destinations',
      pt: '/destinos',
      de: '/reiseziele',
      it: '/destinazioni',
    },
    '/multicultural': {
      en: '/multicultural',
      es: '/multicultural',
      fr: '/multiculturel',
      pt: '/multicultural',
      de: '/multikulturell',
      it: '/multiculturale',
    },
    '/venues': {
      en: '/venues',
      es: '/locaciones',
      fr: '/lieux',
      pt: '/locais',
      de: '/orte',
      it: '/sedi',
    },
  },
})
