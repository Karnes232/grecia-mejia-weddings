import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { JourneyCta } from "@/components/_shared/JourneyCta";
import { stripAccentTokens } from "@/components/_shared/stripAccentTokens";
import {
  type RouteParamsTranslationsMap,
  SetRouteParamsTranslations,
} from "@/components/Layout/_shared/RouteParamsTranslations";
import {
  CaseStudyCredits,
  CaseStudyDesign,
  CaseStudyGallery,
  CaseStudyHero,
  CaseStudyLogistics,
  CaseStudyNext,
  CaseStudyQuote,
  CaseStudyRelated,
  CaseStudyServices,
  CaseStudyStory,
} from "@/components/PortfolioDetailPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";
import { parseStructuredData } from "@/lib/seo/structuredData";
import { urlFor } from "@/sanity/lib/image";
import {
  type Portfolio,
  getMorePortfolio,
  getPortfolio,
  getPortfolioParams,
} from "@/sanity/queries/portfolio";

type CaseStudyPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

const ogFrom = (
  image: { asset?: unknown; alt?: string } | undefined | null,
): string | undefined =>
  image?.asset
    ? urlFor(image as Parameters<typeof urlFor>[0])
        .width(1200)
        .height(630)
        .fit("crop")
        .auto("format")
        .url()
    : undefined;

/**
 * Case-study slugs are translated per locale, so the sibling-language slugs from
 * `translation.metadata` become per-locale `{slug}` param overrides — used for
 * hreflang/canonical and published to the language switcher.
 */
function localizedParamsFrom(
  translations: Portfolio["translations"],
): RouteParamsTranslationsMap {
  const map: RouteParamsTranslationsMap = {};
  for (const t of translations ?? []) {
    if (t?.language && t.slug) map[t.language] = { slug: t.slug };
  }
  return map;
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const doc = await getPortfolio(locale, slug);

  if (!doc) return {};

  const localizedParams = localizedParamsFrom(doc.translations);
  const hreflangLocales = Object.keys(localizedParams) as Locale[];
  const heroImage = doc.media?.heroImage;

  return buildMetadata({
    seo: doc.seo,
    fallbackTitle:
      doc.name ?? stripAccentTokens(doc.hero?.headline ?? "") ?? slug,
    fallbackDescription: doc.hero?.sub ?? doc.story?.lede,
    href: { pathname: "/portfolio/[slug]", params: { slug } },
    locale: locale as Locale,
    ogImageUrl: ogFrom(heroImage),
    ogImageAlt: heroImage?.alt,
    localizedParams,
    hreflangLocales: hreflangLocales.length ? hreflangLocales : undefined,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const doc = await getPortfolio(locale, slug);
  if (!doc) notFound();

  const media = doc.media;
  const more = doc.id ? await getMorePortfolio(locale, doc.id) : [];
  const ld = parseStructuredData(doc.seo?.structuredData);
  const localizedParams = localizedParamsFrom(doc.translations);

  return (
    <>
      <SetRouteParamsTranslations map={localizedParams} />
      {ld ? <JsonLd data={ld} /> : null}

      {doc.hero?.headline ? (
        <CaseStudyHero hero={doc.hero} image={media?.heroImage} />
      ) : null}

      {doc.credits ? <CaseStudyCredits credits={doc.credits} /> : null}

      {doc.story?.headline ? <CaseStudyStory story={doc.story} /> : null}

      {media?.galleryTop?.length ? (
        <CaseStudyGallery items={media.galleryTop} />
      ) : null}

      {doc.design?.headline ? (
        <CaseStudyDesign design={doc.design} image={media?.designImage} />
      ) : null}

      {doc.quote?.quote ? (
        <CaseStudyQuote quote={doc.quote} image={media?.quoteImage} />
      ) : null}

      {media?.galleryBottom?.length ? (
        <CaseStudyGallery items={media.galleryBottom} />
      ) : null}

      {doc.logistics?.headline ? (
        <CaseStudyLogistics logistics={doc.logistics} />
      ) : null}

      {doc.services?.items?.length ? (
        <CaseStudyServices services={doc.services} />
      ) : null}

      <CaseStudyRelated
        related={doc.related}
        credits={doc.credits}
        more={more}
      />

      {doc.nextCaseStudy?.slug ? (
        <CaseStudyNext next={doc.nextCaseStudy} />
      ) : null}

      {doc.cta?.headline ? (
        <JourneyCta
          data={{
            eyebrow: doc.cta.eyebrow,
            headline: doc.cta.headline,
            body: doc.cta.body,
            cta: {
              label: doc.cta.ctaLabel?.replace(/\s*→\s*$/, ""),
              href: doc.cta.ctaHref,
            },
          }}
        />
      ) : null}
    </>
  );
}

// Case-study slugs differ per locale, so emit full {locale, slug} pairs
// (bottom-up generation) rather than cross-producting EN slugs across locales.
export async function generateStaticParams() {
  const rows = await getPortfolioParams();
  return rows.map(({ language, slug }) => ({ locale: language, slug }));
}
