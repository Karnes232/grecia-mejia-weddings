import type { ReactNode } from "react";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";

type SectionHeadProps = {
  eyebrow?: string;
  headline?: string;
  /** Right-hand column — italic deck/intro text or any node. */
  aside?: ReactNode;
  tone?: "light" | "dark";
  /** When false the head is a single column (no right aside slot). */
  split?: boolean;
  className?: string;
};

/** Recurring venue-detail section head: eyebrow + serif headline + optional aside. */
export function SectionHead({
  eyebrow,
  headline,
  aside,
  tone = "light",
  split = true,
  className,
}: SectionHeadProps) {
  const dark = tone === "dark";

  return (
    <RevealOnScroll
      as="div"
      className={`mx-auto mb-14 max-w-[1400px] gap-8 border-b pb-6 ${
        dark ? "border-[rgba(212,205,184,0.3)]" : "border-olive"
      } ${
        split
          ? "grid grid-cols-1 items-end lg:grid-cols-[1.4fr_1fr] lg:gap-12"
          : ""
      } ${className ?? ""}`}
    >
      <div>
        {eyebrow ? (
          <span
            className={`mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow ${
              dark ? "text-cine-sage" : "text-muted"
            }`}
          >
            {eyebrow}
          </span>
        ) : null}
        {headline ? (
          <h2
            className={`m-0 font-serif font-light text-[clamp(40px,6vw,78px)] leading-[0.96] ${
              dark ? "text-ivory" : "text-ink"
            }`}
          >
            {renderHeadline(headline, dark ? "gold" : "olive")}
          </h2>
        ) : null}
      </div>
      {split ? (aside ?? null) : null}
    </RevealOnScroll>
  );
}

export function SectionDeck({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`m-0 max-w-[42ch] font-serif italic text-[18px] leading-[1.55] ${
        tone === "dark" ? "text-cine-sage" : "text-[#3d3a30]"
      }`}
    >
      {children}
    </p>
  );
}
