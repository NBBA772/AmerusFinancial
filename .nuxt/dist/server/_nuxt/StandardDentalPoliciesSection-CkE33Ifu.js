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
        Headline: "STANDARD DENTAL POLICIES",
        description: "As we grow older, decay, inflammation, and disease are more prone to affect our gums and teeth. You may need a dental professional, experienced in Senior Dental Health problems, like osteoporosis, diabetes, heart disease, stroke, and respiratory disease. According to the Columbia University College of Dental Medicine and the American Dental Association these conditions can also affect dental health and vice-versa, dental health can affect these conditions. That is the reason why it is extremely important that you have a Dental Insurance Plan that is tailored to the needs of seniors. Not all Dental Plans are created equal and may have exclusions and limitations that come as an unwelcome surprise when you get your bill. Talk to an expert who can ask you relevant questions and customize a plan to meet your individual needs. Give Amerus Financial a Call today at 1-888-441-7891"
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
                    _push4(`Basic cleanings and exams: Most policies entitle you to a free basic cleaning and comprehensive exam twice a year.`);
                  } else {
                    return [
                      createTextVNode("Basic cleanings and exams: Most policies entitle you to a free basic cleaning and comprehensive exam twice a year.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`X-rays: Dentists periodically take bitewing X-rays of your teeth. X-rays may be fully covered, or you might make a copayment depending on your dental insurance plan,. Additional X-rays of your mouth may require a copayment, coinsurance, or deductible.`);
                  } else {
                    return [
                      createTextVNode("X-rays: Dentists periodically take bitewing X-rays of your teeth. X-rays may be fully covered, or you might make a copayment depending on your dental insurance plan,. Additional X-rays of your mouth may require a copayment, coinsurance, or deductible.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Fillings and extractions: Fillings and extractions usually require a copayment, coinsurance or deductible in most dental insurance plans.`);
                  } else {
                    return [
                      createTextVNode("Fillings and extractions: Fillings and extractions usually require a copayment, coinsurance or deductible in most dental insurance plans.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Certain Procedures : Standard individual dental insurance plans occasionally include partial coverage on some restorative procedures, such as root canals, crowns, bridges, and deep cleanings. Your plan may require a copayment, coinsurance or deductible for procedures and there may be services that are not covered at all. So you know what to expect at your appointment, please carefully review your insurance plan or speak to your insurance agent before your dental appointment. You might need to search for a policy that covers more extensive services.`);
                  } else {
                    return [
                      createTextVNode("Certain Procedures : Standard individual dental insurance plans occasionally include partial coverage on some restorative procedures, such as root canals, crowns, bridges, and deep cleanings. Your plan may require a copayment, coinsurance or deductible for procedures and there may be services that are not covered at all. So you know what to expect at your appointment, please carefully review your insurance plan or speak to your insurance agent before your dental appointment. You might need to search for a policy that covers more extensive services.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Basic cleanings and exams: Most policies entitle you to a free basic cleaning and comprehensive exam twice a year.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("X-rays: Dentists periodically take bitewing X-rays of your teeth. X-rays may be fully covered, or you might make a copayment depending on your dental insurance plan,. Additional X-rays of your mouth may require a copayment, coinsurance, or deductible.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Fillings and extractions: Fillings and extractions usually require a copayment, coinsurance or deductible in most dental insurance plans.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Certain Procedures : Standard individual dental insurance plans occasionally include partial coverage on some restorative procedures, such as root canals, crowns, bridges, and deep cleanings. Your plan may require a copayment, coinsurance or deductible for procedures and there may be services that are not covered at all. So you know what to expect at your appointment, please carefully review your insurance plan or speak to your insurance agent before your dental appointment. You might need to search for a policy that covers more extensive services.")
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
                    createTextVNode("Basic cleanings and exams: Most policies entitle you to a free basic cleaning and comprehensive exam twice a year.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("X-rays: Dentists periodically take bitewing X-rays of your teeth. X-rays may be fully covered, or you might make a copayment depending on your dental insurance plan,. Additional X-rays of your mouth may require a copayment, coinsurance, or deductible.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Fillings and extractions: Fillings and extractions usually require a copayment, coinsurance or deductible in most dental insurance plans.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createTextVNode("Certain Procedures : Standard individual dental insurance plans occasionally include partial coverage on some restorative procedures, such as root canals, crowns, bridges, and deep cleanings. Your plan may require a copayment, coinsurance or deductible for procedures and there may be services that are not covered at all. So you know what to expect at your appointment, please carefully review your insurance plan or speak to your insurance agent before your dental appointment. You might need to search for a policy that covers more extensive services.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/DentalInsurancePage/StandardDentalPoliciesSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const StandardDentalPoliciesSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  StandardDentalPoliciesSection as default
};
//# sourceMappingURL=StandardDentalPoliciesSection-CkE33Ifu.js.map
