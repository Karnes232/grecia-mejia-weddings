import { CTAButton } from "@/components/_shared/CTAButton";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { renderHeadline } from "@/components/_shared/renderHeadline";

type JourneyCtaProps = {
  data: {
    eyebrow?: string;
    headline?: string;
    body?: string;
    cta?: { label?: string; href?: string };
  };
};

export function JourneyCta({ data }: JourneyCtaProps) {
  if (!data.headline) return null;

  return (
    <section className="relative overflow-hidden bg-olive-dk px-6 py-[160px] text-center text-ivory md:px-14">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-40 h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,186,140,0.18), transparent 70%)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,186,140,0.18), transparent 70%)",
        }}
      />

      <RevealOnScroll className="relative z-10 mx-auto max-w-[880px]">
        {data.eyebrow ? (
          <span className="mb-4 block font-script text-[clamp(36px,4vw,48px)] leading-none text-cine-gold">
            {data.eyebrow}
          </span>
        ) : null}
        <h2 className="m-0 mb-10 whitespace-pre-line font-serif font-light text-[clamp(56px,8vw,96px)] leading-none tracking-[-0.005em] text-ivory">
          {renderHeadline(data.headline, "gold")}
        </h2>
        {data.body ? (
          <p className="mx-auto mb-14 max-w-[48ch] font-serif italic text-[clamp(18px,1.7vw,22px)] leading-[1.5] text-cine-ivory">
            {data.body}
          </p>
        ) : null}
        {data.cta?.label && data.cta?.href ? (
          <CTAButton href={data.cta.href} tone="ivory">
            {data.cta.label} →
          </CTAButton>
        ) : null}
      </RevealOnScroll>
    </section>
  );
}
