import Image from 'next/image'

import { Link } from '@/i18n/navigation'
import type { Locale } from '@/i18n/routing'
import { urlFor } from '@/sanity/lib/image'
import type { FooterData, SiteSettings } from '@/sanity/queries/layout'

import { DEFAULT_FOOTER, DEFAULT_SETTINGS } from './defaults'
import { LanguageSwitcher } from './LanguageSwitcher'

type FooterProps = {
  footer: FooterData | null
  settings: SiteSettings | null
  locale: Locale
}

function isExternal(href: string) {
  return /^(https?:|mailto:|tel:|#)/.test(href)
}

function resolveHref(
  href: string | undefined,
  label: string | undefined,
  contact: SiteSettings['contact'],
): string {
  if (href && href !== '#') return href
  const key = label?.toLowerCase().trim()
  if (!key || !contact) return href ?? '#'
  if (key === 'whatsapp' && contact.whatsappUrl) return contact.whatsappUrl
  if (key === 'instagram' && contact.instagramUrl) return contact.instagramUrl
  if (key === 'email' && contact.email) return `mailto:${contact.email}`
  if (key === 'phone' && contact.phone) return `tel:${contact.phone.replace(/\s+/g, '')}`
  return href ?? '#'
}

export function Footer({ footer, settings, locale }: FooterProps) {
  const columns = footer?.columns?.length ? footer.columns : DEFAULT_FOOTER.columns
  const brandName = settings?.brandName ?? DEFAULT_SETTINGS.brandName!
  const footerLogo = settings?.footerLogo
  const footerLogoUrl = footerLogo?.asset
    ? urlFor(footerLogo).width(560).fit('max').auto('format').url()
    : null
  const signature =
    settings?.signatureParagraph ?? DEFAULT_SETTINGS.signatureParagraph
  const copyrightTemplate =
    settings?.copyrightLine ?? DEFAULT_SETTINGS.copyrightLine!
  const copyright = copyrightTemplate.replace(
    '{year}',
    String(new Date().getFullYear()),
  )

  return (
    <footer className="bg-ink text-footer-text px-6 pt-20 pb-8 md:px-14">
      <div className="mx-auto mb-16 grid max-w-[1400px] gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
        <div>
          {footerLogoUrl ? (
            <Image
              src={footerLogoUrl}
              alt={footerLogo?.alt ?? brandName}
              width={280}
              height={120}
              className="h-auto w-[220px] object-contain"
            />
          ) : (
            <span className="block font-script text-[46px] leading-none text-footer-heading">
              {brandName}
            </span>
          )}
          {signature ? (
            <p className="mt-5 max-w-[30ch] text-[13px] leading-relaxed text-footer-muted">
              {signature}
            </p>
          ) : null}
        </div>
        {columns.map((col, i) => (
          <div key={`${col.heading ?? 'col'}-${i}`}>
            {col.heading ? (
              <h4 className="mb-5 text-[10px] font-medium uppercase tracking-wide-eyebrow text-footer-heading">
                {col.heading}
              </h4>
            ) : null}
            <ul className="grid gap-[10px]">
              {col.links?.map((link, j) => {
                if (!link.label) return null
                const href = resolveHref(link.href, link.label, settings?.contact)
                const cls =
                  'font-serif italic text-[15px] text-footer-text no-underline hover:text-ivory transition-colors'
                return (
                  <li key={`${link.label}-${j}`}>
                    {isExternal(href) ? (
                      <a className={cls} href={href}>
                        {link.label}
                      </a>
                    ) : (
                      <Link className={cls} href={href as never}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 border-t border-[rgba(212,186,140,0.2)] pt-8 text-[10px] uppercase tracking-eyebrow text-footer-muted md:flex-row md:items-center md:justify-between">
        <span>{copyright}</span>
        <LanguageSwitcher currentLocale={locale} variant="footer" />
      </div>
    </footer>
  )
}
