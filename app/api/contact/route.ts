import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/types/contact'
import { sendContactEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Data validation using Zod schema
    const validationResult = contactFormSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Données invalides',
          error: validationResult.error.errors[0]?.message || 'Erreur de validation'
        },
        { status: 400 }
      )
    }

    const formData = validationResult.data

    // Check for required environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Variables d\'environnement SMTP manquantes')
      return NextResponse.json(
        { 
          success: false, 
          message: 'Service temporairement indisponible' 
        },
        { status: 500 }
      )
    }

    // Send the email
    const emailSent = await sendContactEmail(formData)

    if (!emailSent) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Erreur lors de l\'envoi du message' 
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Message envoyé avec succès ! Je vous répondrai rapidement.'
    })

  } catch (error) {
    console.error('Erreur API contact:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur serveur interne' 
      },
      { status: 500 }
    )
  }
}
