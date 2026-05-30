import type {
  MulticulturalPage,
  MulticulturalPageMedia,
} from "@/sanity/queries/multicultural";

import { HeroBackground } from "./HeroBackground";
import { HeroBottomStrip } from "./HeroBottomStrip";
import { HeroContent } from "./HeroContent";
import { HeroVignette } from "./HeroVignette";

type MulticulturalHeroProps = {
  hero: NonNullable<MulticulturalPage["hero"]>;
  image: NonNullable<MulticulturalPageMedia["hero"]>["image"];
};

export function MulticulturalHero({ hero, image }: MulticulturalHeroProps) {
  return (
    <section className="relative isolate h-[78vh] min-h-[680px] max-h-[880px] overflow-hidden bg-cine-bg">
      <HeroBackground image={image} />
      <HeroVignette />
      <HeroContent hero={hero} />
      <HeroBottomStrip hero={hero} />
    </section>
  );
}
