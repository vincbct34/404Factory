/**
 * @fileoverview Contact form state management and Resend integration
 * @module hooks/useContactForm
 */

import { useState } from "react";
import {
  createContactFormSchema,
  type ContactFormData,
  type ContactFormState,
} from "@/lib/types";
import { useLanguage } from "@/hooks/useLanguage";

/**
 * Hook for managing contact form state and submission
 * Handles validation, email sending via Resend (server-side), and success/error states
 * @returns Form data, state, and control functions
 */
export const useContactForm = () => {
  const { t, language } = useLanguage();

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

  /**
   * Validates form data against the contact form schema
   * @returns Error message if validation fails, null otherwise
   */
  const validateForm = (): string | null => {
    const schema = createContactFormSchema(t.validation);
    const result = schema.safeParse(formData);
    if (!result.success) {
      return result.error.issues[0]?.message || t.validation.validationError;
    }
    return null;
  };

  /**
   * Submits the contact form via the Resend-backed /api/contact endpoint
   * Server sends both notification (to owner) and confirmation (to user) emails
   */
  const submitForm = async (): Promise<void> => {
    const validationError = validateForm();
    if (validationError) {
      setState({ isLoading: false, isSuccess: false, error: validationError });
      return;
    }

    setState({ isLoading: true, isSuccess: false, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, language }),
      });

      if (!response.ok) {
        throw new Error(`Contact API error: ${response.status}`);
      }

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
        error: t.validation.sendFailed,
      });
      console.error("Contact form error:", error);
    }
  };

  /**
   * Updates a single field in the form data
   * Also clears any existing error when user starts typing
   * @param field - The field name to update
   * @param value - The new value
   */
  const updateFormData = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (state.error) {
      setState((prev) => ({ ...prev, error: null }));
    }
  };

  return {
    formData,
    state,
    updateFormData,
    submitForm,
  };
};
