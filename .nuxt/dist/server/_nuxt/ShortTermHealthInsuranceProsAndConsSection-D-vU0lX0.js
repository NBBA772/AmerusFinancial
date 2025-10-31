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
                    _push4(`No Enrollment Periods`);
                  } else {
                    return [
                      createTextVNode("No Enrollment Periods")
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
                          _push5(`With Short term plans you can shop anytime of year and even have coverage effective the next day.`);
                        } else {
                          return [
                            createTextVNode("With Short term plans you can shop anytime of year and even have coverage effective the next day.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("With Short term plans you can shop anytime of year and even have coverage effective the next day.")
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
                    _push4(`Economical Premiums`);
                  } else {
                    return [
                      createTextVNode("Economical Premiums")
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
                          _push5(`Premiums are not based on household size and income such as a marketplace plan. Therefore these plans can be a fraction of the cost of the plans on the marketplace`);
                        } else {
                          return [
                            createTextVNode("Premiums are not based on household size and income such as a marketplace plan. Therefore these plans can be a fraction of the cost of the plans on the marketplace")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Broad Networks`);
                        } else {
                          return [
                            createTextVNode("Broad Networks")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Oftentimes have large networks of Doctors and Hospitals for you to choose from.`);
                        } else {
                          return [
                            createTextVNode("Oftentimes have large networks of Doctors and Hospitals for you to choose from.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Premiums are not based on household size and income such as a marketplace plan. Therefore these plans can be a fraction of the cost of the plans on the marketplace")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Broad Networks")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Oftentimes have large networks of Doctors and Hospitals for you to choose from.")
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
                          _push5(`Short Term Health plans can be customized to meet your individual needs.`);
                        } else {
                          return [
                            createTextVNode("Short Term Health plans can be customized to meet your individual needs.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Short Term Health plans can be customized to meet your individual needs.")
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
                    _push4(`Pre-existing coverage limitations`);
                  } else {
                    return [
                      createTextVNode("Pre-existing coverage limitations")
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
                          _push5(`You may be denied coverage if you have any pre-existing conditions. If you are accepted for coverage you may have claims related to your condition denied`);
                        } else {
                          return [
                            createTextVNode("You may be denied coverage if you have any pre-existing conditions. If you are accepted for coverage you may have claims related to your condition denied")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("You may be denied coverage if you have any pre-existing conditions. If you are accepted for coverage you may have claims related to your condition denied")
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
                    _push4(`Policy maximum coverage`);
                  } else {
                    return [
                      createTextVNode("Policy maximum coverage")
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
                          _push5(`Policies may have annual limits and lifetime maximums on coverage benefits.`);
                        } else {
                          return [
                            createTextVNode("Policies may have annual limits and lifetime maximums on coverage benefits.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Policies may have annual limits and lifetime maximums on coverage benefits.")
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
                    _push4(`Not ACA Compliant`);
                  } else {
                    return [
                      createTextVNode("Not ACA Compliant")
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
                          _push5(`Do not cover preventative care free of charge as an exchange plan.`);
                        } else {
                          return [
                            createTextVNode("Do not cover preventative care free of charge as an exchange plan.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Do not cover preventative care free of charge as an exchange plan.")
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
                    _push4(`ACA Subsidies don’t apply`);
                  } else {
                    return [
                      createTextVNode("ACA Subsidies don’t apply")
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
                          _push5(`There are no government subsidies that apply to premiums and tax credits.`);
                        } else {
                          return [
                            createTextVNode("There are no government subsidies that apply to premiums and tax credits.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("There are no government subsidies that apply to premiums and tax credits.")
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
                      createTextVNode("No Enrollment Periods")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("With Short term plans you can shop anytime of year and even have coverage effective the next day.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("Economical Premiums")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Premiums are not based on household size and income such as a marketplace plan. Therefore these plans can be a fraction of the cost of the plans on the marketplace")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Broad Networks")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Oftentimes have large networks of Doctors and Hospitals for you to choose from.")
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
                          createTextVNode("Short Term Health plans can be customized to meet your individual needs.")
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
                      createTextVNode("Pre-existing coverage limitations")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("You may be denied coverage if you have any pre-existing conditions. If you are accepted for coverage you may have claims related to your condition denied")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("Policy maximum coverage")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Policies may have annual limits and lifetime maximums on coverage benefits.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("Not ACA Compliant")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Do not cover preventative care free of charge as an exchange plan.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("ACA Subsidies don’t apply")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("There are no government subsidies that apply to premiums and tax credits.")
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
                    createTextVNode("No Enrollment Periods")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("With Short term plans you can shop anytime of year and even have coverage effective the next day.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("Economical Premiums")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Premiums are not based on household size and income such as a marketplace plan. Therefore these plans can be a fraction of the cost of the plans on the marketplace")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Broad Networks")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Oftentimes have large networks of Doctors and Hospitals for you to choose from.")
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
                        createTextVNode("Short Term Health plans can be customized to meet your individual needs.")
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
                    createTextVNode("Pre-existing coverage limitations")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("You may be denied coverage if you have any pre-existing conditions. If you are accepted for coverage you may have claims related to your condition denied")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("Policy maximum coverage")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Policies may have annual limits and lifetime maximums on coverage benefits.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("Not ACA Compliant")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Do not cover preventative care free of charge as an exchange plan.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("ACA Subsidies don’t apply")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("There are no government subsidies that apply to premiums and tax credits.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/IndividualAndFamilyInsurancePage/ShortTermHealthInsuranceProsAndConsSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ShortTermHealthInsuranceProsAndConsSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ShortTermHealthInsuranceProsAndConsSection as default
};
//# sourceMappingURL=ShortTermHealthInsuranceProsAndConsSection-D-vU0lX0.js.map
