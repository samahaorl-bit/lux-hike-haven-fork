import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Menu,
  Mountain,
} from "lucide-react";

import { getAirbnbUrl } from "@/lib/links";
import { seoRoutes } from "@/lib/site";

type NavItem = {
  href: string;
  label: string;
  matchPrefixes?: string[];
};

const primaryNavItems: NavItem[] = [
  { href: "/#listing", label: "Listing" },
  { href: "/#hiking", label: "Hiking" },
  { href: "/#grevenmacher", label: "Grevenmacher" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

const seoNavItems: NavItem[] = [
  {
    href: seoRoutes.nlHub,
    label: "NL Hiking",
    matchPrefixes: [
      seoRoutes.nlHub,
      seoRoutes.nlTrails,
      seoRoutes.nlWeekend,
      seoRoutes.nlMullerthal,
      seoRoutes.nlStayNearTrails,
      seoRoutes.nlFamily,
      seoRoutes.nlSeasonal,
      seoRoutes.nlBeginner,
      seoRoutes.nlRainyDay,
    ],
  },
  {
    href: seoRoutes.enHub,
    label: "EN Hiking",
    matchPrefixes: [seoRoutes.enHub, seoRoutes.enTrails],
  },
  {
    href: seoRoutes.blog,
    label: "Blog",
    matchPrefixes: [seoRoutes.blog, seoRoutes.enBlog, seoRoutes.nlBlog],
  },
  { href: "/photo-tour", label: "Photos" },
];

const activeStateScript = `
(() => {
  const normalizePath = (value) => {
    if (!value) {
      return "/";
    }

    const pathOnly = value.split("?")[0];

    if (!pathOnly) {
      return "/";
    }

    return pathOnly !== "/" && pathOnly.endsWith("/")
      ? pathOnly.slice(0, -1)
      : pathOnly;
  };

  const matchPath = (currentPath, targetPath) =>
    currentPath === targetPath || currentPath.startsWith(targetPath + "/");

  const parseMatchPrefixes = (value) => {
    if (!value) {
      return [];
    }

    return value
      .split("|")
      .map((item) => normalizePath(item))
      .filter(Boolean);
  };

  const isLinkActive = (currentPath, currentHash, href, matchPrefixes) => {
    if (!href) {
      return false;
    }

    const [pathPart, hashPart] = href.split("#");
    const targetPath = normalizePath(pathPart || "/");
    const targetHash = hashPart ? "#" + hashPart : "";

    if (targetHash) {
      return currentPath === targetPath && currentHash === targetHash;
    }

    if (matchPath(currentPath, targetPath)) {
      return true;
    }

    return matchPrefixes.some((prefix) => matchPath(currentPath, prefix));
  };

  const updateActiveLinks = () => {
    const currentPath = normalizePath(window.location.pathname);
    const currentHash = window.location.hash || "";
    const links = document.querySelectorAll("[data-nav-href]");

    links.forEach((link) => {
      if (!(link instanceof HTMLElement)) {
        return;
      }

      const href = link.dataset.navHref || "";
      const matchPrefixes = parseMatchPrefixes(link.dataset.navMatch || "");

      if (isLinkActive(currentPath, currentHash, href, matchPrefixes)) {
        link.dataset.active = "true";
      } else {
        delete link.dataset.active;
      }
    });
  };

  const closeMobileMenu = (trigger) => {
    if (!(trigger instanceof Element)) {
      return;
    }

    const menu = trigger.closest("details[data-mobile-nav]");

    if (!(menu instanceof HTMLDetailsElement)) {
      return;
    }

    menu.open = false;
  };

  const patchHistoryMethod = (methodName) => {
    const originalMethod = history[methodName];

    history[methodName] = function (...args) {
      const result = originalMethod.apply(this, args);
      queueMicrotask(updateActiveLinks);
      return result;
    };
  };

  patchHistoryMethod("pushState");
  patchHistoryMethod("replaceState");

  window.addEventListener("popstate", updateActiveLinks);
  window.addEventListener("hashchange", updateActiveLinks);
  document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const closeTrigger = target.closest("[data-nav-close-menu]");

    if (!closeTrigger) {
      const openMenus = document.querySelectorAll("details[data-mobile-nav][open]");

      openMenus.forEach((menu) => {
        if (!(menu instanceof HTMLDetailsElement)) {
          return;
        }

        if (menu.contains(target)) {
          return;
        }

        menu.open = false;
      });

      return;
    }

    closeMobileMenu(closeTrigger);
  });
  document.addEventListener("DOMContentLoaded", updateActiveLinks);
  updateActiveLinks();
})();
`;

const Navigation = () => {
  const airbnbUrl = getAirbnbUrl("navigation-bar");

  const desktopLinkClass =
    "relative inline-flex items-center px-3 py-2 text-[13px] font-semibold tracking-[0.08em] text-foreground/75 transition-colors duration-200 hover:text-foreground data-[active=true]:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 after:absolute after:-bottom-1 after:left-3 after:right-3 after:h-[2px] after:rounded-full after:bg-primary after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-60 data-[active=true]:after:opacity-100";

  const mobileLinkClass =
    "group flex w-full items-center justify-between rounded-2xl border border-border/60 bg-card/80 px-4 py-3 text-[15px] font-semibold text-foreground/90 transition-all duration-200 hover:bg-muted/70 hover:text-foreground data-[active=true]:border-primary/35 data-[active=true]:bg-primary/10 data-[active=true]:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 active:scale-[0.99]";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-gradient-to-b from-background/95 via-background/90 to-background/70 backdrop-blur-xl shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between gap-4">
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/80 shadow-soft">
              <Mountain className="h-5 w-5 text-primary" />
            </span>
            <span className="flex flex-col">
              <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
                Lux Traveler
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Grevenmacher, Luxembourg
              </span>
            </span>
          </Link>

          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                {primaryNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={desktopLinkClass}
                    data-nav-href={item.href}
                    data-nav-match={item.matchPrefixes?.join("|")}
                  >
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
              <div className="h-5 w-px bg-border/60" aria-hidden="true" />
              <div className="flex items-center gap-1">
                {seoNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={desktopLinkClass}
                    data-nav-href={item.href}
                    data-nav-match={item.matchPrefixes?.join("|")}
                  >
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:items-center">
            <Link
              href={airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-forest px-5 text-sm font-semibold text-primary-foreground shadow-[0_16px_30px_-20px_rgba(0,0,0,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_-22px_rgba(0,0,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98]"
            >
              <CalendarDays className="h-4 w-4" />
              Reserve
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <details className="group relative md:hidden" data-mobile-nav>
            <summary
              aria-label="Open navigation menu"
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-border/70 bg-card/80 text-foreground transition-colors hover:bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden"
            >
              <Menu className="h-5 w-5" />
            </summary>
            <div className="absolute right-0 top-full z-50 mt-3 w-[min(92vw,420px)] overflow-hidden rounded-3xl border border-border/70 bg-background/95 p-4 backdrop-blur-xl shadow-strong">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-border/60 bg-card/80 px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background shadow-soft">
                    <Mountain className="h-4 w-4 text-primary" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Lux Traveler</p>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      Grevenmacher
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Apartment
                </span>
              </div>
              <div className="space-y-2">
                <p className="px-1 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Explore
                </p>
                {primaryNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={mobileLinkClass}
                    data-nav-href={item.href}
                    data-nav-match={item.matchPrefixes?.join("|")}
                    data-nav-close-menu
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </Link>
                ))}
              </div>

              <div className="mt-4 space-y-2">
                <p className="px-1 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Guides
                </p>
                {seoNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={mobileLinkClass}
                    data-nav-href={item.href}
                    data-nav-match={item.matchPrefixes?.join("|")}
                    data-nav-close-menu
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </Link>
                ))}
              </div>

              <Link
                href={airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 active:scale-[0.99]"
                data-nav-close-menu
              >
                <CalendarDays className="h-4 w-4" />
                Reserve Stay
              </Link>
            </div>
          </details>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: activeStateScript,
        }}
      />
    </nav>
  );
};

export default Navigation;
