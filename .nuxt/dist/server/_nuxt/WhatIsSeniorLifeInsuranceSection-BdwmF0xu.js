import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_0$1 from "./GridTwoColumns-CDZGjEfF.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_3 from "./BasicList-CPgeoXnc.js";
import __nuxt_component_4 from "./ListItems-DfeHrqGv.js";
import __nuxt_component_2 from "./ParagraphDescription-L8QyXcbq.js";
import { u as useColorMode } from "./composables-DGJynRPd.js";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
import "radix3";
import "cookie-es";
import "destr";
import "ohash";
const _sfc_main = {
  name: "TwoColumnSection",
  props: {
    title: String,
    description: String,
    mediaFirst: Boolean,
    subTitle: String
  },
  data() {
    return {
      colorMode: useColorMode()
    };
  },
  computed: {
    // const isDark = this.$colorMode.value === "dark";
    isDark() {
      if (this.colorMode.preference === "dark") {
        return true;
      } else {
        return false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BasicSection = __nuxt_component_0;
  const _component_GridTwoColumns = __nuxt_component_0$1;
  const _component_HeadlineTwo = __nuxt_component_1;
  const _component_BasicList = __nuxt_component_3;
  const _component_ListItems = __nuxt_component_4;
  const _component_ParagraphDescription = __nuxt_component_2;
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "container mx-auto mt-20" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_GridTwoColumns, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="px-4 sm:px-8"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_HeadlineTwo, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Medicare Supplement `);
                  } else {
                    return [
                      createTextVNode(" Medicare Supplement ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_BasicList, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Medical Bills`);
                        } else {
                          return [
                            createTextVNode("Medical Bills")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Credit Card Debt`);
                        } else {
                          return [
                            createTextVNode("Credit Card Debt")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Funeral Costs`);
                        } else {
                          return [
                            createTextVNode("Funeral Costs")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Mortgage &amp; Bills`);
                        } else {
                          return [
                            createTextVNode("Mortgage & Bills")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Medical Bills")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Credit Card Debt")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Funeral Costs")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Mortgage & Bills")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ParagraphDescription, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`By purchasing a Senior Life Insurance policy you can save your family from the financial burden of providing for these expenses. This provides a helping hand to your loved ones during a difficult and stressful time.`);
                  } else {
                    return [
                      createTextVNode("By purchasing a Senior Life Insurance policy you can save your family from the financial burden of providing for these expenses. This provides a helping hand to your loved ones during a difficult and stressful time.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="px-4 sm:px-8"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_HeadlineTwo, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Benefits of Senior Whole Life Insurance`);
                  } else {
                    return [
                      createTextVNode("Benefits of Senior Whole Life Insurance")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_BasicList, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`NO Medical Exam`);
                        } else {
                          return [
                            createTextVNode("NO Medical Exam")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Rates are Locked in and Guaranteed to never increase.`);
                        } else {
                          return [
                            createTextVNode("Rates are Locked in and Guaranteed to never increase.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Coverage within 48 Hours`);
                        } else {
                          return [
                            createTextVNode("Coverage within 48 Hours")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Coverage up to $50,0005`);
                        } else {
                          return [
                            createTextVNode("Coverage up to $50,0005")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Guaranteed Issue Policies Available`);
                        } else {
                          return [
                            createTextVNode("Guaranteed Issue Policies Available")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Affordable Rates`);
                        } else {
                          return [
                            createTextVNode("Affordable Rates")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("NO Medical Exam")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Rates are Locked in and Guaranteed to never increase.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Coverage within 48 Hours")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Coverage up to $50,0005")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Guaranteed Issue Policies Available")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Affordable Rates")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "px-4 sm:px-8" }, [
                  createVNode(_component_HeadlineTwo, null, {
                    default: withCtx(() => [
                      createTextVNode(" Medicare Supplement ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Medical Bills")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Credit Card Debt")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Funeral Costs")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Mortgage & Bills")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("By purchasing a Senior Life Insurance policy you can save your family from the financial burden of providing for these expenses. This provides a helping hand to your loved ones during a difficult and stressful time.")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "px-4 sm:px-8" }, [
                  createVNode(_component_HeadlineTwo, null, {
                    default: withCtx(() => [
                      createTextVNode("Benefits of Senior Whole Life Insurance")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("NO Medical Exam")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Rates are Locked in and Guaranteed to never increase.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Coverage within 48 Hours")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Coverage up to $50,0005")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Guaranteed Issue Policies Available")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Affordable Rates")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_GridTwoColumns, null, {
            default: withCtx(() => [
              createVNode("div", { class: "px-4 sm:px-8" }, [
                createVNode(_component_HeadlineTwo, null, {
                  default: withCtx(() => [
                    createTextVNode(" Medicare Supplement ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Medical Bills")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Credit Card Debt")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Funeral Costs")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Mortgage & Bills")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("By purchasing a Senior Life Insurance policy you can save your family from the financial burden of providing for these expenses. This provides a helping hand to your loved ones during a difficult and stressful time.")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "px-4 sm:px-8" }, [
                createVNode(_component_HeadlineTwo, null, {
                  default: withCtx(() => [
                    createTextVNode("Benefits of Senior Whole Life Insurance")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("NO Medical Exam")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Rates are Locked in and Guaranteed to never increase.")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Coverage within 48 Hours")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Coverage up to $50,0005")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Guaranteed Issue Policies Available")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Affordable Rates")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/SeniorSolutionPage/WhatIsSeniorLifeInsuranceSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WhatIsSeniorLifeInsuranceSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  WhatIsSeniorLifeInsuranceSection as default
};
//# sourceMappingURL=WhatIsSeniorLifeInsuranceSection-BdwmF0xu.js.map
