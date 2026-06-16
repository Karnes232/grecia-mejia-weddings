"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { VenueRegion } from "@/sanity/queries/venueRegion";

import { VenueItem } from "./VenueItem";

type RegionFilterVenuesProps = {
  regionSlug: string;
  venuesHeadline?: VenueRegion["venuesHeadline"];
  venues: NonNullable<VenueRegion["venues"]>;
};

const ALL = "all";

export function RegionFilterVenues({
  regionSlug,
  venuesHeadline,
  venues,
}: RegionFilterVenuesProps) {
  const t = useTranslations("venuesPage");
  const [active, setActive] = useState<string>(ALL);

  // Filter chips are derived from the venues' own `tag` values (distinct, in
  // venue order) so they always match what's actually in the region.
  const typologies = useMemo(() => {
    const counts = new Map<string, number>();
    for (const v of venues) {
      if (v.tag) counts.set(v.tag, (counts.get(v.tag) ?? 0) + 1);
    }
    return [...counts].map(([label, count]) => ({ label, count }));
  }, [venues]);

  const filtered = useMemo(
    () => (active === ALL ? venues : venues.filter((v) => v.tag === active)),
    [active, venues],
  );

  return (
    <>
      <div className="sticky top-0 z-30 border-y border-rule bg-cream px-4 py-3 md:px-14 md:py-5">
        <div className="mx-auto flex max-w-[1400px] flex-nowrap items-center gap-2 overflow-x-auto md:gap-3.5 xl:flex-wrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <span className="mr-2 hidden text-[10px] uppercase tracking-wide-eyebrow text-muted md:inline-block">
            {t("filterLabel")}
          </span>
          <Chip
            isActive={active === ALL}
            label={t("all")}
            count={venues.length}
            onClick={() => setActive(ALL)}
          />
          {typologies.map((c, i) => (
            <Chip
              key={i}
              isActive={active === c.label}
              label={c.label}
              count={c.count}
              onClick={() => setActive(c.label)}
            />
          ))}
        </div>
      </div>

      <section className="bg-ivory px-6 py-[120px] md:px-14">
        <RevealOnScroll
          as="div"
          className="mx-auto mb-12 flex max-w-[1400px] flex-col gap-4 border-b border-olive pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-12"
        >
          <div>
            {venuesHeadline?.eyebrow ? (
              <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {venuesHeadline.eyebrow}
              </span>
            ) : null}
            {venuesHeadline?.headline ? (
              <h2 className="m-0 font-serif font-light text-[clamp(40px,6vw,64px)] leading-[0.96] text-ink">
                {renderHeadline(venuesHeadline.headline, "olive")}
              </h2>
            ) : null}
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="div" className="mx-auto grid max-w-[1400px] gap-12">
          {filtered.map((venue, i) => (
            <VenueItem
              key={`${venue.name}-${i}`}
              venue={venue}
              image={venue.image}
              regionSlug={regionSlug}
              flip={i % 2 === 1}
              readLabel={t("readBrief")}
            />
          ))}
        </RevealOnScroll>
      </section>
    </>
  );
}

type ChipProps = {
  label: string;
  count?: number;
  isActive: boolean;
  onClick: () => void;
};

function Chip({ label, count, isActive, onClick }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "inline-flex shrink-0 items-center gap-2 whitespace-nowrap border border-olive px-3 py-2 text-[10px] uppercase tracking-[0.3em] transition-colors duration-[250ms] md:px-[18px] md:py-2.5 md:text-[11px]",
        isActive
          ? "bg-olive text-ivory"
          : "bg-transparent text-olive hover:bg-olive hover:text-ivory",
      )}
    >
      {label}
      {typeof count === "number" ? (
        <span className="font-serif text-[13px] italic normal-case tracking-normal opacity-70 md:text-[14px]">
          {count}
        </span>
      ) : null}
    </button>
  );
}
