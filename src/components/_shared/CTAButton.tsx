import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";

import { Link } from "@/i18n/navigation";

type CTAButtonProps = {
  // Accept a free-text string (editor-authored hrefs) or an object-form,
  // locale-aware Href (typed routes).
  href: string | ComponentProps<typeof Link>["href"];
  children: ReactNode;
  variant?: "ghost" | "primary";
  tone?: "olive" | "ivory";
  className?: string;
};

const GHOST_TONE_CLASS: Record<NonNullable<CTAButtonProps["tone"]>, string> = {
  olive: "border-olive text-olive hover:bg-olive hover:text-ivory",
  ivory: "border-gold-soft text-ivory hover:bg-gold-soft hover:text-olive-dk",
};

export function CTAButton({
  href,
  children,
  variant = "ghost",
  tone = "olive",
  className,
}: CTAButtonProps) {
  return (
    <Link
      // Cast covers the string branch (typed routes don't accept arbitrary
      // strings); object-form hrefs pass through localized.
      href={href as never}
      className={clsx(
        "inline-block border px-7 py-3.5 text-[10px] uppercase tracking-wide-eyebrow no-underline transition-colors duration-300",
        variant === "primary"
          ? "border-olive bg-olive text-ivory hover:border-olive-dk hover:bg-olive-dk"
          : GHOST_TONE_CLASS[tone],
        className,
      )}
    >
      {children}
    </Link>
  );
}
