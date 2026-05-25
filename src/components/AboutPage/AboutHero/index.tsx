import type { AboutPage, AboutPageMedia } from "@/sanity/queries/about";

import { HeroBody } from "./HeroBody";
import { HeroPortrait } from "./HeroPortrait";

type AboutHeroProps = {
  hero: NonNullable<AboutPage["hero"]>;
  image: NonNullable<AboutPageMedia["hero"]>["image"];
};

export function AboutHero({ hero, image }: AboutHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ivory px-6 py-20 md:px-14 md:pb-[100px]">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:gap-20 lg:grid-cols-[0.95fr_1.05fr]">
        <HeroPortrait
          image={image}
          captionLeft={hero.captionLeft}
          captionRight={hero.captionRight}
        />
        <HeroBody hero={hero} />
      </div>
    </section>
  );
}
