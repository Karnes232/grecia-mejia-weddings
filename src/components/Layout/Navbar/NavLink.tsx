"use client";

import clsx from "clsx";

import { Link, usePathname } from "@/i18n/navigation";

type NavLinkProps = {
  href: string;
  /** Classes applied always. */
  className?: string;
  /** Classes for the current section (pathname equals href or lives under it). */
  activeClassName?: string;
  /** Classes for every other link — keep color/border here so they never fight
   *  the active set (two same-property utilities resolve by stylesheet order,
   *  not class order). */
  inactiveClassName?: string;
  children: React.ReactNode;
};

/**
 * Locale-aware nav link that derives its active state from the current
 * pathname. `usePathname` returns the internal (locale-agnostic) path, so a
 * CMS href like `/destinations` matches `/es/destinos/...` too — and any link
 * an editor adds in Studio highlights without extra fields.
 */
export function NavLink({
  href,
  className,
  activeClassName,
  inactiveClassName,
  children,
}: NavLinkProps) {
  const pathname = usePathname();
  const active =
    href.startsWith("/") &&
    (href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href as never}
      className={clsx(className, active ? activeClassName : inactiveClassName)}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
