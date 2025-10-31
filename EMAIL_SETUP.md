# Email Setup with Resend

This document explains how to set up and use email functionality with Resend in your Amerus Financial Nuxt 3 application.

## Setup

### 1. Install Dependencies

The Resend package has been installed:
```bash
npm install resend
```

### 2. Environment Variables

Add the following environment variable to your `.env` file:

```env
RESEND_API_KEY="re_your_resend_api_key_here"
```

### 3. Domain Verification

Before sending emails, you need to verify your domain with Resend:

1. Go to [Resend Dashboard](https://resend.com/domains)
2. Add your domain: `amerusfinancial.com`
3. Follow the DNS verification steps
4. Update the `from` addresses in the email service to use your verified domain

## Usage

### Quote Request Form

The homepage quote form (`MultiStepForm.vue`) now sends emails using the Resend API:

- **Team notification**: Sent to `rudolfgiessen@amerusfinancial.com`
- **Customer confirmation**: Sent to the customer's email

API endpoint: `POST /api/email/quote`

**Request body:**
```json
{
  "insuranceType": "Health Insurance",
  "fullName": "John Doe", 
  "email": "john@example.com",
  "phone": "555-123-4567"
}
```

### Contact Form

A general contact form API is available:

API endpoint: `POST /api/email/contact`

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "subject": "Question about services",
  "message": "I have a question about your services..."
}
```

## Email Service

The `EmailService` class (`server/app/services/emailService.ts`) provides reusable methods:

### Available Methods

#### `sendQuoteRequest(data)`
Sends both team notification and customer confirmation for quote requests.

#### `sendContactForm(data)` 
Sends contact form submissions to the team.

### Example Usage

```typescript
import { EmailService } from '~/server/app/services/emailService'

const emailService = new EmailService(config.private.resendApiKey)

// Send quote request
await emailService.sendQuoteRequest({
  insuranceType: 'Health Insurance',
  fullName: 'John Doe',
  email: 'john@example.com', 
  phone: '555-123-4567'
})

// Send contact form
await emailService.sendContactForm({
  name: 'John Doe',
  email: 'john@example.com',
  subject: 'General Inquiry',
  message: 'I need help with...'
})
```

## Email Templates

### Team Notification Template
- Professional layout with company branding
- Tabular contact information display
- Clear call-to-action for follow-up
- Submission timestamp

### Customer Confirmation Template  
- Welcoming tone with personalized greeting
- Clear next steps and expectations
- Contact information for questions
- Professional branding

## Domain Configuration

Before going to production, update these domain references in the email service:

1. `quotes@amerusfinancial.com` - for quote notifications
2. `noreply@amerusfinancial.com` - for customer confirmations  
3. `contact@amerusfinancial.com` - for contact form submissions

## Features

### Form Validation
- Zod schema validation for all email endpoints
- Proper error handling and user feedback
- Type-safe request/response handling

### User Experience
- Loading states during form submission
- Success/error message display
- Form reset after successful submission
- Step validation in multi-step form

### Email Features
- HTML templates with responsive design
- Reply-to headers for customer responses
- Professional branding and styling
- Automatic timestamps

## Testing

To test the email functionality:

1. Set up your Resend API key
2. Verify your domain (or use Resend's sandbox for testing)
3. Submit the quote form on your homepage
4. Check that emails are received at the configured addresses

## Troubleshooting

### Common Issues

1. **Domain not verified**: Make sure your domain is verified in Resend dashboard
2. **API key invalid**: Check that `RESEND_API_KEY` is correctly set
3. **Rate limits**: Resend has rate limits on their free tier
4. **DNS issues**: Ensure DNS records are properly configured for domain verification

### Logs

Check server logs for detailed error information:
```bash
npm run dev
```

Email sending errors will be logged to the console with full details.