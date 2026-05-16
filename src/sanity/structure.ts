import type { StructureResolver } from 'sanity/structure'

const SINGLETON_TYPES = new Set(['siteSettings', 'navigation', 'footer'])

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .icon(() => '⚙️')
        .schemaType('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings'),
        ),
      S.listItem()
        .title('Navigation')
        .icon(() => '🧭')
        .schemaType('navigation')
        .child(
          S.documentTypeList('navigation')
            .title('Navigation')
            .filter('_type == "navigation"'),
        ),
      S.listItem()
        .title('Footer')
        .icon(() => '🦶')
        .schemaType('footer')
        .child(
          S.documentTypeList('footer')
            .title('Footer')
            .filter('_type == "footer"'),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETON_TYPES.has(item.getId() ?? ''),
      ),
    ])
