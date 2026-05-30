import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { MulticulturalPage } from "@/sanity/queries/multicultural";

type MulticulturalPairingsProps = {
  pairings: NonNullable<MulticulturalPage["pairings"]>;
};

export function MulticulturalPairings({
  pairings,
}: MulticulturalPairingsProps) {
  const items = pairings.items ?? [];

  return (
    <section className="bg-olive px-6 py-[140px] text-ivory md:px-14">
      <div className="mx-auto max-w-[1400px]">
        <RevealOnScroll className="mb-14 grid grid-cols-1 items-end gap-12 border-b border-[rgba(212,205,184,0.3)] pb-6 md:grid-cols-2">
          <div>
            {pairings.eyebrow ? (
              <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-cine-sage">
                {pairings.eyebrow}
              </span>
            ) : null}
            {pairings.headline ? (
              <h2 className="m-0 font-serif font-light text-[clamp(44px,6.5vw,78px)] leading-[0.96] text-ivory">
                {renderHeadline(pairings.headline, "gold")}
              </h2>
            ) : null}
          </div>
          {pairings.intro ? (
            <p className="m-0 max-w-[42ch] font-serif italic text-[clamp(16px,1.7vw,20px)] leading-[1.5] text-cine-sage">
              {pairings.intro}
            </p>
          ) : null}
        </RevealOnScroll>

        {items.length > 0 ? (
          <RevealOnScroll className="grid grid-cols-1 gap-px border border-[rgba(212,205,184,0.2)] bg-[rgba(212,205,184,0.2)] sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <div key={i} className="bg-olive px-7 py-9">
                {item.first || item.second ? (
                  <div className="mb-4 font-serif text-[30px] italic leading-none text-ivory">
                    {item.first ? (
                      <span className="text-cine-gold">{item.first}</span>
                    ) : null}
                    {item.first && item.second ? (
                      <span className="px-1 text-[26px] text-cine-sage">+</span>
                    ) : null}
                    {item.second ? (
                      <span className="text-cine-gold">{item.second}</span>
                    ) : null}
                  </div>
                ) : null}
                {item.body ? (
                  <p className="m-0 text-[13px] leading-[1.65] text-cine-sage">
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
