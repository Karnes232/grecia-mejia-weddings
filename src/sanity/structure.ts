import type { StructureResolver } from "sanity/structure";

import { apiVersion } from "./env";

// Base editing language. Localized lists filter to this so each item shows once;
// other locales are reached via the document-internationalization banner.
const BASE_LANGUAGE = "en";

const SINGLETON_TYPES = new Set([
  "siteSettings",
  "navigation",
  "footer",
  "homePage",
  "homePageMedia",
  "destinationsPage",
  "destinationsPageMedia",
  "aboutPage",
  "aboutPageMedia",
  "multiculturalPage",
  "multiculturalPageMedia",
  "contactPage",
  "contactPageMedia",
  "termsPage",
  "privacyPage",
  "pressPage",
  "pressPageMedia",
  "venuesPage",
  "venuesPageMedia",
  "journalPage",
  "journalPageMedia",
  "portfolioPage",
  "portfolioPageMedia",
  "portfolio",
  "portfolioMedia",
  "servicePage",
  "servicePageMedia",
  "service",
  "serviceMedia",
  "destination",
  "destinationMedia",
  "culture",
  "cultureMedia",
  "venueRegion",
  "venueRegionMedia",
  "venue",
  "venueMedia",
  "article",
  "articleCategory",
  "author",
]);

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .icon(() => "⚙️")
        .schemaType("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.divider(),
      S.listItem()
        .title("Navigation")
        .icon(() => "🧭")
        .schemaType("navigation")
        // Open the English doc directly; other locales via the translation banner.
        .child(
          S.document().schemaType("navigation").documentId("navigation-en"),
        ),
      S.listItem()
        .title("Footer")
        .icon(() => "🦶")
        .schemaType("footer")
        // Open the English doc directly; other locales via the translation banner.
        .child(S.document().schemaType("footer").documentId("footer-en")),
      S.divider(),
      S.listItem()
        .title("Home Page")
        .icon(() => "🏠")
        .schemaType("homePage")
        // Open the English doc directly; other locales via the translation
        // banner on the document.
        .child(S.document().schemaType("homePage").documentId("homePage-en")),
      S.listItem()
        .title("Home Page Media")
        .id("homePageMedia")
        .icon(() => "🖼️")
        .schemaType("homePageMedia")
        .child(
          S.document().schemaType("homePageMedia").documentId("homePageMedia"),
        ),
      S.divider(),
      S.listItem()
        .title("Destinations Page")
        .icon(() => "🗺️")
        .schemaType("destinationsPage")
        // Open the English doc directly; other locales via the translation banner.
        .child(
          S.document()
            .schemaType("destinationsPage")
            .documentId("destinationsPage-en"),
        ),
      S.listItem()
        .title("Destinations Page Media")
        .id("destinationsPageMedia")
        .icon(() => "🗺️")
        .schemaType("destinationsPageMedia")
        .child(
          S.document()
            .schemaType("destinationsPageMedia")
            .documentId("destinationsPageMedia"),
        ),
      S.divider(),
      S.listItem()
        .title("Destinations")
        .icon(() => "📍")
        .schemaType("destination")
        .child(
          S.documentTypeList("destination")
            .title("Destinations")
            .apiVersion(apiVersion)
            .filter('_type == "destination" && language == $lang')
            .params({ lang: BASE_LANGUAGE })
            .initialValueTemplates([
              S.initialValueTemplateItem("destination-en"),
            ]),
        ),
      S.listItem()
        .title("Destination media")
        .icon(() => "🖼️")
        .schemaType("destinationMedia")
        .child(
          S.documentTypeList("destinationMedia")
            .title("Destination media")
            .apiVersion(apiVersion)
            .filter('_type == "destinationMedia"'),
        ),
      S.divider(),
      S.listItem()
        .title("Multicultural Weddings Page")
        .icon(() => "🪔")
        .schemaType("multiculturalPage")
        // Open the English doc directly; other locales via the translation banner.
        .child(
          S.document()
            .schemaType("multiculturalPage")
            .documentId("multiculturalPage-en"),
        ),
      S.listItem()
        .title("Multicultural Page Media")
        .id("multiculturalPageMedia")
        .icon(() => "🖼️")
        .schemaType("multiculturalPageMedia")
        .child(
          S.document()
            .schemaType("multiculturalPageMedia")
            .documentId("multiculturalPageMedia"),
        ),
      S.divider(),
      S.listItem()
        .title("Cultures")
        .icon(() => "🪔")
        .schemaType("culture")
        .child(
          S.documentTypeList("culture")
            .title("Cultures")
            .apiVersion(apiVersion)
            .filter('_type == "culture" && language == $lang')
            .params({ lang: BASE_LANGUAGE })
            .initialValueTemplates([
              S.initialValueTemplateItem("culture-en"),
            ]),
        ),
      S.listItem()
        .title("Culture media")
        .icon(() => "🖼️")
        .schemaType("cultureMedia")
        .child(
          S.documentTypeList("cultureMedia")
            .title("Culture media")
            .apiVersion(apiVersion)
            .filter('_type == "cultureMedia"'),
        ),
      S.divider(),
      S.listItem()
        .title("Venues Page")
        .icon(() => "🏛️")
        .schemaType("venuesPage")
        // Open the English doc directly; other locales via the translation banner.
        .child(
          S.document().schemaType("venuesPage").documentId("venuesPage-en"),
        ),
      S.listItem()
        .title("Venues Page Media")
        .id("venuesPageMedia")
        .icon(() => "🖼️")
        .schemaType("venuesPageMedia")
        .child(
          S.document()
            .schemaType("venuesPageMedia")
            .documentId("venuesPageMedia"),
        ),
      S.divider(),
      S.listItem()
        .title("Venues")
        .icon(() => "🏝️")
        .child(
          S.list()
            .title("Venues")
            .items([
              S.listItem()
                .title("Regions")
                .icon(() => "📍")
                .child(
                  S.documentTypeList("venueRegion")
                    .title("Regions")
                    .apiVersion(apiVersion)
                    .filter('_type == "venueRegion" && language == $lang')
                    .params({ lang: BASE_LANGUAGE })
                    .defaultOrdering([{ field: "name", direction: "asc" }])
                    .initialValueTemplates([
                      S.initialValueTemplateItem("venueRegion-en"),
                    ])
                    // Each region opens its editable page doc next to its venues —
                    // the region page lists venues automatically via each venue's
                    // `region` reference, so there is no array to maintain.
                    .child((regionId) =>
                      S.list()
                        .title("Region")
                        .id(regionId)
                        .items([
                          S.listItem()
                            .title("Region page")
                            .id(`${regionId}-doc`)
                            .icon(() => "📍")
                            .child(
                              S.document()
                                .schemaType("venueRegion")
                                .documentId(regionId),
                            ),
                          S.listItem()
                            .title("Venues")
                            .id(`${regionId}-venues`)
                            .icon(() => "🏝️")
                            .child(
                              S.documentList()
                                .title("Venues")
                                .schemaType("venue")
                                .apiVersion(apiVersion)
                                // English only (others via the translations banner).
                                // Media-match keeps the list forgiving about which
                                // locale's region doc a venue refs; the new venue
                                // template pre-sets language + this region.
                                // NB: Studio sorts nulls first, so venues missing an
                                // order float to the top here (the site pushes them
                                // last) — surfaces what still needs ordering.
                                .filter(
                                  '_type == "venue" && language == $lang && region->media._ref == *[_id == $regionId][0].media._ref',
                                )
                                .params({ regionId, lang: BASE_LANGUAGE })
                                .defaultOrdering([
                                  { field: "order", direction: "asc" },
                                  { field: "name", direction: "asc" },
                                ])
                                .initialValueTemplates([
                                  S.initialValueTemplateItem(
                                    "venue-en-in-region",
                                    { regionId },
                                  ),
                                ]),
                            ),
                        ]),
                    ),
                ),
              S.divider(),
              S.listItem()
                .title("Region media")
                .icon(() => "🖼️")
                .child(
                  S.documentTypeList("venueRegionMedia")
                    .title("Region media")
                    .apiVersion(apiVersion)
                    .filter('_type == "venueRegionMedia"'),
                ),
              S.listItem()
                .title("Venue media")
                .icon(() => "🖼️")
                .child(
                  S.documentTypeList("venueMedia")
                    .title("Venue media")
                    .apiVersion(apiVersion)
                    .filter('_type == "venueMedia"'),
                ),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("Journal Page")
        .icon(() => "📔")
        .schemaType("journalPage")
        // Open the English doc directly; other locales via the translation banner.
        .child(
          S.document().schemaType("journalPage").documentId("journalPage-en"),
        ),
      S.listItem()
        .title("Journal Page Media")
        .id("journalPageMedia")
        .icon(() => "🖼️")
        .schemaType("journalPageMedia")
        .child(
          S.document()
            .schemaType("journalPageMedia")
            .documentId("journalPageMedia"),
        ),
      S.listItem()
        .title("Articles")
        .icon(() => "📝")
        .schemaType("article")
        .child(
          S.documentTypeList("article")
            .title("Articles")
            .apiVersion(apiVersion)
            .filter('_type == "article" && language == $lang')
            .params({ lang: BASE_LANGUAGE })
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
            .initialValueTemplates([
              S.initialValueTemplateItem("article-en"),
            ]),
        ),
      S.listItem()
        .title("Journal Categories")
        .icon(() => "🏷️")
        .schemaType("articleCategory")
        .child(
          S.documentTypeList("articleCategory")
            .title("Journal Categories")
            .apiVersion(apiVersion)
            .filter('_type == "articleCategory"')
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
      S.listItem()
        .title("Authors")
        .icon(() => "✍️")
        .schemaType("author")
        .child(
          S.documentTypeList("author")
            .title("Authors")
            .apiVersion(apiVersion)
            .filter('_type == "author"'),
        ),
      S.divider(),
      S.listItem()
        .title("Portfolio Page")
        .icon(() => "💍")
        .schemaType("portfolioPage")
        // Open the English doc directly; other locales via the translation banner.
        .child(
          S.document()
            .schemaType("portfolioPage")
            .documentId("portfolioPage-en"),
        ),
      S.listItem()
        .title("Portfolio Page Media")
        .id("portfolioPageMedia")
        .icon(() => "🖼️")
        .schemaType("portfolioPageMedia")
        .child(
          S.document()
            .schemaType("portfolioPageMedia")
            .documentId("portfolioPageMedia"),
        ),
      S.listItem()
        .title("Case Studies")
        .icon(() => "💍")
        .schemaType("portfolio")
        .child(
          S.documentTypeList("portfolio")
            .title("Case Studies")
            .apiVersion(apiVersion)
            .filter('_type == "portfolio" && language == $lang')
            .params({ lang: BASE_LANGUAGE })
            .initialValueTemplates([
              S.initialValueTemplateItem("portfolio-en"),
            ]),
        ),
      S.listItem()
        .title("Portfolio media")
        .icon(() => "🖼️")
        .schemaType("portfolioMedia")
        .child(
          S.documentTypeList("portfolioMedia")
            .title("Portfolio media")
            .apiVersion(apiVersion)
            .filter('_type == "portfolioMedia"'),
        ),
      S.divider(),
      S.listItem()
        .title("Services Page")
        .icon(() => "✦")
        .schemaType("servicePage")
        // Open the English doc directly; other locales via the translation banner.
        .child(
          S.document().schemaType("servicePage").documentId("servicePage-en"),
        ),
      S.listItem()
        .title("Services Page Media")
        .id("servicePageMedia")
        .icon(() => "🖼️")
        .schemaType("servicePageMedia")
        .child(
          S.document()
            .schemaType("servicePageMedia")
            .documentId("servicePageMedia"),
        ),
      S.listItem()
        .title("Services")
        .icon(() => "✦")
        .schemaType("service")
        .child(
          S.documentTypeList("service")
            .title("Services")
            .apiVersion(apiVersion)
            .filter('_type == "service" && language == $lang')
            .params({ lang: BASE_LANGUAGE })
            .defaultOrdering([{ field: "number", direction: "asc" }])
            .initialValueTemplates([
              S.initialValueTemplateItem("service-en"),
            ]),
        ),
      S.listItem()
        .title("Service media")
        .icon(() => "🖼️")
        .schemaType("serviceMedia")
        .child(
          S.documentTypeList("serviceMedia")
            .title("Service media")
            .apiVersion(apiVersion)
            .filter('_type == "serviceMedia"'),
        ),
      S.divider(),
      S.listItem()
        .title("About Page")
        .icon(() => "🏛️")
        .schemaType("aboutPage")
        // Open the English doc directly; other locales via the translation banner.
        .child(S.document().schemaType("aboutPage").documentId("aboutPage-en")),
      S.listItem()
        .title("About Page Media")
        .id("aboutPageMedia")
        .icon(() => "🖼️")
        .schemaType("aboutPageMedia")
        .child(
          S.document()
            .schemaType("aboutPageMedia")
            .documentId("aboutPageMedia"),
        ),
      S.divider(),
      S.listItem()
        .title("Press Page")
        .icon(() => "📰")
        .schemaType("pressPage")
        // Open the English doc directly; other locales via the translation banner.
        .child(S.document().schemaType("pressPage").documentId("pressPage-en")),
      S.listItem()
        .title("Press Page Media")
        .id("pressPageMedia")
        .icon(() => "🖼️")
        .schemaType("pressPageMedia")
        .child(
          S.document()
            .schemaType("pressPageMedia")
            .documentId("pressPageMedia"),
        ),
      S.divider(),
      S.listItem()
        .title("Contact Page")
        .icon(() => "✉️")
        .schemaType("contactPage")
        // Open the English doc directly; other locales via the translation banner.
        .child(
          S.document().schemaType("contactPage").documentId("contactPage-en"),
        ),
      S.listItem()
        .title("Contact Page Media")
        .id("contactPageMedia")
        .icon(() => "🖼️")
        .schemaType("contactPageMedia")
        .child(
          S.document()
            .schemaType("contactPageMedia")
            .documentId("contactPageMedia"),
        ),
      S.divider(),
      S.listItem()
        .title("Terms & Conditions")
        .icon(() => "📋")
        .schemaType("termsPage")
        // Open the English doc directly; other locales via the translation banner.
        .child(S.document().schemaType("termsPage").documentId("termsPage-en")),
      S.listItem()
        .title("Privacy Policy")
        .icon(() => "🔒")
        .schemaType("privacyPage")
        // Open the English doc directly; other locales via the translation banner.
        .child(
          S.document().schemaType("privacyPage").documentId("privacyPage-en"),
        ),

      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETON_TYPES.has(item.getId() ?? ""),
      ),
    ]);
