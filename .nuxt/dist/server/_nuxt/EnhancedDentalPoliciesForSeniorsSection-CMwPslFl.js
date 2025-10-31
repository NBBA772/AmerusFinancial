import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_2 from "./ParagraphDescription-L8QyXcbq.js";
import __nuxt_component_3 from "./BasicList-CPgeoXnc.js";
import __nuxt_component_4 from "./ListItems-DfeHrqGv.js";
import { u as useColorMode } from "./composables-DGJynRPd.js";
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
      colorMode: useColorMode(),
      IntroText: {
        Headline: "ENHANCED DENTAL POLICIES FOR SENIORS",
        description: "Some dental insurance plans cover a percentage of the costs for services beyond routine exams and fillings. Some examples include (but aren’t limited to):"
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
  const _component_ParagraphDescription = __nuxt_component_2;
  const _component_BasicList = __nuxt_component_3;
  const _component_ListItems = __nuxt_component_4;
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "container mx-auto mt-20" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="p-4 sm:p-8"${_scopeId}>`);
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
              _push3(` You can purchase an individual dental insurance plan, for premiums typically ranging from $20-$60 a month. Standard policies commonly cover these routine procedures at a family dentist office. `);
            } else {
              return [
                createTextVNode(" You can purchase an individual dental insurance plan, for premiums typically ranging from $20-$60 a month. Standard policies commonly cover these routine procedures at a family dentist office. ")
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
                    _push4(`Endodontics: Root canals, or the removal of a tooth’s decayed or diseased pulp, are the most common use of endodontics. This may require a specialist.`);
                  } else {
                    return [
                      createTextVNode("Endodontics: Root canals, or the removal of a tooth’s decayed or diseased pulp, are the most common use of endodontics. This may require a specialist.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Periodontics: Periodontal disease comes in many forms and could end up destroying supporting bones around the teeth. Treatment may include the placement of dental implants and treatment for inflammation. A specialist is often required.`);
                  } else {
                    return [
                      createTextVNode("Periodontics: Periodontal disease comes in many forms and could end up destroying supporting bones around the teeth. Treatment may include the placement of dental implants and treatment for inflammation. A specialist is often required.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Dentures: This typically requires many extractions, making it a major procedure, possibly involving multiple visits. Certain family dentists now fit patients for dentures. Specialty offices are more familiar with the process and sometimes offer a smoother process.`);
                  } else {
                    return [
                      createTextVNode("Dentures: This typically requires many extractions, making it a major procedure, possibly involving multiple visits. Certain family dentists now fit patients for dentures. Specialty offices are more familiar with the process and sometimes offer a smoother process.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Implants: Some adults who have lost a small number of teeth due to an accident or decay might get dental implants. Implants may eliminate the need for a bridge since the implant looks, feels, and works like a regular tooth. An oral surgeon rather than your family dentist typically does this procedure.`);
                  } else {
                    return [
                      createTextVNode("Implants: Some adults who have lost a small number of teeth due to an accident or decay might get dental implants. Implants may eliminate the need for a bridge since the implant looks, feels, and works like a regular tooth. An oral surgeon rather than your family dentist typically does this procedure.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Orthodontia: This type of service uses braces to align crooked teeth. Most family dentists offer orthodontia.`);
                  } else {
                    return [
                      createTextVNode("Orthodontia: This type of service uses braces to align crooked teeth. Most family dentists offer orthodontia.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Cosmetic services: Bonding, whitening, and veneers are sometimes covered under certain dental policies. Most family dentists offer whitening.`);
                  } else {
                    return [
                      createTextVNode("Cosmetic services: Bonding, whitening, and veneers are sometimes covered under certain dental policies. Most family dentists offer whitening.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Endodontics: Root canals, or the removal of a tooth’s decayed or diseased pulp, are the most common use of endodontics. This may require a specialist.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Periodontics: Periodontal disease comes in many forms and could end up destroying supporting bones around the teeth. Treatment may include the placement of dental implants and treatment for inflammation. A specialist is often required.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Dentures: This typically requires many extractions, making it a major procedure, possibly involving multiple visits. Certain family dentists now fit patients for dentures. Specialty offices are more familiar with the process and sometimes offer a smoother process.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Implants: Some adults who have lost a small number of teeth due to an accident or decay might get dental implants. Implants may eliminate the need for a bridge since the implant looks, feels, and works like a regular tooth. An oral surgeon rather than your family dentist typically does this procedure.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Orthodontia: This type of service uses braces to align crooked teeth. Most family dentists offer orthodontia.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Cosmetic services: Bonding, whitening, and veneers are sometimes covered under certain dental policies. Most family dentists offer whitening.")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "p-4 sm:p-8" }, [
            createVNode(_component_HeadlineTwo, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($data.IntroText.Headline), 1)
              ]),
              _: 1
            }),
            createVNode(_component_ParagraphDescription, null, {
              default: withCtx(() => [
                createTextVNode(" You can purchase an individual dental insurance plan, for premiums typically ranging from $20-$60 a month. Standard policies commonly cover these routine procedures at a family dentist office. ")
              ]),
              _: 1
            }),
            createVNode(_component_BasicList, null, {
              default: withCtx(() => [
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Endodontics: Root canals, or the removal of a tooth’s decayed or diseased pulp, are the most common use of endodontics. This may require a specialist.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Periodontics: Periodontal disease comes in many forms and could end up destroying supporting bones around the teeth. Treatment may include the placement of dental implants and treatment for inflammation. A specialist is often required.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Dentures: This typically requires many extractions, making it a major procedure, possibly involving multiple visits. Certain family dentists now fit patients for dentures. Specialty offices are more familiar with the process and sometimes offer a smoother process.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Implants: Some adults who have lost a small number of teeth due to an accident or decay might get dental implants. Implants may eliminate the need for a bridge since the implant looks, feels, and works like a regular tooth. An oral surgeon rather than your family dentist typically does this procedure.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Orthodontia: This type of service uses braces to align crooked teeth. Most family dentists offer orthodontia.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Cosmetic services: Bonding, whitening, and veneers are sometimes covered under certain dental policies. Most family dentists offer whitening.")
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
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/DentalInsurancePage/EnhancedDentalPoliciesForSeniorsSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EnhancedDentalPoliciesForSeniorsSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  EnhancedDentalPoliciesForSeniorsSection as default
};
//# sourceMappingURL=EnhancedDentalPoliciesForSeniorsSection-CMwPslFl.js.map
