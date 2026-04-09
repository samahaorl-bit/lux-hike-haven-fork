import type { Metadata } from "next";
import Link from "next/link";
import { getAirbnbUrl } from "@/lib/links";
import { hikingRoutes } from "@/lib/hiking-routes";
import { absoluteUrl, seoRoutes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Beginners wandelroutes Luxemburg | Start zonder stress",
  description:
    "Zoek je beginners wandelroutes in Luxemburg? Ontdek makkelijke trajecten, voorbereidingstips en een comfortabele basis in Grevenmacher.",
  keywords: [
    "beginners wandelroutes Luxemburg",
    "makkelijke wandeling Luxemburg",
    "eerste keer wandelen Luxemburg",
    "licht wandelweekend Luxemburg",
    "wandelen Luxemburg beginner",
  ],
  alternates: {
    canonical: seoRoutes.nlBeginner,
    languages: {
      "nl-NL": seoRoutes.nlBeginner,
      en: seoRoutes.enHub,
      "x-default": seoRoutes.nlBeginner,
    },
  },
  openGraph: {
    title: "Beginners wandelroutes Luxemburg | NL startgids",
    description:
      "Makkelijke routes en praktische voorbereiding voor Nederlandse beginners in Luxemburg.",
    url: absoluteUrl(seoRoutes.nlBeginner),
    locale: "nl_NL",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1536,
        height: 1024,
        alt: "Beginnersvriendelijke routes in Luxemburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beginners wandelroutes Luxemburg",
    description:
      "Start met makkelijke routes en bouw je wandelweekend rustig op.",
    images: [siteConfig.defaultOgImage],
  },
};

const prepTips = [
  "Kies eerst routes onder 10 km met beperkte hoogteverschillen.",
  "Neem lichte regenkleding en voldoende water mee.",
  "Plan na de wandeling een rustmoment en korte transfer.",
  "Gebruik een centrale verblijfslocatie om routes te combineren.",
];

export default function DutchBeginnerRoutesPage() {
  const bookingUrl = getAirbnbUrl("nl-beginners-routes", "seo-nl-beginner");
  const easyRoutes = hikingRoutes.filter((route) => route.difficulty === "Easy");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Beginners wandelroutes Luxemburg",
      description: "Nederlandse startgids voor makkelijke wandelroutes in Luxemburg.",
      url: absoluteUrl(seoRoutes.nlBeginner),
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
          name: "Beginners wandelroutes",
          item: absoluteUrl(seoRoutes.nlBeginner),
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
          <span>Beginners wandelroutes</span>
        </nav>

        <header className="section-reveal mb-10">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Beginners wandelroutes in Luxemburg: rustig starten
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Begin met toegankelijke routes en bouw stap voor stap op. Deze
            pagina is gemaakt voor Nederlandse bezoekers die voor het eerst een
            wandelweekend in Luxemburg plannen.
          </p>
        </header>

        <section className="section-divider section-parallax-soft section-reveal mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-foreground">Makkelijke routes</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {easyRoutes.map((route, index) => (
              <article
                key={route.id}
                className="section-reveal rounded-xl border border-border bg-card p-5"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <h3 className="mb-2 text-xl font-semibold text-foreground">{route.name}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{route.summaryNl}</p>
                <ul className="space-y-1 text-sm text-foreground">
                  <li>Afstand: {route.distanceKm} km</li>
                  <li>Duur: {route.duration}</li>
                  <li>Regio: {route.region}</li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-divider section-parallax-soft section-reveal mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="mb-4 text-3xl font-semibold text-foreground">Voorbereiding zonder stress</h2>
          <ul className="space-y-3 text-muted-foreground">
            {prepTips.map((tip) => (
              <li key={tip} className="rounded-lg border border-border/70 bg-background px-4 py-3">
                {tip}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <Link href={seoRoutes.nlFamily} className="font-semibold text-primary hover:text-primary-hover">
              Wandelen met kinderen
            </Link>
            <Link href={seoRoutes.nlSeasonal} className="font-semibold text-primary hover:text-primary-hover">
              Beste routes per seizoen
            </Link>
            <Link href={seoRoutes.nlTrails} className="font-semibold text-primary hover:text-primary-hover">
              Volledig routeoverzicht
            </Link>
          </div>
        </section>

        <section className="section-divider section-parallax-soft section-reveal rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="mb-4 text-3xl font-semibold text-foreground">
            Klaar om je eerste wandelweekend te boeken?
          </h2>
          <p className="mb-5 leading-relaxed text-muted-foreground">
            Houd je planning simpel: kies 1 makkelijke route per dag en verblijf
            centraal zodat je rustig kunt opbouwen.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary-hover"
            >
              Check verblijf in Grevenmacher
            </Link>
            <Link
              href={seoRoutes.nlWeekend}
              className="inline-flex items-center rounded-lg border border-border px-5 py-3 font-semibold text-foreground hover:bg-muted"
            >
              Bekijk 2-daagse weekendplanning
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
