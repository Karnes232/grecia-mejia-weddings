import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Culture } from "@/sanity/queries/culture";

import { SectionDeck, SectionHead } from "../SectionHead";

type CultureGuestProps = {
  guest: NonNullable<Culture["guest"]>;
};

/** Guest-management utility grid (design `ed-cul-guest`). */
export function CultureGuest({ guest }: CultureGuestProps) {
  const cells = guest.cells ?? [];

  return (
    <section className="border-t border-rule bg-ivory px-6 py-[120px] md:px-14">
      <div className="mx-auto max-w-[1300px]">
        <SectionHead
          eyebrow={guest.eyebrow}
          headline={guest.headline}
          aside={guest.deck ? <SectionDeck>{guest.deck}</SectionDeck> : undefined}
          className="mb-12"
        />

        {cells.length ? (
          <RevealOnScroll className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {cells.map((cell, i) => (
              <div key={i}>
                {cell.title ? (
                  <h4 className="m-0 mb-3.5 border-b border-gold pb-3 font-serif text-[26px] font-normal italic leading-[1.1] text-ink">
                    {cell.title}
                  </h4>
                ) : null}
                {cell.body ? (
                  <p className="m-0 text-[14px] leading-[1.7] text-[#3d3a30]">
                    {cell.body}
                  </p>
                ) : null}
              </div>
            ))}
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
