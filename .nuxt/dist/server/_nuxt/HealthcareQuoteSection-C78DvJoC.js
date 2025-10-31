import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_1 from "./CardDeckThreeColumns-DgZvvfqM.js";
import __nuxt_component_2 from "./QuoteCard-Dkk-0T0M.js";
import __nuxt_component_3 from "./IndividualFamilyHealthcareInsuranceQuoteForm-BH4vQm2W.js";
import __nuxt_component_3$1 from "./BasicList-CPgeoXnc.js";
import __nuxt_component_4 from "./ListItems-DfeHrqGv.js";
import __nuxt_component_2$1 from "./ParagraphDescription-L8QyXcbq.js";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
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
      Featured: [
        {
          id: 1,
          title: "Individual & Family",
          description: "Ensure your family's future with our personalized insurance plans. From life to health coverage, we tailor solutions to meet your needs, providing security and peace of mind.",
          to: "/get-started",
          text: "Get Started Now!"
        },
        {
          id: 2,
          title: "Senior",
          description: "Navigate retirement confidently with our senior insurance plans. From Medicare to long-term care coverage, we offer personalized support for your golden years.",
          to: "/get-started",
          text: "Get Started Now!"
        },
        {
          id: 3,
          title: "Business",
          description: "Protect your business with our tailored insurance solutions. From liability coverage to employee benefits, we safeguard your interests and promote growth.",
          to: "/get-started",
          text: "Get Started Now!"
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
  const _component_CardDeckThreeColumns = __nuxt_component_1;
  const _component_QuoteCard = __nuxt_component_2;
  const _component_IndividualFamilyHealthcareInsuranceQuoteForm = __nuxt_component_3;
  const _component_BasicList = __nuxt_component_3$1;
  const _component_ListItems = __nuxt_component_4;
  const _component_ParagraphDescription = __nuxt_component_2$1;
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "container mx-auto mt-20" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CardDeckThreeColumns, { class: "hidden sm:block" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_QuoteCard, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="block overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100"${_scopeId3}><div class="p-4 bg-blue-400 dark:bg-amber-400"${_scopeId3}><h2 class="mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white"${_scopeId3}> A.C.A Quote </h2></div>`);
                    _push4(ssrRenderComponent(_component_IndividualFamilyHealthcareInsuranceQuoteForm, { tag: "HealthInsuranceACAQuote" }, null, _parent4, _scopeId3));
                    _push4(`<div class="text-md p-3 mb-4"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_BasicList, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_ListItems, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`40 yr Male, 40 yr female, 2 children`);
                              } else {
                                return [
                                  createTextVNode("40 yr Male, 40 yr female, 2 children")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ListItems, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Deductible: $0`);
                              } else {
                                return [
                                  createTextVNode("Deductible: $0")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ListItems, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`PCP Copay: $8`);
                              } else {
                                return [
                                  createTextVNode("PCP Copay: $8")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ListItems, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Specialist Copay: $15`);
                              } else {
                                return [
                                  createTextVNode("Specialist Copay: $15")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ListItems, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`RX copay: $8`);
                              } else {
                                return [
                                  createTextVNode("RX copay: $8")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("40 yr Male, 40 yr female, 2 children")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Deductible: $0")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("PCP Copay: $8")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Specialist Copay: $15")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("RX copay: $8")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ParagraphDescription, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Plan Premium with tax credit = $145.77`);
                        } else {
                          return [
                            createTextVNode("Plan Premium with tax credit = $145.77")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div><div${_scopeId3}></div></div><div class="block overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100"${_scopeId3}><div class="p-4 bg-blue-400 dark:bg-amber-400"${_scopeId3}><h2 class="mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white"${_scopeId3}> Short Term Medical </h2></div>`);
                    _push4(ssrRenderComponent(_component_IndividualFamilyHealthcareInsuranceQuoteForm, { tag: "HealthInsuranceShortTermMedical" }, null, _parent4, _scopeId3));
                    _push4(`<div class="text-md p-3 mb-4"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_BasicList, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_ListItems, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`40 yr Male, 40 yr female, 2 children`);
                              } else {
                                return [
                                  createTextVNode("40 yr Male, 40 yr female, 2 children")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ListItems, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Deductible: $2000`);
                              } else {
                                return [
                                  createTextVNode("Deductible: $2000")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ListItems, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Doctor Co-pays $30/$60`);
                              } else {
                                return [
                                  createTextVNode("Doctor Co-pays $30/$60")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ListItems, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`RX: $10 Co-pay`);
                              } else {
                                return [
                                  createTextVNode("RX: $10 Co-pay")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ListItems, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Up to 36 months of Coverage`);
                              } else {
                                return [
                                  createTextVNode("Up to 36 months of Coverage")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ListItems, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Teledoc Included`);
                              } else {
                                return [
                                  createTextVNode("Teledoc Included")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("40 yr Male, 40 yr female, 2 children")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Deductible: $2000")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Doctor Co-pays $30/$60")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("RX: $10 Co-pay")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Up to 36 months of Coverage")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Teledoc Included")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ParagraphDescription, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Short Term Silver Plan $369.80`);
                        } else {
                          return [
                            createTextVNode("Short Term Silver Plan $369.80")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div><div${_scopeId3}></div></div><div class="block overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100"${_scopeId3}><div class="p-4 bg-blue-400 dark:bg-amber-400"${_scopeId3}><h2 class="mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white"${_scopeId3}> Indemnity </h2></div>`);
                    _push4(ssrRenderComponent(_component_IndividualFamilyHealthcareInsuranceQuoteForm, { tag: "HealthInsuranceIndemnity" }, null, _parent4, _scopeId3));
                    _push4(`<div class="text-md p-3 mb-4"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_BasicList, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_ListItems, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`40 yr Male, 40 yr female, 2 children`);
                              } else {
                                return [
                                  createTextVNode("40 yr Male, 40 yr female, 2 children")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ListItems, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Hospitalization = $3000 per day`);
                              } else {
                                return [
                                  createTextVNode("Hospitalization = $3000 per day")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ListItems, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Surgery 100% *restrictions apply`);
                              } else {
                                return [
                                  createTextVNode("Surgery 100% *restrictions apply")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ListItems, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Emergency Room = $125 per/day`);
                              } else {
                                return [
                                  createTextVNode("Emergency Room = $125 per/day")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ListItems, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Doctors Office Visit = $ 100 per visit`);
                              } else {
                                return [
                                  createTextVNode("Doctors Office Visit = $ 100 per visit")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ListItems, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Teledoc Included`);
                              } else {
                                return [
                                  createTextVNode("Teledoc Included")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("40 yr Male, 40 yr female, 2 children")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Hospitalization = $3000 per day")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Surgery 100% *restrictions apply")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Emergency Room = $125 per/day")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Doctors Office Visit = $ 100 per visit")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Teledoc Included")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ParagraphDescription, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Plan Premium $268.00`);
                        } else {
                          return [
                            createTextVNode("Plan Premium $268.00")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div><div${_scopeId3}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "block overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100" }, [
                        createVNode("div", { class: "p-4 bg-blue-400 dark:bg-amber-400" }, [
                          createVNode("h2", { class: "mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white" }, " A.C.A Quote ")
                        ]),
                        createVNode(_component_IndividualFamilyHealthcareInsuranceQuoteForm, { tag: "HealthInsuranceACAQuote" }),
                        createVNode("div", { class: "text-md p-3 mb-4" }, [
                          createVNode(_component_BasicList, null, {
                            default: withCtx(() => [
                              createVNode(_component_ListItems, null, {
                                default: withCtx(() => [
                                  createTextVNode("40 yr Male, 40 yr female, 2 children")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ListItems, null, {
                                default: withCtx(() => [
                                  createTextVNode("Deductible: $0")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ListItems, null, {
                                default: withCtx(() => [
                                  createTextVNode("PCP Copay: $8")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ListItems, null, {
                                default: withCtx(() => [
                                  createTextVNode("Specialist Copay: $15")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ListItems, null, {
                                default: withCtx(() => [
                                  createTextVNode("RX copay: $8")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ParagraphDescription, null, {
                            default: withCtx(() => [
                              createTextVNode("Plan Premium with tax credit = $145.77")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div")
                      ]),
                      createVNode("div", { class: "block overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100" }, [
                        createVNode("div", { class: "p-4 bg-blue-400 dark:bg-amber-400" }, [
                          createVNode("h2", { class: "mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white" }, " Short Term Medical ")
                        ]),
                        createVNode(_component_IndividualFamilyHealthcareInsuranceQuoteForm, { tag: "HealthInsuranceShortTermMedical" }),
                        createVNode("div", { class: "text-md p-3 mb-4" }, [
                          createVNode(_component_BasicList, null, {
                            default: withCtx(() => [
                              createVNode(_component_ListItems, null, {
                                default: withCtx(() => [
                                  createTextVNode("40 yr Male, 40 yr female, 2 children")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ListItems, null, {
                                default: withCtx(() => [
                                  createTextVNode("Deductible: $2000")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ListItems, null, {
                                default: withCtx(() => [
                                  createTextVNode("Doctor Co-pays $30/$60")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ListItems, null, {
                                default: withCtx(() => [
                                  createTextVNode("RX: $10 Co-pay")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ListItems, null, {
                                default: withCtx(() => [
                                  createTextVNode("Up to 36 months of Coverage")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ListItems, null, {
                                default: withCtx(() => [
                                  createTextVNode("Teledoc Included")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ParagraphDescription, null, {
                            default: withCtx(() => [
                              createTextVNode("Short Term Silver Plan $369.80")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div")
                      ]),
                      createVNode("div", { class: "block overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100" }, [
                        createVNode("div", { class: "p-4 bg-blue-400 dark:bg-amber-400" }, [
                          createVNode("h2", { class: "mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white" }, " Indemnity ")
                        ]),
                        createVNode(_component_IndividualFamilyHealthcareInsuranceQuoteForm, { tag: "HealthInsuranceIndemnity" }),
                        createVNode("div", { class: "text-md p-3 mb-4" }, [
                          createVNode(_component_BasicList, null, {
                            default: withCtx(() => [
                              createVNode(_component_ListItems, null, {
                                default: withCtx(() => [
                                  createTextVNode("40 yr Male, 40 yr female, 2 children")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ListItems, null, {
                                default: withCtx(() => [
                                  createTextVNode("Hospitalization = $3000 per day")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ListItems, null, {
                                default: withCtx(() => [
                                  createTextVNode("Surgery 100% *restrictions apply")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ListItems, null, {
                                default: withCtx(() => [
                                  createTextVNode("Emergency Room = $125 per/day")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ListItems, null, {
                                default: withCtx(() => [
                                  createTextVNode("Doctors Office Visit = $ 100 per visit")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ListItems, null, {
                                default: withCtx(() => [
                                  createTextVNode("Teledoc Included")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ParagraphDescription, null, {
                            default: withCtx(() => [
                              createTextVNode("Plan Premium $268.00")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_QuoteCard, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "block overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100" }, [
                      createVNode("div", { class: "p-4 bg-blue-400 dark:bg-amber-400" }, [
                        createVNode("h2", { class: "mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white" }, " A.C.A Quote ")
                      ]),
                      createVNode(_component_IndividualFamilyHealthcareInsuranceQuoteForm, { tag: "HealthInsuranceACAQuote" }),
                      createVNode("div", { class: "text-md p-3 mb-4" }, [
                        createVNode(_component_BasicList, null, {
                          default: withCtx(() => [
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("40 yr Male, 40 yr female, 2 children")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Deductible: $0")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("PCP Copay: $8")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Specialist Copay: $15")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("RX copay: $8")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ParagraphDescription, null, {
                          default: withCtx(() => [
                            createTextVNode("Plan Premium with tax credit = $145.77")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div")
                    ]),
                    createVNode("div", { class: "block overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100" }, [
                      createVNode("div", { class: "p-4 bg-blue-400 dark:bg-amber-400" }, [
                        createVNode("h2", { class: "mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white" }, " Short Term Medical ")
                      ]),
                      createVNode(_component_IndividualFamilyHealthcareInsuranceQuoteForm, { tag: "HealthInsuranceShortTermMedical" }),
                      createVNode("div", { class: "text-md p-3 mb-4" }, [
                        createVNode(_component_BasicList, null, {
                          default: withCtx(() => [
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("40 yr Male, 40 yr female, 2 children")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Deductible: $2000")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Doctor Co-pays $30/$60")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("RX: $10 Co-pay")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Up to 36 months of Coverage")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Teledoc Included")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ParagraphDescription, null, {
                          default: withCtx(() => [
                            createTextVNode("Short Term Silver Plan $369.80")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div")
                    ]),
                    createVNode("div", { class: "block overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100" }, [
                      createVNode("div", { class: "p-4 bg-blue-400 dark:bg-amber-400" }, [
                        createVNode("h2", { class: "mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white" }, " Indemnity ")
                      ]),
                      createVNode(_component_IndividualFamilyHealthcareInsuranceQuoteForm, { tag: "HealthInsuranceIndemnity" }),
                      createVNode("div", { class: "text-md p-3 mb-4" }, [
                        createVNode(_component_BasicList, null, {
                          default: withCtx(() => [
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("40 yr Male, 40 yr female, 2 children")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Hospitalization = $3000 per day")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Surgery 100% *restrictions apply")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Emergency Room = $125 per/day")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Doctors Office Visit = $ 100 per visit")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ListItems, null, {
                              default: withCtx(() => [
                                createTextVNode("Teledoc Included")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ParagraphDescription, null, {
                          default: withCtx(() => [
                            createTextVNode("Plan Premium $268.00")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div")
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CardDeckThreeColumns, { class: "hidden sm:block" }, {
            default: withCtx(() => [
              createVNode(_component_QuoteCard, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "block overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100" }, [
                    createVNode("div", { class: "p-4 bg-blue-400 dark:bg-amber-400" }, [
                      createVNode("h2", { class: "mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white" }, " A.C.A Quote ")
                    ]),
                    createVNode(_component_IndividualFamilyHealthcareInsuranceQuoteForm, { tag: "HealthInsuranceACAQuote" }),
                    createVNode("div", { class: "text-md p-3 mb-4" }, [
                      createVNode(_component_BasicList, null, {
                        default: withCtx(() => [
                          createVNode(_component_ListItems, null, {
                            default: withCtx(() => [
                              createTextVNode("40 yr Male, 40 yr female, 2 children")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ListItems, null, {
                            default: withCtx(() => [
                              createTextVNode("Deductible: $0")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ListItems, null, {
                            default: withCtx(() => [
                              createTextVNode("PCP Copay: $8")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ListItems, null, {
                            default: withCtx(() => [
                              createTextVNode("Specialist Copay: $15")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ListItems, null, {
                            default: withCtx(() => [
                              createTextVNode("RX copay: $8")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ParagraphDescription, null, {
                        default: withCtx(() => [
                          createTextVNode("Plan Premium with tax credit = $145.77")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div")
                  ]),
                  createVNode("div", { class: "block overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100" }, [
                    createVNode("div", { class: "p-4 bg-blue-400 dark:bg-amber-400" }, [
                      createVNode("h2", { class: "mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white" }, " Short Term Medical ")
                    ]),
                    createVNode(_component_IndividualFamilyHealthcareInsuranceQuoteForm, { tag: "HealthInsuranceShortTermMedical" }),
                    createVNode("div", { class: "text-md p-3 mb-4" }, [
                      createVNode(_component_BasicList, null, {
                        default: withCtx(() => [
                          createVNode(_component_ListItems, null, {
                            default: withCtx(() => [
                              createTextVNode("40 yr Male, 40 yr female, 2 children")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ListItems, null, {
                            default: withCtx(() => [
                              createTextVNode("Deductible: $2000")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ListItems, null, {
                            default: withCtx(() => [
                              createTextVNode("Doctor Co-pays $30/$60")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ListItems, null, {
                            default: withCtx(() => [
                              createTextVNode("RX: $10 Co-pay")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ListItems, null, {
                            default: withCtx(() => [
                              createTextVNode("Up to 36 months of Coverage")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ListItems, null, {
                            default: withCtx(() => [
                              createTextVNode("Teledoc Included")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ParagraphDescription, null, {
                        default: withCtx(() => [
                          createTextVNode("Short Term Silver Plan $369.80")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div")
                  ]),
                  createVNode("div", { class: "block overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100" }, [
                    createVNode("div", { class: "p-4 bg-blue-400 dark:bg-amber-400" }, [
                      createVNode("h2", { class: "mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white" }, " Indemnity ")
                    ]),
                    createVNode(_component_IndividualFamilyHealthcareInsuranceQuoteForm, { tag: "HealthInsuranceIndemnity" }),
                    createVNode("div", { class: "text-md p-3 mb-4" }, [
                      createVNode(_component_BasicList, null, {
                        default: withCtx(() => [
                          createVNode(_component_ListItems, null, {
                            default: withCtx(() => [
                              createTextVNode("40 yr Male, 40 yr female, 2 children")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ListItems, null, {
                            default: withCtx(() => [
                              createTextVNode("Hospitalization = $3000 per day")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ListItems, null, {
                            default: withCtx(() => [
                              createTextVNode("Surgery 100% *restrictions apply")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ListItems, null, {
                            default: withCtx(() => [
                              createTextVNode("Emergency Room = $125 per/day")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ListItems, null, {
                            default: withCtx(() => [
                              createTextVNode("Doctors Office Visit = $ 100 per visit")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ListItems, null, {
                            default: withCtx(() => [
                              createTextVNode("Teledoc Included")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ParagraphDescription, null, {
                        default: withCtx(() => [
                          createTextVNode("Plan Premium $268.00")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div")
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HealthInsurancePage/HealthcareQuoteSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HealthcareQuoteSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HealthcareQuoteSection as default
};
//# sourceMappingURL=HealthcareQuoteSection-C78DvJoC.js.map
