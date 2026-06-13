import { getTranslations } from "next-intl/server";

import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { LegalPage } from "@/sanity/queries/legal";

import { LegalProse } from "./LegalProse";
import { LegalToc } from "./LegalToc";
import { slugify } from "./slug";

type LegalBodyProps = {
  intro?: string;
  helpNote?: string;
  sections: NonNullable<LegalPage["sections"]>;
  signatureName?: string;
  closing?: string;
};

export async function LegalBody({
  intro,
  helpNote,
  sections,
  signatureName,
  closing,
}: LegalBodyProps) {
  const t = await getTranslations("legalPage");

  const items = sections
    .filter((s) => s.heading)
    .map((s) => ({ heading: s.heading as string, slug: slugify(s.heading as string) }));

  return (
    <section className="bg-ivory px-6 pb-[140px] pt-[100px] md:px-14">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
        <LegalToc
          items={items}
          title={t("onThisPage")}
          helpNote={helpNote}
          contactCta={t("contactCta")}
        />

        <div className="max-w-[64ch]">
          {intro ? (
            <p className="mb-14 border-b border-rule pb-10 font-serif text-[22px] italic leading-[1.6] text-[#2a2a24]">
              {intro}
            </p>
          ) : null}

          {sections.map((section, i) => {
            if (!section.heading) return null;
            const slug = slugify(section.heading);
            return (
              <RevealOnScroll
                key={slug}
                as="div"
                className="mb-14 scroll-mt-[100px] last:mb-0"
              >
                <div id={slug} className="scroll-mt-[100px]">
                  <div className="mb-6 flex items-baseline gap-[18px]">
                    <span className="shrink-0 font-serif text-[18px] italic text-gold">
                      № {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="m-0 font-serif text-[34px] font-normal italic leading-[1.05] tracking-[-0.005em] text-ink">
                      {section.heading}
                    </h2>
                  </div>
                  {section.body?.length ? (
                    <LegalProse value={section.body} />
                  ) : null}
                </div>
              </RevealOnScroll>
            );
          })}

          {signatureName || closing ? (
            <div className="mt-16 border-t border-olive pt-10">
              {signatureName ? (
                <span className="mb-2 block font-script text-[42px] leading-none text-olive">
                  {signatureName}
                </span>
              ) : null}
              {closing ? (
                <span className="text-[10px] uppercase tracking-wide-eyebrow text-muted">
                  {closing}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
