import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Portfolio } from "@/sanity/queries/portfolio";

type CaseStudyLogisticsProps = {
  logistics: NonNullable<Portfolio["logistics"]>;
};

export function CaseStudyLogistics({ logistics }: CaseStudyLogisticsProps) {
  const blocks = logistics.blocks ?? [];

  return (
    <section className="bg-cream px-6 py-[130px] md:px-14">
      <div className="mx-auto max-w-[1400px]">
        <RevealOnScroll className="mb-14 flex flex-col items-start justify-between gap-8 border-b border-olive pb-6 md:flex-row md:items-end">
          <div>
            {logistics.eyebrow ? (
              <span className="mb-3 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {logistics.eyebrow}
              </span>
            ) : null}
            {logistics.headline ? (
              <h2 className="m-0 font-serif font-light text-[clamp(40px,5.5vw,72px)] leading-[0.96] text-ink">
                {renderHeadline(logistics.headline, "olive")}
              </h2>
            ) : null}
          </div>
          {logistics.deck ? (
            <p className="max-w-[42ch] font-serif text-[17px] italic leading-[1.55] text-muted">
              {logistics.deck}
            </p>
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {blocks.map((block, i) => (
            <div key={i} className="border-t border-rule pt-7">
              {block.title ? (
                <h4 className="m-0 mb-4 font-serif text-[22px] italic font-normal text-ink">
                  {block.title}
                </h4>
              ) : null}
              {block.body ? (
                <p className="m-0 mb-6 text-[15px] leading-[1.7] text-muted">
                  {block.body}
                </p>
              ) : null}
              {block.rows?.length ? (
                <dl className="m-0 flex flex-col gap-2 border-t border-rule pt-4">
                  {block.rows.map((row, j) => (
                    <div key={j} className="flex justify-between gap-4">
                      <dt className="text-[10px] uppercase tracking-wide-eyebrow text-muted">
                        {row.label}
                      </dt>
                      <dd className="m-0 text-right text-[13px] text-ink">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
