import Image from "next/image";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { urlFor } from "@/sanity/lib/image";
import type { ContactPage, ContactPageMedia } from "@/sanity/queries/contact";

type ContactHeroProps = {
  hero: NonNullable<ContactPage["hero"]>;
  image?: NonNullable<ContactPageMedia["hero"]>["image"];
};

export function ContactHero({ hero, image }: ContactHeroProps) {
  const imageUrl = image?.asset
    ? urlFor(image).width(2200).height(1300).fit("crop").auto("format").url()
    : null;

  return (
    <section className="relative isolate flex h-[56vh] max-h-[680px] min-h-[520px] items-center justify-center overflow-hidden bg-ink">
      {imageUrl ? (
        <div className="absolute -inset-[4%] z-0 motion-safe:[animation:ken-burns_30s_ease-in-out_infinite_alternate]">
          <Image
            src={imageUrl}
            alt={image?.alt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ filter: "saturate(0.82) brightness(0.66)" }}
          />
        </div>
      ) : null}

      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.35) 95%), linear-gradient(180deg, rgba(13,15,10,0.5) 0%, transparent 35%, transparent 60%, rgba(13,15,10,0.7) 100%)",
        }}
      />

      <div className="relative z-[2] flex flex-col items-center px-[7vw] py-24 text-center text-ivory">
        {hero.eyebrow ? (
          <div className="mb-7 flex items-center gap-[18px] whitespace-nowrap text-[10px] uppercase tracking-[0.4em] text-cine-sage">
            <span className="h-px w-[60px] bg-cine-gold" />
            <span>{hero.eyebrow}</span>
            <span className="h-px w-[60px] bg-cine-gold" />
          </div>
        ) : null}

        {hero.scriptOverline ? (
          <span className="-mb-1.5 block font-script text-[clamp(44px,6vw,56px)] leading-[0.85] text-cine-gold">
            {hero.scriptOverline}
          </span>
        ) : null}

        {hero.headline ? (
          <h1 className="m-0 font-serif font-light tracking-[-0.018em] text-[clamp(64px,9vw,124px)] leading-[0.94] text-ivory">
            {renderHeadline(hero.headline, "gold")}
          </h1>
        ) : null}

        {hero.deck ? (
          <p className="mx-auto mt-8 max-w-[46ch] font-serif italic text-[clamp(18px,1.9vw,22px)] leading-[1.5] text-cine-ivory">
            {hero.deck}
          </p>
        ) : null}
      </div>
    </section>
  );
}
