import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_5 from "./GridThreeColumns-H1qcolhg.js";
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
  name: "Important Features To A Fixed Annuity Section",
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
  const _component_GridThreeColumns = __nuxt_component_5;
  const _component_BasicList = __nuxt_component_3;
  const _component_ListItems = __nuxt_component_4;
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "container mx-auto mt-20" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="p-4 sm:p-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_GridThreeColumns, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="mx-auto mb-4 bg-indigo-300 dark:bg-indigo-900 shadow-lg rounded-lg"${_scopeId2}><div class="px-6 py-5"${_scopeId2}><div class="flex items-start"${_scopeId2}><div class="flex-grow truncate"${_scopeId2}><div class="w-full sm:flex justify-between items-center mb-3"${_scopeId2}><h2 class="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0 mx-auto"${_scopeId2}> Safety </h2></div><div class="flex items-end justify-between whitespace-normal"${_scopeId2}><div class="max-w-md text-indigo-100"${_scopeId2}><p class="mb-2"${_scopeId2}> Fixed annuities are considered one of the safest vehicles available for your investment dollars and offer peace of mind knowing that your hard earned savings are protected from market fluctuations. Since the interest is not dependent on the performance of stocks or any market performance you don&#39;t have to worry about losing money when the market falls. To date there has never been one dollar lost in a fixed annuity contract. </p></div></div></div></div></div></div><div class="mx-auto mb-4 bg-indigo-300 dark:bg-indigo-900 shadow-lg rounded-lg"${_scopeId2}><div class="px-6 py-5"${_scopeId2}><div class="flex items-start"${_scopeId2}><div class="flex-grow truncate"${_scopeId2}><div class="w-full sm:flex justify-between items-center mb-3"${_scopeId2}><h2 class="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0 mx-auto"${_scopeId2}> Liquidity </h2></div><div class="flex items-end justify-between whitespace-normal"${_scopeId2}><div class="max-w-md text-indigo-100"${_scopeId2}><p class="mb-2"${_scopeId2}> Annuity withdrawals are the contract provision that offers liquidity and allows the owner to regularly withdraw money. There are typically five different ways to withdraw funds from an annuity befor the contract ends. </p><p class="mb-2"${_scopeId2}>Penalty Free Withdrawels</p>`);
              _push3(ssrRenderComponent(_component_BasicList, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Accumulating Penalty-Free Withdrawals`);
                        } else {
                          return [
                            createTextVNode("Accumulating Penalty-Free Withdrawals")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Return of Premium`);
                        } else {
                          return [
                            createTextVNode("Return of Premium")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Systematic Withdrawals`);
                        } else {
                          return [
                            createTextVNode("Systematic Withdrawals")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Health-Related Waivers`);
                        } else {
                          return [
                            createTextVNode("Health-Related Waivers")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Accumulating Penalty-Free Withdrawals")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Return of Premium")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Systematic Withdrawals")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Health-Related Waivers")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<p class="mb-2"${_scopeId2}> In addition annuities offer many income options that provides a guaranteed income for the rest of your life. </p></div></div></div></div></div></div><div class="mx-auto mb-4 bg-indigo-300 dark:bg-indigo-900 shadow-lg rounded-lg"${_scopeId2}><div class="px-6 py-5"${_scopeId2}><div class="flex items-start"${_scopeId2}><div class="flex-grow truncate"${_scopeId2}><div class="w-full sm:flex justify-between items-center mb-3"${_scopeId2}><h2 class="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0 mx-auto"${_scopeId2}> Tax Benefits </h2></div><div class="flex items-end justify-between whitespace-normal"${_scopeId2}><div class="max-w-md text-indigo-100"${_scopeId2}><p class="mb-2"${_scopeId2}> Usually, the funds that are paid into the investment are tax-deferred until you start accepting annuity payments. The taxes you pay are only regular income taxes too, which means that you pay taxes on the income just like you would any other income you receive. However, you can purchase annuities with after-tax money too. If you do that, you don’t have to pay taxes when you receive it until you receive your principal back. All earnings from annuities are subject to ordinary income tax. </p></div></div></div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "mx-auto mb-4 bg-indigo-300 dark:bg-indigo-900 shadow-lg rounded-lg" }, [
                  createVNode("div", { class: "px-6 py-5" }, [
                    createVNode("div", { class: "flex items-start" }, [
                      createVNode("div", { class: "flex-grow truncate" }, [
                        createVNode("div", { class: "w-full sm:flex justify-between items-center mb-3" }, [
                          createVNode("h2", { class: "text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0 mx-auto" }, " Safety ")
                        ]),
                        createVNode("div", { class: "flex items-end justify-between whitespace-normal" }, [
                          createVNode("div", { class: "max-w-md text-indigo-100" }, [
                            createVNode("p", { class: "mb-2" }, " Fixed annuities are considered one of the safest vehicles available for your investment dollars and offer peace of mind knowing that your hard earned savings are protected from market fluctuations. Since the interest is not dependent on the performance of stocks or any market performance you don't have to worry about losing money when the market falls. To date there has never been one dollar lost in a fixed annuity contract. ")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "mx-auto mb-4 bg-indigo-300 dark:bg-indigo-900 shadow-lg rounded-lg" }, [
                  createVNode("div", { class: "px-6 py-5" }, [
                    createVNode("div", { class: "flex items-start" }, [
                      createVNode("div", { class: "flex-grow truncate" }, [
                        createVNode("div", { class: "w-full sm:flex justify-between items-center mb-3" }, [
                          createVNode("h2", { class: "text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0 mx-auto" }, " Liquidity ")
                        ]),
                        createVNode("div", { class: "flex items-end justify-between whitespace-normal" }, [
                          createVNode("div", { class: "max-w-md text-indigo-100" }, [
                            createVNode("p", { class: "mb-2" }, " Annuity withdrawals are the contract provision that offers liquidity and allows the owner to regularly withdraw money. There are typically five different ways to withdraw funds from an annuity befor the contract ends. "),
                            createVNode("p", { class: "mb-2" }, "Penalty Free Withdrawels"),
                            createVNode(_component_BasicList, null, {
                              default: withCtx(() => [
                                createVNode(_component_ListItems, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Accumulating Penalty-Free Withdrawals")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ListItems, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Return of Premium")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ListItems, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Systematic Withdrawals")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ListItems, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Health-Related Waivers")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("p", { class: "mb-2" }, " In addition annuities offer many income options that provides a guaranteed income for the rest of your life. ")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "mx-auto mb-4 bg-indigo-300 dark:bg-indigo-900 shadow-lg rounded-lg" }, [
                  createVNode("div", { class: "px-6 py-5" }, [
                    createVNode("div", { class: "flex items-start" }, [
                      createVNode("div", { class: "flex-grow truncate" }, [
                        createVNode("div", { class: "w-full sm:flex justify-between items-center mb-3" }, [
                          createVNode("h2", { class: "text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0 mx-auto" }, " Tax Benefits ")
                        ]),
                        createVNode("div", { class: "flex items-end justify-between whitespace-normal" }, [
                          createVNode("div", { class: "max-w-md text-indigo-100" }, [
                            createVNode("p", { class: "mb-2" }, " Usually, the funds that are paid into the investment are tax-deferred until you start accepting annuity payments. The taxes you pay are only regular income taxes too, which means that you pay taxes on the income just like you would any other income you receive. However, you can purchase annuities with after-tax money too. If you do that, you don’t have to pay taxes when you receive it until you receive your principal back. All earnings from annuities are subject to ordinary income tax. ")
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "p-4 sm:p-8" }, [
            createVNode(_component_GridThreeColumns, null, {
              default: withCtx(() => [
                createVNode("div", { class: "mx-auto mb-4 bg-indigo-300 dark:bg-indigo-900 shadow-lg rounded-lg" }, [
                  createVNode("div", { class: "px-6 py-5" }, [
                    createVNode("div", { class: "flex items-start" }, [
                      createVNode("div", { class: "flex-grow truncate" }, [
                        createVNode("div", { class: "w-full sm:flex justify-between items-center mb-3" }, [
                          createVNode("h2", { class: "text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0 mx-auto" }, " Safety ")
                        ]),
                        createVNode("div", { class: "flex items-end justify-between whitespace-normal" }, [
                          createVNode("div", { class: "max-w-md text-indigo-100" }, [
                            createVNode("p", { class: "mb-2" }, " Fixed annuities are considered one of the safest vehicles available for your investment dollars and offer peace of mind knowing that your hard earned savings are protected from market fluctuations. Since the interest is not dependent on the performance of stocks or any market performance you don't have to worry about losing money when the market falls. To date there has never been one dollar lost in a fixed annuity contract. ")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "mx-auto mb-4 bg-indigo-300 dark:bg-indigo-900 shadow-lg rounded-lg" }, [
                  createVNode("div", { class: "px-6 py-5" }, [
                    createVNode("div", { class: "flex items-start" }, [
                      createVNode("div", { class: "flex-grow truncate" }, [
                        createVNode("div", { class: "w-full sm:flex justify-between items-center mb-3" }, [
                          createVNode("h2", { class: "text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0 mx-auto" }, " Liquidity ")
                        ]),
                        createVNode("div", { class: "flex items-end justify-between whitespace-normal" }, [
                          createVNode("div", { class: "max-w-md text-indigo-100" }, [
                            createVNode("p", { class: "mb-2" }, " Annuity withdrawals are the contract provision that offers liquidity and allows the owner to regularly withdraw money. There are typically five different ways to withdraw funds from an annuity befor the contract ends. "),
                            createVNode("p", { class: "mb-2" }, "Penalty Free Withdrawels"),
                            createVNode(_component_BasicList, null, {
                              default: withCtx(() => [
                                createVNode(_component_ListItems, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Accumulating Penalty-Free Withdrawals")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ListItems, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Return of Premium")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ListItems, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Systematic Withdrawals")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ListItems, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Health-Related Waivers")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("p", { class: "mb-2" }, " In addition annuities offer many income options that provides a guaranteed income for the rest of your life. ")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "mx-auto mb-4 bg-indigo-300 dark:bg-indigo-900 shadow-lg rounded-lg" }, [
                  createVNode("div", { class: "px-6 py-5" }, [
                    createVNode("div", { class: "flex items-start" }, [
                      createVNode("div", { class: "flex-grow truncate" }, [
                        createVNode("div", { class: "w-full sm:flex justify-between items-center mb-3" }, [
                          createVNode("h2", { class: "text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0 mx-auto" }, " Tax Benefits ")
                        ]),
                        createVNode("div", { class: "flex items-end justify-between whitespace-normal" }, [
                          createVNode("div", { class: "max-w-md text-indigo-100" }, [
                            createVNode("p", { class: "mb-2" }, " Usually, the funds that are paid into the investment are tax-deferred until you start accepting annuity payments. The taxes you pay are only regular income taxes too, which means that you pay taxes on the income just like you would any other income you receive. However, you can purchase annuities with after-tax money too. If you do that, you don’t have to pay taxes when you receive it until you receive your principal back. All earnings from annuities are subject to ordinary income tax. ")
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AnnuitiesPage/ImportantFeaturesToAFixedAnnuitySection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ImportantFeaturesToAFixedAnnuitySection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ImportantFeaturesToAFixedAnnuitySection as default
};
//# sourceMappingURL=ImportantFeaturesToAFixedAnnuitySection-CyFwatKs.js.map
