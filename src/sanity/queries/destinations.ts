import type { PortableTextBlock } from "@portabletext/types";
import { groq } from "next-sanity";

import { client } from "../lib/client";
import { fetchWithFallback } from "./layout";

export const destinationsPageQuery = groq`
  *[_type == "destinationsPage" && language == $locale][0]{
    hero{
      eyebrow,
      scriptOverline,
      headline,
      deck,
      captionLeft,
      captionCenter,
      captionRight
    },
    intro{
      eyebrow,
      headline,
      lede,
      body,
      stats[]{ value, label }
    },
    regions[]{
      eyebrow,
      name,
      intro,
      slug,
      destinations[]{
        number,
        country,
        name,
        subLocations,
        slug,
        tile
      }
    },
    calendar{
      headline,
      intro,
      rows[]{ region, note, months },
      legend{ peak, good, off }
    }
  }
`;

export const destinationsPageMediaQuery = groq`
  *[_id == "destinationsPageMedia"][0]{
    hero{
      image{ ..., alt }
    },
    destinations[]{
      slug,
      image{ ..., alt }
    }
  }
`;

type SanityImage = {
  asset?: { _ref: string; _type: "reference" };
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};

export type DestinationTile =
  | "featured"
  | "tall-lg"
  | "tall"
  | "wide"
  | "square"
  | "square-sm";

export type DestinationCardData = {
  number?: string;
  country?: string;
  name?: string;
  subLocations?: string;
  slug?: string;
  tile?: DestinationTile;
};

export type Region = {
  eyebrow?: string;
  name?: string;
  intro?: string;
  slug?: string;
  destinations?: DestinationCardData[];
};

export type DestinationsPage = {
  hero?: {
    eyebrow?: string;
    scriptOverline?: string;
    headline?: string;
    deck?: string;
    captionLeft?: string;
    captionCenter?: string;
    captionRight?: string;
  };
  intro?: {
    eyebrow?: string;
    headline?: string;
    lede?: string;
    body?: PortableTextBlock[];
    stats?: Array<{ value?: string; label?: string }>;
  };
  regions?: Region[];
  calendar?: {
    headline?: string;
    intro?: string;
    rows?: Array<{
      region?: string;
      note?: string;
      months?: Array<CalendarCellValue | string>;
    }>;
    legend?: { peak?: string; good?: string; off?: string };
  };
};

export type CalendarCellValue = "peak" | "good" | "off";

export type DestinationsPageMedia = {
  hero?: { image?: SanityImage };
  destinations?: Array<{ slug?: string; image?: SanityImage }>;
};

export function getDestinationsPage(locale: string) {
  return fetchWithFallback<DestinationsPage>(destinationsPageQuery, locale);
}

export function getDestinationsPageMedia() {
  return client.fetch<DestinationsPageMedia | null>(destinationsPageMediaQuery);
}
