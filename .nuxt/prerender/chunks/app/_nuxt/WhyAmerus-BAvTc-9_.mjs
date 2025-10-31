import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WhyAmerus",
  __ssrInlineRender: true,
  setup(__props) {
    const values = [
      {
        title: "Expert Guidance",
        description: "Licensed advisors who tailor coverage by audience and risk profile\u2014so you get what you need, not what you don\u2019t."
      },
      {
        title: "Whole-Portfolio Coverage",
        description: "From group benefits & commercial lines to personal insurance and Medicare, we coordinate it all."
      },
      {
        title: "Local & Responsive",
        description: "Based in Lakeland, FL with fast quotes, proactive reviews, and clear communication."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "py-16 bg-white",
        "aria-labelledby": "value-props"
      }, _attrs))}><div class="container mx-auto px-4"><div class="text-center mb-12"><h2 id="value-props" class="text-3xl md:text-4xl font-bold"> Why Amerus </h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(values, (item, i) => {
        _push(`<div class="rounded-lg border bg-white shadow-sm p-6 text-center transition-all duration-300 hover:shadow-lg"><h3 class="text-xl font-semibold mb-3">${ssrInterpolate(item.title)}</h3><p class="text-gray-600">${ssrInterpolate(item.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HomePage/WhyAmerus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=WhyAmerus-BAvTc-9_.mjs.map
