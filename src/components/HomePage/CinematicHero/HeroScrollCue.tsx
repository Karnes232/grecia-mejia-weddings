export function HeroScrollCue() {
  return (
    <div className="flex flex-col items-center gap-[14px] py-[22px] pb-[18px]">
      <span className="text-[9px] uppercase tracking-wide-eyebrow text-[rgba(245,240,230,0.6)]">
        Scroll
      </span>
      <span className="relative block h-9 w-px overflow-hidden bg-[rgba(212,186,140,0.2)]">
        <span
          data-cine-anim
          className="absolute -top-9 left-0 right-0 h-9 bg-[linear-gradient(180deg,transparent,#d4ba8c)] [animation:scroll-cue_2.4s_cubic-bezier(0.7,0,0.3,1)_infinite]"
        />
      </span>
    </div>
  );
}
