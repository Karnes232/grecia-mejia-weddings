/**
 * Seed one sample Portfolio case study ("Saira & Adam", English) + the
 * `portfolioPage` hub singleton (English) + a shared `portfolioMedia` stub, so
 * the hub and a detail page render immediately. Other locales are created in
 * Studio via the translation banner; images are uploaded in Studio.
 *
 * Idempotent — deterministic ids + `createOrReplace` for text, `createIfNotExists`
 * for the media stub (so re-runs never clobber uploaded images).
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:portfolio
 */

import { randomUUID } from "node:crypto";

import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";

const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN env var.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const k = <T extends object>(obj: T) => ({ _key: randomUUID(), ...obj });
const ptBlock = (text: string) => ({
  _type: "block",
  _key: randomUUID(),
  style: "normal" as const,
  markDefs: [],
  children: [{ _type: "span", _key: randomUUID(), text, marks: [] }],
});
const ptBlocks = (paras: string[]) => paras.map(ptBlock);
const weakRef = (ref: string) => ({ _type: "reference", _weak: true, _ref: ref });
const img = (alt: string) => ({ _type: "image" as const, alt });

const SLUG = "luxury-indian-wedding-punta-cana";
const DOC_ID = `portfolio-${SLUG}-en`;
const MEDIA_ID = `portfolioMedia-${SLUG}`;

async function run() {
  console.log(`Seeding portfolio sample in ${dataset}/${projectId}…`);
  const tx = client.transaction();

  // ── Media stub (images uploaded in Studio) ──────────────────────────────
  tx.createIfNotExists({
    _id: MEDIA_ID,
    _type: "portfolioMedia",
    slug: SLUG,
    cardImage: img("Saira & Adam's mandap at Cap Cana"),
    heroImage: img("Saira & Adam's mandap at golden hour, Cap Cana"),
    designImage: img("The Ivory & Marigold design concept"),
    quoteImage: img("Saira & Adam's reception"),
    // Gallery images are uploaded in Studio (no per-image shape to choose —
    // the detail page lays them out automatically from their real dimensions).
    galleryTop: [],
    galleryBottom: [],
  });

  // ── Case study (English) ────────────────────────────────────────────────
  tx.createOrReplace({
    _id: DOC_ID,
    _type: "portfolio",
    language: "en",
    name: "Saira & Adam",
    slug: { _type: "slug", current: SLUG },
    media: weakRef(MEDIA_ID),
    tile: "featured",
    filterTags: ["Indian", "Caribbean"],
    cardMeta: "Hindu · Cap Cana · 312 guests · 2025",
    cardBlurb:
      "A three-day Hindu celebration on the Dominican coast — three hundred guests, four ceremonies, one cohesive arc.",
    hero: {
      eyebrow: "Case Study · Hindu · Cap Cana",
      scriptOverline: "Saira & Adam",
      headline: "A wedding in *three days.*",
      sub: "Cap Cana, Dominican Republic · February 2025 · 312 guests",
      captionLeft: "Photographed by L. Rossi",
      captionCenter: "Mandap at golden hour · Kukua Beach Club",
      captionRight: "Plate I",
    },
    destination: weakRef("destination-punta-cana-en"),
    venue: weakRef("venue-jellyfish-restaurant-en"),
    culture: weakRef("culture-indian-weddings-en"),
    guests: "Three hundred & twelve",
    duration: "Four days · five events",
    season: "February 2025",
    story: {
      sideEyebrow: "The couple",
      sideNote:
        'Saira, from Mumbai by way of London. Adam, from Toronto. They met in New York and married on the Dominican coast — because, as Saira put it, "no one\'s family had a claim to it."',
      headline: "Three cities, three languages, one *coast.*",
      lede: "Saira and Adam came to us with a problem that is, in fact, a kind of luxury: too much family, in too many places, with too many traditions to honour in a single afternoon.",
      body: ptBlocks([
        "Saira's family is Punjabi, observant, and large — two hundred guests would travel from Mumbai, London and Dubai. Adam's family is smaller, Canadian, and secular, with a quiet wish for the wedding not to overwhelm them.",
        "The answer was a four-day arc on a single stretch of Cap Cana coastline, where every ceremony could be held within walking distance, every guest housed in one resort, and the pacing slowed enough that no one felt rushed through a culture not their own.",
      ]),
    },
    quote: {
      quote:
        "She held a wedding in three languages and somehow made it feel like one prayer. She did not plan our day; she translated it.",
      cite: "Saira & Adam · February 2025",
    },
    design: {
      eyebrow: "The design concept",
      headline: "Ivory & *marigold.*",
      body: ptBlocks([
        "We built the wedding around a single tension: the heat of a traditional Punjabi palette against the cool restraint of the Caribbean light. Marigold and deep rose for the ceremony; ivory, sand and unbleached linen for the receptions.",
        "The mandap was a four-pillar floral structure in ivory drapery and marigold ropes, set directly on the sand so the sea filled the frame behind the sacred fire.",
      ]),
      palette: [
        k({ hex: "#f5f0e6", name: "Ivory" }),
        k({ hex: "#e8a843", name: "Marigold" }),
        k({ hex: "#c25422", name: "Deep rose" }),
        k({ hex: "#a7a78b", name: "Sage" }),
        k({ hex: "#4a523d", name: "Olive" }),
      ],
    },
    logistics: {
      eyebrow: "Behind the wedding",
      headline: "The *logistics.*",
      deck: "Four days, five events, three hundred and twelve guests across three continents. What it took.",
      blocks: [
        k({
          title: "The guest list",
          body: "Two hundred guests travelled from Mumbai, London and Dubai; the rest from North America. We coordinated three arrival waves across two days, with airport liaisons and a welcome desk staffed in three languages.",
          rows: [
            k({ label: "Travelled", value: "312 guests · 3 continents" }),
            k({ label: "Hotels", value: "Two resorts, one block" }),
            k({ label: "Transfers", value: "14 coach movements" }),
          ],
        }),
        k({
          title: "The catering",
          body: "A full vegetarian and Jain kitchen ran alongside the resort's, with a visiting chef from Delhi for the pheras lunch. Three meals a day across four days, with dietary protocol mapped per guest.",
          rows: [
            k({ label: "Meals", value: "11 services · 4 days" }),
            k({ label: "Dietary", value: "Veg · Jain · halal · GF" }),
            k({ label: "Chef", value: "Visiting · Delhi" }),
          ],
        }),
        k({
          title: "The ceremonies",
          body: "Five events: mehndi, haldi, sangeet, the baraat-and-pheras wedding day, and a farewell brunch. The pandit travelled from Mumbai; the sangeet choreographer from Delhi.",
          rows: [
            k({ label: "Events", value: "Five · over four days" }),
            k({ label: "Officiant", value: "Pandit · Mumbai" }),
            k({ label: "Languages", value: "Hindi · English · Punjabi" }),
          ],
        }),
      ],
    },
    services: {
      eyebrow: "Services used",
      headline: "What the studio *held.*",
      deck: "Every part of this wedding ran through the studio. Nothing was sub-contracted past our team.",
      items: [
        k({
          number: "01",
          title: "Destination Wedding Planning",
          body: "Twenty-two months, end to end — from first conversation to farewell brunch.",
        }),
        k({
          number: "02",
          title: "Multicultural Wedding Planning",
          body: "Full Hindu-Punjabi ceremony arc, with cultural protocol and a Mumbai pandit.",
        }),
        k({
          number: "03",
          title: "Wedding Weekend Design",
          body: "A four-day arc paced for three hundred guests across three continents.",
        }),
        k({
          number: "04",
          title: "Guest Experience",
          body: "Arrivals, transfers, welcome desk, excursions, gifting and farewells.",
        }),
      ],
    },
    related: {
      eyebrow: "Continue reading",
      headline: "Related *writing.*",
      articles: [
        k(weakRef("article-best-indian-wedding-venues-punta-cana-en")),
        k(weakRef("article-the-sangeet-night-before-en")),
        k(weakRef("article-luxury-punta-cana-wedding-cost-en")),
      ],
    },
    cta: {
      eyebrow: "A private conversation —",
      headline: "Let us write *your* story.",
      body: "We accept fourteen weddings a year. If yours might be one of them, Grecia writes back personally within five working days.",
      ctaLabel: "Request a private consultation →",
      ctaHref: "/contact",
    },
  });

  tx.createOrReplace({
    _id: `portfolio-${SLUG}-metadata`,
    _type: "translation.metadata",
    schemaTypes: ["portfolio"],
    translations: [
      { _key: "en", language: "en", value: weakRef(DOC_ID) },
    ],
  });

  // ── Hub singleton (English) ─────────────────────────────────────────────
  tx.createOrReplace({
    _id: "portfolioPage-en",
    _type: "portfolioPage",
    language: "en",
    hero: {
      eyebrow: "The portfolio",
      scriptOverline: "A register of",
      headline: "weddings, *told fully.*",
      deck: "Not a gallery of pretty photographs — a set of editorial case studies. The couple, the culture, the design, and the year of work behind a single day.",
      captionLeft: "Cap Cana · Dominican Republic",
      captionCenter: "Selected weddings · 2024 – 2026",
      captionRight: "Plate I",
    },
    intro: {
      sideEyebrow: "How we publish",
      sideNote:
        "We publish a wedding only with the couple's blessing — and only as a full story, never a stray photograph.",
      headline: "Every wedding, a *complete* story.",
      lede: "A portfolio of photographs tells you a planner has taste. A portfolio of case studies tells you how they think.",
      body: ptBlocks([
        "Each wedding below is documented the way we plan it — from the first conversation with the couple through the design concept, the cultural choreography, the logistics, and the services that held it together.",
        "We publish perhaps a third of the weddings we plan. The rest stay private at the couple's request — which we consider the higher compliment.",
      ]),
    },
    grid: {
      eyebrow: "Selected weddings",
      headline: "The *register.*",
      filterLabel: "Browse",
      caseStudies: [k(weakRef(DOC_ID))],
    },
    cta: {
      eyebrow: "A private conversation —",
      headline: "Let us write *your* story.",
      body: "We accept fourteen weddings a year. If yours might be one of them, Grecia writes back personally within five working days.",
      ctaLabel: "Request a private consultation →",
      ctaHref: "/contact",
    },
  });

  tx.createOrReplace({
    _id: "portfolioPage-metadata",
    _type: "translation.metadata",
    schemaTypes: ["portfolioPage"],
    translations: [
      { _key: "en", language: "en", value: weakRef("portfolioPage-en") },
    ],
  });

  await tx.commit();
  console.log(
    "✓ Seeded portfolio sample (case study + hub + media stub) in English.",
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
