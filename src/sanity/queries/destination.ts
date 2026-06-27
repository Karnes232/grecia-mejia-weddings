import type { PortableTextBlock } from "@portabletext/types";
import { groq } from "next-sanity";

import { client } from "../lib/client";
import {
  ARTICLE_CARD_PROJECTION,
  type JournalArticleCard,
} from "./journal";
import { fetchWithFallback } from "./layout";
import { SEO_PROJECTION, type SeoFields } from "./seo";

type SanityImage = {
  asset?: { _ref: string; _type: "reference" };
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};

export const destinationQuery = groq`
  *[_type == "destination" && language == $locale && slug.current == $slug][0]{
    "id": _id,
    name,
    "slug": slug.current,
    country,
    subLocations,
    number,
    tile,
    hero,
    facts[]{ label, value, sub },
    story{
      sideEyebrow, sideNote, headline, lede, body,
      pull, signatureName, signatureRole
    },
    styles{
      eyebrow, headline, deck,
      items[]{ numeral, title, body, imageKey }
    },
    venues{
      eyebrow, headline, viewAllLabel, viewAllHref,
      cards[defined(@->_id)]->{
        name,
        tag,
        "meta": location,
        "body": cardBlurb,
        "rows": cardMeta[]{ label, value },
        "slug": slug.current,
        "region": region->slug.current,
        "image": media->cardImage{ ..., alt }
      }
    },
    weddingTypes{
      eyebrow, headline, deck,
      items[]{ name, body, href }
    },
    logistics{
      eyebrow, headline,
      gettingThere{ headline, items[]{ label, value }, footnote },
      weather{ headline, intro, months[]{ month, temp, conditions, season }, footnote }
    },
    guest{
      eyebrow, headline, viewAllLabel, viewAllHref,
      cards[]{ label, headline, imageKey }
    },
    trends{
      eyebrow, headline, readMoreLabel, readMoreHref,
      items[]{ title, body }
    },
    related{
      eyebrow, headline,
      "articles": articles[defined(@->_id)]->{ ${ARTICLE_CARD_PROJECTION} },
      sidebarVenues[]{ label, href },
      sidebarCultures[]{ label, href },
      sidebarServices[]{ label, href }
    },
    faq{
      eyebrow, headline,
      items[]{ question, answer }
    },
    cta{ eyebrow, headline, body, ctaLabel, ctaHref },
    ${SEO_PROJECTION}
  }
`;

export const destinationMediaQuery = groq`
  *[_type == "destinationMedia" && slug == $slug][0]{
    slug,
    heroImage{ ..., alt },
    storyPortrait{ ..., alt },
    styles[]{ key, image{ ..., alt } },
    guestCards[]{ key, image{ ..., alt } }
  }
`;

export const destinationSlugsQuery = groq`
  *[_type == "destination" && language == "en"].slug.current
`;

type Fact = { label?: string; value?: string; sub?: string };
type LabelHref = { label?: string; href?: string };

export type Destination = {
  id?: string;
  name?: string;
  slug?: string;
  country?: string;
  subLocations?: string;
  number?: string;
  tile?: string;
  hero?: {
    eyebrow?: string;
    scriptOverline?: string;
    headline?: string;
    deck?: string;
    captionLeft?: string;
    captionCenter?: string;
    captionRight?: string;
  };
  facts?: Fact[];
  story?: {
    sideEyebrow?: string;
    sideNote?: string;
    headline?: string;
    lede?: string;
    body?: PortableTextBlock[];
    pull?: string;
    signatureName?: string;
    signatureRole?: string;
  };
  styles?: {
    eyebrow?: string;
    headline?: string;
    deck?: string;
    items?: Array<{
      numeral?: string;
      title?: string;
      body?: string;
      imageKey?: string;
    }>;
  };
  venues?: {
    eyebrow?: string;
    headline?: string;
    viewAllLabel?: string;
    viewAllHref?: string;
    cards?: Array<{
      name?: string;
      tag?: string;
      meta?: string;
      body?: string;
      rows?: Array<{ label?: string; value?: string }>;
      slug?: string;
      region?: string;
      image?: SanityImage;
    }>;
  };
  weddingTypes?: {
    eyebrow?: string;
    headline?: string;
    deck?: string;
    items?: Array<{ name?: string; body?: string; href?: string }>;
  };
  logistics?: {
    eyebrow?: string;
    headline?: string;
    gettingThere?: {
      headline?: string;
      items?: Array<{ label?: string; value?: string }>;
      footnote?: string;
    };
    weather?: {
      headline?: string;
      intro?: string;
      months?: Array<{
        month?: string;
        temp?: string;
        conditions?: string;
        season?: "peak" | "good" | "off";
      }>;
      footnote?: string;
    };
  };
  guest?: {
    eyebrow?: string;
    headline?: string;
    viewAllLabel?: string;
    viewAllHref?: string;
    cards?: Array<{ label?: string; headline?: string; imageKey?: string }>;
  };
  trends?: {
    eyebrow?: string;
    headline?: string;
    readMoreLabel?: string;
    readMoreHref?: string;
    items?: Array<{ title?: string; body?: string }>;
  };
  related?: {
    eyebrow?: string;
    headline?: string;
    articles?: JournalArticleCard[];
    sidebarVenues?: LabelHref[];
    sidebarCultures?: LabelHref[];
    sidebarServices?: LabelHref[];
  };
  faq?: {
    eyebrow?: string;
    headline?: string;
    items?: Array<{ question?: string; answer?: PortableTextBlock[] }>;
  };
  cta?: {
    eyebrow?: string;
    headline?: string;
    body?: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
  seo?: SeoFields;
};

export type DestinationMedia = {
  slug?: string;
  heroImage?: SanityImage;
  storyPortrait?: SanityImage;
  styles?: Array<{ key?: string; image?: SanityImage }>;
  guestCards?: Array<{ key?: string; image?: SanityImage }>;
};

export function getDestination(locale: string, slug: string) {
  return fetchWithFallback<Destination>(destinationQuery, locale, { slug });
}

export function getDestinationMedia(slug: string) {
  return client.fetch<DestinationMedia | null>(destinationMediaQuery, { slug });
}

export function getDestinationSlugs() {
  return client.fetch<string[]>(destinationSlugsQuery);
}
