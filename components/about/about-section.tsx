'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutData } from '@/lib/data/profile';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reducedMotion) {
        gsap.set(['.about-media-box', '.about-content'], { opacity: 1, y: 0 });
        return;
      }

      gsap.from('.about-media-box', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      gsap.from('.about-content', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="About — Background and engineering philosophy"
      className="border-t border-border bg-card py-space-2xl md:py-space-3xl"
    >
      <div className="mx-auto max-w-6xl px-space-md">
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-space-xl md:gap-space-3xl items-start">
          {/* Sticky Media Column */}
          <div className="about-media-box md:sticky md:top-24 w-full max-w-[20rem] md:max-w-none mx-auto md:mx-0">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-border bg-secondary shadow-sm">
              <Image
                src="/About.jpg"
                alt="Thony Enechi working"
                fill
                sizes="(min-width: 768px) 380px, 80vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* About Copy Column */}
          <div className="about-content space-y-space-md">
            <h2 className="font-heading font-medium text-2xl sm:text-3xl md:text-4xl tracking-tight text-foreground mb-space-lg">
              {aboutData.title}
            </h2>

            {aboutData.paragraphs.map((p, idx) => {
              if (p.isLead) {
                return (
                  <p
                    key={idx}
                    className="font-heading font-medium text-xl sm:text-2xl text-foreground leading-snug tracking-tight max-w-2xl"
                  >
                    {p.text}
                  </p>
                );
              }
              if (p.isRule) {
                return (
                  <p
                    key={idx}
                    className="border-l-2 border-foreground pl-space-md text-foreground text-base sm:text-lg leading-relaxed max-w-2xl font-medium mt-space-md"
                  >
                    {p.text}
                  </p>
                );
              }
              return (
                <p
                  key={idx}
                  className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl"
                >
                  {p.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
