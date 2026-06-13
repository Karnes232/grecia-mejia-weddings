import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/queries/destinations";

type TypologyCardProps = {
  title?: string;
  count?: string;
  sub?: string;
  image?: SanityImage;
};

export function TypologyCard({ title, count, sub, image }: TypologyCardProps) {
  const imageUrl = image?.asset
    ? urlFor(image).width(700).height(900).fit("crop").auto("format").url()
    : null;

  return (
    <div className="group relative overflow-hidden">
      <div className="relative aspect-[4/5]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={image?.alt ?? ""}
            fill
            sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1400ms] ease-silk group-hover:scale-[1.04]"
          />
        ) : null}
        <span
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(28,28,24,0.78))]"
        />
      </div>
      <div className="absolute inset-x-6 bottom-6 z-[1] text-ivory">
        {count ? (
          <span className="mb-1.5 block font-serif text-[14px] italic text-[var(--color-cine-gold)]">
            {count}
          </span>
        ) : null}
        {title ? (
          <h4 className="m-0 font-serif text-[30px] font-normal italic leading-none text-ivory">
            {title}
          </h4>
        ) : null}
        {sub ? (
          <small className="mt-2 block text-[10px] uppercase tracking-[0.32em] text-[var(--color-cine-sage)]">
            {sub}
          </small>
        ) : null}
      </div>
    </div>
  );
}
