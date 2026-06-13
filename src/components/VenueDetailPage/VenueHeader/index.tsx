import { CTAButton } from "@/components/_shared/CTAButton";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Venue } from "@/sanity/queries/venue";

type VenueHeaderProps = {
  header: NonNullable<Venue["header"]>;
};

export function VenueHeader({ header }: VenueHeaderProps) {
  const ctaLabel = header.cta?.label?.replace(/\s*→\s*$/, "");

  return (
    <section className="border-b border-rule bg-ivory px-6 py-[60px] md:px-14 md:py-[80px] md:pt-[80px]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <RevealOnScroll as="div">
          {header.eyebrow ? (
            <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
              {header.eyebrow}
            </span>
          ) : null}
          {header.headline ? (
            <h1 className="m-0 mb-4 font-serif font-light text-[clamp(48px,8vw,96px)] leading-[0.96] tracking-[-0.012em] text-ink">
              {renderHeadline(header.headline, "olive")}
            </h1>
          ) : null}
          {header.location ? (
            <div className="mb-6 font-serif text-[22px] italic leading-[1.1] text-[#3d3a30]">
              {header.location}
            </div>
          ) : null}
          {header.deck ? (
            <p className="m-0 max-w-[48ch] font-serif text-[clamp(18px,1.8vw,22px)] italic leading-[1.5] text-[#3d3a30]">
              {header.deck}
            </p>
          ) : null}
        </RevealOnScroll>

        {ctaLabel && header.cta?.href ? (
          <RevealOnScroll as="div" className="flex flex-col items-stretch gap-3">
            <CTAButton href={header.cta.href} variant="primary" tone="olive">
              {ctaLabel} →
            </CTAButton>
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
