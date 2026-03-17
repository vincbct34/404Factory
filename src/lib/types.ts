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
    email: z.string().email(messages.emailInvalid),
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

/** Project data structure for the portfolio section */
export interface Project {
  /** Display name of the project */
  name: string;
  /** Local fallback image path */
  image?: string;
  /** URL to fetch OpenGraph image from */
  url?: string;
  /** Project category/type */
  type: string;
  /** Technologies used */
  tech: string;
  /** Current deployment status */
  status: "DEPLOYED" | "DELIVERED" | "RUNNING" | "DEVELOPMENT";
  /** Project description */
  description: string;
  /** GitHub or project URL */
  github: string;
}

/** Service offering data structure */
export interface Service {
  /** Icon component for the service */
  icon: React.ComponentType<{ className?: string }>;
  /** Service title */
  title: string;
  /** Service description */
  description: string;
  /** Terminal command displayed with the service */
  command: string;
}

/** Pricing tier data structure */
export interface PricingOption {
  /** Icon component for the pricing tier */
  icon: React.ComponentType<{ className?: string }>;
  /** Pricing tier title */
  title: string;
  /** Short description of the tier */
  subtitle: string;
  /** Price value or custom text */
  price: string;
  /** List of features included */
  features: string[];
  /** Whether this is the highlighted/popular option */
  popular: boolean;
}
