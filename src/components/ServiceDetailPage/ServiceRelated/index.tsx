import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { plainHeadline, renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import type { Service } from "@/sanity/queries/service";

type ServiceRelatedProps = {
  related?: Service["related"];
};

const ASIDE_LINK =
  "flex items-center justify-between gap-4 border-b border-rule py-3 text-[13px] text-ink no-underline transition-colors hover:text-olive";

export async function ServiceRelated({ related }: ServiceRelatedProps) {
  const t = await getTranslations("serviceDetail");
  const articles = related?.articles ?? [];
  const destinations = related?.destinations ?? [];
  const cultures = related?.cultures ?? [];

  if (!articles.length && !destinations.length && !cultures.length) return null;

  return (
    <section className="bg-cream px-6 py-[120px] md:px-14">
      <RevealOnScroll className="mx-auto mb-12 max-w-[1400px] border-b border-olive pb-6">
        <span className="mb-3 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
          {t("continueReading")}
        </span>
        <h2 className="m-0 font-serif font-light text-[clamp(40px,6vw,72px)] leading-[0.96] text-ink">
          {renderHeadline(t("ecosystemHeadline"), "olive")}
        </h2>
      </RevealOnScroll>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-[2fr_1fr]">
        <div>
          {articles.map((a, i) => {
            const url = a.image?.asset
              ? urlFor(a.image).width(600).height(450).fit("crop").auto("format").url()
              : null;
            return a.slug ? (
              <Link
                key={a.id ?? i}
                href={{ pathname: "/journal/[slug]", params: { slug: a.slug } }}
                className="grid grid-cols-[120px_1fr] gap-6 border-b border-rule py-6 text-inherit no-underline sm:grid-cols-[200px_1fr] sm:gap-8"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                  {url ? (
                    <Image
                      src={url}
                      alt={a.image?.alt ?? a.title ?? ""}
                      fill
                      sizes="(min-width:640px) 200px, 120px"
                      className="object-cover"
                    />
                  ) : null}
                </div>
                <div>
                  {a.category?.title ? (
                    <span className="mb-1.5 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
                      {a.category.title}
                    </span>
                  ) : null}
                  {a.title ? (
                    <h4 className="m-0 mb-2 font-serif text-[24px] font-normal italic leading-[1.15] text-ink">
                      {plainHeadline(a.title)}
                    </h4>
                  ) : null}
                  {a.excerpt ? (
                    <p className="m-0 text-[13px] leading-[1.5] text-muted">
                      {a.excerpt}
                    </p>
                  ) : null}
                </div>
              </Link>
            ) : null;
          })}
        </div>

        <aside>
          {destinations.length ? (
            <>
              <h4 className="m-0 mb-3 text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {t("relatedDestinations")}
              </h4>
              <ul className="m-0 mb-10 list-none p-0">
                {destinations.map((d) =>
                  d.slug ? (
                    <li key={d.slug}>
                      <Link
                        href={{
                          pathname: "/destinations/[destination]",
                          params: { destination: d.slug },
                        }}
                        className={ASIDE_LINK}
                      >
                        {d.name} <span className="text-gold">→</span>
                      </Link>
                    </li>
                  ) : null,
                )}
              </ul>
            </>
          ) : null}

          {cultures.length ? (
            <>
              <h4 className="m-0 mb-3 text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {t("relatedCultures")}
              </h4>
              <ul className="m-0 list-none p-0">
                {cultures.map((c) =>
                  c.slug ? (
                    <li key={c.slug}>
                      <Link
                        href={{
                          pathname: "/multicultural-weddings/[culture]",
                          params: { culture: c.slug },
                        }}
                        className={ASIDE_LINK}
                      >
                        {c.name} <span className="text-gold">→</span>
                      </Link>
                    </li>
                  ) : null,
                )}
              </ul>
            </>
          ) : null}
        </aside>
      </div>
    </section>
  );
}
