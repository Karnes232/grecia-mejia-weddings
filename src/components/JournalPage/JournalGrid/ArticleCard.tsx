import Image from "next/image";
import { useTranslations } from "next-intl";

import { plainHeadline } from "@/components/_shared/renderHeadline";
import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import type { JournalArticleCard } from "@/sanity/queries/journal";

import { formatMonthYear } from "../_shared/format";

type ArticleCardProps = {
  article: JournalArticleCard;
  locale: string;
};

export function ArticleCard({ article, locale }: ArticleCardProps) {
  const t = useTranslations("journalPage");
  const imageUrl = article.image?.asset
    ? urlFor(article.image).width(800).height(540).fit("crop").auto("format").url()
    : null;

  const eyebrow = [article.category?.title, article.kicker]
    .filter(Boolean)
    .join(" · ");
  const read = [
    article.readMinutes ? t("minRead", { min: article.readMinutes }) : null,
    formatMonthYear(article.publishedAt, locale),
  ].filter(Boolean);

  if (!article.slug) return null;

  return (
    <Link
      href={{ pathname: "/journal/[slug]", params: { slug: article.slug } }}
      className="group block text-inherit no-underline"
    >
      <div className="relative mb-5 aspect-[3/2] overflow-hidden">
        {article.category?.title ? (
          <span className="absolute left-3.5 top-3.5 z-[1] bg-[rgba(245,240,230,0.94)] px-3 py-1.5 text-[8px] uppercase tracking-[0.3em] text-olive">
            {article.category.title}
          </span>
        ) : null}
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={article.image?.alt ?? article.title ?? ""}
            fill
            sizes="(min-width:768px) 33vw, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-silk group-hover:scale-[1.05]"
          />
        ) : null}
      </div>
      {eyebrow ? (
        <span className="mb-2.5 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
          {eyebrow}
        </span>
      ) : null}
      {article.title ? (
        <h3 className="m-0 mb-3 font-serif text-[28px] font-normal italic leading-[1.12] text-ink transition-colors group-hover:text-olive">
          {plainHeadline(article.title)}
        </h3>
      ) : null}
      {article.excerpt ? (
        <p className="m-0 mb-4 text-[14px] leading-[1.65] text-muted">
          {article.excerpt}
        </p>
      ) : null}
      {read.length ? (
        <div className="flex items-center gap-3.5 text-[9px] uppercase tracking-[0.3em] text-muted">
          {read.map((r, i) => (
            <span key={i} className="flex items-center gap-3.5">
              {i > 0 ? (
                <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-gold" />
              ) : null}
              {r}
            </span>
          ))}
        </div>
      ) : null}
    </Link>
  );
}
