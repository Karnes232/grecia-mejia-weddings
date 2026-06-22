import { getTranslations } from "next-intl/server";

import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { Link } from "@/i18n/navigation";
import type { ServiceCard } from "@/sanity/queries/service";

type ServiceRelatedServicesProps = {
  services: ServiceCard[];
};

export async function ServiceRelatedServices({
  services,
}: ServiceRelatedServicesProps) {
  const t = await getTranslations("serviceDetail");

  return (
    <section className="bg-ivory px-6 py-[120px] md:px-14">
      <div className="mx-auto max-w-[1400px]">
        <RevealOnScroll className="mb-12 flex items-end justify-between gap-8 border-b border-olive pb-6">
          <h2 className="m-0 font-serif font-light text-[clamp(32px,4.5vw,56px)] leading-[0.98] text-ink">
            {t("relatedServices")}
          </h2>
          <Link
            href="/services"
            className="hidden whitespace-nowrap border-b border-gold pb-1 text-[10px] uppercase tracking-[0.3em] text-olive no-underline sm:inline-block"
          >
            {t("allServices")} →
          </Link>
        </RevealOnScroll>

        <RevealOnScroll className="grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
          {services.map((s, i) =>
            s.slug ? (
              <Link
                key={s.id ?? s.slug ?? i}
                href={{
                  pathname: "/services/[service]",
                  params: { service: s.slug },
                }}
                className="group flex flex-col gap-3 bg-ivory p-8 text-inherit no-underline transition-colors hover:bg-cream"
              >
                {s.number ? (
                  <span className="text-[10px] uppercase tracking-[0.32em] text-gold">
                    № {s.number}
                  </span>
                ) : null}
                <h4 className="m-0 font-serif text-[22px] italic font-normal leading-[1.15] text-ink transition-colors group-hover:text-olive">
                  {s.name}
                </h4>
                {s.summary ? (
                  <p className="m-0 text-[13px] leading-[1.6] text-muted">
                    {s.summary}
                  </p>
                ) : null}
              </Link>
            ) : null,
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
}
