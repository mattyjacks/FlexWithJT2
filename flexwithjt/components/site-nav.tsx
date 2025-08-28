"use client";

import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-bold tracking-tight text-xl">
          Flex <span className="text-primary">With JT</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex text-sm">
          <Link href="/#why" className="hover:text-primary transition-colors">Why JT</Link>
          <Link href="/#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/#packages" className="hover:text-primary transition-colors">Packages</Link>
          <Link href="/#testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
          <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link href="/shope" className="hover:text-primary transition-colors">Shop</Link>
          <Link href="/next" className="inline-flex items-center gap-2 rounded-full border px-3 py-1 hover:bg-accent transition-colors">
            Flex Next <span className="text-[10px] rounded bg-amber-500/20 px-1.5 py-0.5 text-amber-700">Coming Soon</span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}