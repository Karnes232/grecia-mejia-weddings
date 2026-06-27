import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { ContactPage } from "@/sanity/queries/contact";
import type { SiteSettings } from "@/sanity/queries/layout";

import { ContactForm } from "./ContactForm";
import { ContactRail } from "./ContactRail";

type ContactMainProps = {
  form?: ContactPage["form"];
  rail?: ContactPage["rail"];
  siteContact?: SiteSettings["contact"];
};

export function ContactMain({ form, rail, siteContact }: ContactMainProps) {
  return (
    <section className="bg-ivory px-6 py-[120px] md:px-14">
      <div className="mx-auto grid max-w-[1400px] items-start gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
        <RevealOnScroll>
          {form?.eyebrow || form?.headline || form?.intro ? (
            <div className="mb-12">
              {form?.eyebrow ? (
                <span className="mb-4 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
                  {form.eyebrow}
                </span>
              ) : null}
              {form?.headline ? (
                <h2 className="m-0 mb-4 font-serif font-light text-[clamp(40px,5vw,56px)] leading-none text-ink">
                  {renderHeadline(form.headline, "olive")}
                </h2>
              ) : null}
              {form?.intro ? (
                <p className="m-0 max-w-[52ch] text-base leading-[1.7] text-[#3d3a30]">
                  {form.intro}
                </p>
              ) : null}
            </div>
          ) : null}

          <ContactForm form={form} />
        </RevealOnScroll>

        <RevealOnScroll>
          <ContactRail rail={rail} siteContact={siteContact} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
