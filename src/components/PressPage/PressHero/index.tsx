import type { PressPage, PressPageMedia } from "@/sanity/queries/press";

import { HeroBackground } from "./HeroBackground";
import { HeroBottomStrip } from "./HeroBottomStrip";
import { HeroContent } from "./HeroContent";
import { HeroVignette } from "./HeroVignette";

type PressHeroProps = {
  hero: NonNullable<PressPage["hero"]>;
  image: NonNullable<PressPageMedia["hero"]>["image"];
};

export function PressHero({ hero, image }: PressHeroProps) {
  return (
    <section className="relative isolate h-[78vh] min-h-[680px] max-h-[880px] overflow-hidden bg-cine-bg">
      <HeroBackground image={image} />
      <HeroVignette />
      <HeroContent hero={hero} />
      <HeroBottomStrip hero={hero} />
    </section>
  );
}
