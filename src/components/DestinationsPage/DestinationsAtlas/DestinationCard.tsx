import clsx from "clsx";
import Image from "next/image";
import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import type { DestinationCardData } from "@/sanity/queries/destinations";

import { DEFAULT_TILE, TILE_LAYOUTS } from "./tileLayout";

type DestinationCardProps = {
  card: DestinationCardData;
  image?: DestinationCardData["image"];
};

export function DestinationCard({ card, image }: DestinationCardProps) {
  const tile = card.tile ?? DEFAULT_TILE;
  const layout = TILE_LAYOUTS[tile];

  const imageUrl = image?.asset
    ? urlFor(image)
        .width(layout.imageWidth)
        .height(layout.imageHeight)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  const cardClass = clsx(
    "group relative block overflow-hidden bg-cream no-underline text-ivory",
    layout.spanClasses,
    layout.aspectClass,
  );

  const inner: ReactNode = (
    <>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={image?.alt ?? card.name ?? ""}
          fill
          sizes={layout.sizes}
          className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-silk)] group-hover:scale-[1.05]"
        />
      ) : null}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent from-45% to-[rgba(28,28,24,0.7)]"
      />
      <div className="absolute inset-x-6 bottom-6 z-[2] text-ivory">
        {card.number || card.country ? (
          <span className="mb-1.5 block text-[10px] uppercase tracking-wide-eyebrow text-cine-sage">
            {card.number ? `№ ${card.number}` : null}
            {card.number && card.country ? " · " : null}
            {card.country}
          </span>
        ) : null}
        {card.name ? (
          <h4
            className={clsx(
              "m-0 font-serif italic font-normal leading-none text-ivory",
              layout.isFeatured
                ? "text-[clamp(40px,5vw,64px)]"
                : "text-[clamp(28px,3vw,36px)]",
            )}
          >
            {card.name}
          </h4>
        ) : null}
        {card.subLocations ? (
          <small className="mt-1.5 block text-[10px] uppercase tracking-eyebrow text-cine-sage">
            {card.subLocations}
          </small>
        ) : null}
      </div>
    </>
  );

  if (card.slug) {
    return (
      <Link href={`/destinations/${card.slug}` as never} className={cardClass}>
        {inner}
      </Link>
    );
  }

  return <div className={cardClass}>{inner}</div>;
}
