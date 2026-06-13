import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/queries/about";

type StoryFigureProps = {
  image?: SanityImage;
  caption?: { emphasis?: string; note?: string };
};

export function StoryFigure({ image, caption }: StoryFigureProps) {
  const imageUrl = image?.asset
    ? urlFor(image).width(1400).height(840).fit("crop").auto("format").url()
    : null;

  return (
    <figure className="my-12 lg:-mr-[120px]">
      <div className="relative aspect-[5/3] overflow-hidden bg-sand">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={image?.alt ?? ""}
            fill
            sizes="(min-width:1024px) 60vw, 100vw"
            className="object-cover"
          />
        ) : null}
      </div>

      {caption?.emphasis || caption?.note ? (
        <figcaption className="mt-3 flex justify-between gap-4 text-[10px] uppercase tracking-wide-eyebrow text-muted">
          {caption?.emphasis ? (
            <em className="font-serif text-[14px] italic normal-case tracking-normal text-olive">
              {caption.emphasis}
            </em>
          ) : (
            <span />
          )}
          {caption?.note ? (
            <span className="text-right">{caption.note}</span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
