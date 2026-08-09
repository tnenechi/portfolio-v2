'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectCard } from '@/components/projects/project-card';
import { ProjectModal } from '@/components/projects/project-modal';
import { projectsData } from '@/lib/data/projects';
import type { Project } from '@/lib/types';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ProjectGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.project-card-item');
      if (!cards.length) return;

      const reducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reducedMotion) {
        gsap.set(cards, { opacity: 1, y: 0 });
        return;
      }

      gsap.from(cards, {
        opacity: 0,
        y: 36,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  const handleOpen = (project: Project) => {
    setSelected(project);
    setOpen(true);
  };

  // The Dialog primitive unmounts its content the instant `open` becomes
  // false (no exit-animation support), so there's no need to delay clearing
  // the selected project — doing so previously left stale state around for
  // no visible benefit.
  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      setSelected(null);
    }
  };

  return (
    <section ref={sectionRef} id="projects" aria-label="Projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
            Selected work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Projects</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Interactive showcases with architecture notes, tech stacks, and links to live demos
            and source code.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card-item h-full">
              <ProjectCard project={project} onOpen={handleOpen} />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} open={open} onOpenChange={handleOpenChange} />
    </section>
  );
}
