/**
 * Composable for consistent Organization schema across all pages
 * Provides standardized organization structured data for Amerus Financial
 */
export const useOrganizationSchema = () => {
  return {
    '@id': 'https://www.amerusfinancial.com#organization',
    '@type': 'Organization',
    name: 'Amerus Financial',
    url: 'https://www.amerusfinancial.com',
    logo: {
      '@type': 'ImageObject',
      url: '/images/logo.png',
      width: '300',
      height: '100'
    },
    description: 'Leading provider of insurance and financial services including health insurance, life insurance, and retirement planning solutions.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5115 S Lakeland Dr STE 1',
      addressLocality: 'Lakeland',
      addressRegion: 'FL',
      postalCode: '33813',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-888-441-7891',
      contactType: 'customer service',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://www.facebook.com/amerusfinancial',
      'https://www.linkedin.com/company/amerus-financial',
      'https://twitter.com/amerusfinancial'
    ],
    areaServed: {
      '@type': 'AdministrativeArea',
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