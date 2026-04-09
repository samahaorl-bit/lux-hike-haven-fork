import { NextResponse } from "next/server";

import { absoluteUrl, isCanonicalProductionSite, siteConfig } from "@/lib/site";

export const revalidate = 3600;

function buildRobotsContent(): string {
  const host = new URL(siteConfig.url).host;
  const sitemap = absoluteUrl("/sitemap.xml");

  if (!isCanonicalProductionSite) {
    return [
      "User-Agent: *",
      "Disallow: /",
      "",
      `Host: ${host}`,
      `Sitemap: ${sitemap}`,
      "",
    ].join("\n");
  }

  return [
    "User-Agent: *",
    "Allow: /",
    "",
    "User-Agent: Googlebot",
    "User-Agent: Bingbot",
    "User-Agent: DuckDuckBot",
    "User-Agent: Applebot",
    "Allow: /",
    "",
    `Host: ${host}`,
    `Sitemap: ${sitemap}`,
    "",
  ].join("\n");
}

export async function GET() {
  return new NextResponse(buildRobotsContent(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
