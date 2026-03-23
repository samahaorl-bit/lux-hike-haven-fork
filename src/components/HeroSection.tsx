"use client";

import { Button } from "./ui/button";
import { MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import heroImage1 from "@/assets/hero-luxembourg.jpg";
import heroImage2 from "@/assets/hero-luxembourg-2.jpg";
import heroImage3 from "@/assets/hero-luxembourg-3.jpg";
import heroImage4 from "@/assets/hero-luxembourg-4.jpg";
import { getAirbnbUrl } from "@/lib/links";

const HeroSection = () => {
  const airbnbUrl = getAirbnbUrl("hero-section");
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrollToApartment = () => {
    const element = document.getElementById("listing");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  }, [heroImages.length]);

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Hero image ${index + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 text-white hover:bg-white/20 transition-all duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 text-white hover:bg-white/20 transition-all duration-300"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <MapPin className="h-4 w-4 text-white" />
            <span className="text-white text-sm font-medium">
              Luxembourg City Center
            </span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-accent fill-current" />
              <span className="text-white text-sm">4.9</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="hero-title text-white mb-6 animate-slide-up">
            Your Perfect Base for
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Luxembourg Adventures
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="section-subtitle text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Discover the breathtaking hiking trails of Luxembourg from our cozy,
            centrally-located apartment. Perfect for nature lovers and adventure
            seekers.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
              onClick={scrollToApartment}
            >
              View Apartment
            </Button>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary-hover text-secondary-foreground shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
              onClick={() =>
                document
                  .getElementById("hiking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Hiking in Luxembourg
            </Button>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
              onClick={() =>
                document
                  .getElementById("grevenmacher")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Visit Grevenmacher
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              onClick={() => window.open(airbnbUrl, "_blank")}
            >
              Book on Airbnb
            </Button>
          </div>

          {/* Quick Stats */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-white mb-1">5+</div>
              <div className="text-white/80 text-sm">Top Hiking Trails</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-white mb-1">2 min</div>
              <div className="text-white/80 text-sm">Walk to City Center</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-white/80 text-sm">Nature Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
