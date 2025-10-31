import __nuxt_component_0 from "./PatternSection-Bu0o2535.js";
import __nuxt_component_1 from "./HomepageHeroSection-uUHQMeWN.js";
import _sfc_main$1 from "./Breadcrumbs-DuAkTo4_.js";
import _sfc_main$2 from "./Hero-DLw1-KdJ.js";
import __nuxt_component_0$1 from "./Icon-6AEq6jga.js";
import _sfc_main$3 from "./Benefits-BsnkcdKZ.js";
import _sfc_main$4 from "./InfoCards-CZIQ3rXA.js";
import _sfc_main$5 from "./CoverageFeatures-CxwslF9f.js";
import _sfc_main$6 from "./CTA-BZKH80Mk.js";
import _sfc_main$7 from "./HomeSidebar-BMRlyxN7.js";
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
  __name: "living-expenses",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/additional-living-expenses.jpg"]);
    useSocialMeta({
      title: "Additional Living Expenses Coverage — Amerus Financial",
      description: "Financial protection for temporary housing and extra costs when your home becomes uninhabitable. Get coverage for hotel costs, meals, and displacement expenses.",
      image: "https://www.amerusfinancial.com/images/additional-living-expenses.jpg",
      url: "https://www.amerusfinancial.com/services/home/living-expenses",
      type: "website"
    });
    useHead({
      title: "Additional Living Expenses Coverage — Amerus Financial",
      meta: [
        { property: "og:title", content: "Additional Living Expenses Coverage — Amerus" },
        { name: "description", content: "Financial protection for temporary housing and extra costs when your home becomes uninhabitable. Get coverage for hotel costs, meals, and displacement expenses." },
        { property: "og:description", content: "Additional living expenses coverage provides financial protection for temporary housing, meals, and other costs when your home is uninhabitable." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/additional-living-expenses.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/home/living-expenses" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Additional Living Expenses Coverage — Amerus" },
        { name: "twitter:description", content: "Additional living expenses coverage provides financial protection for temporary housing, meals, and other costs when your home is uninhabitable." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/additional-living-expenses.jpg" },
        { name: "keywords", content: "additional living expenses, ALE coverage, temporary housing insurance, displacement coverage, hotel expense coverage, living expense protection" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/home/living-expenses"
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
        review: "Excellent additional living expenses coverage that saved us during the house fire. Hotel and meal costs were covered completely while our home was rebuilt.",
        date: "2024-10-15"
      },
      {
        author: "Michael Chen",
        rating: 5,
        review: "Great ALE coverage that provided peace of mind. When flooding made our home uninhabitable, the temporary housing coverage was invaluable.",
        date: "2024-09-28"
      },
      {
        author: "Lisa Rodriguez",
        rating: 4,
        review: "Good living expenses coverage that helped during our displacement. The claims process was smooth and covered our temporary housing needs.",
        date: "2024-09-20"
      }
    ]);
    const howToSteps = useHowToSchema([
      {
        name: "Get a Quote",
        text: "Contact our insurance specialists for a personalized additional living expenses coverage quote based on your home value.",
        image: "https://www.amerusfinancial.com/images/step-1-quote.jpg"
      },
      {
        name: "Compare Plans",
        text: "Review different ALE coverage options including coverage limits, duration, and what living expenses are covered.",
        image: "https://www.amerusfinancial.com/images/step-2-compare.jpg"
      },
      {
        name: "Complete Application",
        text: "Fill out the simple application form with your home and family information for living expenses coverage.",
        image: "https://www.amerusfinancial.com/images/step-3-apply.jpg"
      },
      {
        name: "Activate Coverage",
        text: "Once approved, your additional living expenses coverage will be activated to protect against displacement costs.",
        image: "https://www.amerusfinancial.com/images/step-4-activate.jpg"
      }
    ], "How to Apply for Additional Living Expenses Coverage", "Step-by-step guide to applying for additional living expenses coverage with Amerus Financial.", "PT15M", "35.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Additional Living Expenses Coverage",
        provider: serviceProvider,
        description: "Additional living expenses coverage providing financial protection for temporary housing and displacement costs with affordable monthly plans starting at $35.",
        serviceType: "Insurance",
        category: "Home Insurance",
        areaServed: "United States",
        offers: {
          "@type": "Offer",
          price: "35.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingIncrement: 1,
            unitText: "monthly"
          },
          description: "Additional living expenses coverage starting at $35 per month"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Additional Living Expenses Coverage",
        description: "Additional living expenses coverage providing financial protection for temporary housing and displacement costs.",
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
            name: "What does additional living expenses coverage cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Additional living expenses coverage pays for temporary housing, hotel costs, increased food expenses, laundry, transportation, and other necessary living costs that exceed your normal expenses when your home is uninhabitable due to a covered loss."
            }
          },
          {
            "@type": "Question",
            name: "How much does additional living expenses coverage cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Additional living expenses coverage typically costs around $35 per month and is usually included as part of your homeowners insurance policy, representing about 20-30% of your dwelling coverage amount."
            }
          },
          {
            "@type": "Question",
            name: "How long does ALE coverage last?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ALE coverage typically lasts until your home is repaired or rebuilt, or until you reach your policy limit. Most policies provide coverage for the shortest time period to repair or replace your home or until you permanently relocate."
            }
          },
          {
            "@type": "Question",
            name: "Do I need receipts for additional living expenses claims?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "While detailed receipts help, many insurers offer per diem payments for certain expenses like meals and lodging. However, keeping receipts for all additional expenses is recommended for accurate reimbursement."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Home Insurance",
      title: "Additional Living Expenses Coverage",
      description: "Financial protection for temporary housing and extra costs when your home becomes uninhabitable due to a covered loss, helping you maintain your standard of living.",
      image: "/images/senior-woman-life-insurance.jpg",
      imageAlt: "senior woman life insurance",
      cta: { href: "/contact", label: "Explore Living Expenses Coverage" }
    };
    const benefits = [
      "Covers hotel or rental housing costs if your home is uninhabitable",
      "Pays for additional food expenses above your normal spending",
      "Covers laundry and transportation costs during displacement",
      "Provides pet boarding expenses if temporary housing doesn't allow pets",
      "Covers moving and storage costs for your belongings",
      "Peace of mind knowing your lifestyle won't be disrupted by a disaster"
    ];
    const info = [
      {
        title: "Coverage Amount",
        text: "Typically 20-30% of dwelling coverage",
        icon: "lucide:badge-dollar-sign"
      },
      {
        title: "Protection Type",
        text: "Home Insurance",
        icon: "lucide:shield"
      },
      {
        title: "Application Process",
        text: "Simple 15-minute consultation",
        icon: "lucide:clock"
      }
    ];
    const features = [
      "Coverage triggered by any covered peril in your homeowners policy",
      "Protection lasts until your home is repaired or rebuilt",
      "No need to provide receipts for every expense with per diem options",
      "Coverage limits typically 20-30% of your dwelling coverage",
      "No deductible typically applied to ALE claims",
      "Coverage for costs that exceed your normal living expenses",
      "Protection during mandatory evacuations in some policies"
    ];
    const cta = {
      title: "Ready to get protected?",
      description: "Speak with our home insurance specialists to find the right coverage for your property.",
      primary: {
        href: "/contact",
        label: "Explore Living Expenses Coverage"
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
      const _component_HomeSidebar = _sfc_main$7;
      const _component_CallToAction = _sfc_main$8;
      _push(ssrRenderComponent(_component_PatternSection, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HomepageHeroSection, null, null, _parent2, _scopeId));
            _push2(`<main class="flex-grow"${_scopeId}><div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col md:flex-row gap-8"${_scopeId}><div class="w-full md:w-2/3 flex flex-col gap-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Breadcrumbs, {
              currentPageTitle: "Additional Living Expenses Coverage",
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
            _push2(ssrRenderComponent(_component_HomeSidebar, null, null, _parent2, _scopeId));
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
                        currentPageTitle: "Additional Living Expenses Coverage",
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
                      createVNode(_component_HomeSidebar)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/home/living-expenses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=living-expenses-CmYI6xlo.js.map
