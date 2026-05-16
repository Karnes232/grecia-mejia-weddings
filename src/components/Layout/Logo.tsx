import Image from 'next/image'

import { urlFor } from '@/sanity/lib/image'
import type { SiteSettings } from '@/sanity/queries/layout'

type LogoProps = {
  brandName?: string
  tagline?: string
  size?: number
  logo?: SiteSettings['logo']
}

export function Logo({
  brandName = 'Grecia Mejía',
  tagline = 'Weddings · Since 2011',
  size = 104,
  logo,
}: LogoProps) {
  const logoUrl = logo?.asset
    ? urlFor(logo).width(size * 2).height(size * 2).fit('max').auto('format').url()
    : null

  return (
    <span className="flex items-center gap-3">
      {logoUrl ? (
        <Image
          src={logoUrl}
          alt={logo?.alt ?? brandName}
          width={size}
          height={size}
          className="shrink-0 object-contain -my-7 md:-my-8"
          priority
        />
      ) : null}
      {/* <span className="leading-none">
        <span className="block font-serif italic text-[22px] leading-none tracking-[0.01em] text-olive">
          {brandName}
        </span>
        {tagline ? (
          <span className="mt-1 block text-[9px] uppercase tracking-wide-eyebrow text-muted">
            {tagline}
          </span>
        ) : null}
      </span> */}
    </span>
  )
}


