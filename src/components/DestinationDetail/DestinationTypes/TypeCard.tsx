import type { ComponentProps, ReactNode } from "react";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { Link } from "@/i18n/navigation";

type TypeCardProps = {
  name?: string;
  body?: string;
  href?: ComponentProps<typeof Link>["href"];
  discoverLabel: string;
};

const CELL =
  "group block bg-olive px-7 py-8 no-underline text-ivory transition-colors duration-[400ms] hover:bg-olive-dk";

export function TypeCard({ name, body, href, discoverLabel }: TypeCardProps) {
  const inner: ReactNode = (
    <>
      {name ? (
        <h4 className="m-0 mb-3.5 font-serif font-light text-[30px] leading-none text-ivory">
          {renderHeadline(name, "gold")}
        </h4>
      ) : null}
      {body ? (
        <p className="mb-[18px] text-[13px] leading-[1.6] text-cine-sage">
          {body}
        </p>
      ) : null}
      {/* The "Discover" affordance only makes sense when the card links out. */}
      {href ? (
        <span className="text-[9px] uppercase tracking-wide-eyebrow text-cine-gold">
          {discoverLabel}
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={CELL}>
        {inner}
      </Link>
    );
  }
  return <div className={CELL}>{inner}</div>;
}
