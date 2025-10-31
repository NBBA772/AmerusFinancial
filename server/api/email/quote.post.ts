import { z } from 'zod'
import { EmailService } from '~/server/app/services/emailService'

// Validation schema for the form data
const quoteSchema = z.object({
  insuranceType: z.string().min(1, 'Insurance type is required'),
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(1, 'Phone number is required'),
})

export default defineEventHandler(async (event) => {
  try {
    // Get the runtime config
    const config = useRuntimeConfig()
    
    // Parse and validate the request body
    const body = await readBody(event)
    const validatedData = quoteSchema.parse(body)
    
    // Initialize email service
    const emailService = new EmailService(config.private.resendApiKey)
    
    // Send emails
    const result = await emailService.sendQuoteRequest(validatedData)
    
    // Return success response
    return {
      message: 'Quote request sent successfully',
      ...result,
    }
    
  } catch (error) {
    console.error('Error sending quote email:', error)
    
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
      statusMessage: 'Failed to send quote request',
      data: { error: error instanceof Error ? error.message : 'Unknown error' },
    })
  }
})