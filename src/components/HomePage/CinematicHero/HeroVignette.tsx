export function HeroVignette() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 z-[1] pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.35) 90%), linear-gradient(180deg, rgba(13,15,10,0.55) 0%, transparent 22%, transparent 55%, rgba(13,15,10,0.85) 100%)",
      }}
    />
  );
}
