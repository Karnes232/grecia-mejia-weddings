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
        tile,
        "country": destination->country,
        "name": destination->name,
        "subLocations": destination->subLocations,
        "slug": destination->slug.current
      }
    },
    calendar{
      headline,
      intro,
      rows[]{ region, note, months },
      legend{ peak, good, off }
    },
    spotlight{
      eyebrow,
      scriptAccent,
      headline,
      deck,
      body,
      facts[]{ label, value },
      imageCaptionPlace,
      imageCaptionDate,
      ctaLabel,
      ctaHref
    },
    journeyCta{
      eyebrow,
      headline,
      body,
      cta{ label, href }
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
    },
    spotlight{
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
  spotlight?: {
    eyebrow?: string;
    scriptAccent?: string;
    headline?: string;
    deck?: string;
    body?: PortableTextBlock[];
    facts?: Array<{ label?: string; value?: string }>;
    imageCaptionPlace?: string;
    imageCaptionDate?: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
  journeyCta?: {
    eyebrow?: string;
    headline?: string;
    body?: string;
    cta?: { label?: string; href?: string };
  };
};

export type CalendarCellValue = "peak" | "good" | "off";

export type DestinationsPageMedia = {
  hero?: { image?: SanityImage };
  destinations?: Array<{ slug?: string; image?: SanityImage }>;
  spotlight?: { image?: SanityImage };
};

export function getDestinationsPage(locale: string) {
  return fetchWithFallback<DestinationsPage>(destinationsPageQuery, locale);
}

export function getDestinationsPageMedia() {
  return client.fetch<DestinationsPageMedia | null>(destinationsPageMediaQuery);
}
