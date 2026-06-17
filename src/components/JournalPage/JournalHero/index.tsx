import Image from "next/image";
import { useTranslations } from "next-intl";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/queries/destinations";
import type { JournalPage } from "@/sanity/queries/journal";

type JournalHeroProps = {
  hero?: JournalPage["hero"];
  image?: SanityImage;
  total: number;
};

export function JournalHero({ hero, image, total }: JournalHeroProps) {
  const t = useTranslations("journalPage");
  if (!hero?.headline) return null;

  const imageUrl = image?.asset
    ? urlFor(image).width(2400).fit("max").auto("format").url()
    : null;

  const bottomLeft = [`${total} ${t("articles")}`, hero.bottomLeft]
    .filter(Boolean)
    .join(" · ");

  return (
    <section className="relative isolate flex h-[72vh] min-h-[600px] max-h-[820px] flex-col overflow-hidden bg-cine-bg">
      {imageUrl ? (
        <div className="absolute -inset-[4%] z-0">
          <div className="absolute inset-0 motion-safe:[animation:ken-burns_28s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite_alternate]">
            <Image
              src={imageUrl}
              alt={image?.alt ?? ""}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ filter: "saturate(0.85) contrast(1.04) brightness(0.62)" }}
            />
          </div>
        </div>
      ) : null}

      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,15,10,0.55) 0%, transparent 30%, transparent 52%, rgba(13,15,10,0.82) 100%)",
        }}
      />

      <div className="relative z-[2] flex h-full flex-col items-center justify-center px-[7vw] pt-[120px] pb-[120px] text-center text-ivory">
        {hero.eyebrow ? (
          <div className="mb-7 flex items-center justify-center gap-[18px] whitespace-nowrap text-[10px] uppercase tracking-wide-eyebrow text-[var(--color-cine-sage)]">
            <span aria-hidden className="h-px w-[60px] bg-[var(--color-cine-gold)]" />
            <span>{hero.eyebrow}</span>
            <span aria-hidden className="h-px w-[60px] bg-[var(--color-cine-gold)]" />
          </div>
        ) : null}

        {hero.scriptOverline ? (
          <span className="-mb-[6px] block font-script text-[54px] leading-[0.9] text-[var(--color-cine-gold)]">
            {hero.scriptOverline}
          </span>
        ) : null}

        <h1 className="m-0 max-w-[16ch] font-serif font-light text-ivory text-[clamp(48px,6.2vw,84px)] leading-[1.02] tracking-[-0.012em] [animation:headline-rise_1.4s_cubic-bezier(0.18,0.7,0.2,1)_0.15s_both]">
          {renderHeadline(hero.headline, "gold")}
        </h1>

        {hero.deck ? (
          <p className="mx-auto mt-10 max-w-[62ch] font-serif italic text-[19px] leading-[1.5] text-[var(--color-cine-ivory)] [animation:deck-fade_1.2s_ease-out_0.45s_both]">
            {hero.deck}
          </p>
        ) : null}
      </div>

      {bottomLeft || hero.bottomCenter || hero.bottomRight ? (
        <div className="absolute inset-x-0 bottom-0 z-[3] hidden items-end justify-between gap-6 px-[56px] py-6 text-[10px] uppercase tracking-[0.32em] text-[var(--color-cine-sage)] md:flex">
          <span className="flex-1">{bottomLeft}</span>
          <span className="flex-1 text-center font-serif text-[14px] italic normal-case tracking-normal text-[var(--color-cine-ivory)]">
            {hero.bottomCenter}
          </span>
          <span className="flex-1 text-right">{hero.bottomRight}</span>
        </div>
      ) : null}
    </section>
  );
}
