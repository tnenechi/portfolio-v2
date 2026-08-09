'use client';

import { useRef } from 'react';
import { Zap, ArrowDown } from 'lucide-react';
import { VscGithub } from 'react-icons/vsc';
import { BsLinkedin } from 'react-icons/bs';
import { IoMailOutline } from 'react-icons/io5';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { profileData } from '@/lib/data/profile';
import { cn } from '@/lib/utils';

gsap.registerPlugin(useGSAP);

const SOCIAL_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  VscGithub,
  BsLinkedin,
  IoMailOutline,
};

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  available: { label: 'Available for work', color: 'text-emerald-400' },
  busy: { label: 'Currently busy', color: 'text-amber-400' },
  open_to_offers: { label: 'Open to offers', color: 'text-sky-400' },
};

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const statusInfo = STATUS_LABELS[profileData.status];

  useGSAP(
    () => {
      const reducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reducedMotion) {
        gsap.set(
          [
            '.hero-status',
            '.hero-title',
            '.hero-bio',
            '.hero-cta',
            '.hero-socials',
            '.hero-scroll',
          ],
          { opacity: 1, x: 0, y: 0, clearProps: 'transform' }
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-status',
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
        .fromTo(
          '.hero-title',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.2'
        )
        .fromTo(
          '.hero-bio',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, clearProps: 'transform' },
          '-=0.2'
        )
        .fromTo(
          '.hero-socials',
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, clearProps: 'transform' },
          '-=0.2'
        )
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.1');
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Hero — Developer introduction"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 -right-32 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full bg-primary/8 blur-3xl opacity-40" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Availability Badge */}
        <div className="hero-status flex items-center justify-center gap-2 mb-6">
          <Badge variant="glass" className="flex items-center gap-1.5 text-xs px-3 py-1">
            <span className={`inline-block h-2 w-2 rounded-full bg-current ${statusInfo.color} animate-pulse`} />
            <span className={statusInfo.color}>{statusInfo.label}</span>
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4">
          <span className="block text-foreground">{profileData.name}</span>
          <span className="block gradient-text mt-2">{profileData.headline}</span>
        </h1>

        {/* Bio */}
        <p className="hero-bio mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
          {profileData.bio}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a
            href="#projects"
            className={cn(buttonVariants({ size: 'lg' }), 'hero-cta')}
            data-testid="hero-view-work-btn"
            aria-label="Navigate to projects gallery"
          >
            <Zap className="h-4 w-4 mr-2" aria-hidden="true" />
            View My Work
          </a>

          <a
            href="#contact"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'hero-cta')}
          >
            Get in Touch
          </a>

          <a
            href={profileData.resumeUrl}
            download
            aria-label="Download resume PDF"
            className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }), 'hero-cta')}
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 mb-16">
          {profileData.socials.map((social) => {
            const Icon = SOCIAL_ICON_MAP[social.icon];
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hero-socials inline-flex items-center justify-center h-10 w-10 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {Icon && <Icon className="h-4 w-4" />}
              </a>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll flex flex-col items-center gap-2 text-muted-foreground/60">
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
