import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Culture } from "@/sanity/queries/culture";

type CultureFaqProps = {
  faq: NonNullable<Culture["faq"]>;
};

const answerComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
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

export function CultureFaq({ faq }: CultureFaqProps) {
  const items = faq.items ?? [];

  return (
    <section className="bg-ivory px-6 py-[140px] md:px-14">
      <RevealOnScroll className="mx-auto mb-14 max-w-[980px] text-center">
        {faq.eyebrow ? (
          <span className="mb-[18px] block text-[10px] uppercase tracking-wide-eyebrow text-muted">
            {faq.eyebrow}
          </span>
        ) : null}
        {faq.headline ? (
          <h2 className="m-0 font-serif font-light text-[clamp(44px,7vw,78px)] leading-[0.96] text-ink">
            {renderHeadline(faq.headline, "olive")}
          </h2>
        ) : null}
      </RevealOnScroll>

      <RevealOnScroll className="mx-auto max-w-[980px]">
        {items.map((item, i) => (
          <details
            key={i}
            open={i === 0}
            className="group border-b border-rule"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 font-serif text-[26px] italic leading-[1.2] text-ink [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <span
                aria-hidden
                className="relative h-[18px] w-[18px] shrink-0 text-olive"
              >
                <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
                <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current transition-transform duration-300 group-open:rotate-90" />
              </span>
            </summary>
            {item.answer?.length ? (
              <div className="max-w-[60ch] pb-7 text-[15px] leading-[1.75] text-[#2a2a24]">
                <PortableText
                  value={item.answer}
                  components={answerComponents}
                />
              </div>
            ) : null}
          </details>
        ))}
      </RevealOnScroll>
    </section>
  );
}
