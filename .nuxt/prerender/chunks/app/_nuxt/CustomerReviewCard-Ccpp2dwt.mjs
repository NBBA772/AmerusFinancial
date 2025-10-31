import { useSSRContext, mergeProps } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  name: "CustomerReviewCard",
  props: {
    review: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col max-w-sm mx-4 my-6 bg-gray-50 shadow-lg h-full" }, _attrs))}><div class="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50 dark:bg-gray-900"><p class="relative px-6 py-1 text-lg italic text-center dark:text-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" class="w-8 h-8 text-blue-400 dark:text-amber-400"><path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path><path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path></svg> ${ssrInterpolate($props.review.testimonial)} <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" class="absolute right-0 w-8 h-8 text-blue-400 dark:text-amber-400"><path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path><path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path></svg></p></div><div class="flex flex-col items-center justify-center p-8 rounded-b-lg text-gray-100 bg-[#30BCFE] mt-auto"><p class="text-xl font-semibold leading-tight">${ssrInterpolate($props.review.name)}</p><p class="text-sm uppercase">${ssrInterpolate($props.review.company)}</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/cards/CustomerReviewCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=CustomerReviewCard-Ccpp2dwt.mjs.map
