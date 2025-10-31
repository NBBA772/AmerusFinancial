import { _ as __nuxt_component_2 } from "./nuxt-img-CXQw38If.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
import "radix3";
import "cookie-es";
import "destr";
import "ohash";
const _sfc_main = {
  name: "IndustryCard",
  props: {
    title: String,
    image: String,
    description: String,
    url: String
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtImg = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="container mx-auto"><div class="flex items-stretch -mx-4"><div class="flex-1 p-4"><div class="block overflow-hidden rounded-t-lg rounded-b-lg h-full shadow-lg"><div class="p-4 bg-blue-400 dark:bg-amber-400 min-h-24"><h2 class="mt-2 mb-2 font-bold text-2xl font-Heading text-center text-white">${ssrInterpolate($props.title)}</h2></div><div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "min-w-64",
    format: "webp",
    src: $props.image,
    sizes: "sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px",
    alt: "Bus Driver",
    quality: "80",
    loading: "lazy"
  }, null, _parent));
  _push(`</div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/cards/IndustryCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_4 as default
};
//# sourceMappingURL=IndustryCard-DDVm-MAg.js.map
