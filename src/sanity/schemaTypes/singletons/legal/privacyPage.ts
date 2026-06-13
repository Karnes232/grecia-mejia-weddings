import { defineType } from "sanity";

import { LEGAL_GROUPS, legalPageFields } from "./legalFields";

export const privacyPage = defineType({
  name: "privacyPage",
  title: "Privacy Policy",
  type: "document",
  groups: LEGAL_GROUPS,
  fields: legalPageFields(),
  preview: {
    select: { language: "language" },
    prepare: ({ language }) => ({
      title: "Privacy Policy",
      subtitle: language ? language.toUpperCase() : undefined,
      media: "🔒",
    }),
  },
});
