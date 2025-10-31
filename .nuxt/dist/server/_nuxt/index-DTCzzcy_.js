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
    useResourceHints(["/images/retirement-planning.jpg"]);
    useSocialMeta({
      title: "Retirement Planning Services — Amerus Financial",
      description: "Comprehensive retirement planning with 401(k), IRAs, annuities, and pension strategies. Build a secure financial future with expert retirement guidance.",
      image: "https://www.amerusfinancial.com/images/retirement-planning.jpg",
      url: "https://www.amerusfinancial.com/services/retirement",
      type: "website"
    });
    useHead({
      title: "Retirement Planning Services — Amerus Financial",
      meta: [
        { property: "og:title", content: "Retirement Planning & Financial Services — Amerus" },
        { name: "description", content: "Comprehensive retirement planning with 401(k), IRAs, annuities, and pension strategies. Build a secure financial future with expert retirement guidance." },
        { property: "og:description", content: "Explore retirement planning services including 401(k) management, IRA options, annuities, and comprehensive retirement income strategies." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/retirement-planning.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/retirement" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Retirement Planning & Financial Services — Amerus" },
        { name: "twitter:description", content: "Explore retirement planning services including 401(k) management, IRA options, annuities, and comprehensive retirement income strategies." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/retirement-planning.jpg" },
        { name: "keywords", content: "retirement planning, 401k management, IRA services, annuities, pension planning, retirement income, financial planning, retirement strategies, retirement savings, retirement advisors" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/retirement"
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
        author: "Robert Martinez",
        rating: 5,
        review: "Outstanding retirement planning services with comprehensive 401(k) and IRA guidance. The team helped me maximize my retirement savings and plan for a secure future.",
        date: "2024-10-15"
      },
      {
        author: "Elizabeth Thompson",
        rating: 5,
        review: "Excellent retirement planning consultation. The annuity and pension optimization strategies have significantly improved my retirement income projections.",
        date: "2024-09-28"
      },
      {
        author: "James Wilson",
        rating: 5,
        review: "Professional retirement planning with personalized strategies. The 401(k) rollover process was seamless and the long-term care planning was invaluable.",
        date: "2024-09-20"
      }
    ]);
    const howToSteps = useHowToSchema([
      {
        name: "Assess Retirement Goals",
        text: "Evaluate your retirement timeline, income needs, and current savings to develop a comprehensive retirement planning strategy.",
        image: "https://www.amerusfinancial.com/images/step-1-quote.jpg"
      },
      {
        name: "Review Retirement Options",
        text: "Compare different retirement planning options including 401(k), IRAs, annuities, and pension optimization strategies.",
        image: "https://www.amerusfinancial.com/images/step-2-compare.jpg"
      },
      {
        name: "Develop Strategy",
        text: "Create a personalized retirement plan with investment allocations, contribution strategies, and income distribution planning.",
        image: "https://www.amerusfinancial.com/images/step-3-apply.jpg"
      },
      {
        name: "Implement & Monitor",
        text: "Execute your retirement plan and regularly review performance to ensure you stay on track for your retirement goals.",
        image: "https://www.amerusfinancial.com/images/step-4-activate.jpg"
      }
    ], "How to Plan for Retirement", "Step-by-step guide to comprehensive retirement planning with Amerus Financial.", "PT30M", "500.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Retirement Planning Services",
        provider: serviceProvider,
        description: "Comprehensive retirement planning services including 401(k) management, IRAs, annuities, and pension strategies with expert financial guidance starting at $500.",
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
          description: "Comprehensive retirement planning consultation starting at $500"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Retirement Planning Services",
        description: "Comprehensive retirement planning services including 401(k) management, IRAs, annuities, and pension optimization strategies.",
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
            name: "What retirement planning services do you offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer comprehensive retirement planning including 401(k) management, IRA services, annuities, pension optimization, long-term care planning, and retirement income distribution strategies."
            }
          },
          {
            "@type": "Question",
            name: "How much should I save for retirement?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Financial experts generally recommend saving 10-15% of your income for retirement. The exact amount depends on your age, current savings, desired retirement lifestyle, and other income sources like Social Security or pensions."
            }
          },
          {
            "@type": "Question",
            name: "When should I start retirement planning?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The best time to start retirement planning is as early as possible. Starting in your 20s or 30s allows compound interest to work in your favor, but it's never too late to begin planning for a secure retirement."
            }
          },
          {
            "@type": "Question",
            name: "What is the difference between a 401(k) and an IRA?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A 401(k) is an employer-sponsored retirement plan with higher contribution limits and potential employer matching, while an IRA is an individual retirement account you open yourself with more investment flexibility but lower contribution limits."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Financial Planning",
      title: "Retirement Planning Solutions",
      description: "Build a secure financial future with comprehensive retirement planning services. From IRAs to annuities, create the retirement income strategy that works for you.",
      image: "/images/retirement-planning.jpg",
      imageAlt: "retirement planning services",
      cta: { href: "/contact", label: "Start Retirement Planning" }
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
              currentPageTitle: "Retirement Planning",
              parentTitle: "Services",
              parentUrl: "/services"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Hero, { hero }, null, _parent2, _scopeId));
            _push2(`<section class="grid md:grid-cols-2 gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "IRA Services",
              description: "Individual Retirement Account options including traditional and Roth IRAs.",
              link: "/services/retirement/iras",
              icon: "lucide:piggy-bank"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "401(k) Planning",
              description: "401(k) rollovers, planning strategies, and retirement account management.",
              link: "/services/retirement/401k",
              icon: "lucide:briefcase"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Annuities",
              description: "Fixed and variable annuities for guaranteed retirement income streams.",
              link: "/services/retirement/annuity",
              icon: "lucide:repeat"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Pension Planning",
              description: "Pension maximization strategies and retirement benefit optimization.",
              link: "/services/retirement/pension-planning",
              icon: "lucide:building-2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Long-Term Care",
              description: "Long-term care insurance to protect against extended care costs.",
              link: "/services/retirement/long-term-care",
              icon: "lucide:heart-pulse"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Retirement Income Planning",
              description: "Comprehensive retirement income strategies and distribution planning.",
              link: "/services/retirement/retirement-income",
              icon: "lucide:trending-up"
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
                        currentPageTitle: "Retirement Planning",
                        parentTitle: "Services",
                        parentUrl: "/services"
                      }),
                      createVNode(_component_Hero, { hero }),
                      createVNode("section", { class: "grid md:grid-cols-2 gap-6" }, [
                        createVNode(_component_ServiceCard, {
                          title: "IRA Services",
                          description: "Individual Retirement Account options including traditional and Roth IRAs.",
                          link: "/services/retirement/iras",
                          icon: "lucide:piggy-bank"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "401(k) Planning",
                          description: "401(k) rollovers, planning strategies, and retirement account management.",
                          link: "/services/retirement/401k",
                          icon: "lucide:briefcase"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Annuities",
                          description: "Fixed and variable annuities for guaranteed retirement income streams.",
                          link: "/services/retirement/annuity",
                          icon: "lucide:repeat"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Pension Planning",
                          description: "Pension maximization strategies and retirement benefit optimization.",
                          link: "/services/retirement/pension-planning",
                          icon: "lucide:building-2"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Long-Term Care",
                          description: "Long-term care insurance to protect against extended care costs.",
                          link: "/services/retirement/long-term-care",
                          icon: "lucide:heart-pulse"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Retirement Income Planning",
                          description: "Comprehensive retirement income strategies and distribution planning.",
                          link: "/services/retirement/retirement-income",
                          icon: "lucide:trending-up"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/retirement/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DTCzzcy_.js.map
