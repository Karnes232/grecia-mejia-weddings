import type { ComponentProps } from "react";

import { Link } from "@/i18n/navigation";

type LinkItem = { label?: string; href?: ComponentProps<typeof Link>["href"] };

type RelatedSidebarProps = {
  groups: Array<{ heading: string; items?: LinkItem[] }>;
};

const LINK_CLASS =
  "flex items-baseline justify-between border-b border-transparent py-1.5 font-serif text-[17px] italic text-ink no-underline transition-colors hover:border-gold hover:text-olive";

export function RelatedSidebar({ groups }: RelatedSidebarProps) {
  return (
    <aside className="border border-rule bg-cream p-8 lg:sticky lg:top-[120px] lg:self-start">
      {groups.map((group) => (
        <div key={group.heading} className="mt-8 first:mt-0">
          <h4 className="mb-4 font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
            {group.heading}
          </h4>
          <ul className="grid list-none gap-2 p-0">
            {(group.items ?? []).map((item, i) => (
              <li key={i}>
                {item.href ? (
                  <Link href={item.href} className={LINK_CLASS}>
                    {item.label}
                    <span aria-hidden className="text-[14px] text-gold">
                      →
                    </span>
                  </Link>
                ) : (
                  <span className={LINK_CLASS}>
                    {item.label}
                    <span aria-hidden className="text-[14px] text-gold">
                      →
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
