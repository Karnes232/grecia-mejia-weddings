import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import type { Destination } from "@/sanity/queries/destination";

type Card = NonNullable<NonNullable<Destination["venues"]>["cards"]>[number];

type VenueCardProps = {
  card: Card;
};

export function VenueCard({ card }: VenueCardProps) {
  const { name, tag, meta, body, rows, slug, region, image } = card;
  const imageUrl = image?.asset
    ? urlFor(image).width(900).height(700).fit("crop").auto("format").url()
    : null;

  const inner = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        {tag ? (
          <span className="absolute right-[14px] top-[14px] z-[1] whitespace-nowrap bg-ivory/95 px-2.5 py-[5px] text-[9px] uppercase tracking-[0.28em] text-olive">
            {tag}
          </span>
        ) : null}
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={image?.alt ?? name ?? ""}
            fill
            sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 90vw"
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
        ) : null}
      </div>

      <div className="pt-[18px]">
        {name ? (
          <h4 className="mb-1.5 font-serif text-[30px] font-normal italic leading-none text-ink">
            {name}
          </h4>
        ) : null}
        {meta ? (
          <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-muted">
            {meta}
          </div>
        ) : null}
        {body ? (
          <p className="mb-4 text-[14px] leading-[1.6] text-[#3d3a30]">{body}</p>
        ) : null}
        {rows?.length ? (
          <dl className="grid grid-cols-[auto_1fr] gap-x-3.5 gap-y-1.5 text-[12px]">
            {rows.map((row, i) => (
              <div key={i} className="contents">
                <dt className="text-[9px] uppercase tracking-[0.28em] text-muted">
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
    </>
  );

  if (slug && region) {
    return (
      <Link
        href={{
          pathname: "/venues/[region]/[venue]",
          params: { region, venue: slug },
        }}
        className="group block no-underline"
      >
        {inner}
      </Link>
    );
  }

  return <article className="group block">{inner}</article>;
}
