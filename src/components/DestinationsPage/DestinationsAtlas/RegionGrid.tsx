import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Region } from "@/sanity/queries/destinations";

import { DestinationCard } from "./DestinationCard";
import { RegionHead } from "./RegionHead";

type RegionGridProps = {
  region: Region;
};

export function RegionGrid({ region }: RegionGridProps) {
  return (
    <div
      id={region.slug}
      className="mx-auto mb-[120px] max-w-[1400px] scroll-mt-[180px] last:mb-0"
    >
      <RevealOnScroll>
        <RegionHead
          eyebrow={region.eyebrow}
          name={region.name}
          intro={region.intro}
        />
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-6 lg:grid-cols-12">
          {region.destinations?.map((card, i) => (
            <DestinationCard
              key={card.slug ?? `${region.slug}-${i}`}
              card={card}
              image={card.image}
            />
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
}
