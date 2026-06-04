import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import type { Culture } from "@/sanity/queries/culture";

type OverviewBodyProps = {
  overview: NonNullable<Culture["overview"]>;
};

const bodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-[17px] leading-[1.75] text-ink last:mb-0">
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

export function OverviewBody({ overview }: OverviewBodyProps) {
  const { headline, lede, body, pull, signatureName, signatureRole } = overview;
  const blocks = body ?? [];
  const mid = Math.ceil(blocks.length / 2);

  const pullEl = pull ? (
    <blockquote className="my-9 border-y border-gold py-6 font-serif text-[28px] italic leading-[1.35] text-olive">
      {pull}
    </blockquote>
  ) : null;

  return (
    <div>
      {headline ? (
        <h2 className="m-0 mb-9 whitespace-pre-line font-serif font-light text-[clamp(48px,7vw,78px)] leading-[0.98] tracking-[-0.008em] text-ink">
          {renderHeadline(headline, "olive")}
        </h2>
      ) : null}

      {lede ? (
        <p className="mb-5 max-w-[62ch] font-serif text-[22px] italic leading-[1.55] text-ink">
          {lede}
        </p>
      ) : null}

      {blocks.length ? (
        pullEl ? (
          <>
            <PortableText
              value={blocks.slice(0, mid)}
              components={bodyComponents}
            />
            {pullEl}
            <PortableText
              value={blocks.slice(mid)}
              components={bodyComponents}
            />
          </>
        ) : (
          <PortableText value={blocks} components={bodyComponents} />
        )
      ) : (
        pullEl
      )}

      {signatureName || signatureRole ? (
        <div className="mt-12 flex items-baseline gap-6 border-t border-rule pt-8">
          {signatureName ? (
            <span className="font-script text-[48px] leading-none text-olive">
              {signatureName}
            </span>
          ) : null}
          {signatureRole ? (
            <span className="text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {signatureRole}
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
