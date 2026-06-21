import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import type { PortfolioCard } from "@/sanity/queries/portfolio";

type CaseStudyNextProps = {
  next: PortfolioCard;
};

export async function CaseStudyNext({ next }: CaseStudyNextProps) {
  const t = await getTranslations("portfolioDetail");
  const url = next.image?.asset
    ? urlFor(next.image).width(2000).height(1100).fit("crop").auto("format").url()
    : null;

  if (!next.slug) return null;

  return (
    <Link
      href={{ pathname: "/portfolio/[slug]", params: { slug: next.slug } }}
      className="group relative isolate flex min-h-[56vh] items-center justify-center overflow-hidden bg-cine-bg text-center text-ivory no-underline"
    >
      {url ? (
        <Image
          src={url}
          alt={next.image?.alt ?? ""}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-silk)] group-hover:scale-[1.05]"
          style={{ filter: "brightness(0.55)" }}
        />
      ) : null}
      <div aria-hidden className="absolute inset-0 z-[1] bg-[rgba(13,15,10,0.4)]" />
      <div className="relative z-[2] px-6">
        <span className="mb-3 block text-[10px] uppercase tracking-wide-eyebrow text-cine-gold">
          {t("nextCaseStudy")}
        </span>
        <h3 className="m-0 font-serif text-[clamp(40px,6vw,80px)] font-light italic leading-none">
          {next.name}
        </h3>
        {next.cardMeta ? (
          <span className="mt-5 block text-[11px] uppercase tracking-[0.32em] text-cine-ivory">
            {next.cardMeta} →
          </span>
        ) : null}
      </div>
    </Link>
  );
}
