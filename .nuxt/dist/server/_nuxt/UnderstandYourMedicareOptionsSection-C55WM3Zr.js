import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
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
  const _component_HeadlineTwo = __nuxt_component_1;
  const _component_ParagraphDescription = __nuxt_component_2;
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "container mx-auto mt-20" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-4 sm:px-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_HeadlineTwo, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Understand your Medicare options with help from your AmerusFinancial team.`);
            } else {
              return [
                createTextVNode("Understand your Medicare options with help from your AmerusFinancial team.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ParagraphDescription, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Medicare Part A, B and D may be enough coverage for some, but for the majority of the population the coverage just isn’t enough. That is where a Medicare Advantage plan comes into play. These plans will help you cover your medical expenses while oftentimes giving added benefits to you. Each plan has its own little nuances, and what is right for me may not be right for you. That is why it is very important you speak with a licensed and certified insurance broker who can assist you in finding the right plan for you. Our licensed sales agents are here to listen to your needs to find the right Medicare plan for you. `);
            } else {
              return [
                createTextVNode(" Medicare Part A, B and D may be enough coverage for some, but for the majority of the population the coverage just isn’t enough. That is where a Medicare Advantage plan comes into play. These plans will help you cover your medical expenses while oftentimes giving added benefits to you. Each plan has its own little nuances, and what is right for me may not be right for you. That is why it is very important you speak with a licensed and certified insurance broker who can assist you in finding the right plan for you. Our licensed sales agents are here to listen to your needs to find the right Medicare plan for you. ")
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
                createTextVNode("Understand your Medicare options with help from your AmerusFinancial team.")
              ]),
              _: 1
            }),
            createVNode(_component_ParagraphDescription, null, {
              default: withCtx(() => [
                createTextVNode(" Medicare Part A, B and D may be enough coverage for some, but for the majority of the population the coverage just isn’t enough. That is where a Medicare Advantage plan comes into play. These plans will help you cover your medical expenses while oftentimes giving added benefits to you. Each plan has its own little nuances, and what is right for me may not be right for you. That is why it is very important you speak with a licensed and certified insurance broker who can assist you in finding the right plan for you. Our licensed sales agents are here to listen to your needs to find the right Medicare plan for you. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/MedicarePage/UnderstandYourMedicareOptionsSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UnderstandYourMedicareOptionsSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  UnderstandYourMedicareOptionsSection as default
};
//# sourceMappingURL=UnderstandYourMedicareOptionsSection-C55WM3Zr.js.map
