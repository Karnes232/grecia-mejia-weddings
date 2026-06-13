import type {
  Destination,
  DestinationMedia,
} from "@/sanity/queries/destination";

import { HeroBackground } from "./HeroBackground";
import { HeroBottomStrip } from "./HeroBottomStrip";
import { HeroContent } from "./HeroContent";
import { HeroVignette } from "./HeroVignette";

type DestinationHeroProps = {
  hero: NonNullable<Destination["hero"]>;
  image: DestinationMedia["heroImage"];
};

export function DestinationHero({ hero, image }: DestinationHeroProps) {
  return (
    <section className="relative isolate h-[78vh] min-h-[680px] max-h-[880px] overflow-hidden bg-ink">
      <HeroBackground image={image} />
      <HeroVignette />
      <HeroContent hero={hero} />
      <HeroBottomStrip hero={hero} />
    </section>
  );
}
