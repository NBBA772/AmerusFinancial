import __nuxt_component_0 from "./PatternSection-Bu0o2535.js";
import __nuxt_component_1 from "./HomepageHeroSection-uUHQMeWN.js";
import _sfc_main$1 from "./Breadcrumbs-DuAkTo4_.js";
import _sfc_main$2 from "./Hero-DLw1-KdJ.js";
import __nuxt_component_4 from "./ServiceCard-Drm7I29y.js";
import __nuxt_component_5 from "./StillHaveQuestions-BBDjaHJm.js";
import _sfc_main$3 from "./CallToAction-CmwVfqHS.js";
import { u as useEnhancedMetaTags, a as useResourceHints, b as useSocialMeta, c as useReviewSchema, d as useHowToSchema, e as useServiceProvider } from "./useOrganizationSchema-DjOkg-j4.js";
import { withCtx, createVNode, useSSRContext } from "vue";
import { u as useHead, o as useSchemaOrg } from "../server.mjs";
import { ssrRenderComponent } from "vue/server-renderer";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./SectionContainer-CRG4W3qY.js";
import "./GridTwoColumns-CDZGjEfF.js";
import "./ParagraphSubHeadingHero-CqCgEloW.js";
import "./HeadlineOneHero-B_BgiMME.js";
import "./ParagraphDescriptionHero-BUKcd6HV.js";
import "./ContactButtons-DUFZbfzJ.js";
import "./nuxt-link-DuPix_nQ.js";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "defu";
import "klona";
import "devalue";
import "radix3";
import "cookie-es";
import "destr";
import "ohash";
import "./HomePageQuoteForm-CDFA9csT.js";
import "./MultiStepForm-CmTdGKHp.js";
import "./BasicSection-D2ZROhe4.js";
import "./nuxt-img-CXQw38If.js";
import "./Icon-6AEq6jga.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/business-insurance.jpg"]);
    useSocialMeta({
      title: "Business Insurance Solutions — Amerus Financial",
      description: "Comprehensive business insurance including general liability, workers comp, commercial property, and professional liability. Protect your business with Amerus.",
      image: "https://www.amerusfinancial.com/images/business-insurance.jpg",
      url: "https://www.amerusfinancial.com/services/business",
      type: "website"
    });
    useHead({
      title: "Business Insurance Solutions — Amerus Financial",
      meta: [
        { property: "og:title", content: "Business Insurance Coverage — Amerus" },
        { name: "description", content: "Comprehensive business insurance including general liability, workers comp, commercial property, and professional liability. Protect your business with Amerus." },
        { property: "og:description", content: "Complete business insurance solutions including liability protection, workers compensation, commercial property, and professional liability coverage." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/business-insurance.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/business" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Business Insurance Solutions — Amerus" },
        { name: "twitter:description", content: "Complete business insurance solutions including liability protection, workers compensation, commercial property, and professional liability coverage." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/business-insurance.jpg" },
        { name: "keywords", content: "business insurance, commercial insurance, general liability, workers compensation, commercial property insurance, professional liability, business protection, commercial coverage" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/business"
        },
        // DNS prefetch for performance
        { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
        { rel: "dns-prefetch", href: "//www.google-analytics.com" },
        // Preconnect for critical resources
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }
      ],
      meta: [
        // Enhanced crawling directives
        { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
        { name: "googlebot", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
        // Social media optimization
        { name: "twitter:site", content: "@amerusfinancial" },
        { name: "twitter:creator", content: "@amerusfinancial" },
        // Technical SEO
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#30BCFE" }
      ]
    });
    const serviceProvider = useServiceProvider();
    const reviewData = useReviewSchema([
      {
        author: "Business Owner Patricia",
        rating: 5,
        review: "Excellent business insurance package with comprehensive coverage. Great service team that understands our commercial needs.",
        date: "2024-10-15"
      },
      {
        author: "Company Director Mark",
        rating: 5,
        review: "Outstanding business insurance solutions. From general liability to workers comp, they have all our commercial coverage needs covered.",
        date: "2024-09-28"
      },
      {
        author: "Small Business Owner Lisa",
        rating: 4,
        review: "Reliable business insurance with good coverage options and competitive rates. Professional service throughout the process.",
        date: "2024-09-20"
      }
    ]);
    const howToSteps = useHowToSchema([
      {
        name: "Business Assessment",
        text: "Evaluate your business operations, industry risks, and insurance requirements to determine coverage needs.",
        image: "https://www.amerusfinancial.com/images/business-assessment.jpg"
      },
      {
        name: "Coverage Selection",
        text: "Choose from general liability, workers comp, commercial property, and professional liability coverage options.",
        image: "https://www.amerusfinancial.com/images/business-coverage-selection.jpg"
      },
      {
        name: "Policy Customization",
        text: "Customize your business insurance package with appropriate limits, deductibles, and additional protections.",
        image: "https://www.amerusfinancial.com/images/business-policy-custom.jpg"
      },
      {
        name: "Coverage Activation",
        text: "Activate your comprehensive business insurance package for complete commercial protection.",
        image: "https://www.amerusfinancial.com/images/business-coverage-activate.jpg"
      }
    ], "How to Get Business Insurance", "Step-by-step guide to getting comprehensive business insurance coverage.", "PT25M", "250.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Business Insurance Solutions",
        provider: serviceProvider,
        description: "Comprehensive business insurance including general liability, workers compensation, commercial property, and professional liability coverage.",
        serviceType: "Insurance",
        category: "Business Insurance",
        areaServed: "United States",
        offers: {
          "@type": "Offer",
          price: "250.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingIncrement: 1,
            unitText: "monthly"
          },
          description: "Business insurance package starting at $250 per month"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Business Insurance Solutions",
        description: "Comprehensive business insurance including general liability, workers compensation, commercial property, and professional liability.",
        category: "Insurance",
        brand: {
          "@type": "Brand",
          name: "Amerus Financial"
        },
        ...reviewData
      },
      // FAQ Schema for better SERP features
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What types of business insurance do I need?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most businesses need general liability insurance, and many also require workers compensation, commercial property, and professional liability coverage depending on their industry and operations."
            }
          },
          {
            "@type": "Question",
            name: "How much does business insurance cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Business insurance costs vary based on industry, business size, location, and coverage types. A basic package typically starts around $250 per month for small businesses."
            }
          },
          {
            "@type": "Question",
            name: "Is business insurance required by law?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Workers compensation is required in most states if you have employees. Other coverage types may be required by contracts, leases, or licensing authorities, and are recommended for business protection."
            }
          },
          {
            "@type": "Question",
            name: "What does general liability insurance cover for businesses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "General liability insurance covers third-party claims for bodily injury, property damage, personal injury, and advertising injury that occur during business operations."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Insurance Services",
      title: "Business Insurance Solutions",
      description: "Protect your business with comprehensive commercial insurance coverage. From liability protection to workers compensation, secure your business against potential risks.",
      image: "/images/business-insurance.jpg",
      imageAlt: "business insurance coverage",
      cta: { href: "/contact", label: "Get Business Insurance Quote" }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PatternSection = __nuxt_component_0;
      const _component_HomepageHeroSection = __nuxt_component_1;
      const _component_Breadcrumbs = _sfc_main$1;
      const _component_Hero = _sfc_main$2;
      const _component_ServiceCard = __nuxt_component_4;
      const _component_StillHaveQuestions = __nuxt_component_5;
      const _component_CallToAction = _sfc_main$3;
      _push(ssrRenderComponent(_component_PatternSection, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HomepageHeroSection, null, null, _parent2, _scopeId));
            _push2(`<main class="flex-grow"${_scopeId}><div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col md:flex-row gap-8"${_scopeId}><div class="w-full md:w-2/3 flex flex-col gap-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Breadcrumbs, {
              currentPageTitle: "Business Insurance",
              parentTitle: "Services",
              parentUrl: "/services"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Hero, { hero }, null, _parent2, _scopeId));
            _push2(`<section class="grid md:grid-cols-2 gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "General Liability Insurance",
              description: "Essential business protection against third-party claims and lawsuits.",
              link: "/services/business/general-liability",
              icon: "lucide:shield"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Professional Liability Insurance",
              description: "Errors & omissions coverage for professional services and consultants.",
              link: "/services/business/professional-liability",
              icon: "lucide:briefcase"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Workers Compensation",
              description: "Mandatory coverage for employee injuries and workplace accidents.",
              link: "/services/business/workers-comp",
              icon: "lucide:hard-hat"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Commercial Property Insurance",
              description: "Protection for your business property, equipment, and inventory.",
              link: "/services/business/commercial-property",
              icon: "lucide:building-2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Commercial Auto Insurance",
              description: "Vehicle coverage for business cars, trucks, and commercial fleets.",
              link: "/services/business/commercial-auto",
              icon: "lucide:truck"
            }, null, _parent2, _scopeId));
            _push2(`</section></div><aside class="w-full md:w-1/3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_StillHaveQuestions, null, null, _parent2, _scopeId));
            _push2(`</aside></div></div></main>`);
            _push2(ssrRenderComponent(_component_CallToAction, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_HomepageHeroSection),
              createVNode("main", { class: "flex-grow" }, [
                createVNode("div", { class: "container mx-auto py-12 px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col md:flex-row gap-8" }, [
                    createVNode("div", { class: "w-full md:w-2/3 flex flex-col gap-8" }, [
                      createVNode(_component_Breadcrumbs, {
                        currentPageTitle: "Business Insurance",
                        parentTitle: "Services",
                        parentUrl: "/services"
                      }),
                      createVNode(_component_Hero, { hero }),
                      createVNode("section", { class: "grid md:grid-cols-2 gap-6" }, [
                        createVNode(_component_ServiceCard, {
                          title: "General Liability Insurance",
                          description: "Essential business protection against third-party claims and lawsuits.",
                          link: "/services/business/general-liability",
                          icon: "lucide:shield"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Professional Liability Insurance",
                          description: "Errors & omissions coverage for professional services and consultants.",
                          link: "/services/business/professional-liability",
                          icon: "lucide:briefcase"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Workers Compensation",
                          description: "Mandatory coverage for employee injuries and workplace accidents.",
                          link: "/services/business/workers-comp",
                          icon: "lucide:hard-hat"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Commercial Property Insurance",
                          description: "Protection for your business property, equipment, and inventory.",
                          link: "/services/business/commercial-property",
                          icon: "lucide:building-2"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Commercial Auto Insurance",
                          description: "Vehicle coverage for business cars, trucks, and commercial fleets.",
                          link: "/services/business/commercial-auto",
                          icon: "lucide:truck"
                        })
                      ])
                    ]),
                    createVNode("aside", { class: "w-full md:w-1/3" }, [
                      createVNode(_component_StillHaveQuestions)
                    ])
                  ])
                ])
              ]),
              createVNode(_component_CallToAction)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/business/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BToPMgLl.js.map
