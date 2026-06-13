import type { LegalPage } from "@/sanity/queries/legal";

type LegalHeroProps = {
  hero: NonNullable<LegalPage["hero"]>;
  meta?: LegalPage["meta"];
  labels: { updated: string; effective: string; appliesTo: string };
};

export function LegalHero({ hero, meta, labels }: LegalHeroProps) {
  const metaRows = [
    { label: labels.updated, value: meta?.updated },
    { label: labels.effective, value: meta?.effective },
    { label: labels.appliesTo, value: meta?.appliesTo },
  ].filter((row) => row.value);

  return (
    <section className="border-b border-olive-dk bg-olive px-6 pb-20 pt-24 text-ivory md:px-14">
      <div className="mx-auto max-w-[1300px]">
        {hero.eyebrow ? (
          <span className="mb-6 block text-[10px] uppercase tracking-[0.3em] text-cine-sage">
            {hero.eyebrow}
          </span>
        ) : null}

        <h1 className="m-0 mb-6 font-serif font-light tracking-[-0.012em] text-[clamp(56px,7vw,96px)] leading-[0.96] text-ivory">
          {hero.title}
          {hero.titleItalic ? (
            <span className="italic text-cine-gold"> {hero.titleItalic}</span>
          ) : null}
        </h1>

        {hero.deck ? (
          <p className="m-0 max-w-[60ch] font-serif text-xl italic leading-[1.55] text-cine-sage">
            {hero.deck}
          </p>
        ) : null}

        {metaRows.length ? (
          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-[rgba(212,205,184,0.3)] pt-7">
            {metaRows.map((row) => (
              <div key={row.label}>
                <span className="mb-1.5 block text-[9px] uppercase tracking-[0.36em] text-cine-gold">
                  {row.label}
                </span>
                <span className="font-serif text-[18px] italic text-ivory">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
