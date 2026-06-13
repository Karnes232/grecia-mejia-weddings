import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

import { Link } from "@/i18n/navigation";

type LegalProseProps = {
  value: PortableTextBlock[];
};

function isInternal(href: string) {
  return href.startsWith("/");
}

const LINK_CLASS =
  "text-olive no-underline border-b border-gold transition-colors hover:text-gold";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-[18px] text-base leading-[1.8] text-[#2a2a24] last:mb-0">
        {children}
      </p>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-7 font-serif text-[22px] italic font-normal text-olive">
        {children}
      </h3>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="m-0 mb-[18px] list-none p-0">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="relative mb-2.5 pl-6 text-base leading-[1.7] text-[#2a2a24]">
        <span
          aria-hidden
          className="absolute left-0 top-px text-[9px] text-gold"
        >
          ◇
        </span>
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-medium text-ink">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href = (value as { href?: string } | undefined)?.href ?? "#";
      return isInternal(href) ? (
        <Link href={href as never} className={LINK_CLASS}>
          {children}
        </Link>
      ) : (
        <a href={href} className={LINK_CLASS}>
          {children}
        </a>
      );
    },
  },
  types: {
    legalCallout: ({ value }) => {
      const text = (value as { text?: string } | undefined)?.text;
      if (!text) return null;
      return (
        <div className="my-7 border-l-2 border-gold bg-cream px-8 py-7">
          <p className="m-0 font-serif text-[18px] italic leading-[1.6] text-olive">
            {text}
          </p>
        </div>
      );
    },
    legalDefinitions: ({ value }) => {
      const items =
        (value as { items?: Array<{ term?: string; definition?: string }> })
          ?.items ?? [];
      if (!items.length) return null;
      return (
        <dl className="mb-[18px] border-t border-rule">
          {items.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-2 border-b border-rule py-[18px] sm:grid-cols-[180px_1fr] sm:gap-8"
            >
              <dt className="font-serif text-[18px] italic text-olive">
                {item.term}
              </dt>
              <dd className="m-0 text-[15px] leading-[1.7] text-[#2a2a24]">
                {item.definition}
              </dd>
            </div>
          ))}
        </dl>
      );
    },
  },
};

export function LegalProse({ value }: LegalProseProps) {
  if (!value?.length) return null;
  return <PortableText value={value} components={components} />;
}
