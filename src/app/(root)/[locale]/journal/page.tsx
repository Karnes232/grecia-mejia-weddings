import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/ui/JsonLd";
import {
  JournalCategoryFilter,
  JournalFeatured,
  JournalGrid,
  JournalHero,
  JournalLoadMore,
  JournalNewsletter,
} from "@/components/JournalPage";
import { JourneyCta } from "@/components/_shared/JourneyCta";
import { type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";
import { parseStructuredData } from "@/lib/seo/structuredData";
import { urlFor } from "@/sanity/lib/image";
import {
  getJournalArticles,
  getJournalArticlesCount,
  getJournalCategories,
  getJournalFeaturedFallback,
  getJournalPage,
  getJournalPageMedia,
} from "@/sanity/queries/journal";

export const revalidate = 3600;

const PER_PAGE = 9;

type JournalPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: JournalPageProps): Promise<Metadata> {
  const { locale } = await params;
  const [page, media] = await Promise.all([
    getJournalPage(locale),
    getJournalPageMedia(),
  ]);

  const heroImage = media?.hero?.image;
  const ogImageUrl = heroImage?.asset
    ? urlFor(heroImage).width(1200).height(630).fit("crop").auto("format").url()
    : undefined;

  return buildMetadata({
    seo: page?.seo,
    fallbackTitle: "The Journal",
    fallbackDescription: page?.hero?.deck,
    href: { pathname: "/journal" },
    locale: locale as Locale,
    ogImageUrl,
    ogImageAlt: heroImage?.alt,
  });
}

export default async function JournalPage({
  params,
  searchParams,
}: JournalPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const sp = await searchParams;
  const pageNum = Math.max(1, Number.parseInt(String(sp.page ?? "1"), 10) || 1);
  const category = typeof sp.category === "string" ? sp.category : null;
  const end = pageNum * PER_PAGE;

  const [page, media, categoriesData, fallbackFeatured] = await Promise.all([
    getJournalPage(locale),
    getJournalPageMedia(),
    getJournalCategories(locale),
    getJournalFeaturedFallback(locale),
  ]);

  // The lead article only shows on the unfiltered hub; it's excluded from the
  // grid so it never appears twice.
  const featured = category
    ? null
    : (page?.featuredArticle ?? fallbackFeatured ?? null);
  const excludeId = featured?.id ?? undefined;

  const [articles, gridTotal] = await Promise.all([
    getJournalArticles({ locale, end, excludeId, category }),
    getJournalArticlesCount({ locale, excludeId, category }),
  ]);

  const ld = parseStructuredData(page?.seo?.structuredData);

  return (
    <>
      {ld ? <JsonLd data={ld} /> : null}

      <JournalHero
        hero={page?.hero}
        image={media?.hero?.image}
        total={categoriesData?.total ?? 0}
      />

      {featured ? <JournalFeatured article={featured} locale={locale} /> : null}

      <JournalCategoryFilter
        categories={categoriesData?.categories ?? []}
        total={categoriesData?.total ?? 0}
        activeCategory={category}
      />

      <JournalGrid
        grid={page?.grid}
        articles={articles}
        shown={articles.length}
        total={gridTotal ?? 0}
        locale={locale}
      />

      <JournalLoadMore
        shown={articles.length}
        total={gridTotal ?? 0}
        nextPage={pageNum + 1}
        category={category}
      />


      {page?.cta?.headline ? <JourneyCta data={page.cta} /> : null}
    </>
  );
}
