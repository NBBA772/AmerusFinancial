import __nuxt_component_0 from "./Icon-6AEq6jga.js";
import { toRef, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "CoverageFeatures",
  __ssrInlineRender: true,
  props: {
    /** Required: array of feature strings */
    features: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const features = toRef(props, "features");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-10 mt-12" }, _attrs))}><div class="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm"><div class="bg-[#30BCFE] text-white px-6 py-4 flex items-center justify-between"><div><h2 class="text-2xl font-bold tracking-tight">Coverage Features</h2><p class="text-sm opacity-90"> Explore the essential protections included in every plan </p></div>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:shield",
        size: "50"
      }, null, _parent));
      _push(`</div><div class="p-8"><ul class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(features.value, (feature) => {
        _push(`<li class="flex items-start gap-3 p-3 rounded-xl hover:bg-[#30BCFE]/5 transition-colors duration-300"><div class="flex items-center justify-center w-10 h-10 rounded-full bg-[#30BCFE]/10 text-[#30BCFE]">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:check",
          size: "22"
        }, null, _parent));
        _push(`</div><p class="leading-snug text-foreground font-medium">${ssrInterpolate(feature)}</p></li>`);
      });
      _push(`<!--]--></ul></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/CoverageFeatures.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=CoverageFeatures-CxwslF9f.js.map
