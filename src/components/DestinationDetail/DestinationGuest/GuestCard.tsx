import clsx from "clsx";
import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { DestinationMedia } from "@/sanity/queries/destination";

type GuestImage = NonNullable<DestinationMedia["guestCards"]>[number]["image"];

type GuestCardProps = {
  label?: string;
  headline?: string;
  image?: GuestImage;
  spanClass: string;
  sizes: string;
};

export function GuestCard({
  label,
  headline,
  image,
  spanClass,
  sizes,
}: GuestCardProps) {
  const imageUrl = image?.asset
    ? urlFor(image).width(1200).height(900).fit("crop").auto("format").url()
    : null;

  return (
    <article
      className={clsx(
        "group relative block aspect-[4/3] overflow-hidden bg-sand text-ivory",
        spanClass,
      )}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={image?.alt ?? headline ?? ""}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-silk)] group-hover:scale-[1.04]"
        />
      ) : null}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent from-60% to-[rgba(28,28,24,0.65)]"
      />

      <div className="absolute inset-x-6 bottom-6 z-[2] text-ivory">
        {label ? (
          <span className="mb-1.5 block text-[10px] uppercase tracking-wide-eyebrow text-cine-sage">
            {label}
          </span>
        ) : null}
        {headline ? (
          <h4 className="m-0 font-serif text-[28px] font-normal italic leading-none text-ivory">
            {headline}
          </h4>
        ) : null}
      </div>
    </article>
  );
}
