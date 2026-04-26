import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { getAirbnbUrl } from "@/lib/links";

// Using public folder images under /Central-stylish (UUID-based filenames)
const listingImages = [
  "/Central-stylish/dinning-room.avif",
  "/Central-stylish/1e4b906d-5c3d-45a9-87ce-63f81762d010.avif",
  "/Central-stylish/24b60b66-902c-4a16-9858-5c106b7f55cd.avif",

  "/Central-stylish/5e01f156-3612-49d9-914c-3c2176d4c9c6.avif",
  "/Central-stylish/e13b7deb-e11f-41e1-8a22-e3b1beb379dc.avif",
];

const listingStats = [
  { label: "Guests", value: "7" },
  { label: "Bedrooms", value: "3" },
  { label: "Beds", value: "4" },
  { label: "Baths", value: "2" },
];

export default function ListingDetailSection() {
  const airbnbUrl = getAirbnbUrl("listing-detail", "about-modal");

  return (
    <section
      id="listing"
      className="section-divider section-parallax-soft py-24 bg-gradient-to-b from-background via-slate-50/60 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-reveal mb-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-5">
            <p className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              Stay Overview
            </p>
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                Your Comfortable Base in Luxembourg
              </h2>
              <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
                7 guests · 3 bedrooms · 4 beds · 2 baths · 2 balconies · Perfect
                base for Moselle valley exploration.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {listingStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="section-reveal rounded-2xl border border-border/70 bg-card/80 px-4 py-3 shadow-soft"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild variant="cta" size="lg">
              <a href={airbnbUrl} target="_blank" rel="noopener noreferrer">
                <CalendarDays className="h-4 w-4" />
                Check availability
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/photo-tour">See all photos</Link>
            </Button>
          </div>
        </div>

        <div className="section-reveal section-reveal-delay grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 xl:gap-4 aspect-[5/2] max-h-[520px] rounded-3xl border border-border/60 bg-card/70 p-2 shadow-soft">
          {/* Primary large image */}
          <div className="relative col-span-2 md:col-span-2 lg:col-span-3 row-span-2 rounded-2xl overflow-hidden group">
            <Image
              src={listingImages[0]}
              alt="Main listing photo"
              fill
              className="object-cover group-hover:scale-105 duration-500"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>
          {/* Four supporting images (conditionally hidden for responsiveness) */}
          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src={listingImages[1]}
              alt="Listing photo 2"
              fill
              className="object-cover group-hover:scale-110 duration-500"
              sizes="20vw"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src={listingImages[2]}
              alt="Listing photo 3"
              fill
              className="object-cover group-hover:scale-110 duration-500"
              sizes="20vw"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden hidden md:block group">
            <Image
              src={listingImages[3]}
              alt="Listing photo 4"
              fill
              className="object-cover group-hover:scale-110 duration-500"
              sizes="20vw"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden hidden lg:block group">
            <Image
              src={listingImages[4]}
              alt="Listing photo 5"
              fill
              className="object-cover group-hover:scale-110 duration-500"
              sizes="20vw"
            />
            <Link
              href="/photo-tour"
              className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition"
              aria-label="See all photos"
            >
              <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                See all photos
              </span>
            </Link>
          </div>
        </div>
        {/* About / Description Excerpt with modal */}
        <div className="section-reveal section-reveal-delay-lg mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-border/70 bg-card/80 p-8 shadow-medium">
            <div className="space-y-5">
              <header className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  About this space
                </p>
                <h3 className="text-3xl font-semibold tracking-tight text-foreground">
                  Warm, central, and built for multi-day hikes
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to the heart of Grevenmacher. The apartment is
                  designed for families, friends, and business travelers looking
                  for calm comfort with instant access to the Moselle valley.
                </p>
              </header>
              <div className="flex flex-wrap gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      Full details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-3xl">
                    <DialogHeader className="space-y-2">
                      <DialogTitle>About this space</DialogTitle>
                      <DialogDescription>
                        Everything you need to plan your stay, from quick facts
                        to the surrounding neighborhood.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 text-sm leading-relaxed">
                      <section className="space-y-3">
                        <h4 className="font-medium tracking-tight">
                          Listing highlights
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>120 m² of living space on two levels</li>
                          <li>2 bathrooms with modern showers</li>
                          <li>Bright kitchen-living room &amp; cozy living area</li>
                          <li>Private patio for relaxing hours</li>
                          <li>2 parking lots included</li>
                          <li>Central, quiet &amp; family-friendly location</li>
                          <li>2 min from the city center</li>
                          <li>10 min from the Pool</li>
                          <li>5 min from the river</li>
                          <li>2 small parkings included</li>
                          <li>Public parking 1 min from the apartment</li>
                        </ul>
                      </section>
                      <section className="space-y-3">
                        <h4 className="font-medium tracking-tight">The space</h4>
                        <p>
                          Right outside the front door: DELHAIZE grocery store
                          🍀 Bakery, pharmacy and butcher only a 1 minute walk
                          away :)
                        </p>
                        <h5 className="font-medium tracking-tight">
                          Top location &amp; easy access
                        </h5>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            <span className="font-medium">
                              Kirchberg (Luxembourg City)
                            </span>{" "}
                            in just 12 minutes by car
                          </li>
                          <li>
                            <span className="font-medium">Trier (Germany)</span>{" "}
                            very close – ideal for a day trip
                          </li>
                          <li>
                            Very good bus connections, quickly and easily
                            accessible
                          </li>
                        </ul>
                      </section>
                      <section className="space-y-3">
                        <h4 className="font-medium tracking-tight">
                          The surrounding area
                        </h4>
                        <p>
                          Grevenmacher is a charming Moselle town with a lot of
                          character. Just outside the door you will find:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Delhaize supermarket (two steps away)</li>
                          <li>A movie theater</li>
                          <li>An open swimming pool</li>
                          <li>Tasteful restaurants &amp; cozy cafés</li>
                          <li>Boutiques &amp; small local shops</li>
                          <li>Lots of playgrounds – great for kids</li>
                          <li>Walking &amp; cycling trails along the Moselle</li>
                          <li>Wineries &amp; Moselle tours</li>
                          <li>A butterfly garden for all ages</li>
                        </ul>
                        <p>
                          Enjoy relaxing days in our comfortable apartment and
                          discover the beauty of Grevenmacher – a perfect blend
                          of nature, culture and enjoyment! 20 min away, you can
                          travel by car to Trier or Luxembourg center :)
                        </p>
                      </section>
                      <section className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-2xl border border-border/70 bg-muted/30 p-4">
                          <p className="mb-2 font-medium text-foreground">
                            Quick facts
                          </p>
                          <ul className="list-none space-y-1">
                            <li>
                              <span className="font-semibold">Guests:</span> 7
                            </li>
                            <li>
                              <span className="font-semibold">Bedrooms:</span> 3
                            </li>
                            <li>
                              <span className="font-semibold">Beds:</span> 4
                            </li>
                            <li>
                              <span className="font-semibold">Baths:</span> 2
                            </li>
                            <li>
                              <span className="font-semibold">Parking:</span> 2
                              spots
                            </li>
                            <li>
                              <span className="font-semibold">Size:</span> 120 m²
                            </li>
                          </ul>
                        </div>
                        <div className="rounded-2xl border border-border/70 bg-muted/30 p-4">
                          <p className="mb-2 font-medium text-foreground">
                            Why stay here?
                          </p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Central yet peaceful</li>
                            <li>Family &amp; group friendly layout</li>
                            <li>Moselle adventures at your doorstep</li>
                            <li>Fast access to Luxembourg &amp; Trier</li>
                          </ul>
                        </div>
                      </section>
                    </div>
                    <DialogFooter className="gap-2">
                      <Button asChild variant="outline">
                        <Link href="/photo-tour">View full photo tour</Link>
                      </Button>
                      <Button asChild variant="cta">
                        <a
                          href={airbnbUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <CalendarDays className="h-4 w-4" />
                          Book on Airbnb
                        </a>
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Button asChild variant="cta" size="sm">
                  <a href={airbnbUrl} target="_blank" rel="noopener noreferrer">
                    <CalendarDays className="h-4 w-4" />
                    Reserve now
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-border/70 bg-background/80 p-6 shadow-soft">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Listing highlights
            </h4>
            <ul className="grid gap-3 sm:grid-cols-2 text-sm text-foreground">
              <li className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3">
                120 m² of living space on two levels
              </li>
              <li className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3">
                2 bathrooms with modern showers
              </li>
              <li className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3">
                2 min from the city center
              </li>
              <li className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3">
                10 min from the Pool
              </li>
              <li className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3">
                5 min from the river
              </li>
              <li className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3">
                2 small parkings included
              </li>
              <li className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3">
                Public parking 1 min from the apartment
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
