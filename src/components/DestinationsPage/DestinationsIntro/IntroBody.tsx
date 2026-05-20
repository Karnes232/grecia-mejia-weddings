import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

import { renderHeadline } from "@/components/_shared/renderHeadline";

type IntroBodyProps = {
  headline?: string;
  lede?: string;
  body?: PortableTextBlock[];
};

const bodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 max-w-[60ch] text-[18px] leading-[1.7] text-ink last:mb-0">
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

export function IntroBody({ headline, lede, body }: IntroBodyProps) {
  return (
    <>
      {headline ? (
        <h2 className="m-0 mb-9 whitespace-pre-line font-serif font-light text-[clamp(48px,7vw,78px)] leading-[0.98] tracking-[-0.008em] text-ink">
          {renderHeadline(headline, "olive")}
        </h2>
      ) : null}

      {lede ? (
        <p className="mb-5 max-w-[62ch] font-serif italic text-[clamp(20px,2.4vw,24px)] leading-[1.55] text-ink">
          {lede}
        </p>
      ) : null}

      {body?.length ? (
        <PortableText value={body} components={bodyComponents} />
      ) : null}
    </>
  );
}
