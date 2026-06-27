import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
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
  if (!contact) return [];
  const rows: Row[] = [];

  if (contact.email) {
    rows.push({
      label: labels?.email,
      value: contact.email,
      href: `mailto:${contact.email}`,
    });
  }
  if (contact.phone) {
    rows.push({
      label: labels?.phone,
      value: contact.phone,
      href: `tel:${contact.phone.replace(/[^+\d]/g, "")}`,
    });
  }
  if (contact.whatsappUrl) {
    rows.push({
      label: labels?.whatsapp,
      value: contact.phone,
      href: contact.whatsappUrl,
    });
  }
  if (contact.instagramUrl) {
    const handle = contact.instagramUrl.replace(/\/+$/, "").split("/").pop();
    rows.push({
      label: labels?.instagram,
      value: handle ? `@${handle}` : undefined,
      href: contact.instagramUrl,
    });
  }
  return rows;
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
