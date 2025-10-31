import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  name: "Basic List Item",
  props: {
    strong: String,
    text: String
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<li${ssrRenderAttrs(mergeProps({ class: "mb-4 text-lg font-normal text-gray-500 lg:text-xl" }, _attrs))}><strong class="text-gray-500 lg:text-xl dark:text-gray-400">${ssrInterpolate($props.strong)}</strong> ${ssrInterpolate($props.text)}</li>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/html/BasicListItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_6 as default
};
//# sourceMappingURL=BasicListItem-DxQvv3r_.js.map
