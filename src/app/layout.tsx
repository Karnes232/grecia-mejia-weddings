import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Pinyon_Script } from 'next/font/google'

import { urlFor } from '@/sanity/lib/image'
import { getSiteSettings } from '@/sanity/queries/layout'

import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

const pinyon = Pinyon_Script({
  variable: '--font-script',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings('en')
  const logo = settings?.logo

  const iconUrl = logo?.asset
    ? urlFor(logo).width(64).height(64).fit('crop').format('png').url()
    : undefined
  const appleIconUrl = logo?.asset
    ? urlFor(logo).width(180).height(180).fit('crop').format('png').url()
    : undefined

  return {
    title: {
      default: 'Grecia Mejía Weddings',
      template: '%s · Grecia Mejía Weddings',
    },
    description:
      'Curating timeless multicultural destination weddings across Punta Cana, the Caribbean and the world.',
    icons: iconUrl
      ? {
          icon: [{ url: iconUrl, type: 'image/png', sizes: '64x64' }],
          apple: appleIconUrl
            ? [{ url: appleIconUrl, type: 'image/png', sizes: '180x180' }]
            : undefined,
        }
      : undefined,
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={`${cormorant.variable} ${inter.variable} ${pinyon.variable} h-full antialiased`}
    >
      <body className="bg-ivory text-ink min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  )
}
