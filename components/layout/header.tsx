'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { Menu, X, Download, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { profileData } from '@/lib/data/profile';

const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const BRAND_NAME = `${profileData.name.split(' ')[0]}.dev`;

// Reports `false` on the server and during the first client render, then
// `true` from the next render onward — the React-team-recommended way to
// gate hydration-sensitive UI (like a theme icon) without the cascading
// setState-in-effect pattern.
const subscribeNever = () => () => {};
function useMounted() {
  return useSyncExternalStore(subscribeNever, () => true, () => false);
}

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mounted = useMounted();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Renders a fixed-size invisible placeholder before mount so layout
  // does not shift when the real icon appears after hydration.
  const ThemeIcon = mounted
    ? resolvedTheme === 'dark'
      ? <Sun className="h-4 w-4" />
      : <Moon className="h-4 w-4" />
    : <span className="h-4 w-4 block" aria-hidden="true" />;

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-40 transition-all duration-300',
        scrolled
          ? 'glass-panel shadow-lg shadow-black/10'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="text-sm font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="gradient-text">{BRAND_NAME}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              data-testid="theme-toggle-btn"
              aria-label="Switch between light and dark mode"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {ThemeIcon}
            </button>

            <a
              href="/resume.pdf"
              download
              aria-label="Download resume PDF"
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
            >
              <Download className="h-3.5 w-3.5 mr-1.5" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              data-testid="theme-toggle-btn"
              aria-label="Switch between light and dark mode"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              {ThemeIcon}
            </button>
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          className="md:hidden glass-panel border-t border-border px-4 py-4 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="mt-2 flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
          >
            <Download className="h-3.5 w-3.5" />
            Download Resume
          </a>
        </nav>
      )}
    </header>
  );
}
