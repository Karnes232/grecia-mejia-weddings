import { type SchemaTypeDefinition } from 'sanity'

import { siteSettings } from './singletons/siteSettings'
import { navigation } from './singletons/navigation'
import { footer } from './singletons/footer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, navigation, footer],
}
