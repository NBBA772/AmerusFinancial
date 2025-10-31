import { _ as __nuxt_component_0 } from "./nuxt-link-DuPix_nQ.js";
import { _ as __nuxt_component_2 } from "./nuxt-img-CXQw38If.js";
import { mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
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
  name: "Clickable Logo"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_NuxtImg = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-3" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="sr-only"${_scopeId}>Home</span>`);
        if (_ctx.$colorMode.value == "dark") {
          _push2(ssrRenderComponent(_component_NuxtImg, {
            preload: "",
            format: "webp",
            src: "/img/logo_white.png",
            alt: "Happy Kids",
            quality: "80",
            width: "175"
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$colorMode.value == "light") {
          _push2(ssrRenderComponent(_component_NuxtImg, {
            preload: "",
            format: "webp",
            src: "/img/logo.png",
            alt: "Happy Kids",
            quality: "80",
            width: "175"
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode("span", { class: "sr-only" }, "Home"),
          _ctx.$colorMode.value == "dark" ? (openBlock(), createBlock(_component_NuxtImg, {
            key: 0,
            preload: "",
            format: "webp",
            src: "/img/logo_white.png",
            alt: "Happy Kids",
            quality: "80",
            width: "175"
          })) : createCommentVNode("", true),
          _ctx.$colorMode.value == "light" ? (openBlock(), createBlock(_component_NuxtImg, {
            key: 1,
            preload: "",
            format: "webp",
            src: "/img/logo.png",
            alt: "Happy Kids",
            quality: "80",
            width: "175"
          })) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/menu/ClickableLogo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_3 as default
};
//# sourceMappingURL=ClickableLogo-CDl0jbJr.js.map
