import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Venue } from "@/sanity/queries/venue";

import { SectionHead } from "../_shared/SectionHead";

type VenueHotelsProps = {
  hotels: NonNullable<Venue["hotels"]>;
};

export function VenueHotels({ hotels }: VenueHotelsProps) {
  const items = hotels.items ?? [];
  if (items.length === 0) return null;

  return (
    <section className="bg-ivory px-6 py-[120px] md:px-14">
      <SectionHead
        eyebrow={hotels.eyebrow}
        headline={hotels.headline}
        split={false}
      />

      <RevealOnScroll as="div" className="mx-auto max-w-[1400px]">
        {items.map((hotel, i) => {
          const inner = (
            <>
              <span className="font-serif text-[18px] italic text-gold">
                {hotel.number ? `№ ${hotel.number}` : ""}
              </span>
              <span className="font-serif text-[clamp(20px,2.5vw,24px)] italic leading-[1.1] text-ink">
                {hotel.name}
                {hotel.sub ? (
                  <small className="mt-1.5 block font-sans text-[10px] uppercase not-italic tracking-[0.3em] text-muted">
                    {hotel.sub}
                  </small>
                ) : null}
              </span>
              <span className="text-[12px] uppercase tracking-[0.16em] text-muted">
                {hotel.distance}
              </span>
              <span className="text-[12px] text-muted">{hotel.keys}</span>
              <span
                aria-hidden
                className="hidden text-right font-serif text-[22px] italic text-olive md:block"
              >
                →
              </span>
            </>
          );
          const rowClass =
            "grid grid-cols-[44px_1fr] items-center gap-x-4 gap-y-1 border-b border-rule py-6 transition-[padding,background] duration-300 hover:bg-[rgba(184,153,104,0.04)] md:grid-cols-[60px_1.3fr_1fr_1fr_60px] md:gap-8 md:hover:pl-2";
          return hotel.href ? (
            <a
              key={i}
              href={hotel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={rowClass}
            >
              {inner}
            </a>
          ) : (
            <div key={i} className={rowClass}>
              {inner}
            </div>
          );
        })}
      </RevealOnScroll>
    </section>
  );
}
