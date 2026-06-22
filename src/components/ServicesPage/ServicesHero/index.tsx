import Image from "next/image";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { urlFor } from "@/sanity/lib/image";
import type {
  ServicePage,
  ServicePageMedia,
} from "@/sanity/queries/service";

type ServicesHeroProps = {
  hero: NonNullable<ServicePage["hero"]>;
  image: NonNullable<ServicePageMedia["hero"]>["image"];
};

export function ServicesHero({ hero, image }: ServicesHeroProps) {
  const imageUrl = image?.asset
    ? urlFor(image).width(2400).fit("max").auto("format").url()
    : null;

  return (
    <section className="relative isolate h-[78vh] min-h-[680px] max-h-[880px] overflow-hidden bg-cine-bg">
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
              style={{ filter: "saturate(0.85) contrast(1.04) brightness(0.7)" }}
            />
          </div>
        </div>
      ) : null}

      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.35) 95%), linear-gradient(180deg, rgba(13,15,10,0.55) 0%, transparent 32%, transparent 60%, rgba(13,15,10,0.7) 100%)",
        }}
      />

      <div className="relative z-[2] flex h-full flex-col items-center justify-center px-[7vw] pt-[120px] pb-[140px] text-center text-ivory">
        {hero.eyebrow ? (
          <div className="mb-7 flex items-center justify-center gap-[18px] whitespace-nowrap text-[10px] uppercase tracking-wide-eyebrow text-cine-sage">
            <span aria-hidden className="h-px w-[60px] bg-cine-gold" />
            <span>{hero.eyebrow}</span>
            <span aria-hidden className="h-px w-[60px] bg-cine-gold" />
          </div>
        ) : null}

        {hero.scriptOverline ? (
          <span className="-mb-[6px] block font-script text-[54px] leading-[0.9] text-cine-gold">
            {hero.scriptOverline}
          </span>
        ) : null}

        {hero.headline ? (
          <h1 className="m-0 font-serif font-light italic text-ivory text-[clamp(72px,11vw,148px)] leading-[0.92] tracking-[-0.018em]">
            {renderHeadline(hero.headline, "gold")}
          </h1>
        ) : null}

        {hero.deck ? (
          <p className="mx-auto mt-14 max-w-[54ch] font-serif italic text-[22px] leading-[1.5] text-cine-ivory">
            {hero.deck}
          </p>
        ) : null}
      </div>

      {hero.captionLeft || hero.captionCenter || hero.captionRight ? (
        <div className="absolute inset-x-0 bottom-0 z-[3] flex items-end justify-between gap-6 px-[56px] py-6 text-[10px] uppercase tracking-[0.32em] text-cine-sage">
          <span>{hero.captionLeft}</span>
          <span className="text-center font-serif text-[14px] italic normal-case tracking-normal text-cine-ivory">
            {hero.captionCenter}
          </span>
          <span className="text-right">{hero.captionRight}</span>
        </div>
      ) : null}
    </section>
  );
}
