import Image from "next/image";
import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import type { DestinationMedia } from "@/sanity/queries/destination";

type ArticleImage = NonNullable<
  DestinationMedia["relatedArticles"]
>[number]["image"];

type ArticleCardProps = {
  category?: string;
  title?: string;
  body?: string;
  href?: string;
  image?: ArticleImage;
};

const WRAPPER = "block border-b border-rule py-6 text-inherit no-underline";

export function ArticleCard({
  category,
  title,
  body,
  href,
  image,
}: ArticleCardProps) {
  const imageUrl = image?.asset
    ? urlFor(image).width(400).height(300).fit("crop").auto("format").url()
    : null;

  const inner: ReactNode = (
    <div className="grid grid-cols-[120px_1fr] gap-6 sm:grid-cols-[200px_1fr] sm:gap-8">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={image?.alt ?? title ?? ""}
            fill
            sizes="(min-width:640px) 200px, 120px"
            className="object-cover"
          />
        ) : null}
      </div>
      <div>
        {category ? (
          <span className="mb-1.5 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
            {category}
          </span>
        ) : null}
        {title ? (
          <h4 className="m-0 mb-2 font-serif text-[26px] font-normal italic leading-[1.15] text-ink">
            {title}
          </h4>
        ) : null}
        {body ? (
          <p className="m-0 text-[13px] leading-[1.5] text-muted">{body}</p>
        ) : null}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href as never} className={WRAPPER}>
        {inner}
      </Link>
    );
  }
  return <div className={WRAPPER}>{inner}</div>;
}
