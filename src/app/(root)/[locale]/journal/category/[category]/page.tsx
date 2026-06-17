import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JourneyCta } from "@/components/_shared/JourneyCta";
import {
  type RouteParamsTranslationsMap,
  SetRouteParamsTranslations,
} from "@/components/Layout/_shared/RouteParamsTranslations";
import { Breadcrumb } from "@/components/JournalDetailPage";
import {
  JournalCategoryFilter,
  JournalCategoryHero,
  JournalGrid,
  JournalLoadMore,
} from "@/components/JournalPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { type Locale } from "@/i18n/routing";
import { breadcrumbListSchema } from "@/lib/schema/article";
import { canonicalUrl } from "@/lib/seo/hreflang";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_URL } from "@/lib/seo/siteUrl";
import {
  type ArticleCategoryDoc,
  getCategory,
  getCategoryParams,
  getJournalArticles,
  getJournalArticlesCount,
  getJournalCategories,
  getJournalPage,
} from "@/sanity/queries/journal";

export const revalidate = 3600;
export const dynamicParams = true;

const PER_PAGE = 9;

type CategoryPageProps = {
  params: Promise<{ locale: string; category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

function localizedParamsFrom(
  translations: ArticleCategoryDoc["translations"],
): RouteParamsTranslationsMap {
  const map: RouteParamsTranslationsMap = {};
  for (const t of translations ?? []) {
    if (t?.language && t.slug) map[t.language] = { category: t.slug };
  }
  return map;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { locale, category } = await params;
  const doc = await getCategory(locale, category);
  if (!doc) return {};

  const localizedParams = localizedParamsFrom(doc.translations);
  const hreflangLocales = Object.keys(localizedParams) as Locale[];

  return buildMetadata({
    seo: doc.seo,
    fallbackTitle: doc.title ?? category,
    fallbackDescription: doc.blurb,
    href: { pathname: "/journal/category/[category]", params: { category } },
    locale: locale as Locale,
    localizedParams,
    hreflangLocales: hreflangLocales.length ? hreflangLocales : undefined,
  });
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { locale, category } = await params;
  setRequestLocale(locale);

  const sp = await searchParams;
  const pageNum = Math.max(1, Number.parseInt(String(sp.page ?? "1"), 10) || 1);
  const end = pageNum * PER_PAGE;

  const [doc, categoriesData, journal, t] = await Promise.all([
    getCategory(locale, category),
    getJournalCategories(locale),
    getJournalPage(locale),
    getTranslations({ locale, namespace: "journalDetail" }),
  ]);

  if (!doc) notFound();

  const [articles, total] = await Promise.all([
    getJournalArticles({ locale, end, category }),
    getJournalArticlesCount({ locale, category }),
  ]);

  const localizedParams = localizedParamsFrom(doc.translations);
  const href = {
    pathname: "/journal/category/[category]" as const,
    params: { category },
  };
  const url = canonicalUrl(href, locale as Locale, localizedParams);

  const breadcrumbLd = breadcrumbListSchema([
    { name: t("home"), url: `${SITE_URL}/` },
    {
      name: t("journal"),
      url: canonicalUrl({ pathname: "/journal" }, locale as Locale),
    },
    { name: doc.title ?? category, url },
  ]);
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: doc.title,
    ...(doc.blurb ? { description: doc.blurb } : {}),
    url,
    inLanguage: locale,
  };

  return (
    <>
      <SetRouteParamsTranslations map={localizedParams} />
      <JsonLd data={collectionLd} />
      <JsonLd data={breadcrumbLd} />

      <Breadcrumb
        trail={[
          { label: t("home"), href: "/" },
          { label: t("journal"), href: "/journal" },
          { label: doc.title ?? category },
        ]}
      />

      <JournalCategoryHero title={doc.title} blurb={doc.blurb} total={total ?? 0} />

      <JournalCategoryFilter
        categories={categoriesData?.categories ?? []}
        total={categoriesData?.total ?? 0}
        activeCategory={doc.slug ?? category}
      />

      <JournalGrid
        grid={journal?.grid}
        articles={articles}
        shown={articles.length}
        total={total ?? 0}
        locale={locale}
      />

      <JournalLoadMore
        shown={articles.length}
        total={total ?? 0}
        nextPage={pageNum + 1}
        category={doc.slug ?? category}
      />

      {journal?.cta?.headline ? (
        <JourneyCta
          data={{
            eyebrow: journal.cta.eyebrow,
            headline: journal.cta.headline,
            body: journal.cta.body,
            cta: {
              label: journal.cta.cta?.label?.replace(/\s*→\s*$/, ""),
              href: journal.cta.cta?.href,
            },
          }}
        />
      ) : null}
    </>
  );
}

export async function generateStaticParams() {
  const rows = await getCategoryParams();
  return rows.map(({ language, slug }) => ({ locale: language, category: slug }));
}
