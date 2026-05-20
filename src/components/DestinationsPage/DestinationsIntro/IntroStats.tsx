type IntroStatsProps = {
  stats?: Array<{ value?: string; label?: string }>;
};

export function IntroStats({ stats }: IntroStatsProps) {
  if (!stats?.length) return null;

  return (
    <div className="mt-12 flex flex-wrap gap-x-14 md:gap-x-12 gap-y-8 border-t border-rule pt-9">
      {stats.map((stat, i) => (
        <div key={i}>
          {stat.value ? (
            <span className="block font-serif font-light italic text-[54px] leading-none text-olive">
              {stat.value}
            </span>
          ) : null}
          {stat.label ? (
            <span className="mt-2.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {stat.label}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
