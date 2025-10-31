import __nuxt_component_0 from "./PatternSection-Bu0o2535.js";
import _sfc_main$1 from "./ContentList-kx_ttBzT.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-DuPix_nQ.js";
import __nuxt_component_0$2 from "./GridTwoColumns-CDZGjEfF.js";
import { mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ContentQuery-D-hDwZVB.js";
import "../server.mjs";
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
import "./query-BQOW3JOz.js";
import "./preview-DeoyFPuo.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PatternSection = __nuxt_component_0;
  const _component_ContentList = _sfc_main$1;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_GridTwoColumns = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_PatternSection, mergeProps({ class: "flex justify-center w-100" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ContentList, { path: "/articles" }, {
          default: withCtx(({ list }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex flex-col justify-center w-100"${_scopeId2}><!--[-->`);
              ssrRenderList(list, (article) => {
                _push3(`<div class="max-w-xl rounded overflow-hidden shadow-xl transition duration-500 hover:scale-110 my-10 p-0 dark:bg-text-white min-h-[180px]"${_scopeId2}>`);
                if (article.img) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: article._path
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_GridTwoColumns, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mr-4"${_scopeId4}><img${ssrRenderAttr("src", article.img)} alt=""${_scopeId4}></div><div${_scopeId4}><div class="p-4"${_scopeId4}><div class="font-bold text-xl mb-2 dark:text-white"${_scopeId4}>${ssrInterpolate(article.title)}</div><p class="text-gray-700 dark:text-white text-base"${_scopeId4}>${ssrInterpolate(article.description)}</p></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mr-4" }, [
                                  createVNode("img", {
                                    src: article.img,
                                    alt: ""
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("div", null, [
                                  createVNode("div", { class: "p-4" }, [
                                    createVNode("div", { class: "font-bold text-xl mb-2 dark:text-white" }, toDisplayString(article.title), 1),
                                    createVNode("p", { class: "text-gray-700 dark:text-white text-base" }, toDisplayString(article.description), 1)
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_GridTwoColumns, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mr-4" }, [
                                createVNode("img", {
                                  src: article.img,
                                  alt: ""
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", null, [
                                createVNode("div", { class: "p-4" }, [
                                  createVNode("div", { class: "font-bold text-xl mb-2 dark:text-white" }, toDisplayString(article.title), 1),
                                  createVNode("p", { class: "text-gray-700 dark:text-white text-base" }, toDisplayString(article.description), 1)
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: article._path,
                    class: "h-full"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="p-4"${_scopeId3}><div class="font-bold text-xl mb-2 dark:text-white"${_scopeId3}>${ssrInterpolate(article.title)}</div><p class="text-gray-700 dark:text-white text-base"${_scopeId3}>${ssrInterpolate(article.description)}</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "p-4" }, [
                            createVNode("div", { class: "font-bold text-xl mb-2 dark:text-white" }, toDisplayString(article.title), 1),
                            createVNode("p", { class: "text-gray-700 dark:text-white text-base" }, toDisplayString(article.description), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                }
                _push3(`</div>`);
              });
              _push3(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col justify-center w-100" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(list, (article) => {
                    return openBlock(), createBlock("div", {
                      key: article._path,
                      class: "max-w-xl rounded overflow-hidden shadow-xl transition duration-500 hover:scale-110 my-10 p-0 dark:bg-text-white min-h-[180px]"
                    }, [
                      article.img ? (openBlock(), createBlock(_component_NuxtLink, {
                        key: 0,
                        to: article._path
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_GridTwoColumns, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mr-4" }, [
                                createVNode("img", {
                                  src: article.img,
                                  alt: ""
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", null, [
                                createVNode("div", { class: "p-4" }, [
                                  createVNode("div", { class: "font-bold text-xl mb-2 dark:text-white" }, toDisplayString(article.title), 1),
                                  createVNode("p", { class: "text-gray-700 dark:text-white text-base" }, toDisplayString(article.description), 1)
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["to"])) : (openBlock(), createBlock(_component_NuxtLink, {
                        key: 1,
                        to: article._path,
                        class: "h-full"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "p-4" }, [
                            createVNode("div", { class: "font-bold text-xl mb-2 dark:text-white" }, toDisplayString(article.title), 1),
                            createVNode("p", { class: "text-gray-700 dark:text-white text-base" }, toDisplayString(article.description), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"]))
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ContentList, { path: "/articles" }, {
            default: withCtx(({ list }) => [
              createVNode("div", { class: "flex flex-col justify-center w-100" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(list, (article) => {
                  return openBlock(), createBlock("div", {
                    key: article._path,
                    class: "max-w-xl rounded overflow-hidden shadow-xl transition duration-500 hover:scale-110 my-10 p-0 dark:bg-text-white min-h-[180px]"
                  }, [
                    article.img ? (openBlock(), createBlock(_component_NuxtLink, {
                      key: 0,
                      to: article._path
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_GridTwoColumns, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mr-4" }, [
                              createVNode("img", {
                                src: article.img,
                                alt: ""
                              }, null, 8, ["src"])
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "p-4" }, [
                                createVNode("div", { class: "font-bold text-xl mb-2 dark:text-white" }, toDisplayString(article.title), 1),
                                createVNode("p", { class: "text-gray-700 dark:text-white text-base" }, toDisplayString(article.description), 1)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["to"])) : (openBlock(), createBlock(_component_NuxtLink, {
                      key: 1,
                      to: article._path,
                      class: "h-full"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "p-4" }, [
                          createVNode("div", { class: "font-bold text-xl mb-2 dark:text-white" }, toDisplayString(article.title), 1),
                          createVNode("p", { class: "text-gray-700 dark:text-white text-base" }, toDisplayString(article.description), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"]))
                  ]);
                }), 128))
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/overview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const overview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  overview as default
};
//# sourceMappingURL=overview-BO7sPR1Q.js.map
