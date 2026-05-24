import clsx from "clsx";
import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { HomePageMedia } from "@/sanity/queries/home";

type RecentImage = NonNullable<
  NonNullable<HomePageMedia["recentWeddings"]>["images"]
>[number];

export type RecentWeddingPosition = "a" | "b" | "c" | "d";

type RecentWeddingCardProps = {
  image?: RecentImage;
  position: RecentWeddingPosition;
};

const layoutByPosition: Record<RecentWeddingPosition, string> = {
  a: "lg:col-span-5 aspect-[3/4] lg:aspect-[4/7]",
  b: "lg:col-span-7 lg:mt-20 aspect-[3/4] lg:aspect-[9/11]",
  c: "lg:col-span-4 aspect-[3/4] lg:aspect-[2/5]",
  d: "lg:col-span-8 lg:-mt-10 aspect-[3/4] lg:aspect-[9/11]",
};

const sizesByPosition: Record<RecentWeddingPosition, string> = {
  a: "(min-width:1024px) 42vw, 100vw",
  b: "(min-width:1024px) 58vw, 100vw",
  c: "(min-width:1024px) 33vw, 100vw",
  d: "(min-width:1024px) 67vw, 100vw",
};

const cropByPosition: Record<RecentWeddingPosition, { w: number; h: number }> =
  {
    a: { w: 800, h: 1400 },
    b: { w: 900, h: 1100 },
    c: { w: 600, h: 1500 },
    d: { w: 900, h: 1100 },
  };

export function RecentWeddingCard({ image, position }: RecentWeddingCardProps) {
  const { w, h } = cropByPosition[position];
  const imageUrl = image?.asset
    ? urlFor(image).width(w).height(h).fit("crop").auto("format").url()
    : null;

  if (!imageUrl) return null;

  return (
    <div
      className={clsx(
        "group relative w-full overflow-hidden bg-olive-dk/10",
        layoutByPosition[position],
      )}
    >
      <Image
        src={imageUrl}
        alt={image?.alt ?? ""}
        fill
        sizes={sizesByPosition[position]}
        className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-silk)] group-hover:scale-[1.04]"
      />
    </div>
  );
}
