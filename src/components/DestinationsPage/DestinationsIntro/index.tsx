import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { DestinationsPage } from "@/sanity/queries/destinations";

import { IntroBody } from "./IntroBody";
import { IntroSide } from "./IntroSide";
import { IntroStats } from "./IntroStats";

type DestinationsIntroProps = {
  intro: NonNullable<DestinationsPage["intro"]>;
};

export function DestinationsIntro({ intro }: DestinationsIntroProps) {
  return (
    <section className="border-t border-rule bg-ivory px-6 py-[120px] md:px-14">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-20 md:grid-cols-[280px_1fr]">
        <IntroSide eyebrow={intro.eyebrow} />

        <RevealOnScroll className="max-w-[62ch]">
          <IntroBody
            headline={intro.headline}
            lede={intro.lede}
            body={intro.body}
          />
          <IntroStats stats={intro.stats} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
