import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  name: "LaunchCard",
  props: {
    title: String,
    image: String,
    description: String,
    url: String
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="container mx-auto"><div class="flex items-stretch -mx-4"><div class="flex-1 p-4"><div class="block bg-white overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg"><div class="p-4 bg-blue-400 dark:bg-amber-400"><h2 class="mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white">${ssrInterpolate($props.title)}</h2></div><img${ssrRenderAttr("src", $props.image)}></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/cards/LaunchCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LaunchCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { LaunchCard as default };
//# sourceMappingURL=LaunchCard-CwaSrqg_.mjs.map
