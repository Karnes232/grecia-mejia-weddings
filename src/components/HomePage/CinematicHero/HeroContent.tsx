import type { HomePage } from "@/sanity/queries/home";

import { renderHeadline } from "../_shared/renderHeadline";

type HeroContentProps = {
  hero: NonNullable<HomePage["hero"]>;
};

export function HeroContent({ hero }: HeroContentProps) {
  return (
    <div className="absolute inset-0 z-[2] flex items-center justify-center px-[7vw]">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center text-center text-ivory">
        {hero.overline ? (
          <div className="mb-8 flex items-center justify-center gap-[18px]">
            <span
              aria-hidden
              className="h-px w-[60px] bg-[var(--color-cine-gold)]"
            />
            <span className="text-[10px] uppercase tracking-wide-eyebrow text-[var(--color-cine-sage)]">
              {hero.overline}
            </span>
            <span
              aria-hidden
              className="h-px w-[60px] bg-[var(--color-cine-gold)]"
            />
          </div>
        ) : null}

        <h1
          data-cine-anim
          className="m-0 font-serif font-light text-ivory text-[clamp(56px,12vw,148px)] leading-[0.94] tracking-[-0.018em] [animation:headline-rise_1.6s_cubic-bezier(0.18,0.7,0.2,1)_0.2s_both]"
        >
          {renderHeadline(hero.headline ?? "")}
        </h1>

        {hero.subheadline ? (
          <p
            data-cine-anim
            className="mt-9 max-w-[48ch] font-serif italic text-[clamp(17px,2.2vw,22px)] leading-relaxed text-[var(--color-cine-ivory)] [animation:deck-fade_1.4s_ease-out_0.55s_both]"
          >
            {hero.subheadline}
          </p>
        ) : null}

        {(hero.primaryCta?.label || hero.secondaryCta?.label) && (
          <div
            data-cine-anim
            className="mt-12 flex flex-wrap items-center justify-center gap-5 [animation:deck-fade_1.4s_ease-out_0.8s_both]"
          >
            {hero.primaryCta?.label ? (
              <a
                href={hero.primaryCta.href ?? "#"}
                className="inline-block border border-[var(--color-cine-gold)] bg-transparent px-[34px] py-[18px] text-[10px] uppercase tracking-wide-eyebrow text-ivory no-underline transition-colors duration-300 hover:bg-[var(--color-cine-gold)] hover:text-olive-dk"
              >
                {hero.primaryCta.label}
              </a>
            ) : null}
            {hero.secondaryCta?.label ? (
              <a
                href={hero.secondaryCta.href ?? "#"}
                className="inline-block border border-[rgba(212,186,140,0.4)] bg-transparent px-[34px] py-[18px] text-[10px] uppercase tracking-wide-eyebrow text-[var(--color-cine-ivory)] no-underline transition-colors duration-300 hover:bg-[rgba(212,186,140,0.18)] hover:text-ivory"
              >
                {hero.secondaryCta.label}
              </a>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
