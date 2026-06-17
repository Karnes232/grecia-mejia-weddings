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
        .child(
          S.documentTypeList("navigation")
            .title("Navigation")
            .apiVersion(apiVersion)
            .filter('_type == "navigation"'),
        ),
      S.listItem()
        .title("Footer")
        .icon(() => "🦶")
        .schemaType("footer")
        .child(
          S.documentTypeList("footer")
            .title("Footer")
            .apiVersion(apiVersion)
            .filter('_type == "footer"'),
        ),
      S.divider(),
      S.listItem()
        .title("Home Page")
        .icon(() => "🏠")
        .schemaType("homePage")
        .child(
          S.documentTypeList("homePage")
            .title("Home Page")
            .apiVersion(apiVersion)
            .filter('_type == "homePage"'),
        ),
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
        .child(
          S.documentTypeList("destinationsPage")
            .title("Destinations Page")
            .apiVersion(apiVersion)
            .filter('_type == "destinationsPage"'),
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
            .filter('_type == "destination"'),
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
        .child(
          S.documentTypeList("multiculturalPage")
            .title("Multicultural Weddings Page")
            .apiVersion(apiVersion)
            .filter('_type == "multiculturalPage"'),
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
            .filter('_type == "culture"'),
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
        .child(
          S.documentTypeList("venuesPage")
            .title("Venues Page")
            .apiVersion(apiVersion)
            .filter('_type == "venuesPage"'),
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
                .title("Venues by region")
                .icon(() => "📍")
                .child(
                  S.documentTypeList("venueRegion")
                    .title("Regions")
                    .apiVersion(apiVersion)
                    .filter('_type == "venueRegion" && language == $lang')
                    .params({ lang: BASE_LANGUAGE })
                    .child((regionId) =>
                      S.documentList()
                        .title("Venues")
                        .schemaType("venue")
                        .apiVersion(apiVersion)
                        // Match all locale versions of every venue in this region:
                        // each region locale shares one `venueRegionMedia`, and each
                        // venue references its own-locale region → group by that media.
                        .filter(
                          '_type == "venue" && region->media._ref == *[_id == $regionId][0].media._ref',
                        )
                        .params({ regionId })
                        .defaultOrdering([
                          { field: "name", direction: "asc" },
                          { field: "language", direction: "asc" },
                        ]),
                    ),
                ),
              S.listItem()
                .title("All regions")
                .icon(() => "📍")
                .child(
                  S.documentTypeList("venueRegion")
                    .title("Regions")
                    .apiVersion(apiVersion)
                    .filter('_type == "venueRegion"')
                    .defaultOrdering([
                      { field: "name", direction: "asc" },
                      { field: "language", direction: "asc" },
                    ]),
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
        .child(
          S.documentTypeList("journalPage")
            .title("Journal Page")
            .apiVersion(apiVersion)
            .filter('_type == "journalPage"'),
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
            .filter('_type == "article"')
            .defaultOrdering([
              { field: "publishedAt", direction: "desc" },
              { field: "language", direction: "asc" },
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
            .defaultOrdering([
              { field: "order", direction: "asc" },
              { field: "language", direction: "asc" },
            ]),
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
        .title("About Page")
        .icon(() => "🏛️")
        .schemaType("aboutPage")
        .child(
          S.documentTypeList("aboutPage")
            .title("About Page")
            .apiVersion(apiVersion)
            .filter('_type == "aboutPage"'),
        ),
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
        .child(
          S.documentTypeList("pressPage")
            .title("Press Page")
            .apiVersion(apiVersion)
            .filter('_type == "pressPage"'),
        ),
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
        .child(
          S.documentTypeList("contactPage")
            .title("Contact Page")
            .apiVersion(apiVersion)
            .filter('_type == "contactPage"'),
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
        .child(
          S.documentTypeList("termsPage")
            .title("Terms & Conditions")
            .apiVersion(apiVersion)
            .filter('_type == "termsPage"'),
        ),
      S.listItem()
        .title("Privacy Policy")
        .icon(() => "🔒")
        .schemaType("privacyPage")
        .child(
          S.documentTypeList("privacyPage")
            .title("Privacy Policy")
            .apiVersion(apiVersion)
            .filter('_type == "privacyPage"'),
        ),

      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETON_TYPES.has(item.getId() ?? ""),
      ),
    ]);
