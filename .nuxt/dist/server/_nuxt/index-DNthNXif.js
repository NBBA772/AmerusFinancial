import __nuxt_component_0 from "./PatternSection-Bu0o2535.js";
import __nuxt_component_0$1 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_2 from "./InsuranceServicesHeroSection-DeeQhc3i.js";
import _sfc_main$1 from "./Breadcrumbs-DuAkTo4_.js";
import __nuxt_component_5 from "./GridThreeColumns-H1qcolhg.js";
import { _ as __nuxt_component_0$2 } from "./nuxt-link-DuPix_nQ.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { u as useHead } from "../server.mjs";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./SectionContainer-CRG4W3qY.js";
import "./nuxt-img-CXQw38If.js";
import "defu";
import "ufo";
import "h3";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "vue-router";
import "klona";
import "devalue";
import "radix3";
import "cookie-es";
import "destr";
import "ohash";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Insurance Services — Amerus Financial",
      meta: [
        { property: "og:title", content: "Complete Insurance Solutions — Amerus" },
        { name: "description", content: "Comprehensive insurance services for individuals, families, and businesses. Health, life, auto, home, business, and retirement planning solutions from Amerus." },
        { property: "og:description", content: "Complete insurance portfolio including health, life, auto, home, business insurance, and retirement planning services for all your protection needs." },
        { property: "og:image", content: "https://www.amerusfinancial.com/images/insurance-services.jpg" },
        { property: "og:url", content: "https://www.amerusfinancial.com/services" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Complete Insurance Solutions — Amerus" },
        { name: "twitter:description", content: "Complete insurance portfolio including health, life, auto, home, business insurance, and retirement planning services for all your protection needs." },
        { name: "twitter:image", content: "https://www.amerusfinancial.com/images/insurance-services.jpg" }
      ]
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://www.amerusfinancial.com/services"
        }
      ]
    });
    const Services = [
      {
        title: "Individual & Family",
        excerpt: "Tailored plans for family security. Life and health coverage ensuring peace of mind for your loved ones' future.",
        image: "/images/FamilyAndIndividual.jpg",
        url: "/individual-health-insurance/"
      },
      {
        title: "Senior Solutions",
        excerpt: "Confident retirement with personalized support. Medicare, long-term care coverage for worry-free golden years",
        image: "/images/Senior-Solutions.jpg",
        url: "/senior-solutions/"
      },
      {
        title: "Business Solutions",
        excerpt: "Safeguard business assets with tailored coverage. Liability, employee benefits ensuring growth and protection for enterprises.",
        image: "/images/Business-Solutions.jpg",
        url: "/business-solutions/"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PatternSection = __nuxt_component_0;
      const _component_BasicSection = __nuxt_component_0$1;
      const _component_InsuranceServicesHeroSection = __nuxt_component_2;
      const _component_Breadcrumbs = _sfc_main$1;
      const _component_GridThreeColumns = __nuxt_component_5;
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_GetAnswersToYourQuestions = resolveComponent("GetAnswersToYourQuestions");
      _push(ssrRenderComponent(_component_PatternSection, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BasicSection, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_InsuranceServicesHeroSection, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Breadcrumbs, { currentPageTitle: "Insurance Services" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BasicSection, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mx-8"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_GridThreeColumns, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(Services, (Service) => {
                                _push5(`<div class="mx-auto mb-4 bg-indigo-300 dark:bg-indigo-900 shadow-lg rounded-lg"${_scopeId4}><div class="px-6 py-5"${_scopeId4}><div class="flex items-start"${_scopeId4}><img${ssrRenderAttr("src", Service.image)} class="mr-4" width="250"${_scopeId4}><div class="flex-grow truncate"${_scopeId4}><div class="w-full sm:flex justify-between items-center mb-3"${_scopeId4}><h2 class="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0"${_scopeId4}>${ssrInterpolate(Service.title)}</h2></div><div class="flex items-end justify-between whitespace-normal"${_scopeId4}><div class="max-w-md text-indigo-100"${_scopeId4}><p class="mb-2"${_scopeId4}>${ssrInterpolate(Service.excerpt)}</p></div>`);
                                _push5(ssrRenderComponent(_component_nuxt_link, {
                                  class: "flex-shrink-0 flex items-center justify-center text-indigo-600 w-10 h-10 rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-white hover:to-indigo-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-150 ml-2",
                                  to: Service.url
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="block font-bold"${_scopeId5}><span class="sr-only"${_scopeId5}>Read more</span> -&gt;</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "block font-bold" }, [
                                          createVNode("span", { class: "sr-only" }, "Read more"),
                                          createTextVNode(" ->")
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div></div></div></div></div>`);
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(Services, (Service) => {
                                  return createVNode("div", {
                                    class: "mx-auto mb-4 bg-indigo-300 dark:bg-indigo-900 shadow-lg rounded-lg",
                                    key: Service.title
                                  }, [
                                    createVNode("div", { class: "px-6 py-5" }, [
                                      createVNode("div", { class: "flex items-start" }, [
                                        createVNode("img", {
                                          src: Service.image,
                                          class: "mr-4",
                                          width: "250"
                                        }, null, 8, ["src"]),
                                        createVNode("div", { class: "flex-grow truncate" }, [
                                          createVNode("div", { class: "w-full sm:flex justify-between items-center mb-3" }, [
                                            createVNode("h2", { class: "text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0" }, toDisplayString(Service.title), 1)
                                          ]),
                                          createVNode("div", { class: "flex items-end justify-between whitespace-normal" }, [
                                            createVNode("div", { class: "max-w-md text-indigo-100" }, [
                                              createVNode("p", { class: "mb-2" }, toDisplayString(Service.excerpt), 1)
                                            ]),
                                            createVNode(_component_nuxt_link, {
                                              class: "flex-shrink-0 flex items-center justify-center text-indigo-600 w-10 h-10 rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-white hover:to-indigo-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-150 ml-2",
                                              to: Service.url
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "block font-bold" }, [
                                                  createVNode("span", { class: "sr-only" }, "Read more"),
                                                  createTextVNode(" ->")
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["to"])
                                          ])
                                        ])
                                      ])
                                    ])
                                  ]);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mx-8" }, [
                            createVNode(_component_GridThreeColumns, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(Services, (Service) => {
                                  return createVNode("div", {
                                    class: "mx-auto mb-4 bg-indigo-300 dark:bg-indigo-900 shadow-lg rounded-lg",
                                    key: Service.title
                                  }, [
                                    createVNode("div", { class: "px-6 py-5" }, [
                                      createVNode("div", { class: "flex items-start" }, [
                                        createVNode("img", {
                                          src: Service.image,
                                          class: "mr-4",
                                          width: "250"
                                        }, null, 8, ["src"]),
                                        createVNode("div", { class: "flex-grow truncate" }, [
                                          createVNode("div", { class: "w-full sm:flex justify-between items-center mb-3" }, [
                                            createVNode("h2", { class: "text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0" }, toDisplayString(Service.title), 1)
                                          ]),
                                          createVNode("div", { class: "flex items-end justify-between whitespace-normal" }, [
                                            createVNode("div", { class: "max-w-md text-indigo-100" }, [
                                              createVNode("p", { class: "mb-2" }, toDisplayString(Service.excerpt), 1)
                                            ]),
                                            createVNode(_component_nuxt_link, {
                                              class: "flex-shrink-0 flex items-center justify-center text-indigo-600 w-10 h-10 rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-white hover:to-indigo-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-150 ml-2",
                                              to: Service.url
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "block font-bold" }, [
                                                  createVNode("span", { class: "sr-only" }, "Read more"),
                                                  createTextVNode(" ->")
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["to"])
                                          ])
                                        ])
                                      ])
                                    ])
                                  ]);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_GetAnswersToYourQuestions, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_InsuranceServicesHeroSection),
                    createVNode(_component_Breadcrumbs, { currentPageTitle: "Insurance Services" }),
                    createVNode(_component_BasicSection, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mx-8" }, [
                          createVNode(_component_GridThreeColumns, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(Services, (Service) => {
                                return createVNode("div", {
                                  class: "mx-auto mb-4 bg-indigo-300 dark:bg-indigo-900 shadow-lg rounded-lg",
                                  key: Service.title
                                }, [
                                  createVNode("div", { class: "px-6 py-5" }, [
                                    createVNode("div", { class: "flex items-start" }, [
                                      createVNode("img", {
                                        src: Service.image,
                                        class: "mr-4",
                                        width: "250"
                                      }, null, 8, ["src"]),
                                      createVNode("div", { class: "flex-grow truncate" }, [
                                        createVNode("div", { class: "w-full sm:flex justify-between items-center mb-3" }, [
                                          createVNode("h2", { class: "text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0" }, toDisplayString(Service.title), 1)
                                        ]),
                                        createVNode("div", { class: "flex items-end justify-between whitespace-normal" }, [
                                          createVNode("div", { class: "max-w-md text-indigo-100" }, [
                                            createVNode("p", { class: "mb-2" }, toDisplayString(Service.excerpt), 1)
                                          ]),
                                          createVNode(_component_nuxt_link, {
                                            class: "flex-shrink-0 flex items-center justify-center text-indigo-600 w-10 h-10 rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-white hover:to-indigo-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-150 ml-2",
                                            to: Service.url
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "block font-bold" }, [
                                                createVNode("span", { class: "sr-only" }, "Read more"),
                                                createTextVNode(" ->")
                                              ])
                                            ]),
                                            _: 2
                                          }, 1032, ["to"])
                                        ])
                                      ])
                                    ])
                                  ])
                                ]);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_GetAnswersToYourQuestions)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BasicSection, null, {
                default: withCtx(() => [
                  createVNode(_component_InsuranceServicesHeroSection),
                  createVNode(_component_Breadcrumbs, { currentPageTitle: "Insurance Services" }),
                  createVNode(_component_BasicSection, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mx-8" }, [
                        createVNode(_component_GridThreeColumns, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(Services, (Service) => {
                              return createVNode("div", {
                                class: "mx-auto mb-4 bg-indigo-300 dark:bg-indigo-900 shadow-lg rounded-lg",
                                key: Service.title
                              }, [
                                createVNode("div", { class: "px-6 py-5" }, [
                                  createVNode("div", { class: "flex items-start" }, [
                                    createVNode("img", {
                                      src: Service.image,
                                      class: "mr-4",
                                      width: "250"
                                    }, null, 8, ["src"]),
                                    createVNode("div", { class: "flex-grow truncate" }, [
                                      createVNode("div", { class: "w-full sm:flex justify-between items-center mb-3" }, [
                                        createVNode("h2", { class: "text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0" }, toDisplayString(Service.title), 1)
                                      ]),
                                      createVNode("div", { class: "flex items-end justify-between whitespace-normal" }, [
                                        createVNode("div", { class: "max-w-md text-indigo-100" }, [
                                          createVNode("p", { class: "mb-2" }, toDisplayString(Service.excerpt), 1)
                                        ]),
                                        createVNode(_component_nuxt_link, {
                                          class: "flex-shrink-0 flex items-center justify-center text-indigo-600 w-10 h-10 rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-white hover:to-indigo-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-150 ml-2",
                                          to: Service.url
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "block font-bold" }, [
                                              createVNode("span", { class: "sr-only" }, "Read more"),
                                              createTextVNode(" ->")
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])
                                      ])
                                    ])
                                  ])
                                ])
                              ]);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_GetAnswersToYourQuestions)
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DNthNXif.js.map
