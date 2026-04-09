import type { Metadata } from "next";

import BlogIndexContent from "@/components/blog/BlogIndexContent";
import { getBlogPostPath, getBlogPosts } from "@/lib/blog";
import { absoluteUrl, seoRoutes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wandelen in Luxemburg Blog | Gidsen voor Nederlandse toeristen",
  description:
    "Nederlandstalige blog voor toeristen uit Holland die zoeken op 'wanderen in Luxembourg' met routegidsen, hondvriendelijke tips en weekendplanning.",
  keywords: [
    "wandelen in Luxemburg",
    "wanderen in Luxembourg",
    "wandelvakantie Luxemburg",
    "hondvriendelijke wandelroutes Luxemburg",
    "Mullerthal tips",
  ],
  alternates: {
    canonical: seoRoutes.nlBlog,
    languages: {
      "nl-NL": seoRoutes.nlBlog,
      en: seoRoutes.enBlog,
      "x-default": seoRoutes.nlBlog,
    },
  },
  openGraph: {
    title: "Wandelen in Luxemburg Blog | Voor Nederlandse toeristen",
    description:
      "SEO-gedreven wandelblog met routes, logistiek en verblijfstips voor Nederlandse bezoekers.",
    url: absoluteUrl(seoRoutes.nlBlog),
    locale: "nl_NL",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1536,
        height: 1024,
        alt: "Wandelen in Luxemburg blog voor Nederlandse toeristen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wandelen in Luxemburg Blog | Voor Nederlandse toeristen",
    description:
      "Blogartikelen over routes, planning en verblijf voor jouw wandeltrip naar Luxemburg.",
    images: [siteConfig.defaultOgImage],
  },
};

export default function DutchBlogIndexPage() {
  const posts = getBlogPosts("nl");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Wandelen in Luxemburg Blog",
      description:
        "Nederlandse wandelblog voor toeristen die Luxemburg actief willen ontdekken.",
      url: absoluteUrl(seoRoutes.nlBlog),
      inLanguage: "nl-NL",
      publisher: {
        "@type": "Organization",
        name: siteConfig.brandName,
        url: siteConfig.url,
      },
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: absoluteUrl(getBlogPostPath("nl", post.slug)),
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        inLanguage: "nl-NL",
      })),
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
          name: "Blog",
          item: absoluteUrl(seoRoutes.nlBlog),
        },
      ],
    },
  ];

  return (
    <>
      <BlogIndexContent locale="nl" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
