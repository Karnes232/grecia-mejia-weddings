import { getTranslations } from "next-intl/server";

import type { LegalPage as LegalPageData } from "@/sanity/queries/legal";

import { LegalBody } from "./LegalBody";
import { LegalHero } from "./LegalHero";

type LegalPageProps = {
  page: LegalPageData;
};

export async function LegalPage({ page }: LegalPageProps) {
  const t = await getTranslations("legalPage");

  return (
    <>
      {page.hero?.title ? (
        <LegalHero
          hero={page.hero}
          meta={page.meta}
          labels={{
            updated: t("lastUpdated"),
            effective: t("effective"),
            appliesTo: t("appliesTo"),
          }}
        />
      ) : null}

      {page.sections?.length ? (
        <LegalBody
          intro={page.intro}
          helpNote={page.helpNote}
          sections={page.sections}
          signatureName={page.signatureName}
          closing={page.closing}
        />
      ) : null}
    </>
  );
}
