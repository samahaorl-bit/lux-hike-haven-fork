import React from "react";
import Image from "next/image";
import { getAirbnbGalleryUrl } from "@/lib/links";
import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl, seoRoutes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apartment Photo Tour in Grevenmacher",
  description:
    "Explore the full apartment photo tour before your hiking trip to Luxembourg.",
  alternates: {
    canonical: seoRoutes.photoTour,
  },
  openGraph: {
    title: "Apartment Photo Tour in Grevenmacher",
    description:
      "See all rooms and amenities before booking your hiking stay in Luxembourg.",
    url: absoluteUrl(seoRoutes.photoTour),
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1536,
        height: 1024,
        alt: "Apartment photo tour in Grevenmacher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartment Photo Tour in Grevenmacher",
    description:
      "Explore the apartment photo tour before booking your hiking stay in Luxembourg.",
    images: [siteConfig.defaultOgImage],
  },
};

type Category = { id: number; title: string; image: string };

// Direct mapping to public folder images (spaces preserved)
const categories: Category[] = [
  { id: 1, title: "Living room", image: "/Photo tour/living-room.avif" },
  { id: 2, title: "Full kitchen", image: "/Photo tour/Full kitchen.avif" },
  { id: 3, title: "Dining area", image: "/Photo tour/Dining area.avif" },
  { id: 4, title: "Bedroom 1", image: "/Photo tour/Bedroom 1.avif" },
  { id: 5, title: "Bedroom 2", image: "/Photo tour/Bedroom 2.avif" },
  { id: 6, title: "Bedroom 3", image: "/Photo tour/Bedroom 3.avif" },
  {
    id: 7,
    title: "Full bathroom 1",
    image: "/Photo tour/Full bathroom 1.avif",
  },
  {
    id: 8,
    title: "Full bathroom 2",
    image: "/Photo tour/Full bathroom 2.avif",
  },
  { id: 9, title: "Workspace", image: "/Photo tour/Workspace.avif" },
  { id: 10, title: "Laundry area", image: "/Photo tour/Laundry area.avif" },
  { id: 11, title: "Garage", image: "/Photo tour/Garage.avif" },
  { id: 12, title: "Exterior", image: "/Photo tour/Exterior.avif" },
  {
    id: 13,
    title: "Additional photos",
    image: "/Photo tour/Additional photos.avif",
  },
];

export default function PhotoTourPage() {
  const airbnbGalleryUrl = getAirbnbGalleryUrl("photo-tour-page");
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Apartment Photo Tour in Grevenmacher",
      description:
        "Explore every room and detail before booking your hiking stay in Luxembourg.",
      url: absoluteUrl(seoRoutes.photoTour),
      inLanguage: "en",
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.brandName,
        url: siteConfig.url,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl(seoRoutes.home),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Photo tour",
          item: absoluteUrl(seoRoutes.photoTour),
        },
      ],
    },
  ];

  return (
    <main
      lang="en"
      className="section-divider section-parallax-soft bg-gradient-to-b from-background via-slate-50/60 to-background"
    >
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="section-reveal mb-8">
          <h1 className="text-3xl font-semibold">Photo tour</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Explore every room and detail before you book your stay.
          </p>
        </div>

        <section className="section-reveal section-reveal-delay mb-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {categories.map((c, index) => (
              <div
                key={c.id}
                className="section-reveal group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 shadow-soft"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width:1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <span className="absolute bottom-2 left-2 right-2 text-left text-[11px] sm:text-xs font-medium text-white drop-shadow">
                  {c.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="section-reveal section-reveal-delay text-center">
          <Link
            href={airbnbGalleryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            See more photos on Airbnb
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
