import type { Metadata } from "next";
import Link from "next/link";
import { getAirbnbUrl } from "@/lib/links";
import { hikingRoutes } from "@/lib/hiking-routes";
import { absoluteUrl, seoRoutes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wandelen met kinderen in Luxemburg | Gezinsvriendelijke routes",
  description:
    "Ontdek wandelen met kinderen in Luxemburg met makkelijke routes, pauzetips en een centrale verblijfsbasis in Grevenmacher.",
  keywords: [
    "wandelen met kinderen Luxemburg",
    "gezinswandeling Luxemburg",
    "familie wandelroutes Luxemburg",
    "kindvriendelijke wandelroutes Luxemburg",
    "wandelen in Luxemburg gezin",
  ],
  alternates: {
    canonical: seoRoutes.nlFamily,
    languages: {
      "nl-NL": seoRoutes.nlFamily,
      en: seoRoutes.enHub,
      "x-default": seoRoutes.nlFamily,
    },
  },
  openGraph: {
    title: "Wandelen met kinderen in Luxemburg | Gezinsroutes",
    description:
      "Praktische NL gids met kindvriendelijke route-inspiratie en overnachting voor gezinnen.",
    url: absoluteUrl(seoRoutes.nlFamily),
    locale: "nl_NL",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1536,
        height: 1024,
        alt: "Gezinsvriendelijke wandelroutes in Luxemburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wandelen met kinderen in Luxemburg",
    description:
      "Kindvriendelijke routekeuze, rustpunten en planning voor een gezinsweekend in Luxemburg.",
    images: [siteConfig.defaultOgImage],
  },
};

const faqItems = [
  {
    q: "Welke routes zijn geschikt voor jonge kinderen?",
    a: "Kies vooral korte en vlakke routes zoals Echternach Lake Loop of Vianden Castle Circuit.",
  },
  {
    q: "Wat is een goede dagafstand met kinderen?",
    a: "Voor de meeste gezinnen werkt 5 tot 8 km met meerdere pauzes het best.",
  },
  {
    q: "Waar verblijf je handig met een gezin?",
    a: "Een centrale basis in Grevenmacher helpt je reistijd kort te houden en flexibel te plannen.",
  },
];

export default function DutchFamilyHikingPage() {
  const bookingUrl = getAirbnbUrl("nl-wandelen-met-kinderen", "seo-nl-family");
  const familyRoutes = hikingRoutes.filter((route) => route.familyFriendly);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Wandelen met kinderen in Luxemburg",
      description:
        "Nederlandse gids met gezinsvriendelijke wandelroutes in Luxemburg.",
      url: absoluteUrl(seoRoutes.nlFamily),
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
          name: "Wandelen met kinderen",
          item: absoluteUrl(seoRoutes.nlFamily),
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
          <span>Wandelen met kinderen</span>
        </nav>

        <header className="section-reveal mb-10">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Wandelen met kinderen in Luxemburg: slim en ontspannen plannen
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Deze pagina helpt gezinnen met routekeuze, dagritme en praktische
            voorbereiding. Zo blijft wandelen in Luxemburg leuk voor ouders en
            kinderen.
          </p>
        </header>

        <section className="section-divider section-parallax-soft section-reveal mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-foreground">
            Kindvriendelijke routes om mee te starten
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {familyRoutes.map((route, index) => (
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
                  <li>Niveau: {route.difficulty}</li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-divider section-parallax-soft section-reveal mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="mb-4 text-3xl font-semibold text-foreground">
            Praktische planning voor gezinnen
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-lg border border-border/70 bg-background p-4">
              <h3 className="mb-2 font-semibold text-foreground">1. Korte etappes</h3>
              <p className="text-sm text-muted-foreground">
                Plan routes van 2 tot 3 uur en voorzie een stop met snack of
                speeltijd.
              </p>
            </article>
            <article className="rounded-lg border border-border/70 bg-background p-4">
              <h3 className="mb-2 font-semibold text-foreground">2. Flexibele timing</h3>
              <p className="text-sm text-muted-foreground">
                Start vroeg en houd een korte fallback route klaar bij vermoeidheid.
              </p>
            </article>
            <article className="rounded-lg border border-border/70 bg-background p-4">
              <h3 className="mb-2 font-semibold text-foreground">3. Centrale overnachting</h3>
              <p className="text-sm text-muted-foreground">
                Vanuit Grevenmacher ben je snel bij meerdere regio's zonder
                dagelijks verhuizen.
              </p>
            </article>
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <Link href={seoRoutes.nlBeginner} className="font-semibold text-primary hover:text-primary-hover">
              Bekijk beginnersroutes in Luxemburg
            </Link>
            <Link href={seoRoutes.nlRainyDay} className="font-semibold text-primary hover:text-primary-hover">
              Regenachtige dag? Bekijk alternatieven
            </Link>
            <Link href={seoRoutes.nlSeasonal} className="font-semibold text-primary hover:text-primary-hover">
              Kies routes per seizoen
            </Link>
          </div>
        </section>

        <section className="section-divider section-parallax-soft section-reveal mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="mb-4 text-3xl font-semibold text-foreground">
            Verblijf als familiebasis boeken
          </h2>
          <p className="mb-5 leading-relaxed text-muted-foreground">
            Boek een centrale accommodatie zodat je minder reist en meer tijd
            overhoudt voor routes die passen bij het tempo van je gezin.
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
              Terug naar de NL hoofdgids
            </Link>
          </div>
        </section>

        <section className="section-divider section-parallax-soft section-reveal">
          <h2 className="mb-4 text-3xl font-semibold text-foreground">Veelgestelde vragen</h2>
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
