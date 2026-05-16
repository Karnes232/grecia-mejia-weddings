import { setRequestLocale } from 'next-intl/server'

import { CinematicHero } from '@/components/HomePage'
import { getHomePage, getHomePageMedia } from '@/sanity/queries/home'

type HomePageProps = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const [home, media] = await Promise.all([
    getHomePage(locale),
    getHomePageMedia(),
  ])

  const hero = home?.hero
  const heroImage = media?.hero?.image

  return (
    <>
      {hero?.headline ? (
        <CinematicHero
          hero={hero}
          image={heroImage}
          marqueeDestinations={media?.marqueeDestinations ?? []}
        />
      ) : (
        <div className="mx-auto max-w-[1100px] px-6 py-32 md:px-14">
          <p className="text-[10px] uppercase tracking-wide-eyebrow text-muted">
            Hero pending content · {locale}
          </p>
          <h1 className="mt-4 font-serif text-[88px] leading-[0.95] tracking-[-0.012em] text-ink">
            Add a hero in <span className="italic text-olive">Sanity Studio</span>.
          </h1>
        </div>
      )}
      {/* TODO: subsequent sections (Atelier intro, Atlas, Featured, Cultures, Venues, Portfolio, Press, Testimonials, CTA). */}
    </>
  )
}
