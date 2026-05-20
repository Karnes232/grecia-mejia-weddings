import type {
  DestinationsPage,
  DestinationsPageMedia,
} from "@/sanity/queries/destinations";

import { HeroBackground } from "./HeroBackground";
import { HeroBottomStrip } from "./HeroBottomStrip";
import { HeroContent } from "./HeroContent";
import { HeroVignette } from "./HeroVignette";

type DestinationsHeroProps = {
  hero: NonNullable<DestinationsPage["hero"]>;
  image: NonNullable<DestinationsPageMedia["hero"]>["image"];
};

export function DestinationsHero({ hero, image }: DestinationsHeroProps) {
  return (
    <section className="relative isolate h-[78vh] min-h-[680px] max-h-[880px] overflow-hidden bg-cine-bg">
      <HeroBackground image={image} />
      <HeroVignette />
      <HeroContent hero={hero} />
      <HeroBottomStrip hero={hero} />
    </section>
  );
}
