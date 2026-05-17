import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import type { HomePage } from "@/sanity/queries/home";

type Venue = NonNullable<
  NonNullable<HomePage["venuesConsidered"]>["venues"]
>[number];

type VenueRowProps = {
  venue: Venue;
};

const ROW_CLASS =
  "group flex flex-col gap-2 border-b border-rule py-7 no-underline text-ink transition-[padding-left,background-color] duration-300 hover:pl-2 hover:bg-[rgba(184,153,104,0.04)] md:grid md:grid-cols-[280px_1fr_220px_60px] md:items-center md:gap-8";

export function VenueRow({ venue }: VenueRowProps) {
  const inner: ReactNode = (
    <>
      {venue.name ? (
        <span className="font-serif italic text-[clamp(24px,2.8vw,30px)] leading-[1] text-ink">
          {venue.name}
        </span>
      ) : (
        <span />
      )}
      {venue.description ? (
        <span className="text-[14px] leading-[1.55] text-muted">
          {venue.description}
        </span>
      ) : (
        <span />
      )}
      {venue.region ? (
        <span className="text-[11px] uppercase tracking-eyebrow text-olive">
          {venue.region}
        </span>
      ) : (
        <span />
      )}
      <span
        aria-hidden
        className="font-serif italic text-[22px] leading-none text-olive md:text-right"
      >
        →
      </span>
    </>
  );

  if (venue.slug) {
    return (
      <Link href={`/venues/${venue.slug}` as never} className={ROW_CLASS}>
        {inner}
      </Link>
    );
  }
  return <div className={ROW_CLASS}>{inner}</div>;
}
