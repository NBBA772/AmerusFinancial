import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  name: "IndustryCard",
  props: {
    title: String,
    image: String,
    description: String
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><div class="block overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100"><div class="p-4 bg-blue-400 dark:bg-amber-400"><h2 class="mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white">${ssrInterpolate($props.title)}</h2></div><p class="text-md text-center p-3">${ssrInterpolate($props.description)}</p><div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/cards/ServiceCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_4 as default
};
//# sourceMappingURL=ServiceCard-Drm7I29y.js.map
