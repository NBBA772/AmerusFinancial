import { Resend } from 'resend'

export class EmailServiceExtended {
  private resend: Resend
  
  constructor(apiKey: string) {
    this.resend = new Resend(apiKey)
  }
  
  /**
   * Send a comprehensive annuity quote request email to the team and confirmation to customer
   */
  async sendAnnuityQuoteRequest(data: {
    insuranceType: string
    fullName: string
    email: string
    phone: string
    company?: string
    state?: string
    coverageTypes?: string[]
    businessDescription?: string
    preferredContact?: string
  }) {
    const { 
      insuranceType, 
      fullName, 
      email, 
      phone, 
      company,
      state,
      coverageTypes = [],
      businessDescription,
      preferredContact
    } = data
    
    // Email to team
    const teamEmailResult = await this.resend.emails.send({
      from: 'noreply@updates.amerusfinancial.com',
    //   to: ['developer@businessbenefitalliance.com','timbaggett@amerusfinancial.com','amanda@amerusfinancial.com','leah@amerusfinancial.com'],
          to: ['developer@businessbenefitalliance.com'],
      subject: `New ${insuranceType} Quote Request`,
      html: this.generateTeamAnnuityEmailTemplate(data),
      replyTo: email,
    })
    
    // Confirmation email to customer
    const customerEmailResult = await this.resend.emails.send({
      from: 'noreply@updates.amerusfinancial.com',
      to: [email],
      subject: 'Thank you for your quote request - Amerus Financial',
      html: this.generateCustomerAnnuityEmailTemplate(data),
    })
    
    return {
      teamEmailId: teamEmailResult.data?.id,
      customerEmailId: customerEmailResult.data?.id,
      success: true
    }
  }
  
  /**
   * Generate HTML template for team notification email (Annuity)
   */
  private generateTeamAnnuityEmailTemplate(data: {
    insuranceType: string
    fullName: string
    email: string
    phone: string
    company?: string
    state?: string
    coverageTypes?: string[]
    businessDescription?: string
    preferredContact?: string
  }) {
    const { 
      insuranceType, 
      fullName, 
      email, 
      phone, 
      company,
      state,
      coverageTypes = [],
      businessDescription,
      preferredContact
    } = data
    
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #30BCFE; border-bottom: 2px solid #30BCFE; padding-bottom: 10px;">
          New ${insuranceType} Quote Request
        </h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 180px;">Full Name:</td>
              <td style="padding: 8px 0; color: #333;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #333;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0; color: #333;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Insurance Type:</td>
              <td style="padding: 8px 0; color: #333;">${insuranceType}</td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Company:</td>
              <td style="padding: 8px 0; color: #333;">${company}</td>
            </tr>` : ''}
            ${state ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">State:</td>
              <td style="padding: 8px 0; color: #333;">${state}</td>
            </tr>` : ''}
            ${preferredContact ? `<tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Preferred Contact:</td>
              <td style="padding: 8px 0; color: #333;">${preferredContact}</td>
            </tr>` : ''}
          </table>
        </div>
        
        ${coverageTypes.length > 0 ? `
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Coverage Types Requested</h3>
          <ul style="list-style: none; padding: 0; margin: 0;">
            ${coverageTypes.map(type => `<li style="padding: 4px 0; color: #555;">✓ ${type}</li>`).join('')}
          </ul>
        </div>
        ` : ''}
        
        ${businessDescription ? `
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Business Description</h3>
          <p style="color: #555; line-height: 1.6; white-space: pre-wrap; margin: 0;">${businessDescription}</p>
        </div>
        ` : ''}
        
        <div style="background-color: #30BCFE; color: white; padding: 15px; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">
            This quote request was submitted through the Amerus Financial website.
            Please follow up with the customer within 24 hours.
          </p>
        </div>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
          <p>Amerus Financial • Submitted on ${new Date().toLocaleDateString()}</p>
        </div>
      </div>
    `
  }
  
  /**
   * Generate HTML template for customer confirmation email (Annuity)
   */
  private generateCustomerAnnuityEmailTemplate(data: {
    insuranceType: string
    fullName: string
    email: string
    phone: string
    company?: string
    state?: string
    coverageTypes?: string[]
    businessDescription?: string
    preferredContact?: string
  }) {
    const { insuranceType, fullName } = data
    
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #30BCFE; border-bottom: 2px solid #30BCFE; padding-bottom: 10px;">
          Thank You for Your Quote Request
        </h2>
        
        <p>Dear ${fullName},</p>
        
        <p>Thank you for requesting a quote from Amerus Financial. We have received your request for <strong>${insuranceType}</strong> coverage.</p>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">What happens next?</h3>
          <ul style="color: #555; line-height: 1.6;">
            <li>One of our licensed insurance professionals will contact you within 24 hours</li>
            <li>We'll discuss your specific needs and provide personalized recommendations</li>
            <li>You'll receive a detailed quote tailored to your requirements</li>
            <li>No obligation to purchase - we're here to help you understand your options</li>
          </ul>
        </div>
        
        <p>If you have any immediate questions, please don't hesitate to contact us at:</p>
        <ul style="color: #555;">
          <li>Email: timbaggett@amerusfinancial.com</li>
          <li>Phone: 888-441-7890</li>
        </ul>
        
        <div style="background-color: #30BCFE; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
          <p style="margin: 0; font-weight: bold;">We're committed to finding you the best coverage at the best price.</p>
        </div>
        
        <p>Best regards,<br>
        The Amerus Financial Team</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
          <p>Amerus Financial<br>
          Your trusted partner in financial protection</p>
        </div>
      </div>
    `
  }
}
