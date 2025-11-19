<script setup lang="ts">
import { useUser } from "~/composables/useAuth";

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
});

useHead({
  link: [{ rel: "icon", type: "image/x-icon", href: "/img/favicon.ico" }],
  script: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-YKGNXPKXG8",
      async: true
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YKGNXPKXG8');
      `
    }
  ]
});


await useUser();
useSchemaOrg([
  defineLocalBusiness({
    name: 'Amerus Financial',
    // Use absolute logo URL for richer SERP display
    logo: "https://www.amerusfinancial.com/logo.png",
    // Provide a stable @id for entity reconciliation
    '@id': 'https://www.amerusfinancial.com/#localbusiness',
    parentOrganization: { '@id': 'https://www.amerusfinancial.com/#identity' },
    description: 'Insurance and financial services.',
    url: 'https://www.amerusfinancial.com',
    telephone: '+1-888-441-7891',
    email: 'info@amerusfinancial.com',
    priceRange: '$$',
    // Replace deprecated serviceArea with areaServed AdministrativeArea object
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3308 Cleveland Heights Blvd',
      addressLocality: 'Lakeland',
      addressRegion: 'FL',
      postalCode: '33803',
      addressCountry: 'US'
    },
    openingHoursSpecification: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Insurance Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Health Insurance',
            url: 'https://www.amerusfinancial.com/services/health'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Individual Health Insurance',
            url: 'https://www.amerusfinancial.com/services/health/individual'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Family Health Insurance',
            url: 'https://www.amerusfinancial.com/services/health/family'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Group Health Insurance',
            url: 'https://www.amerusfinancial.com/services/health/group'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Medicare Insurance',
            url: 'https://www.amerusfinancial.com/services/health/medicare'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dental Insurance',
            url: 'https://www.amerusfinancial.com/services/health/dental'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vision Insurance',
            url: 'https://www.amerusfinancial.com/services/health/vision'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Life Insurance',
            url: 'https://www.amerusfinancial.com/services/life'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Term Life Insurance',
            url: 'https://www.amerusfinancial.com/services/life/term-life'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Whole Life Insurance',
            url: 'https://www.amerusfinancial.com/services/life/whole-life'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Universal Life Insurance',
            url: 'https://www.amerusfinancial.com/services/life/universal-life'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Auto Insurance',
            url: 'https://www.amerusfinancial.com/services/auto'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Personal Auto Insurance',
            url: 'https://www.amerusfinancial.com/services/auto/personal-auto'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Auto Insurance',
            url: 'https://www.amerusfinancial.com/services/auto/commercial-auto'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Insurance',
            url: 'https://www.amerusfinancial.com/services/home'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Homeowners Insurance',
            url: 'https://www.amerusfinancial.com/services/home/homeowners'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Flood Insurance',
            url: 'https://www.amerusfinancial.com/services/home/flood'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Insurance',
            url: 'https://www.amerusfinancial.com/services/business'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'General Liability Insurance',
            url: 'https://www.amerusfinancial.com/services/business/general-liability'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Professional Liability Insurance',
            url: 'https://www.amerusfinancial.com/services/business/professional-liability'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Workers Compensation',
            url: 'https://www.amerusfinancial.com/services/business/workers-comp'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Retirement Planning',
            url: 'https://www.amerusfinancial.com/services/retirement'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IRA Services',
            url: 'https://www.amerusfinancial.com/services/retirement/iras'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '401(k) Planning',
            url: 'https://www.amerusfinancial.com/services/retirement/401k'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Annuities',
            url: 'https://www.amerusfinancial.com/services/retirement/annuity'
          }
        }
      ]
    }
  })
])
</script>
<template>
  <NuxtLayout>
    <div class="dark:bg-indigo-950 dark:text-slate-300">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style>
.iframe-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio (divide 9 by 16 = 0.5625) */
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}

.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>