import type { Venue } from "@/sanity/queries/venue";

type VenueFactsProps = {
  facts: NonNullable<Venue["facts"]>;
};

export function VenueFacts({ facts }: VenueFactsProps) {
  if (!facts.length) return null;

  return (
    <section className="border-b border-rule bg-ivory px-6 py-12 md:px-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-y divide-rule sm:grid-cols-3 lg:grid-cols-6">
        {facts.map((fact, i) => (
          <div
            key={i}
            className="px-6 py-3 text-left lg:first:pl-0 lg:last:pr-0"
          >
            {fact.label ? (
              <span className="mb-2 block font-sans text-[9px] uppercase tracking-[0.36em] text-muted">
                {fact.label}
              </span>
            ) : null}
            {fact.value ? (
              <span className="block font-serif text-[22px] italic leading-[1.1] text-ink">
                {fact.value}
                {fact.sub ? (
                  <small className="mt-1 block font-sans text-[11px] uppercase not-italic tracking-[0.18em] text-muted">
                    {fact.sub}
                  </small>
                ) : null}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
