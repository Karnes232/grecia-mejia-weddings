import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { ServicePage } from "@/sanity/queries/service";

type ServicesApproachProps = {
  approach: NonNullable<ServicePage["approach"]>;
};

export function ServicesApproach({ approach }: ServicesApproachProps) {
  const movements = approach.movements ?? [];

  return (
    <section className="bg-ivory px-6 py-[130px] md:px-14">
      <div className="mx-auto max-w-[1400px]">
        <RevealOnScroll className="mb-14 flex flex-col items-start justify-between gap-8 border-b border-olive pb-6 md:flex-row md:items-end">
          <div>
            {approach.eyebrow ? (
              <span className="mb-3 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {approach.eyebrow}
              </span>
            ) : null}
            {approach.headline ? (
              <h2 className="m-0 font-serif font-light text-[clamp(40px,5.5vw,72px)] leading-[0.96] text-ink">
                {renderHeadline(approach.headline, "olive")}
              </h2>
            ) : null}
          </div>
          {approach.deck ? (
            <p className="max-w-[42ch] font-serif text-[17px] italic leading-[1.55] text-muted">
              {approach.deck}
            </p>
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {movements.map((m, i) => (
            <div key={i} className="border-t border-rule pt-7">
              <span className="mb-5 block text-[10px] uppercase tracking-[0.32em] text-gold">
                № {String(i + 1).padStart(2, "0")}
              </span>
              {m.title ? (
                <h4 className="m-0 mb-3 font-serif text-[22px] italic font-normal text-ink">
                  {m.title}
                </h4>
              ) : null}
              {m.body ? (
                <p className="m-0 text-[14px] leading-[1.7] text-muted">
                  {m.body}
                </p>
              ) : null}
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
