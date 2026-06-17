/**
 * Seed the `journalPage` singleton across all six locales (+ the shared
 * `journalPageMedia` stub). Mirrors `venuesPage`.
 *
 * `featuredArticle` points at the canonical featured article
 * (`article-best-indian-wedding-venues-punta-cana-<locale>`); the hub query
 * falls back to the most recent featured article if it's empty.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:journal
 *
 * Idempotent — deterministic ids + `createOrReplace` for the localized docs;
 * the media stub uses `createIfNotExists`.
 */

import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";
import { locales, type Locale } from "../../i18n/routing";

import { articleDocId } from "./journalCopy/shared";

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

const docId = (locale: Locale) => `journalPage-${locale}`;
const FEATURED_SLUG = "best-indian-wedding-venues-punta-cana";

// ── Per-locale copy (mirrors the journalPage schema) ────────────────────────
type Copy = {
  hero: {
    eyebrow: string;
    scriptOverline: string;
    headline: string;
    deck: string;
    bottomLeft: string;
    bottomCenter: string;
    bottomRight: string;
  };
  grid: { eyebrow: string; headline: string };
  newsletter: { script: string; headline: string; body: string };
  cta: {
    eyebrow: string;
    headline: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
};

const COPY: Record<Locale, Copy> = {
  en: {
    hero: {
      eyebrow: "The Journal",
      scriptOverline: "Dispatches on",
      headline: "the *considered* wedding.",
      deck: "Long-form writing on destination weddings, multicultural tradition, venues, cost and design — written by the studio, for the couples planning the most important weekend of their lives.",
      bottomLeft: "updated weekly",
      bottomCenter: "The Journal · Volume III",
      bottomRight: "2026",
    },
    grid: { eyebrow: "Latest dispatches", headline: "Recent *writing.*" },
    newsletter: {
      script: "From our desk to yours —",
      headline: "The *monthly* dispatch.",
      body: "One considered letter a month: a new destination, a wedding we loved, and the occasional honest note on cost. No noise.",
    },
    cta: {
      eyebrow: "A private conversation —",
      headline: "*Begin* your Punta Cana wedding.",
      body: "Tell us your tradition, your guest count, and a rough date. Grecia writes back, personally, within five working days.",
      ctaLabel: "Request a private consultation",
      ctaHref: "/contact",
    },
  },

  es: {
    hero: {
      eyebrow: "El Diario",
      scriptOverline: "Crónicas sobre",
      headline: "la boda *meditada*.",
      deck: "Textos extensos sobre bodas de destino, tradición multicultural, sedes, costos y diseño, escritos por el estudio, para las parejas que planifican el fin de semana más importante de su vida.",
      bottomLeft: "actualizado semanalmente",
      bottomCenter: "El Diario · Volumen III",
      bottomRight: "2026",
    },
    grid: { eyebrow: "Últimas crónicas", headline: "Textos *recientes.*" },
    newsletter: {
      script: "De nuestro escritorio al suyo —",
      headline: "La crónica *mensual*.",
      body: "Una carta meditada al mes: un nuevo destino, una boda que amamos y, de vez en cuando, una nota honesta sobre costos. Sin ruido.",
    },
    cta: {
      eyebrow: "Una conversación privada —",
      headline: "*Comience* su boda en Punta Cana.",
      body: "Cuéntenos su tradición, su número de invitados y una fecha aproximada. Grecia responde, personalmente, en un plazo de cinco días laborables.",
      ctaLabel: "Solicitar una consulta privada",
      ctaHref: "/contact",
    },
  },

  fr: {
    hero: {
      eyebrow: "Le Journal",
      scriptOverline: "Chroniques sur",
      headline: "le mariage *pensé*.",
      deck: "Des textes longs sur les mariages de destination, la tradition multiculturelle, les lieux, le coût et le design — écrits par l'atelier, pour les couples qui organisent le week-end le plus important de leur vie.",
      bottomLeft: "mis à jour chaque semaine",
      bottomCenter: "Le Journal · Volume III",
      bottomRight: "2026",
    },
    grid: { eyebrow: "Dernières chroniques", headline: "Textes *récents.*" },
    newsletter: {
      script: "De notre bureau au vôtre —",
      headline: "La chronique *mensuelle*.",
      body: "Une lettre réfléchie par mois : une nouvelle destination, un mariage que nous avons aimé et, parfois, une note honnête sur le coût. Sans bruit.",
    },
    cta: {
      eyebrow: "Une conversation privée —",
      headline: "*Commencez* votre mariage à Punta Cana.",
      body: "Dites-nous votre tradition, votre nombre d'invités et une date approximative. Grecia vous répond, personnellement, sous cinq jours ouvrés.",
      ctaLabel: "Demander une consultation privée",
      ctaHref: "/contact",
    },
  },

  pt: {
    hero: {
      eyebrow: "O Diário",
      scriptOverline: "Crónicas sobre",
      headline: "o casamento *pensado*.",
      deck: "Textos longos sobre casamentos de destino, tradição multicultural, locais, custos e design — escritos pelo atelier, para os casais que planeiam o fim de semana mais importante da sua vida.",
      bottomLeft: "atualizado semanalmente",
      bottomCenter: "O Diário · Volume III",
      bottomRight: "2026",
    },
    grid: { eyebrow: "Últimas crónicas", headline: "Textos *recentes.*" },
    newsletter: {
      script: "Da nossa secretária para a sua —",
      headline: "A crónica *mensal*.",
      body: "Uma carta pensada por mês: um novo destino, um casamento que adorámos e, de vez em quando, uma nota honesta sobre custos. Sem ruído.",
    },
    cta: {
      eyebrow: "Uma conversa privada —",
      headline: "*Comece* o seu casamento em Punta Cana.",
      body: "Diga-nos a sua tradição, o número de convidados e uma data aproximada. Grecia responde, pessoalmente, no prazo de cinco dias úteis.",
      ctaLabel: "Solicitar uma consulta privada",
      ctaHref: "/contact",
    },
  },

  de: {
    hero: {
      eyebrow: "Das Journal",
      scriptOverline: "Berichte über",
      headline: "die *durchdachte* Hochzeit.",
      deck: "Lange Texte über Destination-Hochzeiten, multikulturelle Tradition, Orte, Kosten und Design — geschrieben vom Studio, für die Paare, die das wichtigste Wochenende ihres Lebens planen.",
      bottomLeft: "wöchentlich aktualisiert",
      bottomCenter: "Das Journal · Band III",
      bottomRight: "2026",
    },
    grid: { eyebrow: "Neueste Berichte", headline: "Aktuelle *Texte.*" },
    newsletter: {
      script: "Von unserem Schreibtisch an Ihren —",
      headline: "Der *monatliche* Bericht.",
      body: "Ein durchdachter Brief im Monat: ein neues Reiseziel, eine Hochzeit, die wir liebten, und gelegentlich eine ehrliche Notiz zu den Kosten. Kein Lärm.",
    },
    cta: {
      eyebrow: "Ein privates Gespräch —",
      headline: "*Beginnen* Sie Ihre Hochzeit in Punta Cana.",
      body: "Sagen Sie uns Ihre Tradition, Ihre Gästezahl und ein ungefähres Datum. Grecia antwortet Ihnen persönlich innerhalb von fünf Werktagen.",
      ctaLabel: "Eine private Beratung anfragen",
      ctaHref: "/contact",
    },
  },

  it: {
    hero: {
      eyebrow: "Il Diario",
      scriptOverline: "Cronache su",
      headline: "il matrimonio *pensato*.",
      deck: "Testi lunghi su matrimoni di destinazione, tradizione multiculturale, sedi, costi e design — scritti dallo studio, per le coppie che organizzano il fine settimana più importante della loro vita.",
      bottomLeft: "aggiornato ogni settimana",
      bottomCenter: "Il Diario · Volume III",
      bottomRight: "2026",
    },
    grid: { eyebrow: "Ultime cronache", headline: "Testi *recenti.*" },
    newsletter: {
      script: "Dalla nostra scrivania alla tua —",
      headline: "La cronaca *mensile*.",
      body: "Una lettera pensata al mese: una nuova destinazione, un matrimonio che abbiamo amato e, di tanto in tanto, una nota onesta sui costi. Nessun rumore.",
    },
    cta: {
      eyebrow: "Una conversazione privata —",
      headline: "*Inizia* il tuo matrimonio a Punta Cana.",
      body: "Diteci la vostra tradizione, il numero di invitati e una data indicativa. Grecia risponde, personalmente, entro cinque giorni lavorativi.",
      ctaLabel: "Richiedere una consulenza privata",
      ctaHref: "/contact",
    },
  },
};

function buildDoc(locale: Locale) {
  const c = COPY[locale];
  return {
    hero: c.hero,
    featuredArticle: {
      _type: "reference",
      _weak: true,
      _ref: articleDocId(FEATURED_SLUG, locale),
    },
    grid: c.grid,
    newsletter: c.newsletter,
    cta: c.cta,
  };
}

async function run() {
  console.log(`Seeding journalPage in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  for (const locale of locales) {
    tx.createOrReplace({
      _id: docId(locale),
      _type: "journalPage",
      language: locale,
      ...buildDoc(locale),
    });
  }

  tx.createOrReplace({
    _id: "journalPage-metadata",
    _type: "translation.metadata",
    schemaTypes: ["journalPage"],
    translations: locales.map((locale) => ({
      _key: locale,
      language: locale,
      value: { _type: "reference", _ref: docId(locale), _weak: true },
    })),
  });

  tx.createIfNotExists({
    _id: "journalPageMedia",
    _type: "journalPageMedia",
    hero: { image: { _type: "image", alt: "The Journal" } },
  });

  await tx.commit();
  console.log(
    `✓ Seeded ${locales.length} journalPage docs + media stub + translation metadata.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
