import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Venue } from "@/sanity/queries/venue";

import { SectionHead } from "../_shared/SectionHead";

type VenueCapacityProps = {
  capacity: NonNullable<Venue["capacity"]>;
};

export function VenueCapacity({ capacity }: VenueCapacityProps) {
  const meter = capacity.meter;
  const loves = capacity.loves;
  const constraints = capacity.constraints;

  return (
    <section className="bg-cream px-6 py-[140px] md:px-14">
      <SectionHead
        eyebrow={capacity.eyebrow}
        headline={capacity.headline}
        split={false}
      />

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        {meter ? (
          <RevealOnScroll as="div" className="border border-rule bg-ivory p-8 md:p-12">
            {meter.title ? (
              <h3 className="m-0 mb-2 font-serif text-[30px] font-normal italic leading-none text-ink">
                {meter.title}
              </h3>
            ) : null}
            {meter.sub ? (
              <span className="mb-8 block text-[11px] uppercase tracking-[0.3em] text-muted">
                {meter.sub}
              </span>
            ) : null}

            <div className="relative my-12 h-1.5 rounded-full bg-rule">
              <div
                className="absolute top-0 h-1.5 rounded-full bg-olive"
                style={{
                  left: `${meter.fillLeft ?? 0}%`,
                  width: `${meter.fillWidth ?? 0}%`,
                }}
              />
            </div>
            {meter.marks?.length ? (
              <div className="flex justify-between">
                {meter.marks.map((m, i) => (
                  <span
                    key={i}
                    className={
                      i % 2 === 1
                        ? "font-serif text-[14px] italic text-ink"
                        : "text-[10px] uppercase tracking-[0.28em] text-muted"
                    }
                  >
                    {m}
                  </span>
                ))}
              </div>
            ) : null}

            {meter.recs?.length ? (
              <div className="mt-9 grid grid-cols-1 gap-y-6 border-t border-rule pt-6 sm:grid-cols-2 sm:gap-0">
                {meter.recs.map((rec, i) => (
                  <div
                    key={i}
                    className={i === 1 ? "sm:border-l sm:border-rule sm:pl-6" : "sm:pr-6"}
                  >
                    {rec.label ? (
                      <span className="mb-2 block text-[9px] uppercase tracking-[0.32em] text-muted">
                        {rec.label}
                      </span>
                    ) : null}
                    {rec.value ? (
                      <span className="block font-serif text-[24px] italic leading-[1.1] text-ink">
                        {rec.value}
                      </span>
                    ) : null}
                    {rec.body ? (
                      <p className="mt-2.5 text-[13px] leading-[1.6] text-muted">
                        {rec.body}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </RevealOnScroll>
        ) : null}

        <RevealOnScroll as="div" className="grid gap-6">
          {loves?.items?.length ? (
            <ProsConsCell title={loves.title} items={loves.items} variant="pro" />
          ) : null}
          {constraints?.items?.length ? (
            <ProsConsCell
              title={constraints.title}
              items={constraints.items}
              variant="con"
            />
          ) : null}
        </RevealOnScroll>
      </div>
    </section>
  );
}

function ProsConsCell({
  title,
  items,
  variant,
}: {
  title?: string;
  items: string[];
  variant: "pro" | "con";
}) {
  return (
    <div>
      {title ? (
        <h3 className="m-0 mb-[18px] border-b border-gold pb-3.5 font-serif text-[30px] font-normal italic leading-none text-ink">
          {title}
        </h3>
      ) : null}
      <ul className="m-0 grid list-none gap-3.5 p-0">
        {items.map((item, i) => (
          <li key={i} className="relative pl-6 text-[14px] leading-[1.6] text-[#2a2a24]">
            {variant === "pro" ? (
              <span
                aria-hidden
                className="absolute left-0 top-[3px] block h-[11px] w-[6px] rotate-45 border-b-2 border-r-2 border-olive"
              />
            ) : (
              <span
                aria-hidden
                className="absolute left-0 top-[11px] block h-px w-2.5 bg-gold"
              />
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
