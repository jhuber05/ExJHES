"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="border-b border-card-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">EV</span>
          </div>
          <span className="font-semibold text-lg">EpoxyViz</span>
        </Link>
        <nav className="flex items-center gap-6">
          {!isHome && (
            <Link
              href="/"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Home
            </Link>
          )}
          <Link
            href="/editor"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Editor
          </Link>
          <Link
            href="/projects"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/editor"
            className="text-sm bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
