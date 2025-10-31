import { _ as __nuxt_component_0 } from "./nuxt-link-DuPix_nQ.js";
import __nuxt_component_0$1 from "./Icon-6AEq6jga.js";
import { a as useRouter, h as useRoute, l as useLoggedIn } from "../server.mjs";
import { defineComponent, withAsyncContext, ref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ufo";
import "klona";
import "hookable";
import "defu";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "devalue";
import "radix3";
import "cookie-es";
import "destr";
import "ohash";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DashboardSidebar",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const router = useRouter();
    const route = useRoute();
    const isLoggedIn = ([__temp, __restore] = withAsyncContext(() => useLoggedIn()), __temp = await __temp, __restore(), __temp);
    const hideDialog = ref(true);
    console.log(route.path);
    function goToAskForm() {
      if (isLoggedIn) {
        router.push("/dashboard/ask");
      }
      hideDialog.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="pt-5 z-10 boarder justify-right"><div class="w-100" aria-label="Sidebar"><div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-900"><ul class="space-y-2"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboard",
        class: "flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "material-symbols:space-dashboard-rounded",
              class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              size: "45"
            }, null, _parent2, _scopeId));
            _push2(`<span class=""${_scopeId}>Dashboard</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "material-symbols:space-dashboard-rounded",
                class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                size: "45"
              }),
              createVNode("span", { class: "" }, "Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboard/WebsiteBuild",
        class: "flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "file-icons:robots",
              class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              size: "45"
            }, null, _parent2, _scopeId));
            _push2(`<span class="flex-1 whitespace-nowrap"${_scopeId}>AI Agent</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "file-icons:robots",
                class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                size: "45"
              }),
              createVNode("span", { class: "flex-1 whitespace-nowrap" }, "AI Agent")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboard/ask",
        class: "flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
        onClick: goToAskForm
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:sharp-live-help",
              class: "flex items-center pr-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              size: "45"
            }, null, _parent2, _scopeId));
            _push2(`<span class="flex-1 whitespace-nowrap"${_scopeId}>Ask Question</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ic:sharp-live-help",
                class: "flex items-center pr-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                size: "45"
              }),
              createVNode("span", { class: "flex-1 whitespace-nowrap" }, "Ask Question")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboard/search",
        class: "flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:outline-find-in-page",
              class: "flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              size: "40"
            }, null, _parent2, _scopeId));
            _push2(`<span class="flex-1 whitespace-nowrap"${_scopeId}>Search Questions</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ic:outline-find-in-page",
                class: "flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                size: "40"
              }),
              createVNode("span", { class: "flex-1 whitespace-nowrap" }, "Search Questions")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="#" class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "material-symbols:reviews-rounded",
        class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
        size: "50"
      }, null, _parent));
      _push(`<span class="flex-1 whitespace-nowrap">Leave A Review</span></a></li></ul></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/DashboardSidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=DashboardSidebar-EIdgUDKR.js.map
