import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";

type SanityImage = {
  asset?: { _ref: string; _type: "reference" };
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};

type SpotlightImageProps = {
  image?: SanityImage;
  captionPlace?: string;
  captionDate?: string;
};

export function SpotlightImage({
  image,
  captionPlace,
  captionDate,
}: SpotlightImageProps) {
  const imageUrl = image?.asset
    ? urlFor(image).width(960).height(1152).fit("crop").auto("format").url()
    : null;

  return (
    <div className="relative pb-10">
      <div className="relative aspect-[5/6] overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={image?.alt ?? ""}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="h-full w-full bg-cream" />
        )}
      </div>

      {(captionPlace || captionDate) && (
        <div className="absolute inset-x-0 -bottom-8 flex flex-col gap-1 text-[10px] uppercase tracking-wide-eyebrow text-muted md:flex-row md:justify-between md:gap-4">
          {captionPlace && <span>{captionPlace}</span>}
          {captionDate && <span>{captionDate}</span>}
        </div>
      )}
    </div>
  );
}
