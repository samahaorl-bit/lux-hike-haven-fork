"use client";

import React from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sonner />
      <RevealOnScroll />
      {children}
    </>
  );
}
