import type { Region } from "@/sanity/queries/destinations";

import { RegionGrid } from "./RegionGrid";

type DestinationsAtlasProps = {
  regions: Region[];
};

export function DestinationsAtlas({ regions }: DestinationsAtlasProps) {
  return (
    <section
      id="destinations-atlas"
      className="bg-ivory px-6 py-[120px] md:px-14"
    >
      {regions.map((region, i) => (
        <RegionGrid key={region.slug ?? `region-${i}`} region={region} />
      ))}
    </section>
  );
}
