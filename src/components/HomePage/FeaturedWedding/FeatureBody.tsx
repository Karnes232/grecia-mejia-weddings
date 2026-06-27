import { getTranslations } from "next-intl/server";

import type { HomePage } from "@/sanity/queries/home";

import { CTAButton } from "@/components/_shared/CTAButton";
import { renderHeadline } from "@/components/_shared/renderHeadline";

type CaseStudy = NonNullable<
  NonNullable<HomePage["featuredWedding"]>["caseStudy"]
>;

type FeatureBodyProps = {
  caseStudy: CaseStudy;
  eyebrow?: string;
};

export async function FeatureBody({ caseStudy, eyebrow }: FeatureBodyProps) {
  const t = await getTranslations("homePage.featuredWedding");

  const blurb = caseStudy.cardBlurb ?? "";
  const first = blurb.charAt(0);
  const rest = blurb.slice(1);

  const facts = [
    { label: t("guests"), value: caseStudy.guests },
    { label: t("duration"), value: caseStudy.duration },
    { label: t("season"), value: caseStudy.season },
  ].filter((f) => f.value);

  return (
    <div>
      <span className="mb-4 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
        {eyebrow ?? t("eyebrow")}
      </span>

      {caseStudy.name ? (
        <h2 className="m-0 mb-7 font-serif font-light text-[clamp(48px,6vw,80px)] leading-[0.96] tracking-[-0.005em] text-ink">
          {renderHeadline(caseStudy.name, "olive")}
        </h2>
      ) : null}

      {blurb ? (
        <p className="mb-6 text-[16px] leading-[1.75] text-ink/90">
          <span className="float-left pr-3.5 pt-2.5 font-serif italic text-[88px] leading-[0.75] text-olive">
            {first}
          </span>
          {rest}
        </p>
      ) : null}

      {caseStudy.quote ? (
        <blockquote className="my-8 border-y border-gold py-6 px-0 font-serif italic text-[clamp(22px,2.4vw,28px)] leading-[1.35] text-olive">
          “{caseStudy.quote}”
          {caseStudy.cite ? (
            <cite className="mt-3 block text-[10px] uppercase not-italic tracking-wide-eyebrow text-muted">
              {caseStudy.cite}
            </cite>
          ) : null}
        </blockquote>
      ) : null}

      {facts.length > 0 ? (
        <dl className="mb-0 mt-8 grid grid-cols-[auto_1fr] gap-x-9 gap-y-3.5">
          {facts.map((f) => (
            <div key={f.label} className="contents">
              <dt className="text-[10px] uppercase tracking-eyebrow text-muted self-center">
                {f.label}
              </dt>
              <dd className="m-0 font-serif italic text-[18px] leading-[1.2] text-ink">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      {caseStudy.slug ? (
        <div className="mt-10">
          <CTAButton
            href={{
              pathname: "/portfolio/[slug]",
              params: { slug: caseStudy.slug },
            }}
          >
            {t("readCaseStudy")} →
          </CTAButton>
        </div>
      ) : null}
    </div>
  );
}
