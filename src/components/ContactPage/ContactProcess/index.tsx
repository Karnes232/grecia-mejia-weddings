import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { ContactPage } from "@/sanity/queries/contact";

type ContactProcessProps = {
  process: NonNullable<ContactPage["process"]>;
};

export function ContactProcess({ process }: ContactProcessProps) {
  const steps = process.steps ?? [];

  return (
    <section className="bg-cream px-6 py-[120px] md:px-14">
      <RevealOnScroll className="mx-auto mb-16 grid max-w-[1400px] items-end gap-8 border-b border-olive pb-6 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
        <div>
          {process.label ? (
            <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {process.label}
            </span>
          ) : null}
          {process.headline ? (
            <h2 className="m-0 font-serif font-light text-[clamp(44px,7vw,72px)] leading-[0.96] text-ink">
              {renderHeadline(process.headline, "olive")}
            </h2>
          ) : null}
        </div>
        {process.intro ? (
          <p className="m-0 max-w-[40ch] font-serif text-lg italic leading-[1.55] text-[#3d3a30]">
            {process.intro}
          </p>
        ) : null}
      </RevealOnScroll>

      {steps.length ? (
        <RevealOnScroll className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="border-t border-gold pt-8">
              {step.number ? (
                <span className="mb-4 block font-serif text-5xl italic leading-none text-gold">
                  {step.number}
                </span>
              ) : null}
              {step.title ? (
                <h4 className="m-0 mb-3 font-serif text-[26px] font-normal italic leading-[1.1] text-ink">
                  {step.title}
                </h4>
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
    </section>
  );
}
