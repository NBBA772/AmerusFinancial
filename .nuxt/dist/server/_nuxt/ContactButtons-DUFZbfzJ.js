import { _ as __nuxt_component_0 } from "./nuxt-link-DuPix_nQ.js";
import { defineComponent, withCtx, createTextVNode, useSSRContext } from "vue";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContactButtons",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1e62c9df><div class="flex flex-wrap justify-center gap-2 my-3" data-v-1e62c9df>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#employers",
        class: "px-3 py-2 rounded-md font-medium bg-sky-500 text-white hover:bg-sky-600 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` For Employers `);
          } else {
            return [
              createTextVNode(" For Employers ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#families",
        class: "px-3 py-2 rounded-md font-medium border border-sky-500 text-sky-500 hover:bg-sky-100 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` For Individuals &amp; Families `);
          } else {
            return [
              createTextVNode(" For Individuals & Families ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#seniors",
        class: "px-3 py-2 rounded-md font-medium border border-sky-500 text-sky-500 hover:bg-sky-100 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` For Seniors `);
          } else {
            return [
              createTextVNode(" For Seniors ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-white text-center m-0" data-v-1e62c9df> 3308 Cleveland Heights Blvd STE 102, Lakeland, FL • <a href="tel:+18884417891" class="underline hover:text-sky-200" data-v-1e62c9df>(888) 441‑7891</a></p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HomePage/ContactButtons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1e62c9df"]]);
export {
  __nuxt_component_5 as default
};
//# sourceMappingURL=ContactButtons-DUFZbfzJ.js.map
