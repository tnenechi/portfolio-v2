'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { FileText, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { buttonVariants } from '@/components/ui/button';
import { profileData, technologiesData } from '@/lib/data/profile';
import { cn } from '@/lib/utils';

gsap.registerPlugin(useGSAP);

const TYPEWRITER_WORDS = [
  'Software Engineer',
  'Full-Stack Developer',
];

function TypewriterRole() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPEWRITER_WORDS[wordIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && text === currentWord) {
      // Completed typing, pause before deleting (slower pause: 3.2s)
      timer = setTimeout(() => setIsDeleting(true), 3200);
    } else if (isDeleting && text === '') {
      // Completed deleting, pause before moving to next word
      timer = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
      }, 500);
    } else {
      // Slower typing speed (120ms) and slower deletion (55ms)
      const speed = isDeleting ? 55 : 120;
      timer = setTimeout(() => {
        setText(
          isDeleting
            ? currentWord.substring(0, text.length - 1)
            : currentWord.substring(0, text.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className="hero-role flex items-center gap-1.5 text-sm sm:text-base font-medium tracking-wide text-muted-foreground uppercase mb-space-md min-h-[1.75rem]">
      <span className="sr-only">Software Engineer</span>
      <span aria-hidden="true" className="text-foreground font-semibold tracking-wider">
        {text}
      </span>
      <span
        aria-hidden="true"
        className="inline-block w-[2px] h-4 bg-foreground animate-pulse ml-0.5"
      />
    </div>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reducedMotion) {
        gsap.set(
          ['.hero-panel', '.hero-photo', '.hero-role', '.hero-title', '.hero-lead', '.hero-actions', '.hero-strip'],
          { opacity: 1, y: 0 }
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-panel',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          '.hero-photo',
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          '.hero-role',
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.4'
        )
        .fromTo(
          '.hero-title',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          '.hero-lead',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        )
        .fromTo(
          '.hero-actions',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.2'
        )
        .fromTo(
          '.hero-strip',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.2'
        );
    },
    { scope: containerRef }
  );

  // Duplicate items for continuous smooth marquee loop
  const marqueeItems = [...technologiesData, ...technologiesData, ...technologiesData];

  return (
    <section
      ref={containerRef}
      id="home"
      aria-label="Hero — Introduction"
      className="pt-space-xl sm:pt-space-2xl pb-0"
    >
      <div className="mx-auto max-w-6xl px-space-md mb-space-xl sm:mb-space-2xl">
        {/* Hero Card Panel */}
        <div className="hero-panel grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-space-xl md:gap-space-2xl items-center bg-muted border border-border rounded-4xl p-space-md sm:p-space-xl">
          {/* Hero Portrait Photo — Centered in its column, shifted slightly to center subject */}
          <div className="hero-photo flex items-center justify-center w-full h-full">
            <div className="relative aspect-[3/4] w-full max-w-[19rem] sm:max-w-[21rem] rounded-2xl overflow-hidden border border-border bg-secondary shadow-sm">
              <Image
                src="/Home.jpg"
                alt={profileData.name}
                fill
                priority
                sizes="(min-width: 768px) 340px, 85vw"
                className="object-cover"
                style={{ objectPosition: '72% center' }}
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="hero-text flex flex-col justify-center">
            {/* Typewriter role */}
            <TypewriterRole />

            {/* Headline */}
            <h1 className="hero-title font-heading font-semibold text-3xl sm:text-5xl md:text-[3.25rem] leading-[1.08] tracking-tight text-foreground mb-space-md">
              Hi, I’m {profileData.name}.
            </h1>

            {/* Lead text */}
            <p className="hero-lead text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-space-lg">
              {profileData.bio}
            </p>

            {/* Action buttons */}
            <div className="hero-actions flex flex-wrap items-center gap-space-xs">
              <a
                href="#projects"
                className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'h-11 px-6 text-base font-medium')}
                data-testid="hero-view-work-btn"
              >
                View My Projects
                <ArrowUpRight className="h-4 w-4 ml-space-2xs" />
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View CV (opens in new tab)"
                className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 px-6 text-base font-medium')}
              >
                View CV
                <FileText className="h-4 w-4 ml-space-2xs" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies strip — Full width edge-to-edge */}
      <div className="hero-strip w-full border-y border-border bg-secondary/80 py-3.5 px-4 sm:px-8 shadow-2xs overflow-hidden">
        <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2 text-center">
          Technologies I build with
        </p>
        <div className="relative overflow-hidden w-full select-none">
          {/* Gradient edge fades for seamless marquee */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-secondary/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-secondary/90 to-transparent" />

          {/* Sliding text track */}
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
            {marqueeItems.map((tech, index) => (
              <div key={`${tech}-${index}`} className="flex items-center gap-8">
                <span className="text-sm sm:text-base font-medium text-foreground tracking-wide">
                  {tech}
                </span>
                <span className="text-muted-foreground/40 text-xs" aria-hidden="true">
                  •
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
