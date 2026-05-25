import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { AboutPage } from "@/sanity/queries/about";

import { ContactBody } from "./ContactBody";
import { ContactDetails } from "./ContactDetails";

type AboutContactProps = {
  contact: NonNullable<AboutPage["contact"]>;
};

export function AboutContact({ contact }: AboutContactProps) {
  return (
    <section className="bg-ink px-6 py-[140px] text-ivory md:px-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <RevealOnScroll>
          <ContactBody contact={contact} />
        </RevealOnScroll>
        <RevealOnScroll>
          <ContactDetails details={contact.details} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
