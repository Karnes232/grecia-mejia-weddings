import type { SiteSettings } from "@/sanity/queries/layout";

export type SiteContactKey = "email" | "phone" | "whatsapp" | "instagram";

/**
 * Derive a contact row's display value + link from the global
 * `siteSettings.contact`, so the About and Contact pages share one source of
 * truth. Returns `{}` when the required field is missing.
 */
export function siteContactRow(
  key: SiteContactKey,
  contact: SiteSettings["contact"],
): { value?: string; href?: string } {
  if (!contact) return {};

  switch (key) {
    case "email":
      return contact.email
        ? { value: contact.email, href: `mailto:${contact.email}` }
        : {};
    case "phone":
      return contact.phone
        ? {
            value: contact.phone,
            href: `tel:${contact.phone.replace(/[^+\d]/g, "")}`,
          }
        : {};
    case "whatsapp":
      return contact.whatsappUrl
        ? { value: contact.phone, href: contact.whatsappUrl }
        : {};
    case "instagram": {
      if (!contact.instagramUrl) return {};
      const handle = contact.instagramUrl.replace(/\/+$/, "").split("/").pop();
      return {
        value: handle ? `@${handle}` : undefined,
        href: contact.instagramUrl,
      };
    }
    default:
      return {};
  }
}
