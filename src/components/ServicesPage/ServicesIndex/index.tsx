import { getTranslations } from "next-intl/server";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { Link } from "@/i18n/navigation";
import type { ServicePage } from "@/sanity/queries/service";

type ServicesIndexProps = {
  index: NonNullable<ServicePage["index"]>;
};

export async function ServicesIndex({ index }: ServicesIndexProps) {
  const t = await getTranslations("servicesHub");
  const services = index.services ?? [];

  return (
    <section className="bg-cream px-6 py-[120px] md:px-14">
      <div className="mx-auto max-w-[1400px]">
        {index.eyebrow || index.headline ? (
          <RevealOnScroll className="mb-12 border-b border-olive pb-6">
            {index.eyebrow ? (
              <span className="mb-3 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {index.eyebrow}
              </span>
            ) : null}
            {index.headline ? (
              <h2 className="m-0 font-serif font-light text-[clamp(40px,6vw,72px)] leading-[0.96] text-ink">
                {renderHeadline(index.headline, "olive")}
              </h2>
            ) : null}
          </RevealOnScroll>
        ) : null}

        <RevealOnScroll className="grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
          {services.map((s, i) =>
            s.slug ? (
              <Link
                key={s.id ?? s.slug ?? i}
                href={{
                  pathname: "/services/[service]",
                  params: { service: s.slug },
                }}
                className="group flex flex-col gap-3 bg-cream p-10 text-inherit no-underline transition-colors hover:bg-ivory"
              >
                {s.number ? (
                  <span className="text-[10px] uppercase tracking-[0.32em] text-gold">
                    № {s.number}
                  </span>
                ) : null}
                <h3 className="m-0 font-serif text-[clamp(26px,2.6vw,34px)] font-normal italic leading-[1.1] text-ink transition-colors group-hover:text-olive">
                  {s.name}
                </h3>
                {s.summary ? (
                  <p className="m-0 max-w-[46ch] text-[14px] leading-[1.6] text-muted">
                    {s.summary}
                  </p>
                ) : null}
                <span className="mt-2 text-[10px] uppercase tracking-[0.3em] text-olive">
                  {t("explore")} →
                </span>
              </Link>
            ) : null,
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
}
