"use client";

import Image from "next/image";
import { ExternalLink, Code } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn, coverGradient } from "@/lib/utils";
import type { Project } from "@/lib/types";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid={`project-modal-${project.id}`}
        className="max-w-2xl gap-0 p-0 overflow-hidden"
        aria-labelledby="modal-title"
      >
        {/* Cover band — falls back to a deterministic gradient when no
            coverImage asset is set yet. */}
        <div className="relative h-36 sm:h-44 w-full overflow-hidden">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 640px) 42rem, 100vw"
              className="object-cover"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{ background: coverGradient(project.id) }}
              aria-hidden="true"
            />
          )}
        </div>

        <div className="p-space-md space-y-space-md">
          <DialogHeader className="space-y-space-2xs text-left">
            <div className="flex flex-wrap items-center gap-space-2xs text-xs text-muted-foreground">
              {project.featured && (
                <Badge
                  variant="accent"
                  className="text-[10px] uppercase tracking-wider"
                >
                  Featured
                </Badge>
              )}
            </div>
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              {project.tagline}
            </DialogDescription>
          </DialogHeader>

          <p className="text-sm leading-relaxed text-foreground/90">
            {project.description}
          </p>

          {/* Highlights */}
          <div>
            <h3 className="text-sm font-semibold mb-space-2xs">
              Architecture highlights
            </h3>
            <ul className="space-y-space-2xs">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-space-2xs text-sm text-muted-foreground before:content-[''] before:mt-space-2xs before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="text-sm font-semibold mb-space-2xs">Tech stack</h3>
            <div className="flex flex-wrap gap-space-2xs">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-space-2xs pt-space-3xs">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "default" }))}
              >
                <ExternalLink className="h-4 w-4 mr-space-2xs" aria-hidden="true" />
                Live demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "default" }),
                )}
              >
                <Code className="h-4 w-4 mr-space-2xs" aria-hidden="true" />
                Source code
              </a>
            )}
            {!project.demoUrl && !project.githubUrl && (
              <p className="text-sm text-muted-foreground">
                External links are not available for this project.
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
