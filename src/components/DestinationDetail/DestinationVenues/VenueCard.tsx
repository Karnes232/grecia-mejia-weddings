import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { DestinationMedia } from "@/sanity/queries/destination";

type VenueImage = NonNullable<DestinationMedia["venueCards"]>[number]["image"];

type VenueCardProps = {
  name?: string;
  tag?: string;
  meta?: string;
  body?: string;
  capacity?: string;
  bestFor?: string;
  image?: VenueImage;
  capacityLabel: string;
  bestForLabel: string;
};

export function VenueCard({
  name,
  tag,
  meta,
  body,
  capacity,
  bestFor,
  image,
  capacityLabel,
  bestForLabel,
}: VenueCardProps) {
  const imageUrl = image?.asset
    ? urlFor(image).width(900).height(700).fit("crop").auto("format").url()
    : null;

  return (
    <article className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        {tag ? (
          <span className="absolute right-[14px] top-[14px] z-[1] whitespace-nowrap bg-ivory/95 px-2.5 py-[5px] text-[9px] uppercase tracking-[0.28em] text-olive">
            {tag}
          </span>
        ) : null}
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={image?.alt ?? name ?? ""}
            fill
            sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 90vw"
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
        ) : null}
      </div>

      <div className="pt-[18px]">
        {name ? (
          <h4 className="mb-1.5 font-serif text-[30px] font-normal italic leading-none text-ink">
            {name}
          </h4>
        ) : null}
        {meta ? (
          <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-muted">
            {meta}
          </div>
        ) : null}
        {body ? (
          <p className="mb-4 text-[14px] leading-[1.6] text-[#3d3a30]">{body}</p>
        ) : null}
        {capacity || bestFor ? (
          <dl className="grid grid-cols-[auto_1fr] gap-x-3.5 gap-y-1.5 text-[12px]">
            {capacity ? (
              <>
                <dt className="text-[9px] uppercase tracking-[0.28em] text-muted">
                  {capacityLabel}
                </dt>
                <dd className="m-0 font-serif text-[14px] italic text-ink">
                  {capacity}
                </dd>
              </>
            ) : null}
            {bestFor ? (
              <>
                <dt className="text-[9px] uppercase tracking-[0.28em] text-muted">
                  {bestForLabel}
                </dt>
                <dd className="m-0 font-serif text-[14px] italic text-ink">
                  {bestFor}
                </dd>
              </>
            ) : null}
          </dl>
        ) : null}
      </div>
    </article>
  );
}
