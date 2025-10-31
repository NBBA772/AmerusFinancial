
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
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content', 'nuxt-icon', '@nuxt/image','@nuxtjs/seo'],
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
  },
  site: {
    url: 'https://www.amerusfinancial.com/',
    name: 'Amerus Financial',
    description: 'Amerus Financial provides retirement planning, insurance solutions, and financial guidance for individuals and businesses.',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
    indexable: true // Changed to true for SEO
  },
  sitemap: {
    enabled: true,
    gzip: true,
    routes: [
      '/services/health/dental',
      '/services/health/medicare', 
      '/services/health/vision-coverage',
      '/services/health/individual-health',
      '/services/health/private-health',
      '/services/life/term-life',
      '/services/life/final-expense',
      '/services/life/group-life-insurance',
      '/services/retirement/401k',
      '/services/retirement/iras'
    ]
  },
  robots: {
    enabled: true,
    sitemap: '/sitemap.xml'
  },
  seo: {
    redirectToCanonicalSiteUrl: true
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Amerus Financial',
      url: 'https://www.amerusfinancial.com/',
      logo: 'https://www.amerusfinancial.com/_vercel/image?url=%2Fimg%2Flogo_white.png&w=320&q=80'
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
    }
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
