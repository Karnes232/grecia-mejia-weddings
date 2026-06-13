import type { VenuesHeroData } from ".";

type HeroBottomStripProps = {
  hero: VenuesHeroData;
};

export function HeroBottomStrip({ hero }: HeroBottomStripProps) {
  if (!hero.captionLeft && !hero.captionCenter && !hero.captionRight) {
    return null;
  }

  return (
    <div className="absolute inset-x-0 bottom-0 z-[3] hidden items-end justify-between gap-6 px-[56px] py-6 text-[10px] uppercase tracking-[0.32em] text-[var(--color-cine-sage)] md:flex">
      <span className="flex-1">{hero.captionLeft}</span>
      <span className="flex-1 text-center font-serif text-[14px] italic normal-case tracking-normal text-[var(--color-cine-ivory)]">
        {hero.captionCenter}
      </span>
      <span className="flex-1 text-right">{hero.captionRight}</span>
    </div>
  );
}
