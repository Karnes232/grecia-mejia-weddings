import type { PortableTextBlock } from "@portabletext/types";
import { groq } from "next-sanity";

import type { Locale } from "@/i18n/routing";

import { client } from "../lib/client";
import type { SanityImage } from "./destinations";
import { fetchWithFallback } from "./layout";
import { SEO_PROJECTION, type SeoFields } from "./seo";

// Shared card projection — used by the featured lead, the grid, and the
// featured fallback. `^.` is not needed; this runs inside an `article` scope.
const ARTICLE_CARD_PROJECTION = `
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  kicker,
  readMinutes,
  publishedAt,
  featured,
  "category": category->{ "title": title, "slug": slug.current },
  "author": author->name,
  "image": heroImage{ ..., alt }
`;

// ── Hub editorial copy ──────────────────────────────────────────────────────
export const journalPageQuery = groq`
  *[_type == "journalPage" && language == $locale][0]{
    hero{
      eyebrow,
      scriptOverline,
      headline,
      deck,
      bottomLeft,
      bottomCenter,
      bottomRight
    },
    "featuredArticle": featuredArticle->{ ${ARTICLE_CARD_PROJECTION} },
    grid{ eyebrow, headline },
    newsletter{ script, headline, body },
    cta{
      eyebrow,
      headline,
      body,
      "cta": { "label": ctaLabel, "href": ctaHref }
    },
    ${SEO_PROJECTION}
  }
`;

export const journalPageMediaQuery = groq`
  *[_id == "journalPageMedia"][0]{
    hero{ image{ ..., alt } }
  }
`;

// Most-recent featured (else most-recent) article — used when the hub's
// `featuredArticle` override is empty.
export const journalFeaturedFallbackQuery = groq`
  *[_type == "article" && language == $locale]
    | order(featured desc, publishedAt desc)[0]{ ${ARTICLE_CARD_PROJECTION} }
`;

// Paginated grid (cumulative slice so ?page navigation feels like "load more").
// Excludes the lead article; optional category-slug filter.
export const journalArticlesQuery = groq`
  *[_type == "article" && language == $locale
    && _id != $excludeId
    && ($category == null || category->slug.current == $category)]
    | order(publishedAt desc)[0...$end]{ ${ARTICLE_CARD_PROJECTION} }
`;

export const journalArticlesCountQuery = groq`
  count(*[_type == "article" && language == $locale
    && _id != $excludeId
    && ($category == null || category->slug.current == $category)])
`;

// Filter chips: each category with its live article count, plus the grand total
// for the "All" chip.
export const journalCategoriesQuery = groq`
  {
    "categories": *[_type == "articleCategory" && language == $locale]
      | order(order asc){
        title,
        "slug": slug.current,
        "count": count(*[_type == "article" && language == $locale && references(^._id)])
      },
    "total": count(*[_type == "article" && language == $locale])
  }
`;

// ── Types ───────────────────────────────────────────────────────────────────
export type JournalArticleCard = {
  id?: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  kicker?: string;
  readMinutes?: number;
  publishedAt?: string;
  featured?: boolean;
  category?: { title?: string; slug?: string };
  author?: string;
  image?: SanityImage;
};

export type JournalPage = {
  hero?: {
    eyebrow?: string;
    scriptOverline?: string;
    headline?: string;
    deck?: string;
    bottomLeft?: string;
    bottomCenter?: string;
    bottomRight?: string;
  };
  featuredArticle?: JournalArticleCard | null;
  grid?: { eyebrow?: string; headline?: string };
  newsletter?: { script?: string; headline?: string; body?: string };
  cta?: {
    eyebrow?: string;
    headline?: string;
    body?: string;
    cta?: { label?: string; href?: string };
  };
  seo?: SeoFields;
};

export type JournalPageMedia = {
  hero?: { image?: SanityImage };
};

export type JournalCategoryFacet = {
  title?: string;
  slug?: string;
  count?: number;
};

export type JournalCategories = {
  categories: JournalCategoryFacet[];
  total: number;
};

// ── Fetchers ────────────────────────────────────────────────────────────────
export function getJournalPage(locale: string) {
  return fetchWithFallback<JournalPage>(journalPageQuery, locale);
}

export function getJournalPageMedia() {
  return client.fetch<JournalPageMedia | null>(journalPageMediaQuery);
}

export function getJournalFeaturedFallback(locale: string) {
  return client.fetch<JournalArticleCard | null>(journalFeaturedFallbackQuery, {
    locale,
  });
}

export function getJournalArticles(opts: {
  locale: string;
  end: number;
  excludeId?: string;
  category?: string | null;
}) {
  const { locale, end, excludeId, category } = opts;
  return client.fetch<JournalArticleCard[]>(journalArticlesQuery, {
    locale,
    end,
    excludeId: excludeId ?? "none",
    category: category ?? null,
  });
}

export function getJournalArticlesCount(opts: {
  locale: string;
  excludeId?: string;
  category?: string | null;
}) {
  const { locale, excludeId, category } = opts;
  return client.fetch<number>(journalArticlesCountQuery, {
    locale,
    excludeId: excludeId ?? "none",
    category: category ?? null,
  });
}

export function getJournalCategories(locale: string) {
  return client.fetch<JournalCategories>(journalCategoriesQuery, { locale });
}

// ── Article detail (/journal/[slug]) ────────────────────────────────────────
// Slugs are per-locale; no English fallback (a localized URL exists only when
// its localized doc exists). Body venue/destination cards are dereferenced so
// they render as live internal links. Mirrors `queries/culture.ts`.
export const articleQuery = groq`
  *[_type == "article" && language == $locale && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    kicker,
    excerpt,
    publishedAt,
    "updatedAt": _updatedAt,
    readMinutes,
    featured,
    "category": category->{ title, "slug": slug.current },
    "author": author->{
      name, role, bio, "portrait": portrait{ ..., alt }
    },
    "heroImage": heroImage{ ..., alt },
    body[]{
      ...,
      _type == "articleVenueCards" => {
        label,
        cards[]{
          tag, eyebrow, blurb, linkLabel,
          metaRows[]{ label, value },
          "venue": venue->{
            name,
            "slug": slug.current,
            "region": region->slug.current,
            tag,
            "image": media->cardImage{ ..., alt }
          }
        }
      },
      _type == "destinationCard" => {
        eyebrow, linkLabel,
        "destination": destination->{
          name,
          "slug": slug.current,
          "image": *[_type == "destinationMedia" && slug == ^.slug.current][0].cardImage{ ..., alt }
        }
      }
    },
    faqs[]{ question, answer },
    bleedQuote{ script, quote, cite, "image": image{ ..., alt } },
    "relatedDestination": relatedDestination->{
      name,
      "slug": slug.current,
      "image": *[_type == "destinationMedia" && slug == ^.slug.current][0].cardImage{ ..., alt }
    },
    "relatedVenue": relatedVenue->{
      name,
      "slug": slug.current,
      "region": region->slug.current,
      tag,
      "image": media->cardImage{ ..., alt }
    },
    "relatedCulture": relatedCulture->{
      name,
      "slug": slug.current,
      "image": media->cardImage{ ..., alt }
    },
    "relatedArticles": relatedArticles[defined(@->_id)]->{ ${ARTICLE_CARD_PROJECTION} },
    "translations": *[_type == "translation.metadata" && references(^._id)][0]
      .translations[].value->{ language, "slug": slug.current },
    ${SEO_PROJECTION}
  }
`;

// Featured articles get build-time static params; the rest render on demand
// (`dynamicParams = true`). `{language, slug}` pairs (bottom-up generation).
export const articleParamsQuery = groq`
  *[_type == "article" && featured == true && defined(slug.current) && defined(language)]{
    language,
    "slug": slug.current
  }
`;

export type ArticleAuthor = {
  name?: string;
  role?: string;
  bio?: string;
  portrait?: SanityImage;
};

export type ArticleDestinationRef = {
  name?: string;
  slug?: string;
  image?: SanityImage;
};

export type ArticleVenueRef = {
  name?: string;
  slug?: string;
  region?: string;
  tag?: string;
  image?: SanityImage;
};

export type ArticleCultureRef = {
  name?: string;
  slug?: string;
  image?: SanityImage;
};

export type ArticleDetail = {
  title?: string;
  slug?: string;
  kicker?: string;
  excerpt?: string;
  publishedAt?: string;
  updatedAt?: string;
  readMinutes?: number;
  featured?: boolean;
  category?: { title?: string; slug?: string };
  author?: ArticleAuthor | null;
  heroImage?: SanityImage;
  body?: PortableTextBlock[];
  faqs?: Array<{ question?: string; answer?: PortableTextBlock[] }>;
  bleedQuote?: {
    script?: string;
    quote?: string;
    cite?: string;
    image?: SanityImage;
  };
  relatedDestination?: ArticleDestinationRef | null;
  relatedVenue?: ArticleVenueRef | null;
  relatedCulture?: ArticleCultureRef | null;
  relatedArticles?: JournalArticleCard[];
  translations?: Array<{ language?: Locale; slug?: string }>;
  seo?: SeoFields;
};

export type ArticleParams = { language: Locale; slug: string };

export function getArticle(locale: string, slug: string) {
  return client.fetch<ArticleDetail | null>(articleQuery, { locale, slug });
}

export function getArticleParams() {
  return client.fetch<ArticleParams[]>(articleParamsQuery);
}

// ── Category archive (/journal/category/[category]) ──────────────────────────
export const categoryQuery = groq`
  *[_type == "articleCategory" && language == $locale && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    blurb,
    "translations": *[_type == "translation.metadata" && references(^._id)][0]
      .translations[].value->{ language, "slug": slug.current },
    ${SEO_PROJECTION}
  }
`;

/** `{language, slug, metadataId}` of every category — static params + sitemap. */
export const categoryParamsQuery = groq`
  *[_type == "articleCategory" && defined(slug.current) && defined(language)]{
    language,
    "slug": slug.current,
    "metadataId": *[_type == "translation.metadata" && references(^._id)][0]._id
  }
`;

/** `{language, slug, metadataId}` of every article — sitemap shard. */
export const articleSitemapParamsQuery = groq`
  *[_type == "article" && defined(slug.current) && defined(language)]{
    language,
    "slug": slug.current,
    "metadataId": *[_type == "translation.metadata" && references(^._id)][0]._id
  }
`;

// Reverse reference: articles that link to a given doc (destination/culture/
// venue) — powers the "From the journal" blocks on the pillar pages.
export const articlesReferencingQuery = groq`
  *[_type == "article" && language == $locale && references($refId)]
    | order(publishedAt desc)[0...$limit]{ ${ARTICLE_CARD_PROJECTION} }
`;

export type ArticleCategoryDoc = {
  title?: string;
  slug?: string;
  blurb?: string;
  translations?: Array<{ language?: Locale; slug?: string }>;
  seo?: SeoFields;
};

export type SitemapParams = {
  language: Locale;
  slug: string;
  metadataId?: string | null;
};

export function getCategory(locale: string, slug: string) {
  return client.fetch<ArticleCategoryDoc | null>(categoryQuery, { locale, slug });
}

export function getCategoryParams() {
  return client.fetch<SitemapParams[]>(categoryParamsQuery);
}

export function getArticleSitemapParams() {
  return client.fetch<SitemapParams[]>(articleSitemapParamsQuery);
}

export function getArticlesReferencing(
  locale: string,
  refId: string,
  limit = 4,
) {
  return client.fetch<JournalArticleCard[]>(articlesReferencingQuery, {
    locale,
    refId,
    limit,
  });
}
