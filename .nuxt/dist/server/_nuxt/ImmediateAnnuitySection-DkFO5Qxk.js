import __nuxt_component_0 from "./BasicSection-D2ZROhe4.js";
import __nuxt_component_1 from "./HeadlineTwo-Dj2O3Ylt.js";
import __nuxt_component_2 from "./ParagraphDescription-L8QyXcbq.js";
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
        Headline: "Immediate Annuity",
        description: "This type of annuity is usually used by someone who is already in retirement, getting ready to retire, or just came into a windfall such as an inheritance or lottery and they want to protect their money while providing an income for themselves each month. An immediate annuity needs a large investment to be beneficial. The average age someone buys this type of annuity is usually between 65 and 70 years old. If you had a million dollars cash laying around and you put it into this type of annuity, you would immediately start collecting monthly payments that would total about $65,000 a year for 20 years (or life depending on the type you purchase). You’d earn your principal back in about 15 years."
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
          createVNode("div", { class: "p-4 sm:p-8" }, [
            createVNode(_component_HeadlineTwo, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($data.IntroText.Headline), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AnnuitiesPage/ImmediateAnnuitySection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ImmediateAnnuitySection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ImmediateAnnuitySection as default
};
//# sourceMappingURL=ImmediateAnnuitySection-DkFO5Qxk.js.map
