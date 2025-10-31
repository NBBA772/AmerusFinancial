import { _ as __nuxt_component_0 } from "./nuxt-link-DuPix_nQ.js";
import { defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
  __name: "TopicCard",
  __ssrInlineRender: true,
  props: {
    topic: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        to: __props.topic.url
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center border-b border-gray-200 dark:border-gray-700 pb-12 mr-5"${_scopeId}><img class="h-16"${ssrRenderAttr("src", __props.topic.image)} alt="nuxt 3 logo"${_scopeId}><div class="flex items-start justify-between w-full"${_scopeId}><div class="pl-3 w-full"${_scopeId}><div tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-gray-800 dark:text-white"${_scopeId}>`);
            if (__props.topic.showName) {
              _push2(`<div class="mt-5"${_scopeId}>${ssrInterpolate(__props.topic.displayName)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><p tabindex="0" class="focus:outline-none text-sm leading-normal pt-2 text-gray-500 dark:text-gray-200"${_scopeId}></p></div><div role="img" aria-label="bookmark"${_scopeId}></div></div></div><div class="px-2"${_scopeId}><p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 dark:text-white"${_scopeId}></p><div tabindex="0" class="focus:outline-none flex"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center border-b border-gray-200 dark:border-gray-700 pb-12 mr-5" }, [
                createVNode("img", {
                  class: "h-16",
                  src: __props.topic.image,
                  alt: "nuxt 3 logo"
                }, null, 8, ["src"]),
                createVNode("div", { class: "flex items-start justify-between w-full" }, [
                  createVNode("div", { class: "pl-3 w-full" }, [
                    createVNode("div", {
                      tabindex: "0",
                      class: "focus:outline-none text-xl font-medium leading-5 text-gray-800 dark:text-white"
                    }, [
                      __props.topic.showName ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mt-5"
                      }, toDisplayString(__props.topic.displayName), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("p", {
                      tabindex: "0",
                      class: "focus:outline-none text-sm leading-normal pt-2 text-gray-500 dark:text-gray-200"
                    })
                  ]),
                  createVNode("div", {
                    role: "img",
                    "aria-label": "bookmark"
                  })
                ])
              ]),
              createVNode("div", { class: "px-2" }, [
                createVNode("p", {
                  tabindex: "0",
                  class: "focus:outline-none text-sm leading-5 py-4 dark:text-white"
                }),
                createVNode("div", {
                  tabindex: "0",
                  class: "focus:outline-none flex"
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/TopicCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=TopicCard-D0N0EYFc.js.map
