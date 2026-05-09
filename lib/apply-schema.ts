// Zod schema shared between the client form and the server API route.
// Both import from here so validation stays in sync automatically.
// Simplified to 3 fields: name, contact, message.

import { z } from "zod";

export const applySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  contact: z
    .string()
    .min(2, "Tell us how to reach you — email, phone, or @handle")
    .describe("Email, phone, Instagram, Telegram, WhatsApp — whatever works for you"),
  message: z
    .string()
    .max(800, "Keep it under 800 characters")
    .optional()
    .describe("Anything we should know before we talk"),
});

export type ApplyFormValues = z.infer<typeof applySchema>;
