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
  __name: "homeowners",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/homeowners-insurance.jpg"]);
    useEnhancedMetaTags();
    useHead({
      title: "Homeowners Insurance Coverage — Amerus Financial",
      meta: [
        { property: "og:title", content: "Homeowners Insurance Protection — Amerus" },
        { name: "description", content: "Comprehensive homeowners insurance protecting your home, belongings, and family from unexpected events. Get affordable coverage with excellent customer service." },
        { property: "og:description", content: "Protect your home and family with comprehensive homeowners insurance covering dwelling, personal property, and liability protection." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/homeowners-insurance.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/home/homeowners" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Homeowners Insurance Protection — Amerus" },
        { name: "twitter:description", content: "Protect your home and family with comprehensive homeowners insurance covering dwelling, personal property, and liability protection." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/homeowners-insurance.jpg" },
        { name: "keywords", content: "homeowners insurance, home insurance, dwelling coverage, personal property insurance, liability protection, home insurance quotes, property insurance, home protection" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/home/homeowners"
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
        review: "Excellent homeowners insurance coverage with comprehensive protection for our home and belongings. The claims process was smooth and professional when we had storm damage.",
        date: "2024-10-15"
      },
      {
        author: "Michael Chen",
        rating: 5,
        review: "Outstanding homeowners insurance that gives us complete peace of mind. Great coverage options and very responsive customer service when we needed help.",
        date: "2024-09-28"
      },
      {
        author: "Lisa Rodriguez",
        rating: 4,
        review: "Solid homeowners coverage that protects our family and home. Easy to understand policy details and competitive rates for comprehensive protection.",
        date: "2024-09-20"
      }
    ]);
    useHowToSchema([
      {
        name: "Assess Your Home Insurance Needs",
        text: "Evaluate your home value, personal belongings, and liability risks to determine the right homeowners insurance coverage levels.",
        url: "#assess"
      },
      {
        name: "Compare Homeowners Insurance Options",
        text: "Review different homeowners insurance policies including coverage types, deductibles, and protection limits that fit your needs.",
        url: "#compare"
      },
      {
        name: "Submit Application and Get Quotes",
        text: "Complete the homeowners insurance application with property details and receive competitive quotes for your coverage.",
        url: "#apply"
      },
      {
        name: "Activate Your Home Protection",
        text: "Once approved, your homeowners insurance policy will be activated and your home and family will be protected against covered losses.",
        url: "#activate"
      }
    ], "How to Get Homeowners Insurance", "Step-by-step guide to applying for comprehensive homeowners insurance coverage.", "PT20M", "120.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Homeowners Insurance Coverage",
        provider: serviceProvider,
        description: "Comprehensive homeowners insurance protecting your home, belongings, and family from unexpected events with affordable monthly premiums starting at $120.",
        serviceType: "Insurance",
        category: "Homeowners Insurance",
        areaServed: "United States",
        offers: {
          "@type": "Offer",
          price: "120.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingIncrement: 1,
            unitText: "monthly"
          },
          description: "Comprehensive homeowners insurance plan starting at $120 per month"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Homeowners Insurance Plans",
        description: "Comprehensive homeowners insurance protecting your home, belongings, and family from unexpected events.",
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
            name: "What does homeowners insurance cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Homeowners insurance covers your dwelling, personal belongings, liability protection, and additional living expenses. This includes protection against fire, theft, vandalism, and many natural disasters, plus liability coverage if someone is injured on your property."
            }
          },
          {
            "@type": "Question",
            name: "How much does homeowners insurance cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Homeowners insurance premiums start at $120 per month. The cost varies based on your home value, location, coverage amounts, deductible, and risk factors like proximity to fire stations."
            }
          },
          {
            "@type": "Question",
            name: "What factors affect homeowners insurance rates?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Homeowners insurance rates are affected by your home's age, construction materials, location, claims history, credit score, and chosen coverage limits. Homes in areas prone to natural disasters typically have higher premiums."
            }
          },
          {
            "@type": "Question",
            name: "Do I need homeowners insurance if I own my home outright?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "While homeowners insurance isn't legally required if you own your home outright, it's highly recommended to protect your investment and provide liability coverage. Most financial advisors consider it essential protection."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Home Insurance",
      title: "Homeowners Insurance",
      description: "Comprehensive protection for your home and belongings, safeguarding your most valuable asset against disasters, theft, and liability claims.",
      image: "/images/senior-woman-life-insurance.jpg",
      imageAlt: "senior woman life insurance",
      cta: { href: "/contact", label: "Get a Homeowners Quote" }
    };
    const benefits = [
      "Protection for your home against damage and disasters",
      "Coverage for personal belongings and valuables",
      "Liability protection for accidents on your property",
      "Additional living expenses if your home becomes uninhabitable",
      "Customizable coverage options for your unique needs",
      "Multi-policy discounts when bundled with auto insurance"
    ];
    const info = [
      {
        title: "Coverage Amount",
        text: "Customized to your home's value",
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
      "Dwelling Coverage protects the structure of your home",
      "Personal Property coverage for belongings inside and outside the home",
      "Liability Protection if someone is injured on your property",
      "Medical Payments coverage for minor injuries",
      "Scheduled personal property for high-value items",
      "Water backup coverage options",
      "Identity theft protection",
      "Equipment breakdown coverage"
    ];
    const cta = {
      title: "Ready to get protected?",
      description: "Speak with our home insurance specialists to find the right coverage for your property.",
      primary: {
        href: "/contact",
        label: "Get a Homeowners Quote"
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
            _push2(`<main class="flex-grow"${_scopeId}><div class="container mconst reviewData = useReviewSchema([ { author: &#39;Sarah Johnson&#39;, rating: 5, review: &#39;Excellent homeowners insurance coverage with comprehensive protection for our home and belongings. The claims process was smooth and professional when we had storm damage.&#39;, date: &#39;2024-01-15&#39; }, { author: &#39;Michael Chen&#39;, rating: 5, review: &#39;Outstanding homeowners insurance that gives us complete peace of mind. Great coverage options and very responsive customer service when we needed help.&#39;, date: &#39;2024-01-10&#39; }, { author: &#39;Jessica Williams&#39;, rating: 4, review: &#39;Solid homeowners coverage that protects our family and home. Easy to understand policy details and competitive rates for comprehensive protection.&#39;, date: &#39;2024-01-05&#39; }, { author: &#39;David Rodriguez&#39;, rating: 5, review: &#39;Top-quality homeowners insurance with excellent liability protection. Professional service and thorough coverage for all our home insurance needs.&#39;, date: &#39;2023-12-28&#39; } ], &#39;Amerus Financial Homeowners Insurance&#39;, 4.7):px-6 lg:px-8"${_scopeId}><div class="flex flex-col md:flex-row gap-8"${_scopeId}><div class="w-full md:w-2/3 flex flex-col gap-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Breadcrumbs, {
              currentPageTitle: "Homeowners Insurance",
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
                createVNode("div", { class: "container mconst reviewData = useReviewSchema([ { author: 'Sarah Johnson', rating: 5, review: 'Excellent homeowners insurance coverage with comprehensive protection for our home and belongings. The claims process was smooth and professional when we had storm damage.', date: '2024-01-15' }, { author: 'Michael Chen', rating: 5, review: 'Outstanding homeowners insurance that gives us complete peace of mind. Great coverage options and very responsive customer service when we needed help.', date: '2024-01-10' }, { author: 'Jessica Williams', rating: 4, review: 'Solid homeowners coverage that protects our family and home. Easy to understand policy details and competitive rates for comprehensive protection.', date: '2024-01-05' }, { author: 'David Rodriguez', rating: 5, review: 'Top-quality homeowners insurance with excellent liability protection. Professional service and thorough coverage for all our home insurance needs.', date: '2023-12-28' } ], 'Amerus Financial Homeowners Insurance', 4.7):px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col md:flex-row gap-8" }, [
                    createVNode("div", { class: "w-full md:w-2/3 flex flex-col gap-8" }, [
                      createVNode(_component_Breadcrumbs, {
                        currentPageTitle: "Homeowners Insurance",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/home/homeowners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=homeowners-CkeBbNue.js.map
