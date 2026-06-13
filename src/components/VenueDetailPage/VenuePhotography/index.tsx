import Image from "next/image";

import { keyedImageMap } from "@/components/_shared/keyedImageMap";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { urlFor } from "@/sanity/lib/image";
import type { Venue, VenueMedia } from "@/sanity/queries/venue";

import { SectionHead } from "../_shared/SectionHead";

type VenuePhotographyProps = {
  photography: NonNullable<Venue["photography"]>;
  images: VenueMedia["photography"];
};

export function VenuePhotography({ photography, images }: VenuePhotographyProps) {
  const items = photography.items ?? [];
  if (items.length === 0) return null;
  const map = keyedImageMap(images);

  return (
    <section className="bg-cream px-6 py-[140px] md:px-14">
      <SectionHead
        eyebrow={photography.eyebrow}
        headline={photography.headline}
        split={false}
      />

      <RevealOnScroll
        as="div"
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {items.map((item, i) => {
          const image = item.imageKey ? map.get(item.imageKey) : undefined;
          const url = image?.asset
            ? urlFor(image).width(700).height(900).fit("crop").auto("format").url()
            : null;
          return (
            <div key={i} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                {url ? (
                  <Image
                    src={url}
                    alt={image?.alt ?? ""}
                    fill
                    sizes="(min-width:1024px) 24vw, (min-width:640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-[1200ms] ease-silk group-hover:scale-[1.04]"
                  />
                ) : null}
              </div>
              <div className="pt-4">
                {item.time ? (
                  <span className="mb-1.5 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
                    {item.time}
                  </span>
                ) : null}
                {item.title ? (
                  <h4 className="m-0 mb-2 font-serif text-[22px] font-normal italic leading-none text-ink">
                    {item.title}
                  </h4>
                ) : null}
                {item.body ? (
                  <p className="m-0 text-[13px] leading-[1.6] text-muted">
                    {item.body}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </RevealOnScroll>
    </section>
  );
}
