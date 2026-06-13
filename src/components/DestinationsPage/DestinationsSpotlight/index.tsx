import { getTranslations } from "next-intl/server";

import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { DestinationsPage } from "@/sanity/queries/destinations";

import { SpotlightBody } from "./SpotlightBody";
import { SpotlightImage } from "./SpotlightImage";

type DestinationsSpotlightProps = {
  spotlight: NonNullable<DestinationsPage["spotlight"]>;
  locale: string;
};

export async function DestinationsSpotlight({
  spotlight,
  locale,
}: DestinationsSpotlightProps) {
  const t = await getTranslations({
    locale,
    namespace: "destinationsPage.spotlight",
  });

  const ctaHref = spotlight.slug
    ? `/destinations/${spotlight.slug}`
    : undefined;
  const ctaLabel = spotlight.name
    ? t("cta", { name: spotlight.name })
    : undefined;

  return (
    <section className="bg-ivory px-6 py-[140px] md:px-14">
      <RevealOnScroll>
        <div className="group mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <SpotlightImage
            image={spotlight.image}
            captionPlace={spotlight.captionPlace}
          />
          <SpotlightBody
            eyebrow={spotlight.eyebrow}
            scriptAccent={spotlight.scriptAccent}
            headline={spotlight.headline}
            deck={spotlight.deck}
            body={spotlight.body}
            facts={spotlight.facts}
            ctaLabel={ctaLabel}
            ctaHref={ctaHref}
          />
        </div>
      </RevealOnScroll>
    </section>
  );
}
