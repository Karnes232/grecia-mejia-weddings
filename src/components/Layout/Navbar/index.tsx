import clsx from 'clsx'

import { Link } from '@/i18n/navigation'
import type { Locale } from '@/i18n/routing'
import type { NavigationData, SiteSettings } from '@/sanity/queries/layout'

import { DEFAULT_NAV, DEFAULT_SETTINGS } from './defaults'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Logo } from './Logo'
import { NavbarShell } from './NavbarShell'

type NavbarProps = {
  navigation: NavigationData | null
  settings: SiteSettings | null
  locale: Locale
  activeKey?: string
  labels: {
    cta: string
    openMenu: string
    closeMenu: string
  }
}

export function Navbar({
  navigation,
  settings,
  locale,
  activeKey,
  labels,
}: NavbarProps) {
  const links = navigation?.mainLinks?.length
    ? navigation.mainLinks
    : DEFAULT_NAV.mainLinks
  const cta = navigation?.cta?.label
    ? navigation.cta
    : { ...DEFAULT_NAV.cta, label: labels.cta }
  const brandName = settings?.brandName ?? DEFAULT_SETTINGS.brandName

  const brand = (
    <Link
      href="/"
      className="flex items-center gap-3 text-ink no-underline"
      aria-label={brandName}
    >
      <Logo brandName={brandName} logo={settings?.logo} />
    </Link>
  )

  const desktopCenter = (
    <>
      {links.map((l) => (
        <Link
          key={l.key}
          href={l.href as never}
          className={clsx(
            'text-[11px] uppercase tracking-eyebrow text-ink no-underline',
            'border-b border-transparent transition-colors duration-200',
            'hover:text-olive hover:border-gold',
            activeKey === l.key && 'text-olive border-gold',
          )}
        >
          {l.label}
        </Link>
      ))}
    </>
  )

  const desktopRight = (
    <>
      <LanguageSwitcher currentLocale={locale} variant="inline" />
      {cta?.href ? (
        <Link
          href={cta.href as never}
          className={clsx(
            'inline-block border border-olive px-[18px] py-[10px] text-[10px] uppercase tracking-wide-eyebrow text-olive no-underline transition-colors duration-300',
            'hover:bg-olive hover:text-ivory ',
          )}
        >
          {cta.label}
        </Link>
      ) : null}
    </>
  )

  const mobileMenu = (
    <>
      <nav className="flex flex-col gap-6" aria-label="Primary">
        {links.map((l) => (
          <Link
            key={l.key}
            href={l.href as never}
            className={clsx(
              'font-serif italic text-[32px] leading-none text-ink no-underline',
              'border-b border-transparent w-fit pb-1 transition-colors',
              activeKey === l.key && 'text-olive border-gold',
            )}
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto flex flex-col items-center gap-8 pt-12">
        <LanguageSwitcher currentLocale={locale} variant="stacked" />
        {cta?.href ? (
          <Link
            href={cta.href as never}
            className="inline-block border border-olive px-7 py-4 text-[10px] uppercase tracking-wide-eyebrow text-olive transition-colors duration-300 hover:bg-olive hover:text-ivory"
          >
            {cta.label}
          </Link>
        ) : null}
      </div>
    </>
  )

  return (
    <NavbarShell
      desktopCenter={desktopCenter}
      desktopRight={desktopRight}
      brand={brand}
      mobileMenu={mobileMenu}
      openLabel={labels.openMenu}
      closeLabel={labels.closeMenu}
    />
  )
}
