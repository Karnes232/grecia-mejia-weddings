import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export type ArticleTag = { label: string; categorySlug?: string };

export function ArticleTags({ tags }: { tags: ArticleTag[] }) {
  const t = useTranslations("journalDetail");
  if (!tags.length) return null;

  const cls =
    "border border-rule px-3.5 py-[7px] text-[10px] uppercase tracking-[0.18em] text-olive no-underline transition-colors hover:border-olive hover:bg-olive hover:text-ivory";

  return (
    <div className="mt-12 flex flex-wrap items-center gap-2.5">
      <span className="mr-1.5 text-[9px] uppercase tracking-[0.32em] text-muted">
        {t("filedUnder")}
      </span>
      {tags.map((tag, i) =>
        tag.categorySlug ? (
          <Link
            key={i}
            href={{ pathname: "/journal", query: { category: tag.categorySlug } }}
            className={cls}
          >
            {tag.label}
          </Link>
        ) : (
          <span key={i} className={cls}>
            {tag.label}
          </span>
        ),
      )}
    </div>
  );
}
