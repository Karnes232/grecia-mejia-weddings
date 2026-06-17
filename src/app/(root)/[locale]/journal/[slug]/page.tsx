import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JourneyCta } from "@/components/_shared/JourneyCta";
import { stripAccentTokens } from "@/components/_shared/stripAccentTokens";
import {
  type RouteParamsTranslationsMap,
  SetRouteParamsTranslations,
} from "@/components/Layout/_shared/RouteParamsTranslations";
import {
  ArticleBleedQuote,
  ArticleBody,
  ArticleHero,
  ArticleMetaBar,
  ArticleProgressBar,
  ArticleRelatedExperiences,
  ArticleRelatedWriting,
  Breadcrumb,
  type ArticleTag,
} from "@/components/JournalDetailPage";
import { tocFromBody } from "@/components/JournalDetailPage/_shared/util";
import { JsonLd } from "@/components/ui/JsonLd";
import { type Locale } from "@/i18n/routing";
import {
  blogPostingSchema,
  breadcrumbListSchema,
  faqPageSchema,
} from "@/lib/schema/article";
import { canonicalUrl } from "@/lib/seo/hreflang";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_URL } from "@/lib/seo/siteUrl";
import { urlFor } from "@/sanity/lib/image";
import {
  type ArticleDetail,
  getArticle,
  getArticleParams,
  getJournalPage,
} from "@/sanity/queries/journal";

export const revalidate = 3600;
export const dynamicParams = true;

type ArticlePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

const ogFrom = (image: { asset?: unknown; alt?: string } | undefined | null) =>
  image?.asset
    ? urlFor(image as Parameters<typeof urlFor>[0])
        .width(1200)
        .height(630)
        .fit("crop")
        .auto("format")
        .url()
    : undefined;

/** Per-locale `{slug}` overrides from translation metadata (translated slugs). */
function localizedParamsFrom(
  translations: ArticleDetail["translations"],
): RouteParamsTranslationsMap {
  const map: RouteParamsTranslationsMap = {};
  for (const tr of translations ?? []) {
    if (tr?.language && tr.slug) map[tr.language] = { slug: tr.slug };
  }
  return map;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const doc = await getArticle(locale, slug);
  if (!doc) return {};

  const localizedParams = localizedParamsFrom(doc.translations);
  const hreflangLocales = Object.keys(localizedParams) as Locale[];

  return buildMetadata({
    seo: doc.seo,
    fallbackTitle: stripAccentTokens(doc.title ?? slug),
    fallbackDescription: doc.excerpt,
    href: { pathname: "/journal/[slug]", params: { slug } },
    locale: locale as Locale,
    ogImageUrl: ogFrom(doc.heroImage),
    ogImageAlt: doc.heroImage?.alt,
    localizedParams,
    hreflangLocales: hreflangLocales.length ? hreflangLocales : undefined,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const [doc, journal, t] = await Promise.all([
    getArticle(locale, slug),
    getJournalPage(locale),
    getTranslations({ locale, namespace: "journalDetail" }),
  ]);

  if (!doc) notFound();

  const localizedParams = localizedParamsFrom(doc.translations);
  const toc = tocFromBody(doc.body);

  const href = { pathname: "/journal/[slug]" as const, params: { slug } };
  const url = canonicalUrl(href, locale as Locale, localizedParams);
  const plainTitle = stripAccentTokens(doc.title ?? "");

  // "Filed under" tags — category links to the hub filter; the rest are plain.
  const tags: ArticleTag[] = [
    doc.category?.title
      ? { label: doc.category.title, categorySlug: doc.category.slug }
      : null,
    doc.kicker ? { label: doc.kicker } : null,
    doc.relatedCulture?.name ? { label: doc.relatedCulture.name } : null,
    doc.relatedVenue?.name ? { label: doc.relatedVenue.name } : null,
  ].filter((x): x is ArticleTag => x !== null);

  const breadcrumb = [
    { label: t("home"), href: "/" },
    { label: t("journal"), href: "/journal" },
    ...(doc.category?.title ? [{ label: doc.category.title }] : []),
    { label: plainTitle },
  ];

  const blogPosting = blogPostingSchema({
    url,
    headline: plainTitle,
    description: doc.seo?.metaDescription || doc.excerpt,
    imageUrl: ogFrom(doc.heroImage),
    datePublished: doc.publishedAt,
    dateModified: doc.updatedAt,
    authorName: doc.author?.name,
    locale,
  });
  const faqLd = faqPageSchema(doc.faqs);
  const breadcrumbLd = breadcrumbListSchema([
    { name: t("home"), url: `${SITE_URL}/` },
    {
      name: t("journal"),
      url: canonicalUrl({ pathname: "/journal" }, locale as Locale),
    },
    { name: plainTitle, url },
  ]);

  return (
    <>
      <SetRouteParamsTranslations map={localizedParams} />
      <JsonLd data={blogPosting} />
      {faqLd ? <JsonLd data={faqLd} /> : null}
      <JsonLd data={breadcrumbLd} />

      <ArticleProgressBar />
      <Breadcrumb trail={breadcrumb} />

      <ArticleHero article={doc} locale={locale} />
      <ArticleMetaBar author={doc.author} title={doc.title} shareUrl={url} />

      <ArticleBody article={doc} toc={toc} tags={tags} />

      {doc.bleedQuote?.quote ? <ArticleBleedQuote data={doc.bleedQuote} /> : null}

      <ArticleRelatedExperiences
        destination={doc.relatedDestination}
        venue={doc.relatedVenue}
        culture={doc.relatedCulture}
      />

      <ArticleRelatedWriting
        articles={doc.relatedArticles}
        destination={doc.relatedDestination}
        venue={doc.relatedVenue}
        culture={doc.relatedCulture}
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

// Featured articles are pre-rendered; the rest render on demand (dynamicParams).
export async function generateStaticParams() {
  const rows = await getArticleParams();
  return rows.map(({ language, slug }) => ({ locale: language, slug }));
}
