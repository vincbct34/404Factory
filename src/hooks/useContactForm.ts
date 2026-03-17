/**
 * @fileoverview Contact form state management and EmailJS integration
 * @module hooks/useContactForm
 */

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  createContactFormSchema,
  type ContactFormData,
  type ContactFormState,
} from "@/lib/types";
import { useLanguage } from "@/hooks/useLanguage";

/** EmailJS service configuration from environment variables */
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_NOTIFICATION = import.meta.env
  .VITE_EMAILJS_TEMPLATE_NOTIFICATION;
const EMAILJS_TEMPLATE_CONFIRMATION = import.meta.env
  .VITE_EMAILJS_TEMPLATE_CONFIRMATION;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Hook for managing contact form state and submission
 * Handles validation, email sending via EmailJS, and success/error states
 * @returns Form data, state, and control functions
 */
export const useContactForm = () => {
  const { t } = useLanguage();

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
   * Submits the contact form via EmailJS
   * Sends both notification (to owner) and confirmation (to user) emails
   */
  const submitForm = async (): Promise<void> => {
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
      // Send notification and confirmation emails in parallel
      await Promise.all([
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_NOTIFICATION,
          templateParams,
          EMAILJS_PUBLIC_KEY,
        ),
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
        error: t.validation.sendFailed,
      });
      console.error("EmailJS error:", error);
    }
  };

  /** Resets the form state to initial values */
  const resetState = () => {
    setState({ isLoading: false, isSuccess: false, error: null });
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
    resetState,
    validateForm,
  };
};
