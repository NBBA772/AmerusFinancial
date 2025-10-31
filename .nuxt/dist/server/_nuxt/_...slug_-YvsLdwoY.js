import { _ as __nuxt_component_0 } from "./nuxt-link-DuPix_nQ.js";
import _sfc_main$1 from "./ContentDoc-C37aW0DW.js";
import _sfc_main$2 from "./ContentRenderer-CZCYUIzg.js";
import { mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
import "./ContentQuery-D-hDwZVB.js";
import "./query-BQOW3JOz.js";
import "./preview-DeoyFPuo.js";
import "./ContentRendererMarkdown-Btf5dVzV.js";
import "scule";
import "property-information";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_ContentDoc = _sfc_main$1;
  const _component_ContentRenderer = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center gap-x-12" }, _attrs))}><main class="container text-white lg:flex justify-center overflow-hidden dark:text-white py-16 px-4"><div>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "block cursor-pointer max-w-2xl",
    href: "/articles/overview"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12"${_scopeId}></path></svg> Back `);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "inline h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M11 17l-5-5m0 0l5-5m-5 5h12"
            })
          ])),
          createTextVNode(" Back ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ContentDoc, null, {
    default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-4xl font-semibold text-black dark:text-white"${_scopeId}>${ssrInterpolate(doc.title)}</h2><p class="text-gray-500 dark:text-white"${_scopeId}> by ${ssrInterpolate(doc.author)}, ${ssrInterpolate(doc.date)}</p><div class="max-w-4xl"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ContentRenderer, {
          class: "mt-4 max-w-none prose lg:prose-xl dark:prose-invert",
          value: doc
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("h2", { class: "text-4xl font-semibold text-black dark:text-white" }, toDisplayString(doc.title), 1),
          createVNode("p", { class: "text-gray-500 dark:text-white" }, " by " + toDisplayString(doc.author) + ", " + toDisplayString(doc.date), 1),
          createVNode("div", { class: "max-w-4xl" }, [
            createVNode(_component_ContentRenderer, {
              class: "mt-4 max-w-none prose lg:prose-xl dark:prose-invert",
              value: doc
            }, null, 8, ["value"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ____slug_ as default
};
//# sourceMappingURL=_...slug_-YvsLdwoY.js.map
