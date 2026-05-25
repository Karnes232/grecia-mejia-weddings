import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { JourneyCta } from "@/components/_shared/JourneyCta";
import {
  DestinationsAtlas,
  DestinationsCalendar,
  DestinationsHero,
  DestinationsIntro,
  DestinationsSpotlight,
  RegionFilter,
} from "@/components/DestinationsPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";
import { parseStructuredData } from "@/lib/seo/structuredData";
import { urlFor } from "@/sanity/lib/image";
import {
  getDestinationsPage,
  getDestinationsPageMedia,
} from "@/sanity/queries/destinations";

type DestinationsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: DestinationsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const [page, media] = await Promise.all([
    getDestinationsPage(locale),
    getDestinationsPageMedia(),
  ]);

  const heroImage = media?.hero?.image;
  const ogImageUrl = heroImage?.asset
    ? urlFor(heroImage).width(1200).height(630).fit("crop").auto("format").url()
    : undefined;

  return buildMetadata({
    seo: page?.seo,
    fallbackTitle: "Destinations",
    fallbackDescription: page?.hero?.deck ?? page?.intro?.lede,
    href: "/destinations",
    locale: locale as Locale,
    ogImageUrl,
    ogImageAlt: heroImage?.alt,
  });
}

export default async function DestinationsPage({
  params,
}: DestinationsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [page, media] = await Promise.all([
    getDestinationsPage(locale),
    getDestinationsPageMedia(),
  ]);

  const hero = page?.hero;
  const ld = parseStructuredData(page?.seo?.structuredData);

  return (
    <>
      {ld ? <JsonLd data={ld} /> : null}
      {hero?.headline ? (
        <DestinationsHero hero={hero} image={media?.hero?.image} />
      ) : null}

      {page?.intro?.headline ? <DestinationsIntro intro={page.intro} /> : null}

      {page?.regions?.length ? (
        <div>
          <RegionFilter regions={page.regions} />
          <DestinationsAtlas regions={page.regions} />
        </div>
      ) : null}

      {page?.calendar?.rows?.length ? (
        <DestinationsCalendar calendar={page.calendar} locale={locale} />
      ) : null}

      {page?.spotlight?.headline ? (
        <DestinationsSpotlight spotlight={page.spotlight} locale={locale} />
      ) : null}

      {page?.journeyCta?.headline ? (
        <JourneyCta data={page.journeyCta} />
      ) : null}

      {!hero?.headline &&
      !page?.intro?.headline &&
      !page?.regions?.length &&
      !page?.journeyCta?.headline ? (
        <div className="mx-auto max-w-[1100px] px-6 py-32 md:px-14">
          <p className="text-[10px] uppercase tracking-wide-eyebrow text-muted">
            Destinations content pending · {locale}
          </p>
          <h1 className="mt-4 font-serif text-[88px] leading-[0.95] tracking-[-0.012em] text-ink">
            Add content in{" "}
            <span className="italic text-olive">Sanity Studio</span>.
          </h1>
        </div>
      ) : null}
    </>
  );
}
