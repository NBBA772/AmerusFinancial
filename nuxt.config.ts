
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  components: {
    "dirs": [
      {
        "path": "~/components", 
        "global": true,
        pathPrefix: false,
        preload: true,
      }
      
    ]
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/seo',
    'nuxt-simple-sitemap'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  colorMode: {
    classSuffix: ''
  },
  content: {
    highlight: {
      theme: 'github-dark',
      preload: [
        'vue',
      ]
    },
    navigation: {
      fields: ['author', 'subject', 'position']
    }
  },
  runtimeConfig: {
    private: {
      stripeSecretKey: process.env.STRIPE_SECRET_KEY,
      db: process.env.DATABASE_URL,
      resendApiKey: process.env.RESEND_API_KEY,
    },
    public: {
      GHL_API_KEY: process.env.GHL_API_KEY,
      appDomain: process.env.APP_DOMAIN,
      gitHash: process.env.GITHUB_SHA,
      releaseVersion: process.env.RELEASE_VERSION,
      enableThirdPartyScripts:
        process.env.NUXT_PUBLIC_ENABLE_THIRD_PARTY_SCRIPTS === 'true' || false,
    }
  },
  experimental: {
    writeEarlyHints: false,
  },
  typescript: {
    typeCheck: false // Disable type checking during build to avoid errors
  },
  image: {
    // IPX options
    ipx: {
      // Specify IPX options here
      // For example:
      // domains: ['example.com'],
      // dir: '/path/to/cache',
      // sharp: {},
      // headers: {}
    },
    domains: ['www.amerusfinancial.com'],
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.amerusfinancial.com',
    name: 'Amerus Financial',
    description: 'Amerus Financial provides retirement planning, insurance solutions, and financial guidance for individuals and businesses.',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
    indexable: true, // Changed to true for SEO
    trailingSlash: true
  },
  sitemap: {
    enabled: true,
    defaults: {
      changefreq: 'daily',
      priority: 0.5,
      // Use date-only format for lastmod to satisfy validators (YYYY-MM-DD)
      lastmod: new Date().toISOString().slice(0, 10)
    },
    dynamicUrlsApiEndpoint: '/api/sitemap-urls',
    exclude: [
      '/_templates/**',
      '/dashboard/**',
      '/admin/**'
    ]
  },
  robots: {
    enabled: true,
    sitemap: '/sitemap.xml',
    disallow: [
      '/_templates/',
      '/dashboard/',
      '/admin/'
    ]
  },
  seo: {
    redirectToCanonicalSiteUrl: true
  },
  schemaOrg: {
    identity: {
      '@id': 'https://www.amerusfinancial.com/#identity',
      '@type': 'Organization',
      name: 'Amerus Financial',
      url: 'https://www.amerusfinancial.com/',
      logo: 'https://www.amerusfinancial.com/img/logo_white.png'
    }
  },
  generate: {
    // Specify the routes to generate statically
    // routes: ['/about-us', '/get-started'],
    // Optionally, you can define a function to dynamically generate routes
    // routes: async () => {
    //   // Fetch routes from an API or database
    //   const routes = await fetchRoutes();
    //   return routes;
    // },
  },
  nitro: {
    compressPublicAssets: true,
    esbuild: {
      options: {
        target: 'esnext'
      }
    },
    
  },
    routeRules: {
       '/**': {
        headers: {
          'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' data: https://www.google-analytics.com https://www.googletagmanager.com https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: blob:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://api.iconify.design https://api.unisvg.com https://api.simplesvg.com; frame-src 'self' https://www.google.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self';"
        }
      },
    // Misc Redirects 
    '/ns1.amerusfinancial.com/': { redirect: '/', statusCode: 301 },
    '/ns2.amerusfinancial.com/': { redirect: '/', statusCode: 301 },
    '/rome-georgia/': { redirect: '/', statusCode: 301 },
    '/contact-insurance-agency/': { redirect: '/about-us', statusCode: 301 },
    '/player': { redirect: '/contact', statusCode: 301 },
    '/content': { redirect: '/', statusCode: 301 },
    '/appointments/': { redirect: '/contact', statusCode: 301 },
    '/register/': { redirect: '/', statusCode: 301 },
    '/dashboard': { redirect: '/', statusCode: 301 },
    '/learn-about-amerus-financial/' : { redirect: '/about-us', statusCode: 301 },
    '/dev/wp-content/uploads/2017/07/African-American-Family-600x415.jpg' : { redirect: '/', statusCode: 301 },
    '/agent-login/' : { redirect: '/', statusCode: 301 },
    '/life-insurance-request/' : { redirect: '/contact', statusCode: 301 },
    '/wp-content/uploads/2020/12/99a81103d2a55eb36b697a1b53577944.jpg' : { redirect: '/', statusCode: 301 },
    '/wp-content/uploads/2017/05/Medicare-Website-Ad-compressor-1.jpg' : { redirect: '/', statusCode: 301 },
    '/events/amerus-agent-training-convention/' : { redirect: '/', statusCode: 301 },
    '/healthinsurance/es/index.html' : { redirect: '/', statusCode: 301 },
    '/wp-content/uploads/2020/12/9c95087daf7e2f5793a770b9bf0c24c9-768x512.jpg' : { redirect: '/', statusCode: 301 },
    '/employee-enrollment-health-app/' : { redirect: '/contact', statusCode: 301 },
    '/wp-content/uploads/2020/08/Amerus-website-ad-headers3-1-scaled.jpg' : { redirect: '/', statusCode: 301 },
    '/wp-content/uploads/2020/12/portrait-smiling-senior-couple-home-1536x1024.jpg' : { redirect: '/', statusCode: 301 },
    '/onfo' : { redirect: '/', statusCode: 301 },
    '/info' : { redirect: '/', statusCode: 301 },
    '/api/_content/query/YhjePIzbUf.1762546881745.json?_params=%7B%22first%22:true,%22where%22:%5B%7B%22_path%22:%22/senior-whole-life-insurance-everything-you-need-to-know%22%7D%5D,%22sort%22:%5B%7B%22_file%22:1,%22$numeric%22:true%7D%5D%7D' : { redirect: '/', statusCode: 301 },
    '/subscribe' : { redirect: '/', statusCode: 301 },
    '/PrivacyPolicy' : { redirect: '/privacy-policy', statusCode: 301 },
    '/index.php' : { redirect: '/', statusCode: 301 },
    '/new-client-census-current-coverage/' : { redirect: '/', statusCode: 301 },
    '/category/annuities/' : { redirect: '/', statusCode: 301 },
    '/amerus-events/' : { redirect: '/', statusCode: 301 },
    '/janique-chaney/' : { redirect: '/', statusCode: 301 },
    '/gery-craig/' : { redirect: '/', statusCode: 301 },
    '/elementor-5250/' : { redirect: '/', statusCode: 301 },
    '/rob-skinner/' : { redirect: '/', statusCode: 301 },
    '/Medicare/index.html' : { redirect: '/', statusCode: 301 },
    '/category/medicare/page/2/?et_blog' : { redirect: '/', statusCode: 301 },
    '/home-owners/' : { redirect: '/home/property-protection', statusCode: 301 },
    '/new-client-census-mark-dale/' : { redirect: '/', statusCode: 301 },
    '/lifeinsurance/privacy-policy.html' : { redirect: '/privacy-policy', statusCode: 301 },
    '/ariel-scalici/' : { redirect: '/', statusCode: 301 },
    '/duplicate/insurance-service' : { redirect: '/', statusCode: 301 },
    '/cameronfurrow/insurance-services/' : { redirect: '/', statusCode: 301 },
    '/agent-resources/' : { redirect: '/resources', statusCode: 301 },
    '/carolinametalsgroup/' : { redirect: '/', statusCode: 301 },
    '/duplicate/privacy-policy/' : { redirect: '/privacy-policy', statusCode: 301 },
    '/healthinsurancequote/' : { redirect: '/contact', statusCode: 301 },
    '/coverage-and-premium-confirmation/' : { redirect: '/contact', statusCode: 301 },
    '/policies/sitemap' : { redirect: '/sitemap.xml', statusCode: 301 },
    '/dashboard/search' : { redirect: '/', statusCode: 301 },
    '/healthinsurancequote': { redirect: '/contact', statusCode: 301 },




    // Articles Redirects 
    '/medicare/medicare-health-plans-2021/': { redirect: '/articles/medicare-health-plans-2021', statusCode: 301 },
    '/medicare/pros-cons-of-medicare-advantage/': { redirect: '/articles/pros-and-cons-of-medicare-advantage', statusCode: 301 },
    '/medicare/what-is-medicare/': { redirect: '/articles/what-is-medicare', statusCode: 301 },
    '/medicare/enrolling-within-medicare/': { redirect: '/articles/enrolling-within-medicare', statusCode: 301 },
    '/medicare/how-much-does-medicare-cost/': { redirect: '/articles/how-much-does-medicare-cost', statusCode: 301 },
    '/medicare/medicare-eligibility/': { redirect: '/articles/medicare-eligibility', statusCode: 301 },
    '/medicare/medicare-extra-help/': { redirect: '/articles/medicare-extra-help', statusCode: 301 },
    '/medicare/medicare-at-the-right-time/': { redirect: '/articles/medicare-at-the-right-time', statusCode: 301 },
    '/medicare/open-enrollment/': { redirect: '/articles/open-enrollment', statusCode: 301 },
    '/medicare/medicare-part-a-and-part-b-coverage/': { redirect: '/articles/medicare-part-a-and-part-b-coverage', statusCode: 301 },
    '/medicare/qualifying-for-medicare-with-disabilities/': { redirect: '/articles/qualifying-for-medicare-with-disabilities', statusCode: 301 },
    '/medicare/reducing-expenses-in-medicare/': { redirect: '/articles/reducing-expenses-in-medicare', statusCode: 301 },
    '/medicare/the-abcs-and-d-of-medicare/': { redirect: '/articles/the-abcs-and-d-of-medicare', statusCode: 301 },
    '/medicare/signing-up-for-medicare/': { redirect: '/articles/signing-up-for-medicare', statusCode: 301 },
    '/medicare/when-medicare-coverage-begins/': { redirect: '/articles/when-medicare-coverage-begins', statusCode: 301 },
    '/medicare/medicaid-medicare/': { redirect: '/articles/medicaid-medicare', statusCode: 301 },
    '/articles/reducing-expenses-in-mmedicare': { redirect: '/articles/reducing-expenses-in-medicare', statusCode: 301 },
    '/articles/the-abc-and-d-of-medicare': { redirect: '/articles/the-abcs-and-d-of-medicare', statusCode: 301 },
    '/articles/pros-and-cons-of-a-fixed-annuity' : { redirect: '/articles/pros-and-cons-if-a-fixed-annuity', statusCode: 301 },
    '/group-insurance/how-does-business-health-insurance-work/': { redirect: '/articles/how-does-business-health-insurance-work', statusCode: 301 },
    '/life-insurance/types-of-life-insurance/': { redirect: '/articles/types-of-life-insurance', statusCode: 301 },
    '/health-insurance-2/why-use-a-health-insurance-agent/': { redirect: '/articles/why-use-a-health-insurance-agent', statusCode: 301 },
    '/life-insurance/what-is-term-life-insurance/': { redirect: '/articles/what-is-term-life-insurance', statusCode: 301 },
    '/life-insurance/senior-whole-life-insurance-guide/': { redirect: '/articles/senior-whole-life-insurance-everything-you-need-to-know', statusCode: 301 },
    '/health-insurance-2/health-insurance-subsidies/': { redirect: '/articles/health-insurance-subsidies', statusCode: 301 },
    '/health-insurance-2/managing-your-healthcare-plan/': { redirect: '/articles/managing-your-healthcare-plan', statusCode: 301 },
    '/health-insurance-2/researching-health-insurance-options/': { redirect: '/articles/researching-health-insurance-options', statusCode: 301 },
    '/health-insurance-2/types-of-healthcare-plans/': { redirect: '/articles/types-of-healthcare-plans', statusCode: 301 },
    '/life-insurance/how-to-buy-the-right-life-insurance-policy/': { redirect: '/articles/how-to-buy-the-right-life-insurance-policy', statusCode: 301 },
    '/life-insurance/what-is-universal-life-insurance/': { redirect: '/articles/what-is-universal-life-insurance', statusCode: 301 },
    '/annuities/understanding-a-fixed-annuity-for-retirement-planning/': { redirect: '/articles/understanding-a-fixed-annuity-for-retirement-planning', statusCode: 301 },
    '/group-insurance/what-you-should-know-about-group-health-insurance/': { redirect: '/articles/what-you-should-know-about-group-health-insurance', statusCode: 301 },
    '/life-insurance/difference-between-universal-and-whole-life-insurance/': { redirect: '/articles/difference-between-universal-and-whole-life-insurance', statusCode: 301 },
    '/annuities/pros-and-cons-of-a-fixed-annuity/': { redirect: '/articles/pros-and-cons-of-a-fixed-annuity', statusCode: 301 },
    '/health-insurance/what-sets-amerus-agents-apart/': { redirect: '/articles/what-sets-amerus-agents-apart', statusCode: 301 },
    '/final-expense-insurance/what-is-final-expense-insurance/': { redirect: '/articles/what-is-final-expense-insurance', statusCode: 301 },
    '/life-insurance/advantages-of-an-index-universal-life-insurance-policy/': { redirect: '/articles/life-insurance-advantages-of-an-index-universal-life-insurance-policy', statusCode: 301 },
    '/annuities/understanding-the-taxation-advantages-of-fixed-annuities/': { redirect: '/articles/understanding-the-taxation-advantages-of-fixed-annuities', statusCode: 301 },
    '/news-updates/': { redirect: '/articles/overview', statusCode: 301 },
    '/categories/': { redirect: '/articles/overview', statusCode: 301 },
    '/what-is-universal-life-insurance' : { redirect: '/articles/difference-between-universal-and-whole-life-insurance', statusCode: 301 },
    '/medicare-eligibility' : { redirect: '/articles/medicare-eligibility', statusCode: 301 },
    '/pros-and-cons-if-a-fixed-annuity' : { redirect: '/articles/pros-and-cons-if-a-fixed-annuity', statusCode: 301 },
    '/category/health-insurance-2/' : { redirect: '/articles/overview', statusCode: 301 },
    '/category/medicare/' : { redirect: '/articles/overview', statusCode: 301 },
    '/how-much-does-medicare-cost/' : { redirect: '/articles/how-much-does-medicare-cost', statusCode: 301 },
    '/dev/wp-content/uploads/2017/08/Jacob-400x400.png' : { redirect: '/', statusCode: 301 },
    '/life-insurance/what-is-universal-life-insurance/feed/' : { redirect: '/articles/what-is-universal-life-insurance', statusCode: 301 },
    '/category/health-insurance/' : { redirect: '/articles/overview/', statusCode: 301 },
    '/the-abcs-and-d-of-medicare' : { redirect: '/articles/the-abcs-and-d-of-medicare', statusCode: 301 },
    '/what-is-term-life-insurance' : { redirect: '/articles/what-is-term-life-insurance', statusCode: 301 },
    '/amerus-financial-blog/page/2/?et_blog' : { redirect: '/articles/overview/', statusCode: 301 },
    '/author/amerusfinancial/page/3/' : { redirect: '/articles/overview/', statusCode: 301 },
    '/annuities/pros-and-cons-of-a-fixed-annuity/1000' : { redirect: '/articles/pros-and-cons-if-a-fixed-annuity', statusCode: 301 },
    '/author/amerusfinancial/page/4/' : { redirect: '/articles/overview/', statusCode: 301 },
    '/amerus-financial-blog/' : { redirect: '/articles/overview/', statusCode: 301 },
    '/life-insurance/senior-whole-life-insurance-guide/feed/' : { redirect: '/articles/senior-whole-life-insurance-everything-you-need-to-know', statusCode: 301 },
    '/open-enrollment' : { redirect: '/articles/open-enrollment', statusCode: 301 },
    '/what-is-final-expense-insurance' : { redirect: '/articles/what-is-final-expense-insurance', statusCode: 301 },
    '/signing-up-for-medicare' : { redirect: '/articles/signing-up-for-medicare', statusCode: 301 },
    '/series' : { redirect: '/articles/overview/', statusCode: 301 },
    '/life-insurance-advantages-of-an-index-universal-life-insurance-policy' : { redirect: '/articles/life-insurance-advantages-of-an-index-universal-life-insurance-policy', statusCode: 301 },
    '/reducing-expenses-in-medicare' : { redirect: '/articles/reducing-expenses-in-medicare', statusCode: 301 },
    '/understanding-the-taxation-advantages-of-fixed-annuities' : { redirect: '/articles/understanding-the-taxation-advantages-of-fixed-annuities', statusCode: 301 },
    '/health-insurance/advantages-of-an-index-universal-life-insurance-policy/' : { redirect: '/articles/life-insurance-advantages-of-an-index-universal-life-insurance-policy', statusCode: 301 },



    // Services Redirects 
    
     //MISC
    '/insurance-services/': { redirect: '/services', statusCode: 301 },
    '/types-of-life-insurance/' : { redirect: '/services', statusCode: 301 },
    
    // Health
    '/types-of-healthcare-plans/': { redirect: '/services/health/individual-health', statusCode: 301 },
    '/group/': { redirect: '/services/health/group-health', statusCode: 301 },
    '/healthcare': { redirect: '/services/health/individual-health', statusCode: 301 },
    '/healthcare/': { redirect: '/services/health/individual-health', statusCode: 301 },
    '/senior-dental/': { redirect: '/services/health/senior-dental', statusCode: 301 },
    '/individual-health-insurance/': { redirect: '/services/health/individual-health', statusCode: 301 },
    '/senior-solutions/': { redirect: '/services/health/senior-dental', statusCode: 301 },
    '/Medicare/': { redirect: '/services/health/medicare', statusCode: 301 },
    '/group-health-insurance/': { redirect: '/services/health/group-health', statusCode: 301 },
    '/medicare-health-plans-2021/' : { redirect: '/services/health/medicare', statusCode: 301 },
    '/medicare/form.php' : { redirect: '/services/health/medicare', statusCode: 301 },
    '/healthcare/index.html' : { redirect: '/services/health/individual-health', statusCode: 301 },
    '/healthinsurance/index.html' : { redirect: '/services/health/individual-health', statusCode: 301 },
    '/healthinsurancequote/index.html' : { redirect: '/services/health/individual-health', statusCode: 301 },
    '/senior-dental/form.php' : { redirect: '/services/health/senior-dental', statusCode: 301 },
    '/healthinsurance/' : { redirect: '/services/health/', statusCode: 301 },
    '/HealthInsurance/Cheap' : { redirect: '/services/health/', statusCode: 301 },
    '/group/index.html' : { redirect: '/services/health/group-health', statusCode: 301 },
    '/group/index.html#!' : { redirect: '/services/health/group-health', statusCode: 301 },
    '/medicare-enrroll-now/' : { redirect: '/services/health/medicare', statusCode: 301 },

    //life
    '/lifeinsurance/': { redirect: '/services/life/life-insurance', statusCode: 301 },
    '/senior-life/': { redirect: '/services/life/life-insurance', statusCode: 301 },
    '/senior-life/index.html' : { redirect: '/services/life/life-insurance', statusCode: 301 },
    '/what-is-term-life-insurance/' : { redirect: '/services/life/term-life', statusCode: 301 },
    '/lifeinsurance/index.html' : { redirect: '/services/life/life-insurance', statusCode: 301 },

    //retirement
    '/annuities/': { redirect: '/services/retirement/annuity', statusCode: 301 },
    '/annuities/index.php': { redirect: '/services/retirement/annuity', statusCode: 301 },
    '/annuities/1000' : { redirect: '/services/retirement/annuity', statusCode: 301 },

    //auto
    '/category/auto-insurance/': { redirect: '/services/auto', statusCode: 301 },

    //home
    '/category/home-insurance/': { redirect: '/services/home/property-protection', statusCode: 301 },
    
  },
  vite: {
  server: {
    allowedHosts: [
      'localhost',
    ],
    hmr: {
      protocol: "http",
      host: true,
      port: 3000,
      clientPort: 3000,
    },
  },
},
})
