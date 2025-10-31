import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./nuxt3-fjLR_weF.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-4 overflow-y-auto border-2 border-sky-500 w-1/6 h-screen" }, _attrs))}><div class="bg-slate-200 h-20 mb-10 flex justify-center"><img class="h-20"${ssrRenderAttr("src", _imports_0)} alt="nuxt image"></div><ul class="space-y-2"><li></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/player.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const player = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  player as default
};
//# sourceMappingURL=player-j1PGwvww.js.map
