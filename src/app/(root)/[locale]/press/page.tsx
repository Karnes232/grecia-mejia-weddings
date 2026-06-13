import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import {
  PressHero,
  PressIntro,
  PressFeatured,
  PressQuotes,
  PressArchive,
  PressAwards,
} from "@/components/PressPage";
import { JourneyCta } from "@/components/_shared/JourneyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";
import { parseStructuredData } from "@/lib/seo/structuredData";
import { urlFor } from "@/sanity/lib/image";
import { getPressPage, getPressPageMedia } from "@/sanity/queries/press";

type PressPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PressPageProps): Promise<Metadata> {
  const { locale } = await params;
  const [page, media] = await Promise.all([
    getPressPage(locale),
    getPressPageMedia(),
  ]);

  const heroImage = media?.hero?.image;
  const ogImageUrl = heroImage?.asset
    ? urlFor(heroImage).width(1200).height(630).fit("crop").auto("format").url()
    : undefined;

  return buildMetadata({
    seo: page?.seo,
    fallbackTitle: "Press & Recognition",
    fallbackDescription: page?.hero?.deck,
    href: "/press",
    locale: locale as Locale,
    ogImageUrl,
    ogImageAlt: heroImage?.alt,
  });
}

export default async function PressPage({ params }: PressPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [page, media] = await Promise.all([
    getPressPage(locale),
    getPressPageMedia(),
  ]);

  const ld = parseStructuredData(page?.seo?.structuredData);

  return (
    <>
      {ld ? <JsonLd data={ld} /> : null}

      {page?.hero?.headline ? (
        <PressHero hero={page.hero} image={media?.hero?.image} />
      ) : null}

      {page?.intro?.headline || page?.intro?.body?.length ? (
        <PressIntro intro={page.intro} />
      ) : null}

      {page?.featured?.items?.length ? (
        <PressFeatured
          featured={page.featured}
          images={media?.featured?.images}
        />
      ) : null}

      {page?.quotes?.items?.length ? (
        <PressQuotes quotes={page.quotes} />
      ) : null}

      {page?.archive?.items?.length ? (
        <PressArchive archive={page.archive} />
      ) : null}

      {page?.awards?.items?.length ? (
        <PressAwards awards={page.awards} />
      ) : null}

      {page?.cta?.headline ? <JourneyCta data={page.cta} /> : null}
    </>
  );
}
