<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Onboarding Guide

Follow these steps to get up to speed with the project:

## 1. Project Specifications & Architecture
Review the documentation in [`specs/001-developer-portfolio/`](specs/001-developer-portfolio/):
- [`spec.md`](specs/001-developer-portfolio/spec.md): Product requirements, user stories (Hero, Projects, Contact), functional requirements, and success criteria.
- [`plan.md`](specs/001-developer-portfolio/plan.md): Technical architecture, technology stack (Next.js 16, React 19, Tailwind CSS v4, shadcn UI on `@base-ui/react`, GSAP), and directory structure.
- [`data-model.md`](specs/001-developer-portfolio/data-model.md): Entity definitions (`ProfileInfo`, `Project`, `ContactInput`).
- [`contracts/form-submission-contract.md`](specs/001-developer-portfolio/contracts/form-submission-contract.md): Contact API contracts, payload schemas, and required `data-testid` / ARIA attributes.
- [`quickstart.md`](specs/001-developer-portfolio/quickstart.md): Development setup, test scenarios, and manual validation workflows.
- [`.specify/memory/constitution.md`](.specify/memory/constitution.md): Core engineering principles (accessibility WCAG 2.1 AA, performance, code quality).

## 2. Current State & Active Roadmap
- Consult [`todo.md`](todo.md): The authoritative source of truth for the ongoing portfolio UI redesign/rebuild. It documents completed architectural decisions (e.g., light-only mode, monochrome zero-chroma OKLCH tokens, custom `@utility` typography tokens) and tracks pending phase-by-phase tasks. Always consult and update this file when picking up work.

## 3. Key Source Directories
- [`app/`](app/): Next.js App Router entry points, layout, metadata/SEO, API routes, and design tokens/utilities in [`app/globals.css`](app/globals.css).
- [`components/`](components/): UI components structured into primitives ([`components/ui/`](components/ui/)), layout shell ([`components/layout/`](components/layout/)), and sections ([`components/hero/`](components/hero/), [`components/projects/`](components/projects/), [`components/contact/`](components/contact/)).
- [`lib/`](lib/): Static data models ([`lib/data/`](lib/data/)), Zod validation schemas ([`lib/schemas/`](lib/schemas/)), TypeScript types ([`lib/types.ts`](lib/types.ts)), and helper utilities ([`lib/utils.ts`](lib/utils.ts)).

## 4. Verification & Testing Commands
- `npm run dev`: Launch the development server.
- `npm run lint`: Run ESLint analysis.
- `npm run build`: Validate TypeScript types and compile production build.
