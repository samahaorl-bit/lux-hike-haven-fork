import type { Metadata } from "next";
import Link from "next/link";
import { getAirbnbUrl } from "@/lib/links";
import { absoluteUrl, seoRoutes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Regenachtige dag in Luxemburg | Wandelalternatieven en planning",
  description:
    "Wat doe je bij regen tijdens je wandeltrip in Luxemburg? Gebruik deze NL gids met korte routes, indoor alternatieven en flexibele dagplanning.",
  keywords: [
    "regenachtige dag Luxemburg",
    "wandelalternatieven Luxemburg",
    "wat te doen bij regen Luxemburg",
    "korte wandelroute Luxemburg regen",
    "Luxemburg slecht weer planning",
  ],
  alternates: {
    canonical: seoRoutes.nlRainyDay,
    languages: {
      "nl-NL": seoRoutes.nlRainyDay,
      en: seoRoutes.enHub,
      "x-default": seoRoutes.nlRainyDay,
    },
  },
  openGraph: {
    title: "Regenachtige dag in Luxemburg | Slimme alternatieven",
    description:
      "Houd je wandelweekend op koers met regen-proof planning, korte routes en indoor opties.",
    url: absoluteUrl(seoRoutes.nlRainyDay),
    locale: "nl_NL",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1536,
        height: 1024,
        alt: "Regen-proof planning voor wandelen in Luxemburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regenachtige dag in Luxemburg",
    description:
      "Gebruik slimme fallback-opties bij regen tijdens je wandelweekend in Luxemburg.",
    images: [siteConfig.defaultOgImage],
  },
};

const alternatives = [
  {
    title: "Korte bosroute met lage risico's",
    detail: "Kies een route van 4-6 km met duidelijk pad en eenvoudige terugkeer.",
  },
  {
    title: "Split-day planning",
    detail: "Wandel in droge uren en reserveer de rest van de dag voor indoor activiteiten.",
  },
  {
    title: "Herstel- en rustdag",
    detail: "Gebruik regen als rustmoment en schuif de langere route door naar de volgende dag.",
  },
  {
    title: "Indoor backup",
    detail: "Plan vooraf een museum, wellness of lokale foodstop in de buurt.",
  },
] as const;

export default function DutchRainyDayPage() {
  const bookingUrl = getAirbnbUrl("nl-regenachtige-dag", "seo-nl-rainy-day");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Regenachtige dag in Luxemburg",
      description:
        "Nederlandse fallback gids voor regenachtige dagen tijdens een wandeltrip in Luxemburg.",
      url: absoluteUrl(seoRoutes.nlRainyDay),
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
          name: "Regenachtige dag",
          item: absoluteUrl(seoRoutes.nlRainyDay),
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
          <span>Regenachtige dag</span>
        </nav>

        <header className="section-reveal mb-10">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Regenachtige dag in Luxemburg: zo houd je je trip sterk
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Regen hoeft je wandelweekend niet te breken. Met een goed fallback
            plan combineer je korte buitenmomenten met comfortabele indoor
            alternatieven.
          </p>
        </header>

        <section className="section-divider section-parallax-soft section-reveal mb-12 grid gap-4 md:grid-cols-2">
          {alternatives.map((item, index) => (
            <article
              key={item.title}
              className="section-reveal rounded-xl border border-border bg-card p-6"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <h2 className="mb-3 text-2xl font-semibold text-foreground">{item.title}</h2>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </article>
          ))}
        </section>

        <section className="section-divider section-parallax-soft section-reveal mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="mb-4 text-3xl font-semibold text-foreground">
            Slimme interne route naar je beste volgende stap
          </h2>
          <p className="mb-5 leading-relaxed text-muted-foreground">
            Gebruik deze pagina als fallback-node in je planning en ga daarna
            door naar de best passende intentpagina.
          </p>
          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <Link href={seoRoutes.nlSeasonal} className="font-semibold text-primary hover:text-primary-hover">
              Seizoenswandelroutes voor beter weerwindow
            </Link>
            <Link href={seoRoutes.nlBeginner} className="font-semibold text-primary hover:text-primary-hover">
              Beginnersroutes met korte etappes
            </Link>
            <Link href={seoRoutes.nlFamily} className="font-semibold text-primary hover:text-primary-hover">
              Gezinsvriendelijke routeplanning
            </Link>
            <Link href={seoRoutes.nlWeekend} className="font-semibold text-primary hover:text-primary-hover">
              2-daagse weekendplanning
            </Link>
          </div>
        </section>

        <section className="section-divider section-parallax-soft section-reveal rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="mb-4 text-3xl font-semibold text-foreground">
            Centrale verblijfsbasis voor flexibel weer
          </h2>
          <p className="mb-5 leading-relaxed text-muted-foreground">
            Een vaste uitvalsbasis in Grevenmacher maakt het makkelijk om je
            planning last-minute aan te passen zonder extra stress.
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
            <Link
              href={seoRoutes.nlHub}
              className="inline-flex items-center rounded-lg border border-border px-5 py-3 font-semibold text-foreground hover:bg-muted"
            >
              Terug naar de NL hoofdpagina
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
