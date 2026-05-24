import { Fragment } from "react";

import type { Destination } from "@/sanity/queries/destination";

type GettingThereProps = {
  data: NonNullable<Destination["logistics"]>["gettingThere"];
};

export function GettingThere({ data }: GettingThereProps) {
  if (!data) return null;
  const items = data.items ?? [];

  return (
    <div>
      {data.headline ? (
        <h4 className="mb-5 border-b border-gold pb-3.5 font-serif text-[32px] font-normal italic text-olive">
          {data.headline}
        </h4>
      ) : null}
      {items.length ? (
        <dl className="grid grid-cols-[160px_1fr] gap-x-6 gap-y-3.5">
          {items.map((item, i) => (
            <Fragment key={i}>
              <dt className="self-center text-[10px] uppercase tracking-[0.28em] text-muted">
                {item.label}
              </dt>
              <dd className="m-0 font-serif text-[16px] italic leading-[1.4] text-ink">
                {item.value}
              </dd>
            </Fragment>
          ))}
        </dl>
      ) : null}
      {data.footnote ? (
        <p className="mt-6 font-serif text-[18px] italic text-olive">
          {data.footnote}
        </p>
      ) : null}
    </div>
  );
}
