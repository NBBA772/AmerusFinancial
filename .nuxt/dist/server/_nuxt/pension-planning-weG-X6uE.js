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
  __name: "pension-planning",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/pension-planning.jpg"]);
    useEnhancedMetaTags();
    useHead({
      title: "Pension Planning & Retirement Benefits — Amerus Financial",
      meta: [
        { property: "og:title", content: "Pension Planning & Benefit Optimization — Amerus" },
        { name: "description", content: "Maximize your pension benefits with expert planning for defined benefit plans, pension rollovers, and retirement income optimization strategies." },
        { property: "og:description", content: "Discover pension planning strategies for defined benefit plans, pension rollovers, and retirement income optimization with professional guidance." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/pension-planning.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/retirement/pension-planning" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Pension Planning & Benefit Optimization — Amerus" },
        { name: "twitter:description", content: "Discover pension planning strategies for defined benefit plans, pension rollovers, and retirement income optimization with professional guidance." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/pension-planning.jpg" },
        { name: "keywords", content: "pension planning, defined benefit plans, pension rollover, retirement benefits, pension optimization, pension income, retirement planning, federal pension, state pension, corporate pension" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/retirement/pension-planning"
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
        author: "Thomas Wilson",
        rating: 5,
        review: "Excellent pension planning guidance. The expert analysis helped me optimize my federal pension benefits and maximize my retirement income.",
        date: "2024-10-15"
      },
      {
        author: "Nancy Martinez",
        rating: 5,
        review: "Outstanding pension consultation service. The rollover guidance saved me significant taxes and improved my overall retirement strategy.",
        date: "2024-09-28"
      },
      {
        author: "Richard Brown",
        rating: 5,
        review: "Professional pension planning with comprehensive analysis. The team helped me understand all my defined benefit options and timing strategies.",
        date: "2024-09-22"
      },
      {
        author: "Sandra Davis",
        rating: 4,
        review: "Solid pension planning service with detailed projections. Good expertise in corporate pensions and helpful retirement income planning.",
        date: "2024-09-10"
      }
    ]);
    const howToSteps = useHowToSchema([
      {
        name: "Analyze Current Benefits",
        text: "Review your current pension plan details, vesting schedule, and projected benefits to understand your retirement income foundation.",
        image: "/images/pension-analysis.jpg",
        url: "https://www.amerusfinancial.com/services/retirement/pension-planning#analysis"
      },
      {
        name: "Evaluate Options",
        text: "Compare pension payout options including lump sum vs. annuity payments, survivor benefits, and tax implications for each choice.",
        image: "/images/pension-options.jpg",
        url: "https://www.amerusfinancial.com/services/retirement/pension-planning#options"
      },
      {
        name: "Optimize Timing",
        text: "Determine optimal retirement timing to maximize pension benefits while considering Social Security coordination and other income sources.",
        image: "/images/pension-timing.jpg",
        url: "https://www.amerusfinancial.com/services/retirement/pension-planning#timing"
      },
      {
        name: "Implement Strategy",
        text: "Execute your pension strategy with proper documentation, beneficiary designations, and coordination with overall retirement plan.",
        image: "/images/pension-implementation.jpg",
        url: "https://www.amerusfinancial.com/services/retirement/pension-planning#implementation"
      }
    ], "How to Optimize Your Pension Plan", "Step-by-step guide to pension planning and benefit optimization with Amerus Financial.", "PT35M", "650.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Pension Planning Services",
        provider: serviceProvider,
        description: "Comprehensive pension planning and benefit optimization for defined benefit plans, pension rollovers, and retirement income strategies starting at $650 consultation.",
        serviceType: "Financial Planning",
        category: "Pension Planning",
        areaServed: "United States",
        offers: {
          "@type": "Offer",
          price: "650.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingIncrement: 1,
            unitText: "consultation"
          },
          description: "Comprehensive pension planning consultation starting at $650"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Pension Planning Services",
        description: "Comprehensive pension planning and benefit optimization for defined benefit plans, pension rollovers, and retirement income strategies.",
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
            name: "Should I take a lump sum or annuity from my pension?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The choice between lump sum and annuity depends on your health, financial situation, investment experience, and survivor benefit needs. Annuities provide guaranteed lifetime income, while lump sums offer investment control and legacy planning opportunities."
            }
          },
          {
            "@type": "Question",
            name: "When should I start taking my pension benefits?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Optimal pension timing depends on your plan's early retirement reductions, Social Security coordination, other income needs, and overall retirement timeline. Some plans penalize early retirement while others may offer incentives."
            }
          },
          {
            "@type": "Question",
            name: "Can I roll my pension into an IRA?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If your pension offers a lump sum option, you may be able to roll it into an IRA or 401(k). This can provide investment control and tax deferral, but you lose the guaranteed income that pension annuities provide."
            }
          },
          {
            "@type": "Question",
            name: "How are pension benefits taxed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pension benefits are typically taxed as ordinary income when received. The portion attributable to after-tax contributions may be tax-free. Lump sum distributions have special tax considerations and may qualify for income averaging."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Retirement Planning",
      title: "Pension Planning",
      description: "Expert guidance to optimize your pension benefits and integrate them into your comprehensive retirement strategy for maximum financial security.",
      image: "/images/senior-woman-life-insurance.jpg",
      imageAlt: "senior woman life insurance",
      cta: { href: "/contact", label: "Start Your Pension Planning" }
    };
    const benefits = [
      "Professional analysis of pension benefit options",
      "Strategies to maximize your pension's value",
      "Integration with other retirement income sources",
      "Tax-efficient withdrawal planning",
      "Protection against inflation and market volatility",
      "Spousal benefit optimization"
    ];
    const info = [
      {
        title: "Coverage Amount",
        text: "Customized to your retirement needs",
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
      "Comprehensive evaluation of pension payout options (lump sum vs. annuity)",
      "Analysis of survivor benefit elections and their financial implications",
      "Strategies for early retirement pension maximization",
      "Pension buyout evaluation services",
      "Integration with Social Security claiming strategies",
      "Coordination with 401(k), IRA, and other retirement accounts",
      "Planning for healthcare costs alongside pension income"
    ];
    const cta = {
      title: "Ready to plan your future?",
      description: "Speak with our retirement specialists to create a personalized plan.",
      primary: {
        href: "/contact",
        label: "Start Your Pension Planning"
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
              currentPageTitle: "Pension Planning",
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
                        currentPageTitle: "Pension Planning",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/retirement/pension-planning.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=pension-planning-weG-X6uE.js.map
