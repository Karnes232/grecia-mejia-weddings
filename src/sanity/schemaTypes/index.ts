import { type SchemaTypeDefinition } from "sanity";

import { seo } from "./objects/seo";
import { siteSettings, navigation, footer } from "./singletons/global";
import { homePage, homePageMedia } from "./singletons/home";
import {
  destinationsPage,
  destinationsPageMedia,
} from "./singletons/destinations";
import { aboutPage, aboutPageMedia } from "./singletons/about";
import { contactPage, contactPageMedia } from "./singletons/contact";
import {
  termsPage,
  privacyPage,
  legalCallout,
  legalDefinitions,
} from "./singletons/legal";
import {
  multiculturalPage,
  multiculturalPageMedia,
} from "./singletons/multicultural";
import { destination } from "./documents/destination";
import { destinationMedia } from "./documents/destinationMedia";
import { culture } from "./documents/culture";
import { cultureMedia } from "./documents/cultureMedia";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    seo,
    siteSettings,
    navigation,
    footer,
    homePage,
    homePageMedia,
    destinationsPage,
    destinationsPageMedia,
    aboutPage,
    aboutPageMedia,
    contactPage,
    contactPageMedia,
    termsPage,
    privacyPage,
    legalCallout,
    legalDefinitions,
    multiculturalPage,
    multiculturalPageMedia,
    destination,
    destinationMedia,
    culture,
    cultureMedia,
  ],
};
