type HeroMarqueeProps = {
  destinations: string[];
};

export function HeroMarquee({ destinations }: HeroMarqueeProps) {
  const doubled = [...destinations, ...destinations];

  return (
    <div
      className="relative hidden md:block h-[42px] overflow-hidden border-t border-b border-[rgba(212,186,140,0.18)] bg-[rgba(13,15,10,0.5)] backdrop-blur-[6px]"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
      }}
    >
      <div
        data-cine-anim
        className="flex h-full w-max items-center [animation:marquee-x_110s_linear_infinite]"
      >
        {doubled.map((place, i) => (
          <span
            key={`${place}-${i}`}
            className="inline-flex items-center gap-7 px-7 whitespace-nowrap font-serif italic text-[18px] tracking-[0.04em] text-[var(--color-cine-gold)]"
          >
            <span>{place}</span>
            <span className="text-[8px] text-[rgba(212,186,140,0.6)] -translate-y-px">
              ◇
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
