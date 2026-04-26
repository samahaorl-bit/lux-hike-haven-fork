import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import HikingGuide from "@/components/HikingGuide";
import ListingDetailSection from "@/components/ListingDetailSection";
import SleepSection from "@/components/SleepSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GrevenmacherSection from "@/components/GrevenmacherSection";
import CtaReserveSection from "@/components/CtaReserveSection";
import AboutSection from "@/components/AboutSection";
import { absoluteUrl, seoRoutes, siteConfig } from "@/lib/site";

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => (
    <section
      id="contact"
      className="section-divider section-parallax-soft py-24 bg-gradient-to-b from-muted/55 via-background to-muted/45"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="inline-flex items-center rounded-full bg-secondary/10 text-secondary px-4 py-1.5 text-xs font-semibold tracking-wide mb-4">
            Plan With Confidence
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Loading contact details...
          </p>
        </div>
      </div>
    </section>
  ),
});

export const metadata: Metadata = {
  title: "Lux Traveler | Design apartment in Grevenmacher",
  description:
    "Book a refined apartment in Grevenmacher with fast access to Luxembourg hiking regions. Use our Dutch and English guide hubs for route planning.",
  keywords: [
    "Lux Traveler",
    "apartment Grevenmacher",
    "hiking stay Luxembourg",
    "where to stay in Luxembourg",
    "holiday apartment Luxembourg",
    "overnachten in Grevenmacher",
    "Luxembourg hiking base",
  ],
  alternates: {
    canonical: seoRoutes.home,
    languages: {
      "en": seoRoutes.enHub,
      "nl-NL": seoRoutes.nlHub,
      "x-default": seoRoutes.home,
    },
  },
  openGraph: {
    title: "Lux Traveler | Apartment base for Luxembourg hikes",
    description:
      "Conversion-first home page for booking a comfortable Grevenmacher base near Luxembourg trails.",
    url: absoluteUrl(seoRoutes.home),
    locale: "nl_NL",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1536,
        height: 1024,
        alt: "Lux Traveler apartment in Grevenmacher for hiking trips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lux Traveler | Stay in Grevenmacher",
    description:
      "Book a stylish hiking base in Grevenmacher and use our NL/EN guide hubs for route planning.",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="overflow-hidden">
        <HeroSection />
        <ListingDetailSection />
        <SleepSection />
        <AmenitiesSection />
        <HikingGuide />

        <section className="section-divider section-parallax-soft py-24 bg-gradient-to-b from-slate-50/80 via-background to-slate-50/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="section-reveal text-center mb-10">
              <p className="inline-flex items-center rounded-full bg-secondary/10 text-secondary px-4 py-1.5 text-xs font-semibold tracking-wide">
                Multilingual Hiking Guides
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-3">
                Choose Your Preferred Guide Language
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                This home page is your booking gateway. Use the Dutch and
                English hubs for informational route planning, and use the blog
                for deeper hiking strategy.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <article
                className="section-reveal rounded-2xl border border-border/70 bg-card/90 backdrop-blur p-7 shadow-soft hover:shadow-medium transition-all duration-300"
                style={{ animationDelay: "0.08s" }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  For Dutch tourists: Wandelen in Luxemburg
                </h3>
                <p className="text-muted-foreground mb-4">
                  Planning from Holland? Explore Dutch-language route ideas,
                  practical travel tips, and trail-friendly accommodation.
                </p>
                <Link
                  href={seoRoutes.nlHub}
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-hover"
                >
                  Visit the Dutch hiking guide
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
              <article
                className="section-reveal rounded-2xl border border-border/70 bg-card/90 backdrop-blur p-7 shadow-soft hover:shadow-medium transition-all duration-300"
                style={{ animationDelay: "0.16s" }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Full English Hiking Hub
                </h3>
                <p className="text-muted-foreground mb-4">
                  Read our complete English guide to the best hikes in
                  Luxembourg, route logistics, and where to stay in Grevenmacher.
                </p>
                <Link
                  href={seoRoutes.enHub}
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-hover"
                >
                  Visit the English hiking guide
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
              <article
                className="section-reveal rounded-2xl border border-border/70 bg-card/90 backdrop-blur p-7 shadow-soft hover:shadow-medium transition-all duration-300"
                style={{ animationDelay: "0.24s" }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Bilingual Hiking Blog
                </h3>
                <p className="text-muted-foreground mb-4">
                  Read Dutch and English articles targeting search terms like
                  "wanderen in Luxembourg" with practical route and travel
                  logistics.
                </p>
                <Link
                  href={seoRoutes.blog}
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-hover"
                >
                  Explore the blog
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <GrevenmacherSection />
        <CtaReserveSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
