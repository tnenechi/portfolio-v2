"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ExternalLink, Code } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn, coverGradient } from "@/lib/utils";
import type { Project } from "@/lib/types";

gsap.registerPlugin(useGSAP);

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = cardRef.current;
      if (!el) return;

      const reducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion) return;

      const onEnter = () => {
        gsap.to(el, { scale: 1.02, y: -4, duration: 0.35, ease: "power2.out" });
      };
      const onLeave = () => {
        gsap.to(el, { scale: 1, y: 0, duration: 0.35, ease: "power2.out" });
      };

      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      el.addEventListener("focusin", onEnter);
      el.addEventListener("focusout", onLeave);

      return () => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.removeEventListener("focusin", onEnter);
        el.removeEventListener("focusout", onLeave);
      };
    },
    { scope: cardRef },
  );

  const visibleTags = project.tags.slice(0, 4);
  const extraCount = project.tags.length - visibleTags.length;

  return (
    <Card
      ref={cardRef}
      role="button"
      data-testid={`project-card-${project.id}`}
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={`Open details for ${project.title}`}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(project);
        }
      }}
      className={cn(
        "group h-full flex flex-col cursor-pointer overflow-hidden will-change-transform",
        "hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
    >
      {/* Cover — fixed aspect keeps top band equal; falls back to a
          deterministic gradient when no coverImage asset is set yet. */}
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: coverGradient(project.id) }}
            aria-hidden="true"
          />
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent"
        />

        {project.featured && (
          <Badge
            variant="glass"
            className="absolute top-3 right-3 text-[10px] uppercase tracking-wider text-white border-white/20"
          >
            Featured
          </Badge>
        )}
      </div>

      <CardHeader className="space-y-2 pb-2 shrink-0">
        <CardTitle className="text-lg leading-snug line-clamp-2 min-h-[2.75rem] group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
          {project.tagline}
        </p>
      </CardHeader>

      {/* Fixed-height tag row so +N never stretches the card */}
      <CardContent className="pb-3 flex-1">
        <div className="flex flex-wrap content-start gap-1.5 min-h-[3.25rem]">
          {visibleTags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-[11px] font-medium"
            >
              {tag}
            </Badge>
          ))}
          {extraCount > 0 && (
            <Badge variant="outline" className="text-[11px]">
              +{extraCount}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="gap-3 pt-0 mt-auto shrink-0 text-muted-foreground">
        {project.demoUrl && (
          <span className="inline-flex items-center gap-1 text-xs">
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
            Demo
          </span>
        )}
        {project.githubUrl && (
          <span className="inline-flex items-center gap-1 text-xs">
            <Code className="h-3 w-3" aria-hidden="true" />
            Code
          </span>
        )}
      </CardFooter>
    </Card>
  );
}
