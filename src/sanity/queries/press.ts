import type { PortableTextBlock } from "@portabletext/types";
import { groq } from "next-sanity";

import { client } from "../lib/client";
import { fetchWithFallback } from "./layout";
import { SEO_PROJECTION, type SeoFields } from "./seo";

export const pressPageQuery = groq`
  *[_type == "pressPage" && language == $locale][0]{
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
      sideLabel,
      sideNote,
      headline,
      lede,
      body
    },
    featured{
      label,
      headline,
      intro,
      items[]{ publication, date, title, summary, imageKey, href }
    },
    quotes{
      label,
      headline,
      items[]{ quote, publication, year }
    },
    archive{
      label,
      headline,
      count,
      items[]{ year, publication, title, type, href }
    },
    awards{
      label,
      headline,
      intro,
      items[]{ year, title, publication }
    },
    cta{
      eyebrow,
      headline,
      body,
      cta{ label, href }
    },
    ${SEO_PROJECTION}
  }
`;

export const pressPageMediaQuery = groq`
  *[_id == "pressPageMedia"][0]{
    hero{
      image{ ..., alt }
    },
    featured{
      images[]{ key, "image": { ..., alt } }
    }
  }
`;

export type SanityImage = {
  asset?: { _ref: string; _type: "reference" };
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};

export type PressFeatureItem = {
  publication?: string;
  date?: string;
  title?: string;
  summary?: string;
  imageKey?: string;
  href?: string;
};

export type PressPage = {
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
    sideLabel?: string;
    sideNote?: string;
    headline?: string;
    lede?: string;
    body?: PortableTextBlock[];
  };
  featured?: {
    label?: string;
    headline?: string;
    intro?: string;
    items?: PressFeatureItem[];
  };
  quotes?: {
    label?: string;
    headline?: string;
    items?: Array<{ quote?: string; publication?: string; year?: string }>;
  };
  archive?: {
    label?: string;
    headline?: string;
    count?: string;
    items?: Array<{
      year?: string;
      publication?: string;
      title?: string;
      type?: string;
      href?: string;
    }>;
  };
  awards?: {
    label?: string;
    headline?: string;
    intro?: string;
    items?: Array<{ year?: string; title?: string; publication?: string }>;
  };
  cta?: {
    eyebrow?: string;
    headline?: string;
    body?: string;
    cta?: { label?: string; href?: string };
  };
  seo?: SeoFields;
};

export type PressPageMedia = {
  hero?: { image?: SanityImage };
  featured?: { images?: Array<{ key?: string; image?: SanityImage }> };
};

export function getPressPage(locale: string) {
  return fetchWithFallback<PressPage>(pressPageQuery, locale);
}

export function getPressPageMedia() {
  return client.fetch<PressPageMedia | null>(pressPageMediaQuery);
}
