import type { MetadataRoute } from "next";
import { stat } from "node:fs/promises";
import { join } from "node:path";
import { absoluteUrl, seoRoutes } from "@/lib/site";

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

const routeAlternates: Record<string, Record<string, string>> = {
  [seoRoutes.home]: {
    en: seoRoutes.enHub,
    "nl-NL": seoRoutes.nlHub,
    "x-default": seoRoutes.home,
  },
  [seoRoutes.enHub]: {
    en: seoRoutes.enHub,
    "nl-NL": seoRoutes.nlHub,
    "x-default": seoRoutes.nlHub,
  },
  [seoRoutes.nlHub]: {
    "nl-NL": seoRoutes.nlHub,
    en: seoRoutes.enHub,
    "x-default": seoRoutes.nlHub,
  },
  [seoRoutes.enTrails]: {
    en: seoRoutes.enTrails,
    "nl-NL": seoRoutes.nlTrails,
    "x-default": seoRoutes.nlTrails,
  },
  [seoRoutes.nlTrails]: {
    "nl-NL": seoRoutes.nlTrails,
    en: seoRoutes.enTrails,
    "x-default": seoRoutes.nlTrails,
  },
  [seoRoutes.enBlog]: {
    en: seoRoutes.enBlog,
    "nl-NL": seoRoutes.nlBlog,
    "x-default": seoRoutes.nlBlog,
  },
  [seoRoutes.nlBlog]: {
    "nl-NL": seoRoutes.nlBlog,
    en: seoRoutes.enBlog,
    "x-default": seoRoutes.nlBlog,
  },
};

const fallbackLastModified = new Date();

type SitemapBlogPost = {
  translationKey: string;
  locale: "en" | "nl";
  slug: string;
  publishedAt: string;
  updatedAt: string;
};

type SitemapLanguageAlternates = Record<string, string>;

type BlogTranslationEntry = {
  en?: SitemapBlogPost;
  nl?: SitemapBlogPost;
};

type BlogSitemapModule = {
  getAllBlogPosts: () => SitemapBlogPost[];
  getBlogPosts: (locale: "en" | "nl") => SitemapBlogPost[];
  getBlogPostPath: (locale: "en" | "nl", slug: string) => string;
};

async function loadBlogSitemapModule(): Promise<BlogSitemapModule | null> {
  try {
    return (await import("@/lib/blog")) as BlogSitemapModule;
  } catch (error) {
    console.error("Sitemap fallback: failed to load blog module.", error);
    return null;
  }
}

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

function getLatestBlogUpdatedAt(posts: SitemapBlogPost[]): Date {
  const timestamps = posts
    .map((post) => new Date(post.updatedAt).getTime())
    .filter((time) => Number.isFinite(time));

  if (timestamps.length === 0) {
    return fallbackLastModified;
  }

  return new Date(Math.max(...timestamps));
}

function getLatestBlogUpdatedAtByLocale(posts: SitemapBlogPost[], locale: "en" | "nl"): Date {
  const timestamps = posts
    .filter((post) => post.locale === locale)
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

function toAbsoluteAlternates(
  alternates?: SitemapLanguageAlternates
): SitemapLanguageAlternates | undefined {
  if (!alternates) {
    return undefined;
  }

  return Object.fromEntries(
    Object.entries(alternates).map(([locale, path]) => [locale, absoluteUrl(path)])
  );
}

function createBlogTranslationMap(posts: SitemapBlogPost[]): Map<string, BlogTranslationEntry> {
  const byTranslationKey = new Map<string, BlogTranslationEntry>();

  for (const post of posts) {
    const existing = byTranslationKey.get(post.translationKey) ?? {};
    existing[post.locale] = post;
    byTranslationKey.set(post.translationKey, existing);
  }

  return byTranslationKey;
}

function getBlogPostPath(
  blogModule: BlogSitemapModule | null,
  locale: "en" | "nl",
  slug: string
): string {
  return blogModule?.getBlogPostPath(locale, slug) ?? `/${locale}/blog/${slug}`;
}

function getBlogAlternates(
  post: SitemapBlogPost,
  blogModule: BlogSitemapModule | null,
  blogTranslations: Map<string, BlogTranslationEntry>
): SitemapLanguageAlternates {
  const canonical = getBlogPostPath(blogModule, post.locale, post.slug);
  const translationPair = blogTranslations.get(post.translationKey);

  if (post.locale === "en") {
    const dutchPath = translationPair?.nl
      ? getBlogPostPath(blogModule, "nl", translationPair.nl.slug)
      : undefined;
    const alternates: SitemapLanguageAlternates = {
      en: canonical,
      "x-default": dutchPath ?? canonical,
    };

    if (dutchPath) {
      alternates["nl-NL"] = dutchPath;
    }

    return alternates;
  }

  const englishPath = translationPair?.en
    ? getBlogPostPath(blogModule, "en", translationPair.en.slug)
    : undefined;
  const alternates: SitemapLanguageAlternates = {
    "nl-NL": canonical,
    "x-default": canonical,
  };

  if (englishPath) {
    alternates.en = englishPath;
  }

  return alternates;
}

function createPageEntry(
  route: string,
  routeLastModified: Map<string, Date>,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly",
  alternates?: SitemapLanguageAlternates
): MetadataRoute.Sitemap[number] {
  const absoluteAlternates = toAbsoluteAlternates(alternates);

  return {
    url: absoluteUrl(route),
    lastModified: routeLastModified.get(route) ?? fallbackLastModified,
    changeFrequency,
    priority,
    ...(absoluteAlternates
      ? {
          alternates: {
            languages: absoluteAlternates,
          },
        }
      : {}),
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogModule = await loadBlogSitemapModule();
  const allBlogPosts = blogModule?.getAllBlogPosts() ?? [];

  const routeLastModifiedEntries = await Promise.all(
    Object.entries(routeSourceFiles).map(async ([route, files]) => {
      const lastModified = await getLatestFileModifiedDate(files);
      return [route, lastModified] as const;
    })
  );

  const routeLastModified = new Map(routeLastModifiedEntries);
  const latestBlogUpdate = getLatestBlogUpdatedAt(allBlogPosts);
  const latestEnBlogUpdate = getLatestBlogUpdatedAtByLocale(allBlogPosts, "en");
  const latestNlBlogUpdate = getLatestBlogUpdatedAtByLocale(allBlogPosts, "nl");
  const blogTranslations = createBlogTranslationMap(allBlogPosts);

  const staticPages: MetadataRoute.Sitemap = [
    createPageEntry(seoRoutes.home, routeLastModified, 1, "weekly", routeAlternates[seoRoutes.home]),
    createPageEntry(
      seoRoutes.enHub,
      routeLastModified,
      0.9,
      "weekly",
      routeAlternates[seoRoutes.enHub]
    ),
    createPageEntry(
      seoRoutes.nlHub,
      routeLastModified,
      0.9,
      "weekly",
      routeAlternates[seoRoutes.nlHub]
    ),
    createPageEntry(
      seoRoutes.enTrails,
      routeLastModified,
      0.85,
      "weekly",
      routeAlternates[seoRoutes.enTrails]
    ),
    createPageEntry(
      seoRoutes.nlTrails,
      routeLastModified,
      0.85,
      "weekly",
      routeAlternates[seoRoutes.nlTrails]
    ),
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
      alternates: {
        languages: toAbsoluteAlternates(routeAlternates[seoRoutes.enBlog]),
      },
    },
    {
      url: absoluteUrl(seoRoutes.nlBlog),
      lastModified: latestNlBlogUpdate,
      changeFrequency: "weekly",
      priority: 0.89,
      alternates: {
        languages: toAbsoluteAlternates(routeAlternates[seoRoutes.nlBlog]),
      },
    },
  ];

  const seenBlogUrls = new Set<string>();
  const blogPosts: MetadataRoute.Sitemap = allBlogPosts
    .map((post) => {
      const blogPath = getBlogPostPath(blogModule, post.locale, post.slug);
      const url = absoluteUrl(blogPath);
      const publishedAt = getSafeDate(post.publishedAt, latestBlogUpdate);
      const updatedAt = getSafeDate(post.updatedAt, publishedAt);
      const alternates = toAbsoluteAlternates(
        getBlogAlternates(post, blogModule, blogTranslations)
      );

      return {
        url,
        lastModified: updatedAt,
        changeFrequency: "weekly" as const,
        priority: post.locale === "nl" ? 0.84 : 0.82,
        alternates: {
          languages: alternates,
        },
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
