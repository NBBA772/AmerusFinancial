import { h as useRoute, k as useFetch } from "../server.mjs";
import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./CategoryCard-Pm-ztfjd.js";
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
import "./nuxt-link-DuPix_nQ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: rows } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/categories", { key: route.fullPath }, "$7Th5LdZEfm")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-black" }, _attrs))}>`);
      if (unref(rows)) {
        _push(`<div><div aria-label="group of cards" tabindex="0" class="focus:outline-none py-8 w-full"><!--[-->`);
        ssrRenderList(unref(rows), (row) => {
          _push(`<div class="lg:flex items-center justify-center w-full"><!--[-->`);
          ssrRenderList(row, (category) => {
            _push(`<div aria-label="card 1" class="focus:outline-none lg:w-4/12 lg:m-7 lg:mb-0 mb-7 dark:bg-gray-800 bg-white p-6 shadow rounded transition duration-500 hover:scale-110">`);
            _push(ssrRenderComponent(_sfc_main$1, { category }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/series/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DpOYTAlj.js.map
