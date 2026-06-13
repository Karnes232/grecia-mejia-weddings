import type { ReactNode } from "react";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";

type SectionHeadProps = {
  eyebrow?: string;
  headline?: string;
  /** Right-hand column — deck text by default, or any node (e.g. a CTA). */
  aside?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/**
 * The recurring culture-detail section head: eyebrow + large serif headline
 * on the left, an italic deck (or CTA) on the right, hairline rule below.
 * Mirrors the design's `ed-cul-*-head` blocks.
 */
export function SectionHead({
  eyebrow,
  headline,
  aside,
  tone = "light",
  className,
}: SectionHeadProps) {
  const dark = tone === "dark";

  return (
    <RevealOnScroll
      className={`mb-14 grid grid-cols-1 items-end gap-12 pb-6 md:grid-cols-[1.4fr_1fr] ${
        dark
          ? "border-b border-[rgba(212,205,184,0.3)]"
          : "border-b border-olive"
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
            className={`m-0 font-serif font-light text-[clamp(44px,7vw,82px)] leading-[0.96] ${
              dark ? "text-ivory" : "text-ink"
            }`}
          >
            {renderHeadline(headline, dark ? "gold" : "olive")}
          </h2>
        ) : null}
      </div>
      {aside ?? null}
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
      className={`m-0 max-w-[40ch] font-serif italic text-[clamp(16px,1.6vw,18px)] leading-[1.55] ${
        tone === "dark" ? "text-cine-sage" : "text-[#3d3a30]"
      }`}
    >
      {children}
    </p>
  );
}
