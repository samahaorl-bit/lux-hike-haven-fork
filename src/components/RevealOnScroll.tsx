"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = ".section-reveal";

export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector)
    );

    if (elements.length === 0) {
      return () => {
        root.classList.remove("reveal-ready");
      };
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return () => {
        root.classList.remove("reveal-ready");
      };
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, [pathname]);

  return null;
}
