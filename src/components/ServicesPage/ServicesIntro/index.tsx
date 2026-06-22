import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { DiamondDivider } from "@/components/_shared/DiamondDivider";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { ServicePage } from "@/sanity/queries/service";

type ServicesIntroProps = {
  intro: NonNullable<ServicePage["intro"]>;
};

const bodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-[17px] leading-[1.75] text-ink last:mb-0">
        {children}
      </p>
    ),
  },
};

export function ServicesIntro({ intro }: ServicesIntroProps) {
  const blocks = intro.body ?? [];

  return (
    <section className="bg-ivory px-6 py-[140px] md:px-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 md:grid-cols-[1fr_1.6fr]">
        <RevealOnScroll>
          {intro.sideEyebrow ? (
            <span className="block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {intro.sideEyebrow}
            </span>
          ) : null}
          <DiamondDivider width={80} />
          {intro.sideNote ? (
            <p className="max-w-[34ch] font-serif text-[18px] italic leading-[1.55] text-olive">
              {intro.sideNote}
            </p>
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll>
          {intro.headline ? (
            <h2 className="m-0 mb-9 whitespace-pre-line font-serif font-light text-[clamp(44px,6vw,72px)] leading-[0.98] tracking-[-0.008em] text-ink">
              {renderHeadline(intro.headline, "olive")}
            </h2>
          ) : null}
          {intro.lede ? (
            <p className="mb-6 max-w-[62ch] font-serif text-[22px] italic leading-[1.55] text-ink">
              {intro.lede}
            </p>
          ) : null}
          {blocks.length ? (
            <PortableText value={blocks} components={bodyComponents} />
          ) : null}
        </RevealOnScroll>
      </div>
    </section>
  );
}
