import __nuxt_component_0 from "./PatternSection-Bu0o2535.js";
import __nuxt_component_1 from "./HomepageHeroSection-uUHQMeWN.js";
import _sfc_main$1 from "./Breadcrumbs-DuAkTo4_.js";
import _sfc_main$2 from "./Hero-DLw1-KdJ.js";
import __nuxt_component_0$1 from "./Icon-6AEq6jga.js";
import _sfc_main$3 from "./Benefits-BsnkcdKZ.js";
import _sfc_main$4 from "./InfoCards-CZIQ3rXA.js";
import _sfc_main$5 from "./CoverageFeatures-CxwslF9f.js";
import _sfc_main$6 from "./CTA-BZKH80Mk.js";
import _sfc_main$7 from "./HealthSidebar-B-HJeh-7.js";
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
  __name: "group-health",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/group-health-insurance.jpg"]);
    useSocialMeta({
      title: "Group Health Insurance Plans — Amerus Financial",
      description: "Affordable group health insurance for businesses and organizations. Comprehensive employee health benefits with competitive rates.",
      image: "https://www.amerusfinancial.com/images/group-health-insurance.jpg",
      url: "https://www.amerusfinancial.com/services/health/group-health",
      type: "website"
    });
    useHead({
      title: "Group Health Insurance Plans — Amerus Financial",
      meta: [
        { property: "og:title", content: "Group Health Insurance Plans — Amerus" },
        { name: "description", content: "Affordable group health insurance for businesses and organizations. Comprehensive employee health benefits with competitive rates." },
        { property: "og:description", content: "Group health insurance plans for businesses providing comprehensive employee health benefits, medical coverage, and wellness programs." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/group-health-insurance.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/health/group-health" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Group Health Insurance Plans — Amerus" },
        { name: "twitter:description", content: "Group health insurance plans for businesses providing comprehensive employee health benefits, medical coverage, and wellness programs." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/group-health-insurance.jpg" },
        { name: "keywords", content: "group health insurance, employee health benefits, business health plans, employer health coverage, group medical insurance" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/health/group-health"
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
        author: "Sarah Johnson",
        rating: 5,
        review: "Excellent group health insurance that covers all our employees. The coverage is comprehensive and the claims process is efficient.",
        date: "2024-10-15"
      },
      {
        author: "Michael Chen",
        rating: 5,
        review: "Great value for our business. Comprehensive employee health benefits with excellent customer service and support.",
        date: "2024-09-28"
      },
      {
        author: "Lisa Rodriguez",
        rating: 4,
        review: "Good group coverage that helps us attract quality employees. Reasonable rates and comprehensive health benefits.",
        date: "2024-09-20"
      }
    ]);
    const howToSteps = useHowToSchema([
      {
        name: "Get a Quote",
        text: "Contact our insurance specialists for a personalized group health insurance quote based on your business needs.",
        image: "https://www.amerusfinancial.com/images/step-1-quote.jpg"
      },
      {
        name: "Compare Plans",
        text: "Review different group health insurance options including coverage levels, deductibles, and provider networks.",
        image: "https://www.amerusfinancial.com/images/step-2-compare.jpg"
      },
      {
        name: "Complete Application",
        text: "Fill out the simple application form with your business and employee information.",
        image: "https://www.amerusfinancial.com/images/step-3-apply.jpg"
      },
      {
        name: "Activate Coverage",
        text: "Once approved, your group health insurance coverage will be activated and employees can start using benefits.",
        image: "https://www.amerusfinancial.com/images/step-4-activate.jpg"
      }
    ], "How to Apply for Group Health Insurance", "Step-by-step guide to applying for group health insurance coverage with Amerus Financial.", "PT15M", "500.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Group Health Insurance Plans",
        provider: serviceProvider,
        description: "Comprehensive group health insurance coverage for businesses providing employee medical benefits with affordable monthly plans starting at $500.",
        serviceType: "Insurance",
        category: "Group Health Insurance",
        areaServed: "United States",
        offers: {
          "@type": "Offer",
          price: "500.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingIncrement: 1,
            unitText: "monthly"
          },
          description: "Group health insurance plan starting at $500 per month"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Group Health Insurance Plans",
        description: "Comprehensive group health insurance coverage for businesses providing employee medical benefits.",
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
            name: "What does group health insurance cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Group health insurance covers medical care for employees including preventive services, doctor visits, emergency care, prescription drugs, and specialist consultations. Most plans also include mental health coverage and wellness programs."
            }
          },
          {
            "@type": "Question",
            name: "How much does group health insurance cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Group health insurance plans start at $500 per month for small businesses. The cost varies based on the number of employees, coverage level, deductibles, and whether you choose PPO or HMO plans."
            }
          },
          {
            "@type": "Question",
            name: "Are there waiting periods for group health insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most group health insurance plans have minimal waiting periods for preventive services and routine care. Emergency services are typically covered immediately upon activation."
            }
          },
          {
            "@type": "Question",
            name: "Can employees choose their own doctors with group health insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our group health insurance plans provide access to extensive networks of healthcare providers including primary care doctors, specialists, and hospitals. Employees can choose from in-network providers for maximum savings."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Health Insurance",
      title: "Group Health Insurance",
      description: "Comprehensive health benefits for your employees that attract and retain top talent while providing tax advantages for your business.",
      image: "/images/group-insurance.jpg",
      imageAlt: "dental insurance",
      cta: { href: "/contact", label: "Get a Group Health Quote" }
    };
    const benefits = [
      "Comprehensive health coverage for employees",
      "Attracts and retains top talent",
      "Tax advantages for employers",
      "Variety of plan options to suit your budget",
      "Improved employee morale and productivity",
      "Protection against catastrophic health care costs"
    ];
    const info = [
      {
        title: "Coverage Amount",
        text: "Based on group size and coverage selected",
        icon: "lucide:badge-dollar-sign"
      },
      {
        title: "Protection Type",
        text: "Health Insurance",
        icon: "lucide:shield"
      },
      {
        title: "Application Process",
        text: "Simple 15-minute consultation",
        icon: "lucide:clock"
      }
    ];
    const features = [
      "PPO Plans offering flexibility in provider choice",
      "HMO Plans with cost-effective network care",
      "HSA-Compatible Plans for additional tax benefits",
      "Self-Funded Options for larger businesses",
      "Customizable benefits packages for your team",
      "Dedicated account management and employee support"
    ];
    const cta = {
      title: "Ready to get protected?",
      description: "Speak with our insurance experts to find the right coverage for your needs.",
      primary: {
        href: "/contact",
        label: "Get a Group Health Quote"
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
      const _component_HealthSidebar = _sfc_main$7;
      const _component_CallToAction = _sfc_main$8;
      _push(ssrRenderComponent(_component_PatternSection, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HomepageHeroSection, null, null, _parent2, _scopeId));
            _push2(`<main class="flex-grow"${_scopeId}><div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col md:flex-row gap-8"${_scopeId}><div class="w-full md:w-2/3 flex flex-col gap-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Breadcrumbs, {
              currentPageTitle: "Group Health Insurance",
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
            _push2(ssrRenderComponent(_component_HealthSidebar, null, null, _parent2, _scopeId));
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
                        currentPageTitle: "Group Health Insurance",
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
                      createVNode(_component_HealthSidebar)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/health/group-health.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=group-health-BV3OCCbk.js.map
