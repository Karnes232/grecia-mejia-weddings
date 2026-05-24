import clsx from "clsx";

import type { Destination } from "@/sanity/queries/destination";

type WeatherTableProps = {
  data: NonNullable<Destination["logistics"]>["weather"];
};

type Season = "peak" | "good" | "off";

const SEASON: Record<Season, string> = {
  peak: "border-b-olive bg-[rgba(74,82,61,0.08)]",
  good: "border-b-gold",
  off: "border-b-transparent",
};

const normalize = (value: unknown): Season =>
  value === "peak" || value === "good" ? value : "off";

export function WeatherTable({ data }: WeatherTableProps) {
  if (!data) return null;
  const months = data.months ?? [];

  return (
    <div>
      {data.headline ? (
        <h4 className="mb-5 border-b border-gold pb-3.5 font-serif text-[32px] font-normal italic text-olive">
          {data.headline}
        </h4>
      ) : null}
      {data.intro ? (
        <p className="mb-3.5 text-[14px] leading-[1.7] text-[#3d3a30]">
          {data.intro}
        </p>
      ) : null}
      {months.length ? (
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gold scrollbar-track-transparent">
          <div className="grid min-w-[680px] grid-cols-12">
            {months.map((month, i) => (
              <div
                key={i}
                className={clsx(
                  "border-b-2 border-r border-r-[rgba(184,153,104,0.18)] px-1 py-[18px] text-center last:border-r-0",
                  SEASON[normalize(month.season)],
                )}
              >
                <span className="mb-2 block text-[9px] uppercase tracking-[0.28em] text-muted">
                  {month.month}
                </span>
                <span className="mb-1.5 block font-serif text-[22px] italic leading-none text-ink">
                  {month.temp}
                </span>
                <span className="block text-[9px] text-muted">
                  {month.conditions}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {data.footnote ? (
        <p className="mt-6 text-[13px] text-muted">{data.footnote}</p>
      ) : null}
    </div>
  );
}
