const RESEND_API_URL = "https://api.resend.com/emails";

const PROJECT_LABELS = {
  fr: {
    website: "Site web",
    automation: "Automatisation",
    consulting: "Consulting",
  },
  en: {
    website: "Website",
    automation: "Automation",
    consulting: "Consulting",
  },
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function nl2br(value) {
  return escapeHtml(value).replace(/\n/g, "<br>");
}

function notificationEmail({ name, email, project, message, language }) {
  const labels = PROJECT_LABELS[language] || PROJECT_LABELS.fr;
  const projectLabel = labels[project] || project;

  if (language === "en") {
    return {
      subject: "New message — 404Factory",
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Project:</strong> ${escapeHtml(projectLabel)}</p>
<p><strong>Message:</strong></p>
<p>${nl2br(message)}</p>`,
    };
  }

  return {
    subject: "Nouveau message — 404Factory",
    html: `<p><strong>Nom :</strong> ${escapeHtml(name)}</p>
<p><strong>Email :</strong> ${escapeHtml(email)}</p>
<p><strong>Projet :</strong> ${escapeHtml(projectLabel)}</p>
<p><strong>Message :</strong></p>
<p>${nl2br(message)}</p>`,
  };
}

function confirmationEmail({ name, language }) {
  if (language === "en") {
    return {
      subject: "Message received — 404Factory",
      html: `<p>Hi ${escapeHtml(name)},</p>
<p>Thanks for reaching out. We'll reply within 24h.</p>
<p>— 404Factory</p>`,
    };
  }

  return {
    subject: "Message reçu — 404Factory",
    html: `<p>Bonjour ${escapeHtml(name)},</p>
<p>Merci pour votre message. Nous vous répondrons sous 24h.</p>
<p>— 404Factory</p>`,
  };
}

async function sendResendEmail({ to, subject, html }) {
  const fromName = process.env.RESEND_FROM_NAME || "404Factory";
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${fromName} <${fromEmail}>`,
      to: [to],
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend API error (${response.status}): ${body}`);
  }
}

export async function sendContactEmails({
  name,
  email,
  project,
  message,
  language,
}) {
  const receiver =
    process.env.CONTACT_RECEIVER_EMAIL || "factory404@outlook.fr";

  await Promise.all([
    sendResendEmail({
      to: receiver,
      ...notificationEmail({ name, email, project, message, language }),
    }),
    sendResendEmail({
      to: email,
      ...confirmationEmail({ name, language }),
    }),
  ]);
}
