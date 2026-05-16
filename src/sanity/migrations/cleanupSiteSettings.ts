/**
 * One-shot cleanup: delete the legacy per-locale `siteSettings` documents
 * and their `translation.metadata` companion. Run AFTER seeding the new
 * singleton (`npm run seed:settings`) and verifying it in Studio.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npx tsx --env-file=.env.local src/sanity/migrations/cleanupSiteSettings.ts
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

const NEW_SINGLETON_ID = 'siteSettings'

async function run() {
  console.log(`Cleaning legacy siteSettings docs in ${dataset}/${projectId}…`)

  // Find all siteSettings docs except the new singleton (covers drafts too).
  const stale: { _id: string }[] = await client.fetch(
    `*[_type == "siteSettings" && _id != $keep && !(_id in path("drafts." + $keep))]{ _id }`,
    { keep: NEW_SINGLETON_ID },
  )

  // Find translation.metadata that references siteSettings.
  const meta: { _id: string }[] = await client.fetch(
    `*[_type == "translation.metadata" && "siteSettings" in schemaTypes]{ _id }`,
  )

  const ids = [...stale, ...meta].map((d) => d._id)
  if (ids.length === 0) {
    console.log('Nothing to delete.')
    return
  }

  console.log('Deleting:', ids)
  const tx = client.transaction()
  for (const id of ids) tx.delete(id)
  await tx.commit()
  console.log(`✓ Deleted ${ids.length} document(s).`)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
