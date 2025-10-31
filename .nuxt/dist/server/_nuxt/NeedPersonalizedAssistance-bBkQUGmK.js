import __nuxt_component_0 from "./Icon-6AEq6jga.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-DuPix_nQ.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-blue-50 rounded-lg p-6 border border-blue-100 my-12 max-w-5xl mx-auto" }, _attrs))}><div class="flex flex-col md:flex-row items-start md:items-center"><div class="mb-4 md:mb-0 md:mr-6"><div class="bg-white rounded-full p-3 inline-block">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "lucide-info",
    class: "h-8 w-8 text-[#30BCFE]"
  }, null, _parent));
  _push(`</div></div><div><h3 class="text-xl font-semibold mb-2">Need Personalized Assistance?</h3><p class="text-gray-700 mb-4"> Our team of insurance experts is ready to help you navigate these resources and find the right solutions for your specific needs. </p><div class="flex flex-wrap gap-3">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white h-10 px-4 py-2 bg-[#30BCFE] hover:bg-primary/90"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact An Advisor `);
      } else {
        return [
          createTextVNode(" Contact An Advisor ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/resources",
    class: "router-link-active router-link-exact-active px-3 py-2 rounded-md font-medium border border-sky-500 text-sky-500 hover:bg-sky-100 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact an Agent `);
      } else {
        return [
          createTextVNode(" Contact an Agent ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/resources/NeedPersonalizedAssistance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_4 as default
};
//# sourceMappingURL=NeedPersonalizedAssistance-bBkQUGmK.js.map
