import type { Metadata } from "next";
import Link from "next/link";
import { getAirbnbUrl } from "@/lib/links";
import { hikingRoutes } from "@/lib/hiking-routes";
import { absoluteUrl, seoRoutes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wandelen in Luxemburg | Complete gids voor Nederlanders",
  description:
    "Primaire Nederlandse informatieve pagina voor wandelen in Luxemburg, met routes, reistips, en verblijf in Grevenmacher.",
  keywords: [
    "wanderen in Luxembourg",
    "wandelen in Luxemburg",
    "wandelen in Luxembourg",
    "wandelen in Luxemburg vanuit Nederland",
    "wandelroutes Luxemburg",
    "wandelweekend Luxemburg",
    "wandelen met kinderen Luxemburg",
    "beginners wandelroutes Luxemburg",
    "seizoenswandelroutes Luxemburg",
    "regenachtige dag Luxemburg",
    "Mullerthal wandelen",
    "overnachten Luxemburg wandelen",
  ],
  alternates: {
    canonical: seoRoutes.nlHub,
    languages: {
      "nl-NL": seoRoutes.nlHub,
      en: seoRoutes.enHub,
      "x-default": seoRoutes.nlHub,
    },
  },
  openGraph: {
    title: "Wandelen in Luxemburg | Gids voor Nederlandse toeristen",
    description:
      "Nederlandse SEO-landingspagina voor wie zoekt op 'wanderen in Luxembourg' en wil wandelen in Luxemburg.",
    url: absoluteUrl(seoRoutes.nlHub),
    locale: "nl_NL",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1536,
        height: 1024,
        alt: "Wandelen in Luxemburg vanuit een verblijf in Grevenmacher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wandelen in Luxemburg | Voor Nederlandse toeristen",
    description:
      "Zoek je op 'wanderen in Luxembourg'? Ontdek routes, planning en verblijf voor jouw wandeltrip.",
    images: [siteConfig.defaultOgImage],
  },
};

const faqItems = [
  {
    q: "Is Luxemburg geschikt voor een wandelweekend vanuit Nederland?",
    a: "Ja. Vanuit grote delen van Nederland rijd je in een dag naar Luxemburg. Daardoor is het ideaal voor een wandelweekend of een korte natuurtrip.",
  },
  {
    q: "Welke regio is het beste voor wandelen in Luxemburg?",
    a: "Mullerthal, Vianden en Echternach zijn populair door goede markering, gevarieerde natuur en routes voor meerdere niveaus.",
  },
  {
    q: "Waar overnacht je het beste voor wandelroutes in Luxemburg?",
    a: "Grevenmacher is een sterke basis. Je zit centraal voor routes, lokale voorzieningen en dagtrips in Luxemburg.",
  },
];

export default function DutchHikingHubPage() {
  const bookingUrl = getAirbnbUrl("nl-wandelen-in-luxemburg", "seo-nl-hub");
  const highlightedRoutes = hikingRoutes.slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Wandelen in Luxemburg",
      description:
        "Nederlandse gids voor wandelen in Luxemburg met routes en verblijf in Grevenmacher.",
      url: absoluteUrl(seoRoutes.nlHub),
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
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Wandelen in Luxemburg</span>
        </nav>

        <header className="section-reveal mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Wandelen in Luxemburg: complete gids voor toeristen uit Nederland
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Zoek je op "wanderen in Luxembourg" of "wandelen in Luxemburg"?
            Deze pagina helpt je snel met de beste regio's, route-inspiratie en
            verblijfstips. Vanuit Grevenmacher bereik je meerdere topwandelingen
            zonder lange reistijd. Zie dit als de hoofdgids voor alle
            Nederlandstalige wandelintenties.
          </p>
        </header>

        <section className="section-divider section-parallax-soft section-reveal grid gap-4 md:grid-cols-3 mb-12">
          <article
            className="section-reveal rounded-xl border border-border bg-card p-5"
            style={{ animationDelay: "0.08s" }}
          >
            <p className="text-sm text-muted-foreground">Topregio's</p>
            <p className="text-2xl font-bold text-foreground">Mullerthal, Vianden, Echternach</p>
          </article>
          <article
            className="section-reveal rounded-xl border border-border bg-card p-5"
            style={{ animationDelay: "0.16s" }}
          >
            <p className="text-sm text-muted-foreground">Beste triptype</p>
            <p className="text-2xl font-bold text-foreground">2-4 dagen</p>
          </article>
          <article
            className="section-reveal rounded-xl border border-border bg-card p-5"
            style={{ animationDelay: "0.24s" }}
          >
            <p className="text-sm text-muted-foreground">Moeilijkheid</p>
            <p className="text-2xl font-bold text-foreground">Makkelijk tot zwaar</p>
          </article>
        </section>

        <section className="section-divider section-parallax-soft section-reveal mb-12">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Aanbevolen wandelroutes in Luxemburg
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {highlightedRoutes.map((route, index) => (
              <article
                key={route.id}
                className="section-reveal rounded-xl border border-border bg-card p-5"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">{route.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{route.summaryNl}</p>
                <ul className="text-sm text-foreground space-y-1">
                  <li>Afstand: {route.distanceKm} km</li>
                  <li>Duur: {route.duration}</li>
                  <li>Niveau: {route.difficulty}</li>
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-5">
            <Link href={seoRoutes.nlTrails} className="font-semibold text-primary hover:text-primary-hover">
              Bekijk alle wandelroutes in Luxemburg
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <Link href={seoRoutes.nlWeekend} className="font-semibold text-primary hover:text-primary-hover">
              Plan een wandelweekend
            </Link>
            <Link href={seoRoutes.nlMullerthal} className="font-semibold text-primary hover:text-primary-hover">
              Mullerthal wandeling
            </Link>
            <Link href={seoRoutes.nlStayNearTrails} className="font-semibold text-primary hover:text-primary-hover">
              Overnachten bij wandelroutes
            </Link>
            <Link href={seoRoutes.nlBlog} className="font-semibold text-primary hover:text-primary-hover">
              Lees de Wandelen in Luxemburg blog
            </Link>
          </div>
        </section>

        <section className="section-divider section-parallax-soft section-reveal mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Kies je intentpagina voor diepere planning
          </h2>
          <p className="text-muted-foreground mb-5 leading-relaxed">
            Gebruik deze hoofdgids voor overzicht, en ga daarna door naar de
            pagina die precies past bij je situatie. Deze interne routes zijn
            bewust verschillend om overlap in zoekintentie te vermijden.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border border-border/70 bg-background p-4">
              <h3 className="font-semibold text-foreground mb-2">Wandelen met kinderen</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Gezinsvriendelijke afstanden, pauzetips en praktische dagindeling.
              </p>
              <Link href={seoRoutes.nlFamily} className="font-semibold text-primary hover:text-primary-hover">
                Naar gezinsvriendelijke wandelroutes
              </Link>
            </article>
            <article className="rounded-lg border border-border/70 bg-background p-4">
              <h3 className="font-semibold text-foreground mb-2">Beginnersroutes</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Start met makkelijke trajecten als je nog weinig bergoefening hebt.
              </p>
              <Link href={seoRoutes.nlBeginner} className="font-semibold text-primary hover:text-primary-hover">
                Bekijk makkelijke wandelroutes
              </Link>
            </article>
            <article className="rounded-lg border border-border/70 bg-background p-4">
              <h3 className="font-semibold text-foreground mb-2">Seizoensplanning</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Kies routes per lente, zomer, herfst of winter voor betere omstandigheden.
              </p>
              <Link href={seoRoutes.nlSeasonal} className="font-semibold text-primary hover:text-primary-hover">
                Vergelijk seizoenswandelroutes
              </Link>
            </article>
            <article className="rounded-lg border border-border/70 bg-background p-4">
              <h3 className="font-semibold text-foreground mb-2">Regenalternatieven</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Houd je weekend sterk met fallback-opties voor slecht weer.
              </p>
              <Link href={seoRoutes.nlRainyDay} className="font-semibold text-primary hover:text-primary-hover">
                Plan een regenachtige dag slim
              </Link>
            </article>
          </div>
        </section>

        <section className="section-divider section-parallax-soft section-reveal mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Speciaal voor reizigers uit Nederland
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-lg border border-border/70 bg-background p-4">
              <h3 className="font-semibold text-foreground mb-2">Snel weekendproof</h3>
              <p className="text-sm text-muted-foreground">
                Handige routecombinaties voor 2 tot 4 dagen zonder complexe planning.
              </p>
            </article>
            <article className="rounded-lg border border-border/70 bg-background p-4">
              <h3 className="font-semibold text-foreground mb-2">Centrale uitvalsbasis</h3>
              <p className="text-sm text-muted-foreground">
                Verblijf in Grevenmacher en combineer meerdere wandelregio's.
              </p>
            </article>
            <article className="rounded-lg border border-border/70 bg-background p-4">
              <h3 className="font-semibold text-foreground mb-2">Praktische voorzieningen</h3>
              <p className="text-sm text-muted-foreground">
                Parkeren, winkels en horeca dichtbij na je wandeldag.
              </p>
            </article>
          </div>
        </section>

        <section className="section-divider section-parallax-soft section-reveal mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Overnachten bij wandelroutes in Luxemburg
          </h2>
          <p className="text-muted-foreground mb-5 leading-relaxed">
            Een goede uitvalsbasis maakt je wandeltrip eenvoudiger. Vanuit
            Grevenmacher zit je centraal voor routekeuze, winkels en horeca.
            Dat is praktisch voor Nederlandse toeristen die in korte tijd veel
            van Luxemburg willen zien.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary-hover"
            >
              Bekijk verblijf en beschikbaarheid
            </Link>
            <Link href={seoRoutes.enHub} className="inline-flex items-center rounded-lg border border-border px-5 py-3 font-semibold text-foreground hover:bg-muted">
              Read the English hiking page
            </Link>
            <Link href={seoRoutes.nlWeekend} className="inline-flex items-center rounded-lg border border-border px-5 py-3 font-semibold text-foreground hover:bg-muted">
              Plan je wandelweekend
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
