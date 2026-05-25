import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Destination, DestinationMedia } from "@/sanity/queries/destination";

import { keyedImageMap } from "@/components/_shared/keyedImageMap";

import { StyleCard } from "./StyleCard";

type DestinationStylesProps = {
  styles: NonNullable<Destination["styles"]>;
  images: DestinationMedia["styles"];
};

export function DestinationStyles({ styles, images }: DestinationStylesProps) {
  const imageByKey = keyedImageMap(images);
  const items = styles.items ?? [];

  return (
    <section className="bg-cream px-6 py-[140px] md:px-14">
      <RevealOnScroll className="mx-auto mb-14 grid max-w-[1400px] grid-cols-1 items-end gap-12 border-b border-olive pb-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          {styles.eyebrow ? (
            <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {styles.eyebrow}
            </span>
          ) : null}
          {styles.headline ? (
            <h2 className="m-0 font-serif font-light text-[clamp(48px,8vw,82px)] leading-[0.96] text-ink">
              {renderHeadline(styles.headline, "olive")}
            </h2>
          ) : null}
        </div>
        {styles.deck ? (
          <p className="m-0 max-w-[38ch] font-serif text-[18px] italic leading-[1.55] text-[#3d3a30]">
            {styles.deck}
          </p>
        ) : null}
      </RevealOnScroll>

      <RevealOnScroll className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <StyleCard
            key={i}
            numeral={item.numeral}
            title={item.title}
            body={item.body}
            image={imageByKey.get(item.imageKey ?? "")}
          />
        ))}
      </RevealOnScroll>
    </section>
  );
}
