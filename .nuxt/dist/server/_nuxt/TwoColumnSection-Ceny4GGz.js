import __nuxt_component_0 from "./GridTwoColumns-CDZGjEfF.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-DuPix_nQ.js";
import { u as useColorMode } from "./composables-DGJynRPd.js";
import { mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, withDirectives, vShow, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
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
const _imports_0 = "" + __publicAssetsURL("img/Sales-Generating-Machine.png");
const _imports_1 = "" + __publicAssetsURL("img/Sales-Generating-Machine-Light.png");
const _sfc_main = {
  name: "TwoColumnSection",
  props: {
    title: String,
    description: String,
    mediaFirst: Boolean,
    subTitle: String
  },
  data() {
    return {
      colorMode: useColorMode()
    };
  },
  computed: {
    // const isDark = this.$colorMode.value === "dark";
    isDark() {
      if (this.colorMode.preference === "dark") {
        return true;
      } else {
        return false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_GridTwoColumns = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto mt-20" }, _attrs))}>`);
  if ($props.mediaFirst) {
    _push(ssrRenderComponent(_component_GridTwoColumns, null, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div${_scopeId}><p class="mb-4 font-extrabold tracking-tight leading-none text-gray-900 dark:text-slate-300"${_scopeId}>${ssrInterpolate($props.subTitle)}</p><h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-slate-300"${_scopeId}>${ssrInterpolate($props.title)}</h1><p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"${_scopeId}>${ssrInterpolate($props.description)}</p><div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: "/get-started",
            class: "text-slate-100 hover:text-slate-300 dark:hover:text-slate-100 dark:text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-amber-800 bg-blue-400 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-600 font-medium text-sm rounded-lg px-5 py-2.5 mr-2 mb-2"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Learn More About Our Program `);
              } else {
                return [
                  createTextVNode(" Learn More About Our Program ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div></div><div${_scopeId}><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle($options.isDark ? null : { display: "none" })}"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle(!$options.isDark ? null : { display: "none" })}"${_scopeId}></div>`);
        } else {
          return [
            createVNode("div", null, [
              createVNode("p", { class: "mb-4 font-extrabold tracking-tight leading-none text-gray-900 dark:text-slate-300" }, toDisplayString($props.subTitle), 1),
              createVNode("h1", { class: "mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-slate-300" }, toDisplayString($props.title), 1),
              createVNode("p", { class: "mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400" }, toDisplayString($props.description), 1),
              createVNode("div", { class: "flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4" }, [
                createVNode(_component_NuxtLink, {
                  to: "/get-started",
                  class: "text-slate-100 hover:text-slate-300 dark:hover:text-slate-100 dark:text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-amber-800 bg-blue-400 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-600 font-medium text-sm rounded-lg px-5 py-2.5 mr-2 mb-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Learn More About Our Program ")
                  ]),
                  _: 1
                })
              ])
            ]),
            createVNode("div", null, [
              withDirectives(createVNode("img", { src: _imports_0 }, null, 512), [
                [vShow, $options.isDark]
              ]),
              withDirectives(createVNode("img", { src: _imports_1 }, null, 512), [
                [vShow, !$options.isDark]
              ])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(ssrRenderComponent(_component_GridTwoColumns, null, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div${_scopeId}><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle($options.isDark ? null : { display: "none" })}"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle(!$options.isDark ? null : { display: "none" })}"${_scopeId}></div><div${_scopeId}><p class="mb-4 font-extrabold tracking-tight leading-none text-gray-900 dark:text-slate-300"${_scopeId}>${ssrInterpolate($props.subTitle)}</p><h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-slate-300"${_scopeId}>${ssrInterpolate($props.title)}</h1><p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"${_scopeId}>${ssrInterpolate($props.description)}</p><div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: "/get-started",
            class: "text-slate-100 hover:text-slate-300 dark:hover:text-slate-100 dark:text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-amber-800 bg-blue-400 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-600 font-medium text-sm rounded-lg px-5 py-2.5 mr-2 mb-2"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Learn More About Our Program `);
              } else {
                return [
                  createTextVNode(" Learn More About Our Program ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div></div>`);
        } else {
          return [
            createVNode("div", null, [
              withDirectives(createVNode("img", { src: _imports_0 }, null, 512), [
                [vShow, $options.isDark]
              ]),
              withDirectives(createVNode("img", { src: _imports_1 }, null, 512), [
                [vShow, !$options.isDark]
              ])
            ]),
            createVNode("div", null, [
              createVNode("p", { class: "mb-4 font-extrabold tracking-tight leading-none text-gray-900 dark:text-slate-300" }, toDisplayString($props.subTitle), 1),
              createVNode("h1", { class: "mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-slate-300" }, toDisplayString($props.title), 1),
              createVNode("p", { class: "mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400" }, toDisplayString($props.description), 1),
              createVNode("div", { class: "flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4" }, [
                createVNode(_component_NuxtLink, {
                  to: "/get-started",
                  class: "text-slate-100 hover:text-slate-300 dark:hover:text-slate-100 dark:text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-amber-800 bg-blue-400 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-600 font-medium text-sm rounded-lg px-5 py-2.5 mr-2 mb-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Learn More About Our Program ")
                  ]),
                  _: 1
                })
              ])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  }
  _push(`</section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/TwoColumnSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TwoColumnSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TwoColumnSection as default
};
//# sourceMappingURL=TwoColumnSection-Ceny4GGz.js.map
