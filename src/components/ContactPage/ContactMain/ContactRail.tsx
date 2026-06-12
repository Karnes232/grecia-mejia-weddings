import { Fragment } from "react";

import type { ContactPage, ContactRailCard } from "@/sanity/queries/contact";

type ContactRailProps = {
  rail?: ContactPage["rail"];
};

/** Render a string that may contain Shift+Enter line breaks. */
function withBreaks(value: string) {
  return value.split("\n").map((line, i, arr) => (
    <Fragment key={i}>
      {line}
      {i < arr.length - 1 ? <br /> : null}
    </Fragment>
  ));
}

function RailCard({ card, isFirst }: { card: ContactRailCard; isFirst: boolean }) {
  const borderTop = isFirst ? "" : "border-t-0";

  if (card.variant === "feature") {
    return (
      <div className={`border border-olive bg-olive p-10 text-ivory ${borderTop}`}>
        {card.script ? (
          <span className="mb-3.5 block font-script text-[40px] leading-none text-cine-gold">
            {card.script}
          </span>
        ) : null}
        {card.body ? (
          <p className="m-0 font-serif text-lg italic leading-[1.5] text-cine-sage">
            {card.body}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className={`border border-rule bg-cream p-10 ${borderTop}`}>
      {card.heading ? (
        <h3 className="m-0 mb-6 font-serif text-[28px] italic font-normal text-ink">
          {card.heading}
        </h3>
      ) : null}

      {card.variant === "note" && card.body ? (
        <div className="font-serif text-[19px] italic leading-[1.3] text-ink">
          {withBreaks(card.body)}
        </div>
      ) : null}

      {card.rows?.length
        ? card.rows.map((row, i) => (
            <div key={i} className="mb-[22px] last:mb-0">
              {row.label ? (
                <span className="mb-1.5 block text-[9px] uppercase tracking-[0.32em] text-muted">
                  {row.label}
                </span>
              ) : null}
              {row.value ? (
                <div className="font-serif text-[19px] italic leading-[1.3] text-ink">
                  {row.href ? (
                    <a
                      href={row.href}
                      className="border-b border-gold pb-0.5 text-inherit no-underline transition-colors hover:text-olive"
                    >
                      {withBreaks(row.value)}
                    </a>
                  ) : (
                    withBreaks(row.value)
                  )}
                </div>
              ) : null}
            </div>
          ))
        : null}
    </div>
  );
}

export function ContactRail({ rail }: ContactRailProps) {
  const cards = rail?.cards ?? [];
  if (!cards.length) return null;

  return (
    <aside className="grid gap-0 lg:sticky lg:top-[120px]">
      {cards.map((card, i) => (
        <RailCard key={i} card={card} isFirst={i === 0} />
      ))}
    </aside>
  );
}
