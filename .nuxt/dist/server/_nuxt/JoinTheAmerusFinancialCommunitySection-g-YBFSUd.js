import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_2 from "./ParagraphDescription-L8QyXcbq.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  name: "Industries We Serve",
  data() {
    return {
      IntroText: {
        SubHeading: "Relying Solely On Referrals And Word Of Mouth Is No Longer Enough For Businesses. Smart Business Owners Now Integrate Digital Marketing Into Their Marketing Plan",
        Heading: "Join the Amerus Financial Community: Building Trust and Confidence in Your Future",
        description: "In alignment with our values of trust and integrity, we collaborate with premier industry carriers to provide you with the best-in-class insurance options. By choosing Amerus Financial, you're not just securing your future; you're joining a community built on reliability and dedication. Schedule a consultation with one of our approachable advisors today, and let's design an insurance plan perfectly tailored to your needs. Together, we'll navigate life's uncertainties with confidence and assurance."
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BasicSection = __nuxt_component_0;
  const _component_HeadlineTwo = __nuxt_component_1;
  const _component_ParagraphDescription = __nuxt_component_2;
  _push(ssrRenderComponent(_component_BasicSection, mergeProps({ class: "container mx-auto mt-20" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-4 pb-8 sm:px-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_HeadlineTwo, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($data.IntroText.Heading)}`);
            } else {
              return [
                createTextVNode(toDisplayString($data.IntroText.Heading), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ParagraphDescription, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($data.IntroText.description)}`);
            } else {
              return [
                createTextVNode(toDisplayString($data.IntroText.description), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "px-4 pb-8 sm:px-8" }, [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HomePage/JoinTheAmerusFinancialCommunitySection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JoinTheAmerusFinancialCommunitySection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  JoinTheAmerusFinancialCommunitySection as default
};
//# sourceMappingURL=JoinTheAmerusFinancialCommunitySection-g-YBFSUd.js.map
