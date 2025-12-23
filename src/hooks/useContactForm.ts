import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  contactFormSchema,
  type ContactFormData,
  type ContactFormState,
} from "@/lib/types";

// EmailJS configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_NOTIFICATION = import.meta.env
  .VITE_EMAILJS_TEMPLATE_NOTIFICATION;
const EMAILJS_TEMPLATE_CONFIRMATION = import.meta.env
  .VITE_EMAILJS_TEMPLATE_CONFIRMATION;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const useContactForm = () => {
  const [state, setState] = useState<ContactFormState>({
    isLoading: false,
    isSuccess: false,
    error: null,
  });

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const validateForm = (): string | null => {
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      return result.error.issues[0]?.message || "Erreur de validation";
    }
    return null;
  };

  const submitForm = async (): Promise<void> => {
    // Client-side validation
    const validationError = validateForm();
    if (validationError) {
      setState({ isLoading: false, isSuccess: false, error: validationError });
      return;
    }

    setState({ isLoading: true, isSuccess: false, error: null });

    const templateParams = {
      site_name: "404Factory",
      name: formData.name,
      email: formData.email,
      project: formData.project,
      message: formData.message,
    };

    try {
      // Send both emails in parallel
      await Promise.all([
        // 1. Notification email to owner (you)
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_NOTIFICATION,
          templateParams,
          EMAILJS_PUBLIC_KEY,
        ),
        // 2. Confirmation email to user
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_CONFIRMATION,
          templateParams,
          EMAILJS_PUBLIC_KEY,
        ),
      ]);

      setState({ isLoading: false, isSuccess: true, error: null });

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        project: "",
        message: "",
      });
    } catch (error) {
      setState({
        isLoading: false,
        isSuccess: false,
        error: "Erreur lors de l'envoi. Veuillez réessayer.",
      });
      console.error("EmailJS error:", error);
    }
  };

  const resetState = () => {
    setState({ isLoading: false, isSuccess: false, error: null });
  };

  const updateFormData = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear errors when user starts typing
    if (state.error) {
      setState((prev) => ({ ...prev, error: null }));
    }
  };

  return {
    formData,
    state,
    updateFormData,
    submitForm,
    resetState,
    validateForm,
  };
};
