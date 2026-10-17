"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { profileData } from "@/lib/data/profile";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/88 backdrop-blur-md transition-colors">
      <div className="mx-auto max-w-6xl px-space-md">
        <div className="flex h-16 items-center justify-between gap-space-md">
          {/* Logo / Brand */}
          <Link
            href="#home"
            className="font-heading font-semibold text-xl tracking-tight text-foreground hover:opacity-85 transition-opacity"
          >
            {profileData.name}
          </Link>

          {/* Desktop Nav + Action */}
          <div className="hidden md:flex items-center gap-space-lg">
            <nav aria-label="Primary navigation">
              <ul className="flex items-center gap-space-lg list-none m-0 p-0">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[0.95rem] font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href={profileData.resumeUrl}
              download
              aria-label="Download CV"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "h-9 px-4 text-sm font-medium",
              )}
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-space-xs">
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="p-space-2xs text-muted-foreground hover:text-foreground transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          className="md:hidden border-t border-border bg-background px-space-md py-space-md flex flex-col gap-space-sm"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-space-xs py-space-xs text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profileData.resumeUrl}
            download
            onClick={() => setMobileOpen(false)}
            className={cn(
              buttonVariants({ variant: "default" }),
              "mt-space-2xs w-full justify-center",
            )}
          >
            <Download className="h-4 w-4 mr-space-2xs" />
            Download CV
          </a>
        </nav>
      )}
    </header>
  );
}
