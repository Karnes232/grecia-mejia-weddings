import type { HomePage, HomePageMedia } from "@/sanity/queries/home";

import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { renderHeadline } from "@/components/_shared/renderHeadline";

import {
  RecentWeddingCard,
  type RecentWeddingPosition,
} from "./RecentWeddingCard";

const POSITIONS: RecentWeddingPosition[] = ["a", "b", "c", "d"];

type RecentImage = NonNullable<
  NonNullable<HomePageMedia["recentWeddings"]>["images"]
>[number];

type RecentWeddingsProps = {
  data: NonNullable<HomePage["recentWeddings"]>;
  images: RecentImage[];
};

export function RecentWeddings({ data, images }: RecentWeddingsProps) {
  const cards = images.slice(0, 4);
  if (cards.length === 0) return null;

  return (
    <section className="bg-cream px-6 py-[120px] md:px-14">
      <div className="mx-auto max-w-[1400px]">
        <RevealOnScroll className="mb-12 flex flex-col items-start gap-6 border-b border-olive pb-6 md:flex-row md:items-end md:justify-between md:gap-12">
          {data.eyebrow ? (
            <span className="block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {data.eyebrow}
            </span>
          ) : null}
          {data.headline ? (
            <h2 className="m-0 font-serif font-light text-[clamp(48px,7vw,82px)] leading-[0.96] tracking-[-0.005em] text-ink md:text-right">
              {renderHeadline(data.headline, "olive")}
            </h2>
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {cards.map((image, i) => (
            <RecentWeddingCard
              key={image?.asset?._ref ?? i}
              image={image}
              position={POSITIONS[i]}
            />
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
