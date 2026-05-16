import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Pinyon_Script } from 'next/font/google'
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

export const metadata: Metadata = {
  title: {
    default: 'Grecia Mejía Weddings',
    template: '%s · Grecia Mejía Weddings',
  },
  description:
    'Curating timeless multicultural destination weddings across Punta Cana, the Caribbean and the world.',
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
