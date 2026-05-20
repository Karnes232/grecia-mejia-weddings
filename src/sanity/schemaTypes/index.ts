import { type SchemaTypeDefinition } from "sanity";

import { siteSettings } from "./singletons/siteSettings";
import { navigation } from "./singletons/navigation";
import { footer } from "./singletons/footer";
import { homePage } from "./singletons/homePage";
import { homePageMedia } from "./singletons/homePageMedia";
import { destinationsPage } from "./singletons/destinationsPage";
import { destinationsPageMedia } from "./singletons/destinationsPageMedia";
import { destination } from "./documents/destination";
import { destinationMedia } from "./documents/destinationMedia";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    navigation,
    footer,
    homePage,
    homePageMedia,
    destinationsPage,
    destinationsPageMedia,
    destination,
    destinationMedia,
  ],
};
