import { Fragment } from "react";

import { Link } from "@/i18n/navigation";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({ trail }: { trail: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-rule bg-cream px-6 py-3.5 md:px-14"
    >
      <ol className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-muted">
        {trail.map((c, i) => (
          <Fragment key={i}>
            {i > 0 ? (
              <li aria-hidden className="text-gold">
                /
              </li>
            ) : null}
            <li>
              {c.href ? (
                <Link
                  href={c.href as never}
                  className="text-muted no-underline transition-colors hover:text-olive"
                >
                  {c.label}
                </Link>
              ) : (
                <span className="text-ink">{c.label}</span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
