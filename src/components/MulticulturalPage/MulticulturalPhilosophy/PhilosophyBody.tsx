import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import type { MulticulturalPage } from "@/sanity/queries/multicultural";

type PhilosophyBodyProps = {
  philosophy: NonNullable<MulticulturalPage["philosophy"]>;
};

const bodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-[17px] leading-[1.75] text-[#2a2a24] last:mb-0">
        {children}
      </p>
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

export function PhilosophyBody({ philosophy }: PhilosophyBodyProps) {
  const { headline, lede, body, pull } = philosophy;

  return (
    <div>
      {headline ? (
        <h2 className="m-0 mb-9 whitespace-pre-line font-serif font-light text-[clamp(48px,7vw,78px)] leading-[0.98] tracking-[-0.008em] text-ink">
          {renderHeadline(headline, "olive")}
        </h2>
      ) : null}

      {lede ? (
        <p className="mb-6 max-w-[42ch] font-serif italic text-[clamp(20px,2.4vw,24px)] leading-[1.55] text-[#2a2a24]">
          {lede}
        </p>
      ) : null}

      {body?.length ? (
        <PortableText value={body} components={bodyComponents} />
      ) : null}

      {pull ? (
        <blockquote className="mt-10 max-w-[36ch] border-y border-gold py-7 font-serif text-[clamp(24px,3vw,30px)] italic leading-[1.35] text-olive">
          {pull}
        </blockquote>
      ) : null}
    </div>
  );
}
