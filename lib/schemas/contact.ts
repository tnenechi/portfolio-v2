import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters long.')
    .max(100, 'Name must be 100 characters or fewer.'),
  email: z.email('Please enter a valid email address.'),
  subject: z
    .string()
    .trim()
    .min(3, 'Subject must be at least 3 characters long.')
    .max(150, 'Subject must be 150 characters or fewer.'),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters long.')
    .max(2000, 'Message must be 2000 characters or fewer.'),
});

export type ContactSchemaInput = z.infer<typeof contactSchema>;
