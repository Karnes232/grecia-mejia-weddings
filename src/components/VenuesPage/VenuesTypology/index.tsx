import { keyedImageMap } from "@/components/_shared/keyedImageMap";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { VenuesPage, VenuesPageMedia } from "@/sanity/queries/venues";

import { TypologyCard } from "./TypologyCard";

type VenuesTypologyProps = {
  typology: NonNullable<VenuesPage["typology"]>;
  images: NonNullable<VenuesPageMedia["typology"]>["images"];
};

export function VenuesTypology({ typology, images }: VenuesTypologyProps) {
  const items = typology.items ?? [];
  if (items.length === 0) return null;

  const imageMap = keyedImageMap(images);

  return (
    <section className="bg-cream px-6 py-[120px] md:px-14">
      <RevealOnScroll
        as="div"
        className="mx-auto mb-14 grid max-w-[1400px] grid-cols-1 items-end gap-8 border-b border-olive pb-6 lg:grid-cols-[1.4fr_1fr] lg:gap-12"
      >
        <div>
          {typology.eyebrow ? (
            <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {typology.eyebrow}
            </span>
          ) : null}
          {typology.headline ? (
            <h3 className="m-0 font-serif font-light text-[clamp(44px,7vw,74px)] leading-[0.96] text-ink">
              {renderHeadline(typology.headline, "olive")}
            </h3>
          ) : null}
        </div>
        {typology.intro ? (
          <p className="m-0 max-w-[42ch] font-serif text-[18px] italic leading-[1.55] text-[#3d3a30]">
            {typology.intro}
          </p>
        ) : null}
      </RevealOnScroll>

      <RevealOnScroll
        as="div"
        className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 lg:grid-cols-4"
      >
        {items.map((item, i) => (
          <TypologyCard
            key={i}
            title={item.title}
            count={item.count}
            sub={item.sub}
            image={item.imageKey ? imageMap.get(item.imageKey) : undefined}
          />
        ))}
      </RevealOnScroll>
    </section>
  );
}
