import { getTranslations } from "next-intl/server";

import type { HomePage } from "@/sanity/queries/home";

import { RevealOnScroll } from "../_shared/RevealOnScroll";
import { renderHeadline } from "../_shared/renderHeadline";

import { CultureCell } from "./CultureCell";

type TraditionsProps = {
  data: NonNullable<HomePage["traditions"]>;
  locale: string;
};

export async function Traditions({ data, locale }: TraditionsProps) {
  const t = await getTranslations({
    locale,
    namespace: "homePage.traditions",
  });
  const discoverLabel = t("discover");

  const cultures = data.cultures ?? [];

  return (
    <section className="bg-olive px-6 py-[140px] text-ivory md:px-14">
      <div className="mx-auto max-w-[1400px]">
        <RevealOnScroll className="mb-16 grid grid-cols-1 items-end gap-12 border-b border-[rgba(212,205,184,0.3)] pb-8 md:grid-cols-2 md:gap-20">
          <div>
            {data.eyebrow ? (
              <span className="mb-5 block text-[10px] uppercase tracking-wide-eyebrow text-cine-sage">
                {data.eyebrow}
              </span>
            ) : null}
            {data.headline ? (
              <h2 className="m-0 font-serif font-light text-[clamp(48px,7vw,84px)] leading-[0.98] tracking-[-0.005em] text-ivory">
                {renderHeadline(data.headline, "gold")}
              </h2>
            ) : null}
          </div>
          {data.quote ? (
            <p className="m-0 max-w-[36ch] font-serif italic text-[clamp(17px,1.6vw,20px)] leading-[1.5] text-cine-sage">
              {data.quote}
            </p>
          ) : null}
        </RevealOnScroll>

        {cultures.length > 0 ? (
          <RevealOnScroll className="grid grid-cols-1 gap-px border border-[rgba(212,205,184,0.25)] bg-[rgba(212,205,184,0.25)] sm:grid-cols-2 lg:grid-cols-4">
            {cultures.map((c, i) => (
              <CultureCell
                key={c.slug ?? c.name ?? i}
                culture={c}
                discoverLabel={discoverLabel}
              />
            ))}
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
