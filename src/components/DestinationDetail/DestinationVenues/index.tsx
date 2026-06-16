import { CTAButton } from "@/components/_shared/CTAButton";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Destination } from "@/sanity/queries/destination";

import { VenueCard } from "./VenueCard";

type DestinationVenuesProps = {
  venues: NonNullable<Destination["venues"]>;
};

export function DestinationVenues({ venues }: DestinationVenuesProps) {
  const cards = venues.cards ?? [];

  return (
    <section className="bg-ivory px-6 py-[140px] md:px-14">
      <RevealOnScroll className="mx-auto mb-14 flex max-w-[1400px] flex-col gap-6 border-b border-olive pb-6 md:flex-row md:items-end md:justify-between md:gap-12">
        <div>
          {venues.eyebrow ? (
            <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {venues.eyebrow}
            </span>
          ) : null}
          {venues.headline ? (
            <h2 className="m-0 font-serif font-light text-[clamp(48px,8vw,82px)] leading-[0.96] text-ink">
              {renderHeadline(venues.headline, "olive")}
            </h2>
          ) : null}
        </div>
        {venues.viewAllLabel && venues.viewAllHref ? (
          <CTAButton
            href={venues.viewAllHref}
            className="shrink-0 self-start md:self-auto"
          >
            {venues.viewAllLabel}
          </CTAButton>
        ) : null}
      </RevealOnScroll>

      <RevealOnScroll className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <VenueCard key={i} card={card} />
        ))}
      </RevealOnScroll>
    </section>
  );
}
