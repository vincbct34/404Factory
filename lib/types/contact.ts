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

export interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}
