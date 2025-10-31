import __nuxt_component_0 from './BasicSection-D2ZROhe4.mjs';
import __nuxt_component_1 from './HeadlineTwo-Dj2O3Ylt.mjs';
import __nuxt_component_3 from './BasicList-CPgeoXnc.mjs';
import __nuxt_component_4 from './ListItems-DfeHrqGv.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/server-renderer/index.mjs';
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
        Headline: "There are some important factors in determining the cost of your group health insurance coverage.",
        description: "Amerus Financial Group operates as an independant insurance agency with a focus on Health Insurance, Annuities, Life Insurance, and Employee Benefits. Our goal is to forge lasting connections with our clients, a commitment facilitated by our outstanding customer service. In line with this, we proudly collaborate with premier carriers in the industry, specifically selecting those whose business ideals align seamlessly with ours."
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BasicSection = __nuxt_component_0;
  const _component_HeadlineTwo = __nuxt_component_1;
  const _component_BasicList = __nuxt_component_3;
  const _component_ListItems = __nuxt_component_4;
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
        _push2(ssrRenderComponent(_component_BasicList, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<strong${_scopeId3}>The size of your group:</strong> Insurance works by the law of the large numbers. The larger your group the better chance you will receive lower rates. That is why some small groups may be better off to join an organization like NBBA to take advantage of group buynig power.`);
                  } else {
                    return [
                      createVNode("strong", null, "The size of your group:"),
                      createTextVNode(" Insurance works by the law of the large numbers. The larger your group the better chance you will receive lower rates. That is why some small groups may be better off to join an organization like NBBA to take advantage of group buynig power.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<strong${_scopeId3}>The health of your group:</strong> Even though your business cannot be turned down for pre-existing conditiong there is a chance that you may qualify for better rates if your employees are relatively healthy.`);
                  } else {
                    return [
                      createVNode("strong", null, "The health of your group:"),
                      createTextVNode(" Even though your business cannot be turned down for pre-existing conditiong there is a chance that you may qualify for better rates if your employees are relatively healthy.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<strong${_scopeId3}>The location of your group:</strong> Each state and region may have different ratings based on a of community rating factors.`);
                  } else {
                    return [
                      createVNode("strong", null, "The location of your group:"),
                      createTextVNode(" Each state and region may have different ratings based on a of community rating factors.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListItems, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<strong${_scopeId3}>The age of your group:</strong> The average age of your group will have a major roll to play inn determing the overall cost of your insurance coverage.`);
                  } else {
                    return [
                      createVNode("strong", null, "The age of your group:"),
                      createTextVNode(" The average age of your group will have a major roll to play inn determing the overall cost of your insurance coverage.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createVNode("strong", null, "The size of your group:"),
                    createTextVNode(" Insurance works by the law of the large numbers. The larger your group the better chance you will receive lower rates. That is why some small groups may be better off to join an organization like NBBA to take advantage of group buynig power.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createVNode("strong", null, "The health of your group:"),
                    createTextVNode(" Even though your business cannot be turned down for pre-existing conditiong there is a chance that you may qualify for better rates if your employees are relatively healthy.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createVNode("strong", null, "The location of your group:"),
                    createTextVNode(" Each state and region may have different ratings based on a of community rating factors.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createVNode("strong", null, "The age of your group:"),
                    createTextVNode(" The average age of your group will have a major roll to play inn determing the overall cost of your insurance coverage.")
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
          createVNode("div", { class: "px-4 sm:px-8" }, [
            createVNode(_component_HeadlineTwo, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($data.IntroText.Headline), 1)
              ]),
              _: 1
            }),
            createVNode(_component_BasicList, null, {
              default: withCtx(() => [
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createVNode("strong", null, "The size of your group:"),
                    createTextVNode(" Insurance works by the law of the large numbers. The larger your group the better chance you will receive lower rates. That is why some small groups may be better off to join an organization like NBBA to take advantage of group buynig power.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createVNode("strong", null, "The health of your group:"),
                    createTextVNode(" Even though your business cannot be turned down for pre-existing conditiong there is a chance that you may qualify for better rates if your employees are relatively healthy.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createVNode("strong", null, "The location of your group:"),
                    createTextVNode(" Each state and region may have different ratings based on a of community rating factors.")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListItems, null, {
                  default: withCtx(() => [
                    createVNode("strong", null, "The age of your group:"),
                    createTextVNode(" The average age of your group will have a major roll to play inn determing the overall cost of your insurance coverage.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/GroupHealthPage/DeterminingTheCostOfYourGroupHealthInsuranceCoverageSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DeterminingTheCostOfYourGroupHealthInsuranceCoverageSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { DeterminingTheCostOfYourGroupHealthInsuranceCoverageSection as default };
//# sourceMappingURL=DeterminingTheCostOfYourGroupHealthInsuranceCoverageSection-Dt1aZnUH.mjs.map
