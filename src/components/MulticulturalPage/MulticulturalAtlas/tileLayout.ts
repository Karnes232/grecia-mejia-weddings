import type { CultureTile } from "@/sanity/queries/multicultural";

type TileLayout = {
  /** Tailwind column-span classes for default · md · lg breakpoints. */
  spanClasses: string;
  /** Tailwind aspect-ratio class — preserved at every breakpoint. */
  aspectClass: string;
  /** Image crop dimensions to request from Sanity (matches aspect ratio). */
  imageWidth: number;
  imageHeight: number;
  /** `sizes` attribute for next/image so it picks the right srcset. */
  sizes: string;
  /** True for the panoramic hero tile — enlarges the caption headline + blurb. */
  isFeatured?: boolean;
};

// All Tailwind classes appear as full literals so the class scanner can find
// them — never build span classes via string concatenation.
export const TILE_LAYOUTS: Record<CultureTile, TileLayout> = {
  hero: {
    spanClasses: "col-span-1 md:col-span-6 lg:col-span-8",
    aspectClass: "aspect-[21/10]",
    imageWidth: 1800,
    imageHeight: 858,
    sizes: "(min-width:1024px) 66vw, 100vw",
    isFeatured: true,
  },
  tall: {
    spanClasses: "col-span-1 md:col-span-3 lg:col-span-4",
    aspectClass: "aspect-[3/4]",
    imageWidth: 1100,
    imageHeight: 1467,
    sizes: "(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw",
  },
  square: {
    spanClasses: "col-span-1 md:col-span-3 lg:col-span-4",
    aspectClass: "aspect-[4/3]",
    imageWidth: 1000,
    imageHeight: 750,
    sizes: "(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw",
  },
  wide: {
    spanClasses: "col-span-1 md:col-span-6 lg:col-span-6",
    aspectClass: "aspect-[16/9]",
    imageWidth: 1600,
    imageHeight: 900,
    sizes: "(min-width:1024px) 50vw, 100vw",
  },
  full: {
    spanClasses: "col-span-1 md:col-span-6 lg:col-span-12",
    aspectClass: "aspect-[16/9]",
    imageWidth: 2000,
    imageHeight: 1125,
    sizes: "100vw",
  },
};

export const DEFAULT_TILE: CultureTile = "square";
