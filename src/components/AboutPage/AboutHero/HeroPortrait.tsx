import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/queries/about";

type HeroPortraitProps = {
  image?: SanityImage;
  captionLeft?: string;
  captionRight?: string;
};

export function HeroPortrait({
  image,
  captionLeft,
  captionRight,
}: HeroPortraitProps) {
  const imageUrl = image?.asset
    ? urlFor(image).width(1100).height(1375).fit("crop").auto("format").url()
    : null;

  return (
    <div className="relative">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        {imageUrl ? (
          <div className="absolute inset-0 motion-safe:[animation:ken-burns_32s_ease-in-out_infinite_alternate]">
            <Image
              src={imageUrl}
              alt={image?.alt ?? ""}
              fill
              priority
              sizes="(min-width:1024px) 45vw, 100vw"
              className="object-cover"
              style={{ filter: "saturate(0.88) contrast(1.04)" }}
            />
          </div>
        ) : null}
      </div>

      {captionLeft || captionRight ? (
        <div className="absolute inset-x-0 -bottom-8 flex justify-between gap-4 text-[10px] uppercase tracking-wide-eyebrow text-muted">
          <span>{captionLeft}</span>
          <span className="text-right">{captionRight}</span>
        </div>
      ) : null}
    </div>
  );
}
