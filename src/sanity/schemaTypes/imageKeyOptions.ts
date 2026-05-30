/**
 * Shared image-key option lists.
 *
 * The destination doc's `imageKey` fields and the destinationMedia doc's `key`
 * fields both use these as `options.list`, so both sides pick from the identical
 * set and always match. Values mirror the numbered slots the seed creates in
 * `src/sanity/seed/destination.ts`.
 */

export type ImageKeyOption = { title: string; value: string };

export const STYLE_KEY_OPTIONS: ImageKeyOption[] = Array.from(
  { length: 6 },
  (_, i) => ({ title: `Style ${i + 1}`, value: `style-${i + 1}` }),
);

export const VENUE_KEY_OPTIONS: ImageKeyOption[] = Array.from(
  { length: 3 },
  (_, i) => ({ title: `Venue ${i + 1}`, value: `venue-${i + 1}` }),
);

export const GUEST_KEY_OPTIONS: ImageKeyOption[] = [
  { title: "Stay", value: "guest-stay" },
  { title: "Taste", value: "guest-taste" },
  { title: "Explore", value: "guest-explore" },
  { title: "Welcome", value: "guest-welcome" },
  { title: "Send-off", value: "guest-sendoff" },
];

export const RELATED_KEY_OPTIONS: ImageKeyOption[] = Array.from(
  { length: 5 },
  (_, i) => ({ title: `Related ${i + 1}`, value: `related-${i + 1}` }),
);

/**
 * About-page team slots. Shared between the localized `aboutPage` team members
 * (their `imageKey`) and the non-localized `aboutPageMedia` team images (their
 * `key`), so both sides always pick from the identical set and stay aligned.
 */
export const ABOUT_TEAM_KEY_OPTIONS: ImageKeyOption[] = Array.from(
  { length: 4 },
  (_, i) => ({ title: `Member ${i + 1}`, value: `member-${i + 1}` }),
);

/**
 * Multicultural hub "From the journal" related-article slots. Shared between
 * the localized `multiculturalPage` related articles (their `imageKey`) and the
 * non-localized `multiculturalPageMedia` related images (their `key`), so both
 * sides always pick from the identical set and stay aligned.
 */
export const MULTICULTURAL_RELATED_KEY_OPTIONS: ImageKeyOption[] = Array.from(
  { length: 5 },
  (_, i) => ({ title: `Related ${i + 1}`, value: `mc-related-${i + 1}` }),
);
