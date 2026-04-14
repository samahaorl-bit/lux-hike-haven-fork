import Link from "next/link";
import { ArrowUpRight, BookOpenText, Globe2, Mountain } from "lucide-react";

import BlogCard from "@/components/blog/BlogCard";
import {
  getBlogIndexPath,
  getBlogPostPath,
  getBlogPosts,
  type BlogLocale,
} from "@/lib/blog";
import { getAirbnbUrl } from "@/lib/links";
import { seoRoutes } from "@/lib/site";

type BlogIndexContentProps = {
  locale: BlogLocale;
};

const copyByLocale = {
  nl: {
    breadcrumb: "Blog",
    title: "Wandelen in Luxemburg Blog",
    subtitle:
      "Praktische artikelen voor Nederlandse toeristen die zoeken op 'wanderen in Luxembourg' of 'wandelen in Luxemburg'.",
    eyebrow: "SEO-ready hiking content",
    highlightsTitle: "Wat je hier vindt",
    highlights: [
      "Data-gedreven routegidsen voor NL zoekintentie",
      "Hondvriendelijke en camping-gerichte contentclusters",
      "Weekendplanning met transport en verblijfstips",
    ],
    languageSwitch: "Read in English",
    languageHref: getBlogIndexPath("en"),
    stat1Label: "Nederlandse focus",
    stat1Value: "NL zoekintentie",
    stat2Label: "Belangrijk keyword",
    stat2Value: "wandelen in Luxemburg",
    stat3Label: "Core regio",
    stat3Value: "Mullerthal",
    stayCta: "Bekijk verblijf in Grevenmacher",
    stayHref: getAirbnbUrl("nl-blog-hub", "blog-index"),
    staySecondary: "Naar Nederlandse hiking hub",
    staySecondaryHref: seoRoutes.nlHub,
  },
  en: {
    breadcrumb: "Blog",
    title: "Hiking in Luxembourg Blog",
    subtitle:
      "Bilingual content engineered for Dutch tourist search intent, with practical hiking logistics and conversion-focused planning.",
    eyebrow: "SEO-ready hiking content",
    highlightsTitle: "Inside this blog",
    highlights: [
      "Intent-led trail guides for Dutch travel demand",
      "Dog-friendly and camping-focused content clusters",
      "Weekend logistics with transport and stay strategy",
    ],
    languageSwitch: "Lees in het Nederlands",
    languageHref: getBlogIndexPath("nl"),
    stat1Label: "Primary audience",
    stat1Value: "Tourists from Holland",
    stat2Label: "Core intent",
    stat2Value: "wanderen in Luxembourg",
    stat3Label: "Anchor region",
    stat3Value: "Mullerthal",
    stayCta: "Check stay in Grevenmacher",
    stayHref: getAirbnbUrl("en-blog-hub", "blog-index"),
    staySecondary: "Go to English hiking hub",
    staySecondaryHref: seoRoutes.enHub,
  },
} as const;

export default function BlogIndexContent({ locale }: BlogIndexContentProps) {
  const copy = copyByLocale[locale];
  const posts = getBlogPosts(locale);
  const [featured, ...rest] = posts;

  return (
    <main lang={locale === "nl" ? "nl-NL" : "en"} className="bg-background pt-24 pb-16">
      <section className="section-parallax-soft relative overflow-hidden border-b border-border/70 bg-gradient-to-br from-emerald-50 via-background to-sky-50">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

        <div className="section-reveal container relative mx-auto px-4 pb-14 pt-12 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-muted-foreground">
            <Link href={seoRoutes.home} className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>{copy.breadcrumb}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
                <BookOpenText className="h-3.5 w-3.5" />
                {copy.eyebrow}
              </p>

              <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-foreground md:text-6xl">
                {copy.title}
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">{copy.subtitle}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={copy.languageHref}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <Globe2 className="h-4 w-4" />
                  {copy.languageSwitch}
                </Link>
                <Link
                  href={locale === "nl" ? seoRoutes.nlHub : seoRoutes.enHub}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  <Mountain className="h-4 w-4" />
                  {locale === "nl" ? "Naar hiking hub" : "Go to hiking hub"}
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-soft backdrop-blur">
              <h2 className="text-lg font-bold text-foreground">{copy.highlightsTitle}</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {copy.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-3 gap-2">
                <article className="rounded-2xl border border-border/60 bg-background/80 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{copy.stat1Label}</p>
                  <p className="mt-1 text-sm font-bold text-foreground">{copy.stat1Value}</p>
                </article>
                <article className="rounded-2xl border border-border/60 bg-background/80 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{copy.stat2Label}</p>
                  <p className="mt-1 text-sm font-bold text-foreground">{copy.stat2Value}</p>
                </article>
                <article className="rounded-2xl border border-border/60 bg-background/80 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{copy.stat3Label}</p>
                  <p className="mt-1 text-sm font-bold text-foreground">{copy.stat3Value}</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider section-parallax-soft section-reveal container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {featured && (
          <div className="section-reveal mx-auto mb-8 max-w-5xl">
            <BlogCard
              post={featured}
              href={getBlogPostPath(locale, featured.slug)}
              locale={locale}
              featured
            />
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((post, index) => (
            <div
              key={`${post.locale}-${post.slug}`}
              className="section-reveal"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <BlogCard
                post={post}
                href={getBlogPostPath(locale, post.slug)}
                locale={locale}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section-divider section-parallax-soft section-reveal container mx-auto px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
          <div className="grid gap-5 md:grid-cols-[1.6fr_1fr] md:items-end">
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                {locale === "nl"
                  ? "Van blogartikel naar boeking: plan je trip slim"
                  : "From blog strategy to booking: plan smarter"}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {locale === "nl"
                  ? "Gebruik deze blog als routeplanner en boek daarna een centrale uitvalsbasis in Grevenmacher."
                  : "Use the blog as your route planner, then choose a central stay in Grevenmacher for efficient trail days."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href={copy.stayHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                {copy.stayCta}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href={copy.staySecondaryHref}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                {copy.staySecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
