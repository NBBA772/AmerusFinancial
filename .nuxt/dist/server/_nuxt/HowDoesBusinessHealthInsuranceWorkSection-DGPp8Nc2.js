import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_0$1 from "./GridTwoColumns-CDZGjEfF.js";
import { _ as __nuxt_component_2 } from "./nuxt-img-CXQw38If.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_2$1 from "./ParagraphDescription-L8QyXcbq.js";
import __nuxt_component_3 from "./BasicList-CPgeoXnc.js";
import __nuxt_component_4 from "./ListItems-DfeHrqGv.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
      IntroText: {
        SubHeading: "Secure Your Future: Amerus Financial Group - Your Independent Insurance Agency for Health, Annuities, Life, and Employee Benefits",
        Headline: "How Does Business Health Insurance Work?",
        description: "Amerus Financial Group operates as an independant insurance agency with a focus on Health Insurance, Annuities, Life Insurance, and Employee Benefits. Our goal is to forge lasting connections with our clients, a commitment facilitated by our outstanding customer service. In line with this, we proudly collaborate with premier carriers in the industry, specifically selecting those whose business ideals align seamlessly with ours."
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BasicSection = __nuxt_component_0;
  const _component_GridTwoColumns = __nuxt_component_0$1;
  const _component_NuxtImg = __nuxt_component_2;
  const _component_HeadlineTwo = __nuxt_component_1;
  const _component_ParagraphDescription = __nuxt_component_2$1;
  const _component_BasicList = __nuxt_component_3;
  const _component_ListItems = __nuxt_component_4;
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "container mx-auto mt-20" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_GridTwoColumns, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="px-4 sm:px-8"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtImg, {
                format: "webp",
                src: "/images/Group-Health-Insurance-Excerpt.jpg",
                sizes: "sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px",
                alt: "Happy Kids",
                quality: "80",
                loading: "lazy"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="px-4 sm:px-8"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_HeadlineTwo, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($data.IntroText.Headline)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($data.IntroText.Headline), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ParagraphDescription, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Here are few things that you should know about Business Health Insurance. `);
                  } else {
                    return [
                      createTextVNode(" Here are few things that you should know about Business Health Insurance. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_BasicList, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Business Health Insurance is guaranteed issue.`);
                        } else {
                          return [
                            createTextVNode("Business Health Insurance is guaranteed issue.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`You have to have at least one emplyee to Qualify for coverage.`);
                        } else {
                          return [
                            createTextVNode("You have to have at least one emplyee to Qualify for coverage.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`You are required to contribute to your employees premiums.`);
                        } else {
                          return [
                            createTextVNode("You are required to contribute to your employees premiums.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ListItems, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`You do not have to want until your anniversary date to change your coverage.`);
                        } else {
                          return [
                            createTextVNode("You do not have to want until your anniversary date to change your coverage.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Business Health Insurance is guaranteed issue.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("You have to have at least one emplyee to Qualify for coverage.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("You are required to contribute to your employees premiums.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("You do not have to want until your anniversary date to change your coverage.")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "px-4 sm:px-8" }, [
                  createVNode(_component_NuxtImg, {
                    format: "webp",
                    src: "/images/Group-Health-Insurance-Excerpt.jpg",
                    sizes: "sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px",
                    alt: "Happy Kids",
                    quality: "80",
                    loading: "lazy"
                  })
                ]),
                createVNode("div", { class: "px-4 sm:px-8" }, [
                  createVNode(_component_HeadlineTwo, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.IntroText.Headline), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" Here are few things that you should know about Business Health Insurance. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("Business Health Insurance is guaranteed issue.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("You have to have at least one emplyee to Qualify for coverage.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("You are required to contribute to your employees premiums.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ListItems, null, {
                        default: withCtx(() => [
                          createTextVNode("You do not have to want until your anniversary date to change your coverage.")
                        ]),
                        _: 1
                      })
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
          createVNode(_component_GridTwoColumns, null, {
            default: withCtx(() => [
              createVNode("div", { class: "px-4 sm:px-8" }, [
                createVNode(_component_NuxtImg, {
                  format: "webp",
                  src: "/images/Group-Health-Insurance-Excerpt.jpg",
                  sizes: "sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px",
                  alt: "Happy Kids",
                  quality: "80",
                  loading: "lazy"
                })
              ]),
              createVNode("div", { class: "px-4 sm:px-8" }, [
                createVNode(_component_HeadlineTwo, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($data.IntroText.Headline), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode(" Here are few things that you should know about Business Health Insurance. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BasicList, null, {
                  default: withCtx(() => [
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("Business Health Insurance is guaranteed issue.")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("You have to have at least one emplyee to Qualify for coverage.")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("You are required to contribute to your employees premiums.")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListItems, null, {
                      default: withCtx(() => [
                        createTextVNode("You do not have to want until your anniversary date to change your coverage.")
                      ]),
                      _: 1
                    })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/GroupHealthPage/HowDoesBusinessHealthInsuranceWorkSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HowDoesBusinessHealthInsuranceWorkSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HowDoesBusinessHealthInsuranceWorkSection as default
};
//# sourceMappingURL=HowDoesBusinessHealthInsuranceWorkSection-DGPp8Nc2.js.map
