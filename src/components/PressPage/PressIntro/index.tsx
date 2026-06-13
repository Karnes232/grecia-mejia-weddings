import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { DiamondDivider } from "@/components/_shared/DiamondDivider";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { Link } from "@/i18n/navigation";
import type { PressPage } from "@/sanity/queries/press";

type PressIntroProps = {
  intro: NonNullable<PressPage["intro"]>;
};

const LINK_CLASS =
  "text-olive no-underline border-b border-gold transition-colors hover:text-gold";

const proseComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-[17px] leading-[1.75] text-[#2a2a24] last:mb-0">
        {children}
      </p>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-medium text-ink">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href = (value as { href?: string } | undefined)?.href ?? "#";
      return href.startsWith("/") ? (
        <Link href={href as never} className={LINK_CLASS}>
          {children}
        </Link>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          {children}
        </a>
      );
    },
  },
};

export function PressIntro({ intro }: PressIntroProps) {
  return (
    <section className="bg-ivory px-6 py-[120px] md:px-14">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
        <RevealOnScroll as="div">
          {intro.sideLabel ? (
            <span className="mb-6 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
              {intro.sideLabel}
            </span>
          ) : null}
          <DiamondDivider width={80} className="text-gold" />
          {intro.sideNote ? (
            <p className="mt-6 max-w-[26ch] text-[13px] leading-[1.7] text-muted">
              {intro.sideNote}
            </p>
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll as="div">
          {intro.headline ? (
            <h2 className="m-0 mb-9 font-serif font-light text-[clamp(40px,6vw,78px)] leading-[0.98] tracking-[-0.008em] text-ink">
              {renderHeadline(intro.headline, "olive")}
            </h2>
          ) : null}
          {intro.lede ? (
            <p className="mb-6 max-w-[42ch] font-serif text-[clamp(20px,2.4vw,24px)] italic leading-[1.55] text-[#2a2a24]">
              {intro.lede}
            </p>
          ) : null}
          {intro.body?.length ? (
            <div className="max-w-[62ch]">
              <PortableText value={intro.body} components={proseComponents} />
            </div>
          ) : null}
        </RevealOnScroll>
      </div>
    </section>
  );
}
