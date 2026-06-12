import type { StructureResolver } from "sanity/structure";

import { apiVersion } from "./env";

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
  "destination",
  "destinationMedia",
  "culture",
  "cultureMedia",
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
          S.document().schemaType("aboutPageMedia").documentId("aboutPageMedia"),
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
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETON_TYPES.has(item.getId() ?? ""),
      ),
    ]);
