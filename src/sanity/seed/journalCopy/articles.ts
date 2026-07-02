/**
 * The 9 sample Journal articles. Each lives in its own file under `articles/`
 * and carries a full rich body (`buildBody`) + FAQs + bleed quote in all six
 * locales. Document ids stay keyed by the canonical English slug.
 */

import { article as bestIndianWeddingVenuesPuntaCana } from "./articles/best-indian-wedding-venues-punta-cana";
import { article as luxuryPuntaCanaWeddingCost } from "./articles/luxury-punta-cana-wedding-cost";
import { article as kosherJewishWeddingCaribbean } from "./articles/kosher-jewish-wedding-caribbean";
import { article as theSangeetNightBefore } from "./articles/the-sangeet-night-before";
import { article as whenToWedAmalfiCoast } from "./articles/when-to-wed-amalfi-coast";
import { article as interfaithCeremonyCoast } from "./articles/interfaith-ceremony-coast";
import { article as beachWeddingContingencies } from "./articles/beach-wedding-contingencies";
import { article as singleStemCentrepiece } from "./articles/single-stem-centrepiece";
import { article as welcomePartySecondStar } from "./articles/welcome-party-second-star";
import type { ArticleSeed } from "./types";

export type { ArticleLocaleCopy, ArticleSeed } from "./types";

export const ARTICLES: ArticleSeed[] = [
  bestIndianWeddingVenuesPuntaCana,
  luxuryPuntaCanaWeddingCost,
  kosherJewishWeddingCaribbean,
  theSangeetNightBefore,
  whenToWedAmalfiCoast,
  interfaithCeremonyCoast,
  beachWeddingContingencies,
  singleStemCentrepiece,
  welcomePartySecondStar,
];
