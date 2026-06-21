import clsx from "clsx";
import Image from "next/image";

import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { urlFor } from "@/sanity/lib/image";
import type { Portfolio } from "@/sanity/queries/portfolio";

type GalleryItem = NonNullable<
  NonNullable<Portfolio["media"]>["galleryTop"]
>[number];

type CaseStudyGalleryProps = {
  items: GalleryItem[];
};

const SPAN: Record<string, { col: string; aspect: string; w: number; h: number }> = {
  wide: { col: "col-span-2 md:col-span-8", aspect: "aspect-[16/9]", w: 1200, h: 675 },
  tall: { col: "col-span-1 md:col-span-4", aspect: "aspect-[3/4]", w: 700, h: 933 },
  square: { col: "col-span-1 md:col-span-4", aspect: "aspect-[4/3]", w: 800, h: 600 },
};

export function CaseStudyGallery({ items }: CaseStudyGalleryProps) {
  return (
    <section className="bg-cream px-6 py-10 md:px-14">
      <RevealOnScroll className="mx-auto grid max-w-[1400px] grid-cols-2 gap-4 md:grid-cols-12">
        {items.map((item, i) => {
          const layout = SPAN[item.span ?? "square"] ?? SPAN.square;
          const image = item.image;
          const url = image?.asset
            ? urlFor(image)
                .width(layout.w)
                .height(layout.h)
                .fit("crop")
                .auto("format")
                .url()
            : null;
          return (
            <figure
              key={i}
              className={clsx(
                "relative m-0 overflow-hidden bg-sand",
                layout.col,
                layout.aspect,
              )}
            >
              {url ? (
                <Image
                  src={url}
                  alt={image?.alt ?? ""}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : null}
            </figure>
          );
        })}
      </RevealOnScroll>
    </section>
  );
}
