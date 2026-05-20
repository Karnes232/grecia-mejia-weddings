import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { DestinationsPage } from "@/sanity/queries/destinations";

import { CalendarGrid } from "./CalendarGrid";
import { CalendarHead } from "./CalendarHead";
import { CalendarLegend } from "./CalendarLegend";
import { getMonthLabels } from "./monthLabels";

type DestinationsCalendarProps = {
  calendar: NonNullable<DestinationsPage["calendar"]>;
  locale: string;
};

export function DestinationsCalendar({
  calendar,
  locale,
}: DestinationsCalendarProps) {
  const months = getMonthLabels(locale);
  const rows = calendar.rows ?? [];

  return (
    <section className="bg-cream px-6 py-[140px] md:px-14">
      <RevealOnScroll>
        <CalendarHead headline={calendar.headline} intro={calendar.intro} />
      </RevealOnScroll>

      <RevealOnScroll>
        <CalendarGrid rows={rows} months={months} />
        <CalendarLegend legend={calendar.legend} />
      </RevealOnScroll>
    </section>
  );
}
