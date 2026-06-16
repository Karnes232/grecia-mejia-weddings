import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import type { VenueRegionCard } from "@/sanity/queries/venues";

type RegionCardProps = {
  card: VenueRegionCard;
  regionLabel: string;
  ctaLabel: string;
};

export function RegionCard({ card, regionLabel, ctaLabel }: RegionCardProps) {
  const imageUrl = card.image?.asset
    ? urlFor(card.image)
        .width(1100)
        .height(800)
        .fit("crop")
        .auto("format")
        .url()
    : null;
  const meta = card.cardMeta ?? [];

  const inner = (
    <>
      <div className="relative min-h-[260px] overflow-hidden md:min-h-[340px]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={card.image?.alt ?? ""}
            fill
            sizes="(min-width:768px) 60vw, 100vw"
            className="object-cover transition-transform duration-[1400ms] ease-silk group-hover:scale-[1.04]"
          />
        ) : null}
      </div>
      <div className="flex flex-col justify-center px-6 py-10 md:px-14 md:py-12 lg:pr-14 lg:pl-14">
        <span className="mb-3.5 block text-[10px]  uppercase tracking-wide-eyebrow text-gold">
          {regionLabel}
        </span>
        {card.name ? (
          <h3 className="m-0 mb-5 font-serif italic font-light text-[clamp(40px,5vw,64px)] leading-[0.96] text-ink">
            {card.name}
          </h3>
        ) : null}
        {card.cardBlurb ? (
          <p className="m-0 mb-6 max-w-[50ch] text-[15px] leading-[1.7] text-[#3d3a30]">
            {card.cardBlurb}
          </p>
        ) : null}
        {meta.length ? (
          <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-rule py-[18px]">
            {meta.map((m, i) => {
              const value = m.useVenueCount
                ? String(card.venueCount ?? 0)
                : m.value;
              return (
                <div key={i}>
                  {value ? (
                    <span className="block font-serif text-[22px] italic leading-none text-ink">
                      {value}
                    </span>
                  ) : null}
                  {m.label ? (
                    <span className="mt-1.5 block text-[9px] uppercase tracking-[0.32em] text-muted">
                      {m.label}
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : null}
        <span className="mt-6 inline-block self-start border-b border-gold pb-1 text-[11px] uppercase tracking-[0.32em] text-olive">
          {ctaLabel} →
        </span>
      </div>
    </>
  );

  const cardClass =
    "group grid grid-cols-1 bg-cream transition-colors duration-300 hover:bg-[#e3d8bf] md:grid-cols-[1.6fr_1fr]";

  if (card.slug) {
    return (
      <Link
        href={{ pathname: "/venues/[region]", params: { region: card.slug } }}
        className={cardClass}
      >
        {inner}
      </Link>
    );
  }

  return <div className={cardClass}>{inner}</div>;
}
