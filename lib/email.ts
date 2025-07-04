import nodemailer from 'nodemailer'
import type { ContactFormData } from '@/lib/types/contact'

// Configuration du transporteur email
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true pour 465, false pour les autres ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

// Template HTML pour l'email
const createEmailTemplate = (data: ContactFormData) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1f2937; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #374151; }
    .value { margin-top: 5px; padding: 10px; background: white; border-left: 4px solid #3b82f6; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 Nouveau contact depuis 404Factory</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">👤 Nom du client:</div>
        <div class="value">${data.name}</div>
      </div>
      
      <div class="field">
        <div class="label">📧 Email:</div>
        <div class="value">${data.email}</div>
      </div>
      
      <div class="field">
        <div class="label">🎯 Type de projet:</div>
        <div class="value">${data.project}</div>
      </div>
      
      <div class="field">
        <div class="label">💬 Message:</div>
        <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
  </div>
</body>
</html>
`

export const sendContactEmail = async (data: ContactFormData): Promise<boolean> => {
  try {
    const transporter = createTransporter()

    // Email pour vous (notification)
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'factory404@outlook.com',
      subject: `🚀 Nouveau contact: ${data.name} - ${data.project}`,
      html: createEmailTemplate(data),
    })

    // Email de confirmation pour le client
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: data.email,
      subject: '✅ Votre message a été reçu - 404Factory',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1f2937; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Message reçu !</h1>
            </div>
            <div class="content">
              <p>Bonjour <strong>${data.name}</strong>,</p>
              
              <p>Merci pour votre message concernant votre projet <strong>"${data.project}"</strong>.</p>
              
              <p>J'ai bien reçu votre demande et je vous répondrai dans les plus brefs délais :</p>
              <ul>
                <li>📧 <strong>Email :</strong> < 24h</li>
                <li>📋 <strong>Devis :</strong> < 48h</li>
              </ul>
              
              <p>En attendant, n'hésitez pas à consulter mes autres projets ou à me contacter directement si vous avez des questions urgentes.</p>
              
              <p>À bientôt,<br>
              <strong>Vincent - 404Factory</strong><br>
              📧 factory404@outlook.com<br>
              📱 +33 6 23 43 10 09</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return true
  } catch (error) {
    console.error('Erreur envoi email:', error)
    return false
  }
}
