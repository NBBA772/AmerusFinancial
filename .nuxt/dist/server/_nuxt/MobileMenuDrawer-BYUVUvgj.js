import _sfc_main$1 from "./MobileMenuList-CNKJk-lu.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MobileMenuDrawer",
  __ssrInlineRender: true,
  props: ["showSideDrawer"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MobileMenuList = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "drawer-navigation my-12",
        class: [{ hidden: !props.showSideDrawer }, "fixed z-40 top-0 left-0 h-screen w-screen transition-all duration-700 p-0 overflow-y-auto bg-white w-100 dark:bg-black"],
        tabindex: "-1",
        "aria-labelledby": "drawer-navigation-label"
      }, _attrs))}><h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 dark:text-gray-200 uppercase hover:dark:text-green-400 hover:text-green-400"> Menu </h5><button type="button" data-drawer-dismiss="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-500 dark:text-gray-200 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-black dark:hover:text-white"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Close menu</span></button>`);
      _push(ssrRenderComponent(_component_MobileMenuList, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/menu/MobileMenuDrawer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=MobileMenuDrawer-BYUVUvgj.js.map
