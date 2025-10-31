import __nuxt_component_0 from "./PatternSection-Bu0o2535.js";
import __nuxt_component_1 from "./HomepageHeroSection-uUHQMeWN.js";
import _sfc_main$1 from "./Breadcrumbs-DuAkTo4_.js";
import _sfc_main$2 from "./Hero-DLw1-KdJ.js";
import __nuxt_component_0$1 from "./Icon-6AEq6jga.js";
import _sfc_main$3 from "./Benefits-BsnkcdKZ.js";
import _sfc_main$4 from "./InfoCards-CZIQ3rXA.js";
import _sfc_main$5 from "./CoverageFeatures-CxwslF9f.js";
import _sfc_main$6 from "./CTA-BZKH80Mk.js";
import _sfc_main$7 from "./LifeSidebar-C3tl5OQm.js";
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
  __name: "life-insurance",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/life-insurance.jpg"]);
    useSocialMeta({
      title: "Life Insurance Coverage & Protection — Amerus Financial",
      description: "Protecting your family's financial future with customized life insurance solutions that provide security and peace of mind for your loved ones.",
      image: "https://www.amerusfinancial.com/images/life-insurance.jpg",
      url: "https://www.amerusfinancial.com/services/life/life-insurance",
      type: "website"
    });
    useHead({
      title: "Life Insurance Coverage & Protection — Amerus Financial",
      meta: [
        { property: "og:title", content: "Life Insurance Solutions for Families — Amerus" },
        { name: "description", content: "Protecting your family's financial future with customized life insurance solutions that provide security and peace of mind for your loved ones." },
        { property: "og:description", content: "Secure your family's financial future with comprehensive life insurance coverage including term life, whole life, and universal life insurance options." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/life-insurance.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/life/life-insurance" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Life Insurance Solutions for Families — Amerus" },
        { name: "twitter:description", content: "Secure your family's financial future with comprehensive life insurance coverage including term life, whole life, and universal life insurance options." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/life-insurance.jpg" },
        { name: "keywords", content: "life insurance, family protection, life insurance coverage, term life insurance, whole life insurance, universal life insurance, life insurance quotes, financial security, family financial planning" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/life/life-insurance"
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
        review: "Excellent life insurance coverage that gives our family complete peace of mind. The application process was smooth and the rates are very competitive for the protection we get.",
        date: "2024-10-15"
      },
      {
        author: "Michael Chen",
        rating: 5,
        review: "Great value for comprehensive life insurance protection. The whole life policy provides both coverage and cash value growth, perfect for our long-term financial planning.",
        date: "2024-09-28"
      },
      {
        author: "Lisa Rodriguez",
        rating: 4,
        review: "Good life insurance options with flexible coverage amounts. The term life policy fits our budget and provides the financial security our family needs.",
        date: "2024-09-20"
      }
    ]);
    const howToSteps = useHowToSchema([
      {
        name: "Get a Quote",
        text: "Contact our life insurance specialists for a personalized life insurance quote based on your age, health, income, and family protection needs.",
        image: "https://www.amerusfinancial.com/images/step-1-quote.jpg"
      },
      {
        name: "Choose Coverage Type",
        text: "Select the right life insurance type for your situation - term life for temporary needs or permanent life insurance for lifelong protection and cash value.",
        image: "https://www.amerusfinancial.com/images/step-2-compare.jpg"
      },
      {
        name: "Complete Application",
        text: "Fill out the life insurance application with your personal information, health history, and undergo any required medical examinations.",
        image: "https://www.amerusfinancial.com/images/step-3-apply.jpg"
      },
      {
        name: "Activate Coverage",
        text: "Once approved, your life insurance policy will be activated and your beneficiaries will have the financial protection and security they need.",
        image: "https://www.amerusfinancial.com/images/step-4-activate.jpg"
      }
    ], "How to Get Life Insurance", "Step-by-step guide to securing life insurance coverage for your family with Amerus Financial.", "PT20M", "50.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Life Insurance Coverage & Protection",
        provider: serviceProvider,
        description: "Comprehensive life insurance solutions including term life, whole life, and universal life insurance to protect your family's financial future with affordable monthly plans starting at $50.",
        serviceType: "Insurance",
        category: "Life Insurance",
        areaServed: "United States",
        offers: {
          "@type": "Offer",
          price: "50.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingIncrement: 1,
            unitText: "monthly"
          },
          description: "Life insurance coverage starting at $50 per month"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Life Insurance Coverage & Protection",
        description: "Comprehensive life insurance solutions including term life, whole life, and universal life insurance to protect your family's financial future.",
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
            name: "What types of life insurance do you offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer comprehensive life insurance options including term life insurance for temporary coverage, whole life insurance for permanent protection with cash value, universal life insurance for flexible premiums, and final expense insurance for end-of-life costs."
            }
          },
          {
            "@type": "Question",
            name: "How much does life insurance cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Life insurance plans start at $50 per month for basic term life coverage. The cost varies based on your age, health status, coverage amount, lifestyle factors, and the type of life insurance you choose."
            }
          },
          {
            "@type": "Question",
            name: "How much life insurance coverage do I need?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Life insurance coverage typically ranges from 5-10 times your annual income. The right amount depends on your family's financial needs, outstanding debts, mortgage balance, children's education costs, and your family's lifestyle expenses."
            }
          },
          {
            "@type": "Question",
            name: "Do I need a medical exam for life insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Medical exam requirements vary by coverage amount and policy type. Many policies require a medical exam for larger coverage amounts, while some simplified issue and guaranteed acceptance policies have minimal health requirements."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Life Insurance",
      title: "Life Insurance",
      description: "Protecting your family's financial future with customized life insurance solutions that provide security and peace of mind.",
      image: "/images/senior-woman-life-insurance.jpg",
      imageAlt: "senior woman life insurance",
      cta: { href: "/contact", label: "Find the Right Coverage" }
    };
    const benefits = [
      "Financial security for your loved ones",
      "Income replacement for your family",
      "Coverage for final expenses and funeral costs",
      "Help with debt payoff and mortgage protection",
      "Tax-free benefits for your beneficiaries",
      "Peace of mind knowing your family is protected"
    ];
    const info = [
      {
        title: "Coverage Amount",
        text: "Customized to your needs",
        icon: "lucide:badge-dollar-sign"
      },
      {
        title: "Protection Type",
        text: "Life Insurance",
        icon: "lucide:shield"
      },
      {
        title: "Application Process",
        text: "Simple 15-minute consultation",
        icon: "lucide:clock"
      }
    ];
    const features = [
      "Term Life Insurance for affordable, temporary coverage",
      "Whole Life Insurance with permanent protection and cash value",
      "Universal Life Insurance offering flexible premiums and benefits",
      "Final Expense Insurance for end-of-life costs",
      "Key Person Insurance for business continuity",
      "Group Life Insurance for employee benefits packages"
    ];
    const cta = {
      title: "Ready to get protected?",
      description: "Speak with our insurance experts to find the right coverage for your needs.",
      primary: {
        href: "/contact",
        label: "Find the Right Coverage"
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
      const _component_LifeSidebar = _sfc_main$7;
      const _component_CallToAction = _sfc_main$8;
      _push(ssrRenderComponent(_component_PatternSection, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HomepageHeroSection, null, null, _parent2, _scopeId));
            _push2(`<main class="flex-grow"${_scopeId}><div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col md:flex-row gap-8"${_scopeId}><div class="w-full md:w-2/3 flex flex-col gap-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Breadcrumbs, {
              currentPageTitle: "Life Insurance",
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
            _push2(ssrRenderComponent(_component_LifeSidebar, null, null, _parent2, _scopeId));
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
                        currentPageTitle: "Life Insurance",
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
                      createVNode(_component_LifeSidebar)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/life/life-insurance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=life-insurance-WRp9W1iw.js.map
