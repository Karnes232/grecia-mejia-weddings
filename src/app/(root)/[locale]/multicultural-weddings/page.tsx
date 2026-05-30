import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import {
  MulticulturalAtlas,
  MulticulturalHero,
  MulticulturalMethodology,
  MulticulturalPairings,
  MulticulturalPhilosophy,
  MulticulturalRelated,
  MulticulturalSpecialists,
} from "@/components/MulticulturalPage";
import { JourneyCta } from "@/components/_shared/JourneyCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";
import { parseStructuredData } from "@/lib/seo/structuredData";
import { urlFor } from "@/sanity/lib/image";
import {
  getMulticulturalPage,
  getMulticulturalPageMedia,
} from "@/sanity/queries/multicultural";

type MulticulturalWeddingsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: MulticulturalWeddingsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const [page, media] = await Promise.all([
    getMulticulturalPage(locale),
    getMulticulturalPageMedia(),
  ]);

  const heroImage = media?.hero?.image;
  const ogImageUrl = heroImage?.asset
    ? urlFor(heroImage).width(1200).height(630).fit("crop").auto("format").url()
    : undefined;

  return buildMetadata({
    seo: page?.seo,
    fallbackTitle: "Multicultural Weddings",
    fallbackDescription: page?.hero?.deck,
    href: "/multicultural-weddings",
    locale: locale as Locale,
    ogImageUrl,
    ogImageAlt: heroImage?.alt,
  });
}

export default async function MulticulturalWeddingsPage({
  params,
}: MulticulturalWeddingsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [page, media] = await Promise.all([
    getMulticulturalPage(locale),
    getMulticulturalPageMedia(),
  ]);

  const hero = page?.hero;
  const ld = parseStructuredData(page?.seo?.structuredData);

  return (
    <>
      {ld ? <JsonLd data={ld} /> : null}

      {hero?.headline ? (
        <MulticulturalHero hero={hero} image={media?.hero?.image} />
      ) : null}

      {page?.philosophy?.headline ? (
        <MulticulturalPhilosophy philosophy={page.philosophy} />
      ) : null}

      {page?.methodology?.headline ? (
        <MulticulturalMethodology methodology={page.methodology} />
      ) : null}

      {page?.atlas?.cultures?.length ? (
        <MulticulturalAtlas atlas={page.atlas} />
      ) : null}

      {page?.pairings?.items?.length ? (
        <MulticulturalPairings pairings={page.pairings} />
      ) : null}

      {page?.specialists?.items?.length ? (
        <MulticulturalSpecialists specialists={page.specialists} />
      ) : null}

      {page?.related?.headline ? (
        <MulticulturalRelated
          related={page.related}
          images={media?.relatedArticles}
          locale={locale}
        />
      ) : null}

      {page?.cta?.headline ? <JourneyCta data={page.cta} /> : null}

      {!hero?.headline &&
      !page?.philosophy?.headline &&
      !page?.methodology?.headline &&
      !page?.atlas?.cultures?.length &&
      !page?.pairings?.items?.length &&
      !page?.specialists?.items?.length &&
      !page?.related?.headline &&
      !page?.cta?.headline ? (
        <div className="mx-auto max-w-[1100px] px-6 py-32 md:px-14">
          <p className="text-[10px] uppercase tracking-wide-eyebrow text-muted">
            Multicultural content pending · {locale}
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
