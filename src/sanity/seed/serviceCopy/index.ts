import { type Locale } from "../../../i18n/routing";

import { destinationWeddingPlanning } from "./destinationWeddingPlanning";
import { type ServiceCopy } from "./shared";
import {
  eventProduction,
  guestExperience,
  luxuryWeddingPlanning,
  multiculturalWeddingPlanning,
  venueSourcing,
  weddingDesign,
  weddingWeekendPlanning,
} from "./stubs";

export { SERVICE_PAGE_COPY } from "./hub";

/** Detail copy per service (keyed by canonical EN slug), per locale. */
export const SERVICE_COPY: Record<string, Record<Locale, ServiceCopy>> = {
  "destination-wedding-planning": destinationWeddingPlanning,
  "luxury-wedding-planning": luxuryWeddingPlanning,
  "multicultural-wedding-planning": multiculturalWeddingPlanning,
  "wedding-weekend-planning": weddingWeekendPlanning,
  "venue-sourcing": venueSourcing,
  "wedding-design": weddingDesign,
  "event-production": eventProduction,
  "guest-experience": guestExperience,
};
