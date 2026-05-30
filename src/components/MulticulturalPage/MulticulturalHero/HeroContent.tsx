import type { MulticulturalPage } from "@/sanity/queries/multicultural";

import { renderHeroHeadline } from "../_shared/renderHeroHeadline";

type HeroContentProps = {
  hero: NonNullable<MulticulturalPage["hero"]>;
};

export function HeroContent({ hero }: HeroContentProps) {
  return (
    <div className="relative z-[2] flex h-full flex-col items-center justify-center px-[7vw] pt-[120px] pb-[140px] text-center text-ivory">
      {hero.eyebrow ? (
        <div className="mb-7 flex items-center justify-center gap-[18px] whitespace-nowrap text-[10px] uppercase tracking-wide-eyebrow text-[var(--color-cine-sage)]">
          <span
            aria-hidden
            className="h-px w-[60px] bg-[var(--color-cine-gold)]"
          />
          <span>{hero.eyebrow}</span>
          <span
            aria-hidden
            className="h-px w-[60px] bg-[var(--color-cine-gold)]"
          />
        </div>
      ) : null}

      {hero.scriptOverline ? (
        <span className="-mb-[6px] block font-script text-[54px] leading-[0.9] text-[var(--color-cine-gold)]">
          {hero.scriptOverline}
        </span>
      ) : null}

      {hero.headline ? (
        <h1
          data-cine-anim
          className="m-0 font-serif font-light italic text-ivory text-[clamp(72px,11vw,148px)] leading-[0.92] tracking-[-0.018em] [animation:headline-rise_1.4s_cubic-bezier(0.18,0.7,0.2,1)_0.15s_both]"
        >
          {renderHeroHeadline(hero.headline)}
        </h1>
      ) : null}

      {hero.deck ? (
        <p
          data-cine-anim
          className="mx-auto mt-14 max-w-[50ch] font-serif italic text-[22px] leading-[1.5] text-[var(--color-cine-ivory)] [animation:deck-fade_1.2s_ease-out_0.45s_both]"
        >
          {hero.deck}
        </p>
      ) : null}
    </div>
  );
}
