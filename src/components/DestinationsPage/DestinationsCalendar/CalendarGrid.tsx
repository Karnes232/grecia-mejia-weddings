import clsx from "clsx";

import type {
  CalendarCellValue,
  DestinationsPage,
} from "@/sanity/queries/destinations";

type Calendar = NonNullable<DestinationsPage["calendar"]>;
type CalendarRow = NonNullable<Calendar["rows"]>[number];

type CalendarGridProps = {
  rows: CalendarRow[];
  months: string[];
};

const CELL_STYLES: Record<CalendarCellValue, string> = {
  peak: "bg-olive h-2",
  good: "bg-gold h-1.5",
  off: "bg-[rgba(184,153,104,0.18)] h-1.5",
};

function normalize(value: unknown): CalendarCellValue {
  if (value === "peak" || value === "good" || value === "off") return value;
  return "off";
}

export function CalendarGrid({ rows, months }: CalendarGridProps) {
  return (
    <div className="mx-auto max-w-[1400px] overflow-x-auto">
      <div
        className="grid min-w-[720px]"
        style={{ gridTemplateColumns: "120px repeat(12, 1fr)" }}
      >
        {/* Top-left corner — empty, sits above the row headers */}
        <div className="border-b border-olive" />

        {/* Month headers */}
        {months.map((m, i) => (
          <div
            key={i}
            className="border-b border-olive pb-3.5 text-center text-[10px] uppercase tracking-eyebrow text-muted"
          >
            {m}
          </div>
        ))}

        {/* Region rows */}
        {rows.map((row, rIdx) => (
          <RowFragment key={rIdx} row={row} />
        ))}
      </div>
    </div>
  );
}

function RowFragment({ row }: { row: CalendarRow }) {
  const cells: Array<CalendarCellValue | undefined> = row.months
    ? Array.from({ length: 12 }, (_, i) => normalize(row.months?.[i]))
    : [];

  return (
    <>
      <div className="border-b border-rule py-[18px] pr-4 font-serif italic text-[22px] leading-none text-ink">
        {row.region}
        {row.note ? (
          <small className="mt-1 block font-sans not-italic text-[10px] uppercase tracking-eyebrow text-muted">
            {row.note}
          </small>
        ) : null}
      </div>
      {cells.map((value, i) => (
        <div
          key={i}
          className="flex items-center justify-center border-b border-rule px-1 py-[18px]"
        >
          <span
            className={clsx("block w-4/5 rounded-[3px]", CELL_STYLES[value ?? "off"])}
          />
        </div>
      ))}
    </>
  );
}
