import __nuxt_component_0 from "./PatternSection-Bu0o2535.js";
import { h as useRoute, k as useFetch } from "../server.mjs";
import { defineComponent, withAsyncContext, withCtx, unref, openBlock, createBlock, createVNode, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import _sfc_main$1 from "./CategoryCard-Pm-ztfjd.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
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
    const { data: rows } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/categories", {
      key: route.fullPath
    }, "$kzm7whr5YK")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PatternSection = __nuxt_component_0;
      _push(ssrRenderComponent(_component_PatternSection, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(rows)) {
              _push2(`<div${_scopeId}><div aria-label="group of cards" tabindex="0" class="focus:outline-none py-8 w-full"${_scopeId}><!--[-->`);
              ssrRenderList(unref(rows), (row, index) => {
                _push2(`<div class="lg:flex items-center justify-center w-full"${_scopeId}><!--[-->`);
                ssrRenderList(row, (category, index2) => {
                  _push2(`<div aria-label="card 1" class="focus:outline-none lg:w-4/12 lg:m-7 lg:mb-0 mb-7 dark:bg-gray-800 bg-white p-6 shadow rounded transition duration-500 hover:scale-110"${_scopeId}>`);
                  _push2(ssrRenderComponent(_sfc_main$1, { category }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                });
                _push2(`<!--]--></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(rows) ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("div", {
                  "aria-label": "group of cards",
                  tabindex: "0",
                  class: "focus:outline-none py-8 w-full"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(rows), (row, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: "lg:flex items-center justify-center w-full"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(row, (category, index2) => {
                        return openBlock(), createBlock("div", {
                          key: index2,
                          "aria-label": "card 1",
                          class: "focus:outline-none lg:w-4/12 lg:m-7 lg:mb-0 mb-7 dark:bg-gray-800 bg-white p-6 shadow rounded transition duration-500 hover:scale-110"
                        }, [
                          createVNode(_sfc_main$1, { category }, null, 8, ["category"])
                        ]);
                      }), 128))
                    ]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-C1KXj7Qu.js.map
