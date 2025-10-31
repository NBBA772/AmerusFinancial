import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "RetirementBreakdown",
  __ssrInlineRender: true,
  props: {
    result: Boolean,
    formattedHave: String,
    formattedNeed: String,
    monthlyContribution: Number,
    suggestedContribution: Number,
    ageSavingsRunsOutCurrent: Number,
    ageSavingsRunsOutTarget: Number
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.result) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-8 bg-white shadow-lg rounded-xl p-6" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="space-y-4"><p class="text-lg font-semibold text-gray-700">Current Retirement Plan</p><div class="border-t border-gray-200 pt-2 flex justify-between"><span>Total retirement savings</span><span class="font-bold text-gray-900">$${ssrInterpolate(__props.formattedHave)}</span></div><div class="border-t border-gray-200 pt-2 flex justify-between"><span>Monthly contribution</span><span class="font-bold text-gray-900">$${ssrInterpolate(__props.monthlyContribution.toLocaleString())}</span></div><div class="border-t border-gray-200 pt-2 flex justify-between"><span>Age retirement savings runs out</span><span class="font-bold text-gray-900">${ssrInterpolate(__props.ageSavingsRunsOutCurrent)}</span></div></div><div class="space-y-4"><p class="text-lg font-semibold text-gray-700">Target Retirement Plan</p><div class="border-t border-gray-200 pt-2 flex justify-between"><span>Total retirement savings</span><span class="font-bold text-gray-900">$${ssrInterpolate(__props.formattedNeed)}</span></div><div class="border-t border-gray-200 pt-2 flex justify-between items-center"><span>Monthly contribution</span><span class="font-bold text-gray-900">$${ssrInterpolate(__props.suggestedContribution.toLocaleString())}</span></div><div class="border-t border-gray-200 pt-2 flex justify-between"><span>Age retirement savings runs out</span><span class="font-bold text-gray-900">${ssrInterpolate(__props.ageSavingsRunsOutTarget)}</span></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RetirementBreakdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=RetirementBreakdown-C4KkAehg.js.map
