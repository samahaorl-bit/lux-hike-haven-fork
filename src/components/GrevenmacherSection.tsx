import {
  MapPin,
  Clock,
  Phone,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { getAirbnbUrl } from "@/lib/links";
import poolImage from "@/assets/grevenmacher-pool.jpg";
import butterflyImage from "@/assets/butterfly-garden.jpg";
import culturalCenterImage from "@/assets/cultural-center.jpg";
import cinemaImage from "@/assets/cinema.jpg";
import cruiseImage from "@/assets/mosel-cruise.jpg";

const attractions = [
  {
    id: 1,
    name: "Grevenmacher Outdoor Pool",
    description:
      "Enjoy a refreshing swim in Luxembourg's most popular outdoor swimming complex with multiple pools, water slides, and relaxation areas.",
    image: poolImage,
    openingHours: "May-September: 10:00-19:00 daily",
    contact: "+352 75 03 11 5501",

    website: "https://www.grevenmacher.lu/en/leisure/swimming-pool",
    location: "Kurzacht L-6740 Grevenmacher",
  },
  {
    id: 2,
    name: "Butterfly Garden",
    description:
      "Step into a tropical paradise with over 40 species of exotic butterflies flying freely in a climate-controlled greenhouse environment.",
    image: butterflyImage,
    openingHours: "March-October: 9:30-17:00, November-February: 9:30-16:00",
    contact: "+352 75 85 39",
    website: "https://www.papillons.lu",
    location: "Route de Trèves, Grevenmacher",
  },
  {
    id: 3,
    name: "Cultural Center Machera",
    description:
      "Experience Luxembourg's vibrant cultural scene with exhibitions, concerts, theater performances, and artistic events throughout the year.",
    image: culturalCenterImage,
    openingHours: "Tuesday-Sunday: 14:00-18:00, Event evenings until 22:00",
    contact: "+352 75 03 11 4040",
    website: "https://www.machera.lu",
    location: "Livestock Market Square L-6731 Grevenmacher",
  },
  {
    id: 4,
    name: "Kultur Hof Cinema",
    description:
      "Enjoy the latest movies and independent films in this charming local cinema with comfortable seating and excellent sound quality.",
    image: cinemaImage,
    openingHours: "Daily: 18:00-22:00 (showtimes vary)",
    contact: "+352 26 74 64 1",
    website: "https://tickets.kulturhuef.lu/de/",
    location: "54 Rte de Treves, 6793 Grevenmacher",
  },
  {
    id: 5,
    name: "River Cruises on the Mosel",
    description:
      "Discover the beautiful Mosel valley from the water with scenic boat trips featuring vineyards, historic villages, and stunning landscapes.",
    image: cruiseImage,
    openingHours: "April-October: Departures 10:00, 14:00, 16:00",
    contact: "+352 72 82 75",
    website: "https://www.moselcruises.lu",
    location: "10,route du vin Grevenmacher",
  },
];

const GrevenmacherSection = () => {
  const airbnbUrl = getAirbnbUrl("grevenmacher-section");
  return (
    <section
      id="grevenmacher"
      className="section-divider section-parallax-soft py-24 bg-gradient-to-b from-background via-muted/35 to-background"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="section-reveal text-center mb-16">
          <p className="inline-flex items-center rounded-full bg-secondary/10 text-secondary px-4 py-1.5 text-xs font-semibold tracking-wide mb-4">
            Local Discovery
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-wide">
            Tourism in Grevenmacher
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-loose">
            Discover Grevenmacher's top attractions including the cinema,
            butterfly garden, and cultural center. Your perfect base for
            exploring Luxembourg's cultural heritage and natural beauty.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-16">
          {attractions.map((attraction, index) => (
            <Card
              key={attraction.id}
              className="section-reveal group overflow-hidden bg-card/90 backdrop-blur-sm border border-border/70 hover:shadow-strong transition-all duration-300 hover:scale-[1.02] rounded-xl"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative overflow-hidden">
                <div className="relative w-full h-56">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {attraction.name}
                  </h3>
                </div>
              </div>

              <CardContent className="p-4 space-y-3">
                <p className="text-muted-foreground leading-loose">
                  {attraction.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3 text-sm">
                    <Clock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {attraction.openingHours}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <Phone className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <a
                      href={`tel:${attraction.contact}`}
                      className="text-primary hover:text-primary-hover transition-colors"
                    >
                      {attraction.contact}
                    </a>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {attraction.location}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4">
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="w-full rounded-lg"
                  >
                    <a
                      href={attraction.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit Official Website
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="section-reveal section-reveal-delay text-center bg-gradient-forest rounded-3xl p-8 md:p-12 border border-primary/35 shadow-strong">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 tracking-wide">
            Book Your Grevenmacher Escape
          </h3>
          <p className="text-lg text-primary-foreground/85 mb-8 max-w-2xl mx-auto leading-loose">
            Secure your stay in our luxurious apartment before your dates are
            gone. Enjoy the perfect blend of comfort and proximity to
            Grevenmacher's top attractions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              asChild
              className="bg-background text-primary hover:bg-background/90 shadow-lg rounded-lg"
            >
              <a href={airbnbUrl} target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary-foreground/35 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 shadow-lg rounded-lg"
            >
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrevenmacherSection;
