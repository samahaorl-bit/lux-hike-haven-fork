import type { Metadata } from "next";
import Link from "next/link";
import { getAirbnbUrl } from "@/lib/links";
import { absoluteUrl, seoRoutes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wandelweekend Luxemburg | 2-daagse planning voor Nederlanders",
  description:
    "Plan een wandelweekend in Luxemburg met een praktische 2-daagse route, tips voor vervoer en een comfortabele overnachting in Grevenmacher.",
  keywords: [
    "wanderen in Luxembourg",
    "wandelweekend Luxemburg",
    "weekend Luxemburg wandelen",
    "wandelen in Luxembourg weekend",
    "2 dagen wandelen Luxemburg",
    "wandelen vanuit Nederland Luxemburg",
  ],
  alternates: {
    canonical: seoRoutes.nlWeekend,
    languages: {
      "nl-NL": seoRoutes.nlWeekend,
      en: seoRoutes.enHub,
      "x-default": seoRoutes.nlWeekend,
    },
  },
  openGraph: {
    title: "Wandelweekend Luxemburg | 2-daagse planning voor Nederlanders",
    description:
      "Een praktische weekendgids voor Nederlanders die zoeken op wandelen in Luxemburg.",
    url: absoluteUrl(seoRoutes.nlWeekend),
    locale: "nl_NL",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1536,
        height: 1024,
        alt: "Wandelweekend in Luxemburg met verblijf in Grevenmacher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wandelweekend Luxemburg | Voor Nederlandse toeristen",
    description:
      "Plan 2 wandeldagen in Luxemburg met routes en centraal verblijf.",
    images: [siteConfig.defaultOgImage],
  },
};

const faqItems = [
  {
    q: "Is Luxemburg geschikt voor een 2-daagse wandeltrip?",
    a: "Ja. Je kunt in twee dagen meerdere routes combineren, vooral als je centraal verblijft in de regio Grevenmacher.",
  },
  {
    q: "Wat is de beste uitvalsbasis voor een wandelweekend?",
    a: "Een centrale locatie met goede bereikbaarheid, parkeeropties en snelle toegang tot Mullerthal, Echternach en Vianden.",
  },
  {
    q: "Welke periode is goed voor wandelen in Luxemburg?",
    a: "Voorjaar en najaar zijn populair door milde temperaturen en goede wandelcondities. In de zomer kun je vroeg starten voor comfortabel wandelen.",
  },
];

export default function DutchWeekendPage() {
  const bookingUrl = getAirbnbUrl("nl-wandelweekend-luxemburg", "seo-nl-weekend");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Wandelweekend Luxemburg",
      description:
        "2-daagse wandelweekend planning in Luxemburg voor Nederlandse toeristen.",
      url: absoluteUrl(seoRoutes.nlWeekend),
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
          name: "Wandelweekend Luxemburg",
          item: absoluteUrl(seoRoutes.nlWeekend),
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
          <span>Wandelweekend Luxemburg</span>
        </nav>

        <header className="section-reveal mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Wandelweekend Luxemburg: praktisch 2-daags plan
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Wil je een kort maar sterk weekend inplannen? Met dit schema kun je
            de populairste wandelregio's combineren zonder gehaast te reizen.
            Ideaal voor Nederlandse toeristen die zoeken op "wandelen in Luxemburg".
          </p>
        </header>

        <section className="section-divider section-parallax-soft section-reveal grid gap-4 md:grid-cols-2 mb-12">
          <article
            className="section-reveal rounded-xl border border-border bg-card p-6"
            style={{ animationDelay: "0.08s" }}
          >
            <p className="text-sm font-semibold text-primary mb-2">Dag 1</p>
            <h2 className="text-2xl font-semibold text-foreground mb-3">Mullerthal + Echternach</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>Ochtend: korte route in Mullerthal.</li>
              <li>Middag: lunch en natuurwandeling rond Echternach.</li>
              <li>Avond: ontspannen terug naar je verblijf in Grevenmacher.</li>
            </ul>
          </article>
          <article
            className="section-reveal rounded-xl border border-border bg-card p-6"
            style={{ animationDelay: "0.16s" }}
          >
            <p className="text-sm font-semibold text-primary mb-2">Dag 2</p>
            <h2 className="text-2xl font-semibold text-foreground mb-3">Vianden of Beaufort</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>Ochtend: route met hoogteverschillen en uitzicht.</li>
              <li>Middag: kasteelomgeving en lokale dorpen.</li>
              <li>Einde dag: terugreis naar Nederland of extra overnachting.</li>
            </ul>
          </article>
        </section>

        <section className="section-divider section-parallax-soft section-reveal mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Waarom dit werkt voor Nederlandse reizigers
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <article
              className="section-reveal rounded-lg border border-border/70 bg-background p-4"
              style={{ animationDelay: "0.08s" }}
            >
              <h3 className="font-semibold text-foreground mb-2">Efficient plannen</h3>
              <p className="text-sm text-muted-foreground">
                Twee volle wandeldagen zonder elke dag van verblijf te wisselen.
              </p>
            </article>
            <article
              className="section-reveal rounded-lg border border-border/70 bg-background p-4"
              style={{ animationDelay: "0.16s" }}
            >
              <h3 className="font-semibold text-foreground mb-2">Centrale basis</h3>
              <p className="text-sm text-muted-foreground">
                Vanuit Grevenmacher bereik je meerdere wandelgebieden per auto.
              </p>
            </article>
            <article
              className="section-reveal rounded-lg border border-border/70 bg-background p-4"
              style={{ animationDelay: "0.24s" }}
            >
              <h3 className="font-semibold text-foreground mb-2">Comfort na de route</h3>
              <p className="text-sm text-muted-foreground">
                Ruimte, faciliteiten en parkeren helpen bij een relaxte weekendtrip.
              </p>
            </article>
          </div>
        </section>

        <section className="section-divider section-parallax-soft section-reveal mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Verblijf boeken voor je wandelweekend
          </h2>
          <p className="text-muted-foreground mb-5 leading-relaxed">
            Boek vroeg voor populaire weekenden. Zo kun je routeplanning,
            aankomsttijd en rustmomenten strak op elkaar afstemmen.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary-hover"
            >
              Check beschikbaarheid
            </Link>
            <Link href={seoRoutes.nlTrails} className="inline-flex items-center rounded-lg border border-border px-5 py-3 font-semibold text-foreground hover:bg-muted">
              Bekijk routeoverzicht
            </Link>
            <Link href={seoRoutes.nlMullerthal} className="inline-flex items-center rounded-lg border border-border px-5 py-3 font-semibold text-foreground hover:bg-muted">
              Mullerthal wandeling plannen
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <Link href={seoRoutes.nlSeasonal} className="font-semibold text-primary hover:text-primary-hover">
              Beste seizoensroutes kiezen
            </Link>
            <Link href={seoRoutes.nlBeginner} className="font-semibold text-primary hover:text-primary-hover">
              Rustig starten met beginnersroutes
            </Link>
            <Link href={seoRoutes.nlRainyDay} className="font-semibold text-primary hover:text-primary-hover">
              Regenachtig weekend? Fallback-plan
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
