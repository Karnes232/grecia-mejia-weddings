import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { PressPage } from "@/sanity/queries/press";

type PressAwardsProps = {
  awards: NonNullable<PressPage["awards"]>;
};

export function PressAwards({ awards }: PressAwardsProps) {
  const items = awards.items ?? [];
  if (items.length === 0) return null;

  return (
    <section className="bg-cream px-6 py-[140px] md:px-14">
      <RevealOnScroll
        as="div"
        className="mx-auto mb-14 grid max-w-[1400px] grid-cols-1 items-end gap-8 border-b border-olive pb-6 lg:grid-cols-[1.4fr_1fr] lg:gap-12"
      >
        <div>
          {awards.label ? (
            <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {awards.label}
            </span>
          ) : null}
          {awards.headline ? (
            <h2 className="m-0 font-serif font-light text-[clamp(44px,7vw,78px)] leading-[0.96] text-ink">
              {renderHeadline(awards.headline, "olive")}
            </h2>
          ) : null}
        </div>
        {awards.intro ? (
          <p className="m-0 max-w-[40ch] font-serif text-[18px] italic leading-[1.55] text-[#3d3a30]">
            {awards.intro}
          </p>
        ) : null}
      </RevealOnScroll>

      <ul className="mx-auto grid max-w-[1400px] list-none grid-cols-1 gap-x-20 p-0 md:grid-cols-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-[70px_1fr] items-baseline gap-7 border-b border-rule py-7"
          >
            <span className="font-serif text-[22px] italic leading-none text-gold">
              {item.year}
            </span>
            <div>
              <h4 className="m-0 mb-1.5 font-serif text-[clamp(20px,2.2vw,24px)] font-normal italic leading-[1.15] text-ink">
                {item.title}
              </h4>
              {item.publication ? (
                <p className="m-0 text-[12px] uppercase tracking-[0.24em] text-muted">
                  {item.publication}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
