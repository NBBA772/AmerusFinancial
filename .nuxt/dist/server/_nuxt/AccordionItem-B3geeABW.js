import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AccordionItem",
  __ssrInlineRender: true,
  props: {
    term: {},
    definition: {}
  },
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border rounded-lg overflow-hidden" }, _attrs))} data-v-6e3794c4><button class="w-full flex justify-between items-center p-4 font-semibold text-left bg-gray-100 hover:bg-gray-200" data-v-6e3794c4>${ssrInterpolate(_ctx.term)} <span class="${ssrRenderClass(["transform transition-transform duration-300", isOpen.value ? "rotate-180" : ""])}" data-v-6e3794c4> ▼ </span></button><div style="${ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="p-4 bg-white text-gray-700" data-v-6e3794c4>${ssrInterpolate(_ctx.definition)}</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/glossary/AccordionItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6e3794c4"]]);
export {
  __nuxt_component_4 as default
};
//# sourceMappingURL=AccordionItem-B3geeABW.js.map
