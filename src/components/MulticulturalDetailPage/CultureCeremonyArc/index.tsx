import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Culture } from "@/sanity/queries/culture";

import { SectionDeck, SectionHead } from "../SectionHead";

type CultureCeremonyArcProps = {
  ceremonyArc: NonNullable<Culture["ceremonyArc"]>;
};

/**
 * The ceremony timeline rail — dots on a gold hairline, one column per step
 * (design `ed-cul-arc`). Stacks on small screens; the rail line only shows
 * when the steps sit in a single row.
 */
export function CultureCeremonyArc({ ceremonyArc }: CultureCeremonyArcProps) {
  const steps = ceremonyArc.steps ?? [];

  return (
    <section className="bg-cream px-6 pt-[140px] pb-[100px] md:px-14">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow={ceremonyArc.eyebrow}
          headline={ceremonyArc.headline}
          aside={
            ceremonyArc.deck ? (
              <SectionDeck>{ceremonyArc.deck}</SectionDeck>
            ) : undefined
          }
          className="mb-20"
        />

        {steps.length ? (
          <RevealOnScroll className="relative grid grid-cols-2 gap-x-[18px] gap-y-12 sm:grid-cols-3 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
            <span
              aria-hidden
              className="absolute left-[8%] right-[8%] top-[7px] z-0 hidden h-px bg-gold lg:block"
            />
            {steps.map((step, i) => (
              <div key={i} className="relative z-[1] px-1.5 text-center">
                <span className="relative z-[2] mx-auto mb-7 block h-3.5 w-3.5 rounded-full border-4 border-cream bg-olive shadow-[0_0_0_1px_var(--color-gold)]" />
                {step.numeral ? (
                  <span className="mb-2 block font-serif text-[13px] italic tracking-[0.04em] text-gold">
                    № {step.numeral}
                  </span>
                ) : null}
                {step.name ? (
                  <h4 className="m-0 mb-2 font-serif text-[26px] font-normal italic leading-none text-ink">
                    {step.name}
                    {step.sub || step.when ? (
                      <small className="mt-2 block font-sans text-[10px] uppercase not-italic tracking-[0.28em] text-muted">
                        {[step.sub, step.when].filter(Boolean).join(" · ")}
                      </small>
                    ) : null}
                  </h4>
                ) : null}
                {step.body ? (
                  <p className="m-0 mt-4 text-[12px] leading-[1.6] text-muted">
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
