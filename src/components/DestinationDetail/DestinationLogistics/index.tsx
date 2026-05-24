import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Destination } from "@/sanity/queries/destination";

import { GettingThere } from "./GettingThere";
import { WeatherTable } from "./WeatherTable";

type DestinationLogisticsProps = {
  logistics: NonNullable<Destination["logistics"]>;
};

export function DestinationLogistics({ logistics }: DestinationLogisticsProps) {
  return (
    <section className="bg-cream px-6 py-[140px] md:px-14">
      <RevealOnScroll className="mx-auto mb-14 max-w-[1400px] border-b border-olive pb-6">
        {logistics.eyebrow ? (
          <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
            {logistics.eyebrow}
          </span>
        ) : null}
        {logistics.headline ? (
          <h2 className="m-0 font-serif font-light text-[clamp(48px,8vw,82px)] leading-[0.96] text-ink">
            {renderHeadline(logistics.headline, "olive")}
          </h2>
        ) : null}
      </RevealOnScroll>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-2">
        <RevealOnScroll>
          <GettingThere data={logistics.gettingThere} />
        </RevealOnScroll>
        <RevealOnScroll>
          <WeatherTable data={logistics.weather} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
