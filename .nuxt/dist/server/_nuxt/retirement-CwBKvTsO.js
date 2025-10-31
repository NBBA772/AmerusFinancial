import __nuxt_component_0 from "./PatternSection-Bu0o2535.js";
import __nuxt_component_1 from "./HomepageHeroSection-uUHQMeWN.js";
import _sfc_main$1 from "./RetirementCalculator-DzhefDoK.js";
import _sfc_main$2 from "./CallToAction-CmwVfqHS.js";
import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./SectionContainer-CRG4W3qY.js";
import "./GridTwoColumns-CDZGjEfF.js";
import "./ParagraphSubHeadingHero-CqCgEloW.js";
import "./HeadlineOneHero-B_BgiMME.js";
import "./ParagraphDescriptionHero-BUKcd6HV.js";
import "./ContactButtons-DUFZbfzJ.js";
import "./nuxt-link-DuPix_nQ.js";
import "ufo";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "defu";
import "klona";
import "devalue";
import "radix3";
import "cookie-es";
import "destr";
import "ohash";
import "./HomePageQuoteForm-CDFA9csT.js";
import "./MultiStepForm-CmTdGKHp.js";
import "./RetirementBreakdown-C4KkAehg.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PatternSection = __nuxt_component_0;
  const _component_HomepageHeroSection = __nuxt_component_1;
  const _component_RetirementCalculator = _sfc_main$1;
  const _component_CallToAction = _sfc_main$2;
  _push(ssrRenderComponent(_component_PatternSection, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HomepageHeroSection, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_RetirementCalculator, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_CallToAction, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HomepageHeroSection),
          createVNode(_component_RetirementCalculator),
          createVNode(_component_CallToAction)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/retirement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const retirement = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  retirement as default
};
//# sourceMappingURL=retirement-CwBKvTsO.js.map
