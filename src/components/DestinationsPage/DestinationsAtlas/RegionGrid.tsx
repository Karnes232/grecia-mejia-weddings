import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type {
  DestinationsPageMedia,
  Region,
} from "@/sanity/queries/destinations";

import { DestinationCard } from "./DestinationCard";
import { RegionHead } from "./RegionHead";

type SanityImage = NonNullable<
  NonNullable<DestinationsPageMedia["destinations"]>[number]["image"]
>;

type RegionGridProps = {
  region: Region;
  imageBySlug: Map<string, SanityImage | undefined>;
};

export function RegionGrid({ region, imageBySlug }: RegionGridProps) {
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
              image={card.slug ? imageBySlug.get(card.slug) : undefined}
            />
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
}
