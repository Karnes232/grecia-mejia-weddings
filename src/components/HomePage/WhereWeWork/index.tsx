import type { HomePage } from "@/sanity/queries/home";

import { GhostLink } from "../_shared/GhostLink";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { renderHeadline } from "@/components/_shared/renderHeadline";

import { DestinationCard } from "./DestinationCard";

type WhereWeWorkProps = {
  data: NonNullable<HomePage["whereWeWork"]>;
};

export function WhereWeWork({ data }: WhereWeWorkProps) {
  const destinations = data.destinations ?? [];
  if (!destinations.length) return null;

  const [first, ...rest] = destinations;

  return (
    <section className="bg-cream px-6 py-[140px] md:px-14">
      <div className="mx-auto max-w-[1400px]">
        <RevealOnScroll className="mb-16 flex flex-col gap-10 border-b border-olive pb-8 md:flex-row md:items-end md:justify-between md:gap-16">
          <div>
            {data.eyebrow ? (
              <span className="mb-5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {data.eyebrow}
              </span>
            ) : null}
            {data.headline ? (
              <h2 className="m-0 font-serif font-light text-[clamp(56px,8vw,92px)] leading-[0.92] tracking-[-0.008em] text-ink">
                {renderHeadline(data.headline, "olive")}
              </h2>
            ) : null}
          </div>
          {data.intro ? (
            <p className="m-0 max-w-[32ch] font-serif italic text-[clamp(17px,1.6vw,20px)] leading-[1.5] text-ink/80">
              {data.intro}
            </p>
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:[grid-template-rows:auto_auto]">
          <div className="lg:row-span-2 lg:h-full">
            <DestinationCard destination={first} tall />
          </div>
          {rest.map((d, i) => (
            <DestinationCard key={d.slug ?? d.name ?? i} destination={d} />
          ))}
        </RevealOnScroll>

        {data.viewAllHref && data.viewAllLabel ? (
          <div className="mt-12 text-center">
            <GhostLink href={data.viewAllHref}>{data.viewAllLabel} →</GhostLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}
