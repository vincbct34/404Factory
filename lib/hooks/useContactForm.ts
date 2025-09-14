import { useState } from "react";
import {
  contactFormSchema,
  type ContactFormData,
  type ContactFormState,
  type ApiResponse,
} from "@/lib/types/contact";

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
      return result.error.errors[0]?.message || "Erreur de validation";
    }
    return null;
  };

  const submitForm = async (): Promise<void> => {
    // Validation côté client
    const validationError = validateForm();
    if (validationError) {
      setState({ isLoading: false, isSuccess: false, error: validationError });
      return;
    }

    setState({ isLoading: true, isSuccess: false, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (data.success) {
        setState({ isLoading: false, isSuccess: true, error: null });
        // Reset du formulaire en cas de succès
        setFormData({
          name: "",
          email: "",
          project: "",
          message: "",
        });
      } else {
        setState({
          isLoading: false,
          isSuccess: false,
          error: data.error || data.message || "Erreur lors de l'envoi",
        });
      }
    } catch (error) {
      setState({
        isLoading: false,
        isSuccess: false,
        error:
          "Erreur de connexion : " +
          (error instanceof Error ? error.message : "Veuillez réessayer."),
      });
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
