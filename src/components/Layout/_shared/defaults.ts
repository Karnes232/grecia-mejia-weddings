import type { FooterData, NavigationData, SiteSettings } from '@/sanity/queries/layout'

export const DEFAULT_NAV: Required<Pick<NavigationData, 'mainLinks' | 'cta'>> = {
  mainLinks: [
    { key: 'house', label: 'The House', href: '/about' },
    { key: 'destinations', label: 'Destinations', href: '/destinations' },
    { key: 'multicultural', label: 'Multicultural', href: '/multicultural' },
    { key: 'venues', label: 'Venues', href: '/venues' },
    { key: 'portfolio', label: 'Portfolio', href: '/portfolio' },
    { key: 'journal', label: 'Journal', href: '/journal' },
    { key: 'contact', label: 'Contact', href: '/contact' },
  ],
  cta: { label: 'Private Consultation', href: '/contact' },
}

export const DEFAULT_FOOTER: Required<Pick<FooterData, 'columns'>> = {
  columns: [
    {
      heading: 'Atelier',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Method', href: '/method' },
        { label: 'Press', href: '/press' },
        { label: 'Journal', href: '/journal' },
      ],
    },
    {
      heading: 'Plan',
      links: [
        { label: 'Destinations', href: '/destinations' },
        { label: 'Multicultural', href: '/multicultural' },
        { label: 'Venues', href: '/venues' },
        { label: 'Services', href: '/services' },
      ],
    },
    {
      heading: 'Studio',
      links: [
        { label: 'Punta Cana', href: '#' },
        { label: 'Milan · 2026', href: '#' },
        { label: 'Paris · 2027', href: '#' },
      ],
    },
    {
      heading: 'Contact',
      links: [
        { label: '+1 829 000 0000', href: 'tel:+18290000000' },
        { label: 'hello@greciamejia.com', href: 'mailto:hello@greciamejia.com' },
        { label: 'WhatsApp', href: '#' },
        { label: 'Instagram', href: '#' },
      ],
    },
  ],
}

export const DEFAULT_SETTINGS: SiteSettings = {
  brandName: 'Grecia Mejía',
  signatureParagraph:
    'Curating timeless multicultural destination weddings across Punta Cana, the Caribbean and the world.',
  copyrightLine:
    '© {year} · Grecia Mejía Weddings · Curating timeless weddings since 2011',
}
