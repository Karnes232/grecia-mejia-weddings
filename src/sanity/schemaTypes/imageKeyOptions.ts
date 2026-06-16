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
 * Press-page featured-feature slots. Shared between the localized `pressPage`
 * featured items (their `imageKey`) and the non-localized `pressPageMedia`
 * featured images (their `key`), so both sides always pick from the identical
 * set and stay aligned.
 */
export const PRESS_FEATURED_KEY_OPTIONS: ImageKeyOption[] = Array.from(
  { length: 5 },
  (_, i) => ({ title: `Feature ${i + 1}`, value: `press-feat-${i + 1}` }),
);

/**
 * Venue detail-page slots. Shared between a `venue` doc's `imageKey` fields and
 * that venue's `venueMedia` keyed arrays, so both sides always pick from the
 * identical set and stay aligned.
 */
export const VENUE_MOSAIC_KEY_OPTIONS: ImageKeyOption[] = Array.from(
  { length: 5 },
  (_, i) => ({ title: `Gallery ${i + 1}`, value: `venue-mosaic-${i + 1}` }),
);

export const VENUE_PHOTO_KEY_OPTIONS: ImageKeyOption[] = Array.from(
  { length: 4 },
  (_, i) => ({ title: `Moment ${i + 1}`, value: `venue-photo-${i + 1}` }),
);

export const VENUE_PORTFOLIO_KEY_OPTIONS: ImageKeyOption[] = Array.from(
  { length: 3 },
  (_, i) => ({ title: `Wedding ${i + 1}`, value: `venue-portfolio-${i + 1}` }),
);

export const VENUE_DETAIL_RELATED_KEY_OPTIONS: ImageKeyOption[] = Array.from(
  { length: 3 },
  (_, i) => ({ title: `Related ${i + 1}`, value: `venue-detail-related-${i + 1}` }),
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

/**
 * Venue-region venue-card slots. Shared between a `venueRegion` doc's venue
 * cards (their `imageKey`) and that region's `venueRegionMedia` keyed images
 * (their `key`), so both sides always pick from the identical set and stay
 * aligned.
 */
export const VENUE_LIST_KEY_OPTIONS: ImageKeyOption[] = Array.from(
  { length: 14 },
  (_, i) => ({ title: `Venue ${i + 1}`, value: `venue-${i + 1}` }),
);

/**
 * Culture detail-page slots. Shared between the localized `culture` doc's
 * `imageKey` fields and the non-localized `cultureMedia` keyed arrays, so both
 * sides always pick from the identical set and stay aligned.
 */
export const DESIGN_CONCEPT_KEY_OPTIONS: ImageKeyOption[] = Array.from(
  { length: 3 },
  (_, i) => ({ title: `Concept ${i + 1}`, value: `concept-${i + 1}` }),
);

export const CULTURE_RELATED_KEY_OPTIONS: ImageKeyOption[] = Array.from(
  { length: 5 },
  (_, i) => ({ title: `Related ${i + 1}`, value: `culture-related-${i + 1}` }),
);
