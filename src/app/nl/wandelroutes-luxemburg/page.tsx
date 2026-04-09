import type { Metadata } from "next";
import Link from "next/link";
import { hikingRoutes } from "@/lib/hiking-routes";
import { absoluteUrl, seoRoutes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wandelroutes Luxemburg | Afstanden, duur en niveau",
  description:
    "Bekijk de beste wandelroutes in Luxemburg met afstand, moeilijkheid en praktische informatie voor Nederlandse toeristen.",
  keywords: [
    "wanderen in Luxembourg",
    "wandelroutes Luxemburg",
    "wandelen in Luxembourg routes",
    "beste wandelroutes Luxemburg",
    "Mullerthal route",
    "wandelen Vianden",
  ],
  alternates: {
    canonical: seoRoutes.nlTrails,
    languages: {
      "nl-NL": seoRoutes.nlTrails,
      en: seoRoutes.enTrails,
      "x-default": seoRoutes.nlTrails,
    },
  },
  openGraph: {
    title: "Wandelroutes Luxemburg | Routeoverzicht voor Nederlanders",
    description:
      "Routeoverzicht met afstand, duur en niveau voor Nederlanders die zoeken op wandelen in Luxemburg.",
    url: absoluteUrl(seoRoutes.nlTrails),
    locale: "nl_NL",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1536,
        height: 1024,
        alt: "Wandelroutes in Luxemburg met verblijf in Grevenmacher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wandelroutes Luxemburg | Praktisch overzicht",
    description:
      "Vergelijk routes voor jouw wandeltrip in Luxemburg met focus op Nederlandse bezoekers.",
    images: [siteConfig.defaultOgImage],
  },
};

export default function DutchTrailsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Wandelroutes Luxemburg",
      itemListElement: hikingRoutes.map((route, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: route.name,
        description: route.summaryNl,
      })),
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
          name: "Wandelroutes Luxemburg",
          item: absoluteUrl(seoRoutes.nlTrails),
        },
      ],
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
          <span>Wandelroutes Luxemburg</span>
        </nav>

        <header className="section-reveal mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Wandelroutes in Luxemburg: praktisch routeoverzicht
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vergelijk populaire routes op afstand, duur en niveau. Zo kies je
            snel de juiste wandeling voor jouw weekend of vakantie in Luxemburg.
          </p>
        </header>

        <section className="section-divider section-parallax-soft section-reveal overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-sm font-semibold">Route</th>
                <th className="px-4 py-3 text-sm font-semibold">Regio</th>
                <th className="px-4 py-3 text-sm font-semibold">Afstand</th>
                <th className="px-4 py-3 text-sm font-semibold">Duur</th>
                <th className="px-4 py-3 text-sm font-semibold">Niveau</th>
              </tr>
            </thead>
            <tbody>
              {hikingRoutes.map((route) => (
                <tr key={route.id} className="border-b border-border/60">
                  <td className="px-4 py-3 font-medium text-foreground">{route.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{route.region}</td>
                  <td className="px-4 py-3 text-muted-foreground">{route.distanceKm} km</td>
                  <td className="px-4 py-3 text-muted-foreground">{route.duration}</td>
                  <td className="px-4 py-3 text-muted-foreground">{route.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="section-divider section-parallax-soft section-reveal mt-10 rounded-xl border border-border bg-card p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Volgende stap
          </h2>
          <p className="text-muted-foreground mb-4">
            Combineer je routekeuze met een centrale verblijfslocatie voor een
            efficiënte planning van je wandeltrip.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={seoRoutes.nlHub} className="font-semibold text-primary hover:text-primary-hover">
              Terug naar Wandelen in Luxemburg
            </Link>
            <Link href={seoRoutes.nlWeekend} className="font-semibold text-primary hover:text-primary-hover">
              Plan een wandelweekend
            </Link>
            <Link href={seoRoutes.nlStayNearTrails} className="font-semibold text-primary hover:text-primary-hover">
              Overnachten bij wandelroutes
            </Link>
            <Link href={seoRoutes.nlBeginner} className="font-semibold text-primary hover:text-primary-hover">
              Beginnersvriendelijke routes
            </Link>
            <Link href={seoRoutes.nlSeasonal} className="font-semibold text-primary hover:text-primary-hover">
              Routes kiezen per seizoen
            </Link>
            <Link href={seoRoutes.nlFamily} className="font-semibold text-primary hover:text-primary-hover">
              Wandelen met kinderen
            </Link>
            <Link href={seoRoutes.nlRainyDay} className="font-semibold text-primary hover:text-primary-hover">
              Regenachtige dag alternatieven
            </Link>
            <Link href={seoRoutes.enTrails} className="font-semibold text-primary hover:text-primary-hover">
              View the English trail list
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
