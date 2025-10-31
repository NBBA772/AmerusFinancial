import __nuxt_component_0 from "./Icon-6AEq6jga.js";
import { toRef, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
  __name: "Benefits",
  __ssrInlineRender: true,
  props: {
    /** Required: array of benefit strings to render */
    benefits: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const benefits = toRef(props, "benefits");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4"><!--[-->`);
      ssrRenderList(benefits.value, (benefit) => {
        _push(`<div class="flex items-center gap-3 p-4 rounded-xl border bg-white backdrop-blur-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"><div class="flex items-center justify-center w-10 h-10 rounded-full bg-[#30BCFE]/10 text-[#30BCFE]">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:check",
          size: "22"
        }, null, _parent));
        _push(`</div><p class="leading-snug text-foreground font-medium">${ssrInterpolate(benefit)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/Benefits.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Benefits-BsnkcdKZ.js.map
