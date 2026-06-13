import type { SanityImage } from "@/sanity/queries/destinations";

import { HeroBackground } from "./HeroBackground";
import { HeroBottomStrip } from "./HeroBottomStrip";
import { HeroContent } from "./HeroContent";
import { HeroVignette } from "./HeroVignette";

/** Shared hero shape used by both the Venues hub and the region pages. */
export type VenuesHeroData = {
  eyebrow?: string;
  scriptOverline?: string;
  headline?: string;
  deck?: string;
  captionLeft?: string;
  captionCenter?: string;
  captionRight?: string;
};

type VenuesHeroProps = {
  hero: VenuesHeroData;
  image?: SanityImage;
};

export function VenuesHero({ hero, image }: VenuesHeroProps) {
  return (
    <section className="relative isolate h-[78vh] min-h-[680px] max-h-[880px] overflow-hidden bg-cine-bg">
      <HeroBackground image={image} />
      <HeroVignette />
      <HeroContent hero={hero} />
      <HeroBottomStrip hero={hero} />
    </section>
  );
}
