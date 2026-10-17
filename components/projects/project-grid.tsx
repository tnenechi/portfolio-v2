'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { VscGithub } from 'react-icons/vsc';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { buttonVariants } from '@/components/ui/button';
import { projectsData } from '@/lib/data/projects';
import { cn } from '@/lib/utils';
import type { Project } from '@/lib/types';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

function ProjectPlaceholderGraphic({ id }: { id: string }) {
  if (id === 'ezscents') {
    return (
      <div className="relative w-full h-full p-6 flex flex-col justify-between select-none bg-gradient-to-br from-secondary/40 to-muted/80">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-5 w-16 rounded bg-foreground/15" />
            <div className="h-4 w-10 rounded bg-foreground/10" />
          </div>
          <div className="h-6 w-6 rounded-full bg-foreground/10" />
        </div>
        <div className="grid grid-cols-3 gap-3 my-auto">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-lg border border-border/80 bg-background/90 p-3 shadow-2xs flex flex-col items-center gap-2">
              <div className="w-10 h-14 rounded-md bg-foreground/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-muted-foreground/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 3h6v3H9zM10 6v3h4V6M6 10h12v10a2 2 0 01-2 2H8a2 2 0 01-2-2V10z" />
                </svg>
              </div>
              <div className="h-2 w-12 rounded bg-foreground/20" />
              <div className="h-2 w-8 rounded bg-foreground/10" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="h-2.5 w-24 rounded bg-foreground/15" />
          <div className="h-3.5 w-14 rounded-full bg-primary/20" />
        </div>
      </div>
    );
  }

  if (id === 'bipron-energy') {
    return (
      <div className="relative w-full h-full p-6 flex flex-col justify-between select-none bg-gradient-to-br from-secondary/50 to-muted/60">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-foreground/20 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-foreground" />
            </div>
            <div className="h-4 w-20 rounded bg-foreground/15" />
          </div>
          <div className="flex gap-2">
            <div className="h-3 w-8 rounded bg-foreground/10" />
            <div className="h-3 w-8 rounded bg-foreground/10" />
            <div className="h-3 w-8 rounded bg-foreground/10" />
          </div>
        </div>
        <div className="my-auto rounded-xl border border-border/80 bg-background/95 p-5 shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <div className="space-y-1">
              <div className="h-3 w-28 rounded bg-foreground/25" />
              <div className="h-2 w-44 rounded bg-foreground/10" />
            </div>
            <div className="h-7 w-20 rounded-md bg-foreground/10" />
          </div>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="h-16 rounded-lg bg-secondary/80 p-2.5 flex flex-col justify-between">
              <div className="h-2 w-14 rounded bg-foreground/15" />
              <div className="h-4 w-10 rounded bg-foreground/25" />
            </div>
            <div className="h-16 rounded-lg bg-secondary/80 p-2.5 flex flex-col justify-between">
              <div className="h-2 w-16 rounded bg-foreground/15" />
              <div className="h-4 w-12 rounded bg-foreground/25" />
            </div>
          </div>
        </div>
        <div className="h-2 w-32 rounded bg-foreground/15" />
      </div>
    );
  }

  // Default / Let's Cook
  return (
    <div className="relative w-full h-full p-6 flex flex-col justify-between select-none bg-gradient-to-br from-secondary/40 to-muted/70">
      <div className="flex items-center justify-between">
        <div className="h-4 w-24 rounded bg-foreground/20" />
        <div className="h-6 w-28 rounded-full border border-border bg-background/80 flex items-center px-2 gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-foreground/30" />
          <div className="h-2 w-16 rounded bg-foreground/15" />
        </div>
      </div>
      <div className="my-auto grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-border/80 bg-background/95 p-3.5 shadow-2xs space-y-2">
          <div className="h-16 rounded-lg bg-foreground/10 flex items-center justify-center">
            <svg className="w-6 h-6 text-muted-foreground/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2a9 9 0 0 0-9 9c0 4.17 2.84 7.67 6.69 8.69L10 22h4l.31-2.31C18.16 18.67 21 15.17 21 11a9 9 0 0 0-9-9z" />
            </svg>
          </div>
          <div className="h-3 w-20 rounded bg-foreground/20" />
          <div className="h-2 w-28 rounded bg-foreground/10" />
        </div>
        <div className="rounded-xl border border-border/80 bg-background/95 p-3.5 shadow-2xs space-y-2">
          <div className="h-16 rounded-lg bg-foreground/10 flex items-center justify-center">
            <svg className="w-6 h-6 text-muted-foreground/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8 12h8M12 8v8" />
            </svg>
          </div>
          <div className="h-3 w-16 rounded bg-foreground/20" />
          <div className="h-2 w-24 rounded bg-foreground/10" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-3.5 w-16 rounded-full bg-foreground/15" />
        <div className="h-3.5 w-16 rounded-full bg-foreground/15" />
      </div>
    </div>
  );
}

export function ProjectGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>('.project-item');
      if (!items.length) return;

      const reducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reducedMotion) {
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }

      items.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            once: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      aria-label="Projects — Selected work"
      className="border-t border-border py-space-2xl md:py-space-3xl"
    >
      <div className="mx-auto max-w-6xl px-space-md">
        {/* Section Heading */}
        <div className="max-w-2xl mb-space-2xl">
          <h2 className="font-heading font-medium text-2xl sm:text-3xl md:text-4xl tracking-tight text-foreground mb-space-sm">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            A selection of websites and web applications I’ve built, combining frontend development, backend functionality, and practical solutions for different needs.
          </p>
        </div>

        {/* Alternating Project Showcase */}
        <div className="space-y-space-2xl md:space-y-space-3xl">
          {projectsData.map((project: Project, index: number) => {
            const isEven = index % 2 === 1;

            return (
              <article
                key={project.id}
                className={cn(
                  'project-item grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-space-xl md:gap-space-2xl items-center pt-space-2xl border-t border-border',
                  index === 0 && 'border-t-0 pt-0'
                )}
              >
                {/* Browser Mockup Screenshot Box */}
                <div
                  className={cn(
                    'w-full rounded-xl overflow-hidden border border-border bg-secondary shadow-sm transition-transform duration-300 hover:scale-[1.01]',
                    isEven && 'md:order-2'
                  )}
                  role="img"
                  aria-label={`${project.title} screenshot placeholder`}
                >
                  {/* Browser Window Title Bar */}
                  <div className="flex items-center gap-1.5 px-space-sm py-2.5 bg-muted border-b border-border">
                    <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
                  </div>

                  {/* Browser Window Body */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    {project.coverImage ? (
                      <Image
                        src={project.coverImage}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(min-width: 768px) 580px, 95vw"
                        className="object-cover object-top"
                      />
                    ) : (
                      <ProjectPlaceholderGraphic id={project.id} />
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className={cn('flex flex-col justify-center', isEven && 'md:order-1')}>
                  <h3 className="font-heading font-medium text-2xl sm:text-3xl tracking-tight text-foreground mb-space-sm">
                    {project.title}
                  </h3>

                  {/* Tags */}
                  <ul
                    aria-label={`${project.title} technology tags`}
                    className="flex flex-wrap gap-2 list-none p-0 mb-space-md"
                  >
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="px-3 py-1 rounded-full border border-border bg-muted text-muted-foreground text-xs sm:text-sm font-medium"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* Description */}
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-space-lg max-w-xl">
                    {project.description}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-space-xs">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: 'default' }), 'h-10 px-5 text-sm font-medium')}
                      >
                        View Live Website
                        <ExternalLink className="h-4 w-4 ml-space-2xs" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: 'outline' }), 'h-10 px-5 text-sm font-medium')}
                      >
                        GitHub Repository
                        <VscGithub className="h-4 w-4 ml-space-2xs" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
