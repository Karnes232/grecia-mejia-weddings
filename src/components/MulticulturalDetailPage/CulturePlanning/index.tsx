import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Culture } from "@/sanity/queries/culture";

import { SectionDeck, SectionHead } from "../SectionHead";

type CulturePlanningProps = {
  planning: NonNullable<Culture["planning"]>;
};

/** Day-by-day planner with a sticky left rail per day (design `ed-cul-days`). */
export function CulturePlanning({ planning }: CulturePlanningProps) {
  const days = planning.days ?? [];

  return (
    <section className="bg-ivory px-6 py-[140px] md:px-14">
      <div className="mx-auto max-w-[1300px]">
        <SectionHead
          eyebrow={planning.eyebrow}
          headline={planning.headline}
          aside={
            planning.deck ? (
              <SectionDeck>{planning.deck}</SectionDeck>
            ) : undefined
          }
        />

        {days.length ? (
          <RevealOnScroll>
            {days.map((day, i) => (
              <div
                key={i}
                className="grid grid-cols-1 items-start gap-6 border-b border-rule py-9 first:border-t md:grid-cols-[220px_1fr] md:gap-12"
              >
                <div className="md:sticky md:top-[120px]">
                  {day.numeral ? (
                    <span className="block font-serif text-[54px] font-light italic leading-none text-olive">
                      № {day.numeral}
                    </span>
                  ) : null}
                  {day.dayLabel ? (
                    <span className="mt-1.5 block text-[10px] uppercase tracking-[0.32em] text-muted">
                      {day.dayLabel}
                    </span>
                  ) : null}
                  {day.title ? (
                    <span className="mt-3.5 block font-serif text-[24px] italic leading-[1.1] text-ink">
                      {day.title}
                    </span>
                  ) : null}
                </div>

                <div>
                  {day.body ? (
                    <p className="m-0 mb-4 max-w-[60ch] text-[15px] leading-[1.75] text-[#2a2a24]">
                      {day.body}
                    </p>
                  ) : null}
                  {day.events?.length ? (
                    <ul className="m-0 mt-[18px] grid list-none grid-cols-1 gap-x-8 gap-y-2.5 p-0 sm:grid-cols-2">
                      {day.events.map((event, j) => (
                        <li
                          key={j}
                          className="relative pl-[18px] text-[13px] text-muted before:absolute before:left-0 before:top-0 before:text-[8px] before:text-gold before:content-['◇']"
                        >
                          {event.time ? (
                            <strong className="block font-serif text-[16px] font-normal italic text-ink">
                              {event.time}
                            </strong>
                          ) : null}
                          {event.body}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ))}
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
