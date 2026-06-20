import Image from "next/image";
import { useTranslations } from "next-intl";

import { plainHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import type { JournalArticleCard } from "@/sanity/queries/journal";

import { formatMonthYear } from "../_shared/format";

type JournalFeaturedProps = {
  article: JournalArticleCard;
  locale: string;
};

export function JournalFeatured({ article, locale }: JournalFeaturedProps) {
  const t = useTranslations("journalPage");
  const imageUrl = article.image?.asset
    ? urlFor(article.image).width(1200).height(900).fit("crop").auto("format").url()
    : null;

  const eyebrow = [article.category?.title, article.kicker]
    .filter(Boolean)
    .join(" · ");
  const meta = [
    article.author ? `${t("by")} ${article.author}` : null,
    article.readMinutes ? t("minRead", { min: article.readMinutes }) : null,
    formatMonthYear(article.publishedAt, locale),
  ].filter(Boolean);

  const href = article.slug
    ? { pathname: "/journal/[slug]" as const, params: { slug: article.slug } }
    : null;

  return (
    <section className="bg-ivory px-6 pt-[88px] pb-14 md:px-14">
      <RevealOnScroll className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-[1.25fr_1fr] md:gap-16">
        {href ? (
          <Link href={href} className="group relative block aspect-[4/3] overflow-hidden">
            <span className="absolute left-5 top-5 z-[1] bg-olive px-4 py-2 text-[9px] uppercase tracking-[0.32em] text-ivory">
              {article.category?.title}
            </span>
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={article.image?.alt ?? article.title ?? ""}
                fill
                sizes="(min-width:768px) 55vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-silk group-hover:scale-[1.04]"
              />
            ) : null}
          </Link>
        ) : null}

        <div>
          {eyebrow ? (
            <span className="mb-[18px] block text-[10px] uppercase tracking-wide-eyebrow text-gold">
              {eyebrow}
            </span>
          ) : null}
          {article.title ? (
            <h2 className="m-0 mb-6 font-serif text-[clamp(40px,5vw,64px)] font-light leading-[1.0] tracking-[-0.01em] text-ink">
              {href ? (
                <Link href={href} className="text-inherit no-underline transition-colors hover:text-olive">
                  {plainHeadline(article.title)}
                </Link>
              ) : (
                plainHeadline(article.title)
              )}
            </h2>
          ) : null}
          {article.excerpt ? (
            <p className="m-0 mb-7 max-w-[48ch] font-serif text-[22px] italic leading-[1.55] text-[#3d3a30]">
              {article.excerpt}
            </p>
          ) : null}
          {meta.length ? (
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-rule pt-5 text-[10px] uppercase tracking-[0.3em] text-muted">
              {meta.map((m, i) => (
                <span key={i} className="flex items-center gap-x-6">
                  {i > 0 ? (
                    <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-gold" />
                  ) : null}
                  {m}
                </span>
              ))}
            </div>
          ) : null}
          {href ? (
            <Link
              href={href}
              className="mt-7 inline-block border border-olive bg-olive px-7 py-3.5 text-[10px] uppercase tracking-wide-eyebrow text-ivory no-underline transition-colors duration-300 hover:border-olive-dk hover:bg-olive-dk"
            >
              {t("readArticle")} →
            </Link>
          ) : null}
        </div>
      </RevealOnScroll>
    </section>
  );
}
