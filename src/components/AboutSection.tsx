import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Heart,
  Home,
  Mountain,
  Users,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { getAirbnbUrl } from "@/lib/links";

const AboutSection = () => {
  const airbnbUrl = getAirbnbUrl("about-section", "host-story");

  return (
    <section
      id="about"
      className="section-divider section-parallax-soft relative overflow-hidden bg-gradient-to-b from-background via-muted/40 to-background py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,hsl(var(--primary)/0.08)_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="section-reveal mb-14 text-center">
            <p className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-4">
              About this space
            </p>
            <h2 className="section-title text-foreground mb-4">
              A calm, design-led base for Luxembourg hikes
            </h2>
            <p className="section-subtitle text-muted-foreground mx-auto max-w-2xl">
              Thoughtfully hosted and trail-tested, this home keeps you close to
              nature while staying connected to shops, dining, and local
              guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-start">
            {/* Story Content */}
            <div className="section-reveal space-y-6">
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-8 shadow-strong">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-secondary/12" />
                <div className="relative">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Host story
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      Our passion for Luxembourg
                    </h3>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    After years of exploring trails, viewpoints, and hidden
                    corners across Luxembourg, we designed this space so guests
                    can experience the same adventure with ease and comfort.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm">
                    <div className="rounded-2xl border border-border/70 bg-background/80 p-4">
                      <p className="font-semibold text-foreground">
                        Trail-tested planning
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Real local route insight and logistics.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/80 p-4">
                      <p className="font-semibold text-foreground">
                        Guest-first hosting
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Fast, personal support during your stay.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-soft">
                <CardContent className="p-6">
                  <h4 className="mb-3 text-xl font-semibold text-foreground">
                    Why guests choose this space
                  </h4>
                  <p className="mb-5 text-muted-foreground leading-relaxed">
                    Designed as a practical hiking base, the apartment keeps you
                    close to major trail areas while offering calm, everyday
                    comfort.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <article className="rounded-2xl border border-border/70 bg-background/80 p-4">
                      <MapPin className="mb-2 h-5 w-5 text-primary" />
                      <p className="text-sm font-semibold text-foreground">
                        Central access
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Ideal starting point for multiple regions.
                      </p>
                    </article>
                    <article className="rounded-2xl border border-border/70 bg-background/80 p-4">
                      <ShieldCheck className="mb-2 h-5 w-5 text-primary" />
                      <p className="text-sm font-semibold text-foreground">
                        Reliable support
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Friendly help before and during your stay.
                      </p>
                    </article>
                    <article className="rounded-2xl border border-border/70 bg-background/80 p-4">
                      <Sparkles className="mb-2 h-5 w-5 text-primary" />
                      <p className="text-sm font-semibold text-foreground">
                        Thoughtful comfort
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Space to recover after active days.
                      </p>
                    </article>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trust Cards */}
            <div className="section-reveal section-reveal-delay grid grid-cols-1 gap-5">
              <Card className="border-border/60 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-primary/10 p-3">
                      <Mountain className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Local Hiking Expertise
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Years on Luxembourg trails means practical guidance on
                        route choice, pacing, and must-see viewpoints.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-secondary/10 p-3">
                      <Home className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Thoughtful Amenities
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Designed for active guests with practical comfort,
                        flexible space, and easy day-to-day logistics.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-accent/10 p-3">
                      <Users className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Personal Touch
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        We are available to help with itinerary ideas and local
                        recommendations tailored to your trip style.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-gradient-to-br from-background via-card/80 to-muted/40">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">
                    Plan your stay with confidence
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ready to build your Luxembourg hiking itinerary? Start with
                    our accommodation details or contact us for local guidance.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="sm" className="bg-gradient-forest text-primary-foreground hover:opacity-95">
                      <a
                        href={airbnbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book on Airbnb
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/#contact">Contact the Hosts</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Guest Testimonial */}
          {/* Removed testimonial block */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
