import { contactSchema } from '@/lib/schemas/contact';
import { resend, CONTACT_FROM_ADDRESS } from '@/lib/resend';
import { profileData } from '@/lib/data/profile';
import type { ContactApiResponse, ContactInput } from '@/lib/types';

const CONTACT_RECIPIENT = profileData.socials
  .find((social) => social.platform === 'email')
  ?.url.replace('mailto:', '');

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      {
        success: false,
        message: 'Unable to process message delivery at this time. Please email directly.',
      } satisfies ContactApiResponse,
      { status: 400 }
    );
  }

  const result = contactSchema.safeParse(body);

  if (!result.success) {
    const errors: Partial<Record<keyof ContactInput, string>> = {};

    for (const issue of result.error.issues) {
      const field = issue.path[0];
      if (typeof field === 'string' && !(field in errors)) {
        errors[field as keyof ContactInput] = issue.message;
      }
    }

    return Response.json(
      { success: false, errors } satisfies ContactApiResponse,
      { status: 400 }
    );
  }

  const deliveryErrorResponse = () =>
    Response.json(
      {
        success: false,
        message: 'Unable to process message delivery at this time. Please email directly.',
      } satisfies ContactApiResponse,
      { status: 500 }
    );

  if (!CONTACT_RECIPIENT) {
    return deliveryErrorResponse();
  }

  const { name, email, subject, message } = result.data;

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM_ADDRESS,
      to: CONTACT_RECIPIENT,
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      text: `New message from ${name} (${email})\n\n${message}`,
    });

    if (error) {
      return deliveryErrorResponse();
    }
  } catch {
    return deliveryErrorResponse();
  }

  return Response.json(
    {
      success: true,
      message: 'Thank you for your message! I will respond to your email shortly.',
      timestamp: new Date().toISOString(),
    } satisfies ContactApiResponse,
    { status: 200 }
  );
}
