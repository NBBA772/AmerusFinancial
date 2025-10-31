/**
 * Composable for consistent Organization schema across all pages
 * Provides standardized organization structured data for Amerus Financial
 */
export const useOrganizationSchema = () => {
  return {
    '@type': 'Organization',
    name: 'Amerus Financial',
    url: 'https://www.amerusfinancial.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.amerusfinancial.com/images/logo.png',
      width: '300',
      height: '100'
    },
    description: 'Leading provider of insurance and financial services including health insurance, life insurance, and retirement planning solutions.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'United States',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-AMERUS',
      contactType: 'customer service',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://www.facebook.com/amerusfinancial',
      'https://www.linkedin.com/company/amerus-financial',
      'https://twitter.com/amerusfinancial'
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'United States'
    }
  }
}

/**
 * Composable for consistent Service provider schema
 * Returns the organization object formatted for use in Service schema
 */
export const useServiceProvider = () => {
  return useOrganizationSchema()
}