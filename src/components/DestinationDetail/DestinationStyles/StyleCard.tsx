import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { DestinationMedia } from "@/sanity/queries/destination";

type StyleImage = NonNullable<DestinationMedia["styles"]>[number]["image"];

type StyleCardProps = {
  numeral?: string;
  title?: string;
  body?: string;
  image?: StyleImage;
};

export function StyleCard({ numeral, title, body, image }: StyleCardProps) {
  const imageUrl = image?.asset
    ? urlFor(image).width(800).height(1000).fit("crop").auto("format").url()
    : null;

  return (
    <article className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        {numeral ? (
          <span className="absolute left-[18px] top-[18px] z-[1] font-serif text-[18px] italic text-ivory [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
            № {numeral}
          </span>
        ) : null}
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={image?.alt ?? title ?? ""}
            fill
            sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 90vw"
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
        ) : null}
      </div>

      {title ? (
        <h4 className="mt-[18px] mb-2 font-serif text-[30px] font-normal italic leading-none text-ink">
          {title}
        </h4>
      ) : null}
      {body ? (
        <p className="m-0 text-[13px] leading-[1.6] text-muted">{body}</p>
      ) : null}
    </article>
  );
}
