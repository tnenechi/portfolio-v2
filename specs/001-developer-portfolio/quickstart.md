# Phase 1: Quickstart & Validation Guide

**Feature**: Modern Developer Portfolio
**Spec**: [spec.md](./spec.md)
**Plan**: [plan.md](./plan.md)
**Branch**: `001-developer-portfolio`

---

## 1. Prerequisites & Installation

Ensure Node.js 18+ and `npm` are available.

```bash
# Install dependencies (including GSAP and shadcn UI support)
npm install gsap @gsap/react zod
```

---

## 2. Verification Workflows & Runnable Commands

### A. Static Analysis & Type Checking

Verify zero TypeScript compilation errors and zero ESLint warnings:

```bash
npm run lint
```

### B. Production Build Check

Verify that Next.js App Router server components compile cleanly and generate static pages without hydration mismatches:

```bash
npm run build
```

### C. Development Server Verification

Launch local dev server to test interactive animations and UI controls:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in browser.

---

## 3. Step-by-Step Manual UI Test Scenarios

### Test Scenario 1: Hero Entrance & Theme Toggle (FR-001, FR-006)

1. Load `http://localhost:3000`.
2. Observe GSAP entrance animation sequence (headline fades in, CTA buttons stagger upward smoothly).
3. Click theme toggle button (`data-testid="theme-toggle-btn"`).
4. Verify root element receives `.dark` class and color scheme transitions smoothly. Refresh page to confirm persistence in `localStorage`.

### Test Scenario 2: Project Gallery & Modal Inspection (FR-002, SC-001)

1. Scroll to Projects section.
2. Confirm project cards are rendered with technology tags and thumbnails.
3. Click a project card (`data-testid="project-card-..."`).
4. Confirm detail modal (`role="dialog"`) opens with full architecture highlights, badges, live demo link, and GitHub link. Press `Esc` key or close button to dismiss.

### Test Scenario 3: Contact Form Validation & Submission (FR-005, SC-005)

1. Scroll to Contact section.
2. Click "Send Message" (`data-testid="contact-submit-btn"`) with empty fields.
3. Verify inline error messages appear in under 150ms without full page reload.
4. Fill out valid Name, Email (`test@example.com`), Subject, and Message.
5. Click Submit; verify immediate success feedback banner and form reset.

### Test Scenario 4: Accessibility Audit (FR-008, SC-006)

1. Navigate through all interactive controls using only `Tab` and `Shift + Tab` keys.
2. Verify visible focus outlines on all buttons, tabs, inputs, and links.
3. Verify modal focus trapping and `Esc` key handling.
