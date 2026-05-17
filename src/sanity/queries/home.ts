import type { PortableTextBlock } from "@portabletext/types";
import { groq } from "next-sanity";

import { client } from "../lib/client";
import { fetchWithFallback } from "./layout";

export const homePageQuery = groq`
  *[_type == "homePage" && language == $locale][0]{
    hero{
      overline,
      headline,
      subheadline,
      primaryCta,
      secondaryCta
    },
    atelier{
      eyebrow,
      headline,
      body,
      signature
    },
    whereWeWork{
      eyebrow,
      headline,
      intro,
      viewAllLabel,
      viewAllHref,
      destinations[]{
        name,
        region,
        tagline,
        subLocations,
        slug,
        image{ ..., alt }
      }
    },
    featuredWedding{
      headline,
      subjectCaption,
      metaCaption,
      body,
      facts[]{ label, value },
      quote,
      linkLabel,
      linkHref
    },
    traditions{
      eyebrow,
      headline,
      quote,
      cultures[]{
        name,
        description,
        slug
      }
    },
    venuesConsidered,
    recentWeddings,
    testimonials,
    journeyCta
  }
`;

export const homePageMediaQuery = groq`
  *[_id == "homePageMedia"][0]{
    hero{
      image{ ..., alt }
    },
    marqueeDestinations,
    featuredWedding{
      image{ ..., alt }
    },
    recentWeddings{
      images[]{ ..., alt, caption }
    }
  }
`;

type SanityImage = {
  asset?: { _ref: string; _type: "reference" };
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};

type Link = { label?: string; href?: string };

export type HomePage = {
  hero?: {
    overline?: string;
    headline?: string;
    subheadline?: string;
    primaryCta?: Link;
    secondaryCta?: Link;
  };
  atelier?: {
    eyebrow?: string;
    headline?: string;
    body?: PortableTextBlock[];
    signature?: string;
  };
  whereWeWork?: {
    eyebrow?: string;
    headline?: string;
    intro?: string;
    viewAllLabel?: string;
    viewAllHref?: string;
    destinations?: Array<{
      name?: string;
      region?: string;
      tagline?: string;
      subLocations?: string;
      slug?: string;
      image?: SanityImage;
    }>;
  };
  featuredWedding?: {
    headline?: string;
    subjectCaption?: string;
    metaCaption?: string;
    body?: PortableTextBlock[];
    facts?: Array<{ label?: string; value?: string }>;
    quote?: string;
    linkLabel?: string;
    linkHref?: string;
  };
  traditions?: {
    eyebrow?: string;
    headline?: string;
    quote?: string;
    cultures?: Array<{
      name?: string;
      description?: string;
      slug?: string;
    }>;
  };
  venuesConsidered?: unknown;
  recentWeddings?: { eyebrow?: string; headline?: string };
  testimonials?: unknown;
  journeyCta?: unknown;
};

export type HomePageMedia = {
  hero?: { image?: SanityImage };
  marqueeDestinations?: string[];
  featuredWedding?: { image?: SanityImage };
  recentWeddings?: {
    images?: Array<SanityImage & { caption?: string }>;
  };
};

export function getHomePage(locale: string) {
  return fetchWithFallback<HomePage>(homePageQuery, locale);
}

export function getHomePageMedia() {
  return client.fetch<HomePageMedia | null>(homePageMediaQuery);
}
