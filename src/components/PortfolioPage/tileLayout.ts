import type { PortfolioCard } from "@/sanity/queries/portfolio";

type Tile = NonNullable<PortfolioCard["tile"]>;

type TileLayout = {
  spanClasses: string;
  aspectClass: string;
  imageWidth: number;
  imageHeight: number;
  sizes: string;
  isFeatured?: boolean;
};

// Full Tailwind literals so the class scanner finds them — never concatenate.
export const TILE_LAYOUTS: Record<Tile, TileLayout> = {
  featured: {
    spanClasses: "col-span-1 md:col-span-6 lg:col-span-12",
    aspectClass: "aspect-[21/9]",
    imageWidth: 2000,
    imageHeight: 858,
    sizes: "100vw",
    isFeatured: true,
  },
  twothird: {
    spanClasses: "col-span-1 md:col-span-6 lg:col-span-8",
    aspectClass: "aspect-[16/10]",
    imageWidth: 1400,
    imageHeight: 875,
    sizes: "(min-width:1024px) 66vw, 100vw",
  },
  half: {
    spanClasses: "col-span-1 md:col-span-3 lg:col-span-6",
    aspectClass: "aspect-[4/3]",
    imageWidth: 1000,
    imageHeight: 750,
    sizes: "(min-width:1024px) 50vw, (min-width:768px) 50vw, 100vw",
  },
  third: {
    spanClasses: "col-span-1 md:col-span-3 lg:col-span-4",
    aspectClass: "aspect-[3/4]",
    imageWidth: 800,
    imageHeight: 1067,
    sizes: "(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw",
  },
};

export const DEFAULT_TILE: Tile = "third";
