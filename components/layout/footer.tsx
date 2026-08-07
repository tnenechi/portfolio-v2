import { Code2, Globe, X, Mail, GraduationCap, ArrowUp } from 'lucide-react';
import { profileData } from '@/lib/data/profile';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Globe,
  X,
  Mail,
  GraduationCap,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-sm font-bold gradient-text">Alex.dev</span>
            <p className="text-xs text-muted-foreground">
              {profileData.headline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {profileData.socials.map((social) => {
              const Icon = ICON_MAP[social.icon];
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex items-center justify-center h-8 w-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </a>
              );
            })}
          </div>

          {/* Copyright + Back to top */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} {profileData.name}. All rights reserved.
            </p>
            <a
              href="#"
              aria-label="Back to top"
              className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
