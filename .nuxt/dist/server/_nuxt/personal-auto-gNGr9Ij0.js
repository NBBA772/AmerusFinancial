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
  __name: "personal-auto",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/personal-auto-insurance.jpg"]);
    useSocialMeta({
      title: "Personal Auto Insurance Coverage — Amerus Financial",
      description: "Comprehensive personal auto insurance with liability, collision, and comprehensive coverage. Get competitive rates and protect your vehicle with Amerus.",
      image: "https://www.amerusfinancial.com/images/personal-auto-insurance.jpg",
      url: "https://www.amerusfinancial.com/services/auto/personal-auto",
      type: "website"
    });
    useHead({
      title: "Personal Auto Insurance Coverage — Amerus Financial",
      meta: [
        { property: "og:title", content: "Personal Auto Insurance — Amerus" },
        { name: "description", content: "Comprehensive personal auto insurance with liability, collision, and comprehensive coverage. Get competitive rates and protect your vehicle with Amerus." },
        { property: "og:description", content: "Personal auto insurance with full coverage options including liability, collision, comprehensive, and uninsured motorist protection." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/personal-auto-insurance.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/auto/personal-auto" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Personal Auto Insurance — Amerus" },
        { name: "twitter:description", content: "Personal auto insurance with full coverage options including liability, collision, comprehensive, and uninsured motorist protection." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/personal-auto-insurance.jpg" },
        { name: "keywords", content: "personal auto insurance, car insurance, auto coverage, liability insurance, collision coverage, comprehensive coverage, auto insurance quotes, vehicle insurance, car insurance rates" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/auto/personal-auto"
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
        author: "David Martinez",
        rating: 5,
        review: "Outstanding auto insurance coverage with excellent customer service. Claims were processed quickly and rates are very competitive.",
        date: "2024-10-10"
      },
      {
        author: "Jennifer Wilson",
        rating: 5,
        review: "Great personal auto insurance with comprehensive coverage options. Easy to work with and responsive when I needed help.",
        date: "2024-10-05"
      },
      {
        author: "Robert Thompson",
        rating: 4,
        review: "Reliable auto insurance with good coverage and fair pricing. Professional service and quick response times.",
        date: "2024-09-28"
      }
    ]);
    const howToSteps = useHowToSchema([
      {
        name: "Vehicle Information",
        text: "Provide details about your vehicle including make, model, year, and current coverage to get an accurate quote.",
        image: "https://www.amerusfinancial.com/images/vehicle-info.jpg"
      },
      {
        name: "Coverage Selection",
        text: "Choose your coverage levels for liability, collision, comprehensive, and additional protections based on your needs.",
        image: "https://www.amerusfinancial.com/images/coverage-selection.jpg"
      },
      {
        name: "Review & Compare",
        text: "Review different auto insurance options with various deductibles and coverage limits to find the best value.",
        image: "https://www.amerusfinancial.com/images/auto-compare.jpg"
      },
      {
        name: "Finalize Policy",
        text: "Complete your application and activate your personal auto insurance coverage with immediate protection.",
        image: "https://www.amerusfinancial.com/images/policy-finalize.jpg"
      }
    ], "How to Get Personal Auto Insurance", "Step-by-step guide to getting personal auto insurance coverage with Amerus Financial.", "PT20M", "100.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Personal Auto Insurance",
        provider: serviceProvider,
        description: "Comprehensive personal auto insurance with liability, collision, comprehensive coverage, and competitive rates for vehicle protection.",
        serviceType: "Insurance",
        category: "Auto Insurance",
        areaServed: "United States",
        offers: {
          "@type": "Offer",
          price: "100.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingIncrement: 1,
            unitText: "monthly"
          },
          description: "Personal auto insurance coverage starting at $100 per month"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Personal Auto Insurance",
        description: "Comprehensive personal auto insurance with liability, collision, comprehensive coverage, and competitive rates.",
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
            name: "What does personal auto insurance cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Personal auto insurance covers liability for bodily injury and property damage, collision coverage for vehicle damage, comprehensive coverage for theft and weather damage, and optional coverages like uninsured motorist protection."
            }
          },
          {
            "@type": "Question",
            name: "How much does auto insurance cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Auto insurance costs vary based on your vehicle, driving record, location, and coverage levels. Personal auto insurance typically starts around $100 per month for basic coverage with higher rates for comprehensive protection."
            }
          },
          {
            "@type": "Question",
            name: "What factors affect auto insurance rates?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Auto insurance rates are affected by your driving record, age, vehicle type, location, credit score, coverage levels, and deductibles. Safe drivers and newer safety features can help reduce premiums."
            }
          },
          {
            "@type": "Question",
            name: "Do I need full coverage auto insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Full coverage (liability, collision, and comprehensive) is recommended to protect your vehicle and finances. It's required if you have a car loan or lease, and provides the best protection against accidents and theft."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Auto Insurance",
      title: "Personal Auto Insurance",
      description: "Comprehensive auto insurance coverage to protect you, your vehicle, and your finances on the road.",
      image: "/images/personal-auto-insurance.jpg",
      imageAlt: "personal auto insurance",
      cta: { href: "/contact", label: "Get Auto Insurance Quote" }
    };
    const benefits = [
      "Liability coverage required by law in all states",
      "Collision coverage for vehicle damage protection",
      "Comprehensive coverage for theft and weather damage",
      "Uninsured and underinsured motorist protection",
      "Medical payments and personal injury protection",
      "Roadside assistance and rental car coverage"
    ];
    const info = [
      {
        title: "Coverage Amount",
        text: "Based on plan selection",
        icon: "lucide:badge-dollar-sign"
      },
      {
        title: "Protection Type",
        text: "Personal Auto Insurance",
        icon: "lucide:shield"
      },
      {
        title: "Application Process",
        text: "Simple 15-minute consultation",
        icon: "lucide:clock"
      }
    ];
    const features = [
      "Liability coverage for bodily injury and property damage",
      "Collision coverage for vehicle damage from accidents",
      "Comprehensive coverage for theft, vandalism, and weather",
      "Uninsured and underinsured motorist protection",
      "Personal injury protection and medical payments",
      "Roadside assistance and rental car coverage options"
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
              currentPageTitle: "Personal Auto Insurance",
              parentTitle: "Services",
              parentUrl: "/services"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Hero, { hero }, null, _parent2, _scopeId));
            _push2(`<section class="rounded-2xl overflow-hidden shadow-sm border border-[#e0f1ff] bg-gradient-to-br from-[#f8fbff] to-[#eef7ff] hover:shadow-md transition-all duration-300 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm"${_scopeId}><div class="bg-[#30BCFE] text-white py-4 px-6 flex items-center justify-between"${_scopeId}><div${_scopeId}><h2 class="text-2xl font-bold tracking-tight"${_scopeId}>Key Benefits</h2><p class="text-sm opacity-90"${_scopeId}>Discover what makes our coverage the right choice for you</p></div>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:heart-pulse",
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
                        currentPageTitle: "Personal Auto Insurance",
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
                            name: "lucide:heart-pulse",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/auto/personal-auto.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=personal-auto-gNGr9Ij0.js.map
