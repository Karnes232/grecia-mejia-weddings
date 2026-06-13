import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/queries/destinations";

type HeroBackgroundProps = {
  image?: SanityImage;
};

export function HeroBackground({ image }: HeroBackgroundProps) {
  const imageUrl = image?.asset
    ? urlFor(image).width(2400).fit("max").auto("format").url()
    : null;

  if (!imageUrl) return null;

  return (
    <div className="absolute -inset-[4%] z-0">
      <div
        data-cine-anim
        className="absolute inset-0 motion-safe:[animation:ken-burns_28s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite_alternate]"
      >
        <Image
          src={imageUrl}
          alt={image?.alt ?? ""}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ filter: "saturate(0.85) contrast(1.04) brightness(0.7)" }}
        />
      </div>
    </div>
  );
}
