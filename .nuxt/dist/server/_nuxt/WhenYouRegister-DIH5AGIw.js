import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_0$1 from "./GridTwoColumns-CDZGjEfF.js";
import __nuxt_component_2 from "./ParagraphSubHeading-CLmFbguh.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_2$1 from "./ParagraphDescription-L8QyXcbq.js";
import __nuxt_component_5 from "./OrderedList-BRdI7HjA.js";
import __nuxt_component_4 from "./ListItems-DfeHrqGv.js";
import __nuxt_component_7 from "./ListItemHeading-msjL7ThM.js";
import __nuxt_component_8 from "./ListItemParagraph-Cgavl4y4.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "" + __publicAssetsURL("img/When-You-Register.jpg");
const _sfc_main = {
  name: "Industries We Serve",
  data() {
    return {
      IntroText: {
        SubHeading: "What Takes Place",
        Heading: "When You Register",
        description: "Within a single business day after enrolling in our program, we will reach out to guide you through our process and inquire about the specific website you desire."
      },
      ListItems: [
        {
          id: 1,
          ListHeading: "You Fill Out Our Information Packet",
          ListParagraph: "We will send you a information packet once your order is processed to complete. Along with the completed information packet, we will need all of your logos, pictures, and content that you want to use on your site."
        },
        {
          id: 2,
          ListHeading: "Consultation",
          ListParagraph: "We will contact you to go over your information packet and gather any other personalized company details for your website."
        },
        {
          id: 3,
          ListHeading: "Website Layout",
          ListParagraph: "We will design a 1-page layout of your site within 72 hours of receiving your information packet and logo."
        },
        {
          id: 4,
          ListHeading: "Completed Website",
          ListParagraph: "Once the layout is approved, we will move forward and complete the website. Generally, websites are built within a 3 to 4 week  timeframe, but are subject to change based on circumstances such as holidays."
        },
        {
          id: 5,
          ListHeading: "Website Launch",
          ListParagraph: "Once your website is live, you can review and make any changes needed to the site."
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
  const _component_OrderedList = __nuxt_component_5;
  const _component_ListItems = __nuxt_component_4;
  const _component_ListItemHeading = __nuxt_component_7;
  const _component_ListItemParagraph = __nuxt_component_8;
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
              _push3(ssrRenderComponent(_component_OrderedList, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<!--[-->`);
                    ssrRenderList($data.ListItems, (ListItem) => {
                      _push4(ssrRenderComponent(_component_ListItems, {
                        key: ListItem.id
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_ListItemHeading, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate(ListItem.ListHeading)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(ListItem.ListHeading), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(_component_ListItemParagraph, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate(ListItem.ListParagraph)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(ListItem.ListParagraph), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_ListItemHeading, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(ListItem.ListHeading), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_ListItemParagraph, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(ListItem.ListParagraph), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    });
                    _push4(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList($data.ListItems, (ListItem) => {
                        return openBlock(), createBlock(_component_ListItems, {
                          key: ListItem.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ListItemHeading, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(ListItem.ListHeading), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_ListItemParagraph, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(ListItem.ListParagraph), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="p-4 sm:p-8"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)}${_scopeId2}></div>`);
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
                  createVNode(_component_OrderedList, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList($data.ListItems, (ListItem) => {
                        return openBlock(), createBlock(_component_ListItems, {
                          key: ListItem.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ListItemHeading, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(ListItem.ListHeading), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_ListItemParagraph, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(ListItem.ListParagraph), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "p-4 sm:p-8" }, [
                  createVNode("img", { src: _imports_0 })
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
                createVNode(_component_OrderedList, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList($data.ListItems, (ListItem) => {
                      return openBlock(), createBlock(_component_ListItems, {
                        key: ListItem.id
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ListItemHeading, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(ListItem.ListHeading), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_ListItemParagraph, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(ListItem.ListParagraph), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "p-4 sm:p-8" }, [
                createVNode("img", { src: _imports_0 })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/GetStarted/WhenYouRegister.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WhenYouRegister = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  WhenYouRegister as default
};
//# sourceMappingURL=WhenYouRegister-DIH5AGIw.js.map
