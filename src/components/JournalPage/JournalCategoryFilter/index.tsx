import clsx from "clsx";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import type { JournalCategoryFacet } from "@/sanity/queries/journal";

type JournalCategoryFilterProps = {
  categories: JournalCategoryFacet[];
  total: number;
  activeCategory?: string | null;
};

const CHIP_BASE =
  "inline-flex items-center gap-[7px] whitespace-nowrap border px-[15px] py-2 text-[10px] uppercase tracking-[0.22em] transition-colors duration-200";

export function JournalCategoryFilter({
  categories,
  total,
  activeCategory,
}: JournalCategoryFilterProps) {
  const t = useTranslations("journalPage");
  const active = activeCategory ?? null;

  return (
    <div className="sticky top-0 z-30 border-y border-rule bg-cream px-6 py-7 md:px-14">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-2.5">
        <span className="mr-2 text-[10px] uppercase tracking-[0.32em] text-muted">
          {t("browse")}
        </span>

        <Link
          href={{ pathname: "/journal" }}
          className={clsx(
            CHIP_BASE,
            active === null
              ? "border-olive bg-olive text-ivory"
              : "border-rule text-ink hover:border-olive hover:text-olive",
          )}
        >
          {t("all")} <span className="text-[9px] opacity-55">{total}</span>
        </Link>

        {categories.map((c) =>
          c.slug ? (
            <Link
              key={c.slug}
              href={{ pathname: "/journal", query: { category: c.slug } }}
              className={clsx(
                CHIP_BASE,
                active === c.slug
                  ? "border-olive bg-olive text-ivory"
                  : "border-rule text-ink hover:border-olive hover:text-olive",
              )}
            >
              {c.title}{" "}
              <span className="text-[9px] opacity-55">{c.count ?? 0}</span>
            </Link>
          ) : null,
        )}
      </div>
    </div>
  );
}
