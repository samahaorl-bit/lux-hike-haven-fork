"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

// Using public folder images under /Central-stylish (UUID-based filenames)
const listingImages = [
  "/Central-stylish/dinning-room.avif",
  "/Central-stylish/1e4b906d-5c3d-45a9-87ce-63f81762d010.avif",
  "/Central-stylish/24b60b66-902c-4a16-9858-5c106b7f55cd.avif",

  "/Central-stylish/5e01f156-3612-49d9-914c-3c2176d4c9c6.avif",
  "/Central-stylish/e13b7deb-e11f-41e1-8a22-e3b1beb379dc.avif",
];

export default function ListingDetailSection() {
  return (
    <section id="listing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Your Comfortable Base in Luxembourg
            </h2>
            <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
              7 guests · 3 bedrooms · 4 beds · 2 baths · 2 balconies · Perfect
              base for Moselle valley exploration.
            </p>
          </div>
          <div className="sm:text-right">
            <Button asChild variant="cta" size="lg">
              <Link href="/photo-tour">See all photos</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 xl:gap-4 aspect-[5/2] max-h-[520px]">
          {/* Primary large image */}
          <div className="relative col-span-2 md:col-span-2 lg:col-span-3 row-span-2 rounded-lg overflow-hidden group">
            <Image
              src={listingImages[0]}
              alt="Main listing photo"
              fill
              className="object-cover group-hover:scale-105 duration-500"
              sizes="(min-width: 1024px) 60vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>
          {/* Four supporting images (conditionally hidden for responsiveness) */}
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src={listingImages[1]}
              alt="Listing photo 2"
              fill
              className="object-cover group-hover:scale-110 duration-500"
              sizes="20vw"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src={listingImages[2]}
              alt="Listing photo 3"
              fill
              className="object-cover group-hover:scale-110 duration-500"
              sizes="20vw"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden hidden md:block group">
            <Image
              src={listingImages[3]}
              alt="Listing photo 4"
              fill
              className="object-cover group-hover:scale-110 duration-500"
              sizes="20vw"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden hidden lg:block group">
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
        <div className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-lg p-8 shadow-lg">
          <div className="max-w-3xl space-y-6">
            <header className="space-y-4">
              <h3 className="text-4xl font-bold tracking-tight text-primary">
                About this space
              </h3>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>Welcome to the heart of Grevenmacher!</p>
                <p>
                  Our apartment is perfect for family vacations, weekend trips
                  with friends or business travelers looking for peace and
                  comfort near the city.
                </p>
              </div>
            </header>

            <section className="space-y-4">
              <h4 className="text-2xl font-semibold tracking-tight text-secondary">
                Listing highlights:
              </h4>
              <ul className="list-disc pl-6 text-lg space-y-2 text-foreground">
                <li>120 m² of living space on two levels</li>
                <li>2 bathrooms with modern showers</li>
                <li>2 min from the city center</li>
                <li>10 min from the Pool</li>
                <li>5 min from the river</li>
                <li>2 small parkings included</li>
                <li>Public parking 1 min from the apartment</li>
              </ul>
            </section>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  Show more
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>About this space</DialogTitle>
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
                      Right outside the front door: DELHAIZE grocery store 🍀
                      Bakery, pharmacy and butcher only a 1 minute walk away :)
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
                        Very good bus connections, quickly and easily accessible
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
                      discover the beauty of Grevenmacher – a perfect blend of
                      nature, culture and enjoyment! 20 min away, you can travel
                      by car to Trier or Luxembourg center :)
                    </p>
                  </section>
                  <section className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 rounded-md border bg-muted/30">
                      <p className="font-medium mb-2 text-foreground">
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
                    <div className="p-4 rounded-md border bg-muted/30">
                      <p className="font-medium mb-2 text-foreground">
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
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
