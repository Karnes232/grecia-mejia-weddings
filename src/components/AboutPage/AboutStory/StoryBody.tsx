import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import type { AboutPage, SanityImage } from "@/sanity/queries/about";

import { StoryFigure } from "./StoryFigure";

type StoryBodyProps = {
  story: NonNullable<AboutPage["story"]>;
  figureImage?: SanityImage;
};

const bodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-[17px] leading-[1.75] text-[#2a2a24] last:mb-0">
        {children}
      </p>
    ),
    lede: ({ children }) => (
      <p className="mb-6 font-serif text-[clamp(20px,2.4vw,24px)] italic leading-[1.55] text-[#2a2a24]">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-10 border-y border-gold py-7 font-serif text-[clamp(24px,3vw,30px)] italic leading-[1.35] text-olive">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href = (value as { href?: string } | undefined)?.href ?? "#";
      return (
        <a
          href={href}
          className="border-b border-gold/60 text-olive transition-colors hover:border-gold hover:text-olive-dk"
        >
          {children}
        </a>
      );
    },
  },
};

export function StoryBody({ story, figureImage }: StoryBodyProps) {
  const { headline, body, figureCaption, signoffName, signoffPlace } = story;
  const blocks = body ?? [];

  const hasFigure = Boolean(
    figureImage?.asset || figureCaption?.emphasis || figureCaption?.note,
  );
  const figIndex = Math.ceil(blocks.length / 3);

  return (
    <div>
      {headline ? (
        <h2 className="m-0 mb-9 whitespace-pre-line font-serif font-light text-[clamp(48px,7vw,78px)] leading-[0.98] tracking-[-0.008em] text-ink">
          {renderHeadline(headline, "olive")}
        </h2>
      ) : null}

      {blocks.length && hasFigure ? (
        <>
          <PortableText
            value={blocks.slice(0, figIndex)}
            components={bodyComponents}
          />
          <StoryFigure image={figureImage} caption={figureCaption} />
          <PortableText
            value={blocks.slice(figIndex)}
            components={bodyComponents}
          />
        </>
      ) : blocks.length ? (
        <PortableText value={blocks} components={bodyComponents} />
      ) : null}

      {signoffName || signoffPlace ? (
        <div className="mt-12 flex flex-wrap items-baseline gap-6 border-t border-rule pt-8">
          {signoffName ? (
            <span className="font-script text-[54px] leading-none text-olive">
              {signoffName}
            </span>
          ) : null}
          {signoffPlace ? (
            <span className="text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {signoffPlace}
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
