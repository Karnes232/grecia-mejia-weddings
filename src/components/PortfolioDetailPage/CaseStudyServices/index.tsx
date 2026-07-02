import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { Link } from "@/i18n/navigation";
import type { Portfolio } from "@/sanity/queries/portfolio";

type CaseStudyServicesProps = {
  services: NonNullable<Portfolio["services"]>;
};

export function CaseStudyServices({ services }: CaseStudyServicesProps) {
  const items = services.items ?? [];

  return (
    <section className="bg-ivory px-6 py-[130px] md:px-14">
      <div className="mx-auto max-w-[1400px]">
        <RevealOnScroll className="mb-14 flex flex-col items-start justify-between gap-8 border-b border-olive pb-6 md:flex-row md:items-end">
          <div>
            {services.eyebrow ? (
              <span className="mb-3 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {services.eyebrow}
              </span>
            ) : null}
            {services.headline ? (
              <h2 className="m-0 font-serif font-light text-[clamp(40px,5.5vw,72px)] leading-[0.96] text-ink">
                {renderHeadline(services.headline, "olive")}
              </h2>
            ) : null}
          </div>
          {services.deck ? (
            <p className="max-w-[42ch] font-serif text-[17px] italic leading-[1.55] text-muted">
              {services.deck}
            </p>
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll className="grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Link
              key={i}
              href={
                item.slug
                  ? {
                      pathname: "/services/[service]",
                      params: { service: item.slug },
                    }
                  : "/contact"
              }
              className="group block bg-ivory p-8 text-inherit no-underline transition-colors hover:bg-cream"
            >
              <span className="mb-5 block text-[10px] uppercase tracking-[0.32em] text-gold">
                № {String(i + 1).padStart(2, "0")}
              </span>
              {item.title ? (
                <h4 className="m-0 mb-3 font-serif text-[20px] italic font-normal leading-[1.2] text-ink transition-colors group-hover:text-olive">
                  {item.title}
                </h4>
              ) : null}
              {item.body ? (
                <p className="m-0 text-[13px] leading-[1.6] text-muted">
                  {item.body}
                </p>
              ) : null}
            </Link>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
