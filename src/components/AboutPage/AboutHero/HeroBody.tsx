import { renderHeadline } from "@/components/_shared/renderHeadline";
import type { AboutPage } from "@/sanity/queries/about";

type HeroBodyProps = {
  hero: NonNullable<AboutPage["hero"]>;
};

export function HeroBody({ hero }: HeroBodyProps) {
  return (
    <div className="py-6">
      {hero.eyebrow ? (
        <div className="mb-10 flex items-center gap-[18px] text-[10px] uppercase tracking-[0.4em] text-gold">
          <span aria-hidden className="h-px w-12 bg-gold" />
          <span>{hero.eyebrow}</span>
        </div>
      ) : null}

      {hero.scriptOverline ? (
        <span className="-mb-2 block font-script text-[clamp(48px,6vw,64px)] leading-[0.85] text-olive">
          {hero.scriptOverline}
        </span>
      ) : null}

      {hero.headline ? (
        <h1 className="m-0 mb-8 font-serif font-light text-[clamp(72px,9vw,124px)] leading-[0.92] tracking-[-0.018em] text-ink motion-safe:[animation:headline-rise_1.4s_cubic-bezier(0.18,0.7,0.2,1)_0.15s_both]">
          {renderHeadline(hero.headline, "olive")}
        </h1>
      ) : null}

      {hero.deck ? (
        <p className="m-0 mb-10 max-w-[42ch] font-serif italic text-[clamp(20px,2vw,24px)] leading-[1.55] text-[#3d3a30] motion-safe:[animation:deck-fade_1.4s_ease-out_0.4s_both]">
          {hero.deck}
        </p>
      ) : null}

      {hero.signedName || hero.signedRole ? (
        <div className="flex flex-wrap items-baseline gap-6 border-t border-rule pt-8">
          {hero.signedName ? (
            <span className="font-script text-[54px] leading-none text-olive">
              {hero.signedName}
            </span>
          ) : null}
          {hero.signedRole ? (
            <span className="text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {hero.signedRole}
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
