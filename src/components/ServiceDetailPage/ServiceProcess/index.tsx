import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Service } from "@/sanity/queries/service";

type ServiceProcessProps = {
  process: NonNullable<Service["process"]>;
};

export function ServiceProcess({ process }: ServiceProcessProps) {
  const steps = process.steps ?? [];

  return (
    <section className="bg-ivory px-6 py-[130px] md:px-14">
      <div className="mx-auto max-w-[1100px]">
        <RevealOnScroll className="mb-14 flex flex-col items-start justify-between gap-8 border-b border-olive pb-6 md:flex-row md:items-end">
          <div>
            {process.eyebrow ? (
              <span className="mb-3 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {process.eyebrow}
              </span>
            ) : null}
            {process.headline ? (
              <h2 className="m-0 font-serif font-light text-[clamp(40px,5.5vw,72px)] leading-[0.96] text-ink">
                {renderHeadline(process.headline, "olive")}
              </h2>
            ) : null}
          </div>
          {process.deck ? (
            <p className="max-w-[42ch] font-serif text-[17px] italic leading-[1.55] text-muted">
              {process.deck}
            </p>
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll>
          {steps.map((step, i) => (
            <div
              key={i}
              className="grid grid-cols-[auto_1fr] gap-6 border-b border-rule py-8 first:border-t sm:grid-cols-[80px_1fr] sm:gap-10"
            >
              <span className="font-serif text-[28px] italic leading-none text-gold">
                № {step.numeral}
              </span>
              <div>
                {step.when ? (
                  <span className="mb-2 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
                    {step.when}
                  </span>
                ) : null}
                {step.title ? (
                  <h4 className="m-0 mb-3 font-serif text-[26px] italic font-normal leading-[1.15] text-ink">
                    {step.title}
                  </h4>
                ) : null}
                {step.body ? (
                  <p className="m-0 max-w-[64ch] text-[15px] leading-[1.7] text-muted">
                    {step.body}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
