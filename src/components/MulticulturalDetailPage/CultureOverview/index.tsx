import { DiamondDivider } from "@/components/_shared/DiamondDivider";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Culture } from "@/sanity/queries/culture";

import { OverviewBody } from "./OverviewBody";

type CultureOverviewProps = {
  overview: NonNullable<Culture["overview"]>;
};

export function CultureOverview({ overview }: CultureOverviewProps) {
  return (
    <section className="bg-ivory px-6 py-[120px] md:px-14">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-20 md:grid-cols-[280px_1fr]">
        <RevealOnScroll className="pt-3.5 md:sticky md:top-[140px]">
          {overview.sideEyebrow ? (
            <span className="mb-5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {overview.sideEyebrow}
            </span>
          ) : null}
          <DiamondDivider width={80} className="text-gold" />
          {overview.sideNote ? (
            <p className="mt-6 text-[13px] leading-[1.7] text-muted">
              {overview.sideNote}
            </p>
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll className="max-w-[62ch]">
          <OverviewBody overview={overview} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
