import { DiamondDivider } from "@/components/_shared/DiamondDivider";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";

type PhilosophySideProps = {
  label?: string;
  note?: string;
};

export function PhilosophySide({ label, note }: PhilosophySideProps) {
  return (
    <RevealOnScroll className="pt-3.5 md:sticky md:top-[140px]">
      {label ? (
        <span className="mb-5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
          {label}
        </span>
      ) : null}
      <DiamondDivider width={80} className="text-gold" />
      {note ? (
        <p className="mt-6 max-w-[28ch] text-[13px] leading-[1.7] text-muted">
          {note}
        </p>
      ) : null}
    </RevealOnScroll>
  );
}
