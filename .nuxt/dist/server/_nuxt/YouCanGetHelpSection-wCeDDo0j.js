import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_2 from "./ParagraphDescription-L8QyXcbq.js";
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
  name: "Ideal Customers Section",
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
        Headline: "YOU CAN GET HELP CHOOSING AN INDIVIDUAL DENTAL INSURANCE PLAN",
        description: "The two most common types of individual dental insurance plans available to seniors are"
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
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "container mx-auto mt-20" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="p-4 sm:p-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_HeadlineTwo, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($data.IntroText.Headline)}`);
            } else {
              return [
                createTextVNode(toDisplayString($data.IntroText.Headline), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ParagraphDescription, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` You can purchase an individual dental insurance plan, for premiums typically ranging from $20-$60 a month. Standard policies commonly cover these routine procedures at a family dentist office. `);
            } else {
              return [
                createTextVNode(" You can purchase an individual dental insurance plan, for premiums typically ranging from $20-$60 a month. Standard policies commonly cover these routine procedures at a family dentist office. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ParagraphDescription, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` It’s important to have dental insurance in place before an urgent need arises. Many seniors take daily medications that cause dry mouth, which can cause cavities. Insufficient nutrition can also affect your dental health. `);
              _push3(ssrRenderComponent(_component_ParagraphDescription, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Remember that health problems, like insulin resistance or pneumonia, may be caused or worsened by poor dental hygiene. Intellihealth News Service research has even found a connection between gum disease and heart disease. `);
                  } else {
                    return [
                      createTextVNode(" Remember that health problems, like insulin resistance or pneumonia, may be caused or worsened by poor dental hygiene. Intellihealth News Service research has even found a connection between gum disease and heart disease. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ParagraphDescription, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Enter your zip code above if you’d like to explore your options for individual dental insurance plans in your area. `);
                  } else {
                    return [
                      createTextVNode("Enter your zip code above if you’d like to explore your options for individual dental insurance plans in your area. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ParagraphDescription, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`This article is for informational purposes only. Nothing in it should be used as a substitute for professional medical advice. Always consult with your medical provider regarding diagnosis or treatment for a health condition, including decisions about the correct medication for your condition, as well as prior to undertaking any specific exercise or dietary routine. In addition, this information includes just some factors to consider when selecting insurance and may not reflect the provisions of any particular insurance product. Always carefully check the provisions of any insurance product you have or may consider purchasing.`);
                  } else {
                    return [
                      createTextVNode("This article is for informational purposes only. Nothing in it should be used as a substitute for professional medical advice. Always consult with your medical provider regarding diagnosis or treatment for a health condition, including decisions about the correct medication for your condition, as well as prior to undertaking any specific exercise or dietary routine. In addition, this information includes just some factors to consider when selecting insurance and may not reflect the provisions of any particular insurance product. Always carefully check the provisions of any insurance product you have or may consider purchasing.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createTextVNode(" It’s important to have dental insurance in place before an urgent need arises. Many seniors take daily medications that cause dry mouth, which can cause cavities. Insufficient nutrition can also affect your dental health. "),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode(" Remember that health problems, like insulin resistance or pneumonia, may be caused or worsened by poor dental hygiene. Intellihealth News Service research has even found a connection between gum disease and heart disease. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("Enter your zip code above if you’d like to explore your options for individual dental insurance plans in your area. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("This article is for informational purposes only. Nothing in it should be used as a substitute for professional medical advice. Always consult with your medical provider regarding diagnosis or treatment for a health condition, including decisions about the correct medication for your condition, as well as prior to undertaking any specific exercise or dietary routine. In addition, this information includes just some factors to consider when selecting insurance and may not reflect the provisions of any particular insurance product. Always carefully check the provisions of any insurance product you have or may consider purchasing.")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "p-4 sm:p-8" }, [
            createVNode(_component_HeadlineTwo, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($data.IntroText.Headline), 1)
              ]),
              _: 1
            }),
            createVNode(_component_ParagraphDescription, null, {
              default: withCtx(() => [
                createTextVNode(" You can purchase an individual dental insurance plan, for premiums typically ranging from $20-$60 a month. Standard policies commonly cover these routine procedures at a family dentist office. ")
              ]),
              _: 1
            }),
            createVNode(_component_ParagraphDescription, null, {
              default: withCtx(() => [
                createTextVNode(" It’s important to have dental insurance in place before an urgent need arises. Many seniors take daily medications that cause dry mouth, which can cause cavities. Insufficient nutrition can also affect your dental health. "),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode(" Remember that health problems, like insulin resistance or pneumonia, may be caused or worsened by poor dental hygiene. Intellihealth News Service research has even found a connection between gum disease and heart disease. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("Enter your zip code above if you’d like to explore your options for individual dental insurance plans in your area. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode("This article is for informational purposes only. Nothing in it should be used as a substitute for professional medical advice. Always consult with your medical provider regarding diagnosis or treatment for a health condition, including decisions about the correct medication for your condition, as well as prior to undertaking any specific exercise or dietary routine. In addition, this information includes just some factors to consider when selecting insurance and may not reflect the provisions of any particular insurance product. Always carefully check the provisions of any insurance product you have or may consider purchasing.")
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
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/DentalInsurancePage/YouCanGetHelpSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const YouCanGetHelpSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  YouCanGetHelpSection as default
};
//# sourceMappingURL=YouCanGetHelpSection-wCeDDo0j.js.map
