import Image from "next/image";
import { useTranslations } from "next-intl";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { urlFor } from "@/sanity/lib/image";
import type { ArticleDetail } from "@/sanity/queries/journal";

import { formatMonthYear } from "../_shared/util";

type ArticleHeroProps = {
  article: ArticleDetail;
  locale: string;
};

export function ArticleHero({ article, locale }: ArticleHeroProps) {
  const t = useTranslations("journalDetail");
  const imageUrl = article.heroImage?.asset
    ? urlFor(article.heroImage).width(2400).fit("max").auto("format").url()
    : null;

  const category = [article.category?.title, article.kicker]
    .filter(Boolean)
    .join(" · ");
  const date = formatMonthYear(article.publishedAt, locale);
  const meta = [
    article.author?.name ? `${t("by")} ${article.author.name}` : null,
    article.readMinutes ? t("minRead", { min: article.readMinutes }) : null,
    date ? t("updated", { date }) : null,
  ].filter(Boolean);

  return (
    <section className="relative isolate flex h-[72vh] min-h-[600px] max-h-[820px] items-center justify-center overflow-hidden bg-cine-bg">
      {imageUrl ? (
        <div className="absolute -inset-[4%] z-0">
          <div className="absolute inset-0 motion-safe:[animation:ken-burns_30s_ease-in-out_infinite_alternate]">
            <Image
              src={imageUrl}
              alt={article.heroImage?.alt ?? article.title ?? ""}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ filter: "saturate(0.82) contrast(1.04) brightness(0.6)" }}
            />
          </div>
        </div>
      ) : null}

      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,15,10,0.55) 0%, transparent 30%, transparent 50%, rgba(13,15,10,0.82) 100%)",
        }}
      />

      <div className="relative z-[2] mx-auto flex max-w-[1000px] flex-col items-center px-[7vw] text-center text-ivory">
        {category ? (
          <div className="mb-7 flex items-center justify-center gap-[14px] text-[10px] uppercase tracking-[0.36em] text-gold-soft">
            <span aria-hidden className="h-px w-9 bg-gold-soft" />
            <span>{category}</span>
            <span aria-hidden className="h-px w-9 bg-gold-soft" />
          </div>
        ) : null}

        {article.title ? (
          <h1 className="m-0 mb-8 max-w-[18ch] font-serif text-[clamp(48px,6.2vw,84px)] font-light leading-[1.02] tracking-[-0.012em] text-ivory">
            {renderHeadline(article.title, "gold")}
          </h1>
        ) : null}

        {meta.length ? (
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.3em] text-[#d4cdb8]">
            {meta.map((m, i) => (
              <span key={i} className="flex items-center gap-x-5">
                {i > 0 ? (
                  <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-gold-soft" />
                ) : null}
                {m}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
