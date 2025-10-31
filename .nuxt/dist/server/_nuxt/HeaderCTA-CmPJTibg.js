import { _ as __nuxt_component_0 } from "./nuxt-link-DuPix_nQ.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
const _sfc_main = {
  name: "Ribbon"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "mx-auto p-2 bg-blue-300 dark:bg-blue-400 text-center" }, _attrs))} data-v-3e3077a5><div class="flex justify-center items-end" data-v-3e3077a5><h3 class="mb-4 font-extrabold tracking-tight leading-none md:text-2xl lg:text-3xl text-slate-100" data-v-3e3077a5> Get A Free Insurance Quote </h3><div class="flex flex-col" data-v-3e3077a5>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-slate-100 hover:text-slate-300 dark:hover:text-slate-100 focus:outline-none focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-800 bg-amber-400 hover:bg-amber-300 dark:bg-amber-500 dark:hover:bg-amber-600 font-medium text-sm rounded-lg px-5 py-2.5 mx-2 mb-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Get A Quote `);
      } else {
        return [
          createTextVNode(" Get A Quote ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderCTA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderCTA = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3e3077a5"]]);
export {
  HeaderCTA as default
};
//# sourceMappingURL=HeaderCTA-CmPJTibg.js.map
