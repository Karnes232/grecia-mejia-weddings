import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { JourneyCta } from "@/components/_shared/JourneyCta";
import {
  PortfolioGrid,
  PortfolioHero,
  PortfolioIntro,
} from "@/components/PortfolioPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";
import { parseStructuredData } from "@/lib/seo/structuredData";
import { urlFor } from "@/sanity/lib/image";
import {
  getPortfolioPage,
  getPortfolioPageMedia,
} from "@/sanity/queries/portfolio";

type PortfolioHubPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PortfolioHubPageProps): Promise<Metadata> {
  const { locale } = await params;
  const [page, media] = await Promise.all([
    getPortfolioPage(locale),
    getPortfolioPageMedia(),
  ]);

  const heroImage = media?.hero?.image;
  const ogImageUrl = heroImage?.asset
    ? urlFor(heroImage).width(1200).height(630).fit("crop").auto("format").url()
    : undefined;

  return buildMetadata({
    seo: page?.seo,
    fallbackTitle: "Portfolio",
    fallbackDescription: page?.hero?.deck,
    href: "/portfolio",
    locale: locale as Locale,
    ogImageUrl,
    ogImageAlt: heroImage?.alt,
  });
}

export default async function PortfolioHubPage({
  params,
}: PortfolioHubPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [page, media] = await Promise.all([
    getPortfolioPage(locale),
    getPortfolioPageMedia(),
  ]);

  const hero = page?.hero;
  const ld = parseStructuredData(page?.seo?.structuredData);

  return (
    <>
      {ld ? <JsonLd data={ld} /> : null}

      {hero?.headline ? (
        <PortfolioHero hero={hero} image={media?.hero?.image} />
      ) : null}

      {page?.intro?.headline ? <PortfolioIntro intro={page.intro} /> : null}

      {page?.grid?.caseStudies?.length ? (
        <PortfolioGrid grid={page.grid} />
      ) : null}

      {page?.cta?.headline ? (
        <JourneyCta
          data={{
            eyebrow: page.cta.eyebrow,
            headline: page.cta.headline,
            body: page.cta.body,
            cta: {
              label: page.cta.ctaLabel?.replace(/\s*→\s*$/, ""),
              href: page.cta.ctaHref,
            },
          }}
        />
      ) : null}

      {!hero?.headline &&
      !page?.intro?.headline &&
      !page?.grid?.caseStudies?.length &&
      !page?.cta?.headline ? (
        <div className="mx-auto max-w-[1100px] px-6 py-32 md:px-14">
          <p className="text-[10px] uppercase tracking-wide-eyebrow text-muted">
            Portfolio content pending · {locale}
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
