import { _ as __nuxt_component_0 } from "./nuxt-link-DuPix_nQ.js";
import _sfc_main$1 from "./User-C37yjSaq.js";
import { u as useColorMode } from "./composables-DGJynRPd.js";
import { g as useState, l as useLoggedIn } from "../server.mjs";
import { defineComponent, withAsyncContext, watch, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { ref } from "@vue/reactivity";
import { onClickOutside } from "@vueuse/core";
import "ufo";
import "destr";
import "klona";
import "hookable";
import "devalue";
import "defu";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "radix3";
import "cookie-es";
import "ohash";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconList",
  __ssrInlineRender: true,
  props: {
    isLoggedIn: Boolean
  },
  async setup(__props) {
    let __temp, __restore;
    const hideActions = ref(true);
    const userActions = ref(null);
    onClickOutside(userActions, () => hideActions.value = true);
    useColorMode();
    const user = useState("user");
    const initalCheck = ([__temp, __restore] = withAsyncContext(() => useLoggedIn()), __temp = await __temp, __restore(), __temp);
    const isLoggedIn = ref(initalCheck);
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
      const _component_User = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden md:flex justify-between space-x-10 align-bottom mt-14" }, _attrs))}>`);
      if (unref(isLoggedIn)) {
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/dashboard" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="dark:text-gray-50 h-6 w-6 lg:block hover:dark:text-blue-400 hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M9 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2m6 0h4c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2m6-13V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "dark:text-gray-50 h-6 w-6 lg:block hover:dark:text-blue-400 hover:text-blue-400",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "1em",
                  height: "1em",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    fill: "currentColor",
                    d: "M9 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2m6 0h4c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2m6-13V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="md:block">`);
      if (_ctx.$colorMode.value == "dark") {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-50 lg:block hover:dark:text-yellow-400 hover:text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$colorMode.value == "light") {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 lg:block hover:dark:text-yellow-400 hover:text-yellow-400" viewBox="0 0 20 20" fill="currentColor "><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span>`);
      _push(ssrRenderComponent(_component_User, {
        isLoggedIn: unref(isLoggedIn),
        class: "md:block"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/menu/IconList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=IconList-C4bkOunK.js.map
