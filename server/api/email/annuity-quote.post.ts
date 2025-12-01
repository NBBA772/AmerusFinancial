import { z } from 'zod'
import { EmailServiceExtended } from '~/server/app/services/emailServiceExtended'

// Validation schema for the annuity quote form data
const annuityQuoteSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(1, 'Phone number is required'),
  company: z.string().optional(),
  state: z.string().min(1, 'State is required'),
  coverageTypes: z.array(z.string()).optional().default([]),
  businessDescription: z.string().optional(),
  preferredContact: z.string().optional(),
  insuranceType: z.string().default('Fixed & Indexed Annuities')
})

export default defineEventHandler(async (event) => {
  try {
    // Get the runtime config
    const config = useRuntimeConfig()
    
    // Parse and validate the request body
    const body = await readBody(event)
    const validatedData = annuityQuoteSchema.parse(body)
    
    // Initialize extended email service
    const emailService = new EmailServiceExtended(config.private.resendApiKey)
    
    // Send emails with all form data
    const result = await emailService.sendAnnuityQuoteRequest({
      insuranceType: validatedData.insuranceType,
      fullName: validatedData.fullName,
      email: validatedData.email,
      phone: validatedData.phone,
      company: validatedData.company,
      state: validatedData.state,
      coverageTypes: validatedData.coverageTypes,
      businessDescription: validatedData.businessDescription,
      preferredContact: validatedData.preferredContact,
    })
    
    // Return success response
    return {
      message: 'Annuity quote request sent successfully',
      ...result,
    }
    
  } catch (error) {
    console.error('Error sending annuity quote email:', error)
    
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
      statusMessage: 'Failed to send annuity quote request',
      data: { error: error instanceof Error ? error.message : 'Unknown error' },
    })
  }
})
