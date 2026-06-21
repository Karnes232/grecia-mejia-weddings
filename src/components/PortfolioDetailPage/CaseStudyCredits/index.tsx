import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import type { Portfolio } from "@/sanity/queries/portfolio";

type Credits = NonNullable<Portfolio["credits"]>;

function Credit({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[10px] uppercase tracking-wide-eyebrow text-muted">
        {label}
      </span>
      <span className="font-serif text-[18px] italic leading-tight text-ink">
        {children}
      </span>
    </div>
  );
}

const LINK = "border-b border-gold/50 text-olive no-underline transition-colors hover:border-gold";

export function CaseStudyCredits({ credits }: { credits: Credits }) {
  const { destination, venue, culture, guests, duration, season } = credits;

  return (
    <section className="border-b border-rule bg-ivory px-6 py-14 md:px-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
        {destination?.name ? (
          <Credit label="Destination">
            {destination.slug ? (
              <Link
                href={{
                  pathname: "/destinations/[destination]",
                  params: { destination: destination.slug },
                }}
                className={LINK}
              >
                {destination.name}
              </Link>
            ) : (
              destination.name
            )}
          </Credit>
        ) : null}

        {venue?.name ? (
          <Credit label="Venue">
            {venue.slug && venue.region ? (
              <Link
                href={{
                  pathname: "/venues/[region]/[venue]",
                  params: { region: venue.region, venue: venue.slug },
                }}
                className={LINK}
              >
                {venue.name}
              </Link>
            ) : (
              venue.name
            )}
          </Credit>
        ) : null}

        {culture?.name ? (
          <Credit label="Tradition">
            {culture.slug ? (
              <Link
                href={{
                  pathname: "/multicultural-weddings/[culture]",
                  params: { culture: culture.slug },
                }}
                className={LINK}
              >
                {culture.name}
              </Link>
            ) : (
              culture.name
            )}
          </Credit>
        ) : null}

        {guests ? <Credit label="Guests">{guests}</Credit> : null}
        {duration ? <Credit label="Duration">{duration}</Credit> : null}
        {season ? <Credit label="Season">{season}</Credit> : null}
      </div>
    </section>
  );
}
