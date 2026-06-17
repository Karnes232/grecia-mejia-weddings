import { useTranslations } from "next-intl";

import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import type {
  JournalArticleCard,
  JournalPage,
} from "@/sanity/queries/journal";

import { ArticleCard } from "./ArticleCard";

type JournalGridProps = {
  grid?: JournalPage["grid"];
  articles: JournalArticleCard[];
  shown: number;
  total: number;
  locale: string;
};

export function JournalGrid({
  grid,
  articles,
  shown,
  total,
  locale,
}: JournalGridProps) {
  const t = useTranslations("journalPage");

  return (
    <section className="bg-ivory px-6 py-[100px] md:px-14">
      <div className="mx-auto mb-12 flex max-w-[1400px] items-end justify-between gap-12 border-b border-olive pb-6">
        <div>
          {grid?.eyebrow ? (
            <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
              {grid.eyebrow}
            </span>
          ) : null}
          {grid?.headline ? (
            <h2 className="m-0 font-serif text-[clamp(40px,5vw,64px)] font-light leading-[0.96] text-ink">
              {renderHeadline(grid.headline, "olive")}
            </h2>
          ) : null}
        </div>
        <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted sm:block">
          {t("showing", { shown, total })}
        </span>
      </div>

      <RevealOnScroll className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} locale={locale} />
        ))}
      </RevealOnScroll>
    </section>
  );
}
