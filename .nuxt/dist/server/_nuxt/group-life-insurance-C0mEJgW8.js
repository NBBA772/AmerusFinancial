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
  __name: "group-life-insurance",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/group-life-insurance.jpg"]);
    useSocialMeta({
      title: "Group Life Insurance for Employers — Amerus Financial",
      description: "Provide essential financial protection for your employees with cost-effective group life insurance that enhances your benefits package and attracts quality talent.",
      image: "https://www.amerusfinancial.com/images/group-life-insurance.jpg",
      url: "https://www.amerusfinancial.com/services/life/group-life-insurance",
      type: "website"
    });
    useHead({
      title: "Group Life Insurance for Employers — Amerus Financial",
      meta: [
        { property: "og:title", content: "Employee Group Life Insurance Benefits — Amerus" },
        { name: "description", content: "Provide essential financial protection for your employees with cost-effective group life insurance that enhances your benefits package and attracts quality talent." },
        { property: "og:description", content: "Enhance your employee benefits package with group life insurance offering financial protection for your team and their families through affordable employer-sponsored coverage." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/group-life-insurance.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/life/group-life-insurance" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Employee Group Life Insurance Benefits — Amerus" },
        { name: "twitter:description", content: "Enhance your employee benefits package with group life insurance offering financial protection for your team and their families through affordable employer-sponsored coverage." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/group-life-insurance.jpg" },
        { name: "keywords", content: "group life insurance, employee benefits, employer life insurance, group term life, employee life insurance, business insurance, group benefits, employer-sponsored insurance, employee protection" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/life/group-life-insurance"
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
        review: "Excellent group life insurance that helped us attract top talent. The enrollment process was smooth and our employees appreciate the comprehensive coverage for their families.",
        date: "2024-10-15"
      },
      {
        author: "Michael Chen",
        rating: 5,
        review: "Great value for our employee benefits package. The group rates are affordable and the coverage options allow us to offer different levels based on employee positions.",
        date: "2024-09-28"
      },
      {
        author: "Lisa Rodriguez",
        rating: 4,
        review: "Good group life insurance program that enhanced our benefits offering. Easy administration and our employees value the financial protection for their families.",
        date: "2024-09-20"
      }
    ]);
    const howToSteps = useHowToSchema([
      {
        name: "Get a Quote",
        text: "Contact our group insurance specialists for a customized group life insurance quote based on your company size, industry, and employee demographics.",
        image: "https://www.amerusfinancial.com/images/step-1-quote.jpg"
      },
      {
        name: "Design Benefits",
        text: "Work with our team to design a group life insurance program that fits your budget and meets your employees' needs with flexible coverage options.",
        image: "https://www.amerusfinancial.com/images/step-2-compare.jpg"
      },
      {
        name: "Implement Program",
        text: "Complete the group application and enrollment process with our support team handling all administrative details and employee communications.",
        image: "https://www.amerusfinancial.com/images/step-3-apply.jpg"
      },
      {
        name: "Activate Coverage",
        text: "Once approved, your group life insurance program will be activated and your employees will have immediate access to their life insurance benefits.",
        image: "https://www.amerusfinancial.com/images/step-4-activate.jpg"
      }
    ], "How to Implement Group Life Insurance", "Step-by-step guide to implementing group life insurance for your employees with Amerus Financial.", "PT20M", "75.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Group Life Insurance for Employers",
        provider: serviceProvider,
        description: "Cost-effective group life insurance for employers to provide essential financial protection for employees and their families with customizable benefits packages starting at $75 monthly.",
        serviceType: "Insurance",
        category: "Life Insurance",
        areaServed: "United States",
        offers: {
          "@type": "Offer",
          price: "75.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingIncrement: 1,
            unitText: "monthly"
          },
          description: "Group life insurance programs starting at $75 per month"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Group Life Insurance for Employers",
        description: "Cost-effective group life insurance for employers to provide essential financial protection for employees and their families.",
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
            name: "What is group life insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Group life insurance is employer-sponsored life insurance that provides financial protection for employees and their families. It offers term life coverage at group rates, making it more affordable than individual policies while enhancing your employee benefits package."
            }
          },
          {
            "@type": "Question",
            name: "How much does group life insurance cost employers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Group life insurance programs typically start at $75 per month for small businesses. Costs vary based on company size, employee demographics, coverage amounts, and the specific benefits design you choose for your workforce."
            }
          },
          {
            "@type": "Question",
            name: "What are the benefits of offering group life insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Group life insurance helps attract and retain quality employees, enhances your benefits package, provides financial security for employees' families, offers cost-effective coverage through group rates, and may provide tax advantages for your business."
            }
          },
          {
            "@type": "Question",
            name: "How much coverage can employees get through group life insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Group life insurance coverage typically ranges from 1-3 times an employee's annual salary for basic coverage, with options for supplemental coverage that employees can purchase. Coverage amounts can be customized based on employee position and company budget."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Life Insurance",
      title: "Group Life Insurance",
      description: "Provide essential financial protection for your employees' families with cost-effective group life insurance that enhances your benefits package.",
      image: "/images/senior-woman-life-insurance.jpg",
      imageAlt: "senior woman life insurance",
      cta: { href: "/contact", label: "Enhance Your Benefits Package" }
    };
    const benefits = [
      "Attract and retain quality employees",
      "Enhance your overall employee benefits package",
      "Provide financial security for employees' families",
      "Cost-effective coverage through group rates",
      "Potential tax advantages for your business",
      "Easy administration and enrollment process",
      "Flexible coverage options for different employee levels"
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
      "Basic term life coverage for all eligible employees",
      "Optional supplemental coverage employees can purchase",
      "Accidental death and dismemberment options",
      "Waiver of premium during disability periods",
      "Convertibility to individual policies upon leaving",
      "Coverage for dependents available",
      "Multi-tiered benefit structures based on position",
      "Simplified underwriting requirements"
    ];
    const cta = {
      title: "Ready to get protected?",
      description: "Speak with our insurance experts to find the right coverage for your needs.",
      primary: {
        href: "/contact",
        label: "Enhance Your Benefits Package"
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
              currentPageTitle: "Group Life Insurance",
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
                        currentPageTitle: "Group Life Insurance",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/life/group-life-insurance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=group-life-insurance-C0mEJgW8.js.map
