import { getTranslations } from "next-intl/server";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { VenuesPage } from "@/sanity/queries/venues";

import { RegionCard } from "./RegionCard";

type VenuesRegionsProps = {
  regions: NonNullable<VenuesPage["regions"]>;
};

export async function VenuesRegions({ regions }: VenuesRegionsProps) {
  const t = await getTranslations("venuesPage");
  const items = (regions.items ?? []).filter(Boolean);
  if (items.length === 0) return null;

  return (
    <section className="bg-ivory px-6 py-[140px] md:px-14">
      <RevealOnScroll
        as="div"
        className="mx-auto mb-14 grid max-w-[1400px] grid-cols-1 items-end gap-8 border-b border-olive pb-6 lg:grid-cols-[1.4fr_1fr] lg:gap-12"
      >
        <div>
          {regions.eyebrow ? (
            <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {regions.eyebrow}
            </span>
          ) : null}
          {regions.headline ? (
            <h2 className="m-0 font-serif font-light text-[clamp(48px,8vw,88px)] leading-[0.96] text-ink">
              {renderHeadline(regions.headline, "olive")}
            </h2>
          ) : null}
        </div>
        {regions.intro ? (
          <p className="m-0 max-w-[42ch] font-serif text-[18px] italic leading-[1.55] text-[#3d3a30]">
            {regions.intro}
          </p>
        ) : null}
      </RevealOnScroll>

      <RevealOnScroll as="div" className="mx-auto grid max-w-[1400px] gap-8">
        {items.map((card, i) => (
          <RegionCard
            key={i}
            card={card}
            regionLabel={t("region")}
            ctaLabel={t("viewVenues", { name: card.name ?? "" })}
          />
        ))}
      </RevealOnScroll>
    </section>
  );
}
