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
  __name: "retirement-income",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/retirement-income.jpg"]);
    useSocialMeta({
      title: "Retirement Income Planning & Solutions — Amerus Financial",
      description: "Create sustainable retirement income with annuities, pensions, and investment strategies. Plan your financial future with expert guidance from Amerus.",
      image: "https://www.amerusfinancial.com/images/retirement-income.jpg",
      url: "https://www.amerusfinancial.com/services/retirement/retirement-income",
      type: "website"
    });
    useHead({
      title: "Retirement Income Planning & Solutions — Amerus Financial",
      meta: [
        { property: "og:title", content: "Retirement Income Planning — Amerus" },
        { name: "description", content: "Create sustainable retirement income with annuities, pensions, and investment strategies. Plan your financial future with expert guidance from Amerus." },
        { property: "og:description", content: "Comprehensive retirement income planning including annuities, pension optimization, and withdrawal strategies for financial security." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/retirement-income.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/retirement/retirement-income" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Retirement Income Planning — Amerus" },
        { name: "twitter:description", content: "Comprehensive retirement income planning including annuities, pension optimization, and withdrawal strategies for financial security." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/retirement-income.jpg" },
        { name: "keywords", content: "retirement income, retirement planning, annuities, pension planning, retirement withdrawal strategies, income for life, retirement income streams, guaranteed income, retirement financial planning, senior financial planning" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/retirement/retirement-income"
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
        author: "Robert Thompson",
        rating: 5,
        review: "Outstanding retirement income planning service. They helped me create a guaranteed income stream that covers all my expenses in retirement.",
        date: "2024-10-12"
      },
      {
        author: "Margaret Davis",
        rating: 5,
        review: "Excellent guidance on retirement income strategies. The annuity recommendations provide peace of mind for my golden years.",
        date: "2024-10-08"
      },
      {
        author: "James Wilson",
        rating: 4,
        review: "Professional retirement income planning with comprehensive analysis. Very satisfied with the long-term income solutions.",
        date: "2024-09-25"
      }
    ]);
    const howToSteps = useHowToSchema([
      {
        name: "Retirement Assessment",
        text: "Evaluate your current financial situation, retirement goals, and expected expenses to determine income needs.",
        image: "https://www.amerusfinancial.com/images/retirement-assessment.jpg"
      },
      {
        name: "Income Strategy Design",
        text: "Develop a comprehensive retirement income strategy using annuities, pensions, and investment withdrawals.",
        image: "https://www.amerusfinancial.com/images/income-strategy.jpg"
      },
      {
        name: "Product Selection",
        text: "Choose appropriate income products including immediate annuities, deferred annuities, and pension options.",
        image: "https://www.amerusfinancial.com/images/product-selection.jpg"
      },
      {
        name: "Implementation",
        text: "Implement your retirement income plan with ongoing monitoring and adjustments as needed.",
        image: "https://www.amerusfinancial.com/images/plan-implementation.jpg"
      }
    ], "How to Plan Retirement Income", "Step-by-step guide to creating sustainable retirement income with Amerus Financial.", "PT45M", "1000.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Retirement Income Planning",
        provider: serviceProvider,
        description: "Professional retirement income planning services including annuities, pension optimization, and withdrawal strategies for guaranteed lifetime income.",
        serviceType: "Financial Services",
        category: "Retirement Planning",
        areaServed: "United States",
        offers: {
          "@type": "Offer",
          price: "1000.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingIncrement: 1,
            unitText: "consultation"
          },
          description: "Comprehensive retirement income planning consultation starting at $1,000"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Retirement Income Planning",
        description: "Professional retirement income planning services with guaranteed income strategies and comprehensive financial guidance.",
        category: "Financial Services",
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
            name: "What is retirement income planning?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Retirement income planning involves creating strategies to generate consistent income during retirement through annuities, pensions, investment withdrawals, and other income sources to maintain your lifestyle."
            }
          },
          {
            "@type": "Question",
            name: "How much retirement income do I need?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most experts recommend planning for 70-90% of your pre-retirement income. This varies based on your lifestyle, health care needs, and retirement goals. Our advisors help calculate your specific needs."
            }
          },
          {
            "@type": "Question",
            name: "What are the best retirement income strategies?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Effective strategies include immediate annuities for guaranteed income, deferred annuities for growth, systematic withdrawal plans, pension optimization, and diversified income portfolios to balance security and growth."
            }
          },
          {
            "@type": "Question",
            name: "When should I start retirement income planning?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ideally, start planning 5-10 years before retirement to optimize your strategy. However, it's never too late to create a plan that maximizes your available resources and income potential."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Retirement Planning",
      title: "Retirement Income Strategies",
      description: "Comprehensive planning to create reliable, sustainable income streams throughout your retirement years, ensuring financial security and preserving your lifestyle.",
      image: "/images/senior-woman-life-insurance.jpg",
      imageAlt: "senior woman life insurance",
      cta: { href: "/contact", label: "Create Your Income Strategy" }
    };
    const benefits = [
      "Predictable income throughout retirement",
      "Protection against outliving your savings",
      "Tax-efficient withdrawal strategies",
      "Portfolio designed to balance growth and income",
      "Protection against market volatility",
      "Adaptable plans that evolve with changing needs"
    ];
    const info = [
      {
        title: "Coverage Amount",
        text: "Customized to your retirement lifestyle",
        icon: "lucide:badge-dollar-sign"
      },
      {
        title: "Protection Type",
        text: "HRetirement Planning",
        icon: "lucide:shield"
      },
      {
        title: "Application Process",
        text: "Simple 15-minute consultation",
        icon: "lucide:clock"
      }
    ];
    const features = [
      "Personalized retirement income analysis based on your needs and assets",
      "Systematic withdrawal strategies from investment portfolios",
      "Annuity solutions for guaranteed lifetime income",
      "Strategic Social Security claiming strategies",
      "Required Minimum Distribution (RMD) planning",
      "Tax-efficient withdrawal sequencing from various accounts",
      "Legacy and estate planning integration",
      "Ongoing monitoring and plan adjustments"
    ];
    const cta = {
      title: "Ready to get protected?",
      description: "Speak with our retirement specialists to create a personalized plan.",
      primary: {
        href: "/contact",
        label: "Create Your Income Strategy"
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
              currentPageTitle: "Retirement Income Strategies",
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
                        currentPageTitle: "Retirement Income Strategies",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/retirement/retirement-income.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=retirement-income-BsNlhJS6.js.map
