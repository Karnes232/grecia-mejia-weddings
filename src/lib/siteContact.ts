import type { SiteSettings } from "@/sanity/queries/layout";

export type SiteContactKey = "email" | "phone" | "whatsapp" | "instagram";

/**
 * Pretty display form of a phone number. Editor formatting (any character
 * beyond `+` and digits — spaces, dashes, parens) is preserved verbatim, so
 * whatever is typed in Site Settings wins. Bare digit strings are grouped
 * with spaces: NANP numbers as `+1 XXX XXX XXXX`, anything else in threes
 * from the right (`+34612345678` → `+34 612 345 678`).
 */
export function formatPhone(phone: string): string {
  const trimmed = phone.trim();
  if (/[^+\d]/.test(trimmed)) return trimmed;
  const digits = trimmed.replace(/^\+/, "");
  // NANP (+1 XXX XXX XXXX) — with or without the editor typing the "+".
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+1 ${digits.slice(1, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  }
  // Bare 10 digits: almost certainly a NANP number typed without the +1.
  if (!trimmed.startsWith("+") && digits.length === 10) {
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }
  const groups: string[] = [];
  for (let end = digits.length; end > 0; end -= 3) {
    groups.unshift(digits.slice(Math.max(0, end - 3), end));
  }
  return `${trimmed.startsWith("+") ? "+" : ""}${groups.join(" ")}`;
}

/**
 * Derive a contact row's display value + link from the global
 * `siteSettings.contact`, so the footer, About, and Contact pages share one
 * source of truth. Returns `{}` when the required field is missing.
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
    case "phone": {
      if (!contact.phone) return {};
      let tel = contact.phone.replace(/[^+\d]/g, "");
      // NANP number typed without the "+" — add it so the link dials
      // correctly from abroad (the site serves six locales).
      if (tel.length === 11 && tel.startsWith("1")) tel = `+${tel}`;
      return { value: formatPhone(contact.phone), href: `tel:${tel}` };
    }
    case "whatsapp":
      return contact.whatsappUrl
        ? {
            value: contact.phone ? formatPhone(contact.phone) : undefined,
            href: contact.whatsappUrl,
          }
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
