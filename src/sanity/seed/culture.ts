/**
 * Seed the eight `culture` traditions across all six locales (+ a shared
 * `cultureMedia` stub each), plus per-culture `translation.metadata`.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:cultures
 *
 * Idempotent — deterministic IDs + `createOrReplace` for the localized text
 * docs, `createIfNotExists` for media stubs (so re-runs never clobber uploaded
 * images). Content mirrors the design handoff (`pages/multicultural-hub.jsx`).
 *
 * Slugs and tile/number layout are locale-invariant; everything editorial is
 * fully translated. The card meta line is kept invariant where it is a list of
 * proper nouns (region/sub-tradition names); the generic "Discover" call is
 * translated.
 */

import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";
import { locales, type Locale } from "../../i18n/routing";

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

const docId = (slug: string, locale: Locale) => `culture-${slug}-${locale}`;
const metadataId = (slug: string) => `culture-${slug}-metadata`;
const mediaId = (slug: string) => `cultureMedia-${slug}`;

// ── Locale-invariant layout (mirrors the atlas mosaic) ─────────────────────
type CultureMeta = { slug: string; number: string; tile: string; alt: string };

const CULTURE_META: CultureMeta[] = [
  { slug: "indian-weddings", number: "01", tile: "hero", alt: "An Indian wedding mandap" },
  { slug: "jewish-weddings", number: "02", tile: "tall", alt: "A Jewish wedding chuppah" },
  { slug: "arab-weddings", number: "03", tile: "square", alt: "Arab wedding floral design" },
  { slug: "south-asian-weddings", number: "04", tile: "square", alt: "A South Asian bride" },
  { slug: "christian-weddings", number: "05", tile: "square", alt: "A Catholic wedding chapel" },
  { slug: "interfaith-weddings", number: "06", tile: "wide", alt: "An interfaith ceremony" },
  { slug: "latin-weddings", number: "07", tile: "wide", alt: "A Latin wedding celebration" },
  { slug: "european-weddings", number: "08", tile: "full", alt: "A European castle wedding" },
];

// ── Content (per locale, keyed by slug) ────────────────────────────────────
type CultureCopy = {
  name: string;
  cardEyebrow: string;
  cardBlurb: string;
  cardMeta: string;
  intro: string;
};

type LocaleCopy = Record<string, CultureCopy>;

const CONTENT: Record<Locale, LocaleCopy> = {
  en: {
    "indian-weddings": {
      name: "Indian Weddings",
      cardEyebrow: "The studio's most-held tradition",
      cardBlurb:
        "Mehndi, sangeet, haldi, baraat, varmala, pheras and reception — held across three-to-five days, often for two-hundred-to-eight-hundred guests.",
      cardMeta: "Punjabi · Gujarati · South Indian · Sikh",
      intro:
        "The tradition the studio has held more than any other — a three-to-five day arc kept by a pandit we have worked with for fourteen years.",
    },
    "jewish-weddings": {
      name: "Jewish Weddings",
      cardEyebrow: "Jewish",
      cardBlurb: "Chuppah, ketubah, sheva brachot — Orthodox, Conservative, Reform.",
      cardMeta: "Discover",
      intro:
        "From the chuppah to the ketubah, held with a rabbi and a kosher caterer who travel with us to the coast.",
    },
    "arab-weddings": {
      name: "Arab Weddings",
      cardEyebrow: "Arab",
      cardBlurb: "Zaffe, henna, katb el-kitab. Lebanese, Saudi, Egyptian protocol.",
      cardMeta: "Discover",
      intro:
        "Zaffe processions, henna nights and katb el-kitab, held to Lebanese, Saudi and Egyptian protocol.",
    },
    "south-asian-weddings": {
      name: "South Asian Weddings",
      cardEyebrow: "South Asian",
      cardBlurb: "Hindu, Sikh, Muslim, Sri Lankan, Bangladeshi.",
      cardMeta: "Discover",
      intro:
        "Hindu, Sikh, Muslim, Sri Lankan and Bangladeshi ceremonies, each held by specialists who have lived inside the tradition.",
    },
    "christian-weddings": {
      name: "Christian Weddings",
      cardEyebrow: "Christian",
      cardBlurb: "Catholic, Orthodox, Protestant. Cathedral or garden.",
      cardMeta: "Discover",
      intro:
        "Catholic, Orthodox and Protestant ceremonies — from a cathedral mass to a garden blessing.",
    },
    "interfaith-weddings": {
      name: "Interfaith Weddings",
      cardEyebrow: "Interfaith",
      cardBlurb:
        "Two clergy. Two languages. One cohesive ceremony arc. The studio's specialty.",
      cardMeta: "Discover",
      intro:
        "Two clergy, two languages, one cohesive ceremony arc — the work the studio is asked for most.",
    },
    "latin-weddings": {
      name: "Latin Weddings",
      cardEyebrow: "Latin",
      cardBlurb: "Arras, lazo, padrinos. Bilingual receptions with mariachi or bachata.",
      cardMeta: "Discover",
      intro:
        "Arras, lazo and padrinos, with bilingual receptions carried by mariachi or bachata.",
    },
    "european-weddings": {
      name: "European Weddings",
      cardEyebrow: "European",
      cardBlurb:
        "Châteaux, palazzi, regional protocol. French, Italian, Spanish, German.",
      cardMeta: "Discover",
      intro:
        "Châteaux and palazzi, held to French, Italian, Spanish and German regional protocol.",
    },
  },
  es: {
    "indian-weddings": {
      name: "Bodas Indias",
      cardEyebrow: "La tradición que más ha celebrado el atelier",
      cardBlurb:
        "Mehndi, sangeet, haldi, baraat, varmala, pheras y recepción — celebradas a lo largo de tres a cinco días, a menudo para doscientos a ochocientos invitados.",
      cardMeta: "Punjabi · Gujarati · Sur de India · Sij",
      intro:
        "La tradición que el atelier ha celebrado más que ninguna otra: un arco de tres a cinco días sostenido por un pandit con quien trabajamos desde hace catorce años.",
    },
    "jewish-weddings": {
      name: "Bodas Judías",
      cardEyebrow: "Judía",
      cardBlurb: "Chupá, ketubá, sheva brajot — ortodoxa, conservadora, reformista.",
      cardMeta: "Descubrir",
      intro:
        "De la chupá a la ketubá, celebradas con un rabino y un catering kosher que viajan con nosotros a la costa.",
    },
    "arab-weddings": {
      name: "Bodas Árabes",
      cardEyebrow: "Árabe",
      cardBlurb: "Zaffe, henna, katb el-kitab. Protocolo libanés, saudí, egipcio.",
      cardMeta: "Descubrir",
      intro:
        "Cortejos zaffe, noches de henna y katb el-kitab, celebrados según el protocolo libanés, saudí y egipcio.",
    },
    "south-asian-weddings": {
      name: "Bodas del Sur de Asia",
      cardEyebrow: "Sur de Asia",
      cardBlurb: "Hindú, sij, musulmana, esrilanquesa, bangladesí.",
      cardMeta: "Descubrir",
      intro:
        "Ceremonias hindúes, sijs, musulmanas, esrilanquesas y bangladesíes, cada una sostenida por especialistas que han vivido dentro de la tradición.",
    },
    "christian-weddings": {
      name: "Bodas Cristianas",
      cardEyebrow: "Cristiana",
      cardBlurb: "Católica, ortodoxa, protestante. Catedral o jardín.",
      cardMeta: "Descubrir",
      intro:
        "Ceremonias católicas, ortodoxas y protestantes, desde una misa en catedral hasta una bendición en el jardín.",
    },
    "interfaith-weddings": {
      name: "Bodas Interreligiosas",
      cardEyebrow: "Interreligiosa",
      cardBlurb:
        "Dos oficiantes. Dos idiomas. Un único arco ceremonial cohesivo. La especialidad del atelier.",
      cardMeta: "Descubrir",
      intro:
        "Dos oficiantes, dos idiomas, un único arco ceremonial cohesivo: el trabajo que más se nos pide.",
    },
    "latin-weddings": {
      name: "Bodas Latinas",
      cardEyebrow: "Latina",
      cardBlurb: "Arras, lazo, padrinos. Recepciones bilingües con mariachi o bachata.",
      cardMeta: "Descubrir",
      intro:
        "Arras, lazo y padrinos, con recepciones bilingües al ritmo del mariachi o la bachata.",
    },
    "european-weddings": {
      name: "Bodas Europeas",
      cardEyebrow: "Europea",
      cardBlurb:
        "Châteaux, palazzi, protocolo regional. Francesa, italiana, española, alemana.",
      cardMeta: "Descubrir",
      intro:
        "Châteaux y palazzi, celebradas según el protocolo regional francés, italiano, español y alemán.",
    },
  },
  fr: {
    "indian-weddings": {
      name: "Mariages Indiens",
      cardEyebrow: "La tradition la plus organisée par l'atelier",
      cardBlurb:
        "Mehndi, sangeet, haldi, baraat, varmala, pheras et réception — tenus sur trois à cinq jours, souvent pour deux cents à huit cents invités.",
      cardMeta: "Pendjabi · Gujarati · Inde du Sud · Sikh",
      intro:
        "La tradition que l'atelier a organisée plus que toute autre — une trame de trois à cinq jours portée par un pandit avec qui nous travaillons depuis quatorze ans.",
    },
    "jewish-weddings": {
      name: "Mariages Juifs",
      cardEyebrow: "Juif",
      cardBlurb: "Houppa, ketouba, sheva brakhot — orthodoxe, massorti, libéral.",
      cardMeta: "Découvrir",
      intro:
        "De la houppa à la ketouba, tenus avec un rabbin et un traiteur casher qui voyagent avec nous jusqu'à la côte.",
    },
    "arab-weddings": {
      name: "Mariages Arabes",
      cardEyebrow: "Arabe",
      cardBlurb: "Zaffe, henné, katb el-kitab. Protocole libanais, saoudien, égyptien.",
      cardMeta: "Découvrir",
      intro:
        "Cortèges zaffe, soirées de henné et katb el-kitab, tenus selon le protocole libanais, saoudien et égyptien.",
    },
    "south-asian-weddings": {
      name: "Mariages d'Asie du Sud",
      cardEyebrow: "Asie du Sud",
      cardBlurb: "Hindou, sikh, musulman, sri-lankais, bangladais.",
      cardMeta: "Découvrir",
      intro:
        "Cérémonies hindoues, sikhes, musulmanes, sri-lankaises et bangladaises, chacune portée par des spécialistes qui ont vécu au sein de la tradition.",
    },
    "christian-weddings": {
      name: "Mariages Chrétiens",
      cardEyebrow: "Chrétien",
      cardBlurb: "Catholique, orthodoxe, protestant. Cathédrale ou jardin.",
      cardMeta: "Découvrir",
      intro:
        "Cérémonies catholiques, orthodoxes et protestantes — d'une messe en cathédrale à une bénédiction au jardin.",
    },
    "interfaith-weddings": {
      name: "Mariages Interconfessionnels",
      cardEyebrow: "Interconfessionnel",
      cardBlurb:
        "Deux officiants. Deux langues. Une seule trame cérémonielle cohérente. La spécialité de l'atelier.",
      cardMeta: "Découvrir",
      intro:
        "Deux officiants, deux langues, une seule trame cérémonielle cohérente — le travail qu'on nous demande le plus.",
    },
    "latin-weddings": {
      name: "Mariages Latins",
      cardEyebrow: "Latin",
      cardBlurb: "Arras, lazo, padrinos. Réceptions bilingues avec mariachi ou bachata.",
      cardMeta: "Découvrir",
      intro:
        "Arras, lazo et padrinos, avec des réceptions bilingues portées par le mariachi ou la bachata.",
    },
    "european-weddings": {
      name: "Mariages Européens",
      cardEyebrow: "Européen",
      cardBlurb:
        "Châteaux, palazzi, protocole régional. Français, italien, espagnol, allemand.",
      cardMeta: "Découvrir",
      intro:
        "Châteaux et palazzi, tenus selon le protocole régional français, italien, espagnol et allemand.",
    },
  },
  pt: {
    "indian-weddings": {
      name: "Casamentos Indianos",
      cardEyebrow: "A tradição que o ateliê mais realizou",
      cardBlurb:
        "Mehndi, sangeet, haldi, baraat, varmala, pheras e receção — realizados ao longo de três a cinco dias, muitas vezes para duzentos a oitocentos convidados.",
      cardMeta: "Punjabi · Gujarati · Sul da Índia · Sikh",
      intro:
        "A tradição que o ateliê realizou mais do que qualquer outra — um arco de três a cinco dias conduzido por um pandit com quem trabalhamos há catorze anos.",
    },
    "jewish-weddings": {
      name: "Casamentos Judaicos",
      cardEyebrow: "Judaico",
      cardBlurb: "Chupá, ketubá, sheva brachot — ortodoxo, conservador, reformista.",
      cardMeta: "Descobrir",
      intro:
        "Da chupá à ketubá, realizados com um rabino e um catering kosher que viajam connosco até à costa.",
    },
    "arab-weddings": {
      name: "Casamentos Árabes",
      cardEyebrow: "Árabe",
      cardBlurb: "Zaffe, hena, katb el-kitab. Protocolo libanês, saudita, egípcio.",
      cardMeta: "Descobrir",
      intro:
        "Cortejos zaffe, noites de hena e katb el-kitab, realizados segundo o protocolo libanês, saudita e egípcio.",
    },
    "south-asian-weddings": {
      name: "Casamentos do Sul da Ásia",
      cardEyebrow: "Sul da Ásia",
      cardBlurb: "Hindu, sikh, muçulmano, cingalês, bangladechiano.",
      cardMeta: "Descobrir",
      intro:
        "Cerimónias hindus, sikhs, muçulmanas, cingalesas e bangladechianas, cada uma conduzida por especialistas que viveram dentro da tradição.",
    },
    "christian-weddings": {
      name: "Casamentos Cristãos",
      cardEyebrow: "Cristão",
      cardBlurb: "Católico, ortodoxo, protestante. Catedral ou jardim.",
      cardMeta: "Descobrir",
      intro:
        "Cerimónias católicas, ortodoxas e protestantes — de uma missa em catedral a uma bênção no jardim.",
    },
    "interfaith-weddings": {
      name: "Casamentos Inter-religiosos",
      cardEyebrow: "Inter-religioso",
      cardBlurb:
        "Dois celebrantes. Duas línguas. Um único arco cerimonial coeso. A especialidade do ateliê.",
      cardMeta: "Descobrir",
      intro:
        "Dois celebrantes, duas línguas, um único arco cerimonial coeso — o trabalho que mais nos pedem.",
    },
    "latin-weddings": {
      name: "Casamentos Latinos",
      cardEyebrow: "Latino",
      cardBlurb: "Arras, lazo, padrinhos. Receções bilingues com mariachi ou bachata.",
      cardMeta: "Descobrir",
      intro:
        "Arras, lazo e padrinhos, com receções bilingues conduzidas por mariachi ou bachata.",
    },
    "european-weddings": {
      name: "Casamentos Europeus",
      cardEyebrow: "Europeu",
      cardBlurb:
        "Châteaux, palazzi, protocolo regional. Francês, italiano, espanhol, alemão.",
      cardMeta: "Descobrir",
      intro:
        "Châteaux e palazzi, realizados segundo o protocolo regional francês, italiano, espanhol e alemão.",
    },
  },
  de: {
    "indian-weddings": {
      name: "Indische Hochzeiten",
      cardEyebrow: "Die vom Atelier am häufigsten gehaltene Tradition",
      cardBlurb:
        "Mehndi, Sangeet, Haldi, Baraat, Varmala, Pheras und Empfang — über drei bis fünf Tage gehalten, oft für zweihundert bis achthundert Gäste.",
      cardMeta: "Punjabi · Gujarati · Südindisch · Sikh",
      intro:
        "Die Tradition, die das Atelier häufiger als jede andere gehalten hat — ein drei- bis fünftägiger Bogen, getragen von einem Pandit, mit dem wir seit vierzehn Jahren arbeiten.",
    },
    "jewish-weddings": {
      name: "Jüdische Hochzeiten",
      cardEyebrow: "Jüdisch",
      cardBlurb: "Chuppa, Ketubba, Sheva Brachot — orthodox, konservativ, liberal.",
      cardMeta: "Entdecken",
      intro:
        "Von der Chuppa bis zur Ketubba, gehalten mit einem Rabbiner und einem koscheren Caterer, die mit uns an die Küste reisen.",
    },
    "arab-weddings": {
      name: "Arabische Hochzeiten",
      cardEyebrow: "Arabisch",
      cardBlurb: "Zaffe, Henna, Katb el-Kitab. Libanesisches, saudisches, ägyptisches Protokoll.",
      cardMeta: "Entdecken",
      intro:
        "Zaffe-Prozessionen, Henna-Nächte und Katb el-Kitab, gehalten nach libanesischem, saudischem und ägyptischem Protokoll.",
    },
    "south-asian-weddings": {
      name: "Südasiatische Hochzeiten",
      cardEyebrow: "Südasiatisch",
      cardBlurb: "Hinduistisch, sikhistisch, muslimisch, sri-lankisch, bangladeschisch.",
      cardMeta: "Entdecken",
      intro:
        "Hinduistische, sikhistische, muslimische, sri-lankische und bangladeschische Zeremonien, jede getragen von Spezialisten, die in der Tradition gelebt haben.",
    },
    "christian-weddings": {
      name: "Christliche Hochzeiten",
      cardEyebrow: "Christlich",
      cardBlurb: "Katholisch, orthodox, protestantisch. Kathedrale oder Garten.",
      cardMeta: "Entdecken",
      intro:
        "Katholische, orthodoxe und protestantische Zeremonien — von einer Messe in der Kathedrale bis zu einer Segnung im Garten.",
    },
    "interfaith-weddings": {
      name: "Interreligiöse Hochzeiten",
      cardEyebrow: "Interreligiös",
      cardBlurb:
        "Zwei Geistliche. Zwei Sprachen. Ein stimmiger Zeremonienbogen. Die Spezialität des Ateliers.",
      cardMeta: "Entdecken",
      intro:
        "Zwei Geistliche, zwei Sprachen, ein stimmiger Zeremonienbogen — die Arbeit, nach der wir am häufigsten gefragt werden.",
    },
    "latin-weddings": {
      name: "Lateinamerikanische Hochzeiten",
      cardEyebrow: "Lateinamerikanisch",
      cardBlurb: "Arras, Lazo, Padrinos. Zweisprachige Empfänge mit Mariachi oder Bachata.",
      cardMeta: "Entdecken",
      intro:
        "Arras, Lazo und Padrinos, mit zweisprachigen Empfängen, getragen von Mariachi oder Bachata.",
    },
    "european-weddings": {
      name: "Europäische Hochzeiten",
      cardEyebrow: "Europäisch",
      cardBlurb:
        "Châteaux, Palazzi, regionales Protokoll. Französisch, italienisch, spanisch, deutsch.",
      cardMeta: "Entdecken",
      intro:
        "Châteaux und Palazzi, gehalten nach französischem, italienischem, spanischem und deutschem Regionalprotokoll.",
    },
  },
  it: {
    "indian-weddings": {
      name: "Matrimoni Indiani",
      cardEyebrow: "La tradizione più organizzata dall'atelier",
      cardBlurb:
        "Mehndi, sangeet, haldi, baraat, varmala, pheras e ricevimento — tenuti nell'arco di tre-cinque giorni, spesso per duecento-ottocento invitati.",
      cardMeta: "Punjabi · Gujarati · India del Sud · Sikh",
      intro:
        "La tradizione che l'atelier ha organizzato più di ogni altra — un arco di tre-cinque giorni retto da un pandit con cui lavoriamo da quattordici anni.",
    },
    "jewish-weddings": {
      name: "Matrimoni Ebraici",
      cardEyebrow: "Ebraico",
      cardBlurb: "Chuppah, ketubah, sheva brachot — ortodosso, conservatore, riformato.",
      cardMeta: "Scopri",
      intro:
        "Dalla chuppah alla ketubah, tenuti con un rabbino e un catering kosher che viaggiano con noi fino alla costa.",
    },
    "arab-weddings": {
      name: "Matrimoni Arabi",
      cardEyebrow: "Arabo",
      cardBlurb: "Zaffe, henné, katb el-kitab. Protocollo libanese, saudita, egiziano.",
      cardMeta: "Scopri",
      intro:
        "Cortei zaffe, notti di henné e katb el-kitab, tenuti secondo il protocollo libanese, saudita ed egiziano.",
    },
    "south-asian-weddings": {
      name: "Matrimoni dell'Asia Meridionale",
      cardEyebrow: "Asia meridionale",
      cardBlurb: "Indù, sikh, musulmano, srilankese, bengalese.",
      cardMeta: "Scopri",
      intro:
        "Cerimonie indù, sikh, musulmane, srilankesi e bengalesi, ciascuna retta da specialisti che hanno vissuto dentro la tradizione.",
    },
    "christian-weddings": {
      name: "Matrimoni Cristiani",
      cardEyebrow: "Cristiano",
      cardBlurb: "Cattolico, ortodosso, protestante. Cattedrale o giardino.",
      cardMeta: "Scopri",
      intro:
        "Cerimonie cattoliche, ortodosse e protestanti — da una messa in cattedrale a una benedizione in giardino.",
    },
    "interfaith-weddings": {
      name: "Matrimoni Interreligiosi",
      cardEyebrow: "Interreligioso",
      cardBlurb:
        "Due celebranti. Due lingue. Un unico arco cerimoniale coeso. La specialità dell'atelier.",
      cardMeta: "Scopri",
      intro:
        "Due celebranti, due lingue, un unico arco cerimoniale coeso — il lavoro che ci viene richiesto più di ogni altro.",
    },
    "latin-weddings": {
      name: "Matrimoni Latini",
      cardEyebrow: "Latino",
      cardBlurb: "Arras, lazo, padrinos. Ricevimenti bilingui con mariachi o bachata.",
      cardMeta: "Scopri",
      intro:
        "Arras, lazo e padrinos, con ricevimenti bilingui retti da mariachi o bachata.",
    },
    "european-weddings": {
      name: "Matrimoni Europei",
      cardEyebrow: "Europeo",
      cardBlurb:
        "Châteaux, palazzi, protocollo regionale. Francese, italiano, spagnolo, tedesco.",
      cardMeta: "Scopri",
      intro:
        "Châteaux e palazzi, tenuti secondo il protocollo regionale francese, italiano, spagnolo e tedesco.",
    },
  },
};

async function run() {
  console.log(`Seeding cultures in ${dataset}/${projectId}…`);

  const tx = client.transaction();

  for (const meta of CULTURE_META) {
    for (const locale of locales) {
      const copy = CONTENT[locale][meta.slug];
      tx.createOrReplace({
        _id: docId(meta.slug, locale),
        _type: "culture",
        language: locale,
        name: copy.name,
        slug: { _type: "slug", current: meta.slug },
        number: meta.number,
        tile: meta.tile,
        cardEyebrow: copy.cardEyebrow,
        cardBlurb: copy.cardBlurb,
        cardMeta: copy.cardMeta,
        intro: copy.intro,
      });
    }

    tx.createOrReplace({
      _id: metadataId(meta.slug),
      _type: "translation.metadata",
      schemaTypes: ["culture"],
      translations: locales.map((locale) => ({
        _key: locale,
        language: locale,
        value: { _type: "reference", _ref: docId(meta.slug, locale), _weak: true },
      })),
    });

    // Shared media stub — created only if absent so re-runs never clobber
    // images an editor has uploaded.
    tx.createIfNotExists({
      _id: mediaId(meta.slug),
      _type: "cultureMedia",
      slug: meta.slug,
      cardImage: { _type: "image", alt: meta.alt },
      heroImage: { _type: "image", alt: meta.alt },
    });
  }

  await tx.commit();
  console.log(
    `✓ Seeded ${CULTURE_META.length * locales.length} culture docs + ${CULTURE_META.length} media stubs + ${CULTURE_META.length} translation-metadata records.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
