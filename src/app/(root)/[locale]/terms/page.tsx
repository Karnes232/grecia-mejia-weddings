import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { LegalPage } from "@/components/LegalPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";
import { parseStructuredData } from "@/lib/seo/structuredData";
import { getTermsPage } from "@/sanity/queries/legal";

type TermsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const page = await getTermsPage(locale);

  return buildMetadata({
    seo: page?.seo,
    fallbackTitle: "Terms & Conditions",
    fallbackDescription: page?.hero?.deck,
    href: "/terms",
    locale: locale as Locale,
  });
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const page = await getTermsPage(locale);
  if (!page) return null;

  const ld = parseStructuredData(page.seo?.structuredData);

  return (
    <>
      {ld ? <JsonLd data={ld} /> : null}
      <LegalPage page={page} />
    </>
  );
}
