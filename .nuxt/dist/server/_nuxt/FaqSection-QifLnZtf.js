import __nuxt_component_0 from "./Icon-6AEq6jga.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "FaqSection",
  __ssrInlineRender: true,
  setup(__props) {
    const faqs = [
      {
        q: "Do you charge broker fees?",
        a: "We are compensated by carriers in most cases. If a fee ever applies, we’ll disclose it upfront in writing."
      },
      {
        q: "Can you review my current policies?",
        a: "Yes. We offer complimentary policy reviews to identify coverage gaps and potential savings."
      },
      {
        q: "Do you serve areas outside Lakeland?",
        a: "Yes, we serve clients across Florida and can advise on multi-location needs."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "py-16 bg-gray-50",
        id: "faq",
        "aria-labelledby": "faq-h2"
      }, _attrs))}><div class="container mx-auto px-4 max-w-3xl"><h2 id="faq-h2" class="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center"> Frequently Asked Questions </h2><div class="space-y-4"><!--[-->`);
      ssrRenderList(faqs, (item, i) => {
        _push(`<details class="group rounded-lg border border-gray-200 bg-white shadow-sm p-4"><summary class="cursor-pointer text-lg font-semibold text-gray-800 flex justify-between items-center">${ssrInterpolate(item.q)} `);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:chevron-down",
          class: "w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
        }, null, _parent));
        _push(`</summary><p class="mt-2 text-gray-600">${ssrInterpolate(item.a)}</p></details>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HomePage/FaqSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=FaqSection-QifLnZtf.js.map
