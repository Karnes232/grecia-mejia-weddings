/**
 * Single source of truth for the 12 destinations seeded in Phase 8.
 * The shape is consumed by both:
 *   - the destination seed (template.ts uses it to render full doc bodies)
 *   - the destinationsPage seed (regions[].destinations[] uses it to write references)
 */

export type Region =
  | "caribbean"
  | "mediterranean"
  | "western-europe"
  | "americas";

export type Fact = {
  slug: string;
  region: Region;
  name: string; // canonical English name for templating
  country: string;
  subLocations: string;
  peakWindow: string; // e.g. "November – April"
  offWindow: string; // e.g. "August – October"
  guestRange: string; // e.g. "40 – 600"
  flightTime: string; // e.g. "3 – 9 hours · from major hubs"
  languages: string; // e.g. "EN · ES"
  currency: string; // e.g. "DOP / USD"
  signature: string; // short editorial hook used in the story section
  climateCue: string; // short note ("dry, breezy, mid-eighties")
  hurricaneRisk: boolean;
};

export const DESTINATIONS_BY_REGION: Record<Region, Fact[]> = {
  caribbean: [
    {
      slug: "punta-cana",
      region: "caribbean",
      name: "Punta Cana",
      country: "Dominican Republic",
      subLocations: "Cap Cana · Casa de Campo · Bávaro",
      peakWindow: "November – April",
      offWindow: "August – October",
      guestRange: "40 – 600",
      flightTime: "3 – 9 hrs from major hubs",
      languages: "EN · ES",
      currency: "DOP / USD",
      signature:
        "The home atelier. Year-round flying weather, powder-sand coastlines, and the cultural fluency to host any tradition.",
      climateCue: "dry, breezy, mid-eighties",
      hurricaneRisk: true,
    },
    {
      slug: "st-barths",
      region: "caribbean",
      name: "St. Barths",
      country: "French Antilles",
      subLocations: "Gustavia · Anse de Grande Saline",
      peakWindow: "December – April",
      offWindow: "September – November",
      guestRange: "20 – 120",
      flightTime: "5 – 10 hrs · via St. Maarten",
      languages: "FR · EN",
      currency: "EUR / USD",
      signature:
        "The Caribbean's most discreet island. French standards, white-sand beaches, and a wedding capacity capped by the island itself.",
      climateCue: "warm, dry, easterly trade winds",
      hurricaneRisk: true,
    },
    {
      slug: "mustique",
      region: "caribbean",
      name: "Mustique",
      country: "St. Vincent & the Grenadines",
      subLocations: "Private island · 100 guests",
      peakWindow: "December – April",
      offWindow: "June – October",
      guestRange: "40 – 100",
      flightTime: "6 – 11 hrs · via Barbados",
      languages: "EN",
      currency: "XCD / USD",
      signature:
        "A private island wedding, full stop. Villas, beach, and a hundred guests under a sky we know by heart.",
      climateCue: "consistent eighty-degree days, low humidity",
      hurricaneRisk: true,
    },
  ],
  mediterranean: [
    {
      slug: "amalfi",
      region: "mediterranean",
      name: "Amalfi",
      country: "Italy",
      subLocations: "Positano · Ravello · Capri",
      peakWindow: "May – early October",
      offWindow: "November – March",
      guestRange: "30 – 250",
      flightTime: "8 – 10 hrs to Naples · 1 hr drive",
      languages: "IT · EN",
      currency: "EUR",
      signature:
        "Cliffside palazzi above lemon groves. The coast that taught us how to use late-summer light.",
      climateCue: "warm, dry, glittering",
      hurricaneRisk: false,
    },
    {
      slug: "lake-como",
      region: "mediterranean",
      name: "Lake Como",
      country: "Italy",
      subLocations: "Bellagio · Varenna · Tremezzo",
      peakWindow: "May – September",
      offWindow: "November – March",
      guestRange: "40 – 220",
      flightTime: "8 – 10 hrs to Milan · 1 hr drive",
      languages: "IT · EN",
      currency: "EUR",
      signature:
        "Lakefront villas and centuries of formal ceremony. The Como wedding still has the gravity it has always had.",
      climateCue: "mild, breezy, long evenings",
      hurricaneRisk: false,
    },
    {
      slug: "tuscany",
      region: "mediterranean",
      name: "Tuscany",
      country: "Italy",
      subLocations: "Val d'Orcia · Chianti",
      peakWindow: "May – early October",
      offWindow: "December – February",
      guestRange: "40 – 250",
      flightTime: "8 – 10 hrs to Florence",
      languages: "IT · EN",
      currency: "EUR",
      signature:
        "Hill-town estates, slow vineyard suppers, and a light photographers travel for.",
      climateCue: "warm days, cool evenings, dry summers",
      hurricaneRisk: false,
    },
  ],
  "western-europe": [
    {
      slug: "paris-ile-de-france",
      region: "western-europe",
      name: "Paris & Île de France",
      country: "France",
      subLocations: "Versailles · 7th · Le Marais",
      peakWindow: "May – September",
      offWindow: "December – February",
      guestRange: "40 – 300",
      flightTime: "7 – 8 hrs to Paris",
      languages: "FR · EN",
      currency: "EUR",
      signature:
        "Hôtels particuliers, formal gardens, and the courtesy of French wedding tradition.",
      climateCue: "mild, occasionally rainy, long summer light",
      hurricaneRisk: false,
    },
    {
      slug: "provence",
      region: "western-europe",
      name: "Provence",
      country: "France",
      subLocations: "Lavender, châteaux, slow Augusts",
      peakWindow: "May – September",
      offWindow: "November – March",
      guestRange: "40 – 200",
      flightTime: "7 – 9 hrs to Marseille",
      languages: "FR · EN",
      currency: "EUR",
      signature:
        "Mas farmhouses, lavender hills, and long-table dinners that begin at nine.",
      climateCue: "hot, dry, mistral breeze",
      hurricaneRisk: false,
    },
    {
      slug: "cote-dazur",
      region: "western-europe",
      name: "Côte d'Azur",
      country: "France",
      subLocations: "Antibes · St. Tropez",
      peakWindow: "May – September",
      offWindow: "November – March",
      guestRange: "30 – 180",
      flightTime: "8 – 10 hrs to Nice",
      languages: "FR · EN",
      currency: "EUR",
      signature:
        "Belle-Époque villas above the Mediterranean. A formal coast for a formal wedding.",
      climateCue: "warm, dry, blue-water summers",
      hurricaneRisk: false,
    },
  ],
  americas: [
    {
      slug: "tulum-los-cabos",
      region: "americas",
      name: "Tulum & Los Cabos",
      country: "México",
      subLocations: "Jungle · cenotes · Pacific bluffs",
      peakWindow: "November – April",
      offWindow: "June – September",
      guestRange: "40 – 350",
      flightTime: "3 – 6 hrs from major hubs",
      languages: "ES · EN",
      currency: "MXN / USD",
      signature:
        "Two coasts, one country. Jungle ceremonies and Pacific-bluff dinners — the breadth of México at our disposal.",
      climateCue: "warm, dry, low-humidity winters",
      hurricaneRisk: true,
    },
    {
      slug: "the-hamptons",
      region: "americas",
      name: "The Hamptons",
      country: "United States",
      subLocations: "East Hampton · Sag Harbor",
      peakWindow: "May – October",
      offWindow: "December – March",
      guestRange: "50 – 350",
      flightTime: "3 hrs to NYC · 2 hr drive",
      languages: "EN",
      currency: "USD",
      signature:
        "Shingle-style estates, long-table coastal dinners, and the formality of the American East Coast at its quietest.",
      climateCue: "warm summers, cool ocean evenings",
      hurricaneRisk: true,
    },
    {
      slug: "aspen-napa",
      region: "americas",
      name: "Aspen & Napa",
      country: "United States",
      subLocations: "Winter weddings · vineyards",
      peakWindow: "June – September · December (Aspen)",
      offWindow: "April – May · October – November",
      guestRange: "40 – 220",
      flightTime: "4 – 6 hrs from NYC",
      languages: "EN",
      currency: "USD",
      signature:
        "Mountain weddings in snow, vineyard weddings in light. Two American landscapes, one shared sensibility.",
      climateCue: "cool, dry, alpine clarity",
      hurricaneRisk: false,
    },
    {
      slug: "orlando",
      region: "americas",
      name: "Orlando",
      country: "United States",
      subLocations: "Lake Nona · Bella Collina · Reunion Resort",
      peakWindow: "October – April",
      offWindow: "June – September",
      guestRange: "40 – 400",
      flightTime: "2 – 3 hrs from major hubs",
      languages: "EN · ES",
      currency: "USD",
      signature:
        "Central Florida's lakeside estates and grand resorts — a destination wedding carried with the ease of a major international hub.",
      climateCue: "balmy, dry winters; warm, humid summers",
      hurricaneRisk: true,
    },
  ],
};

export const REGION_ORDER: Region[] = [
  "caribbean",
  "mediterranean",
  "western-europe",
  "americas",
];

export const ALL_FACTS: Fact[] = REGION_ORDER.flatMap(
  (r) => DESTINATIONS_BY_REGION[r],
);

export const ALL_SLUGS: string[] = ALL_FACTS.map((f) => f.slug);
