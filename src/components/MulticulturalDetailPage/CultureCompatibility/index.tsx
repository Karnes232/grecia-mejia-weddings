import { CTAButton } from "@/components/_shared/CTAButton";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Culture } from "@/sanity/queries/culture";

import { SectionHead } from "../SectionHead";
import { CompatibilityCard } from "./CompatibilityCard";

type CultureCompatibilityProps = {
  compatibility: NonNullable<Culture["compatibility"]>;
};

export function CultureCompatibility({
  compatibility,
}: CultureCompatibilityProps) {
  const cards = compatibility.cards ?? [];

  return (
    <section className="bg-cream px-6 py-[140px] md:px-14">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow={compatibility.eyebrow}
          headline={compatibility.headline}
          aside={
            compatibility.viewAllLabel && compatibility.viewAllHref ? (
              <CTAButton
                href={compatibility.viewAllHref}
                className="shrink-0 justify-self-start md:justify-self-end"
              >
                {compatibility.viewAllLabel}
              </CTAButton>
            ) : undefined
          }
        />

        {cards.length ? (
          <RevealOnScroll className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, i) => (
              <CompatibilityCard key={i} card={card} />
            ))}
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
