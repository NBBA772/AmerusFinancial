import __nuxt_component_0 from "./Icon-6AEq6jga.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-DuPix_nQ.js";
import { mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
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
  __name: "BusinessSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      { href: "/services/health/individual-health", label: "Individual Health", icon: "lucide:user-plus" },
      { href: "/services/health/family-coverage", label: "Family Coverage", icon: "lucide:users" },
      { href: "/services/health/group-health", label: "Group Health", icon: "lucide:users" },
      { href: "/services/health/medicare", label: "Medicare", icon: "lucide:activity" },
      { href: "/services/health/dental", label: "Dental Insurance", icon: "lucide:stethoscope" },
      { href: "/services/health/senior-dental", label: "Senior Dental", icon: "lucide:stethoscope" },
      { href: "/services/health/vision-coverage", label: "Vision Coverage", icon: "lucide:eye" },
      { href: "/guides/medicare-guide", label: "Medicare Guide", icon: "lucide:file-text" },
      {
        href: "/blog/health-insurance-networks",
        label: "In-Network vs. Out-of-Network",
        icon: "lucide:shield",
        badge: "New"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 rounded-2xl border border-gray-200 sticky top-24 h-fit shadow-sm hover:shadow-md transition-shadow duration-300" }, _attrs))}><header class="flex items-center gap-3 bg-[#30BCFE] text-white p-5 rounded-t-2xl">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:heart-pulse",
        size: "80",
        class: "text-white"
      }, null, _parent));
      _push(`<h3 class="text-2xl font-semibold">Explore Health Insurance</h3></header><div class="p-6"><ul class="space-y-1"><!--[-->`);
      ssrRenderList(links, (link, index) => {
        _push(`<li class="${ssrRenderClass([{ "border-b border-gray-200": index !== links.length - 1 }, "group py-2 px-3 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-sm"])}">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.href,
          class: "flex items-center justify-between text-gray-700 group-hover:text-[#30BCFE] transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center"${_scopeId}><div class="p-2 bg-[#30BCFE]/10 rounded-md mr-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: link.icon,
                class: "text-[#30BCFE]",
                size: "25"
              }, null, _parent2, _scopeId));
              _push2(`</div><span class="font-medium"${_scopeId}>${ssrInterpolate(link.label)}</span></div>`);
              if (link.badge) {
                _push2(`<span class="ml-2 inline-flex items-center rounded-full bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5"${_scopeId}>${ssrInterpolate(link.badge)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("div", { class: "p-2 bg-[#30BCFE]/10 rounded-md mr-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110" }, [
                    createVNode(_component_Icon, {
                      name: link.icon,
                      class: "text-[#30BCFE]",
                      size: "25"
                    }, null, 8, ["name"])
                  ]),
                  createVNode("span", { class: "font-medium" }, toDisplayString(link.label), 1)
                ]),
                link.badge ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "ml-2 inline-flex items-center rounded-full bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5"
                }, toDisplayString(link.badge), 1)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><div class="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100 transition-all duration-300 hover:shadow-sm"><h4 class="font-semibold mb-2 text-gray-800 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:help-circle",
        class: "text-[#30BCFE]",
        size: "20"
      }, null, _parent));
      _push(` Have Questions? </h4><p class="text-sm text-gray-600 mb-5 leading-relaxed"> Our specialists can help you understand your options and find the right coverage for your needs. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="w-full inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold bg-[#30BCFE] text-white hover:bg-[#30BCFE]/90 transition-all duration-300 h-11 shadow-sm hover:shadow-md"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:phone",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(` Contact an Advisor </button>`);
          } else {
            return [
              createVNode("button", { class: "w-full inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold bg-[#30BCFE] text-white hover:bg-[#30BCFE]/90 transition-all duration-300 h-11 shadow-sm hover:shadow-md" }, [
                createVNode(_component_Icon, {
                  name: "lucide:phone",
                  class: "h-4 w-4"
                }),
                createTextVNode(" Contact an Advisor ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></aside>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/sidebars/BusinessSidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=BusinessSidebar-DnKgAYty.js.map
