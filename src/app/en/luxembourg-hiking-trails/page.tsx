import type { Metadata } from "next";
import Link from "next/link";
import { hikingRoutes } from "@/lib/hiking-routes";
import { absoluteUrl, seoRoutes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Luxembourg Hiking Trails | Distances, Duration, Difficulty",
  description:
    "Compare Luxembourg hiking trails by distance, duration, and difficulty to plan a better hiking itinerary.",
  keywords: [
    "Luxembourg hiking trails",
    "best hikes in Luxembourg",
    "Mullerthal trail distance",
    "Vianden hiking route",
  ],
  alternates: {
    canonical: seoRoutes.enTrails,
    languages: {
      en: seoRoutes.enTrails,
      "nl-NL": seoRoutes.nlTrails,
      "x-default": seoRoutes.nlTrails,
    },
  },
  openGraph: {
    title: "Luxembourg Hiking Trails | Practical Route Overview",
    description:
      "A practical route overview to compare top Luxembourg hiking trails.",
    url: absoluteUrl(seoRoutes.enTrails),
    locale: "en_US",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1536,
        height: 1024,
        alt: "Luxembourg hiking trails overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxembourg Hiking Trails | Practical Route Overview",
    description:
      "Compare top Luxembourg trails by distance, duration, and difficulty for smarter trip planning.",
    images: [siteConfig.defaultOgImage],
  },
};

export default function EnglishTrailsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Luxembourg Hiking Trails",
      itemListElement: hikingRoutes.map((route, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: route.name,
        description: route.summaryEn,
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
          name: "Hiking in Luxembourg",
          item: absoluteUrl(seoRoutes.enHub),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Luxembourg hiking trails",
          item: absoluteUrl(seoRoutes.enTrails),
        },
      ],
    },
  ];

  return (
    <main lang="en-US" className="bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href={seoRoutes.home} className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={seoRoutes.enHub} className="hover:text-primary">
            Hiking in Luxembourg
          </Link>
          <span className="mx-2">/</span>
          <span>Luxembourg hiking trails</span>
        </nav>

        <header className="section-reveal mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Luxembourg hiking trails: practical route list
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Compare popular trails by distance, duration, and difficulty so you
            can build the right hiking plan for your trip.
          </p>
        </header>

        <section className="section-divider section-parallax-soft section-reveal overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-sm font-semibold">Trail</th>
                <th className="px-4 py-3 text-sm font-semibold">Region</th>
                <th className="px-4 py-3 text-sm font-semibold">Distance</th>
                <th className="px-4 py-3 text-sm font-semibold">Duration</th>
                <th className="px-4 py-3 text-sm font-semibold">Difficulty</th>
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
          <h2 className="text-2xl font-semibold text-foreground mb-3">Next step</h2>
          <p className="text-muted-foreground mb-4">
            Pair your trail shortlist with a central base to reduce transfer
            time and fit more routes into your itinerary.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={seoRoutes.enHub} className="font-semibold text-primary hover:text-primary-hover">
              Back to Hiking in Luxembourg guide
            </Link>
            <Link href={seoRoutes.nlTrails} className="font-semibold text-primary hover:text-primary-hover">
              Bekijk de Nederlandse routepagina
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
