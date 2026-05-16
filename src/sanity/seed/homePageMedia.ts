/**
 * Seed the `homePageMedia` singleton (single, non-localized document).
 *
 * Holds imagery shared across every locale of the home page — uploading once
 * here means every language gets the same hero, featured-wedding and
 * recent-weddings visuals.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:home-media
 *
 * Idempotent — fixed `_id` + `createOrReplace`. Image assets are left empty;
 * an editor uploads them once through Studio after the schema lands.
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

const SINGLETON_ID = 'homePageMedia'

const DEFAULT_MARQUEE = [
  'Punta Cana',
  'Amalfi',
  'Provence',
  'Santorini',
  'Mallorca',
  "Cap d'Antibes",
  'Mustique',
  'Lake Como',
  'Tuscany',
  'Mykonos',
  'St. Barths',
  'Tulum',
  'Marrakech',
  'Hamptons',
  'Aspen',
]

const doc = {
  _id: SINGLETON_ID,
  _type: 'homePageMedia',
  hero: {},
  marqueeDestinations: DEFAULT_MARQUEE,
  featuredWedding: {},
  recentWeddings: { images: [] },
}

async function run() {
  console.log(`Seeding homePageMedia singleton in ${dataset}/${projectId}…`)
  await client.createOrReplace(doc)
  console.log('✓ Seeded homePageMedia singleton.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
