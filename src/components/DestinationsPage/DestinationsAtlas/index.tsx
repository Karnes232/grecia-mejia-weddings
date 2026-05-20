import type {
  DestinationsPageMedia,
  Region,
} from "@/sanity/queries/destinations";

import { RegionGrid } from "./RegionGrid";

type SanityImage = NonNullable<
  NonNullable<DestinationsPageMedia["destinations"]>[number]["image"]
>;

type DestinationsAtlasProps = {
  regions: Region[];
  imageBySlug: Map<string, SanityImage | undefined>;
};

export function DestinationsAtlas({
  regions,
  imageBySlug,
}: DestinationsAtlasProps) {
  return (
    <section
      id="destinations-atlas"
      className="bg-ivory px-6 py-[120px] md:px-14"
    >
      {regions.map((region, i) => (
        <RegionGrid
          key={region.slug ?? `region-${i}`}
          region={region}
          imageBySlug={imageBySlug}
        />
      ))}
    </section>
  );
}
