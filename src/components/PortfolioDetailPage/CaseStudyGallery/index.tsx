import type { Photo } from "react-photo-album";

import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { urlFor } from "@/sanity/lib/image";
import type { Portfolio } from "@/sanity/queries/portfolio";

import { GalleryAlbum } from "./GalleryAlbum";

type GalleryItem = NonNullable<
  NonNullable<Portfolio["media"]>["galleryTop"]
>[number];

type CaseStudyGalleryProps = {
  items: GalleryItem[];
};

/** Map gallery images that carry real dimensions into react-photo-album photos. */
function toPhotos(items: GalleryItem[]): Photo[] {
  const photos: Photo[] = [];
  for (const item of items) {
    const width = item.dimensions?.width;
    const height = item.dimensions?.height;
    if (!item.asset || !width || !height) continue;
    photos.push({
      src: urlFor(item).width(Math.min(width, 1600)).auto("format").url(),
      width,
      height,
      alt: item.alt ?? "",
    });
  }
  return photos;
}

export function CaseStudyGallery({ items }: CaseStudyGalleryProps) {
  const photos = toPhotos(items);
  if (!photos.length) return null;

  return (
    <section className="bg-cream px-6 py-10 md:px-14">
      <RevealOnScroll className="mx-auto max-w-[1400px]">
        <GalleryAlbum photos={photos} />
      </RevealOnScroll>
    </section>
  );
}
