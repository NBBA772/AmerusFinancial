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
        Heading: "What are the Different types of life insurance",
        description: "There are two main types of life insurance: term life insurance and whole life insurance. Temporary coverage is called “Term Life Insurance” this type of coverage is typically a lot less expensive and is designed to provide coverage protection for a specified period of time. Their are many terms to choose from, there is yearly term called “annual renewable term” that provides coverage for a set premium amount for one year after that it renews on an annual basis with premiums increasing accordingly. Then there is term insurance that locks in your premiums for a number of years such as 10, 15, 20 or 30 years. These policies provides level premiums throughout the term of the policy. The there is “permanent insurance” these policies are designed for premiums to remain level throughout your lifetime or until the policies are “paid up.” These policies build cash value and offer many different cash accumulation strategies and future income options that are attractive to many who purchase them. The premiums are higher than term insurance because they are level for the life of the contract. The policies are called “Whole Life Insurance” or “Universal Life Insurance.”"
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
              _push3(`${ssrInterpolate($data.IntroText.description)}`);
            } else {
              return [
                createTextVNode(toDisplayString($data.IntroText.description), 1)
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
                createTextVNode(toDisplayString($data.IntroText.description), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/LifeInsurancePage/WhatAreTheDifferentTypesOfLifeInsuranceSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WhatAreTheDifferentTypesOfLifeInsuranceSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  WhatAreTheDifferentTypesOfLifeInsuranceSection as default
};
//# sourceMappingURL=WhatAreTheDifferentTypesOfLifeInsuranceSection-3H4-v2qr.js.map
