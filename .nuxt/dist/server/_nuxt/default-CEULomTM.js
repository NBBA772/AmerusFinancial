import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import _sfc_main$1 from "./navbar-BKMP2fzO.js";
import _sfc_main$2 from "./TheFooter-Cw-8aD2V.js";
import "./MenuContainer-D8BlzuGo.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./MobileMenuContainer-Vg9h4BbG.js";
import "./MobileMenuButton-wVy1-sis.js";
import "./MobileMenuDrawer-BYUVUvgj.js";
import "./MobileMenuList-CNKJk-lu.js";
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
import "@vue/reactivity";
import "./ClickableLogo-CDl0jbJr.js";
import "./nuxt-img-CXQw38If.js";
import "./MenuList-czVVTerB.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-CEULomTM.js.map
