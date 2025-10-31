import __nuxt_component_0 from "./PatternSection-Bu0o2535.js";
import __nuxt_component_1 from "./HomepageHeroSection-uUHQMeWN.js";
import _sfc_main$1 from "./Breadcrumbs-DuAkTo4_.js";
import _sfc_main$2 from "./Hero-DLw1-KdJ.js";
import __nuxt_component_0$1 from "./Icon-6AEq6jga.js";
import _sfc_main$3 from "./Benefits-BsnkcdKZ.js";
import _sfc_main$4 from "./InfoCards-CZIQ3rXA.js";
import _sfc_main$5 from "./CoverageFeatures-CxwslF9f.js";
import _sfc_main$6 from "./CTA-BZKH80Mk.js";
import _sfc_main$7 from "./AutoSidebar-BI20CAlu.js";
import _sfc_main$8 from "./CallToAction-CmwVfqHS.js";
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
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main = {
  __name: "commercial-auto",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/commercial-auto-insurance.jpg"]);
    useSocialMeta({
      title: "Commercial Auto Insurance for Business — Amerus Financial",
      description: "Comprehensive commercial auto insurance for business vehicles, fleets, and company cars. Protect your business with competitive rates from Amerus.",
      image: "https://www.amerusfinancial.com/images/commercial-auto-insurance.jpg",
      url: "https://www.amerusfinancial.com/services/auto/commercial-auto",
      type: "website"
    });
    useHead({
      title: "Commercial Auto Insurance for Business — Amerus Financial",
      meta: [
        { property: "og:title", content: "Commercial Auto Insurance — Amerus" },
        { name: "description", content: "Comprehensive commercial auto insurance for business vehicles, fleets, and company cars. Protect your business with competitive rates from Amerus." },
        { property: "og:description", content: "Commercial auto insurance covering business vehicles, fleet coverage, and company car protection with liability and comprehensive options." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/commercial-auto-insurance.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/auto/commercial-auto" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Commercial Auto Insurance — Amerus" },
        { name: "twitter:description", content: "Commercial auto insurance covering business vehicles, fleet coverage, and company car protection with liability and comprehensive options." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/commercial-auto-insurance.jpg" },
        { name: "keywords", content: "commercial auto insurance, business vehicle insurance, fleet insurance, company car insurance, commercial vehicle coverage, business auto liability" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/auto/commercial-auto"
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
        author: "Business Owner Mike",
        rating: 5,
        review: "Outstanding commercial auto insurance for our delivery fleet. Excellent coverage and competitive rates for business vehicles.",
        date: "2024-10-15"
      },
      {
        author: "Fleet Manager Sarah",
        rating: 5,
        review: "Great commercial vehicle coverage with responsive claims handling. Perfect for our business transportation needs.",
        date: "2024-09-28"
      },
      {
        author: "Company Director John",
        rating: 4,
        review: "Reliable commercial auto insurance with comprehensive business vehicle protection. Professional service team.",
        date: "2024-09-20"
      }
    ]);
    const howToSteps = useHowToSchema([
      {
        name: "Business Assessment",
        text: "Provide details about your business vehicles, usage, and current commercial auto insurance needs.",
        image: "https://www.amerusfinancial.com/images/business-assessment.jpg"
      },
      {
        name: "Fleet Analysis",
        text: "Review your vehicle fleet including types, values, and commercial usage patterns for accurate coverage.",
        image: "https://www.amerusfinancial.com/images/fleet-analysis.jpg"
      },
      {
        name: "Coverage Design",
        text: "Design commercial auto insurance coverage including liability, collision, and comprehensive protection.",
        image: "https://www.amerusfinancial.com/images/coverage-design.jpg"
      },
      {
        name: "Policy Activation",
        text: "Finalize your commercial auto insurance policy and activate coverage for your business vehicles.",
        image: "https://www.amerusfinancial.com/images/policy-activation.jpg"
      }
    ], "How to Get Commercial Auto Insurance", "Step-by-step guide to getting commercial auto insurance for your business vehicles.", "PT25M", "200.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Commercial Auto Insurance",
        provider: serviceProvider,
        description: "Comprehensive commercial auto insurance for business vehicles, fleets, and company cars with competitive rates and full protection.",
        serviceType: "Insurance",
        category: "Commercial Auto Insurance",
        areaServed: "United States",
        offers: {
          "@type": "Offer",
          price: "200.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingIncrement: 1,
            unitText: "monthly"
          },
          description: "Commercial auto insurance starting at $200 per month"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Commercial Auto Insurance",
        description: "Comprehensive commercial auto insurance for business vehicles, fleets, and company cars.",
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
            name: "What does commercial auto insurance cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Commercial auto insurance covers business vehicles with liability protection, collision coverage, comprehensive coverage, and additional protections for fleet operations and company cars."
            }
          },
          {
            "@type": "Question",
            name: "How much does commercial auto insurance cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Commercial auto insurance costs vary based on vehicle types, business use, driving records, and coverage levels. Coverage typically starts around $200 per month for basic business vehicle protection."
            }
          },
          {
            "@type": "Question",
            name: "Do I need commercial auto insurance for my business?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, if you use vehicles for business purposes, commercial auto insurance is required. Personal auto insurance typically does not cover business use of vehicles."
            }
          },
          {
            "@type": "Question",
            name: "What types of vehicles need commercial auto coverage?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Commercial auto insurance covers delivery trucks, company cars, fleet vehicles, service vans, and any vehicle used for business operations or commercial purposes."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Auto Insurance",
      title: "Commercial Auto Insurance",
      description: "Comprehensive commercial auto insurance for business vehicles, fleets, and company cars with competitive rates and full protection.",
      image: "/images/commercial-auto-insurance.jpg",
      imageAlt: "commercial auto insurance",
      cta: { href: "/contact", label: "Get Commercial Auto Quote" }
    };
    const benefits = [
      "Business liability protection for commercial vehicles",
      "Collision coverage for fleet and company cars",
      "Comprehensive coverage for theft and weather damage",
      "Coverage for hired and non-owned vehicles",
      "Medical payments for employees and passengers",
      "Protection for business equipment in vehicles"
    ];
    const info = [
      {
        title: "Coverage Amount",
        text: "Based on plan selection",
        icon: "lucide:badge-dollar-sign"
      },
      {
        title: "Protection Type",
        text: "Commercial Auto Insurance",
        icon: "lucide:shield"
      },
      {
        title: "Application Process",
        text: "Simple 15-minute consultation",
        icon: "lucide:clock"
      }
    ];
    const features = [
      "Fleet vehicle coverage for multiple vehicles",
      "Delivery and service vehicle protection",
      "Company car insurance for employees",
      "Commercial liability and property damage",
      "Business interruption coverage options",
      "Customized coverage for industry-specific needs"
    ];
    const cta = {
      title: "Ready to get protected?",
      description: "Speak with our insurance experts to find the right coverage for your needs.",
      primary: {
        href: "/contact",
        label: "Get a Personalized Quote"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PatternSection = __nuxt_component_0;
      const _component_HomepageHeroSection = __nuxt_component_1;
      const _component_Breadcrumbs = _sfc_main$1;
      const _component_Hero = _sfc_main$2;
      const _component_Icon = __nuxt_component_0$1;
      const _component_Benefits = _sfc_main$3;
      const _component_InfoCards = _sfc_main$4;
      const _component_CoverageFeatures = _sfc_main$5;
      const _component_CTA = _sfc_main$6;
      const _component_AutoSidebar = _sfc_main$7;
      const _component_CallToAction = _sfc_main$8;
      _push(ssrRenderComponent(_component_PatternSection, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HomepageHeroSection, null, null, _parent2, _scopeId));
            _push2(`<main class="flex-grow"${_scopeId}><div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col md:flex-row gap-8"${_scopeId}><div class="w-full md:w-2/3 flex flex-col gap-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Breadcrumbs, {
              currentPageTitle: "Commercial Auto Insurance",
              parentTitle: "Services",
              parentUrl: "/services"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Hero, { hero }, null, _parent2, _scopeId));
            _push2(`<section class="rounded-2xl overflow-hidden shadow-sm border border-[#e0f1ff] bg-gradient-to-br from-[#f8fbff] to-[#eef7ff] hover:shadow-md transition-all duration-300 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm"${_scopeId}><div class="bg-[#30BCFE] text-white py-4 px-6 flex items-center justify-between"${_scopeId}><div${_scopeId}><h2 class="text-2xl font-bold tracking-tight"${_scopeId}>Key Benefits</h2><p class="text-sm opacity-90"${_scopeId}>Discover what makes our coverage the right choice for you</p></div>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:truck",
              size: "50",
              class: "text-white"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Benefits, { benefits }, null, _parent2, _scopeId));
            _push2(`<div class="border-t border-[#d4ebff] my-8"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_InfoCards, { info }, null, _parent2, _scopeId));
            _push2(`</div></section>`);
            _push2(ssrRenderComponent(_component_CoverageFeatures, { features }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CTA, { cta }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full md:w-1/3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AutoSidebar, null, null, _parent2, _scopeId));
            _push2(`</div></div></div></main>`);
            _push2(ssrRenderComponent(_component_CallToAction, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_HomepageHeroSection),
              createVNode("main", { class: "flex-grow" }, [
                createVNode("div", { class: "container mx-auto py-12 px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col md:flex-row gap-8" }, [
                    createVNode("div", { class: "w-full md:w-2/3 flex flex-col gap-8" }, [
                      createVNode(_component_Breadcrumbs, {
                        currentPageTitle: "Commercial Auto Insurance",
                        parentTitle: "Services",
                        parentUrl: "/services"
                      }),
                      createVNode(_component_Hero, { hero }),
                      createVNode("section", { class: "rounded-2xl overflow-hidden shadow-sm border border-[#e0f1ff] bg-gradient-to-br from-[#f8fbff] to-[#eef7ff] hover:shadow-md transition-all duration-300 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm" }, [
                        createVNode("div", { class: "bg-[#30BCFE] text-white py-4 px-6 flex items-center justify-between" }, [
                          createVNode("div", null, [
                            createVNode("h2", { class: "text-2xl font-bold tracking-tight" }, "Key Benefits"),
                            createVNode("p", { class: "text-sm opacity-90" }, "Discover what makes our coverage the right choice for you")
                          ]),
                          createVNode(_component_Icon, {
                            name: "lucide:truck",
                            size: "50",
                            class: "text-white"
                          })
                        ]),
                        createVNode("div", { class: "p-8" }, [
                          createVNode(_component_Benefits, { benefits }),
                          createVNode("div", { class: "border-t border-[#d4ebff] my-8" }),
                          createVNode(_component_InfoCards, { info })
                        ])
                      ]),
                      createVNode(_component_CoverageFeatures, { features }),
                      createVNode(_component_CTA, { cta })
                    ]),
                    createVNode("div", { class: "w-full md:w-1/3" }, [
                      createVNode(_component_AutoSidebar)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/auto/commercial-auto.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=commercial-auto-JgzIPU4i.js.map
