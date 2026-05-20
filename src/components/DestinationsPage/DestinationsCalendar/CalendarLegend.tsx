type CalendarLegendProps = {
  legend?: { peak?: string; good?: string; off?: string };
};

const SWATCHES = [
  { key: "peak" as const, className: "bg-olive" },
  { key: "good" as const, className: "bg-gold" },
  { key: "off" as const, className: "bg-[rgba(184,153,104,0.18)]" },
];

export function CalendarLegend({ legend }: CalendarLegendProps) {
  if (!legend) return null;

  return (
    <div className="mx-auto mt-8 flex max-w-[1400px] flex-wrap gap-x-8 gap-y-3 text-[10px] uppercase tracking-wide-eyebrow text-muted">
      {SWATCHES.map(({ key, className }) => {
        const label = legend[key];
        if (!label) return null;
        return (
          <span key={key} className="inline-flex items-center gap-2.5">
            <i
              aria-hidden
              className={`inline-block h-1.5 w-6 rounded-[3px] ${className}`}
            />
            {label}
          </span>
        );
      })}
    </div>
  );
}
