import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { JourneyCta } from "@/components/_shared/JourneyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  VenuesHero,
  VenuesIntro,
  VenuesRegions,
} from "@/components/VenuesPage";
import { type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";
import { parseStructuredData } from "@/lib/seo/structuredData";
import { urlFor } from "@/sanity/lib/image";
import { getVenuesPage, getVenuesPageMedia } from "@/sanity/queries/venues";

type VenuesPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: VenuesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const [page, media] = await Promise.all([
    getVenuesPage(locale),
    getVenuesPageMedia(),
  ]);

  const heroImage = media?.hero?.image;
  const ogImageUrl = heroImage?.asset
    ? urlFor(heroImage).width(1200).height(630).fit("crop").auto("format").url()
    : undefined;

  return buildMetadata({
    seo: page?.seo,
    fallbackTitle: "Wedding Venues",
    fallbackDescription: page?.hero?.deck ?? page?.intro?.lede,
    href: "/venues",
    locale: locale as Locale,
    ogImageUrl,
    ogImageAlt: heroImage?.alt,
  });
}

export default async function VenuesPage({ params }: VenuesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [page, media] = await Promise.all([
    getVenuesPage(locale),
    getVenuesPageMedia(),
  ]);

  const ld = parseStructuredData(page?.seo?.structuredData);

  return (
    <>
      {ld ? <JsonLd data={ld} /> : null}

      {page?.hero?.headline ? (
        <VenuesHero hero={page.hero} image={media?.hero?.image} />
      ) : null}

      {page?.intro?.headline || page?.intro?.body?.length ? (
        <VenuesIntro intro={page.intro} />
      ) : null}

      {page?.regions?.items?.length ? (
        <VenuesRegions regions={page.regions} />
      ) : null}

      {page?.cta?.headline ? <JourneyCta data={page.cta} /> : null}
    </>
  );
}
