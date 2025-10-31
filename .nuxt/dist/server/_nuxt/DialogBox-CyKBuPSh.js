import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DialogBox",
  __ssrInlineRender: true,
  props: {
    hide: Boolean,
    dismissText: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative z-10 dark:text-white",
        "aria-labelledby": "modal-title",
        role: "dialog",
        "aria-modal": "false",
        hidden: __props.hide
      }, _attrs))}><div class="fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-opacity-90 transition-opacity"></div><div class="sm:fixed h-3/4 inset-0 z-10 overflow-y-auto"><div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"><div class="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"><div class="bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4"><div class="sm:flex sm:items-start">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><div class="dark:bg-black bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"><button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 dark:bg-black dark:text-white bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">${ssrInterpolate(__props.dismissText)}</button></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/DialogBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=DialogBox-CyKBuPSh.js.map
