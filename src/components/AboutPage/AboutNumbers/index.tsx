import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { AboutPage } from "@/sanity/queries/about";

type AboutNumbersProps = {
  numbers: NonNullable<AboutPage["numbers"]>;
};

export function AboutNumbers({ numbers }: AboutNumbersProps) {
  const stats = numbers.stats ?? [];

  if (stats.length === 0) return null;

  return (
    <section className="border-y border-rule bg-ivory px-6 py-[100px] md:px-14">
      <RevealOnScroll className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-left lg:border-r lg:border-rule lg:px-8 lg:py-6 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
          >
            {stat.value ? (
              <span className="mb-2.5 block font-serif font-light italic text-[clamp(48px,6vw,72px)] leading-[0.95] text-olive">
                {stat.value}
              </span>
            ) : null}
            {stat.label ? (
              <span className="block max-w-[22ch] text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {stat.label}
              </span>
            ) : null}
          </div>
        ))}
      </RevealOnScroll>
    </section>
  );
}
