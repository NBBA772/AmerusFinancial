import { _ as __nuxt_component_0 } from "./nuxt-link-DuPix_nQ.js";
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ufo";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "defu";
import "klona";
import "devalue";
import "radix3";
import "cookie-es";
import "destr";
import "ohash";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CallToAction",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-[#30BCFE] text-white" }, _attrs))}><div class="container mx-auto px-4 text-center"><h2 class="text-3xl md:text-4xl font-bold mb-6"> Ready to Find the Right Coverage? </h2><p class="text-white/90 max-w-2xl mx-auto mb-8 text-lg"> Our experienced agents are standing by to help you navigate your insurance options and find the perfect plan for your needs. </p><div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="inline-flex items-center justify-center gap-2 text-sm h-10 bg-white text-[#30BCFE] hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300"${_scopeId}> Get a Free Quote </button>`);
          } else {
            return [
              createVNode("button", { class: "inline-flex items-center justify-center gap-2 text-sm h-10 bg-white text-[#30BCFE] hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300" }, " Get a Free Quote ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="inline-flex items-center justify-center gap-2 text-sm h-10 border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition duration-300"${_scopeId}> Contact an Agent </button>`);
          } else {
            return [
              createVNode("button", { class: "inline-flex items-center justify-center gap-2 text-sm h-10 border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition duration-300" }, " Contact an Agent ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/CallToAction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=CallToAction-CmwVfqHS.js.map
