import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./providers";
import { ReactNode } from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/Footer";
import {
  absoluteUrl,
  isCanonicalProductionSite,
  seoRoutes,
  siteConfig,
} from "@/lib/site";

const shouldIndex = isCanonicalProductionSite;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0f766e",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Lux Traveler | Hiking apartment in Grevenmacher",
    template: "%s | Lux Traveler",
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.brandName }],
  keywords: [
    "wanderen in Luxembourg",
    "wandelen in Luxemburg",
    "wandelen in Luxembourg",
    "wandelen in Luxemburg vanuit Nederland",
    "wandelroutes Luxemburg",
    "hiking in Luxembourg",
    "luxembourg hiking trails",
    "hiking accommodation Luxembourg",
    "apartment Grevenmacher",
    "Luxembourg nature trails",
    "wandelweekend Luxemburg",
    "where to stay for hiking in Luxembourg",
  ],
  robots: {
    index: shouldIndex,
    follow: shouldIndex,
    googleBot: {
      index: shouldIndex,
      follow: shouldIndex,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "travel",
  alternates: {
    canonical: seoRoutes.home,
  },
  openGraph: {
    title: "Lux Traveler | Hiking apartment in Grevenmacher",
    description: siteConfig.description,
    url: absoluteUrl(seoRoutes.home),
    siteName: siteConfig.brandName,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1536,
        height: 1024,
        alt: "Apartment base for hiking holidays in Luxembourg",
      },
    ],
    locale: "nl_NL",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lux Traveler | Stay in Grevenmacher",
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl-NL">
      <head>
        <meta name="geo.region" content="LU" />
        <meta name="geo.placename" content="Grevenmacher, Luxembourg" />
        <meta name="geo.position" content="49.6805;6.4406" />
        <meta name="ICBM" content="49.6805, 6.4406" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: siteConfig.brandName,
                url: siteConfig.url,
                logo: absoluteUrl("/favicon.ico"),
              },
              {
                "@context": "https://schema.org",
                "@type": "LodgingBusiness",
                name: siteConfig.brandName,
                description:
                  "Apartment accommodation in Grevenmacher with direct access to top hiking areas in Luxembourg.",
                url: absoluteUrl(seoRoutes.home),
                image: absoluteUrl(siteConfig.defaultOgImage),
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Grevenmacher",
                  addressCountry: "LU",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "49.6805",
                  longitude: "6.4406",
                },
                areaServed: ["LU", "NL", "BE", "DE"],
                knowsLanguage: ["en", "nl", "fr", "de"],
              },
            ]),
          }}
        />
      </head>
      <body>
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
