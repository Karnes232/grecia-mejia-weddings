import clsx from "clsx";
import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";

type GhostLinkProps = {
  href: string;
  children: ReactNode;
  tone?: "olive" | "ivory";
  className?: string;
};

const TONE_CLASS: Record<NonNullable<GhostLinkProps["tone"]>, string> = {
  olive: "border-olive text-olive hover:bg-olive hover:text-ivory",
  ivory:
    "border-gold-soft text-ivory hover:bg-gold-soft hover:text-olive-dk",
};

export function GhostLink({
  href,
  children,
  tone = "olive",
  className,
}: GhostLinkProps) {
  return (
    <Link
      href={href as never}
      className={clsx(
        "inline-block border px-7 py-3.5 text-[10px] uppercase tracking-wide-eyebrow no-underline transition-colors duration-300",
        TONE_CLASS[tone],
        className,
      )}
    >
      {children}
    </Link>
  );
}
