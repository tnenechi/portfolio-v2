# Phase 0: Research & Technical Decisions

**Feature**: Modern Developer Portfolio
**Spec**: [spec.md](./spec.md)
**Branch**: `001-developer-portfolio`

---

## 1. UI Component Library Architecture (shadcn UI & Tailwind CSS v4)

### Decision
Utilize **shadcn UI** (configured with `@base-ui/react` primitives and Tailwind CSS v4) for accessible, customizable, and high-performance UI components (`Button`, `Dialog`/`Modal`, `Card`, `Badge`, `Tabs`, `Input`, `Textarea`, `Tooltip`).

### Rationale
- The repository is already configured with `components.json` using `base-luma` style, `rsc: true`, and dependencies (`@base-ui/react`, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`).
- Base UI provides headless, accessible primitives (dialogs, popovers, tabs) with high WCAG 2.1 AA compliance.
- Tailwind CSS v4 utility classes and CSS variables allow fluid responsive layouts and dark/light theme switching.

### Alternatives Considered
- *Radix UI Primitives*: Good, but `@base-ui/react` is already configured in `package.json` and `components.json`.
- *Pure CSS/Custom Primitives*: Would require re-implementing focus traps, ARIA attributes, and keyboard accessibility for modals and tabs.

---

## 2. Animation & Micro-Interactions (GSAP + `@gsap/react`)

### Decision
Integrate **GSAP** (`gsap` and `@gsap/react`) for smooth entrance transitions, scroll-triggered section reveals, timeline node expansion, and hero particle/interactive elements.

### Rationale
- `useGSAP()` hook handles component mounting, unmounting, and automatic cleanup (`ctx.revert()`), avoiding React 19 StrictMode double-invocations or memory leaks.
- Using `scope: containerRef` ensures animations target only elements inside the host component without global DOM query leaks.
- GSAP `ScrollTrigger` enables 60fps parallax and section reveal effects.

### Implementation Pattern
```tsx
'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.hero-title', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' });
    gsap.from('.hero-cta', { opacity: 0, y: 20, duration: 0.6, delay: 0.3, stagger: 0.1 });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="...">
      <h1 className="hero-title">...</h1>
      <div className="hero-cta">...</div>
    </section>
  );
}
```

### Alternatives Considered
- *Framer Motion*: Powerful for React layout animations, but user specifically requested GSAP.
- *CSS Animations*: Great for simple hovers, but lacks scroll-synced timelines and choreographed sequence control.

---

## 3. Data Architecture & Static Rendering

### Decision
Store project data in structured TypeScript files under `@/lib/data/` (`projects.ts`, `profile.ts`).

### Rationale
- Static, type-safe data allows Next.js App Router to render server components instantly with zero database query latency (LCP < 2.5s).
- Direct exports provide strong TypeScript interface checking and autocomplete across all UI components.

### Alternatives Considered
- *CMS or External API*: Adds external network latency, risk of downtime, and setup overhead for static portfolio content.

---

## 4. Theme & Persistence (Dark / Light Mode)

### Decision
Implement a client-side `ThemeProvider` using a custom React context that toggles the `.dark` class on `document.documentElement` and persists preference in `localStorage`.

### Rationale
- Aligns with Tailwind CSS v4 dark mode strategy (`.dark` parent selector or CSS variables).
- Fast execution with zero flash of unstyled theme (FOUC) when inline script is used in `app/layout.tsx`.

---

## 5. Summary of Dependencies to Add

| Package | Purpose |
|---------|---------|
| `gsap` | Core animation engine & ScrollTrigger |
| `@gsap/react` | React 19 integration hook (`useGSAP`) |
| `next-themes` | Dark/light theme switching with zero FOUC |
| `zod` | Contact form input schema validation |

