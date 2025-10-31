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
  __name: "property-protection",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/property-protection-insurance.jpg"]);
    useSocialMeta({
      title: "Property Protection Insurance — Amerus Financial",
      description: "Comprehensive property protection insurance safeguarding your home and assets from unexpected events. Get complete coverage for your property investment.",
      image: "https://www.amerusfinancial.com/images/property-protection-insurance.jpg",
      url: "https://www.amerusfinancial.com/services/home/property-protection",
      type: "website"
    });
    useHead({
      title: "Property Protection Insurance — Amerus Financial",
      meta: [
        { property: "og:title", content: "Property Protection & Security — Amerus" },
        { name: "description", content: "Comprehensive property protection insurance safeguarding your home and assets from unexpected events. Get complete coverage for your property investment." },
        { property: "og:description", content: "Secure your property investment with comprehensive protection insurance covering your home and assets against various risks and damages." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/property-protection-insurance.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/home/property-protection" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Property Protection & Security — Amerus" },
        { name: "twitter:description", content: "Secure your property investment with comprehensive protection insurance covering your home and assets against various risks and damages." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/property-protection-insurance.jpg" },
        { name: "keywords", content: "property protection, home protection insurance, property security, asset protection, property risk coverage, home asset insurance, property investment protection" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/home/property-protection"
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
        review: "Excellent property protection insurance that safeguarded our home during the hurricane. The comprehensive coverage protected our investment completely.",
        date: "2024-10-15"
      },
      {
        author: "Michael Chen",
        rating: 5,
        review: "Great property protection with comprehensive coverage for our home and belongings. Peace of mind knowing our assets are fully protected.",
        date: "2024-09-28"
      },
      {
        author: "Lisa Rodriguez",
        rating: 4,
        review: "Good property protection coverage that covers all our structures and belongings. Competitive rates for comprehensive home protection.",
        date: "2024-09-20"
      }
    ]);
    const howToSteps = useHowToSchema([
      {
        name: "Get a Quote",
        text: "Contact our insurance specialists for a personalized property protection insurance quote based on your home and asset values.",
        image: "https://www.amerusfinancial.com/images/step-1-quote.jpg"
      },
      {
        name: "Compare Plans",
        text: "Review different property protection options including coverage levels, deductibles, and specialized protections for your property.",
        image: "https://www.amerusfinancial.com/images/step-2-compare.jpg"
      },
      {
        name: "Complete Application",
        text: "Fill out the simple application form with your property details and asset information for comprehensive protection.",
        image: "https://www.amerusfinancial.com/images/step-3-apply.jpg"
      },
      {
        name: "Activate Coverage",
        text: "Once approved, your property protection insurance will be activated and your home and assets will be fully protected.",
        image: "https://www.amerusfinancial.com/images/step-4-activate.jpg"
      }
    ], "How to Apply for Property Protection Insurance", "Step-by-step guide to applying for property protection insurance with Amerus Financial.", "PT15M", "115.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Property Protection Insurance",
        provider: serviceProvider,
        description: "Comprehensive property protection insurance safeguarding your home and assets from unexpected events with affordable monthly plans starting at $115.",
        serviceType: "Insurance",
        category: "Property Insurance",
        areaServed: "United States",
        offers: {
          "@type": "Offer",
          price: "115.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingIncrement: 1,
            unitText: "monthly"
          },
          description: "Property protection insurance starting at $115 per month"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Property Protection Insurance",
        description: "Comprehensive property protection insurance safeguarding your home and assets from unexpected events.",
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
            name: "What does property protection insurance cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Property protection insurance covers your home structure, detached buildings, personal belongings, and assets against perils like fire, windstorms, theft, vandalism, and other covered damages. It provides comprehensive protection for your property investment."
            }
          },
          {
            "@type": "Question",
            name: "How much does property protection insurance cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Property protection insurance plans start at $115 per month for comprehensive coverage. The cost varies based on your property value, location, coverage limits, and the specific protections you choose for your home and assets."
            }
          },
          {
            "@type": "Question",
            name: "What's included in property protection coverage?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Property protection includes dwelling coverage for your home structure, coverage for detached structures like garages and sheds, personal property protection for belongings, and additional protections for high-value items and specialized risks."
            }
          },
          {
            "@type": "Question",
            name: "Do I need additional property protection beyond homeowners insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Property protection insurance can enhance your homeowners coverage with specialized protections, higher coverage limits, and coverage for items that may have limited protection under standard policies, providing comprehensive asset protection."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Home Insurance",
      title: "Property Protection Insurance",
      description: "Comprehensive coverage for your home, belongings, and other structures against a wide range of perils, safeguarding your most valuable investments.",
      image: "/images/senior-woman-life-insurance.jpg",
      imageAlt: "senior woman life insurance",
      cta: { href: "/contact", label: "Get a Property Protection Quote" }
    };
    const benefits = [
      "Protects the physical structure of your home against covered perils",
      "Covers detached structures like garages, sheds, and fences",
      "Safeguards your personal belongings and possessions",
      "Offers replacement cost options for maximum protection",
      "Specialized Florida coverage considerations including hurricane protection",
      "Additional coverage options for valuable items that exceed standard limits"
    ];
    const info = [
      {
        title: "Coverage Amount",
        text: "Up to full replacement value of your home",
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
      "Coverage for fire and smoke damage",
      "Protection against windstorms and hail",
      "Lightning strike coverage",
      "Vandalism and theft protection",
      "Water damage coverage from sudden and accidental sources",
      "Coverage for falling objects and weight of ice/snow",
      "Protection from sudden electrical current damage",
      "Options for hurricane and sinkhole coverage in Florida"
    ];
    const cta = {
      title: "Ready to protect your home?",
      description: "Speak with our home insurance specialists to find the right coverage for your property.",
      primary: {
        href: "/contact",
        label: "Get a Property Protection Quote"
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
              currentPageTitle: "Property Protection Insurance",
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
                        currentPageTitle: "Property Protection Insurance",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/home/property-protection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=property-protection-CWZ8fTSZ.js.map
