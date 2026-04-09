import type { Metadata } from "next";
import Link from "next/link";
import { getAirbnbUrl } from "@/lib/links";
import { hikingRoutes } from "@/lib/hiking-routes";
import { absoluteUrl, seoRoutes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hiking in Luxembourg | Complete Guide for Trail Travelers",
  description:
    "Plan hiking in Luxembourg with route ideas, practical travel advice, and a comfortable apartment stay in Grevenmacher.",
  keywords: [
    "hiking in Luxembourg",
    "Luxembourg hiking trails",
    "where to stay for hiking in Luxembourg",
    "Mullerthal trail guide",
  ],
  alternates: {
    canonical: seoRoutes.enHub,
    languages: {
      en: seoRoutes.enHub,
      "nl-NL": seoRoutes.nlHub,
      "x-default": seoRoutes.nlHub,
    },
  },
  openGraph: {
    title: "Hiking in Luxembourg | Complete Guide for Trail Travelers",
    description:
      "Discover top routes and choose a practical accommodation base in Grevenmacher.",
    url: absoluteUrl(seoRoutes.enHub),
    locale: "en_US",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1536,
        height: 1024,
        alt: "Hiking in Luxembourg from a base in Grevenmacher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiking in Luxembourg | Complete Guide for Trail Travelers",
    description:
      "Plan hiking in Luxembourg with route ideas, practical advice, and a central stay in Grevenmacher.",
    images: [siteConfig.defaultOgImage],
  },
};

const faqItems = [
  {
    q: "Is Luxembourg a good hiking destination for a short trip?",
    a: "Yes. Luxembourg is compact, trail-dense, and easy to explore over a 2-4 day hiking break.",
  },
  {
    q: "Which areas are best for hiking in Luxembourg?",
    a: "Mullerthal, Vianden, Echternach, and Beaufort are among the most popular regions for marked trails and varied scenery.",
  },
  {
    q: "Where should I stay for hiking in Luxembourg?",
    a: "A central base in Grevenmacher works well for combining hiking routes with local services and day trips.",
  },
];

export default function EnglishHikingHubPage() {
  const bookingUrl = getAirbnbUrl("en-hiking-in-luxembourg", "seo-en-hub");
  const highlightedRoutes = hikingRoutes.slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Hiking in Luxembourg",
      description:
        "English guide to hiking routes in Luxembourg with accommodation in Grevenmacher.",
      url: absoluteUrl(seoRoutes.enHub),
      inLanguage: "en",
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
          name: "Hiking in Luxembourg",
          item: absoluteUrl(seoRoutes.enHub),
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
    <main lang="en-US" className="bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Hiking in Luxembourg</span>
        </nav>

        <header className="section-reveal mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Hiking in Luxembourg: complete planning guide
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This page is built for travelers searching "hiking in Luxembourg".
            Find route inspiration, practical planning tips, and a central stay
            option in Grevenmacher for easier day-to-day trail access.
          </p>
        </header>

        <section className="section-divider section-parallax-soft section-reveal grid gap-4 md:grid-cols-3 mb-12">
          <article
            className="section-reveal rounded-xl border border-border bg-card p-5"
            style={{ animationDelay: "0.08s" }}
          >
            <p className="text-sm text-muted-foreground">Top regions</p>
            <p className="text-2xl font-bold text-foreground">Mullerthal, Vianden, Echternach</p>
          </article>
          <article
            className="section-reveal rounded-xl border border-border bg-card p-5"
            style={{ animationDelay: "0.16s" }}
          >
            <p className="text-sm text-muted-foreground">Best trip length</p>
            <p className="text-2xl font-bold text-foreground">2-4 days</p>
          </article>
          <article
            className="section-reveal rounded-xl border border-border bg-card p-5"
            style={{ animationDelay: "0.24s" }}
          >
            <p className="text-sm text-muted-foreground">Trail level</p>
            <p className="text-2xl font-bold text-foreground">Easy to challenging</p>
          </article>
        </section>

        <section className="section-divider section-parallax-soft section-reveal mb-12">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Recommended Luxembourg hikes
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {highlightedRoutes.map((route, index) => (
              <article
                key={route.id}
                className="section-reveal rounded-xl border border-border bg-card p-5"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">{route.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{route.summaryEn}</p>
                <ul className="text-sm text-foreground space-y-1">
                  <li>Distance: {route.distanceKm} km</li>
                  <li>Duration: {route.duration}</li>
                  <li>Level: {route.difficulty}</li>
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-5">
            <Link href={seoRoutes.enTrails} className="font-semibold text-primary hover:text-primary-hover">
              View the full trail list
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <Link href={seoRoutes.nlWeekend} className="font-semibold text-primary hover:text-primary-hover">
              Dutch weekend planner
            </Link>
            <Link href={seoRoutes.nlStayNearTrails} className="font-semibold text-primary hover:text-primary-hover">
              Dutch stay guide near trails
            </Link>
            <Link href={seoRoutes.enBlog} className="font-semibold text-primary hover:text-primary-hover">
              Explore the hiking blog
            </Link>
          </div>
        </section>

        <section className="section-divider section-parallax-soft section-reveal mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Conversion-focused stay details
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-lg border border-border/70 bg-background p-4">
              <h3 className="font-semibold text-foreground mb-2">Group-ready layout</h3>
              <p className="text-sm text-muted-foreground">
                Up to 7 guests with 3 bedrooms and 2 bathrooms.
              </p>
            </article>
            <article className="rounded-lg border border-border/70 bg-background p-4">
              <h3 className="font-semibold text-foreground mb-2">Trail trip practicality</h3>
              <p className="text-sm text-muted-foreground">
                A central base in Grevenmacher helps reduce transfer time.
              </p>
            </article>
            <article className="rounded-lg border border-border/70 bg-background p-4">
              <h3 className="font-semibold text-foreground mb-2">Parking and access</h3>
              <p className="text-sm text-muted-foreground">
                Parking options and nearby services make active trips easier.
              </p>
            </article>
          </div>
        </section>

        <section className="section-divider section-parallax-soft section-reveal mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Where to stay for hiking in Luxembourg
          </h2>
          <p className="text-muted-foreground mb-5 leading-relaxed">
            Staying in Grevenmacher gives you practical access to several hiking
            regions while keeping shops, dining, and transport nearby.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary-hover"
            >
              Check stay details and availability
            </Link>
            <Link href={seoRoutes.nlHub} className="inline-flex items-center rounded-lg border border-border px-5 py-3 font-semibold text-foreground hover:bg-muted">
              Bekijk de Nederlandse pagina
            </Link>
            <Link href={seoRoutes.nlWeekend} className="inline-flex items-center rounded-lg border border-border px-5 py-3 font-semibold text-foreground hover:bg-muted">
              Plan Dutch weekend itinerary
            </Link>
          </div>
        </section>

        <section className="section-divider section-parallax-soft section-reveal">
          <h2 className="text-3xl font-semibold text-foreground mb-4">FAQ</h2>
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
