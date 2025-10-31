import _sfc_main$1 from './RetirementBreakdown-C4KkAehg.mjs';
import { ref, computed, mergeProps, useSSRContext } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "RetirementCalculator",
  __ssrInlineRender: true,
  setup(__props) {
    const currentAge = ref(30);
    const retirementAge = ref(67);
    const currentSavings = ref(1e4);
    const monthlyContribution = ref(500);
    const annualReturn = ref(6);
    const targetAmount = ref(15e5);
    const result = ref(false);
    const haveAmount = ref(0);
    const needAmount = ref(0);
    const gap = ref(null);
    const suggestedContribution = ref(0);
    const formattedHave = computed(
      () => haveAmount.value.toLocaleString(void 0, { maximumFractionDigits: 0 })
    );
    const formattedNeed = computed(
      () => needAmount.value.toLocaleString(void 0, { maximumFractionDigits: 0 })
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RetirementBreakdown = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-gray-50" }, _attrs))}><div class="container mx-auto px-4 max-w-5xl"><h2 class="text-3xl font-bold text-gray-900 mb-4"> Retirement Calculator </h2><p class="text-gray-600 mb-8"> Plan for your future by calculating how much you need to save for a comfortable retirement. </p><div class="lg:flex lg:gap-8"><form class="bg-white shadow-lg rounded-xl p-8 space-y-4 lg:flex-1"><div><label for="currentAge" class="block text-sm font-medium text-gray-700">Current Age</label><input type="number" id="currentAge"${ssrRenderAttr("value", currentAge.value)} class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" min="0"></div><div><label for="retirementAge" class="block text-sm font-medium text-gray-700">Retirement Age</label><input type="number" id="retirementAge"${ssrRenderAttr("value", retirementAge.value)} class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" min="0"></div><div><label for="currentSavings" class="block text-sm font-medium text-gray-700">Current Savings ($)</label><input type="number" id="currentSavings"${ssrRenderAttr("value", currentSavings.value)} class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" min="0"></div><div><label for="monthlyContribution" class="block text-sm font-medium text-gray-700">Monthly Contribution ($)</label><input type="number" id="monthlyContribution"${ssrRenderAttr("value", monthlyContribution.value)} class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" min="0"></div><div><label for="annualReturn" class="block text-sm font-medium text-gray-700">Expected Annual Return (%)</label><input type="number" id="annualReturn"${ssrRenderAttr("value", annualReturn.value)} class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" min="0" step="0.1"></div><div><label for="targetAmount" class="block text-sm font-medium text-gray-700">Target Retirement Savings ($)</label><input type="number" id="targetAmount"${ssrRenderAttr("value", targetAmount.value)} class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" min="0"></div><button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition"> Calculate </button></form>`);
      if (result.value) {
        _push(`<div class="lg:flex-1 mt-8 lg:mt-0 bg-white shadow-lg rounded-xl p-6"><div class="mb-4 text-center font-medium text-gray-600">Retirement Savings at Age ${ssrInterpolate(retirementAge.value)}</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="bg-gray-100 p-4 rounded-lg text-center"><div class="text-gray-600 mb-1">What you&#39;ll have</div><p class="text-2xl font-bold text-gray-900">$${ssrInterpolate(formattedHave.value)}</p></div><div class="bg-gray-100 p-4 rounded-lg text-center"><div class="text-gray-600 mb-1">What you&#39;ll need</div><p class="text-2xl font-bold text-gray-900">$${ssrInterpolate(formattedNeed.value)}</p></div></div>`);
        if (gap.value !== null) {
          _push(`<div class="mt-4 text-center"><p class="${ssrRenderClass([gap.value >= 0 ? "text-green-600" : "text-red-600", "text-lg font-medium"])}">${ssrInterpolate(gap.value >= 0 ? "You are on track!" : `You need $${Math.abs(gap.value).toLocaleString()} more to reach your goal.`)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (result.value) {
          _push(ssrRenderComponent(_component_RetirementBreakdown, {
            result: result.value,
            formattedHave: formattedHave.value,
            formattedNeed: formattedNeed.value,
            monthlyContribution: monthlyContribution.value,
            suggestedContribution: suggestedContribution.value,
            ageSavingsRunsOutCurrent: 80,
            ageSavingsRunsOutTarget: 95
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RetirementCalculator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=RetirementCalculator-DzhefDoK.mjs.map
