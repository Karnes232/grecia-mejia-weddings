import { type Locale } from "../../../i18n/routing";

import { arabWeddingPuntaCana } from "./arabWeddingPuntaCana";
import { chateauWeddingProvence } from "./chateauWeddingProvence";
import { jewishWeddingTuscany } from "./jewishWeddingTuscany";
import { luxuryIndianWeddingPuntaCana } from "./luxuryIndianWeddingPuntaCana";
import { type PortfolioCopy } from "./shared";

export { PORTFOLIO_PAGE_COPY } from "./hub";

/** Full case-study copy keyed by canonical EN slug, per locale. */
export const PORTFOLIO_COPY: Record<string, Record<Locale, PortfolioCopy>> = {
  "luxury-indian-wedding-punta-cana": luxuryIndianWeddingPuntaCana,
  "jewish-wedding-tuscany": jewishWeddingTuscany,
  "chateau-wedding-provence": chateauWeddingProvence,
  "arab-wedding-punta-cana": arabWeddingPuntaCana,
};
