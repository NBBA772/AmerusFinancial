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
        Headline: "TYPES OF DENTAL PLANS",
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
  const _component_BasicList = __nuxt_component_3;
  const _component_ListItems = __nuxt_component_4;
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
        _push2(ssrRenderComponent(_component_BasicList, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Managed-care plans (PPOs: preferred provider organizations) negotiate fees with specific providers. These in-network providers request only your percentage of the cost and file any necessary claims on your behalf. Out of network providers that perform procedures may or may not be covered and if they are, it may be at a lesser amount.`);
                  } else {
                    return [
                      createTextVNode("Managed-care plans (PPOs: preferred provider organizations) negotiate fees with specific providers. These in-network providers request only your percentage of the cost and file any necessary claims on your behalf. Out of network providers that perform procedures may or may not be covered and if they are, it may be at a lesser amount.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Indemnity plans often include a larger group of providers and you may be able to see the dentist of your choice. The negative side is that patients are often required to pay 100 percent of the bill up front and then submit a claim for reimbursement for the covered procedure.`);
                  } else {
                    return [
                      createTextVNode("Indemnity plans often include a larger group of providers and you may be able to see the dentist of your choice. The negative side is that patients are often required to pay 100 percent of the bill up front and then submit a claim for reimbursement for the covered procedure.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Managed-care plans (PPOs: preferred provider organizations) negotiate fees with specific providers. These in-network providers request only your percentage of the cost and file any necessary claims on your behalf. Out of network providers that perform procedures may or may not be covered and if they are, it may be at a lesser amount.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Indemnity plans often include a larger group of providers and you may be able to see the dentist of your choice. The negative side is that patients are often required to pay 100 percent of the bill up front and then submit a claim for reimbursement for the covered procedure.")
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
            createVNode(_component_BasicList, null, {
              default: withCtx(() => [
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Managed-care plans (PPOs: preferred provider organizations) negotiate fees with specific providers. These in-network providers request only your percentage of the cost and file any necessary claims on your behalf. Out of network providers that perform procedures may or may not be covered and if they are, it may be at a lesser amount.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Indemnity plans often include a larger group of providers and you may be able to see the dentist of your choice. The negative side is that patients are often required to pay 100 percent of the bill up front and then submit a claim for reimbursement for the covered procedure.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/DentalInsurancePage/TypesOfDentalPlansSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TypesOfDentalPlansSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TypesOfDentalPlansSection as default
};
//# sourceMappingURL=TypesOfDentalPlansSection-DRrRN4dh.js.map
