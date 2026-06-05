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
  CultureCeremonyArc,
  CultureCompatibility,
  CultureConcepts,
  CultureFacts,
  CultureFaq,
  CultureGuest,
  CultureHero,
  CultureOverview,
  CulturePlanning,
  CultureProtocols,
  CultureRelated,
} from "@/components/MulticulturalDetailPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";
import { parseStructuredData } from "@/lib/seo/structuredData";
import { urlFor } from "@/sanity/lib/image";
import {
  type Culture,
  getCulture,
  getCultureParams,
} from "@/sanity/queries/culture";

type CulturePageProps = {
  params: Promise<{ locale: string; culture: string }>;
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
 * Culture slugs are translated per locale, so the sibling-language slugs from
 * `translation.metadata` become per-locale `{culture}` param overrides — used
 * for hreflang/canonical and published to the language switcher.
 */
function localizedParamsFrom(
  translations: Culture["translations"],
): RouteParamsTranslationsMap {
  const map: RouteParamsTranslationsMap = {};
  for (const t of translations ?? []) {
    if (t?.language && t.slug) map[t.language] = { culture: t.slug };
  }
  return map;
}

export async function generateMetadata({
  params,
}: CulturePageProps): Promise<Metadata> {
  const { locale, culture } = await params;
  const doc = await getCulture(locale, culture);

  if (!doc) return {};

  const localizedParams = localizedParamsFrom(doc.translations);
  const hreflangLocales = Object.keys(localizedParams) as Locale[];
  const heroImage = doc.media?.heroImage ?? doc.media?.cardImage;

  return buildMetadata({
    seo: doc.seo,
    fallbackTitle:
      doc.name ?? stripAccentTokens(doc.hero?.headline ?? "") ?? culture,
    fallbackDescription: doc.hero?.deck ?? doc.intro,
    href: {
      pathname: "/multicultural-weddings/[culture]",
      params: { culture },
    },
    locale: locale as Locale,
    ogImageUrl: ogFrom(heroImage),
    ogImageAlt: heroImage?.alt,
    localizedParams,
    hreflangLocales: hreflangLocales.length ? hreflangLocales : undefined,
  });
}

export default async function CulturePage({ params }: CulturePageProps) {
  const { locale, culture } = await params;
  setRequestLocale(locale);

  const doc = await getCulture(locale, culture);

  if (!doc) notFound();

  const media = doc.media;
  const ld = parseStructuredData(doc.seo?.structuredData);
  const localizedParams = localizedParamsFrom(doc.translations);

  return (
    <>
      <SetRouteParamsTranslations map={localizedParams} />
      {ld ? <JsonLd data={ld} /> : null}

      {doc.hero?.headline ? (
        <CultureHero
          hero={doc.hero}
          image={media?.heroImage ?? media?.cardImage}
        />
      ) : null}

      {doc.factStrip?.length ? <CultureFacts facts={doc.factStrip} /> : null}

      {doc.overview?.headline ? (
        <CultureOverview overview={doc.overview} />
      ) : null}

      {doc.ceremonyArc?.steps?.length ? (
        <CultureCeremonyArc ceremonyArc={doc.ceremonyArc} />
      ) : null}

      {doc.designConcepts?.cards?.length ? (
        <CultureConcepts
          designConcepts={doc.designConcepts}
          images={media?.designConcepts}
          locale={locale}
        />
      ) : null}

      {doc.protocols?.items?.length ? (
        <CultureProtocols protocols={doc.protocols} />
      ) : null}

      {doc.planning?.days?.length ? (
        <CulturePlanning planning={doc.planning} />
      ) : null}

      {doc.compatibility?.cards?.length ? (
        <CultureCompatibility compatibility={doc.compatibility} />
      ) : null}

      {doc.guest?.cells?.length ? <CultureGuest guest={doc.guest} /> : null}

      {doc.related?.headline ? (
        <CultureRelated
          related={doc.related}
          images={media?.relatedArticles}
          locale={locale}
        />
      ) : null}

      {doc.faq?.items?.length ? <CultureFaq faq={doc.faq} /> : null}

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

// Culture slugs differ per locale, so emit full {locale, culture} pairs
// (bottom-up generation) instead of letting Next cross-product EN slugs
// against every locale.
export async function generateStaticParams() {
  const rows = await getCultureParams();
  return rows.map(({ language, slug }) => ({ locale: language, culture: slug }));
}
