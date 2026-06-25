"use client";

import clsx from "clsx";
import { Fragment, type ReactNode, useState } from "react";

import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";

type Item = { key: string; tags: string[]; node: ReactNode };

type FilterableGridProps = {
  items: Item[];
  facets: { tag: string; count: number }[];
  filterLabel: string;
  allLabel: string;
  total: number;
};

const CHIP_BASE =
  "cursor-pointer rounded-full border px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] transition-colors";

export function FilterableGrid({
  items,
  facets,
  filterLabel,
  allLabel,
  total,
}: FilterableGridProps) {
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? items.filter((i) => i.tags.includes(active)) : items;

  return (
    <>
      <div className="mb-12 flex flex-wrap items-center gap-3">
        <span className="text-[10px] uppercase tracking-wide-eyebrow text-muted">
          {filterLabel}
        </span>

        <button
          type="button"
          onClick={() => setActive(null)}
          aria-pressed={active === null}
          className={clsx(
            CHIP_BASE,
            active === null
              ? "border-olive bg-olive text-ivory"
              : "border-rule text-ink hover:border-olive",
          )}
        >
          {allLabel} <span className="ml-1 opacity-70">{total}</span>
        </button>

        {facets.map(({ tag, count }) => {
          const isActive = active === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActive(isActive ? null : tag)}
              aria-pressed={isActive}
              className={clsx(
                CHIP_BASE,
                isActive
                  ? "border-olive bg-olive text-ivory"
                  : "border-rule text-ink hover:border-olive",
              )}
            >
              {tag}{" "}
              <span className={clsx("ml-1", isActive ? "opacity-70" : "text-muted")}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <RevealOnScroll
        as="div"
        className="grid grid-cols-1 gap-6 md:grid-cols-6 lg:grid-cols-12"
      >
        {shown.map((i) => (
          <Fragment key={i.key}>{i.node}</Fragment>
        ))}
      </RevealOnScroll>
    </>
  );
}
