import { CTAButton } from "@/components/_shared/CTAButton";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Destination } from "@/sanity/queries/destination";

type DestinationTrendsProps = {
  trends: NonNullable<Destination["trends"]>;
};

export function DestinationTrends({ trends }: DestinationTrendsProps) {
  const items = trends.items ?? [];

  return (
    <section className="border-t border-rule bg-ivory px-6 py-[120px] md:px-14">
      <RevealOnScroll className="mx-auto mb-14 flex max-w-[1400px] flex-col gap-6 border-b border-olive pb-6 md:flex-row md:items-end md:justify-between md:gap-12">
        <div>
          {trends.eyebrow ? (
            <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {trends.eyebrow}
            </span>
          ) : null}
          {trends.headline ? (
            <h2 className="m-0 font-serif font-light text-[clamp(44px,7vw,74px)] leading-[0.96] text-ink">
              {renderHeadline(trends.headline, "olive")}
            </h2>
          ) : null}
        </div>
        {trends.readMoreLabel && trends.readMoreSlug ? (
          <CTAButton
            href={{
              pathname: "/journal/[slug]",
              params: { slug: trends.readMoreSlug },
            }}
            className="shrink-0 self-start md:self-auto"
          >
            {trends.readMoreLabel}
          </CTAButton>
        ) : null}
      </RevealOnScroll>

      <RevealOnScroll className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div key={i} className="border-t border-gold pt-6">
            <span className="mb-2 block font-serif text-[14px] italic text-gold">
              № {String(i + 1).padStart(2, "0")}
            </span>
            {item.title ? (
              <h4 className="m-0 mb-3.5 font-serif text-[28px] font-normal italic leading-[1.1] text-ink">
                {item.title}
              </h4>
            ) : null}
            {item.body ? (
              <p className="m-0 text-[14px] leading-[1.6] text-muted">
                {item.body}
              </p>
            ) : null}
          </div>
        ))}
      </RevealOnScroll>
    </section>
  );
}
