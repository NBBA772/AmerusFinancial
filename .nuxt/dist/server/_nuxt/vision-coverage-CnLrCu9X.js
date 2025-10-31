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
  __name: "vision-coverage",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/vision-insurance.jpg"]);
    useSocialMeta({
      title: "Vision Insurance Coverage — Amerus Financial",
      description: "Affordable vision insurance plans covering eye exams, glasses, contact lenses, and frames with extensive provider networks.",
      image: "https://www.amerusfinancial.com/images/vision-insurance.jpg",
      url: "https://www.amerusfinancial.com/services/health/vision-coverage",
      type: "website"
    });
    useHead({
      title: "Vision Insurance Coverage — Amerus Financial",
      meta: [
        { property: "og:title", content: "Vision Insurance Coverage — Amerus" },
        { name: "description", content: "Affordable vision insurance plans covering eye exams, glasses, contact lenses, and frames with extensive provider networks." },
        { property: "og:description", content: "Vision insurance coverage providing eye exam benefits, glasses, contact lenses, and frames through quality vision care networks." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/vision-insurance.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/health/vision-coverage" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Vision Insurance Coverage — Amerus" },
        { name: "twitter:description", content: "Vision insurance coverage providing eye exam benefits, glasses, contact lenses, and frames through quality vision care networks." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/vision-insurance.jpg" },
        { name: "keywords", content: "vision insurance, eye care coverage, glasses insurance, contact lens coverage, eye exam benefits, vision care plans" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/health/vision-coverage"
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
        author: "Jennifer Smith",
        rating: 5,
        review: "Excellent vision insurance with comprehensive eye care coverage. Annual eye exams are fully covered and great selection of frames.",
        date: "2024-10-15"
      },
      {
        author: "Michael Johnson",
        rating: 5,
        review: "Great value for vision coverage. No waiting periods for eye exams and the optometrist network is extensive.",
        date: "2024-09-28"
      },
      {
        author: "Lisa Davis",
        rating: 4,
        review: "Good vision insurance with reasonable rates. Contact lens coverage is excellent and claim process is smooth.",
        date: "2024-09-20"
      },
      {
        author: "Robert Wilson",
        rating: 5,
        review: "Outstanding vision coverage for the whole family. Kids' eye exams and glasses are fully covered with great frame allowances.",
        date: "2024-08-10"
      },
      {
        author: "Amanda Chen",
        rating: 5,
        review: "Perfect vision insurance for my needs. Prescription glasses and contact lenses covered with fast reimbursement.",
        date: "2024-07-22"
      }
    ]);
    const howToSteps = useHowToSchema([
      {
        name: "Get Vision Quote",
        text: "Contact our insurance specialists for a personalized vision insurance quote based on your eye care needs.",
        image: "https://www.amerusfinancial.com/images/step-1-quote.jpg"
      },
      {
        name: "Compare Vision Plans",
        text: "Review different vision insurance options including coverage for exams, glasses, contacts, and provider networks.",
        image: "https://www.amerusfinancial.com/images/step-2-compare.jpg"
      },
      {
        name: "Complete Application",
        text: "Fill out the simple vision insurance application with your personal information and coverage preferences.",
        image: "https://www.amerusfinancial.com/images/step-3-apply.jpg"
      },
      {
        name: "Activate Coverage",
        text: "Once approved, your vision insurance coverage will be activated and you can start using eye care benefits.",
        image: "https://www.amerusfinancial.com/images/step-4-activate.jpg"
      }
    ], "How to Apply for Vision Insurance", "Step-by-step guide to applying for vision insurance coverage with Amerus Financial.", "PT15M", "30.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Vision Insurance Coverage",
        provider: serviceProvider,
        description: "Vision insurance coverage providing eye exam benefits, glasses, contact lenses, and frames with affordable monthly plans starting at $30.",
        serviceType: "Insurance",
        category: "Vision Insurance",
        areaServed: "United States",
        offers: {
          "@type": "Offer",
          price: "30.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingIncrement: 1,
            unitText: "monthly"
          },
          description: "Vision insurance plan starting at $30 per month"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Vision Insurance Coverage",
        description: "Vision insurance coverage providing eye exam benefits, glasses, contact lenses, and frames.",
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
            name: "What does vision insurance cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Vision insurance typically covers annual eye exams, prescription glasses, contact lenses, and frames. Many plans also provide discounts on laser eye surgery and designer frames."
            }
          },
          {
            "@type": "Question",
            name: "How much does vision insurance cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Vision insurance plans start at $30 per month for comprehensive coverage. The cost varies based on coverage level, frame allowances, and whether you choose individual or family plans."
            }
          },
          {
            "@type": "Question",
            name: "Are there waiting periods for vision insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most vision insurance plans have no waiting periods for eye exams and basic services. Some plans may have short waiting periods for frames and contact lenses."
            }
          },
          {
            "@type": "Question",
            name: "Can I choose my own eye doctor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our vision insurance plans provide access to a network of optometrists and ophthalmologists. You can choose from in-network providers for maximum savings or visit out-of-network doctors with different coverage levels."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Health Insurance",
      title: "Vision Coverage",
      description: "Protect your eye health with comprehensive vision insurance that covers exams, glasses, contacts, and more at affordable rates.",
      image: "/images/vision-insurance.jpg",
      imageAlt: "vision coverage",
      cta: { href: "/contact", label: "Check Your Vision Coverage Options" }
    };
    const benefits = [
      "Personalized coverage for your specific needs",
      "Coverage for preventive care and wellness visits",
      "Access to a network of quality healthcare providers",
      "Protection against high medical costs",
      "Options for prescription drug coverage",
      "Peace of mind knowing you're protected"
    ];
    const info = [
      {
        title: "Coverage Amount",
        text: "Starting at $12/month",
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
      "Annual comprehensive eye exams",
      "Frame allowances - update your glasses regularly",
      "Contact lens fittings and supplies",
      "Discounts on lens enhancements (anti-glare, transitions, etc.)",
      "Additional pairs of glasses at reduced costs",
      "Savings on LASIK and PRK vision correction procedures"
    ];
    const cta = {
      title: "Ready to get protected?",
      description: "Speak with our insurance experts to find the right coverage for your needs.",
      primary: {
        href: "/contact",
        label: "Check Your Vision Coverage Options"
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
              currentPageTitle: "Vision Coverage",
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
                        currentPageTitle: "Vision Coverage",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/health/vision-coverage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=vision-coverage-CnLrCu9X.js.map
