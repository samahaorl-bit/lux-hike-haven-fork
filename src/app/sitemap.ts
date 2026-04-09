import type { MetadataRoute } from "next";
import { stat } from "node:fs/promises";
import { join } from "node:path";
import { getAllBlogPosts, getBlogPostPath, getBlogPosts } from "@/lib/blog";
import { absoluteUrl, isCanonicalProductionSite, seoRoutes } from "@/lib/site";

export const revalidate = 3600;

const routeSourceFiles: Record<string, string[]> = {
  [seoRoutes.home]: ["src/app/page.tsx"],
  [seoRoutes.enHub]: ["src/app/en/hiking-in-luxembourg/page.tsx"],
  [seoRoutes.nlHub]: ["src/app/nl/wandelen-in-luxemburg/page.tsx"],
  [seoRoutes.enTrails]: ["src/app/en/luxembourg-hiking-trails/page.tsx"],
  [seoRoutes.nlTrails]: ["src/app/nl/wandelroutes-luxemburg/page.tsx"],
  [seoRoutes.nlWeekend]: ["src/app/nl/wandelweekend-luxemburg/page.tsx"],
  [seoRoutes.nlMullerthal]: ["src/app/nl/mullerthal-wandeling/page.tsx"],
  [seoRoutes.nlStayNearTrails]: [
    "src/app/nl/overnachten-bij-wandelroutes-luxemburg/page.tsx",
  ],
  [seoRoutes.nlFamily]: ["src/app/nl/wandelen-met-kinderen-luxemburg/page.tsx"],
  [seoRoutes.nlSeasonal]: ["src/app/nl/seizoenswandelroutes-luxemburg/page.tsx"],
  [seoRoutes.nlBeginner]: ["src/app/nl/beginners-wandelroutes-luxemburg/page.tsx"],
  [seoRoutes.nlRainyDay]: ["src/app/nl/regenachtige-dag-luxemburg/page.tsx"],
  [seoRoutes.photoTour]: ["src/app/photo-tour/page.tsx"],
};

const fallbackLastModified = new Date();

async function getLatestFileModifiedDate(files: string[]): Promise<Date> {
  const mtimes = await Promise.all(
    files.map(async (file) => {
      try {
        const fileStat = await stat(join(process.cwd(), file));
        return fileStat.mtime;
      } catch {
        return undefined;
      }
    })
  );

  const validTimes = mtimes
    .filter((time): time is Date => Boolean(time))
    .map((time) => time.getTime());

  if (validTimes.length === 0) {
    return fallbackLastModified;
  }

  return new Date(Math.max(...validTimes));
}

function getLatestBlogUpdatedAt(): Date {
  const timestamps = getAllBlogPosts().map((post) => new Date(post.updatedAt).getTime());

  if (timestamps.length === 0) {
    return fallbackLastModified;
  }

  return new Date(Math.max(...timestamps));
}

function getLatestBlogUpdatedAtByLocale(locale: "en" | "nl"): Date {
  const timestamps = getBlogPosts(locale)
    .map((post) => new Date(post.updatedAt).getTime())
    .filter((time) => Number.isFinite(time));

  if (timestamps.length === 0) {
    return fallbackLastModified;
  }

  return new Date(Math.max(...timestamps));
}

function getSafeDate(value: string | Date | undefined, fallback: Date): Date {
  if (!value) {
    return fallback;
  }

  const parsed = value instanceof Date ? value : new Date(value);
  return Number.isNaN(parsed.getTime()) ? fallback : parsed;
}

function createPageEntry(
  route: string,
  routeLastModified: Map<string, Date>,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly"
): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(route),
    lastModified: routeLastModified.get(route) ?? fallbackLastModified,
    changeFrequency,
    priority,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!isCanonicalProductionSite) {
    return [];
  }

  const routeLastModifiedEntries = await Promise.all(
    Object.entries(routeSourceFiles).map(async ([route, files]) => {
      const lastModified = await getLatestFileModifiedDate(files);
      return [route, lastModified] as const;
    })
  );

  const routeLastModified = new Map(routeLastModifiedEntries);
  const latestBlogUpdate = getLatestBlogUpdatedAt();
  const latestEnBlogUpdate = getLatestBlogUpdatedAtByLocale("en");
  const latestNlBlogUpdate = getLatestBlogUpdatedAtByLocale("nl");

  const staticPages: MetadataRoute.Sitemap = [
    createPageEntry(seoRoutes.home, routeLastModified, 1),
    createPageEntry(seoRoutes.enHub, routeLastModified, 0.9),
    createPageEntry(seoRoutes.nlHub, routeLastModified, 0.9),
    createPageEntry(seoRoutes.enTrails, routeLastModified, 0.85),
    createPageEntry(seoRoutes.nlTrails, routeLastModified, 0.85),
    createPageEntry(seoRoutes.nlWeekend, routeLastModified, 0.82),
    createPageEntry(seoRoutes.nlMullerthal, routeLastModified, 0.82),
    createPageEntry(seoRoutes.nlStayNearTrails, routeLastModified, 0.82),
    createPageEntry(seoRoutes.nlFamily, routeLastModified, 0.81),
    createPageEntry(seoRoutes.nlSeasonal, routeLastModified, 0.81),
    createPageEntry(seoRoutes.nlBeginner, routeLastModified, 0.81),
    createPageEntry(seoRoutes.nlRainyDay, routeLastModified, 0.8),
    createPageEntry(seoRoutes.photoTour, routeLastModified, 0.7, "monthly"),
  ];

  const blogIndexPages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl(seoRoutes.enBlog),
      lastModified: latestEnBlogUpdate,
      changeFrequency: "weekly",
      priority: 0.86,
    },
    {
      url: absoluteUrl(seoRoutes.nlBlog),
      lastModified: latestNlBlogUpdate,
      changeFrequency: "weekly",
      priority: 0.89,
    },
  ];

  const seenBlogUrls = new Set<string>();
  const blogPosts: MetadataRoute.Sitemap = getAllBlogPosts()
    .map((post) => {
      const url = absoluteUrl(getBlogPostPath(post.locale, post.slug));
      const publishedAt = getSafeDate(post.publishedAt, latestBlogUpdate);
      const updatedAt = getSafeDate(post.updatedAt, publishedAt);

      return {
        url,
        lastModified: updatedAt,
        changeFrequency: "weekly" as const,
        priority: post.locale === "nl" ? 0.84 : 0.82,
      };
    })
    .filter((entry) => {
      if (seenBlogUrls.has(entry.url)) {
        return false;
      }

      seenBlogUrls.add(entry.url);
      return true;
    });

  return [...staticPages, ...blogIndexPages, ...blogPosts];
}
