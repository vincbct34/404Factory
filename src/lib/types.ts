import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  project: z.string().min(1, "Veuillez sélectionner un type de projet"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ContactFormState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

// Project types
export interface Project {
  name: string;
  image?: string; // Local fallback image
  url?: string; // URL to fetch OG image from
  type: string;
  tech: string;
  status: "DEPLOYED" | "DELIVERED" | "RUNNING" | "DEVELOPMENT";
  description: string;
  github: string;
}

// Service types
export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  command: string;
}

// Pricing types
export interface PricingOption {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  popular: boolean;
}
