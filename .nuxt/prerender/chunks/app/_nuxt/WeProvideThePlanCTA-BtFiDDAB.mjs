import { useSSRContext, mergeProps } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "mx-auto p-8 mt-20 bg-blue-400 text-gray-300 dark:bg-amber-400 dark:text-gray-300 text-center" }, _attrs))}><p class="mb-4 font-extrabold tracking-tight leading-none text-white"> All From A Company That Exclusively Provides Marketing For Contractors </p><h3 class="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white"> We Provide The Plan / To Get You The Leads / <strong>That Keeps Your Schedule Full</strong></h3></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/WeProvideThePlanCTA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WeProvideThePlanCTA = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { WeProvideThePlanCTA as default };
//# sourceMappingURL=WeProvideThePlanCTA-BtFiDDAB.mjs.map
