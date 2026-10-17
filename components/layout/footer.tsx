import { ArrowUp } from 'lucide-react';
import { VscGithub } from 'react-icons/vsc';
import { BsLinkedin } from 'react-icons/bs';
import { IoMailOutline } from 'react-icons/io5';
import { profileData } from '@/lib/data/profile';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  VscGithub,
  BsLinkedin,
  IoMailOutline,
};

const BRAND_NAME = `${profileData.name.split(' ')[0]}.dev`;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-space-sm sm:px-space-md lg:px-space-lg py-space-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-space-md">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-space-3xs">
            <span className="text-sm font-bold gradient-text">{BRAND_NAME}</span>
            <p className="text-xs text-muted-foreground">
              {profileData.headline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-space-xs">
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
          <div className="flex items-center gap-space-sm">
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
