import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { DiamondDivider } from "@/components/_shared/DiamondDivider";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { VenuesPage } from "@/sanity/queries/venues";

type VenuesIntroProps = {
  intro: NonNullable<VenuesPage["intro"]>;
};

const bodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 max-w-[62ch] text-[17px] leading-[1.75] text-[#2a2a24] last:mb-0">
        {children}
      </p>
    ),
  },
};

export function VenuesIntro({ intro }: VenuesIntroProps) {
  const stats = intro.stats ?? [];

  return (
    <section className="bg-ivory px-6 py-[120px] md:px-14">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
        <RevealOnScroll as="div" className="lg:sticky lg:top-[120px]">
          {intro.sideLabel ? (
            <span className="mb-6 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {intro.sideLabel}
            </span>
          ) : null}
          <DiamondDivider width={80} className="text-gold" />
          {intro.sideNote ? (
            <p className="mt-6 max-w-[28ch] text-[13px] leading-[1.7] text-muted">
              {intro.sideNote}
            </p>
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll as="div">
          {intro.headline ? (
            <h2 className="m-0 mb-9 whitespace-pre-line font-serif font-light text-[clamp(40px,6vw,78px)] leading-[0.98] tracking-[-0.008em] text-ink">
              {renderHeadline(intro.headline, "olive")}
            </h2>
          ) : null}
          {intro.lede ? (
            <p className="mb-6 max-w-[42ch] font-serif text-[clamp(20px,2.4vw,24px)] italic leading-[1.55] text-[#2a2a24]">
              {intro.lede}
            </p>
          ) : null}
          {intro.body?.length ? (
            <PortableText value={intro.body} components={bodyComponents} />
          ) : null}

          {stats.length ? (
            <div className="mt-12 flex flex-wrap gap-x-16 gap-y-8 border-t border-rule pt-9">
              {stats.map((stat, i) => (
                <div key={i}>
                  {stat.value ? (
                    <span className="block font-serif font-light italic text-[54px] leading-none text-olive">
                      {stat.value}
                    </span>
                  ) : null}
                  {stat.label ? (
                    <span className="mt-2.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
                      {stat.label}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </RevealOnScroll>
      </div>
    </section>
  );
}
