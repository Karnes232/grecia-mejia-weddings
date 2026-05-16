/**
 * Seed the `homePage` singleton across all six locales.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Run with:  npm run seed:home
 *
 * Idempotent — uses deterministic IDs and `createOrReplace`. Image fields
 * are left empty; an editor uploads through Studio after the schema lands.
 */

import { createClient } from '@sanity/client'
import { randomUUID } from 'node:crypto'

import { apiVersion, dataset, projectId } from '../env'
import { locales, type Locale } from '../../i18n/routing'

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

const docId = (locale: Locale) => `homePage-${locale}`

// ── Portable Text helpers ───────────────────────────────────────────────
const block = (text: string) => ({
  _type: 'block',
  _key: randomUUID(),
  style: 'normal',
  markDefs: [],
  children: [{ _type: 'span', _key: randomUUID(), text, marks: [] }],
})

const keyed = <T extends object>(value: T) => ({ _key: randomUUID(), ...value })

// ── Copy ────────────────────────────────────────────────────────────────

const HERO: Record<
  Locale,
  {
    overline: string
    headline: string
    subheadline: string
    primary: string
    secondary: string
  }
> = {
  en: {
    overline: 'An atelier for destination & multicultural weddings',
    headline: 'The *art* of the *destination* wedding.',
    subheadline:
      'Curating timeless multicultural celebrations across Punta Cana, the Caribbean and the wider world.',
    primary: 'Begin your wedding journey →',
    secondary: 'View the portfolio',
  },
  es: {
    overline: 'Un atelier para bodas de destino y multiculturales',
    headline: 'El *arte* de la boda de *destino*.',
    subheadline:
      'Curamos celebraciones multiculturales atemporales en Punta Cana, el Caribe y el mundo.',
    primary: 'Comienza tu camino nupcial →',
    secondary: 'Ver el portafolio',
  },
  fr: {
    overline: 'Un atelier pour mariages en destination & multiculturels',
    headline: 'L’*art* du mariage en *destination*.',
    subheadline:
      'Nous orchestrons des célébrations multiculturelles intemporelles à Punta Cana, dans les Caraïbes et à travers le monde.',
    primary: 'Commencez votre chemin nuptial →',
    secondary: 'Voir le portfolio',
  },
  pt: {
    overline: 'Um ateliê para casamentos em destino e multiculturais',
    headline: 'A *arte* do casamento em *destino*.',
    subheadline:
      'Curadoria de celebrações multiculturais atemporais em Punta Cana, no Caribe e pelo mundo.',
    primary: 'Comece sua jornada nupcial →',
    secondary: 'Ver o portfólio',
  },
  de: {
    overline: 'Ein Atelier für Destination- und multikulturelle Hochzeiten',
    headline: 'Die *Kunst* der *Destination*-Hochzeit.',
    subheadline:
      'Wir kuratieren zeitlose multikulturelle Feiern in Punta Cana, der Karibik und weltweit.',
    primary: 'Beginnen Sie Ihre Hochzeitsreise →',
    secondary: 'Portfolio ansehen',
  },
  it: {
    overline: 'Un atelier per matrimoni di destinazione e multiculturali',
    headline: 'L’*arte* del matrimonio di *destinazione*.',
    subheadline:
      'Curiamo celebrazioni multiculturali senza tempo a Punta Cana, nei Caraibi e in tutto il mondo.',
    primary: 'Inizia il tuo viaggio nuziale →',
    secondary: 'Vedi il portfolio',
  },
}

const ATELIER: Record<Locale, { eyebrow: string; headline: string; paragraphs: string[]; signature: string }> = {
  en: {
    eyebrow: 'An olive note',
    headline: 'An atelier devoted to the singular wedding.',
    paragraphs: [
      'For fifteen years we have curated multicultural, multi-day destination weddings — quiet, considered celebrations held with patience and the same hand from the first conversation to the morning farewell.',
      'We accept only human weddings and care more than is reasonable about the placement of an olive sprig, every detail is held by hand.',
    ],
    signature: 'Grecia',
  },
  es: {
    eyebrow: 'Una nota de oliva',
    headline: 'Un atelier dedicado a la boda singular.',
    paragraphs: [
      'Durante quince años hemos curado bodas de destino multiculturales y de varios días — celebraciones serenas y consideradas, sostenidas por la misma mano desde la primera conversación hasta la despedida.',
      'Aceptamos pocas bodas al año y cuidamos más de lo razonable la disposición de una ramita de olivo; cada detalle se sostiene a mano.',
    ],
    signature: 'Grecia',
  },
  fr: {
    eyebrow: 'Une note d’olivier',
    headline: 'Un atelier dédié au mariage singulier.',
    paragraphs: [
      'Depuis quinze ans, nous orchestrons des mariages multiculturels en destination, sur plusieurs jours — des célébrations calmes et réfléchies, tenues par la même main de la première conversation au dernier adieu.',
      'Nous acceptons peu de mariages chaque année et soignons plus que de raison la disposition d’un rameau d’olivier ; chaque détail est porté à la main.',
    ],
    signature: 'Grecia',
  },
  pt: {
    eyebrow: 'Uma nota de oliveira',
    headline: 'Um ateliê dedicado ao casamento singular.',
    paragraphs: [
      'Há quinze anos curamos casamentos multiculturais de vários dias em destino — celebrações silenciosas e cuidadosas, sustentadas pela mesma mão da primeira conversa à despedida.',
      'Aceitamos poucas bodas por ano e cuidamos mais do que o razoável da posição de um raminho de oliveira; cada detalhe é sustentado à mão.',
    ],
    signature: 'Grecia',
  },
  de: {
    eyebrow: 'Eine Olivennote',
    headline: 'Ein Atelier für die einzigartige Hochzeit.',
    paragraphs: [
      'Seit fünfzehn Jahren kuratieren wir multikulturelle, mehrtägige Destination-Hochzeiten — stille, durchdachte Feiern, getragen von derselben Hand vom ersten Gespräch bis zum Abschied.',
      'Wir nehmen nur wenige Hochzeiten pro Jahr an und kümmern uns mehr als vernünftig um die Position eines Olivenzweigs; jedes Detail wird von Hand gehalten.',
    ],
    signature: 'Grecia',
  },
  it: {
    eyebrow: 'Una nota d’ulivo',
    headline: 'Un atelier dedicato al matrimonio singolare.',
    paragraphs: [
      'Da quindici anni curiamo matrimoni multiculturali di più giorni in destinazione — celebrazioni quiete e considerate, sostenute dalla stessa mano dalla prima conversazione al commiato.',
      'Accettiamo poche nozze l’anno e ci prendiamo cura più del ragionevole della posizione di un rametto d’ulivo; ogni dettaglio è tenuto a mano.',
    ],
    signature: 'Grecia',
  },
}

const WHERE_WE_WORK: Record<Locale, { headline: string; viewAll: string }> = {
  en: { headline: 'Where we work.', viewAll: 'View all destinations' },
  es: { headline: 'Dónde trabajamos.', viewAll: 'Ver todos los destinos' },
  fr: { headline: 'Où nous travaillons.', viewAll: 'Voir toutes les destinations' },
  pt: { headline: 'Onde trabalhamos.', viewAll: 'Ver todos os destinos' },
  de: { headline: 'Wo wir arbeiten.', viewAll: 'Alle Reiseziele ansehen' },
  it: { headline: 'Dove lavoriamo.', viewAll: 'Vedi tutte le destinazioni' },
}

const DESTINATIONS = [
  { slug: 'punta-cana', name: 'Punta Cana', region: 'Dominican Republic' },
  { slug: 'santorini', name: 'Santorini', region: 'Greece' },
  { slug: 'provence', name: 'Provence', region: 'France' },
  { slug: 'mallorca', name: 'Mallorca', region: 'Spain' },
  { slug: 'tulum', name: 'Tulum', region: 'Mexico' },
] as const

const FEATURED: Record<Locale, { headline: string; paragraphs: string[]; quote: string; linkLabel: string }> = {
  en: {
    headline: 'Sara & Adam.',
    paragraphs: [
      'A three-day Hindu-Christian celebration on the Dominican coast — four ceremonies, two cultures, one steady thread.',
      'I had booked a year and four months, three languages held in the morning fire, the bride’s grandfather two paces behind the mandap. The groom’s mother served her own moros to the people who held it impossible.',
    ],
    quote: 'We held a wedding in three languages and made it feel like one prayer.',
    linkLabel: 'View the story',
  },
  es: {
    headline: 'Sara y Adam.',
    paragraphs: [
      'Una celebración hindú-cristiana de tres días en la costa dominicana — cuatro ceremonias, dos culturas, un mismo hilo sostenido.',
      'Reservada con un año y cuatro meses de anticipación, tres idiomas sostenidos junto al fuego de la mañana; el abuelo de la novia dos pasos detrás del mandap. La madre del novio sirvió su propio moros a quienes lo creían imposible.',
    ],
    quote: 'Sostuvimos una boda en tres idiomas y se sintió como una sola oración.',
    linkLabel: 'Ver la historia',
  },
  fr: {
    headline: 'Sara & Adam.',
    paragraphs: [
      'Une célébration hindoue-chrétienne de trois jours sur la côte dominicaine — quatre cérémonies, deux cultures, un même fil tenu.',
      'Réservée un an et quatre mois à l’avance, trois langues portées dans le feu du matin ; le grand-père de la mariée à deux pas derrière le mandap. La mère du marié a servi son propre moros à ceux qui le pensaient impossible.',
    ],
    quote: 'Nous avons tenu un mariage en trois langues et il a sonné comme une seule prière.',
    linkLabel: 'Voir l’histoire',
  },
  pt: {
    headline: 'Sara e Adam.',
    paragraphs: [
      'Uma celebração hindu-cristã de três dias na costa dominicana — quatro cerimônias, duas culturas, um mesmo fio.',
      'Reservada com um ano e quatro meses de antecedência, três línguas sustentadas no fogo da manhã; o avô da noiva dois passos atrás do mandap. A mãe do noivo serviu seu próprio moros a quem o julgava impossível.',
    ],
    quote: 'Sustentamos um casamento em três línguas e ele soou como uma única oração.',
    linkLabel: 'Ver a história',
  },
  de: {
    headline: 'Sara & Adam.',
    paragraphs: [
      'Eine dreitägige hindu-christliche Feier an der dominikanischen Küste — vier Zeremonien, zwei Kulturen, ein zusammenhaltender Faden.',
      'Ein Jahr und vier Monate im Voraus gebucht, drei Sprachen im Morgenfeuer getragen; der Großvater der Braut zwei Schritte hinter dem Mandap. Die Mutter des Bräutigams servierte ihren eigenen Moros denen, die es für unmöglich hielten.',
    ],
    quote: 'Wir hielten eine Hochzeit in drei Sprachen und sie klang wie ein einziges Gebet.',
    linkLabel: 'Die Geschichte ansehen',
  },
  it: {
    headline: 'Sara e Adam.',
    paragraphs: [
      'Una celebrazione indù-cristiana di tre giorni sulla costa dominicana — quattro cerimonie, due culture, un solo filo tenuto.',
      'Prenotata con un anno e quattro mesi di anticipo, tre lingue sostenute nel fuoco del mattino; il nonno della sposa due passi dietro il mandap. La madre dello sposo ha servito il proprio moros a chi lo riteneva impossibile.',
    ],
    quote: 'Abbiamo tenuto un matrimonio in tre lingue e ha avuto il suono di una sola preghiera.',
    linkLabel: 'Vedi la storia',
  },
}

const FACTS: Record<Locale, Array<{ label: string; value: string }>> = {
  en: [
    { label: 'Location', value: 'Cap Cana, Dominican Republic' },
    { label: 'Heritage', value: 'Dominican · Mexican' },
    { label: 'Ceremonies', value: 'Four · Sangeet to vow' },
    { label: 'Languages', value: 'Three · EN · ES · HI' },
  ],
  es: [
    { label: 'Ubicación', value: 'Cap Cana, República Dominicana' },
    { label: 'Herencia', value: 'Dominicana · Mexicana' },
    { label: 'Ceremonias', value: 'Cuatro · de Sangeet a votos' },
    { label: 'Idiomas', value: 'Tres · EN · ES · HI' },
  ],
  fr: [
    { label: 'Lieu', value: 'Cap Cana, République dominicaine' },
    { label: 'Héritage', value: 'Dominicain · Mexicain' },
    { label: 'Cérémonies', value: 'Quatre · du Sangeet aux vœux' },
    { label: 'Langues', value: 'Trois · EN · ES · HI' },
  ],
  pt: [
    { label: 'Local', value: 'Cap Cana, República Dominicana' },
    { label: 'Herança', value: 'Dominicana · Mexicana' },
    { label: 'Cerimônias', value: 'Quatro · do Sangeet aos votos' },
    { label: 'Idiomas', value: 'Três · EN · ES · HI' },
  ],
  de: [
    { label: 'Ort', value: 'Cap Cana, Dominikanische Republik' },
    { label: 'Erbe', value: 'Dominikanisch · Mexikanisch' },
    { label: 'Zeremonien', value: 'Vier · vom Sangeet zum Gelübde' },
    { label: 'Sprachen', value: 'Drei · EN · ES · HI' },
  ],
  it: [
    { label: 'Luogo', value: 'Cap Cana, Repubblica Dominicana' },
    { label: 'Eredità', value: 'Dominicana · Messicana' },
    { label: 'Cerimonie', value: 'Quattro · dal Sangeet ai voti' },
    { label: 'Lingue', value: 'Tre · EN · ES · HI' },
  ],
}

const TRADITIONS_HEADLINE: Record<Locale, { eyebrow: string; headline: string; quote: string }> = {
  en: {
    eyebrow: 'Multicultural',
    headline: 'Traditions we hold with cultural fluency.',
    quote: 'We held a wedding in three languages and made it feel like one prayer.',
  },
  es: {
    eyebrow: 'Multicultural',
    headline: 'Tradiciones que sostenemos con fluidez cultural.',
    quote: 'Sostuvimos una boda en tres idiomas y se sintió como una sola oración.',
  },
  fr: {
    eyebrow: 'Multiculturel',
    headline: 'Des traditions tenues avec aisance culturelle.',
    quote: 'Nous avons tenu un mariage en trois langues et il a sonné comme une seule prière.',
  },
  pt: {
    eyebrow: 'Multicultural',
    headline: 'Tradições que sustentamos com fluência cultural.',
    quote: 'Sustentamos um casamento em três línguas e soou como uma única oração.',
  },
  de: {
    eyebrow: 'Multikulturell',
    headline: 'Traditionen, gehalten mit kultureller Souveränität.',
    quote: 'Wir hielten eine Hochzeit in drei Sprachen und sie klang wie ein einziges Gebet.',
  },
  it: {
    eyebrow: 'Multiculturale',
    headline: 'Tradizioni tenute con fluidità culturale.',
    quote: 'Abbiamo tenuto un matrimonio in tre lingue e ha avuto il suono di una sola preghiera.',
  },
}

const CULTURE_SLUGS = [
  'indian-weddings',
  'jewish-weddings',
  'arab-weddings',
  'south-asian-weddings',
  'christian-weddings',
  'interfaith-weddings',
  'latin-weddings',
  'european-weddings',
] as const

const CULTURES: Record<Locale, Record<(typeof CULTURE_SLUGS)[number], { name: string; description: string }>> = {
  en: {
    'indian-weddings': { name: 'Indian Weddings', description: 'Sangeet, mehndi, baraat and saat phere held with reverence.' },
    'jewish-weddings': { name: 'Jewish Weddings', description: 'Chuppah, ketubah and the breaking of the glass.' },
    'arab-weddings': { name: 'Arab Weddings', description: 'Zaffeh, henna night and the procession.' },
    'south-asian-weddings': { name: 'South Asian Weddings', description: 'Pakistani, Bangladeshi and Sri Lankan rites woven with care.' },
    'christian-weddings': { name: 'Christian Weddings', description: 'Catholic, Orthodox and Protestant ceremonies, full liturgy or quiet vow.' },
    'interfaith-weddings': { name: 'Interfaith Weddings', description: 'Two traditions in one room, one prayer.' },
    'latin-weddings': { name: 'Latin Weddings', description: 'Lazos, arras and the long second line.' },
    'european-weddings': { name: 'European Weddings', description: 'Italian, French, Spanish and Greek heritage celebrations.' },
  },
  es: {
    'indian-weddings': { name: 'Bodas Indias', description: 'Sangeet, mehndi, baraat y saat phere con reverencia.' },
    'jewish-weddings': { name: 'Bodas Judías', description: 'Jupá, ketubá y la rotura del vaso.' },
    'arab-weddings': { name: 'Bodas Árabes', description: 'Zaffeh, noche de henna y la procesión.' },
    'south-asian-weddings': { name: 'Bodas del Sur de Asia', description: 'Ritos pakistaníes, bangladesíes y cingaleses entretejidos con cuidado.' },
    'christian-weddings': { name: 'Bodas Cristianas', description: 'Ceremonias católicas, ortodoxas y protestantes — liturgia plena o voto silencioso.' },
    'interfaith-weddings': { name: 'Bodas Interreligiosas', description: 'Dos tradiciones en una sala, una sola oración.' },
    'latin-weddings': { name: 'Bodas Latinas', description: 'Lazos, arras y la larga segunda línea.' },
    'european-weddings': { name: 'Bodas Europeas', description: 'Celebraciones italianas, francesas, españolas y griegas.' },
  },
  fr: {
    'indian-weddings': { name: 'Mariages Indiens', description: 'Sangeet, mehndi, baraat et saat phere tenus avec révérence.' },
    'jewish-weddings': { name: 'Mariages Juifs', description: 'Houppa, ketouba et bris du verre.' },
    'arab-weddings': { name: 'Mariages Arabes', description: 'Zaffeh, soirée du henné et procession.' },
    'south-asian-weddings': { name: 'Mariages d’Asie du Sud', description: 'Rites pakistanais, bangladais et sri-lankais tissés avec soin.' },
    'christian-weddings': { name: 'Mariages Chrétiens', description: 'Cérémonies catholiques, orthodoxes et protestantes — liturgie complète ou vœu intime.' },
    'interfaith-weddings': { name: 'Mariages Interreligieux', description: 'Deux traditions dans une même salle, une seule prière.' },
    'latin-weddings': { name: 'Mariages Latins', description: 'Lazos, arras et la longue seconde ligne.' },
    'european-weddings': { name: 'Mariages Européens', description: 'Célébrations italiennes, françaises, espagnoles et grecques.' },
  },
  pt: {
    'indian-weddings': { name: 'Casamentos Indianos', description: 'Sangeet, mehndi, baraat e saat phere com reverência.' },
    'jewish-weddings': { name: 'Casamentos Judaicos', description: 'Chuppah, ketubah e a quebra do copo.' },
    'arab-weddings': { name: 'Casamentos Árabes', description: 'Zaffeh, noite da henna e a procissão.' },
    'south-asian-weddings': { name: 'Casamentos do Sul da Ásia', description: 'Ritos paquistaneses, bengaleses e cingaleses tecidos com cuidado.' },
    'christian-weddings': { name: 'Casamentos Cristãos', description: 'Cerimônias católicas, ortodoxas e protestantes — liturgia plena ou voto silencioso.' },
    'interfaith-weddings': { name: 'Casamentos Inter-religiosos', description: 'Duas tradições em uma sala, uma só oração.' },
    'latin-weddings': { name: 'Casamentos Latinos', description: 'Lazos, arras e a longa segunda linha.' },
    'european-weddings': { name: 'Casamentos Europeus', description: 'Celebrações italianas, francesas, espanholas e gregas.' },
  },
  de: {
    'indian-weddings': { name: 'Indische Hochzeiten', description: 'Sangeet, Mehndi, Baraat und Saat Phere mit Ehrfurcht gehalten.' },
    'jewish-weddings': { name: 'Jüdische Hochzeiten', description: 'Chuppah, Ketubah und das Zerbrechen des Glases.' },
    'arab-weddings': { name: 'Arabische Hochzeiten', description: 'Zaffeh, Henna-Nacht und die Prozession.' },
    'south-asian-weddings': { name: 'Südasiatische Hochzeiten', description: 'Pakistanische, bangladeschische und srilankische Riten sorgsam verwoben.' },
    'christian-weddings': { name: 'Christliche Hochzeiten', description: 'Katholische, orthodoxe und protestantische Zeremonien — volle Liturgie oder stilles Gelübde.' },
    'interfaith-weddings': { name: 'Interreligiöse Hochzeiten', description: 'Zwei Traditionen in einem Raum, ein Gebet.' },
    'latin-weddings': { name: 'Lateinamerikanische Hochzeiten', description: 'Lazos, Arras und die lange zweite Linie.' },
    'european-weddings': { name: 'Europäische Hochzeiten', description: 'Italienische, französische, spanische und griechische Erbe-Feiern.' },
  },
  it: {
    'indian-weddings': { name: 'Matrimoni Indiani', description: 'Sangeet, mehndi, baraat e saat phere tenuti con riverenza.' },
    'jewish-weddings': { name: 'Matrimoni Ebraici', description: 'Chuppah, ketubah e la rottura del bicchiere.' },
    'arab-weddings': { name: 'Matrimoni Arabi', description: 'Zaffeh, notte dell’henné e la processione.' },
    'south-asian-weddings': { name: 'Matrimoni Sud-Asiatici', description: 'Riti pakistani, bangladesi e singalesi intessuti con cura.' },
    'christian-weddings': { name: 'Matrimoni Cristiani', description: 'Cerimonie cattoliche, ortodosse e protestanti — liturgia piena o voto silenzioso.' },
    'interfaith-weddings': { name: 'Matrimoni Interreligiosi', description: 'Due tradizioni in una stessa stanza, una sola preghiera.' },
    'latin-weddings': { name: 'Matrimoni Latini', description: 'Lazos, arras e la lunga seconda linea.' },
    'european-weddings': { name: 'Matrimoni Europei', description: 'Celebrazioni italiane, francesi, spagnole e greche.' },
  },
}

const VENUES_HEADLINE: Record<Locale, { eyebrow: string; headline: string; intro: string }> = {
  en: { eyebrow: 'Curated', headline: 'Venues, considered.', intro: 'A working selection of private estates, beach clubs, vineyards and quiet churches we return to year after year.' },
  es: { eyebrow: 'Curado', headline: 'Locaciones, consideradas.', intro: 'Una selección viva de fincas privadas, clubes de playa, viñedos e iglesias serenas a las que volvemos año tras año.' },
  fr: { eyebrow: 'Sélection', headline: 'Lieux, considérés.', intro: 'Une sélection vivante de domaines privés, clubs de plage, vignobles et églises tranquilles que nous retrouvons année après année.' },
  pt: { eyebrow: 'Curadoria', headline: 'Locais, considerados.', intro: 'Uma seleção viva de propriedades privadas, beach clubs, vinhas e igrejas serenas a que retornamos ano após ano.' },
  de: { eyebrow: 'Kuratiert', headline: 'Orte, betrachtet.', intro: 'Eine lebendige Auswahl privater Anwesen, Beach Clubs, Weingüter und stiller Kirchen, zu denen wir Jahr für Jahr zurückkehren.' },
  it: { eyebrow: 'Curato', headline: 'Sedi, considerate.', intro: 'Una selezione viva di tenute private, beach club, vigneti e chiese silenziose alle quali torniamo anno dopo anno.' },
}

const VENUES_DATA = [
  { slug: 'jellyfish-restaurant', name: 'Jellyfish Restaurant', region: 'Punta Cana' },
  { slug: 'kukua-beach-club', name: 'Kukua Beach Club', region: 'Punta Cana' },
  { slug: 'chez-bisutti', name: 'Chez Bisutti', region: 'Punta Cana' },
  { slug: 'villa-ta-ville', name: 'Villa Ta Ville', region: 'Cap Cana' },
  { slug: 'chateau-de-la-croix', name: 'Château de la Croix', region: 'Provence' },
  { slug: 'finca-san-bartolo', name: 'Finca San Bartolo', region: 'Mallorca' },
  { slug: 'castello-di-velasco', name: 'Castello di Velasco', region: 'Tuscany' },
] as const

const VENUE_DESCRIPTIONS: Record<Locale, Record<(typeof VENUES_DATA)[number]['slug'], string>> = {
  en: {
    'jellyfish-restaurant': 'Open-air pavilion on the shoreline; intimate dinners under canvas.',
    'kukua-beach-club': 'White sand, olive-toned linens and a long horizon.',
    'chez-bisutti': 'Hilltop estate, citrus groves, a private chapel.',
    'villa-ta-ville': 'Italian-modernist villa with rosewood interiors.',
    'chateau-de-la-croix': 'Provençal château ringed by lavender fields.',
    'finca-san-bartolo': 'Stone finca, ancient olives, sea light.',
    'castello-di-velasco': 'Renaissance castle, frescoed ceilings, vineyard terraces.',
  },
  es: {
    'jellyfish-restaurant': 'Pabellón al aire libre sobre la orilla; cenas íntimas bajo lona.',
    'kukua-beach-club': 'Arena blanca, linos en tono oliva y un horizonte largo.',
    'chez-bisutti': 'Finca en la colina, naranjales, capilla privada.',
    'villa-ta-ville': 'Villa italo-modernista con interiores en palo de rosa.',
    'chateau-de-la-croix': 'Château provenzal rodeado de campos de lavanda.',
    'finca-san-bartolo': 'Finca de piedra, olivos antiguos, luz de mar.',
    'castello-di-velasco': 'Castillo renacentista, techos al fresco, terrazas de viñedo.',
  },
  fr: {
    'jellyfish-restaurant': 'Pavillon ouvert sur le rivage ; dîners intimes sous toile.',
    'kukua-beach-club': 'Sable blanc, lins olive et un long horizon.',
    'chez-bisutti': 'Domaine en hauteur, vergers d’agrumes, chapelle privée.',
    'villa-ta-ville': 'Villa italo-moderniste aux intérieurs en palissandre.',
    'chateau-de-la-croix': 'Château provençal cerné de champs de lavande.',
    'finca-san-bartolo': 'Finca de pierre, oliviers anciens, lumière de mer.',
    'castello-di-velasco': 'Château Renaissance, plafonds peints, terrasses de vignoble.',
  },
  pt: {
    'jellyfish-restaurant': 'Pavilhão aberto sobre a orla; jantares íntimos sob lona.',
    'kukua-beach-club': 'Areia branca, linhos em tom oliva e um horizonte longo.',
    'chez-bisutti': 'Propriedade no alto, laranjais, capela privada.',
    'villa-ta-ville': 'Villa ítalo-modernista com interiores em pau-rosa.',
    'chateau-de-la-croix': 'Château provençal cercado por campos de lavanda.',
    'finca-san-bartolo': 'Finca de pedra, oliveiras antigas, luz do mar.',
    'castello-di-velasco': 'Castelo renascentista, tetos afrescados, terraços de vinhedo.',
  },
  de: {
    'jellyfish-restaurant': 'Offener Pavillon am Ufer; intime Dinner unter Segeltuch.',
    'kukua-beach-club': 'Weißer Sand, olivfarbene Leinen und ein langer Horizont.',
    'chez-bisutti': 'Anwesen auf der Höhe, Zitrushaine, eine Privatkapelle.',
    'villa-ta-ville': 'Italienisch-modernistische Villa mit Palisanderinterieurs.',
    'chateau-de-la-croix': 'Provenzalisches Château, eingerahmt von Lavendelfeldern.',
    'finca-san-bartolo': 'Steinerne Finca, alte Olivenbäume, Meereslicht.',
    'castello-di-velasco': 'Renaissance-Schloss, freskenverzierte Decken, Weinbergterrassen.',
  },
  it: {
    'jellyfish-restaurant': 'Padiglione aperto sulla riva; cene intime sotto tela.',
    'kukua-beach-club': 'Sabbia bianca, lini color oliva e un lungo orizzonte.',
    'chez-bisutti': 'Tenuta in collina, agrumeti, cappella privata.',
    'villa-ta-ville': 'Villa italo-modernista con interni in palissandro.',
    'chateau-de-la-croix': 'Château provenzale circondato da campi di lavanda.',
    'finca-san-bartolo': 'Finca in pietra, ulivi antichi, luce di mare.',
    'castello-di-velasco': 'Castello rinascimentale, soffitti affrescati, terrazze di vigneto.',
  },
}

const RECENT: Record<Locale, { eyebrow: string; headline: string }> = {
  en: { eyebrow: 'Architectural light', headline: 'Recent weddings.' },
  es: { eyebrow: 'Luz arquitectónica', headline: 'Bodas recientes.' },
  fr: { eyebrow: 'Lumière architecturale', headline: 'Mariages récents.' },
  pt: { eyebrow: 'Luz arquitetônica', headline: 'Casamentos recentes.' },
  de: { eyebrow: 'Architektonisches Licht', headline: 'Jüngste Hochzeiten.' },
  it: { eyebrow: 'Luce architettonica', headline: 'Matrimoni recenti.' },
}

const TESTIMONIALS: Record<Locale, Array<{ quote: string; attribution: string }>> = {
  en: [
    {
      quote: 'Grecia held a wedding in three languages and somehow made it feel like one. We did not plan our day; she did, and then she handed it back to us.',
      attribution: 'Sara & Adam — 2024',
    },
    {
      quote: 'An atelier in the truest sense. Slow, careful conversation and a calm hand on every detail, from the morning fire to the last toast.',
      attribution: 'Mira & Jacques — 2023',
    },
  ],
  es: [
    {
      quote: 'Grecia sostuvo una boda en tres idiomas y de algún modo se sintió como uno solo. No planeamos nuestro día; ella lo hizo, y luego nos lo devolvió.',
      attribution: 'Sara y Adam — 2024',
    },
    {
      quote: 'Un atelier en el sentido más verdadero. Conversación lenta y cuidadosa, y una mano calmada en cada detalle, del fuego de la mañana al último brindis.',
      attribution: 'Mira y Jacques — 2023',
    },
  ],
  fr: [
    {
      quote: 'Grecia a tenu un mariage en trois langues et, d’une certaine manière, il a sonné comme un seul. Nous n’avons pas planifié notre journée ; elle l’a fait, puis nous l’a rendue.',
      attribution: 'Sara & Adam — 2024',
    },
    {
      quote: 'Un atelier au sens le plus vrai. Conversation lente et soignée, une main calme sur chaque détail, du feu du matin au dernier toast.',
      attribution: 'Mira & Jacques — 2023',
    },
  ],
  pt: [
    {
      quote: 'Grecia sustentou um casamento em três línguas e, de algum modo, ele soou como um só. Não planejamos o nosso dia; ela o fez, e depois nos devolveu.',
      attribution: 'Sara e Adam — 2024',
    },
    {
      quote: 'Um ateliê no sentido mais verdadeiro. Conversa lenta e cuidadosa, mão serena em cada detalhe, do fogo da manhã ao último brinde.',
      attribution: 'Mira e Jacques — 2023',
    },
  ],
  de: [
    {
      quote: 'Grecia hat eine Hochzeit in drei Sprachen gehalten — und sie klang wie eine einzige. Wir haben unseren Tag nicht geplant; sie hat es getan und ihn uns dann zurückgegeben.',
      attribution: 'Sara & Adam — 2024',
    },
    {
      quote: 'Ein Atelier im wahrsten Sinne. Langsame, sorgfältige Gespräche und eine ruhige Hand auf jedem Detail, vom Morgenfeuer bis zum letzten Toast.',
      attribution: 'Mira & Jacques — 2023',
    },
  ],
  it: [
    {
      quote: 'Grecia ha tenuto un matrimonio in tre lingue e, in qualche modo, ha avuto il suono di uno solo. Non abbiamo pianificato la nostra giornata; l’ha fatto lei, e poi ce l’ha restituita.',
      attribution: 'Sara e Adam — 2024',
    },
    {
      quote: 'Un atelier nel senso più vero. Conversazione lenta e accurata, una mano calma su ogni dettaglio, dal fuoco del mattino all’ultimo brindisi.',
      attribution: 'Mira e Jacques — 2023',
    },
  ],
}

const JOURNEY: Record<Locale, { eyebrow: string; headline: string; body: string; cta: string }> = {
  en: {
    eyebrow: 'A private conversation —',
    headline: 'Begin your wedding journey.',
    body: 'We accept a small number of weddings each year. A private conversation is the first considered step, and we will be in touch within a working day.',
    cta: 'Request a private consultation',
  },
  es: {
    eyebrow: 'Una conversación privada —',
    headline: 'Comienza el camino de tu boda.',
    body: 'Aceptamos un pequeño número de bodas al año. Una conversación privada es el primer paso considerado; te respondemos en un día laborable.',
    cta: 'Solicitar una consulta privada',
  },
  fr: {
    eyebrow: 'Une conversation privée —',
    headline: 'Commencez votre chemin de mariage.',
    body: 'Nous acceptons peu de mariages chaque année. Une conversation privée est le premier pas réfléchi ; nous revenons vers vous sous un jour ouvré.',
    cta: 'Demander une consultation privée',
  },
  pt: {
    eyebrow: 'Uma conversa privada —',
    headline: 'Comece a sua jornada de casamento.',
    body: 'Aceitamos um pequeno número de casamentos por ano. Uma conversa privada é o primeiro passo considerado; respondemos em um dia útil.',
    cta: 'Solicitar uma consulta privada',
  },
  de: {
    eyebrow: 'Ein privates Gespräch —',
    headline: 'Beginnen Sie Ihre Hochzeitsreise.',
    body: 'Wir nehmen jährlich nur wenige Hochzeiten an. Ein privates Gespräch ist der erste bedachte Schritt; wir melden uns innerhalb eines Werktags.',
    cta: 'Privates Gespräch anfragen',
  },
  it: {
    eyebrow: 'Una conversazione privata —',
    headline: 'Inizia il tuo viaggio nuziale.',
    body: 'Accettiamo un piccolo numero di matrimoni l’anno. Una conversazione privata è il primo passo considerato; rispondiamo entro un giorno lavorativo.',
    cta: 'Richiedi una consulenza privata',
  },
}

// ── Doc builder ─────────────────────────────────────────────────────────

function buildDoc(locale: Locale) {
  const hero = HERO[locale]
  const atelier = ATELIER[locale]
  const where = WHERE_WE_WORK[locale]
  const featured = FEATURED[locale]
  const traditionsCopy = TRADITIONS_HEADLINE[locale]
  const venuesCopy = VENUES_HEADLINE[locale]
  const recent = RECENT[locale]
  const journey = JOURNEY[locale]

  return {
    hero: {
      overline: hero.overline,
      headline: hero.headline,
      subheadline: hero.subheadline,
      primaryCta: { label: hero.primary, href: '/contact' },
      secondaryCta: { label: hero.secondary, href: '/portfolio' },
    },
    atelier: {
      eyebrow: atelier.eyebrow,
      headline: atelier.headline,
      body: atelier.paragraphs.map((p) => block(p)),
      signature: atelier.signature,
    },
    whereWeWork: {
      headline: where.headline,
      viewAllLabel: where.viewAll,
      viewAllHref: '/destinations',
      destinations: DESTINATIONS.map((d) =>
        keyed({ name: d.name, region: d.region, slug: d.slug }),
      ),
    },
    featuredWedding: {
      headline: featured.headline,
      body: featured.paragraphs.map((p) => block(p)),
      facts: FACTS[locale].map((f) => keyed(f)),
      quote: featured.quote,
      linkLabel: featured.linkLabel,
      linkHref: '/portfolio/sara-and-adam',
    },
    traditions: {
      eyebrow: traditionsCopy.eyebrow,
      headline: traditionsCopy.headline,
      quote: traditionsCopy.quote,
      cultures: CULTURE_SLUGS.map((slug) =>
        keyed({
          name: CULTURES[locale][slug].name,
          description: CULTURES[locale][slug].description,
          slug,
        }),
      ),
    },
    venuesConsidered: {
      eyebrow: venuesCopy.eyebrow,
      headline: venuesCopy.headline,
      intro: venuesCopy.intro,
      venues: VENUES_DATA.map((v) =>
        keyed({
          name: v.name,
          region: v.region,
          slug: v.slug,
          description: VENUE_DESCRIPTIONS[locale][v.slug],
        }),
      ),
    },
    recentWeddings: {
      eyebrow: recent.eyebrow,
      headline: recent.headline,
    },
    testimonials: {
      items: TESTIMONIALS[locale].map((t) => keyed(t)),
    },
    journeyCta: {
      eyebrow: journey.eyebrow,
      headline: journey.headline,
      body: journey.body,
      cta: { label: journey.cta, href: '/contact' },
    },
  }
}

async function run() {
  console.log(`Seeding homePage in ${dataset}/${projectId}…`)

  const tx = client.transaction()

  for (const locale of locales) {
    tx.createOrReplace({
      _id: docId(locale),
      _type: 'homePage',
      language: locale,
      ...buildDoc(locale),
    })
  }

  tx.createOrReplace({
    _id: 'homePage-metadata',
    _type: 'translation.metadata',
    schemaTypes: ['homePage'],
    translations: locales.map((locale) => ({
      _key: locale,
      language: locale,
      value: { _type: 'reference', _ref: docId(locale), _weak: true },
    })),
  })

  await tx.commit()
  console.log(`✓ Seeded ${locales.length} homePage docs + translation metadata.`)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
