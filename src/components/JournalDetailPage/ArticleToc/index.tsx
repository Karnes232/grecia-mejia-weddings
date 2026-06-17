"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import type { TocEntry } from "../_shared/util";

export function ArticleToc({ toc }: { toc: TocEntry[] }) {
  const t = useTranslations("journalDetail");
  const [active, setActive] = useState<string | undefined>(toc[0]?.id);

  useEffect(() => {
    const ids = toc.map((e) => e.id);
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [toc]);

  if (!toc.length) return null;

  return (
    <aside className="sticky top-[104px] hidden self-start pt-14 lg:block">
      <nav>
        <h4 className="mb-[18px] border-b border-gold pb-3.5 text-[10px] uppercase tracking-[0.32em] text-muted">
          {t("inThisArticle")}
        </h4>
        <ol className="m-0 grid list-none gap-0.5 p-0">
          {toc.map((entry, i) => (
            <li key={entry.id}>
              <a
                href={`#${entry.id}`}
                className={clsx(
                  "grid grid-cols-[28px_1fr] items-baseline gap-2 py-2.5 font-serif text-[17px] italic leading-[1.25] no-underline transition-colors",
                  entry.level === 3 && "pl-3",
                  active === entry.id
                    ? "text-olive"
                    : "text-ink hover:text-olive",
                )}
              >
                <span
                  className={clsx(
                    "font-sans text-[11px] not-italic tracking-[0.1em]",
                    active === entry.id ? "text-olive" : "text-gold",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{entry.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div className="mt-7 border border-rule bg-cream p-6">
        <p className="m-0 mb-4 font-serif text-lg italic leading-[1.4] text-olive">
          {t("planningQuestion")}
        </p>
        <Link
          href="/contact"
          className="border-b border-gold pb-[3px] text-[10px] uppercase tracking-[0.3em] text-olive no-underline"
        >
          {t("requestConsultation")} →
        </Link>
      </div>
    </aside>
  );
}
