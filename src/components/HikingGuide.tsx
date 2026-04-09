import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Clock,
  TrendingUp,
  Camera,
  ExternalLink,
  MapPin,
  Car,
  BedDouble,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import trail1 from "@/assets/trail-1.jpg";
import trail2 from "@/assets/trail-2.jpg";
import trail3 from "@/assets/trail-3.jpg";
import trail4 from "@/assets/trail-4.jpg";
import trail5 from "@/assets/trail-5.jpg";
import { getAirbnbUrl } from "@/lib/links";

const hikingTrails = [
  {
    id: 1,
    name: "Müllerthal Trail Route 1",
    description:
      "Explore the 'Little Switzerland' region with stunning rock formations, moss-covered boulders, and enchanting forest paths.",
    difficulty: "Moderate",
    length: "12 km",
    duration: "4-5 hours",
    image: trail1,
    highlights: ["Rock formations", "Ancient forests", "Photography spots"],
    pdfMap: "/hiking-maps/chemin-de-la-moselle-map.pdf",
    gpsCoords: "49.6805, 6.4406",
    officialUrl: "https://www.mullerthal-trail.lu/en",
  },
  {
    id: 2,
    name: "Vianden Castle Circuit",
    description:
      "A scenic hike leading to Luxembourg's most famous castle with panoramic views of the Our Valley.",
    difficulty: "Easy",
    length: "8 km",
    duration: "3 hours",
    image: trail2,
    highlights: ["Historic castle", "Valley views", "Riverside path"],
    pdfMap: "/hiking-maps/sentier-des-passionnés-map.pdf",
    gpsCoords: "49.6822, 6.4445",
    officialUrl: "https://www.visitluxembourg.com/place/vianden-castle",
  },
  {
    id: 3,
    name: "Echternach Lake Loop",
    description:
      "A peaceful lakeside walk through pristine nature, perfect for bird watching and tranquil moments.",
    difficulty: "Easy",
    length: "6 km",
    duration: "2 hours",
    image: trail3,
    highlights: ["Lake views", "Wildlife", "Peaceful paths"],
    pdfMap: "/hiking-maps/circuit-nature-map.pdf",
    gpsCoords: "49.6789, 6.4567",
    officialUrl:
      "https://www.alltrails.com/trail/luxembourg/echternach/rund-um-den-echternacher-see",
  },
  {
    id: 4,
    name: "Beaufort Castle Ruins",
    description:
      "Discover medieval history while hiking through ancient woodlands to impressive castle ruins.",
    difficulty: "Moderate",
    length: "10 km",
    duration: "4 hours",
    image: trail4,
    highlights: ["Medieval ruins", "Forest trails", "Historical sites"],
    pdfMap: "/hiking-maps/hiking-trail-beaufort-vianden-en.pdf",
    gpsCoords: "49.6805, 6.4406",
    officialUrl:
      "https://www.outdooractive.com/en/hikes/beaufort/hikes-in-beaufort/6020964/",
  },
  {
    id: 5,
    name: "Kneiff Summit Trail",
    description:
      "Reach Luxembourg's highest point at 560m for breathtaking panoramic views of the Ardennes.",
    difficulty: "Challenging",
    length: "15 km",
    duration: "6 hours",
    image: trail5,
    highlights: ["Highest peak", "Panoramic views", "Challenging terrain"],
    pdfMap: "/hiking-maps/kneff.pdf",
    gpsCoords: "49.6822, 6.4445",
    officialUrl: "https://www.summitpost.org/kneiff/994436",
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return "bg-primary/10 text-primary border-primary/20";
    case "moderate":
      return "bg-accent/10 text-accent-foreground border-accent/20";
    case "challenging":
      return "bg-destructive/10 text-destructive border-destructive/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const HikingGuide = () => {
  const airbnbUrl = getAirbnbUrl(
    "hiking-guide-cta",
    "hiking-intent-section"
  );

  return (
    <section
      id="hiking"
      className="section-divider section-parallax-soft py-24 bg-gradient-to-b from-muted/45 via-background to-muted/35"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="section-reveal text-center mb-16">
          <p className="inline-flex items-center rounded-full bg-secondary/10 text-secondary px-4 py-1.5 text-xs font-semibold tracking-wide mb-4">
            Trail Discovery
          </p>
          <h2 className="section-title text-foreground mb-4">
            Hiking in Luxembourg: Complete Trail Guide with Maps
          </h2>
          <p className="section-subtitle text-muted-foreground max-w-3xl mx-auto">
            Discover Luxembourg's best hiking trails. From scenic riverside
            walks to challenging mountain paths, explore the natural beauty of
            Luxembourg starting from our perfectly located apartment in
            Grevenmacher.
          </p>
        </header>

        {/* Hiking Trails Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="hiking-maps"
        >
          {hikingTrails.map((trail, index) => (
            <article key={trail.id}>
              <Card
                className="group overflow-hidden border border-border/70 bg-card/90 backdrop-blur-sm hover:shadow-medium transition-all duration-300 hover:-translate-y-1 section-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <div className="relative w-full h-48">
                    <Image
                      src={trail.image}
                      alt={`${trail.name} hiking trail in Luxembourg - ${trail.difficulty} difficulty, ${trail.length} distance`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className={getDifficultyColor(trail.difficulty)}>
                      {trail.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                      <Camera className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    {trail.name}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {trail.description}
                  </p>

                  {/* Trail Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>{trail.length}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{trail.duration}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trail.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex items-center gap-2 text-xs"
                    >
                      <a
                        href={trail.officialUrl ?? trail.pdfMap}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Visit Official Site
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="section-reveal section-reveal-delay mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-primary/35 bg-gradient-forest p-8 md:p-10 shadow-strong">
            <div className="absolute -top-16 -right-12 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.9fr] items-center">
              <div>
                <p className="inline-flex items-center rounded-full bg-primary-foreground/10 px-4 py-1 text-xs font-semibold tracking-wide text-primary-foreground/90">
                  Ready to explore these amazing trails?
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-4 mb-3">
                  Stay close to the routes and make every hiking day count
                </h3>
                <p className="text-primary-foreground/85 leading-relaxed max-w-2xl">
                  Our Grevenmacher apartment gives you quick access to
                  Mullerthal, Echternach, and Vianden, with the comfort to
                  recover well after long trail days.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="rounded-lg bg-background text-primary hover:bg-background/90"
                  >
                    <a href={airbnbUrl} target="_blank" rel="noopener noreferrer">
                      Check Availability
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="rounded-lg border-primary-foreground/35 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Link href="/#listing">View Apartment Details</Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <article className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary-foreground mb-1">
                    <MapPin className="h-4 w-4 text-primary" />
                    Central Base
                  </div>
                  <p className="text-xs text-primary-foreground/70">
                    Easy access to top hiking regions in Luxembourg.
                  </p>
                </article>

                <article className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary-foreground mb-1">
                    <Car className="h-4 w-4 text-primary" />
                    Practical Access
                  </div>
                  <p className="text-xs text-primary-foreground/70">
                    Parking and nearby services for smooth trail logistics.
                  </p>
                </article>

                <article className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary-foreground mb-1">
                    <BedDouble className="h-4 w-4 text-primary" />
                    Recover Better
                  </div>
                  <p className="text-xs text-primary-foreground/70">
                    Spacious layout for families and hiking groups up to 7
                    guests.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HikingGuide;
