/**
 * Seed the `venuesPage` singleton across all six locales (+ the shared
 * `venuesPageMedia` stub).
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:venues   (AFTER `npm run seed:venue-regions` —
 * the hub's regions section references the venue-region docs).
 *
 * Idempotent — deterministic IDs + `createOrReplace` for the localized docs;
 * the media stub uses `createIfNotExists`.
 */

import { createClient } from "@sanity/client";
import { randomUUID } from "node:crypto";

import { apiVersion, dataset, projectId } from "../env";
import { locales, type Locale } from "../../i18n/routing";
import { docId as regionDocId, REGION_ORDER } from "./venueRegionCopy/shared";

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

const docId = (locale: Locale) => `venuesPage-${locale}`;
const keyed = <T extends object>(obj: T) => ({ _key: randomUUID(), ...obj });

const ptBlocks = (paragraphs: string[]) =>
  paragraphs.map((text) => ({
    _type: "block",
    _key: randomUUID(),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: randomUUID(), text, marks: [] }],
  }));

// ── Locale-invariant slots ──────────────────────────────────────────────────
const STAT_VALUES = ["52", "12", "240+", "14"] as const;
// Parallel to STAT_VALUES: the first two stats pull live counts from the
// venue / venueRegion docs; the rest keep their typed value.
const STAT_SOURCES = ["venues", "regions", "manual", "manual"] as const;

// ── Per-locale copy ─────────────────────────────────────────────────────────
type Copy = {
  hero: {
    eyebrow: string;
    scriptOverline: string;
    headline: string;
    deck: string;
    captionLeft: string;
    captionCenter: string;
    captionRight: string;
  };
  intro: {
    sideLabel: string;
    sideNote: string;
    headline: string;
    lede: string;
    body: string[];
    statLabels: string[];
  };
  regions: { eyebrow: string; headline: string; intro: string };
  cta: { eyebrow: string; headline: string; body: string; ctaLabel: string };
};

const COPY: Record<Locale, Copy> = {
  en: {
    hero: {
      eyebrow: "The register",
      scriptOverline: "A working register of",
      headline: "selected *houses.*",
      deck: "Private estates, beach clubs, palazzi and architectural rarities we return to year after year — chosen by name, not by directory.",
      captionLeft: "Photographed on Mallorca",
      captionCenter: "Selected venues · 2026",
      captionRight: "Plate I",
    },
    intro: {
      sideLabel: "How we choose",
      sideNote:
        "We list a venue only after we have planned a wedding there. Two-hundred-and-forty weddings, fifty-two houses.",
      headline: "Houses we have\nworked, *more than once.*",
      lede: "Every venue on this register is one we have planned in. We meet the venue manager by name. We know the kitchen's vegetarian station. We know which gardens flood in October.",
      body: [
        "We refuse to recommend a venue we have not worked, and we update the register every season. Some houses fall off — staff turn over, a renovation removes what made the place — and we keep an honest, working note for the studio.",
        "The register is grouped two ways: by typology (private estate, beach club, palazzo, vineyard…) and by region. Click any region below to see the venues we hold there.",
      ],
      statLabels: [
        "Selected venues",
        "Regions",
        "Weddings here",
        "Years working them",
      ],
    },
    regions: {
      eyebrow: "By region",
      headline: "The *register,* by place.",
      intro:
        "Each region opens onto the houses we work there — with editorial notes on the local protocol, weather window, and a working brief for the wedding you might host.",
    },
    cta: {
      eyebrow: "A private conversation —",
      headline: "*Find* your wedding house.",
      body: "Tell us the kind of wedding you are imagining and the region you have in mind. Grecia writes back with a shortlist, personally, within five working days.",
      ctaLabel: "Request a private consultation",
    },
  },

  es: {
    hero: {
      eyebrow: "El registro",
      scriptOverline: "Un registro activo de",
      headline: "casas *selectas.*",
      deck: "Fincas privadas, clubes de playa, palazzi y rarezas arquitectónicas a las que volvemos año tras año, elegidas por su nombre, no por un directorio.",
      captionLeft: "Fotografiado en Mallorca",
      captionCenter: "Locaciones seleccionadas · 2026",
      captionRight: "Lámina I",
    },
    intro: {
      sideLabel: "Cómo elegimos",
      sideNote:
        "Solo incluimos una sede después de haber planificado una boda allí. Doscientas cuarenta bodas, cincuenta y dos casas.",
      headline: "Casas en las que hemos\ntrabajado, *más de una vez.*",
      lede: "Cada sede de este registro es una en la que hemos planificado. Conocemos al gerente de la sede por su nombre. Sabemos cuál es la estación vegetariana de la cocina. Sabemos qué jardines se inundan en octubre.",
      body: [
        "Nos negamos a recomendar una sede en la que no hayamos trabajado, y actualizamos el registro cada temporada. Algunas casas se caen —cambia el personal, una reforma elimina lo que hacía especial al lugar— y mantenemos una nota honesta y práctica para el atelier.",
        "El registro se agrupa de dos formas: por tipología (finca privada, club de playa, palazzo, viñedo…) y por región. Haga clic en cualquier región para ver las sedes que tenemos allí.",
      ],
      statLabels: [
        "Lugares seleccionados",
        "Regiones",
        "Bodas aquí",
        "Años trabajándolas",
      ],
    },
    regions: {
      eyebrow: "Por región",
      headline: "El *registro,* por lugar.",
      intro:
        "Cada región abre a las casas que trabajamos allí, con notas editoriales sobre el protocolo local, la ventana climática y un informe de trabajo para la boda que podría celebrar.",
    },
    cta: {
      eyebrow: "Una conversación privada —",
      headline: "*Encuentre* su casa de boda.",
      body: "Cuéntenos el tipo de boda que imagina y la región que tiene en mente. Grecia responde con una lista, personalmente, en un plazo de cinco días laborables.",
      ctaLabel: "Solicitar una consulta privada",
    },
  },

  fr: {
    hero: {
      eyebrow: "Le registre",
      scriptOverline: "Un registre vivant de",
      headline: "maisons *choisies.*",
      deck: "Domaines privés, beach clubs, palazzi et raretés architecturales où nous revenons année après année — choisis par leur nom, non par un annuaire.",
      captionLeft: "Photographié à Majorque",
      captionCenter: "Lieux sélectionnés · 2026",
      captionRight: "Planche I",
    },
    intro: {
      sideLabel: "Comment nous choisissons",
      sideNote:
        "Nous n'inscrivons un lieu qu'après y avoir organisé un mariage. Deux cent quarante mariages, cinquante-deux maisons.",
      headline: "Des maisons que nous avons\ntravaillées, *plus d'une fois.*",
      lede: "Chaque lieu de ce registre est un lieu où nous avons organisé un mariage. Nous connaissons le directeur du lieu par son nom. Nous connaissons le poste végétarien de la cuisine. Nous savons quels jardins s'inondent en octobre.",
      body: [
        "Nous refusons de recommander un lieu que nous n'avons pas travaillé, et nous mettons le registre à jour chaque saison. Certaines maisons disparaissent — le personnel change, une rénovation efface ce qui faisait le lieu — et nous en tenons une note honnête et pratique pour l'atelier.",
        "Le registre est classé de deux façons : par typologie (domaine privé, beach club, palazzo, vignoble…) et par région. Cliquez sur une région ci-dessous pour voir les lieux que nous y tenons.",
      ],
      statLabels: [
        "Lieux sélectionnés",
        "Régions",
        "Mariages ici",
        "Années à les travailler",
      ],
    },
    regions: {
      eyebrow: "Par région",
      headline: "Le *registre,* par lieu.",
      intro:
        "Chaque région ouvre sur les maisons que nous y travaillons — avec des notes éditoriales sur le protocole local, la fenêtre météo et un brief de travail pour le mariage que vous pourriez organiser.",
    },
    cta: {
      eyebrow: "Une conversation privée —",
      headline: "*Trouvez* votre maison de mariage.",
      body: "Dites-nous le type de mariage que vous imaginez et la région que vous avez en tête. Grecia vous répond avec une présélection, personnellement, sous cinq jours ouvrés.",
      ctaLabel: "Demander une consultation privée",
    },
  },

  pt: {
    hero: {
      eyebrow: "O registo",
      scriptOverline: "Um registo ativo de",
      headline: "casas *seletas.*",
      deck: "Propriedades privadas, clubes de praia, palazzi e raridades arquitetónicas às quais voltamos ano após ano — escolhidas pelo nome, não por um diretório.",
      captionLeft: "Fotografado em Maiorca",
      captionCenter: "Locais selecionados · 2026",
      captionRight: "Estampa I",
    },
    intro: {
      sideLabel: "Como escolhemos",
      sideNote:
        "Só incluímos um local depois de termos planeado um casamento ali. Duzentos e quarenta casamentos, cinquenta e duas casas.",
      headline: "Casas em que já\ntrabalhámos, *mais de uma vez.*",
      lede: "Cada local deste registo é um onde já planeámos. Conhecemos o gestor do local pelo nome. Sabemos qual é a estação vegetariana da cozinha. Sabemos que jardins inundam em outubro.",
      body: [
        "Recusamo-nos a recomendar um local em que não tenhamos trabalhado, e atualizamos o registo a cada estação. Algumas casas saem — muda o pessoal, uma renovação remove o que tornava o lugar especial — e mantemos uma nota honesta e prática para o ateliê.",
        "O registo está agrupado de duas formas: por tipologia (propriedade privada, clube de praia, palazzo, vinha…) e por região. Clique em qualquer região abaixo para ver os locais que temos ali.",
      ],
      statLabels: [
        "Locais selecionados",
        "Regiões",
        "Casamentos aqui",
        "Anos a trabalhá-las",
      ],
    },
    regions: {
      eyebrow: "Por região",
      headline: "O *registo,* por lugar.",
      intro:
        "Cada região abre para as casas que ali trabalhamos — com notas editoriais sobre o protocolo local, a janela climática e um resumo de trabalho para o casamento que poderá realizar.",
    },
    cta: {
      eyebrow: "Uma conversa privada —",
      headline: "*Encontre* a sua casa de casamento.",
      body: "Diga-nos o tipo de casamento que imagina e a região que tem em mente. Grecia responde com uma lista, pessoalmente, no prazo de cinco dias úteis.",
      ctaLabel: "Solicitar uma consulta privada",
    },
  },

  de: {
    hero: {
      eyebrow: "Das Register",
      scriptOverline: "Ein lebendiges Register",
      headline: "ausgewählter *Häuser.*",
      deck: "Privatanwesen, Beach Clubs, Palazzi und architektonische Raritäten, zu denen wir Jahr für Jahr zurückkehren — nach Namen gewählt, nicht nach Verzeichnis.",
      captionLeft: "Fotografiert auf Mallorca",
      captionCenter: "Ausgewählte Orte · 2026",
      captionRight: "Tafel I",
    },
    intro: {
      sideLabel: "Wie wir wählen",
      sideNote:
        "Wir nehmen einen Ort erst auf, nachdem wir dort eine Hochzeit geplant haben. Zweihundertvierzig Hochzeiten, zweiundfünfzig Häuser.",
      headline: "Häuser, die wir mehr als\neinmal *bespielt haben.*",
      lede: "Jeder Ort in diesem Register ist einer, an dem wir geplant haben. Wir kennen den Veranstaltungsleiter beim Namen. Wir kennen die vegetarische Station der Küche. Wir wissen, welche Gärten im Oktober überfluten.",
      body: [
        "Wir empfehlen keinen Ort, an dem wir nicht gearbeitet haben, und aktualisieren das Register jede Saison. Manche Häuser fallen heraus — das Personal wechselt, eine Renovierung nimmt dem Ort, was ihn ausmachte — und wir führen eine ehrliche, praktische Notiz für das Atelier.",
        "Das Register ist auf zwei Arten gegliedert: nach Typologie (Privatanwesen, Beach Club, Palazzo, Weingut…) und nach Region. Klicken Sie auf eine Region, um die Orte zu sehen, die wir dort führen.",
      ],
      statLabels: [
        "Ausgewählte Locations",
        "Regionen",
        "Hochzeiten hier",
        "Jahre der Arbeit daran",
      ],
    },
    regions: {
      eyebrow: "Nach Region",
      headline: "Das *Register,* nach Ort.",
      intro:
        "Jede Region öffnet sich zu den Häusern, die wir dort bespielen — mit redaktionellen Notizen zum lokalen Protokoll, zum Wetterfenster und einem Arbeits-Briefing für die Hochzeit, die Sie ausrichten könnten.",
    },
    cta: {
      eyebrow: "Ein privates Gespräch —",
      headline: "*Finden* Sie Ihr Hochzeitshaus.",
      body: "Sagen Sie uns, welche Hochzeit Sie sich vorstellen und welche Region Sie im Sinn haben. Grecia antwortet persönlich mit einer Auswahl innerhalb von fünf Werktagen.",
      ctaLabel: "Eine private Beratung anfragen",
    },
  },

  it: {
    hero: {
      eyebrow: "Il registro",
      scriptOverline: "Un registro vivo di",
      headline: "case *selezionate.*",
      deck: "Tenute private, beach club, palazzi e rarità architettoniche a cui torniamo anno dopo anno — scelte per nome, non per elenco.",
      captionLeft: "Fotografato a Maiorca",
      captionCenter: "Sedi selezionate · 2026",
      captionRight: "Tavola I",
    },
    intro: {
      sideLabel: "Come scegliamo",
      sideNote:
        "Inseriamo una sede solo dopo avervi organizzato un matrimonio. Duecentoquaranta matrimoni, cinquantadue case.",
      headline: "Case che abbiamo\nlavorato, *più di una volta.*",
      lede: "Ogni sede di questo registro è una in cui abbiamo organizzato. Conosciamo il direttore della sede per nome. Sappiamo qual è la postazione vegetariana della cucina. Sappiamo quali giardini si allagano a ottobre.",
      body: [
        "Ci rifiutiamo di raccomandare una sede in cui non abbiamo lavorato, e aggiorniamo il registro a ogni stagione. Alcune case escono — cambia il personale, una ristrutturazione toglie ciò che rendeva speciale il luogo — e ne teniamo una nota onesta e pratica per l'atelier.",
        "Il registro è raggruppato in due modi: per tipologia (tenuta privata, beach club, palazzo, vigneto…) e per regione. Clicca su una regione qui sotto per vedere le sedi che vi teniamo.",
      ],
      statLabels: [
        "Location selezionate",
        "Regioni",
        "Matrimoni qui",
        "Anni a lavorarle",
      ],
    },
    regions: {
      eyebrow: "Per regione",
      headline: "Il *registro,* per luogo.",
      intro:
        "Ogni regione apre sulle case che vi lavoriamo — con note editoriali sul protocollo locale, sulla finestra meteo e un brief di lavoro per il matrimonio che potreste ospitare.",
    },
    cta: {
      eyebrow: "Una conversazione privata —",
      headline: "*Trova* la tua casa per il matrimonio.",
      body: "Diteci il tipo di matrimonio che immaginate e la regione che avete in mente. Grecia risponde con una rosa di proposte, personalmente, entro cinque giorni lavorativi.",
      ctaLabel: "Richiedere una consulenza privata",
    },
  },
};

function buildDoc(locale: Locale) {
  const c = COPY[locale];

  return {
    hero: c.hero,
    intro: {
      sideLabel: c.intro.sideLabel,
      sideNote: c.intro.sideNote,
      headline: c.intro.headline,
      lede: c.intro.lede,
      body: ptBlocks(c.intro.body),
      stats: STAT_VALUES.map((value, i) => {
        const source = STAT_SOURCES[i];
        return keyed({
          source,
          ...(source === "manual" ? { value } : {}),
          label: c.intro.statLabels[i],
        });
      }),
    },
    regions: {
      eyebrow: c.regions.eyebrow,
      headline: c.regions.headline,
      intro: c.regions.intro,
      items: REGION_ORDER.map((slug) =>
        keyed({ _type: "reference", _weak: true, _ref: regionDocId(slug, locale) }),
      ),
    },
    cta: {
      eyebrow: c.cta.eyebrow,
      headline: c.cta.headline,
      body: c.cta.body,
      ctaLabel: c.cta.ctaLabel,
      ctaHref: "/contact",
    },
  };
}

async function run() {
  console.log(`Seeding venuesPage in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  for (const locale of locales) {
    tx.createOrReplace({
      _id: docId(locale),
      _type: "venuesPage",
      language: locale,
      ...buildDoc(locale),
    });
  }

  tx.createOrReplace({
    _id: "venuesPage-metadata",
    _type: "translation.metadata",
    schemaTypes: ["venuesPage"],
    translations: locales.map((locale) => ({
      _key: locale,
      language: locale,
      value: { _type: "reference", _ref: docId(locale), _weak: true },
    })),
  });

  tx.createIfNotExists({
    _id: "venuesPageMedia",
    _type: "venuesPageMedia",
    hero: { image: { _type: "image", alt: "A selected wedding house" } },
  });

  await tx.commit();
  console.log(
    `✓ Seeded ${locales.length} venuesPage docs + media stub + translation metadata.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
