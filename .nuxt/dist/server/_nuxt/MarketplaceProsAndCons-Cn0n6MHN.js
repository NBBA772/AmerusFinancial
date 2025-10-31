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
                    _push4(`Dependant Coverage`);
                  } else {
                    return [
                      createTextVNode("Dependant Coverage")
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
                          _push5(`Dependants can stay on your policies until age 26.`);
                        } else {
                          return [
                            createTextVNode("Dependants can stay on your policies until age 26.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Dependants can stay on your policies until age 26.")
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
                    _push4(`Subsidies &amp; Tax Credits`);
                  } else {
                    return [
                      createTextVNode("Subsidies & Tax Credits")
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
                          _push5(`For those that qualify, Subsidies and tax credits not only bring down the monthly premium (Cost) of your health insurance but also bring down things such as Deductibles and copayments on silver plans. Based on your FPL (Federal Poverty Level.)`);
                        } else {
                          return [
                            createTextVNode("For those that qualify, Subsidies and tax credits not only bring down the monthly premium (Cost) of your health insurance but also bring down things such as Deductibles and copayments on silver plans. Based on your FPL (Federal Poverty Level.)")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`No pre-existing condition limitations.`);
                        } else {
                          return [
                            createTextVNode("No pre-existing condition limitations.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Insurance companies cannot cancel your health plan due to an error on your application nor can they deny you coverage due to a pre-existing health condition that you may have.`);
                        } else {
                          return [
                            createTextVNode("Insurance companies cannot cancel your health plan due to an error on your application nor can they deny you coverage due to a pre-existing health condition that you may have.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("For those that qualify, Subsidies and tax credits not only bring down the monthly premium (Cost) of your health insurance but also bring down things such as Deductibles and copayments on silver plans. Based on your FPL (Federal Poverty Level.)")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("No pre-existing condition limitations.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Insurance companies cannot cancel your health plan due to an error on your application nor can they deny you coverage due to a pre-existing health condition that you may have.")
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
                    _push4(`No waiting periods`);
                  } else {
                    return [
                      createTextVNode("No waiting periods")
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
                          _push5(`There is no more waiting period to be met before you or your dependent can see a physician. Once your policy is effective you can begin using the benefits immediately.`);
                        } else {
                          return [
                            createTextVNode("There is no more waiting period to be met before you or your dependent can see a physician. Once your policy is effective you can begin using the benefits immediately.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("There is no more waiting period to be met before you or your dependent can see a physician. Once your policy is effective you can begin using the benefits immediately.")
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
                    _push4(`Free Preventative Care`);
                  } else {
                    return [
                      createTextVNode("Free Preventative Care")
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
                          _push5(`All qualified marketplace plans must provide preventative care, free of charge to you. That means no deductibles, copayments, or coinsurance.`);
                        } else {
                          return [
                            createTextVNode("All qualified marketplace plans must provide preventative care, free of charge to you. That means no deductibles, copayments, or coinsurance.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("All qualified marketplace plans must provide preventative care, free of charge to you. That means no deductibles, copayments, or coinsurance.")
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
                    _push4(`No Caps`);
                  } else {
                    return [
                      createTextVNode("No Caps")
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
                          _push5(`All qualified health plans must cover according to the policy contract without a maximum benefit.`);
                        } else {
                          return [
                            createTextVNode("All qualified health plans must cover according to the policy contract without a maximum benefit.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("All qualified health plans must cover according to the policy contract without a maximum benefit.")
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
                    _push4(`Limited Companies`);
                  } else {
                    return [
                      createTextVNode("Limited Companies")
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
                          _push5(`Due to the fact that Marketplace health plans have lost the majority of their risk stops, such as pre-existing condition waivers, many insurance companies simply cannot afford to offer plans on the health exchange. Therefore you are limited to certain companies and networks. Some counties only have one option.`);
                        } else {
                          return [
                            createTextVNode("Due to the fact that Marketplace health plans have lost the majority of their risk stops, such as pre-existing condition waivers, many insurance companies simply cannot afford to offer plans on the health exchange. Therefore you are limited to certain companies and networks. Some counties only have one option.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Due to the fact that Marketplace health plans have lost the majority of their risk stops, such as pre-existing condition waivers, many insurance companies simply cannot afford to offer plans on the health exchange. Therefore you are limited to certain companies and networks. Some counties only have one option.")
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
                    _push4(`High Deductibles and High premiums`);
                  } else {
                    return [
                      createTextVNode("High Deductibles and High premiums")
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
                          _push5(`For those that do not qualify for the subsidies and tax credits marketplace plans may be unaffordable. Customers may end up paying high premiums while also being stuck with a high deductible plan.`);
                        } else {
                          return [
                            createTextVNode("For those that do not qualify for the subsidies and tax credits marketplace plans may be unaffordable. Customers may end up paying high premiums while also being stuck with a high deductible plan.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("For those that do not qualify for the subsidies and tax credits marketplace plans may be unaffordable. Customers may end up paying high premiums while also being stuck with a high deductible plan.")
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
                    _push4(`Tax Penalties`);
                  } else {
                    return [
                      createTextVNode("Tax Penalties")
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
                          _push5(`Prior to 2019, you could face large tax penalties for being uninsured. While this has been done away with on a federal level many states have begun to enforce similar mandates of their own.`);
                        } else {
                          return [
                            createTextVNode("Prior to 2019, you could face large tax penalties for being uninsured. While this has been done away with on a federal level many states have begun to enforce similar mandates of their own.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Prior to 2019, you could face large tax penalties for being uninsured. While this has been done away with on a federal level many states have begun to enforce similar mandates of their own.")
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
                    _push4(`Annual Open Enrollment`);
                  } else {
                    return [
                      createTextVNode("Annual Open Enrollment")
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
                          _push5(`Once the enrollment period is closed it becomes next to impossible to purchase a plan on the exchange. Those looking for coverage outside of OEP (Open Enrollment Period - November 1, 2020 – December 15, 2020.) must have a qualifying life event to open up an SEP (special Enrollment Period).`);
                        } else {
                          return [
                            createTextVNode("Once the enrollment period is closed it becomes next to impossible to purchase a plan on the exchange. Those looking for coverage outside of OEP (Open Enrollment Period - November 1, 2020 – December 15, 2020.) must have a qualifying life event to open up an SEP (special Enrollment Period).")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Once the enrollment period is closed it becomes next to impossible to purchase a plan on the exchange. Those looking for coverage outside of OEP (Open Enrollment Period - November 1, 2020 – December 15, 2020.) must have a qualifying life event to open up an SEP (special Enrollment Period).")
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
                    _push4(`Loss of Employment Coverage`);
                  } else {
                    return [
                      createTextVNode("Loss of Employment Coverage")
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
                          _push5(`Due to the ACA there has been a major increase in premiums making group insurance coverage unaffordable for many small businesses.`);
                        } else {
                          return [
                            createTextVNode("Due to the ACA there has been a major increase in premiums making group insurance coverage unaffordable for many small businesses.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Due to the ACA there has been a major increase in premiums making group insurance coverage unaffordable for many small businesses.")
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
                      createTextVNode("Dependant Coverage")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Dependants can stay on your policies until age 26.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("Subsidies & Tax Credits")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("For those that qualify, Subsidies and tax credits not only bring down the monthly premium (Cost) of your health insurance but also bring down things such as Deductibles and copayments on silver plans. Based on your FPL (Federal Poverty Level.)")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("No pre-existing condition limitations.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Insurance companies cannot cancel your health plan due to an error on your application nor can they deny you coverage due to a pre-existing health condition that you may have.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("No waiting periods")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("There is no more waiting period to be met before you or your dependent can see a physician. Once your policy is effective you can begin using the benefits immediately.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("Free Preventative Care")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("All qualified marketplace plans must provide preventative care, free of charge to you. That means no deductibles, copayments, or coinsurance.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("No Caps")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("All qualified health plans must cover according to the policy contract without a maximum benefit.")
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
                      createTextVNode("Limited Companies")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Due to the fact that Marketplace health plans have lost the majority of their risk stops, such as pre-existing condition waivers, many insurance companies simply cannot afford to offer plans on the health exchange. Therefore you are limited to certain companies and networks. Some counties only have one option.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("High Deductibles and High premiums")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("For those that do not qualify for the subsidies and tax credits marketplace plans may be unaffordable. Customers may end up paying high premiums while also being stuck with a high deductible plan.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("Tax Penalties")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Prior to 2019, you could face large tax penalties for being uninsured. While this has been done away with on a federal level many states have begun to enforce similar mandates of their own.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("Annual Open Enrollment")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Once the enrollment period is closed it becomes next to impossible to purchase a plan on the exchange. Those looking for coverage outside of OEP (Open Enrollment Period - November 1, 2020 – December 15, 2020.) must have a qualifying life event to open up an SEP (special Enrollment Period).")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("Loss of Employment Coverage")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Due to the ACA there has been a major increase in premiums making group insurance coverage unaffordable for many small businesses.")
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
                    createTextVNode("Dependant Coverage")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Dependants can stay on your policies until age 26.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("Subsidies & Tax Credits")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("For those that qualify, Subsidies and tax credits not only bring down the monthly premium (Cost) of your health insurance but also bring down things such as Deductibles and copayments on silver plans. Based on your FPL (Federal Poverty Level.)")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("No pre-existing condition limitations.")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Insurance companies cannot cancel your health plan due to an error on your application nor can they deny you coverage due to a pre-existing health condition that you may have.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("No waiting periods")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("There is no more waiting period to be met before you or your dependent can see a physician. Once your policy is effective you can begin using the benefits immediately.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("Free Preventative Care")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("All qualified marketplace plans must provide preventative care, free of charge to you. That means no deductibles, copayments, or coinsurance.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("No Caps")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("All qualified health plans must cover according to the policy contract without a maximum benefit.")
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
                    createTextVNode("Limited Companies")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Due to the fact that Marketplace health plans have lost the majority of their risk stops, such as pre-existing condition waivers, many insurance companies simply cannot afford to offer plans on the health exchange. Therefore you are limited to certain companies and networks. Some counties only have one option.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("High Deductibles and High premiums")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("For those that do not qualify for the subsidies and tax credits marketplace plans may be unaffordable. Customers may end up paying high premiums while also being stuck with a high deductible plan.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("Tax Penalties")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Prior to 2019, you could face large tax penalties for being uninsured. While this has been done away with on a federal level many states have begun to enforce similar mandates of their own.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("Annual Open Enrollment")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Once the enrollment period is closed it becomes next to impossible to purchase a plan on the exchange. Those looking for coverage outside of OEP (Open Enrollment Period - November 1, 2020 – December 15, 2020.) must have a qualifying life event to open up an SEP (special Enrollment Period).")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("Loss of Employment Coverage")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Due to the ACA there has been a major increase in premiums making group insurance coverage unaffordable for many small businesses.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/IndividualAndFamilyInsurancePage/MarketplaceProsAndCons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MarketplaceProsAndCons = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  MarketplaceProsAndCons as default
};
//# sourceMappingURL=MarketplaceProsAndCons-Cn0n6MHN.js.map
