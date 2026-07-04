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
      items[]{ name, body, "slug": culture->slug.current }
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
      eyebrow, headline, readMoreLabel,
      "readMoreSlug": readMoreArticle->slug.current,
      items[]{ title, body }
    },
    related{
      eyebrow, headline,
      "articles": articles[defined(@->_id)]->{ ${ARTICLE_CARD_PROJECTION} },
      "sidebarVenues": sidebarVenues[defined(@->_id)]->{ "label": name, "slug": slug.current, "regionSlug": region->slug.current },
      "sidebarCultures": sidebarCultures[defined(@->_id)]->{ "label": name, "slug": slug.current },
      "sidebarServices": sidebarServices[defined(@->_id)]->{ "label": name, "slug": slug.current }
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
    guestCards[]{ key, image{ ..., alt, "dimensions": asset->metadata.dimensions{ width, height } } }
  }
`;

export const destinationSlugsQuery = groq`
  *[_type == "destination" && language == "en"].slug.current
`;

type Fact = { label?: string; value?: string; sub?: string };

export type Destination = {
  id?: string;
  name?: string;
  slug?: string;
  country?: string;
  subLocations?: string;
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
    items?: Array<{ name?: string; body?: string; slug?: string }>;
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
    readMoreSlug?: string;
    items?: Array<{ title?: string; body?: string }>;
  };
  related?: {
    eyebrow?: string;
    headline?: string;
    articles?: JournalArticleCard[];
    sidebarVenues?: Array<{
      label?: string;
      slug?: string;
      regionSlug?: string;
    }>;
    sidebarCultures?: Array<{ label?: string; slug?: string }>;
    sidebarServices?: Array<{ label?: string; slug?: string }>;
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
  guestCards?: Array<{
    key?: string;
    image?: SanityImage & {
      dimensions?: { width?: number; height?: number };
    };
  }>;
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
