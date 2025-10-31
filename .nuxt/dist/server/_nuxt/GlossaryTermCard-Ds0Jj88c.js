import __nuxt_component_0 from "./Icon-6AEq6jga.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GlossaryTermCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    icon: {},
    bgClass: {},
    borderClass: {},
    iconColor: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["p-4 rounded-lg border", _ctx.borderClass, _ctx.bgClass]
      }, _attrs))}><div class="${ssrRenderClass(["p-3 rounded-full mb-2", _ctx.iconColor])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: _ctx.icon,
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</div><h4 class="font-semibold mb-1">${ssrInterpolate(_ctx.title)}</h4><p class="text-sm text-gray-600">${ssrInterpolate(_ctx.description)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/glossary/GlossaryTermCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=GlossaryTermCard-Ds0Jj88c.js.map
