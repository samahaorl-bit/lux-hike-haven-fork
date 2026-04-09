import { NextResponse } from "next/server";

import { getAllBlogPosts, getBlogPostPath } from "@/lib/blog";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const revalidate = 3600;

const escapeXml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");

const toRfc822 = (value: string, fallback: Date): string => {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return fallback.toUTCString();
  }

  return parsed.toUTCString();
};

export async function GET() {
  const now = new Date();
  const posts = getAllBlogPosts().sort(
    (left, right) => +new Date(right.updatedAt) - +new Date(left.updatedAt)
  );
  const latestUpdate = posts[0] ? toRfc822(posts[0].updatedAt, now) : now.toUTCString();
  const feedUrl = absoluteUrl("/feed.xml");

  const itemsXml = posts
    .map((post) => {
      const postUrl = absoluteUrl(getBlogPostPath(post.locale, post.slug));
      const language = post.locale === "nl" ? "nl-NL" : "en-US";
      const title = escapeXml(post.title);
      const description = escapeXml(post.description);
      const category = escapeXml(post.category);

      return [
        "<item>",
        `<title>${title}</title>`,
        `<link>${postUrl}</link>`,
        `<guid isPermaLink=\"true\">${postUrl}</guid>`,
        `<pubDate>${toRfc822(post.publishedAt, now)}</pubDate>`,
        `<description>${description}</description>`,
        `<category>${category}</category>`,
        `<dc:language>${language}</dc:language>`,
        "</item>",
      ].join("");
    })
    .join("");

  const xml = [
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">',
    "<channel>",
    `<title>${escapeXml(siteConfig.brandName)} Blog</title>`,
    `<link>${absoluteUrl("/")}</link>`,
    `<description>${escapeXml(siteConfig.description)}</description>`,
    `<language>en</language>`,
    `<lastBuildDate>${latestUpdate}</lastBuildDate>`,
    `<atom:link href=\"${feedUrl}\" rel=\"self\" type=\"application/rss+xml\" />`,
    itemsXml,
    "</channel>",
    "</rss>",
  ].join("");

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
