import __nuxt_component_0 from "./PatternSection-Bu0o2535.js";
import __nuxt_component_1 from "./GptChat-CMIH_-2U.js";
import { defineComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./DashboardSidebar-EIdgUDKR.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./nuxt-link-DuPix_nQ.js";
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
import "./Icon-6AEq6jga.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WebsiteBuild",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PatternSection = __nuxt_component_0;
      const _component_GptChat = __nuxt_component_1;
      _push(ssrRenderComponent(_component_PatternSection, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-32 flex justify-center"${_scopeId}><div class="flex m-5"${_scopeId}><h1 class="py-9 text-center text-5xl font-extrabold text-gray-900 dark:text-gray-400 ml-4"${_scopeId}> Website Build </h1></div></div><div class="md:flex min-h-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`<div class="w-full z-1 flex justify-right relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_GptChat, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "h-32 flex justify-center" }, [
                createVNode("div", { class: "flex m-5" }, [
                  createVNode("h1", { class: "py-9 text-center text-5xl font-extrabold text-gray-900 dark:text-gray-400 ml-4" }, " Website Build ")
                ])
              ]),
              createVNode("div", { class: "md:flex min-h-full" }, [
                createVNode(_sfc_main$1),
                createVNode("div", { class: "w-full z-1 flex justify-right relative" }, [
                  createVNode(_component_GptChat)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/WebsiteBuild.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=WebsiteBuild-h_MtIGJe.js.map
