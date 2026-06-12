import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import {
  ContactHero,
  ContactMain,
  ContactProcess,
  ContactFaq,
} from "@/components/ContactPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";
import { parseStructuredData } from "@/lib/seo/structuredData";
import { urlFor } from "@/sanity/lib/image";
import { getContactPage, getContactPageMedia } from "@/sanity/queries/contact";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const [page, media] = await Promise.all([
    getContactPage(locale),
    getContactPageMedia(),
  ]);

  const heroImage = media?.hero?.image;
  const ogImageUrl = heroImage?.asset
    ? urlFor(heroImage).width(1200).height(630).fit("crop").auto("format").url()
    : undefined;

  return buildMetadata({
    seo: page?.seo,
    fallbackTitle: "Contact",
    fallbackDescription: page?.hero?.deck,
    href: "/contact",
    locale: locale as Locale,
    ogImageUrl,
    ogImageAlt: heroImage?.alt,
  });
}

/** Build a schema.org FAQPage object from the editorial FAQ items. */
function buildFaqLd(faq?: NonNullable<Awaited<ReturnType<typeof getContactPage>>>["faq"]) {
  const items = (faq?.items ?? []).filter((i) => i.question && i.answer);
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [page, media] = await Promise.all([
    getContactPage(locale),
    getContactPageMedia(),
  ]);

  const ld = parseStructuredData(page?.seo?.structuredData);
  const faqLd = buildFaqLd(page?.faq);

  return (
    <>
      {ld ? <JsonLd data={ld} /> : null}
      {faqLd ? <JsonLd data={faqLd} /> : null}

      {page?.hero?.headline ? (
        <ContactHero hero={page.hero} image={media?.hero?.image} />
      ) : null}

      <ContactMain form={page?.form} rail={page?.rail} />

      {page?.process?.headline || page?.process?.steps?.length ? (
        <ContactProcess process={page.process} />
      ) : null}

      {page?.faq?.items?.length ? <ContactFaq faq={page.faq} /> : null}
    </>
  );
}
