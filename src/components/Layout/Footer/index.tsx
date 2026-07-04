import Image from "next/image";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { siteContactRow, type SiteContactKey } from "@/lib/siteContact";
import { urlFor } from "@/sanity/lib/image";
import type { FooterData, SiteSettings } from "@/sanity/queries/layout";

import { DEFAULT_FOOTER, DEFAULT_SETTINGS } from "../_shared/defaults";
import { LanguageSwitcher } from "../_shared/LanguageSwitcher";

type FooterProps = {
  footer: FooterData | null;
  settings: SiteSettings | null;
  locale: Locale;
};

type FooterColumn = NonNullable<FooterData["columns"]>[number];

function isExternal(href: string) {
  return /^(https?:|mailto:|tel:|#)/.test(href);
}

// The Contact column derives from siteSettings.contact (the same source the
// Contact + About pages use); only its heading is editorial. Phone/email show
// their values; WhatsApp/Instagram show the brand name (locale-invariant).
const CONTACT_LINKS: Array<{ key: SiteContactKey; label?: string }> = [
  { key: "phone" },
  { key: "email" },
  { key: "whatsapp", label: "WhatsApp" },
  { key: "instagram", label: "Instagram" },
];

function contactColumn(
  heading: string,
  contact: SiteSettings["contact"],
): FooterColumn | null {
  const links = CONTACT_LINKS.flatMap(({ key, label }) => {
    const row = siteContactRow(key, contact);
    const display = label ?? row.value;
    return display && row.href ? [{ label: display, href: row.href }] : [];
  });
  return links.length ? { heading, links } : null;
}

// Legacy CMS contact columns (hand-typed phone/email/WhatsApp/Instagram links)
// are excluded so they don't double up with the derived column above.
function isContactColumn(col: FooterColumn): boolean {
  return Boolean(
    col.links?.some(
      (link) =>
        link.href?.startsWith("mailto:") ||
        ["whatsapp", "instagram"].includes(
          link.label?.toLowerCase().trim() ?? "",
        ),
    ),
  );
}

export function Footer({ footer, settings, locale }: FooterProps) {
  const cmsColumns = (
    footer?.columns?.length ? footer.columns : DEFAULT_FOOTER.columns
  ).filter((col) => !isContactColumn(col));
  const contact = contactColumn(
    footer?.contactHeading ?? DEFAULT_FOOTER.contactHeading,
    settings?.contact,
  );
  const columns = contact ? [...cmsColumns, contact] : cmsColumns;
  const brandName = settings?.brandName ?? DEFAULT_SETTINGS.brandName!;
  const footerLogo = settings?.footerLogo;
  const footerLogoUrl = footerLogo?.asset
    ? urlFor(footerLogo).width(560).fit("max").auto("format").url()
    : null;
  const signature =
    settings?.signatureParagraph ?? DEFAULT_SETTINGS.signatureParagraph;
  const copyrightTemplate =
    settings?.copyrightLine ?? DEFAULT_SETTINGS.copyrightLine!;
  const copyright = copyrightTemplate.replace(
    "{year}",
    String(new Date().getFullYear()),
  );
  const legalLinks = footer?.legalLinks?.length
    ? footer.legalLinks
    : DEFAULT_FOOTER.legalLinks;

  return (
    <footer className="bg-ink text-footer-text px-6 pt-20 pb-8 md:px-14">
      <div className="mx-auto mb-16 grid max-w-[1400px] gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
        <div>
          {footerLogoUrl ? (
            <Image
              src={footerLogoUrl}
              alt={footerLogo?.alt ?? brandName}
              width={280}
              height={120}
              className="h-auto w-[220px] object-contain"
            />
          ) : (
            <span className="block font-script text-[46px] leading-none text-footer-heading">
              {brandName}
            </span>
          )}
          {signature ? (
            <p className="mt-5 max-w-[30ch] text-[13px] leading-relaxed text-footer-muted">
              {signature}
            </p>
          ) : null}
        </div>
        {columns.map((col, i) => (
          <div key={`${col.heading ?? "col"}-${i}`}>
            {col.heading ? (
              <h4 className="mb-5 text-[10px] font-medium uppercase tracking-wide-eyebrow text-footer-heading">
                {col.heading}
              </h4>
            ) : null}
            <ul className="grid gap-[10px]">
              {col.links?.map((link, j) => {
                if (!link.label) return null;
                const href = link.href ?? "#";
                const cls =
                  "font-serif italic text-[15px] text-footer-text no-underline hover:text-ivory transition-colors";
                return (
                  <li key={`${link.label}-${j}`}>
                    {isExternal(href) ? (
                      <a className={cls} href={href}>
                        {link.label}
                      </a>
                    ) : (
                      <Link className={cls} href={href as never}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 border-t border-[rgba(212,186,140,0.2)] pt-8 text-[10px] uppercase tracking-eyebrow text-footer-muted md:flex-row md:items-center md:justify-between">
        <span>{copyright}</span>
        {legalLinks?.length ? (
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link, i) => {
              if (!link.label || !link.href) return null;
              const cls =
                "uppercase tracking-eyebrow text-footer-muted no-underline transition-colors hover:text-gold";
              return isExternal(link.href) ? (
                <a key={`${link.label}-${i}`} className={cls} href={link.href}>
                  {link.label}
                </a>
              ) : (
                <Link
                  key={`${link.label}-${i}`}
                  className={cls}
                  href={link.href as never}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        ) : null}
        <LanguageSwitcher currentLocale={locale} variant="footer" />
      </div>
    </footer>
  );
}
