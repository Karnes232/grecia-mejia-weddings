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
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETON_TYPES.has(item.getId() ?? ""),
      ),
    ]);
