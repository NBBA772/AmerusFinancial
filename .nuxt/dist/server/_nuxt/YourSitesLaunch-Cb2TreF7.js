import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_0$1 from "./GridTwoColumns-CDZGjEfF.js";
import __nuxt_component_2 from "./ParagraphSubHeading-CLmFbguh.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_2$1 from "./ParagraphDescription-L8QyXcbq.js";
import { u as useColorMode } from "./composables-DGJynRPd.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
const _imports_0 = "" + __publicAssetsURL("img/Your-Sites-Launch.jpg");
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
      colorMode: useColorMode(),
      IntroText: {
        SubHeading: "What Takes Place Once",
        Heading: "Your Site's Launch"
      },
      Paragraphs: [
        {
          id: 1,
          text: "Launching your site is just the initial step. Sustaining a robust online presence requires consistent effort. Ongoing development ensures your website stays relevant and attractive to potential customers."
        },
        {
          id: 2,
          text: "After development, we'll submit your site to all search engines and local directories, maximizing traffic potential for your company."
        },
        {
          id: 3,
          text: "We will handle monthly updates, keeping your website current with articles, new projects, and news. Continuous optimization ensures optimal traffic. Once your site is live, we make any changes or additions to your marketing materials as needed."
        }
      ]
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
  const _component_GridTwoColumns = __nuxt_component_0$1;
  const _component_ParagraphSubHeading = __nuxt_component_2;
  const _component_HeadlineTwo = __nuxt_component_1;
  const _component_ParagraphDescription = __nuxt_component_2$1;
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "container mx-auto mt-20" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_GridTwoColumns, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="p-4 sm:p-8"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)}${_scopeId2}></div><div class="p-4 sm:p-8"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_ParagraphSubHeading, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($data.IntroText.SubHeading)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($data.IntroText.SubHeading), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_HeadlineTwo, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($data.IntroText.Heading)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($data.IntroText.Heading), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<!--[-->`);
              ssrRenderList($data.Paragraphs, (Paragraph) => {
                _push3(ssrRenderComponent(_component_ParagraphDescription, {
                  key: Paragraph.id
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`${ssrInterpolate(Paragraph.text)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(Paragraph.text), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "p-4 sm:p-8" }, [
                  createVNode("img", { src: _imports_0 })
                ]),
                createVNode("div", { class: "p-4 sm:p-8" }, [
                  createVNode(_component_ParagraphSubHeading, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.IntroText.SubHeading), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HeadlineTwo, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.IntroText.Heading), 1)
                    ]),
                    _: 1
                  }),
                  (openBlock(true), createBlock(Fragment, null, renderList($data.Paragraphs, (Paragraph) => {
                    return openBlock(), createBlock(_component_ParagraphDescription, {
                      key: Paragraph.id
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(Paragraph.text), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
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
              createVNode("div", { class: "p-4 sm:p-8" }, [
                createVNode("img", { src: _imports_0 })
              ]),
              createVNode("div", { class: "p-4 sm:p-8" }, [
                createVNode(_component_ParagraphSubHeading, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($data.IntroText.SubHeading), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_HeadlineTwo, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($data.IntroText.Heading), 1)
                  ]),
                  _: 1
                }),
                (openBlock(true), createBlock(Fragment, null, renderList($data.Paragraphs, (Paragraph) => {
                  return openBlock(), createBlock(_component_ParagraphDescription, {
                    key: Paragraph.id
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(Paragraph.text), 1)
                    ]),
                    _: 2
                  }, 1024);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/GetStarted/YourSitesLaunch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const YourSitesLaunch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  YourSitesLaunch as default
};
//# sourceMappingURL=YourSitesLaunch-Cb2TreF7.js.map
