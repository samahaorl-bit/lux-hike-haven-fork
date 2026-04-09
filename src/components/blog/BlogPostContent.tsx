import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3, Globe2 } from "lucide-react";

import {
  getBlogIndexPath,
  getBlogPostPath,
  getRelatedBlogPosts,
  type BlogLocale,
  type BlogPost,
} from "@/lib/blog";
import { getAirbnbUrl } from "@/lib/links";
import { seoRoutes } from "@/lib/site";

type BlogPostContentProps = {
  post: BlogPost;
  locale: BlogLocale;
  translatedPost?: BlogPost;
};

const formatDate = (locale: BlogLocale, date: string) =>
  new Intl.DateTimeFormat(locale === "nl" ? "nl-NL" : "en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const createSectionAnchors = (sections: BlogPost["sections"]) => {
  const usedIds = new Map<string, number>();

  return sections.map((section, index) => {
    const normalized = section.title
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    const baseId = normalized || `section-${index + 1}`;
    const currentCount = usedIds.get(baseId) ?? 0;
    usedIds.set(baseId, currentCount + 1);

    return {
      ...section,
      id: currentCount === 0 ? baseId : `${baseId}-${currentCount + 1}`,
    };
  });
};

export default function BlogPostContent({
  post,
  locale,
  translatedPost,
}: BlogPostContentProps) {
  const relatedPosts = getRelatedBlogPosts(post, 3);
  const sectionAnchors = createSectionAnchors(post.sections);

  const bookingUrl = getAirbnbUrl(`${locale}-blog-post`, post.slug);
  const showUpdatedDate =
    new Date(post.updatedAt).getTime() > new Date(post.publishedAt).getTime();

  return (
    <main lang={locale === "nl" ? "nl-NL" : "en"} className="bg-background pt-24 pb-16">
      <section className="section-parallax-soft relative overflow-hidden border-b border-border/70 bg-gradient-to-br from-background via-emerald-50/70 to-sky-50/80">
        <div className="pointer-events-none absolute -left-24 top-2 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />

        <div className="section-reveal container relative mx-auto px-4 pb-14 pt-10 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-muted-foreground">
            <Link href={seoRoutes.home} className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href={getBlogIndexPath(locale)} className="hover:text-primary">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span>{post.title}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.95fr]">
            <article>
              <p className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
                {post.category}
              </p>

              <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
                {post.title}
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {locale === "nl" ? "Gepubliceerd" : "Published"}: {formatDate(locale, post.publishedAt)}
                </span>
                {showUpdatedDate && (
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4" />
                    {locale === "nl" ? "Bijgewerkt" : "Updated"}: {formatDate(locale, post.updatedAt)}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <Globe2 className="h-4 w-4" />
                  {locale === "nl" ? "Nederlandse SEO focus" : "Dutch-intent SEO focus"}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4" />
                  {post.readingMinutes} min
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-full border border-border/70 bg-card px-3 py-1 text-xs font-semibold text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={getBlogIndexPath(locale)}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/25 hover:text-primary"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {locale === "nl" ? "Terug naar blog" : "Back to blog"}
                </Link>
                {translatedPost && (
                  <Link
                    href={getBlogPostPath(translatedPost.locale, translatedPost.slug)}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {locale === "nl" ? "Read in English" : "Lees in het Nederlands"}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </article>

            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border/70 shadow-soft lg:aspect-[5/4]">
              <Image
                src={post.coverImage}
                alt={post.coverImageAlt ?? post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider section-parallax-soft section-reveal container mx-auto grid gap-8 px-4 pt-12 sm:px-6 lg:grid-cols-[1.35fr_0.85fr] lg:px-8">
        <article className="section-reveal space-y-8">
          {sectionAnchors.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="section-reveal rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">{section.title}</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${section.id}-p-${paragraphIndex}`}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-5 space-y-2 text-sm text-foreground">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={`${section.id}-b-${bulletIndex}`} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="section-reveal rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              {locale === "nl" ? "Veelgestelde vragen" : "Frequently asked questions"}
            </h2>
            <div className="mt-5 space-y-3">
              {post.faq.map((item) => (
                <details key={item.question} className="rounded-2xl border border-border/70 bg-background px-5 py-4">
                  <summary className="cursor-pointer text-sm font-semibold text-foreground md:text-base">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </article>

        <aside className="section-reveal section-reveal-delay space-y-6">
          <section className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-lg font-bold text-foreground">
              {locale === "nl" ? "In dit artikel" : "In this article"}
            </h2>
            <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
              {sectionAnchors.map((section, index) => (
                <li key={`toc-${section.id}`}>
                  <Link
                    href={`#${section.id}`}
                    className="inline-flex items-start gap-2 transition-colors hover:text-primary"
                  >
                    <span className="font-semibold text-foreground">{index + 1}.</span>
                    <span>{section.title}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>

          <section className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-lg font-bold text-foreground">
              {locale === "nl" ? "Quick SEO focus" : "Quick SEO focus"}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {locale === "nl"
                ? "Deze pagina is geoptimaliseerd voor Nederlandse zoekintentie rondom wandelen in Luxemburg."
                : "This page is optimized for Dutch traveler search intent around hiking in Luxembourg."}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {post.focusKeyword}
              </span>
              {post.secondaryKeywords.slice(0, 2).map((keyword) => (
                <span
                  key={keyword}
                  className="inline-flex rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-semibold text-muted-foreground"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-lg font-bold text-foreground">
              {locale === "nl" ? "Route highlights" : "Route highlights"}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {post.routeHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-lg font-bold text-foreground">
              {locale === "nl" ? "Logistiek essentials" : "Logistics essentials"}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {post.logisticsHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-lg font-bold text-foreground">
              {locale === "nl" ? "Boek je centrale uitvalsbasis" : "Book your central stay"}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {locale === "nl"
                ? "Verblijf in Grevenmacher voor snelle toegang tot meerdere wandelregio's."
                : "Stay in Grevenmacher for efficient access to multiple hiking regions."}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                {locale === "nl" ? "Check beschikbaarheid" : "Check availability"}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href={locale === "nl" ? seoRoutes.nlHub : seoRoutes.enHub}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                {locale === "nl" ? "Naar hiking hub" : "Go to hiking hub"}
              </Link>
            </div>
          </section>
        </aside>
      </section>

      {relatedPosts.length > 0 && (
        <section className="section-divider section-parallax-soft section-reveal container mx-auto px-4 pt-12 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
            <h2 className="text-2xl font-bold text-foreground">
              {locale === "nl" ? "Gerelateerde artikelen" : "Related articles"}
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {relatedPosts.map((related, index) => (
                <Link
                  key={related.slug}
                  href={getBlogPostPath(locale, related.slug)}
                  className="section-reveal group rounded-2xl border border-border/70 bg-background p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="relative mb-3 aspect-[16/9] overflow-hidden rounded-xl border border-border/60">
                    <Image
                      src={related.coverImage}
                      alt={related.coverImageAlt ?? related.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{related.category}</p>
                  <h3 className="mt-2 text-base font-bold leading-snug text-foreground group-hover:text-primary">
                    {related.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{related.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
