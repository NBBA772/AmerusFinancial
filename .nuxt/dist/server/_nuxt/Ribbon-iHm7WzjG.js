import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  name: "Ribbon"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "mx-auto p-8 bg-blue-400 text-gray-300 dark:bg-amber-400 dark:text-gray-300 text-center" }, _attrs))}><p class="mb-4 font-extrabold tracking-tight leading-none text-white"> Partnering With Us Is Like </p><h3 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white"> Having A Full Time Marketing Employee In Your Office! </h3><p class="mb-4 font-extrabold tracking-tight leading-none text-white font-black underline"> at Virtually No Cost! </p></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/Ribbon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Ribbon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Ribbon as default
};
//# sourceMappingURL=Ribbon-iHm7WzjG.js.map
