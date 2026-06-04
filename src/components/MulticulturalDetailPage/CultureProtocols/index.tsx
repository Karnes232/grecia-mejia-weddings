import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Culture } from "@/sanity/queries/culture";

import { SectionDeck, SectionHead } from "../SectionHead";

type CultureProtocolsProps = {
  protocols: NonNullable<Culture["protocols"]>;
};

/** Dark-ink principles section (design `ed-cul-protocols`). */
export function CultureProtocols({ protocols }: CultureProtocolsProps) {
  const items = protocols.items ?? [];

  return (
    <section className="bg-ink px-6 py-[140px] text-ivory md:px-14">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          tone="dark"
          eyebrow={protocols.eyebrow}
          headline={protocols.headline}
          aside={
            protocols.deck ? (
              <SectionDeck tone="dark">{protocols.deck}</SectionDeck>
            ) : undefined
          }
          className="mb-16"
        />

        {items.length ? (
          <RevealOnScroll className="grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-2">
            {items.map((item, i) => (
              <div
                key={i}
                className="border-t border-[rgba(212,186,140,0.4)] pt-6"
              >
                <span className="mb-2 block font-serif text-[14px] italic text-cine-gold">
                  № {String(i + 1).padStart(2, "0")}
                </span>
                {item.title ? (
                  <h4 className="m-0 mb-3.5 font-serif text-[28px] font-normal italic leading-[1.1] text-ivory">
                    {item.title}
                  </h4>
                ) : null}
                {item.body ? (
                  <p className="m-0 text-[14px] leading-[1.7] text-cine-sage">
                    {item.body}
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
