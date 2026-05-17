import type { HomePage } from "@/sanity/queries/home";

import { RevealOnScroll } from "../_shared/RevealOnScroll";
import { renderHeadline } from "../_shared/renderHeadline";

import { VenueRow } from "./VenueRow";

type VenuesConsideredProps = {
  data: NonNullable<HomePage["venuesConsidered"]>;
};

export function VenuesConsidered({ data }: VenuesConsideredProps) {
  const venues = data.venues ?? [];

  return (
    <section className="bg-ivory px-6 py-[140px] md:px-14">
      <div className="mx-auto max-w-[1400px]">
        <RevealOnScroll className="mb-12 grid grid-cols-1 items-end gap-12 border-b border-olive pb-6 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div>
            {data.eyebrow ? (
              <span className="mb-5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {data.eyebrow}
              </span>
            ) : null}
            {data.headline ? (
              <h2 className="m-0 font-serif font-light text-[clamp(48px,7vw,82px)] leading-[0.96] tracking-[-0.005em] text-ink">
                {renderHeadline(data.headline, "olive")}
              </h2>
            ) : null}
          </div>
          {data.intro ? (
            <p className="m-0 max-w-[40ch] font-serif italic text-[clamp(17px,1.6vw,20px)] leading-[1.5] text-ink/80">
              {data.intro}
            </p>
          ) : null}
        </RevealOnScroll>

        {venues.length > 0 ? (
          <RevealOnScroll className="border-t border-rule">
            {venues.map((v, i) => (
              <VenueRow key={v.slug ?? v.name ?? i} venue={v} />
            ))}
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
