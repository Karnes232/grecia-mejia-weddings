import { getTranslations } from "next-intl/server";

import { keyedImageMap } from "@/components/_shared/keyedImageMap";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { PressPage, PressPageMedia } from "@/sanity/queries/press";

import { FeatureCard } from "./FeatureCard";

type PressFeaturedProps = {
  featured: NonNullable<PressPage["featured"]>;
  images: NonNullable<PressPageMedia["featured"]>["images"];
};

function variantForIndex(i: number): "lead" | "side" | "third" {
  if (i === 0) return "lead";
  if (i === 1) return "side";
  return "third";
}

export async function PressFeatured({ featured, images }: PressFeaturedProps) {
  const t = await getTranslations("pressPage");
  const items = featured.items ?? [];
  const imageMap = keyedImageMap(images);

  return (
    <section className="bg-cream px-6 py-[140px] md:px-14">
      <RevealOnScroll
        as="div"
        className="mx-auto mb-14 grid max-w-[1400px] grid-cols-1 items-end gap-8 border-b border-olive pb-6 lg:grid-cols-[1.4fr_1fr] lg:gap-12"
      >
        <div>
          {featured.label ? (
            <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {featured.label}
            </span>
          ) : null}
          {featured.headline ? (
            <h2 className="m-0 font-serif font-light text-[clamp(48px,8vw,88px)] leading-[0.96] text-ink">
              {renderHeadline(featured.headline, "olive")}
            </h2>
          ) : null}
        </div>
        {featured.intro ? (
          <p className="m-0 max-w-[42ch] font-serif text-[18px] italic leading-[1.55] text-[#3d3a30]">
            {featured.intro}
          </p>
        ) : null}
      </RevealOnScroll>

      <RevealOnScroll
        as="div"
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 lg:grid-cols-12"
      >
        {items.map((item, i) => (
          <FeatureCard
            key={i}
            item={item}
            image={item.imageKey ? imageMap.get(item.imageKey) : undefined}
            variant={variantForIndex(i)}
            readLabel={t("readFeature")}
          />
        ))}
      </RevealOnScroll>
    </section>
  );
}
