import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { MulticulturalPage } from "@/sanity/queries/multicultural";

type MulticulturalMethodologyProps = {
  methodology: NonNullable<MulticulturalPage["methodology"]>;
};

export function MulticulturalMethodology({
  methodology,
}: MulticulturalMethodologyProps) {
  const steps = methodology.steps ?? [];

  return (
    <section className="bg-cream px-6 py-[140px] md:px-14">
      <div className="mx-auto max-w-[1400px]">
        <RevealOnScroll className="mb-16 grid grid-cols-1 items-end gap-12 border-b border-olive pb-6 md:grid-cols-[1.2fr_1fr]">
          <div>
            {methodology.eyebrow ? (
              <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {methodology.eyebrow}
              </span>
            ) : null}
            {methodology.headline ? (
              <h2 className="m-0 font-serif font-light text-[clamp(48px,7vw,80px)] leading-[0.96] text-ink">
                {renderHeadline(methodology.headline, "olive")}
              </h2>
            ) : null}
          </div>
          {methodology.intro ? (
            <p className="m-0 max-w-[42ch] font-serif italic text-[clamp(16px,1.6vw,20px)] leading-[1.55] text-[#3d3a30]">
              {methodology.intro}
            </p>
          ) : null}
        </RevealOnScroll>

        {steps.length > 0 ? (
          <RevealOnScroll className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <div key={i} className="border-t border-gold pt-8">
                <span className="mb-4 block font-serif font-light text-[54px] italic leading-none text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step.title ? (
                  <h3 className="m-0 mb-3.5 font-serif text-[26px] font-normal italic leading-[1.1] text-ink">
                    {step.title}
                  </h3>
                ) : null}
                {step.body ? (
                  <p className="m-0 text-[13px] leading-[1.65] text-muted">
                    {step.body}
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
