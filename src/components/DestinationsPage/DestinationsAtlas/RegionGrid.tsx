import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { urlFor } from "@/sanity/lib/image";
import type { Region } from "@/sanity/queries/destinations";

import { type CardPhoto, RegionMasonry } from "./RegionMasonry";
import { RegionHead } from "./RegionHead";

type RegionGridProps = {
  region: Region;
};

/** Build react-photo-album photos from the region's destination cards. */
function toPhotos(region: Region): CardPhoto[] {
  return (region.destinations ?? []).map((card) => {
    const width = card.image?.dimensions?.width ?? 1000;
    const height = card.image?.dimensions?.height ?? 1000;
    const src = card.image?.asset
      ? urlFor(card.image).width(Math.min(width, 1200)).auto("format").url()
      : "";
    return {
      src,
      width,
      height,
      alt: card.image?.alt ?? card.name ?? "",
      number: card.number,
      name: card.name,
      country: card.country,
      subLocations: card.subLocations,
      slug: card.slug,
      // Trigger the album's link rendering (overridden in render.link).
      href: card.slug ? "#" : undefined,
    };
  });
}

export function RegionGrid({ region }: RegionGridProps) {
  const photos = toPhotos(region);

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

      {photos.length ? (
        <RevealOnScroll>
          <RegionMasonry photos={photos} />
        </RevealOnScroll>
      ) : null}
    </div>
  );
}
