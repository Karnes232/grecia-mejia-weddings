import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { keyedImageMap } from "@/components/_shared/keyedImageMap";
import { urlFor } from "@/sanity/lib/image";
import type { VenueMedia } from "@/sanity/queries/venue";

import { VenueGalleryLightbox } from "./VenueGalleryLightbox";

type VenueGalleryProps = {
  images: VenueMedia["mosaic"];
};

const TILES = [
  { key: "venue-mosaic-1", className: "col-span-2 row-span-2 md:col-span-6", w: 1400, h: 900 },
  { key: "venue-mosaic-2", className: "col-span-1 md:col-span-3", w: 700, h: 500 },
  { key: "venue-mosaic-3", className: "col-span-1 md:col-span-3", w: 700, h: 500 },
  { key: "venue-mosaic-4", className: "col-span-1 md:col-span-4", w: 900, h: 500 },
  { key: "venue-mosaic-5", className: "col-span-1 md:col-span-2", w: 500, h: 500 },
] as const;

export async function VenueGallery({ images }: VenueGalleryProps) {
  const t = await getTranslations("venuesPage");
  const map = keyedImageMap(images);
  const hasAny = TILES.some((t) => map.get(t.key)?.asset);

  // The lightbox shows every mosaic image (hero tiles + extra slots).
  const slides = (images ?? [])
    .filter((m) => m.image?.asset)
    .map((m) => ({
      src: urlFor(m.image!).width(2000).auto("format").url(),
      alt: m.image?.alt ?? "",
    }));

  return (
    <section className="bg-ink">
      <div className="grid auto-rows-[180px] grid-cols-2 gap-1.5 md:auto-rows-[280px] md:grid-cols-12">
        {TILES.map((tile, i) => {
          const image = map.get(tile.key);
          const url = image?.asset
            ? urlFor(image).width(tile.w).height(tile.h).fit("crop").auto("format").url()
            : null;
          return (
            <div
              key={tile.key}
              className={`group relative overflow-hidden ${tile.className} ${
                hasAny ? "" : "bg-olive-dk"
              }`}
            >
              {url ? (
                <Image
                  src={url}
                  alt={image?.alt ?? ""}
                  fill
                  priority={i === 0}
                  sizes={i === 0 ? "(min-width:768px) 50vw, 100vw" : "(min-width:768px) 25vw, 50vw"}
                  className="object-cover transition-transform duration-[1200ms] ease-silk group-hover:scale-[1.06]"
                />
              ) : null}
              {i === 0 ? (
                <VenueGalleryLightbox
                  slides={slides}
                  label={t("viewFullGallery")}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
