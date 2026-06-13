/**
 * Seed ONLY the `seo` field on existing localized page documents — without
 * touching any other content.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:seo  (run the page/destination seeds first).
 *
 * Mechanism: a patch with dotted paths + `setIfMissing` mutates only
 * `seo.metaTitle` / `seo.metaDescription` (creating the empty `seo` parent if
 * absent). Re-runs are no-ops and any value an editor already entered is
 * preserved. Nothing else on the document is read or written.
 *
 * Content is minimal, locale-specific placeholder copy that satisfies the two
 * required SEO fields — editors replace it in Studio.
 */

import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";
import { type Locale } from "../../i18n/routing";

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

type SeoType = "homePage" | "destinationsPage" | "aboutPage" | "destination";

type Placeholders = {
  homePage: { title: string; description: string };
  destinationsPage: { title: string; description: string };
  aboutPage: { title: string; description: string };
  destination: { title: (name: string) => string; description: string };
};

// Short (≤60 / ≤160), locale-specific starter copy. Editors replace in Studio.
const PLACEHOLDERS: Record<Locale, Placeholders> = {
  en: {
    homePage: {
      title: "Grecia Mejía Weddings — Destination Weddings",
      description:
        "Curating timeless multicultural destination weddings across Punta Cana, the Caribbean and the world.",
    },
    destinationsPage: {
      title: "Wedding Destinations — Grecia Mejía Weddings",
      description:
        "The places we return to year after year — a considered atlas of multicultural destination weddings.",
    },
    aboutPage: {
      title: "About — Grecia Mejía Weddings",
      description:
        "Fifteen years curating multicultural destination weddings. Meet Grecia Mejía and the studio.",
    },
    destination: {
      title: (name) => `${name} — Destination Weddings`,
      description: "Plan your destination wedding with Grecia Mejía Weddings.",
    },
  },
  es: {
    homePage: {
      title: "Grecia Mejía Weddings — Bodas de Destino",
      description:
        "Bodas multiculturales de destino, curadas con elegancia en Punta Cana, el Caribe y el mundo.",
    },
    destinationsPage: {
      title: "Destinos de Boda — Grecia Mejía Weddings",
      description:
        "Los lugares a los que volvemos año tras año: un atlas pensado de bodas de destino multiculturales.",
    },
    aboutPage: {
      title: "Sobre nosotros — Grecia Mejía Weddings",
      description:
        "Quince años curando bodas multiculturales de destino. Conoce a Grecia Mejía y al atelier.",
    },
    destination: {
      title: (name) => `${name} — Bodas de Destino`,
      description: "Planifica tu boda de destino con Grecia Mejía Weddings.",
    },
  },
  fr: {
    homePage: {
      title: "Grecia Mejía Weddings — Mariages de Destination",
      description:
        "Des mariages multiculturels de destination, composés avec élégance à Punta Cana, aux Caraïbes et dans le monde.",
    },
    destinationsPage: {
      title: "Destinations de Mariage — Grecia Mejía Weddings",
      description:
        "Les lieux où nous revenons année après année : un atlas réfléchi de mariages de destination multiculturels.",
    },
    aboutPage: {
      title: "À propos — Grecia Mejía Weddings",
      description:
        "Quinze ans à composer des mariages multiculturels de destination. Rencontrez Grecia Mejía et l'atelier.",
    },
    destination: {
      title: (name) => `${name} — Mariages de Destination`,
      description:
        "Préparez votre mariage de destination avec Grecia Mejía Weddings.",
    },
  },
  pt: {
    homePage: {
      title: "Grecia Mejía Weddings — Casamentos de Destino",
      description:
        "Casamentos multiculturais de destino, curados com elegância em Punta Cana, nas Caraíbas e no mundo.",
    },
    destinationsPage: {
      title: "Destinos de Casamento — Grecia Mejía Weddings",
      description:
        "Os lugares aos quais voltamos ano após ano: um atlas pensado de casamentos de destino multiculturais.",
    },
    aboutPage: {
      title: "Sobre — Grecia Mejía Weddings",
      description:
        "Quinze anos a curar casamentos multiculturais de destino. Conheça Grecia Mejía e o ateliê.",
    },
    destination: {
      title: (name) => `${name} — Casamentos de Destino`,
      description:
        "Planeie o seu casamento de destino com Grecia Mejía Weddings.",
    },
  },
  de: {
    homePage: {
      title: "Grecia Mejía Weddings — Destinationshochzeiten",
      description:
        "Multikulturelle Destinationshochzeiten, mit Bedacht kuratiert in Punta Cana, der Karibik und weltweit.",
    },
    destinationsPage: {
      title: "Hochzeitsdestinationen — Grecia Mejía Weddings",
      description:
        "Die Orte, zu denen wir Jahr für Jahr zurückkehren — ein bedachter Atlas multikultureller Destinationshochzeiten.",
    },
    aboutPage: {
      title: "Über uns — Grecia Mejía Weddings",
      description:
        "Fünfzehn Jahre multikulturelle Destinationshochzeiten. Lernen Sie Grecia Mejía und das Atelier kennen.",
    },
    destination: {
      title: (name) => `${name} — Destinationshochzeiten`,
      description:
        "Planen Sie Ihre Destinationshochzeit mit Grecia Mejía Weddings.",
    },
  },
  it: {
    homePage: {
      title: "Grecia Mejía Weddings — Matrimoni di Destinazione",
      description:
        "Matrimoni multiculturali di destinazione, curati con eleganza a Punta Cana, ai Caraibi e nel mondo.",
    },
    destinationsPage: {
      title: "Destinazioni di Matrimonio — Grecia Mejía Weddings",
      description:
        "I luoghi a cui torniamo anno dopo anno: un atlante meditato di matrimoni di destinazione multiculturali.",
    },
    aboutPage: {
      title: "Chi siamo — Grecia Mejía Weddings",
      description:
        "Quindici anni a curare matrimoni multiculturali di destinazione. Scopri Grecia Mejía e l'atelier.",
    },
    destination: {
      title: (name) => `${name} — Matrimoni di Destinazione`,
      description:
        "Pianifica il tuo matrimonio di destinazione con Grecia Mejía Weddings.",
    },
  },
};

type SeoDoc = {
  _id: string;
  _type: SeoType;
  language?: Locale;
  name?: string;
};

const docsQuery = `*[_type in ["homePage","destinationsPage","aboutPage","destination"]]{
  _id, _type, language, "name": name
}`;

function resolveSeo(
  doc: SeoDoc,
): { metaTitle: string; metaDescription: string } | null {
  const locale = (doc.language ?? "en") as Locale;
  const copy = PLACEHOLDERS[locale] ?? PLACEHOLDERS.en;

  if (doc._type === "destination") {
    if (!doc.name) return null; // can't build a meaningful title without a name
    return {
      metaTitle: copy.destination.title(doc.name),
      metaDescription: copy.destination.description,
    };
  }

  const entry = copy[doc._type];
  return { metaTitle: entry.title, metaDescription: entry.description };
}

async function run() {
  console.log(`Seeding SEO placeholders in ${dataset}/${projectId}…`);

  const docs = await client.fetch<SeoDoc[]>(docsQuery);
  const tx = client.transaction();
  let patched = 0;

  for (const doc of docs) {
    const seo = resolveSeo(doc);
    if (!seo) continue;

    tx.patch(doc._id, (p) =>
      p.setIfMissing({ seo: {} }).setIfMissing({
        "seo.metaTitle": seo.metaTitle,
        "seo.metaDescription": seo.metaDescription,
      }),
    );
    patched += 1;
  }

  await tx.commit();
  console.log(
    `✓ Patched seo.metaTitle/metaDescription on ${patched} document(s) (only when missing).`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
