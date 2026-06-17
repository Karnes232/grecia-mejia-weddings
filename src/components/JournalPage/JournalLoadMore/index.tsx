import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

type JournalLoadMoreProps = {
  shown: number;
  total: number;
  nextPage: number;
  category?: string | null;
};

export function JournalLoadMore({
  shown,
  total,
  nextPage,
  category,
}: JournalLoadMoreProps) {
  const t = useTranslations("journalPage");
  const remaining = total - shown;
  if (remaining <= 0) return null;

  const query: Record<string, string> = { page: String(nextPage) };
  if (category) query.category = category;

  return (
    <div className="mx-auto mt-[72px] max-w-[1400px] text-center">
      <Link
        href={{ pathname: "/journal", query }}
        scroll={false}
        className="inline-block border border-olive px-7 py-3.5 text-[10px] uppercase tracking-wide-eyebrow text-olive no-underline transition-colors duration-300 hover:bg-olive hover:text-ivory"
      >
        {t("loadMore")} · {t("remaining", { count: remaining })} →
      </Link>
    </div>
  );
}
