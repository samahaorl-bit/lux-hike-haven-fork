import Link from "next/link";
import { Button } from "./ui/button";
import { Star, ShieldCheck, Clock, MapPin } from "lucide-react";
import { getAirbnbUrl } from "@/lib/links";

export default function CtaReserveSection() {
  const airbnbUrl = getAirbnbUrl("cta-reserve-section");

  return (
    <section className="section-divider section-parallax-medium relative py-28 bg-gradient-to-b from-muted/55 via-background to-muted/45 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_center,black,transparent)] opacity-25" />
      <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-reveal max-w-5xl mx-auto rounded-3xl border border-border/70 bg-card/85 backdrop-blur-sm px-6 py-10 md:px-12 md:py-14 text-center space-y-8 shadow-medium">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            <Star className="h-4 w-4 fill-current" /> 4.9 Rated Stay
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
            Book Your Grevenmacher Escape
            <span className="block text-secondary">
              before your dates go
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A bright 120 m² maisonette with 3 bedrooms, 2 baths, workspace &
            patio—steps from shops, trails and Moselle vineyards. Fast responses
            · Trusted host · Seamless self check‑in.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-14 px-10 text-lg rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition group bg-primary text-primary-foreground hover:bg-primary-hover"
            >
              <Link href={airbnbUrl} target="_blank" rel="noopener noreferrer">
                Reserve now
              </Link>
            </Button>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-primary" /> Secure booking
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-4 w-4 text-primary" /> Instant response
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-4 w-4 text-primary" /> Central location
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
