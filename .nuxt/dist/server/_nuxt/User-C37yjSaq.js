import { _ as __nuxt_component_0 } from "./nuxt-link-DuPix_nQ.js";
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { ref } from "@vue/reactivity";
import "destr";
import "klona";
import "hookable";
import "devalue";
import "defu";
import "../server.mjs";
import { onClickOutside } from "@vueuse/core";
import "ufo";
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
  __name: "User",
  __ssrInlineRender: true,
  props: {
    isLoggedIn: Boolean
  },
  setup(__props) {
    const hideActions = ref(true);
    const userActions = ref(null);
    onClickOutside(userActions, () => hideActions.value = true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "userActions",
        ref: userActions,
        class: ""
      }, _attrs))}><div><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white hover:dark:text-green-400 hover:text-green-400"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg></div><ul class="${ssrRenderClass([[{ hidden: unref(hideActions) }], "dropdown-menu min-w-max absolute bottom bg-white text-base z-100 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 top- m-0 bg-clip-padding border-none"])}" aria-labelledby="dropdownMenuButton1">`);
      if (__props.isLoggedIn) {
        _push(`<li><a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">Logout</a></li>`);
      } else {
        _push(`<!---->`);
      }
      if (!__props.isLoggedIn) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100",
          href: "/register"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Register`);
            } else {
              return [
                createTextVNode("Register")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if (!__props.isLoggedIn) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100",
          href: "/login"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Login`);
            } else {
              return [
                createTextVNode("Login")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=User-C37yjSaq.js.map
