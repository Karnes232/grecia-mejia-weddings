import { defineType } from "sanity";

import { LEGAL_GROUPS, legalPageFields } from "./legalFields";

export const termsPage = defineType({
  name: "termsPage",
  title: "Terms & Conditions",
  type: "document",
  groups: LEGAL_GROUPS,
  fields: legalPageFields(),
  preview: {
    select: { language: "language" },
    prepare: ({ language }) => ({
      title: "Terms & Conditions",
      subtitle: language ? language.toUpperCase() : undefined,
      media: "📋",
    }),
  },
});
