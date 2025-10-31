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
  __name: "private-health",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/private-health-insurance.jpg"]);
    useSocialMeta({
      title: "Private Health Insurance Plans — Amerus Financial",
      description: "Secure private health insurance with flexible coverage options, premium networks, and comprehensive medical benefits.",
      image: "https://www.amerusfinancial.com/images/private-health-insurance.jpg",
      url: "https://www.amerusfinancial.com/services/health/private-health",
      type: "website"
    });
    useHead({
      title: "Private Health Insurance Plans — Amerus Financial",
      meta: [
        { property: "og:title", content: "Private Health Insurance Plans — Amerus" },
        { name: "description", content: "Secure private health insurance with flexible coverage options, premium networks, and comprehensive medical benefits." },
        { property: "og:description", content: "Private health insurance plans offering flexible coverage, premium provider networks, and comprehensive medical benefits for individuals and families." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/private-health-insurance.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/health/private-health" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Private Health Insurance Plans — Amerus" },
        { name: "twitter:description", content: "Private health insurance plans offering flexible coverage, premium provider networks, and comprehensive medical benefits for individuals and families." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/private-health-insurance.jpg" },
        { name: "keywords", content: "private health insurance, premium health coverage, flexible health plans, private medical insurance, comprehensive health benefits" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/health/private-health"
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
        review: "Outstanding private health insurance coverage with excellent benefits. The flexibility and comprehensive care options are exactly what we needed.",
        date: "2024-01-15"
      },
      {
        author: "Michael Chen",
        rating: 5,
        review: "Premium private health coverage with access to top doctors and facilities. Worth every penny for the peace of mind.",
        date: "2024-01-10"
      },
      {
        author: "Jessica Williams",
        rating: 4,
        review: "Great private health insurance with fast approvals and comprehensive coverage. Excellent customer service support.",
        date: "2024-01-05"
      },
      {
        author: "David Rodriguez",
        rating: 5,
        review: "Top-tier private health insurance that covers everything we need. Professional service and quick claim processing.",
        date: "2023-12-28"
      }
    ]);
    useHowToSchema([
      {
        name: "Research Private Health Insurance Options",
        text: "Compare different private health insurance plans including coverage options, provider networks, and premium levels.",
        url: "#research"
      },
      {
        name: "Contact Our Insurance Specialists",
        text: "Contact our insurance specialists for a personalized private health insurance quote based on your specific healthcare needs.",
        url: "#contact"
      },
      {
        name: "Submit Application",
        text: "Complete the private health insurance application and select your preferred coverage level and healthcare providers.",
        url: "#apply"
      },
      {
        name: "Start Premium Coverage",
        text: "Once approved, your private health insurance coverage will be activated and you can start accessing premium healthcare benefits.",
        url: "#activate"
      }
    ], "How to Apply for Private Health Insurance", "Step-by-step guide to applying for private health insurance coverage with Amerus Financial.", "PT15M", "300.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Private Health Insurance Plans",
        provider: serviceProvider,
        description: "Premium private health insurance coverage with comprehensive benefits and access to top healthcare providers starting at $300.",
        serviceType: "Insurance",
        category: "Private Health Insurance",
        areaServed: "United States",
        offers: {
          "@type": "Offer",
          price: "300.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingIncrement: 1,
            unitText: "monthly"
          },
          description: "Premium private health insurance plan starting at $300 per month"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Private Health Insurance Plans",
        description: "Premium private health insurance coverage with comprehensive benefits and access to top healthcare providers.",
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
            name: "What does private health insurance cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Private health insurance covers comprehensive medical care including specialist consultations, advanced diagnostic procedures, elective surgeries, private hospital rooms, and premium healthcare services with shorter waiting times."
            }
          },
          {
            "@type": "Question",
            name: "How much does private health insurance cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Private health insurance plans start at $300 per month for premium coverage. The cost varies based on the level of coverage, deductibles, and whether you choose individual or family plans."
            }
          },
          {
            "@type": "Question",
            name: "Are there waiting periods for private health insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most private health insurance plans have minimal waiting periods for routine services and immediate coverage for emergency care. Premium plans often provide faster access to specialists and elective procedures."
            }
          },
          {
            "@type": "Question",
            name: "Can I choose my healthcare provider with private health insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our private health insurance plans provide extensive flexibility in choosing healthcare providers including access to top specialists, private hospitals, and premium medical facilities with preferred rates."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Health Insurance",
      title: "Private Health Insurance",
      description: "Premium healthcare coverage with enhanced benefits and flexibility, giving you greater control over your healthcare choices.",
      image: "/images/private-health.jpg",
      imageAlt: "private health insurance",
      cta: { href: "/contact", label: "Get a Private Health Quote" }
    };
    const benefits = [
      "Personalized coverage tailored to your needs",
      "Access to a wide network of doctors and specialists",
      "Shorter wait times for procedures and treatments",
      "Additional coverage beyond what standard plans offer",
      "Freedom to choose your healthcare providers",
      "Coverage for treatments not included in many standard plans"
    ];
    const info = [
      {
        title: "Coverage Amount",
        text: "Premium varies by plan selection",
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
      "Comprehensive Plans with extensive medical coverage",
      "Hospital-Only Plans focused on inpatient care",
      "Supplemental Plans to enhance existing coverage",
      "High-Deductible Plans with HSA eligibility",
      "Access to premier healthcare facilities",
      "Direct physician access with reduced wait times"
    ];
    const cta = {
      title: "Ready to get protected?",
      description: "Speak with our insurance experts to find the right coverage for your needs.",
      primary: {
        href: "/contact",
        label: "Get a Private Health Quote"
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
              currentPageTitle: "Private Health Insurance",
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
                        currentPageTitle: "Private Health Insurance",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/health/private-health.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=private-health-DFh6uJhd.js.map
