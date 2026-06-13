import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { DiamondDivider } from "@/components/_shared/DiamondDivider";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Venue } from "@/sanity/queries/venue";

type VenueOverviewProps = {
  overview: NonNullable<Venue["overview"]>;
};

const bodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-[17px] leading-[1.75] text-[#2a2a24] last:mb-0">
        {children}
      </p>
    ),
  },
};

export function VenueOverview({ overview }: VenueOverviewProps) {
  return (
    <section className="bg-ivory px-6 py-[120px] md:px-14">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
        <RevealOnScroll as="div" className="lg:sticky lg:top-[120px]">
          {overview.sideLabel ? (
            <span className="mb-5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {overview.sideLabel}
            </span>
          ) : null}
          <DiamondDivider width={80} className="text-gold" />
          {overview.sideNote ? (
            <p className="mt-6 text-[13px] leading-[1.7] text-muted">
              {overview.sideNote}
            </p>
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll as="div" className="max-w-[62ch]">
          {overview.headline ? (
            <h2 className="m-0 mb-8 whitespace-pre-line font-serif font-light text-[clamp(40px,6vw,72px)] leading-[1] tracking-[-0.008em] text-ink">
              {renderHeadline(overview.headline, "olive")}
            </h2>
          ) : null}
          {overview.lede ? (
            <p className="mb-6 font-serif text-[clamp(20px,2.4vw,24px)] italic leading-[1.55] text-[#2a2a24]">
              {overview.lede}
            </p>
          ) : null}
          {overview.body?.length ? (
            <PortableText value={overview.body} components={bodyComponents} />
          ) : null}
          {overview.pull ? (
            <p className="my-9 border-l-2 border-gold pl-7 font-serif text-[clamp(24px,3vw,32px)] italic leading-[1.3] text-olive">
              {overview.pull}
            </p>
          ) : null}
        </RevealOnScroll>
      </div>
    </section>
  );
}
