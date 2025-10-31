import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_0$1 from "./GridTwoColumns-CDZGjEfF.js";
import __nuxt_component_0$2 from "./HeadlineFour-nzdiqAdj.js";
import { u as useColorMode } from "./composables-DGJynRPd.js";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
const _imports_0 = "" + __publicAssetsURL("images/Tim.jpg");
const _imports_1 = "" + __publicAssetsURL("images/abigail.jpg");
const _imports_2 = "" + __publicAssetsURL("images/leah.jpg");
const _imports_3 = "" + __publicAssetsURL("images/curtis.jpg");
const _sfc_main = {
  name: "Ideal Customers Section",
  props: {
    title: String,
    description: String,
    mediaFirst: Boolean,
    subTitle: String
  },
  data() {
    return {
      colorMode: useColorMode(),
      IntroText: {
        SubHeading: "Continuous Development for Lead Generation and Local Authority",
        Headline: "Beyond the Launch: Elevating Contractors' Online Presence with Expert Marketing Strategies",
        description: "Launching your website is just the starting point in your marketing strategy. Since our establishment, we've been assisting contractors in cultivating their own leads and solidifying their presence as local authorities. Through continuous development of online marketing strategies, we specialize in optimizing SEO, local search, review management, and website enhancements to elevate contractors' visibility in Google search results."
      }
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
  const _component_BasicSection = __nuxt_component_0;
  const _component_HeadlineTwo = __nuxt_component_1;
  const _component_GridTwoColumns = __nuxt_component_0$1;
  const _component_HeadlineFour = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "container mx-auto mt-20" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HeadlineTwo, { class: "text-center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Meet The Team`);
            } else {
              return [
                createTextVNode("Meet The Team")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_GridTwoColumns, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="p-4 sm:p-8 mx-auto"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} class="rounded-full"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_HeadlineFour, { class: "text-center" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Timothy Baggett`);
                  } else {
                    return [
                      createTextVNode("Timothy Baggett")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="p-4 sm:p-8 mx-auto"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} class="rounded-full"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_HeadlineFour, { class: "text-center" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Abigail Baggett`);
                  } else {
                    return [
                      createTextVNode("Abigail Baggett")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "p-4 sm:p-8 mx-auto" }, [
                  createVNode("img", {
                    src: _imports_0,
                    class: "rounded-full"
                  }),
                  createVNode(_component_HeadlineFour, { class: "text-center" }, {
                    default: withCtx(() => [
                      createTextVNode("Timothy Baggett")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "p-4 sm:p-8 mx-auto" }, [
                  createVNode("img", {
                    src: _imports_1,
                    class: "rounded-full"
                  }),
                  createVNode(_component_HeadlineFour, { class: "text-center" }, {
                    default: withCtx(() => [
                      createTextVNode("Abigail Baggett")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_GridTwoColumns, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="p-4 sm:p-8 mx-auto"${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} class="rounded-full"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_HeadlineFour, { class: "text-center" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Leah Dugger`);
                  } else {
                    return [
                      createTextVNode("Leah Dugger")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="p-4 sm:p-8 mx-auto"${_scopeId2}><img${ssrRenderAttr("src", _imports_3)} class="rounded-full"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_HeadlineFour, { class: "text-center" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Curtis Dugger`);
                  } else {
                    return [
                      createTextVNode("Curtis Dugger")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "p-4 sm:p-8 mx-auto" }, [
                  createVNode("img", {
                    src: _imports_2,
                    class: "rounded-full"
                  }),
                  createVNode(_component_HeadlineFour, { class: "text-center" }, {
                    default: withCtx(() => [
                      createTextVNode("Leah Dugger")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "p-4 sm:p-8 mx-auto" }, [
                  createVNode("img", {
                    src: _imports_3,
                    class: "rounded-full"
                  }),
                  createVNode(_component_HeadlineFour, { class: "text-center" }, {
                    default: withCtx(() => [
                      createTextVNode("Curtis Dugger")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HeadlineTwo, { class: "text-center" }, {
            default: withCtx(() => [
              createTextVNode("Meet The Team")
            ]),
            _: 1
          }),
          createVNode(_component_GridTwoColumns, null, {
            default: withCtx(() => [
              createVNode("div", { class: "p-4 sm:p-8 mx-auto" }, [
                createVNode("img", {
                  src: _imports_0,
                  class: "rounded-full"
                }),
                createVNode(_component_HeadlineFour, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("Timothy Baggett")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "p-4 sm:p-8 mx-auto" }, [
                createVNode("img", {
                  src: _imports_1,
                  class: "rounded-full"
                }),
                createVNode(_component_HeadlineFour, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("Abigail Baggett")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_GridTwoColumns, null, {
            default: withCtx(() => [
              createVNode("div", { class: "p-4 sm:p-8 mx-auto" }, [
                createVNode("img", {
                  src: _imports_2,
                  class: "rounded-full"
                }),
                createVNode(_component_HeadlineFour, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("Leah Dugger")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "p-4 sm:p-8 mx-auto" }, [
                createVNode("img", {
                  src: _imports_3,
                  class: "rounded-full"
                }),
                createVNode(_component_HeadlineFour, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("Curtis Dugger")
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AboutUs/MeetTheTeamSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_3 as default
};
//# sourceMappingURL=MeetTheTeamSection-BgoxL_Jh.js.map
