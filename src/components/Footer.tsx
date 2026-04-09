import { CalendarDays, Heart, MapPin, Mountain } from "lucide-react";
import Link from "next/link";
import { getAirbnbUrl } from "@/lib/links";
import { seoRoutes } from "@/lib/site";

const Footer = () => {
  const airbnbUrl = getAirbnbUrl("footer");
  return (
    <footer className="relative overflow-hidden border-t border-primary/40 bg-primary text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,hsl(var(--secondary)/0.18)_0%,transparent_60%)]"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4 pb-10 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 shadow-strong backdrop-blur-sm md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-foreground/70">
                Basecamp
              </span>
              <h3 className="text-2xl font-semibold leading-tight text-primary-foreground md:text-3xl">
                A refined base for Luxembourg hikes.
              </h3>
              <p className="text-sm text-primary-foreground/70">
                Stay in Grevenmacher with effortless access to the Mullerthal,
                Moselle valley, and the region's most scenic trails.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-primary-foreground/70">
                <span className="rounded-full border border-primary-foreground/20 px-3 py-1">
                  Central location
                </span>
                <span className="rounded-full border border-primary-foreground/20 px-3 py-1">
                  Trail-ready comfort
                </span>
                <span className="rounded-full border border-primary-foreground/20 px-3 py-1">
                  Local guidance
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href={airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-foreground/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                <CalendarDays className="h-4 w-4" />
                Check availability
              </Link>
              <p className="text-xs text-primary-foreground/60">
                Instant confirmation via Airbnb.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mountain className="h-6 w-6" />
              <Link href="/" className="text-xl font-semibold text-primary-foreground">
                Lux Traveler
              </Link>
            </div>
            <p className="text-sm text-primary-foreground/70">
              A calm, design-led stay for hikers who value comfort, clear
              logistics, and easy access to Luxembourg's best routes.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin className="h-4 w-4" />
              Grevenmacher, Luxembourg
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/60">
              Explore
            </p>
            <Link
              href="/#listing"
              className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              Our Apartment
            </Link>
            <Link
              href="/#hiking"
              className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              Hiking Guide
            </Link>
            <Link
              href="/#about"
              className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              About Lux Traveler
            </Link>
            <Link
              href="/photo-tour"
              className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              Photo Tour
            </Link>
            <Link
              href="/#contact"
              className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              Contact
            </Link>
          </div>

          <div className="space-y-3 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/60">
              Guides
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              <Link
                href={seoRoutes.nlHub}
                className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Wandelen in Luxemburg
              </Link>
              <Link
                href={seoRoutes.enHub}
                className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Hiking in Luxembourg
              </Link>
              <Link
                href={seoRoutes.nlWeekend}
                className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Wandelweekend Luxemburg
              </Link>
              <Link
                href={seoRoutes.nlFamily}
                className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Wandelen met kinderen
              </Link>
              <Link
                href={seoRoutes.nlBeginner}
                className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Beginnersroutes Luxemburg
              </Link>
              <Link
                href={seoRoutes.nlSeasonal}
                className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Seizoenswandelroutes
              </Link>
              <Link
                href={seoRoutes.nlRainyDay}
                className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Regenachtige dag planning
              </Link>
              <Link
                href={seoRoutes.blog}
                className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Hiking Blog
              </Link>
              <Link
                href={seoRoutes.nlBlog}
                className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Blog NL
              </Link>
              <Link
                href={seoRoutes.enBlog}
                className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Blog EN
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60 sm:flex-row">
          <div>© 2026 Lux Traveler. All rights reserved.</div>
          <div className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 fill-current text-accent" /> for
            hiking enthusiasts
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
