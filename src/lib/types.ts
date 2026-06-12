/**
 * @fileoverview Type definitions and validation schemas for the 404Factory application
 * @module lib/types
 */

import { z } from "zod";

/** Validation message strings for the contact form schema */
export interface ValidationMessages {
  nameMin: string;
  emailInvalid: string;
  projectRequired: string;
  messageMin: string;
}

/** Creates a localized Zod schema for contact form validation */
export function createContactFormSchema(messages: ValidationMessages) {
  return z.object({
    name: z.string().min(2, messages.nameMin),
    email: z.email(messages.emailInvalid),
    project: z.string().min(1, messages.projectRequired),
    message: z.string().min(10, messages.messageMin),
  });
}

/** Zod schema for validating contact form submissions (used for type inference) */
export const contactFormSchema = createContactFormSchema({
  nameMin: "Le nom doit contenir au moins 2 caractères",
  emailInvalid: "Adresse email invalide",
  projectRequired: "Veuillez sélectionner un type de projet",
  messageMin: "Le message doit contenir au moins 10 caractères",
});

/** Inferred type from the contact form schema */
export type ContactFormData = z.infer<typeof contactFormSchema>;

/** State for the contact form submission process */
export interface ContactFormState {
  /** Whether the form is currently being submitted */
  isLoading: boolean;
  /** Whether the submission was successful */
  isSuccess: boolean;
  /** Error message if submission failed */
  error: string | null;
}
