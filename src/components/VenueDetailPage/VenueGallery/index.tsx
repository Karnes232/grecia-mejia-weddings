import Image from "next/image";

import { keyedImageMap } from "@/components/_shared/keyedImageMap";
import { urlFor } from "@/sanity/lib/image";
import type { Venue, VenueMedia } from "@/sanity/queries/venue";

type VenueGalleryProps = {
  gallery?: NonNullable<Venue["header"]>["gallery"];
  images: VenueMedia["mosaic"];
};

const TILES = [
  { key: "venue-mosaic-1", className: "col-span-2 row-span-2 md:col-span-6", w: 1400, h: 900 },
  { key: "venue-mosaic-2", className: "col-span-1 md:col-span-3", w: 700, h: 500 },
  { key: "venue-mosaic-3", className: "col-span-1 md:col-span-3", w: 700, h: 500 },
  { key: "venue-mosaic-4", className: "col-span-1 md:col-span-4", w: 900, h: 500 },
  { key: "venue-mosaic-5", className: "col-span-1 md:col-span-2", w: 500, h: 500 },
] as const;

export function VenueGallery({ gallery, images }: VenueGalleryProps) {
  const map = keyedImageMap(images);
  const hasAny = TILES.some((t) => map.get(t.key)?.asset);

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
              {i === 0 && gallery?.label ? (
                gallery.href ? (
                  <a
                    href={gallery.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 z-[2] border border-[rgba(212,186,140,0.3)] bg-[rgba(28,30,24,0.85)] px-4 py-2 text-[9px] uppercase tracking-[0.32em] text-ivory"
                  >
                    {gallery.label} →
                  </a>
                ) : (
                  <span className="absolute bottom-4 right-4 z-[2] border border-[rgba(212,186,140,0.3)] bg-[rgba(28,30,24,0.85)] px-4 py-2 text-[9px] uppercase tracking-[0.32em] text-ivory">
                    {gallery.label}
                  </span>
                )
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
