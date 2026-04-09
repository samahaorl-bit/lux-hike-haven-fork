import Link from "next/link";
import { Compass, Mountain } from "lucide-react";
import { seoRoutes } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-gradient-to-b from-background via-slate-50/60 to-background pt-28 pb-16">
      <section className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="section-reveal rounded-3xl border border-border/70 bg-card/90 p-8 text-center shadow-soft md:p-10">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-border/70 bg-background">
            <Mountain className="h-6 w-6 text-primary" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            404
          </p>
          <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            This trail does not exist
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            The page you requested could not be found. Use one of the routes
            below to continue planning your hiking stay in Luxembourg.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={seoRoutes.home}
              className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Back to Home
            </Link>
            <Link
              href={seoRoutes.nlHub}
              className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Dutch Hiking Guide
            </Link>
            <Link
              href={seoRoutes.enHub}
              className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              English Hiking Guide
            </Link>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <Compass className="h-3.5 w-3.5 text-primary" />
            Need route ideas? Visit the blog
            <Link href={seoRoutes.blog} className="text-primary hover:text-primary-hover">
              here
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}