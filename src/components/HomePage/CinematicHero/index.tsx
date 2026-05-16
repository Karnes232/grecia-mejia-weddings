import type { HomePage, HomePageMedia } from '@/sanity/queries/home'

import { HeroBackground } from './HeroBackground'
import { HeroContent } from './HeroContent'
import { HeroCorners } from './HeroCorners'
import { HeroMarquee } from './HeroMarquee'
import { HeroScrollCue } from './HeroScrollCue'
import { HeroVignette } from './HeroVignette'

type CinematicHeroProps = {
  hero: NonNullable<HomePage['hero']>
  image: NonNullable<HomePageMedia['hero']>['image']
  marqueeDestinations: NonNullable<HomePageMedia['marqueeDestinations']>
}

export function CinematicHero({
  hero,
  image,
  marqueeDestinations,
}: CinematicHeroProps) {
  return (
    <section className="relative h-screen min-h-[760px] max-h-[980px] overflow-hidden bg-cine-bg isolate">
      <HeroBackground image={image} />
      <HeroVignette />
      <HeroCorners />
      <HeroContent hero={hero} />

      <div className="absolute inset-x-0 bottom-0 z-4 flex flex-col pointer-events-none">
        <HeroMarquee destinations={marqueeDestinations} />
        <HeroScrollCue />
      </div>
    </section>
  )
}
