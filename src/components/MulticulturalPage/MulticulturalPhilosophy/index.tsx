import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { MulticulturalPage } from "@/sanity/queries/multicultural";

import { PhilosophyBody } from "./PhilosophyBody";
import { PhilosophySide } from "./PhilosophySide";

type MulticulturalPhilosophyProps = {
  philosophy: NonNullable<MulticulturalPage["philosophy"]>;
};

export function MulticulturalPhilosophy({
  philosophy,
}: MulticulturalPhilosophyProps) {
  return (
    <section className="border-t border-rule bg-ivory px-6 py-[120px] md:px-14 md:pb-[140px]">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-20 md:grid-cols-[280px_1fr]">
        <PhilosophySide label={philosophy.sideLabel} note={philosophy.sideNote} />

        <RevealOnScroll className="max-w-[62ch]">
          <PhilosophyBody philosophy={philosophy} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
