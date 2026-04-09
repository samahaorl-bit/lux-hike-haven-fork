export type BlogLocale = "en" | "nl";

export type BlogSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type TouristAttractionInfo = {
  name: string;
  description: string;
  locality: string;
};

export type BlogPost = {
  translationKey: string;
  locale: BlogLocale;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  coverImage: string;
  coverImageAlt?: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  category: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  tags: string[];
  routeHighlights: string[];
  logisticsHighlights: string[];
  sections: BlogSection[];
  faq: BlogFaqItem[];
  attractionSchema: TouristAttractionInfo[];
};

const blogPosts: BlogPost[] = [
  {
    translationKey: "complete-guide",
    locale: "nl",
    slug: "wandelen-in-luxemburg-complete-gids",
    title: "Wandelen in Luxemburg: complete gids voor toeristen uit Nederland",
    excerpt:
      "Alles wat Nederlandse reizigers moeten weten over routes, regio's en planning voor een sterke wandelvakantie in Luxemburg.",
    description:
      "Complete Nederlandstalige gids voor wandelen in Luxemburg. Gericht op zoekintentie zoals 'wanderen in Luxembourg' met routes, reistips en verblijfsadvies.",
    coverImage: "/Central-stylish/dinning-room.avif",
    publishedAt: "2026-03-18",
    updatedAt: "2026-04-07",
    readingMinutes: 9,
    category: "Pijlergids",
    focusKeyword: "wandelen in Luxemburg",
    secondaryKeywords: [
      "wanderen in Luxembourg",
      "wandelvakantie Luxemburg",
      "mooiste wandelroutes Luxemburg",
    ],
    tags: ["Mullerthal", "wandelvakantie", "Nederland"],
    routeHighlights: [
      "Mullerthal Trail Route 1",
      "Vianden Castle Circuit",
      "Echternach Lake Loop",
    ],
    logisticsHighlights: [
      "Auto vanaf Randstad: ongeveer 4.5 tot 5.5 uur",
      "Openbaar vervoer in Luxemburg is gratis",
      "Grevenmacher werkt als centrale uitvalsbasis",
    ],
    sections: [
      {
        title: "Waarom Luxemburg zo populair is bij Nederlandse wandelaars",
        paragraphs: [
          "Luxemburg is compact, groen en verrassend gevarieerd. Je combineert in korte tijd rotsformaties, bosroutes en panoramische uitzichtpunten.",
          "Voor Nederlandse reizigers is de reistijd overzichtelijk en dat maakt het land ideaal voor een wandelweekend of korte wandelvakantie.",
        ],
      },
      {
        title: "De beste regio's om te wandelen in Luxemburg",
        paragraphs: [
          "Mullerthal is de bekendste regio en wordt vaak gekozen door mensen die zoeken op wandelen in Luxemburg.",
          "Vianden en Echternach zijn sterk voor kortere routes en combineren natuur met culturele stops.",
        ],
        bullets: [
          "Mullerthal: rotsen, bos en iconische paden",
          "Vianden: heuvelachtig met kasteelzichten",
          "Echternach: toegankelijk en geschikt voor gemengd niveau",
        ],
      },
      {
        title: "Slim plannen vanuit Nederland",
        paragraphs: [
          "Vertrek vroeg in de ochtend zodat je op dag 1 nog een korte route kunt doen.",
          "Plan maximaal twee kernregio's voor een weekend. Zo houd je de trip ontspannen en voorkom je te veel transfertijd.",
        ],
        bullets: [
          "Dag 1: aankomst + lichte route",
          "Dag 2: hoofdwandeling",
          "Dag 3: korte ochtendroute + terugreis",
        ],
      },
      {
        title: "Waar overnachten voor snelle toegang tot routes",
        paragraphs: [
          "Een centrale locatie in Grevenmacher maakt het eenvoudiger om meerdere wandelgebieden te combineren.",
          "Je bespaart tijd op logistiek en houdt meer energie over voor de routes zelf.",
        ],
      },
    ],
    faq: [
      {
        question: "Is Luxemburg geschikt voor een wandelweekend vanuit Nederland?",
        answer:
          "Ja. De afstand is goed te doen met de auto en je kunt in 2 tot 4 dagen meerdere wandelgebieden combineren.",
      },
      {
        question: "Welke regio kies ik voor een eerste wandeltrip in Luxemburg?",
        answer:
          "Mullerthal is meestal de beste eerste keuze, aangevuld met Vianden of Echternach voor variatie.",
      },
      {
        question: "Is wandelen in Luxemburg ook geschikt voor gemengde groepen?",
        answer:
          "Ja. Er zijn makkelijke, middelzware en uitdagende routes, waardoor je goed kunt afstemmen op het niveau van je groep.",
      },
    ],
    attractionSchema: [
      {
        name: "Mullerthal Region",
        description: "Bekend wandelgebied met rotsformaties en bosrijke trails.",
        locality: "Mullerthal",
      },
      {
        name: "Vianden Castle",
        description: "Historische kasteelomgeving met populaire wandelroutes.",
        locality: "Vianden",
      },
    ],
  },
  {
    translationKey: "complete-guide",
    locale: "en",
    slug: "hiking-in-luxembourg-complete-guide-for-dutch-tourists",
    title: "Hiking in Luxembourg: complete guide for Dutch tourists",
    excerpt:
      "A practical planning guide for travelers from the Netherlands looking for the best trails, logistics, and stays in Luxembourg.",
    description:
      "English guide targeting Dutch travel intent around 'wanderen in Luxembourg' with route planning, travel logistics, and accommodation strategy.",
    coverImage: "/Central-stylish/dinning-room.avif",
    publishedAt: "2026-03-18",
    updatedAt: "2026-04-07",
    readingMinutes: 9,
    category: "Pillar Guide",
    focusKeyword: "hiking in Luxembourg",
    secondaryKeywords: [
      "wanderen in Luxembourg",
      "walking holiday Luxembourg",
      "best hikes in Luxembourg",
    ],
    tags: ["Mullerthal", "weekend trip", "Netherlands"],
    routeHighlights: [
      "Mullerthal Trail Route 1",
      "Vianden Castle Circuit",
      "Echternach Lake Loop",
    ],
    logisticsHighlights: [
      "Typical drive from central Netherlands: 4.5 to 5.5 hours",
      "Public transport in Luxembourg is free nationwide",
      "Grevenmacher works as a central base for multi-region access",
    ],
    sections: [
      {
        title: "Why Luxembourg fits Dutch hiking travelers",
        paragraphs: [
          "Luxembourg is compact and trail-dense, which makes it ideal for 2- to 4-day breaks from Holland.",
          "You can combine scenic forests, rock landscapes, and cultural villages without long transfers.",
        ],
      },
      {
        title: "Best hiking regions for first-time visitors",
        paragraphs: [
          "Mullerthal is the flagship area and matches high-intent searches around hiking in Luxembourg.",
          "Vianden and Echternach are excellent add-ons for mixed-level groups.",
        ],
        bullets: [
          "Mullerthal: iconic rocks and woodland trails",
          "Vianden: elevation plus castle viewpoints",
          "Echternach: balanced routes for varied experience levels",
        ],
      },
      {
        title: "How to plan a weekend from the Netherlands",
        paragraphs: [
          "Leave early on day one and include a short warm-up trail after arrival.",
          "Focus on two core regions per weekend to keep pace realistic and enjoyable.",
        ],
        bullets: [
          "Day 1: travel and light walk",
          "Day 2: main trail day",
          "Day 3: short loop and return drive",
        ],
      },
      {
        title: "Where to stay for efficient trail access",
        paragraphs: [
          "Choosing a central base near Grevenmacher can significantly reduce transfer time.",
          "Better logistics usually means more trail time and less friction for group trips.",
        ],
      },
    ],
    faq: [
      {
        question: "Is Luxembourg suitable for a short hiking break from Holland?",
        answer:
          "Yes. Travel time is manageable and route density is high, so short trips can still feel complete.",
      },
      {
        question: "Which region should I start with?",
        answer:
          "Mullerthal is usually the best first pick, with Vianden or Echternach as strong additions.",
      },
      {
        question: "Can mixed-skill groups hike in Luxembourg comfortably?",
        answer:
          "Yes. The trail network includes easy, moderate, and challenging options across close-by regions.",
      },
    ],
    attractionSchema: [
      {
        name: "Mullerthal Region",
        description: "Signature hiking area known for rock corridors and forest paths.",
        locality: "Mullerthal",
      },
      {
        name: "Vianden Castle",
        description: "Historic hilltop site with scenic walking routes nearby.",
        locality: "Vianden",
      },
    ],
  },
  {
    translationKey: "dog-friendly-hiking",
    locale: "nl",
    slug: "wandelen-in-luxemburg-met-de-hond-tips-en-routes",
    title: "Wandelen in Luxemburg met de hond: tips, routes en regels",
    excerpt:
      "Praktische gids voor Nederlandse hondeneigenaren met routekeuzes, voorbereiding en lokale tips voor een veilige wandeltrip.",
    description:
      "Nederlandse gids voor wandelen in Luxemburg met de hond. Inclusief hondvriendelijke routes, voorbereiding en reisadvies vanuit Nederland.",
    coverImage: "/Central-stylish/24b60b66-902c-4a16-9858-5c106b7f55cd.avif",
    publishedAt: "2026-03-25",
    updatedAt: "2026-04-07",
    readingMinutes: 7,
    category: "Special Interest",
    focusKeyword: "wandelen in Luxemburg met de hond",
    secondaryKeywords: [
      "hondvriendelijke wandelroutes Luxemburg",
      "wandelvakantie hond Luxemburg",
      "wanderen in Luxembourg met hond",
    ],
    tags: ["hondvriendelijk", "Mullerthal", "reisvoorbereiding"],
    routeHighlights: [
      "Echternach Lake Loop",
      "Vianden Castle Circuit",
      "Beaufort Castle Ruins",
    ],
    logisticsHighlights: [
      "Neem altijd water en rustpauzes mee in je planning",
      "Controleer lokale aanlijnregels per gebied",
      "Kies een verblijf met buitenruimte en makkelijke toegang",
    ],
    sections: [
      {
        title: "Waarom Luxemburg goed werkt voor wandelen met hond",
        paragraphs: [
          "Veel routes lopen door bos en natuurgebieden met gevarieerd terrein en schaduw.",
          "Voor Nederlandse reizigers is de afstand haalbaar en daardoor geschikt voor korte trips met huisdier.",
        ],
      },
      {
        title: "Routekeuze voor veiligheid en comfort",
        paragraphs: [
          "Begin met kortere routes zodat je hond kan wennen aan hoogteverschillen en ondergrond.",
          "Plan rustmomenten rond waterrijke of schaduwrijke zones.",
        ],
        bullets: [
          "Kies routes van 5 tot 10 km voor dag 1",
          "Vermijd extreme hitte in de middag",
          "Neem een compacte EHBO-set voor hond mee",
        ],
      },
      {
        title: "Checklist voor vertrek uit Nederland",
        paragraphs: [
          "Een goede voorbereiding voorkomt stress tijdens je wandelweekend.",
        ],
        bullets: [
          "Hondenpaspoort en vaccinatiecheck",
          "Aangelijnd wandelen waar verplicht",
          "Reserve lijn, drinkbak en handdoek",
        ],
      },
    ],
    faq: [
      {
        question: "Zijn honden toegestaan op wandelroutes in Luxemburg?",
        answer:
          "Op veel routes wel, maar regels verschillen per gebied. Controleer altijd de lokale informatie.",
      },
      {
        question: "Welke regio is geschikt voor een eerste trip met hond?",
        answer:
          "Echternach en delen van Mullerthal zijn vaak goede startpunten door overzichtelijke route-opties.",
      },
      {
        question: "Wat is de belangrijkste voorbereiding?",
        answer:
          "Goede routekeuze, genoeg water en rekening houden met temperatuur en terrein.",
      },
    ],
    attractionSchema: [
      {
        name: "Echternach Lake",
        description: "Toegankelijk meergebied met rustige wandelmogelijkheden.",
        locality: "Echternach",
      },
      {
        name: "Beaufort Nature Trails",
        description: "Bosrijke wandelzone met gevarieerde routes.",
        locality: "Beaufort",
      },
    ],
  },
  {
    translationKey: "dog-friendly-hiking",
    locale: "en",
    slug: "dog-friendly-hiking-in-luxembourg-tips-and-routes",
    title: "Dog-friendly hiking in Luxembourg: practical tips and routes",
    excerpt:
      "A practical field guide for Dutch travelers bringing their dog on a hiking weekend in Luxembourg.",
    description:
      "English article focused on Dutch search intent for dog-friendly hiking in Luxembourg, including route planning and travel preparation.",
    coverImage: "/Central-stylish/24b60b66-902c-4a16-9858-5c106b7f55cd.avif",
    publishedAt: "2026-03-25",
    updatedAt: "2026-04-07",
    readingMinutes: 7,
    category: "Special Interest",
    focusKeyword: "dog-friendly hiking Luxembourg",
    secondaryKeywords: [
      "wandelen in Luxemburg met de hond",
      "dog friendly trails Mullerthal",
      "wanderen in Luxembourg with dog",
    ],
    tags: ["dog-friendly", "Mullerthal", "trip planning"],
    routeHighlights: [
      "Echternach Lake Loop",
      "Vianden Castle Circuit",
      "Beaufort Castle Ruins",
    ],
    logisticsHighlights: [
      "Plan hydration and rest breaks in advance",
      "Check leash rules by region",
      "Book a stay with easy outdoor access",
    ],
    sections: [
      {
        title: "Why Luxembourg works for hiking with dogs",
        paragraphs: [
          "Many routes offer woodland shade and mixed terrain that supports flexible day planning.",
          "Travel time from Holland is manageable, making pet-inclusive weekend trips realistic.",
        ],
      },
      {
        title: "Choosing the right routes",
        paragraphs: [
          "Start with shorter loops and progressively move to moderate trails.",
          "Prioritize trails with clear waymarking and easy water-break points.",
        ],
        bullets: [
          "Choose 5 to 10 km on day one",
          "Avoid peak afternoon heat",
          "Carry a compact dog first-aid kit",
        ],
      },
      {
        title: "Pre-trip checklist from the Netherlands",
        paragraphs: [
          "A short checklist prevents the most common weekend disruptions.",
        ],
        bullets: [
          "Pet passport and vaccination checks",
          "Leash and backup leash",
          "Portable bowl and quick-dry towel",
        ],
      },
    ],
    faq: [
      {
        question: "Are dogs allowed on hiking trails in Luxembourg?",
        answer:
          "Often yes, but rules vary by area. Always verify local guidance before your trip.",
      },
      {
        question: "Which region is easiest for a first dog-friendly trip?",
        answer:
          "Echternach and selected Mullerthal loops are usually practical starting options.",
      },
      {
        question: "What preparation matters most?",
        answer:
          "Hydration, route length planning, and adapting to weather and terrain.",
      },
    ],
    attractionSchema: [
      {
        name: "Echternach Lake",
        description: "Accessible lake area with gentle walking options.",
        locality: "Echternach",
      },
      {
        name: "Beaufort Nature Trails",
        description: "Woodland route area with varied path profiles.",
        locality: "Beaufort",
      },
    ],
  },
  {
    translationKey: "mullerthal-camping",
    locale: "nl",
    slug: "top-hondvriendelijke-campings-langs-de-mullerthal-trail",
    title: "Top hondvriendelijke campings langs de Mullerthal Trail",
    excerpt:
      "Een praktische shortlist voor Nederlandse reizigers die Mullerthal willen combineren met hondvriendelijke overnachtingsopties.",
    description:
      "Vind hondvriendelijke campings langs de Mullerthal Trail en plan een wandelvakantie in Luxemburg vanuit Nederland met minder uitzoekwerk.",
    coverImage: "/Central-stylish/1e4b906d-5c3d-45a9-87ce-63f81762d010.avif",
    publishedAt: "2026-03-29",
    updatedAt: "2026-04-07",
    readingMinutes: 8,
    category: "Camping",
    focusKeyword: "hondvriendelijke campings Mullerthal",
    secondaryKeywords: [
      "camping Mullerthal Trail",
      "wandelvakantie Luxemburg camping",
      "wanderen in Luxembourg camping",
    ],
    tags: ["camping", "hondvriendelijk", "Mullerthal"],
    routeHighlights: [
      "Mullerthal Trail Route 1",
      "Mullerthal connector paths",
      "Echternach access loops",
    ],
    logisticsHighlights: [
      "Boek vroeg in april-september",
      "Check hondbeleid per camping",
      "Combineer kamperen met dagtochten vanuit vaste basis",
    ],
    sections: [
      {
        title: "Wanneer campings bij Mullerthal het meeste voordeel bieden",
        paragraphs: [
          "Voor actieve wandelaars bieden campings flexibiliteit in starttijden en routekeuze.",
          "Voor Nederlandse toeristen met hond zijn campings vaak aantrekkelijk door buitenruimte en praktische voorzieningen.",
        ],
      },
      {
        title: "Waar je op moet letten bij selectie",
        paragraphs: [
          "Niet elke camping heeft hetzelfde beleid voor honden, aankomsttijden en routebereikbaarheid.",
        ],
        bullets: [
          "Loopafstand of korte rijafstand tot trailheads",
          "Sanitaire voorzieningen en rustige zones",
          "Heldere regels rond honden op het terrein",
        ],
      },
      {
        title: "Alternatief: centrale accommodatie voor meer comfort",
        paragraphs: [
          "Wie comfort prioriteert kan kiezen voor een centrale verblijfslocatie met dagtrips richting Mullerthal.",
          "Dat kan handig zijn bij wisselend weer of langere verblijven.",
        ],
      },
    ],
    faq: [
      {
        question: "Zijn campings rond Mullerthal snel volgeboekt?",
        answer:
          "In populaire maanden wel. Vroeg boeken is sterk aanbevolen, zeker met hond.",
      },
      {
        question: "Kun je zonder auto goed bij de trails komen?",
        answer:
          "Met gratis openbaar vervoer kom je ver, maar voor maximale flexibiliteit kiezen veel Nederlanders voor de auto.",
      },
      {
        question: "Wat is het grootste voordeel van een centrale uitvalsbasis?",
        answer:
          "Meer comfort en de mogelijkheid om meerdere regio's efficiënt te combineren.",
      },
    ],
    attractionSchema: [
      {
        name: "Mullerthal Trail",
        description: "Iconische trailzone met rotslandschap en goed gemarkeerde routes.",
        locality: "Mullerthal",
      },
    ],
  },
  {
    translationKey: "mullerthal-camping",
    locale: "en",
    slug: "best-dog-friendly-campsites-near-mullerthal-trail",
    title: "Best dog-friendly campsites near the Mullerthal Trail",
    excerpt:
      "A practical shortlist for Dutch travelers planning a dog-friendly hiking trip around Luxembourg's most famous trail region.",
    description:
      "English guide to dog-friendly campsite planning near Mullerthal Trail, aligned with Dutch traveler search intent.",
    coverImage: "/Central-stylish/1e4b906d-5c3d-45a9-87ce-63f81762d010.avif",
    publishedAt: "2026-03-29",
    updatedAt: "2026-04-07",
    readingMinutes: 8,
    category: "Camping",
    focusKeyword: "dog-friendly campsites Mullerthal",
    secondaryKeywords: [
      "Mullerthal Trail camping",
      "wandelen in Luxemburg camping",
      "walking holiday Luxembourg dog-friendly",
    ],
    tags: ["camping", "dog-friendly", "Mullerthal"],
    routeHighlights: [
      "Mullerthal Trail Route 1",
      "Mullerthal connector paths",
      "Echternach access loops",
    ],
    logisticsHighlights: [
      "Book early during peak season",
      "Verify dog policy before payment",
      "Balance campsite nights with central-stay flexibility",
    ],
    sections: [
      {
        title: "When campsite strategy is the right fit",
        paragraphs: [
          "Campsites provide flexibility for early starts and nature-first itineraries.",
          "For Dutch travelers with dogs, outdoor space and trail proximity are often key decision factors.",
        ],
      },
      {
        title: "Selection criteria that matter most",
        paragraphs: [
          "Facilities and pet rules vary significantly, so compare options carefully.",
        ],
        bullets: [
          "Distance to main trailheads",
          "Shower and utility quality",
          "Transparent pet access rules",
        ],
      },
      {
        title: "Comfort alternative for mixed-weather trips",
        paragraphs: [
          "A central apartment base can be a better fit when weather changes quickly or group comfort is a priority.",
        ],
      },
    ],
    faq: [
      {
        question: "Do campsites near Mullerthal sell out quickly?",
        answer:
          "Yes, especially in spring and summer. Early booking is recommended.",
      },
      {
        question: "Can you reach trails without a car?",
        answer:
          "Public transport is free and useful, but many Dutch visitors still prefer a car for schedule control.",
      },
      {
        question: "What is the key advantage of a central stay?",
        answer:
          "Comfort plus easy access to multiple regions in one trip.",
      },
    ],
    attractionSchema: [
      {
        name: "Mullerthal Trail",
        description: "Signature Luxembourg hiking area with marked routes and rock formations.",
        locality: "Mullerthal",
      },
    ],
  },
  {
    translationKey: "weekend-from-holland",
    locale: "nl",
    slug: "wandelweekend-luxemburg-vanuit-holland-complete-planning",
    title: "Wandelweekend Luxemburg vanuit Holland: complete planning",
    excerpt:
      "Stap-voor-stap weekendplanning voor Nederlandse toeristen: reistijd, routekeuze en slimme overnachtingsstrategie.",
    description:
      "Plan een wandelweekend in Luxemburg vanuit Holland met een praktisch schema, reistips en routes voor 2-4 dagen.",
    coverImage: "/Central-stylish/e13b7deb-e11f-41e1-8a22-e3b1beb379dc.avif",
    publishedAt: "2026-04-02",
    updatedAt: "2026-04-07",
    readingMinutes: 6,
    category: "Weekend Planning",
    focusKeyword: "wandelweekend Luxemburg",
    secondaryKeywords: [
      "wandelen in Luxemburg vanuit Nederland",
      "wanderen in Luxembourg weekend",
      "2 dagen wandelen Luxemburg",
    ],
    tags: ["weekend", "routeplanning", "Nederland"],
    routeHighlights: [
      "Mullerthal dagroute",
      "Vianden Castle Circuit",
      "Beaufort natuurroute",
    ],
    logisticsHighlights: [
      "Vertrek vrijdag vroeg voor extra trailtijd",
      "Plan 1 zware en 1 lichte wandeldag",
      "Boek verblijf centraal voor minder transfers",
    ],
    sections: [
      {
        title: "Het ideale 2- of 3-daagse schema",
        paragraphs: [
          "Een goede volgorde voorkomt vermoeidheid en maakt je weekend relaxter.",
        ],
        bullets: [
          "Dag 1: aankomst + korte route",
          "Dag 2: langere kernroute",
          "Dag 3: korte afsluitende wandeling",
        ],
      },
      {
        title: "Welke routes passen bij een kort weekend",
        paragraphs: [
          "Kies routes met duidelijke markering en beperkte transferafstand tussen startpunten.",
          "Combinaties rond Mullerthal en Vianden zijn hiervoor vaak sterk.",
        ],
      },
      {
        title: "Overnachting en energiebeheer",
        paragraphs: [
          "Bij korte trips maakt comfort een groot verschil. Een vaste basis met goede voorzieningen helpt je herstel.",
        ],
      },
    ],
    faq: [
      {
        question: "Kun je Luxemburg in een weekend goed beleven?",
        answer:
          "Ja, met een slimme routekeuze en centrale overnachting haal je veel uit 2 of 3 dagen.",
      },
      {
        question: "Welke dag moet de zwaarste wandeling zijn?",
        answer:
          "Meestal dag 2, zodat dag 1 en dag 3 logistiek rustiger blijven.",
      },
      {
        question: "Waar zit de grootste tijdswinst?",
        answer:
          "In een centraal verblijf en korte transfers tussen routegebieden.",
      },
    ],
    attractionSchema: [
      {
        name: "Grevenmacher",
        description: "Centrale locatie met toegang tot meerdere Luxemburgse wandelregio's.",
        locality: "Grevenmacher",
      },
    ],
  },
  {
    translationKey: "weekend-from-holland",
    locale: "en",
    slug: "luxembourg-hiking-weekend-from-holland-complete-plan",
    title: "Luxembourg hiking weekend from Holland: complete planning guide",
    excerpt:
      "A step-by-step framework for Dutch travelers to plan efficient 2-4 day hiking breaks in Luxembourg.",
    description:
      "English weekend planning guide focused on Dutch traveler intent for short hiking trips from Holland to Luxembourg.",
    coverImage: "/Central-stylish/e13b7deb-e11f-41e1-8a22-e3b1beb379dc.avif",
    publishedAt: "2026-04-02",
    updatedAt: "2026-04-07",
    readingMinutes: 6,
    category: "Weekend Planning",
    focusKeyword: "Luxembourg hiking weekend",
    secondaryKeywords: [
      "hiking in Luxembourg from Netherlands",
      "wandelen in Luxemburg weekend",
      "2 day hikes Luxembourg",
    ],
    tags: ["weekend", "planning", "Netherlands"],
    routeHighlights: [
      "Mullerthal main day route",
      "Vianden Castle Circuit",
      "Beaufort nature loop",
    ],
    logisticsHighlights: [
      "Start early Friday for extra trail time",
      "Balance one long hike with one recovery-friendly hike",
      "Choose a central stay to reduce transfer friction",
    ],
    sections: [
      {
        title: "A practical 2- or 3-day itinerary",
        paragraphs: [
          "Structure matters more than volume for short trips.",
        ],
        bullets: [
          "Day 1: arrival plus short trail",
          "Day 2: primary long route",
          "Day 3: short scenic finish",
        ],
      },
      {
        title: "Trail combinations that work for short breaks",
        paragraphs: [
          "Pick routes with clear waymarking and low transfer burden between trailheads.",
          "Mullerthal plus Vianden is one of the strongest pairings.",
        ],
      },
      {
        title: "Stay strategy and recovery planning",
        paragraphs: [
          "Comfort improves consistency on back-to-back hiking days. A fixed base supports better pacing and rest.",
        ],
      },
    ],
    faq: [
      {
        question: "Is Luxembourg worth it for just a weekend?",
        answer:
          "Yes. The country is compact enough to deliver a rich hiking experience in 2 to 3 days.",
      },
      {
        question: "When should I schedule the hardest hike?",
        answer:
          "Usually day 2, so travel days stay lighter and more flexible.",
      },
      {
        question: "Where can I save the most time?",
        answer:
          "By staying central and minimizing transfers between trail regions.",
      },
    ],
    attractionSchema: [
      {
        name: "Grevenmacher",
        description: "Central access point for multiple Luxembourg hiking regions.",
        locality: "Grevenmacher",
      },
    ],
  },
  {
    translationKey: "public-transport",
    locale: "nl",
    slug: "gratis-openbaar-vervoer-in-luxemburg-voor-wandelaars",
    title: "Gratis openbaar vervoer in Luxemburg voor wandelaars uit Nederland",
    excerpt:
      "Zo gebruik je het gratis OV-systeem slim tijdens een wandelvakantie in Luxemburg, inclusief tips voor routecombinaties.",
    description:
      "Nederlandse gids over gratis openbaar vervoer in Luxemburg voor wandelaars. Gericht op praktische planning en lokale routecombinaties.",
    coverImage: "/Central-stylish/5e01f156-3612-49d9-914c-3c2176d4c9c6.avif",
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-07",
    readingMinutes: 6,
    category: "Logistics",
    focusKeyword: "gratis openbaar vervoer Luxemburg",
    secondaryKeywords: [
      "wandelen in Luxemburg zonder auto",
      "openbaar vervoer Luxemburg wandelen",
      "wanderen in Luxembourg transport",
    ],
    tags: ["openbaar vervoer", "logistiek", "wandelplanning"],
    routeHighlights: [
      "Echternach busverbindingen",
      "Vianden regionale lijn",
      "Mullerthal toegangscombinaties",
    ],
    logisticsHighlights: [
      "OV is gratis binnen Luxemburg",
      "Check weekendfrequenties vooraf",
      "Koppel route-einde aan bus/treinpunt",
    ],
    sections: [
      {
        title: "Hoe het gratis OV je wandelplanning sterker maakt",
        paragraphs: [
          "Je kunt lineaire routes doen zonder terug te moeten naar hetzelfde startpunt.",
          "Dat vergroot de variatie van je weekend en kan reistijd besparen.",
        ],
      },
      {
        title: "Combineren van trail en OV zonder stress",
        paragraphs: [
          "Plan je route op basis van eindpunt-logistiek, niet alleen op basis van uitzicht.",
        ],
        bullets: [
          "Start met routekaart en eindhalte",
          "Controleer laatste rit terug",
          "Bewaar offline schema's als backup",
        ],
      },
      {
        title: "Wanneer auto toch handiger is",
        paragraphs: [
          "Bij zonsopkomstroutes, slecht weer of grote groepen kan een auto extra flexibiliteit geven.",
        ],
      },
    ],
    faq: [
      {
        question: "Is al het openbaar vervoer in Luxemburg gratis?",
        answer:
          "Bijna alle reguliere trein-, bus- en tramverbindingen binnen Luxemburg zijn gratis.",
      },
      {
        question: "Kun je populaire wandelregio's met OV bereiken?",
        answer:
          "Ja, veel regio's zijn bereikbaar, maar frequenties verschillen per dag en seizoen.",
      },
      {
        question: "Moet ik alsnog een auto overwegen?",
        answer:
          "Voor maximale flexibiliteit of vroege starttijden kan een auto handig blijven.",
      },
    ],
    attractionSchema: [
      {
        name: "Echternach",
        description: "Wandelregio met sterke OV-koppelingen voor dagroutes.",
        locality: "Echternach",
      },
    ],
  },
  {
    translationKey: "public-transport",
    locale: "en",
    slug: "free-public-transport-in-luxembourg-for-hikers",
    title: "Free public transport in Luxembourg for hikers from the Netherlands",
    excerpt:
      "How to use Luxembourg's free transport network to build smarter hiking itineraries with fewer logistics bottlenecks.",
    description:
      "English logistics guide for Dutch hikers on using free public transport in Luxembourg to optimize route planning.",
    coverImage: "/Central-stylish/5e01f156-3612-49d9-914c-3c2176d4c9c6.avif",
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-07",
    readingMinutes: 6,
    category: "Logistics",
    focusKeyword: "free public transport Luxembourg",
    secondaryKeywords: [
      "hiking Luxembourg without car",
      "Luxembourg buses for hikers",
      "wandelen in Luxemburg transport",
    ],
    tags: ["public transport", "planning", "trail logistics"],
    routeHighlights: [
      "Echternach network links",
      "Vianden regional connections",
      "Mullerthal access combinations",
    ],
    logisticsHighlights: [
      "Public transport is free within Luxembourg",
      "Check weekend frequency before departure",
      "Anchor routes to reachable end stops",
    ],
    sections: [
      {
        title: "How free transport improves hiking flexibility",
        paragraphs: [
          "You can finish in a different location instead of forcing a full loop.",
          "That unlocks stronger route combinations for short hiking breaks.",
        ],
      },
      {
        title: "Planning trail plus transport with less risk",
        paragraphs: [
          "Design around endpoint transport first, then fine-tune scenery priorities.",
        ],
        bullets: [
          "Start with the route endpoint",
          "Verify final return service",
          "Keep offline timetable screenshots",
        ],
      },
      {
        title: "When driving still makes sense",
        paragraphs: [
          "For early starts, unstable weather, or larger groups, a car can still be the most reliable option.",
        ],
      },
    ],
    faq: [
      {
        question: "Is all public transport in Luxembourg free?",
        answer:
          "Most regular train, bus, and tram lines within Luxembourg are free.",
      },
      {
        question: "Can I reach major hiking regions by transport?",
        answer:
          "Yes, many key regions are reachable, but service frequency varies by day and season.",
      },
      {
        question: "Should I still consider renting a car?",
        answer:
          "If you want maximum timing flexibility, especially for sunrise or remote starts, yes.",
      },
    ],
    attractionSchema: [
      {
        name: "Echternach",
        description: "Hiking area with useful transport integration for day routes.",
        locality: "Echternach",
      },
    ],
  },
];

export function getBlogPostPath(locale: BlogLocale, slug: string): string {
  return `/${locale}/blog/${slug}`;
}

export function getBlogIndexPath(locale: BlogLocale): string {
  return `/${locale}/blog`;
}

export function getBlogPosts(locale: BlogLocale): BlogPost[] {
  return blogPosts
    .filter((post) => post.locale === locale)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}

export function getBlogPost(locale: BlogLocale, slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.locale === locale && post.slug === slug);
}

export function getTranslatedPost(post: BlogPost): BlogPost | undefined {
  return blogPosts.find(
    (candidate) =>
      candidate.translationKey === post.translationKey && candidate.locale !== post.locale
  );
}

export function getBlogStaticParams(locale: BlogLocale): Array<{ slug: string }> {
  return getBlogPosts(locale).map((post) => ({ slug: post.slug }));
}

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts];
}

export function getBlogPostPairs(): Array<{ key: string; en: BlogPost; nl: BlogPost }> {
  const keys = Array.from(new Set(blogPosts.map((post) => post.translationKey)));
  return keys
    .map((key) => {
      const en = blogPosts.find((post) => post.translationKey === key && post.locale === "en");
      const nl = blogPosts.find((post) => post.translationKey === key && post.locale === "nl");
      if (!en || !nl) {
        return undefined;
      }
      return { key, en, nl };
    })
    .filter((pair): pair is { key: string; en: BlogPost; nl: BlogPost } => Boolean(pair));
}

function countSharedTerms(left: string[], right: string[]): number {
  const normalizedRight = new Set(right.map((term) => term.toLowerCase()));
  return left.reduce((total, term) => {
    return total + (normalizedRight.has(term.toLowerCase()) ? 1 : 0);
  }, 0);
}

export function getRelatedBlogPosts(post: BlogPost, limit = 3): BlogPost[] {
  return getBlogPosts(post.locale)
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      const sharedTags = countSharedTerms(candidate.tags, post.tags);
      const sharedKeywords = countSharedTerms(
        candidate.secondaryKeywords,
        post.secondaryKeywords
      );
      const sameCategoryBonus = candidate.category === post.category ? 2 : 0;
      const score = sharedTags * 3 + sharedKeywords * 2 + sameCategoryBonus;

      return { candidate, score };
    })
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return +new Date(b.candidate.publishedAt) - +new Date(a.candidate.publishedAt);
    })
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}
