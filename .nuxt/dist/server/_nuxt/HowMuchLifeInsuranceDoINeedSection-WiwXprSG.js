import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_2 from "./ParagraphDescription-L8QyXcbq.js";
import __nuxt_component_3 from "./BasicList-CPgeoXnc.js";
import __nuxt_component_4 from "./ListItems-DfeHrqGv.js";
import { u as useColorMode } from "./composables-DGJynRPd.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
      colorMode: useColorMode(),
      IntroText: {
        Heading: "How much life insurance do I need?",
        description: "When it comes to buying life insurance, the younger you are the more affordable it will be . Premiums tend to be lower for younger people and stay the same throughout the policy period. Also their may be changes in your life that present the need for Life Insurance, like getting married or having a new baby. Anytime that your loved ones would suffer financial loss in event of your unexpected death would be a good time to have life insurance."
      }
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
  const _component_HeadlineTwo = __nuxt_component_1;
  const _component_ParagraphDescription = __nuxt_component_2;
  const _component_BasicList = __nuxt_component_3;
  const _component_ListItems = __nuxt_component_4;
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "container mx-auto mt-20" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-4 sm:px-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_HeadlineTwo, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($data.IntroText.Heading)}`);
            } else {
              return [
                createTextVNode(toDisplayString($data.IntroText.Heading), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ParagraphDescription, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` There are several factors that determine the amount of Life Insurance that you need such as: `);
            } else {
              return [
                createTextVNode(" There are several factors that determine the amount of Life Insurance that you need such as: ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BasicList, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Annual salary and how many years your family may need it.`);
                  } else {
                    return [
                      createTextVNode("Annual salary and how many years your family may need it.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Annual salary and how many years your family may need it.`);
                  } else {
                    return [
                      createTextVNode("Annual salary and how many years your family may need it.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Children&#39;s future college`);
                  } else {
                    return [
                      createTextVNode("Children's future college")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Living expenses (credit cards, auto payments, etc.)`);
                  } else {
                    return [
                      createTextVNode("Living expenses (credit cards, auto payments, etc.)")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Final Expenses`);
                  } else {
                    return [
                      createTextVNode("Final Expenses")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Annual salary and how many years your family may need it.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Annual salary and how many years your family may need it.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Children's future college")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Living expenses (credit cards, auto payments, etc.)")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Final Expenses")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ParagraphDescription, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` We have a fact finding tool when you fill out the form on this page that will help you determine the amount of Life Insurance Protection that you may need. `);
            } else {
              return [
                createTextVNode(" We have a fact finding tool when you fill out the form on this page that will help you determine the amount of Life Insurance Protection that you may need. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "px-4 sm:px-8" }, [
            createVNode(_component_HeadlineTwo, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($data.IntroText.Heading), 1)
              ]),
              _: 1
            }),
            createVNode(_component_ParagraphDescription, null, {
              default: withCtx(() => [
                createTextVNode(" There are several factors that determine the amount of Life Insurance that you need such as: ")
              ]),
              _: 1
            }),
            createVNode(_component_BasicList, null, {
              default: withCtx(() => [
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Annual salary and how many years your family may need it.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Annual salary and how many years your family may need it.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Children's future college")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Living expenses (credit cards, auto payments, etc.)")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Final Expenses")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_ParagraphDescription, null, {
              default: withCtx(() => [
                createTextVNode(" We have a fact finding tool when you fill out the form on this page that will help you determine the amount of Life Insurance Protection that you may need. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/LifeInsurancePage/HowMuchLifeInsuranceDoINeedSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HowMuchLifeInsuranceDoINeedSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HowMuchLifeInsuranceDoINeedSection as default
};
//# sourceMappingURL=HowMuchLifeInsuranceDoINeedSection-WiwXprSG.js.map
