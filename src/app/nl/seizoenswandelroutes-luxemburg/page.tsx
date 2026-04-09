import type { Metadata } from "next";
import Link from "next/link";
import { hikingRoutes } from "@/lib/hiking-routes";
import { absoluteUrl, seoRoutes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seizoenswandelroutes Luxemburg | Waar wandel je wanneer",
  description:
    "Plan wandelen in Luxemburg per seizoen. Ontdek welke regio's en routeprofielen het best passen bij lente, zomer, herfst en winter.",
  keywords: [
    "seizoenswandelroutes Luxemburg",
    "wandelen Luxemburg voorjaar",
    "wandelen Luxemburg zomer",
    "wandelen Luxemburg herfst",
    "wandelen Luxemburg winter",
  ],
  alternates: {
    canonical: seoRoutes.nlSeasonal,
    languages: {
      "nl-NL": seoRoutes.nlSeasonal,
      en: seoRoutes.enHub,
      "x-default": seoRoutes.nlSeasonal,
    },
  },
  openGraph: {
    title: "Seizoenswandelroutes Luxemburg | Praktische NL gids",
    description:
      "Kies routes per seizoen en stem je weekendplanning af op weer, drukte en routeprofiel.",
    url: absoluteUrl(seoRoutes.nlSeasonal),
    locale: "nl_NL",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1536,
        height: 1024,
        alt: "Seizoensroutes voor wandelen in Luxemburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seizoenswandelroutes Luxemburg",
    description:
      "Praktische routekeuze voor elk seizoen, speciaal voor Nederlandse toeristen.",
    images: [siteConfig.defaultOgImage],
  },
};

const seasons = [
  {
    name: "Lente",
    months: "maart - mei",
    focus: "bloeiende valleien en milde temperatuur",
    recommendation: "Mullerthal Trail Route 1",
  },
  {
    name: "Zomer",
    months: "juni - augustus",
    focus: "vroege starts en bosrijke trajecten",
    recommendation: "Beaufort Castle Ruins",
  },
  {
    name: "Herfst",
    months: "september - november",
    focus: "kleurige bossen en stabiele wandeltemperatuur",
    recommendation: "Vianden Castle Circuit",
  },
  {
    name: "Winter",
    months: "december - februari",
    focus: "korte, veilige etappes met flexibel schema",
    recommendation: "Echternach Lake Loop",
  },
] as const;

export default function DutchSeasonalRoutesPage() {
  const allRouteNames = new Set(hikingRoutes.map((route) => route.name));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Seizoenswandelroutes Luxemburg",
      description: "Nederlandse gids voor routekeuze per seizoen in Luxemburg.",
      url: absoluteUrl(seoRoutes.nlSeasonal),
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
          name: "Seizoenswandelroutes",
          item: absoluteUrl(seoRoutes.nlSeasonal),
        },
      ],
    },
  ];

  return (
    <main lang="nl-NL" className="bg-background pb-16 pt-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link href={seoRoutes.home} className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={seoRoutes.nlHub} className="hover:text-primary">
            Wandelen in Luxemburg
          </Link>
          <span className="mx-2">/</span>
          <span>Seizoenswandelroutes</span>
        </nav>

        <header className="section-reveal mb-10">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Seizoenswandelroutes in Luxemburg: kies slim per periode
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Met de juiste route per seizoen haal je meer uit je weekend.
            Gebruik deze gids om drukte, temperatuur en terrein af te stemmen op
            je groep en ervaringsniveau.
          </p>
        </header>

        <section className="section-divider section-parallax-soft section-reveal mb-12 grid gap-4 md:grid-cols-2">
          {seasons.map((season, index) => (
            <article
              key={season.name}
              className="section-reveal rounded-xl border border-border bg-card p-6"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <p className="mb-2 text-sm font-semibold text-primary">{season.months}</p>
              <h2 className="mb-3 text-2xl font-semibold text-foreground">{season.name}</h2>
              <p className="mb-3 text-sm text-muted-foreground">Focus: {season.focus}</p>
              <p className="text-sm text-foreground">
                Aanbevolen route: {season.recommendation}
                {allRouteNames.has(season.recommendation) ? "" : " (controleer routeoverzicht)"}
              </p>
            </article>
          ))}
        </section>

        <section className="section-divider section-parallax-soft section-reveal mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="mb-4 text-3xl font-semibold text-foreground">
            Zo gebruik je deze seizoensgids
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-lg border border-border/70 bg-background p-4">
              <h3 className="mb-2 font-semibold text-foreground">Vooraf</h3>
              <p className="text-sm text-muted-foreground">
                Kies 2 routeopties: een hoofdplan en een kort alternatief bij
                wisselend weer.
              </p>
            </article>
            <article className="rounded-lg border border-border/70 bg-background p-4">
              <h3 className="mb-2 font-semibold text-foreground">Tijdens je trip</h3>
              <p className="text-sm text-muted-foreground">
                Check lokale omstandigheden en pas afstand of starttijd aan.
              </p>
            </article>
            <article className="rounded-lg border border-border/70 bg-background p-4">
              <h3 className="mb-2 font-semibold text-foreground">Bij regen</h3>
              <p className="text-sm text-muted-foreground">
                Gebruik een regen-proof alternatief met kortere routes en indoor
                momenten.
              </p>
            </article>
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <Link href={seoRoutes.nlTrails} className="font-semibold text-primary hover:text-primary-hover">
              Vergelijk alle wandelroutes
            </Link>
            <Link href={seoRoutes.nlBeginner} className="font-semibold text-primary hover:text-primary-hover">
              Start met beginnersroutes
            </Link>
            <Link href={seoRoutes.nlRainyDay} className="font-semibold text-primary hover:text-primary-hover">
              Bekijk regenachtige-dag alternatieven
            </Link>
          </div>
        </section>

        <section className="section-divider section-parallax-soft section-reveal rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="mb-4 text-3xl font-semibold text-foreground">
            Cluster links voor snellere planning
          </h2>
          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <Link href={seoRoutes.nlHub} className="font-semibold text-primary hover:text-primary-hover">
              Hoofdgids: Wandelen in Luxemburg
            </Link>
            <Link href={seoRoutes.nlWeekend} className="font-semibold text-primary hover:text-primary-hover">
              Weekendplanning in 2 dagen
            </Link>
            <Link href={seoRoutes.nlFamily} className="font-semibold text-primary hover:text-primary-hover">
              Wandelen met kinderen
            </Link>
            <Link href={seoRoutes.nlStayNearTrails} className="font-semibold text-primary hover:text-primary-hover">
              Overnachten bij wandelroutes
            </Link>
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
