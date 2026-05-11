// Shared by the client form and the /api/apply route handler.

import { z } from "zod";

export const applySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  contact: z
    .string()
    .min(2, "Tell us how to reach you — email, phone, or @handle"),
  instagram: z.string().trim().optional().or(z.literal("")),
  plan: z.string().optional().or(z.literal("")),
  message: z.string().max(800, "Keep it under 800 characters").optional().or(z.literal("")),
});

export type ApplyFormValues = z.infer<typeof applySchema>;
