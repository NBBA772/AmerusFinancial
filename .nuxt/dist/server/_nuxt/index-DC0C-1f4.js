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
    useResourceHints(["/images/home-insurance.jpg"]);
    useSocialMeta({
      title: "Home Insurance Solutions & Coverage — Amerus Financial",
      description: "Comprehensive home insurance solutions including homeowners, property protection, flood insurance, and liability coverage. Protect your most valuable asset.",
      image: "https://www.amerusfinancial.com/images/home-insurance.jpg",
      url: "https://www.amerusfinancial.com/services/home",
      type: "website"
    });
    useHead({
      title: "Home Insurance Solutions & Coverage — Amerus Financial",
      meta: [
        { property: "og:title", content: "Home Insurance Solutions — Amerus" },
        { name: "description", content: "Comprehensive home insurance solutions including homeowners, property protection, flood insurance, and liability coverage. Protect your most valuable asset." },
        { property: "og:description", content: "Explore home insurance options including homeowners insurance, property protection, flood coverage, liability protection, and valuable items coverage." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/home-insurance.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/home" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Home Insurance Solutions — Amerus" },
        { name: "twitter:description", content: "Explore home insurance options including homeowners insurance, property protection, flood coverage, liability protection, and valuable items coverage." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/home-insurance.jpg" },
        { name: "keywords", content: "home insurance, homeowners insurance, property protection, flood insurance, liability coverage, valuable items coverage, home protection, property insurance" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/home"
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
        review: "Excellent home insurance coverage with comprehensive protection options. The variety of home insurance plans helped us find perfect coverage for our property.",
        date: "2024-10-15"
      },
      {
        author: "Michael Chen",
        rating: 5,
        review: "Great home insurance solutions and customer service. Found both homeowners and flood coverage that fits our needs and budget perfectly.",
        date: "2024-09-28"
      },
      {
        author: "Lisa Rodriguez",
        rating: 4,
        review: "Good selection of home insurance plans including property protection. Easy to compare options and get personalized quotes for home coverage.",
        date: "2024-09-20"
      }
    ]);
    const howToSteps = useHowToSchema([
      {
        name: "Get a Quote",
        text: "Contact our insurance specialists for a personalized home insurance quote based on your property protection needs.",
        image: "https://www.amerusfinancial.com/images/step-1-quote.jpg"
      },
      {
        name: "Compare Plans",
        text: "Review different home insurance options including homeowners, property protection, flood, and liability coverage plans.",
        image: "https://www.amerusfinancial.com/images/step-2-compare.jpg"
      },
      {
        name: "Complete Application",
        text: "Fill out the simple application form with your property and home information for your chosen plan.",
        image: "https://www.amerusfinancial.com/images/step-3-apply.jpg"
      },
      {
        name: "Activate Coverage",
        text: "Once approved, your home insurance coverage will be activated and you can start protecting your property and belongings.",
        image: "https://www.amerusfinancial.com/images/step-4-activate.jpg"
      }
    ], "How to Apply for Home Insurance", "Step-by-step guide to applying for home insurance coverage with Amerus Financial.", "PT15M", "120.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Home Insurance Solutions",
        provider: serviceProvider,
        description: "Comprehensive home insurance coverage including homeowners, property protection, flood, liability, and valuable items coverage with affordable monthly options starting at $120.",
        serviceType: "Insurance",
        category: "Home Insurance",
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
          description: "Home insurance plans starting at $120 per month"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Home Insurance Solutions",
        description: "Comprehensive home insurance coverage including homeowners, property protection, flood, liability, and valuable items coverage.",
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
            name: "What types of home insurance do you offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer comprehensive home insurance solutions including homeowners insurance, property protection, flood insurance, liability coverage, valuable items coverage, and additional living expenses coverage to meet all your home protection needs."
            }
          },
          {
            "@type": "Question",
            name: "How much does home insurance cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Home insurance plans start at $120 per month for homeowners coverage. The cost varies based on the type of coverage, property value, location, and whether you choose individual coverage or bundled home insurance packages."
            }
          },
          {
            "@type": "Question",
            name: "Can I get a quote for multiple types of home insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our insurance specialists can provide personalized quotes for homeowners insurance, flood coverage, property protection, liability coverage, and valuable items insurance all in one consultation."
            }
          },
          {
            "@type": "Question",
            name: "Do you help with flood insurance options?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we specialize in flood insurance through the National Flood Insurance Program (NFIP) and private flood insurance options to protect your home from water damage and flooding risks."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Insurance Services",
      title: "Home Insurance Solutions",
      description: "Protect your most valuable asset with comprehensive home insurance coverage. From basic homeowners protection to specialized flood insurance, secure your home and belongings.",
      image: "/images/home-insurance.jpg",
      imageAlt: "home insurance coverage",
      cta: { href: "/contact", label: "Get Home Insurance Quote" }
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
              currentPageTitle: "Home Insurance",
              parentTitle: "Services",
              parentUrl: "/services"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Hero, { hero }, null, _parent2, _scopeId));
            _push2(`<section class="grid md:grid-cols-2 gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Homeowners Insurance",
              description: "Comprehensive protection for your home, property, and personal belongings.",
              link: "/services/home/homeowners",
              icon: "lucide:home"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Property Protection",
              description: "Coverage for your home's structure against damage from covered perils.",
              link: "/services/home/property-protection",
              icon: "lucide:shield-check"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Additional Living Expenses",
              description: "Temporary housing and living expenses when your home is uninhabitable.",
              link: "/services/home/living-expenses",
              icon: "lucide:hotel"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Valuable Items Coverage",
              description: "Extra protection for jewelry, art, collectibles, and high-value items.",
              link: "/services/home/valuable-items",
              icon: "lucide:gem"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Property Coverage",
              description: "Protection for your personal property and belongings inside your home.",
              link: "/services/home/property-coverage",
              icon: "lucide:package"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Liability Coverage",
              description: "Personal liability protection for accidents that occur on your property.",
              link: "/services/home/liability-coverage",
              icon: "lucide:user-shield"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ServiceCard, {
              title: "Flood Insurance",
              description: "Specialized flood protection through the National Flood Insurance Program.",
              link: "/services/home/flood-insurance",
              icon: "lucide:waves"
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
                        currentPageTitle: "Home Insurance",
                        parentTitle: "Services",
                        parentUrl: "/services"
                      }),
                      createVNode(_component_Hero, { hero }),
                      createVNode("section", { class: "grid md:grid-cols-2 gap-6" }, [
                        createVNode(_component_ServiceCard, {
                          title: "Homeowners Insurance",
                          description: "Comprehensive protection for your home, property, and personal belongings.",
                          link: "/services/home/homeowners",
                          icon: "lucide:home"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Property Protection",
                          description: "Coverage for your home's structure against damage from covered perils.",
                          link: "/services/home/property-protection",
                          icon: "lucide:shield-check"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Additional Living Expenses",
                          description: "Temporary housing and living expenses when your home is uninhabitable.",
                          link: "/services/home/living-expenses",
                          icon: "lucide:hotel"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Valuable Items Coverage",
                          description: "Extra protection for jewelry, art, collectibles, and high-value items.",
                          link: "/services/home/valuable-items",
                          icon: "lucide:gem"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Property Coverage",
                          description: "Protection for your personal property and belongings inside your home.",
                          link: "/services/home/property-coverage",
                          icon: "lucide:package"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Liability Coverage",
                          description: "Personal liability protection for accidents that occur on your property.",
                          link: "/services/home/liability-coverage",
                          icon: "lucide:user-shield"
                        }),
                        createVNode(_component_ServiceCard, {
                          title: "Flood Insurance",
                          description: "Specialized flood protection through the National Flood Insurance Program.",
                          link: "/services/home/flood-insurance",
                          icon: "lucide:waves"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/home/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DC0C-1f4.js.map
