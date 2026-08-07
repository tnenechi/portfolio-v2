<!--
SYNC IMPACT REPORT
Version change: Initial Template -> 1.0.0
Modified principles:
  - [PRINCIPLE_1_NAME] -> I. Code Quality & Architecture
  - [PRINCIPLE_2_NAME] -> II. Testing Standards & Verification
  - [PRINCIPLE_3_NAME] -> III. User Experience Consistency & Accessibility
  - [PRINCIPLE_4_NAME] -> IV. Performance & Optimization Requirements
Added sections:
  - Quality Gates & Engineering Constraints
  - Development Workflow & Specification Discipline
Removed sections:
  - [PRINCIPLE_5_NAME]
  - [SECTION_2_NAME]
  - [SECTION_3_NAME]
Templates requiring updates:
  - .specify/templates/plan-template.md (✅ aligned)
  - .specify/templates/spec-template.md (✅ aligned)
  - .specify/templates/tasks-template.md (✅ aligned)
Follow-up TODOs: None
-->

# Portfolio Constitution

## Core Principles

### I. Code Quality & Architecture
All code in this project MUST strictly adhere to modern TypeScript and Next.js best practices:
- **Strict Typing**: TypeScript MUST be configured and maintained without explicit `any` types unless explicitly documented and approved with a technical justification.
- **Architectural Scoping**: Components MUST default to React Server Components (RSC) and only use `'use client'` when interactive state or browser APIs are required.
- **Clean Architecture**: Code MUST maintain a strict separation of concerns between visual layout components, state management, and data/API abstractions.
- **Static Analysis Compliance**: All code MUST pass static analysis (`npm run lint` and TypeScript compilation) with zero errors and zero warnings.

### II. Testing Standards & Verification
Quality and functionality MUST be verified empirically through automated test suites and structured validation:
- **Verification Gates**: Every feature, refactor, or bug fix MUST be verified with test coverage (unit, component, or integration) or automated build checks before code completion is declared.
- **Regression Prevention**: Bug fixes MUST be accompanied by a regression test capturing the failure scenario prior to resolution.
- **Contract Integrity**: Component interfaces, API contracts, and public prop schemas MUST be validated via tests or strict type definitions to prevent integration breakage.

### III. User Experience Consistency & Accessibility
The user interface MUST deliver a high-craft, visually cohesive, and universally accessible experience:
- **Design System Cohesion**: All UI elements MUST utilize a unified color palette, harmonious typography scale, dynamic visual feedback, and smooth micro-animations.
- **Responsive Layouts**: Layouts MUST be fluid and responsive across desktop, tablet, and mobile viewports, adhering to a mobile-first design philosophy.
- **Accessibility Standards**: UI components MUST comply with WCAG 2.1 AA standards, incorporating semantic HTML5 tags, proper keyboard navigation, high color contrast, and descriptive ARIA attributes.
- **Deterministic UI Hooks**: Interactive and testable elements MUST possess unique, descriptive identifiers (`id` or `data-testid`) to support testing and automation.

### IV. Performance & Optimization Requirements
Application responsiveness and bundle efficiency MUST meet target performance metrics:
- **Core Web Vitals**: Pages MUST maintain optimal Core Web Vitals targets: Largest Contentful Paint (LCP) < 2.5s, Interaction to Next Paint (INP) < 200ms, and Cumulative Layout Shift (CLS) < 0.1.
- **Asset Optimization**: All images MUST leverage `next/image` with explicit width/height or dynamic blur placeholders, and custom typography MUST utilize `next/font` for zero layout shift.
- **Bundle Hygiene**: Heavy third-party libraries MUST be dynamic-imported or code-split to maintain lean initial JS bundle sizes.

## Quality Gates & Engineering Constraints

- **Pre-Commit / Pre-Merge Check**: Code MUST successfully pass `npm run lint` and `npm run build` prior to merge or deployment.
- **Dependency Discipline**: Third-party packages MUST be evaluated for maintenance, security vulnerabilities, and bundle footprint before introduction.

## Development Workflow & Specification Discipline

- **Spec-Driven Development**: Non-trivial features MUST begin with a specification and technical plan before implementation code is written.
- **Traceability**: All code changes MUST map directly to established specification requirements or explicit bug reports.

## Governance

- **Supremacy**: This Constitution supersedes all non-constitutional development guidelines, documentation, and informal team practices.
- **Amendment Procedure**: Amendments to this constitution require an explicit request or proposal, documentation of rationale, a minor or major version bump, and updating of dependent templates.
- **Versioning Policy**:
  - **MAJOR**: Incompatible principle removals or major shifts in project governance.
  - **MINOR**: Addition of new principles or significant expansion of existing standards.
  - **PATCH**: Wording improvements, formatting, non-semantic clarifications.
- **Compliance Review**: All feature designs, pull requests, and automated task execution MUST conduct a Constitution Check against these principles.

**Version**: 1.0.0 | **Ratified**: 2026-07-27 | **Last Amended**: 2026-07-27
