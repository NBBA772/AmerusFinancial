import { useSSRContext, mergeProps } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  name: "EmbedYoutube",
  props: {
    videoSrc: String
  },
  data() {
    return {
      embedVideo: this.videoSrc
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "aspect-video pb-8" }, _attrs))}><iframe class="w-full h-full"${ssrRenderAttr("src", $data.embedVideo)} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/EmbedYoutube.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EmbedYoutube = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { EmbedYoutube as default };
//# sourceMappingURL=EmbedYoutube-DGECeLaq.mjs.map
