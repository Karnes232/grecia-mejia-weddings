import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { DiamondDivider } from "@/components/_shared/DiamondDivider";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Portfolio } from "@/sanity/queries/portfolio";

type CaseStudyStoryProps = {
  story: NonNullable<Portfolio["story"]>;
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

export function CaseStudyStory({ story }: CaseStudyStoryProps) {
  const blocks = story.body ?? [];

  return (
    <section className="bg-ivory px-6 py-[130px] md:px-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 md:grid-cols-[1fr_1.7fr]">
        <RevealOnScroll>
          {story.sideEyebrow ? (
            <span className="block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {story.sideEyebrow}
            </span>
          ) : null}
          <DiamondDivider width={80} />
          {story.sideNote ? (
            <p className="max-w-[36ch] font-serif text-[18px] italic leading-[1.55] text-olive">
              {story.sideNote}
            </p>
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll>
          {story.headline ? (
            <h2 className="m-0 mb-9 whitespace-pre-line font-serif font-light text-[clamp(44px,6vw,76px)] leading-[0.98] tracking-[-0.008em] text-ink">
              {renderHeadline(story.headline, "olive")}
            </h2>
          ) : null}
          {story.lede ? (
            <p className="mb-6 max-w-[62ch] font-serif text-[22px] italic leading-[1.55] text-ink">
              {story.lede}
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
