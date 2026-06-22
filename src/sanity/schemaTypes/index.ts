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
import { pressPage, pressPageMedia } from "./singletons/press";
import { venuesPage, venuesPageMedia } from "./singletons/venues";
import { journalPage, journalPageMedia } from "./singletons/journal";
import { portfolioPage, portfolioPageMedia } from "./singletons/portfolio";
import { servicePage, servicePageMedia } from "./singletons/services";
import { destination } from "./documents/destination";
import { destinationMedia } from "./documents/destinationMedia";
import { culture } from "./documents/culture";
import { cultureMedia } from "./documents/cultureMedia";
import { venueRegion } from "./documents/venueRegion";
import { venueRegionMedia } from "./documents/venueRegionMedia";
import { venue } from "./documents/venue";
import { venueMedia } from "./documents/venueMedia";
import { article } from "./documents/article";
import { articleCategory } from "./documents/articleCategory";
import { author } from "./documents/author";
import { portfolio } from "./documents/portfolio";
import { portfolioMedia } from "./documents/portfolioMedia";
import { service } from "./documents/service";
import { serviceMedia } from "./documents/serviceMedia";

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
    pressPage,
    pressPageMedia,
    venuesPage,
    venuesPageMedia,
    journalPage,
    journalPageMedia,
    portfolioPage,
    portfolioPageMedia,
    servicePage,
    servicePageMedia,
    destination,
    destinationMedia,
    culture,
    cultureMedia,
    venueRegion,
    venueRegionMedia,
    venue,
    venueMedia,
    article,
    articleCategory,
    author,
    portfolio,
    portfolioMedia,
    service,
    serviceMedia,
  ],
};
