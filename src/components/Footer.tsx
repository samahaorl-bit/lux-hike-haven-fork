"use client";

import { Heart, Mountain } from "lucide-react";
import Link from "next/link";
import { getAirbnbUrl } from "@/lib/links";

const Footer = () => {
  const airbnbUrl = getAirbnbUrl("footer");
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-6 w-6" />
              <Link href="/">
                <h3 className="text-xl font-bold">Luxembourg Hiking Haven</h3>
              </Link>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Your perfect base for exploring the natural wonders of Luxembourg.
              Comfortable accommodation meets hiking adventure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <div className="space-y-2 text-sm">
              <button
                onClick={() =>
                  document
                    .getElementById("hiking")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Hiking Guide
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("listing")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Our Apartment
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Booking */}
          <div>
            <h4 className="font-semibold mb-4">Book Your Stay</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Ready to experience Luxembourg's hiking trails? Book directly
              through Airbnb for the best rates and instant confirmation.
            </p>
            <button
              onClick={() => window.open(airbnbUrl, "_blank")}
              className="bg-primary-foreground text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              View on Airbnb
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-primary-foreground/60 text-sm">
            © 2024 Luxembourg Hiking Haven. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-primary-foreground/60 text-sm mt-4 sm:mt-0">
            Made with <Heart className="h-4 w-4 fill-current text-accent" /> for
            hiking enthusiasts
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
