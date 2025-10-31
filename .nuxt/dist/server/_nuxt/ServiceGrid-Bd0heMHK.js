import __nuxt_component_0 from "./Icon-6AEq6jga.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-DuPix_nQ.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ServiceGrid",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        title: "Health Insurance",
        icon: "lucide:heart",
        items: ["Individual", "Family", "Group", "Senior/Medicare"],
        link: "/services"
      },
      {
        title: "Life Insurance",
        icon: "lucide:shield",
        items: ["Term Life", "Whole Life", "Universal Life", "Senior Life"],
        link: "/services"
      },
      {
        title: "Retirement Planning",
        icon: "lucide:dollar-sign",
        items: ["Annuities", "401(k) Rollovers", "IRAs", "Pension Planning"],
        link: "/services"
      },
      {
        title: "Property Insurance",
        icon: "lucide:house",
        items: ["Auto Insurance", "Homeowners", "Commercial", "Liability"],
        link: "/services"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 m-8" }, _attrs))}><!--[-->`);
      ssrRenderList(services, (service, index) => {
        _push(`<div class="service-card bg-white rounded-lg shadow-md p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg flex items-start gap-4"><div class="w-12 h-12 rounded-full bg-[#e3e3e3] p-2 flex items-center justify-center text-primary flex-shrink-0">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: service.icon,
          class: "h-12 w-12"
        }, null, _parent));
        _push(`</div><div class="flex-1"><h3 class="text-xl font-bold mb-3">${ssrInterpolate(service.title)}</h3><ul class="space-y-2 text-gray-600"><!--[-->`);
        ssrRenderList(service.items, (item, i) => {
          _push(`<li class="flex items-center"><span class="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span> ${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: service.link,
          class: "inline-block mt-4 text-primary font-medium hover:text-primary-dark"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Learn more → `);
            } else {
              return [
                createTextVNode(" Learn more → ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HomePage/ServiceGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ServiceGrid-Bd0heMHK.js.map
