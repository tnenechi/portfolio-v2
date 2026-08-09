# Tasks: Modern Developer Portfolio

**Input**: Design documents from `/specs/001-developer-portfolio/`
**Prerequisites**: [plan.md](./plan.md) (required), [spec.md](./spec.md) (required), [data-model.md](./data-model.md), [research.md](./research.md), [contracts/form-submission-contract.md](./contracts/form-submission-contract.md), [quickstart.md](./quickstart.md), [.specify/memory/constitution.md](../../.specify/memory/constitution.md)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project configuration, theme setup, design system tokens, and TypeScript data schemas.

- [x] T001 Configure Tailwind CSS v4 design system, theme variables, glassmorphism utilities, and font imports in `app/globals.css` and `app/layout.tsx`
- [x] T002 [P] Implement global TypeScript interfaces (`ProfileInfo`, `Project`, `ContactInput`, and API response types) in `lib/types.ts`
- [x] T003 [P] Implement Theme Context Provider and theme toggle hooks with `localStorage` persistence and FOUC script in `components/theme-provider.tsx`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure and base components that MUST be complete before user stories can be assembled.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T004 Create static profile & bio data file with headline, availability status, resume path, and social links in `lib/data/profile.ts`
- [x] T005 [P] Implement reusable shadcn UI primitive components (`Card`, `Badge`, `Dialog`, `Tabs`, `Input`, `Textarea`, `Tooltip`) in `components/ui/`
- [x] T006 [P] Implement sticky navigation Header component with section anchor links, theme toggle button (`data-testid="theme-toggle-btn"`), and responsive mobile drawer in `components/layout/header.tsx`
- [x] T007 [P] Implement Footer component with social links, copyright notices, and back-to-top trigger in `components/layout/footer.tsx`
- [x] T008 Implement Hero Section component with developer intro, CTAs (`data-testid="hero-view-work-btn"`), and GSAP entrance stagger animation in `components/hero/hero-section.tsx`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel.

---

## Phase 3: User Story 1 - Portfolio Project Exploration & Interactive Demos (Priority: P1) 🎯 MVP

**Goal**: Enable visitors to explore interactive project showcases with project cards and detailed architectural modal overlays.

**Independent Test**: Load projects gallery, open detail modal (`data-testid="project-modal-{id}"`), and test external links.

### Implementation for User Story 1

- [x] T009 [P] [US1] Create static project data list (`Project[]`) with rich metadata, tech stack badges, and architectural highlights in `lib/data/projects.ts`
- [x] T010 [P] [US1] Build Project Card component (`data-testid="project-card-{id}"`) with thumbnail preview, tech badges, and GSAP hover scaling in `components/projects/project-card.tsx`
- [x] T011 [US1] Build Project Detail Modal component (`data-testid="project-modal-{id}"`) with full architecture summary, tech badges, live demo link, and GitHub repository link in `components/projects/project-modal.tsx`
- [x] T012 [US1] Build Project Gallery container with GSAP transition animations and modal state management in `components/projects/project-grid.tsx`
- [x] T013 [US1] Integrate Project Grid into main portfolio page in `app/page.tsx` and verify MVP interactive functionality

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently (MVP Scope ready).

---

## Phase 4: User Story 3 - Interactive Contact & Communication (Priority: P3)

**Goal**: Provide an interactive contact form with client-side Zod validation, instant visual feedback states, downloadable PDF resume asset trigger, and API endpoint integration.

**Independent Test**: Submit invalid form to confirm sub-150ms inline validation errors, submit valid contact payload to confirm visual reset and success state, and click resume download CTA.

### Implementation for User Story 3

- [x] T019 [P] [US3] Implement Contact Form API route handler `POST /api/contact` with Zod request schema validation (`ContactInput`) and structured error/success JSON responses in `app/api/contact/route.ts`
- [x] T020 [US3] Implement Contact Form client component (`data-testid="contact-submit-btn"`) with inline validation error states, loading spinner, success feedback banner, and API fallback in `components/contact/contact-form.tsx`
- [x] T021 [P] [US3] Add static resume PDF asset file in `public/resume.pdf` and link resume download buttons across Hero and Header components
- [x] T022 [US3] Integrate Contact section into main portfolio page in `app/page.tsx`

**Checkpoint**: All user stories should now be independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final system-wide accessibility, performance optimization, and empirical validation.

- [x] T023 [P] Implement WCAG 2.1 AA accessibility enhancements (focus indicators, ARIA landmarks, `aria-live` status regions, keyboard navigation focus traps) across `components/`
- [x] T024 [P] Implement responsive layout optimization and edge-case handling (320px ultra-small screens, 4K displays, progressive image placeholders) in `app/globals.css` and Next.js components
- [x] T025 Run full validation suite (`npm run lint`, TypeScript compiler check `tsc`, `npm run build`, and `quickstart.md` test scenarios 1-5)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories.
- **User Stories (Phase 3+)**: All depend on Foundational phase completion.
  - User stories can then proceed sequentially in priority order (US1 → US2 → US3) or in parallel.
- **Polish (Phase 6)**: Depends on all user stories being completed.

### User Story Dependencies

- **User Story 1 (P1)**: Depends on Foundational (Phase 2). No dependencies on other user stories.
- **User Story 3 (P3)**: Depends on Foundational (Phase 2). Independent of US1.

### Within Each User Story

- Data schemas & static data before UI components.
- Sub-components (Cards, Modals) before container Grid/Section.
- Container components before integration into `app/page.tsx`.

### Parallel Opportunities

- Phase 1: `T002` (types) and `T003` (theme) can run in parallel.
- Phase 2: `T005` (shadcn components), `T006` (header), and `T007` (footer) can run in parallel.
- Phase 3: `T009` (project data) and `T010` (project card) can run in parallel.
- Phase 4: `T014` (experience data) and `T015` (research data) can run in parallel.
- Phase 5: `T019` (contact route) and `T021` (resume asset) can run in parallel.
- Phase 6: `T023` (accessibility) and `T024` (responsive layout) can run in parallel.

---

## Parallel Example: User Story 1

```bash
# Launch data creation and card component creation in parallel:
Task: T009 [P] [US1] Create static project data list in lib/data/projects.ts
Task: T010 [P] [US1] Build Project Card component in components/projects/project-card.tsx

# Once card & data ready, build modal and grid:
Task: T011 [US1] Build Project Detail Modal component in components/projects/project-modal.tsx

```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (`T001` - `T003`)
2. Complete Phase 2: Foundational (`T004` - `T008`)
3. Complete Phase 3: User Story 1 (`T009` - `T013`)
4. **STOP and VALIDATE**: Test User Story 1 independently in browser and verify quickstart scenario 2.

### Incremental Delivery

1. Setup + Foundational → Core app frame ready.
2. Add User Story 1 (Projects Gallery + Modal) → Test MVP increment.
3. Add User Story 3 (Contact Form + Resume Download) → Test conversion funnel increment.
4. Final Polish & Build Validation (`T023` - `T025`).
