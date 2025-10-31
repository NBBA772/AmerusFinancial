import __nuxt_component_0 from "./PatternSection-Bu0o2535.js";
import __nuxt_component_1 from "./HomepageHeroSection-uUHQMeWN.js";
import _sfc_main$1 from "./Breadcrumbs-DuAkTo4_.js";
import _sfc_main$2 from "./Hero-DLw1-KdJ.js";
import __nuxt_component_4 from "./ServiceCard-Drm7I29y.js";
import __nuxt_component_5 from "./StillHaveQuestions-BBDjaHJm.js";
import _sfc_main$3 from "./CallToAction-CmwVfqHS.js";
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
import "./Icon-6AEq6jga.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/life-insurance.jpg"]);
    useSocialMeta({
      title: "Life Insurance Solutions — Amerus Financial",
      description: "Secure your family's financial future with comprehensive life insurance coverage. From term to permanent life insurance, find the protection that fits your needs.",
      image: "https://www.amerusfinancial.com/images/life-insurance.jpg",
      url: "https://www.amerusfinancial.com/services/life",
      type: "website"
    });
    useHead({
      title: "Life Insurance Solutions — Amerus Financial",
      meta: [
        { property: "og:title", content: "Life Insurance Coverage & Protection — Amerus" },
        { name: "description", content: "Secure your family's financial future with comprehensive life insurance coverage. From term to permanent life insurance, find the protection that fits your needs." },
        { property: "og:description", content: "Explore comprehensive life insurance options including term life, whole life, universal life, and final expense coverage to protect your family's financial future." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/life-insurance.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/life" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Life Insurance Coverage & Protection — Amerus" },
        { name: "twitter:description", content: "Explore comprehensive life insurance options including term life, whole life, universal life, and final expense coverage to protect your family's financial future." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/life-insurance.jpg" },
        { name: "keywords", content: "life insurance, term life insurance, whole life insurance, universal life insurance, final expense insurance, life insurance quotes, family financial protection, life insurance coverage" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/life"
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
        review: "Excellent life insurance coverage that gives our family peace of mind. The application process was straightforward and the rates are very competitive.",
        date: "2024-10-15"
      },
      {
        author: "Michael Chen",
        rating: 5,
        review: "Great value for comprehensive life insurance protection. The term life policy fits our budget perfectly and provides the coverage our family needs.",
        date: "2024-09-28"
      },
      {
        author: "Lisa Rodriguez",
        rating: 4,
        review: "Good life insurance options with flexible coverage amounts. The whole life policy is building cash value as promised and the customer service is helpful.",
        date: "2024-09-20"
      }
    ]);
    const howToSteps = useHowToSchema([
      {
        name: "Get a Quote",
        text: "Contact our life insurance specialists for a personalized life insurance quote based on your age, health, and coverage needs.",
        image: "https://www.amerusfinancial.com/images/step-1-quote.jpg"
      },
      {
        name: "Compare Options",
        text: "Review different life insurance types including term, whole, and universal life insurance to find the best coverage for your family.",
        image: "https://www.amerusfinancial.com/images/step-2-compare.jpg"
      },
      {
        name: "Complete Application",
        text: "Fill out the life insurance application with your personal and health information, including any required medical exams.",
        image: "https://www.amerusfinancial.com/images/step-3-apply.jpg"
      },
      {
        name: "Activate Coverage",
        text: "Once approved, your life insurance policy will be activated and your beneficiaries will have the financial protection they need.",
        image: "https://www.amerusfinancial.com/images/step-4-activate.jpg"
      }
    ], "How to Apply for Life Insurance", "Step-by-step guide to applying for life insurance coverage with Amerus Financial.", "PT20M", "50.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Life Insurance Solutions",
        provider: serviceProvider,
        description: "Comprehensive life insurance coverage including term, whole, universal, and final expense insurance to secure your family's financial future with affordable monthly plans starting at $50.",
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
        name: "Life Insurance Solutions",
        description: "Comprehensive life insurance coverage including term, whole, universal, and final expense insurance to secure your family's financial future.",
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
            name: "What types of life insurance are available?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer comprehensive life insurance options including term life insurance for temporary needs, whole life insurance for permanent coverage with cash value, universal life insurance for flexible premiums, and final expense insurance for burial costs."
            }
          },
          {
            "@type": "Question",
            name: "How much does life insurance cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Life insurance plans start at $50 per month for basic term life coverage. The cost varies based on your age, health status, coverage amount, and the type of life insurance you choose."
            }
          },
          {
            "@type": "Question",
            name: "Do I need a medical exam for life insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Medical exam requirements vary by coverage amount and type. Many policies require a medical exam, while some simplified issue and guaranteed acceptance policies have minimal or no health requirements."
            }
          },
          {
            "@type": "Question",
            name: "How much life insurance coverage do I need?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Life insurance coverage typically ranges from 5-10 times your annual income. The right amount depends on your debts, income replacement needs, future expenses like college tuition, and your family's financial goals."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Insurance Services",
      title: "Life Insurance Solutions",
      description: "Secure your family's financial future with comprehensive life insurance coverage. From term to permanent life insurance, find the protection that fits your needs.",
      image: "/images/life-insurance.jpg",
      imageAlt: "life insurance coverage",
      cta: { href: "/contact", label: "Get Life Insurance Quote" }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PatternSection = __nuxt_component_0;
      const _component_HomepageHeroSection = __nuxt_component_1;
      const _component_Breadcrumbs = _sfc_main$1;
      const _component_Hero = _sfc_main$2;
      const _component_ServiceCard = __nuxt_component_4;
      const _component_StillHaveQuestions = __nuxt_component_5;
      const _component_CallToAction = _sfc_main$3;
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
            _push2(`<section class="grid md:grid-cols-2 gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Term Life Insurance",
              description: "Affordable temporary life insurance protection for specific time periods.",
              link: "/services/life/term-life",
              icon: "lucide:calendar"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Whole Life Insurance",
              description: "Permanent life insurance with cash value and guaranteed coverage for life.",
              link: "/services/life/whole-life",
              icon: "lucide:infinity"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Universal Life Insurance",
              description: "Flexible permanent life insurance with adjustable premiums and death benefits.",
              link: "/services/life/universal-life",
              icon: "lucide:settings"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Final Expense Insurance",
              description: "Burial and funeral expense coverage to protect your family from financial burden.",
              link: "/services/life/final-expense",
              icon: "lucide:heart-handshake"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Key Person Insurance",
              description: "Business protection against the loss of key employees or business owners.",
              link: "/services/life/key-person-insurance",
              icon: "lucide:user-star"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Group Life Insurance",
              description: "Employee life insurance benefits and group coverage for businesses.",
              link: "/services/life/group-life-insurance",
              icon: "lucide:users"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Split Dollar Life Insurance",
              description: "Shared premium life insurance arrangements between employers and employees.",
              link: "/services/life/split-dollar",
              icon: "lucide:split"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Life Insurance Overview",
              description: "General life insurance information and comprehensive coverage options.",
              link: "/services/life/life-insurance",
              icon: "lucide:shield-heart"
            }, null, _parent2, _scopeId));
            _push2(`</section></div><aside class="w-full md:w-1/3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_StillHaveQuestions, null, null, _parent2, _scopeId));
            _push2(`</aside></div></div></main>`);
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
                      createVNode("section", { class: "grid md:grid-cols-2 gap-6" }, [
                        createVNode(_component_ServiceCard, {
                          title: "Term Life Insurance",
                          description: "Affordable temporary life insurance protection for specific time periods.",
                          link: "/services/life/term-life",
                          icon: "lucide:calendar"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Whole Life Insurance",
                          description: "Permanent life insurance with cash value and guaranteed coverage for life.",
                          link: "/services/life/whole-life",
                          icon: "lucide:infinity"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Universal Life Insurance",
                          description: "Flexible permanent life insurance with adjustable premiums and death benefits.",
                          link: "/services/life/universal-life",
                          icon: "lucide:settings"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Final Expense Insurance",
                          description: "Burial and funeral expense coverage to protect your family from financial burden.",
                          link: "/services/life/final-expense",
                          icon: "lucide:heart-handshake"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Key Person Insurance",
                          description: "Business protection against the loss of key employees or business owners.",
                          link: "/services/life/key-person-insurance",
                          icon: "lucide:user-star"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Group Life Insurance",
                          description: "Employee life insurance benefits and group coverage for businesses.",
                          link: "/services/life/group-life-insurance",
                          icon: "lucide:users"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Split Dollar Life Insurance",
                          description: "Shared premium life insurance arrangements between employers and employees.",
                          link: "/services/life/split-dollar",
                          icon: "lucide:split"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Life Insurance Overview",
                          description: "General life insurance information and comprehensive coverage options.",
                          link: "/services/life/life-insurance",
                          icon: "lucide:shield-heart"
                        })
                      ])
                    ]),
                    createVNode("aside", { class: "w-full md:w-1/3" }, [
                      createVNode(_component_StillHaveQuestions)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/life/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-1TLSo-6I.js.map
