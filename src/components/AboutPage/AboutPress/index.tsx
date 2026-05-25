import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { AboutPage } from "@/sanity/queries/about";

import { AwardsList } from "./AwardsList";
import { PressWall } from "./PressWall";

type AboutPressProps = {
  press: NonNullable<AboutPage["press"]>;
};

export function AboutPress({ press }: AboutPressProps) {
  return (
    <section className="bg-ivory px-6 py-[140px] md:px-14">
      <RevealOnScroll className="mx-auto mb-16 max-w-[1400px] border-b border-olive pb-6">
        {press.label ? (
          <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
            {press.label}
          </span>
        ) : null}
        {press.headline ? (
          <h2 className="m-0 font-serif font-light text-[clamp(44px,7vw,78px)] leading-[0.96] text-ink">
            {renderHeadline(press.headline, "olive")}
          </h2>
        ) : null}
      </RevealOnScroll>

      <RevealOnScroll className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <PressWall publications={press.publications} />
        <AwardsList awards={press.awards} />
      </RevealOnScroll>
    </section>
  );
}
