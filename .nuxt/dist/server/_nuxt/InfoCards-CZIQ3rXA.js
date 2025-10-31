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
  __name: "InfoCards",
  __ssrInlineRender: true,
  props: {
    /** Required: array of card objects { title, text, icon } */
    info: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const info = toRef(props, "info");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" }, _attrs))}><!--[-->`);
      ssrRenderList(info.value, (card) => {
        _push(`<div class="rounded-lg border bg-white text-card-foreground shadow-sm overflow-hidden"><div class="flex items-center gap-3 bg-[#30BCFE] text-white py-4 px-5 rounded-t-lg">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: card.icon,
          class: "text-white",
          size: "50"
        }, null, _parent));
        _push(`<h3 class="text-xl font-semibold leading-none tracking-tight">${ssrInterpolate(card.title)}</h3></div><div class="bg-white p-6 text-center"><p class="text-gray-700">${ssrInterpolate(card.text)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/InfoCards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=InfoCards-CZIQ3rXA.js.map
