import { z } from "zod";
import { sendContactEmails } from "./resend.js";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  project: z.string().min(1),
  message: z.string().min(10),
  language: z.enum(["fr", "en"]).default("fr"),
});

export async function handleContact(body) {
  const data = contactSchema.parse(body);
  await sendContactEmails(data);
}
