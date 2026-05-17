import clsx from "clsx";
import Image from "next/image";
import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import type { HomePage } from "@/sanity/queries/home";

type Destination = NonNullable<
  NonNullable<HomePage["whereWeWork"]>["destinations"]
>[number];

type DestinationCardProps = {
  destination: Destination;
  tall?: boolean;
};

export function DestinationCard({ destination, tall }: DestinationCardProps) {
  const { image, name, tagline, subLocations, slug } = destination;

  const imageUrl = image?.asset
    ? urlFor(image)
        .width(tall ? 1100 : 900)
        .height(tall ? 1600 : 900)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  const aspect = tall
    ? "aspect-[3/4] lg:aspect-auto lg:h-full"
    : "aspect-square";

  const cardClass = clsx(
    "group relative block overflow-hidden bg-olive-dk/10 no-underline text-ivory",
    aspect,
  );

  const inner: ReactNode = (
    <>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={image?.alt ?? name ?? ""}
          fill
          sizes={
            tall
              ? "(min-width:1024px) 50vw, 100vw"
              : "(min-width:1024px) 25vw, 100vw"
          }
          className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-silk)] group-hover:scale-[1.04]"
        />
      ) : null}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[rgba(28,28,24,0.65)]"
      />
      <div className="absolute inset-x-6 bottom-6 z-[1] text-ivory">
        {tagline ? (
          <span className="mb-2 block text-[10px] uppercase tracking-wide-eyebrow text-cine-sage">
            {tagline}
          </span>
        ) : null}
        {name ? (
          <h3
            className={clsx(
              "m-0 font-serif italic font-normal leading-none text-ivory",
              tall
                ? "text-[clamp(40px,5vw,56px)]"
                : "text-[clamp(30px,3.4vw,38px)]",
            )}
          >
            {name}
          </h3>
        ) : null}
        {subLocations ? (
          <small className="mt-2 block text-[11px] uppercase tracking-eyebrow text-cine-sage">
            {subLocations}
          </small>
        ) : null}
      </div>
    </>
  );

  if (slug) {
    return (
      <Link href={`/destinations/${slug}` as never} className={cardClass}>
        {inner}
      </Link>
    );
  }

  return <div className={cardClass}>{inner}</div>;
}
