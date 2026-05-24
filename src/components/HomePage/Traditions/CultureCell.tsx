import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import type { HomePage } from "@/sanity/queries/home";

import { renderHeadline } from "@/components/_shared/renderHeadline";

type Culture = NonNullable<
  NonNullable<HomePage["traditions"]>["cultures"]
>[number];

type CultureCellProps = {
  culture: Culture;
  discoverLabel: string;
};

const CELL_CLASS =
  "group block bg-olive px-7 pt-9 pb-8 no-underline text-ivory transition-colors duration-[400ms] hover:bg-olive-dk";

export function CultureCell({ culture, discoverLabel }: CultureCellProps) {
  const inner: ReactNode = (
    <>
      {culture.name ? (
        <h3 className="m-0 mb-4 font-serif font-light text-[clamp(26px,2.6vw,32px)] leading-[1] text-ivory">
          {renderHeadline(culture.name, "gold")}
        </h3>
      ) : null}
      {culture.description ? (
        <p className="mb-6 text-[13px] leading-[1.6] text-cine-sage">
          {culture.description}
        </p>
      ) : null}
      <span className="text-[10px] uppercase tracking-wide-eyebrow text-cine-gold">
        {discoverLabel}
      </span>
    </>
  );

  if (culture.slug) {
    return (
      <Link
        href={`/multicultural/${culture.slug}` as never}
        className={CELL_CLASS}
      >
        {inner}
      </Link>
    );
  }
  return <div className={CELL_CLASS}>{inner}</div>;
}
