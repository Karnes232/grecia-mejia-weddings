import type { AboutPage } from "@/sanity/queries/about";

type AwardsListProps = {
  awards?: NonNullable<AboutPage["press"]>["awards"];
};

export function AwardsList({ awards }: AwardsListProps) {
  const items = awards?.items ?? [];

  if (items.length === 0) return null;

  return (
    <div>
      {awards?.heading ? (
        <h4 className="m-0 mb-6 border-b border-gold pb-3.5 font-serif text-[28px] font-normal italic leading-none text-ink">
          {awards.heading}
        </h4>
      ) : null}
      <ul className="m-0 grid list-none gap-0 p-0">
        {items.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-[60px_1fr_70px] items-baseline gap-6 border-b border-rule py-[18px] last:border-b-0"
          >
            {item.year ? (
              <span className="font-serif text-[16px] italic text-gold">
                {item.year}
              </span>
            ) : (
              <span />
            )}
            <span className="font-serif text-[17px] italic leading-[1.3] text-ink">
              {item.title}
              {item.sub ? (
                <small className="mt-1 block font-sans text-[10px] not-italic uppercase tracking-eyebrow text-muted">
                  {item.sub}
                </small>
              ) : null}
            </span>
            {item.publication ? (
              <span className="text-right text-[9px] uppercase tracking-[0.3em] leading-[1.3] text-muted">
                {item.publication}
              </span>
            ) : (
              <span />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
