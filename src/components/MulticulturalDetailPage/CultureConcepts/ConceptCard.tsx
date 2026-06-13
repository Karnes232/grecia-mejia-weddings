import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { Culture, CultureMedia } from "@/sanity/queries/culture";

type Concept = NonNullable<
  NonNullable<Culture["designConcepts"]>["cards"]
>[number];
type ConceptImage = NonNullable<
  CultureMedia["designConcepts"]
>[number]["image"];

type ConceptCardProps = {
  eyebrow: string;
  card: Concept;
  image?: ConceptImage;
};

export function ConceptCard({ eyebrow, card, image }: ConceptCardProps) {
  const imageUrl = image?.asset
    ? urlFor(image).width(800).height(960).fit("crop").auto("format").url()
    : null;
  const palette = (card.palette ?? []).filter(Boolean);
  const rows = (card.rows ?? []).filter((row) => row.label || row.value);

  return (
    <article className="group block">
      <div className="relative aspect-[5/6] overflow-hidden bg-sand">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={image?.alt ?? card.title ?? ""}
            fill
            sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 90vw"
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
          />
        ) : null}
        {palette.length ? (
          <div aria-hidden className="absolute inset-x-0 bottom-0 flex h-2">
            {palette.map((color, i) => (
              <span
                key={i}
                className="h-full flex-1"
                style={{ background: color }}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="pt-6">
        <span className="mb-2 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
          {eyebrow}
        </span>
        {card.title ? (
          <h4 className="m-0 mb-3 font-serif text-[30px] font-normal italic leading-none text-ink">
            {card.title}
          </h4>
        ) : null}
        {card.body ? (
          <p className="m-0 mb-4 text-[14px] leading-[1.65] text-[#3d3a30]">
            {card.body}
          </p>
        ) : null}
        {rows.length ? (
          <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
            {rows.map((row, i) => (
              <div key={i} className="contents">
                <dt className="text-[9px] uppercase tracking-[0.3em] text-muted">
                  {row.label}
                </dt>
                <dd className="m-0 font-serif text-[14px] italic text-ink">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </article>
  );
}
