import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type {
  DestinationsPage,
  DestinationsPageMedia,
} from "@/sanity/queries/destinations";

import { SpotlightBody } from "./SpotlightBody";
import { SpotlightImage } from "./SpotlightImage";

type DestinationsSpotlightProps = {
  spotlight: NonNullable<DestinationsPage["spotlight"]>;
  image?: NonNullable<DestinationsPageMedia["spotlight"]>["image"];
};

export function DestinationsSpotlight({
  spotlight,
  image,
}: DestinationsSpotlightProps) {
  return (
    <section className="bg-ivory px-6 py-[140px] md:px-14">
      <RevealOnScroll>
        <div className="group mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <SpotlightImage
            image={image}
            captionPlace={spotlight.imageCaptionPlace}
            captionDate={spotlight.imageCaptionDate}
          />
          <SpotlightBody
            eyebrow={spotlight.eyebrow}
            scriptAccent={spotlight.scriptAccent}
            headline={spotlight.headline}
            deck={spotlight.deck}
            body={spotlight.body}
            facts={spotlight.facts}
            ctaLabel={spotlight.ctaLabel}
            ctaHref={spotlight.ctaHref}
          />
        </div>
      </RevealOnScroll>
    </section>
  );
}
