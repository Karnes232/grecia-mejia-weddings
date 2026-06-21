"use client";

/**
 * This configuration is used for the Sanity Studio that's mounted on the
 * `/app/studio/[[...tool]]/page.tsx` route.
 */

import { visionTool } from "@sanity/vision";
import { documentInternationalization } from "@sanity/document-internationalization";
import { defineConfig, type Template } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { deleteTranslationSet } from "./src/sanity/actions/deleteTranslationSet";
import { TranslationStatusButton } from "./src/sanity/components/TranslationStatusButton";
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
  "termsPage",
  "privacyPage",
  "pressPage",
  "multiculturalPage",
  "venuesPage",
  "journalPage",
  "portfolioPage",
  "destination",
  "culture",
  "venueRegion",
  "venue",
  "article",
  "portfolio",
];

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: schema.types,
    templates: (prev) => [
      ...prev,
      {
        id: "venue-en-in-region",
        title: "Venue (English)",
        schemaType: "venue",
        parameters: [{ name: "regionId", type: "string" }],
        value: (params: { regionId?: string }) => ({
          language: "en",
          ...(params?.regionId
            ? {
                region: {
                  _type: "reference",
                  _ref: params.regionId,
                  _weak: true,
                },
              }
            : {}),
        }),
      } as Template,
    ],
  },
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
  document: {
    actions: (prev, { schemaType }) =>
      [
        "article",
        "venue",
        "venueRegion",
        "destination",
        "culture",
        "portfolio",
      ].includes(schemaType)
        ? [...prev, deleteTranslationSet]
        : prev,
    unstable_languageFilter: (prev, ctx) =>
      LOCALIZED_TYPES.includes(ctx.schemaType) && ctx.documentId
        ? [
            ...prev,
            (filterProps) =>
              TranslationStatusButton({
                ...filterProps,
                documentId: ctx.documentId as string,
                schemaType: ctx.schemaType,
              }),
          ]
        : prev,
  },
});
