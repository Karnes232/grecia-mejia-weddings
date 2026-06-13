import Image from "next/image";
import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import type { Culture } from "@/sanity/queries/culture";

type Card = NonNullable<NonNullable<Culture["compatibility"]>["cards"]>[number];

type CompatibilityCardProps = {
  card: Card;
};

const WRAPPER =
  "group relative block overflow-hidden text-inherit no-underline";

export function CompatibilityCard({ card }: CompatibilityCardProps) {
  const image = card.image;
  const imageUrl = image?.asset
    ? urlFor(image).width(700).height(900).fit("crop").auto("format").url()
    : null;
  const rating = card.rating
    ? "★".repeat(Math.max(1, Math.min(5, Math.round(card.rating))))
    : null;

  const inner: ReactNode = (
    <>
      <div className="relative aspect-[3/4] bg-sand">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={image?.alt ?? card.name ?? ""}
            fill
            sizes="(min-width:1024px) 24vw, (min-width:640px) 45vw, 90vw"
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
          />
        ) : null}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(28,28,24,0.72))]"
      />
      <div className="absolute inset-x-5 bottom-5 z-[1] text-ivory">
        {rating ? (
          <span
            aria-label={card.rating ? `${card.rating} / 5` : undefined}
            className="mb-1 block font-serif text-[16px] italic text-cine-gold"
          >
            {rating}
          </span>
        ) : null}
        {card.name ? (
          <h4 className="m-0 font-serif text-[28px] font-normal italic leading-none text-ivory">
            {card.name}
          </h4>
        ) : null}
        {card.sub ? (
          <small className="mt-2 block text-[10px] uppercase tracking-[0.3em] text-cine-sage">
            {card.sub}
          </small>
        ) : null}
      </div>
    </>
  );

  if (card.destinationSlug) {
    return (
      <Link
        // Object-form href so next-intl localizes the path segment — a concrete
        // string would keep the EN segment and resolve via a 307 redirect.
        href={{
          pathname: "/destinations/[destination]",
          params: { destination: card.destinationSlug },
        }}
        className={WRAPPER}
      >
        {inner}
      </Link>
    );
  }
  return <div className={WRAPPER}>{inner}</div>;
}
