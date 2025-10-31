import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_0$1 from "./GridTwoColumns-CDZGjEfF.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_2 from "./ParagraphDescription-L8QyXcbq.js";
import __nuxt_component_3 from "./BasicList-CPgeoXnc.js";
import __nuxt_component_4 from "./ListItems-DfeHrqGv.js";
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
  const _component_ParagraphDescription = __nuxt_component_2;
  const _component_BasicList = __nuxt_component_3;
  const _component_ListItems = __nuxt_component_4;
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "container mx-auto mt-20" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_GridTwoColumns, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="px-4 sm:px-8"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_HeadlineTwo, { class: "text-center" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Pros:`);
                  } else {
                    return [
                      createTextVNode("Pros:")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ParagraphDescription, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Affordable Premiums`);
                  } else {
                    return [
                      createTextVNode("Affordable Premiums")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ParagraphDescription, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`First Dollar Coverage`);
                  } else {
                    return [
                      createTextVNode("First Dollar Coverage")
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
                          _push5(`You get First Dollar Coverage that covers various procedures while not requiring you to meet a deductible.`);
                        } else {
                          return [
                            createTextVNode("You get First Dollar Coverage that covers various procedures while not requiring you to meet a deductible.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`No Enrollment Period`);
                        } else {
                          return [
                            createTextVNode("No Enrollment Period")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Enrollment is not limited to an enrollment period but can applied for anytime during the year.`);
                        } else {
                          return [
                            createTextVNode("Enrollment is not limited to an enrollment period but can applied for anytime during the year.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("You get First Dollar Coverage that covers various procedures while not requiring you to meet a deductible.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("No Enrollment Period")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Enrollment is not limited to an enrollment period but can applied for anytime during the year.")
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
                    _push4(`Customizable`);
                  } else {
                    return [
                      createTextVNode("Customizable")
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
                          _push5(`You can customize your plan benefits to cover the things that are most important to you.`);
                        } else {
                          return [
                            createTextVNode("You can customize your plan benefits to cover the things that are most important to you.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("You can customize your plan benefits to cover the things that are most important to you.")
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
                    _push4(`Direct Payments`);
                  } else {
                    return [
                      createTextVNode("Direct Payments")
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
                          _push5(`Pays directly to a member upon a qualifying incident. Payment is based upon a predetermined schedule of qualifying events.`);
                        } else {
                          return [
                            createTextVNode("Pays directly to a member upon a qualifying incident. Payment is based upon a predetermined schedule of qualifying events.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Pays directly to a member upon a qualifying incident. Payment is based upon a predetermined schedule of qualifying events.")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="px-4 sm:px-8"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_HeadlineTwo, { class: "text-center" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Cons:`);
                  } else {
                    return [
                      createTextVNode("Cons:")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ParagraphDescription, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Preset Fees`);
                  } else {
                    return [
                      createTextVNode("Preset Fees")
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
                          _push5(`Indemnity plans cover medical procedures at a specific dollar amount. If the medical practitioner charges more than the amount allotted you will be responsible for the difference.`);
                        } else {
                          return [
                            createTextVNode("Indemnity plans cover medical procedures at a specific dollar amount. If the medical practitioner charges more than the amount allotted you will be responsible for the difference.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Indemnity plans cover medical procedures at a specific dollar amount. If the medical practitioner charges more than the amount allotted you will be responsible for the difference.")
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
                    _push4(`Pre-existing condition exclusions`);
                  } else {
                    return [
                      createTextVNode("Pre-existing condition exclusions")
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
                          _push5(`Indemnity plans are subject to underwriting and do not cover Pre-existing conditions. Some plans will cover certain pre-existing conditions after a waiting period.`);
                        } else {
                          return [
                            createTextVNode("Indemnity plans are subject to underwriting and do not cover Pre-existing conditions. Some plans will cover certain pre-existing conditions after a waiting period.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Indemnity plans are subject to underwriting and do not cover Pre-existing conditions. Some plans will cover certain pre-existing conditions after a waiting period.")
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
                    _push4(`Waiting Periods`);
                  } else {
                    return [
                      createTextVNode("Waiting Periods")
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
                          _push5(`Some indemnity plans have waiting periods that must be satisfied before specific conditions such as cancer is covered.`);
                        } else {
                          return [
                            createTextVNode("Some indemnity plans have waiting periods that must be satisfied before specific conditions such as cancer is covered.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Some indemnity plans have waiting periods that must be satisfied before specific conditions such as cancer is covered.")
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
                  createVNode(_component_HeadlineTwo, { class: "text-center" }, {
                    default: withCtx(() => [
                      createTextVNode("Pros:")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("Affordable Premiums")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("First Dollar Coverage")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("You get First Dollar Coverage that covers various procedures while not requiring you to meet a deductible.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("No Enrollment Period")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Enrollment is not limited to an enrollment period but can applied for anytime during the year.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("Customizable")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("You can customize your plan benefits to cover the things that are most important to you.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("Direct Payments")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Pays directly to a member upon a qualifying incident. Payment is based upon a predetermined schedule of qualifying events.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "px-4 sm:px-8" }, [
                  createVNode(_component_HeadlineTwo, { class: "text-center" }, {
                    default: withCtx(() => [
                      createTextVNode("Cons:")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("Preset Fees")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Indemnity plans cover medical procedures at a specific dollar amount. If the medical practitioner charges more than the amount allotted you will be responsible for the difference.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("Pre-existing condition exclusions")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Indemnity plans are subject to underwriting and do not cover Pre-existing conditions. Some plans will cover certain pre-existing conditions after a waiting period.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("Waiting Periods")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Some indemnity plans have waiting periods that must be satisfied before specific conditions such as cancer is covered.")
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
                createVNode(_component_HeadlineTwo, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("Pros:")
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("Affordable Premiums")
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("First Dollar Coverage")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("You get First Dollar Coverage that covers various procedures while not requiring you to meet a deductible.")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("No Enrollment Period")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Enrollment is not limited to an enrollment period but can applied for anytime during the year.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("Customizable")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("You can customize your plan benefits to cover the things that are most important to you.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("Direct Payments")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Pays directly to a member upon a qualifying incident. Payment is based upon a predetermined schedule of qualifying events.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "px-4 sm:px-8" }, [
                createVNode(_component_HeadlineTwo, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("Cons:")
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("Preset Fees")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Indemnity plans cover medical procedures at a specific dollar amount. If the medical practitioner charges more than the amount allotted you will be responsible for the difference.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("Pre-existing condition exclusions")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Indemnity plans are subject to underwriting and do not cover Pre-existing conditions. Some plans will cover certain pre-existing conditions after a waiting period.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("Waiting Periods")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Some indemnity plans have waiting periods that must be satisfied before specific conditions such as cancer is covered.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/IndividualAndFamilyInsurancePage/IndemnityProsAndCons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IndemnityProsAndCons = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  IndemnityProsAndCons as default
};
//# sourceMappingURL=IndemnityProsAndCons-BwTGiIH3.js.map
