import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { Footer, LenisProvider, Navbar } from '@/components/Layout'
import { routing, type Locale } from '@/i18n/routing'
import {
  getFooter,
  getNavigation,
  getSiteSettings,
} from '@/sanity/queries/layout'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type LocaleLayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)

  const typedLocale = locale as Locale

  const [settings, navigation, footer, t] = await Promise.all([
    getSiteSettings(locale),
    getNavigation(locale),
    getFooter(locale),
    getTranslations({ locale, namespace: 'nav' }),
  ])

  return (
    <NextIntlClientProvider>
      <LenisProvider>
        <Navbar
          navigation={navigation}
          settings={settings}
          locale={typedLocale}
          labels={{
            cta: t('cta'),
            openMenu: t('openMenu'),
            closeMenu: t('closeMenu'),
          }}
        />
        <main className="flex-1">{children}</main>
        <Footer footer={footer} settings={settings} locale={typedLocale} />
      </LenisProvider>
    </NextIntlClientProvider>
  )
}
