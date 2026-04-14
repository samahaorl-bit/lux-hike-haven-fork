import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";

import type { BlogLocale, BlogPost } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPost;
  href: string;
  locale: BlogLocale;
  featured?: boolean;
};

const formatDate = (locale: BlogLocale, date: string) =>
  new Intl.DateTimeFormat(locale === "nl" ? "nl-NL" : "en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

export default function BlogCard({
  post,
  href,
  locale,
  featured = false,
}: BlogCardProps) {
  const tagLimit = featured ? 3 : 2;

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-2xl border border-border/70 bg-card/95 shadow-soft",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-medium",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-secondary/[0.08] opacity-70" />

      <div className={featured ? "grid md:grid-cols-[0.95fr_1.05fr] md:items-start" : ""}>
        <div
          className={
            featured
              ? "relative aspect-[4/3] md:aspect-[5/4]"
              : "relative aspect-[4/3]"
          }
        >
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt ?? post.title}
            fill
            sizes={
              featured
                ? "(max-width: 768px) 100vw, (max-width: 1280px) 56vw, 46vw"
                : "(max-width: 768px) 100vw, (max-width: 1280px) 48vw, 30vw"
            }
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute left-3 top-3 inline-flex rounded-full border border-white/35 bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
            {post.category}
          </div>
        </div>

        <div className={featured ? "relative p-5 md:p-6" : "relative p-4 md:p-5"}>
          <div className="mb-2.5 flex flex-wrap gap-2">
            {post.tags.slice(0, tagLimit).map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3
            className={[
              "font-bold leading-tight text-foreground",
              featured ? "text-xl md:text-2xl" : "text-lg md:text-xl",
            ].join(" ")}
          >
            <Link href={href} className="hover:text-primary transition-colors">
              {post.title}
            </Link>
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3 w-3" />
              {formatDate(locale, post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-3 w-3" />
              {post.readingMinutes} min
            </span>
          </div>

          <div className="mt-4">
            <Link
              href={href}
              className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
            >
              {locale === "nl" ? "Lees artikel" : "Read article"}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
