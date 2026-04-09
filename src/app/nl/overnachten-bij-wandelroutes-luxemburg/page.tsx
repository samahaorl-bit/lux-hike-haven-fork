import type { Metadata } from "next";
import Link from "next/link";
import { getAirbnbUrl } from "@/lib/links";
import { absoluteUrl, seoRoutes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Overnachten bij wandelroutes Luxemburg | Verblijf in Grevenmacher",
  description:
    "Zoek je overnachting bij wandelroutes in Luxemburg? Ontdek waarom een verblijf in Grevenmacher praktisch is voor Nederlandse wandelaars.",
  keywords: [
    "wanderen in Luxembourg",
    "overnachten bij wandelroutes Luxemburg",
    "verblijf wandelen Luxemburg",
    "accommodatie Luxemburg wandelen",
    "Grevenmacher overnachten",
  ],
  alternates: {
    canonical: seoRoutes.nlStayNearTrails,
    languages: {
      "nl-NL": seoRoutes.nlStayNearTrails,
      en: seoRoutes.enHub,
      "x-default": seoRoutes.nlStayNearTrails,
    },
  },
  openGraph: {
    title: "Overnachten bij wandelroutes Luxemburg | Voor Nederlandse wandelaars",
    description:
      "Praktische verblijfsgids voor wandelaars die Luxemburg vanuit een centrale locatie willen verkennen.",
    url: absoluteUrl(seoRoutes.nlStayNearTrails),
    locale: "nl_NL",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1536,
        height: 1024,
        alt: "Overnachten bij wandelroutes in Luxemburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Overnachten bij wandelroutes Luxemburg",
    description:
      "Vind een centrale verblijfslocatie in Grevenmacher voor jouw wandeltrip in Luxemburg.",
    images: [siteConfig.defaultOgImage],
  },
};

const faqItems = [
  {
    q: "Waarom is Grevenmacher handig als wandelbasis?",
    a: "Je hebt snelle toegang tot meerdere wandelregio's en tegelijk directe voorzieningen zoals winkels en restaurants.",
  },
  {
    q: "Voor hoeveel personen is het verblijf geschikt?",
    a: "De accommodatie is ingericht voor groepen tot 7 personen, met 3 slaapkamers en 2 badkamers.",
  },
  {
    q: "Is parkeren beschikbaar bij het verblijf?",
    a: "Ja, er zijn parkeeropties beschikbaar bij het verblijf en in de directe omgeving.",
  },
];

export default function DutchStayNearTrailsPage() {
  const bookingUrl = getAirbnbUrl(
    "nl-overnachten-bij-wandelroutes-luxemburg",
    "seo-nl-stay"
  );

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Overnachten bij wandelroutes Luxemburg",
      description:
        "Nederlandse gids voor verblijf dicht bij wandelroutes in Luxemburg.",
      url: absoluteUrl(seoRoutes.nlStayNearTrails),
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
          name: "Overnachten bij wandelroutes",
          item: absoluteUrl(seoRoutes.nlStayNearTrails),
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
          <span>Overnachten bij wandelroutes</span>
        </nav>

        <header className="section-reveal mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Overnachten bij wandelroutes in Luxemburg
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Voor een sterke wandeltrip is je verblijf net zo belangrijk als de
            route zelf. Met een centrale uitvalsbasis in Grevenmacher plan je
            makkelijker meerdere wandeldagen en houd je je weekend flexibel.
          </p>
        </header>

        <section className="section-divider section-parallax-soft section-reveal grid gap-4 md:grid-cols-3 mb-12">
          <article
            className="section-reveal rounded-xl border border-border bg-card p-5"
            style={{ animationDelay: "0.08s" }}
          >
            <p className="text-sm text-muted-foreground">Capaciteit</p>
            <p className="text-2xl font-bold text-foreground">Tot 7 gasten</p>
          </article>
          <article
            className="section-reveal rounded-xl border border-border bg-card p-5"
            style={{ animationDelay: "0.16s" }}
          >
            <p className="text-sm text-muted-foreground">Indeling</p>
            <p className="text-2xl font-bold text-foreground">3 slaapkamers, 2 badkamers</p>
          </article>
          <article
            className="section-reveal rounded-xl border border-border bg-card p-5"
            style={{ animationDelay: "0.24s" }}
          >
            <p className="text-sm text-muted-foreground">Pluspunt</p>
            <p className="text-2xl font-bold text-foreground">Parkeren en centrale ligging</p>
          </article>
        </section>

        <section className="section-divider section-parallax-soft section-reveal mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Waarom deze locatie werkt voor wandelaars
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <article
              className="section-reveal rounded-lg border border-border/70 bg-background p-4"
              style={{ animationDelay: "0.08s" }}
            >
              <h3 className="font-semibold text-foreground mb-2">Minder reistijd tussen routes</h3>
              <p className="text-sm text-muted-foreground">
                Je hoeft niet dagelijks van accommodatie te wisselen, waardoor je
                meer effectieve wandeltijd overhoudt.
              </p>
            </article>
            <article
              className="section-reveal rounded-lg border border-border/70 bg-background p-4"
              style={{ animationDelay: "0.16s" }}
            >
              <h3 className="font-semibold text-foreground mb-2">Gemak voor groepen</h3>
              <p className="text-sm text-muted-foreground">
                De indeling met meerdere slaapkamers en badkamers past goed bij
                gezinnen en vriendengroepen.
              </p>
            </article>
            <article
              className="section-reveal rounded-lg border border-border/70 bg-background p-4"
              style={{ animationDelay: "0.24s" }}
            >
              <h3 className="font-semibold text-foreground mb-2">Dicht bij voorzieningen</h3>
              <p className="text-sm text-muted-foreground">
                Praktisch voor boodschappen, eten en herstel na een actieve dag.
              </p>
            </article>
            <article
              className="section-reveal rounded-lg border border-border/70 bg-background p-4"
              style={{ animationDelay: "0.32s" }}
            >
              <h3 className="font-semibold text-foreground mb-2">Betere weekendlogistiek</h3>
              <p className="text-sm text-muted-foreground">
                Combineer meerdere regio's in een korte trip zonder gehaaste planning.
              </p>
            </article>
          </div>
        </section>

        <section className="section-divider section-parallax-soft section-reveal mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Beschikbaarheid en boeking
          </h2>
          <p className="text-muted-foreground mb-5 leading-relaxed">
            Controleer op tijd beschikbaarheid voor drukke periodes. Dit helpt
            je om routekeuze en verblijf soepel op elkaar af te stemmen.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary-hover"
            >
              Bekijk prijs en beschikbaarheid
            </Link>
            <Link href={seoRoutes.nlWeekend} className="inline-flex items-center rounded-lg border border-border px-5 py-3 font-semibold text-foreground hover:bg-muted">
              Plan je wandelweekend
            </Link>
            <Link href={seoRoutes.nlTrails} className="inline-flex items-center rounded-lg border border-border px-5 py-3 font-semibold text-foreground hover:bg-muted">
              Vergelijk wandelroutes
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <Link href={seoRoutes.nlFamily} className="font-semibold text-primary hover:text-primary-hover">
              Gezinsvriendelijke planning
            </Link>
            <Link href={seoRoutes.nlBeginner} className="font-semibold text-primary hover:text-primary-hover">
              Beginnersroutes in Luxemburg
            </Link>
            <Link href={seoRoutes.nlRainyDay} className="font-semibold text-primary hover:text-primary-hover">
              Regenachtige dag alternatieven
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
