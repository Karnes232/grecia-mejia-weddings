import clsx from "clsx";
import Image from "next/image";
import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import type { PortfolioCard } from "@/sanity/queries/portfolio";

import { DEFAULT_TILE, TILE_LAYOUTS } from "./tileLayout";

type CaseStudyCardProps = {
  card: PortfolioCard;
};

export function CaseStudyCard({ card }: CaseStudyCardProps) {
  const tile = card.tile ?? DEFAULT_TILE;
  const layout = TILE_LAYOUTS[tile];
  const image = card.image;

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
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent from-45% to-[rgba(28,28,24,0.8)]"
      />
      <div className="absolute inset-x-7 bottom-7 z-[2] text-ivory">
        {card.cardMeta ? (
          <span className="mb-2 block text-[10px] uppercase tracking-wide-eyebrow text-cine-sage">
            {card.cardMeta}
          </span>
        ) : null}
        {card.name ? (
          <h3
            className={clsx(
              "m-0 font-serif italic font-normal leading-none text-ivory",
              layout.isFeatured
                ? "text-[clamp(40px,6vw,72px)]"
                : "text-[clamp(28px,3.4vw,40px)]",
            )}
          >
            {card.name}
          </h3>
        ) : null}
        {card.cardBlurb && tile !== "third" ? (
          <p
            className={clsx(
              "mt-2 leading-[1.5] text-cine-ivory",
              layout.isFeatured
                ? "text-[15px] max-w-[46ch]"
                : "text-[12px] max-w-[40ch]",
            )}
          >
            {card.cardBlurb}
          </p>
        ) : null}
        <span className="mt-3.5 block text-[10px] uppercase tracking-[0.32em] text-cine-gold">
          {tile === "third" ? "Read" : "Read the case study"} →
        </span>
      </div>
    </>
  );

  if (card.slug) {
    return (
      <Link
        // Object-form href so next-intl localizes the path segment.
        href={{ pathname: "/portfolio/[slug]", params: { slug: card.slug } }}
        className={cardClass}
      >
        {inner}
      </Link>
    );
  }

  return <div className={cardClass}>{inner}</div>;
}
