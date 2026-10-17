'use client';

import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react';
import { Loader2, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactSchema } from '@/lib/schemas/contact';
import { cn } from '@/lib/utils';
import type { ContactInput } from '@/lib/types';

type FieldErrors = Partial<Record<keyof ContactInput, string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY_FORM: ContactInput = { name: '', email: '', subject: '', message: '' };

export function ContactForm() {
  const [form, setForm] = useState<ContactInput>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const validateField = (field: keyof ContactInput, value: string) => {
    const fieldSchema = contactSchema.shape[field];
    const result = fieldSchema.safeParse(value);
    setErrors((prev) => ({
      ...prev,
      [field]: result.success ? undefined : result.error.issues[0]?.message,
    }));
  };

  const handleChange = (field: keyof ContactInput) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      validateField(field, value);
    }
  };

  const handleBlur = (field: keyof ContactInput) => (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    validateField(field, e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (typeof field === 'string' && !(field in nextErrors)) {
          nextErrors[field as keyof ContactInput] = issue.message;
        }
      }
      setErrors(nextErrors);
      setStatus('error');
      setStatusMessage('Please fix the highlighted fields and try again.');
      return;
    }

    setStatus('submitting');
    setStatusMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });
      const data: { success: boolean; message?: string; errors?: FieldErrors } =
        await res.json();

      if (!res.ok || !data.success) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setStatus('error');
        setStatusMessage(
          data.message ?? 'Unable to send your message right now. Please email directly.'
        );
        return;
      }

      setStatus('success');
      setStatusMessage(data.message ?? 'Thank you for your message!');
      setForm(EMPTY_FORM);
      setErrors({});
    } catch {
      setStatus('error');
      setStatusMessage(
        'Unable to reach the server. Please email directly or try again shortly.'
      );
    }
  };

  const isSubmitting = status === 'submitting';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-space-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        <div className="space-y-space-2xs">
          <label htmlFor="contact-name" className="text-sm font-medium">
            Name
          </label>
          <Input
            id="contact-name"
            name="name"
            value={form.name}
            onChange={handleChange('name')}
            onBlur={handleBlur('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            disabled={isSubmitting}
            autoComplete="name"
          />
          {errors.name && (
            <p id="contact-name-error" role="alert" className="text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-space-2xs">
          <label htmlFor="contact-email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            disabled={isSubmitting}
            autoComplete="email"
          />
          {errors.email && (
            <p id="contact-email-error" role="alert" className="text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-space-2xs">
        <label htmlFor="contact-subject" className="text-sm font-medium">
          Subject
        </label>
        <Input
          id="contact-subject"
          name="subject"
          value={form.subject}
          onChange={handleChange('subject')}
          onBlur={handleBlur('subject')}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
          disabled={isSubmitting}
        />
        {errors.subject && (
          <p id="contact-subject-error" role="alert" className="text-xs text-destructive">
            {errors.subject}
          </p>
        )}
      </div>

      <div className="space-y-space-2xs">
        <label htmlFor="contact-message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="contact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange('message')}
          onBlur={handleBlur('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex items-center gap-space-sm pt-space-2xs">
        <Button
          type="submit"
          size="lg"
          data-testid="contact-submit-btn"
          aria-label="Send contact message"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 mr-space-2xs animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-4 w-4 mr-space-2xs" aria-hidden="true" />
          )}
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </Button>

        <div aria-live="polite" className="flex-1">
          {status === 'success' && statusMessage && (
            <p className="flex items-center gap-space-2xs text-sm text-emerald-500">
              <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              {statusMessage}
            </p>
          )}
          {status === 'error' && statusMessage && (
            <p className={cn('flex items-center gap-space-2xs text-sm text-destructive')}>
              <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              {statusMessage}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
