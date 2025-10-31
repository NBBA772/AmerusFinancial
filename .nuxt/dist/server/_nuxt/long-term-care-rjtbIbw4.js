import __nuxt_component_0 from "./PatternSection-Bu0o2535.js";
import __nuxt_component_1 from "./HomepageHeroSection-uUHQMeWN.js";
import _sfc_main$1 from "./Breadcrumbs-DuAkTo4_.js";
import _sfc_main$2 from "./Hero-DLw1-KdJ.js";
import __nuxt_component_0$1 from "./Icon-6AEq6jga.js";
import _sfc_main$3 from "./Benefits-BsnkcdKZ.js";
import _sfc_main$4 from "./InfoCards-CZIQ3rXA.js";
import _sfc_main$5 from "./CoverageFeatures-CxwslF9f.js";
import _sfc_main$6 from "./CTA-BZKH80Mk.js";
import _sfc_main$7 from "./RetirementSidebar-CI3vGV40.js";
import _sfc_main$8 from "./CallToAction-CmwVfqHS.js";
import { u as useEnhancedMetaTags, a as useResourceHints, c as useReviewSchema, d as useHowToSchema, e as useServiceProvider } from "./useOrganizationSchema-DjOkg-j4.js";
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
  __name: "long-term-care",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/long-term-care-planning.jpg"]);
    useEnhancedMetaTags();
    useHead({
      title: "Long-Term Care Planning & Insurance — Amerus Financial",
      meta: [
        { property: "og:title", content: "Long-Term Care Insurance & Planning — Amerus" },
        { name: "description", content: "Protect your retirement with comprehensive long-term care insurance and planning. Coverage for home care, assisted living, and nursing facilities." },
        { property: "og:description", content: "Discover long-term care insurance options covering home care, assisted living, and nursing facilities with comprehensive retirement protection." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/long-term-care-planning.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/retirement/long-term-care" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Long-Term Care Insurance & Planning — Amerus" },
        { name: "twitter:description", content: "Discover long-term care insurance options covering home care, assisted living, and nursing facilities with comprehensive retirement protection." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/long-term-care-planning.jpg" },
        { name: "keywords", content: "long-term care insurance, long-term care planning, nursing home insurance, home care coverage, assisted living insurance, elder care planning, retirement protection, healthcare costs" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/retirement/long-term-care"
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
        author: "Barbara Thompson",
        rating: 5,
        review: "Excellent long-term care planning service. The comprehensive coverage options provide peace of mind for potential future care needs.",
        date: "2024-10-15"
      },
      {
        author: "Charles Williams",
        rating: 5,
        review: "Outstanding long-term care insurance guidance. The policy covers home care, assisted living, and nursing care with great benefits.",
        date: "2024-09-28"
      },
      {
        author: "Margaret Davis",
        rating: 5,
        review: "Professional long-term care planning with flexible options. The coverage protects my retirement savings from unexpected healthcare costs.",
        date: "2024-09-22"
      },
      {
        author: "William Johnson",
        rating: 4,
        review: "Solid long-term care insurance options with competitive premiums. Good coverage for various care settings and helpful planning guidance.",
        date: "2024-09-10"
      }
    ]);
    const howToSteps = useHowToSchema([
      {
        name: "Assess Care Needs",
        text: "Evaluate potential long-term care needs, family history, and current health status to determine appropriate coverage levels.",
        image: "/images/ltc-assessment.jpg",
        url: "https://www.amerusfinancial.com/services/retirement/long-term-care#assessment"
      },
      {
        name: "Compare Coverage Options",
        text: "Review different long-term care insurance policies including benefit periods, elimination periods, and care settings covered.",
        image: "/images/ltc-options.jpg",
        url: "https://www.amerusfinancial.com/services/retirement/long-term-care#options"
      },
      {
        name: "Apply for Coverage",
        text: "Complete the application process including health underwriting and determine optimal premium structure for your budget.",
        image: "/images/ltc-application.jpg",
        url: "https://www.amerusfinancial.com/services/retirement/long-term-care#application"
      },
      {
        name: "Activate Benefits",
        text: "When care is needed, file claims and coordinate with care providers to access your long-term care insurance benefits.",
        image: "/images/ltc-benefits.jpg",
        url: "https://www.amerusfinancial.com/services/retirement/long-term-care#benefits"
      }
    ], "How to Plan for Long-Term Care", "Step-by-step guide to long-term care planning and insurance with Amerus Financial.", "PT30M", "600.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Long-Term Care Planning Services",
        provider: serviceProvider,
        description: "Comprehensive long-term care insurance and planning for retirement protection covering home care, assisted living, and nursing facilities starting at $600 consultation.",
        serviceType: "Insurance Planning",
        category: "Long-Term Care Insurance",
        areaServed: "United States",
        offers: {
          "@type": "Offer",
          price: "600.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingIncrement: 1,
            unitText: "consultation"
          },
          description: "Comprehensive long-term care planning consultation starting at $600"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Long-Term Care Planning Services",
        description: "Comprehensive long-term care insurance and planning for retirement protection covering home care, assisted living, and nursing facilities.",
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
            name: "What does long-term care insurance cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Long-term care insurance covers services like home health care, adult day care, assisted living facilities, and nursing home care. It helps pay for assistance with activities of daily living when you cannot perform them independently."
            }
          },
          {
            "@type": "Question",
            name: "When should I buy long-term care insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The best time to buy long-term care insurance is in your 50s or early 60s when you are still healthy and premiums are lower. Waiting too long may result in higher costs or health issues that make you uninsurable."
            }
          },
          {
            "@type": "Question",
            name: "How much does long-term care insurance cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Long-term care insurance costs vary based on age, health, coverage amount, and benefits period. Premiums typically range from $2,000 to $6,000 annually, but purchasing coverage early can significantly reduce costs."
            }
          },
          {
            "@type": "Question",
            name: "What is the elimination period in long-term care insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The elimination period is like a deductible - the number of days you pay for care before insurance benefits begin. Common periods are 30, 60, 90, or 180 days. Longer elimination periods result in lower premiums."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Retirement Planning",
      title: "Long-Term Care Insurance",
      description: "Specialized coverage that helps pay for extended care services in nursing homes, assisted living facilities, or your own home when you're unable to perform daily activities independently.",
      image: "/images/senior-woman-life-insurance.jpg",
      imageAlt: "senior woman life insurance",
      cta: { href: "/contact", label: "Explore Long-Term Care Options" }
    };
    const benefits = [
      "Protection of retirement assets from high care costs",
      "Choice of care settings including home, assisted living, or nursing facilities",
      "Reduced financial burden on family members",
      "Tax-qualified policies may offer tax advantages",
      "Inflation protection options to maintain coverage value",
      "Peace of mind knowing care needs won't deplete savings"
    ];
    const info = [
      {
        title: "Coverage Amount",
        text: "$3,000 - $10,000 monthly benefit",
        icon: "lucide:badge-dollar-sign"
      },
      {
        title: "Protection Type",
        text: "Retirement Planning",
        icon: "lucide:shield"
      },
      {
        title: "Application Process",
        text: "Simple 15-minute consultation",
        icon: "lucide:clock"
      }
    ];
    const features = [
      "Coverage for skilled, intermediate, and custodial care services",
      "Daily or monthly benefit amounts customized to your needs and budget",
      "Benefit periods ranging from 2 years to lifetime coverage",
      "Elimination periods (waiting periods) to control premium costs",
      "Home care benefits for services received in your residence",
      "Shared care options for couples",
      "Inflation protection to ensure benefits keep pace with rising healthcare costs"
    ];
    const cta = {
      title: "Ready to get protected?",
      description: "Speak with our retirement specialists to create a personalized plan.",
      primary: {
        href: "/contact",
        label: "Explore Long-Term Care Options"
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
      const _component_RetirementSidebar = _sfc_main$7;
      const _component_CallToAction = _sfc_main$8;
      _push(ssrRenderComponent(_component_PatternSection, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HomepageHeroSection, null, null, _parent2, _scopeId));
            _push2(`<main class="flex-grow"${_scopeId}><div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col md:flex-row gap-8"${_scopeId}><div class="w-full md:w-2/3 flex flex-col gap-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Breadcrumbs, {
              currentPageTitle: "Long-Term Care Insurance",
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
            _push2(ssrRenderComponent(_component_RetirementSidebar, null, null, _parent2, _scopeId));
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
                        currentPageTitle: "Long-Term Care Insurance",
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
                      createVNode(_component_RetirementSidebar)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/retirement/long-term-care.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=long-term-care-rjtbIbw4.js.map
