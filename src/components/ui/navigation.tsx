"use client";

import type { ComponentType } from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  BookOpenText,
  CalendarDays,
  Camera,
  Globe2,
  Images,
  Info,
  Mail,
  MapPin,
  Menu,
  Mountain,
  X,
} from "lucide-react";

import { getAirbnbUrl } from "@/lib/links";
import { seoRoutes } from "@/lib/site";
import { cn } from "@/lib/utils";

import { Button } from "./button";

type NavItem = {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  isSectionLink?: boolean;
};

const primaryNavItems: NavItem[] = [
  { href: "/#listing", label: "Listing", icon: Camera, isSectionLink: true },
  { href: "/#hiking", label: "Hiking", icon: Mountain, isSectionLink: true },
  {
    href: "/#grevenmacher",
    label: "Grevenmacher",
    icon: MapPin,
    isSectionLink: true,
  },
  { href: "/#about", label: "About", icon: Info, isSectionLink: true },
  { href: "/#contact", label: "Contact", icon: Mail, isSectionLink: true },
];

const seoNavItems: NavItem[] = [
  { href: seoRoutes.nlHub, label: "NL Hiking", icon: Globe2 },
  { href: seoRoutes.enHub, label: "EN Hiking", icon: Globe2 },
  { href: seoRoutes.blog, label: "Blog", icon: BookOpenText },
  { href: "/photo-tour", label: "Photos", icon: Images },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const airbnbUrl = getAirbnbUrl("navigation-bar");
  const pathname = usePathname();

  const isNavItemActive = (item: NavItem) => {
    if (item.isSectionLink) {
      return false;
    }

    if (item.href === seoRoutes.nlHub) {
      return pathname.startsWith("/nl") && !pathname.startsWith(seoRoutes.nlBlog);
    }

    if (item.href === seoRoutes.enHub) {
      return pathname.startsWith("/en") && !pathname.startsWith(seoRoutes.enBlog);
    }

    if (item.href === seoRoutes.blog) {
      return (
        pathname === seoRoutes.blog ||
        pathname.startsWith(seoRoutes.enBlog) ||
        pathname.startsWith(seoRoutes.nlBlog)
      );
    }

    return pathname === item.href;
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const desktopLinkClass = (isActive: boolean) =>
    cn(
      "relative inline-flex items-center px-3 py-2 text-[13px] font-semibold tracking-[0.08em] transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
      "after:absolute after:-bottom-1 after:left-3 after:right-3 after:h-[2px] after:rounded-full after:bg-primary after:transition-opacity after:duration-200",
      isActive
        ? "text-foreground after:opacity-100"
        : "text-foreground/70 hover:text-foreground after:opacity-0 hover:after:opacity-60"
    );

  const mobileLinkClass = (isActive: boolean) =>
    cn(
      "group flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-[15px] font-semibold transition-all duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2",
      "active:scale-[0.99]",
      isActive
        ? "border-primary/30 bg-primary/10 text-primary shadow-soft"
        : "border-border/60 bg-card/80 text-foreground/90 hover:bg-muted/70 hover:text-foreground"
    );

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
                {primaryNavItems.map((item) => {
                  const isActive = isNavItemActive(item);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={desktopLinkClass(isActive)}
                    >
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
              <div className="h-5 w-px bg-border/60" aria-hidden="true" />
              <div className="flex items-center gap-1">
                {seoNavItems.map((item) => {
                  const isActive = isNavItemActive(item);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={desktopLinkClass(isActive)}
                    >
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:items-center">
            <button
              onClick={() => window.open(airbnbUrl, "_blank")}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-forest px-5 text-sm font-semibold text-primary-foreground shadow-[0_16px_30px_-20px_rgba(0,0,0,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_-22px_rgba(0,0,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98]"
            >
              <CalendarDays className="h-4 w-4" />
              Reserve
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="h-11 w-11 rounded-full border border-border/70 bg-card/80 text-foreground hover:bg-muted/70 focus-visible:ring-primary/45 active:scale-[0.98]"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="overflow-hidden rounded-3xl border border-border/70 bg-background/95 p-4 backdrop-blur-xl shadow-strong">
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
                {primaryNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = isNavItemActive(item);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={mobileLinkClass(isActive)}
                      onClick={handleNavClick}
                    >
                      <span className="inline-flex items-center gap-3">
                        <span className="rounded-xl bg-muted/70 p-2 text-primary transition-colors duration-200 group-hover:bg-primary/12">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>{item.label}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 space-y-2">
                <p className="px-1 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Guides
                </p>
                {seoNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = isNavItemActive(item);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={mobileLinkClass(isActive)}
                      onClick={handleNavClick}
                    >
                      <span className="inline-flex items-center gap-3">
                        <span className="rounded-xl bg-muted/70 p-2 text-primary transition-colors duration-200 group-hover:bg-primary/12">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>{item.label}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </Link>
                  );
                })}
              </div>

              <button
                onClick={() => {
                  handleNavClick();
                  window.open(airbnbUrl, "_blank");
                }}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 active:scale-[0.99]"
              >
                <CalendarDays className="h-4 w-4" />
                Reserve Stay
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
