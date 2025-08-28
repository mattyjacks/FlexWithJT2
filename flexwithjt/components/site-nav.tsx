"use client";

import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ArrowRight } from "lucide-react";

export default function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-bold tracking-tight text-xl">
          Flex <span className="text-primary">With JT</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex text-sm">
          <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <Link href="/next" className="inline-flex items-center gap-2 rounded-full border px-3 py-1 hover:bg-accent transition-colors">
            Flex Next <span className="text-[10px] rounded bg-amber-500/20 px-1.5 py-0.5 text-amber-700">Coming Soon</span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="mailto:jt@jtfitness.com?subject=Free%20Consultation%20-%20Flex%20With%20JT"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground text-sm font-medium hover:opacity-90 transition"
          >
            Book Free Consult
            <ArrowRight className="h-4 w-4" />
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}