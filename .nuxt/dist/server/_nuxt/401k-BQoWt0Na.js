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
  __name: "401k",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/401k-retirement-planning.jpg"]);
    useEnhancedMetaTags();
    useHead({
      title: "401(k) Retirement Plans & Planning — Amerus Financial",
      meta: [
        { property: "og:title", content: "401(k) Retirement Plans & Investment Options — Amerus" },
        { name: "description", content: "Maximize your retirement savings with 401(k) plans featuring employer matching, tax advantages, and investment options. Expert retirement planning guidance from Amerus." },
        { property: "og:description", content: "Discover 401(k) retirement plans with employer matching, tax-deferred growth, and professional investment guidance." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/401k-retirement-planning.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/retirement/401k" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "401(k) Retirement Plans & Investment Options — Amerus" },
        { name: "twitter:description", content: "Discover 401(k) retirement plans with employer matching, tax-deferred growth, and professional investment guidance." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/401k-retirement-planning.jpg" },
        { name: "keywords", content: "401k plans, retirement planning, employer matching, tax-deferred savings, retirement contributions, 401k rollover, retirement benefits, investment options, retirement guidance, financial planning" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/retirement/401k"
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
        author: "Jennifer Martinez",
        rating: 5,
        review: "Outstanding 401(k) plan setup and guidance. The employer matching options and investment choices exceeded my expectations for retirement planning.",
        date: "2024-10-15"
      },
      {
        author: "David Thompson",
        rating: 5,
        review: "Excellent retirement planning service. The 401(k) rollover process was seamless and the tax advantages are significant.",
        date: "2024-09-28"
      },
      {
        author: "Rachel Kim",
        rating: 5,
        review: "Professional 401(k) administration with great investment options. The automatic payroll deductions make saving effortless.",
        date: "2024-09-22"
      },
      {
        author: "Mark Anderson",
        rating: 4,
        review: "Solid 401(k) plan with competitive employer matching. Good variety of investment funds and helpful retirement planning tools.",
        date: "2024-09-10"
      }
    ]);
    const howToSteps = useHowToSchema([
      {
        name: "Assess Retirement Goals",
        text: "Evaluate your retirement timeline, income needs, and risk tolerance to determine optimal 401(k) contribution strategies.",
        image: "/images/401k-assessment.jpg",
        url: "https://www.amerusfinancial.com/services/retirement/401k#assessment"
      },
      {
        name: "Review 401(k) Options",
        text: "Compare different 401(k) plan features including employer matching, investment options, and vesting schedules.",
        image: "/images/401k-options.jpg",
        url: "https://www.amerusfinancial.com/services/retirement/401k#options"
      },
      {
        name: "Optimize Contributions",
        text: "Set up automatic payroll deductions to maximize employer matching and take advantage of tax-deferred growth.",
        image: "/images/401k-contributions.jpg",
        url: "https://www.amerusfinancial.com/services/retirement/401k#contributions"
      },
      {
        name: "Monitor and Adjust",
        text: "Regularly review your 401(k) performance and adjust investment allocations based on market conditions and life changes.",
        image: "/images/401k-monitoring.jpg",
        url: "https://www.amerusfinancial.com/services/retirement/401k#monitoring"
      }
    ], "How to Optimize Your 401(k) Plan", "Step-by-step guide to maximizing your 401(k) retirement planning with Amerus Financial.", "PT20M", "500.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "401(k) Retirement Planning Services",
        provider: serviceProvider,
        description: "Comprehensive 401(k) retirement planning with employer matching, tax advantages, and professional investment guidance starting at $500 consultation.",
        serviceType: "Financial Planning",
        category: "Retirement Planning",
        areaServed: "United States",
        offers: {
          "@type": "Offer",
          price: "500.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingIncrement: 1,
            unitText: "consultation"
          },
          description: "Comprehensive 401(k) retirement planning consultation starting at $500"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "401(k) Retirement Planning Services",
        description: "Comprehensive 401(k) retirement planning with employer matching, tax-deferred growth, and professional investment guidance.",
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
            name: "What is the 2024 401(k) contribution limit?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For 2024, the 401(k) contribution limit is $23,000 annually. If you are 50 or older, you can make an additional catch-up contribution of $7,500, bringing the total to $30,500."
            }
          },
          {
            "@type": "Question",
            name: "How does employer matching work in 401(k) plans?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Employer matching is when your company contributes to your 401(k) based on your contributions. Common formulas include 50% of the first 6% you contribute or 100% of the first 3% you contribute. This is essentially free money for your retirement."
            }
          },
          {
            "@type": "Question",
            name: "Can I roll over my 401(k) when I change jobs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, you can roll over your 401(k) to your new employer's plan, roll it into an IRA, or leave it with your former employer (if the balance is over $5,000). Rolling over helps maintain tax-deferred status and avoid penalties."
            }
          },
          {
            "@type": "Question",
            name: "What investment options are available in 401(k) plans?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most 401(k) plans offer a variety of investment options including mutual funds, index funds, target-date funds, and sometimes company stock. The specific options depend on your employer's plan and provider."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Retirement Planning",
      title: "401(k) Retirement Plans",
      description: "Building a secure financial future for you and your employees through tax-advantaged retirement savings plans.",
      image: "/images/senior-woman-life-insurance.jpg",
      imageAlt: "senior woman life insurance",
      cta: { href: "/contact", label: "Schedule a Consultation" }
    };
    const benefits = [
      "Tax-advantaged retirement savings",
      "Potential employer matching contributions",
      "Automatic payroll deductions for consistent saving",
      "Wide range of investment options",
      "Portability when changing jobs",
      "Loan provisions for financial emergencies"
    ];
    const info = [
      {
        title: "Coverage Amount",
        text: "$22,500 annual contribution limit (2025)",
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
      "Traditional 401(k) with pre-tax contributions",
      "Roth 401(k) for tax-free withdrawals in retirement",
      "Safe Harbor 401(k) for small businesses",
      "Individual 401(k) for self-employed individuals",
      "Comprehensive plan design and implementation",
      "Ongoing support and education for participants"
    ];
    const cta = {
      title: "Ready to get protected?",
      description: "Speak with our insurance experts to find the right coverage for your needs.",
      primary: {
        href: "/contact",
        label: "Schedule a Consultation"
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
              currentPageTitle: "401(k) Retirement Plans",
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
                        currentPageTitle: "401(k) Retirement Plans",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/retirement/401k.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=401k-BQoWt0Na.js.map
