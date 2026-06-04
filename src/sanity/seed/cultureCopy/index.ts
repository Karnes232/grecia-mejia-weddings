import type { Locale } from "../../../i18n/routing";

import { arabWeddings } from "./arabWeddings";
import { christianWeddings } from "./christianWeddings";
import { europeanWeddings } from "./europeanWeddings";
import { indianWeddings } from "./indianWeddings";
import { interfaithWeddings } from "./interfaithWeddings";
import { jewishWeddings } from "./jewishWeddings";
import { latinWeddings } from "./latinWeddings";
import { southAsianWeddings } from "./southAsianWeddings";
import type { CultureCopy } from "./shared";

/** Full detail copy per culture (keyed by canonical EN slug), per locale. */
export const CULTURE_COPY: Record<string, Record<Locale, CultureCopy>> = {
  "indian-weddings": indianWeddings,
  "jewish-weddings": jewishWeddings,
  "arab-weddings": arabWeddings,
  "south-asian-weddings": southAsianWeddings,
  "christian-weddings": christianWeddings,
  "interfaith-weddings": interfaithWeddings,
  "latin-weddings": latinWeddings,
  "european-weddings": europeanWeddings,
};
