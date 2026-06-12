"use client";

/**
 * This configuration is used for the Sanity Studio that's mounted on the
 * `/app/studio/[[...tool]]/page.tsx` route.
 */

import { visionTool } from "@sanity/vision";
import { documentInternationalization } from "@sanity/document-internationalization";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import { media } from "sanity-plugin-media";
const LOCALIZED_TYPES = [
  "navigation",
  "footer",
  "homePage",
  "destinationsPage",
  "aboutPage",
  "contactPage",
  "multiculturalPage",
  "destination",
  "culture",
];

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    media(),
    documentInternationalization({
      supportedLanguages: [
        { id: "en", title: "English" },
        { id: "es", title: "Español" },
        { id: "fr", title: "Français" },
        { id: "pt", title: "Português" },
        { id: "de", title: "Deutsch" },
        { id: "it", title: "Italiano" },
      ],
      schemaTypes: LOCALIZED_TYPES,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
