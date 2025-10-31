import { _ as __nuxt_component_0 } from "./nuxt-link-DuPix_nQ.js";
import __nuxt_component_0$1 from "./Icon-6AEq6jga.js";
import { l as useLoggedIn, g as useState } from "../server.mjs";
import { defineComponent, withAsyncContext, ref, watch, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
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
  __name: "MobileMenuList",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const initalCheck = ([__temp, __restore] = withAsyncContext(() => useLoggedIn()), __temp = await __temp, __restore(), __temp);
    const isLoggedIn = ref(initalCheck);
    const user = useState("user");
    async function checkIfLoggedIn() {
      const check = await useLoggedIn();
      isLoggedIn.value = check;
    }
    watch(
      user,
      async () => {
        await checkIfLoggedIn();
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-4 overflow-y-auto" }, _attrs))}><ul class="space-y-2"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "material-symbols:house",
              class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              size: "50"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-3"${_scopeId}>Home</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "material-symbols:house",
                class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                size: "50"
              }),
              createVNode("span", { class: "ml-3" }, "Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about-us",
        class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fluent:people-community-48-filled",
              class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              size: "50"
            }, null, _parent2, _scopeId));
            _push2(`<span class="flex-1 ml-3 whitespace-nowrap"${_scopeId}>About Us</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "fluent:people-community-48-filled",
                class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                size: "50"
              }),
              createVNode("span", { class: "flex-1 ml-3 whitespace-nowrap" }, "About Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/articles/overview",
        class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "zondicons:news-paper",
              class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              size: "50"
            }, null, _parent2, _scopeId));
            _push2(`<span class="flex-1 ml-3 whitespace-nowrap"${_scopeId}>Blog</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "zondicons:news-paper",
                class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                size: "50"
              }),
              createVNode("span", { class: "flex-1 ml-3 whitespace-nowrap" }, "Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/menu/MobileMenuList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=MobileMenuList-CNKJk-lu.js.map
