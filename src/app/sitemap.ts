import type { MetadataRoute } from "next";
import { stat } from "node:fs/promises";
import { join } from "node:path";
import { getAllBlogPosts, getBlogPostPairs, getBlogPostPath } from "@/lib/blog";
import { absoluteUrl, isCanonicalProductionSite, seoRoutes } from "@/lib/site";

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

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl(seoRoutes.home),
      lastModified: routeLastModified.get(seoRoutes.home) ?? fallbackLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl(seoRoutes.enHub),
      lastModified: routeLastModified.get(seoRoutes.enHub) ?? fallbackLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enHub),
          "nl-NL": absoluteUrl(seoRoutes.nlHub),
          "x-default": absoluteUrl(seoRoutes.nlHub),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.nlHub),
      lastModified: routeLastModified.get(seoRoutes.nlHub) ?? fallbackLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enHub),
          "nl-NL": absoluteUrl(seoRoutes.nlHub),
          "x-default": absoluteUrl(seoRoutes.nlHub),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.enTrails),
      lastModified: routeLastModified.get(seoRoutes.enTrails) ?? fallbackLastModified,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enTrails),
          "nl-NL": absoluteUrl(seoRoutes.nlTrails),
          "x-default": absoluteUrl(seoRoutes.nlTrails),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.nlTrails),
      lastModified: routeLastModified.get(seoRoutes.nlTrails) ?? fallbackLastModified,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enTrails),
          "nl-NL": absoluteUrl(seoRoutes.nlTrails),
          "x-default": absoluteUrl(seoRoutes.nlTrails),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.nlWeekend),
      lastModified: routeLastModified.get(seoRoutes.nlWeekend) ?? fallbackLastModified,
      changeFrequency: "weekly",
      priority: 0.82,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enHub),
          "nl-NL": absoluteUrl(seoRoutes.nlWeekend),
          "x-default": absoluteUrl(seoRoutes.nlWeekend),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.nlMullerthal),
      lastModified: routeLastModified.get(seoRoutes.nlMullerthal) ?? fallbackLastModified,
      changeFrequency: "weekly",
      priority: 0.82,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enHub),
          "nl-NL": absoluteUrl(seoRoutes.nlMullerthal),
          "x-default": absoluteUrl(seoRoutes.nlMullerthal),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.nlStayNearTrails),
      lastModified:
        routeLastModified.get(seoRoutes.nlStayNearTrails) ?? fallbackLastModified,
      changeFrequency: "weekly",
      priority: 0.82,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enHub),
          "nl-NL": absoluteUrl(seoRoutes.nlStayNearTrails),
          "x-default": absoluteUrl(seoRoutes.nlStayNearTrails),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.nlFamily),
      lastModified: routeLastModified.get(seoRoutes.nlFamily) ?? fallbackLastModified,
      changeFrequency: "weekly",
      priority: 0.81,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enHub),
          "nl-NL": absoluteUrl(seoRoutes.nlFamily),
          "x-default": absoluteUrl(seoRoutes.nlFamily),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.nlSeasonal),
      lastModified: routeLastModified.get(seoRoutes.nlSeasonal) ?? fallbackLastModified,
      changeFrequency: "weekly",
      priority: 0.81,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enHub),
          "nl-NL": absoluteUrl(seoRoutes.nlSeasonal),
          "x-default": absoluteUrl(seoRoutes.nlSeasonal),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.nlBeginner),
      lastModified: routeLastModified.get(seoRoutes.nlBeginner) ?? fallbackLastModified,
      changeFrequency: "weekly",
      priority: 0.81,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enHub),
          "nl-NL": absoluteUrl(seoRoutes.nlBeginner),
          "x-default": absoluteUrl(seoRoutes.nlBeginner),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.nlRainyDay),
      lastModified: routeLastModified.get(seoRoutes.nlRainyDay) ?? fallbackLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enHub),
          "nl-NL": absoluteUrl(seoRoutes.nlRainyDay),
          "x-default": absoluteUrl(seoRoutes.nlRainyDay),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.photoTour),
      lastModified: routeLastModified.get(seoRoutes.photoTour) ?? fallbackLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const blogIndexPages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl(seoRoutes.enBlog),
      lastModified: latestBlogUpdate,
      changeFrequency: "weekly",
      priority: 0.86,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enBlog),
          "nl-NL": absoluteUrl(seoRoutes.nlBlog),
          "x-default": absoluteUrl(seoRoutes.nlBlog),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.nlBlog),
      lastModified: latestBlogUpdate,
      changeFrequency: "weekly",
      priority: 0.89,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enBlog),
          "nl-NL": absoluteUrl(seoRoutes.nlBlog),
          "x-default": absoluteUrl(seoRoutes.nlBlog),
        },
      },
    },
  ];

  const blogPosts: MetadataRoute.Sitemap = getBlogPostPairs().flatMap((pair) => {
    const enUrl = absoluteUrl(getBlogPostPath("en", pair.en.slug));
    const nlUrl = absoluteUrl(getBlogPostPath("nl", pair.nl.slug));

    return [
      {
        url: enUrl,
        lastModified: new Date(pair.en.updatedAt),
        changeFrequency: "weekly",
        priority: 0.82,
        alternates: {
          languages: {
            en: enUrl,
            "nl-NL": nlUrl,
            "x-default": nlUrl,
          },
        },
      },
      {
        url: nlUrl,
        lastModified: new Date(pair.nl.updatedAt),
        changeFrequency: "weekly",
        priority: 0.84,
        alternates: {
          languages: {
            en: enUrl,
            "nl-NL": nlUrl,
            "x-default": nlUrl,
          },
        },
      },
    ];
  });

  return [...staticPages, ...blogIndexPages, ...blogPosts];
}
