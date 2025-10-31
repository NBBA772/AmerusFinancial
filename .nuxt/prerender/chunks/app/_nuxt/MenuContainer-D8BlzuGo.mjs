import { useSSRContext, mergeProps } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "navbar sticky top-0 relative bg-gray-100 dark:bg-gray-900 shadow-md z-50" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6"><div class="flex justify-between items-center border-b-2 border-gray-100">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/containers/MenuContainer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=MenuContainer-D8BlzuGo.mjs.map
