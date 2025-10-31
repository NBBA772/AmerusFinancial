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
  __name: "medicare",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/medicare-insurance.jpg"]);
    useSocialMeta({
      title: "Medicare Insurance Plans & Supplements — Amerus Financial",
      description: "Navigate Medicare with confidence. Find Medicare Advantage, Supplement, and Part D prescription drug plans with expert guidance.",
      image: "https://www.amerusfinancial.com/images/medicare-insurance.jpg",
      url: "https://www.amerusfinancial.com/services/health/medicare",
      type: "website"
    });
    useHead({
      title: "Medicare Insurance Plans & Supplements — Amerus Financial",
      meta: [
        { property: "og:title", content: "Medicare Insurance Plans & Supplements — Amerus" },
        { name: "description", content: "Navigate Medicare with confidence. Find Medicare Advantage, Supplement, and Part D prescription drug plans with expert guidance." },
        { property: "og:description", content: "Medicare insurance plans including Medicare Advantage, Medicare Supplement (Medigap), and Part D prescription drug coverage for seniors." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/medicare-insurance.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/health/medicare" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Medicare Insurance Plans & Supplements — Amerus" },
        { name: "twitter:description", content: "Medicare insurance plans including Medicare Advantage, Medicare Supplement (Medigap), and Part D prescription drug coverage for seniors." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/medicare-insurance.jpg" },
        { name: "keywords", content: "medicare insurance, medicare advantage, medicare supplement, medigap, part D, prescription drug plans, senior health insurance, medicare guidance" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/health/medicare"
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
        author: "Robert Johnson, Age 67",
        rating: 5,
        review: "Excellent Medicare guidance and support. They helped me choose the perfect Medicare Advantage plan with great benefits.",
        date: "2024-10-15"
      },
      {
        author: "Mary Williams, Age 72",
        rating: 5,
        review: "Outstanding Medicare supplement insurance. Fills the gaps in original Medicare perfectly and affordable monthly premiums.",
        date: "2024-09-28"
      },
      {
        author: "James Davis, Age 69",
        rating: 4,
        review: "Great Medicare Part D prescription coverage. Saves me hundreds on medications and excellent customer service.",
        date: "2024-09-20"
      },
      {
        author: "Linda Thompson, Age 74",
        rating: 5,
        review: "Professional Medicare enrollment assistance. Made the complex Medicare process simple and found the best plan for my needs.",
        date: "2024-08-10"
      },
      {
        author: "Charles Rodriguez, Age 65",
        rating: 5,
        review: "Perfect Medicare guidance for new retiree. They explained all options clearly and helped me enroll during my initial enrollment period.",
        date: "2024-07-22"
      }
    ]);
    const howToSteps = useHowToSchema([
      {
        name: "Understand Medicare Basics",
        text: "Learn about Medicare Parts A, B, C, and D, and determine which coverage options best meet your healthcare needs.",
        image: "https://www.amerusfinancial.com/images/step-1-quote.jpg"
      },
      {
        name: "Compare Medicare Plans",
        text: "Review Medicare Advantage, Medicare Supplement, and Part D plans available in your area with our specialists.",
        image: "https://www.amerusfinancial.com/images/step-2-compare.jpg"
      },
      {
        name: "Complete Enrollment",
        text: "Enroll in your chosen Medicare plan during your enrollment period with guided assistance through the process.",
        image: "https://www.amerusfinancial.com/images/step-3-apply.jpg"
      },
      {
        name: "Activate Medicare Benefits",
        text: "Once enrolled, your Medicare coverage begins and you can start using your healthcare benefits and prescription drug coverage.",
        image: "https://www.amerusfinancial.com/images/step-4-activate.jpg"
      }
    ], "How to Enroll in Medicare", "Step-by-step guide to understanding and enrolling in Medicare insurance coverage.", "PT30M", "150.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Medicare Insurance Plans",
        provider: serviceProvider,
        description: "Medicare insurance plans including Medicare Advantage, Medicare Supplement, and Part D prescription drug coverage for seniors starting at $150.",
        serviceType: "Insurance",
        category: "Health Insurance",
        areaServed: "United States",
        offers: {
          "@type": "Offer",
          price: "150.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingIncrement: 1,
            unitText: "monthly"
          },
          description: "Medicare insurance plans starting at $150 per month"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Medicare Insurance Plans",
        description: "Medicare insurance plans including Medicare Advantage, Medicare Supplement, and Part D prescription drug coverage for seniors.",
        category: "Insurance",
        brand: {
          "@type": "Brand",
          name: "Amerus Financial"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "5"
        },
        review: reviewData
      },
      // FAQ Schema for better SERP features
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the difference between Medicare Advantage and Medicare Supplement?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Medicare Advantage (Part C) replaces Original Medicare with private insurance, while Medicare Supplement (Medigap) works alongside Original Medicare to cover gaps like deductibles and copayments."
            }
          },
          {
            "@type": "Question",
            name: "When can I enroll in Medicare?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can first enroll during your Initial Enrollment Period (3 months before to 3 months after turning 65). Annual Open Enrollment runs October 15 - December 7 for plan changes."
            }
          },
          {
            "@type": "Question",
            name: "How much does Medicare cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Medicare Part A is free for most people. Part B costs $174.70/month in 2024. Medicare Advantage and Supplement plans vary, typically ranging from $0-$400+ monthly depending on coverage."
            }
          },
          {
            "@type": "Question",
            name: "Do I need Medicare Part D prescription drug coverage?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Medicare Part D is optional but recommended if you take prescription medications. Delaying enrollment may result in late enrollment penalties unless you have creditable coverage."
            }
          }
        ]
      },
      // HowTo Schema for enrollment process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Health Insurance",
      title: "Medicare Solutions",
      description: "Expert guidance for navigating your Medicare options with personalized support for your healthcare needs.",
      image: "/images/medicare-insurance.jpg",
      imageAlt: "dental insurance",
      cta: { href: "/contact", label: "Contact a Medicare Specialist" }
    };
    const benefits = [
      "Comprehensive coverage for hospital stays and doctor visits",
      "Help with prescription drug costs",
      "Coverage for preventive services and screenings",
      "Protection against high out-of-pocket medical expenses",
      "Options to fill gaps in Original Medicare coverage",
      "Access to a network of healthcare providers"
    ];
    const info = [
      {
        title: "Coverage Amount",
        text: "Premium varies by plan selection",
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
      "Medicare Advantage (Part C) plans with additional benefits",
      "Medicare Supplement (Medigap) options to reduce costs",
      "Prescription Drug Plans (Part D) for medication coverage",
      "Special Needs Plans for specific conditions",
      "Free enrollment assistance and consultation",
      "Year-round support for your Medicare questions"
    ];
    const cta = {
      title: "Ready to get protected?",
      description: "Speak with our insurance experts to find the right coverage for your needs.",
      primary: {
        href: "/contact",
        label: "Contact a Medicare Specialist"
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
              currentPageTitle: "Medicare Solutions",
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
                        currentPageTitle: "Medicare Solutions",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/health/medicare.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=medicare-HTZnzwYn.js.map
