import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/queries/destinations";

type ArticleCardProps = {
  category?: string;
  title?: string;
  body?: string;
  href?: string;
  image?: SanityImage;
};

export function ArticleCard({
  category,
  title,
  body,
  href,
  image,
}: ArticleCardProps) {
  const url = image?.asset
    ? urlFor(image).width(600).height(450).fit("crop").auto("format").url()
    : null;

  const inner = (
    <>
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-sand sm:w-[200px]">
        {url ? (
          <Image
            src={url}
            alt={image?.alt ?? ""}
            fill
            sizes="(min-width:640px) 200px, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-silk group-hover:scale-[1.04]"
          />
        ) : null}
      </div>
      <div className="py-1">
        {category ? (
          <span className="mb-2 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
            {category}
          </span>
        ) : null}
        {title ? (
          <h4 className="m-0 mb-2 font-serif text-[24px] font-normal italic leading-[1.1] text-ink">
            {title}
          </h4>
        ) : null}
        {body ? (
          <p className="m-0 text-[14px] leading-[1.6] text-muted">{body}</p>
        ) : null}
      </div>
    </>
  );

  const cls =
    "group grid grid-cols-1 gap-5 border-b border-rule py-7 first:pt-0 sm:grid-cols-[200px_1fr] sm:items-center";

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cls} no-underline`}
    >
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
