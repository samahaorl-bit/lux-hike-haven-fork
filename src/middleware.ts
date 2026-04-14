import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function safeDecode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function isMalformedSitemapPath(pathname: string): boolean {
  const normalizedPath = pathname.toLowerCase();
  const decodedPath = safeDecode(normalizedPath);

  if (!normalizedPath.includes("sitemap.xml") && !decodedPath.includes("sitemap.xml")) {
    return false;
  }

  const badPrefixes = ["/http:/", "/https:/", "/http://", "/https://"];
  return badPrefixes.some(
    (prefix) => normalizedPath.startsWith(prefix) || decodedPath.startsWith(prefix)
  );
}

export function middleware(request: NextRequest) {
  if (!isMalformedSitemapPath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const canonicalUrl = request.nextUrl.clone();
  canonicalUrl.pathname = "/sitemap.xml";
  canonicalUrl.search = "";

  // Keep a permanent redirect so crawlers consolidate this bad path to the canonical sitemap.
  return NextResponse.redirect(canonicalUrl, 308);
}
