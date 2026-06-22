import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { plainHeadline, renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import type { ServicePage } from "@/sanity/queries/service";

type ServicesRelatedProps = {
  related: NonNullable<ServicePage["related"]>;
};

const ASIDE_LINK =
  "flex items-center justify-between gap-4 border-b border-rule py-3 text-[13px] text-ink no-underline transition-colors hover:text-olive";

export async function ServicesRelated({ related }: ServicesRelatedProps) {
  const t = await getTranslations("servicesHub");
  const articles = related.articles ?? [];

  return (
    <section className="bg-cream px-6 py-[120px] md:px-14">
      <RevealOnScroll className="mx-auto mb-12 max-w-[1400px] border-b border-olive pb-6">
        {related.eyebrow ? (
          <span className="mb-3 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
            {related.eyebrow}
          </span>
        ) : null}
        {related.headline ? (
          <h2 className="m-0 font-serif font-light text-[clamp(40px,6vw,72px)] leading-[0.96] text-ink">
            {renderHeadline(related.headline, "olive")}
          </h2>
        ) : null}
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
          <h4 className="m-0 mb-3 text-[10px] uppercase tracking-wide-eyebrow text-muted">
            {t("theWork")}
          </h4>
          <ul className="m-0 list-none p-0">
            <li>
              <Link href="/portfolio" className={ASIDE_LINK}>
                {t("portfolio")} <span className="text-gold">→</span>
              </Link>
            </li>
            <li>
              <Link href="/venues" className={ASIDE_LINK}>
                {t("venues")} <span className="text-gold">→</span>
              </Link>
            </li>
            <li>
              <Link href="/destinations" className={ASIDE_LINK}>
                {t("destinations")} <span className="text-gold">→</span>
              </Link>
            </li>
            <li>
              <Link href="/journal" className={ASIDE_LINK}>
                {t("journal")} <span className="text-gold">→</span>
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
