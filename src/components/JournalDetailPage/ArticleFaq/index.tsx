import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { useTranslations } from "next-intl";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { Link } from "@/i18n/navigation";

const answerComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="m-0 mb-3 text-[15px] leading-[1.7] text-[#3d3a30] last:mb-0">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href = (value as { href?: string })?.href ?? "#";
      const cls = "border-b border-gold text-olive no-underline";
      return href.startsWith("/") ? (
        <Link href={href as never} className={cls}>
          {children}
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    },
  },
};

type Faq = { question?: string; answer?: PortableTextBlock[] };

export function ArticleFaq({ faqs }: { faqs?: Faq[] }) {
  const t = useTranslations("journalDetail");
  const items = (faqs ?? []).filter((f) => f.question);
  if (!items.length) return null;

  return (
    <section className="mt-16">
      <h2 className="m-0 mb-6 font-serif text-[clamp(34px,4vw,46px)] font-light leading-[1.08] text-ink">
        {renderHeadline(t("faqTitle"), "olive")}
      </h2>
      <div className="border-t border-rule">
        {items.map((f, i) => (
          <details
            key={i}
            open={i === 0}
            className="group border-b border-rule"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-[22px] italic text-ink marker:hidden">
              <span>{f.question}</span>
              <span
                aria-hidden
                className="text-gold transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="pb-6">
              {f.answer?.length ? (
                <PortableText value={f.answer} components={answerComponents} />
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
