import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import {
  type SiteContactKey,
  siteContactRow,
} from "@/lib/siteContact";
import type { AboutPage } from "@/sanity/queries/about";
import type { SiteSettings } from "@/sanity/queries/layout";

import { ContactBody } from "./ContactBody";
import { ContactDetails } from "./ContactDetails";

type AboutContactProps = {
  contact: NonNullable<AboutPage["contact"]>;
  siteContact?: SiteSettings["contact"];
};

type Row = { label?: string; value?: string; href?: string };

/** Build the contact rows from global Site Settings + the page's localized labels. */
function buildRows(
  labels: NonNullable<AboutPage["contact"]>["labels"],
  contact: SiteSettings["contact"],
): Row[] {
  const keys: SiteContactKey[] = ["email", "phone", "whatsapp", "instagram"];
  return keys
    .map((key) => ({ label: labels?.[key], ...siteContactRow(key, contact) }))
    .filter((row) => row.value);
}

export function AboutContact({ contact, siteContact }: AboutContactProps) {
  // Email/Phone/WhatsApp/Instagram from Site Settings; any extra editorial
  // rows (Studios, Calendar…) follow.
  const rows = [...buildRows(contact.labels, siteContact), ...(contact.details ?? [])];

  return (
    <section className="bg-ink px-6 py-[140px] text-ivory md:px-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <RevealOnScroll>
          <ContactBody contact={contact} />
        </RevealOnScroll>
        <RevealOnScroll>
          <ContactDetails details={rows} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
