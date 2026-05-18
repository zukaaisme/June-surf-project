// Shared by the client form and the /api/apply route handler.

import { z } from "zod";

export const applySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  contact: z
    .string()
    .min(2, "Tell us how to reach you — email, phone, or @handle"),
  whatsapp: z
    .string()
    .min(5, "WhatsApp number is required so we can reach you fast"),
  instagram: z.string().trim().optional().or(z.literal("")),
  plan: z.string().optional().or(z.literal("")),
  message: z.string().max(800, "Keep it under 800 characters").optional().or(z.literal("")),
  // Honeypot — humans see a `display:none` field they can't focus or fill. Bots that scrape
  // form HTML and submit every field will populate it. Server rejects any non-empty value.
  // Kept optional so real submissions (where it's empty) pass.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ApplyFormValues = z.infer<typeof applySchema>;
