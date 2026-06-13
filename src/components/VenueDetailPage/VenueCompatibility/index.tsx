import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Venue } from "@/sanity/queries/venue";

import { SectionDeck, SectionHead } from "../_shared/SectionHead";

type VenueCompatibilityProps = {
  compatibility: NonNullable<Venue["compatibility"]>;
};

export function VenueCompatibility({ compatibility }: VenueCompatibilityProps) {
  const items = compatibility.items ?? [];
  if (items.length === 0) return null;

  return (
    <section className="bg-olive px-6 py-[140px] text-ivory md:px-14">
      <SectionHead
        eyebrow={compatibility.eyebrow}
        headline={compatibility.headline}
        tone="dark"
        aside={
          compatibility.intro ? (
            <SectionDeck tone="dark">{compatibility.intro}</SectionDeck>
          ) : null
        }
      />

      <RevealOnScroll
        as="div"
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-px border border-[rgba(212,205,184,0.18)] bg-[rgba(212,205,184,0.18)] md:grid-cols-2"
      >
        {items.map((item, i) => {
          const rating = item.rating
            ? "★".repeat(Math.max(1, Math.min(5, Math.round(item.rating))))
            : null;
          return (
            <div
              key={i}
              className="grid grid-cols-[1fr_auto] items-center gap-4 bg-olive px-7 py-8"
            >
              <h4 className="m-0 font-serif text-[24px] font-normal italic leading-none text-ivory">
                {item.name}
                {item.sub || item.note ? (
                  <small className="mt-2 block font-sans text-[11px] not-italic uppercase tracking-[0.3em] text-cine-sage">
                    {[item.sub, item.note].filter(Boolean).join(" · ")}
                  </small>
                ) : null}
              </h4>
              {rating ? (
                <span
                  aria-label={item.rating ? `${item.rating} / 5` : undefined}
                  className="font-serif text-[16px] italic tracking-[0.06em] text-cine-gold"
                >
                  {rating}
                </span>
              ) : null}
            </div>
          );
        })}
      </RevealOnScroll>
    </section>
  );
}
