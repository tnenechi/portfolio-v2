# Interface Contract: Contact Form Submission & Client Validation API

**Feature**: Modern Developer Portfolio
**Spec**: [spec.md](../spec.md)
**Branch**: `001-developer-portfolio`

---

## 1. Contact Form Client-Server Contract

### Target Endpoint / Action

`POST /api/contact` (Optional API route) OR Client Simulation Action with Formspree / Web3Forms / Resend webhook fallback.

---

### Request Payload (`application/json`)

```json
{
  "name": "Alex Developer",
  "email": "alex@example.com",
  "subject": "Inquiry regarding Senior Frontend Role",
  "message": "Hi, I checked your portfolio and would love to discuss a potential engineering opportunity on our team."
}
```

#### Field Schema Definitions

| Field     | Type     | Required | Constraints                                   |
| --------- | -------- | -------- | --------------------------------------------- |
| `name`    | `string` | Yes      | `min_length: 2`, `max_length: 100`, trimmed   |
| `email`   | `string` | Yes      | RFC 5322 compliant email string               |
| `subject` | `string` | Yes      | `min_length: 3`, `max_length: 150`, trimmed   |
| `message` | `string` | Yes      | `min_length: 10`, `max_length: 2000`, trimmed |

---

### Response Contract

#### Success Response (`200 OK`)

```json
{
  "success": true,
  "message": "Thank you for your message! I will respond to your email shortly.",
  "timestamp": "2026-07-29T17:40:00Z"
}
```

#### Validation Error Response (`400 Bad Request`)

```json
{
  "success": false,
  "errors": {
    "email": "Please enter a valid email address.",
    "message": "Message must be at least 10 characters long."
  }
}
```

#### Server Error Response (`500 Internal Server Error`)

```json
{
  "success": false,
  "message": "Unable to process message delivery at this time. Please email directly."
}
```

---

## 2. Client-Side Event Hooks & Deterministic Data Attributes

To satisfy **Constitution Principle III** (Deterministic UI Hooks) and **WCAG 2.1 AA** standards:

| Interactive Target         | `data-testid` Attribute | ARIA Role / Label                                                     |
| -------------------------- | ----------------------- | --------------------------------------------------------------------- |
| Hero Work CTA Button       | `hero-view-work-btn`    | `role="button"`, `aria-label="Navigate to projects gallery"`          |
| Project Card Item          | `project-card-{id}`     | `role="article"`                                                      |
| Project Detail Modal       | `project-modal-{id}`    | `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-title"` |
| Experience Node Card       | `experience-node-{id}`  | `role="listitem"`                                                     |
| Contact Form Submit Button | `contact-submit-btn`    | `aria-label="Send contact message"`                                   |
| Theme Toggle Switch        | `theme-toggle-btn`      | `aria-label="Switch between light and dark mode"`                     |
