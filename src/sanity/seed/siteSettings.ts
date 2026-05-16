/**
 * Seed the `siteSettings` singleton (single, non-localized document).
 *
 * Only `signatureParagraph` is multilingual — stored as an object keyed by locale.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:settings
 *
 * Idempotent — fixed `_id` + `createOrReplace`.
 */

import { createClient } from '@sanity/client'

import { apiVersion, dataset, projectId } from '../env'

const token = process.env.SANITY_API_WRITE_TOKEN
if (!token) {
  console.error('Missing SANITY_API_WRITE_TOKEN env var.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

const SINGLETON_ID = 'siteSettings'

const SIGNATURE_PARAGRAPH = {
  en: 'Curating timeless multicultural destination weddings across Punta Cana, the Caribbean and the world.',
  es: 'Curando bodas multiculturales atemporales en destinos de Punta Cana, el Caribe y el mundo.',
  fr: 'Curation de mariages multiculturels intemporels à Punta Cana, dans les Caraïbes et à travers le monde.',
  pt: 'Curadoria de casamentos multiculturais atemporais em Punta Cana, no Caribe e pelo mundo.',
  de: 'Kuratierte multikulturelle Destination-Hochzeiten in Punta Cana, der Karibik und weltweit — zeitlos inszeniert.',
  it: 'Curiamo matrimoni multiculturali senza tempo a Punta Cana, nei Caraibi e in tutto il mondo.',
}

const doc = {
  _id: SINGLETON_ID,
  _type: 'siteSettings',
  brandName: 'Grecia Mejía',
  tagline: 'Weddings · Since 2011',
  signatureParagraph: SIGNATURE_PARAGRAPH,
  copyrightLine:
    '© {year} · Grecia Mejía Weddings · Curating timeless weddings since 2011',
  contact: {
    phone: '+1 829 000 0000',
    email: 'hello@greciamejia.com',
    whatsappUrl: 'https://wa.me/18290000000',
    instagramUrl: 'https://instagram.com/greciamejiaweddings',
  },
  studios: [
    { _key: 'punta-cana', label: 'Punta Cana' },
    { _key: 'milan', label: 'Milan', year: '2026' },
    { _key: 'paris', label: 'Paris', year: '2027' },
  ],
}

async function run() {
  console.log(`Seeding siteSettings singleton in ${dataset}/${projectId}…`)
  await client.createOrReplace(doc)
  console.log('✓ Seeded siteSettings singleton.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
