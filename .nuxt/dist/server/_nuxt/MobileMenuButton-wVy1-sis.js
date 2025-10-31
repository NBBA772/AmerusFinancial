import _sfc_main$1 from "./MobileMenuDrawer-BYUVUvgj.js";
import { a as useRouter } from "../server.mjs";
import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { ref } from "@vue/reactivity";
import "./MobileMenuList-CNKJk-lu.js";
import "./nuxt-link-DuPix_nQ.js";
import "ufo";
import "./Icon-6AEq6jga.js";
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
  __name: "MobileMenuButton",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const showSideDrawer = ref(false);
    function handleClose() {
      showSideDrawer.value = !showSideDrawer.value;
    }
    router.afterEach(() => {
      showSideDrawer.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MobileMenuDrawer = _sfc_main$1;
      _push(`<!--[--><div class="md:hidden mt-4"><button type="button" class="bg-white rounded-md p-2 inline-flex text-gray-400 hover:text-gray-500 dark:bg-black dark:text-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false"><span class="sr-only dark:bg-black">Open menu</span><svg class="h-6 w-6 dark:bg-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div>`);
      _push(ssrRenderComponent(_component_MobileMenuDrawer, {
        showSideDrawer: unref(showSideDrawer),
        onCloseDrawer: handleClose
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/menu/MobileMenuButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=MobileMenuButton-wVy1-sis.js.map
