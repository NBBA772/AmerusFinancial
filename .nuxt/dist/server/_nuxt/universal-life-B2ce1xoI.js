import __nuxt_component_0 from "./PatternSection-Bu0o2535.js";
import __nuxt_component_1 from "./ContentHero-0-_JETRG.js";
import __nuxt_component_2 from "./ContentHeader-CM4wP8B-.js";
import __nuxt_component_3 from "./Alert-BnL4GVkG.js";
import __nuxt_component_4 from "./BaseCard-CRAqzN1-.js";
import __nuxt_component_0$1 from "./Icon-6AEq6jga.js";
import __nuxt_component_5 from "./StillHaveQuestions-BBDjaHJm.js";
import _sfc_main$1 from "./CallToAction-CmwVfqHS.js";
import { u as useEnhancedMetaTags, a as useResourceHints, c as useReviewSchema, d as useHowToSchema, e as useServiceProvider } from "./useOrganizationSchema-DjOkg-j4.js";
import { withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { u as useHead, o as useSchemaOrg } from "../server.mjs";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./MDCSlot-9evsqLEJ.js";
import "klona";
import "hookable";
import "defu";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "ufo";
import "devalue";
import "radix3";
import "cookie-es";
import "destr";
import "ohash";
import "./nuxt-link-DuPix_nQ.js";
const _sfc_main = {
  __name: "universal-life",
  __ssrInlineRender: true,
  setup(__props) {
    useEnhancedMetaTags();
    useResourceHints(["/images/universal-life-insurance.jpg"]);
    useEnhancedMetaTags();
    useHead({
      title: "Universal Life Insurance Plans — Amerus Financial",
      meta: [
        { property: "og:title", content: "Universal Life Insurance with Investment Options — Amerus" },
        { name: "description", content: "Flexible universal life insurance with investment components and adjustable premiums. Build cash value while protecting your family with customizable coverage." },
        { property: "og:description", content: "Discover universal life insurance plans with flexible premiums and investment opportunities for long-term financial growth." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/universal-life-insurance.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services/life/universal-life" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Universal Life Insurance with Investment Options — Amerus" },
        { name: "twitter:description", content: "Discover universal life insurance plans with flexible premiums and investment opportunities for long-term financial growth." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/universal-life-insurance.jpg" },
        { name: "keywords", content: "universal life insurance, permanent life insurance, cash value life insurance, investment life insurance, flexible premiums, life insurance savings, universal life policies, financial planning, retirement planning" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services/life/universal-life"
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
        review: "Outstanding universal life insurance that provides flexible premium payments and excellent investment growth. The cash value component has performed beyond my expectations.",
        date: "2024-01-15"
      },
      {
        author: "Michael Chen",
        rating: 5,
        review: "Excellent universal life coverage with investment options that match my risk tolerance. The ability to adjust death benefits and skip payments using cash value is incredibly valuable.",
        date: "2024-01-10"
      },
      {
        author: "Jessica Williams",
        rating: 4,
        review: "Great universal life policy that combines permanent protection with investment flexibility. The cash value growth potential makes this perfect for long-term financial planning.",
        date: "2024-01-05"
      },
      {
        author: "David Rodriguez",
        rating: 5,
        review: "Premium universal life insurance with multiple investment choices and flexible premiums. The policy has built substantial cash value while providing peace of mind.",
        date: "2023-12-28"
      }
    ]);
    useHowToSchema([
      {
        name: "Determine Universal Life Needs",
        text: "Assess your permanent life insurance needs, investment goals, and desired premium flexibility to determine the right universal life insurance policy structure.",
        url: "#assess"
      },
      {
        name: "Select Investment Options",
        text: "Choose from available investment accounts within the universal life policy based on your risk tolerance and growth objectives for cash value accumulation.",
        url: "#compare"
      },
      {
        name: "Complete Universal Life Application",
        text: "Submit your universal life insurance application with health information, beneficiary details, and preferred premium payment schedule for underwriting review.",
        url: "#apply"
      },
      {
        name: "Begin Policy Management",
        text: "Once approved, your universal life policy becomes active and you can start managing premium payments, monitoring cash value growth, and adjusting coverage as needed.",
        url: "#activate"
      }
    ], "How to Get Universal Life Insurance", "Complete guide to applying for universal life insurance with investment flexibility and adjustable premiums.", "PT25M", "150.00");
    useSchemaOrg([
      {
        "@type": "Service",
        name: "Universal Life Insurance Plans",
        provider: serviceProvider,
        description: "Flexible universal life insurance with adjustable premiums and investment options, providing permanent protection with cash value accumulation starting at $150.",
        serviceType: "Insurance",
        category: "Universal Life Insurance",
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
          description: "Universal life insurance policy with investment flexibility starting at $150 per month"
        }
      },
      // Review/Rating Schema for enhanced SERP display
      {
        "@type": "Product",
        name: "Universal Life Insurance Plans",
        description: "Flexible universal life insurance with investment components and adjustable premiums, combining protection with cash value growth.",
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
            name: "What is universal life insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Universal life insurance is a permanent life insurance policy that offers flexible premiums and adjustable death benefits, combined with a cash value account that grows through investment options and interest earnings."
            }
          },
          {
            "@type": "Question",
            name: "How much does universal life insurance cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Universal life insurance premiums start at $150 per month. The cost depends on your age, health, coverage amount, chosen investment options, and desired premium flexibility within the policy."
            }
          },
          {
            "@type": "Question",
            name: "Can I adjust my universal life insurance premiums?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, universal life insurance offers flexible premium payments. You can increase, decrease, or skip payments using accumulated cash value, as long as sufficient funds remain to cover policy charges."
            }
          },
          {
            "@type": "Question",
            name: "What investment options are available in universal life insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Universal life insurance typically offers multiple investment accounts ranging from conservative fixed accounts to growth-oriented equity options, allowing you to choose investments that match your risk tolerance and financial goals."
            }
          }
        ]
      },
      // HowTo Schema for application process
      howToSteps
    ]);
    const hero = {
      eyebrow: "Life Insurance",
      title: "Universal Life Insurance",
      description: "Flexible permanent life insurance that adapts to your changing financial needs with investment options.",
      image: "/images/senior-woman-life-insurance.jpg",
      imageAlt: "universal life insurance",
      cta: { href: "/contact", label: "Get Universal Life Quote" }
    };
    const benefits = [
      "Flexible premium payments within policy limits",
      "Adjustable death benefit amounts",
      "Multiple investment options available",
      "Cash value growth potential",
      "Tax-deferred accumulation of cash value",
      "Policy loans and withdrawals permitted"
    ];
    const info = [
      {
        title: "Starting Premium",
        text: "From $125/month",
        icon: "lucide:dollar-sign"
      },
      {
        title: "Coverage Type",
        text: "Flexible permanent protection",
        icon: "lucide:shield-check"
      },
      {
        title: "Cash Value",
        text: "Investment-based growth potential",
        icon: "lucide:trending-up"
      }
    ];
    const features = [
      "Flexible premium payment schedules",
      "Investment options to match risk tolerance",
      "Potential for higher cash value returns",
      "Ability to adjust death benefit amounts",
      "Tax-advantaged wealth accumulation",
      "Options for retirement income supplementation"
    ];
    const cta = {
      title: "Ready for flexible protection?",
      description: "Get a personalized universal life insurance quote and discover how flexibility can work for your financial goals.",
      primary: {
        href: "/contact",
        label: "Get Universal Life Quote"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PatternSection = __nuxt_component_0;
      const _component_ContentHero = __nuxt_component_1;
      const _component_ContentHeader = __nuxt_component_2;
      const _component_Alert = __nuxt_component_3;
      const _component_BaseCard = __nuxt_component_4;
      const _component_Icon = __nuxt_component_0$1;
      const _component_StillHaveQuestions = __nuxt_component_5;
      const _component_CallToAction = _sfc_main$1;
      _push(ssrRenderComponent(_component_PatternSection, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ContentHero, { data: hero }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ContentHeader, {
              title: "Universal Life Insurance",
              description: "Universal life insurance offers the flexibility to adjust your premiums and coverage as your life changes, while building cash value through investment options. This permanent life insurance solution adapts to your evolving financial needs."
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start"${_scopeId}><div${_scopeId}><div class="prose prose-lg prose-slate dark:prose-invert max-w-3xl"${_scopeId}><p class="font-medium text-lg"${_scopeId}> Universal life insurance provides the permanent protection of whole life with the added flexibility to adjust premiums and death benefits as your circumstances change. </p><h3${_scopeId}>Why Choose Universal Life Insurance?</h3><p${_scopeId}> Universal life insurance is ideal for those who want permanent life insurance with maximum flexibility. You can increase or decrease your premiums (within limits), adjust your death benefit, and choose from various investment options for your cash value growth. </p><p${_scopeId}> The cash value component grows based on current interest rates or investment performance, potentially offering higher returns than traditional whole life insurance. This makes it an attractive option for those comfortable with some investment risk. </p><h3${_scopeId}>Flexibility Features</h3><p${_scopeId}> With universal life insurance, you can skip premium payments using accumulated cash value, increase coverage for major life events, or reduce premiums during tight financial periods. This flexibility makes it easier to maintain your policy throughout changing life circumstances. </p></div></div><div class="space-y-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Alert, {
              title: "Flexible Premiums",
              variant: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Universal life insurance allows you to adjust premium payments within certain limits, skip payments using cash value, or pay extra to accelerate cash value growth. `);
                } else {
                  return [
                    createTextVNode(" Universal life insurance allows you to adjust premium payments within certain limits, skip payments using cash value, or pay extra to accelerate cash value growth. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCard, {
              title: "Universal Life Benefits",
              items: benefits
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCard, {
              title: "Key Information",
              items: info
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"${_scopeId}><!--[-->`);
            ssrRenderList(features, (item, index) => {
              _push2(`<div class="text-center"${_scopeId}><div class="w-12 h-12 bg-primary-500 text-white rounded-lg flex items-center justify-center mx-auto mb-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:check",
                size: "24"
              }, null, _parent2, _scopeId));
              _push2(`</div><p class="text-slate-600 dark:text-slate-300"${_scopeId}>${ssrInterpolate(item)}</p></div>`);
            });
            _push2(`<!--]--></div><div class="mt-32"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_StillHaveQuestions, { cta }, null, _parent2, _scopeId));
            _push2(`</div></main>`);
            _push2(ssrRenderComponent(_component_CallToAction, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("main", null, [
                createVNode(_component_ContentHero, { data: hero }),
                createVNode(_component_ContentHeader, {
                  title: "Universal Life Insurance",
                  description: "Universal life insurance offers the flexibility to adjust your premiums and coverage as your life changes, while building cash value through investment options. This permanent life insurance solution adapts to your evolving financial needs."
                }),
                createVNode("div", { class: "grid lg:grid-cols-2 gap-20 lg:gap-32 items-start" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "prose prose-lg prose-slate dark:prose-invert max-w-3xl" }, [
                      createVNode("p", { class: "font-medium text-lg" }, " Universal life insurance provides the permanent protection of whole life with the added flexibility to adjust premiums and death benefits as your circumstances change. "),
                      createVNode("h3", null, "Why Choose Universal Life Insurance?"),
                      createVNode("p", null, " Universal life insurance is ideal for those who want permanent life insurance with maximum flexibility. You can increase or decrease your premiums (within limits), adjust your death benefit, and choose from various investment options for your cash value growth. "),
                      createVNode("p", null, " The cash value component grows based on current interest rates or investment performance, potentially offering higher returns than traditional whole life insurance. This makes it an attractive option for those comfortable with some investment risk. "),
                      createVNode("h3", null, "Flexibility Features"),
                      createVNode("p", null, " With universal life insurance, you can skip premium payments using accumulated cash value, increase coverage for major life events, or reduce premiums during tight financial periods. This flexibility makes it easier to maintain your policy throughout changing life circumstances. ")
                    ])
                  ]),
                  createVNode("div", { class: "space-y-8" }, [
                    createVNode(_component_Alert, {
                      title: "Flexible Premiums",
                      variant: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Universal life insurance allows you to adjust premium payments within certain limits, skip payments using cash value, or pay extra to accelerate cash value growth. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseCard, {
                      title: "Universal Life Benefits",
                      items: benefits
                    }),
                    createVNode(_component_BaseCard, {
                      title: "Key Information",
                      items: info
                    })
                  ])
                ]),
                createVNode("div", { class: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(features, (item, index) => {
                    return createVNode("div", {
                      key: index,
                      class: "text-center"
                    }, [
                      createVNode("div", { class: "w-12 h-12 bg-primary-500 text-white rounded-lg flex items-center justify-center mx-auto mb-4" }, [
                        createVNode(_component_Icon, {
                          name: "lucide:check",
                          size: "24"
                        })
                      ]),
                      createVNode("p", { class: "text-slate-600 dark:text-slate-300" }, toDisplayString(item), 1)
                    ]);
                  }), 64))
                ]),
                createVNode("div", { class: "mt-32" }, [
                  createVNode(_component_StillHaveQuestions, { cta })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/life/universal-life.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=universal-life-B2ce1xoI.js.map
