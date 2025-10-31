import "vue";
import { u as useHead } from "../server.mjs";
const useEnhancedMetaTags = () => {
  useHead({
    meta: [
      // Enhanced crawling directives
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { name: "googlebot", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { name: "bingbot", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      // Social media optimization
      { name: "twitter:site", content: "@amerusfinancial" },
      { name: "twitter:creator", content: "@amerusfinancial" },
      // Technical SEO
      { name: "format-detection", content: "telephone=no" },
      { name: "theme-color", content: "#30BCFE" },
      // Security headers
      { "http-equiv": "X-Content-Type-Options", content: "nosniff" },
      { "http-equiv": "X-Frame-Options", content: "SAMEORIGIN" },
      { "http-equiv": "X-XSS-Protection", content: "1; mode=block" }
    ],
    link: [
      // DNS prefetch for performance
      { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
      { rel: "dns-prefetch", href: "//www.google-analytics.com" },
      { rel: "dns-prefetch", href: "//connect.facebook.net" },
      // Preconnect for critical resources
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }
    ]
  });
};
const useResourceHints = (criticalImages = []) => {
  const links = [
    // Preload critical fonts
    { rel: "preload", as: "font", type: "font/woff2", href: "/fonts/inter-var.woff2", crossorigin: "" }
  ];
  criticalImages.forEach((image) => {
    links.push({ rel: "preload", as: "image", href: image });
  });
  useHead({ link: links });
};
const useSocialMeta = (data) => {
  useHead({
    meta: [
      { property: "og:type", content: data.type || "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "Amerus Financial" },
      { name: "twitter:site", content: "@amerusfinancial" },
      { name: "twitter:creator", content: "@amerusfinancial" },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" }
    ]
  });
};
const useReviewSchema = (reviews) => {
  const reviewSchemas = reviews.map((review) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating.toString(),
      bestRating: "5"
    },
    author: {
      "@type": "Person",
      name: review.author
    },
    reviewBody: review.review,
    datePublished: review.date
  }));
  const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  return {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: reviews.length.toString(),
      bestRating: "5",
      worstRating: "1"
    },
    review: reviewSchemas
  };
};
const useHowToSchema = (steps, title, description, totalTime, cost) => {
  return {
    "@type": "HowTo",
    name: title,
    description,
    totalTime: totalTime || "PT15M",
    ...cost && {
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "USD",
        value: cost
      }
    },
    step: steps.map((step) => ({
      "@type": "HowToStep",
      name: step.name,
      text: step.text,
      ...step.image && { image: step.image }
    }))
  };
};
const useOrganizationSchema = () => {
  return {
    "@type": "Organization",
    name: "Amerus Financial",
    url: "https://www.amerusfinancial.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.amerusfinancial.com/images/logo.png",
      width: "300",
      height: "100"
    },
    description: "Leading provider of insurance and financial services including health insurance, life insurance, and retirement planning solutions.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "United States",
      addressCountry: "US"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-AMERUS",
      contactType: "customer service",
      availableLanguage: "English"
    },
    sameAs: [
      "https://www.facebook.com/amerusfinancial",
      "https://www.linkedin.com/company/amerus-financial",
      "https://twitter.com/amerusfinancial"
    ],
    serviceArea: {
      "@type": "Country",
      name: "United States"
    }
  };
};
const useServiceProvider = () => {
  return useOrganizationSchema();
};
export {
  useResourceHints as a,
  useSocialMeta as b,
  useReviewSchema as c,
  useHowToSchema as d,
  useServiceProvider as e,
  useEnhancedMetaTags as u
};
//# sourceMappingURL=useOrganizationSchema-DjOkg-j4.js.map
