import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_0$1 from "./GridTwoColumns-CDZGjEfF.js";
import __nuxt_component_2 from "./ParagraphSubHeading-CLmFbguh.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_2$1 from "./ParagraphDescription-L8QyXcbq.js";
import __nuxt_component_3 from "./BasicList-CPgeoXnc.js";
import __nuxt_component_6 from "./BasicListItem-DxQvv3r_.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "" + __publicAssetsURL("img/Not-Just-A-Website.jpg");
const _sfc_main = {
  name: "Industries We Serve",
  data() {
    return {
      IntroText: {
        SubHeading: "You get a Comprehensive Digital Solution",
        Heading: "Not Just a Website"
      },
      Items: [
        {
          id: 1,
          strong: "Satisfaction Assurance",
          text: "- Evaluate our website and online marketing program offerings, and if not entirely satisfied, we'll address your concerns promptly."
        },
        {
          id: 2,
          strong: "Professional Graphic Design Services",
          text: "- Access our design department for print and online marketing needs, including business cards, brochures, door hangers, and more."
        },
        {
          id: 3,
          strong: "Fixed Price Assurance",
          text: "- Benefit from a Fixed Price Guarantee, ensuring your online marketing program rates remain unchanged for at least three years."
        },
        {
          id: 4,
          strong: "Timely Website Updates",
          text: "- Request updates for your website, and we'll ensure they're implemented promptly, typically within 2 business days for most requests."
        },
        {
          id: 5,
          strong: "Effective Organic Search Engine Optimization",
          text: "- Utilize tailored content and preparation for organic SEO to enhance your online visibility for potential customers."
        },
        {
          id: 6,
          strong: "Local Optimization &amp; Citations",
          text: "- Ensure search engines and potential customers locate your business with strategic citations and local SEO tactics"
        },
        {
          id: 7,
          strong: "Automated Review Management System",
          text: "- In today's digital landscape, online reviews are crucial. Our program enables you to automatically monitor and actively solicit new reviews."
        },
        {
          id: 8,
          strong: "Transparent Billing",
          text: "- No Contracts, Build Fees, or Hidden Charges - We believe in earning your loyalty through satisfaction, and all our online marketing services operate on a month-to-month basis."
        },
        {
          id: 9,
          strong: "Strategic Marketing Session",
          text: "- Engage in a comprehensive session with a marketing consultant to develop a 12-month marketing plan tailored to your company."
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BasicSection = __nuxt_component_0;
  const _component_GridTwoColumns = __nuxt_component_0$1;
  const _component_ParagraphSubHeading = __nuxt_component_2;
  const _component_HeadlineTwo = __nuxt_component_1;
  const _component_ParagraphDescription = __nuxt_component_2$1;
  const _component_BasicList = __nuxt_component_3;
  const _component_BasicListItem = __nuxt_component_6;
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "container mx-auto mt-20" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_GridTwoColumns, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="p-4 sm:p-8"${_scopeId2}>`);
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
              _push3(ssrRenderComponent(_component_ParagraphDescription, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($data.IntroText.description)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($data.IntroText.description), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<img${ssrRenderAttr("src", _imports_0)}${_scopeId2}></div><div class="p-4 sm:p-8"${_scopeId2}><div class="container mx-auto p-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_BasicList, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<!--[-->`);
                    ssrRenderList($data.Items, (Item) => {
                      _push4(ssrRenderComponent(_component_BasicListItem, {
                        key: Item.id,
                        strong: Item.strong,
                        text: Item.text
                      }, null, _parent4, _scopeId3));
                    });
                    _push4(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList($data.Items, (Item) => {
                        return openBlock(), createBlock(_component_BasicListItem, {
                          key: Item.id,
                          strong: Item.strong,
                          text: Item.text
                        }, null, 8, ["strong", "text"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
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
                  createVNode(_component_ParagraphDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($data.IntroText.description), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("img", { src: _imports_0 })
                ]),
                createVNode("div", { class: "p-4 sm:p-8" }, [
                  createVNode("div", { class: "container mx-auto p-4" }, [
                    createVNode(_component_BasicList, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList($data.Items, (Item) => {
                          return openBlock(), createBlock(_component_BasicListItem, {
                            key: Item.id,
                            strong: Item.strong,
                            text: Item.text
                          }, null, 8, ["strong", "text"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ])
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
                createVNode(_component_ParagraphDescription, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($data.IntroText.description), 1)
                  ]),
                  _: 1
                }),
                createVNode("img", { src: _imports_0 })
              ]),
              createVNode("div", { class: "p-4 sm:p-8" }, [
                createVNode("div", { class: "container mx-auto p-4" }, [
                  createVNode(_component_BasicList, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList($data.Items, (Item) => {
                        return openBlock(), createBlock(_component_BasicListItem, {
                          key: Item.id,
                          strong: Item.strong,
                          text: Item.text
                        }, null, 8, ["strong", "text"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/GetStarted/NotJustaWebsite.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NotJustaWebsite = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  NotJustaWebsite as default
};
//# sourceMappingURL=NotJustaWebsite-CVB1lVhg.js.map
