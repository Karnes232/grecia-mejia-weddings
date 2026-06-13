import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { MulticulturalPage } from "@/sanity/queries/multicultural";

import { AtlasCard } from "./AtlasCard";

type MulticulturalAtlasProps = {
  atlas: NonNullable<MulticulturalPage["atlas"]>;
};

export function MulticulturalAtlas({ atlas }: MulticulturalAtlasProps) {
  const cultures = atlas.cultures ?? [];

  return (
    <section
      id="traditions-atlas"
      className="bg-ivory px-6 py-[140px] md:px-14"
    >
      <div className="mx-auto max-w-[1400px]">
        <RevealOnScroll className="mb-14 grid grid-cols-1 items-end gap-12 border-b border-olive pb-6 md:grid-cols-[1.4fr_1fr]">
          <div>
            {atlas.eyebrow ? (
              <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {atlas.eyebrow}
              </span>
            ) : null}
            {atlas.headline ? (
              <h2 className="m-0 font-serif font-light text-[clamp(48px,7vw,88px)] leading-[0.96] text-ink">
                {renderHeadline(atlas.headline, "olive")}
              </h2>
            ) : null}
          </div>
          {atlas.deck ? (
            <p className="m-0 max-w-[42ch] font-serif italic text-[18px] leading-[1.55] text-[#3d3a30]">
              {atlas.deck}
            </p>
          ) : null}
        </RevealOnScroll>

        {cultures.length > 0 ? (
          <RevealOnScroll className="grid grid-cols-1 gap-6 md:grid-cols-6 lg:grid-cols-12">
            {cultures.map((card, i) => (
              <AtlasCard
                key={card.slug ?? `culture-${i}`}
                card={card}
                image={card.image}
              />
            ))}
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
