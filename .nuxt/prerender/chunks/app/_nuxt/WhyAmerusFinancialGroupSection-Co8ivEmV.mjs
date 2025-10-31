import __nuxt_component_0 from './BasicSection-D2ZROhe4.mjs';
import __nuxt_component_1 from './HeadlineTwo-Dj2O3Ylt.mjs';
import __nuxt_component_2 from './ParagraphDescription-L8QyXcbq.mjs';
import __nuxt_component_3 from './BasicList-CPgeoXnc.mjs';
import __nuxt_component_4 from './ListItems-DfeHrqGv.mjs';
import __nuxt_component_5 from './GridThreeColumns-H1qcolhg.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

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
        Headline: "Why Amerus Financial Group ?",
        description: "Amerus Financial Group operates as an independant insurance agency with a focus on Health Insurance, Annuities, Life Insurance, and Employee Benefits. Our goal is to forge lasting connections with our clients, a commitment facilitated by our outstanding customer service. In line with this, we proudly collaborate with premier carriers in the industry, specifically selecting those whose business ideals align seamlessly with ours."
      },
      Services: [
        {
          title: "Fully Insured Health Insurance",
          excerpt: "This is simply an insurance program that all of the health claims risk is assumed by the Insurance Company and typically is utilized by groups that have health concerns or have an older workforce. Over the past several years companies have trended away from these plans opting instead to go with self funded or level funded plans.",
          image: "/images/FamilyAndIndividual.jpg"
        },
        {
          title: "Self Funded Health Insurance Plans",
          excerpt: "A Self Funded, or Self-Insured plan, is one in which the employer assumes the financial risk for providing health care benefits to its employees. In practical terms, Self-Insured employers pay for claims out-of-pocket as they are presented instead of paying a pre-determined premium to an insurance carrier for a Fully Insured plan. Typically, a self-insured employer will set up a special trust fund to earmark money (corporate and employee contributions) to pay incurred claims. These plans are usually sold to large organizations that benefit from having enough insured to mitigate the financial risks associated with the plan.",
          image: "/images/Senior-Solutions.jpg"
        },
        {
          title: "Level Funded Health Insurance Plans",
          excerpt: "A level funded health plan (also known as a partially self-funded plan) is a type of health insurance plan that combines the cost savings and customization of self-funding with the financial safety and predictability of fully funded plans. These plans have become increasingly popular in recent years for small business owners who want the benefits of a self funded program without any of the risk. Small business owners have experienced huge savings compared to traditional fully insured plans.",
          image: "/images/Business-Solutions.jpg"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BasicSection = __nuxt_component_0;
  const _component_HeadlineTwo = __nuxt_component_1;
  const _component_ParagraphDescription = __nuxt_component_2;
  const _component_BasicList = __nuxt_component_3;
  const _component_ListItems = __nuxt_component_4;
  const _component_GridThreeColumns = __nuxt_component_5;
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "container mx-auto mt-20" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-4 sm:px-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_HeadlineTwo, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($data.IntroText.Headline)}`);
            } else {
              return [
                createTextVNode(toDisplayString($data.IntroText.Headline), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ParagraphDescription, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Amerus Financial Group is an independent insurance brokerage firm specializing in Health Insurance, Annuities, Life Insurance and Employee Benefits products and services for successful businesses, individuals and their families. AFG strives to build long-term relationships with clients by providing high levels of customer service and by representing the industry\u2019s top carriers whose business philosophies complement our own.`);
            } else {
              return [
                createTextVNode("Amerus Financial Group is an independent insurance brokerage firm specializing in Health Insurance, Annuities, Life Insurance and Employee Benefits products and services for successful businesses, individuals and their families. AFG strives to build long-term relationships with clients by providing high levels of customer service and by representing the industry\u2019s top carriers whose business philosophies complement our own.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ParagraphDescription, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Amerus Financial Group is an Insurance Agency that has been serving our 4000 clients for more than 20 years. Amerus specializes in Innovative Health Insurance Solutions for Individuals and Business. We are based in Lakeland, Fl with agents in 13 states. Our agents are highly trained proffesionals that understand the dynamics of the ever changing. Health Insurance Marketplace. Give us a call today at +1-800-596-1474 you will be you did.`);
            } else {
              return [
                createTextVNode("Amerus Financial Group is an Insurance Agency that has been serving our 4000 clients for more than 20 years. Amerus specializes in Innovative Health Insurance Solutions for Individuals and Business. We are based in Lakeland, Fl with agents in 13 states. Our agents are highly trained proffesionals that understand the dynamics of the ever changing. Health Insurance Marketplace. Give us a call today at +1-800-596-1474 you will be you did.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BasicList, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Our agency has the knowledge and experience to provide innovative solutions for your company.`);
                  } else {
                    return [
                      createTextVNode("Our agency has the knowledge and experience to provide innovative solutions for your company.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Our commitment to customer service affords you peace of mind knowing that if any problems arise we will deal directly with your employees and take the burden from your shoulders.`);
                  } else {
                    return [
                      createTextVNode("Our commitment to customer service affords you peace of mind knowing that if any problems arise we will deal directly with your employees and take the burden from your shoulders.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`We offer a state of the Art Enrollment system as well as professional agent to guide your employees through the enrollment process.`);
                  } else {
                    return [
                      createTextVNode("We offer a state of the Art Enrollment system as well as professional agent to guide your employees through the enrollment process.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`We are committed to providing you the support and guidence you need to navigate through the world of employee benefits.`);
                  } else {
                    return [
                      createTextVNode("We are committed to providing you the support and guidence you need to navigate through the world of employee benefits.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Our agency has the knowledge and experience to provide innovative solutions for your company.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Our commitment to customer service affords you peace of mind knowing that if any problems arise we will deal directly with your employees and take the burden from your shoulders.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("We offer a state of the Art Enrollment system as well as professional agent to guide your employees through the enrollment process.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("We are committed to providing you the support and guidence you need to navigate through the world of employee benefits.")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_GridThreeColumns, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($data.Services, (Service) => {
                _push3(`<div class="mx-auto my-4 bg-indigo-300 dark:bg-indigo-900 shadow-lg rounded-lg"${_scopeId2}><div class="px-6 py-5"${_scopeId2}><div class="flex items-start"${_scopeId2}><div class="flex-grow truncate"${_scopeId2}><div class="w-full sm:flex justify-between items-center mb-3"${_scopeId2}><h2 class="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0"${_scopeId2}>${ssrInterpolate(Service.title)}</h2></div><div class="flex items-end justify-between whitespace-normal"${_scopeId2}><div class="max-w-md text-indigo-100"${_scopeId2}><p class="mb-2"${_scopeId2}>${ssrInterpolate(Service.excerpt)}</p></div></div></div></div></div></div>`);
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($data.Services, (Service) => {
                  return openBlock(), createBlock("div", {
                    class: "mx-auto my-4 bg-indigo-300 dark:bg-indigo-900 shadow-lg rounded-lg",
                    key: Service.title
                  }, [
                    createVNode("div", { class: "px-6 py-5" }, [
                      createVNode("div", { class: "flex items-start" }, [
                        createVNode("div", { class: "flex-grow truncate" }, [
                          createVNode("div", { class: "w-full sm:flex justify-between items-center mb-3" }, [
                            createVNode("h2", { class: "text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0" }, toDisplayString(Service.title), 1)
                          ]),
                          createVNode("div", { class: "flex items-end justify-between whitespace-normal" }, [
                            createVNode("div", { class: "max-w-md text-indigo-100" }, [
                              createVNode("p", { class: "mb-2" }, toDisplayString(Service.excerpt), 1)
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "px-4 sm:px-8" }, [
            createVNode(_component_HeadlineTwo, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($data.IntroText.Headline), 1)
              ]),
              _: 1
            }),
            createVNode(_component_ParagraphDescription, null, {
              default: withCtx(() => [
                createTextVNode("Amerus Financial Group is an independent insurance brokerage firm specializing in Health Insurance, Annuities, Life Insurance and Employee Benefits products and services for successful businesses, individuals and their families. AFG strives to build long-term relationships with clients by providing high levels of customer service and by representing the industry\u2019s top carriers whose business philosophies complement our own.")
              ]),
              _: 1
            }),
            createVNode(_component_ParagraphDescription, null, {
              default: withCtx(() => [
                createTextVNode("Amerus Financial Group is an Insurance Agency that has been serving our 4000 clients for more than 20 years. Amerus specializes in Innovative Health Insurance Solutions for Individuals and Business. We are based in Lakeland, Fl with agents in 13 states. Our agents are highly trained proffesionals that understand the dynamics of the ever changing. Health Insurance Marketplace. Give us a call today at +1-800-596-1474 you will be you did.")
              ]),
              _: 1
            }),
            createVNode(_component_BasicList, null, {
              default: withCtx(() => [
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Our agency has the knowledge and experience to provide innovative solutions for your company.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Our commitment to customer service affords you peace of mind knowing that if any problems arise we will deal directly with your employees and take the burden from your shoulders.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("We offer a state of the Art Enrollment system as well as professional agent to guide your employees through the enrollment process.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("We are committed to providing you the support and guidence you need to navigate through the world of employee benefits.")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createVNode(_component_GridThreeColumns, null, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($data.Services, (Service) => {
                return openBlock(), createBlock("div", {
                  class: "mx-auto my-4 bg-indigo-300 dark:bg-indigo-900 shadow-lg rounded-lg",
                  key: Service.title
                }, [
                  createVNode("div", { class: "px-6 py-5" }, [
                    createVNode("div", { class: "flex items-start" }, [
                      createVNode("div", { class: "flex-grow truncate" }, [
                        createVNode("div", { class: "w-full sm:flex justify-between items-center mb-3" }, [
                          createVNode("h2", { class: "text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0" }, toDisplayString(Service.title), 1)
                        ]),
                        createVNode("div", { class: "flex items-end justify-between whitespace-normal" }, [
                          createVNode("div", { class: "max-w-md text-indigo-100" }, [
                            createVNode("p", { class: "mb-2" }, toDisplayString(Service.excerpt), 1)
                          ])
                        ])
                      ])
                    ])
                  ])
                ]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/GroupHealthPage/WhyAmerusFinancialGroupSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WhyAmerusFinancialGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { WhyAmerusFinancialGroupSection as default };
//# sourceMappingURL=WhyAmerusFinancialGroupSection-Co8ivEmV.mjs.map
