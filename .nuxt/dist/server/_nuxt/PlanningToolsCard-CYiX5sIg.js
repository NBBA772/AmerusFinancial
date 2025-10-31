import __nuxt_component_0 from "./Icon-6AEq6jga.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-DuPix_nQ.js";
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
  __name: "PlanningToolsCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    link: {},
    linkText: {},
    icon: {},
    features: {},
    isNew: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-lg bg-card text-card-foreground flex flex-col h-full border-2 border-primary/50 shadow-lg" }, _attrs))}><div class="flex flex-col space-y-1.5 p-6 pb-2"><div class="flex items-center gap-2 mb-2"><div class="p-2 rounded-full bg-primary/10">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: _ctx.icon,
        class: "h-16 w-16"
      }, null, _parent));
      _push(`</div><h3 class="font-semibold tracking-tight text-lg">${ssrInterpolate(_ctx.title)} `);
      if (_ctx.isNew) {
        _push(`<span class="ml-2 text-xs font-normal text-white bg-primary px-2 py-0.5 rounded-full">New</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h3></div><p class="text-muted-foreground text-sm mb-1">${ssrInterpolate(_ctx.description)}</p>`);
      if ((_a = _ctx.features) == null ? void 0 : _a.length) {
        _push(`<div class="grid grid-cols-2 gap-2 mt-3 text-xs"><!--[-->`);
        ssrRenderList(_ctx.features, (feature) => {
          _push(`<div class="flex items-center gap-1">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:circle-check",
            class: "h-5 w-5 text-green-500"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(feature)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center p-6 pt-0 mt-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.link,
        class: "justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#30BCFE] text-white hover:bg-[#30BCFE]/80 h-10 px-4 py-2 w-full flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.linkText)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.linkText), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/planningTools/PlanningToolsCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=PlanningToolsCard-CYiX5sIg.js.map
