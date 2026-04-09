import type { Metadata } from "next";
import Link from "next/link";
import { getAirbnbUrl } from "@/lib/links";
import { hikingRoutes } from "@/lib/hiking-routes";
import { absoluteUrl, seoRoutes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mullerthal wandeling | Routegids voor wandelen in Luxemburg",
  description:
    "Plan je Mullerthal wandeling met afstand, moeilijkheid en praktische tips. Perfect voor Nederlandse toeristen die wandelen in Luxemburg plannen.",
  keywords: [
    "wanderen in Luxembourg",
    "Mullerthal wandeling",
    "Mullerthal route",
    "wandelen Mullerthal Luxemburg",
    "wandelen in Luxemburg Mullerthal",
  ],
  alternates: {
    canonical: seoRoutes.nlMullerthal,
    languages: {
      "nl-NL": seoRoutes.nlMullerthal,
      en: seoRoutes.enHub,
      "x-default": seoRoutes.nlMullerthal,
    },
  },
  openGraph: {
    title: "Mullerthal wandeling | Routegids voor Nederlandse wandelaars",
    description:
      "Alles wat je nodig hebt voor een goede Mullerthal wandeling vanuit een centrale verblijfslocatie.",
    url: absoluteUrl(seoRoutes.nlMullerthal),
    locale: "nl_NL",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1536,
        height: 1024,
        alt: "Mullerthal wandeling in Luxemburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mullerthal wandeling | Praktische routegids",
    description:
      "Plan je Mullerthal wandeling in Luxemburg met tips voor Nederlandse bezoekers.",
    images: [siteConfig.defaultOgImage],
  },
};

const faqItems = [
  {
    q: "Is Mullerthal geschikt voor beginners?",
    a: "Ja, er zijn zowel makkelijke als middelzware trajecten. Kies een route op afstand en hoogteverschil die past bij je niveau.",
  },
  {
    q: "Hoe lang duurt een gemiddelde Mullerthal wandeling?",
    a: "Een populaire dagroute ligt vaak tussen 3 en 5 uur, afhankelijk van het traject en je pauzes.",
  },
  {
    q: "Waar verblijf je het beste voor Mullerthal?",
    a: "Een centrale basis zoals Grevenmacher helpt om meerdere regio's te combineren tijdens een weekend of korte vakantie.",
  },
];

export default function DutchMullerthalPage() {
  const bookingUrl = getAirbnbUrl("nl-mullerthal-wandeling", "seo-nl-mullerthal");
  const mullerthalRoute = hikingRoutes.find((route) => route.region === "Mullerthal");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Mullerthal wandeling",
      description:
        "Nederlandse routegids voor wandelen in Mullerthal, Luxemburg.",
      url: absoluteUrl(seoRoutes.nlMullerthal),
      inLanguage: "nl-NL",
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.brandName,
        url: siteConfig.url,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl(seoRoutes.home),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Wandelen in Luxemburg",
          item: absoluteUrl(seoRoutes.nlHub),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mullerthal wandeling",
          item: absoluteUrl(seoRoutes.nlMullerthal),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];

  return (
    <main lang="nl-NL" className="bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href={seoRoutes.home} className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={seoRoutes.nlHub} className="hover:text-primary">
            Wandelen in Luxemburg
          </Link>
          <span className="mx-2">/</span>
          <span>Mullerthal wandeling</span>
        </nav>

        <header className="section-reveal mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Mullerthal wandeling: route en voorbereiding
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            De Mullerthal-regio is een van de populairste wandelgebieden in
            Luxemburg. Met goede voorbereiding haal je meer uit je dag en
            combineer je natuur, uitzicht en tempo dat bij je groep past.
          </p>
        </header>

        {mullerthalRoute && (
          <section className="section-divider section-parallax-soft section-reveal mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Aanbevolen route: {mullerthalRoute.name}
            </h2>
            <div className="grid gap-4 md:grid-cols-4">
              <article
                className="section-reveal rounded-lg border border-border/70 bg-background p-4"
                style={{ animationDelay: "0.08s" }}
              >
                <p className="text-sm text-muted-foreground">Afstand</p>
                <p className="text-xl font-bold text-foreground">{mullerthalRoute.distanceKm} km</p>
              </article>
              <article
                className="section-reveal rounded-lg border border-border/70 bg-background p-4"
                style={{ animationDelay: "0.16s" }}
              >
                <p className="text-sm text-muted-foreground">Duur</p>
                <p className="text-xl font-bold text-foreground">{mullerthalRoute.duration}</p>
              </article>
              <article
                className="section-reveal rounded-lg border border-border/70 bg-background p-4"
                style={{ animationDelay: "0.24s" }}
              >
                <p className="text-sm text-muted-foreground">Niveau</p>
                <p className="text-xl font-bold text-foreground">{mullerthalRoute.difficulty}</p>
              </article>
              <article
                className="section-reveal rounded-lg border border-border/70 bg-background p-4"
                style={{ animationDelay: "0.32s" }}
              >
                <p className="text-sm text-muted-foreground">Startpunt</p>
                <p className="text-xl font-bold text-foreground">{mullerthalRoute.startPoint}</p>
              </article>
            </div>
            <p className="text-muted-foreground mt-5">{mullerthalRoute.summaryNl}</p>
          </section>
        )}

        <section className="section-divider section-parallax-soft section-reveal mb-12">
          <h2 className="text-3xl font-semibold text-foreground mb-4">Snelle checklist voor vertrek</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <article
              className="section-reveal rounded-xl border border-border bg-card p-5"
              style={{ animationDelay: "0.08s" }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">Voor de route</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Controleer het weer en kies passende kledinglagen.</li>
                <li>Neem voldoende water en een kleine snack mee.</li>
                <li>Start vroeg voor rustigere paden en betere planning.</li>
              </ul>
            </article>
            <article
              className="section-reveal rounded-xl border border-border bg-card p-5"
              style={{ animationDelay: "0.16s" }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">Na de route</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Plan ontspanning en herstel in je avondschema.</li>
                <li>Kies een verblijf met ruimte, parkeren en comfort.</li>
                <li>Bereid dag 2 voor met een kortere of langere routeoptie.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section-divider section-parallax-soft section-reveal mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Blijf centraal voor Mullerthal en meer
          </h2>
          <p className="text-muted-foreground mb-5 leading-relaxed">
            Met een centrale basis kun je Mullerthal combineren met andere
            routes zonder elke dag lange transfers te maken.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary-hover"
            >
              Bekijk verblijf in Grevenmacher
            </Link>
            <Link href={seoRoutes.nlStayNearTrails} className="inline-flex items-center rounded-lg border border-border px-5 py-3 font-semibold text-foreground hover:bg-muted">
              Overnachten bij wandelroutes
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <Link href={seoRoutes.nlSeasonal} className="font-semibold text-primary hover:text-primary-hover">
              Check Mullerthal per seizoen
            </Link>
            <Link href={seoRoutes.nlBeginner} className="font-semibold text-primary hover:text-primary-hover">
              Makkelijkere routes voor starters
            </Link>
            <Link href={seoRoutes.nlRainyDay} className="font-semibold text-primary hover:text-primary-hover">
              Slecht weer alternatief
            </Link>
          </div>
        </section>

        <section className="section-divider section-parallax-soft section-reveal">
          <h2 className="text-3xl font-semibold text-foreground mb-4">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details key={item.q} className="rounded-lg border border-border bg-card px-5 py-4">
                <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                <p className="mt-3 text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
