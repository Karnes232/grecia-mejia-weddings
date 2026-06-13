import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { LegalPage } from "@/components/LegalPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";
import { parseStructuredData } from "@/lib/seo/structuredData";
import { getPrivacyPage } from "@/sanity/queries/legal";

type PrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const page = await getPrivacyPage(locale);

  return buildMetadata({
    seo: page?.seo,
    fallbackTitle: "Privacy Policy",
    fallbackDescription: page?.hero?.deck,
    href: "/privacy",
    locale: locale as Locale,
  });
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const page = await getPrivacyPage(locale);
  if (!page) return null;

  const ld = parseStructuredData(page.seo?.structuredData);

  return (
    <>
      {ld ? <JsonLd data={ld} /> : null}
      <LegalPage page={page} />
    </>
  );
}
