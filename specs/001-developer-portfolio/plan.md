# Implementation Plan: Modern Developer Portfolio

**Branch**: `001-developer-portfolio` | **Date**: 2026-07-29 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-developer-portfolio/spec.md`

---

## Summary

Build a high-craft, interactive, modern developer portfolio showcasing projects and contact capabilities. The application leverages **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **shadcn UI** (built on `@base-ui/react` primitives and Tailwind CSS v4), and **GSAP** (`@gsap/react` and `ScrollTrigger`) for 60fps micro-animations and scroll choreography.

---

## Technical Context

**Language/Version**: TypeScript 5, React 19.2.4, Next.js 16.2.12 (App Router)

**Primary Dependencies**: `@base-ui/react`, `shadcn` UI, `gsap`, `@gsap/react`, `lucide-react`, `tailwindcss` v4, `zod`, `class-variance-authority`, `clsx`, `tailwind-merge`

**Storage**: Static TypeScript data models (`@/lib/data/`) for projects and profile

**Testing**: Static analysis (`npm run lint`), TypeScript compiler checks (`tsc`), production build validation (`npm run build`), and manual scenario validation (`quickstart.md`)

**Target Platform**: Modern web browsers (Chrome, Safari, Firefox, Edge) across desktop, tablet, and mobile viewports

**Project Type**: Next.js Web Application

**Performance Goals**: LCP < 2.5s, INP < 200ms, CLS < 0.1, 60fps animation frame rate

**Constraints**: WCAG 2.1 AA accessibility standards, dark/light theme switching with zero FOUC, responsive from 320px to 4K viewports

**Scale/Scope**: ~10-20 showcased projects, client-side validated contact form, downloadable PDF resume asset

---

## Constitution Check

*GATE: All principles evaluated and satisfied.*

| Principle | Assessment | Status |
|-----------|------------|--------|
| **I. Code Quality & Architecture** | Strict TypeScript typing without `any`, RSC by default with client component wrappers (`'use client'`) for GSAP/shadcn interactions, zero linter errors. | ✅ PASS |
| **II. Testing Standards & Verification** | Empirical validation using `npm run lint` and `npm run build`, verified contract schemas and quickstart scenarios. | ✅ PASS |
| **III. User Experience & Accessibility** | Unified design system via shadcn UI and Tailwind CSS v4, GSAP micro-animations with reduced motion handling, WCAG 2.1 AA focus indicators, deterministic `data-testid` attributes on interactive elements. | ✅ PASS |
| **IV. Performance & Optimization** | Next.js image optimization (`next/image`), system font scaling (`next/font`), static data pre-rendering, code-split client animations. | ✅ PASS |

---

## Project Structure

### Documentation (this feature)

```text
specs/001-developer-portfolio/
├── spec.md              # Feature specification
├── plan.md              # Implementation plan (this file)
├── research.md          # Phase 0 decisions (shadcn UI, GSAP, static data)
├── data-model.md        # Phase 1 entity types & schema definitions
├── quickstart.md        # Phase 1 test & validation guide
├── contracts/           # Phase 1 interface contracts
│   └── form-submission-contract.md
└── tasks.md             # Phase 2 task execution breakdown (generated via /speckit-tasks)
```

### Source Code Architecture

```text
app/
├── globals.css          # Tailwind CSS v4 theme variables & utilities
├── layout.tsx           # Root layout with ThemeProvider, Font setup, and metadata
├── page.tsx             # Main Portfolio Page (combines Hero, Projects, Contact)
└── api/
    └── contact/
        └── route.ts     # Contact form API endpoint (optional server action handler)

components/
├── ui/                  # shadcn UI components (button, dialog, card, badge, tabs, input, textarea)
├── layout/
│   ├── header.tsx       # Sticky Navigation Header & Theme Toggle
│   └── footer.tsx       # Portfolio Footer & Social links
├── hero/
│   └── hero-section.tsx # GSAP animated Hero section with CTAs
├── projects/
│   ├── project-grid.tsx # Project gallery
│   ├── project-card.tsx # Individual project card
│   └── project-modal.tsx# Detailed project architectural overlay
└── contact/
    └── contact-form.tsx # Form with validation & visual feedback

lib/
├── data/
│   ├── profile.ts       # Profile & bio static data
│   └── projects.ts      # Projects data list
├── utils.ts             # Tailwind class merger (cn)
└── types.ts             # Global TypeScript interfaces
```

---

## Complexity Tracking

> **No violations identified.**
