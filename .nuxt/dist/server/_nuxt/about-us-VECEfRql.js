import __nuxt_component_0 from "./PatternSection-Bu0o2535.js";
import __nuxt_component_1 from "./AboutPageHeroSection-DLUscXR8.js";
import __nuxt_component_2 from "./AboutAmerusFinancialSection-D2XAZ328.js";
import __nuxt_component_3 from "./MeetTheTeamSection-BgoxL_Jh.js";
import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./SectionContainer-CRG4W3qY.js";
import "./nuxt-img-CXQw38If.js";
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
import "./BasicSection-D2ZROhe4.js";
import "./HeadlineTwo-Dj2O3Ylt.js";
import "./ParagraphDescription-L8QyXcbq.js";
import "./composables-DGJynRPd.js";
import "./GridTwoColumns-CDZGjEfF.js";
import "./HeadlineFour-nzdiqAdj.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PatternSection = __nuxt_component_0;
  const _component_AboutPageHeroSection = __nuxt_component_1;
  const _component_AboutAmerusFinancialSection = __nuxt_component_2;
  const _component_MeetTheTeamSection = __nuxt_component_3;
  _push(ssrRenderComponent(_component_PatternSection, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_AboutPageHeroSection, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_AboutAmerusFinancialSection, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_MeetTheTeamSection, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_AboutPageHeroSection),
          createVNode(_component_AboutAmerusFinancialSection),
          createVNode(_component_MeetTheTeamSection)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  aboutUs as default
};
//# sourceMappingURL=about-us-VECEfRql.js.map
