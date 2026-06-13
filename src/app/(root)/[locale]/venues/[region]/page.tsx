import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { JourneyCta } from "@/components/_shared/JourneyCta";
import { stripAccentTokens } from "@/components/_shared/stripAccentTokens";
import {
  type RouteParamsTranslationsMap,
  SetRouteParamsTranslations,
} from "@/components/Layout/_shared/RouteParamsTranslations";
import { JsonLd } from "@/components/ui/JsonLd";
import { VenuesHero } from "@/components/VenuesPage";
import { RegionFilterVenues, RegionGuide } from "@/components/VenueRegionPage";
import { type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";
import { parseStructuredData } from "@/lib/seo/structuredData";
import { urlFor } from "@/sanity/lib/image";
import {
  getVenueRegion,
  getVenueRegionParams,
  type VenueRegion,
} from "@/sanity/queries/venueRegion";

type VenueRegionPageProps = {
  params: Promise<{ locale: string; region: string }>;
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
 * Region slugs are translated per locale, so the sibling-language slugs from
 * `translation.metadata` become per-locale `{region}` param overrides — used
 * for hreflang/canonical and published to the language switcher.
 */
function localizedParamsFrom(
  translations: VenueRegion["translations"],
): RouteParamsTranslationsMap {
  const map: RouteParamsTranslationsMap = {};
  for (const t of translations ?? []) {
    if (t?.language && t.slug) map[t.language] = { region: t.slug };
  }
  return map;
}

export async function generateMetadata({
  params,
}: VenueRegionPageProps): Promise<Metadata> {
  const { locale, region } = await params;
  const doc = await getVenueRegion(locale, region);

  if (!doc) return {};

  const localizedParams = localizedParamsFrom(doc.translations);
  const hreflangLocales = Object.keys(localizedParams) as Locale[];
  const heroImage = doc.media?.heroImage ?? doc.media?.cardImage;

  return buildMetadata({
    seo: doc.seo,
    fallbackTitle:
      doc.name ?? stripAccentTokens(doc.hero?.headline ?? "") ?? region,
    fallbackDescription: doc.hero?.deck,
    href: {
      pathname: "/venues/[region]",
      params: { region },
    },
    locale: locale as Locale,
    ogImageUrl: ogFrom(heroImage),
    ogImageAlt: heroImage?.alt,
    localizedParams,
    hreflangLocales: hreflangLocales.length ? hreflangLocales : undefined,
  });
}

export default async function VenueRegionPage({
  params,
}: VenueRegionPageProps) {
  const { locale, region } = await params;
  setRequestLocale(locale);

  const doc = await getVenueRegion(locale, region);

  if (!doc) notFound();

  const media = doc.media;
  const ld = parseStructuredData(doc.seo?.structuredData);
  const localizedParams = localizedParamsFrom(doc.translations);

  return (
    <>
      <SetRouteParamsTranslations map={localizedParams} />
      {ld ? <JsonLd data={ld} /> : null}

      {doc.hero?.headline ? (
        <VenuesHero
          hero={doc.hero}
          image={media?.heroImage ?? media?.cardImage}
        />
      ) : null}

      {doc.guide?.headline || doc.guide?.body?.length ? (
        <RegionGuide guide={doc.guide} />
      ) : null}

      {doc.venues?.length ? (
        <RegionFilterVenues
          regionSlug={region}
          filter={doc.filter}
          venuesHeadline={doc.venuesHeadline}
          venues={doc.venues}
        />
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

// Region slugs differ per locale, so emit full {locale, region} pairs
// (bottom-up generation) instead of cross-producting EN slugs against locales.
export async function generateStaticParams() {
  const rows = await getVenueRegionParams();
  return rows.map(({ language, slug }) => ({ locale: language, region: slug }));
}
