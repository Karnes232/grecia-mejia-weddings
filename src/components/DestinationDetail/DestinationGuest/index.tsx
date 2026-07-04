import { CTAButton } from "@/components/_shared/CTAButton";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { urlFor } from "@/sanity/lib/image";
import type {
  Destination,
  DestinationMedia,
} from "@/sanity/queries/destination";

import { keyedImageMap } from "@/components/_shared/keyedImageMap";
import { GuestMasonry, type GuestPhoto } from "./GuestMasonry";

type DestinationGuestProps = {
  guest: NonNullable<Destination["guest"]>;
  images: DestinationMedia["guestCards"];
};

// Masonry needs each image's natural size; empty slots keep a 1:1 placeholder
// (src "") so the card's label/headline still render. Mirrors RegionGrid.
function toPhotos(
  cards: NonNullable<NonNullable<Destination["guest"]>["cards"]>,
  images: DestinationMedia["guestCards"],
): GuestPhoto[] {
  const imageByKey = keyedImageMap(images);
  return cards.map((card) => {
    const image = imageByKey.get(card.imageKey ?? "");
    const width = image?.dimensions?.width ?? 1000;
    const height = image?.dimensions?.height ?? 1000;
    const src = image?.asset
      ? urlFor(image).width(Math.min(width, 1200)).auto("format").url()
      : "";
    return {
      src,
      width,
      height,
      alt: image?.alt ?? card.headline ?? "",
      label: card.label,
      headline: card.headline,
    };
  });
}

export function DestinationGuest({ guest, images }: DestinationGuestProps) {
  const photos = toPhotos(guest.cards ?? [], images);

  return (
    <section className="bg-ivory px-6 py-[140px] md:px-14">
      <RevealOnScroll className="mx-auto mb-14 flex max-w-[1400px] flex-col gap-6 border-b border-olive pb-6 md:flex-row md:items-end md:justify-between md:gap-12">
        <div>
          {guest.eyebrow ? (
            <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {guest.eyebrow}
            </span>
          ) : null}
          {guest.headline ? (
            <h2 className="m-0 font-serif font-light text-[clamp(48px,8vw,82px)] leading-[0.96] text-ink">
              {renderHeadline(guest.headline, "olive")}
            </h2>
          ) : null}
        </div>
        {guest.viewAllLabel && guest.viewAllHref ? (
          <CTAButton
            href={guest.viewAllHref}
            className="shrink-0 self-start md:self-auto"
          >
            {guest.viewAllLabel}
          </CTAButton>
        ) : null}
      </RevealOnScroll>

      <RevealOnScroll className="mx-auto max-w-[1400px]">
        <GuestMasonry photos={photos} />
      </RevealOnScroll>
    </section>
  );
}
