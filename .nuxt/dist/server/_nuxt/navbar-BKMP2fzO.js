import __nuxt_component_0 from "./MenuContainer-D8BlzuGo.js";
import __nuxt_component_1 from "./MobileMenuContainer-Vg9h4BbG.js";
import _sfc_main$1 from "./MobileMenuButton-wVy1-sis.js";
import __nuxt_component_3 from "./ClickableLogo-CDl0jbJr.js";
import _sfc_main$2 from "./MenuList-czVVTerB.js";
import { defineComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
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
import "./nuxt-img-CXQw38If.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "navbar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MenuContainer = __nuxt_component_0;
      const _component_MobileMenuContainer = __nuxt_component_1;
      const _component_MobileMenuButton = _sfc_main$1;
      const _component_ClickableLogo = __nuxt_component_3;
      const _component_MenuList = _sfc_main$2;
      _push(ssrRenderComponent(_component_MenuContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MobileMenuContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MobileMenuButton, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ClickableLogo, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MobileMenuButton),
                    createVNode(_component_ClickableLogo)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_MenuList, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_MobileMenuContainer, null, {
                default: withCtx(() => [
                  createVNode(_component_MobileMenuButton),
                  createVNode(_component_ClickableLogo)
                ]),
                _: 1
              }),
              createVNode(_component_MenuList)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=navbar-BKMP2fzO.js.map
