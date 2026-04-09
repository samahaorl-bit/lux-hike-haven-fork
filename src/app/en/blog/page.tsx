import type { Metadata } from "next";

import BlogIndexContent from "@/components/blog/BlogIndexContent";
import { getBlogPostPath, getBlogPosts } from "@/lib/blog";
import { absoluteUrl, seoRoutes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hiking in Luxembourg Blog | Guides for Dutch Tourists",
  description:
    "Bilingual hiking blog with route strategy, dog-friendly trail tips, and weekend planning for Dutch tourists visiting Luxembourg.",
  keywords: [
    "hiking in Luxembourg",
    "wanderen in Luxembourg",
    "Luxembourg hiking blog",
    "Mullerthal Trail tips",
    "hiking weekend from Holland",
  ],
  alternates: {
    canonical: seoRoutes.enBlog,
    languages: {
      en: seoRoutes.enBlog,
      "nl-NL": seoRoutes.nlBlog,
      "x-default": seoRoutes.nlBlog,
    },
  },
  openGraph: {
    title: "Hiking in Luxembourg Blog | Guides for Dutch Tourists",
    description:
      "Actionable trail guides and trip planning for Dutch visitors searching for hiking in Luxembourg.",
    url: absoluteUrl(seoRoutes.enBlog),
    locale: "en_US",
    alternateLocale: ["nl_NL"],
    type: "website",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1536,
        height: 1024,
        alt: "Hiking blog for Luxembourg travel planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiking in Luxembourg Blog | Dutch traveler strategy",
    description:
      "Guides built for Dutch tourist search intent, from route planning to where to stay.",
    images: [siteConfig.defaultOgImage],
  },
};

export default function EnglishBlogIndexPage() {
  const posts = getBlogPosts("en");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Hiking in Luxembourg Blog",
      description:
        "Bilingual hiking strategy blog for Dutch tourists planning trail trips in Luxembourg.",
      url: absoluteUrl(seoRoutes.enBlog),
      inLanguage: "en",
      publisher: {
        "@type": "Organization",
        name: siteConfig.brandName,
        url: siteConfig.url,
      },
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: absoluteUrl(getBlogPostPath("en", post.slug)),
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        inLanguage: "en",
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
          item: absoluteUrl(seoRoutes.enBlog),
        },
      ],
    },
  ];

  return (
    <>
      <BlogIndexContent locale="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
