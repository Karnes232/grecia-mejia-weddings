import { CTAButton } from "@/components/_shared/CTAButton";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Destination, DestinationMedia } from "@/sanity/queries/destination";

import { keyedImageMap } from "../keyedImageMap";
import { GuestCard } from "./GuestCard";

type DestinationGuestProps = {
  guest: NonNullable<Destination["guest"]>;
  images: DestinationMedia["guestCards"];
};

// Asymmetric mosaic: row 1 = 7 + 5, row 2 = 4 + 4 + 4. Full literal classes so
// Tailwind's scanner picks them up.
const LAYOUT = [
  {
    span: "lg:col-span-7",
    sizes: "(min-width:1024px) 58vw, (min-width:768px) 50vw, 100vw",
  },
  {
    span: "lg:col-span-5",
    sizes: "(min-width:1024px) 42vw, (min-width:768px) 50vw, 100vw",
  },
  {
    span: "lg:col-span-4",
    sizes: "(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw",
  },
  {
    span: "lg:col-span-4",
    sizes: "(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw",
  },
  {
    span: "lg:col-span-4",
    sizes: "(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw",
  },
] as const;

const DEFAULT_LAYOUT = LAYOUT[2];

export function DestinationGuest({ guest, images }: DestinationGuestProps) {
  const imageByKey = keyedImageMap(images);
  const cards = guest.cards ?? [];

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

      <RevealOnScroll className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
        {cards.map((card, i) => {
          const layout = LAYOUT[i] ?? DEFAULT_LAYOUT;
          return (
            <GuestCard
              key={i}
              label={card.label}
              headline={card.headline}
              image={imageByKey.get(card.imageKey ?? "")}
              spanClass={layout.span}
              sizes={layout.sizes}
            />
          );
        })}
      </RevealOnScroll>
    </section>
  );
}
