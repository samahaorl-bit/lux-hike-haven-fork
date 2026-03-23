"use client";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Wifi,
  Car,
  Coffee,
  Tv,
  Wind,
  MapPin,
  Users,
  Star,
  ChefHat,
  Bed,
} from "lucide-react";
import apartmentInterior from "@/assets/apartment-interior.jpg";
import Image from "next/image";
import { getAirbnbUrl } from "@/lib/links";

const amenities = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Car, label: "Parking" },
  { icon: Coffee, label: "Coffee Machine" },
  { icon: Tv, label: "Smart TV" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: ChefHat, label: "Full Kitchen" },
];

const apartmentFeatures = [
  {
    title: "Spacious Living Area",
    description:
      "Comfortable seating area with large windows offering natural light and city views.",
  },
  {
    title: "Modern Kitchen",
    description:
      "Fully equipped kitchen with all appliances needed to prepare meals after hiking.",
  },
  {
    title: "Cozy Bedroom",
    description:
      "Queen-size bed with premium linens for the perfect rest after outdoor adventures.",
  },
  {
    title: "Prime Location",
    description:
      "Walking distance to restaurants, shops, and public transport to hiking destinations.",
  },
];

const ApartmentSection = () => {
  const airbnbUrl = getAirbnbUrl("apartment-section");
  return (
    <section
      id="apartment"
      className="py-24 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="h-4 w-4" />
            Luxembourg City Center
          </div>
          <h2 className="section-title text-foreground mb-6">
            Your Comfortable Base in Luxembourg
          </h2>
          <p className="section-subtitle text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience comfort and convenience in our beautifully appointed
            apartment, perfectly located for exploring Luxembourg's natural
            wonders and vibrant city life.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
          {/* Image Gallery - Takes 2 columns on xl screens */}
          <div className="xl:col-span-2 animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-strong group bg-card">
              <div className="relative w-full h-[500px]">
                <Image
                  src={apartmentInterior}
                  alt="Luxury apartment interior with modern furnishings and natural light"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(min-width: 1280px) 800px, 100vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Overlay Content */}
              <div className="absolute top-6 left-6">
                <Badge className="bg-primary text-primary-foreground shadow-medium">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Superhost
                </Badge>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-3">
                    <div className="flex items-center gap-2 text-white">
                      <Users className="h-5 w-5" />
                      <span className="font-medium">2-4 guests</span>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-3">
                    <div className="flex items-center gap-2 text-white">
                      <Bed className="h-5 w-5" />
                      <span className="font-medium">1 Bedroom</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Sidebar */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-2xl p-8 shadow-medium h-full border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                At a Glance
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Bed className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      1 Bedroom
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Queen bed with premium linens
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary/5 rounded-xl">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      2-4 Guests
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Perfect for couples or small groups
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-accent/5 rounded-xl">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      City Center
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Walking distance to everything
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full"
                  onClick={() => window.open(airbnbUrl, "_blank")}
                >
                  View on Airbnb
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities & Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Amenities */}
          <div className="animate-slide-up">
            <div className="bg-card rounded-2xl p-8 shadow-medium border border-border/50 h-full">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                Amenities & Comfort
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-muted/20 rounded-xl hover:bg-muted/40 transition-colors group"
                  >
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <amenity.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">
                      {amenity.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-2xl p-8 shadow-medium border border-border/50 h-full">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <Star className="h-6 w-6 text-secondary" />
                </div>
                What Makes It Special
              </h3>

              <div className="space-y-5">
                {apartmentFeatures.map((feature, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/20 transition-colors">
                      <div className="bg-accent/10 p-2 rounded-lg mt-1 group-hover:bg-accent/20 transition-colors">
                        <div className="w-3 h-3 bg-accent rounded-full" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-hero rounded-3xl p-12 shadow-strong">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready for Your Luxembourg Adventure?
              </h3>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                Book your stay at our comfortable apartment and start exploring
                Luxembourg's incredible hiking trails and charming city life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="cta-light"
                  size="lg"
                  onClick={() => window.open(airbnbUrl, "_blank")}
                >
                  View on Airbnb
                </Button>
                <Button
                  variant="cta-outline"
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentSection;
