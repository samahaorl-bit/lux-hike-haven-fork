import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogPostContent from "@/components/blog/BlogPostContent";
import {
  getBlogPost,
  getBlogPostPath,
  getBlogStaticParams,
  getTranslatedPost,
} from "@/lib/blog";
import { absoluteUrl, seoRoutes, siteConfig } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogStaticParams("en");
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost("en", slug);

  if (!post) {
    return {};
  }

  const translated = getTranslatedPost(post);
  const canonical = getBlogPostPath("en", post.slug);
  const languageAlternates: Record<string, string> = {
    en: canonical,
    "x-default": translated
      ? getBlogPostPath("nl", translated.slug)
      : canonical,
  };

  if (translated) {
    languageAlternates["nl-NL"] = getBlogPostPath("nl", translated.slug);
  }

  return {
    title: post.title,
    description: post.description,
    keywords: [post.focusKeyword, ...post.secondaryKeywords, ...post.tags],
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: absoluteUrl(canonical),
      locale: "en_US",
      alternateLocale: translated ? ["nl_NL"] : undefined,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      tags: [post.focusKeyword, ...post.tags],
      images: [
        {
          url: post.coverImage,
          width: 1536,
          height: 1024,
          alt: post.coverImageAlt ?? post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  };
}

export default async function EnglishBlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost("en", slug);

  if (!post) {
    notFound();
  }

  const translated = getTranslatedPost(post);
  const postUrl = absoluteUrl(getBlogPostPath("en", post.slug));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      inLanguage: "en",
      keywords: [post.focusKeyword, ...post.secondaryKeywords].join(", "),
      image: absoluteUrl(post.coverImage),
      url: postUrl,
      author: {
        "@type": "Organization",
        name: siteConfig.brandName,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.brandName,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/favicon.ico"),
        },
      },
      mainEntityOfPage: postUrl,
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
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: postUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    ...post.attractionSchema.map((attraction) => ({
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: attraction.name,
      description: attraction.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: attraction.locality,
        addressCountry: "LU",
      },
    })),
  ];

  return (
    <>
      <BlogPostContent post={post} locale="en" translatedPost={translated} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
