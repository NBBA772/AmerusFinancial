import { _ as __nuxt_component_0 } from "./nuxt-link-DuPix_nQ.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CategoryCard",
  __ssrInlineRender: true,
  props: {
    category: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      if (__props.category) {
        _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
          to: __props.category.link
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center border-b border-gray-200 dark:border-gray-700 pb-12 mr-5"${_scopeId}><img class="h-16"${ssrRenderAttr("src", __props.category.image)} alt="nuxt 3 logo"${_scopeId}><div class="flex items-start justify-between w-full"${_scopeId}><div class="pl-3 w-full"${_scopeId}><div tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-gray-800 dark:text-white"${_scopeId}><div class="mt-5"${_scopeId}>${ssrInterpolate(__props.category.title)}</div></div><p tabindex="0" class="focus:outline-none text-sm leading-normal pt-2 text-gray-500 dark:text-gray-200"${_scopeId}></p></div><div role="img" aria-label="bookmark"${_scopeId}><svg class="focus:outline-none dark:text-white text-gray-800" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div></div></div><div class="px-2"${_scopeId}><p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 dark:text-white"${_scopeId}>${ssrInterpolate(__props.category.message)}</p><div tabindex="0" class="focus:outline-none flex"${_scopeId}><!--[-->`);
              ssrRenderList(__props.category.tags, (tag, index) => {
                _push2(ssrRenderComponent(_component_nuxt_link, {
                  to: tag.link,
                  key: index,
                  class: "py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` #${ssrInterpolate(tag.title)}`);
                    } else {
                      return [
                        createTextVNode(" #" + toDisplayString(tag.title), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center border-b border-gray-200 dark:border-gray-700 pb-12 mr-5" }, [
                  createVNode("img", {
                    class: "h-16",
                    src: __props.category.image,
                    alt: "nuxt 3 logo"
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "flex items-start justify-between w-full" }, [
                    createVNode("div", { class: "pl-3 w-full" }, [
                      createVNode("div", {
                        tabindex: "0",
                        class: "focus:outline-none text-xl font-medium leading-5 text-gray-800 dark:text-white"
                      }, [
                        createVNode("div", { class: "mt-5" }, toDisplayString(__props.category.title), 1)
                      ]),
                      createVNode("p", {
                        tabindex: "0",
                        class: "focus:outline-none text-sm leading-normal pt-2 text-gray-500 dark:text-gray-200"
                      })
                    ]),
                    createVNode("div", {
                      role: "img",
                      "aria-label": "bookmark"
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "focus:outline-none dark:text-white text-gray-800",
                        width: "28",
                        height: "28",
                        viewBox: "0 0 28 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z",
                          stroke: "currentColor",
                          "stroke-width": "1.25",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ])
                  ])
                ]),
                createVNode("div", { class: "px-2" }, [
                  createVNode("p", {
                    tabindex: "0",
                    class: "focus:outline-none text-sm leading-5 py-4 dark:text-white"
                  }, toDisplayString(__props.category.message), 1),
                  createVNode("div", {
                    tabindex: "0",
                    class: "focus:outline-none flex"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.category.tags, (tag, index) => {
                      return openBlock(), createBlock(_component_nuxt_link, {
                        to: tag.link,
                        key: index,
                        class: "py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" #" + toDisplayString(tag.title), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128))
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/CategoryCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=CategoryCard-Pm-ztfjd.js.map
