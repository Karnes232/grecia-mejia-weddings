import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Venue } from "@/sanity/queries/venue";

import { SectionHead } from "../_shared/SectionHead";

type VenueLogisticsProps = {
  logistics: NonNullable<Venue["logistics"]>;
};

export function VenueLogistics({ logistics }: VenueLogisticsProps) {
  const blocks = logistics.blocks ?? [];
  if (blocks.length === 0) return null;

  return (
    <section className="bg-ivory px-6 py-[140px] md:px-14">
      <SectionHead
        eyebrow={logistics.eyebrow}
        headline={logistics.headline}
        split={false}
      />

      <RevealOnScroll
        as="div"
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-16"
      >
        {blocks.map((block, i) => (
          <div key={i}>
            {block.title ? (
              <h4 className="m-0 mb-[18px] border-b border-gold pb-3 font-serif text-[26px] font-normal italic text-olive">
                {block.title}
              </h4>
            ) : null}
            <dl className="m-0 grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-[160px_1fr]">
              {(block.rows ?? []).map((row, j) => (
                <div key={j} className="contents">
                  <dt className="self-center text-[10px] uppercase tracking-[0.28em] text-muted">
                    {row.label}
                  </dt>
                  <dd className="m-0 font-serif text-[16px] italic leading-[1.4] text-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </RevealOnScroll>
    </section>
  );
}
