import { z } from 'zod'
import { EmailService } from '~/server/app/services/emailService'

// Validation schema for contact form data
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  subject: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
})

export default defineEventHandler(async (event) => {
  try {
    // Get the runtime config
    const config = useRuntimeConfig()
    
    // Parse and validate the request body
    const body = await readBody(event)
    const validatedData = contactSchema.parse(body)
    
    // Initialize email service
    const emailService = new EmailService(config.private.resendApiKey)
    
    // Send contact form email
    const result = await emailService.sendContactForm(validatedData)
    
    // Return success response
    return {
      message: 'Contact form submitted successfully',
      ...result,
    }
    
  } catch (error) {
    console.error('Error sending contact email:', error)
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Validation Error',
        data: error.errors,
      })
    }
    
    // Handle other errors
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send contact form',
      data: { error: error instanceof Error ? error.message : 'Unknown error' },
    })
  }
})