"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";

import { stripAccentTokens } from "@/components/_shared/stripAccentTokens";
import type { Region } from "@/sanity/queries/destinations";

type RegionFilterProps = {
  regions: Region[];
};

const ALL = "all";

export function RegionFilter({ regions }: RegionFilterProps) {
  const t = useTranslations("destinationsPage.filter");
  const [active, setActive] = useState<string>(ALL);
  const barRef = useRef<HTMLDivElement | null>(null);

  const chips = useMemo(() => {
    const items = regions
      .filter((r): r is Region & { slug: string } => Boolean(r.slug))
      .map((r) => ({
        slug: r.slug,
        label: r.name ? stripAccentTokens(r.name) : r.slug,
        count: r.destinations?.length ?? 0,
      }));
    const total = items.reduce((sum, r) => sum + r.count, 0);
    return { items, total };
  }, [regions]);

  useEffect(() => {
    const barHeight = barRef.current?.offsetHeight ?? 64;

    const observers: IntersectionObserver[] = [];
    chips.items.forEach(({ slug }) => {
      const el = document.getElementById(slug);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActive(slug);
            } else if (entry.boundingClientRect.top > barHeight) {
              setActive((prev) => (prev === slug ? ALL : prev));
            }
          }
        },
        {
          rootMargin: `-${barHeight}px 0px -60% 0px`,
          threshold: 0,
        },
      );
      io.observe(el);
      observers.push(io);
    });

    return () => observers.forEach((io) => io.disconnect());
  }, [chips.items]);

  const scrollTo = (slug: string) => {
    setActive(slug);
    const barBottom = barRef.current?.getBoundingClientRect().bottom ?? 0;
    const targetId = slug === ALL ? "destinations-atlas" : slug;
    const el = document.getElementById(targetId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - barBottom - 8;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div
      ref={barRef}
      className="sticky top-0 z-30 border-y border-rule bg-cream px-4 py-3 md:px-14 md:py-5"
    >
      <div className="mx-auto flex max-w-[1400px] flex-nowrap items-center gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] xl:flex-wrap md:gap-3.5 xl:overflow-visible [&::-webkit-scrollbar]:hidden">
        <span className="mr-2 hidden text-[10px] uppercase tracking-wide-eyebrow text-muted md:inline-block">
          {t("label")}
        </span>
        <Chip
          isActive={active === ALL}
          label={t("all")}
          count={chips.total}
          onClick={() => scrollTo(ALL)}
        />
        {chips.items.map((c) => (
          <Chip
            key={c.slug}
            isActive={active === c.slug}
            label={c.label}
            count={c.count}
            onClick={() => scrollTo(c.slug)}
          />
        ))}
      </div>
    </div>
  );
}

type ChipProps = {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
};

function Chip({ label, count, isActive, onClick }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "inline-flex shrink-0 items-center gap-2 whitespace-nowrap border border-olive px-3 py-2 text-[10px] uppercase tracking-[0.3em] transition-colors duration-[250ms] md:px-[18px] md:py-2.5 md:text-[11px]",
        isActive
          ? "bg-olive text-ivory"
          : "bg-transparent text-olive hover:bg-olive hover:text-ivory",
      )}
    >
      {label}
      <span className="font-serif text-[13px] italic normal-case tracking-normal opacity-70 md:text-[14px]">
        {count}
      </span>
    </button>
  );
}
