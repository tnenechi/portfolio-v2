'use client';

import { useRef } from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { VscGithub } from 'react-icons/vsc';
import { BsLinkedin } from 'react-icons/bs';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profileData } from '@/lib/data/profile';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ContactSection() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reducedMotion) {
        gsap.set('.contact-content', { opacity: 1, y: 0 });
        return;
      }

      gsap.from('.contact-content', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
          once: true,
        },
      });
    },
    { scope: footerRef }
  );

  const linkedinSocial = profileData.socials.find((s) => s.platform === 'linkedin');
  const githubSocial = profileData.socials.find((s) => s.platform === 'github');
  const emailSocial = profileData.socials.find((s) => s.platform === 'email');

  return (
    <footer
      ref={footerRef}
      id="contact"
      aria-label="Contact and connections"
      className="bg-primary text-primary-foreground pt-space-2xl md:pt-space-3xl pb-space-lg"
    >
      <div className="mx-auto max-w-6xl px-space-md">
        <div className="contact-content grid grid-cols-1 md:grid-cols-2 gap-space-xl md:gap-space-2xl items-start">
          {/* Left Heading */}
          <h2 className="font-heading font-medium text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.08]">
            Let’s connect.
          </h2>

          {/* Right Copy & Actions */}
          <div className="flex flex-col justify-start">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-primary-foreground/75 max-w-xl mb-space-lg">
              I’m always interested in opportunities to contribute to software engineering teams, develop my technical skills, and work on challenging applications.
            </p>

            <div className="flex flex-wrap items-center gap-space-xs">
              {emailSocial && (
                <a
                  href={emailSocial.url}
                  className="inline-flex items-center justify-center gap-space-2xs px-6 py-2.5 rounded-lg font-medium text-sm sm:text-base bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
                >
                  <Mail className="h-4 w-4" />
                  Email Me
                </a>
              )}

              {linkedinSocial && (
                <a
                  href={linkedinSocial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-space-2xs px-6 py-2.5 rounded-lg font-medium text-sm sm:text-base border border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/12 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
                >
                  <BsLinkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              )}

              {githubSocial && (
                <a
                  href={githubSocial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-space-2xs px-6 py-2.5 rounded-lg font-medium text-sm sm:text-base border border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/12 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
                >
                  <VscGithub className="h-4 w-4" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="mt-space-2xl md:mt-space-3xl pt-space-md border-t border-primary-foreground/20 flex flex-wrap items-center justify-between gap-space-sm text-sm text-primary-foreground/65">
          <span>© {currentYear} {profileData.name}</span>
          <a
            href="#home"
            className="inline-flex items-center gap-1 hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground rounded"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
