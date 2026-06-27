import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { urlFor } from "@/sanity/lib/image";
import type {
  CultureCardData,
  MulticulturalPage,
} from "@/sanity/queries/multicultural";

import { AtlasMasonry, type CardPhoto } from "./AtlasMasonry";

type MulticulturalAtlasProps = {
  atlas: NonNullable<MulticulturalPage["atlas"]>;
};

/** Build react-photo-album photos from the atlas culture cards. */
function toPhotos(cultures: CultureCardData[]): CardPhoto[] {
  return cultures.map((card) => {
    const width = card.image?.dimensions?.width ?? 1000;
    const height = card.image?.dimensions?.height ?? 1000;
    const src = card.image?.asset
      ? urlFor(card.image).width(Math.min(width, 1200)).auto("format").url()
      : "";
    return {
      src,
      width,
      height,
      alt: card.image?.alt ?? card.name ?? "",
      cardEyebrow: card.cardEyebrow,
      name: card.name,
      cardBlurb: card.cardBlurb,
      cardMeta: card.cardMeta,
      slug: card.slug,
      // Trigger the album's link rendering (overridden in render.link).
      href: card.slug ? "#" : undefined,
    };
  });
}

export function MulticulturalAtlas({ atlas }: MulticulturalAtlasProps) {
  const cultures = atlas.cultures ?? [];
  const photos = toPhotos(cultures);

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

        {photos.length > 0 ? (
          <RevealOnScroll>
            <AtlasMasonry photos={photos} />
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
