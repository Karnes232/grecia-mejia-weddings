import Image from "next/image";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { urlFor } from "@/sanity/lib/image";
import type { PressFeatureItem, SanityImage } from "@/sanity/queries/press";

type Variant = "lead" | "side" | "third";

type FeatureCardProps = {
  item: PressFeatureItem;
  image?: SanityImage;
  variant: Variant;
  readLabel: string;
};

const COL_SPAN: Record<Variant, string> = {
  lead: "lg:col-span-7",
  side: "lg:col-span-5",
  third: "lg:col-span-4",
};

const ASPECT: Record<Variant, string> = {
  lead: "aspect-[16/10]",
  side: "aspect-[4/3]",
  third: "aspect-[4/3]",
};

export function FeatureCard({
  item,
  image,
  variant,
  readLabel,
}: FeatureCardProps) {
  const imageUrl = image?.asset
    ? urlFor(image).width(1400).fit("max").auto("format").url()
    : null;

  const inner = (
    <>
      <div className={`relative overflow-hidden ${ASPECT[variant]}`}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={image?.alt ?? ""}
            fill
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1400ms] ease-silk group-hover:scale-[1.05]"
          />
        ) : null}
      </div>

      <div className="px-7 pb-8 pt-7">
        <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-rule pb-3.5">
          {item.publication ? (
            <span className="font-serif text-[22px] italic leading-none text-olive">
              {item.publication}
            </span>
          ) : (
            <span />
          )}
          {item.date ? (
            <span className="text-right text-[10px] uppercase tracking-[0.3em] text-muted">
              {item.date}
            </span>
          ) : null}
        </div>

        {item.title ? (
          <h3
            className={`m-0 mb-3.5 font-serif font-light leading-[1.08] text-ink ${
              variant === "lead" ? "text-[clamp(32px,3vw,44px)]" : "text-[34px]"
            }`}
          >
            {renderHeadline(item.title, "olive")}
          </h3>
        ) : null}

        {item.summary ? (
          <p className="m-0 mb-[18px] text-[14px] leading-[1.7] text-[#3d3a30]">
            {item.summary}
          </p>
        ) : null}

        {item.href ? (
          <span className="inline-block border-b border-gold pb-1 text-[10px] uppercase tracking-wide-eyebrow text-olive">
            {readLabel} →
          </span>
        ) : null}
      </div>
    </>
  );

  const base = `group col-span-1 block overflow-hidden bg-ivory ${COL_SPAN[variant]}`;

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
      >
        {inner}
      </a>
    );
  }

  return <div className={base}>{inner}</div>;
}
