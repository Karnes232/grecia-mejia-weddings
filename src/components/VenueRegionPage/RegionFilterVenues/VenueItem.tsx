import Image from "next/image";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/queries/destinations";
import type { VenueRegion } from "@/sanity/queries/venueRegion";

type Venue = NonNullable<VenueRegion["venues"]>[number];

type VenueItemProps = {
  venue: Venue;
  image?: SanityImage;
  regionSlug: string;
  flip: boolean;
  readLabel: string;
};

export function VenueItem({
  venue,
  image,
  regionSlug,
  flip,
  readLabel,
}: VenueItemProps) {
  const imageUrl = image?.asset
    ? urlFor(image).width(1100).height(880).fit("crop").auto("format").url()
    : null;
  const meta = venue.meta ?? [];

  const imageBlock = (
    <div className="relative aspect-[5/4] overflow-hidden">
      {venue.tag ? (
        <span className="absolute left-[18px] top-[18px] z-[1] bg-[rgba(245,240,230,0.94)] px-3 py-1.5 text-[9px] uppercase tracking-[0.32em] text-olive">
          {venue.tag}
        </span>
      ) : null}
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={image?.alt ?? ""}
          fill
          sizes="(min-width:768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1400ms] ease-silk group-hover:scale-[1.04]"
        />
      ) : null}
      {venue.number ? (
        <span className="absolute bottom-[18px] right-[18px] z-[1] font-serif text-[36px] italic leading-none text-ivory [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
          № {venue.number}
        </span>
      ) : null}
    </div>
  );

  const bodyBlock = (
    <div className="flex flex-col justify-center py-6">
      {venue.tag ? (
        <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
          {venue.tag}
        </span>
      ) : null}
      {venue.name ? (
        <h3 className="m-0 mb-2 font-serif text-[clamp(34px,4vw,48px)] font-normal italic leading-[0.98] text-ink">
          {renderHeadline(venue.name, "olive")}
        </h3>
      ) : null}
      {venue.location ? (
        <div className="mb-5 text-[11px] uppercase tracking-[0.3em] text-muted">
          {venue.location}
        </div>
      ) : null}
      {venue.blurb ? (
        <p className="m-0 mb-6 max-w-[50ch] text-[15px] leading-[1.7] text-[#3d3a30]">
          {venue.blurb}
        </p>
      ) : null}
      {meta.length ? (
        <div className="mb-6 grid grid-cols-1 gap-x-8 gap-y-3.5 border-y border-rule py-[18px] sm:grid-cols-3">
          {meta.map((m, i) => (
            <div key={i}>
              {m.label ? (
                <span className="mb-1 block text-[9px] uppercase tracking-[0.3em] text-muted">
                  {m.label}
                </span>
              ) : null}
              {m.value ? (
                <span className="font-serif text-[16px] italic leading-[1.1] text-ink">
                  {m.value}
                </span>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
      {venue.slug ? (
        <span className="self-start border-b border-gold pb-1 text-[11px] uppercase tracking-[0.32em] text-olive">
          {readLabel} →
        </span>
      ) : null}
    </div>
  );

  const cardClass = "group grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12";
  const ordered = flip ? (
    <>
      <div className="md:order-2">{imageBlock}</div>
      <div className="md:order-1">{bodyBlock}</div>
    </>
  ) : (
    <>
      {imageBlock}
      {bodyBlock}
    </>
  );

  if (venue.slug) {
    return (
      <Link
        href={{
          pathname: "/venues/[region]/[venue]",
          params: { region: regionSlug, venue: venue.slug },
        }}
        className={cardClass}
      >
        {ordered}
      </Link>
    );
  }

  return <div className={cardClass}>{ordered}</div>;
}
